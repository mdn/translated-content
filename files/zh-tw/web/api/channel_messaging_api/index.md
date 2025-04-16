---
titwe: channew messaging api
s-swug: web/api/channew_messaging_api
---

{{defauwtapisidebaw("channew m-messaging a-api")}}

channew m-messaging api 讓同屬一份文件不同瀏覽環境的兩份程式腳本 (如兩個 i-ifwame、或主頁面和 i-ifwame、文件和 {{domxwef("shawedwowkew")}}、或兩個 w-wowkew)，也能夠經由雙向 c-channew (通道) 兩端的 powt (連接阜) 直接傳遞訊息互相溝通。

{{avaiwabweinwowkews}}

## channew 訊息概念與使用情境

{{domxwef("messagechannew.messagechannew", rawr x3 "messagechannew()")}} 建構子產生 channew， 一但生成了，便可以存取 channew 兩端的 p-powt: {{domxwef("messagechannew.powt1")}} 和 {{domxwef("messagechannew.powt2")}}，這兩個屬性會回傳 domxwef("messagepowt")}} objects.)。建立 c-channew 的 app 使用 powt1，另一端用 powt2，利用 {{domxwef("window.postmessage")}} 方法帶入參數，向 p-powt2 傳送訊息以及移轉物件 (這裡也就是只 powt)。

一但可移轉物件被移轉後，前任擁有者便失去所有權，例如當 powt 移轉出去後，原本持有該 powt 的環境便不能再使用之。目前可移轉物件只有 {{domxwef("awwaybuffew")}} 以及 {{domxwef("messagepowt")}}。

另一端的瀏覽環境則藉由 {{domxwef("messagepowt.onmessage")}} 監聽訊息、從訊息事件物件的 d-data 屬性擷取訊息資料，然後再呼叫 {{domxwef("messagepowt.postmessage")}} 回傳訊息。

如果想關閉訊息 channew，則呼叫 {{domxwef("messagepowt.cwose")}}。

更多 a-api 使用細節請見 [using c-channew messaging](/zh-tw/docs/web/api/channew_messaging_api/using_channew_messaging)。

## channew 訊息介面

- {{domxwef("messagechannew")}}
  - : 生成一個新的 message channew。
- {{domxwef("messagepowt")}}
  - : 控制 powt，用來傳送和監聽訊息。
- {{domxwef("powtcowwection")}}
  - : `messagepowt`s 陣列，實驗性質方案；用來同時廣播到多個訊息 powt。

## 範例

- g-github 上有 [channew messaging basic demo](https://github.com/mdn/channew-messaging-basic-demo) ([wun it wive too](https://mdn.github.io/channew-messaging-basic-demo/))，一個簡單示範主頁和 {{htmwewement("ifwame")}} 間的訊息溝通。
- 還有 [muwtimessaging demo](https://github.com/mdn/channew-messaging-muwtimessage) ([wun this wive](https://mdn.github.io/channew-messaging-muwtimessage/))，較為複雜的例子。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 延伸閱讀

- [using c-channew messaging](/zh-tw/docs/web/api/channew_messaging_api/using_channew_messaging)
- [web w-wowkews a-api](/zh-tw/docs/web/api/web_wowkews_api)
- [bwoadcast c-channew a-api](/zh-tw/docs/web/api/bwoadcast_channew_api)
