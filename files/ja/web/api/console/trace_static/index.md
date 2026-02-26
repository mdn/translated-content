---
title: "console: trace() 静的メソッド"
short-title: trace()
slug: Web/API/console/trace_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.trace()`** 静的メソッドは、コンソールにスタックトレースを出力します。

> [!NOTE]
> 一部のブラウザーでは、`console.trace()` は現在の `console.trace()` 呼び出しに至る呼び出しのシーケンスや非同期イベント（コールスタック上にないもの）も出力する場合があります。これは現在のイベント評価ループの発生源を特定するのに役立ちます。

詳細や使用例については、[スタックトレース](/ja/docs/Web/API/console#スタックトレース)（{{domxref("console")}} のドキュメント）を参照してください。

## 構文

```js-nolint
console.trace()
console.trace(object1, /* …, */ objectN)
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

```plain
bar
foo
<anonymous>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Microsoft Edge's documentation for `console.trace()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#trace)
- [Node.js documentation for `console.trace()`](https://nodejs.org/docs/latest/api/console.html#consoletracemessage-args)
- [Google Chrome's documentation for `console.trace()`](https://developer.chrome.com/docs/devtools/console/api/#trace)
