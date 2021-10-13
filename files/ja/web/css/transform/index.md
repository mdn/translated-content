---
title: transform
slug: Web/CSS/transform
tags:
  - CSS
  - CSS プロパティ
  - CSS 変形
  - Reference
translation_of: Web/CSS/transform
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) のプロパティ **`transform`** は、与えられた要素を回転、拡大縮小、傾斜、移動することできます。これは、 CSS の[視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)の座標空間を変更します。

{{EmbedInteractiveExample("pages/css/transform.html")}}

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) をクローンしてプルリクエストを送信してください。</p>

このプロパティに `none` 以外の値が設定されていると、[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) が作成されます。この場合、その要素はその中に含まれる `position: fixed;` または `position: absolute;` である要素すべての[包含ブロック](/ja/docs/Web/CSS/Containing_block)として扱われます。

<div class="warning">
変形可能な要素のみが `transform` の対象になります。つまり、レイアウトが CSS ボックスモデルによって管理される、[非置換インラインボックス](/ja/docs/Web/CSS/Visual_formatting_model#Inline-level_elements_and_inline_boxes)、[表の列ボックス](/ja/docs/Web/HTML/Element/col)、[表の列グループボックス](/ja/docs/Web/HTML/Element/colgroup)を除くすべての要素です。
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css">/* キーワード値 */
transform: none;

/* 関数値 */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* 複数の関数値 */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* グローバル値 */
transform: inherit;
transform: initial;
transform: unset;
</pre>

`transform` プロパティには、キーワード値 `[none](#none)` か `[&lt;transform-function&gt;](#&lt;transform-function>)` の値のいずれかが指定されます。

<h3 id="Values" name="Values">値</h3>

 <dt id="&lt;transform-function>">{{cssxref("&lt;transform-function&gt;")}}</dt>
  - : 適用される 1 つ以上の [CSS 変形関数](/ja/docs/Web/CSS/transform-function)です。変形関数は、左から右へ順に重ねられ、つまり右から左の順に変形の混合の効果が適用されます。
 <dt id="none">`none`</dt>
  - : 変形を何も適用しないことを指定します。

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

{{cssxref("transform-function/perspective", "perspective()")}} を複数の関数の中で使用する場合は、最初に配置しなければなりません。

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;Transformed element&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}</pre>

<h3 id="Result" name="Result">結果</h3>

{{EmbedLiveSample("Examples", "400", "160")}}

その他の例は、[CSS Transforms の利用](/ja/docs/Web/Guide/CSS/Using_CSS_transforms) および {{cssxref("&lt;transform-function&gt;")}} をご覧ください。

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮事項</h2>

拡大や縮小のアニメーションは、特定の種類の偏頭痛を引き起こす原因になりやすいので、アクセシビリティの問題になることがあります。ウェブサイトにこのようなアニメーションを含める必要がある場合は、できればサイト全体で、ユーザーがアニメーションを止める制御ができるようしてください。

また、 {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} メディア特性を使用することを検討してください。これを使用して[メディアクエリ](/ja/docs/Web/CSS/Media_Queries)を書けば、ユーザーがシステムの設定でアニメーションを減らすよう指定した場合にアニメーションを止めることができます。

詳しくは以下の文書を参照してください。

<ul>
 <li>[MDN WCAG の理解、ガイドライン 2.3 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.3_%E2%80%94_Seizures_and_Physical_Reactions_Do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)</li>
 <li>[Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)</li>
</ul>

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
   <td>{{SpecName('CSS Transforms 2', '#transform-functions', 'transform')}}</td>
   <td>{{Spec2('CSS Transforms 2')}}</td>
   <td>3D 変換関数を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Transforms', '#transform-property', 'transform')}}</td>
   <td>{{Spec2('CSS3 Transforms')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

{{cssinfo}}

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.properties.transform")}}

## 関連情報

<ul>
 <li>[CSS 変形の使用](/ja/docs/Web/CSS/Using_CSS_transforms)</li>
 <li>{{cssxref("&lt;transform-function&gt;")}} データ型にすべての変形関数の説明があります</li>
 <li>CSS 変形機能を視覚化するオンラインツール: [CSS Transform Playground](https://css-transform.moro.es/)</li>
</ul>
