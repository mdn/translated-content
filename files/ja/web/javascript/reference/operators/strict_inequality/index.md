---
title: 厳密不等価 (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
---

{{jsSidebar("Operators")}}

厳密不等価演算子 (`!==`) は、2 つのオペランドが等しくないことを検査し、論理値で結果を返します。[不等価](/ja/docs/Web/JavaScript/Reference/Operators/Inequality)演算子とは異なり、厳密不等価演算子はオペランドの型が異なる場合、常に異なると判断します。

{{EmbedInteractiveExample("pages/js/expressions-strict-inequality.html")}}

## 構文

```js
x !== y;
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
console.log("hello" !== "hello"); // false
console.log("hello" !== "hola"); // true

console.log(3 !== 3); // false
console.log(3 !== 4); // true

console.log(true !== true); // false
console.log(true !== false); // true

console.log(null !== null); // false
```

### オペランドが異なる型である場合の比較

```js
console.log("3" !== 3); // true

console.log(true !== 1); // true

console.log(null !== undefined); // true
```

### オブジェクトの比較

```js
const object1 = {
  name: "hello",
};

const object2 = {
  name: "hello",
};

console.log(object1 !== object2); // true
console.log(object1 !== object1); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Equality)
- [不等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Inequality)
- [厳密等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)
