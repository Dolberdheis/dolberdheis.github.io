# 部署静态网站到GitHub Pages

本指南将帮助你将这个静态网站部署到GitHub Pages。

## 前提条件
- 已安装Git
- 已注册GitHub账号

## 步骤1: 创建GitHub仓库
1. 登录你的GitHub账号
2. 点击右上角的"+"号，选择"New repository"
3. 仓库名称必须为：`你的用户名.github.io`（例如：`johnsmith.github.io`）
4. 勾选"Add a README file"
5. 点击"Create repository"

## 步骤2: 配置Git并推送代码
1. 打开命令行工具（Git Bash、PowerShell等）
2. 导航到项目目录：`cd f:\github`
3. 初始化Git仓库：`git init`
4. 添加所有文件：`git add .`
5. 提交更改：`git commit -m "Initial commit"`
6. 关联远程仓库：`git remote add origin https://github.com/你的用户名/你的用户名.github.io.git`
7. 推送代码：`git push -u origin main`

## 步骤3: 启用GitHub Pages
1. 进入你的GitHub仓库页面
2. 点击"Settings"选项卡
3. 在左侧菜单中选择"Pages"
4. 在"Branch"下拉菜单中选择"main"分支
5. 在"Folder"选择"/ (root)"
6. 点击"Save"

## 步骤4: 访问你的网站
- 等待1-2分钟（首次部署可能需要时间）
- 访问网址：`https://你的用户名.github.io`

## 自定义域名（可选）
1. 在GitHub Pages设置中，输入你的自定义域名
2. 前往你的域名提供商，添加DNS记录指向GitHub Pages服务器

## 注意事项
- 确保你的仓库名称格式正确：`用户名.github.io`
- 网站的入口文件必须是`index.html`
- 所有文件都应该放在仓库的根目录下
- 部署后可能需要几分钟才能访问