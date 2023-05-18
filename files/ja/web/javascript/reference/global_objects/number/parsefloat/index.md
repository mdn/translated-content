---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Number.parseFloat()`** は静的メソッドで、引数を解釈して浮動小数点値を返します。引数の数値が解釈できない場合は、 {{jsxref("NaN")}} を返します。

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## 構文

```js-nolint
Number.parseFloat(string)
```

### 引数

- `string`
  - : 解釈する値で、[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)。先頭の{{glossary("whitespace", "ホワイトスペース")}}は無視されます。

### 返値

指定された `string` を解釈した浮動小数点値です。

または、最初のホワイトスペース以外の文字が数値に変換できなかった場合は {{jsxref("NaN")}} です。

## 例

### Number.parseFloat と parseFloat

このメソッドは、グローバルの {{jsxref("parseFloat", "parseFloat()")}} 関数と同じ機能を持っています。

```js
Number.parseFloat === parseFloat; // true
```

この目的は、グローバルのモジュール化にあります。

さらなる詳細と例は {{jsxref("parseFloat", "parseFloat()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number.parseFloat` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}: このメソッドが所属するオブジェクト
- グローバルの {{jsxref("parseFloat", "parseFloat()")}} メソッド
