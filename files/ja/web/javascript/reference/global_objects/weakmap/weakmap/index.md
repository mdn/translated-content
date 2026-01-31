---
title: WeakMap() コンストラクター
short-title: WeakMap()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

**`WeakMap()`** コンストラクターは、{{jsxref("WeakMap")}} オブジェクトを生成します。

## 構文

```js-nolint
new WeakMap()
new WeakMap(iterable)
```

> [!NOTE]
> `WeakMap()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けた場合のみ構築できます。`new` なしで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `iterable`
  - : [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) またはその他の[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols) で、2 要素の配列風オブジェクトを生成するものです。最初の要素は `WeakMap` のキーとして使用される値であり、2 番目の要素はそのキーに関連付ける値です。それぞれのキーと値の組は新しい `WeakMap` に追加されます。`null` は `undefined` として扱われます。

## 例

### WeakMap の使用

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = () => {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // 値は何でもよく、オブジェクトでも関数でもよい
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // キーと値はあらゆるオブジェクトになれる。 WeakMap も同様。

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined、 o2 というキーが wm2 にないため
wm2.get(o3); // undefined、 設定された値がそうであるため

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (値自身が 'undefined' であっても)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WeakMap` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#weakmap)
- [`WeakMap` （JavaScript ガイド）](/ja/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
