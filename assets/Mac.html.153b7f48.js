import{_ as n,o as s,c as e,d as a}from"./app.f005015a.js";const l={},i=a(`<h2 id="\u663E\u793A\u9690\u85CF\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u9690\u85CF\u6587\u4EF6" aria-hidden="true">#</a> \u663E\u793A\u9690\u85CF\u6587\u4EF6</h2><p>\u6253\u5F00\u7EC8\u7AEF\uFF0C\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>defaults <span class="token function">write</span> com.apple.finder AppleShowAllFiles -boolean <span class="token boolean">true</span> <span class="token punctuation">;</span> <span class="token function">killall</span> Finder

<span class="token comment"># \u5982\u679C\u60F3\u518D\u6B21\u9690\u85CF\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u7684\u8BDD\uFF0C\u5C06\u4E0A\u8FF0\u547D\u4EE4\u66FF\u6362\u6210</span>
defaults <span class="token function">write</span> com.apple.finder AppleShowAllFiles -boolean <span class="token boolean">false</span> <span class="token punctuation">;</span> <span class="token function">killall</span> Finder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770Bpython\u7684\u5B89\u88C5\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770Bpython\u7684\u5B89\u88C5\u8DEF\u5F84" aria-hidden="true">#</a> \u67E5\u770BPython\u7684\u5B89\u88C5\u8DEF\u5F84</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># python</span>
where python

<span class="token comment"># python3</span>
where python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker\u5B89\u88C5mysql5-7" tabindex="-1"><a class="header-anchor" href="#docker\u5B89\u88C5mysql5-7" aria-hidden="true">#</a> docker\u5B89\u88C5MySQL5.7</h2><p>\u53C2\u8003\u94FE\u63A5\uFF1Ahttps://blog.51cto.com/u_15075521/4358859</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull --platform linux/x86_64 mysql:5.7

<span class="token function">docker</span> run -itd --name mysql57 -v /Users/raferlyan/mysql-data:/var/lib/mysql -p <span class="token number">3306</span>:3306 -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root mysql:5.7

<span class="token builtin class-name">cd</span> /Users/raferlyan/mysql-data 

<span class="token function">rm</span> -rf ib_logfile0 ib_logfile1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[i];function c(r,o){return s(),e("div",null,d)}var p=n(l,[["render",c],["__file","Mac.html.vue"]]);export{p as default};
