---
title: AnimationEvent.elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
tags:
  - API
  - AnimationEvent
  - CSSOM
  - Experimental
  - Property
  - Reference
  - Web Animations
  - プロパティ
translation_of: Web/API/AnimationEvent/elapsedTime
---
<div>{{SeeCompatTable}}{{ apiref("Web Animations API") }}</div>

<p><code><strong>AnimationEvent.elapsedTime</strong></code> は読み取り専用のプロパティで、アニメーションが開始されてからの秒数を <code>float</code> 型で表します。このイベントが発生したとき、アニメーションが停止した場合を除いて常に設定されます。 {{domxref("HTMLElement/animationstart_event", "animationstart")}} イベントにおいては <code>elapsedTime</code> は <code>0.0</code> になりますが、 {{cssxref("animation-delay")}} が負の値の場合は、このイベントは <code>elapsedTime</code> が <code>(-1 * </code><em>待ち時間</em><code>)</code> であるときに発生します。.</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">time = <em>AnimationEvent</em>.elapsedTime</pre>

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
   <td>{{ SpecName('CSS3 Animations', '#dom-animationevent-elapsedtime', 'AnimationEvent.elapsedTime') }}</td>
   <td>{{ Spec2('CSS3 Animations')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.AnimationEvent.elapsedTime")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations">CSS アニメーションの使用</a></li>
 <li>アニメーションに関する CSS プロパティと @ 規則: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.</li>
 <li>所属先の {{domxref("AnimationEvent")}} インターフェイス</li>
</ul>
