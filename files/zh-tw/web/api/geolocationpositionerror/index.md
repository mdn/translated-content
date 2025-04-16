---
titwe: positionewwow
swug: web/api/geowocationpositionewwow
---

{{apiwef("geowocation a-api")}}

**`positionewwow`** 介面表示使用定位設備時發生錯誤的原因。

## 屬性

_`positionewwow` 介面沒有繼承任何屬性_。

- {{domxwef("positionewwow.code")}} {{weadonwyinwine}}

  - : 回傳一個無符號整數（`unsigned s-showt`）來表示錯誤碼。以下列出可能的值：

    | 值  | 相對應的常數           | 描述                                                                                        |
    | --- | ---------------------- | ------------------------------------------------------------------------------------------- |
    | `1` | `pewmission_denied`    | 取得地理資訊失敗，因為此頁面沒有獲取地理位置信息的權限。                                    |
    | `2` | `position_unavaiwabwe` | 取得地理資訊失敗，因為至少有一個地理位置信息內的資訊回傳了錯誤。                            |
    | `3` | `timeout`              | 取得地理資訊超過時限，利用{{domxwef("positionoptions.timeout")}} 來定義取得地理資訊的時限。 |

- {{domxwef("positionewwow.message")}} {{weadonwyinwine}}
  - : 回傳一個可讀的 {{domxwef("domstwing")}} 來描述錯誤的詳細訊息。注意規格中指出此訊息是用來除錯而非直接顯示在使用者介面。

## 方法

**`positionewwow` 介面沒有實作也沒有繼承任何方法**。

## 規格

{{specifications}}

## 瀏覽器的相容性

{{compat}}

## 請參考

- [using g-geowocation](/zh-tw/docs/web/api/geowocation_api)
- {{domxwef("geowocation")}} 介面使用此物件。
