---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
tags:
  - JavaScript
  - メソッド
  - Promise
  - プロトタイプ
  - リファレンス
  - finally
  - ポリフィル
browser-compat: javascript.builtins.Promise.finally
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/finally
---
{{JSRef}}

**`finally()`** メソッドは {{jsxref("Promise")}} を返します。プロミスが確立したら、満足か拒否かにかかわらず、指定されたコールバック関数が実行されます。これにより、プロミスが成功裏に実行されたか否かに関わりなく、 `Promise` が処理された後に実行されなければならないコードを提供できます。

これによって、プロミスの {{jsxref("Promise.then", "then()")}} ハンドラーと {{jsxref("Promise.catch", "catch()")}} ハンドラーでコードが重複することを避けることができます。

{{EmbedInteractiveExample("pages/js/promise-finally.html", "taller")}}

## 構文

```js
p.finally(onFinally);

p.finally(function() {
   // 決定 (履行または拒否)
});
```

### 引数

- `onFinally`
  - : `Promise` が決定したら呼び出される関数 ({{jsxref("Function")}}) です。

### 返値

`finally` ハンドラーに指定した `onFinally` が設定された {{jsxref("Promise")}} を返します。

## 解説

プロミスが決定した後、結果に関わらず何らかの処理や後始末を行いたいなら、`finally()` メソッドは役立ちます。

`finally()` メソッドは `.then(onFinally, onFinally)` の呼び出しとよく似ていますが、いくつかの点が異なります。

- 関数をインラインで作成する場合、関数を 2 度宣言するか、変数を作成するかのどちらかで、一度に渡すことができます。
- プロミスが履行されたか拒否されたかを知る術がないため、`finally` コールバックは一切引数を受け取りません。この用途では、拒否された理由や履行された値などを提供する必要がなく、それらを気にしないときに適しています。

  - `Promise.resolve(2).then(() => {}, () => {})` (`undefined` で解決される) と異なり、`Promise.resolve(2).finally(() => {})` は `2` で解決されます。
  - 同様に、`Promise.reject(3).then(() => {}, () => {})` (`undefined` で解決される) と異なり、`Promise.reject(3).finally(() => {})` は `3` で拒否されます。

> **Note:** `finally` コールバック内で `throw` が行われた場合 (または、拒否されたプロミスを返した場合)、 `throw` を呼び出すときに指定された拒否理由と共に新しいプロミスが拒否されます。

## 例

### finally の使用

```js
let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.error(error); /* this line can also throw, e.g. when console = {} */ })
  .finally(function() { isLoading = false; });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Promise.prototype.finally` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-promise) で利用できます
- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
