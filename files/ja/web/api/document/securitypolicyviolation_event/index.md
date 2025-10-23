---
title: "Document: securitypolicyviolation イベント"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: 7c77ca51ce4433ad19af82016604987f42693784
---

{{APIRef}}

**`securitypolicyviolation`** イベントは、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)に違反があった場合に発行されます。

このイベントはポリシー違反があるとグローバルスコープで発行され、{{domxref("Window")}} オブジェクトにバブリングされます。このイベントは、文書ツリー内の{{domxref("Node", "ノード", "", "nocode")}}からもバブリングされます。

ハンドラーは `onsecuritypolicyviolation` イベントハンドラープロパティを使用するか、{{domxref("EventTarget.addEventListener()")}} を使用して割り当てることができます。

> [!NOTE]
> このイベントのハンドラーは最上位のオブジェクト（{{domxref("Window")}} や {{domxref("Document")}} など）に追加することをお勧めします。HTML 要素にプロパティが存在する間は、要素が読み込まれるまでプロパティにハンドラーを割り当てることはできず、その時刻にはすでにこのイベントは発生しています。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## イベント型

{{domxref("SecurityPolicyViolationEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## 例

下記のコードは、`onsecuritypolicyviolation` イベントハンドラープロパティまたは `Document` の `addEventListener()` を使用してイベントハンドラー関数を追加する方法を示しています。

```js
document.onsecuritypolicyviolation = (e) => {
  // ここで SecurityPolicyViolationEvent である e を処理
};

document.addEventListener("securitypolicyviolation", (e) => {
  // ここで SecurityPolicyViolationEvent である e を処理
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}} イベント（{{domxref("Element")}} インターフェイス）
- {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}} イベント（{{domxref("WorkerGlobalScope")}} インターフェイス）
- [HTTP > コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)
