---
title: "Element: ariaBrailleLabel プロパティ"
short-title: ariaBrailleLabel
slug: Web/API/Element/ariaBrailleLabel
l10n:
  sourceCommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{APIRef("DOM")}}

**`ariaBrailleLabel`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-braillelabel`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) 属性の値を反映し、要素の ARIA 点字ラベルを定義します。

この要素ラベルは、点字でコンテンツを表示できる支援技術によって使用されるかもしれませんが、点字固有のラベルが使い勝手を向上させる場合にのみ設定されるべきです。
[`aria-braillelabel`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) には、いつこのプロパティを設定すべきかについての追加情報があります。

## 値

- `<string>`
  - : 値は文字列で、点字に変換するための制約のない値型です。

## 例

### ariaBrailleLabel の取得と設定

この例では、`ariaBrailleLabel` プロパティを取得・設定する方法を示します。

#### HTML

まず、"3 out of 5 stars" というラベルテキストと、`aria-braillelabel` 属性に `"\*\*\*"` という値が設定されたボタンを定義します。
これにより、点字ディスプレイでは、"btn gra 3 out of 5 stars" という冗長な表示ではなく、"btn \*\*\*" という点字表示が可能になります。

```html
<button id="button" aria-braillelabel="\*\*\*">3 out of 5 stars</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

次に、このコードはボタンの `ariaBrailleLabel` プロパティを使用して、最初に点字ラベルを取得し、ログに記録します。
そして、点字ラベルを "3\*" に設定し、その値を再びログに記録します。

```js
const button = document.getElementById("button");
log(button.ariaBrailleLabel);
button.ariaBrailleLabel = "3*";
log(button.ariaBrailleLabel);
```

#### 結果

{{EmbedLiveSample("Getting and setting ariaBrailleLabel")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
