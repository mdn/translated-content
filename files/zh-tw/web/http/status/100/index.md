---
title: 100 Continue
slug: Web/HTTP/Status/100
---

{{HTTPSidebar}}

HTTP **`100 Continue`** 訊息狀態回應碼表示，目前為止的一切完好，用戶端應該繼續完成請求，或當請求已經完成的狀態下應忽略此訊息。

若要使伺服器確認請求標頭，用戶端必須在最初請求的標頭中，傳送{{HTTPHeader("Expect")}}`: 100-continue` ，並且在傳送主體前，接收 `100 Continue` 狀態碼。

## 狀態

```plain
100 Continue
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
