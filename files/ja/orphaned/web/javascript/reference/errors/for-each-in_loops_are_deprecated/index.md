---
title: "Warning: JavaScript 1.6's for-each-in loops are deprecated"
slug: orphaned/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
---

{{jsSidebar("Errors")}}

JavaScript の警告 "JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead" は、 {{jsxref("Statements/for_each...in", "for each (variable in obj)")}} 文が使用された時に発生します。

## メッセージ

```js
Warning: JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead
```

## エラー種別

警告

## 原因

JavaScript 1.6 の {{jsxref("Statements/for_each...in", "for each (variable in obj)")}} 文は非推奨で、近い将来削除される予定です。

## 例

### オブジェクトの反復処理

特定のオブジェクトの値を反復するために {{jsxref("Statements/for_each...in", "for each...in")}} が使用されています。

#### 非推奨の構文

```js example-bad
var object = { a: 10, b: 20 };

for each (var x in object) {
  console.log(x);        // 10
                         // 20
}
```

#### 代替の標準構文

標準の {{jsxref("Statements/for...in", "for...in")}} ループを使用すると、そのループ内で特定のオブジェクトのキーを反復処理し、それぞれの値を取得することができます。

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
```

または、　{jsxref("Statements/for...of", "for...of")}} (ES2015) と {{jsxref("Object.values")}} (ES2017) を使用すると、特定のオブジェクトの値の配列を取得して、その配列を次のように反復処理することができます。

```js example-good
var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
```

### 配列の反復処理

{{jsxref("Statements/for_each...in", "for each...in")}} は、特定の配列要素を反復するために使用されていました。

#### 非推奨の構文

```js example-bad
var array = [10, 20, 30];

for each (var x in array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

#### 代替の標準構文

{{jsxref("Statements/for...of", "for...of")}} (ES2015) ループで同様のことができるようになりました。

```js example-good
var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

### null の可能性がある配列の反復

{{jsxref("Statements/for_each...in", "for each...in")}} は、指定した値が `null` または `undefined` だった場合には何もしませんが、{{jsxref("Statements/for...of", "for...of")}} は例外を発生させます。

#### 非推奨の構文

```js example-bad
function func(array) {
  for each (var x in array) {
    console.log(x);
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

#### 代替の標準構文

{{jsxref("Statements/for_each...in", "for each...in")}} 文を書き換えるために、 `null` や `undefined` が {{jsxref("Statements/for...of", "for...of")}} でも扱えるようにするには、{{jsxref("Statements/for...of", "for...of")}} の周囲をガードする必要があります。

```js example-good
function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

### オブジェクトのキー/値のペアの反復処理

#### 非推奨の構文

{{jsxref("Statements/for_each...in", "for each...in")}} と非推奨の {{jsxref("Iterator")}} オブジェクトを使用した、特定のオブジェクトのキー/値のペアを反復処理する非推奨の構文があります。

```js example-bad
var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

#### 代替の標準構文

標準の {{jsxref("Statements/for...in", "for...in")}} ループを使用して、指定されたオブジェクトのキーを反復処理し、ループ内でそれぞれの値を取得することができます。

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

または、{{jsxref("Statements/for...of", "for...of")}} (ES2015) と {{jsxref("Object.values")}} (ES2017) を使用して、特定のオブジェクトの値の配列を取得し、次のように反復処理することができます。

```js example-good
var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

## 関連情報

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Object.values")}}
- {{jsxref("Object.entries")}}
