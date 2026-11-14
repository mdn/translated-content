---
title: "HTMLLinkElement: imageSrcset プロパティ"
short-title: imageSrcset
slug: Web/API/HTMLLinkElement/imageSrcset
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("HTML DOM")}}

**`imageSrcset`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、カンマ区切りの 1 つ以上の**画像候補文字列**を表す文字列です。{{htmlelement("link")}} 要素の [`imagesrcset`](/ja/docs/Web/HTML/Reference/Elements/link#imagesrcset) 属性の値を反映します。このプロパティを使って、`imagesrcset` 属性の値を取得または設定できます。

各画像候補文字列には画像の URL と、その候補画像を使用する条件を示す任意の幅記述子やピクセル密度記述子が含まれます。

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x, images/team-photo-large.jpg 1400w"
```

HTML の {{htmlelement("link")}} 要素に [`rel="preload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) と [`as="image"`](/ja/docs/Web/HTML/Reference/Elements/link#as) が設定されている場合、`imagesrcset` 属性の構文と意味は {{htmlelement("img")}} 要素の [`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) 属性と同様です。これは、対応する `srcset` 属性と `sizes` 属性の値を持つ `<img>` 要素が使用する適切なリソースを先読みするよう指定します。

`imageSrcset` プロパティに幅記述子が含まれる場合、{{domxref("HTMLLinkElement.imageSizes", "imageSizes")}} プロパティは `null` 以外でなければなりません。そうでないと、`imageSrcset` の値は無視されます。

## 値

1 つ以上の画像候補文字列をカンマ区切りにした文字列です。指定されていない場合は空文字列 `""` です。

## 例

次の `<link>` 要素があるとします。

```html
<link
  rel="preload"
  as="image"
  imagesizes="50vw"
  imagesrcset="bg-narrow.png, bg-wide.png 800w" />
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

この `imageSrcset` プロパティを使って、`imagesrcset` 属性の値を取得および更新できます。

```js
const link = document.querySelector("link");
log(`Original: ${link.imageSrcset}`);

// 画像候補文字列を追加する
link.imageSrcset += ", bg-huge.png 1200w";
log(`Updated: ${link.imageSrcset}`);
```

{{EmbedLiveSample('Examples',"","80")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.imageSizes")}}
- {{domxref("HTMLImageElement.srcset")}}
- [投機的読み込み](/ja/docs/Web/Performance/Guides/Speculative_loading#link_relpreload)
- [レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)
