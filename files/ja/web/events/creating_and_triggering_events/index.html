---
title: イベントの作成と起動
slug: Web/Events/Creating_and_triggering_events
tags:
  - Advanced
  - DOM
  - Guide
  - JavaScript
  - NeedsContent
  - events
translation_of: Web/Events/Creating_and_triggering_events
original_slug: Web/Events/Creating_and_triggering_events
---
<p>この記事では、 DOM イベントを作成して処理する方法を説明します。このようなイベントは、一般に、ブラウザー自体によって起動されたイベントとは対照的に、<strong>合成イベント</strong>と呼ばれます。</p>

<h2 id="Creating_custom_events">カスタムイベントを作成する</h2>

<p>イベントは、次のように <a href="/ja/docs/Web/API/Event"><code>Event</code></a> コンストラクターを使用して作成できます。</p>

<pre class="brush: js">const event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { /* ... */ }, false);

// Dispatch the event.
elem.dispatchEvent(event);</pre>

<p>上記のコード例は <a href="/ja/docs/Web/API/EventTarget/dispatchEvent">EventTarget.dispatchEvent()</a> メソッドを使用します。</p>

<p>このコンストラクターは、ほとんどの最新のブラウザーでサポートされています (Internet Explorer は例外です)。もっと冗長的なアプローチ (Internet Explorer で動作するもの) は、下記の<a href="#the_old-fashioned_way">古い方法</a>を参照して下さい。</p>

<h3 id="Adding_custom_data_–_CustomEvent">カスタムデータの追加 – CustomEvent()</h3>

<p>イベントオブジェクトにデータを追加するには、<a href="/ja/docs/Web/API/CustomEvent">CustomEvent</a> インターフェイスが存在し、<u><strong>detail</strong></u> プロパティを使用してカスタムデータを渡すことができます。</p>

<p>たとえば、イベントは次のように作成できます。</p>

<pre class="brush: js">const event = new CustomEvent('build', { detail: elem.dataset.time });</pre>

<p>これにより、イベントリスナー内の追加データにアクセスすることができます。</p>

<pre class="brush: js">function eventHandler(e) {
  console.log('The time is: ' + e.detail);
}
</pre>

<h3 id="The_old-fashioned_way">古い方法</h3>

<p>イベントを作成する古いアプローチでは、 Java に触発された API が使用されます。以下に例を示します。</p>

<pre class="brush: js">// イベントの作成
const event = document.createEvent('Event');

// イベントの名前を 'build' と定義する
event.initEvent('build', true, true);

// イベントを待ち受けする
elem.addEventListener('build', function (e) {
  // e.target が elem と一致したとき
}, false);

// 対象が何らかの Element またはその他の EventTarget の場合
elem.dispatchEvent(event);

</pre>

<h3 id="Event_bubbling">イベントのバブリング</h3>

<p>子要素からイベントを起動させ、祖先要素がそれを、任意でデータも、受け取りたい場合がよくあります。</p>

<pre class="brush: html">&lt;form&gt;
  &lt;textarea&gt;&lt;/textarea&gt;
&lt;/form&gt;
</pre>

<pre class="brush: js">const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

// 新しいイベントを生成し、バブリングを許可し、 "detail" プロパティに渡したいデータを設定する
const eventAwesome = new CustomEvent('awesome', {
  bubbles: true,
  detail: { text: () =&gt; textarea.value }
});

// フォームイベントが "awesome" カスタムイベントを待ち受けし、渡されたものの text() メソッドをコンソールに出力する
form.addEventListener('awesome', e =&gt; console.log(e.detail.text()));

// ユーザー型の場合、 form 内の textarea は発生させるイベントを起動・処理し、それを開始点として使用する
textarea.addEventListener('input', e =&gt; e.target.dispatchEvent(eventAwesome));
</pre>

<h3 id="Creating_and_dispatching_events_dynamically">イベントの動的な生成と処理</h3>

<p>要素はまだ作成されていないイベントを待ち受けすることができます。</p>

<pre class="brush: html">&lt;form&gt;
  &lt;textarea&gt;&lt;/textarea&gt;
&lt;/form&gt;
</pre>

<pre class="brush: js">const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

form.addEventListener('awesome', e =&gt; console.log(e.detail.text()));

textarea.addEventListener('input', function() {
  // Create and dispatch/trigger an event on the fly
  // Note: Optionally, we've also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element
  this.dispatchEvent(new CustomEvent('awesome', { bubbles: true, detail: { text: () =&gt; textarea.value } }))
});
</pre>

<h2 id="Triggering_built-in_events">ビルトインイベントの起動</h2>

<p>この例では、 DOM メソッドを使用してチェックボックスでクリック (プログラムでクリックイベントを生成する) をシミュレートする方法を示します。<a href="https://media.prod.mdn.mozit.cloud/samples/domref/dispatchEvent.html">デモを見る</a>。</p>

<pre class="brush: js">function simulateClick() {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  const cb = document.getElementById('checkbox');
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    alert("not cancelled");
  }
}</pre>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/CustomEvent/CustomEvent">CustomEvent()</a></li>
 <li>{{domxref("document.createEvent()")}}</li>
 <li>{{domxref("Event.initEvent()")}}</li>
 <li>{{domxref("EventTarget.dispatchEvent()")}}</li>
 <li>{{domxref("EventTarget.addEventListener()")}}</li>
</ul>

<section id="Quick_links">
  <ul>
    <li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベント入門</a></li>
    <li><a href="/ja/docs/Web/Events/Event_handlers">イベントハンドラー (概要)</a></li>
    <li><a href="/ja/docs/Web/Events">イベントリファレンス</a></li>
  </ul>
</section>
