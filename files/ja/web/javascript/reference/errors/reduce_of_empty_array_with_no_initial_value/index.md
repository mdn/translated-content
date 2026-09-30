---
title: "TypeError: Reduce of empty array with no initial value"
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "reduce of empty array with no initial value" は、 reduce 関数が使用されたときに発生します。

## エラーメッセージ

```plain
TypeError: Reduce of empty array with no initial value (V8-based & Firefox & Safari)
```

## エラー型

{{jsxref("TypeError")}}

## エラーの原因

JavaScript には、複数の reduce 関数があります。

- {{jsxref("Array.prototype.reduce()")}}、{{jsxref("Array.prototype.reduceRight()")}} と
- {{jsxref("TypedArray.prototype.reduce()")}}、{{jsxref("TypedArray.prototype.reduceRight()")}}。

これらの関数は、オプションとして `initialValue` を受け取ります（これは最初に `callback` が呼び出される際の最初の引数として使用されます）。しかし、初期値を提供していない場合は、{{jsxref("Array")}} や {{jsxref("TypedArray")}} の最初の要素が初期値として使用されます。空の配列が提供されて初期値を取得できない場合にこのエラーが発生します。

## 例

### 無効なケース

この問題は、しばしばリストのすべての要素を取り除くフィルター ({{jsxref("Array.prototype.filter()")}}、{{jsxref("TypedArray.prototype.filter()")}}) で結合した際に発生します。したがって、初期値がないまま使用することになります。

```js example-bad
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // すべての要素を除去
  .reduce((x, y) => x + y); // 初期値として使用する要素がもうない
```

似たようなケースとして、セレクターに typo がある場合やリストに予想外の数の要素がある場合に同様の問題が発生します。

```js example-bad
const names = document.getElementsByClassName("names");
const nameList = Array.prototype.reduce.call(
  names,
  (acc, name) => `${acc}, ${name}`,
);
```

### 有効な場合

これらの問題は、2 つの異なる方法で解決できます。

1 つ目の方法は、`initialValue` を提供することです。加算の場合には 0、乗算の場合には 1、文字連結の場合は空文字など、その操作にとって自然な値を指定します。

```js example-good
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // すべての要素を除去
  .reduce((x, y) => x + y, 0); // 初期値は、加法の中立要素である
```

もう 1 つの方法は、`reduce` を呼び出す前、または予期しないダミーの初期値を追加した後にコールバックで空のケースを処理する方法です。

```js example-good
const names = document.getElementsByClassName("names");

let nameList1 = "";
if (names.length >= 1) {
  nameList1 = Array.prototype.reduce.call(
    names,
    (acc, name) => `${acc}, ${name}`,
  );
}
// names が空の場合は nameList1 === ""

const nameList2 = Array.prototype.reduce.call(
  names,
  (acc, name) => {
    if (acc === "")
      // initial value
      return name;
    return `${acc}, ${name}`;
  },
  "",
);
// names が空の場合は nameList2 === ""
```

## 関連情報

- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
