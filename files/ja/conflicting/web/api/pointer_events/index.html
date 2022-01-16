---
title: TouchEvent と MouseEvent の両方をサポートする
slug: conflicting/Web/API/Pointer_events
tags:
  - Guide
  - TouchEvent
  - touch
translation_of: Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
original_slug: Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
---
<p>{{DefaultAPISidebar("Touch Events")}}</p>

<p>{{domxref("Touch_events","touch")}} インターフェースは、タッチできるデバイス 上で高いユーザーエクスペリエンスを生み出すアプリケーションを可能にします。しかし、ウェブコンテンツの大部分がマウス入力でだけ操作できるように設計されている現実があります。したがって、ブラウザがタッチをサポートしていても、マウス入力のみを想定したコンテンツを直接修正することなく<em>従来通り</em>動作させるために、ブラウザはまだマウスイベントを<em>エミュレート</em>しなくてはなりません。</p>

<p>理想的には、タッチベースのアプリケーションは、明示的にマウスの入力に対処する必要はありません。しかし、ブラウザはマウスイベントをエミュレートしなければならないので、処理しなければならない相互問題がいくつかあります。以下は開発者のためのイベントの動作と予期しない問題についての詳細です。</p>

<h2 id="イベントの発火">イベントの発火</h2>

<p>タッチイベント標準は、タッチとマウスの動作に関するいくつかのブラウザ要件（詳細については <a href="https://w3c.github.io/touch-events/#mouse-events"><em>Interaction with Mouse Events and click</em></a> セクションを見てください）を定義しており、<em>ブラウザは同じユーザー入力のレスポンスでタッチイベントとマウスイベントの両方を発火できる</em>と記述しています。このセクションでは、アプリケーションに影響を与える可能性がある要件について説明します。</p>

<p>ひとつのユーザー入力でブラウザがタッチイベントとマウスイベントの両方を発火した場合、ブラウザは何らかのマウスイベントの前に {{event("touchstart")}} を発火させなくては <em>なりません</em>。したがって、アプリケーションで特定のタッチ {{domxref("Touch.target","target")}} 要素でマウスイベントが発火させたくない場合、要素のタッチイベントハンドラーで {{domxref("Event.preventDefault()","preventDefault()")}} を呼び出し追加のマウスイベントが送出されないようにしなければなりません。</p>

<p>{{event("touchmove")}} イベントハンドラーで <code>preventDefault()</code> を呼び出すコードスニペットです。</p>

<pre class="brush: js">// touchmove handler
function process_touchmove(ev) {
  // Call preventDefault() to prevent any further handling
  ev.preventDefault();
}
</pre>

<h2 id="イベント順">イベント順</h2>

<p>特定のタッチイベントとマウスイベントの順序は実装依存ですが、標準仕様ではひとつの入力に対して次の順序が<em>典型</em>であるとしています。</p>

<ul>
 <li><code>touchstart</code></li>
 <li>指の動作に応じて 0、または複数の <code>touchmove</code> イベント</li>
 <li><code>touchend</code></li>
 <li><code>mousemove</code></li>
 <li><code>mousedown</code></li>
 <li><code>mouseup</code></li>
 <li><code>click</code></li>
</ul>

<p>{{event("touchstart")}} か {{event("touchmove")}}、{{event("touchend")}} が動作の間にキャンセルされた場合、mouse か click は発火されず、続くイベントは次のものだけになります：</p>

<ul>
 <li><code>touchstart</code></li>
 <li>指の動作に応じて 0、または複数の <code>touchmove</code> イベント</li>
 <li><code>touchend</code></li>
</ul>

<h2 id="コミュニティー">コミュニティー</h2>

<ul>
 <li><a href="https://github.com/w3c/touch-events">Touch Events Community Group</a></li>
 <li><a href="https://lists.w3.org/Archives/Public/public-touchevents/">Mail list</a></li>
 <li><a href="irc://irc.w3.org:6667/">W3C #touchevents IRC channel</a></li>
</ul>

<h2 id="関連項目とリソース">関連項目とリソース</h2>

<ul>
 <li><a href="/Web/API/Touch_events">Touch Events Overview</a></li>
 <li><a href="/Web/API/Touch_events/Using_Touch_Events">Using Touch Events</a></li>
 <li><a href="http://www.html5rocks.com/en/mobile/touchandmouse/">Touch and Mouse (Together Again for the First Time)</a></li>
</ul>
