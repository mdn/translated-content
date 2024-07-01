---
title: Accept
slug: Web/HTTP/Headers/Accept
l10n:
  sourceCommit: 7aab76c49ae49d606b4958f8dc8cd1269fb7b9b6
---

{{HTTPSidebar}}

**`Accept`** HTTP 請求標頭表示用戶端能夠理解的內容類型，表達為 [MIME 類型](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)。伺服器使用[內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)從提案中選擇一個並通過 {{HTTPHeader("Content-Type")}} 回應標頭通知客戶端選擇。瀏覽器根據請求的上下文設置此標頭的必要值。例如，瀏覽器在擷取 CSS 樣式表、圖片、影片或腳本時，在請求中使用不同的值。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Response header", "回應標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS 安全清單回應標頭")}}
      </th>
      <td>
        是，附加限制為值不能包含<em>不安全的 CORS 請求標頭字節</em>：0x00-0x1F（除了 0x09（HT））、<code>"():&#x3C;>?@[\]{}</code> 和 0x7F（DEL）。
      </td>
    </tr>
  </tbody>
</table>

## 語法

```http
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// 多種類型，以品質值語法加權：
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## 指令

- `<MIME_type>/<MIME_subtype>`
  - : 單一、精確的 [MIME 類型](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)，如 `text/html`。
- `<MIME_type>/*`
  - : 一個 MIME 類型，但沒有子類型。`image/*` 對應於 `image/png`、`image/svg`、`image/gif` 和其他圖片類型。
- `*/*`
  - : 任何 MIME 類型
- `;q=`（q 因子加權）
  - : 使用相對[品質值](/zh-TW/docs/Glossary/Quality_values)表達的偏好排序中放置的值，稱為*權重*。

## 範例

```http
Accept: text/html

Accept: image/*

// General default
Accept: */*

// Default for navigation requests
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)
- [默認 Accept 值列表](/zh-TW/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- 具有內容協商結果的標頭：{{HTTPHeader("Content-Type")}}
- 其他類似的標頭：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Language")}}
