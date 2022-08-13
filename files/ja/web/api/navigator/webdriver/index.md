---
title: Navigator.webdriver
slug: Web/API/Navigator/webdriver
tags:
  - API
  - Navigator
  - Property
  - Reference
  - WebDriver
  - weblock
  - プロパティ
translation_of: Web/API/Navigator/webdriver
---
<div>{{SeeCompatTable}}{{APIRef("WebDriver")}}</div>

<p><span class="seoSummary"><strong><code>webdriver</code></strong> は {{domxref("navigator")}} インターフェイスの読み取り専用プロパティで、ユーザーエージェントが自動制御されているかどうかを示します。</span></p>

<p>これは協調動作をするユーザーエージェントが <a href="/ja/docs/Web/WebDriver">WebDriver</a> によって制御されていることを文書に伝えるための標準の方法を定めており、例えば自動制御の間は異なるコードを実行したりすることができます。</p>

<p>次のような場合に <code>navigator.webdriver</code> プロパティが true になります。</p>

<dl>
 <dt>Chrome</dt>
 <dd><code>--enable-automation</code> または <code>--headless</code> フラグまたは <code>--remote-debugging-port</code> が使用されているとき。</dd>
 <dt>Firefox</dt>
 <dd>設定の <code>marionette.enabled</code> または <code>--marionette</code> フラグが渡されたとき。</dd>
</dl>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <var>isAutomated</var> = navigator.webdriver</pre>

<h3 id="Value" name="Value">値</h3>

<p>A {{JSxRef("Boolean")}}</p>

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
   <td>{{SpecName("WebDriver","#dom-navigatorautomationinformation-webdriver","webdriver")}}</td>
   <td>{{Spec2("WebDriver")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.Navigator.webdriver")}}</div>
