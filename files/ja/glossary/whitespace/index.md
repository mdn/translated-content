---
title: Whitespace (ホワイトスペース)
slug: Glossary/Whitespace
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**ホワイトスペース**は、他の文字の中で水平または垂直の空間を表すために使用される{{Glossary("Character", "文字")}}です。 {{Glossary("HTML")}}、{{Glossary("CSS")}}、{{Glossary("JavaScript")}}、その他のコンピューター言語でトークンを区切るためによく使用されます。

ホワイトスペース文字とその使い方は言語によって様々です。

## HTML での使い方

[Infra Living Standard](https://infra.spec.whatwg.org/) では、 U+0009 TAB (タブ), U+000A LF (改行), U+000C FF (頁送り), U+000D CR (復帰), U+0020 SPACE (空白) の 5 文字を {{Glossary("ASCII")}} ホワイトスペースとして定めています。

## JavaScript での使い方

[ECMAScript 言語仕様書](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-white-space)では、いくつかの Unicode コードポイントをホワイトスペースとして定めています。 U+0009 CHARACTER TABULATION \<TAB>, U+000B LINE TABULATION \<VT>, U+000C FORM FEED \<FF>, U+0020 SPACE \<SP>, U+00A0 NO-BREAK SPACE \<NBSP>, U+FEFF ZERO WIDTH NO-BREAK SPACE \<ZWNBSP> およびその他の Unicode の "Space_Separator" コードポイント \<USP> に属するすべての文字です。

## 関連情報

- [空白文字](https://ja.wikipedia.org/wiki/空白文字) - ウィキペディア
- [CSS におけるホワイトスペースの処理](/ja/docs/Web/CSS/Guides/Text/Whitespace)
- {{cssxref("white-space")}}
- 仕様書
  - [ASCII whitespace spec](https://infra.spec.whatwg.org/#ascii-whitespace)
  - [ECMAScript Language Specification](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-white-space)
- 関連用語:
  - {{Glossary("Character", "文字")}}
