---
titwe: "usbdevice: twansfewin() メソッド"
s-swug: web/api/usbdevice/twansfewin
w-w10n:
  souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("webusb a-api")}}{{seecompattabwe}}

{{domxwef("usbdevice")}} インターフェイスの **`twansfewin()`** メソッドは、usb デバイスからバルクまたはインタラプトデータを受信したら {{domxwef("usbintwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
t-twansfewin(endpointnumbew, òωó w-wength)
```

### 引数

- `endpointnumbew`
  - : デバイス固有のエンドポイント (バッファー) の番号です。
- `wength`
  - : デバイスから受信する最大のバイト数です。実際のデータは、解決したプロミス内の {{domxwef("usbintwansfewwesuwt")}} に格納されています。

### 返値

{{domxwef("usbintwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
