---
title: Accept-Language 標頭
slug: Web/HTTP/Reference/Headers/Accept-Language
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

HTTP **`Accept-Language`** {{Glossary("request header", "請求標頭")}}表示用戶端偏好的自然語言和地區設置。伺服器使用[內容協商](/zh-TW/docs/Web/HTTP/Guides/Content_negotiation)來選擇其中一個提議，並在回應標頭 {{HTTPHeader("Content-Language")}} 中告知用戶端所選擇的語言。瀏覽器根據其活動的用戶界面語言設置此標頭的所需值。用戶也可以通過瀏覽器設定配置其他偏好的語言。

`Accept-Language` 標頭通常列出與 {{domxref("navigator.languages")}} 屬性相同的地區設置，並具有遞減的 `q` 值（[品質值](/zh-TW/docs/Glossary/Quality_values)）。一些瀏覽器如 Chrome 和 Safari 在 `Accept-Language` 中添加僅語言的回退標籤。例如，當 `navigator.languages` 是 `["en-US", "zh-CN"]` 時，`Accept-Language` 可能是 `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`。出於隱私目的（減少{{Glossary("fingerprinting", "指紋")}}），`Accept-Language` 和 `navigator.languages` 可能不包括用戶偏好的完整列表。例如，在 Safari（永遠）和 Chrome 的無痕模式中僅列出一種語言。

當伺服器無法通過其他方式確定目標內容語言時（例如，使用依賴於明確用戶決策的特定 URL），此標頭作為提示。伺服器絕不應該覆蓋用戶明確選擇的語言。`Accept-Language` 的內容通常不受用戶控制（例如在旅行時）。用戶也可能希望以與用戶界面語言不同的語言訪問頁面。

當伺服器無法提供匹配語言的內容時，可能會返回 {{HTTPStatus("406", "406 Not Acceptable")}} 錯誤碼，但這種情況很少實現。伺服器通常會忽略 `Accept-Language` 標頭，並在這種情況下發送最合適的資源以提供更好的用戶體驗。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Request header", "請求標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止的請求標頭")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS 安全清單請求標頭")}}
      </th>
      <td>
        是*。
      </td>
    </tr>
  </tbody>
</table>

\* 值只能是 `0-9`、`A-Z`、`a-z`、空格或字符 `*,-.;=`。

## 語法

```http
Accept-Language: <language>
Accept-Language: *

// 多種語言，使用品質值語法加權：
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## 指令

- `<language>`
  - : 語言標籤（有時稱為「地區標識符」）。這包括一個表示語言的 2-3 個字母的基本語言標籤，後面可以選擇性地跟隨由 `-` 分隔的附加子標籤。最常見的附加訊息是國家或地區變體（如 `en-US` 或 `fr-CA`）或使用的字母類型（如 `sr-Latn`）。其他變體，如正字法類型（`de-DE-1996`），通常不在此標頭的上下文中使用。
- `*`（萬用字元）
  - : 任何不匹配 `Accept-Language` 字段中其他語言的語言。
- `;q=`（q 因子加權）
  - : 任何值按相對{{Glossary("Quality values", "品質值")}}表示的偏好順序排列。品質值默認為 `1`。

## 範例

### 使用 Accept-Language 標頭

以下請求偏好德語，使用 `de` 基本語言：

```http
Accept-Language: de
```

### 在 Accept-Language 中使用品質值

以下請求表示對丹麥語的偏好更強，但以低優先級接受英式英語和其他類型的英語：

```http
Accept-Language: da, en-gb;q=0.8, en;q=0.7
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Guides/Content_negotiation)
- 協商結果的標頭：{{HTTPHeader("Content-Language")}}
- 其他類似標頭：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept")}}
