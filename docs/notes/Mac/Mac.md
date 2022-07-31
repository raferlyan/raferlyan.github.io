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


