---
title: PaymentAddress
slug: Web/API/PaymentAddress
tags:
  - API
  - Interface
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Reference
  - paymentAddress
---
<div>{{APIRef("Payment Request API")}}{{SecureContext_Header}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Payment_Request_API">Payment Request API</a> の <strong><code>PaymentAddress</code></strong> インターフェースは、配送先または支払い先住所情報を保存するために使用されます。</span></p>

<p>万国郵便連合の Web サイトの <a href="http://www.upu.int/en/activities/addressing/s42-standard.html">Addressing S42 標準資料</a>を参照すると役立つ場合があります。この資料には、住所の国際標準に関する情報が記載されています。</p>

<h2 id="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref('PaymentAddress.addressLine')}} {{readonlyinline}}</dt>
 <dd>他のプロパティに含まれていないアドレスの各行を提供する {{domxref("DOMString")}} のオブジェクトの配列。正確なサイズと内容は国や場所によって異なります。例 : 通りの名前、家の番号、アパートの番号、地方の配達ルート、説明の説明、私書箱の番号など。</dd>
 <dt>{{domxref('PaymentAddress.country')}} {{readonlyinline}} </dt>
 <dd>{{interwiki("wikipedia", "ISO-3166-1 alpha-2")}} 標準を使用して、アドレスが配置されている国を指定する {{domxref("DOMString")}}。文字列は常に正規の大文字形式で指定されます。有効な国の値の例：<code>"US"</code>、<code>"GB"</code>、<code>"CN</code>"、<code>"JP"</code>。</dd>
 <dt>{{domxref('PaymentAddress.city')}} {{readonlyinline}}</dt>
 <dd>アドレスの都市または町の部分を含む {{domxref("DOMString")}}。</dd>
 <dt>{{domxref('PaymentAddress.dependentLocality')}} {{readonlyinline}}</dt>
 <dd>都市内の依存する地域またはサブ地域を示し {{domxref("DOMString")}}。例 : 近隣、自治区、地区、または英国の依存する地域。</dd>
 <dt>{{domxref('PaymentAddress.organization')}} {{readonlyinline}}</dt>
 <dd>支払い先住所にある組織、会社、会社、または機関の名前を指定する {{domxref("DOMString")}}。</dd>
 <dt>{{domxref('PaymentAddress.phone')}} {{readonlyinline}}</dt>
 <dd>受信者または連絡担当者の電話番号を指定する {{domxref("DOMString")}}。</dd>
 <dt>{{domxref('PaymentAddress.postalCode')}} {{readonlyinline}}</dt>
 <dd>管轄区域がメールルーティングに使用するコードを指定する {{domxref("DOMString")}}。例 : 米国の郵便番号やインドの PIN コード。</dd>
 <dt>{{domxref('PaymentAddress.recipient')}} {{readonlyinline}}</dt>
 <dd>支払い先住所の受取人、購入者、または連絡先の名前を示す {{domxref("DOMString")}}。</dd>
 <dt>{{domxref('PaymentAddress.region')}} {{readonlyinline}}</dt>
 <dd>国の最上位の行政区画 (州、県、州、都道府県など) を含む {{domxref("DOMString")}}。</dd>
 <dt>{{domxref('PaymentAddress.regionCode')}} {{readonlyinline}}</dt>
 <dd>アドレスの地域を指定する {{domxref("DOMString")}}。<a href="https://en.wikipedia.org/wiki/ISO_3166-2">ISO3166-2</a> の国の行政区画名の "コード要素" として表されます。例 : オーストラリアのクイーンズランド州の "QLD"、カリフォルニア州の "CA" など。</dd>
 <dt>{{domxref('PaymentAddress.sortingCode')}} {{readonlyinline}}</dt>
 <dd>フランスで使用されているような郵便ソートコードを提供する {{domxref("DOMString")}}。</dd>
</dl>

<div class="note">
<p><strong>注記 :</strong> 値が指定されていないプロパティには、空の文字列が含まれています。</p>
</div>

<h3 id="Obsolete_properties">廃止されたプロパティ</h3>

<p>次のプロパティは廃止されたため、使用しないでください。ただし、一部のブラウザバージョンでは引き続き存在する可能性があります。</p>

<dl>
 <dt>{{domxref("PaymentAddress.languageCode")}} {{ReadOnlyInline}} {{obsolete_inline}}</dt>
 <dd>アドレスの言語コードを示す {{domxref("DOMString")}}。これは、アドレスが指定されている言語を識別し、アドレスの表示のローカライズを支援することを目的としています。 </dd>
</dl>

<h2 id="Methods">メソッド</h2>

<dl>
 <dt>{{domxref('PaymentAddress.toJSON()')}}</dt>
 <dd><code>PaymentAddress</code> オブジェクトのプロパティの JSON 表現を返す標準のシリアライザー。</dd>
</dl>

<h2 id="Examples">例</h2>

<p>次の例では、{{domxref("PaymentRequest.PaymentRequest","PaymentRequest()")}} コンストラクターを使用して、新しい支払い要求を作成します。これは、パラメーターとして 3 つのオブジェクトを取ります。1 つは支払いに使用できる支払い方法の詳細を含み、もう 1 つは実際の注文の詳細を含みます (購入したアイテムおよび配送オプションとして)、および追加のオプションを含むオプションのオブジェクト。</p>

<p>これら 3 つのうち最初のもの (以下の例では <code>supportedInstruments</code>) には、{{domxref("BasicCardRequest")}} ディクショナリで定義された構造に準拠する必要があるデータプロパティが含まれています。</p>

<pre class="brush:js">const supportedInstruments = [
  {
    supportedMethods: "basic-card",
  },
];

const details = {
  total: { label: "Donation", amount: { currency: "USD", value: "65.00" } },
  displayItems: [
    {
      label: "Original donation amount",
      amount: { currency: "USD", value: "65.00" },
    },
  ],
  shippingOptions: [
    {
      id: "standard",
      label: "Standard shipping",
      amount: { currency: "USD", value: "0.00" },
      selected: true,
    },
  ],
};

const options = { requestShipping: true };

async function doPaymentRequest() {
  const request = new PaymentRequest(supportedInstruments, details, options);
  // Add event listeners here.
  // Call show() to trigger the browser's payment flow.
  const response = await request.show();
  // Process payment.
  const json = response.toJSON();
  const httpResponse = await fetch("/pay/", { method: "POST", body: json });
  const result = httpResponse.ok ? "success" : "failure";

  await response.complete(result);
}
doPaymentRequest();
</pre>

<p>{{domxref("PaymentRequest.show()")}} を使用して支払いフローがトリガーされ、Promise が正常に解決されると、履行された Promise (上記の <code>instrumentResponse</code>) 内で使用可能な {{domxref("PaymentResponse")} オブジェクトには、応答の詳細を含む {{domxref("PaymentResponse.details")}} プロパティが含まれます。 これは、<code>BasicCardResponse</code> ディクショナリで定義された構造に準拠している必要があり、次のようになります :</p>

<pre class="brush: js">{
  "cardNumber' : '9999999999999999",
  "cardholderName' : 'Pat Straw",
  "cardSecurityCode" : "999",
  "expiryMonth" : "07",
  "expiryYear" : "2021",
  "billingAddress" : {
    "country" : "GB",
    // etc. billing address is a <a href="/en-US/docs/Web/API/PaymentAddress">PaymentAddress</a> object
  }
}</pre>

<h2 id="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Payment','#paymentaddress-interface','PaymentAddress')}}</td>
   <td>{{Spec2('Payment')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.PaymentAddress")}}</p>
