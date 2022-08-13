---
title: TransitionEvent
slug: Web/API/TransitionEvent
tags:
  - API
  - CSS
  - CSS3 Transitions
  - CSSOM
  - Experimental
  - Reference
translation_of: Web/API/TransitionEvent
---
<p>{{APIRef("CSSOM")}} {{SeeCompatTable}}</p>

<p><code><strong>TransitionEvent</strong></code> インターフェイスは、<a href="/ja/docs/Web/Guide/CSS/Using_CSS_transitions">トランジション</a>に関する情報を提供するイベントを表します。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}}</dt>
 <dd>指定された引数で <code>TransitionEvent</code> イベントを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親である {{domxref("Event")}} から継承したプロパティもあります。</em></p>

<dl>
 <dt>{{domxref("TransitionEvent.propertyName")}} {{readonlyInline}}</dt>
 <dd>{{domxref("DOMString")}} で、トランジションに関連付けられた CSS プロパティの名前が入ります。</dd>
 <dt>{{domxref("TransitionEvent.elapsedTime")}} {{readonlyInline}}</dt>
 <dd><code>float</code> で、このイベントが発生した時点でトランジションが実行している時間を秒単位で表します。この値は {{cssxref("transition-delay")}} プロパティの影響を受けません。</dd>
 <dt>{{domxref("TransitionEvent.pseudoElement")}} {{readonlyInline}}</dt>
 <dd>{{domxref("DOMString")}} で、 <code>::</code> で始まる、アニメーションが実行される<a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>の名前が入ります。トランジションが擬似要素上ではなく要素上で実行されている場合は、空文字列 <code>''</code> になります。</dd>
</dl>

<h2 id="Types_of_TransitionEvent" name="Types_of_TransitionEvent"><code>TransitionEvent</code> の種類</h2>

<dl>
 <dt>{{domxref("HTMLElement.transitioncancel_event", "transitioncancel")}}</dt>
 <dd>{{domxref("Event")}} で、 <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>が中断されたときに発生します。</dd>
 <dt>{{domxref("HTMLElement.transitionend_event", "transitionend")}}</dt>
 <dd>{{domxref("Event")}} で、 <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>の実行が終了したときに発生します。</dd>
 <dt>{{domxref("HTMLElement.transitionrun_event", "transitionrun")}}</dt>
 <dd>{{domxref("Event")}} で、 <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>が生成されたとき、実行中のトランジションに追加されたときに発生し、必ずしも開始時に発生するとは限りません。</dd>
 <dt>{{domxref("HTMLElement.transitionstart_event", "transitionstart")}}</dt>
 <dd>{{domxref("Event")}} で、 <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>の推移が開始したときに発生します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親である {{domxref("Event")}} から継承したプロパティもあります。</em></p>

<dl>
 <dt>{{domxref("TransitionEvent.initTransitionEvent()")}} {{non-standard_inline}}{{deprecated_inline}}</dt>
 <dd>非推奨の {{domxref("Document.createEvent()", "Document.createEvent(\"TransitionEvent\")")}} メソッドを使用して生成された <code>TransitionEvent</code> を初期化します。</dd>
</dl>

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
   <td>{{ SpecName('CSS3 Transitions', '#interface-transitionevent', 'TransitionEvent') }}</td>
   <td>{{ Spec2('CSS3 Transitions') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.TransitionEvent")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/CSS/Using_CSS_transitions">CSS トランジションの使用</a></li>
 <li>CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}.</li>
</ul>
