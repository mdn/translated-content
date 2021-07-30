---
title: '@keyframes'
slug: Web/CSS/@keyframes
tags:
  - '@-規則'
  - CSS
  - CSS アニメーション
  - Reference
  - アニメーション
translation_of: Web/CSS/@keyframes
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary">CSS の <strong><code>@keyframes</code></strong> <a href="/ja/docs/Web/CSS/At-rule">@-規則</a>は、アニメーションの流れに沿ったキーフレーム (または中間地点) のスタイルを定義することによって、一連の CSS アニメーションの中間ステップを制御します。</span>これにより、アニメーションの中間ステップを <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>よりも詳細に制御できます。</p>

<pre class="brush: css no-line-numbers">@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}</pre>

<p>JavaScript は、 CSS オブジェクトモデルのインターフェイス {{domxref("CSSKeyframesRule")}} によって <code>@keyframes</code> @-規則にアクセスできます。</p>

<p>キーフレームを使うには、アニメーションとそのキーフレームを一致させるために、 {{ cssxref("animation-name") }} プロパティで指定したものと同じ名前がついた <code>@keyframes</code> 規則を作成します。それぞれの <code>@keyframes</code> 規則は、キーフレームセレクターのスタイルリストを含んでいます。それは、そのキーフレームが作動する時のアニメーションのパーセント値と、そのキーフレームでのスタイルを指定するブロックとで構成されています。</p>

<p>キーフレームは任意の順番で並べることができます。それらは、作動する時を示すパーセント値の順番に従って制御されます。</p>

<h3 id="Valid_keyframe_lists" name="Valid_keyframe_lists">有効なキーフレームのリスト</h3>

<p>キーフレーム規則にアニメーションの開始と終了の状態 (<code>0%</code>/<code>from</code> と <code>100%</code>/<code>to</code>) を明示しない場合、ブラウザはその要素の既存のスタイルを開始・終了の状態として用います。これは、その要素を初期状態からアニメーションさせて元に戻すという処理に利用できます。</p>

<p>キーフレーム規則にアニメーションができないプロパティを含めた場合、そのプロパティは無視されますが、他のアニメーションが可能なプロパティについてはアニメーションが実行されます。</p>

<h3 id="Resolving_duplicates" name="Resolving_duplicates">重複の解決</h3>

<p>複数のキーフレームに同じ名前が付けられている場合、最後に宣言されたものが使用されます。 <code>@keyframes</code> 規則がカスケード的に継承されることはないため、アニメーションが複数の規則セットによるキーフレームをもとにして行われることはありません。</p>

<p>指定されたアニメーションのタイムオフセットが重複している場合は、 <code>@keyframes</code> 規則内のそのパーセント値を持つすべてのキーフレームがそのフレームに使用されます。 <code>@keyframes</code> 規則の中で、同じパーセント値を指定した複数のキーフレームがカスケード的に継承されます。</p>

<h3 id="When_properties_are_left_out_of_some_keyframes" name="When_properties_are_left_out_of_some_keyframes">一部のキーフレームでプロパティが指定されていない場合</h3>

<p>一部のキーフレームでしか指定されていないプロパティは、補完されます (ただし、補完することができないプロパティは除きます。このようなプロパティは、アニメーションされません)。例えば:</p>

<pre class="brush: css">@keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68%, 72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}
</pre>

<p>この例では、 {{ cssxref("top") }} プロパティは <code>0%</code>, <code>30%</code>, <code>100%</code> のキーフレームでアニメーション指定されています。また、 {{ cssxref("left") }} プロパティは <code>0%</code>, <code>68%</code>, <code>72%</code>, <code>100%</code> のキーフレームで指定されています。</p>

<h3 id="キーフレームが複数宣言された場合">キーフレームが複数宣言された場合</h3>

<p>キーフレームが複数宣言されているものの、アニメーションで作用する全てのプロパティがそれぞれのキーフレームに存在するわけではない場合、これらのキーフレームで指定されたすべての値が適用されます。例えば、</p>

<pre class="brush: css">@keyframes identifier {
  0% { top: 0; }
  50% { top: 30px; left: 20px; }
  50% { top: 10px; }
  100% { top: 0; }
}
</pre>

<p>この例では、 <code>50%</code> のキーフレームで、使用される値は <code>top: 10px</code> と <code>left: 20px</code> です。</p>

<p>カスケード的なキーフレームは Firefox 14 から対応しています。</p>

<h3 id="!important_in_a_keyframe" name="!important_in_a_keyframe">キーフレーム内の <code>!important</code></h3>

<p>キーフレーム内で <code>!important</code> が付けられた宣言は無視されます。</p>

<pre class="brush: css">@keyframes important1 {
  from { margin-top: 50px; }
  50%  { margin-top: 150px !important; } /* 無視される */
  to   { margin-top: 100px; }
}

@keyframes important2 {
  from { margin-top: 50px;
         margin-bottom: 100px; }
  to   { margin-top: 150px !important; /* 無視される */
         margin-bottom: 50px; }
}
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("custom-ident")}}</dt>
 <dd>キーフレームのリストを識別する名前。これは CSS 構文規則で定義されている識別子に適合する必要があります。</dd>
 <dt><code>from</code></dt>
 <dd>アニメーションの始まりである <code>0%</code> を示します。</dd>
 <dt><code>to</code></dt>
 <dd>アニメーションの終わりである <code>100%</code> を示します。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>指定したキーフレームがアニメーションの中で作動する時間を示すパーセント値です。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations">CSS アニメーションの利用</a> を参照してください。</p>

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
   <td>{{ SpecName('CSS3 Animations', '#keyframes', '@keyframes') }}</td>
   <td>{{ Spec2('CSS3 Animations') }}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.at-rules.keyframes")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations">CSS アニメーションの使用</a></li>
 <li>{{domxref("AnimationEvent")}}</li>
</ul>
