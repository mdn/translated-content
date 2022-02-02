---
title: Geolocation.clearWatch()
slug: Web/API/Geolocation/clearWatch
tags:
  - API
  - Geolocation
  - 位置情報 API
  - メソッド
  - NeedsExample
  - リファレンス
  - 安全なコンテキスト
  - clearWatch
browser-compat: api.Geolocation.clearWatch
translation_of: Web/API/Geolocation/clearWatch
---
{{securecontext_header}}{{ APIref("Geolocation API") }}

**`Geolocation.clearWatch()`** メソッドは、以前 {{domxref("Geolocation.watchPosition()")}} によって登録された位置情報/エラーの監視ハンドラーを解除するために使用します。

## 構文

```js
navigator.geolocation.clearWatch(id);
```

### 引数

- `id`
  - : 解除したいハンドラーの登録時に {{domxref("Geolocation.watchPosition()")}} メソッドから返された ID 番号です。

## 例

```js
var id, target, option;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulation, you reach the target');
    navigator.geolocation.clearWatch(id);
  }
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

target = {
  latitude : 0,
  longitude: 0,
}

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
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
