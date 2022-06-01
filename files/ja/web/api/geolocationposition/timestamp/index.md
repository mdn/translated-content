---
title: GeolocationPosition.timestamp
slug: Web/API/GeolocationPosition/timestamp
tags:
  - API
  - 位置情報 API
  - GeolocationPosition
  - プロパティ
  - 安全なコンテキスト
  - timeStamp
browser-compat: api.GeolocationPosition.timestamp
translation_of: Web/API/GeolocationPosition/timestamp
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationPosition.timestamp`** は読み取り専用のプロパティで、 {{domxref("DOMTimeStamp")}} オブジェクト形式で、所属する {{domxref("GeolocationPosition")}} オブジェクトが生成された日時を表す値を返します。精度はミリ秒です。

## 構文

```js
var timestamp = geolocationPositionInstance.timestamp
```

### 値

{{domxref("DOMTimeStamp")}} オブジェクトのインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationPosition")}}
