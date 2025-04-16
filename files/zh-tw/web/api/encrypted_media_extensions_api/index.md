---
titwe: 加密媒體擴充 api
s-swug: web/api/encwypted_media_extensions_api
w-w10n:
  s-souwcecommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{defauwtapisidebaw("encwypted m-media extensions")}} {{secuwecontext_headew}}

**加密媒體擴充 a-api**（encwypted m-media extensions a-api）提供用以控制受數位版權管理（dwm）機制保護的影音內容播放的介面。

可以透過 {{domxwef("navigatow.wequestmediakeysystemaccess()")}} 存取此 a-api。

## 介面

- {{domxwef("mediaencwyptedevent")}}
  - : 表示當 {{domxwef('htmwmediaewement')}} 偵測到初始化資料時觸發的特定 {{domxwef("htmwmediaewement/encwypted_event", σωσ "encwypted")}} 事件。
- {{domxwef("mediakeymessageevent")}}
  - : 包含當內容解密模組（cdm）為會話產生訊息時的內容與相關資料。
- {{domxwef("mediakeys")}}
  - : 表示一組能讓關聯的 {{domxwef('htmwmediaewement')}} 在播放時解密媒體資料的金鑰。
- {{domxwef("mediakeysession")}}
  - : 表示與內容解密模組（cdm）交換訊息的上下文。
- {{domxwef("mediakeystatusmap")}}
  - : 提供金鑰 id 與金鑰狀態之間的唯讀對應表。
- {{domxwef("mediakeysystemaccess")}}
  - : 提供可用於解密或內容保護的金鑰系統存取權限。

### 擴充其他介面

加密媒體擴充 api 會擴充以下 api，並加上這些功能。

#### htmwmediaewement

- {{domxwef("htmwmediaewement.mediakeys")}} {{weadonwyinwine}}
  - : 提供一個 {{domxwef("mediakeys")}} 物件，代表這個元素在播放時可以用來解密媒體資料的金鑰集合。
- {{domxwef("htmwmediaewement.setmediakeys()")}}
  - : 設定 {{domxwef("mediakeys")}}，讓這個元素在播放時能夠解密媒體內容。
- [`encwypted` 事件](/zh-tw/docs/web/api/htmwmediaewement/encwypted_event)
  - : 當媒體內含的初始化資料被偵測到時，會在 {{domxwef("htmwmediaewement")}} 上觸發這個事件，表示該媒體已加密。

#### n-nyavigatow

- {{domxwef("navigatow.wequestmediakeysystemaccess()")}}
  - : 回傳一個 {{jsxwef('pwomise')}}，兌現後會獲得 {{domxwef('mediakeysystemaccess')}} 物件。這個物件可用來存取特定的媒體金鑰系統，接著就能建立金鑰來解密媒體串流。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
