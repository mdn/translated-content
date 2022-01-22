---
title: animation-name
slug: Web/CSS/animation-name
tags:
  - CSS
  - CSS アニメーション
  - CSS プロパティ
  - Reference
translation_of: Web/CSS/animation-name
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>animation-name</code></strong> プロパティは、要素に適用される1つまたは複数のアニメーションを設定します。それぞれの名前はアニメーションシーケンスのプロパティ値を定義する {{cssxref("@keyframes")}} @-規則を設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/animation-name.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* 単一のアニメーション */
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* 複数のアニメーション */
animation-name: test1, animation4;
animation-name: none, -moz-specific, sliding;

/* グローバル値 */
animation-name: <a href="/ja/docs/Web/CSS/initial">initial</a>
animation-name: <a href="/ja/docs/Web/CSS/inherit">inherit</a>
animation-name: <a href="/ja/docs/Web/CSS/unset">unset</a></pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>キーフレームがないことを示す特別なキーワード。他の識別子の順序を変更せずにアニメーションを非アクティブにする、またはカスケードからのアニメーションを非アクティブにするために使用できます。</dd>
 <dt>{{cssxref("&lt;custom-ident&gt;")}}</dt>
 <dd>アニメーションを識別する名前です。識別子は大文字小文字の区別がない英文字 <code>a</code> から <code>z</code>、 数字 <code>0</code> から <code>9</code>、 アンダースコア (<code>_</code>)、 ダッシュ (<code>-</code>) から成ります。最初のダッシュ以外の文字は英文字でなければなりません。また、二重ダッシュは識別子の先頭では禁止されています。さらに、識別子は <code>none</code>, <code>unset</code>, <code>initial</code>, <code>inherit</code> であってはなりません。</dd>
</dl>

<div class="note">
<p><strong>メモ</strong>: <code>animation-*</code> プロパティにコンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、<a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Setting_multiple_animation_property_values">複数のアニメーションプロパティ値の設定</a>を参照してください。</p>
</div>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations" title="CSS/CSS animations">CSS アニメーション</a>を参照してください。</p>

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
   <td>{{SpecName('CSS3 Animations', '#animation-name', 'animation-name')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>
<p>{{Compat("css.properties.animation-name")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations" title="Tutorial about CSS animations">CSS アニメーションの使用</a></li>
 <li>JavaScript {{domxref("AnimationEvent")}} API</li>
</ul>
