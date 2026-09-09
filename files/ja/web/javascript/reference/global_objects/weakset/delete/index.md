---
title: WeakSet.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`delete()`** は {{jsxref("WeakSet")}} インターフェイスのメソッドで、指定された値をこの集合から、存在すれば、取り除きます。

{{InteractiveExample("JavaScript デモ: WeakSet.Prototype.delete()")}}

```js interactive-example
const weakset = new WeakSet();
const object = {};

weakset.add(object);

console.log(weakset.has(object));
// 予想される結果: true

weakset.delete(object);

console.log(weakset.has(object));
// 予想される結果: false
```

## 構文

```js-nolint
weakSetInstance.delete(value)
```

### 引数

- `value`
  - : この`WeakSet` オブジェクトから取り除く値。オブジェクトの比較は、値ではなく[参照](/ja/docs/Glossary/Object_reference)によって行われます。

### 返値

`WeakSet` オブジェクト内の値が正常に取り除かれた場合、`true` を返します。`WeakSet` 内にその値が見つからない場合、`false` を返します。`value` がオブジェクトまたは [未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でない場合は、常に `false` を返します。

## 例

### delete() メソッドの使用

```js
const ws = new WeakSet();
const obj = {};

ws.add(window);

ws.delete(obj); // false を返します。削除する obj が見つかりません。
ws.delete(window); // true を返します。正常に削除されます。

ws.has(window); // false を返します。 window はもう WeakSet の中にないからです。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.has()")}}
