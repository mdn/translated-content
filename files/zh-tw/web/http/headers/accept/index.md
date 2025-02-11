---
title: Accept
slug: Web/HTTP/Headers/Accept
l10n:
  sourceCommit: f341bd4728d3448faf6b9fc3b45980c35c067f25
---

{{HTTPSidebar}}

HTTP **`Accept`** {{Glossary("request header", "請求標頭")}}和{{Glossary("response header", "回應標頭")}}表示發送者能夠理解的內容類型，以 [MIME 類型](/zh-TW/docs/Web/HTTP/MIME_types)表示。在請求中，伺服器使用[內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)選擇其中一個提案，並使用 {{HTTPHeader("Content-Type")}} 回應標頭通知用戶選擇的內容類型。在回應中，它提供伺服器能夠理解的內容類型訊息，以便在後續對資源的請求中使用該內容類型。

瀏覽器根據請求的上下文設置此標頭的必要值。例如，瀏覽器在請求 CSS 樣式表、圖片、視訊或腳本時使用不同的值。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Request header", "請求標頭")}}、{{Glossary("Response header", "回應標頭")}}</tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS 安全清單回應標頭")}}
      </th>
      <td>
        是
      </td>
    </tr>
  </tbody>
</table>

\* 值不能包含 [CORS 不安全請求標頭字元](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte)，包括 `"():<>?@[\]{},`，刪除 `0x7F`，以及控制字元 `0x00` 到 `0x19`（除了 Tab `0x09`）。

## 語法

```http
Accept: <media-type>/<MIME_subtype>
Accept: <media-type>/*
Accept: */*

// 多種類型，以品質值語法加權
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## 指令

- `<media-type>/<subtype>`
  - : 單一、精確的[媒體類型](/zh-TW/docs/Web/HTTP/MIME_types)，如 `text/html`。
- `<media-type>/*`
  - : 沒有子類型的媒體類型。例如，`image/*` 對應於 `image/png`、`image/svg`、`image/gif` 和其他圖片類型。
- `*/*`
  - : 任何媒體類型。
- `;q=`（q 因子加權）
  - : 使用相對{{Glossary("quality values", "品質值")}}表示的偏好值，稱為*權重*。

## 範例

### 使用預設的 Accept 請求標頭

使用命令行工具如 [curl](https://curl.se/) 和 [wget](https://www.gnu.org/software/wget/) 發出的 HTTP 請求使用 `*/*` 作為預設的 `Accept` 值：

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

瀏覽器導航通常具有以下 `Accept` 請求標頭值：

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

在接收到文件後，對 `developer.mozilla.org` 範例中的圖片請求的預設 `Accept` 值如下所示：

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### 配置 Accept 請求標頭以獲取 JSON 回應

涉及 API 互動的系統通常請求 `application/json` 回應。以下是一個 {{HTTPMethod("GET")}} 請求的範例，其中用戶特別請求 JSON 回應：

```http
GET /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
Accept: application/json
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)
- [默認 Accept 值列表](/zh-TW/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- [CORS 安全清單請求標頭限制](/zh-TW/docs/Glossary/CORS-safelisted_request_header#additional_restrictions)
- 具有內容協商結果的標頭：{{HTTPHeader("Content-Type")}}
- 其他類似的標頭：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Language")}}
