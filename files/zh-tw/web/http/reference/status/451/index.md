---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Reference/Status/451
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`451 Unavailable For Legal Reasons`** [用戶端回應錯誤](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端回應錯誤)狀態碼表示用戶請求的資源由於法律原因而無法提供，例如遭受法律訴訟的網頁。

## 狀態

```http
451 Unavailable For Legal Reasons
```

## 範例

### 帶有 Link 標頭的回應

此範例回應來自 IETF RFC（參見下文），並包含對[《萬世魔星》](https://zh.wikipedia.org/wiki/蒙提·派森之布莱恩的一生)的參考。

> [!NOTE]
> {{HTTPHeader("Link")}} 標頭也可能包含 `rel="blocked-by"` 關係，識別實施封鎖的實體，而不是強制執行封鎖的任何其他實體。

任何試圖識別最終負責資源不可用的實體的嘗試都應該放在響應主體中，而不是在 `rel="blocked-by"` 連接中。這包括對造成內容被刪除的法律要求的人或組織的名稱。

```http
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html

<html>
      <head><title>Unavailable For Legal Reasons</title></head>
      <body>
            <h1>Unavailable For Legal Reasons</h1>
            <p>此請求可能無法在羅馬行省猶太行省處理，因為《尤利亞叛國法》禁止存取被認定由猶太人民陣線運營的伺服器上所託管的資源。</p>
      </body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [維基百科：HTTP 451](https://zh.wikipedia.org/wiki/HTTP_451)
- [維基百科：華氏 451 度](https://zh.wikipedia.org/wiki/華氏451度)（該回應碼的數字詞源）
