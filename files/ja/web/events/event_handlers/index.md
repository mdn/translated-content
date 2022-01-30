---
title: イベントの扱い (概要)
slug: Web/Events/Event_handlers
tags:
  - Beginner
  - DOM
  - DOM Beginner
translation_of: Web/Events/Event_handlers
---

<p>イベントとは、ブラウザーや OS の環境の変化を知らせる信号で、ブラウザーのウィンドウ内で発行されます。プログラマーは、イベントが発行されたときに実行される<em>イベントハンドラー</em>のコードを作成することで、ウェブページが変化に適切に対応できるようになります。</p>

<p>このページでは、イベントとイベントハンドラーの扱い方について、ごく簡単な「覚え書き」を提供しています。初めての方は、<a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベント入門</a>をお読みください。</p>


<h2 id="What_are_the_available_events">イベントでは何ができるのか</h2>

<p>イベントは、そのイベントを発行させる JavaScript オブジェクトのページの中や下に記述されています。例えば、ブラウザーのウィンドウや現在の文書で発生したイベントを確認するには、 <a href="/ja/docs/Web/API/Window#events"><code>Window</code></a> や <a href="/ja/docs/Web/API/Document#events"><code>Document</code></a> のイベントの節を参照してください。</p>

<p><a href="/ja/docs/Web/Events#event_index">イベントのリファレンス</a>を使用すると、アニメーションやメディアなどの特定の API に対してどの JavaScript オブジェクトがイベントを発行するかを調べることができます。</p>

<h2 id="DOM_event_handler_List">イベントハンドラーの登録</h2>

<p>ハンドラーの登録には、推奨される方法が 2 つあります。イベントハンドラーのコードは、ターゲットとなる要素の対応する <em>onevent</em> プロパティに割り当てて、イベントが起動されたときに実行されるようにするか、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} メソッドを使用して、ハンドラーを要素のリスナーとして登録するかすることができます。いずれの場合も、ハンドラーは <a href="/ja/docs/Web/API/Event"><code>Event</code> インターフェイス</a> (または<a href="/ja/docs/Web/API/Event#introduction">派生インターフェイス</a>) に準拠したオブジェクトを受け取ります。主な違いは、イベントリスナーのメソッドを使うと、複数のイベントハンドラーを追加 (または削除) できることです。</p>

<div class="notecard warning">
  <h4>警告</h4>
  <p>第 3 の方法として、 HTML の onevent 属性を使ってイベントハンドラーを設定する方法がありますが、お勧めしません。これはマークアップを膨張させ、可読性を低下させ、デバッグを困難にします。詳しくは、<a href="/ja/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these">インラインイベントハンドラー</a>を参照してください。</p>
</div>

<h3 id="Using_onevent_properties">onevent プロパティの使用</h3>

<p>慣習上、イベントを発行する Javascript オブジェクトには、それに対応する "onevent" プロパティ (イベント名の前に "on" を付けて命名) があります。これらのプロパティは、イベントが発行されたときに、関連するハンドラーコードを実行するために呼び出されます。</p>

<p>イベントハンドラーのコードを設定するには、適切な onevent プロパティに代入してください。 1 つの要素のそれぞれのイベントに対して、割り当てることができるイベントハンドラーは 1 つだけです。必要に応じて、同じプロパティに別の関数を代入することで、ハンドラーを置き換えることができます。</p>

<p>以下の例では、 <code>greet()</code> 関数を <code>click</code> イベントに割り当てるために <code>onclick</code> プロパティを使用しています。</p>

<pre class="brush: js">const btn = document.querySelector('button');

function greet(event){
  // print the event object to console
  console.log('greet:', arguments)
  }

  btn.onclick = greet;
</pre>

<p>なお、イベントハンドラーの第一引数には、イベントを表すオブジェクトが渡されます。このイベントオブジェクトは、 {{domxref("Event")}} インターフェースを実装しているか、またはそれを継承しています。</p>

<h3 id="EventTarget.addEventListener">EventTarget.addEventListener</h3>

<p>要素にイベントハンドラーを設定する最も柔軟な方法は、 {{domxref("EventTarget.addEventListener")}} メソッドを使用することです。この方法では、複数のリスナーを 1 つの要素に割り当てることができ、必要に応じて ({{domxref("EventTarget.removeEventListener")}} を使用して) リスナーを削除することができます。</p>

<div class="notecard note">
  <h4>メモ</h4>
  <p>イベントハンドラーの追加と削除ができることで、例えば、同じボタンで状況によって異なるアクションを実行することができます。また、より複雑なプログラムでは、古い、使われていないイベントハンドラーを整理することで、効率を上げることができます。</p>
</div>

<p>以下では、単純な <code>greet()</code> 関数をクリックイベントのリスナーまたはイベントハンドラーとして設定する方法を示します (必要に応じて、名前付き関数の代わりにラムダ関数を使用することもできます)。繰り返しますが、イベントは、イベントハンドラーの第一引数として渡されます。</p>

<pre class="brush: js">const btn = document.querySelector('button');

function greet(event){
  // print the event object to console
  console.log('greet:', arguments)
}

btn.addEventListener('click', greet);</pre>

<p>このメソッドは、イベントのキャプチャおよび削除の制御をするために、追加の引数/オプションを取ることもできます。詳細については、 {{domxref("EventTarget.addEventListener")}} のリファレンスページを参照してください。</p>

<h4 id="Using_an_abort_signal">中止シグナルの使用</h4>

<p>イベントリスナーの注目すべき機能は、中止シグナルを使って複数のイベントハンドラーを同時にクリーンアップできることです。</p>

<p>これは、同じ {{domxref("AbortSignal")}} を、一緒に削除できるようにしたいすべてのイベントハンドラーの {{domxref("EventTarget/addEventListener()", "addEventListener()")}} 呼び出しに渡すことで行われます。その後、 <code>AbortSignal</code> を所有するコントローラーで {{domxref("AbortController/abort()", "abort()")}} を呼び出すと、そのシグナルで追加されたすべてのイベントハンドラーが削除されます。例えば、 <code>AbortSignal</code> で削除できるイベントハンドラーを追加するには、次のようにします。</p>

<pre class="brush: js">const controller = new AbortController();

btn.addEventListener('click', function(event) {
  // イベントオブジェクトをコンソールに表示
  console.log('greet:', arguments)
  }, { signal: controller.signal }); // このハンドラーに AbortSignal を渡す</pre>

<p>上記のコードで生成したイベントハンドラーは、次のようにして削除することができます。</p>

<pre class="brush: js">controller.abort(); // このコントローラーに関連付けられたすべてのイベントハンドラーを削除</pre>


<section id="Quick_links">
  <ul>
    <li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベント入門</a></li>
    <li><a href="/ja/docs/Web/Events">イベントリファレンス</a></li>
  </ul>
</section>
