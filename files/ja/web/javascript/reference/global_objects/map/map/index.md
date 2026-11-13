---
title: Map() コンストラクター
short-title: Map()
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
l10n:
  sourceCommit: 1d905454be7d8910d5e3b33f0c22d063fe212816
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
  - : 配列などの[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)が渡された場合、そのすべての要素が新しい `Map` に追加されます。それぞれの要素は `0` と `1` の 2 つのプロパティを持つオブジェクトでなければならず、それぞれがキーと値に対応します（例えば `[[1, "one"],[2, "two"]]`）。この引数を指定しない場合、またはその値が `null` または `undefined` である場合、新しい `Map` は空になります。

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
