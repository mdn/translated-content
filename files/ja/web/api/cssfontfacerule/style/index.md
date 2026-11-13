---
title: "CSSFontFaceRule: style プロパティ"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: 4fb9722796c7e24041ec7f4060d5da19d4e8c404
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("CSSFontFaceRule")}} インターフェイスの読み取り専用プロパティで、{{cssxref("@font-face")}} ルールの本体で利用できる記述子を表す {{domxref("CSSFontFaceDescriptors")}} オブジェクトを返します。

## 値

{{domxref("CSSFontFaceDescriptors")}} です。

`style` プロパティ自体は、`CSSFontFaceDescriptors` オブジェクトを置き換えることができないという意味で読み取り専用ですが、`style` プロパティに直接値を代入することは可能です。これは、その {{domxref("CSSStyleDeclaration/cssText", "cssText")}} プロパティに値を代入することと同等です。
また、`CSSFontFaceDescriptors` オブジェクトを変更するのに {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} および {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} メソッドを使用することもできます。

## 例

### 基本的な使い方

この例では、{{cssxref("@font-face")}} ルールを定義し、`CSSFontFaceDescriptors` を使用して記述子の値を読み戻しています。

#### CSS

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"),
    local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
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

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
for (const rule of myRules) {
  if (rule instanceof CSSFontFaceRule) {
    const descriptors = rule.style;
    if (descriptors instanceof CSSStyleDeclaration) {
      log(`rule.style is a CSSStyleDeclaration.`);
    } else {
      log(`rule.style is a CSSFontFaceDescriptors.`);
    }
    log("Descriptors:");
    log(` font-family: ${descriptors.fontFamily}`);
    log(` src: ${descriptors.src}`);
    log(` font-weight: ${descriptors["font-weight"]}`);
    log(` font-style: ${descriptors.fontStyle}`);
    log(` font-display: ${descriptors["font-display"]}`);
  }
}
```

#### 結果

{{EmbedLiveSample("Basic usage", "100%", "250px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
