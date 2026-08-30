---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
l10n:
  sourceCommit: 1f45194268a7faa26018599925e95cfa19986f19
---

{{APIRef("CSSOM")}}

**`CSSFontFaceRule`** インターフェイスは {{cssxref("@font-face")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} からプロパティを継承しています。_

- {{domxref("CSSFontFaceRule.style")}} {{ReadOnlyInline}}
  - : {{domxref("CSSFontFaceDescriptors")}} オブジェクトを返します。これにより、関連付けられた {{cssxref("@font-face")}} アットルールの記述子を読み取ったり設定したりすることができます。

## インスタンスメソッド

_祖先である {{domxref("CSSRule")}} からメソッドを継承しています。_

## 例

### @font-face プロパティへのアクセス

この例では {{cssxref("@font-face")}} ルールを定義し、関連付けられた `CSSFontFaceRule` が得られるまで、ページ上のルールを反復処理していきます。
その後、いくつかのプロパティをログに出力します。

#### CSS

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2");
  font-weight: bold;
}
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
for (const rule of myRules) {
  if (rule instanceof CSSFontFaceRule) {
    log(`this: ${rule}`);
    log(` cssText: ${rule.cssText}`);
    log(` parentRule: ${rule.parentRule}`);
    log(` parentStyleSheet: ${rule.parentStyleSheet}`);
    log(` type: ${rule.type}`);
    log(` style: ${rule.style}`);
  }
}
```

#### 結果

{{EmbedLiveSample("Accessing @font-face properties", "100%", "250px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
