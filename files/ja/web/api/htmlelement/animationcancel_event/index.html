---
title: 'HTMLElement: animationcancel イベント'
slug: Web/API/HTMLElement/animationcancel_event
tags:
  - Animation
  - AnimationEvent
  - CSS Animations
  - CSS アニメーション
  - Event
  - Reference
  - animationcancel
  - events
  - イベント
translation_of: Web/API/HTMLElement/animationcancel_event
---
<div>{{APIRef}}{{SeeCompatTable}}</div>

<p><strong><code>animationcancel</code></strong> イベントは、 <a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a>が予期せず中断されたときに発生します。言い換えれば、 {{domxref("HTMLElement/animationend_event", "animationend")}} イベントを送出せずに実行が停止するときはいつでもです。これは {{cssxref("animation-name")}} が変更されてアニメーションが削除されたり、動いているノードが CSS を使用して非表示にされた場合などに起こることがあります。したがって、直接または原因として、その包含ノードのいずれかが隠されています。</p>

<p>このイベントのイベントハンドラーは、 {{domxref("GlobalEventHandlers.onanimationcancel", "onanimationcancel")}} プロパティを設定するか、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用することで追加することができます。</p>

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
   <td>{{domxref("GlobalEventHandlers/onanimationcancel","onanimationcancel")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードは現在アニメーションしている要素を取得し、 <code>animationcancel</code> イベントのリスナーを追加します。次に、要素の {{cssxref("display")}} プロパティを <code>none</code> に設定し、 <code>animationcancel</code> イベントを引き起こします。</p>

<pre class="brush: js">const animated = document.querySelector('.animated');

animated.addEventListener('animationcancel', () =&gt; {
  console.log('アニメーションが取り消されました');
});

animated.style.display = 'none';</pre>

<p>同様に、 {{domxref("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}} プロパティを <code>addEventListener()</code> の代わりに使用するとこうなります。</p>

<pre class="brush: js">const animated = document.querySelector('.animated');
animated.onanimationcancel = () =&gt; {
  console.log('アニメーションが取り消されました');
};

animated.style.display = 'none';</pre>

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
   <td>{{SpecName("CSS3 Animations", "#eventdef-animationevent-animationcancel")}}</td>
   <td>{{Spec2("CSS3 Animations")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLElement.animationcancel_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations">CSS アニメーションの使用</a></li>
 <li>{{domxref("AnimationEvent")}}</li>
 <li>関連イベント: {{domxref("HTMLElement/animationstart_event", "animationstart")}}, {{domxref("HTMLElement/animationend_event", "animationend")}}, {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}</li>
 <li>{{domxref("Document")}} を対象としたこのイベント: {{domxref("Window/animationcancel_event", "animationcancel")}}</li>
 <li>{{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/animationcancel_event", "animationcancel")}}</li>
</ul>
