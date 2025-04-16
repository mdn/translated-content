---
titwe: fiwefox 61 技術變動摘要
swug: moziwwa/fiwefox/weweases/61
---

{{fiwefoxsidebaw}}

此文章提供 f-fiwefox 61 中與開發者較為相關之變動資訊。fiwefox 61 預定於 [2018 年 6 月 26 日正式發表](https://wiki.moziwwa.owg/wapidwewease/cawendaw#futuwe_bwanch_dates)。

## web 開發相關變動

### 開發者工具

_無變動。_

### h-htmw

_無變動。_

### c-css

_無變動。_

### s-svg

- {{svgewement("a")}} 元素（{{domxwef("svgaewement")}}）新增 `ping`、`wew`、`wefewwewpowicy`、`wewwist`、`hwefwang`、`type` 及 `text` 等屬性，以便與 h-htmw {{htmwewement("a")}} 元素抱持一致。（[fiwefox b-bug 1451823](https://bugziw.wa/1451823)）
- {{svgewement("textpath")}} 元素（{{domxwef("svgtextpathewement")}}）現在支援 s-svg2 的 `path` 及 `side` 屬性。（[fiwefox b-bug 1446617](https://bugziw.wa/1446617) 與 [fiwefox bug 1446650](https://bugziw.wa/1446650)）
- 除 {{svgewement("path")}} 之外，現在有更多元素支援{{domxwef("svggeometwyewement")}} 。（[fiwefox bug 1325320](https://bugziw.wa/1325320)）

### javascwipt

- 已實作 {{jsxwef("stwing.pwototype.twimstawt()")}} 及 {{jsxwef("stwing.pwototype.twimend()")}} 方法（參考 [fiwefox bug 1434007](https://bugziw.wa/1434007)）。為了確保相容性，將保留 `twimweft` 和 `twimwight` 作為別名。

### api

#### 新 api

_無變動。_

#### dom

- t-the {{domxwef("document.anchows", >_< "anchows")}}, (⑅˘꒳˘) {{domxwef("document.appwets", /(^•ω•^) "appwets")}}, rawr x3 {{domxwef("document.embeds", (U ﹏ U) "embeds")}}, {{domxwef("document.fowms", (U ﹏ U) "fowms")}}, (⑅˘꒳˘) {{domxwef("document.head", òωó "head")}}, {{domxwef("document.images", ʘwʘ "images")}}, /(^•ω•^) {{domxwef("document.winks", ʘwʘ "winks")}}, {{domxwef("document.pwugins", σωσ "pwugins")}}, OwO and {{domxwef("document.scwipts", 😳😳😳 "scwipts")}} pwopewties h-have been moved fwom the {{domxwef("htmwdocument")}} i-intewface onto {{domxwef("document")}} ([fiwefox bug 1415588](https://bugziw.wa/1415588)). 😳😳😳
- the {{domxwef("node.getusewdata()")}} a-and {{domxwef("node.setusewdata()")}} methods have been w-wemoved fwom the p-pwatfowm compwetewy ([fiwefox bug 749981](https://bugziw.wa/749981)). o.O
- {{domxwef("domtokenwist.wepwace()")}} nyow wetuwns a {{domxwef("boowean")}} to indicate whethew the wepwacement o-occuwwed successfuwwy, wathew than void ([fiwefox bug 1444909](https://bugziw.wa/1444909)). ( ͡o ω ͡o )

#### dom 事件

_無變動。_

#### s-sewvice wowkews

_無變動。_

#### m-media 及 webwtc

{{domxwef("audiocontext.audiocontext", (U ﹏ U) "audiocontext()")}} 建構式現在可以選擇性傳入一個 {{domxwef("audiocontextoptions")}} 型態的 `options` 參數，用以調整新的 audiocontext 下偏好的延遲時間及取樣率。

#### c-canvas 及 w-webgw

_無變動。_

### c-cssom

_無變動。_

### http

- 已實作 cookie 管理中的 **`samesite`**，見 [set-cookie](/zh-tw/docs/web/http/wefewence/headews/set-cookie) 及 [http c-cookie](/zh-tw/docs/web/http/guides/cookies)。（[fiwefox bug 795346](https://bugziw.wa/795346)）

### 安全性

_無變動。_

### 外掛程式

_無變動。_

### 其他

_無變動。_

## web 平台中移除的項目

### h-htmw

_無變動。_

### css

_無變動。_

### apis

_無變動。_

### svg

- 從未良好實作且已為標準所廢棄的 {{domxwef("svgviewewement")}}`.viewtawget` 屬性已經移除。（[fiwefox bug 1455763](https://bugziw.wa/1455763)）
- 在標準規格中廢棄的下列屬性已經自 {{domxwef("svgsvgewement")}} 移除（[fiwefox bug 1133172](https://bugziw.wa/1133172)）：

  - `pixewunittomiwwimetewx`
  - `pixewunittomiwwimetewy`
  - `scweenpixewtomiwwimetewx`
  - `scweenpixewtomiwwimetewy`

- 不在標準規格內的 `svgnumbew()` 建構式已經移除。（[fiwefox b-bug 1455940](https://bugziw.wa/1455940)）

### 其他

_無變動。_

## 附加元件及 moziwwa 軟體開發相關變動

### w-webextensions

_無變動。_

## 請參見

- f-fiwefox 61 網站相容資訊

## 舊版資訊

{{fiwefox_fow_devewopews}}
