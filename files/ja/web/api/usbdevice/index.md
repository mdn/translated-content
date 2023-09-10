---
title: USBDevice
slug: Web/API/USBDevice
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{SeeCompatTable}}{{APIRef("WebUSB API")}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の **`USBDevice`** インターフェイスは、ペアリングした USB デバイスのメタデータへのアクセスと、デバイスの制御用のメソッドを提供します。

## インスタンスプロパティ

- {{domxref("USBDevice.configuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ペアリングした USB デバイスの現在選択されているインターフェイスを表す {{domxref("USBConfiguration")}} オブジェクトです。
- {{domxref("USBDevice.configurations")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ペアリングした USB デバイスの制御用のデバイス固有のインターフェイスの {{jsxref("array")}} です。
- {{domxref("USBDevice.deviceClass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスとともに動く USB ドライバーのロード用に USB デバイスを特定する 3 個のプロパティのうちの 1 個です。他の 2 個のプロパティは `USBDevice.deviceSubclass` と `USBDevice.deviceProtocol` です。
- {{domxref("USBDevice.deviceProtocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスとともに動く USB ドライバーのロード用に USB デバイスを特定する 3 個のプロパティのうちの 1 個です。他の 2 個のプロパティは `USBDevice.deviceClass` と `USBDevice.deviceSubclass` です。
- {{domxref("USBDevice.deviceSubclass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスとともに動く USB ドライバーのロード用に USB デバイスを特定する 3 個のプロパティのうちの 1 個です。他の 2 個のプロパティは `USBDevice.deviceClass` と `USBDevice.deviceProtocol` です。
- {{domxref("USBDevice.deviceVersionMajor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : セマンティックバージョニングスキームによるデバイスのメジャーバージョン番号です。
- {{domxref("USBDevice.deviceVersionMinor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : セマンティックバージョニングスキームによるデバイスのマイナーバージョン番号です。
- {{domxref("USBDevice.deviceVersionSubminor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : セマンティックバージョニングスキームによるデバイスのパッチバージョン番号です。
- {{domxref("USBDevice.manufacturerName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この USB デバイスを製造した組織の名前です。
- {{domxref("USBDevice.opened")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ペアリングした USB デバイスとのセッションが開始しているかを表します。
- {{domxref("USBDevice.productId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 製造元が定義する、USB デバイスを識別するコードです。
- {{domxref("USBDevice.productName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 製造元が定義する、USB デバイスを識別する名前です。
- {{domxref("USBDevice.serialNumber")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 製造元が定義する、特定の USB デバイスのシリアル番号です。
- {{domxref("USBDevice.usbVersionMajor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスが対応している USB のプロトコルバージョンを表す 3 個のプロパティのうちの 1個です。他の 2 個のプロパティは `USBDevice.usbVersionMinor` と `USBDevice.usbVersionSubminor` です。
- {{domxref("USBDevice.usbVersionMinor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスが対応している USB のプロトコルバージョンを表す 3 個のプロパティのうちの 1個です。他の 2 個のプロパティは `USBDevice.usbVersionMajor` と `USBDevice.usbVersionSubminor` です。
- {{domxref("USBDevice.usbVersionSubminor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスが対応している USB のプロトコルバージョンを表す 3 個のプロパティのうちの 1個です。他の 2 個のプロパティは `USBDevice.usbVersionMajor` と `USBDevice.usbVersionMinor` です。
- {{domxref("USBDevice.vendorId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : usb.org で割り当てられた公式なベンダー ID です。

## インスタンスメソッド

- {{domxref("USBDevice.claimInterface()")}} {{Experimental_Inline}}
  - : 要求したインターフェイスの排他アクセスを獲得したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.clearHalt()")}} {{Experimental_Inline}}
  - : 停止状態のクリアが完了したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.controlTransferIn()")}} {{Experimental_Inline}}
  - : コマンドまたは状態の操作の USB デバイスへの転送が完了したら {{domxref("USBInTransferResult")}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.controlTransferOut()")}} {{Experimental_Inline}}
  - : コマンドまたは状態の操作の USB デバイスからの転送が完了したら {{domxref("USBOutTransferResult")}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.close()")}} {{Experimental_Inline}}
  - : すべての開いているインターフェイスが解放され、デバイスのセッションが終了したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.forget()")}} {{Experimental_Inline}}
  - : すべての開いているインターフェイスが解放され、デバイスのセッションが終了し、許可をリセットしたら解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.isochronousTransferIn()")}} {{Experimental_Inline}}
  - : 時間が重要な情報の USB デバイスへの転送が完了したら {{domxref("USBIsochronousInTransferResult")}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.isochronousTransferOut()")}} {{Experimental_Inline}}
  - : 時間が重要な情報の USB デバイスからの転送が完了したら {{domxref("USBIsochronousOutTransferResult")}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.open()")}} {{Experimental_Inline}}
  - : デバイスのセッションが開始したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.releaseInterface()")}} {{Experimental_Inline}}
  - : 要求済みのインターフェイスが排他アクセスから解放されたら解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.reset()")}} {{Experimental_Inline}}
  - : デバイスがリセットされ、アプリケーションによる操作がすべてキャンセルされ、それらのプロミスが拒否されたら解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.selectAlternateInterface()")}} {{Experimental_Inline}}
  - : 指定のオルタナティブエンドポイントが選択されたら解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.selectConfiguration()")}} {{Experimental_Inline}}
  - : 指定のコンフィギュレーションが選択されたら解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.transferIn()")}} {{Experimental_Inline}}
  - : USB デバイスからバルクまたはインタラプトデータを受信したら {{domxref("USBInTransferResult")}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("USBDevice.transferOut()")}} {{Experimental_Inline}}
  - : USB デバイスにバルクまたはインタラプトデータを送信したら {{domxref("USBOutTransferResult")}} で解決する {{jsxref("Promise")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
