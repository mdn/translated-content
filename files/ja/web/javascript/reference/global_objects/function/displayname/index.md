---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
---

{{JSRef}} {{non-standard_header}}

**`function.displayName`** プロパティは、関数の表示名を返します。

## 例

### displayName の設定

通常、コンソールやプロファイラーでは関数名を表示するのに {{jsxref("Function.name", "func.name")}} よりも好まれます。

以下のものをコンソールに入力すると、 "`function My Function()`" のように表示されます。

```js
var a = function () {};
a.displayName = "My Function";

a; // "function My Function()"
```

`displayName` プロパティが定義されると、関数の表示名が返されます。

```js
function doSomething() {}

console.log(doSomething.displayName); // "undefined"

var popup = function (content) {
  console.log(content);
};

popup.displayName = "Show Popup";

console.log(popup.displayName); // "Show Popup"
```

### 関数式の displayName の定義

{{jsxref("Functions_and_function_scope", "関数式", "", 1)}}内で、関数と同時に表示名を定義できます。

```js
var object = {
  someMethod: function () {},
};

object.someMethod.displayName = "someMethod";

console.log(object.someMethod.displayName); // logs "someMethod"

try {
  someMethod;
} catch (e) {
  console.log(e);
}
// ReferenceError: someMethod is not defined
```

### 動的な displayName の変更

関数の `displayName` を動的に変更できます。

```js
var object = {
  // anonymous
  someMethod: function (value) {
    arguments.callee.displayName = "someMethod (" + value + ")";
  },
};

console.log(object.someMethod.displayName); // "undefined"

object.someMethod("123");
console.log(object.someMethod.displayName); // "someMethod (123)"
```

## 仕様書

どの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat("javascript.builtins.Function.displayName")}}

## 関連情報

- {{jsxref("Function.name")}}
