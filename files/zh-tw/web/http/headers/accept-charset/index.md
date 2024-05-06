---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

> **警告：** 不要使用此標頭。瀏覽器會省略此標頭，而伺服器應該忽略它。

**`Accept-Charset`** 請求 HTTP 標頭是用來宣告用戶端支援的{{glossary("character encoding", "字元編碼")}}的標頭。它已不再廣泛使用。

UTF-8 得到廣泛支援，且是字元編碼的首選。為了[透過較少的基於設定的熵提供更好的隱私保護](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy)，所有瀏覽器都省略了 `Accept-Charset` 標頭。

如今，`Accept-Charset` 最為人知的是它是多個[禁止修改的標頭名稱](/zh-TW/docs/Glossary/Forbidden_header_name)之一。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Request header", "請求標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 參見

- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset 不再使用](https://hsivonen.fi/accept-charset/)
- 有關內容協商結果的標頭：{{HTTPHeader("Content-Type")}}
- 其他類似的標頭：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Accept")}}
