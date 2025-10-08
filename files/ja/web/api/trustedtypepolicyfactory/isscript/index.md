---
title: "TrustedTypePolicyFactory: isScript() メソッド"
short-title: isScript()
slug: Web/API/TrustedTypePolicyFactory/isScript
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`isScript()`** は {{domxref("TrustedTypePolicyFactory")}} インターフェイスのメソッドで、渡されたものが有効な {{domxref("TrustedScript")}} オブジェクトであった場合は true を返します。

> [!NOTE]
> 関数 `isScript()`、{{domxref("TrustedTypePolicyFactory.isHTML","isHTML()")}}、{{domxref("TrustedTypePolicyFactory.isScriptURL","isScriptURL()")}} の目的は、オブジェクトが設定済みポリシーによって作成された有効な信頼型オブジェクトであるかどうかを確認することです。

## 構文

```js-nolint
isScript(value)
```

### 引数

- `value`
  - : {{domxref("TrustedScript")}} オブジェクトです。

### 返値

論理値 ({{jsxref("boolean")}}) で、オブジェクトが有効な {{domxref("TrustedScript")}} オブジェクトであれば true です。

## 例

以下の例では、定数 `url` はポリシーによって作成されたため、`isScriptURL()` は true を返します。2 つ目の例はオブジェクトを偽装しようとした試みであり、3 つ目は文字列です。これらはいずれも `isScriptURL()` に渡すと false を返します。

```js
const myScript = policy.createScript("eval('2 + 2')");
console.log(trustedTypes.isScript(myScript)); // true;

const fake = Object.create(TrustedScript.prototype);
console.log(trustedTypes.isScript(fake)); // false

console.log(trustedTypes.isScript("eval('2 + 2')")); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
