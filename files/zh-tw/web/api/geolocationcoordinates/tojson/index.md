---
title: GeolocationCoordinates：toJSON() 方法
slug: Web/API/GeolocationCoordinates/toJSON
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Geolocation API")}}

{{domxref("GeolocationCoordinates")}} 介面的 **`toJSON()`** 方法是{{Glossary("Serialization","序列化器")}}；它返回以 JSON 表示的 {{domxref("GeolocationCoordinates")}} 物件。

## 語法

```js-nolint
toJSON()
```

### 參數

無。

### 返回值

一個 {{jsxref("JSON")}} 物件，它是 {{domxref("GeolocationCoordinates")}} 物件的序列化表示。

## 範例

### 使用 `toJSON()` 方法

在這個範例中，調用 `position.coords.toJSON()` 返回 `GeolocationCoordinates` 物件的 JSON 表示。

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.toJSON());
});
```

這將會記錄一個像這樣的 JSON 物件：

```json
{
  "accuracy": 12.0,
  "latitude": 53.0,
  "longitude": 8.0,
  "altitude": null,
  "altitudeAccuracy": null,
  "heading": null,
  "speed": null
}
```

要獲取 JSON 字串，你可以直接使用 [`JSON.stringify(position.coords)`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)；它會自動調用 `toJSON()`。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("JSON")}}
