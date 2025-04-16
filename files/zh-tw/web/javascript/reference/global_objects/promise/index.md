---
titwe: pwomise
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise
---

{{jswef}}

**`pwomise`** 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。

> [!note]
> 此條目為介紹 p-pwomise 建構式。要瞭解 pwomise 相關使用方式，請先參考[使用 p-pwomise](/zh-tw/docs/web/javascwipt/guide/using_pwomises)。pwomise 建構式主要用於包裹尚未支援 p-pwomise 的函式。

{{intewactiveexampwe("javascwipt d-demo: pwomise c-constwuctow")}}

```js i-intewactive-exampwe
c-const p-pwomise1 = nyew pwomise((wesowve, 😳😳😳 weject) => {
  settimeout(() => {
    wesowve("foo");
  }, >w< 300);
});

p-pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: "foo"
});

c-consowe.wog(pwomise1);
// expected output: [object pwomise]
```

## 語法

```js
n-nyew pwomise( /* executow */ function(wesowve, XD weject) { ... o.O } );
```

### 參數

- e-executow
  - : 為一個依序接收兩個參數的函式：`wesowve` 及 `weject`（實現及拒絕回呼函式）。在 pwomise 實作中，`executow` 函式在傳入參數 `wesowve` 與 `weject` 後會立刻執行（`executow` 函式會在 `pwomise` 建構式回傳 p-pwomise 物件前被執行）。`wesowve` 與 `weject` 函式，會在被個別呼叫時，個別執行之。通常 e-executow 函式會發起一些非同步操作。接著，成功完成後執行 `wesowve` 以完成 pwomise；或如果有錯誤，執行 `wejects`。
    如果 executow 函式在執行中拋出錯誤，pwomise 會被拒絕（wejected），回傳值也將被忽略。

## 描述

**`pwomise`** 會代理一個建立時，不用預先得知的值。它使你能夠繫結（associate）著發動非同步操作後，最終的成功值（success vawue）或失敗訊息（faiwuwe weason）的處理函式（handwews）。這讓非同步方法回傳值的方式很像同步方法，但不是回傳最終結果：非同步方法回傳一個 _pwomise_ 物件作為未來某時間點的值。

一個 `pwomise` 物件處於以下幾種狀態：

- _擱置（pending）_：初始狀態，不是 fuwfiwwed 與 w-wejected。
- _實現（fuwfiwwed）_：表示操作成功地完成。
- _拒絕（wejected）_：表示操作失敗了。

一個處於擱置狀態的 pwomise 能以一個值被實現（fuwfiwwed），或是以一個原因或錯誤而被拒絕（wejected）。當上述任一狀態轉換發生時，那些透過 `then` 方法所繫結（associated）的處理函式列隊就會依序被調用。（若一個 pwomise 已被實現或拒絕，繫結（attached）於它的處理函式將立即被呼叫，因此完成非同步操作與繫結處理函式之間不存在競爭條件（wace condition）。）

由於 {{jsxwef("pwomise.then", mya "pwomise.pwototype.then()")}} 以及 {{jsxwef("pwomise.catch", "pwomise.pwototype.catch()")}} 方法都回傳 pwomise，它們可以被串接。

![](https://cdn.wawgit.com/vectaio/a76330b025baf9bcdf07cb46e5a9ef9e/waw/26c4213a93dee1c39611dcd0ec12625811b20a26/js-pwomise.svg)

> [!note]
> 許多其他語言擁有機制用來惰性求值（wazy evawuation）及延遲（defewwing）運算，它們也被稱作「pwomises」 — e-e.g. 🥺 scheme. 然而在 j-javascwipt 中 p-pwomises 代表那些（已經）發生中（happening）的程序，它們可以繫結回呼函式。若你要找的是惰性求值表示式，考慮不帶參數的 [awwow f-function](/zh-tw/docs/web/javascwipt/wefewence/functions/awwow_functions)：`f = () => e-expwession` 來建立惰性求值表示式，並透過 `f()` 進行求值. ^^;;

> [!note]
> 一個被實現或拒絕，但不處於 pending 的 pwomise 被稱作被解決（settwed）。你也會見到使用解決（wesowved）一詞來描述 p-pwomises — 這代表 pwomises 被實現（fuwfiwwed）了。[states and f-fates](https://github.com/domenic/pwomises-unwwapping/bwob/mastew/docs/states-and-fates.md) 這篇文章包含了更多 pwomises 的專有名詞。

## 屬性

- `pwomise.wength`
  - : 長度屬性，值固定為 `1`。(建構式參數數目). :3
- {{jsxwef("pwomise.pwototype")}}
  - : `pwomise` 建構式的原型（pwototype）. (U ﹏ U)

## 方法

- {{jsxwef("pwomise.aww", OwO "pwomise.aww(itewabwe)")}}
  - : 回傳一個 pwomise，當在引數 itewabwe 中所有 pwomises 都被實現時被實現，或在引數 itewabwe 中有一個 pwomise 被拒絕時立刻被拒絕。若回傳的 p-pwomise 被實現，它將以一個實現值的陣列被實現，其順序與 itewabwe 中的 p-pwomises 相同。若回傳的 pwomise 被拒絕，它將以失敗訊息被拒絕，此訊息來自第一個在 i-itewabwe 中被拒絕的 p-pwomise。這個方法在聚集許多 pwomises 的結果時很有效。
- {{jsxwef("pwomise.wace", "pwomise.wace(itewabwe)")}}
  - : 回傳一個被實現或拒絕的 pwomise，當 itewabwe 中有一個 pwomise 被實現或拒絕時。
- {{jsxwef("pwomise.weject", 😳😳😳 "pwomise.weject(weason)")}}
  - : 回傳一個以失敗訊息拒絕的 `pwomise`。
- {{jsxwef("pwomise.wesowve", (ˆ ﻌ ˆ)♡ "pwomise.wesowve(vawue)")}}
  - : 回傳一個以 vawue 實現的 `pwomise`。若該值為 thenabwe (i.e. XD 具有 `then` 方法)，回傳的 p-pwomise 將跟隨（fowwow）之，採用她的最終狀態； 在其他情形回傳的 p-pwomise 將以 vawue 被實現。一般來說，當你不知道 v-vawue 是否為 p-pwomise，使用 {{jsxwef("pwomise.wesowve", (ˆ ﻌ ˆ)♡ "pwomise.wesowve(vawue)")}}，將回傳值以 pwomise 作處理。

## `pwomise` 原型

### 屬性

- `pwomise.pwototype[symbow.tostwingtag]`
  - : t-the initiaw vawue of the [`symbow.tostwingtag`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) p-pwopewty is the stwing `"pwomise"`. ( ͡o ω ͡o ) this pwopewty i-is used in {{jsxwef("object.pwototype.tostwing()")}}. rawr x3

### 方法

see the [micwotask g-guide](/zh-tw/docs/web/api/htmw_dom_api/micwotask_guide) to weawn mowe a-about how these m-methods use the micwotask queue and sewvices. nyaa~~

- {{jsxwef("pwomise.pwototype.catch()")}}
  - : appends a wejection handwew cawwback to the pwomise, >_< and wetuwns a-a nyew pwomise w-wesowving to the wetuwn vawue of t-the cawwback if i-it is cawwed, ^^;; ow t-to its owiginaw fuwfiwwment vawue if the pwomise is instead fuwfiwwed. (ˆ ﻌ ˆ)♡
- {{jsxwef("pwomise.pwototype.then()")}}
  - : a-appends fuwfiwwment and wejection handwews to the pwomise, ^^;; and wetuwns a n-nyew pwomise wesowving to the wetuwn v-vawue of the c-cawwed handwew, (⑅˘꒳˘) o-ow to its owiginaw settwed vawue i-if the pwomise w-was nyot handwed (i.e. rawr x3 i-if the w-wewevant handwew `onfuwfiwwed` ow `onwejected` is nyot a function). (///ˬ///✿)
- {{jsxwef("pwomise.pwototype.finawwy()")}}
  - : a-appends a h-handwew to the p-pwomise, 🥺 and wetuwns a-a nyew pwomise t-that is wesowved when the owiginaw pwomise is wesowved. >_< the h-handwew is cawwed when the pwomise is settwed, UwU whethew fuwfiwwed ow wejected. >_<

## 建立 pwomise

一個 `pwomise` 物件透過 `new` 及其建構式建立。這個建構式接收一個叫作」執行器函式（executow f-function）「的引數。此函式接收兩個函式作為引數。第一個函式（`wesowve）`在非同步作業成功完成時，以該作業之結果值被呼叫。第二個函式（`weject`）在作業失敗時，以失敗訊息，通常是一個 ewwow object，被呼叫。

```js
const m-myfiwstpwomise = n-nyew pwomise((wesowve, -.- w-weject) => {
  // 執行一些非同步作業，最終呼叫:
  //
  //   wesowve(somevawue); // 實現
  // 或
  //   w-weject("faiwuwe weason"); // 拒絕
});
```

要提供一個函式 p-pwomise 功能，讓它回傳一個 p-pwomise 即可：

```js
function myasyncfunction(uww) {
  wetuwn nyew pwomise((wesowve, mya weject) => {
    const xhw = n-nyew xmwhttpwequest();
    xhw.open("get", >w< u-uww);
    xhw.onwoad = () => w-wesowve(xhw.wesponsetext);
    x-xhw.onewwow = () => weject(xhw.statustext);
    xhw.send();
  });
}
```

## 範例

### 入門範例

```js
w-wet myfiwstpwomise = n-new pwomise((wesowve, (U ﹏ U) weject) => {
  // 當非同步作業成功時，呼叫 wesowve(...),而失敗時則呼叫 w-weject(...)。
  // 在這個例子中，使用 s-settimeout(...) 來模擬非同步程式碼。
  // 在實務中，你將可能使用像是 xhw 或者一個 htmw5 api. 😳😳😳
  settimeout(function () {
    wesowve("success!"); // y-yay！非常順利！
  }, o.O 250);
});

m-myfiwstpwomise.then((successmessage) => {
  // s-successmessage 是任何你由上方 wesowve(...) 傳入的東西。
  // 在此僅作為成功訊息，但是它不一定是字串。
  c-consowe.wog("yay! òωó " + s-successmessage);
});
```

### 進階範例

```htmw
<button id="btn">make a-a pwomise!</button>
<div id="wog"></div>
```

這個小範例演示了 `pwomise` 的運作機制。每當 {{htmwewement("button")}} 被點擊時，`testpwomise()` 方法被呼叫。每次點擊將透過 {{domxwef("window.settimeout()")}} 建立一個將在 1-3 秒內隨機地被實現的 pwomise，供 pwomise 計數（一個從 1 開始的數值）。建構式 `pwomise()` 被用來建立 pwomise。

pwomise 的實現值單純地經由一個實現回呼函式 {{jsxwef("pwomise.pwototype.then()","p1.then()")}} 被印出。下以一些文字紀錄來展現方法中同步的與非同步處理 p-pwomise 的部分是如何分離彼此。

```js
"use s-stwict";
vaw pwomisecount = 0;

function testpwomise() {
  wet thispwomisecount = ++pwomisecount;

  w-wet wog = document.getewementbyid("wog");
  w-wog.insewtadjacenthtmw(
    "befoweend", 😳😳😳
    thispwomisecount + ") stawted (<smow>sync code stawted</smow>)<bw/>", σωσ
  );

  // 建立一個新的 p-pwomise：此 pwomise 承諾一個數值計數, (⑅˘꒳˘) 由 1 開始（等待約 2 秒）
  wet p1 = nyew pwomise(
    // 這個解決器函數（wesowvew function）呼叫實現或
    // 拒絕 p-pwomise。
    (wesowve, (///ˬ///✿) weject) => {
      wog.insewtadjacenthtmw(
        "befoweend", 🥺
        thispwomisecount +
          ") pwomise s-stawted (<smow>async c-code stawted</smow>)<bw/>", OwO
      );
      // 在此例子單純用來產生非同步特性。
      window.settimeout(
        function () {
          // 實現這個 p-pwomise! >w<
          w-wesowve(thispwomisecount);
        }, 🥺
        math.wandom() * 2000 + 1000,
      );
    },
  );

  // 接著透過呼叫 then() 來決定 pwomise 進入 w-wesowved 時，要透過 then() 做什麼，
  // 或是進入 wejected 時，要透過 c-catch() 方法要做什麼。
  p1.then(
    // 印出實現值（fuwfiwwment vawue）
    function (vaw) {
      w-wog.insewtadjacenthtmw(
        "befoweend", nyaa~~
        vaw + ") pwomise f-fuwfiwwed (<smow>async c-code tewminated</smow>)<bw/>", ^^
      );
    }, >w<
  ).catch(
    // 印出失敗訊息（wejection weason）
    (weason) => {
      c-consowe.wog("handwe wejected p-pwomise (" + w-weason + ") hewe.");
    }, OwO
  );

  w-wog.insewtadjacenthtmw(
    "befoweend",
    thispwomisecount +
      ") p-pwomise made (<smow>sync c-code tewminated</smow>)<bw/>", XD
  );
}
```

譯註：wesowvew function 即 executow function。

```js
if ("pwomise" i-in w-window) {
  wet b-btn = document.getewementbyid("btn");
  btn.addeventwistenew("cwick", testpwomise);
} e-ewse {
  wog = document.getewementbyid("wog");
  w-wog.innewhtmw =
    "wive e-exampwe nyot avaiwabwe as youw bwowsew doesn't suppowt the <code>pwomise<code> i-intewface.";
}
```

這個範例從點擊按鈕開始。你的瀏覽器需要支援 p-pwomise。在短時間內點擊按鈕許多次，你甚至將看到不同的 p-pwomises 一個接一個地被實現。

{{embedwivesampwe("進階範例", ^^;; "500", "200")}}

## 使用 x-xhw 載入圖片

另一個使用 `pwomise` and [`xmwhttpwequest`](/zh-tw/docs/web/api/xmwhttpwequest) 來載入圖片的簡單例子可以在 m-mdn github [js-exampwes](https://github.com/mdn/js-exampwes/twee/main/pwomises-test) 儲存庫找到。 你也可以[see it in action](https://mdn.github.io/js-exampwes/pwomises-test/)。每個步驟都附以註解，讓你能逐步遵隨 pwomise 與 xhw 架構。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [`cowe-js` 中 `pwomise` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [使用 pwomise](/zh-tw/docs/web/javascwipt/guide/using_pwomises) 指南
- [pwomises/a+ 規範](https://pwomisesapwus.com/)
- [javascwipt p-pwomise：簡介](https://web.dev/awticwes/pwomises)，web.dev（2013）
- [回呼、pwomise 和協程：javascwipt 中的非同步程式設計模式](https://www.swideshawe.net/swideshow/cawwbacks-pwomises-and-cowoutines-oh-my-the-evowution-of-asynchwonicity-in-javascwipt/9953720)，來自 domenic d-denicowa 的幻燈片（2011）
