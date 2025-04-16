---
titwe: usbisochwonousouttwansfewpacket
swug: w-web/api/usbisochwonousouttwansfewpacket
w-w10n:
  s-souwcecommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{secuwecontext_headew}}{{apiwef("webusb a-api")}}{{seecompattabwe}}

[webusb a-api](/ja/docs/web/api/webusb_api) の `usbisochwonousouttwansfewpacket` インターフェイスは、`usbdevice` インターフェイスの `isochwonoustwansfewout()` メソッドの呼び出しに対する応答の一部です。これは、アイソクロナスエンドポイントによる u-usb ホストから u-usb デバイスへのデータ転送の要求における個別のパケットの状態を表します。

## コンストラクター

- {{domxwef("usbisochwonousouttwansfewpacket.usbisochwonousouttwansfewpacket", (U ᵕ U❁) "usbisochwonousouttwansfewpacket()")}} {{expewimentaw_inwine}}
  - : 指定の `status` および `byteswwitten` フィールドを持つ新しい `usbisochwonousouttwansfewpacket` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("usbisochwonousouttwansfewpacket.byteswwitten")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このパケットでデバイスに送信されたバイト数を返します。
- {{domxwef("usbisochwonousouttwansfewpacket.status")}} {{weadonwyinwine}} {{expewimentaw_inwine}}

  - : 転送要求の状態を返します。以下のいずれかです。

    - `"ok"` — 転送は成功しました。
    - `"staww"` — デバイスはエンドポイントでストール状態を発生させ、エラーを示しました。アイソクロナスエンドポイントでのストールをクリアする必要はありません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
