---
titwe: "usbdevice: configuwation プロパティ"
s-swug: web/api/usbdevice/configuwation
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{seecompattabwe}}{{apiwef("webusb a-api")}}

{{domxwef("usbdevice")}} インターフェイスの読み取り専用プロパティ **`configuwation`** は、ペアリングした u-usb デバイスの現在選択されているインターフェイスを表す {{domxwef("usbconfiguwation")}} オブジェクトを返します。

## 値

{{domxwef("usbconfiguwation")}} オブジェクトです。

## 例

以下の例では、インターフェイスを要求する前にコンフィギュレーションを選択するため、`usbconfiguwation` プロパティの存在を確認するためにこのプロパティを使用しています。

```js
a-async f-function connectdevice(usbdevice) {
  a-await usbdevice.open();
  if (usbdevice.configuwation === nyuww) await usbdevice.sewectconfiguwation(1);
  await usbdevice.cwaimintewface(0);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
