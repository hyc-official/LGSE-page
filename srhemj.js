var st = 0;
var emoji = ["aini","aiq","am","azgc","baiy","bangbangt","banzz","baojin","bb","bkx","bl","bobo","bp","bq","bs","bt","bu","bz","cd","cengyiceng","cg","ch","chi","cj","cp","cs","cy","dan","dao","db","dg","dgg","dk","dl","doge","dx","dy","dz","ee","emm","fad","fade","fan","fd","fendou","fj","fn","fw","gg","gy","gz","hanx","haob","hb","hc","hd","hec","hhd","hn","hp","hq","hsh","ht","huaix","hx","jd","jh","jiaybb","jiaybs","jie","jk","jw","jx","ka","kb","kel","kf","kg","kk","kl","kt","kuk","kun","kzht","lb","lengh","lh","ll","lm","lq","lw","lyj","mdfq","mg","mm","ng","nkt","oh","oy","pch","pj","pp","pt","px","qd","qiang","qiao","qq","qt","ruo","sa","se","sh","shd","shl","shuai","shui","shxi","sr","tiao","tl","tnl","tp","ts","tsh","tt","tuu","tx","ty","tyt","wbk","whl","wl","wn","wosl","wq","ws","wul","wx","wzm","xhx","xia","xig","xin","xjj","xk","xs","xu","xw","xy","xyx","yao","yb","yhh","yiw","yl","youl","youtj","yt","yun","yx","zhd","zhem","zhh","zhm","zhq","zj","zk","zq","zt","zuotj"];
var emjhtml = '<div class="se-emj"><img src=\"https://cdn.jsdelivr.net/gh/hyc-official/LuoguShowEmoji@latest/qqemoji/-%EMOJI%.gif\" alt=\"/%EMOJI%\"> | %EMOJI%</div>';
function se_cge()
{
    st = 1 - st;
    document.getElementById("se-mnu").style.display = (st == 0 ? "none" : "grid");
    if (st == 1)
    {
        se_srh();
    }
}
function se_srh()
{
    let wd = document.getElementById("se-ipt").value;
    let ih = "";
    for (let i = 0; i < emoji.length; i++)
    {
        if (wd == "" || emoji[i].replace(wd, "") != emoji[i])
        {
            ih += emjhtml.replace(/%EMOJI%/g, emoji[i]);
        }
    }
    document.getElementById("se-dsp").innerHTML = ih;
}
function se_load()
{
    document.body.innerHTML += `<style>
    .se-ent {
        z-index: 100;
        position: fixed;
        left: 30px;
        bottom: 30px;
        border-radius: 5px;
        background-color: #fff;
        padding: 11px;
        width: 28px;
        height: 28px;
        cursor: pointer;
    }
    .se-ent:hover {
        background-color: #ccc;
    }
    .se-mnu {
        z-index: 100;
        position: fixed;
        top: 30px;
        left: 30px;
        border-radius: 5px;
        background-color: #fff;
        padding: 5px;
        display: none;
        width: max(30%, 300px);
        height: calc(100% - 130px);
        border: 1px solid #0e90d2;
    }
    .se-emj {
        float: left;
        background-color: #eee;
        width: calc(28px + 7em);
        height: auto;
        border-radius: 2px;
        margin: 5px;
    }
    .se-emj:hover {
        background-color: #ccc;
    }
    .se-ipt {
        width: calc(100% - 10px);
        height: 1.5em;
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }
    .se-dsp {
        width: auto;
        height: calc(100% - 2em);
        overflow: auto;
    }
</style>
<div class="se-ent" id="se-ent" onclick="se_cge()"><img src="https://cdn.jsdelivr.net/gh/hyc-official/LuoguShowEmoji@latest/qqemoji/-cy.gif"></div>
<div class="se-mnu" id="se-mnu"><input type="text" class="se-ipt" id="se-ipt" placeholder="搜索表情..." oninput="se_srh()"><div class="se-dsp" id="se-dsp"></div></div>`;
}