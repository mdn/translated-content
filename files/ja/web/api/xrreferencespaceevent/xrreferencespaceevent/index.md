---
title: XRReferenceSpaceEvent()
slug: Web/API/XRReferenceSpaceEvent/XRReferenceSpaceEvent
tags:
  - API
  - AR
  - Constructor
  - Events
  - Mixed
  - Reality
  - Reference
  - Reference Space
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRReferenceSpaceEvent
  - augmented
  - events
browser-compat: api.XRReferenceSpaceEvent.XRReferenceSpaceEvent
translation_of: Web/API/XRReferenceSpaceEvent/XRReferenceSpaceEvent
---
{{APIRef("WebXR Device API")}}

**`XRReferenceSpaceEvent()`** コンストラクターは、新しい {{domxref("XRReferenceSpaceEvent")}} オブジェクトを生成するために使用します。 これは、WebXR 参照空間オブジェクト {{domxref("XRReferenceSpace")}} の状態に関するイベントを表します。

この型を使用して定義されているのは {{domxref("XRReferenceSpace.reset_event", "reset")}} イベントのみです。

## 構文

```js
let refSpaceEvent = new XRReferenceSpaceEvent(type, eventInitDict);
```

### 引数

- `type`
  - : 発生したイベントタイプを示す {{domxref("DOMString")}}。 現在、これは常に `reset` です。
- `eventInitDict`

  - : イベントを構成するためのオブジェクトです。プロパティは次のとおりです。

    - `referenceSpace`: イベントの発生元の {{domxref("XRReferenceSpace")}} です。
    - `transform`: 古い座標系（このイベントによって示される変更の前のもの）を新しい座標系にマップする {{domxref("XRRigidTransform")}} です。

### 返値

入力引数で定義されたとおりに初期化された、新しい `XRReferenceSpaceEvent` オブジェクト。

## 例

この単純なスニペットでは、コンストラクターを呼び出して {{domxref("XRReferenceSpace.reset_event", "reset")}} 型の新しい参照空間イベントを生成します。

```js
let refSpaceEvent = new XRReferenceSpaceEvent("reset", {
  referenceSpace: myRefSpace,
  transform: myTransform
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
