---
title: Payment Request API
slug: Web/API/Payment_Request_API
translation_of: Web/API/Payment_Request_API
---
<div>{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}</div>

<p>Payment Request API 提供商家與用戶雙方一致的用戶體驗。它並不是嶄新的支付方式、而是讓用戶選擇偏好的支付方式、並把該方式提供給商家。</p>

<h2 id="Payment_Request_的概念和用法">Payment Request 的概念和用法</h2>

<p>很多放棄線上購物的問題，與結帳表單的填寫有關：填寫這些東西既困難又耗時、步驟還極度繁雜。<strong>Payment Request API</strong>正是為減少、甚至擺脫要完成表單所需的填寫步驟而生。它藉由不假手 HTML 表單的情況下，記下要傳給商家的用戶資訊，來簡化結帳步驟。</p>

<p>針對信用卡付款，使用 Payment Request API 的好處有：</p>

<ul>
 <li><strong>快速的訂購體驗</strong>：用戶在進入瀏覽器時輸入資訊、接著就備齊網路購物所需。用戶再也無須於多個網站，填寫相同資訊。</li>
 <li><strong>各站一致且支援 API 的用戶體驗</strong>：由於是瀏覽器在掌管付款資訊，用戶體驗將能客製化、還可以把 UI 本土化為用戶偏好的語言。</li>
 <li><strong>無障礙</strong>：由於是瀏覽器在掌管輸入表單，各網站針對鍵盤和螢幕閱讀器的無障礙將確保一致，而無須開發者動工。瀏覽器還能調整輸入表單的字體大小、色彩對比，讓用戶能更輕鬆地完成付款。</li>
 <li><strong>憑證管理</strong>：用戶能在瀏覽器，管理信用卡與送達地址的資訊。瀏覽器還能跨設備同步這些「憑證」，以便用戶在電腦與手機周旋間，依舊能輕易付款。</li>
 <li><strong>一致的錯誤處理</strong>：瀏覽器會檢查信用卡號碼、並告訴用戶該卡片（將）過期與否；瀏覽器也可以藉由商家的使用模式或限制（例如「只接受 Visa 卡或萬事達卡（Mastercard）」）自動提示用戶、或允許其選擇偏好的信用卡。</li>
</ul>

<p>要請求支付的話，建立 {{domxref("PaymentRequest")}} 物件的網頁，將回應用戶發動付款的行為，像是點選「購物」按鈕。<code>PaymentRequest</code> 將允許網頁在用戶提供完成交易所需資訊時交換之。</p>

<p>你可以在 <a href="/zh-TW/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API">使用 Payment Request API</a> 文章看到完整教學。</p>

<div class="note">
<p><strong>注意</strong>：此 API 只有在設定 {{htmlattrxref("allowpaymentrequest","iframe")}} 屬性下，才可支援跨域 {{htmlelement("iframe")}} 元素。</p>
</div>

<h2 id="介面">介面</h2>

<dl>
 <dt>{{domxref('PaymentAddress')}}</dt>
 <dd>地址資訊物件，具體用途有付款與送達。</dd>
 <dt>{{domxref('PaymentRequest')}}</dt>
 <dd>提供 API 以便建立與管理{{Glossary("用戶代理")}}的付款介面物件。</dd>
 <dt>{{domxref('PaymentRequestEvent')}}</dt>
 <dd>建立 {{domxref("PaymentRequest")}} 時發送給付款處理器（payment handler）的事件。</dd>
 <dt>{{domxref('PaymentRequestUpdateEvent')}}</dt>
 <dd>允許網頁針對用戶行為，發動更新用戶付款資訊的請求。</dd>
 <dt>{{domxref('PaymentMethodChangeEvent')}}</dt>
 <dd>表示用戶更改付款工具（例如從信用卡轉為簽帳金融卡）。</dd>
 <dt>{{domxref('PaymentResponse')}}</dt>
 <dd>在用戶選取付款方法、並同意付款請求後，所回傳的物件。</dd>
 <dt>{{domxref('MerchantValidationEvent')}}</dt>
 <dd>表示商家（網站）要求使用特定支付方法的瀏覽器驗證處理器（例如：要不要放行 Apple Pay）</dd>
</dl>

<h2 id="字詞（dictionary）">字詞（dictionary）</h2>

<dl>
 <dt>{{domxref("AddressErrors")}}</dt>
 <dd>此字詞包含任何與 {{domxref("PaymentAddress")}} entry 錯誤相關的描述性解釋字串。</dd>
 <dt>{{domxref("PayerErrors")}}</dt>
 <dd>此字詞包含任何與 {{domxref("PaymentResponse")}} 的 email、電話、名字屬性（name attribute）錯誤相關之描述性解釋字串。</dd>
 <dt>{{domxref("PaymentDetailsUpdate")}}</dt>
 <dd>此物件描述伺服器在用戶開始互動前、實例化支付界面後，針對行為需要修改的付款資訊。</dd>
</dl>


<h3 id="Related_dictionaries_for_the_Basic_Card_specification">Related dictionaries for the Basic Card specification</h3>

<dl>
 <dt>{{domxref("BasicCardChangeDetails")}}</dt>
 <dd>An object providing <em>redacted</em> address information that is provided as the {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} on the {{event("paymentmethodchange")}} event sent to the {{domxref("PaymentRequest")}} when the user changes payment information.</dd>
 <dt>{{domxref("BasicCardErrors")}}</dt>
 <dd>An object providing any error messages associated with the fields in the {{domxref("BasicCardResponse")}} object that are not valid. This is used as the value of the {{domxref("PaymentValidationErrors.paymentMethod", "paymentMethod")}} property on the {{domxref("PaymentValidationErrors")}} object sent to the {{domxref("PaymentRequest")}} when an error occurs.</dd>
 <dt>{{domxref('BasicCardRequest')}}</dt>
 <dd>Defines an object structure for containing payment request details such as card type.</dd>
 <dt>{{domxref('BasicCardResponse')}}</dt>
 <dd>Defines an object structure for payment response details such as the number/expiry date of the card used to make the payment, and the billing address.</dd>
</dl>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>

<h3 id="PaymentRequest_介面">PaymentRequest 介面</h3>

<p>{{Compat("api.PaymentRequest", 0)}}</p>

<h2 id="參見">參見</h2>

<ul>
 <li><a href="/zh-TW/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API">使用 Payment Request API</a></li>
 <li><a href="/zh-TW/docs/Web/API/Payment_Request_API/Concepts">Payment 處理概念</a></li>
 <li><a href="https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/">Introducing the Payment Request API for Apple Pay</a></li>
 <li><a href="https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial">Google Pay API PaymentRequest Tutorial</a></li>
 <li><a href="https://github.com/w3c/payment-request-info/wiki/FAQ">W3C Payment Request API FAQ</a></li>
</ul>
