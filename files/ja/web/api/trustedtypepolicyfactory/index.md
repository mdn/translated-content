---
title: TrustedTypePolicyFactory
slug: Web/API/TrustedTypePolicyFactory
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`TrustedTypePolicyFactory`** は{{domxref("Trusted Types API", "信頼型 API", "", "nocode")}} のインターフェイスで、ポリシーを作成し、作成されたポリシーに対して信頼型オブジェクトの検証ができるようにします。

## インスタンスプロパティ

- {{domxref("TrustedTypePolicyFactory.emptyHTML")}} {{ReadOnlyInline}}
  - : 空文字列の入った {{domxref("TrustedHTML")}} オブジェクトを返します。
- {{domxref("TrustedTypePolicyFactory.emptyScript")}} {{ReadOnlyInline}}
  - : 空文字列の入った {{domxref("TrustedScript")}} オブジェクトを返します。
- {{domxref("TrustedTypePolicyFactory.defaultPolicy")}} {{ReadOnlyInline}}
  - : 既定の {{domxref("TrustedTypePolicy")}}、または空であれば null を返します。

## インスタンスメソッド

- {{domxref("TrustedTypePolicyFactory.createPolicy()")}}
  - : `policyOptions` として渡されたルールを実装した {{domxref("TrustedTypePolicy")}} を作成します。
- {{domxref("TrustedTypePolicyFactory.isHTML()")}}
  - : 値が渡された場合、それが有効な {{domxref("TrustedHTML")}} オブジェクトであるかどうかを検査します。
- {{domxref("TrustedTypePolicyFactory.isScript()")}}
  - : 値が渡された場合、それが有効な {{domxref("TrustedScript")}} オブジェクトであるかどうかを検査します。
- {{domxref("TrustedTypePolicyFactory.isScriptURL()")}}
  - : 値が渡された場合、それが有効な {{domxref("TrustedScriptURL")}} オブジェクトであるかどうかを検査します。
- {{domxref("TrustedTypePolicyFactory.getAttributeType()")}}
  - : ウェブ開発者が要素や属性に信頼型が要求されるかどうか、要求される場合はどの信頼型が必要かを確認できるようにします。
- {{domxref("TrustedTypePolicyFactory.getPropertyType()")}}
  - : ウェブ開発者がプロパティに信頼型が要求されるかどうか、要求される場合はどの信頼型が必要かを確認できるようにします。

## 例

以下のコードは、 `"myEscapePolicy"` という名前のポリシーを作成し、HTML を無害化する関数 `createHTML()` を定義します。

次に、ポリシーを使用して文字列を無害化し、 {{domxref("TrustedHTML")}} オブジェクトである `escaped` を作成します。このオブジェクトは、 {{domxref("TrustedTypePolicyFactory.isHTML","isHTML()")}} によって、自分のポリシーのいずれかによって作成されたことを確認できます。

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");

console.log(trustedTypes.isHTML(escaped)); // true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
