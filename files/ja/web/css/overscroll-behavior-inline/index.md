---
title: overscroll-behavior-inline
slug: Web/CSS/overscroll-behavior-inline
tags:
  - CSS
  - CSS ボックスモデル
  - CSS Logical Properties
  - CSS Property
  - NeedsExample
  - Reference
  - overscroll-behavior-inline
  - 'recipe:css-property'
translation_of: Web/CSS/overscroll-behavior-inline
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>overscroll-behavior-inline</code></strong> は CSS のプロパティで、スクロール領域のインライン方向の境界に達したときのブラウザーの挙動を設定します。</span></p>

<p>全体的な説明は {{cssxref("overscroll-behavior")}} を参照してください。</p>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
overscroll-behavior-inline: auto; /* default */
overscroll-behavior-inline: contain;
overscroll-behavior-inline: none;

/* グローバル値 */
overscroll-behavior-inline: inherit;
overscroll-behavior-inline: initial;
overscroll-behavior-inline: unset;
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>overscroll-behavior-inline</code> プロパティは、次の値の一覧のうち一つのキーワードで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>スクロールの末端における既定の振る舞いが通常通りに発生します。</dd>
 <dt><code>contain</code></dt>
 <dd>この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。</dd>
 <dt><code>none</code></dt>
 <dd>隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Preventing_inline_overscrolling" name="Preventing_inline_overscrolling">インライン方向のオーバースクロールの抑止</h3>

<p>このデモでは、一方がもう一方の中にある二つのブロックレベルボックスがあります。外側のボックスは広い {{cssxref("width")}} を持っているので、ページは水平にスクロールします。内側のボックスは width (と {{cssxref("height")}}) が小さく、ビューポート内にきちんと収まりますが、内容は広い幅を持ち、水平にスクロールします。</p>

<p>既定では、内側のボックスがスクロールして境界に達すると、ページ全体がスクロールし始めますが、これはおそらく望ましくない動きです。インライン方向でこれが発生することを防ぐために、内側のボックスに <code>overscroll-behavior-inline: contain</code> を設定しました。</p>

<h4 id="HTML" name="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;main&gt;
  &lt;div&gt;
    &lt;div&gt;
      &lt;p&gt;&lt;code&gt;overscroll-behavior-inline&lt;/code&gt; has been used to make it so that when the scroll boundaries of the yellow inner box are reached, the whole page does not begin to scroll.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/main&gt;</pre>

<h4 id="CSS" name="CSS">CSS</h4>

<pre class="brush: css notranslate">main {
  height: 400px;
  width: 3000px;
  background-color: white;
  background-image: repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 19px, rgba(0,0,0,0.5) 20px);
}

main &gt; div {
  height: 300px;
  width: 400px;
  overflow: auto;
  position: relative;
  top: 50px;
  left: 50px;
  overscroll-behavior-inline: contain;
}

div &gt; div {
  height: 100%;
  width: 1500px;
  background-color: yellow;
  background-image: repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 19px, rgba(0,0,0,0.5) 20px);
}

p {
  padding: 10px;
  background-color: rgba(255,0,0,0.5);
  margin: 0;
  width: 360px;
  position: relative;
  top: 10px;
  left: 10px;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Preventing_inline_overscrolling','100%', 500)}}</p>

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
   <td>{{SpecName('CSS Overscroll Behavior', '#propdef-overscroll-behavior-inline', 'overscroll-behavior-inline')}}</td>
   <td>{{Spec2('CSS Overscroll Behavior')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.overscroll-behavior-x")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo">スクロールを制御する: 引いて更新や末端の効果のカスタマイズ</a></li>
</ul>
