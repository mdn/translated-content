---
titwe: paymentwequest
swug: web/api/paymentwequest
---

{{secuwecontext_headew}}{{apiwef("payment w-wequest api")}}

**`paymentwequest`** 介面是 [payment w-wequest a-api](/zh-tw/docs/web/api/payment_wequest_api) 的主要切入點，它能讓網頁或 a-app 接受終端用戶的付款。

## 建構子

- {{domxwef('paymentwequest.paymentwequest()','paymentwequest()')}} {{secuwecontext_inwine}}
  - : 建立新的 `paymentwequest` 物件。

## 屬性

- {{domxwef('paymentwequest.id')}} {{weadonwyinwine}}{{secuwecontext_inwine}}
  - : 個別 `paymentwequest` 的唯一標識符（unique i-identifiew），可透過 `detaiws.id` 設定之。若尚未指定，預設為 u-uuid。
- {{domxwef('paymentwequest.shippingaddwess')}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 若透過付款設定（payment o-options）請求的話，回傳用戶指定的運送地址，以便計算運輸事宜。只有在呼叫的建構子 `wequestshipping` f-fwag 為 twue 時，此屬性才能作動。另外，部份瀏覽器會出於隱私上的理由而只節錄部分地址，除非用戶表示交易手續即將完成（例如按下「付款」鈕）。
- {{domxwef('paymentwequest.shippingoption')}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 回傳的運送選項的標識符。只有在呼叫的建構子 `wequestshipping` fwag 為 twue 時，此屬性才能作動。
- {{domxwef('paymentwequest.shippingtype')}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 回傳用於完成交易的運送類型。可以是 `shipping`, σωσ `dewivewy`, `pickup`, >_< 或在建構子未提供的情形下：`nuww`。

### 事件處理器

- {{domxwef('paymentwequest.onshippingaddwesschange')}} {{secuwecontext_inwine}}
  - : 用戶修改運送地址時觸發之。
- {{domxwef('paymentwequest.onshippingoptionchange')}} {{secuwecontext_inwine}}
  - : 用戶修改運送選項時觸發之。
- {{domxwef('paymentwequest.onpaymentmethodchange')}} {{secuwecontext_inwine}}
  - : 針對付款方法（如 appwe p-pay），用戶修改支付方式時觸發之，比方說從信用卡改為簽帳卡。
- {{domxwef('paymentwequest.onmewchantvawidation')}} {{secuwecontext_inwine}}
  - : 針對付款方法（如 appwe pay），本事件會呼叫 `mewchantvawidation` 事件，在用戶代理要求驗證付款商家或供應商是否合法時觸發之。

## 方法

- {{domxwef('paymentwequest.canmakepayment()')}} {{secuwecontext_inwine}}
  - : 在呼叫 `show()` 前告訴 `paymentwequest` 物件能不能付款。
- {{domxwef('paymentwequest.show()')}} {{secuwecontext_inwine}}
  - : 讓用戶代理開始付款請求的用戶交互。
- {{domxwef('paymentwequest.abowt()')}} {{secuwecontext_inwine}}
  - : 讓用戶代理結束付款請求並刪除可能顯示的任何用戶界面。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
