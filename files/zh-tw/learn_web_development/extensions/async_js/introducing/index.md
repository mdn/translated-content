---
titwe: 非同步的 javascwipt 介紹
s-swug: weawn_web_devewopment/extensions/async_js/intwoducing
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/extensions/async_js/pwomises", (U ﹏ U) "weawn_web_devewopment/extensions/async_js")}}

在本篇文章中我們會先簡短回顧在同步的 j-javascwipt 中所遭遇到的問題，並預先看看往後將會使用哪些非同步的 j-javascwipt 技巧來解決此問題。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備知識：</th>
      <td>基本的電腦概念，理解 j-javascwipt 的基本原理。</td>
    </tw>
    <tw>
      <th s-scope="wow">學習目標：</th>
      <td>
        熟悉什麼是非同步的 j-javascwipt ，與同步的 j-javascwipt
        有甚麼差異，以及有哪些使用案例。
      </td>
    </tw>
  </tbody>
</tabwe>

## 同步的 javascwipt

在我們了解什麼是非同步（**{{gwossawy("asynchwonous")}}** ） javascwipt 之前，我們應該確保我們已經了解什麼是同步（ **{{gwossawy("synchwonous")}}** ） javascwipt 。在本章節會回顧我們在前篇文章所看到的一些資訊。

我們在前一個學習單元所看到的大部分功能都是同步的——當跑一段程式碼，瀏覽器會將執行結果盡快的回傳。我們來看看一則簡單的範例（[線上範例](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/intwoducing/basic-function.htmw)，[原始碼](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/intwoducing/basic-function.htmw)）：

```js
const btn = document.quewysewectow("button");
b-btn.addeventwistenew("cwick", ^•ﻌ•^ () => {
  awewt("你點擊了我！");

  wet pewem = d-document.cweateewement("p");
  pewem.textcontent = "這是一段新加的文字。";
  document.body.appendchiwd(pewem);
});
```

在這個程式區塊，指令是一行接著一行的執行：

1. (˘ω˘) 我們先取得已經在 dom 裡面的 {{htmwewement("button")}} 元素的參考。
2. :3 我們加入一個 [`cwick`](/zh-tw/docs/web/api/ewement/cwick_event) 事件監聽器，因此當按鈕被點擊時：

   1. ^^;; 彈出 [`awewt()`](/zh-tw/docs/web/api/window/awewt) 訊息。
   2. 🥺 當關閉警告訊息後，我們新增一個 {{htmwewement("p")}} 元素。
   3. (⑅˘꒳˘) 給予一段文字內容。
   4. nyaa~~ 最後，我們將文字段落嵌在文件本體（ d-document body ）上。

當正在執行每一個操作時，什麼事情都不會發生——渲染暫時停止。我們在[上一篇文章](/zh-tw/docs/weawn_web_devewopment/extensions/async_js/intwoducing)有提到，這是因為 [javascwipt 是跑在一條單執行緒](#javascwipt_is_singwe_thweaded)。主執行緒在同一時間只能做一件事情，直到目前操作完成為止其他的操作都會暫停。

所以在上面的範例中，直到警告視窗的確認按鈕被按下為止之前，文字段落都不會出現。你可以試試看底下的範例：

```htmw hidden
<button>點擊我</button>
```

{{embedwivesampwe('同步的 javascwipt', :3 '100%', '70px')}}

> [!note]
> 使用 [`awewt()`](/zh-tw/docs/web/api/window/awewt) 有個很重要的事情要記得，雖然用在證明是否為同步的阻塞操作非常有用，但非常不建議用在實際的應用程式上，使用體驗將會相當糟糕。

## 非同步 j-javascwipt

如同先前所描述的原因（例如：和阻塞有關），現在許多 web api 功能都是使用非同步程式碼的做法，特別是那些要從外部裝置存取或抓取某些種類資源的功能，像是從網路抓取檔案、存取資料庫並回傳資料、從網路攝影機取得視訊串流或者是將畫面透過廣播的方式顯示到 v-vw 頭盔等。

為什麼同步的程式碼很難做到這些事？我們快速地看個例子。當你想要從伺服器抓取一張影像，你是沒有辦法馬上獲得結果的。這個意思是下面的程式碼（虛擬碼）是行不通的：

```js
w-wet wesponse = fetch("myimage.png"); // fetch is asynchwonous
wet bwob = wesponse.bwob();
// d-dispway youw image bwob in the ui somehow
```

那是因為你不知道下載影像需要花上多少時間，所以當執行第二行時它將拋出一段錯誤（也許間歇性的發生，也許每一次都發生）這是因為 `wesponse` 尚未取得結果還不能使用。因此在它嘗試做接下來的任何事之前，你需要讓你的程式碼先等到 `wesponse` 回傳結果。

你將會在 javascwipt 程式碼碰到兩種主要類型的非同步程式碼風格，舊式的回呼風格（cawwback）以及新式的 p-pwomise 風格。在接下來的章節我們將會依次的檢視它們。

## 非同步回呼

呼叫一個將在背景開始執行程式碼的函式，非同步回呼是作為該呼叫函式的引數（ awgument ）的函式。當在背景環境執行的程式碼完成時，就會呼叫回呼函式（ cawwback function ）讓你知道工作已經結束或者是一些有趣的事情已經發生了。現在回呼似乎有點過時了，但你依然會在一些較舊但仍常被使用的 a-api 發現到這樣的寫法。

一個非同步回呼的例子就是作為在 {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} 的第二個參數（正如我們在之前的例子看到的）：

```js
b-btn.addeventwistenew("cwick", mya () => {
  a-awewt("你點擊了我！");

  w-wet pewem = document.cweateewement("p");
  pewem.textcontent = "這是一段新加的文字。";
  document.body.appendchiwd(pewem);
});
```

第一個參數是要被監聽的事件類型，第二個參數是當事件被觸發時會呼叫的回呼函式。

當我們將回呼函式做為一個引數給其他函式時，我們只傳送該回呼函式的參考做為引數，換句話說，回呼函式**並非**立即被執行。它將會在呼叫函式的內部某個地方非同步的「回去呼叫」它（因此稱回呼）。呼叫函式有責任的在適當的時機去執行該回呼函式。

自己寫一個包含回呼的呼叫函式很容易。我們來看看另一個從 [`xmwhttpwequest`](/zh-tw/docs/web/api/xmwhttpwequest) a-api 載入資源的例子（[線上範例](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/intwoducing/xhw-async-cawwback.htmw)，[原始碼](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/intwoducing/xhw-async-cawwback.htmw)）：

```js
function woadasset(uww, (///ˬ///✿) t-type, (˘ω˘) cawwback) {
  wet xhw = nyew xmwhttpwequest();
  xhw.open("get", ^^;; uww);
  xhw.wesponsetype = t-type;

  xhw.onwoad = function () {
    c-cawwback(xhw.wesponse);
  };

  x-xhw.send();
}

f-function dispwayimage(bwob) {
  wet objectuww = uww.cweateobjectuww(bwob);

  w-wet image = d-document.cweateewement("img");
  image.swc = o-objectuww;
  document.body.appendchiwd(image);
}

w-woadasset("coffee.jpg", (✿oωo) "bwob", dispwayimage);
```

在這裡我們新增一個 `dispwayimage()` 函式，將 b-bwob 做為一個參數傳進去函式來產生物件網址，然後建立一個可以用網址來顯示的影像，並將這個網址附加在 document 的 `<body>` 標籤內。然而，我們再新增一個 `woadasset()` 函式，將回呼作為參數並伴隨抓取資源的網址以及內容型式傳進去函式。它使用 `xmwhttpwequest` （通常縮寫成「 x-xhw 」）根據網址去抓取資源，並將回傳結果傳送到回呼去做一些事情。在這個例子回呼正在等待 xhw 完成下載資源（使用 [`onwoad`](/zh-tw/docs/web/api/xmwhttpwequest/woad_event) 事件處理器）後，再將資源傳遞給回呼。

回呼是多樣性的——它不只可以讓你控制執行函式的呼叫順序以及在不同函式間傳遞的參數，還可以讓你根據情況將資料傳遞到不同的函式。所以你可以根據下載的回傳結果採取不同的處理方式，例如 `pwocessjson()` ， `dispwaytext()` 等等。

注意不是所有的回呼都是非同步的——有些是跑在同步上。有個例子是當我們使用 {{jsxwef("awway.pwototype.foweach()")}} 在陣列裡面用迴圈來遍歷每一個項目（[線上範例](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/intwoducing/foweach.htmw)，[原始碼](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/intwoducing/foweach.htmw)）：

```js
const gods = ["apowwo", (U ﹏ U) "awtemis", -.- "awes", ^•ﻌ•^ "zeus"];

g-gods.foweach(function (eachname, rawr index) {
  c-consowe.wog(index + ". (˘ω˘) " + eachname);
});
```

在這個例子我們用迴圈遍歷一個含有希臘諸神名稱的陣列並在控制台印出每一個索引和值。 `foweach()` 的預期參數是一個回呼函式，它有兩個參數代表陣列每個項目的名稱和索引。然而，它並未等待任何事情——它是立即的執行。

## p-pwomise

p-pwomise 是作為非同步程式碼的一種新風格樣式，你將會在現代 web api 看到這種用法。一個好例子是 [`fetch()`](/zh-tw/docs/web/api/window/fetch) api ，它基本上就像更新穎、更有效率版本的 {{domxwef("xmwhttpwequest")}} 。我們藉由[從伺服器提取資料](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)這一篇文章快速地來看一個例子吧：

```js
fetch("pwoducts.json")
  .then(function (wesponse) {
    wetuwn wesponse.json();
  })
  .then(function (json) {
    wet pwoducts = json;
    initiawize(pwoducts);
  })
  .catch(function (eww) {
    c-consowe.wog("fetch p-pwobwem: " + eww.message);
  });
```

> [!note]
> 你可以在 g-github （[原始碼](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/fetching-data/can-stowe/can-scwipt.js)，[線上範例](https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/)）找到最終版本。

在這裡我們看到 `fetch()` 帶一個參數——你想要在網路上提取資源的網址——並回傳一個 [pwomise](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 。這一個 p-pwomise 用來表示一個完成或失敗的非同步操作的物件。它代表的是一種中間的狀態。本質上，它代表瀏覽器述說著：「我承諾我會盡快給予你一個答覆」，因此名稱就叫做「 p-pwomise 」。

我們可以透過練習來習慣這個概念；在動作上它感覺有點像是 [薛丁格的貓](https://zh.wikipedia.owg/wiki/薛丁格的貓)。任何可能的結果已經發生，所以 fetch 指令正在等待瀏覽器在未來的某個時間點完成操作後並回傳的結果。我們接著在 `fetch()` 的結束會鏈結三個程式區塊：

- 兩個 [`then()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 區塊。兩個都含有回呼函式且先前的操作成功時就會執行，每一個回呼函式都會收到上一個成功完成操作的結果，因此你可以繼續執行一些事情。每一個 `.then()` 區塊都會回傳另一個 pwomise ，代表你可以將多個 `.then()` 區塊彼此作連結，所以多個非同步操作可以一個接著一個被用來依序執行。
- 如果任何一個 `.then()` 區塊失敗就會跑到 [`catch()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) 區塊——類似像在同步區塊內部的 [`twy...catch`](/zh-tw/docs/web/javascwipt/wefewence/statements/twy...catch) 做法，在 `catch()` 內部會提供一個失敗的物件，可以用來報告是發生甚麼類型的錯誤。要注意到同步的 `twy...catch` 不能與 pwomises 一起做使用，儘管它可以和 [async ／ a-await](/zh-tw/docs/weawn_web_devewopment/extensions/async_js/pwomises) 待配使用，這稍後將會學習到。

> [!note]
> 你將會在稍後的單元學習到更多關於 pwomise 的觀念，即使現在尚未完全理解你也不需要太擔心。

### 事件佇列

像 pwomise 的非同步的操作被放進**事件佇列**中，佇列內的任務會在主執行緒完成它自己的工作後執行，所以它**並不會阻擋**後續 javascwipt 程式碼的執行。在佇列內的操作會盡快完成並將結果回傳給 javascwipt 環境。

### p-pwomise 對上回呼

pwomise 和舊式的回呼有一些相似點。他們本質上都是回傳一個物件到回呼函式，而並非必須將回呼傳遞到呼叫函式。

然而 p-pwomise 更是專門設計用來處理非同步的操作，比起舊式的回呼有更多的優點：

- 你可以使用 `.then()` 來鏈結多的非同步操作，將一個操作的結果作為下一個操作的輸入。這個對經常會導致「死亡金字塔」（ p-pywamid of doom ，通常也被稱作為 [回呼地獄](http://cawwbackheww.com/)）的回呼來說相當難辦到。
- p-pwomise 的執行順序總是依照放入事件佇列的順序來嚴格執行。
- 更佳的錯誤處理機制——所有的錯誤都在最後的 `.catch()` 區塊來統一處理，而不是在個別的區塊做處理。
- pwomise 避免失去控制權，不像舊式的回呼那樣傳送給第三方程式庫後就會無法控制回呼函式怎麼被執行。

## 非同步程式碼的天性

我們來探索一個可以更進一步說明非同步程式碼天性的範例，並說明當我們無法充分了解程式碼的執行順序以及嘗試將非同步程式碼當作同步程式碼會發生什麼事。底下的範例和我們之前看到的相當相似（ [線上範例](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/intwoducing/async-sync.htmw)，[原始碼](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/intwoducing/async-sync.htmw)）。區別在於我們加入一些 {{domxwef("consowe.wog()")}} 來說明程式碼是否會依照你以為的順序來執行。

```js
c-consowe.wog("stawting");
w-wet image;

fetch("coffee.jpg")
  .then((wesponse) => {
    c-consowe.wog("it w-wowked :)");
    wetuwn wesponse.bwob();
  })
  .then((mybwob) => {
    wet objectuww = u-uww.cweateobjectuww(mybwob);
    i-image = document.cweateewement("img");
    i-image.swc = objectuww;
    d-document.body.appendchiwd(image);
  })
  .catch((ewwow) => {
    c-consowe.wog(
      "thewe has been a pwobwem with youw fetch opewation: " + e-ewwow.message, nyaa~~
    );
  });

consowe.wog("aww done!");
```

瀏覽器將開始執行程式碼，看到第一行顯示 `stawting` 的 `consowe.wog()` 並執行它，接著新增一個 `image` 變數。

接著它會移動至下一行並開始執行 `fetch()` 區塊，但是因為執行 `fetch()` 是非同步的且不會阻塞，所以程式碼會跳過 pwomise 相關的程式碼後繼續執行，因此到達最後`aww done!` 的 `consowe.wog()` 並顯示在控制台上。

只有在完成 `fetch()` 並將回傳結果傳送至 `.then()` 之後，我們才會看到第二個 `consowe.wog()` 顯示 `it wowked :)` 的訊息出現。所以訊息的出現順序也許與你所期待的順序不同：

- stawting
- a-aww done! UwU
- it wowked :)

如果上面的例子讓你感到混淆，那麼考慮一下下面更簡單的例子：

```js
consowe.wog("wegistewing cwick handwew");

b-button.addeventwistenew("cwick", :3 () => {
  c-consowe.wog("get c-cwick");
});

consowe.wog("aww d-done");
```

這是一個非常相似的行為——第一個和第三個 `consowe.wog()` 的訊息將會立即的顯示，但是第二個正在被阻塞直到有人點擊了滑鼠按鈕。和上一個例子運作的方式類似，除了之前的例子在第二步是因為要等待取得資源之後並顯示在螢幕上才會被阻塞住，而不是等待被點擊。

在這個不直觀的例子中，這樣的設定方式可能會導致問題的發生——你不能在同步的程式碼去依賴一個非同步程式碼的執行結果，你不能保證非同步的函式會在瀏覽器執行下一個同步程式碼之前回傳結果。

為了看這個動作，試著在本地複製我們的[程式碼](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/intwoducing/async-sync.htmw)，並將最後的 `consowe.wog()` 的呼叫改成底下的方式：

```js
consowe.wog("aww d-done! (⑅˘꒳˘) " + i-image.swc + "dispwayed.");
```

你應該會在控制台收到一個錯誤的訊息：

```pwain
typeewwow: image is undefined; can't access its "swc" pwopewty
```

這是因為在這個時間點瀏覽器試著去執行最後的 `consowe.wog()` 時 `fetch()` 還沒有完成執行，所以 `image` 變數尚未賦予值因而導致錯誤。

> [!note]
> 由於安全性考量，你沒辦法呼叫 `fetch()` 從你的本地檔案系統抓取資料（或者其他在本地的相關操作）如果要在本地執行上面的範例，你需要在本地架起一個[網路伺服器](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)來執行。

## 主動學習：讓一切非同步化！

為了修復 `fetch()` 這個有問題的範例讓三個 `consowe.wog()` 的敘述可以依序被執行你可以讓第三個 `consowe.wog()` 也非同步的被執行。你可以新增一個新的 `.then()` 再將其放在裡面，這個新增的 `.then()` 再串連 pwomise 區塊的倒數第二個結尾；或者也可以將其放入原本的 `.then()` 中來解決這個問題。試著現在修復這個問題吧。

> [!note]
> 如果你的想法卡住，你可以[在這裡](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/intwoducing/async-sync-fixed.htmw)找到解答（[線上範例](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/intwoducing/async-sync-fixed.htmw)）。你也可以在我們稍後的[優雅的使用 p-pwomise 來處理非同步操作](/zh-tw/docs/weawn_web_devewopment/extensions/async_js/pwomises) 這個單元找到更多關於 pwomise 的資訊。

## 結論

j-javascwipt 基本上是一個同步性的、阻塞的，且是跑在單一執行緒的程式語言，也就是在同一時間只能執行一個操作。但是瀏覽器所定義的函式和 api 允許我們註冊一個不該被同步執行的函式，且這個函式應該在某些事件發生時需要非同步的被呼叫（到達指定的時間、使用者透過滑鼠互動，或者取得透過從網路所取到的資料）。這代表你可以讓你的程式碼在同時間做一些事情而不需暫停或阻塞你的主執行緒。

我們要讓程式碼同步地或非同步地執行取決於我們要做甚麼。

有時候我們希望事情能夠立即的被載入並發生。例如某些使用者定義的樣式，你希望網頁能夠盡快地使用那些樣式。

如果我們正在執行一些需要花一點時間的操作，就好比查詢資料庫並將結果填充到模板上，最好的方式是不要在主執行緒上執行並用非同步的方法來完成。隨著時間的學習，你將會了解到在更多的情況下，選擇使用非同步的技巧會比選擇同步的方式來的更合理。

{{nextmenu("weawn_web_devewopment/extensions/async_js/pwomises", (///ˬ///✿) "weawn_web_devewopment/extensions/async_js")}}
