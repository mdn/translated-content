---
title: "TypeError: More arguments needed"
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "more arguments needed" は、関数の呼び出し方にエラーがあった場合に発生します。もっと多くの引数が必要です。

## エラーメッセージ

```plain
TypeError: Object prototype may only be an Object or null: undefined (V8-based)
TypeError: Object.create requires at least 1 argument, but only 0 were passed (Firefox)
TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 0 were passed (Firefox)
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed (Firefox)
TypeError: Object prototype may only be an Object or null. (Safari)
```

## エラー型

{{jsxref("TypeError")}}.

## エラーの原因

関数の呼び出し方にエラーがあります。より多くの引数を提供する必要があります。

## 例

### 必要な引数が足りない

{{jsxref("Object.create()")}} メソッドは、少なくとも 1 つは引数が必要です。また、{{jsxref("Object.setPrototypeOf()")}} メソッドは少なくとも 2 つ引数が必要です。

```js example-bad
const obj = Object.create();
// TypeError: Object.create requires at least 1 argument, but only 0 were passed

const obj2 = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
```

たとえば、[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) をプロトタイプとして設定することで修正できます。

```js example-good
const obj = Object.create(null);

const obj2 = Object.setPrototypeOf({}, null);
```

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
