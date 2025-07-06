---
title: Geolocation：getCurrentPosition() 方法
slug: Web/API/Geolocation/getCurrentPosition
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

{{domxref("Geolocation")}} 介面的 **`getCurrentPosition()`** 方法用於取得裝置的目前位置。

請注意，除了需要安全上下文之外，此功能可能會被 [`geolocation`](/zh-TW/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation) `Permissions-Policy` 封鎖，並且還需要使用者明確授予權限。如有需要，呼叫此方法時會提示使用者。可以使用[權限 API](/zh-TW/docs/Web/API/Permissions_API) 中的 `geolocation` 使用者權限來查詢權限狀態。

## 語法

```js-nolint
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
```

### 參數

- `success`
  - : 一個回呼函式，它接受一個 {{domxref("GeolocationPosition")}} 物件作為其唯一的輸入參數。
- `error` {{optional_inline}}
  - : 一個可選的回呼函式，它接受一個 {{domxref("GeolocationPositionError")}} 物件作為其唯一的輸入參數。
- `options` {{optional_inline}}
  - : 一個可選的物件，包含以下參數：
    - `maximumAge` {{optional_inline}}
      - : 一個正的 `long` 值，表示可接受回傳的快取位置的最大年齡（以毫秒為單位）。如果設定為 `0`，表示裝置不能使用快取位置，必須嘗試取得真實的目前位置。如果設定為 {{jsxref("Infinity")}}，裝置必須回傳快取位置，無論其年齡為何。預設值：`0`。
    - `timeout` {{optional_inline}}
      - : 一個正的 `long` 值，表示裝置為了回傳位置所允許的最長時間（以毫秒為單位）。預設值為 {{jsxref("Infinity")}}，表示 `getCurrentPosition()` 在位置可用之前不會回傳。
    - `enableHighAccuracy` {{optional_inline}}
      - : 一個布林值，表示應用程式希望接收到最佳的結果。如果為 `true` 且裝置能夠提供更精確的位置，它就會這麼做。請注意，這可能會導致較慢的回應時間或增加功耗（例如行動裝置上的 GPS 晶片）。另一方面，如果為 `false`，裝置可以自由地透過更快速的回應和／或使用更少的電力來節省資源。預設值：`false`。

### 回傳值

無（{{jsxref("undefined")}}）。

## 範例

```js
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("你的目前位置是：");
  console.log(`緯度：${crd.latitude}`);
  console.log(`經度：${crd.longitude}`);
  console.log(`誤差大約 ${crd.accuracy} 公尺。`);
}

function error(err) {
  console.warn(`錯誤（${err.code}）：${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Geolocation API](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Navigator.geolocation")}}
