---
title: "HTMLAnchorElement: hreflang プロパティ"
short-title: hreflang
slug: Web/API/HTMLAnchorElement/hreflang
l10n:
  sourceCommit: 5948500efb7d63d514966013adc8ed925ce28f69
---

{{ApiRef("HTML DOM")}}

**`hreflang`** は {{domxref("HTMLAnchorElement")}} インターフェイスのプロパティで、リンクされたソースの言語の文字列です。

{{HTMLElement("a")}} 要素の `hreflang` 属性を反映し、`hreflang` 要素がない場合は空文字列 (`""`) となります。

ウェブブラウザーや検索エンジンは、リンク先のコンテンツの言語をより正確に理解するためにこの情報を使用することがありますが、従うことで義務付けられているわけではありません。`hreflang` 属性に提供された値は、{{RFC(5646, "Tags for Identifying Languages（別名　BCP 47）")}}で定義されている形式に従います。 そうでない場合は、無視されます。

ウェブブラウザーは、リンク先のリソースを取得した後、`hreflang` 属性だけに頼っているわけではありません。代わりに、リソースに直接関連付けられた言語情報（例えば、HTTP ヘッダーを通じて）を使用して、その言語を決定します。

## 値

言語タグを収めた文字列、または `hreflang` 要素がない場合は空文字列 (`""`) です。

## 例

```html
<a id="exampleLink" href="https://example.com" hreflang="en-IN">Example Link</a>
<p class="hreflang"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".hreflang");
console.log(anchorElement.hreflang); // Outputs: "en-IN"
pTag.textContent = anchorElement.hreflang;
```

### 結果

{{EmbedLiveSample("Example",100,100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.hreflang")}} プロパティ
