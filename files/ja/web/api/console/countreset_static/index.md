---
title: "console: countReset() 静的メソッド"
short-title: countReset()
slug: Web/API/console/countReset_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.countReset()`** 静的メソッドは、{{domxref("console/count_static", "console.count()")}} で使用されるカウンターをリセットします。

## 構文

```js-nolint
console.countReset()
console.countReset(label)
```

### 引数

- `label` {{optional_inline}}
  - : 文字列です。指定した場合、 `countReset()` はそのラベルに対するカウントを 0 にリセットします。省略した場合は、 `countReset()` は default のカウンターを 0 にリセットします。

### 返値

なし ({{jsxref("undefined")}})。

## 例

例えば、次のようなコードがあったとします。

```js
function greet(user) {
  console.count();
  return `hi ${user}`;
}

greet("bob");
greet("alice");
greet("alice");
console.count();
console.countReset();
```

コンソールへの出力は、次のようになります。

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

`console.counterReset()` の呼び出しによって default のカウンターが 0 にリセットされたことに注意してください。

変数 `user` を `label` 引数として、最初の `count()` の呼び出しには文字列 "bob" を、 2 回目の呼び出しには文字列 "alice" を渡してみます。

```js
function greet(user) {
  console.count(user);
  return `hi ${user}`;
}

greet("bob");
greet("alice");
greet("alice");
console.countReset("bob");
console.count("alice");
```

以下のように出力されます。

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

"bob" のカウンターをリセットしたとき他のカウンターに影響を与えません。 "alice" のカウンターは変更されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Microsoft Edge's documentation for `console.countReset()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#countreset)
- [Node.js documentation for `console.countReset()`](https://nodejs.org/docs/latest/api/console.html#consolecountresetlabel)
- [Google Chrome's documentation for `console.countReset()`](https://developer.chrome.com/docs/devtools/console/api/#countreset)
