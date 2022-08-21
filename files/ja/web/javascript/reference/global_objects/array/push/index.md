---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/push
---
{{JSRef}}

**`push()`** メソッドは、配列の末尾に 1 つ以上の要素を追加することができます。また戻り値として新しい配列の要素数を返します。

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## 構文

```
arr.push([element1[, ...[, elementN]]])
```

### 引数

- `elementN`
  - : 配列の末尾に追加する要素。

### 返値

メソッドが呼び出されたオブジェクトの新しい {{jsxref("Array.length", "length")}} プロパティ。

## 解説

`push` メソッドは配列の末尾に要素を追加します。

`push` は意図的に汎用性を持たせています。つまり、このメソッドは配列に類似したオブジェクトに対して{{jsxref("Function.call", "呼び出し", "", 1)}}たり、{{jsxref("Function.apply", "適用し", "", 1)}}たりすることもできます。なお、`push` は配列の末尾から要素を挿入する必要性があるため、 `length` プロパティに依存しています。`length` が数値に変換できない場合、0 が用いられます。また、 `length` が存在しない場合は `length` も作成されることになります。

ネイティブのみで、配列のようなオブジェクトは {{jsxref("Global_Objects/String", "strings", "", 1)}} ですが、文字列は変化しないので、このメソッドの効果を受けるには相応しくありません。

## 例

### 配列に要素を追加する

以下のコードは 2 つの要素を持つ配列 `sports` を生成し、それに 2 つの要素を追加します。コードの実行後、変数 `total` には 4 が入ります。

```js
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
```

### ２つの配列をマージする

この例では {{jsxref("Function.apply", "apply()")}} を利用することで 2 つ目の配列の全ての要素を 1 つ目の要素にマージさせています。

2 番目の配列 (例では `moreVegs`) が非常に大きい場合はこのメソッドを*使用しない*でください。なぜなら、1 つの関数が取ることのできるパラメータの最大数は実際には制限されているからです。詳細は {{jsxref("Function.apply", "apply()")}} を参照してください。

```js
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// 1 つ目の配列に 2 つ目の配列をマージさせます
// vegetables.push('celery', 'beetroot'); と同じ結果になります
Array.prototype.push.apply(vegetables, moreVegs)

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']
```

### オブジェクトを配列のように使用する

上述したように、`push` は内部的には汎用的なので、その利点を活かすことができます。この例が示しているように、オブジェクト上で `Array.prototype.push` は正しく動作します。

オブジェクトのコレクションを保存するために、配列を生成していないことに注意してください。代わりに、コレクションをオブジェクト自体に保存して、配列を扱っているかのように見せかけるために `Array.prototype.push` 上で `call` を使用しています。そして、JavaScript は実行コンテキストの確立を許可しているおかげで、これは動作します。

```js
let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length は、要素が追加されるたびに自動的に増分する。
        [].push.call(this, elem)
    }
}

// 例示のために空のオブジェクトを追加する。
obj.addElem({})
obj.addElem({})
console.log(obj.length)
// → 2
```

`obj` は配列ではありませんが、本当の配列を扱っているかのように `push` メソッドは `obj` の `length` プロパティを増加させできていることに注意してください。

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.push', 'Array.prototype.push')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.push")}}

## 関連情報

- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
