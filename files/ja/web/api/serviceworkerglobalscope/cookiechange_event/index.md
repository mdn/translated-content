---
title: "ServiceWorkerGlobalScope: cookiechange イベント"
short-title: cookiechange
slug: Web/API/ServiceWorkerGlobalScope/cookiechange_event
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{APIRef("Cookie Store API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`cookiechange`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、サービスワーカーのクッキー変更購読リストで一致するクッキー変更が発生したときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("cookiechange", (event) => {});

oncookiechange = (event) => {};
```

## イベント型

{{domxref("ExtendableCookieChangeEvent")}} です。{{domxref("ExtendableEvent")}} から継承しています。

{{InheritanceDiagram("ExtendableCookieChangeEvent")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
