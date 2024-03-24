---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`shift()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列から**最初**の要素を取り除き、その要素を返します。このメソッドは配列の長さを変えます。

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## 構文

```js-nolint
shift()
```

### 引数

なし。

### 返値

配列から取り除かれた要素を返します。配列が空の場合は、{{jsxref("undefined")}} を返します。

## 解説

`shift()` メソッドは 0 番目の位置の要素を取り除き、続く位置の値を小さい方向にずらします。
そして、削除された値を返します。{{jsxref("Array/length", "length")}} プロパティが 0 の場合、{{jsxref("undefined")}} を返します。

{{jsxref("Array/pop", "pop()")}} メソッドは `shift()` と似た動作をしますが、こちらは配列の末尾の要素に適用されます。

`shift()` メソッドは[変更メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。長さと `this` の内容を変更します。 `this` の値を変化させず、最初の要素を取り除いた新しい配列を返したい場合は、代わりに [`arr.slice(1)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) を使用することができます。

`shift()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変であるため、このメソッドを適用するのは適切ではありません。

## 例

### 配列から要素を除去

以下のコードは `myFish` 配列を、その最初の要素を取り除く前後で表示します。また、取り除いた要素も表示します。

```js
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish 処理前:", myFish);
// myFish 処理前: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("myFish 処理後:", myFish);
// myFish 処理後: ['clown', 'mandarin', 'surgeon']

console.log("取り除いた要素:", shifted);
// 取り除いた要素: angel
```

### shift() メソッドの while ループ内での使用

shift() メソッドは時に、 while 文の条件内において用いられます。以下のコードでは、要素がすべて無くなるまで、反復処理のたびにその配列内の次の要素を取り除きます。

```js
const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri
```

### 配列以外のオブジェクトに対する shift() の呼び出し

`shift()` メソッドは `this` の `length` プロパティを読み込みます。[正規化された長さ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#length_プロパティの正規化)が 0 の場合、`length` は再び `0` に設定されます（以前は負の値または `undefined` であった可能性があります）。そうでない場合は、 `0` のプロパティを返し、残りのプロパティは左に 1 つシフトされます。 `length` プロパティは 1 つデクリメントされます。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(arrayLike));
// undefined。空のスロットであるため
console.log(arrayLike);
// { '1': 4, length: 2, unrelated: 'foo' }

const plainObj = {};
// length プロパティがないため、 length は 0
Array.prototype.shift.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
