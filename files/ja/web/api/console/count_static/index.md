---
title: "console: count() 静的メソッド"
short-title: count()
slug: Web/API/console/count_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.count()`** 静的メソッドは、この特定の `count()` 呼び出しが呼び出された回数をログ出力します。

## 構文

```js-nolint
console.count()
console.count(label)
```

### 引数

- `label` {{Optional_Inline}}
  - : 文字列です。指定した場合、 `count()` はそのラベルを用いて呼び出した回数を出力します。省略した場合は、 `count()` は "default" ラベルで呼び出されたように動作します。

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
greet();
console.count();
```

コンソールへの出力は、次のようになります。

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
```

特にラベルが指定されていないので、表示されているラベルは `default` となっています。

変数 `user` を `label` 引数として、最初の `count()` の呼び出しには文字列 "bob" を、 2 回目の呼び出しには文字列 "alice" を渡してみます。

```js
function greet(user) {
  console.count(user);
  return `hi ${user}`;
}

greet("bob");
greet("alice");
greet("alice");
console.count("alice");
```

以下のように出力されます。

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

`label` の値のみに基づいて、個々の呼び出し回数を管理しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Microsoft Edge's documentation for `console.count()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#count)
- [Node.js documentation for `console.count()`](https://nodejs.org/docs/latest/api/console.html#consolecountlabel)
- [Google Chrome's documentation for `console.count()`](https://developer.chrome.com/docs/devtools/console/api/#count)
