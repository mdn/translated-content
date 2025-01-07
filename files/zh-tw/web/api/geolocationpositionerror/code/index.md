---
title: PositionError.code
slug: Web/API/GeolocationPositionError/code
---

{{APIRef("Geolocation API")}}

**`PositionError.code`** 是一個唯讀無符號整數（`unsigned short`）表示錯誤碼。以下列出可能的值：

| 值  | 相對應的常數           | 描述                                                                                           |
| --- | ---------------------- | ---------------------------------------------------------------------------------------------- |
| `1` | `PERMISSION_DENIED`    | 取得地理資訊失敗，因為此頁面沒有獲取地理位置信息的權限。                                       |
| `2` | `POSITION_UNAVAILABLE` | 取得地理資訊失敗，因為至少有一個地理位置信息內的資訊回傳了錯誤。                               |
| `3` | `TIMEOUT`              | 取得地理資訊超過時限，利用 {{domxref("PositionOptions.timeout")}} i 來定義取得地理資訊的時限。 |

## 語法

```plain
typeErr = poserr.code
```

## 規格

{{Specifications}}

## 瀏覽器的相容性

{{Compat}}

## 請參考

- [Using geolocation](/zh-TW/docs/Web/API/Geolocation_API)
- 屬於 {{domxref("PositionError")}} 。
