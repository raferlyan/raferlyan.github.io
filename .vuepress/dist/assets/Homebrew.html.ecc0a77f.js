import{_ as s,o as n,c as e,d as a}from"./app.9c4feac8.js";const i={},t=a(`<h2 id="mac-homebrew\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#mac-homebrew\u6362\u6E90" aria-hidden="true">#</a> Mac homebrew\u6362\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u66FF\u6362brew.git:</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># \u4E2D\u79D1\u5927:</span>
$ <span class="token function">git</span> remote set-url origin https://mirrors.ustc.edu.cn/brew.git
<span class="token comment"># \u6E05\u534E:</span>
$ <span class="token function">git</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
 
<span class="token comment"># 2. \u66FF\u6362homebrew-core.git:</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>/Library/Taps/homebrew/homebrew-core&quot;</span>
 
<span class="token comment"># \u4E2D\u79D1\u5927:</span>
$ <span class="token function">git</span> remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
 
<span class="token comment"># \u6E05\u534E:</span>
$ <span class="token function">git</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
 
 
<span class="token comment"># 3. \u66FF\u6362homebrew-bottles:</span>
 
<span class="token comment"># \u4E2D\u79D1\u5927:</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile
 
<span class="token comment"># \u6E05\u534E:</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
 
$ <span class="token builtin class-name">source</span> ~/.bash_profile
 
<span class="token comment"># 4. \u5E94\u7528\uFF1A</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function r(c,o){return n(),e("div",null,l)}var d=s(i,[["render",r],["__file","Homebrew.html.vue"]]);export{d as default};
