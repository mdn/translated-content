---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Number
  - isNaN
  - ポリフィル
browser-compat: javascript.builtins.Number.isNaN
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---
{{JSRef}}

**`Number.isNaN()`** メソッドは、渡された値が {{jsxref("NaN")}} であり、かつその型が {{jsxref("Number")}} であるかどうかを判断します。元となるグローバルの {{jsxref("isNaN", "isNaN()")}} よりも堅牢な版です。

{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}

## 構文

```js
Number.isNaN(value)
```

### 引数

- `value`
  - : {{jsxref("NaN")}} かどうかテストされる値です。

### 返値

与えられた値が {{jsxref("NaN")}} であり、かつその型が {{jsxref("Number")}} である場合は **true**、それ以外の場合は **false** です。

## 解説

{{jsxref("Operators", "==", "#Equality")}} と {{jsxref("Operators", "===", "#Identity")}} の等価演算子ではどちらも、 {{jsxref("NaN")}} が {{jsxref("NaN")}} であるかどうかを検査すると `false` と評価されてしまうため、 `Number.isNaN()` 関数が必要となります。この状況は、 JavaScript においてあり得る他のすべての値の比較と異なります。

グローバルの {{jsxref("isNaN", "isNaN()")}} 関数とは異なり、 `Number.isNaN()` は強制的に引数が数値に変換される問題の影響をうけません。これは、通常 {{jsxref("NaN")}} に変換されるが実際には {{jsxref("NaN")}} ではない値が、安全に渡されることを意味します。つまりこの関数は、数値型であり、かつ {{jsxref("NaN")}} である値が渡されたときのみ、 `true` を返すということです。

## 例

### isNaN の使用

```js
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0);      // true

// たとえば、以下の値を isNaN() グローバル関数に渡すと true が返される
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// 以下はすべて false を返す
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');
```

## ポリフィル

以下の例が動作するのは、 NaN が JavaScript で唯一、自分自身と比較して等しくない値だからです。

```js
Number.isNaN = Number.isNaN || function isNaN(input) {
    return typeof input === 'number' && input !== input;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Number.isNaN` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- {{jsxref("Number")}}
- {{jsxref("isNaN", "isNaN()")}}
