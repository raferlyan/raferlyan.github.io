---
title: Mac Tips
date: 2022/07/31
---
##  显示隐藏文件

打开终端，输入以下命令

```bash
defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder

# 如果想再次隐藏文件和文件夹的话，将上述命令替换成
defaults write com.apple.finder AppleShowAllFiles -boolean false ; killall Finder
```



## 查看Python的安装路径

```bash
# python
where python

# python3
where python3
```



## docker安装MySQL5.7

参考链接：https://blog.51cto.com/u_15075521/4358859

```bash
docker pull --platform linux/x86_64 mysql:5.7

docker run -itd --name mysql57 -v /Users/raferlyan/mysql-data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql:5.7

cd /Users/raferlyan/mysql-data 

rm -rf ib_logfile0 ib_logfile1
```

## 终端美化

### 下载oh-my-zsh

Gitee地址：https://gitee.com/mirrors/oh-my-zsh.git

1.下完之后进入tools`cd oh-my-zsh/tools`

2.运行`sh -c ./install.sh`,这时候会在根目录（～）会有一个.oh-my-zsh文件夹出现

![image-20210108211843075](/img/008eGmZEly1gmglo3ahkxj30wi0pggxz.jpg)

> 注意，需要clone在 ～/.oh-my-zsh/plugins
:::info  
自动提醒git地址：https://gitee.com/EricDeamn/zsh-autosuggestions  
高亮git地址：https://gitee.com/skuramatata/zsh-syntax-highlighting  
最后修改.zshrc 找到plugins，添加项目名（原本有个git，每个隔一个空格即可）  
:::
![image-20210108215254520](/img/008eGmZEly1gmgmnofusqj312q0o2n2s.jpg)

- 最后source一下即可

## 删除 .DS_Store
删除项⽬中的所有.DS_Store。这会跳过不在项⽬中的 .DS_Store  
:::info
1.find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
将 .DS_Store 加⼊到 .gitignore  
2. echo .DS_Store >> ~/.gitignore  
更新项⽬  
3. git add --all  
4. git commit -m '.DS_Store banished!' 
:::
## Mac homebrew换源

```bash
# 1. 替换brew.git:
$ cd "$(brew --repo)"
# 中科大:
$ git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
# 清华:
$ git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
 
# 2. 替换homebrew-core.git:
$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
 
# 中科大:
$ git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
 
# 清华:
$ git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
 
 
# 3. 替换homebrew-bottles:
 
# 中科大:
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
$ source ~/.bash_profile
 
# 清华:
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles' >> ~/.bash_profile
 
$ source ~/.bash_profile
 
# 4. 应用：
$ brew update
```
