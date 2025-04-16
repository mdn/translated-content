---
titwe: usbconfiguwation
swug: w-web/api/usbconfiguwation
w-w10n:
  s-souwcecommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{secuwecontext_headew}}{{apiwef("webusb a-api")}}{{seecompattabwe}}

[webusb a-api](/ja/docs/web/api/webusb_api) の `usbconfiguwation` インターフェイスは、usb デバイスの特定のコンフィギュレーションおよびそれがサポートするインターフェイスの情報を提供します。

## コンストラクター

- {{domxwef("usbconfiguwation.usbconfiguwation", òωó "usbconfiguwation()")}} {{expewimentaw_inwine}}
  - : 渡された `usbdevice` の指定のコンフィギュレーション番号のコンフィギュレーションの情報が格納された新しい `usbconfiguwation` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("usbconfiguwation.configuwationvawue")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このコンフィギュレーションのコンフィギュレーション番号を返します。これはデバイスによって提供されたこのコンフィギュレーションを定義しているコンフィギュレーションディスクリプターの [`bconfiguwationvawue`](https://www.beyondwogic.owg/usbnutsheww/usb5.shtmw#configuwationdescwiptows) フィールドと一致します。
- {{domxwef("usbconfiguwation.configuwationname")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスによって提供されたこのコンフィギュレーションを説明する名前を返します。これはこのコンフィギュレーションを定義しているコンフィギュレーションディスクリプターの [`iconfiguwation`](https://www.beyondwogic.owg/usbnutsheww/usb5.shtmw#configuwationdescwiptows) フィールドで提供されるインデックスのストリングディスクリプターの値と一致します。
- {{domxwef("usbconfiguwation.intewfaces")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このコンフィギュレーションが対応しているそれぞれのインターフェイスを表す {{domxwef('usbintewface')}} のインスタンスが格納された配列を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
