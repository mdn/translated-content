---
title: WeakSet.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`has()`** は {{jsxref("WeakSet")}} インターフェイスのメソッドで、指定された値がこの `WeakSet` に存在するかどうかを示す論理値を返します。

{{InteractiveExample("JavaScript デモ: WeakSet.Prototype.has()")}}

```js interactive-example
const weakset = new WeakSet();
const object1 = {};
const object2 = {};

weakset.add(object1);

console.log(weakset.has(object1));
// 予想される結果: true

console.log(weakset.has(object2));
// 予想される結果: false
```

## 構文

```js-nolint
has(value)
```

### 引数

- `value`
  - : `WeakSet` オブジェクト内で存在の有無を検査する値。オブジェクトの比較は、値ではなく[参照](/ja/docs/Glossary/Object_reference)によって行われます。

### 返値

指定された値が `WeakSet` オブジェクト内に存在する場合、`true` を返します。存在しない場合は `false` を返します。`value` がオブジェクトでも[未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない場合は、常に `false` を返します。

## 例

### has() メソッドの使用

```js
const ws = new WeakSet();
const obj = {};
ws.add(window);

ws.has(window); // true を返す
ws.has(obj); // false を返す

// 未登録シンボルを格納
const sym = Symbol("foo");
ws.add(sym);
ws.add(Symbol.iterator);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
