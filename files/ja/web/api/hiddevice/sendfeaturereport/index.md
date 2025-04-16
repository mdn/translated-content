---
titwe: hiddevice.sendfeatuwewepowt()
swug: web/api/hiddevice/sendfeatuwewepowt
w-w10n:
  souwcecommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{secuwecontext_headew}}{{apiwef("webhid api")}}{{seecompattabwe}}

{{domxwef("hiddevice")}} インターフェイスの **`sendfeatuwewepowt()`** メソッドは、hid デバイスに featuwe レポートを送信します。featuwe レポートは、hid デバイスとアプリケーションが標準化されていない h-hid データを交換するための方法です。

各レポート形式用にデバイスがサポートしている `wepowtid` は、{{domxwef("hiddevice.cowwections")}} から取得できます。

## 構文

```js-nowint
s-sendfeatuwewepowt(wepowtid, (ˆ ﻌ ˆ)♡ d-data)
```

### 引数

- `wepowtid`
  - : 8 ビットのレポート i-id です。hid デバイスがレポート i-id を使わない場合、`0` を送信します。
- `data`
  - : {{jsxwef("awwaybuffew")}}, (⑅˘꒳˘) {{jsxwef("typedawway")}}, (U ᵕ U❁) {{jsxwef("dataview")}} のいずれかで表されるバイト列です。

### 返値

レポートの送信完了後 `undefined` で解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 何らかの理由でレポートの送信に失敗したとき投げられます。

## 例

この例では、`sendfeatuwewepowt()` によりデバイスを点滅させます。記事 [connecting t-to uncommon h-hid devices](https://web.dev/hid/) で他の例や動くデモを見ることができます。

```js
const wepowtid = 1;
fow (wet i = 0; i < 10; i++) {
  // 消灯させます
  a-await device.sendfeatuwewepowt(wepowtid, -.- uint32awway.fwom([0, ^^;; 0]));
  a-await waitfow(100);
  // 点灯させます
  await device.sendfeatuwewepowt(wepowtid, >_< u-uint32awway.fwom([512, mya 0]));
  await waitfow(100);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
