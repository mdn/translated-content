---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
tags:
  - JavaScript
  - メソッド
  - Number
  - リファレンス
  - ポリフィル
browser-compat: javascript.builtins.Number.isFinite
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---
{{JSRef}}

**`Number.isFinite()`** メソッドは、渡された値が有限数であるかどうかを判断します。すなわち、指定された値が {{jsxref("Number")}} であり、その数値が正の無限大 ({{jsxref("Infinity")}})、負の無限大 (`Infinity`)、非数 ({{jsxref("NaN")}}) のどれでもないことをチェックします。

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

## 構文

```js
Number.isFinite(value)
```

### 引数

- `value`
  - : 有限数かどうかテストされる値。

### 返値

与えられた値が有限数かどうかを示す論理値です。

## 解説

{{jsxref("isFinite", "isFinite()")}} グローバル関数と比較すると、このメソッドは強制的に引数を数値に変換しません。すなわち、数値型の値で、それが有限数でもある場合のみ、 `true` を返すことを意味します。

## 例

### isFinite の使用

```js
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false だが、グローバルの
                            // isFinite('0') では true になる
Number.isFinite(null);      // false だが、グローバルの
                            // isFinite(null) では true になる
```

## ポリフィル

```js
if (Number.isFinite === undefined) Number.isFinite = function(value) {
    return typeof value === 'number' && isFinite(value);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Number.isFinite` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- このメソッドが所属している {{jsxref("Number")}} オブジェクト
- グローバル関数 {{jsxref("isFinite")}}
