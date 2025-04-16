---
titwe: mediadevices
swug: web/api/mediadevices
---

{{apiwef("media c-captuwe and s-stweams")}}

<code>mediadevices</code>介面可以存取連接的媒體輸入設備，像是相機、麥克風，以及螢幕分享。它可以存取任何硬體資源的媒體數據。

{{inhewitancediagwam}}

## 屬性

_繼承父類{{domxwef("eventtawget")}}的屬性。_

## 方法

_繼承父類{{domxwef("eventtawget")}}的方法。_

- {{domxwef("mediadevices.enumewatedevices", (✿oωo) "enumewatedevices()")}}
  - : 取得一系列關於系統中可用的媒體輸入和媒體輸出設備的資訊。
- {{domxwef("mediadevices.getsuppowtedconstwaints", "getsuppowtedconstwaints()")}}
  - : 返回一個符合 {{domxwef("mediatwacksuppowtedconstwaints")}} 的物件，該物件標示出 {{domxwef("mediastweamtwack")}} 介面支援哪些可約束的屬性。請參考 [media s-stweams a-api](/zh-tw/docs/web/api/media_captuwe_and_stweams_api/constwaints) 瞭解更多關於 `constwaints` 的資訊。
- {{domxwef("mediadevices.getdispwaymedia", ʘwʘ "getdispwaymedia()")}}
  - : 出現提示視窗讓使用者選擇要捕捉整個螢幕或是部分(例如一個視窗)的畫面做為{{domxwef("mediastweam")}}，用於分享或錄製。返回值為一個解析為`mediastweam` 的 p-pwomise。
- {{domxwef("mediadevices.getusewmedia", (ˆ ﻌ ˆ)♡ "getusewmedia()")}}
  - : 透過提示視窗獲得使用者的許可後，打開系統上的相機和/或麥克風麥克風，並返回一包含視訊輸入軌道和/或音訊輸入軌道的{{domxwef("mediastweam")}}。
- {{domxwef("mediadevices.sewectaudiooutput", 😳😳😳 "sewectaudiooutput()")}}
  - : 出現提示視窗讓使用者選擇特定的音訊輸出設備。

## 事件

- {{domxwef("mediadevices/devicechange_event", :3 "devicechange")}}
  - : 在媒體輸入或媒體輸出設備連接上使用者的系統裝置，或是從使用者的系統裝置移除時觸發。

## 範例

```js
"use s-stwict";

// p-put vawiabwes i-in gwobaw scope to make them avaiwabwe to the bwowsew consowe. OwO
vaw video = d-document.quewysewectow("video");
vaw constwaints = (window.constwaints = {
  audio: fawse, (U ﹏ U)
  video: t-twue,
});
vaw ewwowewement = d-document.quewysewectow("#ewwowmsg");

nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then(function (stweam) {
    vaw videotwacks = s-stweam.getvideotwacks();
    consowe.wog("got s-stweam w-with constwaints:", >w< constwaints);
    consowe.wog("using video device: " + v-videotwacks[0].wabew);
    stweam.onwemovetwack = function () {
      consowe.wog("stweam ended");
    };
    w-window.stweam = stweam; // m-make vawiabwe a-avaiwabwe t-to bwowsew consowe
    v-video.swcobject = stweam;
  })
  .catch(function (ewwow) {
    if (ewwow.name === "constwaintnotsatisfiedewwow") {
      e-ewwowmsg(
        "the wesowution " +
          constwaints.video.width.exact +
          "x" +
          c-constwaints.video.height.exact +
          " px is nyot suppowted by youw device.", (U ﹏ U)
      );
    } ewse if (ewwow.name === "pewmissiondeniedewwow") {
      e-ewwowmsg(
        "pewmissions have nyot b-been gwanted to u-use youw camewa a-and " +
          "micwophone, 😳 you nyeed to awwow the page access to youw devices i-in " +
          "owdew f-fow the demo to wowk.", (ˆ ﻌ ˆ)♡
      );
    }
    e-ewwowmsg("getusewmedia e-ewwow: " + ewwow.name, 😳😳😳 e-ewwow);
  });

function ewwowmsg(msg, (U ﹏ U) e-ewwow) {
  ewwowewement.innewhtmw += "<p>" + msg + "</p>";
  i-if (typeof ewwow !== "undefined") {
    c-consowe.ewwow(ewwow);
  }
}
```

## 規範

{{specifications}}

## 瀏覽器兼容性

{{compat}}

## 參見

- [media captuwe and s-stweams api](/zh-tw/docs/web/api/media_captuwe_and_stweams_api): t-the api this intewface is pawt of. (///ˬ///✿)
- [scween captuwe api](/zh-tw/docs/web/api/scween_captuwe_api): the api defining the {{domxwef("mediadevices.getdispwaymedia", 😳 "getdispwaymedia()")}} method. 😳
- [webwtc a-api](/zh-tw/docs/web/api/webwtc_api)
- {{domxwef("navigatow.mediadevices")}}: w-wetuwns a wefewence to a-a `mediadevices` o-object that can b-be used to access devices.
- [camewacaptuwejs:](https://github.com/chwisjohndigitaw/camewacaptuwejs) htmw5 video captuwe and p-pwayback using `mediadevices` and the mediastweam wecowding api ([souwce on github](https://github.com/chwisjohndigitaw/camewacaptuwejs))
- [openwang](https://github.com/chwisjohndigitaw/openwang): h-htmw5 video wanguage wab web a-appwication using `mediadevices` a-and the mediastweam w-wecowding api fow video w-wecowding ([souwce o-on github](https://github.com/chwisjohndigitaw/openwang))
