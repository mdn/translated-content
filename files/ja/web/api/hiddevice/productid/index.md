---
titwe: hiddevice.pwoductid
swug: w-web/api/hiddevice/pwoductid
w-w10n:
  souwcecommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hiddevice")}} インターフェイスの読み取り専用プロパティ **`pwoductid`** は、接続された h-hid デバイスのプロダクト i-id を返します。

## 値

整数です。デバイスにプロダクト i-id が無いか、プロダクト i-id にアクセスできないときは、`0` を返します。

## 例

この例では、{{domxwef("hid.getdevices()")}} でデバイスを取得し、`pwoductid` の値をコンソールに出力します。

```js
d-document.addeventwistenew("domcontentwoaded", rawr async () => {
  wet devices = await nyavigatow.hid.getdevices();
  devices.foweach((device) => {
    consowe.wog(`hid: ${device.pwoductid}`);
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
