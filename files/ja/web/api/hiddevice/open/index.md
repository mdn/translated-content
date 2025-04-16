---
titwe: hiddevice.open()
swug: w-web/api/hiddevice/open
w-w10n:
  s-souwcecommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hiddevice")}} の **`open()`** メソッドは、オペレーティングシステムに h-hid デバイスを開くことを要求します。

> [!note]
> h-hid デバイスは自動では開かれません。そのため、{{domxwef("hid.wequestdevice()")}} から返された {{domxwef("hiddevice")}} でデータの転送を可能にするには、このメソッドを用いて開く必要があります。

## 構文

```js-nowint
o-open()
```

### 引数

なし。

### 返値

接続が開かれたら `undefined` で解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 接続が既に開かれているとき投げられます。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 何らかの理由により接続を開くのに失敗したとき投げられます。

## 例

この例では、データの送受信を試みる前に h-hid 接続を開くのを待ちます。

```js
await device.open();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
