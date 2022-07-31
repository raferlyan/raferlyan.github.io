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