---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Number
  - ポリフィル
browser-compat: javascript.builtins.Number.parseFloat
translation_of: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
---
{{JSRef}}

**`Number.parseFloat()`** メソッドは、引数を解釈して浮動小数点値を返します。引数の数値が解釈できない場合は、 {{jsxref("NaN")}} を返します。

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## 構文

```js
Number.parseFloat(string)
```

### 引数

- `string`
  - : 解釈する値。この引数が文字列でない場合、抽象操作 [`ToString`](https://tc39.es/ecma262/#sec-tostring) を用いて文字列に変換されます。この引数では先頭の{{glossary("whitespace", "ホワイトスペース")}}は無視されます。

### 返値

指定された `string` を解釈した浮動小数点値です。

または、最初のホワイトスペース以外の文字が数値に変換できなかった場合は {{jsxref("NaN")}} です。

## 例

### Number.parseFloat と parseFloat

このメソッドは、グローバルの {{jsxref("parseFloat", "parseFloat()")}} 関数と同じ機能を持っています。

```js
Number.parseFloat === parseFloat; // true
```

このメソッドも ECMAScript 2015 の一部です。 (この目的は、グローバルのモジュール化にあります。)

さらなる詳細と例は {{jsxref("parseFloat", "parseFloat()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Number.isSafeInteger` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- - {{jsxref("Number")}}
    - : このメソッドが所属するオブジェクト
   </li>
- グローバルの {{jsxref("parseFloat", "parseFloat()")}} メソッド
