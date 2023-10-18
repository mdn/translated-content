---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`push()`** メソッドは、配列の末尾に 1 つ以上の要素を追加することができます。また戻り値として新しい配列の要素数を返します。

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## 構文

```js
push(element0);
push(element0, element1);
push(element0, element1, /* … ,*/ elementN);
```

### 引数

- `elementN`
  - : 配列の末尾に追加する要素。

### 返値

メソッドが呼び出されたオブジェクトの新しい {{jsxref("Array/length", "length")}} プロパティ。

## 解説

`push()` メソッドは配列の末尾に要素を追加します。

{{jsxref("Array.prototype.unshift()")}} は `push()` と同様の動作ですが、配列の先頭に適用されます。

`push()` メソッドは変更を行うメソッドです。これは、 `this` の長さとコンテンツを変更します。 `this` の値はそのままで、最後に要素を追加した新しい配列を返したい場合は、代わりに [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) を使用することができます。要素が余分な配列に包まれていることに注意してください。そうでなければ、要素が配列そのものである場合、 `concat()` の動作により、単一の要素として挿入されるのではなく、分散されてしまうでしょう。

`Array.prototype.push()` は意図的に汎用性を持たせています。このメソッドは配列に似たオブジェクトに対して呼び出すことができます。 `push` は配列の末尾から要素を挿入する必要性があるため、 `length` プロパティに依存しています。`length` が数値に変換できない場合、0 が用いられます。また、 `length` が存在しない場合は `length` も作成されることになります。

ネイティブの配列風オブジェクトは{{jsxref("Global_Objects/String", "文字列", "", 1)}}ですが、文字列は変化しないので、このメソッドの効果を受けるには相応しくありません。

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

この例では{{jsxref("Operators/Spread_syntax", "スプレッド構文", "", "1")}}を使用して、二番目の配列から最初の配列へすべての要素を挿入します。

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// 1 つ目の配列に 2 つ目の配列をマージさせます
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

2 つの配列の結合は、 {{jsxref("Array.prototype.concat()", "concat()")}} メソッドでも行うことができます。

### オブジェクトを配列のように使用する

上述したように、`push` は内部的には汎用的なので、その利点を活かすことができます。この例が示しているように、オブジェクト上で `Array.prototype.push` は正しく動作します。

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
console.log(obj.length);
// → 2
```

`obj` は配列ではありませんが、本当の配列を扱っているかのように `push` メソッドは `obj` の `length` プロパティを増加させできていることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [このメソッドの修正を含んだ `Array.prototype.push` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
