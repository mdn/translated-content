---
title: Map.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsert
l10n:
  sourceCommit: 5956b80db199b86203b2cdfafe3e6ce45b6ad3c3
---

**`getOrInsert()`** は {{jsxref("Map")}} インスタンスのメソッドで、この対応表 (`Map`) 内で指定されたキーに対応する値を返します。キーが存在しない場合、指定されたデフォルト値を持つ新しい項目を挿入し、挿入された値を返します。

デフォルト値の計算にコストがかかる場合は、代わりに {{jsxref("Map.prototype.getOrInsertComputed()")}} を使用することを検討してください。これはコールバックを受け取り、実際に必要になった場合にのみデフォルト値を計算します。

{{InteractiveExample("JavaScript デモ: Map.prototype.getOrInsert()")}}

```js interactive-example
const map = new Map([["bar", "foo"]]);
console.log(map.getOrInsert("bar", "default"));
// 予想される結果: "foo"

console.log(map.getOrInsert("baz", "default"));
// 予想される結果: "default"
```

## 構文

```js-nolint
getOrInsert(key, defaultValue)
```

### 引数

- `key`
  - : `kMap` オブジェクトから値を取得する項目のキー。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)として比較されます。
- `defaultValue`
  - : キーが `Map` オブジェクト内に存在しなかった場合に、挿入して返す値です。

### 返値

この `WMap` オブジェクト内の指定されたキーに関連付けられた値です。キーが見つからなかった場合は、{{jsxref("undefined")}} が返されます。

## 解説

`getOrInsert()` メソッドは、次のものと同等です。

```js
if (map.has(key)) {
  return map.get(key);
}
map.set(key, defaultValue);
return defaultValue;
```

同時に、以下のパターンとも似ています（ただし、対応表内で `null` や `undefined` が有効な値である場合、信頼性は若干低下します）。

```js
map.set(key, map.get(key) ?? defaultValue);
```

## 例

### 配列の対応表

それぞれのキーが値の配列に割り当てられている対応表では、`getOrInsert()` を使用することで、新しい値を配列に追加しようとする前に、そのキーに対応する配列が存在することを確認できます。

```js
map.getOrInsert(key, []).push(value);
```

### デフォルト値の適用

`getOrInsert()` を使用することで、その値が現在必要ない場合でも、キーが対応表に存在することを保証できます。これは通常、ユーザー入力の正規化を行うために行われます。

ユーザーの設定情報をまとめた対応表があるとします。ユーザーが特定の環境設定を指定していない場合、その環境設定が常にデフォルト値になるようにしたいと思います。

```js
const options = readConfig();
options.getOrInsert("theme", "light");
options.getOrInsert("fontSize", 14);

// コードの後半では、これらのオプションが存在すると安心して仮定できます
document.body.dataset.theme = options.get("theme");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Map.prototype.getOrInsert` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#map-upsert)
- [es-shims による `Map.prototype.getOrInsert` のポリフィル](https://www.npmjs.com/package/weakmap.prototype.getorinsert)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsertComputed()")}}
