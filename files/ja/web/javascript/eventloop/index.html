---
title: 並行モデルとイベントループ
slug: Web/JavaScript/EventLoop
tags:
  - Advanced
  - JavaScript
translation_of: Web/JavaScript/EventLoop
---
<div>{{JsSidebar("Advanced")}}</div>

<p>JavaScriptは、"event loop"に基づく同時実行モデルを持ちます。このモデルはC言語やJavaのような他の言語のモデルとかなり異なっています。</p>

<h2 id="ランタイムの概要">ランタイムの概要</h2>

<p>後続のセクションでは、理論モデルを説明します。現代のJavaScriptエンジンは、記載されたセマンティクスに従って実装され、また高度に最適化されています。</p>

<h3 id="視覚表示">視覚表示</h3>

<p style="text-align: center;"><img alt="Stack, heap, queue" src="the_javascript_runtime_environment_example.svg" style="height: 270px; width: 294px;"></p>

<h3 id="スタック">スタック</h3>

<p>関数呼び出しはフレームのスタックを形成します。</p>

<pre class="brush: js notranslate">function foo(b){
  var a = 10;
  return a + b + 11;
}

function bar(x){
  var y = 3;
  return foo(x * y);
}

console.log(bar(7)); // returns 42
</pre>

<p><code>bar</code>を呼び出すと、<code>bar</code>の引数とローカル変数を含んだ最初のフレームが生成されます。<code>bar</code>が<code>foo</code>を呼び出すと、<code>foo</code>の引数とローカル変数を含んだ２番目のフレームが生成され、最初のフレームの上にプッシュされます。<code>foo</code>から返ると、先頭のフレーム要素はスタックからポップされます(<code>bar</code>のコールフレームのみが残ります)。<code>bar</code>から返るときスタックは空になります。</p>

<h3 id="ヒープ">ヒープ</h3>

<p>オブジェクトはヒープに割り当てられています。ヒープは、メモリの大規模で大部分は構造化されていない領域を意味する名前です。</p>

<h3 id="キュー">キュー</h3>

<p>JavaScriptランタイムはメッセージキューを含んでいます。メッセージキューは、処理されるメッセージのリストです。各メッセージに関数を関連付けられています。スタックが空のとき、メッセージがキューから取り出され、処理されます。その処理は、関連する関数の呼び出し(と最初のスタックフレームの作成)で構成されています。スタックが再度空になると、メッセージ処理は終了します。</p>

<h2 id="イベントループ">イベントループ</h2>

<p><code>event loop</code>という名前は、それが一般的にどのように実装されたかに従って付けられました。これは通常、次のものに似ています。</p>

<pre class="brush: js notranslate">while(queue.waitForMessage()){
  queue.processNextMessage();
}</pre>

<p><code>queue.waitForMessage</code>はもしその時点でメッセージが存在しないのであれば、同期的にメッセージが到着するのを待ちます。</p>

<h3 id="Run-to-completion">"Run-to-completion"</h3>

<p>その他のメッセージが処理される前に、各メッセージは完全に処理されています。 関数が実行されるたびに、それが横取りすることはできず、他のコードが実行される前に、完全に実行されます（および関数が操作するデータを変更することができる）という事実を含め、プログラムについて推論するときにいくつかの素晴らしい特性を提供しています。例えば、これはCとは異なります。というのは、関数はスレッドで実行されている場合、それは別のスレッドでいくつかの他のコードを実行するには、任意の時点で停止することができます。</p>

<p>このモデルの欠点は、メッセージが完了するまでに時間がかかりすぎる場合は、Webアプリケーションはクリックやスクロールのようなユーザインタラクションを処理することができないことです。ブラウザは"スクリプトは実行に非常に時間がかかる"ダイアログを用いてこれを軽減します。追従するお勧めは、メッセージを短い処理にし、可能な場合には、いくつかのメッセージに一つのメッセージを切り縮めることです。</p>

<h3 id="メッセージの追加">メッセージの追加</h3>

<p>Webブラウザでは、メッセージは、イベントが発生し、それに接続されているイベントリスナーがある任意の時間に追加されます。イベントリスナーがない場合、イベントは失われます。だから、他のイベントと同様に、クリックイベントハンドラを持つ要素をクリックすると、メッセージが追加されます。</p>

<p><code><a href="/ja/docs/Web/API/WindowTimers.setTimeout" title="/docs/window.setTimeout">setTimeout</a></code>を呼び出すと、2番目の引数として渡された時間が経過した後、メッセージがキューに追加されます。キューに他のメッセージがない場合、メッセージはすぐに処理されます。しかしながら、メッセージがある場合、<code>setTimeout</code>メッセージは他のメッセージを処理するために待機する必要があります。そのため第二引数は、保証時間ではなく、最小の時間を示しています。</p>

<h3 id="一緒に通信するいくつかのランタイム">一緒に通信するいくつかのランタイム</h3>

<p>ウェブワーカーやクロスオリジンのiframeは、独自のスタック、ヒープ、およびメッセージキューがあります。二つの異なるランタイムのみ<a href="/ja/docs/DOM/window.postMessage" title="/docs/DOM/window.postMessage"><code>postMessage</code></a>メソッドによって送信メッセージを介して通信することができます。他のランタイムが<code>message</code>イベントをリッスンする場合、このメソッドは他のランタイムにメッセージを追加します。</p>

<h2 id="ブロッキング不可">ブロッキング不可</h2>

<p>イベントループモデルの非常に興味深い特性は、他の多くの言語とは異なり、JavaScriptは決してブロックしないことです。I/Oの取り扱いは、通常、イベントとコールバックを介して行われます。そのため、アプリケーションは<a href="/ja/docs/Web/API/IndexedDB_API" title="/docs/IndexedDB">IndexedDB</a>のクエリや<a href="/ja/docs/Web/API/XMLHttpRequest" title="/docs/DOM/XMLHttpRequest">XHR</a>リクエストが返るのを待っている時も、ユーザ入力のような他のことを処理することができます。</p>

<p><code>alert</code>か同期XHRのようにレガシーな例外が存在しますが、それらを避けることは良い慣習とされています。<a href="http://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311">例外に対する例外は存在する</a>ことに気をつけてください(と言っても、たいていは他の何かというよりはむしろ実装のバグですが)。</p>
