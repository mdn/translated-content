---
title: EventTarget
slug: Web/API/EventTarget
tags:
  - API
  - DOM
  - DOM Events
  - EventTarget
  - Interface
translation_of: Web/API/EventTarget
---
<p>{{ApiRef("DOM Events")}}</p>

<p><span class="seoSummary"><strong><code>EventTarget</code></strong> は DOM インターフェイスで、イベントを受け取ることや、リスナーを持つことができるオブジェクトが実装しています。</span></p>

<p>{{domxref("Element")}}、{{domxref("Document")}}、{{domxref("Window")}} は、最も一般的なイベントターゲットですが、他のオブジェクトも、例えば {{domxref("XMLHttpRequest")}}、{{domxref("AudioNode")}}、{{domxref("AudioContext")}} などもイベントターゲットになります。</p>

<p>多くのイベントターゲット (要素、文書、ウィンドウを含む) は、<a href="/ja/docs/Web/Guide/Events/Event_handlers">イベントハンドラー</a>を設定するのに <code>on<var>イベント名</var></code> プロパティや属性を使用することもできます。</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Constructor">コンストラクター</h2>

<dl>
	<dt>{{domxref("EventTarget.EventTarget()","EventTarget()")}}</dt>
	<dd>新しい <code>EventTarget</code> オブジェクトのインスタンスを作成します。</dd>
</dl>

<h2 id="Methods">メソッド</h2>

<dl>
	<dt>{{domxref("EventTarget.addEventListener()", "<var>EventTarget</var>.addEventListener()")}}</dt>
	<dd>特定のイベント種別のイベントハンドラーを <code><var>EventTarget</var></code> に登録します。</dd>
	<dt>{{domxref("EventTarget.removeEventListener()", "<var>EventTarget</var>.removeEventListener()")}}</dt>
	<dd><code><var>EventTarget</var></code> からイベントリスナーを削除します。</dd>
	<dt>{{domxref("EventTarget.dispatchEvent()", "<var>EventTarget</var>.dispatchEvent()")}}</dt>
	<dd>この <code><var>EventTarget</var></code> にイベントを送出します。</dd>
</dl>


<h2 id="Example">例</h2>

<h3 id="Simple_implementation_of_EventTarget">EventTarget の簡単な実装</h3>

<pre class="brush: js">var EventTarget = function() {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for (var i = 0, l = stack.length; i &lt; l; i++) {
    if (stack[i] === callback){
      stack.splice(i, 1);
      return;
    }
  }
};

EventTarget.prototype.dispatchEvent = function(event) {
  if (!(event.type in this.listeners)) {
    return true;
  }
  var stack = this.listeners[event.type].slice();

  for (var i = 0, l = stack.length; i &lt; l; i++) {
    stack[i].call(this, event);
  }
  return !event.defaultPrevented;
};
</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
	<thead>
		<tr>
			<th scope="col">仕様書</th>
			<th scope="col">状態況</th>
			<th scope="col">備考</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>{{SpecName('DOM WHATWG', '#interface-eventtarget', 'EventTarget')}}</td>
			<td>{{Spec2('DOM WHATWG')}}</td>
			<td>変更なし。</td>
		</tr>
		<tr>
			<td>{{SpecName('DOM3 Events', 'DOM3-Events.html#interface-EventTarget', 'EventTarget')}}</td>
			<td>{{Spec2('DOM3 Events')}}</td>
			<td>いくつかの引数が任意になったり (<code><var>listener</var></code>)、 <code>null</code> 値を許可するようになったりした (<code><var>useCapture</var></code>)。</td>
		</tr>
		<tr>
			<td>{{SpecName('DOM2 Events', 'events.html#Events-EventTarget', 'EventTarget')}}</td>
			<td>{{Spec2('DOM2 Events')}}</td>
			<td>初回定義。</td>
		</tr>
	</tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.EventTarget")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
	<li><a href="/ja/docs/Web/Events">イベントリファレンス</a> - プラットフォームで利用可能なイベント。</li>
	<li><a href="/ja/docs/Web/Guide/Events">イベント開発者ガイド</a></li>
	<li>{{domxref("Event")}} インターフェイス</li>
</ul>
