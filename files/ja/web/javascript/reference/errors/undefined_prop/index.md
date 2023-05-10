---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
---

{{jsSidebar("Errors")}}

## メッセージ

```
ReferenceError: reference to undefined property "x" (Firefox)
```

## エラーの種類

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) でのみ、{{jsxref("ReferenceError")}} の警告が出ます。

## 何がうまくいかなかったのか？

存在しないオブジェクトのプロパティにアクセスしようとしています。プロパティにアクセスする方法は 2 つあります。詳細については、[メンバー演算子](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)参照ページを見てください。

未定義プロパティを参照することによるエラーは、[strict モードのコード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。非 strict コードでは、暗黙的に無視されます。

## 例

### 無効なケース

このケースでは、"bar" は未定義のプロパティです。

```js example-bad
"use strict";

var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
```

### 有効なケース

エラーを避けるには、"bar" プロパティを定義するか、使用する前に "bar" プロパティが存在するか確認する必要があります（たとえば、{{jsxref("Object.prototype.hasOwnProperty()")}} メソッドを使用します）。

```js example-good
"use strict";

var foo = {};

foo.bar = "moon";
console.log(foo.bar); // "moon"

if (foo.hasOwnProperty("bar") {
  console.log(foo.bar);
}
```

## 関連項目

- [Strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
