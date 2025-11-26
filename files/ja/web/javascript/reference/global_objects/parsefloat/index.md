---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`parseFloat()`** 関数は、文字列の引数を解釈し、浮動小数点値を返します。

{{InteractiveExample("JavaScript デモ: parseFloat()")}}

```js interactive-example
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// 予想される結果: 28.695307297889173

console.log(circumference("4.567abcdefgh"));
// 予想される結果: 28.695307297889173

console.log(circumference("abcdefgh"));
// 予想される結果: NaN
```

## 構文

```js-nolint
parseFloat(string)
```

### 引数

- `string`
  - : 解釈する値。この引数が文字列でない場合、抽象操作 [`ToString`](https://tc39.es/ecma262/#sec-tostring) を用いて文字列に変換されます。この引数では先頭の{{glossary("whitespace", "ホワイトスペース")}}は無視されます。

### 返値

指定された `string` を解釈した浮動小数点値です。または、最初のホワイトスペース以外の文字が数値に変換できなかった場合は {{jsxref("NaN")}} です。

> [!NOTE]
> JavaScript は、言語レベルでは「浮動小数点数」と「整数」の区別はありません。[`parseInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt) と `parseFloat()` の違いは、構文解析の挙動だけですが、返値はその型になるとは限りません。例えば、`parseInt("42")` と `parseFloat("42")` は同じ値、つまり[数値](/ja/docs/Web/JavaScript/Guide/Data_structures#数値型)の 42 を返します。

## 解説

`parseFloat` 関数は、最初の引数を文字列に変換し、その文字列を 10 進数のリテラルとして構文解析し、数値または `NaN` を返します。この関数が受け入れる数値の構文は、次のように要約できます。

- `parseFloat` が正の符号 (`+`)、負の符号 (`-` U+002D HYPHEN-MINUS)、数値 (`0`–`9`)、小数点 (`.`)、指数記号 (`e` または `E`) 以外の文字に遭遇したら、その文字の前までの値を返し、無効な文字とそれ以降の文字を無視します。
- `+`/`-` 記号は、文字列の先頭、または `e`/`E` 文字の直後にのみ現れます。小数点は 1 回だけ、`e`/`E` 文字の前にのみ現れます。`e`/`E` 文字は 1 回だけ、その前に少なくとも 1 桁の数字がある場合にのみ現れます。
- 引数の先頭にある空白は切り捨てられ、無視されます。
- `parseFloat()` は、文字列が 0 個以上の空白文字で始まり、その後に `"Infinity"` または `"-Infinity"` が続く場合、その文字列を構文解析して {{jsxref("Infinity")}} または `-Infinity` を返します。
- `parseFloat()` は、有効な数値リテラルを生成する、先頭から最も長い部分文字列を選択します。無効な文字に遭遇した場合は、その点まで表す数値を返し、無効な文字とその後の文字をすべて無視します。
- 引数の最初の文字が、上記の構文に従って有効な数値リテラルを開始できない場合、`parseFloat` は {{jsxref("NaN")}} を返します。

構文に関しては、`parseFloat()` は [`Number()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) 関数が受け入れる構文のサブセットを構文解析します。 `parseFloat()` は、`0x`、`0b`、`0o` を接頭辞とする非 10 進リテラルは対応していませんが、それ以外はすべて対応しています。ただし、`parseFloat()` は、`Number()` よりも寛容です。これは、`Number()` では `NaN` を返す原因となる、末尾の不正な文字を無視するためです。

数値リテラルおよび `Number()` と同様に、`parseFloat()` から返される数値は、浮動小数点範囲および不正確さにより、文字列で表される数値と完全に等しくない場合があります。 `-1.7976931348623158e+308` から `1.7976931348623158e+308` の範囲外の数値（{{jsxref("Number.MAX_VALUE")}} を参照）の場合は、 `-Infinity` または `Infinity` が返されます。

## 例

### 数値を返す `parseFloat`

以下の例はすべて `3.14` を返します。

```js
parseFloat(3.14);
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14some non-digit characters");
parseFloat({
  toString() {
    return "3.14";
  },
});
```

### NaN を返す parseFloat()

以下の例は `NaN` を返します。

```js
parseFloat("FF2");
```

ちなみに、文字列 `NaN` 自体は `parseFloat()` で受け入れられる構文ではないため、`"NaN"` を渡すと `NaN` が返されます。

```js
parseFloat("NaN"); // NaN
```

### 無限大を返す

数値が 64 ビットの IEEE 754-2019 書式化範囲外の場合、無限大値が返されます。

```js
parseFloat("1.7976931348623159e+308"); // Infinity
parseFloat("-1.7976931348623159e+308"); // -Infinity
```

文字列が `"Infinity"` または `"-Infinity"` で始まる場合も、Infinity が返されます。

```js
parseFloat("Infinity"); // Infinity
parseFloat("-Infinity"); // -Infinity
```

### `parseFloat` と `BigInt`

`parseFloat()` は {{jsxref("BigInt")}} 値を処理しません。n 文字で停止し、それ以前の文字列を通常の整数として処理します。精度が失われる可能性があります。BigInt 値が `parseFloat()` に渡されると、その値は文字列に変換され、その文字列は浮動小数点数として構文解析されます。この場合も、精度が失われる可能性があります。

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

代わりに、末尾の `n` 文字を削除した文字列を [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 関数に渡してください。

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.prototype.toFixed()")}}
