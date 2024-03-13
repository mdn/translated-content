---
title: XRReferenceSpaceEvent
slug: Web/API/XRReferenceSpaceEvent
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}

[WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) の **`XRReferenceSpaceEvent`** インターフェイスは、{{domxref("XRReferenceSpace")}} に送信されるイベントを表します。今のところ、この型を使用するイベントは {{domxref("XRReferenceSpace.reset_event", "reset")}} イベントのみです。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("XRReferenceSpaceEvent.XRReferenceSpaceEvent", "XRReferenceSpaceEvent()")}}
  - : 指定された種類と構成による新しい `XRReferenceSpaceEvent` を返します。

## プロパティ

_親インターフェイスである {{domxref("Event")}} で使用可能なプロパティを継承することに加えて、`XRReferenceSpaceEvent` オブジェクトには次のプロパティが含まれます。_

- {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}} {{ReadOnlyInline}}
  - : イベントを生成した参照空間を示す {{domxref("XRReferenceSpace")}}。
- {{domxref("XRReferenceSpaceEvent.transform", "transform")}} {{ReadOnlyInline}}
  - : イベント前の座標系を基準にして定義された、イベント後の指定された `referenceSpace` のネイティブの原点の位置と向きを示す {{domxref("XRRigidTransform")}} オブジェクト。

## メソッド

_`XRReferenceSpaceEvent` はメソッドを定義しませんが、親インターフェイスである {{domxref("Event")}} のメソッドを継承しています。_

## イベント型

- {{domxref("XRReferenceSpace.reset_event", "reset")}}
  - : `reset` イベントは、不連続、再較正、または機器のリセットによってネイティブの原点が変更されたときに参照空間に送信されます。 これは、アプリが保存されている変換、位置/向き情報などを更新したり、必要に応じて再計算できるように参照の空間の原点に基づいてキャッシュされた値をダンプする機会です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
