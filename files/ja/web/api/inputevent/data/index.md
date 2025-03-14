---
title: "InputEvent: data プロパティ"
short-title: data
slug: Web/API/InputEvent/data
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`data`** は {{domxref("InputEvent")}} インターフェイスの読み取り専用プロパティで、挿入された文字を文字列で返します。挿入されるテキストがない変更の場合、例えば文字が削除された場合は、これは空文字列になることがあります。

## 値

文字列です。

## 例

以下の例では、イベントリスナーが [input](/ja/docs/Web/API/Element/input_event) イベントを受信します。 {{htmlelement("input")}} 要素に対してテキストの変更が行われると、 `InputEvent.data` によって取得し、 [`Node.textContent`](/ja/docs/Web/API/Node/textContent) プロパティを使用して段落に挿入します。

```html
<p>テキストをコピーおよび貼り付けしてください。</p>

<input type="text" />

<p class="result"></p>
```

```js
const editable = document.querySelector("input");
const result = document.querySelector(".result");

editable.addEventListener("input", (e) => {
  result.textContent = `入力テキスト: ${e.data}`;
});
```

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
