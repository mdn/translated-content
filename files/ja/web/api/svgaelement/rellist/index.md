---
title: "SVGAElement: relList プロパティ"
short-title: relList
slug: Web/API/SVGAElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("SVG")}}

**`relList`** は {{domxref("SVGAElement")}} の読み取り専用プロパティで、生きた {{domxref("DOMTokenList")}} を返します。これは SVG の {{svgelement("a")}} 要素の [`rel`](/ja/docs/Web/HTML/Reference/Elements/a#rel) 属性の [`<list-of-Link-Types>`](/ja/docs/Web/HTML/Reference/Attributes/rel) 値を反映したものです。

## 値

生きた {{domxref("DOMTokenList")}} です。

`relList` プロパティ自体は、`DOMTokenList` オブジェクトを置き換えることができないという意味で読み取り専用ですが、`relList` プロパティに直接代入することは可能です。これは、その {{domxref("DOMTokenList/value", "value")}} プロパティに代入することと同等です。同時に、`DOMTokenList` オブジェクトを変更することも可能です。 {{domxref("DOMTokenList/add", "add()")}}、 {{domxref("DOMTokenList/remove", "remove()")}}、{{domxref("DOMTokenList/replace", "replace()")}}、{{domxref("DOMTokenList/toggle", "toggle()")}} の各メソッドを使用して変更することもできます。

## 例

次の SVG があったとします。

```html
<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
  <!-- テキストを囲むリンク -->
  <a href="/docs/Web/SVG/Reference/Element/text" rel="alternate bookmark">
    <text x="30" y="10">リンクテキスト</text>
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

`<a>` 要素の `rel` 属性で定義されたすべてのリンク種別を取得できます。

```js
// SVG の <a> 要素を選択
const svgLink = document.querySelector("a");
const relations = svgLink.relList;

relations.forEach((relValue) => {
  log(relValue);
});
```

{{EmbedLiveSample("Example","100%","200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`rel`](/ja/docs/Web/HTML/Reference/Elements/a#rel)
- {{domxref("SVGAElement.rel")}}
- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLLinkElement.relList")}}
