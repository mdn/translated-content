---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
tags:
  - API
  - Clipboard API
  - Event
  - Experimental
  - Interface
translation_of: Web/API/ClipboardEvent
---
<p>{{APIRef("Clipboard API")}} {{SeeCompatTable}}</p>

<p><strong><code>ClipboardEvent</code></strong> インターフェイスは、 クリップボードの変更に関連する情報を提供するイベントを表します。すなわち、{{event("cut")}} と {{event("copy")}}、{{event("paste")}} イベントです。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親 {{domxref("Event")}} からのプロパティも継承します。</em></p>

<dl>
 <dt>{{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}</dt>
 <dd>ユーザーが開始した {{event("cut")}} または {{event("copy")}}、{{event("paste")}} 操作によって影響を受けたデータとその MIME タイプを含む {{domxref("DataTransfer")}} オブジェクト。</dd>
</dl>

<h2 id="Constructor" name="Constructor">コンストラクタ</h2>

<dl>
 <dt>{{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}</dt>
 <dd>指定したパラメータで <code>ClipboardEvent</code> イベントを生成する。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>固有のメソッドはありません。親 {{domxref("Event")}} からのメソッドを継承します。</em></p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('Clipboard API', '#clipboard-event-interfaces', 'ClipboardEvent') }}</td>
   <td>{{ Spec2('Clipboard API') }}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.ClipboardEvent")}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>Copy 関連イベント： {{event("copy")}}, {{event("cut")}}, {{event("paste")}}</li>
</ul>
