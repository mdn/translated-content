---
title: 事件處理（概覽）
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

事件是在瀏覽器視窗內觸發的信號，用以通知瀏覽器或作業系統環境的變化。程式設計師可以建立*事件處理器*程式碼，當事件觸發時執行，讓網頁能對變化做出適當的回應。

本頁面提供了一個關於如何使用事件和事件處理器的非常簡短的「提醒」。新開發者應改為閱讀[事件簡介](/zh-TW/docs/Learn_web_development/Core/Scripting/Events)。

## 有哪些可用的事件？

事件記載於發出它們的 JavaScript 物件頁面中，或其下方。例如，要查找在瀏覽器視窗或當前文件上觸發的事件，請參閱 [`Window`](/zh-TW/docs/Web/API/Window#事件) 和 [`Document`](/zh-TW/docs/Web/API/Document#事件) 中的事件章節。

你可以使用[事件參考](/zh-TW/docs/Web/Events#event_index)來查找哪些 JavaScript 物件會為特定的 API（例如動畫、媒體等）觸發事件。

## 註冊事件處理器

有兩種推薦的註冊處理器的方法。可以透過將事件處理器程式碼指派給目標元素對應的 _onevent_ 屬性，或使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 方法將處理器註冊為元素的監聽器，來讓事件處理器程式碼在事件觸發時執行。無論哪種情況，處理器都會收到一個符合 [`Event` 介面](/zh-TW/docs/Web/API/Event)（或[衍生介面](/zh-TW/docs/Web/API/Event#interfaces_based_on_event)）的物件。主要區別在於，使用事件監聽器方法可以新增（或移除）多個事件處理器。

> [!WARNING]
> 不建議使用第三種方法：HTML onevent 屬性來設定事件處理器！它們會使標記膨脹，降低可讀性，並增加除錯難度。更多資訊請參閱[行內事件處理器](/zh-TW/docs/Learn_web_development/Core/Scripting/Events#行內事件處理器——不要使用)。

### 使用 onevent 屬性

按照慣例，觸發事件的 JavaScript 物件都有一個對應的「onevent」屬性（以事件名稱加上「on」前綴命名）。當事件觸發時，會呼叫這些屬性以執行相關的處理器程式碼，你也可以在自己的程式碼中直接呼叫它們。

要設定事件處理器程式碼，你只需將其指派給適當的 onevent 屬性即可。每個元素的每個事件只能指派一個事件處理器。如有需要，可以透過將另一個函式指派給同一個屬性來替換處理器。

下面我們展示如何使用 `onclick` 屬性為 `click` 事件設定一個 `greet()` 函式。

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("打招呼：", event);
}

btn.onclick = greet;
```

請注意，代表事件的物件會作為第一個引數傳遞給事件處理器。這個事件物件實作了 {{domxref("Event")}} 介面，或是由其衍生而來。

### EventTarget.addEventListener

在元素上設定事件處理器最靈活的方法是使用 {{domxref("EventTarget.addEventListener")}} 方法。這種方法允許為一個元素指派多個監聽器，並在需要時*移除*監聽器（使用 {{domxref("EventTarget.removeEventListener")}}）。

> [!NOTE]
> 新增和移除事件處理器的能力，讓你可以（舉例來說）讓同一個按鈕在不同情況下執行不同的動作。此外，在更複雜的程式中，清理舊的／未使用的事件處理器可以提高效率。

下面我們展示如何將 `greet()` 函式設定為 `click` 事件的監聽器／事件處理器（如果你願意，也可以使用匿名函式表達式來代替具名函式）。再次注意，事件會作為第一個引數傳遞給事件處理器。

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("打招呼：", event);
}

btn.addEventListener("click", greet);
```

此方法還可以接受額外的引數／選項，以控制事件捕獲和移除的方式。更多資訊可以在 {{domxref("EventTarget.addEventListener")}} 參考頁面中找到。

#### 使用中止信號

一個值得注意的事件監聽器特性是能夠使用中止信號同時清理多個事件處理器。

做法是將同一個 {{domxref("AbortSignal")}} 傳遞給你想要能夠一起移除的所有事件處理器的 {{domxref("EventTarget/addEventListener()", "addEventListener()")}} 呼叫中。然後你可以在擁有該 `AbortSignal` 的控制器上呼叫 {{domxref("AbortController/abort()", "abort()")}}，這將會移除所有用該信號新增的事件處理器。例如，要新增一個可以用 `AbortSignal` 移除的事件處理器：

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("打招呼：", event);
  },
  { signal: controller.signal },
); // 將一個 AbortSignal 傳遞給此處理器
```

然後，由上述程式碼建立的事件處理器可以像這樣移除：

```js
controller.abort(); // 移除與此控制器相關的任何／所有事件處理器
```

<section id="Quick_links">
  <ol>
    <li><a href="/zh-TW/docs/Learn_web_development/Core/Scripting/Events">事件簡介</a></li>
    <li><a href="/zh-TW/docs/Web/Events">事件參考</a></li>
    <li><a href="/zh-TW/docs/Web/Events/Creating_and_triggering_events">建立和觸發事件</a></li>
    <li><a href="/zh-TW/docs/Web/Events/Event_handlers">事件處理（概覽）</a></li>
  </ol>
</section>
