---
title: <acronym>
slug: Web/HTML/Element/acronym
l10n:
  sourceCommit: 5ef0b77f5c41fec74dad73cad1a14c4b05b7cd14
---

{{HTMLSidebar}}{{deprecated_header}}

## 概要

**`<acronym>`** は [HTML](/ja/docs/Web/HTML) の要素で、頭字語または略語の単語を構成する文字の並びを明示することができます。

> [!WARNING]
> この要素は使用しないでください。代わりに {{HTMLElement("abbr")}} 要素を使用してください。

## 属性

この要素には、全ての要素に共通の[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## DOM インターフェイス

この要素は {{domxref('HTMLElement')}} インターフェイスを実装しています。

## 例

```html
<p>
  The <acronym title="World Wide Web">WWW</acronym> is only a component of the
  Internet.
</p>
```

### 結果

{{EmbedLiveSample('Examples')}}

## 既定のスタイル

このタグの目的は単に作者の利便性のためのものであるため、ブラウザーによって既定のスタイルは様々です。

- Opera、Firefox、Chrome などでは、この要素の内容に点線の下線が付きます。
- ブラウザーによっては点線の下線を引くだけでなく、スモールキャップスにします。このスタイルを抑制するには、CSS で {{cssxref('font-variant')}}`: none` などをつけてください。

従って、この要素に明確にスタイルを与えるか、ブラウザー間の違いを気にしないようにするかする必要があります。

<!-- ## Technical summary -->

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("abbr")}} 要素
