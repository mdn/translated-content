---
title: WeakMap.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsertComputed
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`getOrInsertComputed()`** は {{jsxref("WeakMap")}} インスタンスのメソッドで、この `WeakMap` 内で指定されたキーに対応する値を返します。キーが存在しない場合、指定されたコールバックから計算されたデフォルト値と共にキーを持つ新しい項目を挿入し、挿入された値を返します。

デフォルト値の計算コストが高い場合、実際に必要でない限り計算を避けることができるときは、{{jsxref("WeakMap.prototype.getOrInsert()")}} の代わりにこのメソッドを使用してください。

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.getOrInsertComputed()")}}

```js interactive-example
const alan = { name: "Alan" };
const map = new WeakMap([[alan, 35]]);
const defaultCreator = (obj) => `${obj.name} の年齢は不明です`;

console.log(map.getOrInsertComputed(alan, defaultCreator));
// 予想される結果: 35

const brett = { name: "Brett" };
console.log(map.getOrInsertComputed(brett, defaultCreator));
// 予想される結果: "Brett の年齢は不明です"
```

## 構文

```js-nolint
getOrInsertComputed(key, callback)
```

### 引数

- `key`
  - : `WeakMap` オブジェクトから値を取得する項目のキー。オブジェクトまたは[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)のどちらかでなければなりません。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)として比較されます。
- `callback`
  - : `Map` オブジェクトにキーが存在しない場合に挿入して返す値を返す関数。この関数は次の引数で呼び出されます。
    - `key`
      - : `getOrInsertComputed()` に渡されたものと同じキー。

### 返値

この `WeakMap` オブジェクト内の指定されたキーに関連付けられた値です。キーが見つからなかった場合は、`callback(key)` の結果が追加され返されます。

### 例外

- {{jsxref("TypeError")}}
  - : `key` がオブジェクトでも[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない場合、または `callback` が呼び出し可能でない場合に発生します。

## 例

### キャッシュ

キャッシュとは、計算コストの高い関数の引数とその返値の対応関係を構築する処理です。これにより、同じ引数で呼び出された場合、再計算せずにキャッシュされた値を返すことができます。キャッシュ値が存在しない場合は、計算してキャッシュに挿入する必要があります。

ここでは `Map` ではなく `WeakMap` を使用しています。これにより、キャッシュされた引数値がプログラム内の他の場所で不要になった場合でも、ガベージコレクションを妨げることがありません。キャッシュする関数がオブジェクト以外の引数を取る場合は、代わりに `Map` を使用することができます。

```js
// キャッシュしたい高負荷な関数
function computeExpensiveValue(requestOptions) {
  // データ取得や複雑な計算といった高コストな処理を想像してください
  console.log(`${requestOptions.url} より取得`);
  return new Response("偽のレスポンス");
}

// 任意の関数にキャッシュ機能を追加する高階関数
function withCache(fn) {
  const cache = new WeakMap();
  return (param) => cache.getOrInsertComputed(param, fn);
}

const computeWithCache = withCache(computeExpensiveValue);
const options = { url: "https://example.com/a", method: "GET" };
const value1 = computeWithCache(options); // ログ出力 "https://example.com/a より取得"
const value2 = computeWithCache(options); // ログ出力なし
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WeakMap.prototype.getOrInsertComputed` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#map-upsert)
- [es-shims による `WeakMap.prototype.getOrInsertComputed` のポリフィル](https://www.npmjs.com/package/weakmap.prototype.getorinsertcomputed)
- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
- {{jsxref("WeakMap.prototype.getOrInsert()")}}
