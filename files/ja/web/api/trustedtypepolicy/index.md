---
title: TrustedTypePolicy
slug: Web/API/TrustedTypePolicy
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`TrustedTypePolicy`** は{{domxref("Trusted Types API", "信頼型 API", "", "nocode")}} のインターフェイスで、`TrustedType` オブジェクトを作成する一連の関数を定義します。

`TrustedTypePolicy` オブジェクトは、入力データに対するセキュリティルールを適用するためのポリシーを定義するために、{{domxref("TrustedTypePolicyFactory.createPolicy","TrustedTypePolicyFactory.createPolicy()")}} によって作成されます。したがって、`TrustedTypePolicy` にはコンストラクターがありません。

## インスタンスプロパティ

- {{domxref("TrustedTypePolicy.name")}} {{ReadOnlyInline}}
  - : ポリシーの名前の入った文字列です。

## インスタンスメソッド

- {{domxref("TrustedTypePolicy.createHTML","TrustedTypePolicy.createHTML()")}}
  - : {{domxref("TrustedHTML")}} を作成します。
- {{domxref("TrustedTypePolicy.createScript","TrustedTypePolicy.createScript()")}}
  - : {{domxref("TrustedScript")}} を作成します。
- {{domxref("TrustedTypePolicy.createScriptURL","TrustedTypePolicy.createScriptURL()")}}
  - : {{domxref("TrustedScriptURL")}} を作成します。

## 例

以下の例では、 {{domxref("TrustedTypePolicyFactory.createPolicy()")}} を使用して {{domxref("TrustedHTML")}} オブジェクトを作成するポリシーを作成します。その後、 {{domxref("TrustedTypePolicy.createHTML()")}} を使用して、文書に挿入する無害化された HTML 文字列を作成できます。

その後、この無害化された値を {{domxref("Element.innerHTML")}} で使用することで、新たな HTML 要素が挿入されることを確実に防止できます。

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
