---
title: HTMLMediaElement.play()
slug: Web/API/HTMLMediaElement/play
tags:
  - API
  - Audio
  - HTMLMediaElement
  - Interface
  - Media
  - Method
  - Reference
  - Video
  - play
translation_of: Web/API/HTMLMediaElement/play
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary">{{domxref("HTMLMediaElement")}} の <strong><code>play()</code></strong> メソッドは、メディアの再生を開始しようとします。 再生が正常に開始されると解決する {{jsxref("Promise")}} を返します。</span> パーミッションの問題など、何らかの理由で再生を開始しなかった場合、その promise は拒否されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = <em>HTMLMediaElement</em>.play();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>無し。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>再生が開始されたときに解決される、または何らかの理由で再生を開始できない場合は拒否される {{jsxref("Promise")}}。</p>

<div class="note">
<p><strong>注</strong>: 古いブラウザーは <code>play()</code> から値を返さないかもしれません。</p>
</div>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>promise の<strong>拒否ハンドラ</strong>（rejection handler）は、その唯一の入力パラメータとして渡された例外名で呼び出されます（従来の例外がスローされるのとは対照的に）。 考えられるエラーは次のとおりです。</p>

<dl>
 <dt><code>NotAllowedError</code></dt>
 <dd>ユーザーエージェント（ブラウザー）またはオペレーティングシステムは、現在のコンテキストまたはシチュエーションではメディアの再生を許可していません。 これは、例えば、「再生」ボタンをクリックすることによってメディアの再生を明示的に開始することをブラウザーがユーザーに要求する場合に起こり得ます。</dd>
 <dt><code>NotSupportedError</code></dt>
 <dd>メディアソース（{{domxref("MediaStream")}}、{{domxref("MediaSource")}}、{{domxref("Blob")}}、{{domxref("File")}} など）はサポートしているメディア形式を表していません。</dd>
</dl>

<p>ブラウザーの実装の詳細、メディアプレーヤーの実装などによっては、他の例外が報告されることがあります。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>「自動再生（autoplay）」という用語は通常、読み込まれるとすぐにメディアの再生を開始するページを指すと考えられていますが、ウェブブラウザーの自動再生ポリシーは、<code>play()</code> の呼び出しを含むスクリプト起動によるメディアの再生にも適用されます。</p>

<p>{{Glossary("user agent","ユーザーエージェント")}}が自動またはスクリプト起動によるメディアの再生を許可しないように設定されている場合、<code>play()</code> を呼び出すと返された promise が直ちに <code>NotAllowedError</code> で拒否されます。 ウェブサイトはこの状況に対処する準備をしておくべきです。 例えば、サイトには再生が自動的に開始されたことを前提としたユーザーインターフェイスを表示するのではなく、返された promise が解決されたか拒否されたかに基づいて UI を更新する必要があります。 詳しくは、以下の<a href="#example">例</a>を参照してください。</p>

<div class="note">
<p><strong>注</strong>: <code>play()</code> メソッドを使用すると、ユーザーはメディアの再生を許可するように要求され、返された promise が解決されるまでに遅延が生じる可能性があります。 コードが即座の応答を期待していないことを確認してください。</p>
</div>

<p>自動再生および自動再生のブロックの詳細については、<a href="/ja/docs/Web/Media/Autoplay_guide">メディアおよびウェブオーディオ API の自動再生ガイド</a>を参照してください。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、再生が開始されたことを確認する方法と、ブロックされた自動再生を適切に処理する方法を示します。</p>

<pre class="brush: js">let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.className = "playing";
  } catch(err) {
    playButton.className = "";
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.className = "";
  }
}</pre>

<p>この例では、動画の再生は <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/async_function">async</a></code> の <code>playVideo()</code> 関数によってオンとオフを切り替えられます。 動画を再生しようとし、成功した場合は <code>playButton</code> 要素のクラス名を <code>"playing"</code>（再生中）に設定します。 再生が開始されない場合、<code>playButton</code> 要素のクラスはクリアされ、デフォルトの外観に戻ります。 これは、<code>play()</code> によって返された {{jsxref("Promise")}} の解決または拒否を監視することによって、再生ボタンが実際の再生状態と一致することを保証します。</p>

<p>この例が実行されると、再生のオンとオフを切り替えるために使用する {{HTMLElement("button")}} と同様に {{HTMLElement("video")}} 要素への参照を収集することから始めます。 次に、再生トグルボタンの {{event("click")}} イベントのイベントハンドラを設定し、<code>playVideo()</code> を呼び出して自動的に再生を開始しようとします。</p>

<p>あなたは <a href="https://media-play-promise.glitch.me/">Glitch でこの例を試したり、リミックスする</a>ことができます。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>仕様</th>
   <th>状態</th>
   <th>コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'embedded-content.html#dom-media-play', 'play()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義; リビング仕様</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C','embedded-content-0.html#dom-media-play','play()')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>注</strong>: WHATWG バージョンと W3C バージョンの仕様は、このメソッドが {{jsxref("Promise")}} を返すか、まったく返さないかについて、それぞれ異なります（2018年8月現在）。</p>
</div>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLMediaElement.play")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Media">Web メディア技術</a></li>
 <li>学ぶ: <a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">動画と音声のコンテンツ</a></li>
 <li><a href="/ja/docs/Web/Media/Autoplay_guide">メディアおよびウェブオーディオ API の自動再生ガイド</a></li>
 <li><a href="/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Web Audio APIの利用</a></li>
</ul>
