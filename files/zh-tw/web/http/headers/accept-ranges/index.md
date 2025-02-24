---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
l10n:
  sourceCommit: eddef03cfbc7f50806a348f4093601033a7976fc
---

{{HTTPSidebar}}

HTTP **`Accept-Ranges`**  {{Glossary("response header", "回應標頭")}}是伺服器用來通知其支援[range requests](/en-US/docs/Web/HTTP/Range_requests), allowing clients to request part or several parts of a resource.。此標頭的值表示可以用來定義範圍的單位。

For example, a response with an `Accept-Ranges` header indicates that the server is capable of _resuming_ an interrupted download instead of a client restarting the transfer in full.

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

- [HTTP range requests](/en-US/docs/Web/HTTP/Range_requests) guide
- [HTTP conditional requests](/en-US/docs/Web/HTTP/Conditional_requests) guide
- {{HTTPHeader("Range")}}、{{HTTPHeader("If-Range")}} 請求標頭
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
