---
title: "TrustedTypePolicyFactory: isHTML() メソッド"
short-title: isHTML()
slug: Web/API/TrustedTypePolicyFactory/isHTML
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`isHTML()`** は {{domxref("TrustedTypePolicyFactory")}} インターフェイスのメソッドで、渡されたものが有効な {{domxref("TrustedHTML")}} オブジェクトであった場合は true を返します。

> [!NOTE]
> 関数 `isHTML()`、{{domxref("TrustedTypePolicyFactory.isScript","isScript()")}}、{{domxref("TrustedTypePolicyFactory.isScriptURL","isScriptURL()")}} の目的は、オブジェクトが設定済みポリシーによって作成された有効な信頼型オブジェクトであるかどうかを確認することです。

## 構文

```js-nolint
isHTML(value)
```

### 引数

- `value`
  - : {{domxref("TrustedHTML")}} オブジェクトです。

### 返値

論理値 ({{jsxref("boolean")}}) で、オブジェクトが有効な {{domxref("TrustedHTML")}} オブジェクトであれば true です。

## 例

以下の例では、定数 `html` はポリシーによって作成されたため、`isHTML()` は true を返します。2 つ目の例はオブジェクトを偽装しようとした試みであり、3 つ目は文字列です。これらはいずれも `isHTML()` に渡すと false を返します。

```js
const html = policy.createHTML("<div>");
console.log(trustedTypes.isHTML(html)); // true;

const fake = Object.create(TrustedHTML.prototype);
console.log(trustedTypes.isHTML(fake)); // false

console.log(trustedTypes.isHTML("<div>plain string</div>")); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
