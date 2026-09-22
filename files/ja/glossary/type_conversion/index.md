---
title: Type conversion (型変換)
slug: Glossary/Type_Conversion
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

型変換 (Type conversion) (または型キャスト (typecasting) ) は、データをあるデータ型から別なデータ型に変換することを意味します。暗黙の型変換は、コンパイラーが自動的にデータ型を割り当てるものの、その場でソースコードで明示的に型変換が必要な場合もあります。

例えば、`"foo" + 1` という式の場合、数値 ({{glossary("Number")}}) である `1` は暗黙的に文字列 ({{glossary("String")}}) に変換され、この式は `"foo1"` を返します。また、命令 `Number("0x11")` の場合、文字列 `"0x11"` は明示的に数値 `17` に変換されます。

## 関連情報

- [型変換](https://ja.wikipedia.org/wiki/型変換) (ウィキペディア)
- 関連用語:
  - {{Glossary("Type", "型")}}
  - {{Glossary("Type coercion", "型強制")}}
