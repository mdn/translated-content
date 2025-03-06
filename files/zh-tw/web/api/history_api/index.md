---
title: 操控瀏覽器歷史紀錄
slug: Web/API/History_API
---

{{DefaultAPISidebar("History API")}}

DOM {{ domxref("window") }} 物件透過 {{ domxref("window.history", "history") }} 物件，提供了進入瀏覽歷史的方式。他透過一些方便的屬性與方法，讓你可以在歷史紀錄中往上一步或往下一步移動，並且讓你——從 HTML5 開始——能操作歷史紀錄堆疊（history stack）的內容。

## 在歷史紀錄中移動

往前往後歷史紀錄可以用 `back()`, `forward()`, 和 `go()` 的方法。

### 往前往後

要在歷史紀錄中往上一步移動，可以：

```js
window.history.back();
```

這完全等同於用戶在瀏覽器上點選「上一頁」按鈕。

同樣的，你也可以往下一步移動（等同於用戶點擊往後一頁的按鈕）：

```js
window.history.forward();
```

### 移動到特定的歷史紀錄

你可以用 `go()` 方法來從頁面的 session history 紀錄中載入特定紀錄，以目前頁面的相對位置而定（目前的頁面想當然爾是 index 0）。

往前一頁（等同於呼叫 `back()`）：

```js
window.history.go(-1);
```

往後一頁（等同於呼叫 `forward()`）：

```js
window.history.go(1);
```

同樣的你也可以傳入 2，讓頁面直往後兩頁，依此類推。

你可以查看 length 這個屬性來取得目前瀏覽歷史的總數我：

```js
var numberOfEntries = window.history.length;
```

> [!NOTE]
> Internet Explorer 支援在 `go()` 中以 URL 的值作為參數；這不在標準中，Gecko 也不支援。

## 加入和修改歷史紀錄

HTML5 加入了 [`history.pushState()`](/zh-TW/docs/Web/API/History/pushState) 和 [`history.replaceState()`](</zh-TW/docs/Web/API/History_API#The_replaceState()_method>) 方法，讓你可以加入或修改歷史紀錄。這些方法都可以跟 {{ domxref("window.onpopstate") }} 事件一同應用。

使用 `history.pushState()`後，會改變 [`XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest) 時 HTTP 標頭中 referrer 的值。referrer 會是創造 [`XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest) 物件時的當前視窗文件（`this`）的 URL。

### pushState() 方法範例

假設 `http://mozilla.org/foo.html` 執行了下面的 JavaScript：

```js
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
```

這會讓網址列顯示 `http://mozilla.org/bar.html`，但不會讓瀏覽器去載入 `bar.html`，甚或去檢查 `bar.html` 存在與否。

假設現在使用者瀏覽到 `http://google.com`，然後點擊上一頁鈕。這時網址列會顯示 `http://mozilla.org/bar.html`，頁面會獲得 `popstate` 的事件（_state object_ 會包含一份 `stateObj` 的副件）。頁面長得跟 `foo.html` 很像，但是可能在 `popstate` 事件執行中被修改。

如果我再點一次上一頁鈕， 網址會改變成為 `http://mozilla.org/foo.html`，且文件會得到另外一個 `popstate` 事件，此次會包含一個 null state object。同樣的，回上頁鈕不會改變文件的內容，只是文件可能會在 `popstate` 事件中被手動更新。

### pushState() 方法

`pushState()` 取用三個參數：一個 state 物件、title（目前忽略）與 URL（可選用）。我們來看看三個參數的細節之處：

- **state object**——state object 是與 `pushState()` 建立的新瀏覽歷史紀錄有關的一個 JavaScript 物件。只要使用者到了新的 state ，一個 `popstate` 的事件就會被觸發，然後該事件的 `state` 屬性會包含一個複製的歷史紀錄的 state object。

  state 物件可以是任何可序列化的東西。因為 Firefox 儲存 state 物件到使用者的硬碟，當瀏覽器被重新啟動的時候，他們是可以被恢復的，因此我們加上了 640k 個字元的長度限制在一個以序列化表示的 state object。如果你傳送一個比這個更大的序列化表示的 state object 到 `pushState()`，這個方法會丟出一個例外事件。如果你需要更多空間的話，你可以試著用 `sessionStorage` 和／或 `localStorage`。

- **title**——Firefox 目前忽略了這個參數，雖然他以後有可能會採用。如果以後改變了這個作法，傳送空白的字串應該還會是安全的。另外，你可以傳送一個短的標題來敘述你想要到的 state。
- **URL**——這個新歷史紀錄的 URL 從這個參數做設定。值得注意的是，在 `pushState()` 被呼叫之後，瀏覽器並不會馬上嘗試載入這個 URL ，但是它可能在以後嘗試載入這個 URL ，例如使用者重新開啟瀏覽器之後。新的 URL 不一定需要為一個絕對的路徑；如果是相對路徑，會依據目前的 URL 來解析。新的 URL 需要與目前 URL 的 origin 是一樣的；否則，pushState() 會丟出一個錯誤的例外。這個參數是選擇性的；如果沒有被指定的話，他會設定為目前文件的 URL。

> [!NOTE]
> 在 Gecko 2.0 到 Gecko 5.0，是採用 JSON 來序列化這個傳送的物件。從 Gecko 6.0 開始,這個物件是以 [the structured clone algorithm](/zh-TW/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) 序列化。這會允許更多種不同的物件可以被安全的傳送。

從某種意義上，呼叫 `pushState()` 與設定 `window.location = "#foo"` 是類似的，兩個都會去建立和啟用另一個和目前文件有關的歷史紀錄。但是 `pushState()` 有一些優勢：

- 新的 URL 可以是任何一個與目前的 URL 在同一個 origin 的 URL。相對來說，只有你設定 `window.location` 只修改 hash 時，才讓你保持在同一個 {{ domxref("document") }} 。
- 如果你不想要的話，你可以不必去改變 URL 。相對來說，設定 `window.location = "#foo";` 只有在目前的 hash 不是 `#foo` 的時候，會建立一個新的歷史紀錄。
- 你可以將任意的資料與你的新的歷史紀錄做關聯。用 hash-based 的方法，你需要將所有相關的資料編碼成一個短字串。
- If `title` is subsequently used by browsers, this data can be utilized (independent of, say, the hash).

注意 `pushState()` 永遠不會造成一個 `hashchange` 事件被觸發，即使新的 URL 和舊的 URL 的不同處只有 hash 的部份也不會。

In a [XUL](/zh-TW/docs/Mozilla/Tech/XUL) document, it creates the specified XUL element.

In other documents, it creates an element with a `null` namespace URI.

### replaceState() 方法

`history.replaceState()` 的執行就像 `history.pushState()` ，除了 `replaceState()` 是修改目前的歷史紀錄而不是創造一個新的。

`replaceState()` 很實用的時機是當你要更新目前歷史紀錄的 state object 或是 URL 來反應一些使用者的動作時。

> [!NOTE]
> 在 Gecko 2.0 到 Gecko 5.0，是採用 JSON 來序列化這個傳送的物件。從 Gecko 6.0 開始, 這個物件是以 [the structured clone algorithm](/zh-TW/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) 序列化。這會允許更多種不同的物件可以被安全的傳送。

### replaceState() 方法範例

Suppose `http://mozilla.org/foo.html` executes the following JavaScript:

```js
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
```

The explanation of these two lines above can be found at "Example of pushState() method" section. Then suppose `http://mozilla.org/bar.html` executes the following JavaScript:

```js
history.replaceState(stateObj, "page 3", "bar2.html");
```

This will cause the URL bar to display `http://mozilla.org/bar2.html`, but won't cause the browser to load `bar2.html` or even check that `bar2.html` exists.

Suppose now that the user now navigates to `http://www.microsoft.com`, then clicks back. At this point, the URL bar will display `http://mozilla.org/bar2.html`. If the user now clicks back again, the URL bar will display `http://mozilla.org/foo.html`, and totaly bypass bar.html.

### popstate 事件

每次 active 的歷史紀錄被更動的時候，一個 `popstate` 事件會被發送到目前的 window。如果被啟用的歷史紀錄是由於呼叫 `pushState` 建立的或是呼叫 `replaceState` 所影響的，這個 `popstate` 事件的 `state` 屬性會含有一個歷史紀錄的 state object 的副本。

使用範例參閱 {{ domxref("window.onpopstate") }}。

### 讀取目前的 state

當你讀取頁面的時候，可能會有 non-null state 的物件。這會發生在，例如說，如果設定一個 state 物件（用 `pushState()` 或是 `replaceState()`），然後使用者重新啟動他的瀏覽器。當重新讀取你的頁面的時候，頁面會得到一個 `onload` 事件，但是沒有 `popstate` 事件。然而，如果你讀取了 `history.state` 屬性，你會得到像是 `popstate` 被觸發時，你會得到的 state object 。

像這樣使用 `history.state` 屬性，你可以讀取目前的歷史紀錄的`狀態`而不需要等待一個 `popstate` 事件：

```js
var currentState = history.state;
```

## 範例

完整的 AJAX 網站範例 ，請參閱：[Ajax navigation example](/zh-TW/docs/Web/API/History_API/Working_with_the_History_API)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
