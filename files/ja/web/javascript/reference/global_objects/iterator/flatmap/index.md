---
title: Iterator.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

**`flatMap()`** は {{jsxref("Iterator")}} インスタンスの目疎度で、新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)を返します。これは元のイテレーターのそれぞれの要素を取り、それをマッピング関数によって走査し、マッピング関数から返される（他のイテレーターや反復可能オブジェクトに含まれている）要素を返します。

## 構文

```js-nolint
flatMap(callbackFn)
```

### 引数

- `callbackFn`
  - : このイテレーターが生成するすべての要素に対して実行する関数です。これは `flatMap()` から返される要素を発生させるイテレーターまたは反復可能オブジェクトを返します。なお、 {{jsxref("Array.prototype.flatMap()")}} の場合とは異なり、イテレーターまたは反復可能オブジェクトでない単一の値を返してはいけません。この関数は、以下の引数とともに呼び出されます。
    - `element`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)です。最初にイテレーターヘルパーの `next()` メソッドが呼び出されると、その元となるイテレーターによって生成された最初の要素に対して `callbackFn` が呼び出され、イテレーターまたは反復可能なオブジェクトである返値がイテレーターヘルパーによって順に生成されます（{{jsxref("Operators/yield*", "yield*")}} のように）。前の要素が `callbackFn` によって返された後、次の要素が基礎となるイテレーターから取得されます。基礎となるイテレーターが完了すると、イテレーターヘルパーも完了します（`next()` メソッドは `{ value: undefined, done: true }` を生成します）。

### 例外

- {{jsxref("TypeError")}}
  - : `callbackFn` がイテレーターや反復可能な値ではない値、あるいは文字列プリミティブを返した場合に発生します。

## 解説

`flatMap` は、コールバック関数からイテレーターまたは反復可能オブジェクトの 2 種類の返値を受け入れます。これらは、 {{jsxref("Iterator.from()")}} と同じ方法で処理されます。返値が反復可能オブジェクトの場合、 `[Symbol.iterator]()` メソッドが呼び出され、返値が使用されます。それ以外の場合、返値はイテレーターとして扱われ、その `next()` メソッドが呼び出されます。

```js
[1, 2, 3]
  .values()
  .flatMap((x) => {
    let itDone = false;
    const it = {
      next() {
        if (itDone) {
          return { value: undefined, done: true };
        }
        itDone = true;
        return { value: x, done: false };
      },
    };
    switch (x) {
      case 1:
        // イテレーターではない反復可能オブジェクト
        return { [Symbol.iterator]: () => it };
      case 2:
        // 反復可能オブジェクトではないイテレーター
        return it;
      case 3:
        // 反復可能なイテレーターは、反復可能オブジェクトとして扱われる
        return {
          ...it,
          [Symbol.iterator]() {
            console.log("Symbol.iterator が呼び出されました");
            return it;
          },
        };
    }
  })
  .toArray();
// "Symbol.iterator が呼び出されました" とログ出力
// [1, 2, 3] を返す
```

## 例

### マップのマージ

以下の例は 2 つの {{jsxref("Map")}} オブジェクトを 1 つにマージします。

```js
const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
const map2 = new Map([
  ["d", 4],
  ["e", 5],
  ["f", 6],
]);

const merged = new Map([map1, map2].values().flatMap((x) => x));
console.log(merged.get("a")); // 1
console.log(merged.get("e")); // 5
```

これにより、マップの中身の一時コピーが作成されるのを避けることができます。 {{jsxref("Array.prototype.flatMap()")}} は配列のみを平坦化し、反復可能オブジェクトは平坦化しないため、配列 `[map1, map2]` は最初の段階で（{{jsxref("Array.prototype.values()")}} を使用して）イテレーターに変換する必要があることに注意してください。

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### 文字列の返却

文字列は反復可能オブジェクトですが、 `flatMap()` はその仕様上、 `callbackFn` から返される文字列プリミティブを拒否します。これは、コードポイントによる反復処理の挙動が、ユーザーの意図に沿わないことが多いからです。

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap called on non-object
```

代わりに配列でラップし、文字列全体を 1 つとして返すようにすることもできます。

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

または、コードポイントで反復処理する動作を意図している場合は、 {{jsxref("Iterator.from()")}} を使用して、それを正規のイテレーターに変換することができます。

```js
[1, 2, 3]
  .values()
  .flatMap((x) => Iterator.from(String(x * 10)))
  .toArray();
// ['1', '0', '2', '0', '3', '0']
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.flatMap` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
