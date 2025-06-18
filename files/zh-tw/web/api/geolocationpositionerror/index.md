---
title: PositionError
slug: Web/API/GeolocationPositionError
---

{{APIRef("Geolocation API")}}

**`PositionError`** 介面表示使用定位設備時發生錯誤的原因。

## 屬性

_`PositionError` 介面沒有繼承任何屬性_。

- {{domxref("PositionError.code")}} {{readonlyInline}}

  - : 回傳一個無符號整數（`unsigned short`）來表示錯誤碼。以下列出可能的值：

    | 值  | 相對應的常數           | 描述                                                                                        |
    | --- | ---------------------- | ------------------------------------------------------------------------------------------- |
    | `1` | `PERMISSION_DENIED`    | 取得地理資訊失敗，因為此頁面沒有獲取地理位置信息的權限。                                    |
    | `2` | `POSITION_UNAVAILABLE` | 取得地理資訊失敗，因為至少有一個地理位置信息內的資訊回傳了錯誤。                            |
    | `3` | `TIMEOUT`              | 取得地理資訊超過時限，利用{{domxref("PositionOptions.timeout")}} 來定義取得地理資訊的時限。 |

- {{domxref("PositionError.message")}} {{readonlyInline}}
  - : 回傳一個可讀的 {{domxref("DOMString")}} 來描述錯誤的詳細訊息。注意規格中指出此訊息是用來除錯而非直接顯示在使用者介面。

## 方法

**`PositionError` 介面沒有實作也沒有繼承任何方法**。

## 規格

{{Specifications}}

## 瀏覽器的相容性

{{Compat}}

## 請參考

- [Using geolocation](/zh-TW/docs/Web/API/Geolocation_API)
- {{domxref("Geolocation")}} 介面使用此物件。
