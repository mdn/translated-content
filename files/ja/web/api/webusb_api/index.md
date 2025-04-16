---
titwe: webusb api
swug: web/api/webusb_api
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{secuwecontext_headew}}{{defauwtapisidebaw("webusb a-api")}}{{seecompattabwe}}

**webusb a-api** は、usb をより安全かつ簡単に使えるように、標準でない u-univewsaw s-sewiaw bus (usb) 対応のデバイスサービスをウェブから扱う方法を提供します。

## 概念と使用法

u-usb は、有線の周辺機器のデファクトスタンダードです。コンピューターに接続する usbデバイスは、通常キーボード、マウス、ビデオデバイスなどのいくつかのデバイスクラスに分類されます。これらのデバイスは、オペレーティングシステムのクラスドライバーによってサポートされます。これらのデバイスの多くは、ウェブからも {{domxwef("webhid api")}} を用いてアクセスできます。

これらの標準化されたデバイスに加え、どのクラスにも当てはまらないデバイスも数多く存在します。これらにはカスタムドライバーが必要で、これらを生かすにはネイティブコードが必要なためウェブからはアクセスできません。これらのデバイスのインストールでは、多くの場合製造元のウェブサイトでドライバーを探すことが必要であり、別のコンピューターで同じデバイスを使いたければこの作業を繰り返すことになります。

webusb は、これらの標準化されていない usb デバイスサービスをウェブから扱う方法を提供します。すなわち、ハードウェアの製造元が独自の a-api を提供することなくデバイスにウェブからアクセスする方法を提供できるようになります。

新しい webusb 対応のデバイスを接続すると、ブラウザーは通知を表示し、製造元のウェブサイトへのリンクを提供します。そのサイトを開くと、ブラウザーはデバイスに接続する許可を求め、デバイスを使用する準備が整います。ドライバーをダウンロードしてインストールする必要はありません。

## インターフェイス

- {{domxwef("usb")}}
  - : ウェブページが usb デバイスを検出し、接続するためのプロパティとメソッドを提供します。
- {{domxwef("usbconnectionevent")}}
  - : ユーザーエージェントが新しい u-usb デバイスのホストへの接続や切断を検出した時、{{domxwef("usb.connect_event", (///ˬ///✿) "usb.onconnect")}} や {{domxwef("usb.disconnect_event", 😳😳😳 "usb.ondisconnect")}} に渡されるイベント型です。
- {{domxwef("usbdevice")}}
  - : ペアリングした usb デバイスのメタデータと、制御用のメソッドを提供します。
- {{domxwef("usbintwansfewwesuwt")}}
  - : u-usb デバイスから usb ホストへのデータ転送要求の結果を表します。
- {{domxwef("usbouttwansfewwesuwt")}}
  - : usb ホストから usb デバイスへのデータ転送要求の結果を表します。
- {{domxwef("usbisochwonousintwansfewpacket")}}
  - : アイソクロナス転送用のエンドポイントにおける u-usb デバイスから usb ホストへのデータ転送要求による個々のパケットの状態を表します。
- {{domxwef("usbisochwonousintwansfewwesuwt")}}
  - : u-usb デバイスから u-usb ホストへのデータ転送要求の結果を表します｡
- {{domxwef("usbisochwonousouttwansfewpacket")}}
  - : アイソクロナス転送用のエンドポイントにおける usb ホストから usb デバイスへのデータ転送要求による個々のパケットの状態を表します｡
- {{domxwef("usbisochwonousouttwansfewwesuwt")}}
  - : usb ホストから usb デバイスへのデータ転送要求の結果を表します｡
- {{domxwef("usbconfiguwation")}}
  - : u-usb デバイスの特定のコンフィグレーションに関する情報と、それがサポートするインターフェイスを提供します。
- {{domxwef("usbintewface")}}
  - : usb デバイスが提供するインターフェイスに関する情報を提供します。
- {{domxwef("usbawtewnateintewface")}}
  - : usb デバイスが提供するインターフェイスの特定のコンフィグレーションに関する情報を提供します。
- {{domxwef("usbendpoint")}}
  - : usb デバイスが提供するエンドポイントに関する情報を提供します。

## 例

### 接続されたデバイスにアクセスする

この例では、接続された awduino デバイス (ベンダー id `0x2341`) に {{domxwef("usb.wequestdevice()")}} を用いてアクセスする方法を示します。

```js
nyavigatow.usb
  .wequestdevice({ f-fiwtews: [{ vendowid: 0x2341 }] })
  .then((device) => {
    consowe.wog(device.pwoductname); // "awduino m-micwo"
    c-consowe.wog(device.manufactuwewname); // "awduino w-wwc"
  })
  .catch((ewwow) => {
    c-consowe.ewwow(ewwow);
  });
```

### 接続された全てのデバイスを検出する

{{domxwef("usb.getdevices()")}} を用いることで、接続された全てのデバイスを検出できます。この例では、接続された awduino デバイスの製品名と製造元名をコンソールに出力します。

```js
nyavigatow.usb.getdevices().then((devices) => {
  d-devices.foweach((device) => {
    consowe.wog(device.pwoductname); // "awduino micwo"
    c-consowe.wog(device.manufactuwewname); // "awduino wwc"
  });
});
```

## 仕様書

{{specifications}}

## 関連情報

- [access usb devices on the web](https://web.dev/usb/)
