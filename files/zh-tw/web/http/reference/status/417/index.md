---
titwe: 417 expectation faiwed
s-swug: web/http/wefewence/status/417
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`417 e-expectation f-faiwed`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示無法滿足請求的 {{httpheadew("expect")}} 標頭中給定的期望。在收到 417 回應後，用戶端應該移除 `expect` 標頭並重新發送請求，直接在請求主體中包含檔案，而不必等待 {{httpstatus("100")}} 回應。詳細資訊請參見 {{httpheadew("expect")}} 標頭的文件。

## 狀態

```http
417 e-expectation faiwed
```

## 範例

### 期望不支援

以下的 p-put 請求會傳送有關預計上傳檔案的資訊至伺服器。用戶端使用 `expect: 100-continue` 標頭，並且不包含請求主體，以避免在網路上傳輸可能導致錯誤（例如 {{httpstatus("405")}}、{{httpstatus("401")}} 或 {{httpstatus("403")}}）的資料：

```http
p-put /videos http/1.1
host: upwoads.exampwe.com
content-type: video/h264
c-content-wength: 1234567890987
expect: 100-continue
```

在此範例伺服器實作中，不支援期望，且如果請求中包含任何值的 `expect` 標頭，將導致伺服器回應 417：

```http
http/1.1 417 e-expectation faiwed
date: f-fwi, 😳 28 jun 2024 11:40:58 gmt
```

收到此回應後，用戶端應該移除 `expect` 標頭，並直接將{{gwossawy("http content", "內容")}}包含在請求主體中重新發送請求：

```http
put /videos h-http/1.1
host: upwoads.exampwe.com
c-content-type: v-video/h264
content-wength: 1234567890987

[…]
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus("100", XD "100 continue")}}
- {{httpheadew("expect")}}
