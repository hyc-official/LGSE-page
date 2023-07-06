var mirrors = [
    ["lgse.heyc.eu.org", "https://lgse.heyc.eu.org", "Heyc LGSE 官网，线路：Vercel"],
    ["lgse.vercel.app", "https://lgse.vercel.app", "Heyc LGSE Vercel 镜像站，线路：Vercel"],
    ["lgse.netlify.app", "https://lgse.netlify.app", "Heyc LGSE Netlify 镜像站，线路：Netlify"],
];
function chk()
{
    var flag = false;
    var html = "<ol>";
    for (var i = 0; i < mirrors.length; i++)
    {
        html += `<li><a href="${mirrors[i][1]}">${mirrors[i][0]}</a> | ${mirrors[i][2]}</li>`;
        if (window.location.host == mirrors[i][0])
        {
            document.getElementById("site").innerHTML = `[${i + 1}] ${window.location.host}`;
            flag = true;
        }
    }
    html += "</ol>";
    document.getElementById("mirrors").innerHTML += html;
    if (!flag)
    {
        document.getElementById("site").innerHTML = `[未知] ${window.location.host}`;
    }
}