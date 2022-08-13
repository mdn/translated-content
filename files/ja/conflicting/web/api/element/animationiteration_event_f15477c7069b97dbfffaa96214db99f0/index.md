---
title: 'Window: animationiteration event'
slug: >-
  conflicting/Web/API/Element/animationiteration_event_f15477c7069b97dbfffaa96214db99f0
tags:
  - API
  - Animation
  - CSS Animations
  - CSS アニメーション
  - Event
  - Reference
  - Window
  - イベント
translation_of: Web/API/Window/animationiteration_event
original_slug: Web/API/Window/animationiteration_event
---
<div>{{APIRef}}</div>

<p><strong><code>animationiteration</code></strong> イベントは、 <a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a>の反復が1回分終了し、次の回が始まったときに発生します。このイベントは {{domxref("Window/animationend_event", "animationend")}} イベントと同時には発生せず、従って <code>animation-iteration-count</code> が1のアニメーションでは発生しません。</p>

<table class="properties">
 <tbody>
  <tr>
   <th>バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th>キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th>インターフェイス</th>
   <td>{{domxref("AnimationEvent")}}</td>
  </tr>
  <tr>
   <th>イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers/onanimationiteration","onanimationiteration")}}</td>
  </tr>
 </tbody>
</table>

<p>このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Window")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 <a href="/ja/docs/Web/API/HTMLElement/animationiteration_event">HTMLElement: animationiteration イベント</a>を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードは <code>animationiteration</code> を使用して、アニメーションの反復が終了した回数を追跡します。</p>

<pre class="brush: js">let iterationCount = 0;

window.addEventListener('animationiteration', () =&gt; {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
});</pre>

<p>同様に、 <code>onanimationiteration</code> イベントハンドラープロパティを使用するとこうなります。</p>

<pre class="brush: js">let iterationCount = 0;

window.onanimationiteration = () =&gt; {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
};</pre>

<p><a href="/ja/docs/Web/API/HTMLElement/animationiteration_event#Live_example">このイベントのライブデモを参照してください。</a></p>

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
   <td>{{SpecName("CSS3 Animations", "#eventdef-animationevent-animationiteration")}}</td>
   <td>{{Spec2("CSS3 Animations")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.animationiteration_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations">CSS アニメーションの使用</a></li>
 <li>{{domxref("AnimationEvent")}}</li>
 <li>関連イベント: {{domxref("Window/animationstart_event", "animationstart")}}, {{domxref("Window/animationend_event", "animationend")}}, {{domxref("Window/animationcancel_event", "animationcancel")}}</li>
 <li>{{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/animationiteration_event", "animationiteration")}}</li>
 <li>{{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}</li>
</ul>
