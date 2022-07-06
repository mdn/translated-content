---
title: 不等価 (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
tags:
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.inequality
translation_of: Web/JavaScript/Reference/Operators/Inequality
---
{{jsSidebar("Operators")}}

不等価演算子 (`!=`) は、2 つのオペランドが等しくないことを検査し、論理値で結果を返します。[厳密不等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)演算子とは異なり、異なる型のオペランドを変換して比較を行おうとします。

{{EmbedInteractiveExample("pages/js/expressions-inequality.html")}}

## 構文

```js
x != y
```

## 解説

不等価演算子は、そのオペランドが等しくないことを検査します。これは[等価](/ja/docs/Web/JavaScript/Reference/Operators/Equality)演算子の逆に当たるので、以下の 2 行は常に同じ結果になります。

```js
x != y

!(x == y)
```

比較アルゴリズムの詳細については、[等価](/ja/docs/Web/JavaScript/Reference/Operators/Equality)演算子のページを参照して下さい。

等価演算子と同様に、不等価演算子は異なる型のオペランドを変換して比較しようとします。

```js
3 != "3"; // false
```

これを防止し、異なる型が異なる結果を返すようにするには、代わりに[厳密不等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)演算子を使用してください。

```js
3 !== "3"; // true
```

## 例

### 型変換がない場合の比較

```js
1 != 2;              // true
"hello" != "hola";   // true

1 != 1;              // false
"hello" != "hello";  // false
```

### 型変換がある場合の比較

```js
"1" !=  1;            // false
1 != "1";             // false
0 != false;           // false
0 != null;            // true
0 != undefined;       // true
0 != !!null;          // false (論理 NOT 演算子を参照)
0 != !!undefined;     // false (論理 NOT 演算子を参照)
null != undefined;    // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3;         // false
number1 != number2;   // true
```

### オブジェクトの比較

```js
const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 != object2 // true
object2 != object2 // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Equality)
- [厳密等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [厳密不等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
