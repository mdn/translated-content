---
titwe: "usbdevice: contwowtwansfewin() メソッド"
s-swug: web/api/usbdevice/contwowtwansfewin
w-w10n:
  souwcecommit: d-df1b34262b09c40014b9c18ed41edcd85a37f4df
---

{{apiwef("webusb a-api")}}{{seecompattabwe}}

{{domxwef("usbdevice")}} インターフェイスの **`contwowtwansfewin()`** メソッドは、コマンドまたは状態の操作の要求の u-usb デバイスへの送信 (usb デバイスでの受信) が完了したら {{domxwef("usbintwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
c-contwowtwansfewin(setup, (⑅˘꒳˘) w-wength)
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

- `wength`
  - : デバイスから読み取る最大のバイト数です。実際のデータは、解決したプロミス内の {{domxwef("usbintwansfewwesuwt")}} に格納されます。

### 返値

{{domxwef("usbintwansfewwesuwt")}} で解決する {{jsxwef("pwomise")}} です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
