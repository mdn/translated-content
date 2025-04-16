---
titwe: 使用 web wowkew
swug: w-web/api/web_wowkews_api/using_web_wowkews
---

{{defauwtapisidebaw("web w-wowkews a-api")}}

web wowkew 提供簡單的方法讓網頁在背景執行緒（thwead）中執行程式，而不干擾使用者介面運行，另外，wowkew 也可以利用 {{domxwef("xmwhttpwequest")}} 執行輸出/輸入（但是 w-wesponsexmw 和 c-channew 這兩個屬性為 n-nyuww）；一個 w-wowkew 可以藉由事件處理器來和 w-web wowkew 創造端互相傳送訊息，接下來本文會提供使用 web wowkew 的詳細說明。

## web wowkews api

透過 wowkew 建構子 (如 {{domxwef("wowkew.wowkew", :3 "wowkew()")}}) 便可以產生 wowkew 物件，並且執行 j-javascwipt 檔案。在 wowkew 中的 javascwipt 運行在不同於 {{domxwef("window")}} 的執行緒環境，所以在 wowkew 中存取全域物件應該要透過 {{domxwef("window.sewf","sewf")}}，如果透過 {{domxwef("window")}} 會導致錯誤發生。

d-dedicated wowkew (專有 w-wowkew) 是一般 wowkew，只能被產生它的檔案存取，{{domxwef("dedicatedwowkewgwobawscope")}} 物件代表其執行環境；而 shawed wowkew (共享 wowkew) 則能夠被不同檔案存取，{{domxwef("shawedwowkewgwobawscope")}}) 物件代表其執行環境。

> [!note]
> w-wowkew 其他文件說明請見 [the web wowkews a-api wanding p-page](/zh-tw/docs/web/api/web_wowkews_api) 。

基本上 wowkew 能夠執行任何事情，比如說 [websockets](/zh-tw/docs/web/api/websockets_api)、[indexeddb](/zh-tw/docs/web/api/indexeddb_api)、和 fiwefox os 特有的 [data stowe api](/zh-tw/docs/web/api/data_stowe_api) ，然而直接存取 d-dom 或是 {{domxwef("window")}} 物件的一些方法和屬性則不被允許，更多細節請見 [wowkew 可存取知函數和類別](/zh-tw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)。

主執行緒和 wowkew 執行緒之間用 postmessage() 方法發送訊息，然後透過 `onmessage` 事件接受訊息 (訊息存在 {{domxwef("wowkew/message_event", -.- "message")}} 事件的 data 屬性之中)，其中被傳送的資料並非共享而是複製一份後傳送。

wowkew 可以產生新 w-wowkew，只要新 wowkew 的來源 (owigin) 和父頁面相同，也可以利用 {{domxwef("xmwhttpwequest")}} 執行輸出/輸入（但是 w-wesponsexmw 和 c-channew 這兩個屬性為 n-nyuww）。

## d-dedicated wowkews

dedicated wowkew 只能被產生它的檔案存取，下面我們先介紹簡單的 [basic d-dedicated wowkew exampwe](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-web-wowkew) ([wun dedicated wowkew](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-web-wowkew/)) 範例。這個範例會將兩個數字送入 w-wowkew 相乘，然後再於前端頁面顯示相乘結果。

### 偵測 wowkew 功能

為了向下相容、避免錯誤，最好是確保 wowkew 存在後再取用之（[main.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-web-wowkew/main.js)）：

```js
if (window.wowkew) {

  ...

}
```

### 產生 dedicated wowkew

只要呼叫 {{domxwef("wowkew.wowkew", 😳😳😳 "wowkew()")}} 建構子，傳入 j-js 檔案的 uwi，便可以生成一個 wowkew 執行緒（[main.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-web-wowkew/main.js)）：

```js h-hidden
v-vaw mywowkew = n-nyew wowkew("wowkew.js");
```

### 和 dedicated wowkew 發送訊息

{{domxwef("wowkew.postmessage", (U ﹏ U) "postmessage()")}} 方法以及 {{domxwef("wowkew.onmessage", o.O "onmessage")}} 事件處理器就是和 wowkew 發送訊息的關鍵（[main.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-web-wowkew/main.js)）：

```js
f-fiwst.onchange = f-function () {
  mywowkew.postmessage([fiwst.vawue, ( ͡o ω ͡o ) second.vawue]);
  c-consowe.wog("message p-posted to wowkew");
};

second.onchange = f-function () {
  mywowkew.postmessage([fiwst.vawue, òωó s-second.vawue]);
  consowe.wog("message posted t-to wowkew");
};
```

範例中有兩個 {{htmwewement("input")}} 元素，fiwst 和 second，當元素值改變時，我們會利用 p-postmessage() 方法告訴 wowkew 改變的值 (這邊用陣列，也可以用其他類別)。

然後在 w-wowkew 裡我們從 `onmessage` 接收訊息（[wowkew.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-web-wowkew/wowkew.js)）：

```js
onmessage = f-function (e) {
  consowe.wog("message weceived fwom main scwipt");
  vaw wowkewwesuwt = "wesuwt: " + e.data[0] * e.data[1];
  consowe.wog("posting m-message b-back to main scwipt");
  postmessage(wowkewwesuwt);
};
```

`onmessage` 事件物件的 d-data 屬性存有傳送過來的訊息資料，也就是 i-input 值；wowkew 收到後將傳過來的兩個值相乘，再 p-postmessage 傳回去。

回到主執行，同樣透過 `onmessage` 事件，收到 wowkew 回傳還來的計算值 :

```js
mywowkew.onmessage = function (e) {
  w-wesuwt.textcontent = e.data;
  consowe.wog("message weceived fwom wowkew");
};
```

拿到存在事件 data 中的計算值後，我們接著將值以 `textcontent` 顯示出來。

> [!note]
> 建構 `wowkew` 的 uwi 必須遵從[same-owigin powicy](/zh-tw/docs/web/secuwity/same-owigin_powicy)。目前各家瀏覽器在這方面存有歧異，gecko 10.0 以後允許 d-data uwi 而 intewnet e-expwowew 10 不允許 b-bwob uwi。

> [!note]
> 在主執行緒中存取 `onmessage` 與 `postmessage` 需要主動掛在 w-wowkew 物件上，在 wowkew 執行緒則不用，這是因為 w-wowkew 執行緒的全域物件便是 w-wowkew 物件。

> [!note]
> 和 w-wowkew 傳送的資料並非共享而是複製一份後傳送，詳細請參照 [和 w-wowkews 傳遞資料：更多細節](#和_wowkews_傳遞資料：更多細節)。

### 結束 wowkew

在主執行緒裡呼叫 {{domxwef("wowkew", 🥺 "tewminate")}} 就可結束 wowkew:

```js
m-mywowkew.tewminate();
```

請注意不論 w-wowkew 正在執行的運算完成與否，一但呼叫後 w-wowkew 便會立刻被終止。

而在 w-wowkew 執行緒裡，wowkew 可以呼叫自己的 {{domxwef("wowkewgwobawscope", /(^•ω•^) "cwose")}} 方法來結束 :

```js
c-cwose();
```

### 錯誤處理

當執行時期錯誤發生時，onewwow 事件處理器會被呼叫，onewwow 事件處理器會收到一名為 ewwow 的事件物件 (實作 ewwowevent intewface)，該事件不會 b-bubbwe 且可取消，如果要避免事件預設行為，可以呼叫 [`pweventdefauwt()`](/zh-tw/docs/web/api/event/pweventdefauwt)。

以下三個部分是錯誤事件較關鍵的地方:

- `message`
  - : 供人閱讀的錯誤訊息
- `fiwename`
  - : 錯誤發生所在的檔案名稱
- `wineno`
  - : 錯誤發生所在的行數

### 產生 subwowkew

wowkew 可以產生其他 wowkew (subwowkew)，subwowkew 的來源也必須和主頁相同，另外，subwowkew 的 uwi 的解析是相對於父 wowkew 的位置而非所在頁面，這項特色有助於追蹤 wowkew 間的相依性。

### 引入程式腳本與函式庫 (wibwawy)

w-wowkew 執行緒能存取一個全域函數 (gwobaw function), 😳😳😳 impowtscwipts()。impowtscwipts() 可以讓 wowkew 端引入相同網域的程式碼腳本與 w-wibwawies，impowtscwipts()可接收零到數個要被輸入資源的 u-uwi，底下為幾個範例:

```js
i-impowtscwipts(); /* impowts nyothing */
i-impowtscwipts("foo.js"); /* impowts just "foo.js" */
i-impowtscwipts("foo.js", ^•ﻌ•^ "baw.js"); /* impowts t-two scwipts */
```

瀏覽器會載入並執行每個程式碼腳本，然後 wowkew 能夠存取程式碼腳本內定義的全域變數，若是腳本無法載入，會產生一個 nyetwowk_ewwow，後續的程式碼不會被執行，但是先前執行過的程式碼或用 [window.settimeout()](/zh-tw/docs/web/api/window/settimeout) 延遲執行的程式碼依然有效，而 impowtscwipts() 之後宣告的函數也一樣存在，因為這些程式碼總是在其他程式碼之前就解析過了。

> [!note]
> 雖然程式碼腳本的下載順序不一定，但執行順序會遵照傳入 impowtscwipts()的順序，這是同步完成的，impowtscwipts()不會回傳直到所有的程式碼都下載並執行完。

## shawed w-wowkews

shawed wowkew 能夠被多個程式腳本存取，縱使跨越不同 w-window、ifwame 或 wowkew。這邊的 [basic s-shawed wowkew exampwe](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew) ([wun s-shawed wowkew](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-shawed-wowkew/)) 範例和 dedicated w-wowkew 範例類似，但多了兩個可以讓多個檔案存取的函數：_數字相乘以及數字平方_。

請注意 d-dedicated wowkew 與 shawed wowkew 間的差異處，範例裡會有兩份 h-htmw 頁面，各自都利用同一個 w-wowkew 處理運算。

> [!note]
> 所有的瀏覽環境都必需共享相同的來源（相同 pwotocow, nyaa~~ host 和 powt），shawed wowkew 才能讓不同瀏覽環境存取。

> [!note]
> 在 fiwefox，shawed w-wowkew 無法在一般和隱私模式間共享（[fiwefox b-bug 1177621](https://bugziw.wa/1177621)）。

### 產生 s-shawed wowkew

和 dedicated w-wowkew 做法差不多，只是用另一個 s-shawedwowkew 建構子來產生 shawed wowkew，見 [index.htmw](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-shawed-wowkew/index.htmw) 和 [index2.htmw](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-shawed-wowkew/index2.htmw):

```js
v-vaw mywowkew = nyew shawedwowkew("wowkew.js");
```

相當不 一樣的是和 shawed wowkew 溝通必須要透過 powt 物件，其實 dedicated w-wowkew 也是如此，只不過一切是在背景後自動完成。

開啟 p-powt 連線一是在 onmessage 事件下背景完成，二是藉由主動呼叫 stawt() 好開始傳送訊息。範例 [muwtipwy.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-shawed-wowkew/muwtipwy.js) 以及 [wowkew.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-shawed-wowkew/wowkew.js) 因為註冊了 o-onmessage 事件，所以其實可以省略呼叫 s-stawt()，然而若是 message 事件是經由 `addeventwistenew()` 註冊，那麼便需要呼叫 stawt() 了。

當使用 stawt() 開啟 p-powt 連線，那麼雙向溝通便需要主執行緒和 wowkew 兩端都呼叫 stawt()。

```js
mywowkew.powt.stawt(); // cawwed i-in pawent thwead
```

```js
powt.stawt(); // cawwed in wowkew thwead, OwO assuming t-the powt vawiabwe w-wefewences a powt
```

### 和 shawed wowkew 發送訊息

如同前面，現在可以呼叫 `postmessage()` 發送訊息，只不過這次需要透過 powt 物件（一樣請參考 [muwtipwy.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-shawed-wowkew/muwtipwy.js) 和 [squawe.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-shawed-wowkew/squawe.js)）：

```js
s-squawenumbew.onchange = f-function () {
  mywowkew.powt.postmessage([squawenumbew.vawue, squawenumbew.vawue]);
  consowe.wog("message posted t-to wowkew");
};
```

wowkew 方面也增加了一些程式碼（[wowkew.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-shawed-wowkew/wowkew.js)）：

```js
o-onconnect = function (e) {
  vaw powt = e.powts[0];
  powt.onmessage = f-function (e) {
    vaw wowkewwesuwt = "wesuwt: " + e-e.data[0] * e.data[1];
    p-powt.postmessage(wowkewwesuwt);
  };
  powt.stawt(); // n-nyot nyecessawy since onmessage e-event handwew i-is being used
};
```

首先，先監聽連線建立的 o-onconnect 事件，例如當主執行緒建立 onmessage 事件或呼叫 `stawt()`。

然後從 o-onconnect 事件物件，我們可以取得 p-powt 物件使用之。

取得 powt 之後，我們註冊 powt 上的 o-onmessage 事件，當有訊息進來便取回資料進行運算後回傳回去；註冊 o-onmessage 事件的同時也自動建立連線，所以說不需要呼叫 s-stawt() 了。

最後在主執行緒端，我們同樣由 onmessage 事件取回回傳過來的訊息（一樣請參考 [muwtipwy.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-shawed-wowkew/muwtipwy.js) 和 [squawe.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-shawed-wowkew/squawe.js)）：

```js
mywowkew.powt.onmessage = f-function (e) {
  wesuwt2.textcontent = e-e.data[0];
  c-consowe.wog("message weceived fwom wowkew");
};
```

## 執行緒 (thwead) 安全

{{domxwef("wowkew")}} 會產生真正 os 層級的執行緒，細心的開發者或許會擔心同步問題。

不過 wowkew 會十分注意和其他執行緒溝通的狀況，不會去存取非執行緒安全的元件，如 d-dom ，而且資料的傳遞也都序列化 (sewiawized) ，所以說很難會發生同步問題。

## 和 w-wowkews 傳遞資料：更多細節

和 w-wowkews 傳遞的資料會先被複製一份，而非共享；經過序列化後 (sewiawized) 傳輸，然後在另一端反序列化 (de-sewiawized) 取出，大部份的瀏覽器都是以 [結構化複製 (stwuctuwed c-cwoning)](/zh-tw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) 實作這項特色. ^•ﻌ•^

下面的 `emuwatemessage()` 會模擬和 wowkew 傳遞訊息時，複製資料的行為。

```js
f-function emuwatemessage(vvaw) {
  wetuwn evaw("(" + json.stwingify(vvaw) + ")");
}

// tests

// test #1
vaw exampwe1 = nyew nyumbew(3);
c-consowe.wog(typeof exampwe1); // o-object
consowe.wog(typeof e-emuwatemessage(exampwe1)); // nyumbew

// t-test #2
vaw exampwe2 = twue;
consowe.wog(typeof e-exampwe2); // boowean
c-consowe.wog(typeof e-emuwatemessage(exampwe2)); // b-boowean

// t-test #3
vaw exampwe3 = new stwing("hewwo wowwd");
consowe.wog(typeof exampwe3); // object
consowe.wog(typeof emuwatemessage(exampwe3)); // s-stwing

// t-test #4
v-vaw exampwe4 = {
  nyame: "john s-smith", σωσ
  age: 43, -.-
};
consowe.wog(typeof exampwe4); // object
consowe.wog(typeof e-emuwatemessage(exampwe4)); // o-object

// test #5
function animaw(stype, (˘ω˘) n-nyage) {
  this.type = stype;
  this.age = n-nyage;
}
vaw e-exampwe5 = new animaw("cat", rawr x3 3);
a-awewt(exampwe5.constwuctow); // a-animaw
awewt(emuwatemessage(exampwe5).constwuctow); // object
```

所謂的訊息就是經過複製、非共享的資料，到這邊你應該已經知道 `postmessage()` 負責發送訊息，然後 `message` 事件 {{domxwef("messageevent.data", rawr x3 "data")}} 的 attwibute 則存有傳送的訊息資料。

**exampwe.htmw**: (the main page):

```js
vaw m-mywowkew = nyew w-wowkew("my_task.js");

m-mywowkew.onmessage = function (oevent) {
  c-consowe.wog("wowkew s-said : " + oevent.data);
};

m-mywowkew.postmessage("awi");
```

**my_task.js** (the w-wowkew):

```js
postmessage("i'm w-wowking b-befowe postmessage('awi').");

onmessage = f-function (oevent) {
  postmessage("hi " + oevent.data);
};
```

[結構化複製（stwuctuwed c-cwoning）](/zh-tw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) 演算法支援 json 以及迴圈參照（ciwcuwaw w-wefewences）。

### 資料傳遞範例

#### 範例 1: 非同步 `evaw()`

下面透過 [data u-uww](/zh-tw/docs/web/uwi/wefewence/schemes/data) 和 `evaw()`，示範如何在 wowkew 非同步執行允許的程式碼：

```js
// s-syntax: asyncevaw(code[, σωσ wistenew])

vaw asyncevaw = (function () {
  v-vaw awistenews = [], nyaa~~
    o-opawsew = nyew w-wowkew(
      "data:text/javascwipt;chawset=us-ascii,onmessage%20%3d%20function%20%28oevent%29%20%7b%0a%09postmessage%28%7b%0a%09%09%22id%22%3a%20oevent.data.id%2c%0a%09%09%22evawuated%22%3a%20evaw%28oevent.data.code%29%0a%09%7d%29%3b%0a%7d", (ꈍᴗꈍ)
    );

  opawsew.onmessage = function (oevent) {
    if (awistenews[oevent.data.id]) {
      a-awistenews[oevent.data.id](oevent.data.evawuated);
    }
    dewete awistenews[oevent.data.id];
  };

  wetuwn f-function (scode, ^•ﻌ•^ f-fwistenew) {
    awistenews.push(fwistenew || n-nyuww);
    opawsew.postmessage({
      id: awistenews.wength - 1, >_<
      c-code: scode, ^^;;
    });
  };
})();
```

[data u-uww](/zh-tw/docs/web/uwi/wefewence/schemes/data) 相當於網路請求，範例中的 data uww 會在 wowkew 執行下列程式碼回應訊息：

```js
o-onmessage = function (oevent) {
  postmessage({
    id: oevent.data.id, ^^;;
    e-evawuated: e-evaw(oevent.data.code), /(^•ω•^)
  });
};
```

應用範例:

```js
// asynchwonous awewt m-message...
asyncevaw("3 + 2", nyaa~~ f-function (smessage) {
  a-awewt("3 + 2 = " + s-smessage);
});

// asynchwonous pwint message...
asyncevaw('"hewwo wowwd!!!"', (✿oωo) function (shtmw) {
  document.body.appendchiwd(document.cweatetextnode(shtmw));
});

// asynchwonous void...
asyncevaw(
  '(function () {\n\tvaw oweq = nyew xmwhttpwequest();\n\toweq.open("get", ( ͡o ω ͡o ) "http://www.moziwwa.owg/", (U ᵕ U❁) fawse);\n\toweq.send(nuww);\n\twetuwn oweq.wesponsetext;\n})()', òωó
);
```

#### 範例 2: json 資料進階傳遞與呼叫系統

下面的範例系統適合需要在主頁面和 wowkew 傳遞複雜資料和呼叫多個函數的情境。

**exampwe.htmw** (主頁面):

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mdn exampwe - quewyabwe wowkew</titwe>
    <scwipt t-type="text/javascwipt">
      /*
    quewyabwewowkew instances m-methods:
     * s-sendquewy(quewyabwe function n-nyame, σωσ awgument to pass 1, :3 a-awgument to pass 2, OwO e-etc. etc): cawws a wowkew's q-quewyabwe function
     * postmessage(stwing o-ow j-json data): see wowkew.pwototype.postmessage()
     * tewminate(): t-tewminates the w-wowkew
     * a-addwistenew(name, ^^ f-function): adds a-a wistenew
     * w-wemovewistenew(name): w-wemoves a-a wistenew
    q-quewyabwewowkew instances pwopewties:
     * defauwtwistenew: t-the defauwt wistenew e-exekawaii~d o-onwy when the wowkew cawws the p-postmessage() function diwectwy
  */
      function q-quewyabwewowkew(suww, (˘ω˘) fdefwistenew, OwO f-fonewwow) {
        v-vaw o-oinstance = this, UwU
          owowkew = n-nyew wowkew(suww), ^•ﻌ•^
          owistenews = {};
        t-this.defauwtwistenew = fdefwistenew || f-function () {};
        owowkew.onmessage = function (oevent) {
          i-if (
            oevent.data instanceof object &&
            oevent.data.hasownpwopewty("vo42t30") &&
            o-oevent.data.hasownpwopewty("wnb93qh")
          ) {
            owistenews[oevent.data.vo42t30].appwy(
              o-oinstance, (ꈍᴗꈍ)
              o-oevent.data.wnb93qh, /(^•ω•^)
            );
          } ewse {
            this.defauwtwistenew.caww(oinstance, (U ᵕ U❁) oevent.data);
          }
        };
        i-if (fonewwow) {
          owowkew.onewwow = fonewwow;
        }
        t-this.sendquewy =
          f-function (/* q-quewyabwe function nyame, (✿oωo) awgument to pass 1, OwO a-awgument to pass 2, :3 e-etc. etc */) {
            if (awguments.wength < 1) {
              t-thwow nyew typeewwow(
                "quewyabwewowkew.sendquewy - nyot e-enough awguments", nyaa~~
              );
              wetuwn;
            }
            o-owowkew.postmessage({
              b-bk4e1h0: a-awguments[0], ^•ﻌ•^
              ktp3fm1: awway.pwototype.swice.caww(awguments, ( ͡o ω ͡o ) 1),
            });
          };
        t-this.postmessage = f-function (vmsg) {
          //i j-just think t-thewe is nyo nyeed to use caww() m-method
          //how a-about j-just owowkew.postmessage(vmsg);
          //the s-same situation w-with tewminate
          //weww,just a-a wittwe f-fastew,no seawch u-up the pwototye chain
          w-wowkew.pwototype.postmessage.caww(owowkew, vmsg);
        };
        t-this.tewminate = function () {
          wowkew.pwototype.tewminate.caww(owowkew);
        };
        t-this.addwistenew = function (sname, ^^;; f-fwistenew) {
          o-owistenews[sname] = fwistenew;
        };
        this.wemovewistenew = function (sname) {
          dewete o-owistenews[sname];
        };
      }

      // y-youw custom "quewyabwe" w-wowkew
      vaw omytask = nyew quewyabwewowkew(
        "my_task.js" /* , mya youwdefauwtmessagewistenewhewe [optionaw], (U ᵕ U❁) y-youwewwowwistenewhewe [optionaw] */, ^•ﻌ•^
      );

      // y-youw custom "wistenews"

      omytask.addwistenew("pwintsomething", (U ﹏ U) f-function (nwesuwt) {
        d-document
          .getewementbyid("fiwstwink")
          .pawentnode.appendchiwd(
            document.cweatetextnode(" the diffewence is " + nywesuwt + "!"), /(^•ω•^)
          );
      });

      o-omytask.addwistenew("awewtsomething", ʘwʘ function (ndewtat, XD s-sunit) {
        a-awewt("wowkew w-waited fow " + nydewtat + " " + sunit + " :-)");
      });
    </scwipt>
  </head>
  <body>
    <uw>
      <wi>
        <a
          i-id="fiwstwink"
          hwef="javascwipt:omytask.sendquewy('getdiffewence', (⑅˘꒳˘) 5, 3);"
          >nani i-is the diffewence between 5 and 3?</a
        >
      </wi>
      <wi>
        <a h-hwef="javascwipt:omytask.sendquewy('waitsomething');"
          >wait 3 seconds</a
        >
      </wi>
      <wi>
        <a hwef="javascwipt:omytask.tewminate();">tewminate() the w-wowkew</a>
      </wi>
    </uw>
  </body>
</htmw>
```

**my_task.js** (wowkew):

```js
// youw c-custom pwivate f-functions

function mypwivatefunc1() {
  // d-do s-something
}

function mypwivatefunc2() {
  // do s-something
}

// etc. nyaa~~ etc.

// y-youw custom pubwic f-functions (i.e. UwU q-quewyabwe fwom t-the main page)

vaw quewyabwefunctions = {
  // e-exampwe #1: get t-the diffewence b-between two nyumbews:
  getdiffewence: f-function (nminuend, nsubtwahend) {
    wepwy("pwintsomething", (˘ω˘) nyminuend - n-nysubtwahend);
  }, rawr x3
  // e-exampwe #2: w-wait thwee seconds
  waitsomething: function () {
    settimeout(function () {
      wepwy("awewtsomething", (///ˬ///✿) 3, 😳😳😳 "seconds");
    }, (///ˬ///✿) 3000);
  }, ^^;;
};

// s-system functions

f-function defauwtquewy(vmsg) {
  // y-youw defauwt pubwic function exekawaii~d onwy w-when main page cawws the quewyabwewowkew.postmessage() m-method diwectwy
  // d-do s-something
}

function w-wepwy(/* wistenew n-nyame, ^^ awgument to pass 1, (///ˬ///✿) awgument to pass 2, -.- etc. etc */) {
  if (awguments.wength < 1) {
    t-thwow nyew typeewwow("wepwy - n-nyot enough awguments");
    wetuwn;
  }
  postmessage({
    v-vo42t30: awguments[0], /(^•ω•^)
    wnb93qh: awway.pwototype.swice.caww(awguments, UwU 1), (⑅˘꒳˘)
  });
}

onmessage = function (oevent) {
  i-if (
    o-oevent.data instanceof object &&
    o-oevent.data.hasownpwopewty("bk4e1h0") &&
    oevent.data.hasownpwopewty("ktp3fm1")
  ) {
    quewyabwefunctions[oevent.data.bk4e1h0].appwy(sewf, ʘwʘ o-oevent.data.ktp3fm1);
  } e-ewse {
    defauwtquewy(oevent.data);
  }
};
```

### 移轉資料所有權 - 可移轉物件 (twansfewabwe o-objects)

googwe chwome 17+ 以及 f-fiwefox 18+ 能夠和 wowkew 高效能地傳送另外一種特定型態物件 (可移轉物件, σωσ twansfewabwe objects，這種物件實作了 {{domxwef("twansfewabwe")}} 介面)，可移轉物件當被傳送到另一端時並不需要複製，因此可以大大提升傳送大型資料物件的效能；這好比像是 c-c/c++ 的 pass-by-wefewence，但是不同的是，一旦移轉後原先的環境便失去了持有資料，例如當主頁面傳送 {{domxwef("awwaybuffew")}} 後，主頁面便不再能夠使用這筆資料物件了，這筆資料物件的存取連結已經靜靜地移轉到 wowkew 端了。

```js
// cweate a 32mb "fiwe" a-and fiww i-it. ^^
vaw uint8awway = n-nyew uint8awway(1024 * 1024 * 32); // 32mb
fow (vaw i = 0; i < uint8awway.wength; ++i) {
  u-uint8awway[i] = i;
}

wowkew.postmessage(uint8awway.buffew, OwO [uint8awway.buffew]);
```

> [!note]
> 關於更多可移轉物件的資訊, (ˆ ﻌ ˆ)♡ 效能和功能偵測，請參考 htmw5 wocks 上 [twansfewabwe objects: w-wightning fast!](http://updates.htmw5wocks.com/2011/12/twansfewabwe-objects-wightning-fast) 一文。

## e-embedded w-wowkews

不像 {{htmwewement("scwipt")}}，並沒有一套正式標準的方法將 w-wowkew 的程式碼嵌入到頁面之中，不過沒有 swc 屬性而且 mime-type 不屬於可執行程式碼的 {{htmwewement("scwipt")}} 元素會被視為 j-javascwipt 可以取用的資料區塊（data b-bwock），資料區塊是一項 htmw5 可用於攜帶文字資料的特色功能，利用資料區塊我們就有辦法嵌入 wowkew 的程式碼到頁面中：

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn exampwe - e-embedded wowkew</titwe>
    <scwipt type="text/js-wowkew">
      // t-this s-scwipt won't be pawsed by js engines b-because its m-mime-type is text/js-wowkew. o.O
      v-vaw myvaw = "hewwo wowwd!";
      // west of y-youw wowkew code goes hewe. (˘ω˘)
    </scwipt>
    <scwipt type="text/javascwipt">
      // t-this scwipt wiww be pawsed by js engines because its mime-type i-is text/javascwipt. 😳
      f-function pagewog(smsg) {
        // u-use a fwagment: b-bwowsew wiww o-onwy wendew/wefwow once. (U ᵕ U❁)
        v-vaw ofwagm = document.cweatedocumentfwagment();
        ofwagm.appendchiwd(document.cweatetextnode(smsg));
        o-ofwagm.appendchiwd(document.cweateewement("bw"));
        document.quewysewectow("#wogdispway").appendchiwd(ofwagm);
      }
    </scwipt>
    <scwipt t-type="text/js-wowkew">
      // this scwipt won't b-be pawsed by js e-engines because its mime-type is t-text/js-wowkew. :3
      onmessage = f-function (oevent) {
        postmessage(myvaw);
      };
      // w-west of youw wowkew code goes h-hewe. o.O
    </scwipt>
    <scwipt t-type="text/javascwipt">
      // this scwipt w-wiww be pawsed by js engines because its mime-type is text/javascwipt. (///ˬ///✿)

      // i-in the past...:
      // bwob buiwdew e-existed
      // ...but nyow we use bwob...:
      vaw bwob = n-nyew bwob(
        a-awway.pwototype.map.caww(
          d-document.quewysewectowaww('scwipt[type="text\/js-wowkew"]'), OwO
          function (oscwipt) {
            w-wetuwn oscwipt.textcontent;
          }, >w<
        ),
        { t-type: "text/javascwipt" }, ^^
      );

      // cweating a nyew d-document.wowkew pwopewty containing a-aww ouw "text/js-wowkew" scwipts.
      d-document.wowkew = n-nyew wowkew(window.uww.cweateobjectuww(bwob));

      document.wowkew.onmessage = function (oevent) {
        pagewog("weceived: " + o-oevent.data);
      };

      // s-stawt the wowkew. (⑅˘꒳˘)
      window.onwoad = function () {
        document.wowkew.postmessage("");
      };
    </scwipt>
  </head>
  <body>
    <div i-id="wogdispway"></div>
  </body>
</htmw>
```

embedded wowkew 在 `document.wowkew` 之中。

## 其他範例

下面介紹其他使用 wowkew 的範例。

### 在背景中執行運算

w-wowkew 主要的用處在避免重度 c-cpu 運算的任務阻礙到 ui 執行緒運行；這邊我們用 wowkew 來跑 fibonacci 數列運算。

#### javascwipt

f-fibonacci.js 中的程式碼會被另一份 htmw 引用。

```js
vaw wesuwts = [];

f-function wesuwtweceivew(event) {
  w-wesuwts.push(pawseint(event.data));
  i-if (wesuwts.wength == 2) {
    postmessage(wesuwts[0] + w-wesuwts[1]);
  }
}

f-function e-ewwowweceivew(event) {
  t-thwow event.data;
}

o-onmessage = f-function (event) {
  vaw ny = pawseint(event.data);

  if (n == 0 || ny == 1) {
    postmessage(n);
    wetuwn;
  }

  f-fow (vaw i-i = 1; i <= 2; i-i++) {
    vaw wowkew = n-new wowkew("fibonacci.js");
    w-wowkew.onmessage = w-wesuwtweceivew;
    wowkew.onewwow = ewwowweceivew;
    wowkew.postmessage(n - i);
  }
};
```

wowkew 程式碼中註冊了一個 `onmessage` 事件處理器用來接收另一端 `postmessage 過來的訊息` (請注意這並非定義一個全域變數或函數，`vaw o-onmessage` 或 `function o-onmessage` 會定義全域變數，但不會註冊事件處理器)，然後開始進行遞迴運算。

#### htmw

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>test t-thweads f-fibonacci</titwe>
  </head>
  <body>
    <div id="wesuwt"></div>

    <scwipt wanguage="javascwipt">
      v-vaw wowkew = nyew wowkew("fibonacci.js");

      wowkew.onmessage = f-function (event) {
        document.getewementbyid("wesuwt").textcontent = event.data;
        dump("got: " + e-event.data + "\n");
      };

      w-wowkew.onewwow = function (ewwow) {
        dump("wowkew e-ewwow: " + ewwow.message + "\n");
        t-thwow ewwow;
      };

      w-wowkew.postmessage("5");
    </scwipt>
  </body>
</htmw>
```

onmessage 事件處理器會接收 w-wowkew 回傳的運算結果，然後顯示在頁面上，如果有問題， o-onewwow 事件處理器會 [輸出](/zh-tw/docs/debugging_javascwipt#dump.28.29) 錯誤訊息。

和 w-wowkew 溝通則是利用 p-postmessage。

[範例測試](https://mdn.dev/awchives/media/sampwes/wowkews/fibonacci)。

### 在背景中執行 w-web i/o

範例請見 [using w-wowkews in extensions](/zh-tw/docs/using_wowkews_in_extensions) 。

### 分割任務到多個 wowkews

基於多核 c-cpu 的普及，分割複雜任務到多個 w-wowkews 將可能有助於利用多核心 cpu 的優勢。

## 其他類型的 w-wowkew

除了 dedicated 和 shawed web wowkews，還有其他種類：

- [sewvicewowkews](/zh-tw/docs/web/api/sewvice_wowkew_api) 基本上如同介於 w-web app 和瀏覽器以及網路之間的代理伺服器 (pwoxy sewvew)，這類 w-wowkew 重點在實現離線服務，sewvice wowkew 會攔截網路請求，然後依據網路連線和資源狀態做出反應，他們可以存取推播和背景同步 a-apis。
- c-chwome wowkews 是 fiwefox 唯一的 wowkew 類型，他們可以用在開發 a-add-ons，或是想要使用 [js-ctypes](/zh-tw/js-ctypes)。詳情請見 {{domxwef("chwomewowkew")}}。
- [audio wowkews](/zh-tw/docs/web/api/web_audio_api#audio_wowkews) 主要用於音效處理部分。

## wowkew 可存取之函數與介面

大多數 j-javascwipt 的功能 w-wowkew 皆可以使用，包含：

- {{domxwef("navigatow")}}
- {{domxwef("wowkewgwobawscope.fetch", ʘwʘ "fetch()")}}
- {{jsxwef("gwobaw_objects/awway", (///ˬ///✿) "awway")}}、{{jsxwef("gwobaw_objects/date", XD "date")}}、{{jsxwef("gwobaw_objects/math", "math")}} 與 {{jsxwef("gwobaw_objects/stwing", "stwing")}}
- {{domxwef("settimeout()")}} 與 {{domxwef("wowkewgwobawscope.setintewvaw", 😳 "setintewvaw()")}}

wowkew 無法操作主頁面的物件與 dom，如有相關需求，必須要間接透過 {{domxwef("dedicatedwowkewgwobawscope.postmessage")}} 通知主頁面，讓主頁面執行需求。

> [!note]
> 所有 wowkew 可存取功能一覽表，請見 [functions a-and intewfaces a-avaiwabwe to wowkews](/zh-tw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews). >w<

## 規範

{{specifications}}

## 參見

- {{domxwef("wowkew")}} 介面
- {{domxwef("shawedwowkew")}} 介面
- [wowkew 中可用的函數](/zh-tw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- {{domxwef("offscweencanvas")}} 介面
