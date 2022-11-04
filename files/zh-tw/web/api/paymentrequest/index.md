---
title: PaymentRequest
slug: Web/API/PaymentRequest
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

**`PaymentRequest`** 介面是 [Payment Request API](/zh-TW/docs/Web/API/Payment_Request_API) 的主要切入點，它能讓網頁或 app 接受終端用戶的付款。

## 建構子

- {{domxref('PaymentRequest.PaymentRequest()','PaymentRequest()')}} {{securecontext_inline}}
  - : 建立新的 `PaymentRequest` 物件。

## 屬性

- {{domxref('PaymentRequest.id')}} {{readonlyinline}}{{securecontext_inline}}
  - : 個別 `PaymentRequest` 的唯一標識符（unique identifier），可透過 `details.id` 設定之。若尚未指定，預設為 UUID。
- {{domxref('PaymentRequest.shippingAddress')}} {{readonlyinline}} {{securecontext_inline}}
  - : 若透過付款設定（payment options）請求的話，回傳用戶指定的運送地址，以便計算運輸事宜。只有在呼叫的建構子 `requestShipping` flag 為 true 時，此屬性才能作動。另外，部份瀏覽器會出於隱私上的理由而只節錄部分地址，除非用戶表示交易手續即將完成（例如按下「付款」鈕）。
- {{domxref('PaymentRequest.shippingOption')}} {{readonlyinline}} {{securecontext_inline}}
  - : 回傳的運送選項的標識符。只有在呼叫的建構子 `requestShipping` flag 為 true 時，此屬性才能作動。
- {{domxref('PaymentRequest.shippingType')}} {{readonlyinline}} {{securecontext_inline}}
  - : 回傳用於完成交易的運送類型。可以是 `shipping`, `delivery`, `pickup`, 或在建構子未提供的情形下：`null`。

### 事件處理器

- {{domxref('PaymentRequest.onshippingaddresschange')}} {{securecontext_inline}}
  - : 用戶修改運送地址時觸發之。
- {{domxref('PaymentRequest.onshippingoptionchange')}} {{securecontext_inline}}
  - : 用戶修改運送選項時觸發之。
- {{domxref('PaymentRequest.onpaymentmethodchange')}} {{securecontext_inline}}
  - : 針對付款方法（如 Apple Pay），用戶修改支付方式時觸發之，比方說從信用卡改為簽帳卡。
- {{domxref('PaymentRequest.onmerchantvalidation')}} {{securecontext_inline}}
  - : 針對付款方法（如 Apple Pay），本事件會呼叫 `merchantvalidation` 事件，在用戶代理要求驗證付款商家或供應商是否合法時觸發之。

## 方法

- {{domxref('PaymentRequest.canMakePayment()')}} {{securecontext_inline}}
  - : 在呼叫 `show()` 前告訴 `PaymentRequest` 物件能不能付款。
- {{domxref('PaymentRequest.show()')}} {{securecontext_inline}}
  - : 讓用戶代理開始付款請求的用戶交互。
- {{domxref('PaymentRequest.abort()')}} {{securecontext_inline}}
  - : 讓用戶代理結束付款請求並刪除可能顯示的任何用戶界面。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
