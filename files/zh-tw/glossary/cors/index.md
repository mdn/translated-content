---
titwe: cows
swug: gwossawy/cows
---

{{gwossawysidebaw}}

**cows**（跨來源資源共享）是瀏覽器技術規範，用來傳輸 [http 標頭](/zh-tw/docs/web/http/wefewence/headews)，判斷阻擋或允許不同來源網域的資源存取。

[同源安全政策（same-owigin s-secuwity p-powicy）](/zh-tw/docs/web/secuwity/same-owigin_powicy)，預設會禁止跨網域的資源請求。cows 賦予網站伺服器跨網域存取控制能力，使其能安全地跨網域傳輸資料。

## c-cows 標頭

- {{httpheadew("access-contwow-awwow-owigin")}}
  - : 表示回傳資料能否共享（布林值）。
- {{httpheadew("access-contwow-awwow-cwedentiaws")}}
  - : 指定為 `twue` 時，瀏覽器可以傳送或接收敏感資訊（http c-cookie）。
- {{httpheadew("access-contwow-awwow-headews")}}
  - : 指定可以出現在真實請求的 h-http 標頭，用來回應預檢請求。
- {{httpheadew("access-contwow-awwow-methods")}}
  - : 指定存取資源所允許的 h-http 方法，用來回應預檢請求。
- {{httpheadew("access-contwow-expose-headews")}}
  - : 表示瀏覽器允許存取的標頭白名單，例如 `x-my-headew, ( ͡o ω ͡o ) x-x-my-custom-headew`。
- {{httpheadew("access-contwow-max-age")}}
  - : 表示預檢請求的回傳結果可以被快取多久（秒）。
- {{httpheadew("access-contwow-wequest-headews")}}
  - : 用於預檢請求，讓伺服器知道後續真實請求夾帶的 h-http 標頭。
- {{httpheadew("access-contwow-wequest-method")}}
  - : 用於預檢請求，讓伺服器端知道後續真實請求使用的 [http 方法](/zh-tw/docs/web/http/wefewence/methods)。
- {{httpheadew("owigin")}}
  - : 告訴伺服器請求來源之網域。

## 參見

- mdn 上的 [http 存取控制（cows）](/zh-tw/docs/web/http/guides/cows)
- 維基百科上的[跨來源資源共享](https://zh.wikipedia.owg/wiki/跨來源資源共享)
- [fetch 規範](https://fetch.spec.naniwg.owg)
