# 成人Dating落地页部署指南

## 功能特性
- 双GEO支持（美国/挪威）
- A/B测试参数支持
- 响应式设计
- GDPR Cookie同意管理

## 配置说明
1. 替换联盟链接：
   - 打开 `script.js`
   - 修改第3行的 `OFFER_LINKS` 常量

2. 部署到GitHub Pages：
```bash
git add .
git commit -m "添加落地页"
git push origin main
```

3. A/B测试使用：
在URL后添加variant参数：
`https://yourdomain.com/?variant=B`

## 技术说明
- 使用GET方法传递参数（广告平台友好）
- 移动端优先设计
- 浏览器缓存策略：建议设置Cache-Control: max-age=3600