---
title: Number.isNaN()
short-title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number.isNaN()`** は静的メソッドで、渡された値が数値型の {{jsxref("NaN")}} であるかどうかを判定します。入力が数値型でなかった場合は `false` を返します。元となるグローバルの {{jsxref("isNaN()")}} よりも堅牢な版です。

{{InteractiveExample("JavaScript デモ: Number.isNaN()", "taller")}}

```js interactive-example
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}

console.log(typeOfNaN("100F"));
// 予想される結果: "NaN"

console.log(typeOfNaN(NaN));
// 予想される結果: "Number NaN"
```

## 構文

```js-nolint
Number.isNaN(value)
```

### 引数

- `value`
  - : {{jsxref("NaN")}} かどうか検査される値です。

### 返値

論理値で、与えられた値が数値で、かつ値が {{jsxref("NaN")}} である場合は `true` を返します。そうでなければ `false` です。

## 解説

`Number.isNaN()` 関数は、`NaN` と等しいことをチェックする便利な方法を提供します。なお、`NaN` と等しいことは [`==`](/ja/docs/Web/JavaScript/Reference/Operators/Equality) 演算子でも [`===`](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality) 演算子でも検査できません。JavaScript の他のすべての値との比較とは異なり、一方のオペランドが {{jsxref("NaN")}} であれば、もう一方のオペランドが {{jsxref("NaN")}} であっても `false` と評価します。

JavaScript の有効なすべての値の中で、`x !== x` は `NaN` だけが true になりますので、`Number.isNaN(x)` は `x !== x` の検査を置き換えることができますが、後者の方が可読性が低くなります。

グローバルの {{jsxref("isNaN()")}} 関数とは異なり、 `Number.isNaN()` は強制的に引数が数値に変換される問題の影響をうけません。これにより、通常 {{jsxref("NaN")}} に変換されるが実際には {{jsxref("NaN")}} ではない値が、安全に渡されます。つまりこの関数は、数値型であり、かつ {{jsxref("NaN")}} である値が渡されたときのみ、 `true` を返すということです。

## 例

### isNaN() の使用

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Number.isNaN() とグローバルの isNaN() の相違点

`Number.isNaN()` は引数を数値へ変換することを試みないので、数値でないものはすべて `false` を返します。以下のものはすべて `false` になります。

```js
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

グローバルの {{jsxref("isNaN()")}} は、引数を数値に変換します。

```js
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false、これは 1 に変換される
isNaN(null); // false、これは 0 に変換される
isNaN("37"); // false、これは 37 に変換される
isNaN("37.37"); // false、これは 37.37 に変換される
isNaN(""); // false、これは 0 に変換される
isNaN(" "); // false、これは 0 に変換される
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number.isNaN` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims による `Number.isNaN` のポリフィル](https://www.npmjs.com/package/number.isnan)
- {{jsxref("Number")}}
- {{jsxref("isNaN()")}}
