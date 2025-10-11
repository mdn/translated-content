---
title: "TrustedTypePolicyFactory: isScriptURL() メソッド"
short-title: isScriptURL()
slug: Web/API/TrustedTypePolicyFactory/isScriptURL
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`isScriptURL()`** は {{domxref("TrustedTypePolicyFactory")}} インターフェイスのメソッドで、渡されたものが有効な {{domxref("TrustedScriptURL")}} オブジェクトであった場合は true を返します。

> [!NOTE]
> 関数 `isScriptURL()`、{{domxref("TrustedTypePolicyFactory.isHTML","isHTML()")}}、{{domxref("TrustedTypePolicyFactory.isScript","isScript()")}} の目的は、オブジェクトが設定済みポリシーによって作成された有効な信頼型オブジェクトであるかどうかを確認することです。

## 構文

```js-nolint
isScriptURL(value)
```

### 引数

- `value`
  - : {{domxref("TrustedScriptURL")}} オブジェクトです。

### 返値

論理値 ({{jsxref("boolean")}}) で、オブジェクトが有効な {{domxref("TrustedScriptURL")}} オブジェクトであれば true です。

## 例

以下の例では、定数 `url` はポリシーによって作成されたため、`isScriptURL()` は true を返します。2 つ目の例はオブジェクトを偽装しようとした試みであり、3 つ目は文字列です。これらはいずれも `isScriptURL()` に渡すと false を返します。

```js
const url = policy.createScriptURL("https://example.com/myscript.js");
console.log(trustedTypes.isScriptURL(url)); // true;

const fake = Object.create(TrustedScriptURL.prototype);
console.log(trustedTypes.isScriptURL(fake)); // false

console.log(trustedTypes.isScriptURL("https://example.com/myscript.js")); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
