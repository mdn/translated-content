---
title: console.trace()
slug: Web/API/console/trace_static
---

{{APIRef("Console API")}}

**`console.trace()`** メソッドは、[ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)にスタックトレースを出力します。

{{AvailableInWorkers}}

詳細や使用例については、{{domxref("console")}} のドキュメントの[スタックトレース](/ja/docs/Web/API/console#スタックトレース)をご覧ください。

## 構文

```js
trace();
trace(object1, /* …, */ objectN);
```

### 引数

- `objects` {{optional_inline}}
  - : スタックトレースと共にコンソールに出力する 0 個以上のオブジェクトです。これらは {{domxref("console/log_static", "console.log()")}} メソッドに渡したのと同じ方法で構成され書式化されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

コンソールには次のようなトレースが表示されます。

```
bar
foo
<anonymous>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
