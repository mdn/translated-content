---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
l10n:
  sourceCommit: 4776b8fddca8ed71adc9c0f12712820db8d02371
---

{{JSRef}}

**`clear()`** は {{jsxref("Set")}} インターフェイスのメソッドで、この集合からすべての要素を取り除きます。

{{EmbedInteractiveExample("pages/js/set-prototype-clear.html")}}

## 構文

```js-nolint
clear()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### clear() メソッドの使用

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
