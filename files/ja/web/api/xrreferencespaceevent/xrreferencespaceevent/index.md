---
title: "XRReferenceSpaceEvent: XRReferenceSpaceEvent() コンストラクター"
short-title: XRReferenceSpaceEvent()
slug: Web/API/XRReferenceSpaceEvent/XRReferenceSpaceEvent
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}

**`XRReferenceSpaceEvent()`** コンストラクターは、新しい {{domxref("XRReferenceSpaceEvent")}} オブジェクトを生成するために使用します。 これは、WebXR 参照空間オブジェクト {{domxref("XRReferenceSpace")}} の状態に関するイベントを表します。

## 構文

```js-nolint
new XRReferenceSpaceEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前の入った文字列です。
    大文字小文字を区別し、ブラウザーは常に `reset` を設定します。
- `options`
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持ちます。
    - `referenceSpace`
      - : イベントの発生元の {{domxref("XRReferenceSpace")}} です。
    - `transform`
      - : 古い座標系（このイベントによって示される変更の前のもの）を新しい座標系にマップする {{domxref("XRRigidTransform")}} です。

### 返値

入力引数で定義されたとおりに初期化された、新しい `XRReferenceSpaceEvent` オブジェクト。

## 例

この単純なスニペットでは、コンストラクターを呼び出して {{domxref("XRReferenceSpace.reset_event", "reset")}} 型の新しい参照空間イベントを生成します。

```js
let refSpaceEvent = new XRReferenceSpaceEvent("reset", {
  referenceSpace: myRefSpace,
  transform: myTransform,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
