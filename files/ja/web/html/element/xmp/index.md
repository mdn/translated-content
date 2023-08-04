---
title: <xmp>
slug: Web/HTML/Element/xmp
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{HTMLSidebar}}{{deprecated_header}}

## 概要

**`<xmp>`** は [HTML](/ja/docs/Web/HTML) の要素で、その開始タグから終了タグまでの間のタグを HTML として解釈せず、等幅フォントでレンダリングします。 HTML2 仕様書では、これを 1 行当たり 80 文字を表示するのに充分な幅でレンダリングするよう推奨しています。

> **メモ:** この要素は使用しないでください。
>
> - HTML3.2 から非推奨要素となっており、また一貫した実装も存在しません。そして HTML5 の言語からは完全に削除されています。
> - 代わりに {{HTMLElement("pre")}} 要素か、意味的に適切であれば {{HTMLElement("code")}} 要素を使用してください。なお、マークアップとして解釈されないようにするには、 '`<`' の文字を '`&lt;`' としてエスケープする必要があります。
> - あらゆる要素で等幅フォントを使用することができます。 [CSS](/ja/docs/Web/CSS) のスタイルで `monospace` を {{cssxref("font-family")}} プロパティの一般的なフォントの値として使用してください。

## 属性

この要素は、すべての要素が持つ[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性を持ちません。

## DOM インターフェイス

この要素は {{domxref('HTMLElement')}} インターフェイスを実装しています。

<!-- ## Technical summary -->

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 代替となり得る要素: {{HTMLElement("pre")}} 要素、 {{HTMLElement("code")}} 要素
- {{HTMLElement("plaintext")}} 要素も {{HTMLElement("xmp")}} と似ていますが、同様に廃止されています。
