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