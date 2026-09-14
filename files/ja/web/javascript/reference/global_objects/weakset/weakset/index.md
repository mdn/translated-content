---
title: WeakSet() コンストラクター
short-title: WeakSet()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`WeakSet()`** コンストラクターは {{jsxref("WeakSet")}} オブジェクトを作成します。

## 構文

```js-nolint
new WeakSet()
new WeakSet(iterable)
```

> [!NOTE]
> `WeakSet()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでのみ構築できます。`new` なしで呼び出そうとすると、 {{jsxref("TypeError")}} が発生します。

### 引数

- `iterable` {{optional_inline}}
  - : [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Statements/for...of)が渡された場合、すべての要素が新しい `WeakSet` に追加されます。 null は undefined として扱われます。

## 例

### WeakSet オブジェクトの使用

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // foo を set から削除
ws.has(foo); // false, foo は削除済み
ws.has(bar); // true, bar は残っている
```

`foo !== bar` であることに注意してください。これらは似たオブジェクトですが、_**まったく同じオブジェクト**ではありません_。したがって、両方のオブジェクトが set に追加されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WeakSet` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#weakset)
- {{jsxref("WeakSet")}}
