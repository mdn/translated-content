---
title: "Element: securitypolicyviolation イベント"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Reporting API")}}

**`securitypolicyviolation`** イベントは、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)に違反したときに発生します。

このイベントは CSP ポリシーに違反したときに要素で発生します。

このイベントは {{domxref("Window")}} オブジェクトまで[バブリング](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling)し、[合成](/ja/docs/Web/API/Event/composed)されます。

> [!NOTE]
> 通常、このイベントのハンドラーは最上位のオブジェクト（{{domxref("Window")}} や {{domxref("Document")}} など）に追加してください。
> 技術的には HTML 要素も `securitypolicyviolation` イベントの対象になれますが、実際には要素では発生しません。たとえば、読み込みをブロックされた `<img>` のソースの場合、イベントは `<img>` 要素からバブリングするのではなく、`document` を対象として直接発生します。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入します。

```js-nolint
onsecuritypolicyviolation = (event) => { }
```

## イベント型

{{domxref("SecurityPolicyViolationEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## 例

### Window での securitypolicyviolation の監視

下記コードは `onsecuritypolicyviolation` グローバルイベントハンドラープロパティ（`onsecuritypolicyviolation` を使用して追加済みの他のイベントリスナーがある場合、それらは置き換えられます）または `addEventListener()` を使用して、イベントハンドラー関数を最上位の `Window` に追加する方法を示しています（`Document` でも全く同じ手法を使用することができます）。

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

- {{domxref("Document")}} インターフェイスの {{domxref("Document/securitypolicyviolation_event", "securitypolicyviolation")}} イベント
- {{domxref("WorkerGlobalScope")}} インターフェイスの {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}} イベント
- [HTTP > コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)
