---
title: 413 Content Too Large
slug: Web/HTTP/Reference/Status/413
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

HTTP **`413 Content Too Large`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示請求實體大於伺服器定義的限制。伺服器可能會關閉連接或返回一個 {{HTTPHeader("Retry-After")}} 標頭欄位。

在 {{rfc("9110")}} 之前，此狀態的回應詞為 **`Payload Too Large`**。這個訊息仍然被廣泛使用。

## 狀態

```http
413 Content Too Large
```

## 範例

### 超過檔案上傳限制

以下範例展示了當 [`<input type="file">`](/zh-TW/docs/Web/HTML/Reference/Elements/input/file) 元素包含影像檔案並透過 `method="post"` 送出表單時，用戶端可能發送的請求：

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...（二進位資料）
------Boundary1234--
```

如果對可處理的檔案大小有最大限制，伺服器可能會拒絕上傳，且回應主體包含帶有相關資訊的 `message`。

```http
HTTP/1.1 413 Content Too Large
Content-Type: application/json
Content-Length: 97

{
  "error": "上傳失敗",
  "message": "最大允許的上傳檔案大小為 4MB。",
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
