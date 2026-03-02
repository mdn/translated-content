---
title: WeakMap.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsert
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`getOrInsert()`** は {{jsxref("WeakMap")}} インスタンスのメソッドで、この `WeakMap` 内で指定されたキーに対応する値を返します。キーが存在しない場合、指定されたデフォルト値を持つ新しい項目を挿入し、挿入された値を返します。

デフォルト値の計算にコストがかかる場合は、代わりに {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} を使用することを検討してください。これはコールバックを受け取り、実際に必要になった場合にのみデフォルト値を計算します。

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.getOrInsert()")}}

```js interactive-example
const map = new WeakMap([[window, "foo"]]);
console.log(map.getOrInsert(window, "default"));
// 予想される結果: "foo"

console.log(map.getOrInsert({}, "default"));
// 予想される結果: "default"
```

## 構文

```js-nolint
getOrInsert(key, defaultValue)
```

### 引数

- `key`
  - : `WeakMap` オブジェクトから値を取得する項目のキー。オブジェクトまたは[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)のどちらかでなければなりません。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)として比較されます。
- `defaultValue`
  - : キーが `WeakMap` オブジェクト内に存在しなかった場合に、挿入して返す値です。

### 返値

この `WeakMap` オブジェクト内の指定されたキーに関連付けられた値です。キーが見つからなかった場合は、{{jsxref("undefined")}} が返されます。

### 例外

- {{jsxref("TypeError")}}
  - : `key` がオブジェクトでも[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない場合に発生します。

## 例

### getOrInsert() の使用

```js
const wm = new WeakMap();
const obj = {};

console.log(wm.get(obj)); // undefined
console.log(wm.getOrInsert(obj, "default")); // "default"
console.log(wm.get(obj)); // "default"
console.log(wm.getOrInsert(obj, "another default")); // "default"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WeakMap.prototype.getOrInsert` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#map-upsert)
- [es-shims による `WeakMap.prototype.getOrInsert` のポリフィル](https://www.npmjs.com/package/weakmap.prototype.getorinsert)
- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
