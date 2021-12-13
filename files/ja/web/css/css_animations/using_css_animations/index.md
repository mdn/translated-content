---
title: CSS アニメーションの使用
slug: Web/CSS/CSS_Animations/Using_CSS_animations
tags:
  - Advanced
  - CSS
  - CSS Animations
  - Example
  - Guide
translation_of: Web/CSS/CSS_Animations/Using_CSS_animations
---
<p>{{CSSRef}}</p>

<p><span class="seoSummary"><strong>CSS アニメーション</strong>は、ある CSS のスタイル設定を別の設定へ遷移させることを可能にします。</span> アニメーションは、2 種類の要素で構成されています。 それは、アニメーションについて記述するスタイルと、アニメーションの始めと終わりの CSS スタイルを示すキーフレームです。 同様に、アニメーション途中の通過点となるスタイルを示すこともできます。</p>

<p>CSS アニメーションは、従来のスクリプトによるアニメーションに比べて 3 つの長所があります。</p>

<ol>
 <li>単純なアニメーションには使いやすくできています。 つまり、 JavaScript を知らない場合でもアニメーションを作ることができます。</li>
 <li>アニメーションは中程度以下のシステム負荷で、良く動作します。 JavaScript では、 (上手に作成しなければ) 単純なアニメーションでもシステムの負荷を高めてしまうことがあります。 レンダリングエンジンは可能な限りパフォーマンスをなめらかに保つため、フレームを省略するなどの技術を用いることができます。</li>
 <li>ブラウザーはアニメーションの流れを制御して、パフォーマンスや効率を最適化します。 例えば、アクティブではないタブで動作しているアニメーションは、更新の頻度を減らします。</li>
</ol>

<h2 id="Configuring_the_animation" name="Configuring_the_animation">アニメーションの設定</h2>

<p>CSS アニメーションの流れ (シーケンス) を作成するには、アニメーションさせたい要素に {{cssxref("animation")}} プロパティまたはそのサブプロパティを付加します。 このプロパティはアニメーションのタイミングと長さを設定します。 同様に、アニメーションをどのように進めるかの詳細も設定できます。 なお、このプロパティはアニメーションの外見を指定するものでは<strong>ありません</strong>。 それらは、後述の<a href="#Defining_the_animation_sequence_using_keyframes">キーフレームを用いたアニメーションの流れの定義</a>で説明する {{cssxref("@keyframes")}} @ 規則で定義します。</p>

<p>{{cssxref("animation")}} プロパティのサブプロパティは以下のとおりです:</p>

<dl>
 <dt>{{cssxref("animation-name")}}</dt>
 <dd>アニメーションのキーフレームを示す {{cssxref("@keyframes")}} @ 規則の名前を指定します。</dd>
 <dt>{{cssxref("animation-duration")}}</dt>
 <dd>1 回のアニメーションサイクルに要する時間の長さを設定します。</dd>
 <dt>{{cssxref("animation-timing-function")}}</dt>
 <dd>アニメーションの進め方を設定します。 これは加速曲線を定義することで、キーフレーム間のアニメーションをどのように進めていくかを表します。</dd>
 <dt>{{cssxref("animation-delay")}}</dt>
 <dd>要素が読み込まれてからアニメーションを始めるまでの遅延時間を設定します。</dd>
 <dt>{{cssxref("animation-iteration-count")}}</dt>
 <dd>アニメーションを繰り返す回数を設定します。 アニメーションを無限に繰り返すには <code>infinite</code> を指定してください。</dd>
 <dt>{{cssxref("animation-direction")}}</dt>
 <dd>アニメーションのシーケンス完了時に、逆方向にアニメーションして繰り返すか、始めの状態にリセットしてアニメーションを繰り返すかを設定します。</dd>
 <dt>{{cssxref("animation-fill-mode")}}</dt>
 <dd>アニメーションの実行前後に、指定したスタイルを適用するかを設定します。</dd>
 <dt>{{cssxref("animation-play-state")}}</dt>
 <dd>アニメーションを一時停止したり、再開したりすることができます。</dd>
</dl>

<h2 id="Defining_the_animation_sequence_using_keyframes" name="Defining_the_animation_sequence_using_keyframes">キーフレームを用いたアニメーションの流れの定義</h2>

<p>アニメーションのタイミングを指定した後は、アニメーションの外見を定義することが必要です。 これは、{{cssxref("@keyframes")}} @ 規則を用いて 2 つまたはそれ以上のキーフレームを定義することです。 各キーフレームは、アニメーションの流れの中で要素がどのように表現されるかを記述します。</p>

<p>CSS スタイルでアニメーションのタイミングを定義するため、キーフレームを {{cssxref("percentage")}} で指定し、アニメーションの流れの中でいつそのスタイルが適用されるかを示します。 0% はアニメーションの始点、100% はアニメーションが終点を表します。 これら始点と終点はとても重要なため、それぞれ、0% は <code>from</code>、100% は <code>to</code> の別名でも代替できます。 両者の指定は任意ですが、<code>from</code>/<code>0%</code> と <code>to</code>/<code>100%</code> の両方が指定されていない場合、ブラウザーは、すべての属性から計算された値を用いてアニメーションを開始または終了します。</p>

<p>また、任意でアニメーションの始まりと終わりの中間地点を定義する追加のキーフレームを含めることも可能です。</p>

<h2 id="Examples" name="Examples">例</h2>

<div class="note"><strong>メモ:</strong> (2017年以前の) 古いブラウザーでは接頭辞が必要かもしれません。 クリックして参照できるライブサンプルには、<code>-webkit</code> 接頭辞を付加したプロパティも含まれています。</div>

<h3 id="Making_text_slide_across_the_browser_window" name="Making_text_slide_across_the_browser_window">文字列がブラウザーのウィンドウを横切る</h3>

<p>この例では文字列がブラウザーのウィンドウ右端の外側からすべり込むように、 {{HTMLElement("p")}} 要素へスタイルを設定しています。</p>

<p>このようなアニメーションは、ページ幅がブラウザーウィンドウの幅よりも広くなる原因になるので注意してください。 これは、アニメーションする要素をコンテナ内に置き、そのコンテナのスタイルに {{cssxref("overflow")}}<code>:hidden</code> を指定することで回避できます。</p>

<pre class="brush: css notranslate">p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</pre>

<p>{{HTMLElement("p")}} 要素では、アニメーションの始まりから終わりまでの実行に 3 秒かけることを {{cssxref("animation-duration")}} プロパティで定義しています。 また、アニメーションのキーフレームを定義する {{cssxref("@keyframes")}} @ 規則の名前が "slidein" であることを定義しています。</p>

<p>{{HTMLElement("p")}} 要素に CSS アニメーションに対応していないブラウザーでのスタイルを設定したい場合は、この部分にそれらのスタイルを含めてください。 ただし、この例ではアニメーション効果以外のスタイル付けは必要ありません。</p>

<p>キーフレームは {{cssxref("@keyframes")}} @ 規則で定義します。 この例には、2 つのキーフレームがあります。 1 番目のキーフレームは 0% (代替表記の <code>from</code> を使用しています) です。 ここでは、要素の左マージンを 100% (包含要素の右端を示します) に、要素の幅を 300% (包含要素の幅の 3 倍) に設定しています。 これによりアニメーションの始まりの時点では、見出しがブラウザーのウィンドウの右端の外側に描画されます。</p>

<p>2 番目 (かつ最後) のキーフレームは、100% (代替表記の <code>to</code> を使用しています) です。 要素の左マージンを 0% に、幅を 100% に設定しています。 これにより、見出しがコンテンツエリアの左端へすべり込むことでアニメーションが終わります。</p>

<pre class="brush: html notranslate">&lt;p&gt;The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.&lt;/p&gt;
</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: アニメーションを見るにはページを再読み込みするか、 CodePen 環境では CodePen ボタンをクリックしてください。</p>
</div>

<p>{{EmbedLiveSample("Making_text_slide_across_the_browser_window","100%","250")}}</p>

<h3 id="Adding_another_keyframe" name="Adding_another_keyframe">キーフレームの追加</h3>

<p>先ほどのアニメーション例に、他のキーフレームを追加してみましょう。 例えば、見出しが右から左へ動くのにあわせて文字サイズを大きくしてゆき、その後元のサイズへ戻るようにしたいとします。 これには、単純に以下のキーフレームを追加します:</p>

<pre class="brush: css notranslate">75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}
</pre>

<p>コード全体は次のようなものです。</p>

<pre class="brush: css notranslate">p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</pre>

<pre class="brush: html notranslate">&lt;p&gt;The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.&lt;/p&gt;
</pre>

<p>これはブラウザーに、アニメーションの流れの 75% 経過時点で見出しの左マージンを 25% に、また幅を 150% にするよう設定します。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: アニメーションを見るにはページを再読み込みするか、 CodePen 環境では CodePen ボタンをクリックしてください。</p>
</div>

<p>{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}</p>

<h3 id="Making_it_repeat" name="Making_it_repeat">アニメーションの繰り返し</h3>

<p>アニメーションを繰り返すためには {{cssxref("animation-iteration-count")}} を用いて、アニメーションを何回繰り返すかを設定します。 以下の例では、<code>infinite</code> を指定してアニメーションを無期限に繰り返します。</p>

<pre class="brush: css notranslate">p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
</pre>

<p>これを既存のコードの追加してください。</p>

<pre class="brush: css notranslate">@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</pre>

<pre class="brush: html notranslate">&lt;p&gt;The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.&lt;/p&gt;
</pre>

<p>{{EmbedLiveSample("Making_it_repeat","100%","250")}}</p>

<h3 id="Making_it_move_back_and_forth" name="Making_it_move_back_and_forth">前後の移動</h3>

<p>アニメーションを繰り返すようにしましたが、毎回始めの状態にジャンプしてアニメーションが始まるのはとても不自然です。 画面上を前後に移動するようにしたいでしょう。 これは、{{cssxref("animation-direction")}} プロパティに <code>alternate</code> を設定することで簡単に実現できます:</p>

<pre class="brush: css notranslate">p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</pre>

<p>そしてコードの残りは次の通りです。</p>

<pre class="brush: css notranslate">@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</pre>

<pre class="brush: html notranslate">&lt;p&gt;The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.&lt;/p&gt;
</pre>

<p>{{EmbedLiveSample("Making_it_move_back_and_forth","100%","250")}}</p>

<h3 id="Using_animation_shorthand" name="Using_animation_shorthand">animation 一括指定の利用</h3>

<p>{{cssxref("animation")}} 一括指定はスペースの節約に便利です。 例として、この記事を通して使用してきているルールがあります。</p>

<pre class="brush: css notranslate">p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</pre>

<p>このように置き換えることができます。</p>

<pre class="brush: css notranslate">p {
  animation: 3s infinite alternate slidein;
}
</pre>

<div class="note">
<p><strong>メモ</strong>: 詳しくは、 {{cssxref("animation")}} のリファレンスページをご覧ください。</p>
</div>

<h3 id="Setting_multiple_animation_property_values" name="Setting_multiple_animation_property_values">複数のアニメーションプロパティ値の設定</h3>

<p>CSS アニメーションの個別指定値は、コンマで区切って複数の値を受け付けることができます。 — この機能は複数のアニメーションに一つの規則を適用したり、別々なアニメーションに別々の期間、繰り返し回数などを適用したい時に使うことができます。 別々な変化を説明するために、いくつか簡単な例を見てみましょう。</p>

<p>この例では、三つのアニメーション名を設定していますが、期間と繰り返し回数は1つしか設定していません。 この場合、3つのアニメーションはすべて同じ期間と繰り返し回数になります。</p>

<pre class="brush: css notranslate">animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;</pre>

<p>第二の例では、三つの値を三つのプロパティ全てに設定しました。この場合、それぞれのアニメーションはそれぞれのプロパティの同じ位置で対応する値で実行されますので、例えば <code>fadeInOut</code> の長さは 2.5s で、繰り返し回数は 2 のようになります。</p>

<pre class="brush: css notranslate">animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;</pre>

<p>第三の例では、三つのアニメーションが指定されていますが、期間と繰り返し回数は二つしかありません。 この場合、それぞれのアニメーションに個別の値が不足するので、値は最初から最後まで繰り返して使用されます。 ですから例えば、fadeInOut の長さは 2.5s で moveLeft300px の長さは 5s となります。 これで妥当な期間の値の最後に来たので、最初からまた始まります。 — 従って bounce の長さは 2.5s になります。 繰り返し回数 (および指定した他のプロパティ) は、同様に割り当てられます。</p>

<pre class="brush: css notranslate">animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;</pre>

<h3 id="Using_animation_events" name="Using_animation_events">アニメーションイベントの利用</h3>

<p>アニメーションイベントを用いることで、アニメーションをさらに制御したり、アニメーションの有用な情報を得たりすることができます。 これらのイベントは {{domxref("event/AnimationEvent", "AnimationEvent")}} オブジェクトに集められており、アニメーションの開始・終了・繰り返しの始まりを検出することができます。 それぞれのイベントには発生した時間や、イベントが発生したアニメーションの名前が含まれています。</p>

<p>文字列がすべり込むアニメーションの例を、アニメーションがいつ発生したかの情報を出力するように変更して、イベントがどのように働くかを見てみましょう。</p>

<h4 id="Adding_the_CSS" name="Adding_the_CSS">CSS の追加</h4>

<p>アニメーションの CSS を作成することから始めます。 このアニメーションは、"slidein" が呼び出されて 3 秒後に終わり、3 回繰り返されます。 繰り返すたびに、逆方向へアニメーションします。 {{cssxref("@keyframes")}} 内で、要素が画面を横切るようにするため、 width と margin-left を操作します。</p>

<pre class="brush: css notranslate">.slidein {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: 3;
  animation-direction: alternate;
}

@keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }

  to {
    margin-left:0%;
    width:100%;
  }
}</pre>

<h4 id="Adding_the_animation_event_listeners" name="Adding_the_animation_event_listeners">アニメーションイベントのリスナーの追加</h4>

<p>使用することができる 3 つのアニメーションイベントを取得するため、 JavaScript のコードを用います。 <code>setup()</code> 関数は、イベントのリスナーになります。 この関数は文書が読み込まれたとき、最初に呼び出します。</p>

<pre class="brush: js notranslate">var element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slidein";
</pre>

<p>これは一般的なコードです。 このコードがどのように働くかについて、詳しくは {{domxref("element.addEventListener()")}} の文書を参照してください。 最後に setup() 関数では要素の <code>class</code> 属性を、アニメーションを設定したクラス "slidein" に設定しています。 これによりアニメーションを開始させています。</p>

<p>なぜこのような処理を行うのでしょうか？ それは、 <code>animationstart</code> イベントはアニメーションが始まるとすぐに発生するので、この例ではコードを実行する前にイベントが発生してしまうためです。 そこでコードの実行後に要素の class 属性をアニメーションのスタイルを記述したものに設定することで、アニメーションを開始させるようにしています。</p>

<h4 id="Receiving_the_events" name="Receiving_the_events">イベントを受け取る</h4>

<p>イベントは、以下の <code>listener()</code> 関数に送られます。</p>

<pre class="brush: js notranslate">function listener(event) {
  var l = document.createElement("li");
  switch(event.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + event.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + event.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + event.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}
</pre>

<p>こちらのコードも、非常に単純です。 単純に {{domxref("event.type")}} を見てどのイベントが発生したかを判断して、発生したイベントの記録として、{{HTMLElement("ul")}} (順序なしリスト) で適切な情報を出力しています。</p>

<p>その出力は、最終的に以下のようになります:</p>

<ul>
 <li>Started: elapsed time is 0</li>
 <li>New loop started at time 3.01200008392334</li>
 <li>New loop started at time 6.00600004196167</li>
 <li>Ended: elapsed time is 9.234000205993652</li>
</ul>

<p>表示された時間が、アニメーションの設定時に指定した時間から予測されるものにとても近く、しかし厳密に一致はしていないことに注意してください。 また、最終の繰り返しの後に <code>animationiteration</code> イベントが発生していないことにも注意してください。 ただし、<code>animationend</code> イベントは発生しています。</p>

<h4 id="The_HTML" name="The_HTML">HTML</h4>

<p>この例を完成させるために、コンテンツの表示と受信したイベントの情報をスクリプトが挿入するために用いる HTML 文書を以下に掲載します:</p>

<pre class="brush: html notranslate">&lt;h1 id="watchme"&gt;Watch me move&lt;/h1&gt;
&lt;p&gt;
  This example shows how to use CSS animations to make &lt;code&gt;H1&lt;/code&gt;
  elements move across the page.
&lt;/p&gt;
&lt;p&gt;
  In addition, we output some text each time an animation event fires,
  so you can see them in action.
&lt;/p&gt;
&lt;ul id="output"&gt;
&lt;/ul&gt;
</pre>

<p>そしてこちらはライブ出力です。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: アニメーションを見るにはページを再読み込みするか、 CodePen 環境でアニメーションを見るには CodePen ボタンをクリックしてください。</p>
</div>

<p>{{EmbedLiveSample('Using_animation_events', '600', '300')}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("AnimationEvent", "AnimationEvent")}}</li>
 <li><a href="/ja/docs/Web/CSS/CSS_animations/Detecting_CSS_animation_support">CSS アニメーションの対応の検出</a></li>
 <li><a href="/ja/docs/Web/Guide/CSS/Using_CSS_transitions">CSS トランジションの使用</a></li>
</ul>
