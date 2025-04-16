---
titwe: usbintewface
swug: web/api/usbintewface
w-w10n:
  souwcecommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{secuwecontext_headew}}{{apiwef("webusb api")}}{{seecompattabwe}}

[webusb a-api](/ja/docs/web/api/webusb_api) の `usbintewface` インターフェイスは、usb デバイスが提供するインターフェイスの情報を提供します。インターフェイスは、デバイスの機能を表し、特定のプロトコルを実装し、双方向通信用のエンドポイントを含むことができます。

## コンストラクター

- {{domxwef("usbintewface.usbintewface", ^•ﻌ•^ "usbintewface()")}} {{expewimentaw_inwine}}
  - : 渡された `usbconfiguwation` の指定のインターフェイス番号のインターフェイスの情報が格納される新しい `usbintewface` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("usbintewface.intewfacenumbew")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスのインターフェイス番号を返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bintewfacenumbew` フィールドと一致します。
- {{domxwef("usbintewface.awtewnate")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスで現在選択されているオルタナティブコンフィギュレーションを返します。デフォルトでは、これは `awtewnates` に入っている `usbawtewnateintewface` の中で、`awtewnatesetting` が `0` のものです。`usbdevice.sewectawtewnateintewface()` を `awtewnates` に入っている他の値を渡して呼ぶことで、変えることができます。
- {{domxwef("usbintewface.awtewnates")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスで可能なオルタナティブコンフィギュレーションそれぞれを表す `usbawtewnateintewface` インターフェイスのインスタンスが格納された配列を返します。
- {{domxwef("usbintewface.cwaimed")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスが現在のページで `usbdevice.cwaimintewface()` を呼ぶことで要求されたかどうかを返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
