---
title: HTML `<xmp>` プレーンテキストレンダリング要素
short-title: <xmp>
slug: Web/HTML/Reference/Elements/xmp
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

## 概要

**`<xmp>`** は [HTML](/ja/docs/Web/HTML) の要素で、その開始タグから終了タグまでの間のタグを HTML として解釈せず、等幅フォントでレンダリングします。 HTML2 仕様書では、これを 1 行当たり 80 文字を表示するのに充分な幅でレンダリングするよう推奨しています。

> [!NOTE]
> この要素は使用しないでください。
>
> - HTML3.2 から非推奨要素となっており、また一貫した実装も存在しません。そして HTML5 の言語からは完全に削除されています。
> - 代わりに {{HTMLElement("pre")}} 要素か、意味的に適切であれば {{HTMLElement("code")}} 要素を使用してください。なお、マークアップとして解釈されないようにするには、`<` の文字を `&lt;` として、`&` の文字を `&amp;` としてエスケープする必要があります。
> - あらゆる要素で等幅フォントを使用することができます。 [CSS](/ja/docs/Web/CSS) のスタイルで `monospace` を {{cssxref("font-family")}} プロパティの一般的なフォントの値として使用してください。

## 属性

この要素は、すべての要素が持つ[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)以外の属性を持ちません。

## DOM インターフェイス

この要素は {{domxref('HTMLElement')}} インターフェイスを実装しています。

<!-- ## Technical summary -->

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 代替となり得る要素: {{HTMLElement("pre")}} 要素、 {{HTMLElement("code")}} 要素
- {{HTMLElement("plaintext")}} 要素も `<xmp>` と似ていますが、同様に廃止されています。
