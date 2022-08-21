---
title: ExtendableEvent()
slug: Web/API/ExtendableEvent/ExtendableEvent
tags:
  - API
  - Constructor
  - ExtendableEvent
  - Reference
  - Service Workers
  - ServiceWorker
translation_of: Web/API/ExtendableEvent/ExtendableEvent
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary"><strong><code>ExtendableEvent()</code></strong> コンストラクターは、新しい {{domxref("ExtendableEvent")}} オブジェクトを作成します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <em>extendableEvent</em> = new ExtendableEvent(<em>type</em>, <em>init</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>type</code></dt>
 <dd>ExtendableEvent のタイプ（例えば、{{Event("install")}}、{{Event("activate")}}）。</dd>
 <dt><code>init</code> {{optional_inline}}</dt>
 <dd>イベントオブジェクトに適用するカスタム設定を含むオプションオブジェクト。 現在、仕様内に可能なオプションはありませんが、これは、さまざまな派生イベント間での上位互換性のために定義されています。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-extendableevent-extendableevent', 'ExtendableEvent')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ExtendableEvent.ExtendableEvent")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
