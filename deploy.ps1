param(
  [string]$CommitMessage = "chore: deploy personal website",
  [string]$Branch = "main",
  [string]$Remote = "origin",
  [string]$RemoteUrl = "",
  [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

function Write-Step {
  param([string]$Message)
  Write-Host ""
  Write-Host "==> $Message" -ForegroundColor Cyan
}

function Ensure-Command {
  param([string]$Name)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "未检测到命令: $Name，请先安装后重试。"
  }
}

Write-Step "检查运行环境"
Ensure-Command "node"
Ensure-Command "npm"
Ensure-Command "git"

Write-Step "进入脚本所在目录"
Set-Location -Path $PSScriptRoot

if (-not (Test-Path "package.json")) {
  throw "当前目录不是项目根目录（未找到 package.json）。"
}

Write-Step "检查 Git 仓库状态"
if (-not (Test-Path ".git")) {
  Write-Host "未检测到 Git 仓库，正在初始化..." -ForegroundColor Yellow
  git init
  if ($LASTEXITCODE -ne 0) {
    throw "git init 失败。"
  }
}

$remoteNames = git remote
$hasRemote = $false
if ($remoteNames) {
  $hasRemote = ($remoteNames -split "`r?`n") -contains $Remote
}

if (-not $hasRemote) {
  if (-not [string]::IsNullOrWhiteSpace($RemoteUrl)) {
    Write-Step "配置远程仓库"
    git remote add $Remote $RemoteUrl
    if ($LASTEXITCODE -ne 0) {
      throw "远程仓库配置失败：git remote add $Remote $RemoteUrl"
    }
  } else {
    Write-Host ""
    Write-Host "未检测到远程仓库 '$Remote'。" -ForegroundColor Yellow
    Write-Host "请执行以下命令后再重试：" -ForegroundColor Yellow
    Write-Host "git remote add $Remote <你的GitHub仓库地址>" -ForegroundColor Yellow
    Write-Host "或直接使用：.\deploy.ps1 -RemoteUrl <你的GitHub仓库地址>" -ForegroundColor Yellow
    throw "缺少远程仓库配置。"
  }
}

Write-Step "安装依赖（如已安装会自动复用）"
npm install
if ($LASTEXITCODE -ne 0) {
  throw "npm install 失败。"
}

if (-not $SkipBuild) {
  Write-Step "执行构建检查"
  npm run build
  if ($LASTEXITCODE -ne 0) {
    throw "构建失败，请先修复错误再部署。"
  }
}

Write-Step "提交并推送代码"
git add .

$hasChanges = (git status --porcelain)
if (-not $hasChanges) {
  Write-Host "没有检测到新变更，将直接推送当前分支。" -ForegroundColor Yellow
} else {
  git commit -m "$CommitMessage"
  if ($LASTEXITCODE -ne 0) {
    throw "git commit 失败。"
  }
}

git push -u $Remote $Branch
if ($LASTEXITCODE -ne 0) {
  throw "git push 失败。请检查分支名和仓库权限。"
}

Write-Step "部署触发成功"
Write-Host "代码已推送到 $Remote/$Branch，GitHub Actions 将自动部署。" -ForegroundColor Green
Write-Host "可在仓库 Actions 页面查看构建进度。" -ForegroundColor Green
Write-Host ""
Write-Host "常用命令示例："
Write-Host ".\deploy.ps1"
Write-Host ".\deploy.ps1 -CommitMessage ""feat: update resume content"""
Write-Host ".\deploy.ps1 -SkipBuild"
Write-Host ".\deploy.ps1 -RemoteUrl ""https://github.com/<用户名>/<仓库名>.git"""
