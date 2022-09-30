---
title: Falsy (偽値)
slug: Glossary/Falsy
---

**偽値** (_falsy_ または _falsey_ な値) は、 {{Glossary("Boolean")}} コンテキストに現れたときに偽とみなされる値です。

{{Glossary("JavaScript")}} は{{Glossary("Conditional", "条件文")}}や{{Glossary("Loop", "繰り返し")}}などの場面で、任意の値を強制的に Boolean に{{Glossary("Type_Conversion", "型変換")}}します。

偽値は 8 つあります。

| `false`                          | [false](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Future_reserved_keywords_in_older_standards) キーワード                                    |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`                              | 数値[ゼロ](/ja/docs/Web/JavaScript/Data_structures#Number_type)                                                                                      |
| `-0`                             | 数値マイナス[ゼロ](/ja/docs/Web/JavaScript/Data_structures#Number_type)                                                                              |
| `0n`                             | [BigInt](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt) で、論理値として使用された場合、 Number と同じ規則に従います。 `0n` は*偽値*です。 |
| `""`                             | 空[文字列](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)の値                                                                              |
| {{Glossary("null")}}     | [null](/ja/docs/Web/JavaScript/Reference/Global_Objects/null) - 何も値が存在しないこと                                                               |
| {{Glossary("undefined")}} | [undefined](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) - プリミティブ値                                                             |
| {{Glossary("NaN")}}         | [NaN](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) - 非数                                                                                   |

> **メモ:** オブジェクトは、 [\[\[IsHTMLDDA\]\] 内部スロット](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot)がある場合のみ偽値になります。このスロットは {{domxref("document.all")}} にのみ存在し、 JavaScript を使用して設定することはできません。

## 例

JavaScript の*偽値*の例です (これは論理値のコンテキストでは偽に変換されるため、 `if` ブロックを実行しません)。

```js
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

### 論理 AND 演算子 &&

最初のオブジェクトが偽値の場合は、そのオブジェクトを返します。

```js
false && "dog"
// ↪ false

0 && "dog"
// ↪ 0
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName("ESDraft", "#sec-toboolean", "<code>ToBoolean</code> 抽象操作")}} |

## 詳細情報

- {{Glossary("Truthy", "真値")}}
- {{Glossary("Boolean", "論理型")}}

{{QuickLinksWithSubpages("/ja/docs/Glossary")}}
