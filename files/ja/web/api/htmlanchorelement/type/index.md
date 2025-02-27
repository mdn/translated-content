---
title: "HTMLAnchorElement: type プロパティ"
short-title: type
slug: Web/API/HTMLAnchorElement/type
l10n:
  sourceCommit: 10346c8cf5dfe6e030bd1cdc32f04461afaa8c64
---

{{ApiRef("HTML DOM")}}

**`type`** は {{domxref("HTMLAnchorElement")}} インターフェイスのプロパティで、リンク先のリソースの MIME タイプを示す文字列です。

これは {{HTMLElement("a")}} 要素の `type` プロパティを反映します。

## 値

文字列です。

## 例

```html
<a id="exampleLink" href="https://example.com" type="text/html">Example Link</a>
<p class="type"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".type");
console.log(anchorElement.type); // Output: "text/html"
pTag.textContent = anchorElement.type;
```

{{EmbedLiveSample("Example",100,100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.type")}} プロパティ
- {{domxref("HTMLSourceElement.type")}} プロパティ
- {{domxref("HTMLEmbedElement.type")}} プロパティ
