---
title: Media​Stream Recording API の使用
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
tags:
  - API
  - Example
  - Guide
  - MediaRecorder
  - MediaStream Recording API
  - Tutorial
translation_of: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
---
<div>{{DefaultAPISidebar("MediaStream Recording")}}</div>

<div class="summary">
<p><span class="seoSummary"><a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a> を使用すると、音声や動画のストリームを簡単に記録できます。 {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}} と一緒に使用すると、ユーザーの入力デバイスから記録して結果を即座にウェブアプリで使用するための簡単な方法が提供されます。</span> 音声と動画の両方を別々にまたは一緒に記録することができます。 この記事では、この API を提供する <code>MediaRecorder</code> インターフェースの使用方法に関する基本的なガイドを提供することを目的としています。</p>
</div>

<h2 id="A_sample_application_Web_Dictaphone" name="A_sample_application_Web_Dictaphone">サンプルアプリ: ウェブディクタフォン</h2>

<p><img alt="ウェブディクタフォンのサンプルアプリの画像 - 正弦波のサウンドの視覚化、次に録音と停止ボタン、そして再生可能な録音済みトラックの音声ジュークボックス。" src="https://mdn.mozillademos.org/files/7885/web-dictaphone.png" style="display: block; margin: 0px auto;"></p>

<p>MediaRecorder API の基本的な使い方を説明するために、ウェブベースのディクタフォン（dictaphone）を作りました。 それは音声の断片を録音してからそれらを再生することを可能にします。 Web Audio API を使用して、デバイスのサウンド入力を視覚化することもできます。 この記事では録音と再生の機能に集中します。</p>

<p>この<a href="https://mdn.github.io/web-dictaphone/">デモがライブで実行</a>されているのを見ることも、GitHub で<a href="https://github.com/mdn/web-dictaphone">ソースコードを入手</a>することもできます。</p>

<h2 id="CSS_goodies" name="CSS_goodies">CSS のおいしいところ</h2>

<p>このアプリでは HTML は非常に単純なので、ここでは説明しません。 言及する価値がある、もう少し興味深い CSS がいくつかありますので、それらについて以下で説明します。 CSS に興味がなく、JavaScript に直行したいのであれば、<a href="#basic_app_setup">基本的なアプリの設定</a>のセクションに進んでください。</p>

<h3 id="Keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc" name="Keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc">calc() で、デバイスの高さに関係なく、インタフェースをビューポートに制限</h3>

<p>{{cssxref("calc")}} 関数は、CSS でまとめられた便利で小さなユーティリティ機能の1つで、最初はあまり見かけませんが、すぐに「うわー、以前これがなかったのはなぜ？ CSS2 のレイアウトが厄介だったのはなぜ？」とあなたに考えさせ始めます。 それはプロセスで異なる単位を混合して、CSS 単位の計算値を決定するための計算をすることを可能にします。</p>

<p>例えば、ウェブディクタフォンには、3つの主要な UI 領域が縦に積み重ねられています。 最初の2つ（ヘッダーとコントロール）の高さを固定したいと思いました。</p>

<pre class="brush: css notranslate">header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}</pre>

<p>ただし、デバイスの高さに関係なく、3番目の領域（再生できる録音済みサンプルが含まれている領域）に、残っているスペースをすべて確保したいと考えました。 フレックスボックスがここでの答えかもしれませんが、それはそのような単純なレイアウトのために少しやり過ぎです。 代わりに、次のように3番目のコンテナーの高さを親の高さの 100% から、他の2つの高さとパディングを引いたものに等しくすることで、問題を解決しました。</p>

<pre class="brush: css;highlight[4] notranslate">.sound-clips {
  box-shadow: inset 0 3px 4px rgba(0,0,0,0.7);
  background-color: rgba(0,0,0,0.1);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}</pre>

<div class="note">
<p><strong>注</strong>: <code>calc()</code> は、最近のブラウザーでも、Internet Explorer 9 に戻っても十分にサポートされています。</p>
</div>

<h3 id="Checkbox_hack_for_showinghiding" name="Checkbox_hack_for_showinghiding">表示/非表示のチェックボックスのハック</h3>

<p>これはすでにかなりよく文書化されていますが、チェックボックスのハックについて言及したいと思います。 これは、チェックボックスの {{htmlelement("label")}} をクリックしてオン/オフを切り替えることができるという事実を乱用します。 ウェブディクタフォンでは、これにより情報画面が表示され、この画面は、右上隅にある疑問符アイコンをクリックすると表示/非表示になります。 まず最初に、次のように <code>&lt;label&gt;</code> を好きなようにスタイルして、他の要素の上に常に収まるように十分な <code>z-index</code> があり、したがってフォーカス可能/クリック可能になるようにします。</p>

<pre class="brush: css notranslate">label {
    font-family: 'NotoColorEmoji';
    font-size: 3rem;
    position: absolute;
    top: 2px;
    right: 3px;
    z-index: 5;
    cursor: pointer;
}</pre>

<p>次に、次のように実際のチェックボックスを非表示にします。 これは、UI を混乱させたくないためです。</p>

<pre class="brush: css notranslate">input[type=checkbox] {
   position: absolute;
   top: -100px;
}</pre>

<p>次に、（{{htmlelement("aside")}} 要素で囲まれた）情報画面に希望のスタイルを設定し、レイアウトフローに表示されずメイン UI に影響しないように固定の位置を指定し、デフォルトで収まって欲しい位置に変換し、スムーズな表示/非表示のための遷移を与えます。</p>

<pre class="brush: css notranslate">aside {
   position: fixed;
   top: 0;
   left: 0;
   text-shadow: 1px 1px 1px black;
   width: 100%;
   height: 100%;
   transform: translateX(100%);
   transition: 0.6s all;
   background-color: #999;
    background-image: linear-gradient(to top right, rgba(0,0,0,0), rgba(0,0,0,0.5));
}</pre>

<p>最後に、チェックボックスをオンにすると（ラベルをクリックまたはフォーカスすると）、隣接する <code>&lt;aside&gt;</code> 要素の水平方向の平行移動値が変更され、スムーズにビューに遷移するという規則を書きます。</p>

<pre class="brush: css notranslate">input[type=checkbox]:checked ~ aside {
  transform: translateX(0);
}</pre>

<h2 id="Basic_app_setup" name="Basic_app_setup">基本的なアプリの設定</h2>

<p>キャプチャしたいメディアストリームを入手するには、<code>getUserMedia()</code> を使用します。 その後、MediaRecorder API を使用してストリームを記録し、記録された各スニペットを生成された {{htmlelement("audio")}} 要素のソースに出力して、再生できるようにします。</p>

<p>次のように録音ボタンと停止ボタン、および生成された音声プレーヤーを含む {{htmlelement("article")}} の変数をいくつか宣言します。</p>

<pre class="brush: js notranslate">const record = document.querySelector('.record');
const stop = document.querySelector('.stop');
const soundClips = document.querySelector('.sound-clips');</pre>

<p>このセクションの最後に、次のように基本的な <code>getUserMedia</code> 構造体を設定します。</p>

<pre class="brush: js notranslate">if (navigator.mediaDevices &amp;&amp; navigator.mediaDevices.getUserMedia) {
   console.log('getUserMedia supported.');
   navigator.mediaDevices.getUserMedia (
      // constraints - only audio needed for this app
      {
         audio: true
      })

      // Success callback
      .then(function(stream) {


      })

      // Error callback
      .catch(function(err) {
         console.log('The following <code>getUserMedia</code> error occured: ' + err);
      }
   );
} else {
   console.log('getUserMedia not supported on your browser!');
}</pre>

<p>他のことを実行する前に、すべてが <code>getUserMedia</code> がサポートされているかどうかをチェックするテストに包まれています。 次に、<code>getUserMedia()</code> を呼び出し、その内部で次のように定義します。</p>

<ul>
 <li><strong>constraints</strong>: 音声だけがディクタフォンにキャプチャされます。</li>
 <li><strong>Success callback</strong>: このコードは、<code>getUserMedia</code> の呼び出しが正常に完了した後に実行されます。</li>
 <li><strong>Error callback</strong>: 何らかの理由で <code>getUserMedia</code> の呼び出しが失敗した場合、このコードが実行されます。</li>
</ul>

<div class="note">
<p><strong>注</strong>: 以下のコードはすべて <code>getUserMedia</code> の Success callback 内にあります。</p>
</div>

<h2 id="Capturing_the_media_stream" name="Capturing_the_media_stream">メディアストリームのキャプチャ</h2>

<p><code>getUserMedia</code> がメディアストリームを正常に作成したら、<code>MediaRecorder()</code> コンストラクタを使用して新しい Media Recorder インスタンスを作成し、それに直接ストリーム（<code>stream</code>）を渡します。 これが MediaRecorder API を使用するためのエントリポイントです。 これで、ストリームをブラウザーのデフォルトのエンコード形式で {{domxref("Blob")}} にキャプチャする準備ができました。</p>

<pre class="brush: js notranslate">const mediaRecorder = new MediaRecorder(stream);</pre>

<p>{{domxref("MediaRecorder")}} インターフェイスには、メディアストリームの記録を制御できる一連のメソッドがあります。 ウェブディクタフォンでは、その内の2つを利用して、いくつかのイベントをリスンしています。 まず、録音ボタンを押すと {{domxref("MediaRecorder.start()")}} を使用してストリームの録音を開始します。</p>

<pre class="brush: js notranslate">record.onclick = function() {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
}</pre>

<p><code>MediaRecorder</code> が録音しているとき、{{domxref("MediaRecorder.state")}} プロパティは <code>"recording"</code> の値を返します。</p>

<p>録音が進むにつれて、音声データを収集する必要があります。 {{domxref("mediaRecorder.ondataavailable")}} を使用してこれを行うためのイベントハンドラーを登録します。</p>

<pre class="brush: js notranslate">let chunks = [];

mediaRecorder.ondataavailable = function(e) {
  <span class="pl-smi">chunks</span>.<span class="pl-c1">push</span>(<span class="pl-smi">e</span>.<span class="pl-c1">data</span>);
}</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: ブラウザーは必要に応じて <code>dataavailable</code> イベントを発生させますが、この間隔を制御するために <code>start()</code> メソッドを呼び出すときにタイムスライス（例えば <code>start(10000)</code> ）を含めることも、必要なときに {{domxref("MediaRecorder.requestData()")}} を呼び出してイベントを発生させることもできます。</p>
</div>

<p>最後に、停止ボタンが押されたときに {{domxref("MediaRecorder.stop()")}} メソッドを使用して録音を停止し、アプリの他の場所で使用できるように {{domxref("Blob")}} を完成させます。</p>

<pre class="brush: js notranslate">stop.onclick = function() {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
}</pre>

<p>メディアストリームが終了すると（例えば、曲のトラックを入手してトラックが終了した場合や、ユーザーがマイクの共有を停止した場合）、録音も自然に停止することがあることに注意してください。</p>

<h2 id="Grabbing_and_using_the_blob" name="Grabbing_and_using_the_blob">blob を入手して使う</h2>

<p>録音が停止すると、<code>state</code> プロパティは <code>"inactive"</code> の値を返し、<code>stop</code> イベントが発生します。 {{domxref("mediaRecorder.onstop")}} を使用してこれのイベントハンドラーを登録し、受け取ったすべてのチャンク（<code>chunks</code>）から <code>blob</code> を確定します。</p>

<pre class="brush: js notranslate">mediaRecorder.onstop = function(e) {
  console.log("recorder stopped");

  const clipName = prompt('Enter a name for your sound clip');

  const clipContainer = document.createElement('article');
  const clipLabel = document.createElement('p');
  const audio = document.createElement('audio');
  const deleteButton = document.createElement('button');

  clipContainer.classList.add('clip');
  audio.setAttribute('controls', '');
  deleteButton.innerHTML = "Delete";
  clipLabel.innerHTML = clipName;

  clipContainer.appendChild(audio);
  clipContainer.appendChild(clipLabel);
  clipContainer.appendChild(deleteButton);
  soundClips.appendChild(clipContainer);

  const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
  chunks = [];
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;

  deleteButton.onclick = function(e) {
    let evtTgt = e.target;
    evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
  }
}</pre>

<p>上記のコードを見て、何が起こっているのかを見てみましょう。</p>

<p>まず、ユーザーにクリップに名前を付けるように求めるプロンプトを表示します。</p>

<p>次に、次のような HTML 構造を作成し、それをクリップコンテナーに挿入します。 これは {{htmlelement("article")}} 要素です。</p>

<pre class="brush: html notranslate">&lt;article class="clip"&gt;
  &lt;audio controls&gt;&lt;/audio&gt;
  &lt;p&gt;<em>your clip name</em>&lt;/p&gt;
  &lt;button&gt;Delete&lt;/button&gt;
&lt;/article&gt;</pre>

<p>その後、録音した音声チャンクから結合された {{domxref("Blob")}} を作成し、それを指すオブジェクト URL を <code>window.URL.createObjectURL(blob)</code> を使用して作成します。 次に、{{HTMLElement("audio")}} 要素の {{htmlattrxref("src", "audio")}} 属性の値をオブジェクト URL に設定して、音声プレーヤーの再生ボタンが押されたときに <code>Blob</code> を再生するようにします。</p>

<p>最後に、削除ボタンに <code>onclick</code> ハンドラーを設定して、クリップの HTML 構造全体を削除する関数にします。</p>

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
   <td>{{SpecName("MediaStream Recording", "#MediaRecorderAPI")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="MediaRecorder" name="MediaRecorder"><code>MediaRecorder</code></h3>

<p>{{Compat("api.MediaRecorder")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaRecorder_API">MediaRecorder API</a> のランディングページ</li>
 <li><code>{{domxref("Navigator.getUserMedia()")}}</code></li>
 <li><a href="https://addpipe.com/blog/media-recorder-api-is-now-supported-by-65-of-all-desktop-internet-users/">MediaRecorder API がウェブサイトのユーザーの 65% でサポートされるようになりました</a>（英語）</li>
</ul>
