---
title: Set.prototype.size
short-title: size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`size`** は {{jsxref("Set")}} インスタンスのアクセサープロパティで、この集合内の（固有の）要素の数を返します。

{{InteractiveExample("JavaScript デモ: Set.prototype.size")}}

```js interactive-example
const set = new Set();
const object = {};

set.add(42);
set.add("forty two");
set.add("forty two");
set.add(object);

console.log(set.size);
// 予想される結果: 3
```

## 解説

`size` の値は、`Set` オブジェクトがいくつの要素を持つかを表す整数値です。`size` に対するセットアクセサー関数は `undefined` です。よって、このプロパティは変更できません。

## 例

### size の使用

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
