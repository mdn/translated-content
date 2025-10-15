---
title: Map() コンストラクター
short-title: Map()
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Map()`** コンストラクターは、 {{jsxref("Map")}} オブジェクトを生成します。

## 構文

```js-nolint
new Map()
new Map(iterable)
```

> [!NOTE]
> `Map()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) でしか作成できません。`new` を省略して呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

- `iterable` {{optional_inline}}
  - : {{jsxref("Array")}} または他の[反復処理可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)なオブジェクトで、要素はキーと値の組です。 (たとえば、 `[[ 1, 'one' ],[ 2, 'two' ]]` のような 2 つの要素を持つ配列。) それぞれのそれぞれのキーと値の組が新しい `Map` に追加されます。

## 例

### 新しい Map の生成

```js
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Map` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#map)
- [es-shims による `Map` のポリフィル](https://www.npmjs.com/package/es-map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
