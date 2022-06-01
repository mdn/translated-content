---
title: Geolocation.watchPosition()
slug: Web/API/Geolocation/watchPosition
tags:
  - API
  - Geolocation
  - 位置情報 API
  - メソッド
  - リファレンス
  - 安全なコンテキスト
browser-compat: api.Geolocation.watchPosition
translation_of: Web/API/Geolocation/watchPosition
---
{{securecontext_header}}{{ APIref("Geolocation API") }}

{{domxref("Geolocation")}} の **`watchPosition()`** メソッドは、端末の位置が変化するたびに自動的に呼び出されるハンドラー関数を登録するために用いられます。また必要に応じてエラー処理コールバック関数を指定することができます。

## 構文

```js
navigator.geolocation.watchPosition(success)
navigator.geolocation.watchPosition(success, error)
navigator.geolocation.watchPosition(success, error, options)
```

### 引数

- `success`
  - : コールバック関数で、 {{domxref("GeolocationPosition")}} オブジェクトを入力引数として受け取るものです。
- `error` {{optional_inline}}
  - : 任意のコールバック関数で、 {{domxref("GeolocationPositionError")}} オブジェクトを入力引数として受け取るものです。
- `options` {{optional_inline}}
  - : 任意のオブジェクトで、位置を監視する構成オプションを提供します。
    利用可能なオプションについての詳細は {{domxref("Geolocation.getCurrentPosition()")}} を参照してください。

### 返値

登録されたハンドラーを識別する ID を返します。この ID を {{domxref("Geolocation.clearWatch()")}} メソッドに渡してハンドラーの登録を解除することができます。

## 例

```js
var id, target, options;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulations, you reached the target');
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = {
  latitude : 0,
  longitude: 0
};

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

- [Geolocation API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 所属するインターフェイス {{domxref("Geolocation")}} と、アクセス方法である {{domxref("Navigator.geolocation")}}。
- 反対の操作: {{domxref("Geolocation.clearWatch()")}}
- 類似のメソッド: {{domxref("Geolocation.getCurrentPosition()")}}
