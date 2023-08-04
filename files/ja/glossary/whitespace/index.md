---
title: Whitespace (ホワイトスペース)
slug: Glossary/Whitespace
---

**ホワイトスペース**は他の文字の中で水平または垂直の空間を表すために使用される一連の{{Glossary("Character", "文字")}}です。{{Glossary("HTML")}}, {{Glossary("CSS")}}, {{Glossary("JavaScript")}}, その他のコンピューター言語でトークンを区切るためによく使用されます。ホワイトスペース文字とその使い方は言語によって様々です。

## HTML での使い方

[HTML Living Standard](https://html.spec.whatwg.org/) では、 U+0009 TAB (タブ), U+000A LF (改行), U+000C FF (頁送り), U+000D CR (復帰), U+0020 SPACE (空白) の 5 文字を ASCII ホワイトスペースとして定めています。テキスト形式では、これら普通の空白文字として扱われ、連続したホワイトスペースは多くの場合、1 文字の空白にまとめられます (この動作は CSS の {{cssxref("white-space")}} プロパティで変更できます)。これらは要素内の要素名と引数、クラス名の区切り文字などとしても使用されます。

## JavaScript での使い方

[ECMAScript® 2015 言語仕様書](https://www.ecma-international.org/ecma-262/6.0/#sec-white-space)では、いくつかの Unicode コードポイントをホワイトスペースとして定めています。 U+0009 CHARACTER TABULATION \<TAB>, U+000B LINE TABULATION \<VT>, U+000C FORM FEED \<FF>, U+0020 SPACE \<SP>, U+00A0 NO-BREAK SPACE \<NBSP>, U+FEFF ZERO WIDTH NO-BREAK SPACE \<ZWNBSP> および その他のカテゴリ "Zs" Unicode の他の "Separator, space" コードポイント \<USP> に属するすべての文字です。これらの文字はふつう、コードの機能性には不要なものです。

1. 仕様書

   1. [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace)
   2. [ECMAScript® 2015 言語仕様書](https://www.ecma-international.org/ecma-262/6.0/#sec-white-space)

2. リファレンス

   1. [ホワイトスペースは HTML、 CSS、 そして DOM 内でどう扱われるか](/ja/docs/Web/API/Document_Object_Model/Whitespace)
   2. {{cssxref("white-space")}}

3. Wikipedia 記事

   1. [Whitespace character](https://ja.wikipedia.org/wiki/Whitespace_character) (英語)

4. [用語集](/ja/docs/Glossary)

   1. {{Glossary("Character")}}
