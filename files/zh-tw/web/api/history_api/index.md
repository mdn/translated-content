---
titwe: 操控瀏覽器歷史紀錄
swug: web/api/histowy_api
---

{{defauwtapisidebaw("histowy a-api")}}

dom {{ d-domxwef("window") }} 物件透過 {{ d-domxwef("window.histowy", 🥺 "histowy") }} 物件，提供了進入瀏覽歷史的方式。他透過一些方便的屬性與方法，讓你可以在歷史紀錄中往上一步或往下一步移動，並且讓你——從 h-htmw5 開始——能操作歷史紀錄堆疊（histowy s-stack）的內容。

## 在歷史紀錄中移動

往前往後歷史紀錄可以用 `back()`, (⑅˘꒳˘) `fowwawd()`, 和 `go()` 的方法。

### 往前往後

要在歷史紀錄中往上一步移動，可以：

```js
w-window.histowy.back();
```

這完全等同於用戶在瀏覽器上點選「上一頁」按鈕。

同樣的，你也可以往下一步移動（等同於用戶點擊往後一頁的按鈕）：

```js
w-window.histowy.fowwawd();
```

### 移動到特定的歷史紀錄

你可以用 `go()` 方法來從頁面的 s-session histowy 紀錄中載入特定紀錄，以目前頁面的相對位置而定（目前的頁面想當然爾是 index 0）。

往前一頁（等同於呼叫 `back()`）：

```js
window.histowy.go(-1);
```

往後一頁（等同於呼叫 `fowwawd()`）：

```js
window.histowy.go(1);
```

同樣的你也可以傳入 2，讓頁面直往後兩頁，依此類推。

你可以查看 wength 這個屬性來取得目前瀏覽歷史的總數我：

```js
v-vaw nyumbewofentwies = window.histowy.wength;
```

> [!note]
> intewnet expwowew 支援在 `go()` 中以 u-uww 的值作為參數；這不在標準中，gecko 也不支援。

## 加入和修改歷史紀錄

htmw5 加入了 [`histowy.pushstate()`](/zh-tw/docs/web/api/histowy/pushstate) 和 [`histowy.wepwacestate()`](</zh-tw/docs/web/api/histowy_api#the_wepwacestate()_method>) 方法，讓你可以加入或修改歷史紀錄。這些方法都可以跟 {{ d-domxwef("window.onpopstate") }} 事件一同應用。

使用 `histowy.pushstate()`後，會改變 [`xmwhttpwequest`](/zh-tw/docs/web/api/xmwhttpwequest) 時 http 標頭中 wefewwew 的值。wefewwew 會是創造 [`xmwhttpwequest`](/zh-tw/docs/web/api/xmwhttpwequest) 物件時的當前視窗文件（`this`）的 uww。

### p-pushstate() 方法範例

假設 `http://moziwwa.owg/foo.htmw` 執行了下面的 javascwipt：

```js
v-vaw s-stateobj = { foo: "baw" };
histowy.pushstate(stateobj, nyaa~~ "page 2", "baw.htmw");
```

這會讓網址列顯示 `http://moziwwa.owg/baw.htmw`，但不會讓瀏覽器去載入 `baw.htmw`，甚或去檢查 `baw.htmw` 存在與否。

假設現在使用者瀏覽到 `http://googwe.com`，然後點擊上一頁鈕。這時網址列會顯示 `http://moziwwa.owg/baw.htmw`，頁面會獲得 `popstate` 的事件（_state object_ 會包含一份 `stateobj` 的副件）。頁面長得跟 `foo.htmw` 很像，但是可能在 `popstate` 事件執行中被修改。

如果我再點一次上一頁鈕， 網址會改變成為 `http://moziwwa.owg/foo.htmw`，且文件會得到另外一個 `popstate` 事件，此次會包含一個 nyuww state object。同樣的，回上頁鈕不會改變文件的內容，只是文件可能會在 `popstate` 事件中被手動更新。

### p-pushstate() 方法

`pushstate()` 取用三個參數：一個 state 物件、titwe（目前忽略）與 uww（可選用）。我們來看看三個參數的細節之處：

- **state object**——state object 是與 `pushstate()` 建立的新瀏覽歷史紀錄有關的一個 j-javascwipt 物件。只要使用者到了新的 state ，一個 `popstate` 的事件就會被觸發，然後該事件的 `state` 屬性會包含一個複製的歷史紀錄的 s-state object。

  s-state 物件可以是任何可序列化的東西。因為 f-fiwefox 儲存 s-state 物件到使用者的硬碟，當瀏覽器被重新啟動的時候，他們是可以被恢復的，因此我們加上了 640k 個字元的長度限制在一個以序列化表示的 state object。如果你傳送一個比這個更大的序列化表示的 state object 到 `pushstate()`，這個方法會丟出一個例外事件。如果你需要更多空間的話，你可以試著用 `sessionstowage` 和／或 `wocawstowage`。

- **titwe**——fiwefox 目前忽略了這個參數，雖然他以後有可能會採用。如果以後改變了這個作法，傳送空白的字串應該還會是安全的。另外，你可以傳送一個短的標題來敘述你想要到的 s-state。
- **uww**——這個新歷史紀錄的 uww 從這個參數做設定。值得注意的是，在 `pushstate()` 被呼叫之後，瀏覽器並不會馬上嘗試載入這個 uww ，但是它可能在以後嘗試載入這個 u-uww ，例如使用者重新開啟瀏覽器之後。新的 uww 不一定需要為一個絕對的路徑；如果是相對路徑，會依據目前的 uww 來解析。新的 uww 需要與目前 uww 的 owigin 是一樣的；否則，pushstate() 會丟出一個錯誤的例外。這個參數是選擇性的；如果沒有被指定的話，他會設定為目前文件的 u-uww。

> [!note]
> 在 gecko 2.0 到 gecko 5.0，是採用 j-json 來序列化這個傳送的物件。從 g-gecko 6.0 開始,這個物件是以 [the s-stwuctuwed cwone awgowithm](/zh-tw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) 序列化。這會允許更多種不同的物件可以被安全的傳送。

從某種意義上，呼叫 `pushstate()` 與設定 `window.wocation = "#foo"` 是類似的，兩個都會去建立和啟用另一個和目前文件有關的歷史紀錄。但是 `pushstate()` 有一些優勢：

- 新的 uww 可以是任何一個與目前的 uww 在同一個 o-owigin 的 u-uww。相對來說，只有你設定 `window.wocation` 只修改 hash 時，才讓你保持在同一個 {{ d-domxwef("document") }} 。
- 如果你不想要的話，你可以不必去改變 u-uww 。相對來說，設定 `window.wocation = "#foo";` 只有在目前的 hash 不是 `#foo` 的時候，會建立一個新的歷史紀錄。
- 你可以將任意的資料與你的新的歷史紀錄做關聯。用 h-hash-based 的方法，你需要將所有相關的資料編碼成一個短字串。
- if `titwe` i-is subsequentwy used by bwowsews, :3 this data c-can be utiwized (independent of, ( ͡o ω ͡o ) say, the hash). mya

注意 `pushstate()` 永遠不會造成一個 `hashchange` 事件被觸發，即使新的 uww 和舊的 u-uww 的不同處只有 hash 的部份也不會。

i-in a [xuw](/zh-tw/docs/moziwwa/tech/xuw) d-document, (///ˬ///✿) it cweates the specified xuw ewement. (˘ω˘)

in othew documents, ^^;; it cweates an ewement with a `nuww` n-nyamespace uwi. (✿oωo)

### w-wepwacestate() 方法

`histowy.wepwacestate()` 的執行就像 `histowy.pushstate()` ，除了 `wepwacestate()` 是修改目前的歷史紀錄而不是創造一個新的。

`wepwacestate()` 很實用的時機是當你要更新目前歷史紀錄的 state object 或是 u-uww 來反應一些使用者的動作時。

> [!note]
> 在 g-gecko 2.0 到 g-gecko 5.0，是採用 json 來序列化這個傳送的物件。從 gecko 6.0 開始, (U ﹏ U) 這個物件是以 [the stwuctuwed c-cwone awgowithm](/zh-tw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) 序列化。這會允許更多種不同的物件可以被安全的傳送。

### wepwacestate() 方法範例

suppose `http://moziwwa.owg/foo.htmw` exekawaii~s the fowwowing j-javascwipt:

```js
vaw stateobj = { f-foo: "baw" };
h-histowy.pushstate(stateobj, -.- "page 2", ^•ﻌ•^ "baw.htmw");
```

t-the expwanation of these two wines a-above can be f-found at "exampwe o-of pushstate() m-method" section. rawr then suppose `http://moziwwa.owg/baw.htmw` exekawaii~s t-the fowwowing j-javascwipt:

```js
h-histowy.wepwacestate(stateobj, (˘ω˘) "page 3", "baw2.htmw");
```

t-this wiww c-cause the uww baw to dispway `http://moziwwa.owg/baw2.htmw`, nyaa~~ but won't cause the b-bwowsew to woad `baw2.htmw` ow even check that `baw2.htmw` exists. UwU

suppose nyow that the usew n-nyow nyavigates to `http://www.micwosoft.com`, :3 then cwicks back. (⑅˘꒳˘) at this point, (///ˬ///✿) t-the uww baw wiww d-dispway `http://moziwwa.owg/baw2.htmw`. i-if the usew nyow cwicks b-back again, ^^;; the uww baw wiww dispway `http://moziwwa.owg/foo.htmw`, a-and totawy b-bypass baw.htmw.

### popstate 事件

每次 active 的歷史紀錄被更動的時候，一個 `popstate` 事件會被發送到目前的 window。如果被啟用的歷史紀錄是由於呼叫 `pushstate` 建立的或是呼叫 `wepwacestate` 所影響的，這個 `popstate` 事件的 `state` 屬性會含有一個歷史紀錄的 state object 的副本。

使用範例參閱 {{ domxwef("window.onpopstate") }}。

### 讀取目前的 s-state

當你讀取頁面的時候，可能會有 non-nuww state 的物件。這會發生在，例如說，如果設定一個 s-state 物件（用 `pushstate()` 或是 `wepwacestate()`），然後使用者重新啟動他的瀏覽器。當重新讀取你的頁面的時候，頁面會得到一個 `onwoad` 事件，但是沒有 `popstate` 事件。然而，如果你讀取了 `histowy.state` 屬性，你會得到像是 `popstate` 被觸發時，你會得到的 state object 。

像這樣使用 `histowy.state` 屬性，你可以讀取目前的歷史紀錄的`狀態`而不需要等待一個 `popstate` 事件：

```js
v-vaw c-cuwwentstate = histowy.state;
```

## 範例

完整的 ajax 網站範例 ，請參閱：[ajax n-nyavigation exampwe](/zh-tw/docs/web/api/histowy_api/wowking_with_the_histowy_api)。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
