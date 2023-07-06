function ti(x)
{
    if (x === true)
    {
        return 1;
    }
    if (x === false)
    {
        return 0;
    }
    return parseInt(x);
}
function change()
{
    let st = {};
    st["rep-emj"] = document.getElementById("rep-emj").checked;
    st["srh-emj"] = document.getElementById("srh-emj").checked;
    st["img-src"] = document.getElementById("img-src").selectedIndex;
    st["chk-upd"] = document.getElementById("chk-upd").checked;
    document.getElementById("info").innerText = JSON.stringify(st);
    document.getElementById("status").style.color = "#e67e22";
    document.getElementById("status").innerText = "未保存";
    console.log(`[lgse settings] Options now: ${JSON.stringify(st)}`);
}