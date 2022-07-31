#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:raferlyan/raferlyan.github.io.git master:gh_page

cd -

