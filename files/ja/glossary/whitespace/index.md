---
title: Whitespace (ホワイトスペース)
slug: Glossary/Whitespace
l10n:
  sourceCommit: d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{GlossarySidebar}}

**ホワイトスペース**は、他の文字の中で水平または垂直の空間を表すために使用される{{Glossary("Character", "文字")}}です。 {{Glossary("HTML")}}、{{Glossary("CSS")}}、{{Glossary("JavaScript")}}、その他のコンピューター言語でトークンを区切るためによく使用されます。

ホワイトスペース文字とその使い方は言語によって様々です。

## HTML での使い方

[HTML Living Standard](https://html.spec.whatwg.org/) では、 U+0009 TAB (タブ), U+000A LF (改行), U+000C FF (頁送り), U+000D CR (復帰), U+0020 SPACE (空白) の 5 文字を ASCII ホワイトスペースとして定めています。テキスト形式では、これら普通の空白文字として扱われ、連続したホワイトスペースは多くの場合、1 文字の空白にまとめられます (この動作は CSS の {{cssxref("white-space")}} プロパティで変更できます)。これらは要素内の要素名と引数、クラス名の区切り文字などとしても使用されます。

## JavaScript での使い方

[ECMAScript® 2015 言語仕様書](https://www.ecma-international.org/ecma-262/6.0/#sec-white-space)では、いくつかの Unicode コードポイントをホワイトスペースとして定めています。 U+0009 CHARACTER TABULATION \<TAB>, U+000B LINE TABULATION \<VT>, U+000C FORM FEED \<FF>, U+0020 SPACE \<SP>, U+00A0 NO-BREAK SPACE \<NBSP>, U+FEFF ZERO WIDTH NO-BREAK SPACE \<ZWNBSP> および その他のカテゴリー "Zs" Unicode の他の "Separator, space" コードポイント \<USP> に属するすべての文字です。これらの文字はふつう、コードの機能性には不要なものです。

## 関連情報

- [空白文字](https://ja.wikipedia.org/wiki/空白文字)
- [ホワイトスペースは HTML、CSS、そしてDOM 内でどう扱われるか](/ja/docs/Web/CSS/Guides/Text/Whitespace)
- {{cssxref("white-space")}}
- 仕様書
  - [ASCII whitespace spec](https://infra.spec.whatwg.org/#ascii-whitespace)
  - [ECMAScript Language Specification](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-white-space)

- 関連用語:
  1. {{Glossary("Character", "文字")}}
