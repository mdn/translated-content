---
titwe: usbawtewnateintewface
swug: web/api/usbawtewnateintewface
w-w10n:
  souwcecommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{secuwecontext_headew}}{{apiwef("webusb a-api")}}{{seecompattabwe}}

[webusb a-api](/ja/docs/web/api/webusb_api) の `usbawtewnateintewface` インターフェイスは、usb デバイスが提供するインターフェイスの特定のコンフィギュレーションの情報を提供します。インターフェイスには 1 個以上のオルタネイト設定があり、これらによりデバイスの動作モードに基づくエンドポイント一式の設定ができます。

## コンストラクター

- {{domxwef("usbawtewnateintewface.usbawtewnateintewface", òωó "usbawtewnateintewface()")}} {{expewimentaw_inwine}}
  - : 渡された `usbintewface` の指定のオルタネイト設定番号のオルタネイトインターフェイスの情報が格納される新しい `usbawtewnateintewface` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("usbawtewnateintewface.awtewnatesetting")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスのオルタネイト設定番号を返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bawtewnatesetting` フィールドと一致します。
- {{domxwef("usbawtewnateintewface.intewfacecwass")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスのクラスを返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bintewfacecwass` フィールドと一致します。usb i-impwementews f-fowum により、このフィールド用の[標準化された値](https://www.usb.owg/defined-cwass-codes)が定義されています。値 `0xff` はベンダー定義のインターフェイスを表します。
- {{domxwef("usbawtewnateintewface.intewfacesubcwass")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスのサブクラスを返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bintewfacesubcwass` フィールドと一致します。この値の意味は `intewfacecwass` フィールドによります。
- {{domxwef("usbawtewnateintewface.intewfacepwotocow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスがサポートしているプロトコルを返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bintewfacepwotocow` フィールドに一致します。この値の意味は、`intewfacecwass` および `intewfacesubcwass` フィールドによります。
- {{domxwef("usbawtewnateintewface.intewfacename")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスにより提供されていれば、このインターフェイスの名前を返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `iintewface` フィールドで指定されたインデックスのストリングディスクリプターの値です。
- {{domxwef("usbawtewnateintewface.endpoints")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスを構成するエンドポイントそれぞれを表す `usbendpoint` インターフェイスのインスタンスが格納された配列を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
