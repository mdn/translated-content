---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

**`push()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列の末尾に指定された要素を追加します。また返値として配列の新しい長さを返します。

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## 構文

```js-nolint
push()
push(element1)
push(element1, element2)
push(element1, element2, /* …, */ elementN)
```

### 引数

- `element1`, …, `elementN`
  - : 配列の末尾に追加する要素。

### 返値

メソッドが呼び出されたオブジェクトの新しい {{jsxref("Array/length", "length")}} プロパティ。

## 解説

`push()` メソッドは配列の末尾に要素を追加します。

{{jsxref("Array.prototype.unshift()")}} は `push()` と同様の動作ですが、配列の先頭に適用されます。

`push()` メソッドは[変更メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。これは、 `this` の長さとコンテンツを変更します。 `this` の値はそのままで、最後に要素を追加した新しい配列を返したい場合は、代わりに [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) を使用することができます。要素が余分な配列に包まれていることに注意してください。そうでなければ、要素が配列そのものである場合、 `concat()` の動作により、単一の要素として挿入されるのではなく、分散されてしまうでしょう。

`pop()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変であるため、このメソッドを適用するのは適切ではありません。

## 例

### 配列に要素を追加する

以下のコードは 2 つの要素を持つ配列 `sports` を生成し、それに 2 つの要素を追加します。コードの実行後、変数 `total` には 4 が入ります。

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### ２つの配列をマージする

この例では{{jsxref("Operators/Spread_syntax", "スプレッド構文", "", 1)}}を使用して、二番目の配列から最初の配列へすべての要素を挿入します。

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// 1 つ目の配列に 2 つ目の配列をマージさせます
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

2 つの配列の結合は、 {{jsxref("Array.prototype.concat()", "concat()")}} メソッドでも行うことができます。

### 配列以外のオブジェクトに対する push() の呼び出し

`push()` メソッドは `this` の `length` プロパティを読み込みます。そして、 `length` から始まる `this` の各インデックスを `push()` に渡された引数で設定します。最後に、`length` に直前の長さにプッシュされた要素数を加えた値を設定します。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' }

const plainObj = {};
// length プロパティがないので、長さは 0
Array.prototype.push.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

### オブジェクトを配列のように使用する

前述したように、`push` は内部的には汎用的なので、その利点を活かすことができます。この例が示しているように、オブジェクト上で `Array.prototype.push` は正しく動作します。

オブジェクトの集合を保存するために、配列を生成していないことに注意してください。代わりに、集合をオブジェクト自体に保存して、配列を扱っているかのように見せかけるために `Array.prototype.push` 上で `call` を使用しています。そして、JavaScript は実行コンテキストの確立を許可しているおかげで、これは動作します。

```js
const obj = {
  length: 0,

  addElem(elem) {
    // obj.length は、要素が追加されるたびに
    // 自動的に増加する。
    [].push.call(this, elem);
  },
};

// 例示のために空のオブジェクトを追加する。
obj.addElem({});
obj.addElem({});
console.log(obj.length); // 2
```

`obj` は配列ではありませんが、本当の配列を扱っているかのように `push` メソッドは `obj` の `length` プロパティを増加させできていることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [このメソッドの修正を含んだ `Array.prototype.push` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
