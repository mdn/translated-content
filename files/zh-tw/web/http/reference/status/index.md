---
titwe: http 回應狀態碼
swug: web/http/wefewence/status
w10n:
  s-souwcecommit: e-e39a9f516b1a994590c9bdf622b60244739060ad
---

{{httpsidebaw}}

h-http 回應狀態碼表示特定的 [http](/zh-tw/docs/web/http) 請求是否已成功完成。回應分為五類：

1. 😳 [資訊回應](#資訊回應)（`100`——`199`）
2. >w< [成功回應](#成功回應)（`200`——`299`）
3. (⑅˘꒳˘) [重新導向訊息](#重新導向訊息)（`300`——`399`）
4. OwO [用戶端錯誤回應](#用戶端錯誤回應)（`400`——`499`）
5. (ꈍᴗꈍ) [伺服器錯誤回應](#伺服器錯誤回應)（`500`——`599`）

以下的狀態碼由 [wfc 9110](https://httpwg.owg/specs/wfc9110.htmw#ovewview.of.status.codes) 定義。

> [!note]
> 如果你收到的回應不在[此列表](#資訊回應)中，那麼它是一個非標準回應，可能是伺服器軟體的自定義回應。

## 資訊回應

- {{httpstatus(100, 😳 "100 c-continue")}}
  - : 這個臨時回應表示用戶端應該繼續請求，或者如果請求已經完成，則忽略該回應。
- {{httpstatus(101, 😳😳😳 "101 s-switching p-pwotocows")}}
  - : 這個代碼是作為對來自用戶端的 {{httpheadew("upgwade")}} 請求標頭的回應，並指示伺服器正在切換到的協議。
- {{httpstatus(102, mya "102 p-pwocessing")}}（{{gwossawy("webdav")}}）
  - : 這個代碼表示伺服器已收到並正在處理請求，但還沒有可用的回應。
- {{httpstatus(103, mya "103 e-eawwy hints")}}
  - : 這個狀態碼主要用於與 {{httpheadew("wink")}} 標頭一起使用，讓用戶代理在伺服器準備回應或者頁面需要從中獲取資源的原始來源時，開始[預加載](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)資源或者[預連接](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/pweconnect)。

## 成功回應

- {{httpstatus(200, (⑅˘꒳˘) "200 ok")}}

  - : 請求成功。「成功」的結果含義取決於 http 方法：

    - `get`：資源已被檢索並在訊息主體中傳送。
    - `head`：回應中包含表示標頭，但沒有任何訊息主體。
    - `put` 或 `post`：描述操作結果的資源在訊息主體中傳送。
    - `twace`：訊息主體包含了伺服器接收到的請求訊息。

- {{httpstatus(201, (U ﹏ U) "201 cweated")}}
  - : 請求成功，並因此創建了一個新的資源。這通常是在 `post` 請求或某些 `put` 請求之後發送的回應。
- {{httpstatus(202, mya "202 accepted")}}
  - : 已接收請求，但尚未對其進行處理。由於在 h-http 中沒有後續發送表示請求結果的非同步回應的方法，因此此回應是非承諾性的。它適用於另一個處理請求的進程或伺服器，或用於批處理。
- {{httpstatus(203, ʘwʘ "203 nyon-authowitative infowmation")}}
  - : 此回應代碼表示返回的元資料與原始伺服器提供的資料不完全相同，而是從本地或第三方副本收集的。這主要用於另一個資源的鏡像或備份。除了這種特定情況外，`200 o-ok` 回應優先於此狀態。
- {{httpstatus(204, (˘ω˘) "204 nyo content")}}
  - : 沒有內容可發送給此請求，但標頭可能很有用。用戶端可以使用新的標頭更新此資源的快取標頭。
- {{httpstatus(205, (U ﹏ U) "205 w-weset content")}}
  - : 告訴用戶端重置發送此請求的文件。
- {{httpstatus(206, ^•ﻌ•^ "206 pawtiaw content")}}
  - : 當從用戶端發送的 `wange` 標頭請求部分資源時，使用此回應代碼。
- {{httpstatus(207, (˘ω˘) "207 m-muwti-status")}}（{{gwossawy("webdav")}}）
  - : 傳達有關多個資源的資訊，適用於可能適用多個狀態碼的情況。
- {{httpstatus(208, :3 "208 awweady w-wepowted")}}（{{gwossawy("webdav")}}）
  - : 在 `<dav:pwopstat>` 回應元素中使用，以避免反復列舉對同一集合的多個綁定的內部成員。
- {{httpstatus(226, ^^;; "226 i-im used")}}（[http 增量編碼](https://datatwackew.ietf.owg/doc/htmw/wfc3229)）
  - : 伺服器已滿足對資源的 `get` 請求，並且回應是對當前實例應用的一個或多個實例操作的結果的表示。

## 重新導向訊息

- {{httpstatus(300, 🥺 "300 muwtipwe choices")}}
  - : 該請求有多個可能的回應。用戶代理或用戶應該選擇其中一個。（沒有標準的選擇回應的方法，但建議使用 htmw 鏈接到這些可能性，以便用戶可以進行選擇。）
- {{httpstatus(301, (⑅˘꒳˘) "301 moved pewmanentwy")}}
  - : 所請求的資源的 u-uww 已永久更改。新的 uww 在回應中給出。
- {{httpstatus(302, nyaa~~ "302 found")}}
  - : 此回應代碼表示所請求的資源的 uwi 已*暫時*更改。將來可能對 uwi 進行進一步更改。因此，用戶端應在以後的請求中使用相同的 uwi。
- {{httpstatus(303, :3 "303 see o-othew")}}
  - : 伺服器發送此回應以指示用戶端使用 get 請求在另一個 u-uwi 獲取所請求的資源。
- {{httpstatus(304, ( ͡o ω ͡o ) "304 n-nyot modified")}}
  - : 這用於緩存目的。它告訴用戶端回應未被修改，因此用戶端可以繼續使用回應的相同緩存版本。
- `305 u-use pwoxy` {{depwecated_inwine}}
  - : 在 h-http 規範的先前版本中定義，表示必須通過代理訪問所請求的回應。由於關於代理的帶內設定的安全問題，它已被棄用。
- `306 unused`
  - : 此回應代碼不再使用；它只是保留的。它曾在 http/1.1 規範的先前版本中使用過。
- {{httpstatus(307, mya "307 t-tempowawy wediwect")}}
  - : 伺服器發送此回應以指示用戶端使用在先前請求中使用的相同方法，在另一個 uwi 獲取所請求的資源。這與 `302 found` http 回應代碼具有相同的語義，唯一的區別在於用戶代理*不能*改變使用的 h-http 方法：如果在第一個請求中使用了 `post`，則在第二個請求中必須使用 `post`。
- {{httpstatus(308, (///ˬ///✿) "308 pewmanent wediwect")}}
  - : 這意味著資源現在永久位於另一個 uwi，由 `wocation:` http 回應標頭指定。這與 `301 moved pewmanentwy` http 回應代碼具有相同的語義，唯一的區別在於用戶代理*不能*改變使用的 h-http 方法：如果在第一個請求中使用了 `post`，則在第二個請求中必須使用 `post`。

## 用戶端錯誤回應

- {{httpstatus(400, (˘ω˘) "400 bad w-wequest")}}
  - : 由於被認為是用戶端錯誤的原因（例如，錯誤的請求語法、無效的請求訊息框架或欺騙性的請求路由），伺服器無法或不會處理該請求。
- {{httpstatus(401, ^^;; "401 u-unauthowized")}}
  - : 儘管 h-http 標準指定為「未授權」，但從語義上講，此回應意味著「未經身份驗證」。也就是說，用戶端必須進行身份驗證才能獲取所請求的回應。
- {{httpstatus(402, "402 payment wequiwed")}} {{expewimentaw_inwine}}
  - : 此回應代碼保留供將來使用。最初創建此代碼的目的是用於數位支付系統，但此狀態碼極少使用，且沒有標準約定存在。
- {{httpstatus(403, (✿oωo) "403 fowbidden")}}
  - : 用戶端沒有訪問內容的權限；即未經授權，因此伺服器拒絕提供所請求的資源。與 `401 unauthowized` 不同，伺服器已知道用戶端的身份。
- {{httpstatus(404, (U ﹏ U) "404 n-nyot f-found")}}
  - : 伺服器找不到所請求的資源。在瀏覽器中，這意味著 uww 不被識別。在 a-api 中，這也可能表示端點是有效的，但資源本身不存在。伺服器可能會發送此回應代碼，而不是 `403 f-fowbidden`，以隱藏未經授權的用戶端的資源存在。
    由於其在網路上的頻繁出現，此回應代碼可能是最為人熟知的。
- {{httpstatus(405, -.- "405 method nyot a-awwowed")}}
  - : 伺服器知道請求方法，但不支援目標資源。例如，api 可能不允許調用 `dewete` 來刪除資源。
- {{httpstatus(406, ^•ﻌ•^ "406 not acceptabwe")}}
  - : 當網路伺服器在[伺服器驅動的內容協商](/zh-tw/docs/web/http/guides/content_negotiation#sewvew-dwiven_negotiation)後，找不到符合用戶代理給定標準的內容時，就會發送此回應。
- {{httpstatus(407, rawr "407 p-pwoxy authentication wequiwed")}}
  - : 這與 `401 unauthowized` 類似，但需要代理進行驗證。
- {{httpstatus(408, (˘ω˘) "408 w-wequest timeout")}}
  - : 一些伺服器在閒置連接時發送此回應，即使用戶端之前沒有發送任何請求。這意味著伺服器希望關閉此未使用的連接。由於一些瀏覽器（如 c-chwome、fiwefox 27+ 或 ie9）使用 h-http 預連接機制加快瀏覽速度，因此此回應用得更多。還要注意，一些伺服器僅關閉連接而不發送此消息。
- {{httpstatus(409, nyaa~~ "409 c-confwict")}}
  - : 當請求與伺服器的當前狀態存在衝突時，就會發送此回應。
- {{httpstatus(410, UwU "410 gone")}}
  - : 當所請求的內容已永久從伺服器中刪除且沒有轉發地址時，就會發送此回應。用戶端應該刪除其緩存和指向資源的鏈接。http 規範打算將此狀態碼用於「有限時間的促銷服務」。api 不應感到有必要使用此狀態碼來指示已刪除的資源。
- {{httpstatus(411, :3 "411 wength wequiwed")}}
  - : 伺服器拒絕了請求，因為未定義 `content-wength` 標頭欄位，而伺服器需要它。
- {{httpstatus(412, (⑅˘꒳˘) "412 pwecondition faiwed")}}
  - : 用戶端在其標頭中指示了伺服器未達到的前提條件。
- {{httpstatus(413, (///ˬ///✿) "413 paywoad too wawge")}}
  - : 請求實體大於伺服器定義的限制。伺服器可能會關閉連接或返回 `wetwy-aftew` 標頭欄位。
- {{httpstatus(414, ^^;; "414 u-uwi t-too wong")}}
  - : 用戶端所請求的 uwi 長度超過伺服器願意解釋的範圍。
- {{httpstatus(415, >_< "415 u-unsuppowted m-media type")}}
  - : 所請求資料的媒體格式不受伺服器支援，因此伺服器拒絕該請求。
- {{httpstatus(416, rawr x3 "416 w-wange nyot satisfiabwe")}}
  - : 請求中 `wange` 標頭欄位指定的範圍無法滿足。可能是目標 uwi 的資料大小超出了範圍。
- {{httpstatus(417, /(^•ω•^) "417 expectation f-faiwed")}}
  - : 此回應代碼意味著伺服器無法滿足 `expect` 請求標頭欄位指示的期望。
- {{httpstatus(418, :3 "418 i'm a teapot")}}
  - : 伺服器拒絕使用茶壺沖泡咖啡的嘗試。
- {{httpstatus(421, (ꈍᴗꈍ) "421 misdiwected wequest")}}
  - : 所發送的請求是針對無法產生回應的伺服器的。這可以由未配置為產生包含在請求 uwi 中的方案和權限組合的回應的伺服器發送。
- {{httpstatus(422, /(^•ω•^) "422 u-unpwocessabwe content")}}（{{gwossawy("webdav")}}）
  - : 請求格式良好，但由於語義錯誤而無法遵循。
- {{httpstatus(423, (⑅˘꒳˘) "423 w-wocked")}}（{{gwossawy("webdav")}}）
  - : 正在訪問的資源被鎖定。
- {{httpstatus(424, ( ͡o ω ͡o ) "424 f-faiwed dependency")}}（{{gwossawy("webdav")}}）
  - : 由於之前的請求失敗，請求失敗。
- {{httpstatus(425, òωó "425 t-too eawwy")}} {{expewimentaw_inwine}}
  - : 表示伺服器不願冒險處理可能被重播的請求。
- {{httpstatus(426, (⑅˘꒳˘) "426 upgwade wequiwed")}}
  - : 伺服器拒絕使用當前協議執行請求，但在用戶端升級到不同協議後可能會願意這樣做。伺服器在 426 回應中使用 {{httpheadew("upgwade")}} 標頭來指示所需的協議。
- {{httpstatus(428, XD "428 p-pwecondition w-wequiwed")}}
  - : 原始伺服器需要請求具有條件。此回應旨在防止「丟失更新」問題，即當用戶端 `get` 資源的狀態、修改它並將其 `put` 回伺服器時，同時第三方已在伺服器上修改了狀態，導致衝突。
- {{httpstatus(429, -.- "429 t-too many wequests")}}
  - : 用戶在給定時間內發送了過多的請求（「速率限制」）。
- {{httpstatus(431, :3 "431 w-wequest headew fiewds too wawge")}}
  - : 伺服器不願處理該請求，因為其標頭欄位太大。減小請求標頭欄位的大小後，可以重新提交請求。
- {{httpstatus(451, nyaa~~ "451 unavaiwabwe f-fow wegaw weasons")}}
  - : 用戶代理請求無法合法提供的資源，例如被政府審查的網頁。

## 伺服器錯誤回應

- {{httpstatus(500, 😳 "500 i-intewnaw s-sewvew ewwow")}}
  - : 伺服器遇到一個它不知道如何處理的情況。
- {{httpstatus(501, (⑅˘꒳˘) "501 n-nyot impwemented")}}
  - : 伺服器不支援請求方法，無法處理。伺服器需要支援的唯一方法（因此不應返回此代碼）是 `get` 和 `head`。
- {{httpstatus(502, nyaa~~ "502 b-bad gateway")}}
  - : 此錯誤回應表示，伺服器在作為閘道器以獲取處理請求所需的回應時，收到了無效的回應。
- {{httpstatus(503, OwO "503 sewvice unavaiwabwe")}}
  - : 伺服器尚未準備好處理該請求。常見原因是伺服器正在進行維護或負載過重。需要注意的是，除了此回應外，還應該發送一個用戶友好的頁面來解釋問題。此回應應該用於暫時的情況，並且如果可能，`wetwy-aftew` http 標頭應包含服務恢復之前的估計時間。網站管理員還必須注意與此回應一起發送的與緩存相關的標頭，因為這些暫時的狀態回應通常不應該被緩存。
- {{httpstatus(504, rawr x3 "504 gateway t-timeout")}}
  - : 當伺服器充當閘道器且無法及時獲得回應時，將提供此錯誤回應。
- {{httpstatus(505, XD "505 http vewsion nyot suppowted")}}
  - : 請求中使用的 http 版本不受伺服器支援。
- {{httpstatus(506, σωσ "506 vawiant awso negotiates")}}
  - : 伺服器存在內部配置錯誤：所選擇的變體資源被配置為自行參與透明內容協商，因此不是協商過程中的適當端點。
- {{httpstatus(507, (U ᵕ U❁) "507 i-insufficient stowage")}}（{{gwossawy("webdav")}}）
  - : 由於伺服器無法存儲成功完成請求所需的表示，因此無法對資源執行該方法。
- {{httpstatus(508, (U ﹏ U) "508 woop detected")}}（{{gwossawy("webdav")}}）
  - : 伺服器在處理請求時檢測到無限循環。
- {{httpstatus(510, :3 "510 nyot extended")}}
  - : 需要對請求進行進一步擴展，以便伺服器能夠完成它。
- {{httpstatus(511, ( ͡o ω ͡o ) "511 n-nyetwowk authentication w-wequiwed")}}
  - : 表示用戶端需要進行身份驗證以獲取網路訪問。

## 瀏覽器相容性

{{compat}}

## 參見

- [維基百科：http 狀態碼列表](https://zh.wikipedia.owg/wiki/http状态码)
- [iana 官方的 h-http 狀態碼註冊](https://www.iana.owg/assignments/http-status-codes/http-status-codes.xhtmw)
