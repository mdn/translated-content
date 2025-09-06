---
title: Window：popstate 事件
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("History API")}}

當使用者導覽工作階段歷史紀錄時，若活動中的歷史紀錄項目發生變更，{{domxref("Window")}} 介面的 **`popstate`** 事件就會被觸發。它會將目前的歷史紀錄項目變更為使用者上次造訪的頁面，或者，如果曾使用 {{domxref("history.pushState()")}} 將歷史紀錄項目新增至歷史紀錄堆疊中，則會改用該歷史紀錄項目。

## 語法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名稱，或設定事件處理常式屬性。

```js-nolint
addEventListener("popstate", (event) => { })

onpopstate = (event) => { }
```

## 事件類型

一個 {{domxref("PopStateEvent")}}。繼承自 {{domxref("Event")}}。

{{InheritanceDiagram("PopStateEvent")}}

## 事件屬性

- {{domxref("PopStateEvent.state")}} {{ReadOnlyInline}}
  - : 回傳提供給 `pushState()` 或 `replaceState()` 的訊息副本。

## 事件處理常式別名

除了 `Window` 介面外，`onpopstate` 事件處理常式屬性也可用於下列元素：

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 歷史紀錄堆疊

如果正在啟用的歷史紀錄項目是由呼叫 [`history.pushState()`](/zh-TW/docs/Web/API/History/pushState) 所建立，或受到呼叫 [`history.replaceState()`](/zh-TW/docs/Web/API/History/replaceState) 的影響，則 `popstate` 事件的 `state` 屬性會包含該歷史紀錄項目狀態物件的副本。

這些方法及其對應的事件可用於將資料新增至歷史紀錄堆疊，這些資料可用於重建動態產生的頁面，或在停留在同一個 {{domxref("Document")}} 的同時，以其他方式變更所呈現內容的狀態。

請注意，僅呼叫 `history.pushState()` 或 `history.replaceState()` 不會觸發 `popstate` 事件。`popstate` 事件會由瀏覽器操作觸發，例如點擊上一頁或下一頁按鈕（或在 JavaScript 中呼叫 `history.back()` 或 `history.forward()`）。

瀏覽器在頁面載入時處理 `popstate` 事件的方式往往不同。Chrome（v34 之前）和 Safari 總是在頁面載入時發出 `popstate` 事件，但 Firefox 不會。

> [!NOTE]
> 在編寫處理 `popstate` 事件的函式時，務必考量到 `window.location` 等屬性可能已經反映了狀態變更（如果它影響了目前的 URL），但 `document` 可能還沒有。如果目標是捕捉新文件狀態已完全就緒的時刻，應使用零延遲的 {{domxref("Window.setTimeout", "setTimeout()")}} 方法呼叫，以有效地將其內部執行處理的*回呼*函式置於瀏覽器事件迴圈的末端：`window.onpopstate = () => setTimeout(doSomeThing, 0);`

## popstate 的發送時機

首先，務必了解——為了對抗不必要的彈出視窗——除非頁面曾被互動過，否則瀏覽器可能根本不會觸發 `popstate` 事件。

本節描述了瀏覽器在*確實*可能觸發 `popstate` 事件的情況下（也就是頁面曾被互動過的情況下）所遵循的步驟。

當導覽發生時（無論是使用者觸發瀏覽器的 <kbd>上一頁</kbd> 按鈕或其他方式）`popstate` 事件會在導覽至新位置過程的尾聲發生。它發生在新位置載入（如有需要）、顯示、變為可見等等之後——在 {{domxref("Window/pageshow_event", "pageshow")}} 事件發送之後，但在持久化的使用者狀態訊息恢復以及 {{domxref("Window/hashchange_event", "hashchange")}} 事件發送之前。

為了更清楚地了解 `popstate` 事件何時觸發，請思考當使用者導覽網站或以程式設計方式遍歷歷史紀錄時，目前歷史紀錄項目發生變更時所發生的簡化事件序列。在此，轉換會將目前的歷史紀錄項目變更為我們稱之為 **new-entry** 的項目。目前頁面的工作階段歷史紀錄堆疊項目將被稱為 **current-entry**。

1. 如果 **new-entry** 目前不包含現有的 {{domxref("Document")}}，則在繼續之前擷取內容並建立其 `Document`。這最終會將 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 和 {{domxref("Window/load_event", "load")}} 等事件發送到包含該文件的 {{domxref("Window")}}，但與此同時，以下步驟將繼續執行。
2. 如果 **current-entry** 的標題不是使用 History API 方法（{{domxref("History.pushState", "pushState()")}} 或 {{domxref("History.replaceState", "replaceState()")}}）設定的，則將該項目的標題設定為其 {{domxref("document.title")}} 屬性回傳的字串。
3. 如果瀏覽器有希望在導覽離開 **current-entry** 之前與其一起儲存的狀態訊息，它就會這麼做。該項目現在被稱為具有「持久化的使用者狀態」。瀏覽器可能新增到歷史紀錄工作階段項目的訊息可能包括，例如，文件的捲動位置、表單輸入的值以及其他此類資料。
4. 如果 **new-entry** 的 `Document` 物件與 **current-entry** 不同，則會更新瀏覽上下文，使其 {{domxref("Window.document", "document")}} 屬性參照 **new-entry** 所參照的文件，並且上下文的名稱會更新以匹配現在目前文件的上下文名稱。
5. **new-entry** 的 {{domxref("Document")}} 中，每個將 [`autocomplete`](/zh-TW/docs/Web/HTML/Reference/Elements/input#autocomplete) 組態為自動填入欄位名稱設定為 `off` 的表單控制項都會被重設。有關自動填入欄位名稱以及自動填入如何運作的更多訊息，請參見 [HTML autocomplete 屬性](/zh-TW/docs/Web/HTML/Reference/Attributes/autocomplete)。
6. 如果 **new-entry** 的文件已經完全載入並準備就緒——也就是說，其 {{domxref("Document.readyState", "readyState")}} 為 `complete`——且該文件尚未可見，則會使其可見，並向該文件觸發 {{domxref("Window/pageshow_event", "pageshow")}} 事件，其中 {{domxref("PageTransitionEvent")}} 的 {{domxref("PageTransitionEvent.persisted", "persisted")}} 屬性設定為 `true`。
7. 文件的 {{domxref("Document.URL", "URL")}} 會設定為 **new-entry** 的 URL。
8. 如果歷史紀錄遍歷是在啟用替換的情況下執行的，則緊接在目標項目之前的項目（考慮到 {{domxref("History.go", "go()")}} 等方法上的 `delta` 參數）將從歷史紀錄堆疊中移除。
9. 如果 **new-entry** 沒有持久化的使用者狀態，且其 URL 的片段不為 `null`，則文件會捲動到該片段。
10. 接著，**current-entry** 會設定為 **new-entry**。目標項目現在被視為目前的項目。
11. 如果 **new-entry** 儲存了序列化的狀態訊息，則該訊息會反序列化到 {{domxref("History.state")}} 中；否則，`state` 為 `null`。
12. 如果 `state` 的值發生變更，則會向文件發送 `popstate` 事件。
13. 如果瀏覽器選擇這樣做，任何持久化的使用者狀態都會被恢復。
14. 如果原始項目和新項目共用相同的文件，但其 URL 中的片段不同，則向視窗發送 {{domxref("Window.hashchange_event", "hashchange")}} 事件。

如你所見，`popstate` 事件幾乎是以這種方式導覽頁面過程中的最後一件事。

## 範例

在 `http://example.com/example.html` 的頁面執行以下程式碼將產生如下所示的日誌：

```js
window.addEventListener("popstate", (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});
history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // 記錄 "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // 記錄 "location: http://example.com/example.html, state: null"
history.go(2); // 記錄 "location: http://example.com/example.html?page=3, state: {"page":3}"
```

使用 `onpopstate` 事件處理常式屬性的相同範例：

```js
window.onpopstate = (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
};
history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // 記錄 "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // 記錄 "location: http://example.com/example.html, state: null"
history.go(2); // 記錄 "location: http://example.com/example.html?page=3, state: {"page":3}"
```

請注意，即使原始的歷史紀錄項目（`http://example.com/example.html` 的項目）沒有與其關聯的狀態物件，當我們在第二次呼叫 `history.back()` 後啟用該項目時，仍然會觸發 `popstate` 事件。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [操作瀏覽器歷史紀錄（History API）](/zh-TW/docs/Web/API/History_API)
- [Window：`hashchange` 事件](/zh-TW/docs/Web/API/Window/hashchange_event)
