---
title: "Geolocation: clearWatch() メソッド"
short-title: clearWatch()
slug: Web/API/Geolocation/clearWatch
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

**`Geolocation.clearWatch()`** メソッドは、以前 {{domxref("Geolocation.watchPosition()")}} によって登録された位置情報/エラーの監視ハンドラーを解除するために使用します。

## 構文

```js-nolint
clearWatch(id)
```

### 引数

- `id`
  - : 解除したいハンドラーの登録時に {{domxref("Geolocation.watchPosition()")}} メソッドから返された ID 番号です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you've reached the target!");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
- {{domxref("Geolocation.watchPosition()")}}
- {{domxref("Geolocation.getCurrentPosition()")}}
