---
title: console.count()
slug: Web/API/console/count
l10n:
  sourceCommit: 710132ffea066697d23e1978478d36090fb448d7
---

{{APIRef("Console API")}}

**`console.count()`** メソッドは、 `count()` を実際に呼び出した回数を記録します。

{{AvailableInWorkers}}

## 構文

```js
count();
count(label);
```

### 引数

- `label` {{Optional_Inline}}
  - : 文字列です。指定した場合、 `count()` はそのラベルを用いて呼び出した回数を出力します。省略した場合は、 `count()` は "default" ラベルで呼び出されたように動作します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

例えば、次のようなコードがあったとします。

```js
let user = "";

function greet() {
  console.count();
  return `hi ${user}`;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
```

コンソールへの出力は、次のようになります。

```
"default: 1"
"default: 2"
"default: 3"
"default: 4"
```

特にラベルが指定されていないので、表示されているラベルは `default` となっています。

変数 `user` を `label` 引数として、最初の `count()` の呼び出しには文字列 "bob" を、 2 回目の呼び出しには文字列 "alice" を渡してみます。

```js
let user = "";

function greet() {
  console.count(user);
  return `hi ${user}`;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
```

以下のように出力されます。

```
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
