---
title: 'HTMLElement: animationstart イベント'
slug: Web/API/HTMLElement/animationstart_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS Animations
  - CSS アニメーション
  - Event
  - HTMLElement
  - Reference
  - イベント
translation_of: Web/API/HTMLElement/animationstart_event
---
<div>{{APIRef}}</div>

<p><strong><code>animationstart</code></strong> イベントは、 <a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a>が開始したときに発生します。 {{cssxref("animation-delay")}} がある場合、このイベントは待ち時間が経過したときに一度発生します。待ち時間が負の数の場合、イベントは {{domxref("AnimationEvent/elapsedTime", "elapsedTime")}} が待ち時間の絶対値と等しくなったときに発生します (および、関連して、アニメーションはシーケンスの中でそのタイムインデックスに再生が始まります)。</p>

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
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers/onanimationstart","onanimationstart")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードは <code>animationstart</code> イベントを待ち受けし、イベント発生時にメッセージを記録します。</p>

<pre class="brush: js">const animated = document.querySelector('.animated');

animated.addEventListener('animationstart', () =&gt; {
  console.log('アニメーション開始');
});
</pre>

<p>同様に、 <code>onanimationstart</code> を使用するとこうなります。</p>

<pre class="brush: js">const animated = document.querySelector('.animated');

animated.onanimationstart = () =&gt; {
  console.log('アニメーション開始');
};
</pre>

<h3 id="Live_example" name="Live_example">ライブデモ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="animation-example"&gt;
    &lt;div class="container"&gt;
        &lt;p class="animation"&gt;あなたは私たちの惑星を訪れるために寒い夜を選びました。&lt;/p&gt;
    &lt;/div&gt;
    &lt;button class="activate" type="button"&gt;アニメーションを有効にする&lt;/button&gt;
    &lt;div class="event-log"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.container {
  height: 3rem;
}

.event-log {
  width: 25rem;
  height: 2rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
  from {
    transform: translateX(100%) scaleX(3);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}
</pre>

<h4 id="JS">JS</h4>

<pre class="brush: js">const animation = document.querySelector('p.animation');
const animationEventLog = document.querySelector('.animation-example&gt;.event-log');
const applyAnimation = document.querySelector('.animation-example&gt;button.activate');
let iterationCount = 0;

animation.addEventListener('animationstart', () =&gt; {
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション開始' `;
});

animation.addEventListener('animationiteration', () =&gt; {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション反復: ${iterationCount}' `;
});

animation.addEventListener('animationend', () =&gt; {
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション終了'`;
  animation.classList.remove('active');
  applyAnimation.textContent = "アニメーションを有効にする";
});

animation.addEventListener('animationcancel', () =&gt; {
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション取り消し'`;
});

applyAnimation.addEventListener('click', () =&gt; {
  animation.classList.toggle('active');
  animationEventLog.textContent = '';
  iterationCount = 0;
  let active = animation.classList.contains('active');
  if (active) {
    applyAnimation.textContent = "アニメーションを取り消す";
  } else {
    applyAnimation.textContent = "アニメーションを有効にする";
  }
});
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '150px') }}</p>

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
   <td>{{SpecName("CSS3 Animations", "#eventdef-animationevent-animationstart")}}</td>
   <td>{{Spec2("CSS3 Animations")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLElement.animationstart_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations">CSS アニメーションの使用</a></li>
 <li>{{domxref("AnimationEvent")}}</li>
 <li>関連イベント: {{domxref("HTMLElement/animationend_event", "animationend")}}, {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}, {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}</li>
 <li>{{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/animationstart_event", "animationstart")}}</li>
 <li>{{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/animationstart_event", "animationstart")}}</li>
</ul>
