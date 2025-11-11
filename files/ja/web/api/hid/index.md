---
title: HID
slug: Web/API/HID
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

**`HID`** インターフェイスは、 _HID デバイス_ への接続およびアタッチした HID デバイスのリストアップを行うメソッドと、HID デバイスの接続を扱うイベントハンドラーを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは、親の {{domxref("EventTarget")}} から継承したプロパティも持ちます。_

## インスタンスメソッド

_このインターフェイスは、親の {{domxref("EventTarget")}} から継承したメソッドも持ちます。_

- {{domxref("HID.getDevices","getDevices()")}} {{Experimental_Inline}}
  - : 接続中の {{domxref("HIDDevice")}} オブジェクトの配列で解決する {{jsxref("Promise")}} を返します。
- {{domxref("HID.requestDevice","requestDevice()")}} {{Experimental_Inline}}
  - : 接続中の {{domxref("HIDDevice")}} オブジェクトの配列で解決する {{jsxref("Promise")}} を返します。この関数を呼ぶことで、返されたデバイスのリストから選ばれた 1 個のデバイスにアクセスする許可を得るための、ユーザーエージェントの許可手続きを開始できます。

### イベント

- {{domxref("HID.connect_event", "connect")}} {{Experimental_Inline}}
  - : HID デバイスが接続された時に発火します。
- {{domxref("HID.disconnect_event", "disconnect")}} {{Experimental_Inline}}
  - : HID デバイスが切断された時に発火します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebHID API")}}
