---
title: console.trace()
slug: Web/API/console/trace
tags:
  - API
  - Chrome
  - DOM
  - デバッグ
  - Firefox
  - メソッド
  - String
  - ウェブ開発
  - console.trace()
  - trace
  - ウェブコンソール
browser-compat: api.console.trace
translation_of: Web/API/Console/trace
---
{{APIRef("Console API")}}

**`console.trace()`** メソッドは、[ウェブコンソール](/ja/docs/Tools/Web_Console)にスタックトレースを出力します。

{{AvailableInWorkers}}

詳細や使用例については、{{domxref("console")}} のドキュメントの[スタックトレース](/ja/docs/Web/API/console#スタックトレース)をご覧ください。

## 構文

```js
console.trace( [...any, ...data ]);
```

### 引数

- `...any, ...data` {{optional_inline}}
  - : スタックトレースと共にコンソールに出力する 0 個以上のオブジェクトです。これらは {{domxref("console.log()")}} メソッドに渡したのと同じ方法で構成され書式化されます。

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
