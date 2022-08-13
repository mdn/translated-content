---
title: TouchList
slug: Web/API/TouchList
tags:
  - API
  - DOM
  - DOM Reference
  - Mobile
  - Reference
  - Touch Event
  - TouchList
  - touch
translation_of: Web/API/TouchList
---
<p>{{APIRef("Touch Events")}}</p>

<p><strong><code>TouchList</code></strong> インターフェイスは、タッチ面上の接触点のリストを表します。例えば、ユーザーがタッチ面 (画面やトラックパッドなど) を 3 本指で操作している場合、対応する <code>TouchList</code> オブジェクトは 1 本の指あたり 1 つの {{domxref("Touch")}} オブジェクトを持ち、全部で 3 要素になります。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("TouchList.length")}} {{readonlyInline}}</dt>
 <dd><code>TouchList</code> 中の {{domxref("Touch")}} オブジェクトの個数</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("TouchList.identifiedTouch()")}}</dt>
 <dd>識別子が指定された値と一致するリスト内の、最初の {{domxref("Touch")}} 要素を返す</dd>
 <dt>{{domxref("TouchList.item()")}}</dt>
 <dd>リスト内の指定した位置の {{domxref("Touch")}} オブジェクトを返します。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p><a href="/ja/docs/Web/API/Touch_events#Example">タッチイベントのメイン記事にある例</a>をご覧ください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName('Touch Events 2','#touchlist-interface')}}</td>
   <td>{{Spec2('Touch Events 2')}}</td>
   <td>Non-stable version.</td>
  </tr>
  <tr>
   <td>{{SpecName('Touch Events', '#touchlist-interface')}}</td>
   <td>{{Spec2('Touch Events')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.TouchList")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Touch_events">タッチイベント</a></li>
 <li>{{domxref("Document.createTouchList()")}}</li>
</ul>
