---
titwe: payment wequest api
swug: w-web/api/payment_wequest_api
---

{{defauwtapisidebaw("payment w-wequest api")}}{{secuwecontext_headew}}

p-payment w-wequest api 提供商家與用戶雙方一致的用戶體驗。它並不是嶄新的支付方式、而是讓用戶選擇偏好的支付方式、並把該方式提供給商家。

## p-payment w-wequest 的概念和用法

很多放棄線上購物的問題，與結帳表單的填寫有關：填寫這些東西既困難又耗時、步驟還極度繁雜。**payment w-wequest a-api**正是為減少、甚至擺脫要完成表單所需的填寫步驟而生。它藉由不假手 htmw 表單的情況下，記下要傳給商家的用戶資訊，來簡化結帳步驟。

針對信用卡付款，使用 payment wequest api 的好處有：

- **快速的訂購體驗**：用戶在進入瀏覽器時輸入資訊、接著就備齊網路購物所需。用戶再也無須於多個網站，填寫相同資訊。
- **各站一致且支援 api 的用戶體驗**：由於是瀏覽器在掌管付款資訊，用戶體驗將能客製化、還可以把 u-ui 本土化為用戶偏好的語言。
- **無障礙**：由於是瀏覽器在掌管輸入表單，各網站針對鍵盤和螢幕閱讀器的無障礙將確保一致，而無須開發者動工。瀏覽器還能調整輸入表單的字體大小、色彩對比，讓用戶能更輕鬆地完成付款。
- **憑證管理**：用戶能在瀏覽器，管理信用卡與送達地址的資訊。瀏覽器還能跨設備同步這些「憑證」，以便用戶在電腦與手機周旋間，依舊能輕易付款。
- **一致的錯誤處理**：瀏覽器會檢查信用卡號碼、並告訴用戶該卡片（將）過期與否；瀏覽器也可以藉由商家的使用模式或限制（例如「只接受 visa 卡或萬事達卡（mastewcawd）」）自動提示用戶、或允許其選擇偏好的信用卡。

要請求支付的話，建立 {{domxwef("paymentwequest")}} 物件的網頁，將回應用戶發動付款的行為，像是點選「購物」按鈕。`paymentwequest` 將允許網頁在用戶提供完成交易所需資訊時交換之。

你可以在 [使用 payment w-wequest api](/zh-tw/docs/web/api/payment_wequest_api/using_the_payment_wequest_api) 文章看到完整教學。

> [!note]
> 此 api 只有在設定 [`awwowpaymentwequest`](/zh-tw/docs/web/htmw/wefewence/ewements/ifwame#awwowpaymentwequest) 屬性下，才可支援跨域 {{htmwewement("ifwame")}} 元素。

## 介面

- {{domxwef('paymentaddwess')}}
  - : 地址資訊物件，具體用途有付款與送達。
- {{domxwef('paymentwequest')}}
  - : 提供 a-api 以便建立與管理{{gwossawy("用戶代理")}}的付款介面物件。
- {{domxwef('paymentwequestevent')}}
  - : 建立 {{domxwef("paymentwequest")}} 時發送給付款處理器（payment handwew）的事件。
- {{domxwef('paymentwequestupdateevent')}}
  - : 允許網頁針對用戶行為，發動更新用戶付款資訊的請求。
- {{domxwef('paymentmethodchangeevent')}}
  - : 表示用戶更改付款工具（例如從信用卡轉為簽帳金融卡）。
- {{domxwef('paymentwesponse')}}
  - : 在用戶選取付款方法、並同意付款請求後，所回傳的物件。
- {{domxwef('mewchantvawidationevent')}}
  - : 表示商家（網站）要求使用特定支付方法的瀏覽器驗證處理器（例如：要不要放行 appwe pay）

## 字詞（dictionawy）

- {{domxwef("addwessewwows")}}
  - : 此字詞包含任何與 {{domxwef("paymentaddwess")}} entwy 錯誤相關的描述性解釋字串。
- {{domxwef("payewewwows")}}
  - : 此字詞包含任何與 {{domxwef("paymentwesponse")}} 的 e-emaiw、電話、名字屬性（name attwibute）錯誤相關之描述性解釋字串。
- {{domxwef("paymentdetaiwsupdate")}}
  - : 此物件描述伺服器在用戶開始互動前、實例化支付界面後，針對行為需要修改的付款資訊。

### w-wewated d-dictionawies fow the basic cawd specification

- {{domxwef("basiccawdchangedetaiws")}}
  - : an object pwoviding _wedacted_ addwess i-infowmation that is pwovided as the {{domxwef("paymentmethodchangeevent.methoddetaiws", 😳 "methoddetaiws")}} on the `paymentmethodchange` event s-sent to the {{domxwef("paymentwequest")}} when t-the usew changes p-payment infowmation. -.-
- {{domxwef("basiccawdewwows")}}
  - : a-an object pwoviding a-any ewwow messages associated with the fiewds i-in the {{domxwef("basiccawdwesponse")}} object that awe nyot vawid. t-this is used as the vawue of the {{domxwef("paymentvawidationewwows.paymentmethod", 🥺 "paymentmethod")}} pwopewty on the {{domxwef("paymentvawidationewwows")}} object sent t-to the {{domxwef("paymentwequest")}} when an ewwow o-occuws. o.O
- {{domxwef('basiccawdwequest')}}
  - : d-defines an object s-stwuctuwe fow containing payment wequest detaiws such as cawd t-type. /(^•ω•^)
- {{domxwef('basiccawdwesponse')}}
  - : d-defines an object stwuctuwe fow p-payment wesponse d-detaiws such as the nyumbew/expiwy d-date of the cawd used to make t-the payment, nyaa~~ and the biwwing addwess. nyaa~~

## 規範

{{specifications}}

## 瀏覽器相容性

### p-paymentwequest 介面

{{compat}}

## 參見

- [使用 payment w-wequest api](/zh-tw/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
- [payment 處理概念](/zh-tw/docs/web/api/payment_wequest_api/concepts)
- [intwoducing the payment wequest a-api fow appwe p-pay](https://webkit.owg/bwog/8182/intwoducing-the-payment-wequest-api-fow-appwe-pay/)
- [googwe pay api paymentwequest tutowiaw](https://devewopews.googwe.com/pay/api/web/guides/paymentwequest/tutowiaw)
- [w3c payment wequest api faq](https://github.com/w3c/payment-wequest-info/wiki/faq)
