---
title: 加密媒體擴充 API
slug: Web/API/Encrypted_Media_Extensions_API
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{DefaultAPISidebar("Encrypted Media Extensions")}} {{securecontext_header}}

加密媒體擴充 API（Encrypted Media Extensions API） 提供介面，用以控制受數位版權管理（DRM）機制保護的影音內容播放。

可以透過 {{domxref("Navigator.requestMediaKeySystemAccess()")}} 存取此 API。

## 介面

- {{domxref("MediaEncryptedEvent")}}
  - : 表示當 {{domxref('HTMLMediaElement')}} 偵測到初始化資料時觸發的 {{domxref("HTMLMediaElement/encrypted_event", "encrypted")}} 特定加密事件 。
- {{domxref("MediaKeyMessageEvent")}}
  - : 提供當內容解密模組（CDM）為會話產生訊息時所包含的內容與相關資料。
- {{domxref("MediaKeys")}}
  - : 表示一組能讓關聯的 {{domxref('HTMLMediaElement')}} 在播放時解密媒體資料的金鑰。
- {{domxref("MediaKeySession")}}
  - : 表示與內容解密模組（CDM）交換訊息的上下文。
- {{domxref("MediaKeyStatusMap")}}
  - : 提供金鑰 ID 與金鑰狀態之間的唯讀對應表。
- {{domxref("MediaKeySystemAccess")}}
  - : 提供可用於解密或內容保護的金鑰系統存取權限。

### Extensions to other interfaces

加密媒體擴充 API（Encrypted Media Extensions API） 會擴充以下 API，並加上這些功能。

#### HTMLMediaElement

- {{domxref("HTMLMediaElement.mediaKeys")}} {{readonlyinline}}
  - : 提供一個 {{domxref("MediaKeys")}} 物件，代表這個元素在播放時可以用來解密媒體資料的金鑰集合。
- {{domxref("HTMLMediaElement.setMediaKeys()")}}
  - : 設定 {{domxref("MediaKeys")}} ，讓這個元素在播放時能夠解密媒體內容。
- [`encrypted` event](/en-US/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : 當媒體內含的初始化資料被偵測到時，會觸發 {{domxref("HTMLMediaElement")}} 這個事件，表示該媒體已加密。

#### Navigator

- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
  - : 回傳一個 {{jsxref('Promise')}} ，解析後會獲得 {{domxref('MediaKeySystemAccess')}} 物件。這個物件可用來存取特定的媒體金鑰系統，接著就能建立金鑰來解密媒體串流。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
