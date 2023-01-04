---
title: USB
slug: Web/API/USB
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の **`USB`** インターフェイスは、ウェブページから USB デバイスを検出し、接続するための属性とメソッドを提供します。

`USB` オブジェクトにアクセスするためには、{{domxref("navigator.usb")}} を使用します。

USB インターフェイスは、{{domxref("EventTarget")}} を継承します。

{{InheritanceDiagram}}

## インスタンスプロパティ

なし

## インスタンスメソッド

- {{domxref("USB.getDevices()")}} {{Experimental_Inline}}
  - : 接続されたペア設定済みのデバイスを表す {{domxref("USBDevice")}} の配列で解決する {{jsxref("Promise")}} を返します。
- {{domxref("USB.requestDevice()")}} {{Experimental_Inline}}
  - : 指定のデバイスが見つかった場合は {{domxref("USBDevice")}} のインスタンスで解決する {{jsxref("Promise")}} を返します。このメソッドを呼ぶと、ユーザーエージェントのペア設定手続きを開始します。

## イベント

- {{domxref("USB.connect_event", "connect")}} {{Experimental_Inline}}
  - : ペア設定済みのデバイスが接続された時、発火します。
- {{domxref("USB.disconnect_event", "disconnect")}} {{Experimental_Inline}}
  - : ペア設定済みのデバイスが切断された時、発火します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
