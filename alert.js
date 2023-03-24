var ver = "v1.4.0 LRV / v1.4.0 LTS";
var alert = `<p><i class="fa fa-flag-o"></i> 公告：热烈庆祝 LGSE 正式版本发布！<br>
<i class="fa fa-code"></i> 当前最新版本：<span style="color: #e67e22">${ver}</span><br>
<i class="fa fa-envelope-o"></i> 访问量统计：<img src="https://badges.toozhao.com/badges/01GSN1QZ8F7H2RWHEQEZC7YY4F/blue.svg" style="height: 1em;" /></p>`;
var bar = `&nbsp;&nbsp;&nbsp;
<span class="BarElement"><i class="fa fa-list"></i> 导航</span>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="./index.html" class="BarElement"><i class="fa fa-home"></i> 首页</a>
&nbsp;&nbsp;&nbsp;
<a href="./install.html" class="BarElement"><i class="fa fa-download"></i> 安装</a>
&nbsp;&nbsp;&nbsp;
<a href="./contributors.html" class="BarElement"><i class="fa fa-user"></i> 贡献者</a>
&nbsp;&nbsp;&nbsp;
<a href="./mirrors.html" class="BarElement"><i class="fa fa-sitemap"></i> 镜像站列表</a>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="https://github.com/hyc-official/LuoguShowEmoji" class="BarElement" target="_blank"><i class="fa fa-code"></i> GH 仓库</a>`
var foot = `<center>
    <p>Luogu Show Emoji Site</p>
    <p>Developed by <a href="https://blog.heyc.eu.org" target="_blank">Heyc</a>, <a href="https://github.com/hyc-official/LGSE-page" target="_blank">GitHub repo</a></p>
    <br>
</center>`
function set() {
    document.getElementById("alert").innerHTML = `<p>${alert}</p>`;
    document.getElementById("bar").innerHTML = bar;
    document.getElementById("foot").innerHTML = foot;
}