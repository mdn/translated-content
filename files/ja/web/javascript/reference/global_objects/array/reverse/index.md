---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
l10n:
  sourceCommit: cf607d68522cd35ee7670782d3ee3a361eaef2e4
---

{{JSRef}}

**`reverse()`** メソッドは、配列の要素を[その場](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)で反転させ、その配列への参照を返します。最初の要素が最後の要素に、最後の要素が最初の要素になります。言い換えれば、配列内の要素順序を、先に述べた方向とは逆に向かわせます。

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## 構文

```js
reverse();
```

### 返値

元の配列を反転されたものへの参照です。なお、配列は[その場](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)で反転され、コピーは作られません。

## 解説

`reverse` メソッドは、呼び出した配列オブジェクトの要素を反転し、書き換えられた配列の参照を返します。

`reverse` は意図的に汎用性を持たせています。つまり、このメソッドは配列に類似したオブジェクトに対して呼び出すこともできます。ゼロから始まる数値プロパティであり、連続した連なりの最後を反映している `length` プロパティを含まないオブジェクトでは効果がないかもしれません。

## 例

### 配列の要素を反転させる

次の例は、3 つの要素を含む配列 `items` を作成し、その配列を反転させます。`reverse()` の呼び出しは、反転した配列 `items` への参照を返します。

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### 配列風オブジェクトの要素を反転させる

次の例は、3 つの要素と length プロパティを含む配列風オブジェクト `obj` を作成し、その配列風オブジェクトを反転させます。`reverse()` の呼び出しは、反転した配列風オブジェクト `obj` への参照を返します。

```js
const obj = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log(obj); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(obj); //apply() を使用するのと同じ構文
console.log(obj); // {0: 3, 1: 2, 2: 1, length: 3}
```

### reverse() メソッドは同じ配列への参照を返す

`reverse()` メソッドは元の配列への参照を返すので、返された配列を変更すると、元の配列も変更されます。

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

`reverse()` で元の配列を変更せず、他の配列メソッド（[`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) など）が行うように[シャローコピーした](/ja/docs/Glossary/Shallow_copy)配列を返すようにするには、 `reverse()` を呼び出す前に[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)か [`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) を使用してシャローコピーを行ってください。

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] はシャローコピーを作成するので、 reverse() は元の配列を変更しない
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
