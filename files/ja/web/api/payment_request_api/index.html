---
title: Payment Request API
slug: Web/API/Payment_Request_API
tags:
  - API
  - Commerce
  - Credit Card
  - Intermediate
  - Landing
  - NeedsContent
  - Overview
  - Payment Request
  - Payment Request API
  - Reference
  - Secure context
  - payment
---
<div>{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}</div>

<p><span class="seoSummary">Payment Request API は、販売者とユーザーの両方に一貫したユーザーエクスペリエンスを提供します。この API はお金を払うための新しい方法ではありません。 ユーザーが好みの支払い方法を選択し、その情報を販売者が利用できるようにする方法です。</span></p>

<h2 id="Payment_Request_concepts_and_usage">Payment Request のコンセプトと利用方法</h2>

<p>オンラインショッピングのカート放棄に関連する多くの問題は、チェックアウトフォームに起因する可能性があります。これは入力が難しく時間がかかり、完了するまでに複数の手順が必要になることがよくあるからです。<strong>Payment Request API</strong> はオンラインで支払いを完了するために必要な手順の数を減らし、チェックアウトフォームを廃止する可能性があることを目的としています。これは、ユーザーの詳細な情報を記憶し、HTML フォームを必要とせずに販売者に渡されることで、チェックアウトプロセスを簡単にすることを目的としています。</p> 

<p>"basic-card" (カードベースの支払い) で Payment Request API を使用する利点 :</p>

<ul>
 <li><strong>迅速な購入の体験</strong> : ユーザーはブラウザに詳細情報を一度入力すると、Web 上で商品やサービスの支払いを行う準備が整います。異なるサイト間で同じ詳細情報を繰り返し入力する必要がなくなりました。</li>
 <li><strong>(API をサポートした) すべてのサイトで一貫したエクスペリエンス</strong> : 支払いシートはブラウザによって制御されるため、ユーザーに合わせてエクスペリエンスを調整できます。これには UI をユーザーの好みの言語にローカライズすることも含まれます。</li>
 <li><strong>アクセスビリティ</strong> : ブラウザは支払いシートの入力要素を制御するため、開発者は何もしなくても、すべての Web サイトで一貫したキーボードとスクリーンリーダーのアクセシビリティを保証できます。ブラウザは支払いシートのフォントサイズや色のコントラストを調整して、ユーザーがより快適に支払いを行えるようにすることもできます。</li>
 <li><strong>資格情報管理</strong> : ユーザーはブラウザで直接クレジットカードと配送先住所を管理できます。ブラウザはこれらの "資格情報" をデバイス間で同期することもできるため、ユーザーはデスクトップからモバイルに移動し、物を購入するときに元に戻すことができます。</li>
 <li><strong>一貫したエラー管理</strong> : ブラウザはカード番号の有効性を確認し、カードの有効期限が切れているかどうかや、間もなく期限切れになるかどうかをユーザーに通知できます。 ブラウザは過去の使用パターンや Visa または Mastercard のみを受け付るといった販売者からの制限に基づき、使用するカードを自動的に提案できます。ユーザーがデフォルトやお気に入りのカードを設定することができます。</li>
</ul>

<p>支払いを要求するために、Web ページは、"購入" ボタンをクリックするなど、支払いを開始するユーザーアクションに応答して {{domxref("PaymentRequest")}} オブジェクトを作成します。<code>PaymentRequest</code> を使用すると、ユーザーがトランザクションを完了するための入力を提供している間、Web ページでユーザーエージェントと情報を交換できます。</p>

<p>完全なガイドは、<a href="/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API">Payment Request API を使用する</a>.</p>

<div class="note">
<p><strong>注記</strong>: APIは、クロスオリジン {{htmlelement("iframe")}} 要素内で、{{htmlattrxref("allowpaymentrequest","iframe")}} 属性が設定されている場合にのみ使用できます。</p>
</div>

<h2 id="Interfaces">インターフェイス</h2>

<dl>
 <dt>{{domxref('PaymentAddress')}}</dt>
 <dd>アドレス情報を含むオブジェクト。例えば請求先住所や配送先住所に使用されます。</dd>
 <dt>{{domxref('PaymentRequest')}}</dt>
 <dd>{{Glossary("user agent", "ユーザーエージェント")}} 支払いインターフェースを作成および管理するための API を提供するオブジェクト。</dd>
 <dt>{{domxref('PaymentRequestEvent')}}</dt>
 <dd>{{domxref("PaymentRequest")}} が行われたときに支払いハンドラーに配信されるイベント。</dd>
 <dt>{{domxref('PaymentRequestUpdateEvent')}}</dt>
 <dd>ユーザーの操作に応じて、Web ページが支払い要求の詳細を更新できるようにします。</dd>
 <dt>{{domxref('PaymentMethodChangeEvent')}}</dt>
 <dd>ユーザーが支払い手段を変更することを表します (例 : レジットカードからデビットカードへの切り替え)。</dd>
 <dt>{{domxref('PaymentResponse')}}</dt>
 <dd>ユーザーが支払い方法を選択し、支払い要求を承認した後に返されるオブジェクト。</dd>
 <dt>{{domxref('MerchantValidationEvent')}}</dt>
 <dd>特定の支払いハンドラーの使用が許可されていることをマーチャント (Web サイト) が検証することを要求するブラウザーを表します(例 : Apple Pay の使用が許可されていると登録されている)。</dd>
</dl>

<h2 id="Dictionaries">ディクショナリ</h2>

<dl>
 <dt>{{domxref("AddressErrors")}}</dt>
 <dd>エラーのある {{domxref("PaymentAddress")}} エントリのエラーの説明を提供する文字列を含むディクショナリ。</dd>
 <dt>{{domxref("PayerErrors")}}</dt>
 <dd>{{domxref("PaymentResponse")}} の電子メール、電話、および名前の属性に関連するエラーの説明を提供する文字列を含むディクショナリ。</dd>
 <dt>{{domxref("PaymentDetailsUpdate")}}</dt>
 <dd>サーバーが支払いインターフェースのインスタンス化に続き、ユーザーがそれと対話し始める前に情報を更新する必要がある場合に、支払いの詳細に加える必要がある変更を説明するオブジェクト。</dd>
</dl>

<h3 id="Related_dictionaries_for_the_Basic_Card_specification">Basic Card 仕様の関連ディクショナリ</h3>

<dl>
 <dt>{{domxref("BasicCardChangeDetails")}}</dt>
 <dd>ユーザーが支払い情報を変更時、{{domxref("PaymentRequest")}} に送信される {{event("paymentmethodchange")}} イベントの {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} として提供される<em>編集済み</em>アドレス情報を提供するオブジェクト。</dd>
 <dt>{{domxref("BasicCardErrors")}}</dt>
 <dd>無効な {{domxref("BasicCardResponse")}} オブジェクトのフィールドに関連付けられたエラーメッセージを提供するオブジェクト。これはエラーが発生したときに {{domxref("PaymentRequest")}} に送信される {{domxref("PaymentValidationErrors")}} オブジェクトの {{domxref("PaymentValidationErrors.paymentMethod", "paymentMethod")}} プロパティの値として使用されます。</dd>
 <dt>{{domxref('BasicCardRequest')}}</dt>
 <dd>カードタイプなどの支払い要求の詳細を含めるためのオブジェクト構造を定義します。</dd>
 <dt>{{domxref('BasicCardResponse')}}</dt>
 <dd>支払いに使用されたカードの番号、有効期限、請求先住所など、支払い応答の詳細のオブジェクト構造を定義します。</dd>
</dl>

<h2 id="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Payment')}}</td>
   <td>{{Spec2('Payment')}}</td>
   <td>初期定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('Basic Card Payment')}}</td>
   <td>{{Spec2('Basic Card Payment')}}</td>
   <td>クレジットカードによる支払いの処理に必要な {{domxref("BasicCardRequest")}} と {{domxref("BasicCardResponse")}} の情報を定義します。</td>
  </tr>
  <tr>
   <td>{{SpecName('Payment Method Identifiers')}}</td>
   <td>{{Spec2('Payment Method Identifiers')}}</td>
   <td>支払い方法識別子とその検証方法を定義し、該当する場合は、作成して W3C に正式に登録します。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザの互換性</h2>

<div>
<h3 id="PaymentRequest_interface">PaymentRequest インターフェイス</h3>

<div>

<p>{{Compat("api.PaymentRequest", 0)}}</p>
</div>
</div>

<h2 id="See_also">参照</h2>

<ul>
 <li><a href="/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API">Payment Request API を使用する</a></li>
 <li><a href="/docs/Web/API/Payment_Request_API/Concepts">支払い処理の概念</a></li>
 <li><a href="https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/">Introducing the Payment Request API for Apple Pay</a></li>
 <li><a href="https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial">Google Pay API PaymentRequest チュートリアル</a></li>
 <li><a href="https://github.com/w3c/payment-request-info/wiki/FAQ">W3C Payment Request API FAQ</a></li>
 <li>{{httpheader("Feature-Policy/payment", "payment")}} の機能ポリシー指令</li>
</ul>
