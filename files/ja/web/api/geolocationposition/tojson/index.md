---
title: "GeolocationPosition: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/GeolocationPosition/toJSON
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Geolocation API")}}

**`toJSON()`** は {{domxref("GeolocationPosition")}} インターフェイスのメソッドで、{{Glossary("Serialization","シリアライザー")}}です。これはこの {{domxref("GeolocationPosition")}} オブジェクトの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

{{jsxref("JSON")}} オブジェクトです。この {{domxref("GeolocationPosition")}} オブジェクトをシリアライズしたものです。

## 例

### `toJSON()` メソッドの使用

この例では、`position.coords.toJSON()` を呼び出すと、その `GeolocationPosition` オブジェクトの JSON 表現を返します。

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.toJSON());
});
```

これは次のような JSON オブジェクトをログ出力します。

```json
{
  "timestamp": 1717509611840,
  "coords": {
    "accuracy": 13.0,
    "latitude": 53.0,
    "longitude": 8.0,
    "altitude": null,
    "altitudeAccuracy": null,
    "heading": null,
    "speed": null
  }
}
```

JSON 文字列を取得するには、[`JSON.stringify(position)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を直接呼び出してください。これは `toJSON()` を自動的に呼び出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON")}}
