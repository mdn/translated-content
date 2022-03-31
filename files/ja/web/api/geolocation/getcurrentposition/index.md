---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
tags:
  - API
  - Geolocation
  - 位置情報 API
  - メソッド
  - リファレンス
  - 安全なコンテキスト
  - getCurrentPosition
browser-compat: api.Geolocation.getCurrentPosition
translation_of: Web/API/Geolocation/getCurrentPosition
---
{{securecontext_header}}{{ APIRef("Geolocation API") }}

**`Geolocation.getCurrentPosition()`** メソッドは、端末の現在位置を取得するために使われます。

## 構文

```js
navigator.geolocation.getCurrentPosition(success, error, [options])
```

### 引数

- `success`
  - : コールバック関数で、 {{domxref("GeolocationPosition")}} オブジェクトを唯一の入力引数として受け取ります。
- `error` {{optional_inline}}
  - : オプションのコールバック関数で、 {{domxref("GeolocationPositionError")}} オブジェクトを唯一の入力引数として受け取ります。
- `options` {{optional_inline}}
  - : オプションのオブジェクトで、以下の引数を含みます。
    - `maximumAge`
      - : 正の `long` 値で、キャッシュされた位置を返すことが可能な最大時間をミリ秒単位で表します。 `0` に設定した場合、端末はキャッシュされた位置を使用できず、実際の現在位置を取得する必要があることを意味します。 [`Infinity`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity) に設定した場合、端末はキャッシュされた位置をその古さに関係なく返さなければなりません。既定値は 0 です。
    - `timeout`
      - : 正の `long` 値で、端末が位置を返すために掛けることができる最大時間をミリ秒単位で表します。既定値は [`Infinity`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity) で、 `getCurrentPosition()` は位置を取得できるまで返さないという意味です。
    - `enableHighAccuracy`
      - : 論理値で、アプリケーションが可能な限り正確な結果を受け取ることを望んでいることを示します。もし `true` で、端末がより正確な位置を提供できる場合は、そのようにします。この場合、応答時間が遅くなったり、消費電力が増加したりすることに注意してください（たとえば、モバイル端末の GPS チップを使用する場合など）。一方、 `false` の場合、端末はより速く反応したり、より少ない電力を使用することで、リソースを節約することができます。既定値は `false` です。

## 例

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Navigator.geolocation")}}
