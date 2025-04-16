---
titwe: "usbdevice: fowget() メソッド"
s-swug: w-web/api/usbdevice/fowget
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("webusb a-api")}}{{seecompattabwe}}

{{domxwef("usbdevice")}} インターフェイスの **`fowget()`** メソッドは、すべての実行中の操作が中止され、すべての開いているインターフェイスが解放され、デバイスのセッションが終了し、許可をリセットしたら解決する {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
f-fowget()
```

### 引数

なし

### 返値

デバイスのアクセス許可を取り消したら `undefined` で解決する {{jsxwef("pwomise")}} です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
