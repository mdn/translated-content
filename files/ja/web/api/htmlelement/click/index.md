---
title: "HTMLElement: click() メソッド"
short-title: click()
slug: Web/API/HTMLElement/click
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.click()`** メソッドは、要素のマウスクリックをシミュレートします。要素上で呼び出されると、その要素の {{domxref("Element/click_event", "click")}} イベントが発生します（[`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) 属性が設定されている場合を除く）。

## 構文

```js-nolint
click()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

チェックボックスの上にマウスポインターを移動させたときのマウスクリックをシミュレートします。

### HTML

```html
<form>
  <input type="checkbox" id="myCheck" />
</form>
```

### JavaScript

```js
const checkbox = document.getElementById("myCheck");

// マウスオーバー時に処理を実行
checkbox.addEventListener("mouseover", () => {
  // マウスクリックをシミュレート
  checkbox.click();
});

checkbox.addEventListener("click", () => {
  console.log("click event occurred");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連するイベントハンドラー
  - {{domxref("Element.click_event", "Element.onclick")}}
  - {{domxref("Element.dblclick_event", "Element.ondblclick")}}
  - {{domxref("Element.auxclick_event", "Element.onauxclick")}}
