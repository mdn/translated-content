---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

超文本傳輸協定（HTTP）**`406 Not Acceptable`** 用戶端錯誤回應碼表示伺服器無法產生與請求的主动[內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)標頭中定義的可接受值清單匹配的回應，並且伺服器不願意提供默認表示。

主動內容協商標頭包括：

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

在實際應用中，此錯誤幾乎不使用。伺服器不使用這個錯誤碼來回應，這對最終用戶來說是晦澀難解且難以修復的，而是忽略相應的標頭並向用戶提供實際的頁面。假設即使用戶可能不完全滿意，他們也會選擇這樣做，而不是選擇一個錯誤的狀態碼。

如果伺服器返回這樣的錯誤狀態，消息的正文應該包含資源的可用表示清單，允許用戶在其中進行選擇。

## 狀態

```http
406 Not Acceptable
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)
