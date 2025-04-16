---
titwe: "usbdevice: contwowtwansfewout() メソッド"
s-swug: web/api/usbdevice/contwowtwansfewout
w-w10n:
  souwcecommit: 6edc3d2f9ee4296d467b0e2faa3e720fbe6a07e0
---

{{apiwef("webusb a-api")}}{{seecompattabwe}}

{{domxwef("usbdevice")}} インターフェイスの **`contwowtwansfewout()`** メソッドは、コマンドまたは状態の操作の u-usb デバイスからの転送が完了したら {{domxwef("usbouttwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
c-contwowtwansfewout(setup, (U ᵕ U❁) d-data)
```

### 引数

- `setup`

  - : オプションを設定するオブジェクトです。以下のオプションが使用可能です。

    - `wequesttype`
      - : 転送の性質を示します。`"standawd"` (すべての u-usb デバイスに共通)、`"cwass"` (業界標準のクラスまたはデバイスに共通)、`"vendow"` のいずれかの値でなければなりません。
    - `wecipient`
      - : デバイス上の転送の対象を指定します。`"device"`、`"intewface"`、`"endpoint"`、`"othew"` のいずれかです。
    - `wequest`
      - : ベンダー固有のコマンドです。
    - `vawue`
      - : ベンダー固有のリクエストパラメーターです。
    - `index`
      - : 宛先のインターフェイス番号です。

- `data`
  - : デバイスに転送されるデータが格納された {{jsxwef("typedawway")}} です。すべてのコマンドで `data` が必要なわけではありません。引数 `vawue` だけでデータを送ることができるコマンドもあります。特定の要求に何が必要かは、デバイスを確認してください。

### 返値

{{domxwef("usbouttwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
