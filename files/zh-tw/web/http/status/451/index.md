---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

超文本傳輸協定（HTTP）**`451 Unavailable For Legal Reasons`** 用戶端錯誤回應碼表示用戶請求的資源由於法律原因而無法提供，例如遭受法律訴訟的網頁。

## 狀態

```http
451 Unavailable For Legal Reasons
```

## 範例

此範例回應來自 IETF RFC（參見下文），並包含對[《萬世魔星》](https://zh.wikipedia.org/wiki/蒙提·派森之布莱恩的一生)的參考。

> **備註：** {{HTTPHeader("Link")}} 標頭也可能包含 `rel="blocked-by"` 關係，識別實施封鎖的實體，而不是強制執行封鎖的任何其他實體。

任何試圖識別最終負責資源不可用的實體的嘗試都應該放在響應主體中，而不是在 `rel="blocked-by"` 連接中。這包括對造成內容被刪除的法律要求的人或組織的名稱。

```http
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html

<html>
      <head><title>Unavailable For Legal Reasons</title></head>
      <body>
            <h1>Unavailable For Legal Reasons</h1>
            <p>This request may not be serviced in the Roman Province
            of Judea due to the Lex Julia Majestatis, which disallows
            access to resources hosted on servers deemed to be
            operated by the People's Front of Judea.</p>
      </body>
</html>
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [維基百科：HTTP 451](https://zh.wikipedia.org/wiki/HTTP_451)
- [維基百科：華氏 451 度](https://zh.wikipedia.org/wiki/華氏451度)（該回應碼的數字詞源）
