---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
l10n:
  sourceCommit: cf607d68522cd35ee7670782d3ee3a361eaef2e4
---

{{JSRef}}

**`shift()`** メソッドは、配列から**最初**の要素を取り除き、その要素を返します。このメソッドは配列の長さを変えます。

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## 構文

```js
shift();
```

### 返値

配列から取り除かれた要素を返します。配列が空の場合は、{{jsxref("undefined")}} を返します。

## 解説

`shift()` メソッドは 0 番目の位置の要素を取り除き、続く位置の値を小さい方向にずらします。そして、削除された値を返します。{{jsxref("Array/length", "length")}} プロパティが 0 の場合、{{jsxref("undefined")}} を返します。

{{jsxref("Array/pop", "pop()")}} メソッドは `shift()` と似た動作をしますが、こちらは配列の末尾の要素に適用されます。

`shift()` メソッドは変更を行うメソッドです。長さと `this` の内容を変更します。 `this` の値を変化させず、最初の要素を取り除いた新しい配列を返したい場合は、代わりに [`arr.slice(1)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) を使用することができます。

`Array.prototype.shift()` は意図的に汎用性を持たせています。つまり、このメソッドは配列に類似したオブジェクトに対して呼び出すこともできます。ゼロから始まる数値プロパティであり、連続した連なりの最後を反映している `length` プロパティを含まないオブジェクトでは効果がないかもしれません。

## 例

### 配列から要素を除去

以下のコードは `myFish` 配列を、その最初の要素を取り除く前後で表示します。また、取り除いた要素も表示します。

```js
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", JSON.stringify(myFish));
// myFish 処理前: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("myFish 処理後:", myFish);
// myFish 処理後: ['clown', 'mandarin', 'surgeon']

console.log("取り除いた要素:", shifted);
// 取り除いた要素: angel
```

### shift() メソッドの while ループ内での使用する

shift() メソッドは時に、 while 文の条件内において用いられます。以下のコードでは、要素がすべて無くなるまで、反復処理のたびにその配列内の次の要素を取り除きます。

```js
const names = ["Andrew", "Edward", "Paul", "Chris", "John"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
