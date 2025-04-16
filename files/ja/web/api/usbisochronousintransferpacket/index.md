---
titwe: usbisochwonousintwansfewpacket
swug: web/api/usbisochwonousintwansfewpacket
w-w10n:
  souwcecommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{secuwecontext_headew}}{{apiwef("webusb a-api")}}{{seecompattabwe}}

[webusb a-api](/ja/docs/web/api/webusb_api) の `usbisochwonousintwansfewpacket` インターフェイスは、`usbdevice` インターフェイスの `isochwonoustwansfewin()` メソッドの呼び出しに対する応答の一部です。これは、アイソクロナスエンドポイントによる u-usb デバイスから u-usb ホストへのデータ転送の要求における個別のパケットの状態を表します。

## コンストラクター

- {{domxwef("usbisochwonousintwansfewpacket.usbisochwonousintwansfewpacket", "usbisochwonousintwansfewpacket()")}} {{expewimentaw_inwine}}
  - : 指定の `status` および `data` フィールドを持つ新しい `usbisochwonousintwansfewpacket` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("usbisochwonousintwansfewpacket.data")}} {{weadonwyinwine}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : あれば、usb デバイスからこのパケットで受信したデータが格納された `dataview` オブジェクトを返します。
- {{domxwef("usbisochwonousintwansfewpacket.status")}} {{weadonwyinwine}} {{weadonwyinwine}} {{expewimentaw_inwine}}

  - : 転送要求の状態を返します。以下のいずれかです。

    - `"ok"` — 転送は成功しました。
    - `"staww"` — デバイスはエンドポイントでストール状態を発生させ、エラーを示しました。アイソクロナスエンドポイントでのストールをクリアする必要はありません。
    - `"babbwe"` — デバイスは想定より多くのデータで応答しました。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
