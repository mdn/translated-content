---
title: Ink
slug: Web/API/Ink
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

**`Ink`** は[インク API](/ja/docs/Web/API/Ink_API) のインターフェイスで、アプリケーションに {{domxref("DelegatedInkTrailPresenter")}} オブジェクトへのアクセスを提供し、インクの軌跡を描画するために使用します。

{{InheritanceDiagram}}

## インスタンスメソッド

- {{domxref("Ink.requestPresenter", "requestPresenter()")}} {{Experimental_Inline}}
  - : {{jsxref("Promise")}} を返します。これはストロークの描画を扱う {{domxref("DelegatedInkTrailPresenter")}} オブジェクトで履行されます。

## 例

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  // …
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
