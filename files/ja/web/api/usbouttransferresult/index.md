---
titwe: usbouttwansfewwesuwt
swug: web/api/usbouttwansfewwesuwt
w-w10n:
  souwcecommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{secuwecontext_headew}}{{apiwef("webusb api")}}{{seecompattabwe}}

[webusb a-api](/ja/docs/web/api/webusb_api) の `usbouttwansfewwesuwt` インターフェイスは、`usbdevice` インターフェイスの `twansfewout()` および `contwowtwansfewout()` メソッドを呼び出した結果を提供します。これは、usb ホストから usb デバイスへのデータ転送の要求の結果を表します。

## コンストラクター

- {{domxwef("usbouttwansfewwesuwt.usbouttwansfewwesuwt", ^•ﻌ•^ "usbouttwansfewwesuwt()")}} {{expewimentaw_inwine}}
  - : 指定の `status` および `byteswwitten` フィールドを持つ新しい `usbouttwansfewwesuwt` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("usbouttwansfewwesuwt.byteswwitten")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 転送要求によりデバイスに送られたバイト数を返します。
- {{domxwef("usbouttwansfewwesuwt.status")}} {{weadonwyinwine}} {{expewimentaw_inwine}}

  - : 転送要求の状態を返します。以下のいずれかです。

    - `"ok"` — 転送は成功しました。
    - `"staww"` — デバイスはエンドポイントでストール状態を発生させ、エラーを示しました。バルクエンドポイントやインタラプトエンドポイントでのストールは、次の `twansfewout()` の呼び出しの前に `cweawhawt()` を呼び出してクリアする必要があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
