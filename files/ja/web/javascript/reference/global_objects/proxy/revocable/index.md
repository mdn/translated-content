---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.revocable
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
---
{{JSRef}}

**`Proxy.revocable()`** メソッドは、取り消し可能な {{jsxref("Proxy")}} オブジェクトを作成するために使用します。

## 構文

```js
Proxy.revocable(target, handler);
```

### 引数

- `target`
  - : `Proxy` でラップする対象のオブジェクトです。これは一連のオブジェクト、例えばネイティブの配列、関数、他のプロキシーなどを取ることもできます。
- `handler`
  - : プロキシー `p` に対して操作が行われたときの動作を定義する関数をプロパティとするオブジェクトです。

### 返値

新しく作成された取り消し可能な `Proxy` オブジェクト。

## 解説

取り消し可能な `Proxy` は `{proxy: proxy, revoke: revoke}` の 2 つのプロパティを持ったオブジェクトです。

- `proxy`
  - : `new Proxy(target, handler)` 呼び出しで生成したプロキシーオブジェクトです。
- `revoke`
  - : `proxy` を無効にするための引数を持たない関数です。

`revoke()` 関数を呼び出すと、プロキシーオブジェクトは使用できなくなります。ハンドラーへのトラップが発生すると、どれでも {{jsxref("TypeError")}} が発生します。プロキシーが取り消されると、取り消されたままになり、ガベージコレクションの対象となります。再度 `revoke()` が呼ばれても影響はありません。

## 例

### Proxy.revocable の使用

```js
var revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return "[[" + name + "]]";
  }
});
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError が発生
proxy.foo = 1           // TypeError が発生
delete proxy.foo;       // これも TypeError
typeof proxy            // "object" と表示。 typeof でトラップは発生しない
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
