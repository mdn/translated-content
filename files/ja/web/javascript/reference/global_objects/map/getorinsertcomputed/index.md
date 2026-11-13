---
title: Map.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed
l10n:
  sourceCommit: af88df72d0ee1da6fd1be412f615e8b4caf98e70
---

**`getOrInsertComputed()`** は {{jsxref("Map")}} インスタンスのメソッドで、この対応表 (`Map`) 内で指定されたキーに対応する値を返します。キーが存在しない場合、指定されたコールバックから計算されたデフォルト値と共にキーを持つ新しい項目を挿入し、挿入された値を返します。

デフォルト値の計算コストが高い場合、実際に必要でない限り計算を避けることができるときは、{{jsxref("Map.prototype.getOrInsert()")}} の代わりにこのメソッドを使用してください。

{{InteractiveExample("JavaScript デモ: Map.prototype.getOrInsertComputed()")}}

```js interactive-example
const map = new Map([["bar", "foo"]]);
const defaultCreator = (key) => `default for ${key}`;

console.log(map.getOrInsertComputed("bar", defaultCreator));
// 予想される結果: "foo"

console.log(map.getOrInsertComputed("baz", defaultCreator));
// 予想される結果: "default for baz"
```

## 構文

```js-nolint
getOrInsertComputed(key, callback)
```

### 引数

- `key`
  - : `WeakMap` オブジェクトから値を取得する項目のキー。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)として比較されます。
- `callback`
  - : `Map` オブジェクトにキーが存在しない場合に挿入して返す値を返す関数。この関数は次の引数で呼び出されます。
    - `key`
      - : `getOrInsertComputed()` に渡されたものと同じキー。

### 返値

この `Map` オブジェクト内の指定されたキーに関連付けられた値です。キーが見つからなかった場合は、`callback(key)` の結果が追加され返されます。

### 例外

- {{jsxref("TypeError")}}
  - : `callback` が呼び出し可能でない場合に発生します。

## 例

### 不要なデフォルトの計算を避ける

{{jsxref("Map.prototype.getOrInsert()")}} を使用した場合、必要でなくても毎回デフォルト値が計算されます。一方、`getOrInsertComputed()` を使用すると、デフォルト値は必要な場合にのみ計算されます。

```js
const map = new Map([["bar", "foo"]]);
const defaultCreator = (key) => {
  console.log(`${key} のデフォルト値を作成`);
  return `default for ${key}`;
};

map.getOrInsert("bar", defaultCreator("bar")); // "bar のデフォルト値を作成" と出力
map.getOrInsertComputed("bar", defaultCreator); // 出力なし
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Map.prototype.getOrInsertComputed` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#map-upsert)
- [es-shims による `Map.prototype.getOrInsertComputed` のポリフィル](https://www.npmjs.com/package/map.prototype.getorinsertcomputed)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsert()")}}
