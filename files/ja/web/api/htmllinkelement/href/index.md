---
title: "HTMLLinkElement: href プロパティ"
short-title: href
slug: Web/API/HTMLLinkElement/href
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`href`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、リンクに関連付けられた URL を表す文字列を格納します。

{{HTMLElement("link")}} 要素の `href` 属性を反映します。要素に `href` 属性がない場合、このプロパティの値は空文字列 (`""`) になります。

> [!NOTE]
> すべての `<link>` 要素には、`href` 属性または [`imagesrcset`](/ja/docs/Web/HTML/Reference/Elements/link#imagesrcset) 属性のいずれか、あるいは両方を含める必要があります。つまり、有効な `<link>` では、このプロパティか {{domxref("HTMLLinkElement.imageSrcset", "imageSrcset")}} のいずれかが空ではありません。

## 値

URL を含む文字列です。`href` 属性がない場合は空文字列 (`""`) です。

## 例

```html
<link rel="stylesheet" href="example.css" />
```

```js
const link = document.getElementsByTag("link")[0];
console.log(link.href); // 'example.css'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.imageSrcset")}} プロパティ
- {{domxref("HTMLAnchorElement.href")}} プロパティ
