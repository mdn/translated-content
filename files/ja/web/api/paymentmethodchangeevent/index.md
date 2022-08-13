---
title: PaymentMethodChangeEvent
slug: Web/API/PaymentMethodChangeEvent
tags:
  - API
  - Interface
  - Payment Handler
  - Payment Request
  - Payment Request API
  - PaymentRequestUpdateEvent
  - Reference
  - Secure context
  - payment
  - インターフェイス
translation_of: Web/API/PaymentMethodChangeEvent
---
<div>{{securecontext_header}}{{APIRef("Payment Request API")}}</div>

<p><strong><code>PaymentMethodChangeEvent</code></strong> は <a href="/ja/docs/Web/API/Payment_Request_API">Payment Request API</a> のインターフェイスで、ユーザーが支払方法を切り替えたとき (例えば、ユーザーが Apple Pay を使用する際に、「その店舗の」カードを選択する場合) に実行される一部の支払いハンドラーが発生する {{domxref("PaymentRequest/paymentmethodchange_event", "paymentmethodchange")}} イベントを説明します。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("PaymentMethodChangeEvent.PaymentMethodChangeEvent", "PaymentMethodChangeEvent()")}}</dt>
 <dd>新しい <code>PaymentMethodChangeEvent</code> オブジェクトを作成して返し、オプションで与えられた {{domxref("PaymentMethodChangeEventInit")}} 辞書から得た値で初期化します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>以下のプロパティに加えて、このインターフェイスは {{domxref("PaymentRequestUpdateEvent")}} から継承したプロパティを含みます。</em></p>

<dl>
 <dt>{{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} {{ReadOnlyInline}} {{securecontext_inline}}</dt>
 <dd>支払方法の変更時に利用できる支払方法に依存したデータを含むオブジェクトです。そのような情報が利用できない場合は、この値は <code>null</code> です。</dd>
 <dt>{{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} {{ReadOnlyInline}} {{securecontext_inline}}</dt>
 <dd>{{domxref("DOMString")}} で、特定の支払方法を固有に識別する文字列である支払方法識別子が入ります。この識別子はふつう、支払い手続で使用される URL ですが、 <code>basic-card</code> のような標準化された文字列にすることもできます。既定値は空文字列、 <code>""</code> です。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスは {{domxref("PaymentRequestUpdateEvent")}} から継承したメソッドを含みます。</em></p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Payment','#paymentmethodchangeevent-interface','PaymentMethodChangeEvent')}}</td>
   <td>{{Spec2('Payment')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.PaymentMethodChangeEvent")}}</p>
</div>
