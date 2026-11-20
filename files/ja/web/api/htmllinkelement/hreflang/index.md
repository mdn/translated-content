---
title: "HTMLLinkElement: hreflang プロパティ"
short-title: hreflang
slug: Web/API/HTMLLinkElement/hreflang
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{APIRef("HTML DOM")}}

**`hreflang`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、ページの言語と地域の対象を示します。このヒントは、ブラウザーがより適切なページを選択したり、{{Glossary("SEO")}} を改善したりするために使用できます。

{{HTMLElement("link")}} 要素の `hreflang` 属性を反映します。`hreflang` 属性がない場合は空文字列 (`""`) です。

## 値

言語タグを含む文字列です。`hreflang` 属性がない場合は空文字列 (`""`) です。

## 例

```html
<link
  rel="alternate"
  href="www.example.com/fr/html"
  hreflang="fr"
  type="text/html"
  title="French HTML" />
<p class="tag"></p>
```

```css
.tag {
  margin-left: 20px;
  font-weight: bold;
  font-size: 24px;
}
```

```js
const myLink = document.querySelector("link");
const pTag = document.querySelector(".tag");
pTag.textContent = myLink.hreflang;
```

## 結果

{{EmbedLiveSample("Example",100,100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAnchorElement.hreflang")}} プロパティ
