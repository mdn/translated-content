---
title: 網路錯誤記錄（NEL）
short-title: 網路錯誤記錄
slug: Web/HTTP/Guides/Network_Error_Logging
l10n:
  sourceCommit: c65a961090cf305a88fd496d1383a6931280cb37
---

{{SeeCompatTable}}

網路錯誤記錄（Network Error Logging, NEL）是一種可以透過 {{HTTPHeader("NEL")}} HTTP [_回應標頭_](/zh-TW/docs/Glossary/Response_header)配置的機制。此實驗性標頭允許網站和應用程式選擇接收來自支援瀏覽器的失敗（和成功，如果需要）網路抓取報告。

報告會發送到在 {{HTTPHeader("Report-To")}} 標頭中定義的報告群組。

## 使用方式

Web 應用程式透過 NEL 標頭選擇加入此行為，這是一個 [_JSON 編碼_](/zh-TW/docs/Glossary/Response_header)的物件：

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

需要一個被瀏覽器認為安全的來源。

以下是 NEL 標頭中可以指定的物件鍵：

- report_to
  - : 發送網路錯誤報告的[報告 API](/zh-TW/docs/Web/API/Reporting_API) 群組（見下文）。
- max_age
  - : 指定策略的存續時間（以秒為單位），類似於 HSTS 策略的時間限制。參考的報告群組應該有至少與 NEL 策略同樣長的存續時間。
- include_subdomains
  - : 如果為 true，則該策略適用於設置了策略標頭的來源下的所有子域。若要啟用此選項，報告群組應該也設置為包括子域。
- success_fraction
  - : 介於 0 和 1 之間的浮點值，指定要報告的**成功**網路請求的比例。默認為 0，因此如果 JSON 負載中不存在此鍵，則不會報告任何成功的網路請求。
- failure_fraction
  - : 介於 0 和 1 之間的浮點值，指定要報告的**失敗**網路請求的比例。默認為 1，因此如果 JSON 負載中不存在此鍵，則會報告所有失敗的網路請求。

上文提到的報告群組在 {{HTTPHeader("Report-To")}} 標頭中以通常方式定義，例如：

```http
Report-To: { "group": "nel",
             "max_age": 31556952,
             "endpoints": [
              { "url": "https://example.com/csp-reports" }
             ]
           }
```

## 錯誤報告

在這些範例中，顯示了報告 API 的回應內容。頂層 **`"body"`** 鍵包含網路錯誤報告。

### HTTP 400（Bad Request）回應

```json
{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 338,
    "method": "POST",
    "phase": "application",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "192.0.2.172",
    "status_code": 400,
    "type": "http.error",
    "url": "https://example.com/bad-request"
  }
}
```

### DNS 名稱未解析

請注意，此報告中的階段設置為 `dns`，且無法包括 `server_ip`。

```json
{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 18,
    "method": "POST",
    "phase": "dns",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "",
    "status_code": 0,
    "type": "dns.name_not_resolved",
    "url": "https://example-host.com/"
  }
}
```

網路錯誤的類型可能是規範中預定義的以下值之一，但瀏覽器可以添加和發送其自己的錯誤類型：

- `dns.unreachable`
  - : 使用者的 DNS 伺服器無法訪問
- `dns.name_not_resolved`
  - : 使用者的 DNS 伺服器回應，但無法解析請求 URI 的 IP 位址。
- `dns.failed`
  - : 由於未涵蓋先前錯誤的原因，對 DNS 伺服器的請求失敗（例如 SERVFAIL）
- `dns.address_changed`
  - : 出於安全原因，如果傳送原始報告的伺服器 IP 位址與錯誤生成時的當前伺服器 IP 位址不同，報告數據將降級為僅包含有關此問題的訊息，並將類型設置為 `dns.address_changed`。
- `tcp.timed_out`
  - : 與伺服器的 TCP 連接超時
- `tcp.closed`
  - : TCP 連接被伺服器關閉
- `tcp.reset`
  - : TCP 連接被重置
- `tcp.refused`
  - : TCP 連接被伺服器拒絕
- `tcp.aborted`
  - : TCP 連接被中止
- `tcp.address_invalid`
  - : IP 位址無效
- `tcp.address_unreachable`
  - : IP 位址無法訪問
- `tcp.failed`
  - : 由於未涵蓋先前錯誤的原因，TCP 連接失敗
- `http.error`
  - : 使用者代理成功接收到回應，但其狀態碼為 [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx) 或 [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx)
- `http.protocol.error`
  - : 由於 HTTP 協定錯誤，連接中止
- `http.response.invalid`
  - : 回應為空、內容長度不匹配、編碼不正確以及／或其他條件，導致使用者代理無法處理回應
- `http.response.redirect_loop`
  - : 由於檢測到重定向循環，請求中止
- `http.failed`
  - : 由於 HTTP 協定中的錯誤未涵蓋先前的錯誤，連接失敗

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [報告 API](/zh-TW/docs/Web/API/Reporting_API)
