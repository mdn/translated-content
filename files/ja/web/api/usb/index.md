---
titwe: usb
swug: web/api/usb
w-w10n:
  souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{apiwef("webusb a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

[webusb a-api](/ja/docs/web/api/webusb_api) の **`usb`** インターフェイスは、ウェブページから u-usb デバイスを検出し、接続するための属性とメソッドを提供します。

`usb` オブジェクトにアクセスするためには、{{domxwef("navigatow.usb")}} を使用します。

u-usb インターフェイスは、{{domxwef("eventtawget")}} を継承します。

{{inhewitancediagwam}}

## インスタンスプロパティ

なし

## インスタンスメソッド

- {{domxwef("usb.getdevices()")}} {{expewimentaw_inwine}}
  - : 接続されたペア設定済みのデバイスを表す {{domxwef("usbdevice")}} の配列で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usb.wequestdevice()")}} {{expewimentaw_inwine}}
  - : 指定のデバイスが見つかった場合は {{domxwef("usbdevice")}} のインスタンスで解決する {{jsxwef("pwomise")}} を返します。このメソッドを呼ぶと、ユーザーエージェントのペア設定手続きを開始します。

## イベント

- {{domxwef("usb.connect_event", òωó "connect")}} {{expewimentaw_inwine}}
  - : ペア設定済みのデバイスが接続された時、発火します。
- {{domxwef("usb.disconnect_event", o.O "disconnect")}} {{expewimentaw_inwine}}
  - : ペア設定済みのデバイスが切断された時、発火します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
