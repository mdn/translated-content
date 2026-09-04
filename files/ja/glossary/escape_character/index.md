---
title: Escape character (エスケープ文字)
slug: Glossary/Escape_character
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**エスケープ文字** (escape character) とは、文字の解釈を変える役割を果たす、その後に続く 1 つ以上の{{glossary("character", "文字")}}のことです。これにより**エスケープシーケンス** (escape sequence) が形成され、文字列リテラル内の引用符など、別な意味を持つ文字を文字通り表示することを表すのによく使われます。エスケープシーケンスはその他の用途を持ち、特に[正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions#エスケープシーケンス)においてよく使われます。

- JavaScript の[正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)、[文字列リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#文字列リテラル)、[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)では、バックスラッシュ (`\`) を使用して `\'`、`\"`、`\u0026` などのように文字をエスケープすることができます。
- CSS の識別子では、バックスラッシュ (`\`) を用いて `\\`、`\n`、`\26` などのように文字をエスケープすることができます。詳しくは[エスケープ文字](/ja/docs/Web/CSS/Reference/Values/ident#エスケープ文字)を参照してください。
- HTML のテキストコンテンツや属性値では、{{glossary("character reference", "文字参照")}}を `&lt;`、`&#60;`、`&#x3C;` のように使用することができます。
- {{glossary("URL")}} では、パーセント記号 (`%`) を使用して `%20`、`%3C`、`%3E` 等のように文字をエスケープすることができます。

## 関連情報

- 関連用語:
  - {{glossary("Character", "文字")}}
  - {{glossary("Character reference", "文字参照")}}
  - {{glossary("Code point", "コードポイント")}}
- [エスケープ文字](https://ja.wikipedia.org/wiki/エスケープ文字) - ウィキペディア
- [エスケープシーケンス](https://ja.wikipedia.org/wiki/エスケープシーケンス) - ウィキペディア
