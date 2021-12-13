---
title: CSS アニメーションのヒントとコツ
slug: Web/CSS/CSS_Animations/Tips
tags:
  - CSS
  - CSS Animations
  - Example
  - Guide
  - Reference
translation_of: Web/CSS/CSS_Animations/Tips
---
<div>{{cssref}}</div>

<p><span class="seoSummary">CSS アニメーションはドキュメントとアプリを構成する要素を使って驚くべき事を行うことを可能にします。 しかしながら、行いたくても理解しやすくないことがあったり、すぐに思いつかないであろう巧妙な方法があります。 この記事は停止したアニメーションをどのように再び実行するのかを含む、あなたの仕事を楽にするかもしれない私達が見つけた秘訣やトリックを集めたものになります。</span></p>

<h2 id="Run_an_animation_again" name="Run_an_animation_again">再度アニメーションを実行する</h2>

<p><a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a>の仕様書では再度アニメーションを実行する方法を提示していません。 要素に魔法の関数 <code>resetAnimation()</code> というものはなく、要素の {{cssxref("animation-play-state")}} を再び <code>"running"</code> に設定することさえもできません。その代わりに、停止したアニメーションをリプレイするための巧妙なトリックを使う必要があります。</p>

<p>ここでの私達が考える停止したアニメーションのリプレイを行う方法はあなたに提案することに対して十分に信頼、安定しています。</p>

<h3 id="HTML_content" name="HTML_content">HTML の内容</h3>

<p>はじめに、HTML にアニメーションしてほしい {{HTMLElement("div")}} と、アニメーションを再生(またはリプレイ)するためのボタンを定義しましょう。</p>

<pre class="brush: html">&lt;div class="box"&gt;
&lt;/div&gt;

&lt;div class="runButton"&gt;Click me to run the animation&lt;/div&gt;</pre>

<h3 id="CSS_content" name="CSS_content">CSS の内容</h3>

<p>次に CSS を使ってアニメーションそのものを定義しましょう。 簡潔さのためにいくつかの重要ではない CSS (”Run” ボタンそのもののスタイル) はここではお見せしません。</p>

<div class="hidden">
<pre class="brush: css">.runButton {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font: 14px "Open Sans", "Arial", sans-serif;
}</pre>
</div>

<pre class="brush: css">@keyframes colorchange {
  0% { background: yellow }
  100% { background: blue }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.changing {
  animation: colorchange 2s;
}</pre>

<p>ここに2つのクラスがあります。 <code>”box”</code> クラスはアニメーション情報を含まない box の外見の基本的な記述です。 アニメーションの詳細は <code>”changing”</code> クラスに含まれており、その中で <code>”colorchange”</code> と名付けられた {{cssxref("@keyframes")}} は box をアニメーションするために2秒間を使うべきだと書いてあります。</p>

<p>このため、box は所定の位置でアニメーション効果を開始しないので、アニメーションすることはないでしょう。</p>

<h3 id="JavaScript_content" name="JavaScript_content">JavaScript の内容</h3>

<p>次にアニメーションを行うための JavaScript を見ていきます。 このテクニックの内容は <code>play()</code> 関数にあり、ユーザーが "Run" ボタンをクリックした時に呼ばれます。</p>

<pre class="brush: js">function play() {
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".box").className = "box changing";
    });
  });
}</pre>

<p>これは奇妙に見受けられるでしょうか？ 再度アニメーションを実行する唯一の方法はアニメーション効果を取り除くことであるため、あなたが行いたいことをドキュメントに知らせてあげて、ドキュメントにスタイルの再計算させてあげましょう。 その時要素に戻るためのアニメーション効果を追加します。 それを実現するためには、私達は創造的でなければなりません。</p>

<p><code>play()</code> 関数が呼び出された時に起きることは以下のものです。</p>

<ol>
 <li>box の CSS クラスのリストを単純な <code>"box"</code> にリセットします。 これは、その box に現在適用されている他のどのクラスを取り除く効果を持ちます。 これにはアニメーションを扱う <code>"changing"</code> クラスが含まれます。 言い換えると、box からアニメーション効果を取り除きます。 しかしながら、クラスのリストを変更することはそのスタイルの再計算が完了するまで効果を持たず、更新はその変更を反映するために発生し続けます。</li>
 <li>スタイルが確実に再計算されるように、{{domxref("window.requestAnimationFrame()")}} を使用し、コールバックを指定します。 コールバックは次のドキュメントの再描画の前に適切に実行されます。 問題はそのコールバックの呼び出しが再描画の前であるゆえに、スタイルの再計算はまだ実際に起きてはいないのです。</li>
 <li>コールバックは巧妙でもう一度 <code>requestAnimationFrame()</code> を呼びます！ 今回は、スタイルの再計算が行われた後の次の再描画の前に、コールバックが実行されます。 このコールバックは box クラスの後ろに <code>"changing"</code> クラスを追加し、そのためクラスを追加したことによる再描画はもう一度要素のアニメーションを始めることでしょう。</li>
</ol>

<p>もちろん、実際に動作するために "Run" ボタンにイベントハンドラーを追加することは必要です。</p>

<pre class="brush: js">document.querySelector(".runButton").addEventListener("click", play, false);</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Run_an_animation_again', 320, 160) }}</p>

<h2 id="Stopping_an_animation" name="Stopping_an_animation">アニメーションの停止</h2>

<p>単純に、要素に適用した {{cssxref("animation-name")}} を取り除くことはそれの次の状態にジャンプまたは割り込ませます。 代わりに、アニメーションを完了して停止する場合は、別のアプローチを試す必要があります。 主要なトリックは次のものです。</p>

<ol>
 <li>可能なら自身を含めるようアニメーションさせること。 これは <code>animation-direction: alternate</code> を信頼するべきではないことを意味します。 代わりに一回の繰り返しの中で完全なアニメーションを経過するキーフレームアニメーションを明示的に書くべきです。</li>
 <li>JavaScript を使用し、<code>animationiteration</code> イベントが発生した時に使われるアニメーションをクリアーすること。</li>
</ol>

<p>次のデモは前述の JavaScript テクニックをどのように利用するかを示します。</p>

<pre class="brush: css">.slidein {
  animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}

.stopped {
  animation-name: none;
}

@keyframes slidein {
  0% {
    margin-left: 0%;
  }
  50% {
    margin-left: 50%;
  }
  100% {
    margin-left: 0%;
  }
}
</pre>

<pre class="brush: html">&lt;h1 id="watchme"&gt;Click me to stop&lt;/h1&gt;
</pre>

<pre class="brush: js">let watchme = document.getElementById('watchme')

watchme.className = 'slidein'
const listener = (e) =&gt; {
  watchme.className = 'slidein stopped'
}
watchme.addEventListener('click', () =&gt;
  watchme.addEventListener('animationiteration', listener, false)
)
</pre>

<p>デモ <a href="https://jsfiddle.net/morenoh149/5ty5a4oy/">https://jsfiddle.net/morenoh149/5ty5a4oy/</a></p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/CSS/Using_CSS_transitions">CSS トランジッションの使用</a></li>
 <li>{{domxref("Window.requestAnimationFrame()")}}</li>
</ul>
