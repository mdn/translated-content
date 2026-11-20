---
title: "HTMLLinkElement: imageSizes プロパティ"
short-title: imageSizes
slug: Web/API/HTMLLinkElement/imageSizes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

**`imageSizes`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、{{domxref("HTMLLinkElement.imageSrcset", "imageSrcset")}} プロパティで定義された先読み画像のサイズと条件を示します。{{htmlelement("link")}} 要素の [`imagesizes`](/ja/docs/Web/HTML/Reference/Elements/link#imagesizes) 属性の値を反映します。このプロパティを使って、`imagesizes` 属性の値を取得または設定できます。

`<link>` 要素の `imagesizes` 属性は、{{htmlelement("img")}} 要素の `sizes` 属性と同じく、カンマ区切りの**ソースサイズ**のリストです。各ソースサイズには、[メディア条件](/ja/docs/Web/CSS/Guides/Media_queries)、{{cssxref("length")}} で表す画像のサイズ、またはキーワード `auto` が含まれます。`auto` は先頭に置く必要があります。`sizes` 属性の構文について詳しくは、[`<img>`](/ja/docs/Web/HTML/Reference/Elements/img#sizes) を参照してください。

`imagesrcset` 属性と `imagesizes` 属性は、`rel` 属性が `preload` に設定され、かつ `as` 属性が `image` に設定された `<link>` 要素でのみ意味を持ちます。

## 値

カンマ区切りのソースサイズで構成される文字列です。指定されていない場合は空文字列 `""` です。

## 例

次の `<link>` 要素があるとします。

```html
<link
  rel="preload"
  as="image"
  imagesrcset="narrow.png, medium.png 600w, wide.png 1200w"
  imagesizes="(width < 400px) 200px, (400px <= width < 600px) 75vw, 50vw" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  padding: 0 0.25rem;
  font-size: 1.2em;
  line-height: 1.4;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

この `imageSizes` プロパティを使って、`imagesizes` 属性の値を取得および更新できます。

```js
const link = document.querySelector("link");
log(`Original: ${link.imageSizes}`);

// 値を変更する
link.imageSizes = "50vw";
log(`Updated: ${link.imageSizes}`);
```

{{EmbedLiveSample('Examples',"","80")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.imageSrcset")}}
- {{domxref("HTMLImageElement.sizes")}}
- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)
- [`srcset` 属性と `sizes` 属性の使用](/ja/docs/Web/HTML/Reference/Elements/img#srcset_および_sizes_属性の使用)
