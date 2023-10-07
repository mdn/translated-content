---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
---

{{JSRef}}

**`next()`** メソッドは、2 つのプロパティ `done` と `value` を持つオブジェクトを返します。 `next` メソッドに引数を提供して、ジェネレーターへ値を送ることもできます。

## 構文

```js-nolint
generatorObject.next(value)
```

### 引数

- `value`

  - : ジェネレーターへ送る値です。

    この値は `yield` 式の結果として代入されます。例えば `variable = yield expression` の場合、 `.next()` 関数に渡された値は `variable` に代入されます。

### 返値

以下の 2 つのプロパティを持った {{jsxref("Object")}} です。

- `done` (boolean)

  - : イテレーターが反復処理の末尾を過ぎている場合、値は `true` になります。この場合、 `value` はオプションでそのイテレーターの _返値_ を指定します。

    イテレーターが反復処理の次の値を生成することができた場合、値は `false` になります。これは `done` プロパティを指定しない場合も同等です。

- `value`
  - : イテレーターが yield または return した、何らかの JavaScript の値です。

## 例

### next() の使用

次の例では、 `next` メソッドが返す簡単なジェネレーターとオブジェクトを示します。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // "Generator { }"
g.next(); // "Object { value: 1, done: false }"
g.next(); // "Object { value: 2, done: false }"
g.next(); // "Object { value: 3, done: false }"
g.next(); // "Object { value: undefined, done: true }"
```

### リストでの next() の使用

この例では、 `getPage` はリストを受け取り `pageSize` 件ごとにページ分割します。それぞれの `next` 呼び出しは個々のページを返します。

```js
function* getPage(list, pageSize = 1) {
  for (let index = 0; index < list.length; index += pageSize) {
    yield list.slice(index, index + pageSize);
  }
}
const list = [1, 2, 3, 4, 5, 6, 7, 8];
const page = getPage(list, 3); // Generator { }
page.next(); // { value: [1, 2, 3], done: false }
page.next(); // { value: [4, 5, 6], done: false }
page.next(); // { value: [7, 8], done: false }
page.next(); // { value: undefined, done: true }
```

### ジェネレーターへ値を送る

この例では `next` を値付きで呼び出しています。

> **メモ:** 最初の呼び出しではジェネレーターが何も生成していないため、何もログを記録しません。

```js
function* gen() {
  while (true) {
    let value = yield null;
    console.log(value);
  }
}

const g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Generator.next")}}

## 関連情報

- {{jsxref("Statements/function*", "function*")}}
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)
