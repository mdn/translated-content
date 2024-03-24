---
title: WebUSB API
slug: Web/API/WebUSB_API
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}{{SeeCompatTable}}

**WebUSB API** は、USB をより安全かつ簡単に使えるように、標準でない Universal Serial Bus (USB) 対応のデバイスサービスをウェブから扱う方法を提供します。

## 概念と使用法

USB は、有線の周辺機器のデファクトスタンダードです。コンピューターに接続する USBデバイスは、通常キーボード、マウス、ビデオデバイスなどのいくつかのデバイスクラスに分類されます。これらのデバイスは、オペレーティングシステムのクラスドライバーによってサポートされます。これらのデバイスの多くは、ウェブからも {{domxref("WebHID API")}} を用いてアクセスできます。

これらの標準化されたデバイスに加え、どのクラスにも当てはまらないデバイスも数多く存在します。これらにはカスタムドライバーが必要で、これらを生かすにはネイティブコードが必要なためウェブからはアクセスできません。これらのデバイスのインストールでは、多くの場合製造元のウェブサイトでドライバーを探すことが必要であり、別のコンピューターで同じデバイスを使いたければこの作業を繰り返すことになります。

WebUSB は、これらの標準化されていない USB デバイスサービスをウェブから扱う方法を提供します。すなわち、ハードウェアの製造元が独自の API を提供することなくデバイスにウェブからアクセスする方法を提供できるようになります。

新しい WebUSB 対応のデバイスを接続すると、ブラウザーは通知を表示し、製造元のウェブサイトへのリンクを提供します。そのサイトを開くと、ブラウザーはデバイスに接続する許可を求め、デバイスを使用する準備が整います。ドライバーをダウンロードしてインストールする必要はありません。

## インターフェイス

- {{domxref("USB")}}
  - : ウェブページが USB デバイスを検出し、接続するためのプロパティとメソッドを提供します。
- {{domxref("USBConnectionEvent")}}
  - : ユーザーエージェントが新しい USB デバイスのホストへの接続や切断を検出した時、{{domxref("USB.connect_event", "USB.onconnect")}} や {{domxref("USB.disconnect_event", "USB.ondisconnect")}} に渡されるイベント型です。
- {{domxref("USBDevice")}}
  - : ペアリングした USB デバイスのメタデータと、制御用のメソッドを提供します。
- {{domxref("USBInTransferResult")}}
  - : USB デバイスから USB ホストへのデータ転送要求の結果を表します。
- {{domxref("USBOutTransferResult")}}
  - : USB ホストから USB デバイスへのデータ転送要求の結果を表します。
- {{domxref("USBIsochronousInTransferPacket")}}
  - : アイソクロナス転送用のエンドポイントにおける USB デバイスから USB ホストへのデータ転送要求による個々のパケットの状態を表します。
- {{domxref("USBIsochronousInTransferResult")}}
  - : USB デバイスから USB ホストへのデータ転送要求の結果を表します｡
- {{domxref("USBIsochronousOutTransferPacket")}}
  - : アイソクロナス転送用のエンドポイントにおける USB ホストから USB デバイスへのデータ転送要求による個々のパケットの状態を表します｡
- {{domxref("USBIsochronousOutTransferResult")}}
  - : USB ホストから USB デバイスへのデータ転送要求の結果を表します｡
- {{domxref("USBConfiguration")}}
  - : USB デバイスの特定のコンフィグレーションに関する情報と、それがサポートするインターフェイスを提供します。
- {{domxref("USBInterface")}}
  - : USB デバイスが提供するインターフェイスに関する情報を提供します。
- {{domxref("USBAlternateInterface")}}
  - : USB デバイスが提供するインターフェイスの特定のコンフィグレーションに関する情報を提供します。
- {{domxref("USBEndPoint")}}
  - : USB デバイスが提供するエンドポイントに関する情報を提供します。

## 例

### 接続されたデバイスにアクセスする

この例では、接続された Arduino デバイス (ベンダー ID `0x2341`) に {{domxref("USB.requestDevice()")}} を用いてアクセスする方法を示します。

```js
navigator.usb
  .requestDevice({ filters: [{ vendorId: 0x2341 }] })
  .then((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  })
  .catch((error) => {
    console.error(error);
  });
```

### 接続された全てのデバイスを検出する

{{domxref("USB.getDevices()")}} を用いることで、接続された全てのデバイスを検出できます。この例では、接続された Arduino デバイスの製品名と製造元名をコンソールに出力します。

```js
navigator.usb.getDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  });
});
```

## 仕様書

{{Specifications}}

## 関連情報

- [Access USB Devices on the Web](https://web.dev/usb/)
