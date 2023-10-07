---
title: Map() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
---

{{JSRef}}

**`Map()` コンストラクター**は、 {{jsxref("Map")}} オブジェクトを生成します。

## 構文

```
new Map([iterable])
```

### 引数

- `iterable`
  - : {{jsxref("Array")}} または他の[反復処理可能](/ja/docs/Web/JavaScript/Guide/iterable)なオブジェクトで、要素はキーと値の組です。 (たとえば、 `[[ 1, 'one' ],[ 2, 'two' ]]` のような 2 つの要素を持つ配列。) それぞれのそれぞれのキーと値の組が新しい `Map` に追加されます。

## 例

### 新しい Map の生成

```js
let myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.Map")}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
