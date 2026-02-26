---
title: "SVGAElement: rel プロパティ"
short-title: rel
slug: Web/API/SVGAElement/rel
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

{{APIRef("SVG")}}

**`rel`** は {{domxref("SVGAElement")}} のプロパティで、この SVG の {{svgelement("a")}} 要素の [`rel`](/ja/docs/Web/HTML/Reference/Elements/a#rel) 属性の値を反映した文字列を返します。

`rel` 属性は、空白区切りで指定されるリンクタイプのリスト（[`<list-of-Link-Types>`](/ja/docs/Web/HTML/Reference/Attributes/rel)）を指定し、{{SVGElement("a")}} 要素が表すターゲットまたはリソースと現在の文書との関係を示します。このプロパティは `rel` 属性の値を取得または設定できます。

## 値

文字列です。`rel` 属性の値です。

## 例

次の SVG があったとします。

```html
<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Reference/Element/text" rel="terms-of-service">
    <text x="30" y="10">Link text.</text>
  </a>
</svg>
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
svg {
  height: 50px;
}
text {
  font-size: 1rem;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

`rel` 属性を取得および設定できます。

```js
// SVG の <a> 要素を取得
const svgLink = document.querySelector("svg a");

// rel プロパティにアクセス
log(`Rel: ${svgLink.rel}`);

// rel プロパティを設定
svgLink.rel = "alternate bookmark";

// 再び rel プロパティにアクセス
log(`New rel: "${svgLink.rel}"`); // New rel: "alternate bookmark"
```

{{EmbedLiveSample("Example","100%","200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`rel`](/ja/docs/Web/HTML/Reference/Elements/a#rel)
- {{domxref("SVGAElement.relList")}}
- {{domxref("HTMLAnchorElement.rel")}}
- {{domxref("HTMLLinkElement.rel")}}
