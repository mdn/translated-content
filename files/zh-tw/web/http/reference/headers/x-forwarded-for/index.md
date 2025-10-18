---
title: X-Forwarded-For
slug: Web/HTTP/Reference/Headers/X-Forwarded-For
---

**`X-Forwarded-For`**（XFF）標頭是辨識用戶端透過 HTTP 代理或負載平衡 IP 位置來源的，事實上的標準。如果流量是在伺服器與用戶端中間擷取，伺服器日誌就只會代理或負載平衡的 IP 位置。如果要檢查用戶端的 IP 的原始來源，就會去檢查 `X-Forwarded-For` 請求標頭。

這個標頭用於除錯、分析、產生與位置相關的內容、透過設計也洩漏部分隱私資訊，例如用戶端的 IP 位置。因此在部署此標頭時，必須考慮到用戶的隱私。

此 HTTP 標頭的標準化版本為 {{HTTPHeader("Forwarded")}} 標頭。

`X-Forwarded-For` 也是個說明 email-message 是從哪個帳戶轉發的 email-header。

| 標頭屬性                              | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 語法

```http
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

## 指令

- \<client>
  - : 用戶端的 IP 位置
- \<proxy1>, \<proxy2>
  - : 如果請求用上了多個代理，則列出每個後續代理的 IP 地址。也就是說，最右邊的 IP 位置，是最新代理的 IP 位置；最左邊的 IP 位置，是用戶端原始來源的 IP 位置。

## 示例

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
```

其他非標準變體：

```plain
# Used for some Google services
X-ProxyUser-Ip: 203.0.113.19
```

## 規範

任何版本都沒有被標準化。標準化版本的標頭為 {{HTTPHeader("Forwarded")}}。

## 參見

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
