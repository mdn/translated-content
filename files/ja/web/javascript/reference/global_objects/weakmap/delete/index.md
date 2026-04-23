---
title: WeakMap.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`delete()`** は {{jsxref("WeakMap")}} インスタンスのメソッドで、この `WeakMap` からキーで指定された項目を削除します。

{{InteractiveExample("JavaScript デモ: WeakMap.prototype.delete()")}}

```js interactive-example
const weakmap = new WeakMap();
const object = {};

weakmap.set(object, 42);

console.log(weakmap.delete(object));
// 予想される結果: true

console.log(weakmap.has(object));
// 予想される結果: false
```

## 構文

```js-nolint
weakMapInstance.delete(key)
```

### 引数

- `key`
  - : `WeakMap`オブジェクトから削除する項目のキー。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)によって比較されます。

### 返値

`WeakMap` オブジェクト内の項目が正常に削除された場合、`true` を返します。`WeakMap` 内でキーが見つからなかった場合は `false` を返します。`key` がオブジェクトでも[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない場合は、常に `false` を返します。

## 例

### delete() メソッドの使用

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // true を返す。削除に成功。

wm.has(window); // false を返す。 window オブジェクトはもう WeakMap に存在しない。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
