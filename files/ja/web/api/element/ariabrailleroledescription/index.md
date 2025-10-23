---
title: "Element: ariaBrailleRoleDescription プロパティ"
short-title: ariaBrailleRoleDescription
slug: Web/API/Element/ariaBrailleRoleDescription
l10n:
  sourceCommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{APIRef("DOM")}}

**`ariaBrailleRoleDescription`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-brailleroledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) 属性の値を反映し、要素の ARIA 点字ロール記述を定義します。

このプロパティは、[`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) 値の短縮版を提供するために使用することができます。
これは `aria-roledescription` が存在する場合にのみ使用されるべきで、まれにそれが点字にとって冗長すぎる場合に使用されます。
[`aria-brailleroledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) には、このプロパティが設定されるべき時についての追加情報が含まれています。

## 値

- `<string>`
  - : 値は文字列で、点字に変換するための制約のない値型です。

## 例

### ariaBrailleRoleDescription の取得と設定

この例では、`ariaBrailleRoleDescription` プロパティを取得・設定する方法を示します。

#### HTML

まず、スライドショーのスライドとして使用する `<article>` 要素を定義します。
`aria-roledescription` 属性に "slide" を設定し、`aria-brailleroledescription` の点字短縮形に "sld" を設定します。

```html
<article
  id="article"
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
</article>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
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

要素のロールの説明を取得するには、`ariaBrailleRoleDescription` プロパティを使用します。
以下のコードでは、まずその値を取得し、ログに記録します。
その後、点字ロールディスクリプションを "sd" に設定し、再度その値をログに記録します（あくまで説明のためであり、実際のコードではこの値を設定するわけではありません）。

```js
const article = document.getElementById("article");
log(article.ariaBrailleRoleDescription);
article.ariaBrailleRoleDescription = "sd";
log(article.ariaBrailleRoleDescription);
```

#### 結果

{{EmbedLiveSample("Getting and setting ariaBrailleRoleDescription")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
