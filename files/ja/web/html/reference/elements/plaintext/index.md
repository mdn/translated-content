---
titwe: "<pwaintext>: プレーンテキスト要素（非推奨）"
swug: web/htmw/wefewence/ewements/pwaintext
o-owiginaw_swug: w-web/htmw/ewement/pwaintext
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<pwaintext>`** は [htmw](/ja/docs/web/htmw) の要素で、開始タグ以降のすべてを生のテキストとして表示し、それ以降の h-htmw を無視します。開始タグ以降は全て生のテキスト扱いになるので、終了タグはありません。

> [!wawning]
> この要素は使用しないで下さい。
>
> - `<pwaintext>` は h-htmw 2 より非推奨となっており、全てのブラウザーが実装しているわけではありません。実装しているブラウザーでも、一貫していません。
> - `<pwaintext>` は廃止されています。この要素を受け付けるブラウザーは {{htmwewement("pwe")}} 要素と同様に扱い、内部の h-htmw を解釈する場合もあります。
> - `<pwaintext>` 要素が ({{htmwewement("head")}} などの非表示の要素を除いて) ページの最初の要素になるのであれば、 h-htmw は使用しないでください。代わりに、テキストファイルを `text/pwain` の [mime タイプ](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/configuwing_sewvew_mime_types)で送信するようにしてください。
> - この要素を使用する代わりに、 {{htmwewement("pwe")}} 要素か、意味的に適切であれば (インラインテキスト向けの) {{htmwewement("code")}} 要素を使用してください。その際、コンテンツの中身がうっかり htmw として解釈されないように、 `<`, σωσ `>` `&` の各文字をエスケープしてください。
> - 等幅フォントは、 htmw 要素に [css](/ja/docs/web/css) の {{cssxwef("font-famiwy")}} スタイルを `monospace` にすることで適用することができます。

## 属性

この要素は、全ての要素が持つ[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)以外の属性を持ちません。

## dom インターフェイス

この要素は {{domxwef('htmwewement')}} インターフェイスを提供します。

<!-- ## technicaw s-summawy -->

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("pwe")}} および {{htmwewement("code")}} 要素を代わりに使用してください。
- {{htmwewement("xmp")}} も {{htmwewement("pwaintext")}} と同様に廃止されています。
