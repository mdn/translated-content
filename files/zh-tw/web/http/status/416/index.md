---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

超文本傳輸協定（HTTP）**`416 Range Not Satisfiable`** 錯誤回應碼表示伺服器無法提供請求的範圍。最可能的原因是文件不包含這樣的範圍，或者 {{HTTPHeader("Range")}} 標頭值雖然在語法上是正確的，但卻毫無意義。

`416` 回應消息包含一個 {{HTTPHeader("Content-Range")}}，指示了一個不滿足的範圍（即 `'*'`），後跟一個 `'/'` 和資源的當前長度。例如 `Content-Range: bytes */12777`

面對這個錯誤，瀏覽器通常會中止操作（例如下載將被視為不可恢復），或者再次請求整個文件。

## 狀態

```http
416 Range Not Satisfiable
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus(206)}} `Partial Content`
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
