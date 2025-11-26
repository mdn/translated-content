---
title: Accept-Ranges 標頭
slug: Web/HTTP/Reference/Headers/Accept-Ranges
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

HTTP **`Accept-Ranges`** {{Glossary("response header", "回應標頭")}}是伺服器用來通知其支援的[範圍請求](/zh-TW/docs/Web/HTTP/Guides/Range_requests)，允許用戶端請求資源的一部分或多個部分。此標頭的值表示可用來定義範圍的單位。

例如，回應中若包含 `Accept-Ranges` 標頭，則表示該伺服器能夠在下載中斷後*恢復*下載，而不需用戶端從頭重新傳輸。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Response header", "回應標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止的請求標頭")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## 指令

- `<range-unit>`
  - : 伺服器支援的範圍單位。雖然 `bytes` 是 {{RFC("7233")}} 正式定義的唯一範圍單位。範圍單位在 [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) 中註冊。
- `none`
  - : 不支援任何範圍單位。這相等於省略標頭，因此很少使用。如果服器不支援範圍請求，傳統瀏覽器會利用該值來禁用或移除下載管理器中的暫停按鈕。

## 範例

```http
Accept-Ranges: bytes
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 範圍請求](/zh-TW/docs/Web/HTTP/Guides/Range_requests) 指南
- [HTTP 條件請求](/zh-TW/docs/Web/HTTP/Guides/Conditional_requests) 指南
- {{HTTPHeader("Range")}}、{{HTTPHeader("If-Range")}} 請求標頭
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
