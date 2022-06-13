---
title: <spacer>
slug: Web/HTML/Element/spacer
tags:
  - 要素
  - HTML
  - 非推奨
  - リファレンス
  - ウェブ
browser-compat: html.elements.spacer
translation_of: Web/HTML/Element/spacer
---

{{non-standard_header}}{{deprecated_header}}

**`<spacer>`** は [HTML](/ja/docs/Web/HTML) の要素で、ウェブページに空の空間を挿入するための廃止された HTML 要素です。ウェブデザイナーによって用いられていた 1px の透過 GIF 画像（いわゆる**スペーサー GIF**）の挿入と同様の効果を実現するために Netscape 社が実装したものです。しかし `<spacer>` はほとんどの主要ブラウザーで対応されず、また、同様の効果は CSS を用いて実現可能です。

Netscape のブラウザーの子孫である Firefox は、バージョン 4 で `<spacer>` の対応を廃止しました。

## 属性

すべての要素が持つ [グローバル属性](/ja/docs/Web/HTML/Global_attributes) と、以下の属性に対応していました。

- {{ htmlattrdef("type") }}
  - : この属性は、スペーサーの種類を設定します。 `horizontal`, `vertical`, `block` の内のいずれかのキーワードを指定可能です。
- {{ htmlattrdef("size") }}
  - : この属性は、 `type` 属性の値が `horizontal` または `vertical` である場合の、スペーサーのピクセルサイズを定義するために使用します。
- {{ htmlattrdef("width") }}
  - : この属性は、 `type` 属性の値が `block` である場合、スペーサーのピクセル幅を設定します。
- {{ htmlattrdef("height") }}
  - : この属性は、 `type` 属性の値が `block` である場合、スペーサーのピクセル高を設定します。
- {{ htmlattrdef("align") }}
  - : この属性は、スペーサーの配置を設定します。`left`、 `right`、 `center` の内のいずれかのキーワードを指定可能です。

## 例

```html
<span>テキストノード</span>
<spacer type="horizontal" size="10"></spacer>
<span>別なテキストノード</span>
<spacer type="block" width="10" height="10"></spacer>
```

### 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{ HTMLRef }}
