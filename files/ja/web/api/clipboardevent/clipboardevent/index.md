---
title: ClipboardEvent()
slug: Web/API/ClipboardEvent/ClipboardEvent
tags:
  - API
  - Clipboard API
  - ClipboardEvent
  - Constructor
  - Experimenatal
translation_of: Web/API/ClipboardEvent/ClipboardEvent
---
<p>{{APIRef("Clipboard API")}}{{SeeCompatTable}}</p>

<p><code><strong>ClipboardEvent()</strong></code> コンストラクタは、新たに生成された {{domxref("ClipboardEvent")}} を返します。これは、{{event("cut")}} や {{event("copy")}}、{{event("paste")}} イベントで変更されたクリップボード関連の情報を提供するイベントを表します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>clipboardEvent</em> = new ClipboardEvent(<em>type<code>, </code></em>{dataType: <em>aMimeType</em>, data: <code><em>someData</em></code>});
</pre>

<h3 id="引数">引数</h3>

<p><em>The <code>ClipboardEvent()</code></em><em> コンストラクタは、{{domxref("Event.Event", "Event()")}} からの引数も継承します。</em></p>

<dl>
 <dt><em>type</em></dt>
 <dd><code>ClipboardEvent</code> の種類の名前を表す {{domxref("DOMString")}}。大文字小文字を区別し、次のいずれかの値を指定できます: <code>'copy'</code> または <code>'cut'</code>、<code>'paste'</code>。</dd>
 <dt><code>dataType</code></dt>
 <dd><code>data</code> 引数に含まれるデータの MIME タイプを含む {{domxref("DOMString")}}。</dd>
 <dt><code>data</code></dt>
 <dd>clipboard イベントに関連したデータを含む {{domxref("DOMString")}}。</dd>
</dl>

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
   <td>{{ SpecName('Clipboard API', '#idl-def-ClipboardEventInit', 'ClipboardEvent()') }}</td>
   <td>{{ Spec2('Clipboard API') }}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.ClipboardEvent.ClipboardEvent")}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>Copy 関連イベント： {{event("copy")}}, {{event("cut")}}, {{event("paste")}}</li>
 <li>このプロパティが属する {{domxref("ClipboardEvent")}} インターフェイス。</li>
</ul>
