---
title: WeakSet.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`add()`** は {{jsxref("WeakSet")}} インターフェイスのメソッドで、指定された値を、まだ存在しない場合、この集合に挿入します。

{{InteractiveExample("JavaScript デモ: WeakSet.Prototype.add()", "taller")}}

```js interactive-example
const weakset = new WeakSet();
const object = {};

weakset.add(object);
console.log(weakset.has(object));
// 予想される結果: true

try {
  weakset.add(1);
} catch (error) {
  console.log(error);
  // 予想される結果 (Chrome): TypeError: Invalid value used in weak set
  // 予想される結果 (Firefox): TypeError: WeakSet value must be an object, got 1
  // 予想される結果 (Safari): TypeError: Attempted to add a non-object key to a WeakSet
}
```

## 構文

```js-nolint
add(value)
```

### 引数

- `value`
  - : この`WeakSet` オブジェクトに追加される値。オブジェクト、または[未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)のどちらかでなければなりません。オブジェクトの比較は、値ではなく[参照](/ja/docs/Glossary/Object_reference)によって行われます。

### 返値

この `WeakSet` オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : `value` がオブジェクトでも[未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない場合に発生します。

## 例

### add() の使用

```js
const ws = new WeakSet();

ws.add(window); //window オブジェクトを WeakSet へ追加

ws.has(window); // true

// WeakSet は引数としてオブジェクトのみを取ります。
ws.add(1);
// 結果は "TypeError: Invalid value used in weak set" (Chrome)
// "TypeError: 1 is not a non-null object" (Firefox)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
