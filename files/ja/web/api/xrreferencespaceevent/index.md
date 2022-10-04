---
title: XRReferenceSpaceEvent
slug: Web/API/XRReferenceSpaceEvent
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}

[WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) の **`XRReferenceSpaceEvent`** インターフェイスは、{{domxref("XRReferenceSpace")}} に送信されるイベントを表します。 現在、この型を使用するイベントは {{domxref("XRReferenceSpace.reset_event", "reset")}} イベントのみです。

## コンストラクター

- {{domxref("XRReferenceSpaceEvent.XRReferenceSpaceEvent", "XRReferenceSpaceEvent()")}}
  - : 指定されたタイプで、指定された {{domxref("XRReferenceSpaceEventInit")}} ディクショナリーの値を使用して構成された新しい `XRReferenceSpaceEvent` を返します。

## プロパティ

_親インターフェイスである {{domxref("Event")}} で使用可能なプロパティを継承することに加えて、`XRReferenceSpaceEvent` オブジェクトには次のプロパティが含まれます。_

- {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}} {{ReadOnlyInline}}
  - : イベントを生成した参照空間を示す {{domxref("XRReferenceSpace")}}。
- {{domxref("XRReferenceSpaceEvent.transform", "transform")}} {{ReadOnlyInline}}
  - : イベント前の座標系を基準にして定義された、イベント後の指定された `referenceSpace` のネイティブの原点の位置と向きを示す {{domxref("XRRigidTransform")}} オブジェクト。

## メソッド

_`XRReferenceSpaceEvent` はメソッドを定義しませんが、親インターフェイスである {{domxref("Event")}} のメソッドを継承します。_

## イベントタイプ

- {{domxref("XRReferenceSpace.reset_event", "reset")}}
  - : `reset` イベントは、不連続、再較正、またはデバイスのリセットによってネイティブの原点が変更されたときに参照空間に送信されます。 これは、アプリが保存されている変換、位置/向き情報などを更新したり、必要に応じて再計算できるように参照の空間の原点に基づいてキャッシュされた値をダンプする機会です。

## 仕様

| 仕様                                                                                         | 状態                     | コメント |
| -------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('WebXR','#xrreferencespaceevent','XRReferenceSpaceEvent')}} | {{Spec2('WebXR')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.XRReferenceSpaceEvent")}}
