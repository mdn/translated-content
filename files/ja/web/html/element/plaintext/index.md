---
title: "<plaintext>: プレーンテキスト要素（非推奨）"
slug: Web/HTML/Element/plaintext
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}{{deprecated_header}}

**`<plaintext>`** は [HTML](/ja/docs/Web/HTML) の要素で、開始タグ以降のすべてを生のテキストとして表示し、それ以降の HTML を無視します。開始タグ以降は全て生のテキスト扱いになるので、終了タグはありません。

> **警告:** この要素は使用しないで下さい。
>
> - `<plaintext>` は HTML 2 より非推奨となっており、全てのブラウザーが実装しているわけではありません。実装しているブラウザーでも、一貫していません。
> - `<plaintext>` は廃止されています。この要素を受け付けるブラウザーは {{HTMLElement("pre")}} 要素と同様に扱い、内部の HTML を解釈する場合もあります。
> - `<plaintext>` 要素が ({{HTMLElement("head")}} などの非表示の要素を除いて) ページの最初の要素になるのであれば、 HTML は使用しないでください。代わりに、テキストファイルを `text/plain` の [MIME タイプ](/ja/docs/Learn/Server-side/Configuring_server_MIME_types)で送信するようにしてください。
> - この要素を使用する代わりに、 {{HTMLElement("pre")}} 要素か、意味的に適切であれば (インラインテキスト向けの) {{HTMLElement("code")}} 要素を使用してください。その際、コンテンツの中身がうっかり HTML として解釈されないように、 `<`, `>` `&` の各文字をエスケープしてください。
> - 等幅フォントは、 HTML 要素に [CSS](/ja/docs/Web/CSS) の {{cssxref("font-family")}} スタイルを `monospace` にすることで適用することができます。

## 属性

この要素は、全ての要素が持つ[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性を持ちません。

## DOM インタフェース

この要素は {{domxref('HTMLElement')}} インタフェースを提供します。

<!-- ## Technical summary -->

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("pre")}} および {{HTMLElement("code")}} 要素を代わりに使用してください。
- {{HTMLElement("xmp")}} も {{HTMLElement("plaintext")}} と同様に廃止されています。
