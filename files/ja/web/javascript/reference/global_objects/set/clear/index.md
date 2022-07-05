---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - プロトタイプ
  - リファレンス
  - set
browser-compat: javascript.builtins.Set.clear
translation_of: Web/JavaScript/Reference/Global_Objects/Set/clear
---
{{JSRef}}

**`clear()`** メソッドは、 `Set` オブジェクトからすべての要素を取り除きます。

{{EmbedInteractiveExample("pages/js/set-prototype-clear.html")}}

## 構文

```js
clear()
```

### 返値

{{jsxref("undefined")}} です。

## 例

### clear() メソッドの使用

```js
var mySet = new Set();
mySet.add(1);
mySet.add('foo');

mySet.size;       // 2
mySet.has('foo'); // true

mySet.clear();

mySet.size;       // 0
mySet.has('bar')  // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
