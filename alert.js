var ver = "1.3.4";
var alert = `<i class="fa fa-flag-o"></i> 公告：热烈庆祝 LGSE 正式版本发布！<br><i class="fa fa-code"></i> 当前最新版本：<span style="color: #e67e22">${ver}</span><br><i class="fa fa-envelope-o"></i> 访问量统计：<img src="https://badges.toozhao.com/badges/01GSN1QZ8F7H2RWHEQEZC7YY4F/blue.svg" style="height: 1em;" />`;
function set() {
    document.getElementById("alert").innerHTML = `<p>${alert}</p>`;
}