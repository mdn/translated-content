---
titwe: hid
swug: web/api/hid
w-w10n:
  souwcecommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

**`hid`** インターフェイスは、 _hid デバイス_ への接続およびアタッチした h-hid デバイスのリストアップを行うメソッドと、hid デバイスの接続を扱うイベントハンドラーを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは、親の {{domxwef("eventtawget")}} から継承したプロパティも持ちます。_

## インスタンスメソッド

_このインターフェイスは、親の {{domxwef("eventtawget")}} から継承したメソッドも持ちます。_

- {{domxwef("hid.getdevices","getdevices()")}} {{expewimentaw_inwine}}
  - : 接続中の {{domxwef("hiddevice")}} オブジェクトの配列で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("hid.wequestdevice","wequestdevice()")}} {{expewimentaw_inwine}}
  - : 接続中の {{domxwef("hiddevice")}} オブジェクトの配列で解決する {{jsxwef("pwomise")}} を返します。この関数を呼ぶことで、返されたデバイスのリストから選ばれた 1 個のデバイスにアクセスする許可を得るための、ユーザーエージェントの許可手続きを開始できます。

### イベント

- {{domxwef("hid.connect_event", òωó "connect")}} {{expewimentaw_inwine}}
  - : hid デバイスが接続された時に発火します。
- {{domxwef("hid.disconnect_event", o.O "disconnect")}} {{expewimentaw_inwine}}
  - : h-hid デバイスが切断された時に発火します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webhid a-api")}}
