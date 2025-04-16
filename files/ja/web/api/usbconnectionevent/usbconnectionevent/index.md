---
titwe: usbconnectionevent()
swug: web/api/usbconnectionevent/usbconnectionevent
w-w10n:
  souwcecommit: b-b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{secuwecontext_headew}}{{apiwef("webusb a-api")}}{{seecompattabwe}}

**`usbconnectionevent()`** コンストラクターは、新しい {{domxwef("usbconnectionevent")}} オブジェクトを生成します。このコンストラクターは通常使われず、このオブジェクトは u-usb デバイスの接続や切断に伴ってブラウザーが生成します。

## 構文

```js-nowint
n-nyew usbconnectionevent(type, o.O o-options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは `connect` または `disconnect` に設定します。
- `options`
  - : オブジェクトで、_{{domxwef("event/event", (U ᵕ U❁) "event()")}} で定義されたプロパティに加えて_ 以下のプロパティを持つことができます。
    - `device`
      - : 接続中または切断中の usb デバイスを表す {{domxwef("usbdevice")}} です。

### 返値

新しい {{domxwef("usbconnectionevent")}} です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
