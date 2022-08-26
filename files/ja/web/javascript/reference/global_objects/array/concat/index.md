---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - array.concat
  - concat
translation_of: Web/JavaScript/Reference/Global_Objects/Array/concat
---
{{JSRef}}

**`concat()`** メソッドは、2 つ以上の配列を結合するために使用します。このメソッドは既存の配列を変更せず、新しい配列を返します。

{{EmbedInteractiveExample("pages/js/array-concat.html","shorter")}}

## 構文

```
const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
```

### 引数

- `valueN` {{optional_inline}}
  - : 新しい配列に連結する配列や値です。すべての `valueN` 引数が省略された場合、 `concat` は呼び出された既存の配列のシャローコピーを返します。詳しくは下記の解説をお読みください。

### 返値

新しい {{jsxref("Array")}} インスタンス。

## 解説

`concat` は、メソッドを呼び出した `this` オブジェクトの要素に、与えられた引数の要素 (引数が配列である場合) または引数そのもの (引数が配列でない場合) が順に続く、新しい配列オブジェクトを生成します。

`concat` は `this` や引数として与えられた配列を変更しませんが、その代わりに元の配列から結合させた同じ要素のコピーを含むシャローコピー (1 次元の配列要素までの浅いコピー) を返します。元の配列の要素は以下のようにして新しい配列にコピーされます。

- オブジェクトの参照 (実際のオブジェクトではなく): `concat` はオブジェクトの参照を新しい配列にコピーします。元の配列も新しい配列も同じオブジェクトを参照します。これはつまり、もし参照されているオブジェクトが修正されれば、その変更は元の配列と新しい配列の両方に現れるわけです。
- 文字列や数値、真偽値 ({{jsxref("Global_Objects/String", "String")}} オブジェクトや {{jsxref("Global_Objects/Number", "Number")}} オブジェクト、{{jsxref("Global_Objects/Boolean", "Boolean")}} オブジェクトではなく): `concat` は文字列や数値の値を新しい配列にコピーします。

> **Note:** **注:** 連結した配列/値は元の配列には手を付けません。さらに、新しい配列へどんな操作をしても、元の配列には影響しません。逆もまた同様です（要素がオブジェクト参照ではない場合のみです）。

## 例

### 2 つの配列を連結させる

以下のコードは 2 つの配列を連結させます。

```js
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

letters.concat(numbers);
// result in ['a', 'b', 'c', 1, 2, 3]
```

### 3 つの配列を連結させる

以下のコードは 3 つの配列を連結させます。

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 配列に値を連結させる

以下のコードは配列に値を連結させます。

```js
const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### ネストした配列を連結する

以下のコードはネストした配列同士を連結させます。また、元の配列からの参照を保持しています。

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// num1 の最初の要素を変更します
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.prototype.concat', 'Array.prototype.concat')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.concat")}}

## 関連情報

- {{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} - 配列末尾への要素の追加 / 配列末尾の要素の削除
- {{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} - 配列の先頭に要素を追加 / 配列の先頭の要素を削除
- {{jsxref("Array.splice", "splice")}} - 配列の指定位置に要素を追加 / 指定位置の要素を削除
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}} – 平坦化を制御
