---
title: "Element: securitypolicyviolation イベント"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`securitypolicyviolation`** イベントは、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)に違反したときに発生します。

イベントはポリシーに違反した要素で発行され、バブリングします。
通常は {{domxref("Window")}} または {{domxref("Document")}} オブジェクトのイベントハンドラーによって処理されます。

ハンドラーは `onsecuritypolicyviolation` プロパティを使用するか、{{domxref("EventTarget.addEventListener()")}} を使用して割り当てることができます。

> **メモ:** このイベントのハンドラーは最上位のオブジェクト（{{domxref("Window")}} や {{domxref("Document")}} など）に追加する必要があります。
> HTML 要素にプロパティが存在する間は、要素が読み込まれるまでプロパティにイベントハンドラーを割り当てることはできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## イベント型

{{domxref("SecurityPolicyViolationEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## 例

下記コードは `onsecuritypolicyviolation` グローバルイベントハンドラープロパティ、または `addEventListener()` を使用して、イベントハンドラー関数を最上位の `Window` に追加する方法を示しています（`Document` でも全く同じ手法を使用することができます）。

```js
window.onsecuritypolicyviolation = (e) => {
  // Handle SecurityPolicyViolationEvent e here
};

window.addEventListener("securitypolicyviolation", (e) => {
  // Handle SecurityPolicyViolationEvent e here
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP > コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)
