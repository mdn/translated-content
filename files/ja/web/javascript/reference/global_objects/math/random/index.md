---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: 0aba9992d39210d5b8a8b204c5baafd3b31c4e25
---

{{JSRef}}

**`Math.random()`** は静的メソッドで、 0 以上 1 未満の範囲で浮動小数点の擬似乱数を返します。その範囲ではほぼ均一な分布で、ユーザーは必要なだけ範囲の拡大をすることができます。実装側で乱数生成アルゴリズムの初期シードを選択します。ユーザーが初期シードを選択、またはリセットすることは出来ません。

> **メモ:** `Math.random()` の提供する乱数は、暗号に使用可能な安全性を備えていません。セキュリティに関連する目的では使用しないでください。代わりにウェブ暗号 API (より具体的には {{domxref("Crypto.getRandomValues()")}} メソッド) を使用してください。

{{EmbedInteractiveExample("pages/js/math-random.html")}}

## 構文

```js-nolint
Math.random()
```

### 引数

なし

### 返値

0 (含む) から 1 (含まない) までの擬似乱数である浮動小数点数です。

## 例

JavaScript における数値は、IEEE 754 浮動小数点での round-to-nearest-even を行うため、以下の関数の値域が ( `Math.random()` 自体の値域が正しくても) 厳密ではないことに注意してください。
通常、上限値は達成できませんが、`Math.random()` が 1 に近い数値を返した場合、そのわずかな差が要求された最大値で表現できない場合があり、その結果、上限値が達成されることがあります。

### 0 以上 1 未満の乱数を得る

```js
function getRandom() {
  return Math.random();
}
```

### 2 つの値の間の乱数を得る

この例は、指定した値の範囲内の乱数を返します。返される値は、 `min` 以上（等しい可能性もあります）で、 `max` より小さい（等しくない）値です。

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### 2 つの値の間のランダムな整数を得る

この例は指定した値の間のランダムな整数を返します。返値は `min` 以上 (`min` が整数でない場合、 `min` より大きい次の整数以上)、 `max` 未満です。

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 上限は除き、下限は含む
}
```

> **メモ:** [`Math.round()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round) を使う方が魅力的かもしれませんが、その場合は乱数が不均一な分布に従うことになるので、ユーザーのニーズに合わないかもしれません。

### 包括的に 2 つの値の間のランダムな整数を得る

上記の `getRandomInt()` 関数が返す乱数の範囲は最小値を含みますが、最大値は除外されます。最小値も最大値も範囲に含まれる乱数を生成したいなら、以下の `getRandomIntInclusive()` 関数を使うといいでしょう。

```js
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 上限を含み、下限も含む
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Crypto.getRandomValues()")}}
