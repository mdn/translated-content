---
title: "TypeError: More arguments needed"
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
---

{{jsSidebar("Errors")}}

JavaScript の例外 "more arguments needed" は、関数の呼び出し方にエラーがあった場合に発生します。もっと多くの引数が必要です。

## エラーメッセージ

```js
TypeError: argument is not an Object and is not null (Edge)
TypeError: Object.create requires at least 1 argument, but only 0 were passed
TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 0 were passed
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed
```

## エラータイプ

{{jsxref("TypeError")}}

## 何がうまくいかなかったのか？

関数の呼び出し方にエラーがあります。より多くの引数を提供する必要があります。

## 例

### 必要な引数が足りない

{{jsxref("Object.create()")}} メソッドは、少なくとも 1 つは引数が必要です。また、{{jsxref("Object.setPrototypeOf()")}} メソッドは少なくとも 2 つ引数が必要です。

```js example-bad
var obj = Object.create();
// TypeError: Object.create requires at least 1 argument, but only 0 were passed

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
```

たとえば、{{jsxref("null")}} を prototype として設定することで修正できます。

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## 関連項目

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)
