---
title: NetworkInformation
slug: Web/API/NetworkInformation
tags:
  - API
  - Experimental
  - Interface
  - Network Information API
  - Reference
translation_of: Web/API/NetworkInformation
---
<div>{{APIRef("Network Information API")}}{{SeeCompatTable}}</div>

<p><code><strong>NetworkInformation</strong></code> インターフェースは、デバイスがネットワーク通信に使用している接続の情報を提供します。また、接続の種類が変更した場合、スクリプトに通知する手段を提供します。<code>NetworkInformation</code> インターフェースは、インスタンス生成できません。代わりに、{{domxref("Navigator")}} インターフェースの <code>connection</code> プロパティを通してアクセスします。</p>

<h2 id="プロパティ">プロパティ</h2>

<p><em>このインターフェースは、親である {{domxref("EventTarget")}} のプロパティも継承しています。</em></p>

<dl>
 <dt>{{domxref("NetworkInformation.type")}} {{readonlyinline}}</dt>
 <dd>デバイスがネットワーク通信に使用している接続の種類を返す。値は次のうちのいずれかである：
 <ul>
  <li><code>bluetooth</code></li>
  <li><code>cellular</code></li>
  <li><code>ethernet</code></li>
  <li><code>none</code></li>
  <li><code>wifi</code></li>
  <li><code>wimax</code></li>
  <li><code>other</code></li>
  <li><code>unknown</code></li>
 </ul>
 </dd>
 <dt>{{domxref("NetworkInformation.downlinkMax")}} {{readonlyinline}}</dt>
 <dd>メガビット毎秒（Mbps）単位で、基底の接続技術の最大下り速度を返す。</dd>
</dl>

<h3 id="イベントハンドラ">イベントハンドラ</h3>

<dl>
 <dt>{{domxref("NetworkInformation.onchange")}}</dt>
 <dd>接続情報が変更されたときに発火するイベントで、このオブジェクトで {{event("change")}} が発火する。</dd>
</dl>

<h2 id="メソッド">メソッド</h2>

<p><em>このインターフェースは、親である {{domxref("EventTarget")}} のメソッドを継承しています。</em></p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Network Information', '#idl-def-NetworkInformation', 'NetworkInformation')}}</td>
   <td>{{Spec2('Network Information')}}</td>
   <td>最初の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.NetworkInformation")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Network_Information_API">Network Information API</a></li>
 <li><a href="/ja/docs/Online_and_offline_events">Online and offline events</a></li>
 <li>これを実装している {{domxref("Navigator")}} インターフェース。</li>
</ul>
