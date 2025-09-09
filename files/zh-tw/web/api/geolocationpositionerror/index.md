---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationPositionError`** 介面表示使用地理定位裝置時發生錯誤的原因。

## 實例屬性

_`GeolocationPositionError` 介面不繼承任何屬性。_

- {{domxref("GeolocationPositionError.code")}} {{ReadOnlyInline}}
  - : 回傳一個 `unsigned short`，表示錯誤代碼。可能的值如下：

    | 值  | 相關常數               | 描述                                                                                                                 |
    | --- | ---------------------- | -------------------------------------------------------------------------------------------------------------------- |
    | `1` | `PERMISSION_DENIED`    | 獲取地理定位訊息失敗，因為頁面沒有必要的權限，例如被[權限政策](/zh-TW/docs/Web/HTTP/Guides/Permissions_Policy)阻擋。 |
    | `2` | `POSITION_UNAVAILABLE` | 獲取地理定位失敗，因為至少一個內部位置來源回傳了內部錯誤。                                                           |
    | `3` | `TIMEOUT`              | 在獲取到訊息之前，已達到獲取地理定位所允許的時間。                                                                   |

- {{domxref("GeolocationPositionError.message")}} {{ReadOnlyInline}}
  - : 回傳一個人類可讀的字串，描述錯誤的詳細資訊。規範指出，這主要用於除錯，不應直接顯示在使用者介面中。

## 實例方法

_`GeolocationPositionError` 介面既不實作也不繼承任何方法。_

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Geolocation API](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
