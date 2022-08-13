---
title: PushEvent.PushEvent()
slug: Web/API/PushEvent/PushEvent
tags:
  - API
  - Constructor
  - Experimental
  - Push
  - Push API
  - PushEvent
  - Reference
  - Service Workers
translation_of: Web/API/PushEvent/PushEvent
---
<p>{{APIRef("Push API")}}{{SeeCompatTable()}}</p>

<p><code><strong>PushEvent()</strong></code> コンストラクタは、新しい {{domxref("PushEvent")}} オブジェクトを生成します。このコンストラクタは、service worker にのみ公開されていることに注意してください。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">var myPushEvent = new PushEvent(type, <span class="idlInterface" id="idl-def-PushEvent"><span class="extAttr">eventInitDict</span></span>);</pre>

<h3 id="パラメーター">パラメーター</h3>

<dl>
 <dt><em>type</em></dt>
 <dd><code>PushEvent</code> の型を定義する {{domxref("DOMString")}}。{{event("push")}} か {{event("pushsubscriptionchange")}} を設定可能。</dd>
 <dt><em>eventInitDict</em> {{optional_inline}}</dt>
 <dd><code>PushEvent</code> オブジェクトに設定するいずれかの初期データを含むオプションオブジェクト。オプションは次のとおり：
 <ul>
  <li><code>data</code>： <code>PushEvent</code> に含ませる何らかのデータ。コンストラクタが呼び出された際、結果オブジェクトの {{domxref("PushEvent.data")}} プロパティは、<code>eventInitDict データ</code>メンバーから抽出されたバイトを含む新しい {{domxref("PushMessageData")}} オブジェクトを設定する。</li>
 </ul>
 </dd>
</dl>

<h2 id="例">例</h2>

<pre>var dataInit = {
                data : 'Some sample text'
              }

var myPushEvent = new PushEvent('push', dataInit);

myPushEvent.data.text(); // 'Some sample text' を返す</pre>

<p> </p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Push API','#the-push-event','PushEvent')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.PushEvent.PushEvent")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
 <li><a href="/ja/docs/Web/API/Push_API">Push API</a></li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>
