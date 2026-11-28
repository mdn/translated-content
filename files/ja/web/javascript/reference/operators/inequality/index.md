---
title: 不等価演算子 (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

不等価演算子 (`!=`) は、2 つのオペランドが等しくないことを検査し、論理値で結果を返します。[厳密不等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)演算子とは異なり、異なる型のオペランドを強制変換して比較しようとします。

{{InteractiveExample("JavaScript デモ: 不等価演算子 (!=)")}}

```js interactive-example
console.log(1 != 1);
// 予想される結果: false

console.log("hello" != "hello");
// 予想される結果: false

console.log("1" != 1);
// 予想される結果: false

console.log(0 != false);
// 予想される結果: false
```

## 構文

```js-nolint
x != y
```

### 引数

- `x`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 8 （等価性演算子）以上の式です。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 9 （関係演算子）以上の式です。

### 返値

[緩い等価性](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#による緩い等価性)に従って `x` と `y` が等しくない場合は `true`、そうでなければ `false` です。

## 解説

不等価演算子は、そのオペランドが等しくないことを検査します。これは[等価](/ja/docs/Web/JavaScript/Reference/Operators/Equality)演算子の逆に当たるので、以下の 2 行は常に同じ結果になります。

```js
x != y;

!(x == y);
```

比較アルゴリズムの詳細については、[等価](/ja/docs/Web/JavaScript/Reference/Operators/Equality)演算子のページを参照してください。

等価演算子と同様に、不等価演算子は異なる型のオペランドを強制変換して比較しようとします。

```js
3 != "3"; // false
```

これを防止し、異なる型が異なる結果を返すようにするには、代わりに[厳密不等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)演算子を使用してください。

```js
3 !== "3"; // true
```

## 例

### 強制変換を行わない場合の比較

```js
1 != 2; // true
"hello" != "hola"; // true

1 != 1; // false
"hello" != "hello"; // false
```

### 強制変換を行う場合の比較

```js
"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false (論理 NOT 演算子を参照)
0 != !!undefined; // false (論理 NOT 演算子を参照)
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true
```

### オブジェクトの比較

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 != object2); // true
console.log(object1 != object1); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [等価演算子 (`==`)](/ja/docs/Web/JavaScript/Reference/Operators/Equality)
- [厳密等価演算子 (`===`)](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [厳密不等価演算子 (`!==`)](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
