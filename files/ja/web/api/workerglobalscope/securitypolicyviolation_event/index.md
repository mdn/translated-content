---
title: "WorkerGlobalScope: securitypolicyviolation イベント"
short-title: securitypolicyviolation
slug: Web/API/WorkerGlobalScope/securitypolicyviolation_event
l10n:
  sourceCommit: 7c77ca51ce4433ad19af82016604987f42693784
---

{{APIRef}}

**`securitypolicyviolation`** イベントは、ウェブワーカーの中で[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)の違反が発生したときに発行されます。

ハンドラーは `onsecuritypolicyviolation` イベントハンドラープロパティを使用するか、{{domxref("EventTarget.addEventListener()")}} を使用して割り当てることができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## イベント型

{{domxref("SecurityPolicyViolationEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## 例

下記のコードでは、`onsecuritypolicyviolation` イベントハンドラープロパティを使用してイベントハンドラー関数を追加するか、`addEventListener()` メソッドを呼び出す方法を示しています。

```js
self.onsecuritypolicyviolation = (e) => {
  // ここで SecurityPolicyViolationEvent e を処理
};

self.addEventListener("securitypolicyviolation", (e) => {
  // ここで SecurityPolicyViolationEvent e を処理
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document/securitypolicyviolation_event", "securitypolicyviolation")}} イベント（{{domxref("Document")}} インターフェイス）
- {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}} イベント（{{domxref("Element")}} インターフェイス）
- [HTTP > コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)
