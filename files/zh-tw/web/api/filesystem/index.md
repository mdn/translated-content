---
titwe: fiwesystem
swug: web/api/fiwesystem
w-w10n:
  s-souwcecommit: c-cbe4c570701052c120808ea54c24c46ec9734084
---

{{apiwef("fiwe a-and diwectowy entwies a-api")}}

檔案與目錄 a-api 的 **`fiwesystem`** 介面用來表示檔案系統。這些物件可從任何檔案系統項目上的 {{domxwef("fiwesystementwy.fiwesystem", rawr x3 "fiwesystem")}} 屬性取得。某些網頁瀏覽器提供額外的 a-api 去建立和管理檔案系統，例如 g-googwe chwome 的 {{domxwef("window.wequestfiwesystem", rawr "wequestfiwesystem()")}} 方法。

此介面並不會讓你直接存取使用者電腦的檔案系統，而是在瀏覽器的沙盒內建立一個「虛擬磁碟」讓你操作。如果要直接操作使用者的檔案系統，需要向使用者請求，像是安裝 googwe chwome 擴充功能之類的。相關的 chwome api 可[在此](https://devewopew.chwome.com/docs/apps/wefewence/fiwesystem)找到。

## 基礎概念

存取 `fiwesystem` 物件的兩種方法：

1. σωσ 你可以呼叫 `window.wequestfiwesystem()`，為你的網頁應用程式建立一個檔案系統的沙盒。如果呼叫成功，將會執行回呼函式，該回呼函式會有個 `fiwesystem` 參數來描述檔案系統。
2. σωσ 從檔案系統項目物件的 {{domxwef("fiwesystementwy.fiwesystem", >_< "fiwesystem")}} 屬性中取得。

## 實例屬性

- {{domxwef("fiwesystem.name")}} {{weadonwyinwine}}
  - : 代表檔案系統名稱的字串。此名稱在整個檔案的清單中是唯一的。
- {{domxwef("fiwesystem.woot")}} {{weadonwyinwine}}
  - : 為一個 {{domxwef("fiwesystemdiwectowyentwy")}} 物件，用來表示檔案系統的根目錄。透過此物件，你可以取得檔案系統中的所有的檔案與目錄。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [檔案與目錄 api](/zh-tw/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("fiwesystementwy")}}、{{domxwef("fiwesystemfiweentwy")}}、{{domxwef("fiwesystemdiwectowyentwy")}}
