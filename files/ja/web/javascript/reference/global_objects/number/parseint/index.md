---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`Number.parseInt()`** は静的メソッドで、文字列の引数を解釈し、指定された基数の整数値を返します。

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## 構文

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### 引数

- `string`
  - : 解釈する値で、[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)。先頭の{{glossary("whitespace", "ホワイトスペース")}}は無視されます。
- `radix` {{optional_inline}}

  - : `2` から `36` までの整数で、 `string` の*基数*（数学的記数法の底）を表します。

    `radix` が未定義または `0` であった場合、通常は `10` と見なされますが、数値が `0x` または `0X` のコードの組み合わせであった場合は `16` と見なされます。

### 返値

指定された `string` を解析した整数値です。

`radix` が `2` よりも小さいか `36` よりも大きい、または最初のホワイトスペース以外の文字が数値に変換できない場合は {{jsxref("NaN")}} が返されます。

## 例

### Number.parseInt と parseInt

このメソッドはグローバル関数の {{jsxref("parseInt", "parseInt()")}} と同じです。

```js
Number.parseInt === parseInt; // true
```

この目的は、グローバル値のモジュール化のためです。詳細や例は {{jsxref("parseInt", "parseInt()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number.parseInt` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- 所属先の {{jsxref("Number")}} オブジェクト
- グローバルメソッドの {{jsxref("parseInt", "parseInt()")}}
