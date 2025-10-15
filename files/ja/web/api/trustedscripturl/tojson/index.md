---
title: "TrustedScriptURL: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/TrustedScriptURL/toJSON
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`toJSON()`** は {{domxref("TrustedScriptURL")}} インターフェイスのメソッドで、格納されているデータの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

文字列で、格納されているデータの JSON 表現が入ります。

## 例

定数 `sanitized` は、信頼型ポリシーによって作成されたオブジェクトです。`toString()` メソッドは、サードパーティー製スクリプトを読み込むために安全に使用できる文字列を返します。

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized.toJSON());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
