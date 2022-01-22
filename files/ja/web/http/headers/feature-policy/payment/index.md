---
title: 'Feature-Policy: payment'
slug: Web/HTTP/Headers/Feature-Policy/payment
tags:
  - ディレクティブ
  - 機能ポリシー
  - Feature-Policy
  - HTTP
  - Payment Request API
  - Payments API
  - リファレンス
  - 決済 API
translation_of: Web/HTTP/Headers/Feature-Policy/payment
---
{{HTTPSidebar}} {{SeeCompatTable}}

<span class="seoSummary">HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーフィールドにおける `payment` ディレクティブは、現在の文書が [Payment Request API](/ja/docs/Web/API/Payment_Request_API) を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{DOMxRef("PaymentRequest()")}} コンストラクターで {{exception("SyntaxError")}} 例外が発生します。</span>

## 構文

<pre class="syntaxbox notranslate">Feature-Policy: payment &lt;allowlist&gt;;</pre>

 - \<allowlist>
 <dd>{{page("/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy", "allowlist")}}</dd>

## 既定のポリシー

`payment` 機能の既定の許可リストの値は `'self'` です。

## 仕様書

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Payment')}}</td>
   <td>{{Spec2('Payment')}}</td>
   <td>See [Section 16. Feature Policy integration](https://w3c.github.io/payment-request/#feature-policy).</td>
  </tr>
  <tr>
   <td>{{SpecName('Feature Policy')}}</td>
   <td>{{Spec2('Feature Policy')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("http.headers.Feature-Policy.payment")}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダーフィールド
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
