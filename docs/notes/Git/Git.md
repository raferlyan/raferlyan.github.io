# Git教程

> 怎么读？   /gɪt/

## 什么是 Git ?

百度百科：https://baike.baidu.com/item/GIT/12647237?fr=aladdin

一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。



官网：https://git-scm.com/

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## 安装

**macOS**

```bash
brew install git
```

**Windows**

```bash
https://github.com/git-for-windows/git/releases/download/v2.37.1.windows.1/Git-2.37.1-64-bit.exe
```

## 配置信息

- 配置个人的用户名称和电子邮件地址：

```bash
git config --global user.name "raferlyan"
git config --global user.email "raferlyan@163.com"
```

> `--global` ，以后你所有的项目都会默认使用这里配置的用户信息。

- 查看配置信息

```bash
git config --list
```

## 工作原理







## Github

官网：https://github.com/



## Gitee

官网：https://gitee.com/



## GitLab

官网：https://about.gitlab.com/

下载GitLab镜像

```bash
docker pull gitlab/gitlab-ce
```



```bash
docker run --detach \
  --publish 10443:443 --publish 1080:80 --publish 1022:22 \
  --name gitlab \
  --restart always \
  --volume /mydata/gitlab/config:/etc/gitlab \
  --volume /mydata/gitlab/logs:/var/log/gitlab \
  --volume /mydata/gitlab/data:/var/opt/gitlab \
  gitlab/gitlab-ce:latest
```





```bash
# 开启1080端口
firewall-cmd --zone=public --add-port=1080/tcp --permanent
# 重启防火墙才能生效
systemctl restart firewalld
# 查看已经开放的端口
firewall-cmd --list-ports
```

