---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`pop()`** メソッドは、配列から**最後**の要素を取り除き、その要素を返します。このメソッドは配列の長さを変化させます。

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## 構文

```
arrName.pop()
```

### 返値

配列の最後の要素。配列が空だった場合は、{{jsxref("undefined")}}。

## 解説

`pop()` メソッドは配列の最後の要素を取り除き、呼び出し元にその値を返します。 `pop()` を空の配列に対して呼び出すと、 {{jsxref("undefined")}} を返します。

{{jsxref("Array.prototype.shift()")}} は `pop` と同様の動作をしますが、配列の最初の要素に適用されます。

`pop()` は変更を行うメソッドです。 `this` の長さと内容を変更します。 `this` の値は変更せずに、最後の要素を取り除いた新しい配列を返したい場合は、代わりに [`arr.slice(0, -1)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) を使用することができます。

`pop` は意図的に汎用性を持たせています。つまり、このメソッドは配列に類似したオブジェクトに対して呼び出すことができます。オブジェクトが、連続したゼロベースの数値プロパティの最後のものを反映した `length` プロパティを含んでいない場合、意味のある動作をしないことがあります。

## 例

### 配列の最後の要素を取り除く

以下のコードは、4 つの要素を含んだ配列 `myFish` を生成し、その後その最後の要素を取り除き、変数に代入しています。

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

### 配列風のオブジェクトでの apply() や call () の使用

以下のコードは、4 つの要素と長さの値を含む配列風の `myFish` オブジェクトを作成し、最後の要素を削除して長さの値をデクリメントします。

```js
const myFish = {
  0: "angel",
  1: "clown",
  2: "mandarin",
  3: "sturgeon",
  length: 4,
};

const popped = Array.prototype.pop.call(myFish); // same syntax when using apply()
console.log(myFish); // { 0: 'angel', 1: 'clown', 2: 'mandarin', length: 3 }
console.log(popped); // 'sturgeon'
```

### 配列風のオブジェクトの使用

`push` と `pop` は意図的に汎用的になっており、以下の例で示すように、それを使用して有利に進めることができます。

この例では、オブジェクトの集合を格納するために配列を作成していないことに注意してください。その代わりに、オブジェクト自体に集合を格納し、 `Array.prototype.push` と `Array.prototype.pop` で `call` を使用して、これらのメソッドが配列を使用していると考えるように仕向けています。

```js
const collection = {
  length: 0,
  addElements(...elements) {
    // obj.length は、要素が追加されるたびに
    // 自動的に増加します。

    // push が返す値を返します。つまり、
    // length プロパティの新しい値です。
    return [].push.call(this, ...elements);
  },
  removeElement() {
    // obj.length は、要素が削除されるたびに
    // 自動的にデクリメントされます。

    // push が返す値を返します。つまり、
    // 取り除かれた要素です。
    return [].pop.call(this);
  },
};

collection.addElements(10, 20, 30);
console.log(collection.length); // 3
collection.removeElement();
console.log(collection.length); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
