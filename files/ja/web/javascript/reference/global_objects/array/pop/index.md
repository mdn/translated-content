---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`pop()`** メソッドは、配列から**最後**の要素を取り除き、その要素を返します。このメソッドは配列の長さを変化させます。

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## 構文

```js-nolint
pop()
```

### 引数

なし。

### 返値

配列の最後の要素。配列が空だった場合は、{{jsxref("undefined")}}。

## 解説

`pop()` メソッドは配列の最後の要素を取り除き、呼び出し元にその値を返します。 `pop()` を空の配列に対して呼び出すと、 {{jsxref("undefined")}} を返します。

{{jsxref("Array.prototype.shift()")}} は `pop()` と同様の動作をしますが、配列の最初の要素に適用されます。

`pop()` は変更を行うメソッドです。 `this` の長さと内容を変更します。 `this` の値は変更せずに、最後の要素を取り除いた新しい配列を返したい場合は、代わりに [`arr.slice(0, -1)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) を使用することができます。

`pop()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変であるため、このメソッドを適用するのは適切ではありません。

## 例

### 配列の最後の要素を取り除く

以下のコードは、4 つの要素を含んだ配列 `myFish` を生成し、その後その最後の要素を取り除き、変数に代入しています。

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

### 配列以外のオブジェクトに対する pop() の呼び出し

`pop()` メソッドは `this` の `length` プロパティを読み込みます。[正規化された長さ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#length_プロパティの正規化)が 0 の場合、`length` は再び `0` に設定されます（以前は負の値または `undefined` であった可能性があります）。そうでない場合は、`length - 1` のプロパティが返され、[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)されます。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.pop.call(arrayLike));
// 4
console.log(arrayLike);
// { length: 2, unrelated: 'foo' }

const plainObj = {};
// length プロパティがないので、長さは 0
Array.prototype.pop.call(plainObj);
console.log(plainObj);
// { length: 0 }
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

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
