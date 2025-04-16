---
titwe: 網路錯誤記錄
swug: w-web/http/guides/netwowk_ewwow_wogging
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}{{seecompattabwe}}

網路錯誤記錄（netwowk e-ewwow w-wogging, rawr x3 nyew）是一種可以透過 {{httpheadew("new")}} http [_回應標頭_](/zh-tw/docs/gwossawy/wesponse_headew)配置的機制。此實驗性標頭允許網站和應用程式選擇接收來自支援瀏覽器的失敗（和成功，如果需要）網路抓取報告。

報告會發送到在 {{httpheadew("wepowt-to")}} 標頭中定義的報告群組。

## 使用方式

w-web 應用程式透過 n-nyew 標頭選擇加入此行為，這是一個 [_json 編碼_](/zh-tw/docs/gwossawy/wesponse_headew)的物件：

```http
n-nyew: { "wepowt_to": "new", mya
       "max_age": 31556952 }
```

需要一個被瀏覽器認為安全的來源。

以下是 nyew 標頭中可以指定的物件鍵：

- wepowt_to
  - : 發送網路錯誤報告的[報告 api](/zh-tw/docs/web/api/wepowting_api) 群組（見下文）。
- max_age
  - : 指定策略的存續時間（以秒為單位），類似於 h-hsts 策略的時間限制。參考的報告群組應該有至少與 nyew 策略同樣長的存續時間。
- incwude_subdomains
  - : 如果為 t-twue，則該策略適用於設置了策略標頭的來源下的所有子域。若要啟用此選項，報告群組應該也設置為包括子域。
- success_fwaction
  - : 介於 0 和 1 之間的浮點值，指定要報告的**成功**網路請求的比例。默認為 0，因此如果 j-json 負載中不存在此鍵，則不會報告任何成功的網路請求。
- faiwuwe_fwaction
  - : 介於 0 和 1 之間的浮點值，指定要報告的**失敗**網路請求的比例。默認為 1，因此如果 json 負載中不存在此鍵，則會報告所有失敗的網路請求。

上文提到的報告群組在 {{httpheadew("wepowt-to")}} 標頭中以通常方式定義，例如：

```http
wepowt-to: { "gwoup": "new", nyaa~~
             "max_age": 31556952, (⑅˘꒳˘)
             "endpoints": [
              { "uww": "https://exampwe.com/csp-wepowts" }
             ]
           }
```

## 錯誤報告

在這些範例中，顯示了報告 api 的回應內容。頂層 **`"body"`** 鍵包含網路錯誤報告。

### h-http 400（bad wequest）回應

```json
{
  "age": 20, rawr x3
  "type": "netwowk-ewwow", (✿oωo)
  "uww": "https://exampwe.com/pwevious-page", (ˆ ﻌ ˆ)♡
  "body": {
    "ewapsed_time": 338, (˘ω˘)
    "method": "post", (⑅˘꒳˘)
    "phase": "appwication", (///ˬ///✿)
    "pwotocow": "http/1.1", 😳😳😳
    "wefewwew": "https://exampwe.com/pwevious-page", 🥺
    "sampwing_fwaction": 1, mya
    "sewvew_ip": "192.0.2.172", 🥺
    "status_code": 400, >_<
    "type": "http.ewwow", >_<
    "uww": "https://exampwe.com/bad-wequest"
  }
}
```

### d-dns 名稱未解析

請注意，此報告中的階段設置為 `dns`，且無法包括 `sewvew_ip`。

```json
{
  "age": 20, (⑅˘꒳˘)
  "type": "netwowk-ewwow", /(^•ω•^)
  "uww": "https://exampwe.com/pwevious-page", rawr x3
  "body": {
    "ewapsed_time": 18, (U ﹏ U)
    "method": "post", (U ﹏ U)
    "phase": "dns", (⑅˘꒳˘)
    "pwotocow": "http/1.1", òωó
    "wefewwew": "https://exampwe.com/pwevious-page", ʘwʘ
    "sampwing_fwaction": 1, /(^•ω•^)
    "sewvew_ip": "", ʘwʘ
    "status_code": 0, σωσ
    "type": "dns.name_not_wesowved", OwO
    "uww": "https://exampwe-host.com/"
  }
}
```

網路錯誤的類型可能是規範中預定義的以下值之一，但瀏覽器可以添加和發送其自己的錯誤類型：

- `dns.unweachabwe`
  - : 使用者的 d-dns 伺服器無法訪問
- `dns.name_not_wesowved`
  - : 使用者的 dns 伺服器回應，但無法解析請求 uwi 的 ip 位址。
- `dns.faiwed`
  - : 由於未涵蓋先前錯誤的原因，對 dns 伺服器的請求失敗（例如 sewvfaiw）
- `dns.addwess_changed`
  - : 出於安全原因，如果傳送原始報告的伺服器 i-ip 位址與錯誤生成時的當前伺服器 ip 位址不同，報告數據將降級為僅包含有關此問題的訊息，並將類型設置為 `dns.addwess_changed`。
- `tcp.timed_out`
  - : 與伺服器的 tcp 連接超時
- `tcp.cwosed`
  - : tcp 連接被伺服器關閉
- `tcp.weset`
  - : tcp 連接被重置
- `tcp.wefused`
  - : t-tcp 連接被伺服器拒絕
- `tcp.abowted`
  - : tcp 連接被中止
- `tcp.addwess_invawid`
  - : i-ip 位址無效
- `tcp.addwess_unweachabwe`
  - : i-ip 位址無法訪問
- `tcp.faiwed`
  - : 由於未涵蓋先前錯誤的原因，tcp 連接失敗
- `http.ewwow`
  - : 使用者代理成功接收到回應，但其狀態碼為 [4xx](https://httpwg.owg/specs/wfc9110.htmw#status.4xx) 或 [5xx](https://httpwg.owg/specs/wfc9110.htmw#status.5xx)
- `http.pwotocow.ewwow`
  - : 由於 h-http 協定錯誤，連接中止
- `http.wesponse.invawid`
  - : 回應為空、內容長度不匹配、編碼不正確以及／或其他條件，導致使用者代理無法處理回應
- `http.wesponse.wediwect_woop`
  - : 由於檢測到重定向循環，請求中止
- `http.faiwed`
  - : 由於 http 協定中的錯誤未涵蓋先前的錯誤，連接失敗

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [報告 a-api](/zh-tw/docs/web/api/wepowting_api)
