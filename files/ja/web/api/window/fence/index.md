---
title: "Window: fence プロパティ"
short-title: fence
slug: Web/API/Window/fence
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

`fence` は、{{domxref("Window")}} インターフェイスの読み取り専用のプロパティであり、現在の文書コンテキストに対応する {{domxref("Fence")}} オブジェクトインスタンスを返します。

`Fence` オブジェクトは、{{htmlelement("fencedframe")}}（{{domxref("FencedFrameConfig")}} 経由で読み込まれたもの）または{{htmlelement("iframe")}}（不透明な URN 経由で読み込まれたもの）内に埋め込まれた文書でのみ利用できます。

> [!NOTE]
> `FencedFrameConfig` と不透明な URN に関する説明については、 [`<fencedframe>` の仕組み](/ja/docs/Web/API/Fenced_frame_API#fencedframe_はどのように動作するのか)を参照してください。

## 値

{{domxref("Fence")}} オブジェクトのインスタンス、またはこの文書コンテキストが {{domxref("Fence")}} オブジェクトにアクセスできない場合は `null` です。

## 例

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) on privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) on privacysandbox.google.com
