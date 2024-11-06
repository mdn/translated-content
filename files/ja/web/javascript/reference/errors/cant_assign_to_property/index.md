---
title: 'TypeError: can''t assign to property "x" on "y": not an object'
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
---

{{jsSidebar("Errors")}}

JavaScript の strict モードの例外 "can't assign to property" は、[プリミティブ](/ja/docs/Glossary/Primitive)値、例えば[シンボル](/ja/docs/Glossary/Symbol)、[文字列](/ja/docs/Glossary/String)、[数値](/ja/docs/Glossary/Number)、[論理値](/ja/docs/Glossary/Boolean)などにプロパティを作成しようとしたときに発生します。[プリミティブ](/ja/docs/Glossary/Primitive)値はいかなる[プロパティ](/ja/docs/Glossary/property/JavaScript)を持つこともできません。

## エラーメッセージ

```js
TypeError: can't assign to property "x" on {y}: not an object (Firefox)
TypeError: Cannot create property 'x' on {y} (Chrome)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

{{jsxref("Strict_mode", "Strict モード", "", 1)}}では、 {{jsxref("TypeError")}} は[プリミティブ](/ja/docs/Glossary/Primitive)値、例えば[シンボル](/ja/docs/Glossary/Symbol)、[文字列](/ja/docs/Glossary/String)、[数値](/ja/docs/Glossary/Number)、[論理値](/ja/docs/Glossary/Boolean)などにプロパティを作成しようとしたときに発生します。[プリミティブ](/ja/docs/Glossary/Primitive)値はいかなる[プロパティ](/ja/docs/Glossary/property/JavaScript)を持つこともできません。

想定外の場所に想定外の値が流れてきたり、 {{jsxref("String")}} や {{jsxref("Number")}} のオブジェクトバリアントが想定されていたりすることが問題となることがあります。

## 例

### 無効な場合

```js example-bad
"use strict";

var foo = "my string";
// 次の行は strict モードでない場合は何もしません。
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### 問題の修正

このような場所で[プリミティブ](/ja/docs/Glossary/Primitive)値を使用しないようにコードを修正するか、 {{jsxref("Object")}} と同等のオブジェクトを生成して問題を修正するかします。

```js example-good
"use strict";

var foo = new String("my string");
foo.bar = {};
```

## 関連情報

- {{jsxref("Strict_mode", "Strict モード", "", 1)}}
- [プリミティブ](/ja/docs/Glossary/Primitive)
