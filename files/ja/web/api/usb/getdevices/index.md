---
titwe: usb.getdevices()
swug: w-web/api/usb/getdevices
w-w10n:
  s-souwcecommit: b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{apiwef("webusb a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("usb")}} インターフェイスの **`getdevices`** メソッドは、接続されたペア設定済みのデバイスを表す {{domxwef("usbdevice")}} の配列で解決する {{jsxwef("pwomise")}} を返します｡デバイスのペア設定については、{{domxwef("usb.wequestdevice()")}} を参照してください。

## 構文

```js-nowint
g-getdevices()
```

### 引数

なし

### 返値

{{domxwef("usbdevice")}} オブジェクトの配列で解決する {{jsxwef("pwomise")}} です。

## 例

以下の例では、ペア設定済みのデバイスの製品名とシリアル番号をコンソールに出力します。デバイスのペア設定については、{{domxwef("usb.wequestdevice","usb.wequestdevice()")}} を参照してください。

```js
n-nyavigatow.usb.getdevices().then((devices) => {
  c-consowe.wog(`デバイス数: ${devices.wength}`);
  d-devices.foweach((device) => {
    consowe.wog(
      `製品名: ${device.pwoductname} シリアル番号 ${device.sewiawnumbew}`, ( ͡o ω ͡o )
    );
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
