---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
---

{{JSRef}}

**`Object.is()`** メソッドは 2 つの値が[同一値](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness)であるかどうかを判定します。

## 構文

```
Object.is(value1, value2);
```

### 引数

- `value1`
  - : 比較する 1 つ目の値。
- `value2`
  - : 比較する 2 つ目の値。

### 返値

{{jsxref("Boolean")}} で、 2 つの引数が同一値であるかどうかを表します。

## 解説

`Object.is()` は 2 つの値が[同一値](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness)であるかどうかを判定します。2 つの値が以下の規則の一つに当てはまる場合に同一となります。

- どちらも {{jsxref("undefined")}}
- どちらも {{jsxref("null")}}
- どちらも `true` かどちらも `false`
- どちらも同じ文字からなる同じ長さの文字列
- どちらも同じオブジェクト
- どちらも数で、

  - どちらも `+0`
  - どちらも `-0`
  - どちらも {{jsxref("NaN")}}
  - あるいはどちらもゼロ以外で {{jsxref("NaN")}} でなく、同じ数値を持つ

このメソッドは {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 演算子による等値比較と同じものでは**ありません**。 `==` 演算子は等値性比較の前に (同じ型でなければ) 両辺に対して様々な型変換を適用します (結果、例えば `"" == false` は `true` に評価されます) が、`Object.is` は両辺どちらの値にも型変換を行いません。

また {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} 演算子による同値比較とも同じものでも**ありません**。 `===` 演算子は (そして `==` 演算子も) 数値 `-0` と `+0` は同じものとして扱い、 {{jsxref("Number.NaN")}} と {{jsxref("NaN")}} は異なるものとして扱います。

## 例

### Object.is の使用

```js
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// 特殊なケース
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```

## ポリフィル

```js
if (!Object.is) {
  Object.defineProperty(Object, "is", {
    value: function (x, y) {
      // 同値アルゴリズム
      if (x === y) { // ステップ 1 から 5、および 7 から 10
        // ステップ 6.b から 6.e までの場合: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // ステップ 6.a の場合: NaN == NaN
        return x !== x && y !== y;
      }
    }
  });
}
```

## 仕様書

| 仕様書                                                                   |
| ------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-object.is', 'Object.is')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.is")}}

## 関連情報

- [等値比較と同一性](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness) — 標準搭載されている 3 つの同一性比較支援機能の比較
