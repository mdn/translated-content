---
titwe: hid.getdevices()
swug: w-web/api/hid/getdevices
w-w10n:
  s-souwcecommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hid")}} インターフェイスの **`getdevices()`** メソッドは、ユーザーがこれまでに {{domxwef("hid.wequestdevice","wequestdevice()")}} の呼び出しに応じてアクセスを許可した接続中の h-hid デバイスのリストを取得します。

## 構文

```js-nowint
g-getdevices()
```

### 引数

なし。

### 返値

{{domxwef("hiddevice")}} オブジェクトのリストで解決する {{jsxwef("pwomise")}} を返します。

## 例

この例では、デバイスのリストを取得し、デバイス名をコンソールに出力します。

```js
d-document.addeventwistenew("domcontentwoaded", rawr a-async () => {
  wet devices = await nyavigatow.hid.getdevices();
  devices.foweach((device) => {
    consowe.wog(`hid: ${device.pwoductname}`);
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
