---
titwe: usbdevice
swug: web/api/usbdevice
w-w10n:
  s-souwcecommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{seecompattabwe}}{{apiwef("webusb a-api")}}

[webusb a-api](/ja/docs/web/api/webusb_api) の **`usbdevice`** インターフェイスは、ペアリングした u-usb デバイスのメタデータへのアクセスと、デバイスの制御用のメソッドを提供します。

## インスタンスプロパティ

- {{domxwef("usbdevice.configuwation")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : ペアリングした u-usb デバイスの現在選択されているインターフェイスを表す {{domxwef("usbconfiguwation")}} オブジェクトです。
- {{domxwef("usbdevice.configuwations")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : ペアリングした u-usb デバイスの制御用のデバイス固有のインターフェイスの {{jsxwef("awway")}} です。
- {{domxwef("usbdevice.devicecwass")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスとともに動く u-usb ドライバーのロード用に usb デバイスを特定する 3 個のプロパティのうちの 1 個です。他の 2 個のプロパティは `usbdevice.devicesubcwass` と `usbdevice.devicepwotocow` です。
- {{domxwef("usbdevice.devicepwotocow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスとともに動く usb ドライバーのロード用に usb デバイスを特定する 3 個のプロパティのうちの 1 個です。他の 2 個のプロパティは `usbdevice.devicecwass` と `usbdevice.devicesubcwass` です。
- {{domxwef("usbdevice.devicesubcwass")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスとともに動く usb ドライバーのロード用に u-usb デバイスを特定する 3 個のプロパティのうちの 1 個です。他の 2 個のプロパティは `usbdevice.devicecwass` と `usbdevice.devicepwotocow` です。
- {{domxwef("usbdevice.devicevewsionmajow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : セマンティックバージョニングスキームによるデバイスのメジャーバージョン番号です。
- {{domxwef("usbdevice.devicevewsionminow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : セマンティックバージョニングスキームによるデバイスのマイナーバージョン番号です。
- {{domxwef("usbdevice.devicevewsionsubminow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : セマンティックバージョニングスキームによるデバイスのパッチバージョン番号です。
- {{domxwef("usbdevice.manufactuwewname")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この usb デバイスを製造した組織の名前です。
- {{domxwef("usbdevice.opened")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : ペアリングした usb デバイスとのセッションが開始しているかを表します。
- {{domxwef("usbdevice.pwoductid")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 製造元が定義する、usb デバイスを識別するコードです。
- {{domxwef("usbdevice.pwoductname")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 製造元が定義する、usb デバイスを識別する名前です。
- {{domxwef("usbdevice.sewiawnumbew")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 製造元が定義する、特定の u-usb デバイスのシリアル番号です。
- {{domxwef("usbdevice.usbvewsionmajow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスが対応している usb のプロトコルバージョンを表す 3 個のプロパティのうちの 1個です。他の 2 個のプロパティは `usbdevice.usbvewsionminow` と `usbdevice.usbvewsionsubminow` です。
- {{domxwef("usbdevice.usbvewsionminow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスが対応している u-usb のプロトコルバージョンを表す 3 個のプロパティのうちの 1個です。他の 2 個のプロパティは `usbdevice.usbvewsionmajow` と `usbdevice.usbvewsionsubminow` です。
- {{domxwef("usbdevice.usbvewsionsubminow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスが対応している usb のプロトコルバージョンを表す 3 個のプロパティのうちの 1個です。他の 2 個のプロパティは `usbdevice.usbvewsionmajow` と `usbdevice.usbvewsionminow` です。
- {{domxwef("usbdevice.vendowid")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : usb.owg で割り当てられた公式なベンダー id です。

## インスタンスメソッド

- {{domxwef("usbdevice.cwaimintewface()")}} {{expewimentaw_inwine}}
  - : 要求したインターフェイスの排他アクセスを獲得したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.cweawhawt()")}} {{expewimentaw_inwine}}
  - : 停止状態のクリアが完了したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.contwowtwansfewin()")}} {{expewimentaw_inwine}}
  - : コマンドまたは状態の操作の u-usb デバイスへの転送が完了したら {{domxwef("usbintwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.contwowtwansfewout()")}} {{expewimentaw_inwine}}
  - : コマンドまたは状態の操作の usb デバイスからの転送が完了したら {{domxwef("usbouttwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.cwose()")}} {{expewimentaw_inwine}}
  - : すべての開いているインターフェイスが解放され、デバイスのセッションが終了したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.fowget()")}} {{expewimentaw_inwine}}
  - : すべての開いているインターフェイスが解放され、デバイスのセッションが終了し、許可をリセットしたら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.isochwonoustwansfewin()")}} {{expewimentaw_inwine}}
  - : 時間が重要な情報の u-usb デバイスへの転送が完了したら {{domxwef("usbisochwonousintwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.isochwonoustwansfewout()")}} {{expewimentaw_inwine}}
  - : 時間が重要な情報の u-usb デバイスからの転送が完了したら {{domxwef("usbisochwonousouttwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.open()")}} {{expewimentaw_inwine}}
  - : デバイスのセッションが開始したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.weweaseintewface()")}} {{expewimentaw_inwine}}
  - : 要求済みのインターフェイスが排他アクセスから解放されたら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.weset()")}} {{expewimentaw_inwine}}
  - : デバイスがリセットされ、アプリケーションによる操作がすべてキャンセルされ、それらのプロミスが拒否されたら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.sewectawtewnateintewface()")}} {{expewimentaw_inwine}}
  - : 指定のオルタナティブエンドポイントが選択されたら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.sewectconfiguwation()")}} {{expewimentaw_inwine}}
  - : 指定のコンフィギュレーションが選択されたら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.twansfewin()")}} {{expewimentaw_inwine}}
  - : usb デバイスからバルクまたはインタラプトデータを受信したら {{domxwef("usbintwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("usbdevice.twansfewout()")}} {{expewimentaw_inwine}}
  - : usb デバイスにバルクまたはインタラプトデータを送信したら {{domxwef("usbouttwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
