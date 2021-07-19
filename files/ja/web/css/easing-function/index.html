---
title: <easing-function>
slug: Web/CSS/easing-function
tags:
  - API
  - CSS
  - CSS Animations
  - CSS Data Type
  - CSS Transitions
  - Data Type
  - Layout
  - Reference
  - easing-function
translation_of: Web/CSS/easing-function
---
<div>{{CSSRef}}</div>

<p><strong><code>&lt;easing-function&gt;</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/CSS_Types">データ型</a>で、アニメーションの間に一次元の値がどれだけの速さで変化するかを記述する数学的な関数を表します。これにより、アニメーションの速度を期間中に変化させることができます。</p>

<p>イージング関数のうち3次ベジェ曲線のサブセットに含まれるものは、アニメーションの開始と終了を滑らかにすることができるため、よく「スムーズ」イージング関数と呼ばれています。これらの関数は、時間比と出力比を相関させており、どちらも {{cssxref("&lt;number&gt;")}} で表されます。これらの値は <code>0.0</code> が初期状態、<code>1.0</code> が最終状態を表します。</p>

<p><img src="/files/3434/TF_with_output_gt_than_1.png"><img src="/files/3435/TF_with_output_gt_than_1_clipped.png" style="margin-right: 5px;"></p>

<p>特定の関数が使用された場合によっては、計算された出力値がアニメーションの経路の間で、時には <code>1.0</code> を超えたり、 <code>0.0</code> を下回ったりすることがあります。これによってアニメーションが最終状態の後に行ったり、戻ったりすることになります。 {{cssxref("left")}} や {{cssxref("right")}} のような一部のプロパティは、これによって一種の「バウンド」効果を生成します。</p>

<p>しかし、色の成分の値が <code>255</code> を超えたり <code>0</code> を下回ったりするように、出力値が取り得る範囲を超えてしまう場合は、その値は取り得る値の中で最も近い値に切り詰められます (色の成分の値であれば、それぞれ <code>255</code> および <code>0</code> になります)。一部の <code>cubic-bezier()</code> 曲線にはこのような特性があります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><a href="/ja/docs/Web/CSS/easing-function#Easing_functions">イージング関数</a>には、線形関数、<a href="https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A">3次ベジェ曲線</a>、階段関数の3種類があります。 <code>&lt;easing-function&gt;</code> 型の値は、これら3つの型のうちの1つを使ってイージング関数を記述します。</p>

<h3 class="cleared" id="Easing_functions" name="Easing_functions">イージング関数</h3>

<p>CSS は 3 種類のタイミング関数に対応しています。線形関数と、3次ベジェ曲線のサブセットの関数と、階段関数です。これらの関数でもっとも有用なものは、簡単に指定できるようにキーワードが与えられています。</p>

<h4 id="The_linear_class_of_easing_functions" name="The_linear_class_of_easing_functions">線形クラスのイージング関数</h4>

<h5 id="linear">linear</h5>

<p style="float: left;"><img src="/files/3425/cubic-bezier,linear.png" style="height: 325px; width: 244px;"></p>

<p>The animation moves from beginning to end at a constant rate. This keyword represents the easing function <code>cubic-bezier(0.0, 0.0, 1.0, 1.0)</code>.</p>

<h4 class="cleared" id="cubic-bezier" name="cubic-bezier()">cubic-bezier() クラスのイージング関数</h4>

<p style="float: left;"><img src="/files/3433/cubic-bezier,%20example.png"></p>

<p><code>cubic-bezier()</code> 関数記法は、<a href="https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A">3次ベジェ曲線</a> を定義します。この曲線は連続的であり、アニメーションの始まりや終わりを緩やかにするためによく使用されます。このため、<em>イージング関数</em>と呼ばれることもあります。</p>

<p>3次ベジェ曲線は 4 個の点 P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub> によって定義されます。P<sub>0</sub> と P<sub>3</sub> は曲線の始点と終点であり、 CSS では座標が割合 (横座標は時間の割合、縦座標は出力範囲の割合) であることから、これらの点は固定されています。P<sub>0</sub> は <code>(0, 0)</code> で開始時間および初期状態を示し、P<sub>3</sub> は <code>(1, 1)</code> で終了時間および最終状態を示します。</p>

<p>すべての3次ベジェ曲線が<a href="https://ja.wikipedia.org/wiki/%E9%96%A2%E6%95%B0_%28%E6%95%B0%E5%AD%A6%29">数学的な関数</a> とは限らないため、どの3次ベジェ曲線もイージング関数として適しているわけではありません。すなわち、曲線は横座標で 0 から 1 の値をとります。 P<sub>0</sub> および P<sub>3</sub> は CSS の定義で固定されているので、P<sub>1</sub> および P<sub>2</sub> の横座標の値が <code>[0, 1]</code> の範囲にある場合のみ、3次ベジェ曲線は関数であり、それゆえ有効になります。</p>

<p>P<sub>1</sub> または P<sub>2</sub> の縦座標の値が <code>[0, 1]</code> の範囲から外れている3次ベジェ曲線では、<em>はずむ</em>効果が得られます。</p>

<p>不正な <code>cubic-bezier</code> 曲線を指定すると、 CSS はその属性全体を無視します。</p>

<h5 id="Syntax_2" name="Syntax_2">構文</h5>

<pre class="syntaxbox notranslate">cubic-bezier(<var>x<sub>1</sub></var>, <var>y<sub>1</sub></var>, <var>x<sub>2</sub></var>, <var>y<sub>2</sub></var>)
</pre>

<p>ここで、</p>

<dl>
 <dt><strong><var>x<sub>1</sub></var>, <var>y<sub>1</sub></var>, <var>x<sub>2</sub></var>, <var>y<sub>2</sub></var></strong></dt>
 <dd>3次ベジェ曲線を定義する P<sub>1</sub> および P<sub>2</sub> 点の横座標および縦座標の値を示す {{cssxref("&lt;number&gt;")}} です。x<sub>1</sub> および x<sub>2</sub> は [0, 1] の範囲にある必要があり、さもないと不正な値になります。</dd>
</dl>

<h4 id="Keywords_for_common_cubic-bezier_easing_functions" name="Keywords_for_common_cubic-bezier_easing_functions">一般的なタイミング関数のキーワード</h4>

<h5 class="cleared" id="ease">ease</h5>

<p style="float: left;"><img src="/files/3429/cubic-bezier,ease.png" style="height: 332px; width: 244px;"></p>

<p>アニメーション開始時はより急速に加速して、終了に向けて少しずつ緩やかになっていきます。このキーワードは、イージング関数 <code>cubic-bezier(0.25, 0.1, 0.25, 1.0)</code> を表します。この関数は <a href="#ease-in-out"><code>ease-in-out</code></a> に似ていますが、開始がより急速です。</p>

<h5 class="cleared" id="ease-in">ease-in</h5>

<p style="float: left;"><img src="/files/3426/cubic-bezier,ease-in.png" style="height: 325px; width: 244px;"></p>

<p>アニメーションの始めは緩やかで、その後次第に加速していき、最終状態に達するとアニメーションは突然停止します。このキーワードはイージング関数 <code>cubic-bezier(0.42, 0.0, 1.0, 1.0)</code> を表します。</p>

<h5 class="cleared" id="ease-in-out"><code>ease-in-out</code></h5>

<p style="float: left;"><img src="/files/3428/cubic-bezier,ease-in-out.png" style="height: 332px; width: 244px;"></p>

<p>アニメーションは緩やかに始まり、加速し、終了に向けて加速が緩やかになります。このキーワードはイージング関数 <code>cubic-bezier(0.42, 0.0, 0.58, 1.0)</code> を表します。開始時は <a href="#ease-in"><code>ease-in</code></a> 関数に、完了時は <a href="#ease-out"><code>ease-out</code></a> 関数に似ています。</p>

<h5 class="cleared" id="ease-out">ease-out</h5>

<p style="float: left;"><img src="/files/3427/cubic-bezer,ease-out.png" style="height: 325px;"></p>

<p>アニメーションは急速に始まり、最終状態にかけて次第に緩やかになっていきます。このキーワードはタイミング関数 <code>cubic-bezier(0.0, 0.0, 0.58, 1.0)</code> を表します。</p>

<h4 class="cleared" id="steps" name="steps()" style="">steps() クラスのタイミング関数</h4>

<p><code>steps()</code> 関数記法は、出力値の範囲を等間隔に区切る<a href="http://ja.wikipedia.org/wiki/%E9%9A%8E%E6%AE%B5%E9%96%A2%E6%95%B0">ステップ関数</a>を定義します。このステップ関数のサブクラスは、階段関数と呼ばれることもあります。</p>

<h5 id="Syntax_3" name="Syntax_3">構文</h5>

<pre class="syntaxbox notranslate">steps(<var>number_of_steps</var>, <var>direction</var>)
</pre>

<p>ここで、</p>

<dl>
 <dt><var>number_of_steps</var></dt>
 <dd>厳密に正の {{cssxref("&lt;integer&gt;")}} で、ステップ関数を構成する等間隔の段数を示すものです。</dd>
 <dt><var>direction</var></dt>
 <dd>関数が <a href="http://en.wikipedia.org/wiki/Left-continuous#Directional_and_semi-continuity">左連続か右連続</a> かを表すキーワードです。</dd>
 <dd></dd>
 <dd>
 <ul>
  <li><code>jump-start</code> は左連続関数を表し、したがってアニメーションの開始時に最初のステップが発生します。</li>
  <li><code>jump-end</code> は右連続関数を表し、したがってアニメーションの完了時に最後のステップが発生します。</li>
  <li><code>jump-both</code> は右および左の連続関数を表し、0%と100%の位置の両方で停止し、アニメーションの繰り返しの間に効果的にステップを入れます。</li>
  <li><code>jump-none</code> どちらの端にもジャンプしません。代わりに、それぞれ区間の 1/n ごとに0%の位置と100%の位置の両方を保持します。</li>
  <li><code>start</code> は <code>jump-start</code> と同等です。</li>
  <li><code>end</code> は <code>jump-end</code> と同等です。</li>
 </ul>
 </dd>
 <dd><code>end</code> が既定値です。</dd>
</dl>

<h5 id="steps_n_&lt;direction>">steps( n, &lt;direction&gt; )</h5>

<ul style="list-style-type: none; display: flex;">
 <li>
  <p><code>steps(2, jump-start)</code><br>
   <code>steps(2, start)</code></p>
  <img src="/files/3436/steps(2,start).png" style="float: left; height: 327px; vertical-align: top;"></li>
 <li>
  <p><code>steps(4, jump-end)<br>
   steps(4, end)</code></p>
  <img alt="four steps, with a jump from the fourth step to the final value at the 100% mark" src="/files/3437/steps(4,end).png"></li>
 <li>
  <p><code>steps(5, jump-none)</code></p>
  <img alt="five steps, with no jumps, so 20% of the time is at the beginning state or 0% mark and the last 20% is at the final state, or 100% mark" src="/files/16419/step5none.png"></li>
 <li>
  <p><code>steps(3, jump-both)</code></p>
  <img src="https://mdn.mozillademos.org/files/16420/step3both.png"></li>
</ul>

<h5 class="cleared" id="step-start">step-start</h5>

<p><img src="/files/3423/steps(1,start).png" style="float: left; height: 327px; vertical-align: top;"> アニメーションはすぐに最終状態に遷移し、最後までその状態を維持します。このキーワードは、イージング関数 <code>steps(1, jump-start)</code> または <code>steps(1, start)</code> を表します。</p>

<h5 class="cleared" id="step-end">step-end</h5>

<p><img src="/files/3424/steps(1,end).png" style="float: left; height: 327px; vertical-align: top;"> アニメーションは、終了するまで初期状態のままで、終了時点で直接最終状態にジャンプします。このキーワードは、イージング関数 <code>steps(1, jump-end)</code> または <code>steps(1, end)</code> を表します。</p>

<h2 class="cleared" id="Examples" name="Examples">例</h2>

<h3 id="Easing_function_comparison" name="Easing_function_comparison">イージング関数の比較</h3>

<p>この例では、提供されているボタンを使ってアニメーションを開始したり停止したりすることができ、メニューを選択してイージング関数を、利用可能なキーワードに加えていくつかの <code>cubic-bezier()</code> および <code>steps()</code> のオプションの中から選択することができるようになっています。これは、様々なイージング関数を簡単に比較できるようにするためのアイデアです。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;ul&gt;
  &lt;li&gt;
    &lt;button class="animation-button"&gt;Start animation&lt;/button&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;label for="easing-select"&gt;Choose an easing function:&lt;/label&gt;
    &lt;select id="easing-select"&gt;
      &lt;option selected&gt;linear&lt;/option&gt;
      &lt;option&gt;ease&lt;/option&gt;
      &lt;option&gt;ease-in&lt;/option&gt;
      &lt;option&gt;ease-in-out&lt;/option&gt;
      &lt;option&gt;ease-out&lt;/option&gt;
      &lt;option&gt;cubic-bezier(0.1, -0.6, 0.2, 0)&lt;/option&gt;
      &lt;option&gt;cubic-bezier(0, 1.1, 0.8, 4)&lt;/option&gt;
      &lt;option&gt;steps(5, end)&lt;/option&gt;
      &lt;option&gt;steps(3, start)&lt;/option&gt;
      &lt;option&gt;steps(4)&lt;/option&gt;
    &lt;/select&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">body &gt; div {
  position: relative;
  height: 100px;
}

div &gt; div {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
  background-image: radial-gradient(circle at 10px 10px, rgba(25,255,255,0.8),rgba(25,255,255,0.4));
  border-radius: 50%;
  top: 25px;
  animation: 1.5s infinite alternate;
}

@keyframes move-right {
  from {
    left: 10%;
  }

  to {
    left: 90%;
  }
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">const selectElem = document.querySelector('select');
const startBtn = document.querySelector('button');
const divElem = document.querySelector('div &gt; div');

startBtn.addEventListener('click', () =&gt; {
  if(startBtn.textContent === 'Start animation') {
    divElem.style.animationName = 'move-right';
    startBtn.textContent = 'Stop animation';
    divElem.style.animationTimingFunction = selectElem.value;
  } else {
    divElem.style.animationName = 'unset';
    startBtn.textContent = 'Start animation';
  }
});

selectElem.addEventListener('change', () =&gt; {
  divElem.style.animationTimingFunction = selectElem.value;
});</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Easing_function_comparison', '100%', 200)}}</p>

<h3 id="cubic-bezier_function_examples" name="cubic-bezier_function_examples">cubic-bezier() 関数の例</h3>

<p>これらは CSS における正しい3次ベジェ曲線の使い方です。</p>

<pre class="brush: css notranslate">/* 4 つの値が [0, 1] の範囲に含まれる、標準的なベジェ曲線 */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* &lt;整数値&gt; は &lt;数量&gt; でもあるので、&lt;整数値&gt; を用いても有効です。 */
cubic-bezier(0, 0, 1, 1)

/* 横軸で負数を用いるのは有効であり、はずむ効果をもたらします。 */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* 横軸において 1.0 を超える値も有効です。 */
cubic-bezier(0, 1.1, 0.8, 4)
</pre>

<p>これらの3次ベジェ曲線の定義は無効です。</p>

<pre class="brush: css example-bad notranslate">/* アニメーションさせるものは色ですが、
   ベジェ曲線に用いるのは割合の数値です。 */
cubic-bezier(0.1, red, 1.0, green)

/* 定義域は [0, 1] の範囲であったり、曲線が時間の
関数でなかったりする場合です。 */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* 2 つの点を定義する必要があり、それらに既定値はありません。 */
cubic-bezier(0.3, 2.1)

/* 縦座標は [0, 1] の範囲にある必要があり、
   さもないと曲線はタイミング関数になりません。 */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)</pre>

<h3 class="cleared" id="steps_function_examples" name="steps_function_examples">steps() 関数の例</h3>

<p>p&gt;以下のタイミング関数は妥当です。</p>



<pre class="brush: css notranslate">/* 5段階あり、最後の段階は
   アニメーションの完了直前に発生します。 */
steps(5, end)

/* 2段階の階段で、最初の段階は
   アニメーションの開始時に発生します。 */
steps(2, start)

/* 第二の引数は省略可能です。 */
steps(2)
</pre>

<p>以下のタイミング関数は不正です。</p>

<pre class="brush: css example-bad notranslate">/* 最初の引数は <a href="/ja/docs/Web/CSS/integer">&lt;integer&gt;</a> でなければならず、
   整数と同じ値であっても実数であってはいけません。 */
steps(2.0, jump-end)

/* 段数は負の値であってはいけません。 */
steps(-3, start)

/* 段数は少なくとも 1 つ必要です。 */
steps(0, jump-none)</pre>

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
   <td>{{SpecName('CSS3 Animations', '#animation-timing-function', '&lt;timing-function&gt;')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td><code>&lt;single-timing-function&gt;</code> を CSS トランジションモジュールの <code>&lt;single-transition-timing-function&gt;</code> の別名として定義</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS Easing 1', '#typedef-easing-function', '&lt;easing-function&gt;')}}</td>
   <td>{{Spec2('CSS Easing 1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.types.easing-function", 2)}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a></li>
 <li><a href="http://cubic-bezier.com/">cubic-bezier</a></li>
</ul>
