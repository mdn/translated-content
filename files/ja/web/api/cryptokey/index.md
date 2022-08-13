---
title: CryptoKey
slug: Web/API/CryptoKey
tags:
  - API
  - Interface
  - Reference
  - Web Crypto API
translation_of: Web/API/CryptoKey
---
<p>{{APIRef("Web Crypto API")}}</p>

<p><strong><code>CryptoKey</code></strong> インターフェイスは、特定の鍵アルゴリズムによりもたらされる暗号鍵 ({{glossary("key")}}) を表します。</p>

<p><code>CryptoKey</code> オブジェクトは、{{domxref("SubtleCrypto.generateKey()")}} または {{domxref("SubtleCrypto.deriveKey()")}}、{{domxref("SubtleCrypto.importKey()")}} を使用して取得できます。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスはどのプロパティも継承しません。</em></p>

<dl>
 <dt>{{domxref("CryptoKey.type")}}</dt>
 <dd>鍵の種類と、(対称アルゴリズムでは) 秘密鍵、(非対称アルゴリズムでは) 公開鍵またはプライベートキーを表す列挙値を返します。</dd>
 <dt>{{domxref("CryptoKey.extractable")}}</dt>
 <dd>生の情報がアプリケーションにエクスポートされるかどうかを示す {{jsxref("Boolean")}} を返します。</dd>
 <dt>{{domxref("CryptoKey.algorithm")}}</dt>
 <dd>鍵が使用される特定の暗号法を表す透過オブジェクトを返します。</dd>
 <dt>{{domxref("CryptoKey.usages")}}</dt>
 <dd>どの用途で使用される鍵かを示す列挙値の配列を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスはどのメソッドも定義または継承しません。</em></p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{ SpecName('Web Crypto API', '#dfn-CryptoKey', 'CryptoKey') }}</td>
   <td>{{ Spec2('Web Crypto API') }}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>



<p>{{Compat("api.CryptoKey")}}</p>
<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>{{domxref("Crypto")}} および {{domxref("Crypto.subtle")}}。</li>
</ul>
