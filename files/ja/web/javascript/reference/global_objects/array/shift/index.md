---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/shift
---
{{JSRef}}

**`shift()`** メソッドは、配列から**最初**の要素を取り除き、その要素を返します。このメソッドは配列の長さを変えます。

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## 構文

```
arr.shift()
```

### 返値

配列から取り除かれた要素を返します。配列が空の場合は、{{jsxref("undefined")}} を返します。

## 解説

`shift` メソッドは 0 番目の添え字の要素を取り除き、続く添え字の値を小さい方向にずらします。そして、削除された値を返します。{{jsxref("Array.length", "length")}} プロパティが 0 の場合、{{jsxref("undefined")}} を返します。

`shift` は意図的に汎用性を持たせています。つまり、このメソッドは配列に類似したオブジェクトに対して{{jsxref("Function.call", "呼び出し", "", 1)}}たり、{{jsxref("Function.apply", "適用し", "", 1)}}たりすることもできます。ゼロから始まる数値プロパティであり、連続した連なりの最後を反映している `length` プロパティを含まないオブジェクトでは効果がないかもしれません。

{{jsxref("Array.prototype.pop()")}} は `shift` と似た動作をしますが、配列の最後の要素に適用されます。

## 例

### 配列から要素を除去

以下のコードは `myFish` 配列を、その最初の要素を取り除く前後で表示します。また、取り除いた要素も表示します。

```js
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish 処理前: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish 処理後:', myFish);
// myFish 処理後: ['clown', 'mandarin', 'surgeon']

console.log('取り除いた要素:', shifted);
// 取り除いた要素: angel
```

### shift() メソッドの while ループ内での使用する

shift() メソッドは時に、 while 文の条件内において用いられます。以下のコードでは、要素がすべて無くなるまで、各くり返し内でその配列内の次の要素を取り除きます。

```js
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

## 仕様書

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.shift', 'Array.prototype.shift')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.shift")}}

## 関連情報

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
