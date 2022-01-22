---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
tags:
  - CSS
  - CSS アニメーション
  - CSS プロパティ
  - リファレンス
translation_of: Web/CSS/animation-fill-mode
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>animation-fill-mode</code></strong> プロパティは、 CSS アニメーションの実行の前後にどう対象にスタイルを適用するかを設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/animation-fill-mode.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} を使用すると便利です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers">/* 単一のアニメーション */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* 複数のアニメーション */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>アニメーションが実行されていない時は、対象にスタイルを適用しません。要素は適用されているその他の CSS 規則を使用して表示されます。これが既定値です。</dd>
 <dt><code>forwards</code></dt>
 <dd>対象は実行の最後の<a href="/ja/docs/Web/CSS/@keyframes">キーフレーム</a>で設定された計算値を保持します。最後のキーフレームは {{cssxref("animation-direction")}} と {{cssxref("animation-iteration-count")}} の値によって変わります。
 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col"><code>animation-direction</code></th>
    <th scope="col"><code>animation-iteration-count</code></th>
    <th scope="col">最後のキーフレーム</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>normal</code></td>
    <td>偶数または奇数</td>
    <td><code>100%</code> または <code>to</code></td>
   </tr>
   <tr>
    <td><code>reverse</code></td>
    <td>偶数または奇数</td>
    <td><code>0%</code> または <code>from</code></td>
   </tr>
   <tr>
    <td><code>alternate</code></td>
    <td>偶数</td>
    <td><code>0%</code> または <code>from</code></td>
   </tr>
   <tr>
    <td><code>alternate</code></td>
    <td>奇数</td>
    <td><code>100%</code> または <code>to</code></td>
   </tr>
   <tr>
    <td><code>alternate-reverse</code></td>
    <td>偶数</td>
    <td><code>100%</code> または <code>to</code></td>
   </tr>
   <tr>
    <td><code>alternate-reverse</code></td>
    <td>奇数</td>
    <td><code>0%</code> または <code>from</code></td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt><code>backwards</code></dt>
 <dd>アニメーションは最初の適切な<a href="/ja/docs/Web/CSS/@keyframes">キーフレーム</a>で定義された値を対象に適用されると同時に適用し、 {{cssxref("animation-delay")}} の期間これを保持します。最初の適切なキーフレームは、 {{cssxref("animation-direction")}} の値によって変わります。
 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col"><code>animation-direction</code></th>
    <th scope="col">最初の適切なキーフレーム</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>normal</code> または <code>alternate</code></td>
    <td><code>0%</code> または <code>from</code></td>
   </tr>
   <tr>
    <td><code>reverse</code> または <code>alternate-reverse</code></td>
    <td><code>100%</code> または <code>to</code></td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt><code>both</code></dt>
 <dd>アニメーションは forwards と backwards の両方の既定に従います。よって、アニメーションの設定は実行前と実行後の両方に適用されます。</dd>
</dl>

<div class="note">
<p><strong>メモ</strong>: <code>animation-*</code> プロパティにコンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、<a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Setting_multiple_animation_property_values">複数のアニメーションプロパティ値の設定</a> を参照してください。</p>
</div>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<p>以下の例で <code>animation-fill-mode</code> の効果を見ることができます。これは無限に繰り返されるアニメーションが、元の状態に戻るのではなく最後の状態を維持するようにすることができます（既定の状態）。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;マウスを灰色のボックスの上に乗せてください！&lt;/p&gt;
&lt;div class="demo"&gt;
 &lt;div class="growsandstays"&gt;これは大きくなって大きいままになります。&lt;/div&gt;
  &lt;div class="grows"&gt;これは大きくなるだけです。&lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.demo {
  border-top: 100px solid #ccc;
  height: 300px;
}

@keyframes grow {
  0% { font-size: 0; }
  100% { font-size: 40px; }
}

.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
}

.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}</pre>

<p>{{EmbedLiveSample('Example',700,300)}}</p>

<p>これ以外の例は <a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations" title="CSS/CSS animations">CSS アニメーション</a>を参照してください。</p>

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
   <td>{{SpecName('CSS3 Animations', '#animation-fill-mode', 'animation-fill-mode')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.animation-fill-mode")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations" title="Tutorial about CSS animations">CSS アニメーションの使用</a></li>
 <li>JavaScript {{domxref("AnimationEvent")}} API</li>
</ul>
