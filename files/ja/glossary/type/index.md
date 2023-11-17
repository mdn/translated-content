---
title: Type (型)
slug: Glossary/Type
---

**型** (または*データ型*) とは、どのような種類のデータや構造を格納できるかに影響を与える{{glossary("value", "値")}}の特性のことです。例えば、論理型 ({{Glossary("boolean")}}) の[データ型](/ja/docs/Web/JavaScript/Data_structures)は常に `true` または `false` の値しか保持しませんが、 文字列型 ({{Glossary("string")}}) はテキスト文字列を保持し、数値型 ({{Glossary("number")}}) はあらゆる種類の数値を保持します。

値のデータ型は、その値に対してどの演算が有効であるかにも影響します。例えば、数値型の値は他の数値を乗算することができますが、文字列を乗算することは、その文字列に "2" など数値*しか*入っていなかった場合であってもできません。

型は異なる値の比較においても有用な知識です。構造化型同士の比較は必ずしも簡単に仮定できるものではありません。前のデータ構造が同じであっても、[プロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)の中に継承された構造がある可能性があるからです。

値の型が分からない場合は、 [`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) 演算子で知ることができます。

1. [用語集](/ja/docs/Glossary)

   1. {{Glossary("JavaScript")}}
   2. {{Glossary("string", "文字列")}}
   3. {{Glossary("number")}}
   4. {{Glossary("bigint")}}
   5. {{Glossary("boolean")}}
   6. {{Glossary("null")}}
   7. {{Glossary("undefined")}}
   8. {{Glossary("symbol")}}

2. Wikipedia の [データ型](https://ja.wikipedia.org/wiki/データ型)
3. [JavaScript のデータ型](/ja/docs/Web/JavaScript/Data_structures)
