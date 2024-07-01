---
title: "HTMLInputElement: invalid イベント"
short-title: invalid
slug: Web/API/HTMLInputElement/invalid_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

**`invalid`** イベントは、送信可能な要素が制約検証を受け、制約を満たしていない場合に発行されます。

このイベントは、送信時にフォームの問題の概要を表示するのに便利です。フォームが送信されると、 `invalid` イベントがそれぞれの妥当ではない状態にあるフォームコントロールで発生します。送信可能な要素が妥当であるかどうかは、その所有者である {{HtmlElement("form")}} を送信する前、または [`checkValidity()`](/ja/docs/Web/API/HTMLInputElement/checkValidity) メソッドがその要素またはその所有者である `<form>` に呼び出された後にチェックされます。

{{domxref("Element/blur_event", "blur")}} ではチェックが行われません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("invalid", (event) => {});

oninvalid = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

フォームが無効な値で送信された場合、送信可能な要素がチェックされ、エラーが見つかった場合、無効な要素で `invalid` イベントが発生します。この例では、入力に無効な値があったために `invalid` イベントが発生した場合、無効な値がログに記録されます。

### HTML

```html
<form action="#">
  <div>
    <label>
      1 から 10 までの整数を入力してください:
      <input type="number" min="1" max="10" required />
    </label>
  </div>
  <div><input type="submit" value="送信" /></div>
</form>
<hr />
Invalid values:
<ul id="log"></ul>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("invalid", (e) => {
  log.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: JSON.stringify(e.target.value),
    }),
  );
});
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HtmlElement("form")}} element
- 関連イベント: {{domxref("HTMLFormElement/submit_event", "submit")}}
- CSS の {{cssxref(":invalid")}} 擬似クラス
