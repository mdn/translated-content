---
title: Fetch の基本コンセプト
slug: Web/API/Fetch_API/Basic_concepts
tags:
  - API
  - Fetch
  - Fetch API
  - XMLHttpRequest
  - concept
  - guard
  - request
translation_of: Web/API/Fetch_API/Basic_concepts
---
<p>{{DefaultAPISidebar("Fetch API")}}{{draft}}</p>

<div class="summary">
<p><a href="/ja/docs/Web/API/Fetch_API">Fetch</a> は、(ネットワークを超えて)リソースを取得するインターフェイスを提供します。 {{domxref("XMLHttpRequest")}} を使っていた人には馴染み深いでしょうが、より拡張可能で効果的な機能があります。この記事は、Fetch API の基本コンセプトのいくつかを説明します。</p>
</div>

<div class="note">
<p>この記事は随時加筆されます。より良い説明が必要な Fetch コンセプトを見つけた場合、<a href="https://discourse.mozilla-community.org/c/mdn">MDN ディスカッションフォーラム</a> か <a href="https://wiki.mozilla.org/Matrix">Matrix</a> の <a href="https://chat.mozilla.org/#/room/#mdn:mozilla.org">MDN WebDocs</a> ルームで誰かに知らせてください。</p>
</div>

<h2 id="概要">概要</h2>

<p>Fetch の核心はインターフェイスの抽象化であり、HTTP {{domxref("Request")}}、{{domxref("Response")}}、{{domxref("Headers")}}、{{domxref("Body")}} のペイロード、そして非同期リソースリクエストの初期化のための {{domxref("GlobalFetch.fetch","global fetch")}} メソッドがその対象です。HTTP の主要コンポーネントが JavaScript オブジェクトとして抽象化されているため、他の API からそれらの機能を利用しやすくなっています。</p>

<p><a href="/ja/docs/Web/API/ServiceWorker_API">Service Worker</a> は Fetch を多用する API の一例です。</p>

<p>Fetch はそれらのリクエストの非同期な性質をもう一歩先へ進めるものです。API は完全に {{jsxref("Promise")}} ベースです。</p>

<h2 id="ガード">ガード</h2>

<p>ガードは {{domxref("Headers")}} オブジェクトの機能で、ヘッダーが使用されている場所に応じて <code>immutable</code>、<code>request</code>、<code>request-no-cors</code>、<code>response</code>、<code>none</code> の値をとります。</p>

<p>{{domxref("Headers.Headers","Headers()")}} の {{glossary("constructor", "コンストラクター")}} を使用して新しい {{domxref("Headers")}} オブジェクトが生成されるとき、ガードは <code>none</code> に設定されます（既定の動作）。{{domxref("Request")}} オブジェクトか {{domxref("Response")}} オブジェクトが生成された場合、関連づけられた {{domxref("Headers")}} オブジェクトのガードは下記のとおり設定されます：</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row">新しいオブジェクト型</th>
   <th scope="col">コンストラクター</th>
   <th scope="col">関連する {{domxref("Headers")}} オブジェクトのガード設定</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td rowspan="2">{{domxref("Request")}}</td>
   <td>{{domxref("Request.Request","Request()")}}</td>
   <td><code>request</code></td>
  </tr>
  <tr>
   <td><code>no-cors</code> の {{domxref("Request.mode","mode")}} を設定した {{domxref("Request.Request","Request()")}}</td>
   <td><code>request-no-cors</code></td>
  </tr>
  <tr>
   <td rowspan="2">{{domxref("Response")}}</td>
   <td>{{domxref("Response.Response","Response()")}}</td>
   <td><code>response</code></td>
  </tr>
  <tr>
   <td>{{domxref("Response.error","error()")}} メソッドか {{domxref("Response.redirect","redirect()")}} メソッド</td>
   <td><code>immutable</code></td>
  </tr>
 </tbody>
</table>

<p>ヘッダーのガードは、ヘッダーのコンテンツを変更する {{domxref("Headers.set","set()")}} メソッドと {{domxref("Headers.delete","delete()")}} メソッド、{{domxref("Headers.append","append()")}} メソッドに影響します。ガードが <code>immutable</code> の {{domxref("Headers")}} を修正しようとした場合、 <code>TypeError</code> をスローします。しかし、次の場合は動作します：</p>

<ul>
 <li>ガードが <code title="">request</code> で、ヘッダーの <var>name</var> が {{Glossary("forbidden header name")}} ではない場合。</li>
 <li>ガードが <code title="">request-no-cors</code> で、ヘッダーの <var>name</var>/<var>value</var> が {{Glossary("simple header")}} の場合。</li>
 <li>ガードが <code title="">response</code> で、ヘッダーの <var>name</var> が {{Glossary("forbidden response header name")}} ではない場合。</li>
</ul>
