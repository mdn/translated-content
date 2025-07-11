---
title: 402 Payment Required
slug: Web/HTTP/Reference/Status/402
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP **`402 Payment Required`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼是一個**非標準**的回應狀態碼，保留供未來使用。

此狀態碼的創建目的是為了支援數位現金或（微型）支付系統，並且會表示在用戶端完成付款之前，請求的內容無法使用。目前沒有標準的使用慣例，且不同的系統會在不同的上下文中使用此狀態碼。

## 狀態

```http
402 Payment Required
```

## 範例

### 付款 API 失敗

某些付款 API 使用 402 回應作為失敗付款請求的通用概括狀態碼。以下範例試圖使用 POST 請求來調用付款 API，啟動一筆交易：

```http
POST /merchant/transfers/payment HTTP/1.1
Host: payments.example.com
Content-Type: application/json
Content-Length: 402

{
  "payment_transfer": {
    "reference": "PAYMENT123456",
    "amount": "1337",
    "currency": "EUR",
    "sender_account_uri": "pan:5299920000000149;exp=2020-08;cvc=123",
    "sender": {
      "first_name": "Brian",
      "middle_name": "Smith",
      "email": "test123@sender.example.com"
    },
    "recipient": {
      "first_name": "John",
      "middle_name": "Tyler",
      "email": "test123@example.com",
      "merchant_id": "123"
    },
    "authentication_value": "ucaf:jJJLtQa+Iws8AREAEbjsA1MAAAA",
  }
}
```

如果交易有問題，伺服器會回應 402，在此翻譯是卡片已過期：

```http
HTTP/1.1 402 Payment Required
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 175

{
  "error": {
    "code": "expired_card",
    "doc_url": "https://example.com/error-codes#expired-card",
    "message": "這張卡片已過期。請確認有效期限或使用其他卡片。",
  }
}
```

## 規範

{{Specifications}}

## 相容性備註

此狀態碼是**保留**但未定義的。實際的實作在回應的格式和內容上有所不同。目前沒有瀏覽器支援 402，錯誤會顯示為通用的 `4xx` 狀態碼。

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [HTTP 驗證](/zh-TW/docs/Web/HTTP/Guides/Authentication)
