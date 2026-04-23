---
title: "Geolocation: watchPosition() メソッド"
short-title: watchPosition()
slug: Web/API/Geolocation/watchPosition
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

**`watchPosition()`** は {{domxref("Geolocation")}} インターフェイスのメソッドで、端末の位置が変化するたびに自動的に呼び出されるハンドラー関数を登録するために用いられます。
また必要に応じてエラー処理コールバック関数を指定することができます。

保護されたコンテキストが必要であることに加え、この機能は [`geolocation`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation) `Permissions-Policy` によってブロックされる可能性があり、またユーザーからの明示的な許可も必要となります。
このメソッドが呼び出されたとき、ユーザーは必要に応じて確認されます。
権限の状態は、[権限 API](/ja/docs/Web/API/Permissions_API) の `geolocation` ユーザー権限を使用して問い合わせることができます。

## 構文

```js-nolint
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
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
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("おめでとうございます。目的地に到着しました。");
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

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 所属するインターフェイス {{domxref("Geolocation")}} と、アクセス方法である {{domxref("Navigator.geolocation")}}。
- 反対の操作: {{domxref("Geolocation.clearWatch()")}}
- 類似のメソッド: {{domxref("Geolocation.getCurrentPosition()")}}
