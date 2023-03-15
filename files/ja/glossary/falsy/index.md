---
title: Falsy (偽値)
slug: Glossary/Falsy
l10n:
  sourceCommit: ec5cdbe5e3e0198f60a537c7d4a9d31edab50920
---

**偽値** (**falsy** または **falsey**) な値とは、論理型コンテキストに現れたときに偽とみなされる値です。

{{Glossary("JavaScript")}} は{{Glossary("Conditional", "条件文")}}や{{Glossary("Loop", "繰り返し")}}などの場面で、任意の値を強制的に論理型に{{Glossary("Type_Conversion", "型変換")}}します。

以下の表は、 JavaScript の偽値の完全なリストです。

| 値                       | 説明                                                                                                                                                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`                     | キーワード [`false`](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#論理値リテラル)。                                                                                                         |
| `0`                         | [数値](/ja/docs/Web/JavaScript/Data_structures#数値型_number)ゼロ （従って、 `0.0` や `0x0` なども含みます）。                                                                                                                                                                 |
| `-0`                        | [数値](/ja/docs/Web/JavaScript/Data_structures#数値型_number)マイナスゼロ（従って、 `-0.0` や `-0x0` 等も含みます）。                                                                                                                                                      |
| `0n`                        | [長整数型](/ja/docs/Web/JavaScript/Data_structures#長整数型_bigint)のゼロ（従って、 `0x0n` も含みます）。なお、長整数型にはマイナスゼロはありません。 `0n` の負の数は `0n` です。                                                                                       |
| `""`, `''`, ` `` `          | 空[文字列](/ja/docs/Web/JavaScript/Data_structures#文字列型_string)値。                                                                                                                                                |
| {{Glossary("null")}}        | [null](/ja/docs/Web/JavaScript/Data_structures#null_型) — 値が存在しないことを示します。                                                                                                                                          |
| {{Glossary("undefined")}}   | [undefined](/ja/docs/Web/JavaScript/Data_structures#undefined_型) — プリミティブ値。                                                                                                                                |
| {{Glossary("NaN")}}         | [NaN](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) — 数値ではない。                                                                                                                                                   |
| {{domxref("document.all")}} | オブジェクトは [\[\[IsHTMLDDA\]\]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) 内部スロットを保有している場合のみ、偽値になります。このスロットは {{domxref("document.all")}} にのみ存在し、JavaScript で設定することはできません。 |

## 例

JavaScript の _偽値_ の例です（これは論理値のコンテキストでは偽に変換されるため、 `if` ブロックを実行しません）。

```js
if (false) {
  // 到達しない
}

if (null) {
  // 到達しない
}

if (undefined) {
  // 到達しない
}

if (0) {
  // 到達しない
}

if (-0) {
  // 到達しない
}

if (0n) {
  // 到達しない
}

if (NaN) {
  // 到達しない
}

if ("") {
  // 到達しない
}
```

### 論理 AND 演算子 &&

最初のオブジェクトが偽値の場合は、そのオブジェクトを返します。

```js
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0
```

## 関連情報

- {{Glossary("Truthy", "真値")}}
- {{Glossary("Type_coercion", "型変換")}}
- {{Glossary("Boolean", "論理型")}}
- [論理型への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
