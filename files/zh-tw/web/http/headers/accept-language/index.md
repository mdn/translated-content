---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
l10n:
  sourceCommit: 9cf66d1b65a11aff2e158fc090dd62a0862aeec8
---

{{HTTPSidebar}}

**`Accept-Language`**  HTTP 請求標頭表示用戶端偏好的自然語言和地區設置。伺服器使用[內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)來選擇其中一個提議，並在回應標頭 {{HTTPHeader("Content-Language")}} 中告知用戶端所選擇的語言。瀏覽器根據其活動的用戶界面語言設置此標頭的所需值。用戶很少更改它，且不建議進行這樣的更改，因為這可能會導致[指紋識別](/zh-TW/docs/Glossary/Fingerprinting)。

當伺服器無法通過其他方式確定目標內容語言時（例如，使用依賴於明確用戶決策的特定 URL），此標頭作為提示。伺服器絕不應該覆蓋用戶明確選擇的語言。`Accept-Language` 的內容通常不受用戶控制（例如在旅行時）。用戶也可能希望以與用戶界面語言不同的語言訪問頁面。

當伺服器無法提供匹配語言的內容時，可能會返回 {{HTTPStatus("406")}}（Not Acceptable）錯誤碼。但是，這種行為很少實現以提高用戶體驗，在這種情況下伺服器通常會忽略 `Accept-Language` 標頭。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Request header", "請求標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS 安全清單請求標頭")}}
      </th>
      <td>
        是，但有額外限制，值只能是<code>0-9</code>、<code>A-Z</code>、<code>a-z</code>、空格或<code>*,-.;=</code>。
      </td>
    </tr>
  </tbody>
</table>

## 語法

```http
Accept-Language: <language>
Accept-Language: *

// 多種語言，使用質量值語法加權:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## 指令

- `<language>`
  - : 語言標籤（有時稱「為地區標識」符）。這包括表示語言的 2-3 個字母的基本語言標籤，可選地後面跟有以 `'-'` 分隔的附加子標籤。最常見的附加訊息是國家或地區變體（例如 `'zh-TW'` 或 `'fr-CA'`）或使用的字母類型（例如 `'sr-Latn'`）。其他變體，如正字法類型（`'de-DE-1996'`），通常不在此標頭的上下文中使用。
- `*`
  - : 任何語言。`'*'` 用作通配符。
- `;q=`（q 因子加權）
  - : 任何值，按相對的{{glossary("Quality values", "質量值")}}（_權重_）表示的優先順序排列。

## 範例

```http
Accept-Language: de
```

```http
Accept-Language: de-CH
```

```http
Accept-Language: en-US,en;q=0.5
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)
- 協商結果的標頭: {{HTTPHeader("Content-Language")}}
- 其他類似標頭: {{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept")}}
