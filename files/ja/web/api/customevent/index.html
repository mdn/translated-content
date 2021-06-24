---
title: CustomEvent
slug: Web/API/CustomEvent
tags:
  - API
  - CustomEvent
  - DOM
  - Interface
  - NeedsExample
  - Reference
  - インターフェイス
translation_of: Web/API/CustomEvent
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>CustomEvent</code></strong> インターフェイスは、何らかの目的でアプリケーションから初期化されるイベントを表します。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}</dt>
 <dd><code>CustomEvent</code> を生成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("CustomEvent.detail")}} {{readonlyinline}}</dt>
 <dd>イベント初期化時にどんなデータでも受け渡すことができます。</dd>
</dl>

<p><em>このインターフェイスは親である {{domxref("Event")}} からプロパティを継承します</em></p>

<p>{{Page("/ja/docs/Web/API/Event", "Properties")}}</p>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}</dt>
 <dd>
 <p><code>CustomEvent</code> オブジェクトを初期化します。もし該当イベントがすでに移譲されたことがある場合、この関数は何もしません。</p>
 </dd>
</dl>

<p><em>このインターフェイスは親である {{domxref("Event")}} から関数を継承します</em>。</p>

<p>{{Page("/ja/docs/Web/API/Event", "Methods")}}</p>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td>{{SpecName('DOM WHATWG','#interface-customevent','CustomEvent')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.CustomEvent")}}</p>

<h2 id="Firing_from_privileged_code_to_non-privileged_code" name="Firing_from_privileged_code_to_non-privileged_code">特権を持つコードから持たないコードへのイベント発行</h2>

<p><code>CustomEvent</code> を特権を持つコード (つまり、エクステンション) から持たないコード (つまり、ウェブページ) へ発行する時、セキュリティの問題を考慮すべきです。Firefox と他の Gecko アプリケーションは、自動的にセキュリティホールを防ぐ為、他者から直接利用される1つのコンテキスト内で作られるオブジェクトを制限します。しかし、この制限によりコードが期待した通りに動作しない可能性があります。</p>

<p><code>CustomEvent</code> オブジェクトが作られている間、同じ <a href="/ja/docs/XUL/window">window</a> からオブジェクトを作る必要があります。作られた <code>CustomEvent</code> の <code>detail</code> 属性は同じ制限の影響を受けるでしょう。制限のないコンテンツからは <code>String</code> と <code>Array</code> の値は読み込み可能ですが、カスタム <code>Object</code> は読み込めません。カスタムオブジェクトを使用している間、<a href="/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.cloneInto">Components.utils.cloneInto()</a> を使ってコンテンツのスクリプトから読み込み可能なオブジェクトの属性を定義する必要があるでしょう。</p>

<pre class="brush: js">// doc はコンテンツのドキュメントの参照
function dispatchCustomEvent(doc) {
  var eventDetail = Components.utils.cloneInto({foo: 'bar'}, doc.defaultView);
  var myEvent = doc.defaultView.CustomEvent("mytype", eventDetail);
  doc.dispatchEvent(myEvent);
}</pre>

<p>しかし、関数を外部にさらすと、 chrome 特権でコンテンツスクリプトの実行を許可することになり、脆弱性となる可能性があることを覚えておく必要があります。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Window.postMessage()")}}</li>
 <li><a href="/ja/docs/Code_snippets/Interaction_between_privileged_and_non-privileged_pages">特権を持つページと持たないページの相互作用</a></li>
 <li><a href="/ja/docs/Web/Guide/Events/Creating_and_triggering_events">イベントの生成とトリガー</a></li>
</ul>
