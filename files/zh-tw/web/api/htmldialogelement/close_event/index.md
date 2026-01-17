---
title: HTMLDialogElement：close 事件
short-title: close
slug: Web/API/HTMLDialogElement/close_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

`close` 事件會在 `HTMLDialogElement` 物件所代表的 {{htmlelement("dialog")}} 被關閉時，在該物件上觸發。

此事件不可取消，且不會冒泡。

## 語法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名稱，或設定事件處理器屬性。

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## 事件類型

通用的 {{domxref("Event")}}。

## 範例

### 即時範例

#### HTML

```html
<dialog class="example-dialog">
  <form method="dialog">
    <button>透過 method="dialog" 關閉</button>
  </form>
  <button class="close">透過 .close() 方法關閉</button>
  <p>或按下 <kbd>Esc</kbd> 鍵</p>
</dialog>

<button class="open-dialog">開啟對話方塊</button>

<div class="result"></div>
```

```css hidden
button,
div {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const result = document.querySelector(".result");

const dialog = document.querySelector(".example-dialog");
dialog.addEventListener("close", (event) => {
  result.textContent = "對話方塊已關閉";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  dialog.showModal();
  result.textContent = "";
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### 結果

{{ EmbedLiveSample('即時範例', '100%', '200px') }}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTML [`<dialog>`](/zh-TW/docs/Web/HTML/Element/dialog) 元素
- [`Event`](/zh-TW/docs/Web/API/Event) 介面
