var alert = `<p><i class="fa fa-flag-o"></i> 公告：热烈庆祝 LGSE 正式版本发布！<br>
<i class="fa fa-code"></i> 当前最新版本：<span style="color: #e67e22" id="version">正在获取中...</span><br>
<i class="fa fa-envelope-o"></i> 访问量统计：<img src="https://badges.toozhao.com/badges/01GSN1QZ8F7H2RWHEQEZC7YY4F/blue.svg" style="height: 1em;" /></p>`;
var bar = `&nbsp;&nbsp;&nbsp;
<span class="BarElement"><i class="fa fa-list"></i> 导航</span>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="./" class="BarElement"><i class="fa fa-home"></i> 首页</a>
&nbsp;&nbsp;&nbsp;
<a href="./install" class="BarElement"><i class="fa fa-download"></i> 安装</a>
&nbsp;&nbsp;&nbsp;
<a href="./contributors" class="BarElement"><i class="fa fa-user"></i> 贡献者</a>
&nbsp;&nbsp;&nbsp;
<a href="./mirrors" class="BarElement"><i class="fa fa-sitemap"></i> 镜像站列表</a>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="https://github.com/hyc-official/LuoguShowEmoji" class="BarElement" target="_blank"><i class="fa fa-code"></i> GH 仓库</a>`;
var foot = `<center>
    <p>Luogu Show Emoji Site</p>
    <p>Developed by <a href="https://blog.heyc.eu.org" target="_blank">Heyc</a>, <a href="https://github.com/hyc-official/LGSE-page" target="_blank">GitHub repo</a></p>
    <br>
</center>`;
async function set_version() {
    fetch("https://api.github.com/repos/hyc-official/LuoguShowEmoji/releases/latest")
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          document.getElementById("version").innerText = data.tag_name + " (由 " + data.author.login + " 发布)";
      })
      .catch((err) => {
          console.error("Get version error", err);
          document.getElementById("version").innerText = "获取失败，请检查网络";
      });
}
function set_alert() {
    document.getElementById("alert").innerHTML = `<p>${alert}</p>`;
    document.getElementById("bar").innerHTML = bar;
    document.getElementById("foot").innerHTML = foot;
    set_version();
}
