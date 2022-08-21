---
title: ExtendableMessageEvent()
slug: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
tags:
  - API
  - Constructor
  - ExtendableMessageEvent
  - Reference
  - Service Workers
translation_of: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary"><strong><code>ExtendableMessageEvent()</code></strong> コンストラクターは、新しい {{domxref("ExtendableMessageEvent")}} オブジェクトのインスタンスを作成します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <em>extendableMessageEvent</em> = new ExtendableMessageEvent(<em>type</em>, <em>init</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>type</dt>
 <dd>作成されるメッセージイベントのタイプを定義する {{domxref("DOMString")}}。</dd>
 <dt>init {{optional_inline}}</dt>
 <dd>次のパラメータを含む初期化オブジェクト。
 <ul>
  <li><code>data</code>: イベントのデータ — これはどのデータ型でもかまいません。</li>
  <li><code>origin</code>: 対応するサービスワーカーの環境設定オブジェクトのオリジンを定義する {{domxref("DOMString")}}。</li>
  <li><code>lastEventId</code>: イベントソースの最後のイベント ID を定義する {{domxref("DOMString")}}。</li>
  <li><code>source</code>: メッセージを送信した {{domxref("Client")}}、{{domxref("ServiceWorker")}}、または {{domxref("MessagePort")}}。</li>
  <li><code>ports</code>: メッセージを送信するチャネルに接続された {{domxref("MessagePort")}} オブジェクトを含む配列。</li>
 </ul>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">var init = {
             data : 'hello message',
             source : MessagePortReference,
             ports : MessagePortListReference
           }

var myEME = new ExtendableMessageEvent('message', init);</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-extendablemessageevent-extendablemessageevent', 'ExtendableMessageEvent()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ExtendableMessageEvent.ExtendableMessageEvent")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li><a href="/ja/docs/Web/API/Channel_Messaging_API">Channel Messaging</a></li>
</ul>
