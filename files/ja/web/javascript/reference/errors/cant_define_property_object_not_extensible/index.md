---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
---

{{jsSidebar("Errors")}}

JavaScript の例外 "can't define property "x": "obj" is not extensible" は {{jsxref("Object.preventExtensions()")}} でオブジェクトが拡張可能ではなくなったため、その時点で存在していたプロパティを設定できなかった際に発生します。

## エラーメッセージ

```js
TypeError: Cannot create property for a non-extensible object (Edge)
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

通常、オブジェクトは拡張可能で、新しいプロパティを追加できます。しかしこの場合は、{{jsxref("Object.preventExtensions()")}} がオブジェクトをもはや拡張できないものに設定しているため、拡張不可のマークが付けられたときにあったプロパティ以上のプロパティを追加できません。

## 例

### Adding new properties to a non-extensible objects

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、拡張不可のオブジェクトに新しいプロパティを追加しようとすると `TypeError` が発生します。非 strict モードでは、"x" プロパティの追加は暗黙的に無視されます。

```js example-bad
"use strict";

var obj = {};
Object.preventExtensions(obj);

obj.x = "foo";
// TypeError: can't define property "x": "obj" is not extensible
```

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)と非 strict モード共に、拡張不可のオブジェクトに新しいプロパティを追加しようとして {{jsxref("Object.defineProperty()")}} を呼び出すと、例外が発生します。

```js example-bad
var obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "foo" });
// TypeError: can't define property "x": "obj" is not extensible
```

このエラーを修正するには、{{jsxref("Object.preventExtensions()")}} の呼び出しを削除するか、オブジェクトが拡張不可とマークされる前にプロパティを追加するように移動する必要があります。もちろん、必要がないのであれば、追加しようとしているプロパティを削除しても構いません。

```js example-good
"use strict";

var obj = {};
obj.x = "foo"; // プロパティを追加してから拡張不可にする

Object.preventExtensions(obj);
```

## 関連情報

- {{jsxref("Object.preventExtensions()")}}
