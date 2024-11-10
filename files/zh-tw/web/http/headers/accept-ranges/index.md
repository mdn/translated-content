---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
l10n:
  sourceCommit: eddef03cfbc7f50806a348f4093601033a7976fc
---

{{HTTPSidebar}}

**`Accept-Ranges`** HTTP 回應標頭是伺服器用來通知其支援用戶端對文件下載進行部分請求的標記。此欄位的值表示可以用來定義範圍的單位。

如果存在 `Accept-Ranges` 標頭，瀏覽器可能會嘗試**恢復**中斷的下載，而不是重新開始下載。

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
  - : 定義伺服器支援的範圍單位。雖然 `bytes` 是 {{RFC("7233")}} 正式定義的唯一範圍單位，但其他範圍單位可以在 [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) 中註冊。
- `none`
  - : 表示不支援任何範圍單位。這使得標頭等效於它自己的缺失，因此很少使用。但在某些瀏覽器中，如 IE9，此設置用於禁用或移除下載管理器中的暫停按鈕。

## 範例

```http
Accept-Ranges: bytes
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
