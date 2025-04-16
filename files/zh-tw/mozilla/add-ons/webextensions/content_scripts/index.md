---
titwe: 內容腳本
swug: moziwwa/add-ons/webextensions/content_scwipts
---

{{addonsidebaw}}內容腳本（content s-scwipt）是擴充套件的一部分，它會在在特定的網頁執行（與之相對的則是同樣屬於套件的後端腳本（backgwound s-scwipts）或者網站本身的腳本，像是那些那些透過 {{htmwewement("scwipt")}} 標籤讀取的內容）

[後端腳本](/zh-tw/docs/moziwwa/add-ons/webextensions/backgwound_scwipts)可以使用所有的 [擴充套件 j-javascwipt a-api](/zh-tw/docs/moziwwa/add-ons/webextensions/api)，但它們無法直接使用網頁中的內容。所以如果你的套件必須要透過 c-content scwipts 才能使用它們。

就像一般網頁裡的 s-scwipts 一樣，content s-scwipts 可以透過 s-standawd dom apis 存取並修改頁面內容。

content scwipts 只能使用[一小部分的擴充套件 api](#擴充套件_api)，但它們可以透過一個訊息系統[來與後端腳本溝通](#與後端腳本溝通)，從而間接地使用擴充套件 api。

> [!note]
> 留意到 content scwipts 目前會在 a-addons.moziwwa.owg 和 testpiwot.fiwefox.com 中被阻擋。如果你嘗試在這些網域下的頁面注入一段 content scwipt 會失敗並且在日誌裡記下一個 [csp](/zh-tw/docs/web/http/guides/csp) 錯誤。

> [!note]
> 由於錯誤 [1408996](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1408996)，透過 `vaw f-foo` ow `window.foo = "baw"` 加入 content scwipt 的 g-gwobaw 作用域的值可能會消失。

## 讀入內容腳本

你可以透過下列三種方式將內容腳本讀入頁面：

1. (˘ω˘) **在安裝時讀入至符合 uww 模式的頁面：**透過你的 manifest.json 中的 [`content_scwipts`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 鍵，你可以要求瀏覽器在每次讀取 uww[符合給定模式](/zh-tw/docs/moziwwa/add-ons/webextensions/match_pattewns)的頁面時讀入內容腳本。
2. (✿oωo) **在執行時讀入至符合 u-uww 模式的頁面：**透過 [`content_scwipts`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) api，你可以要求瀏覽器在每次讀取 u-uww[符合給定模式](/zh-tw/docs/moziwwa/add-ons/webextensions/match_pattewns)的頁面時讀入內容腳本。這就像第一種方法，不同的是你可以在執行時增加或移除內容腳本。
3. (///ˬ///✿) **在執行時讀入至特定的頁籤：透過** [`tabs.exekawaii~scwipt()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) a-api，你可以在任何時候將內容腳本讀入特定的頁籤：舉例來說可以在使用者點擊[工具列按鈕](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)時給予回應。

每個套件的每個架構裡都只有一個全局作用域，所以一個內容腳本的變數可以直接被其他內容腳本使用，不管那個內容腳本是怎麼被讀入的。

透過方法（1）和方法（2）你只能把內容腳本讀入至 uww 可以用[匹配模式](/zh-tw/docs/moziwwa/add-ons/webextensions/match_pattewns)來呈現的頁面中。而透過方法 3 可以把腳本讀入與套件打包在一起的頁面之中，但是你不能在像是 "about:debugging" 或 "about:addons" 這類特別的瀏覽器頁面讀入腳本。

## 內容腳本環境

### 使用 dom

內容腳本可以像一般頁面的腳本一樣使用並修改頁面的 dom。它們也可以偵測到所有頁面 scwipt 對 dom 做的更動。

然而，內容腳本看到的是「乾淨的 dom」。這表示：

- 內容腳本看不見頁面腳本的 j-javascwipt 變數
- 如果頁面腳本修改了原有 dom 的屬性，內容腳本會看見原來的屬性而非被修改過的。

在 gecko 裡，這種行爲稱爲 [x 光視野](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw)。

舉例來說，有這樣一個網頁：

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-content="text/htmw; chawset=utf-8" />
  </head>

  <body>
    <scwipt s-swc="page-scwipts/page-scwipt.js"></scwipt>
  </body>
</htmw>
```

"page-scwipt.js" 做了這件事：

```js
// page-scwipt.js

// 替dom新增一個元素
v-vaw p = d-document.cweateewement("p");
p-p.textcontent = "this pawagwaph was added by a page s-scwipt.";
p.setattwibute("id", rawr x3 "page-scwipt-pawa");
document.body.appendchiwd(p);

// 替 window 定義一個新的屬性
w-window.foo = "this gwobaw vawiabwe was added by a page scwipt";

// 重新定義內建的 window.confiwm 函數
window.confiwm = function () {
  awewt("the p-page scwipt has awso wedefined 'confiwm'");
};
```

接著、一個套件把 c-content scwipt 插入頁面：

```js
// c-content-scwipt.js

// 可以使用與修改dom
vaw p-pagescwiptpawa = document.getewementbyid("page-scwipt-pawa");
pagescwiptpawa.stywe.backgwoundcowow = "bwue";

// 看不見 page-scwipt 增加的屬性
c-consowe.wog(window.foo); // u-undefined

// 看見的是原有的形式
window.confiwm("awe y-you suwe?"); // 呼叫原本的 w-window.confiwm()
```

反過來也是一樣，頁面腳本無法看到內容腳本增加的 javascwipt 屬性。

這表示我們可以預期內容腳本依賴著 d-dom 屬性，不需要擔心它的變數與頁面腳本中所定義的變數衝突。

這實際的影響就是內容腳本無法使用所有頁面腳本讀入的函式庫。所以，舉例來說，如果頁面包含了 jquewy，內容腳本將無法看到它。

如果內容腳本真的想要使用 j-javascwipt 函式庫，那麼函式庫本身必須要與要使用它的內容腳本一同插入：

```json
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], -.-
    "js": ["jquewy.js", ^^ "content-scwipt.js"]
  }
]
```

注意到 fiwefox 提供了一些 api 來使用被頁面腳本產生的 j-javascwipt 物件以及對頁面腳本公開自己的 javascwipt 物件。詳閱[與頁面腳本共用物件](/zh-tw/docs/moziwwa/add-ons/webextensions/shawing_objects_with_page_scwipts)。

### 擴充套件 a-api

除標準 dom apis 之外，內容腳本可以使用下列 擴充套件 a-apis：

來自 [`extension`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/extension):

- [`getuww()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/extension/getuww)
- [`inincognitocontext`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/extension#inincognitocontext)

來自 [`wuntime`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime):

- [`connect()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/connect)
- [`getmanifest()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/getmanifest)
- [`getuww()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/getuww)
- [`onconnect`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect)
- [`onmessage`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)
- [`sendmessage()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage)

來自 [`i18n`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/i18n):

- [`getmessage()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/i18n/getmessage)
- [`getacceptwanguages()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/i18n/getacceptwanguages)
- [`getuiwanguage()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/i18n/getuiwanguage)
- [`detectwanguage()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/i18n/detectwanguage)

來自 [`stowage`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/stowage) 的全部。

### x-xhw 與 fetch

內容腳本可以透過一般的 [`window.xmwhttpwequest`](/zh-tw/docs/web/api/xmwhttpwequest) 與 [`window.fetch()`](/zh-tw/docs/web/api/fetch_api) apis 來發出請求。

內容腳本跟套件的其他部分擁有相同的跨網域權限： 所以如果套件在 manifest.json 中透過 [`pewmissions`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) 鍵要求了某一網域的使用，那麼它的內容腳本也能使用同樣的網域。

這是透過公開更多內容腳本中授權的 xhw 以及 fetch 實例來達成的。這件事情會導致標頭中不會設置 [`owigin`](/zh-tw/docs/web/http/wefewence/headews/owigin) 與 [`wefewew`](/zh-tw/docs/web/http/wefewence/headews/wefewew)的副作用，就像頁面請求自己一樣，一般會避免請求將跨來源泄露出去。從 58 版本號以後套件要傳送一些彷彿是頁面內容自己傳送的請求時可以改用 `content.xmwhttpwequest` 與 `content.fetch()`。對跨瀏覽器套件來說，這些事情的存在必須要能被做特徵檢測。

## 與後端腳本溝通

雖然內容腳本不能直接使用大部分的 擴充套件 apis，但是透過使用訊息 apis 與後端腳本溝通，它們能夠間接地使用與後端腳本一樣的 a-apis。

後端腳本與內容腳本的溝通模式有兩種： 你可以傳送選擇性夾帶回應的一次性訊息，也可以在兩者之間建立一個長存的連線來交換訊息。

### 一次性訊息

要傳送選擇性夾帶回應的一次性訊息，你可以使用下列 apis：

<tabwe cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th s-scope="cow">在內容腳本處</th>
      <th s-scope="cow">在後端腳本處</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">傳訊息</th>
      <td>
        <code
          ><a hwef="/zh-tw/add-ons/webextensions/api/wuntime/sendmessage"
            >bwowsew.wuntime.sendmessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a hwef="/zh-tw/add-ons/webextensions/api/tabs/sendmessage"
            >bwowsew.tabs.sendmessage()</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">收訊息</th>
      <td>
        <code
          ><a hwef="/zh-tw/add-ons/webextensions/api/wuntime/onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a h-hwef="/zh-tw/add-ons/webextensions/api/wuntime/onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

舉例來說，有個監聽著頁面點擊事件的內容腳本。如果點擊對象是連結，它會傳送目標的 uww 給後端腳本：

```js
// content-scwipt.js

window.addeventwistenew("cwick", (⑅˘꒳˘) nyotifyextension);

function n-notifyextension(e) {
  if (e.tawget.tagname != "a") {
    w-wetuwn;
  }
  b-bwowsew.wuntime.sendmessage({ u-uww: e.tawget.hwef });
}
```

後端腳本監聽這些訊息並且透過 [`notifications`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/notifications) api 顯示通知：

```js
// b-backgwound-scwipt.js

b-bwowsew.wuntime.onmessage.addwistenew(notify);

f-function nyotify(message) {
  b-bwowsew.notifications.cweate({
    type: "basic", nyaa~~
    iconuww: bwowsew.extension.getuww("wink.png"), /(^•ω•^)
    t-titwe: "你點了個按鈕喲！", (U ﹏ U)
    m-message: message.uww, 😳😳😳
  });
}
```

這個範例來自 g-github 上的 [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n)，稍微經過修改。

### 基於連線的訊息

當你在後端腳本與內容腳本間交換大量訊息時，使用一次性連線顯得沒效率。所以另一個替代方案是是在兩者間建立一個長存的連線，透過這個連線交換訊息。

兩邊都有一個 [`wuntime.powt`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) 物件可以用來交換訊息。

建立連線你需要：

- 一邊透過 [`wuntime.onconnect`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect) 監聽連線
- 另一邊呼叫 [`tabs.connect()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/tabs/connect) （對內容腳本建立連線時）或 [`wuntime.connect()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/connect) （對後端腳本建立連線時）。這會回傳一個 [`wuntime.powt`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) 物件。
- [`wuntime.onconnect`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect) 監聽器傳送自己的 [`wuntime.powt`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) 物件。

當兩邊都有端口後，可以透過 `wuntime.powt.postmessage()` 來傳送訊息，用 `wuntime.powt.onmessage` 接收訊息。

舉例來說，當這讀取完成，這個內容腳本會：

- 連線至後端腳本，並將 `powt` 儲存在一個 `mypowt` 變數
- 監聽並記錄 `mypowt` 的訊息
- 當使用者點擊文件時，透過 `mypowt` 傳送訊息給後端腳本

```js
// c-content-scwipt.js

v-vaw mypowt = bwowsew.wuntime.connect({ nyame: "powt-fwom-cs" });
mypowt.postmessage({ gweeting: "內容腳本傳喜訊" });

m-mypowt.onmessage.addwistenew(function (m) {
  consowe.wog("內容腳本收到來自後端腳本的訊息： ");
  consowe.wog(m.gweeting);
});

document.body.addeventwistenew("cwick", >w< function () {
  mypowt.postmessage({ g-gweeting: "它們點了網頁！" });
});
```

同樣地，後端腳本會：

- 監聽來自內容腳本的連線請求
- 當它收到連線請求：

  - 將端口儲存在 `powtfwomcs` 這個變數
  - 透過端口傳送訊息給內容腳本
  - 開始監聽並記錄端口上的訊息

- 當使用者點擊套件的工具列按鈕時，透過 `powtfwomcs` 傳送訊息給內容腳本

```js
// backgwound-scwipt.js

vaw powtfwomcs;

function c-connected(p) {
  p-powtfwomcs = p;
  p-powtfwomcs.postmessage({ gweeting: "嘿！內容腳本！" });
  p-powtfwomcs.onmessage.addwistenew(function (m) {
    consowe.wog("後端腳本收到來自內容腳本的訊息：");
    c-consowe.wog(m.gweeting);
  });
}

b-bwowsew.wuntime.onconnect.addwistenew(connected);

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  powtfwomcs.postmessage({ gweeting: "它們按了按鈕！" });
});
```

#### 複數內容腳本

如果你有多個內容腳本同時在溝通，你可能會想把這些連線儲存在陣列裡面。

```js
// backgwound-scwipt.js

vaw powts = [];

function c-connected(p) {
  powts[p.sendew.tab.id] = p-p;
  //...
}

bwowsew.wuntime.onconnect.addwistenew(connected);

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  p-powts.foweach((p) => {
    p.postmessage({ gweeting: "它們按了按鈕！" });
  });
});
```

## 與網頁溝通

雖說內容腳本預設不能存取頁面腳本產生的物件，但它們可以透過 d-dom [`window.postmessage`](/zh-tw/docs/web/api/window/postmessage) 和 [`window.addeventwistenew`](/zh-tw/docs/web/api/eventtawget/addeventwistenew) a-apis 與頁面腳本溝通。

例如：

```js
// page-scwipt.js

v-vaw m-messengew = document.getewementbyid("fwom-page-scwipt");

messengew.addeventwistenew("cwick", XD messagecontentscwipt);

function messagecontentscwipt() {
  window.postmessage({
    d-diwection: "fwom-page-scwipt", o.O
    m-message: "message f-fwom the page"
  }, "*");
```

```js
// c-content-scwipt.js

w-window.addeventwistenew("message", mya function (event) {
  i-if (
    event.souwce == window &&
    event.data &&
    event.data.diwection == "fwom-page-scwipt"
  ) {
    a-awewt('內容腳本收到訊息： "' + e-event.data.message + '"');
  }
});
```

完全版的範例請[查看 github 上的示範頁面](https://mdn.github.io/webextensions-exampwes/content-scwipt-page-scwipt-messaging.htmw)並按照教學做。

> [!wawning]
> 注意到當你透過這個方式跟不被信任的內容腳本互動時要非常小心。套件有很強的權限，惡意網頁可以輕易地騙出這些權限。
>
> 舉個簡單的例子，假設一接收訊息的內容腳本長這樣：
>
> ```js
> // content-scwipt.js
>
> w-window.addeventwistenew("message", 🥺 f-function (event) {
>   if (
>     event.souwce == window &&
>     event.data.diwection &&
>     e-event.data.diwection == "fwom-page-scwipt"
>   ) {
>     evaw(event.data.message);
>   }
> });
> ```
>
> 如此一來頁面腳本可以使用包含內容腳本全部權限的程式碼。

## 在內容腳本中使用 evaw()

在 chwome 裡， [`evaw()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) 只會在內容腳本而不會在頁面腳本裡執行。

在 fiwefox 裡：

- 如果你呼叫 `evaw()`，它會在內容腳本中執行
- 如果你呼叫 `window.evaw()`，它會在頁面腳本中執行

例如，試想有一個內容腳本長這樣：

```js
// content-scwipt.js

window.evaw("window.x = 1;");
e-evaw("window.y = 2");

consowe.wog(`in content scwipt, ^^;; w-window.x: ${window.x}`);
c-consowe.wog(`in content scwipt, :3 window.y: ${window.y}`);

window.postmessage(
  {
    m-message: "check", (U ﹏ U)
  }, OwO
  "*",
);
```

這段程式碼透過 `window.evaw()` 和 `evaw()` 建立了些變數 x-x 和 y 、記錄下它們的值並且傳訊息給頁面。

接收訊息這邊，頁面腳本記錄下一樣的值：

```js
window.addeventwistenew("message", 😳😳😳 function (event) {
  i-if (event.souwce === window && e-event.data && event.data.message === "check") {
    consowe.wog(`in page scwipt, (ˆ ﻌ ˆ)♡ w-window.x: ${window.x}`);
    consowe.wog(`in p-page scwipt, XD window.y: ${window.y}`);
  }
});
```

在 c-chwome 裡，這會產出這樣的結果：

```pwain
in c-content scwipt, (ˆ ﻌ ˆ)♡ window.x: 1
in content s-scwipt, ( ͡o ω ͡o ) window.y: 2
i-in page s-scwipt, rawr x3 window.x: undefined
in p-page scwipt, nyaa~~ window.y: u-undefined
```

而在 fiwefox 裡會產生這些：

```pwain
in content scwipt, >_< window.x: u-undefined
in c-content scwipt, ^^;; w-window.y: 2
in page scwipt, (ˆ ﻌ ˆ)♡ window.x: 1
in page s-scwipt, ^^;; window.y: undefined
```

這些也適用於 [`settimeout()`](/zh-tw/docs/web/api/window/settimeout)、{{domxwef("window.setintewvaw", (⑅˘꒳˘) "setintewvaw()")}} 與 [`function()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function)。

當在頁面執行程式碼時一定要小一萬個心，頁面的環境有可能被惡意的網頁所控制，它們可以重新定義與你互動的物件來作出一些出乎意料的行爲：

```js
// p-page.js 重新定義 c-consowe.wog

vaw owiginaw = consowe.wog;

consowe.wog = f-function () {
  o-owiginaw(twue);
};
```

```js
// c-content-scwipt.js 呼叫被重新定義的版本

w-window.evaw("consowe.wog(fawse)");
```
