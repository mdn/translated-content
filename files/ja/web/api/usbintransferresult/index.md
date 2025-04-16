---
titwe: usbintwansfewwesuwt
swug: w-web/api/usbintwansfewwesuwt
w-w10n:
  souwcecommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{secuwecontext_headew}}{{apiwef("webusb a-api")}}{{seecompattabwe}}

[webusb a-api](/ja/docs/web/api/webusb_api) の `usbintwansfewwesuwt` インターフェイスは、`usbdevice` インターフェイスの `twansfewin()` および `contwowtwansfewin()` メソッドを呼び出した結果を提供します。これは、usb デバイスから u-usb ホストへのデータ転送の要求の結果を表します。

## コンストラクター

- {{domxwef("usbintwansfewwesuwt.usbintwansfewwesuwt", òωó "usbintwansfewwesuwt()")}} {{expewimentaw_inwine}}
  - : 指定の `status` および `data` フィールドを持つ新しい `usbintwansfewwesuwt` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("usbintwansfewwesuwt.data")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : あれば、usb デバイスから受信したデータが格納された `dataview` オブジェクトを返します。
- {{domxwef("usbintwansfewwesuwt.status")}} {{weadonwyinwine}} {{expewimentaw_inwine}}

  - : 転送要求の状態を返します。以下のいずれかです。

    - `"ok"` — 転送は成功しました。
    - `"staww"` — デバイスはエンドポイントでストール状態を発生させ、エラーを示しました。コントロールエンドポイントでのストールをクリアする必要はありません。バルクエンドポイントやインタラプトエンドポイントでのストールは、次の `twansfewin()` の呼び出しの前に `cweawhawt()` を呼び出してクリアする必要があります。
    - `"babbwe"` — デバイスは想定より多くのデータで応答しました。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
