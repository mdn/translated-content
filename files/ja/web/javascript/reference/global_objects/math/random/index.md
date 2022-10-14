---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
---

{{JSRef}}

**`Math.random()`** 関数は、 0 以上 1 未満 (0 は含むが、 1 は含まない) の範囲で浮動小数点の擬似乱数を返します。その範囲ではほぼ均一な分布で、ユーザーは範囲の拡大をすることができます。実装側で乱数生成アルゴリズムの初期シードを選択します。ユーザーが初期シードを選択、またはリセットすることは出来ません。

{{EmbedInteractiveExample("pages/js/math-random.html")}}

> **メモ:** `Math.random()` の提供する乱数は、暗号に使用可能な安全性を備えて*いません*。セキュリティに関連する目的では使用しないでください。代わりに Web Crypto API (より具体的には {{domxref("Crypto.getRandomValues", "window.crypto.getRandomValues()")}} メソッド) を使用してください。

## 構文

```
Math.random()
```

### 返値

`0` (含む) から 1 (含まない) までの擬似乱数である浮動小数点数です。

## 例

JavaScript における数値は、IEEE 754 浮動小数点での round-to-nearest-even を行うため、以下の関数の値域が ( `Math.random()` 自体の値域が正しくても) 厳密ではないことに注意してください。非常に大きい境界値 (253 以上) のうち*極めて*稀な数値で、通常なら返されないはずの上限値が出力されてしまうことがあり得ます。

### 0 以上 1 未満の乱数を得る

```js
function getRandom() {
  return Math.random();
}
```

### 2 つの値の間の乱数を得る

この例は指定した値の間の乱数を返します。返値は `min` 以上、 `max` 未満です。

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### 2 つの値の間のランダムな整数を得る

この例は指定した値の間のランダムな整数を返します。返値は `min` 以上 (`min` が整数でない場合、 `min` より大きい次の整数以上)、 `max` 未満です。

```js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
```

> **メモ:** `Math.round()` を使う方が魅力的かもしれませんが、その場合は乱数が不均一な分布に従うことになるので、ユーザーのニーズに合わないかもしれません。

### 包括的に 2 つの値の間のランダムな整数を得る

上記の `getRandomInt()` 関数が返す乱数の範囲は `min` を含みますが、`max` は除外されます。 `min` も `max` も範囲に含まれた乱数を生成したいなら、以下の `getRandomIntInclusive()` 関数を使うといいでしょう。

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
```

## 仕様書

| 仕様書                                                                       |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.random', 'Math.random')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.random")}}

## 関連情報

- {{domxref("Crypto.getRandomValues", "window.crypto.getRandomValues()")}}
