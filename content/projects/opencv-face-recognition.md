# OpenCV 实时人脸识别

## 项目概述

本仓库是一个 **Python + C++ 双轨道** OpenCV 学习与实验项目，核心流程为：摄像头采集 → **YuNet** 检测人脸 → **SFace** 提取特征 → 与本地人脸库做余弦相似度匹配，实现实时识别。同时包含直方图、轮廓、形态学等图像处理入门脚本，以及基于 Visual Studio 2022 + CMake + vcpkg 的 C++ 编译流程，便于在 Python 验证算法后向 C++ 产品化迁移。

## 核心功能

| 模块 | 说明 |
| --- | --- |
| 实时人脸识别 | 摄像头 → YuNet 检测 → SFace 特征 → 本地人脸库匹配 |
| 人脸库管理 | 注册 / 更新 / 删除 / 清空，支持运行时按键与 CLI |
| Python 教程脚本 | 摄像头预览、图像读写、叠加、直方图、轮廓、腐蚀等 |
| C++ 工程 | CMake + vcpkg 一键编译（可选） |
| 环境初始化 | `setup.ps1` 自动创建虚拟环境、安装依赖、下载 ONNX 模型 |

**运行时按键：** `q` 退出 · `r` 注册当前最大人脸 · `d` 删除指定姓名 · `c` 清空人脸库

## 技术实现

### 人脸检测与识别

- **检测：** YuNet（`FaceDetectorYN`），ONNX 模型由 OpenCV Zoo 按需下载
- **识别：** SFace（`FaceRecognizerSF`），128 维特征向量 + 余弦相似度（默认阈值约 0.363，可调）

### 人脸库

- 特征持久化在 `data/faces/gallery.json`（已 `.gitignore`，不上传 GitHub）
- 仓库仅提供 `gallery.json.example` 模板；生物识别数据仅存本地

### Python 工程结构（节选）

```
opencv-face-recognition/
├── pycode/face_recognition.py   # 主程序
├── pycode/face_gallery.py       # 人脸库读写与匹配
├── pycode/manage_faces.py       # CLI 管理
├── scripts/setup.ps1            # 一键初始化
├── models/                      # YuNet / SFace ONNX（setup 后生成）
└── cpp/                         # C++ 示例（CMake + vcpkg）
```

### 快速开始（Windows）

```powershell
git clone https://github.com/yaoniexs1226/opencv-face-recognition.git
cd opencv-face-recognition
.\scripts\setup.ps1
.venv\Scripts\python.exe pycode\verify_opencv.py
.venv\Scripts\python.exe pycode\face_recognition.py
```

常用参数示例：`--camera 1`（外接摄像头）、`--threshold 0.40`（更严格匹配）、`--backend msmf`。

## 环境要求

| 组件 | 说明 |
| --- | --- |
| Python 3.10+ | 主开发语言 |
| opencv-python ≥ 4.10 | 图像处理与人脸模块 |
| numpy、matplotlib | 数组运算与直方图示例 |
| Visual Studio 2022 | C++ 编译（可选） |

单元测试：`.venv\Scripts\python.exe -m unittest discover -s tests -v`

## 项目亮点

- 完整可运行的本地人脸识别 Demo，无需云端 API
- 脚本化模型下载与环境搭建，降低上手成本
- Python 验证与 C++ 工程并存，适合计算机视觉学习路径
- MIT 开源，文档含 [C++ 开发指南](https://github.com/yaoniexs1226/opencv-face-recognition/blob/main/docs/CPP_OPENCV_GUIDE.md) 与 HTML 项目说明

## 仓库与文档

- GitHub：<https://github.com/yaoniexs1226/opencv-face-recognition>
- 协议：MIT License
