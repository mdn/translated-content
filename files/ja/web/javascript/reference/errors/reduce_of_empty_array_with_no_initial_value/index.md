---
title: "TypeError: Reduce of empty array with no initial value"
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
---

{{jsSidebar("Errors")}}

JavaScript の例外 "reduce of empty array with no initial value" は、 reduce 関数が使用されたときに発生します。

## エラーメッセージ

```js
TypeError: reduce of empty array with no initial value
```

## エラーの種類

{{jsxref("TypeError")}}

## 何がうまくいかなかったのか？

JavaScript には、複数の reduce 関数があります。

- {{jsxref("Array.prototype.reduce()")}}、{{jsxref("Array.prototype.reduceRight()")}} と
- {{jsxref("TypedArray.prototype.reduce()")}}、{{jsxref("TypedArray.prototype.reduceRight()")}})。

これらの関数は、オプションとして (最初に `callback` が呼び出される際の最初の引数として使用される) `initialValue` を受け取ります。しかし、初期値を提供しない場合は、{{jsxref("Array")}} や {{jsxref("TypedArray")}} の最初の要素が初期値として使用されます。空の配列が提供されて初期値を取得できない場合にこのエラーが発生します。

## 例

### 無効なケース

この問題は、しばしばリストのすべての要素を取り除くフィルター ({{jsxref("Array.prototype.filter()")}}、{{jsxref("TypedArray.prototype.filter()")}}) で結合した際に発生します。したがって、初期値がないまま使用することになります。

```js example-bad
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // removes all elements
  .reduce((x, y) => x + y); // no more elements to use for the initial value.
```

似たようなケースとして、セレクターに typo がある場合やリストに予想外の数の要素がある場合に同様の問題が発生します:

```js example-bad
var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(
  names,
  (acc, name) => acc + ", " + name,
);
```

### 有効な場合

これらの問題は、2 つの異なる方法で解決できます。

1 つ目の方法は、`initialValue` を提供することです; 加算の場合には 0、乗算の場合には 1、文字連結の場合は空文字など、その操作にとって自然な値を指定します。

```js example-good
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x < 0) // removes all elements
  .reduce((x, y) => x + y, 0); // the initial value is the neutral element of the addition
```

もう 1 つの方法は、`reduce` を呼び出す前、または予期しないダミーの初期値を追加した後にコールバックで空のケースを処理する方法です。

```js example-good
var names = document.getElementsByClassName("names");

var name_list1 = "";
if (names1.length >= 1)
  name_list1 = Array.prototype.reduce.call(
    names,
    (acc, name) => acc + ", " + name,
  );
// name_list1 == "" when names is empty.

var name_list2 = Array.prototype.reduce.call(
  names,
  (acc, name) => {
    if (acc == "")
      // initial value
      return name;
    return acc + ", " + name;
  },
  "",
);
// name_list2 == "" when names is empty.
```

## 関連項目

- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
