import{_ as a,o as n,c as s,d as e}from"./app.f005015a.js";const i={},l=e(`<h2 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> GitLab</h2><p>\u5B98\u7F51\uFF1Ahttps://about.gitlab.com/</p><p>\u4E0B\u8F7DGitLab\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --detach <span class="token punctuation">\\</span>
  --publish <span class="token number">10443</span>:443 --publish <span class="token number">1080</span>:80 --publish <span class="token number">1022</span>:22 <span class="token punctuation">\\</span>
  --name gitlab <span class="token punctuation">\\</span>
  --restart always <span class="token punctuation">\\</span>
  --volume /mydata/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>
  --volume /mydata/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span>
  --volume /mydata/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>
  gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F00\u542F1080\u7AEF\u53E3</span>
firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">1080</span>/tcp --permanent
<span class="token comment"># \u91CD\u542F\u9632\u706B\u5899\u624D\u80FD\u751F\u6548</span>
systemctl restart firewalld
<span class="token comment"># \u67E5\u770B\u5DF2\u7ECF\u5F00\u653E\u7684\u7AEF\u53E3</span>
firewall-cmd --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[l];function c(d,r){return n(),s("div",null,t)}var p=a(i,[["render",c],["__file","GitLab.html.vue"]]);export{p as default};
