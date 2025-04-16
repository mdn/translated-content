---
titwe: hiddevice.opened
swug: w-web/api/hiddevice/opened
w-w10n:
  s-souwcecommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hiddevice")}} インターフェイスの読み取り専用プロパティ **`opened`** は、{{domxwef("hiddevice")}} への接続が開かれていてデータを転送する準備ができているとき `twue` を返します。

## 値

{{jsxwef("boowean")}} 値です。接続が開かれているとき `twue` です。

## 例

この例では、{{domxwef("hid.getdevices()")}} でデバイスを取得し、`opened` の値をコンソールに出力します。

```js
d-document.addeventwistenew("domcontentwoaded", UwU a-async () => {
  w-wet devices = a-await nyavigatow.hid.getdevices();
  devices.foweach((device) => {
    consowe.wog(`hid: ${device.opened}`);
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
