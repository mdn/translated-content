---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Number
  - ポリフィル
browser-compat: javascript.builtins.Number.parseInt
translation_of: Web/JavaScript/Reference/Global_Objects/Number/parseInt
---
{{JSRef}}

**`Number.parseInt()`** は、文字列の引数を解釈し、指定された基数の整数値を返します。

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## 構文

```js
Number.parseInt(string)
Number.parseInt(string, radix)
```

### 引数

- `string`
  - : 解釈する値。この引数が文字列でない場合、抽象操作 [`ToString`](https://tc39.es/ecma262/#sec-tostring) を用いて文字列に変換されます。この引数では先頭の{{glossary("whitespace", "ホワイトスペース")}}は無視されます。
- `radix` _{{optional_inline}}_

  - : `2` から `36` までの整数で、 `string` の*基数* (数学的記数法の底) を表します。

    `radix` が未定義または `0` であった場合、通常は `10` と見なされますが、数値が `0x` または `0X` のコードの組み合わせであった場合は `16` と見なされます。

### 返値

指定された `string` を解析した整数値です。

`radix` が `2` よりも小さいか `36` よりも大きい、または最初のホワイトスペース以外の文字が数値に変換できない場合は {{jsxref("NaN")}} が返されます。

## 例

### Number.parseInt と parseInt

このメソッドはグローバル関数の {{jsxref("parseInt", "parseInt()")}} と同じです。

```js
Number.parseInt === parseInt // true
```

また、 ECMAScript 2015 で定められているものです (グローバル値のモジュール化のため)。詳細や例は {{jsxref("parseInt", "parseInt()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Number.parseInt` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- 所属先の {{jsxref("Number")}} オブジェクト
- グローバルメソッドの {{jsxref("parseInt", "parseInt()")}}
