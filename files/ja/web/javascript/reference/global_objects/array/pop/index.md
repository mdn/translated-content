---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/pop
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

`pop` メソッドは配列の最後の要素を取り除き、呼び出し元にその値を返します。

`pop` は意図的に汎用性を持たせています。つまり、このメソッドは配列に類似したオブジェクトに対して{{jsxref("Function.call", "呼び出し", "", 1)}}たり、{{jsxref("Function.apply", "適用し", "", 1)}}たりすることもできます。ゼロから始まる数値プロパティであり、連続した連なりの最後を反映している `length` プロパティを含まないオブジェクトでは効果がないかもしれません。

空の配列に対して `pop()` を実行した場合は、{{jsxref("undefined")}} を返します。

{{jsxref("Array.prototype.shift()")}} は `pop` と同様の動作をしますが、配列の最初の要素に適用されます。

## 例

### 配列の最後の要素を取り除く

以下のコードは、4 つの要素を含んだ配列 `myFish` を生成し、その後その最後の要素を取り除き、変数に代入しています。

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

### 配列風のオブジェクトでの apply( ) や call ( ) の使用

以下のコードは、4 つの要素と長さのパラメータを含む配列のような `myFish` オブジェクトを作成し、最後の要素を削除して長さのパラメータをデクリメントします。

```js
var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(popped); // 'sturgeon'
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.pop', 'Array.prototype.pop')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.pop")}}

## 関連情報

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
