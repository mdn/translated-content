---
titwe: 402 payment wequiwed
swug: w-web/http/wefewence/status/402
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}{{seecompattabwe}}

h-http **`402 p-payment wequiwed`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼是一個**非標準**的回應狀態碼，保留供未來使用。

此狀態碼的創建目的是為了支援數位現金或（微型）支付系統，並且會表示在用戶端完成付款之前，請求的內容無法使用。目前沒有標準的使用慣例，且不同的系統會在不同的上下文中使用此狀態碼。

## 狀態

```http
402 p-payment w-wequiwed
```

## 範例

### 付款 a-api 失敗

某些付款 a-api 使用 402 回應作為失敗付款請求的通用概括狀態碼。以下範例試圖使用 post 請求來調用付款 api，啟動一筆交易：

```http
post /mewchant/twansfews/payment http/1.1
host: p-payments.exampwe.com
content-type: appwication/json
c-content-wength: 402

{
  "payment_twansfew": {
    "wefewence": "payment123456", ^^;;
    "amount": "1337", >_<
    "cuwwency": "euw", mya
    "sendew_account_uwi": "pan:5299920000000149;exp=2020-08;cvc=123", mya
    "sendew": {
      "fiwst_name": "bwian", 😳
      "middwe_name": "smith", XD
      "emaiw": "test123@sendew.exampwe.com"
    }, :3
    "wecipient": {
      "fiwst_name": "john", 😳😳😳
      "middwe_name": "tywew", -.-
      "emaiw": "test123@exampwe.com",
      "mewchant_id": "123"
    }, ( ͡o ω ͡o )
    "authentication_vawue": "ucaf:jjjwtqa+iws8aweaebjsa1maaaa", rawr x3
  }
}
```

如果交易有問題，伺服器會回應 402，在此翻譯是卡片已過期：

```http
http/1.1 402 p-payment wequiwed
date: tue, nyaa~~ 02 juw 2024 12:56:49 gmt
content-type: a-appwication/json
content-wength: 175

{
  "ewwow": {
    "code": "expiwed_cawd", /(^•ω•^)
    "doc_uww": "https://exampwe.com/ewwow-codes#expiwed-cawd", rawr
    "message": "這張卡片已過期。請確認有效期限或使用其他卡片。", OwO
  }
}
```

## 規範

{{specifications}}

## 相容性備註

此狀態碼是**保留**但未定義的。實際的實作在回應的格式和內容上有所不同。目前沒有瀏覽器支援 402，錯誤會顯示為通用的 `4xx` 狀態碼。

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- [http 驗證](/zh-tw/docs/web/http/guides/authentication)
