---
title: PointerEvent.PointerEvent()
slug: Web/API/PointerEvent/PointerEvent
tags:
  - API
  - Constructor
  - PointerEvent
  - Reference
translation_of: Web/API/PointerEvent/PointerEvent
---
{{APIRef("Pointer Events")}}

**`PointerEvent()`** コンストラクタは、新しい信頼できない合成 {{domxref("PointerEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```
 event = new PointerEvent(type, PointerEventInit);
```

### 引数

<dl><dt><em>type</em></dt><dd>イベントの名前を表す {{domxref("DOMString")}} です（<a href="/Web/API/PointerEvent#Pointer_event_types"><code>PointerEvent</code> のイベントタイプ</a>を参照）。</dd><dt><em>PointerEventInit</em>{{optional_inline}}</dt></dl>

<dl><dd>次のフィールドを持つ <code>PointerEventInit</code> ディクショナリです。<ul><li><code>pointerId</code> — インスタンスの {{domxref("PointerEvent.pointerId")}} の値を設定する <code>long</code> 型のオプションで、デフォルトは <code>0</code> です。</li><li><code>width</code> — インスタンスの {{domxref("PointerEvent.width")}} の値を設定する <code>double</code> 型のオプションで、デフォルトは <code>1</code> です。</li><li><code>height</code> — インスタンスの {{domxref("PointerEvent.height")}} の値を設定する <code>double</code> 型のオプションで、デフォルトは <code>1</code> です。</li><li><code>pressure</code> — インスタンスの {{domxref("PointerEvent.pressure")}} の値を設定する <code>float</code> 型のオプションで、デフォルトは <code>0</code> です。</li><li><code>tangentialPressure</code> — インスタンスの {{domxref("PointerEvent.tangentialPressure")}} の値を設定する <code>float</code> 型のオプションで、デフォルトは <code>0</code> です。</li><li><code>tiltX</code> — インスタンスの {{domxref("PointerEvent.tiltX")}} の値を設定する <code>long</code> 型のオプションで、デフォルトは <code>0</code> です。</li><li><code>tiltY</code> — インスタンスの {{domxref("PointerEvent.tiltY")}} の値を設定する <code>long</code> 型のオプションで、デフォルトは <code>0</code> です。</li><li><code>twist</code> — インスタンスの {{domxref("PointerEvent.twist")}} の値を設定する <code>long</code> 型のオプションで、デフォルトは <code>0</code> です。</li><li><code>pointerType</code> — インスタンスの {{domxref("PointerEvent.pointerType")}} の値を設定する {{domxref("DOMString")}} 型のオプションで、デフォルトは <code>""</code> です。</li><li><code>isPrimary</code> — インスタンスの {{domxref("PointerEvent.isPrimary")}} の値を設定する {{jsxref("Boolean")}} 型のオプションで、デフォルトは <code>false</code> です。</li></ul><div class="note"><p><strong>注</strong>: <code>PointerEventInit</code> ディクショナリは、{{domxref("MouseEvent.MouseEvent","MouseEvent")}}、{{domxref("UIEvent.UIEvent", "UIEventInit")}}、および {{domxref("Event.Event", "EventInit")}} ディクショナリからのフィールドも受け入れます。</p></div></dd></dl>

## 例

```js
var moveEvent = new PointerEvent("pointermove");

var downEvent = new PointerEvent("pointerdown",
   {pointerId: 1,
    bubbles: true,
    cancelable: true,
    pointerType: "touch",
    width: 100,
    height: 100,
    isPrimary: true
   });
```

## ブラウザーの互換性

{{Compat("api.PointerEvent.PointerEvent")}}
