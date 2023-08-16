---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
---

{{jsSidebar("Objects")}}

**`parseFloat()`** 関数は、引数を (必要に応じてまず文字列に変換してから) 解釈し、浮動小数点値を返します。

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## 構文

```
parseFloat(string)
```

### 引数

- `string`
  - : 解釈する値。この引数が文字列でない場合、抽象操作 [`ToString`](https://tc39.es/ecma262/#sec-tostring) を用いて文字列に変換されます。この引数では先頭の{{glossary("whitespace", "ホワイトスペース")}}は無視されます。

### 返値

指定された `string` を解釈した浮動小数点値です。

または、最初のホワイトスペース以外の文字が数値に変換できなかった場合は {{jsxref("NaN")}} です。

## 解説

`parseFloat` は最上位関数であり、どのオブジェクトのメソッドでもありません。

- `parseFloat` が正の符号 (`+`)、負の符号 (`-` U+002D HYPHEN-MINUS)、数値 (`0`–`9`)、小数点 (`.`)、指数記号 (`e` または `E`) 以外の文字に遭遇したら、その文字の前までの値を返し、無効な文字とそれ以降の文字を無視します。
- *2 番目*の小数点に遭遇した場合も、解析を停止します (その位置より前までの文字は解析されます)。
- 引数にある前後の空白は無視されます。
- 引数の最初の文字が数値に変換できない場合 (上記のいずれでもない場合), `parseFloat` は {{jsxref("NaN")}} を返します。
- `parseFloat` は {{jsxref("Infinity")}} を解析し、返すことができます。
- `parseFloat` は {{jsxref("BigInt")}} の構文を {{jsxref("Number", "Numbers")}} に変換し、精度は下がります。これは最後の `n` の文字が破棄されるからです。

より厳密な構文解析には {{jsxref("Number", "Number(value)")}} を検討してください。これは、引数のどこかに無効な文字があると {{jsxref("NaN")}} に変換します。

`parseFloat` は {{jsxref("Object.toString", "toString")}} または {{jsxref("Object.valueOf", "valueOf")}} メソッドが定義されているオブジェクトを解析することもできます。返値は `parseFloat` がこれらのメソッドの返値で呼び出された場合と同じです。

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
  toString: function () {
    return "3.14";
  },
});
```

### `NaN` を返す `parseFloat`

以下の例は `NaN` を返します。

```js
parseFloat("FF2");
```

### `parseFloat` と `BigInt`

以下の例はどちらも `900719925474099300` を返します。 float として表現できないほど整数が大きいので、精度が失われます。

```js
parseFloat(900719925474099267n);
parseFloat("900719925474099267n");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.parseFloat")}}

## 関連情報

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("isNaN", "isNaN()")}}
