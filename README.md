# vitepress-github action CI

vitepress test github action CI

## 安装 vitepress

根据官网步骤安装， 找好本地目录，执行命令 `yarn init`初始化 package.json。然后执行`yarn add vitepress vue -D`,安装所需依赖。创建`docs`目录，在此目录下创建`index.md`,然后编辑内容即可，Layout 配置根据官方文档一步步操作即可。
然后在根目录下创建.github 文件夹，再创建 workflow 目录（注意：这两个文件夹名字固定，不能随意修改），然后创建 main.yml 文件（此文件名称可随意修改），配置内容如下：

```
name: deploy-website
# 提交到master主分支触发jobs
on:
  push:
    branches:
      - master
jobs:
  build:
    #运行到github服务器环境(docker环境)
    runs-on: ubuntu-latest
    # 任务步骤
    steps:
      # 检出相应分支下的源代码
      - uses: actions/checkout@v3
      # 安装nodejs环境
      - name: install nodejs
        uses: actions/setup-node@v3
        with:
          node-version: 14.0.0
      # 安装依赖
      - name: install deps
        run: npm install
      # 打包dist
      - name: build app
        run: sudo npm run docs:build
      # 创建gh-pages分支并打包build代码
      - name: Deploy on github-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.MY_TEMP_TOKEN }}
          publish_dir: docs/.vitepress/dist
      # 拷贝dit目录到云服务器
      - name: copy dist file with scp
        uses: garygrossgarten/github-action-scp@release
        # scp权限账号
        with:
          host: ${{secrets.REMOTE_HOST}}
          username: ${{secrets.REMOTE_USER}}
          password: ${{secrets.REMOTE_PASS}}
          port: 22
          connect_timeout: 10s
          local: "docs/.vitepress/dist"
          remote: /home/github-action
```
