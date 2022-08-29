---
title: console.countReset()
slug: Web/API/console/countReset
tags:
  - API
  - DOM
  - デバッグ
  - メソッド
  - リファレンス
  - ウェブ開発
  - console
  - ウェブコンソール
browser-compat: api.console.countReset
translation_of: Web/API/console/countReset
---
{{APIRef("Console API")}}

**`console.countReset()`** は {{domxref("console.count()")}} で使われたカウンターをリセットします。

{{AvailableInWorkers}}

## 構文

```js
console.countReset([label]);
```

### 引数

- `label` {{optional_inline}}
  - : 文字列です。指定した場合、 `countReset()` はそのラベルに対するカウントを 0 にリセットします。省略した場合は、 `countReset()` は default のカウンターを 0 にリセットします。

## 例

例えば、次のようなコードがあったとします。

```js
let user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
console.countReset();
```

コンソールへの出力は、次のようになります。

```
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

`console.counterReset()` の呼び出しによって default のカウンターが 0 にリセットされたことに注意してください。

変数 `user` を `label` 引数として、最初の `count()` の呼び出しには文字列 "bob" を、 2 回目の呼び出しには文字列 "alice" を渡してみます。

```js
let user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.countReset("bob");
console.count("alice");
```

以下のように出力されます。

```
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
