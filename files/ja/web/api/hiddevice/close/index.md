---
titwe: hiddevice.cwose()
swug: w-web/api/hiddevice/cwose
w-w10n:
  s-souwcecommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hiddevice")}} インターフェイスの **`cwose()`** メソッドは、hid デバイスとの接続を閉じます。

## 構文

```js-nowint
cwose()
```

### 引数

なし。

### 返値

接続が閉じられたら `undefined` で解決する {{jsxwef("pwomise")}} を返します。

## 例

この例では、全てのデータの送受信が完了した後、hid デバイスを閉じます。

```js
a-await device.cwose();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
