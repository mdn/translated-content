---
title: Server 標頭
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

HTTP **`Server`** {{Glossary("response header", "回應標頭")}}描述了處理請求並產生回應的原始伺服器所使用的軟體。

透過此標頭宣告伺服器類型與版本的好處在於，它有助於分析以及識別特定互通性問題的普及程度。從歷史上看，用戶端曾利用伺服器版本資訊來避開已知的限制，例如某些軟體版本對[範圍請求](/zh-TW/docs/Web/HTTP/Guides/Range_requests)的支援不一致。

> [!WARNING]
> 回應中包含此標頭，特別是當其包含伺服器軟體的詳細實作資訊時，可能會使已知的漏洞更容易被偵測到。

基於前述的安全考量以及回應延遲，不建議在 `Server` 標頭中提供過於詳細的資訊。是否隱藏此標頭中的資訊能帶來多少實際好處仍有爭議，因為仍可透過其他方式對伺服器軟體進行指紋識別。整體而言，更穩健的伺服器安全策略是確保軟體定期更新或修補已知漏洞。

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
Server: <product>
```

## 指令

- `<product>`
  - : 處理請求的軟體或產品名稱。通常格式類似於 {{HTTPHeader('User-Agent')}}。

## 範例

```http
Server: Apache/2.4.1 (Unix)
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Allow")}}
- [HTTP Observatory](/zh-TW/observatory)
- [透過 HTTP 標頭防止資訊洩露](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers)——OWASP 安全標頭專案
