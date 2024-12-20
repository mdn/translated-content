---
title: Server
slug: Web/HTTP/Headers/Server
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Server`** 標頭描述了處理請求的原始伺服器（即生成回應的伺服器）所使用的軟體。

> [!WARNING]
> 避免過於詳細的 `Server` 值，因為它們可能會暴露信息，使攻擊者更容易利用已知的安全漏洞。

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
Server: <product>
```

## 指令

- \<product>
  - : 處理請求的軟體或產品的名稱。通常格式類似於 {{HTTPHeader('User-Agent')}}。

包含多少細節是一個值得平衡的問題；暴露作業系統版本可能是個壞主意，如前面關於過於詳細的值的警告所述。然而，暴露 Apache 版本幫助瀏覽器解決了這些版本中與 {{HTTPHeader('Content-Encoding')}} 和 {{HTTPHeader('Range')}} 結合使用的錯誤。

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
