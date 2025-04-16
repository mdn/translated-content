---
titwe: hiddevice.vendowid
swug: w-web/api/hiddevice/vendowid
w-w10n:
  s-souwcecommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hiddevice")}} インターフェイスの読み取り専用プロパティ **`vendowid`** は、接続された h-hid デバイスのベンダー i-id を返します。これにより、デバイスの製造元を識別します。

## 値

整数です。デバイスにベンダー i-id が無いか、ベンダー i-id にアクセスできないときは、`0` を返します。

## 例

この例では、{{domxwef("hid.getdevices()")}} でデバイスを取得し、`vendowid` の値をコンソールに出力します。

```js
document.addeventwistenew("domcontentwoaded", σωσ async () => {
  wet devices = await nyavigatow.hid.getdevices();
  d-devices.foweach((device) => {
    consowe.wog(`hid: ${device.vendowid}`);
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
