---
title: "TrustedScriptURL: toString() メソッド"
short-title: toString()
slug: Web/API/TrustedScriptURL/toString
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`toString()`** は {{domxref("TrustedScriptURL")}} インターフェイスのメソッドで、[注入先](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)へ安全に挿入できる文字列を返します。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

文字列で、無害化された URL です。

## 例

定数 `sanitized` は、信頼型ポリシーによって作成されたオブジェクトです。`toString()` メソッドは、サードパーティー製スクリプトを読み込むために安全に使用できる文字列を返します。

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized.toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
