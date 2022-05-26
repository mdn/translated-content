---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
tags:
  - ECMAScript 2015
  - JavaScript
  - プロパティ
  - プロトタイプ
  - set
browser-compat: javascript.builtins.Set.size
translation_of: Web/JavaScript/Reference/Global_Objects/Set/size
---
{{JSRef}}

**`size`** アクセサープロパティは {{jsxref("Set")}} オブジェクト内の（固有の）要素の数を返します。

{{EmbedInteractiveExample("pages/js/set-prototype-size.html")}}

## 解説

`size` の値は、`Set` オブジェクトがいくつの要素を持つかを表す整数値です。`size` に対するセットアクセサー関数は `undefined` です。よって、このプロパティは変更できません。

## 例

### size の使用

```js
var mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add('some text')

mySet.size; // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
