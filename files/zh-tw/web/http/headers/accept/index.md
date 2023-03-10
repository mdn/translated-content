---
title: Accept
slug: Web/HTTP/Headers/Accept
---

{{HTTPSidebar}}

**`Accept`** HTTP 請求標頭（以 [MIME type](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 標示）會對伺服器告知用戶端可解讀的內容類型。伺服器可以透過 [content negotiation](/zh-TW/docs/Web/HTTP/Content_negotiation) 來選用可行的協定，並以 {{HTTPHeader("Content-Type")}} 標頭告知用戶端。針對本標頭，瀏覽器可以根據完成請求的脈絡，來決定適合的數值：像是擷取 CSS 時，給予的值就會和圖片、影像、腳本不一樣。

| 標頭類型                                                     | {{Glossary("Request header")}}                                                                                                                               |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name")}}             | no                                                                                                                                                                     |
| {{Glossary("CORS-safelisted request header")}} | yes, with the additional restriction that values can't contain a _CORS-unsafe request header byte_: `"():<>?@[\]{}`, Delete, Tab and control characters: 0x00 to 0x19. |

## 語法

```plain
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## 指令

- `<MIME_type>/<MIME_subtype>`
  - : 一個精確的 [MIME type](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)，例如`text/html`。
- `<MIME_type>/*`
  - : 一個不指定子類的 MIME type。`image/*` 會配對到 `image/png`, `image/svg`, `image/gif` 和等圖片類型。
- `*/*`
  - : 所有 MIME type
- `;q=` (q-factor weighting)
  - : Any value used is placed in an order of preference expressed using relative [quality value](/zh-TW/docs/Glossary/Quality_values) called the _weight_.

## 示例

```plain
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

- HTTP [content negotiation](/zh-TW/docs/Web/HTTP/Content_negotiation)
- Header with the result of the content negotiation: {{HTTPHeader("Content-Type")}}
- 類似標頭：{{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
