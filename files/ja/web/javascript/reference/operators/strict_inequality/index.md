---
title: 厳密不等価演算子 (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**厳密不等価演算子 (`!==`)** は、2 つのオペランドが等しくないことを検査し、論理値で結果を返します。[不等価](/ja/docs/Web/JavaScript/Reference/Operators/Inequality)演算子とは異なり、厳密不等価演算子はオペランドの型が異なる場合、常に異なると判断します。

{{InteractiveExample("JavaScript デモ: 厳密不等価演算子 (!==)")}}

```js interactive-example
console.log(1 !== 1);
// 予想される結果: false

console.log("hello" !== "hello");
// 予想される結果: false

console.log("1" !== 1);
// 予想される結果: true

console.log(0 !== false);
// 予想される結果: true
```

## 構文

```js-nolint
x !== y
```

## 解説

厳密不等価演算子は、オペランドが等しくないことを検査します。これは[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)演算子の逆に当たるので、以下の 2 行は常に同じ結果になります。

```js
x !== y;

!(x === y);
```

比較アルゴリズムの詳細については、[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)演算子のページを参照して下さい。

厳密等価演算子と同様に、厳密不等価演算子はオペランドの型が異なると、常に異なるものと見なします。

```js
3 !== "3"; // true
```

## 例

### オペランドが同じ型である場合の比較

```js
"hello" !== "hello"; // false
"hello" !== "hola"; // true

3 !== 3; // false
3 !== 4; // true

true !== true; // false
true !== false; // true

null !== null; // false
```

### オペランドが異なる型である場合の比較

```js
"3" !== 3; // true
true !== 1; // true
null !== undefined; // true
```

### オブジェクトの比較

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 !== object2); // true
console.log(object1 !== object1); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [等価演算子 (`==`)](/ja/docs/Web/JavaScript/Reference/Operators/Equality)
- [不等価演算子 (`!=`)](/ja/docs/Web/JavaScript/Reference/Operators/Inequality)
- [厳密等価演算子 (`===`)](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)
