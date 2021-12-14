---
title: '@supports'
slug: Web/CSS/@supports
tags:
  - At-rule
  - CSS
  - Layout
  - Reference
  - Web
  - supports
translation_of: Web/CSS/@supports
---
<div>{{CSSRef}}</div>

<p><strong><code>@supports</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の <a href="/ja/docs/Web/CSS/At-rule">アット規則</a>で、宣言をブラウザーが1つまたは複数の特定の CSS 機能に対応しているかによって、宣言を指定することができます。これは<em>機能クエリ</em>と呼ばれます。規則はコードの最上位または他の<a href="/ja/docs/Web/CSS/At-rule#条件付きグループルール">条件付きグループアット規則</a>の中に配置することができます。</p>

<pre class="brush: css; no-line-numbers notranslate">@supports (display: grid) {
  div {
    display: grid;
  }
}</pre>

<pre class="brush: css; no-line-numbers notranslate">@supports not (display: grid) {
  div {
    float: right;
  }
}</pre>

<p>JavaScript では <code>@supports</code> は CSS オブジェクトモデルインターフェイスの {{DOMxRef("CSSSupportsRule")}} からアクセスできます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>@supports</code> アット規則は、ステートメントのブロックを<em>対応条件</em>に関連付けます。対応条件は1つまたは複数の名前と値の組を結合条件 (<code>and</code>)、非結合条件(<code>or</code>)、否定 (<code>not</code>) で組み合わせたものです。演算子の結合順位は、括弧を使用して変更できます。</p>

<h3 id="Declaration_syntax" name="Declaration_syntax">宣言の構文</h3>

<p>もっとも基本的な対応条件は、単純な宣言 (プロパティ名に続けて、コロンで区切って値) です。宣言は括弧で囲む必要があります。以下の例は、ブラウザーが {{CSSxRef("transform-origin")}} プロパティの値として <code>5% 5%</code> を有効とみなすのであれば true を返します。</p>

<pre class="brush: css notranslate">@supports (transform-origin: 5% 5%) {}</pre>

<h3 id="Function_syntax" name="Function_syntax">関数構文</h3>

<p>第二の基本的な対応状況は関数の対応であり、これらの構文はすべてのブラウザーで対応されていますが、関数自体はまだ標準化の過程にあります。</p>

<h4 id="selector" name="selector()"><code>selector()</code> {{Experimental_Inline}}</h4>

<p>ブラウザーがテストされたセレクターの構文に対応しているかどうかを検査します。以下の例は、ブラウザーが<a href="/ja/docs/Web/CSS/Child_combinator">子結合子</a>に対応していれば true を返します。</p>

<pre class="brush: css notranslate">@supports selector(A &gt; B) {}</pre>

<h3 id="The_not_operator" name="The_not_operator">not 演算子</h3>

<p><code>not</code> 演算子は、新たな式を作成するために任意の式の前に置くことができ、元の式を否定します。以下の例は、ブラウザーが {{CSSxRef("transform-origin")}} プロパティの値として <code>10em 10em 10em</code> を有効と<strong>みなさない</strong>のであれば true を返します。</p>

<pre class="brush: css notranslate">@supports not (transform-origin: 10em 10em 10em) {}</pre>

<p>他の演算子と同様に、 <code>not</code> 演算子はどれだけ複雑な宣言にも適用できます。以下の例はすべて有効な式です。</p>

<pre class="brush: css notranslate">@supports not (not (transform-origin: 2px)) {}
@supports (display: grid) and (not (display: inline-grid)) {}</pre>

<div class="blockIndicator note style-wrap">
<p><strong>注:</strong> <code>not</code> 演算子が最上位にある場合は、括弧でくくる必要はありません。 <code>and</code> や <code>or</code> といった他の演算子と組み合わせるときは、括弧が必須です。</p>
</div>

<h3 id="The_and_operator" name="The_and_operator">and 演算子</h3>

<p><code>and</code> 演算子は 2 つの式から、元の式の論理積で構成される新たな式を作成します。元の式の両方が true になる場合に限り、新たな式が true になります。以下の例では 2 つの式が同時に true になる場合に限り、全体の式も true になります。</p>

<pre class="brush: css notranslate">@supports (display: table-cell) and (display: list-item) {}</pre>

<p>括弧を増やすことなく、複数の論理積を並記することができます。以下の式はどちらも等価です。</p>

<pre class="brush: css notranslate">@supports (display: table-cell) and (display: list-item) and (display:run-in) {}
@supports (display: table-cell) and ((display: list-item) and (display:run-in)) {}</pre>

<h3 id="The_or_operator" name="The_or_operator">or 演算子</h3>

<p><code>or</code> 演算子は 2 つの式から、元の式の論理和で構成される新たな式を作成します。元の式の一方または両方が true になる場合に限り、新たな式が true になります。以下の例では 2 つの式の少なくとも 1 つが true になる場合に限り、全体の式も true になります。</p>

<pre class="brush: css notranslate">@supports (transform-style: preserve) or (-moz-transform-style: preserve) {}</pre>

<p>括弧を増やすことなく、複数の論理和を並記することができます。以下の式はどちらも等価です。</p>

<pre class="brush: css notranslate">@supports (transform-style: preserve) or (-moz-transform-style: preserve) or
          (-o-transform-style: preserve) or (-webkit-transform-style: preserve) {}

@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or
          ((-o-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}
</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: <code>and</code> 演算子と <code>or</code> 演算子を両方とも使用するときは、これらを適用する順序を定義するために括弧を使用しなければなりません。そうしなければ、アット規則全体を無視させる無効な条件になります。</p>
</div>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Testing_for_the_support_of_a_given_CSS_property" name="Testing_for_the_support_of_a_given_CSS_property">指定した CSS プロパティの対応状況を確認する</h3>

<pre class="brush: css notranslate">@supports (animation-name: test) {
  … /* 接頭辞がないプロパティでアニメーションに対応する場合に適用する CSS */
  @keyframes { /* 他のアット規則を含むことができる */
    …
  }
}
</pre>

<h3 id="Testing_for_the_support_of_a_given_CSS_property_or_a_prefixed_version" name="Testing_for_the_support_of_a_given_CSS_property_or_a_prefixed_version">指定した CSS プロパティの対応状況を、接頭辞付きも含めて確認する</h3>

<pre class="brush: css notranslate">@supports ((perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
         (-ms-perspective: 10px) or (-o-perspective: 10px)) {
  … /* 接頭辞つきを含めて 3D transforms を対応する場合に適用する CSS */
}
</pre>

<h3 id="Testing_for_the_non-support_of_a_specific_CSS_property" name="Testing_for_the_non-support_of_a_specific_CSS_property">指定した CSS プロパティに対応していないことを確認する</h3>

<pre class="brush: css notranslate">@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  … /* text-align-last:justify をシミュレートするために適用する CSS */
}</pre>

<h3 id="Testing_for_the_custom_properties" name="Testing_for_the_custom_properties">カスタムプロパティの対応状況を確認する</h3>

<pre class="brush: css notranslate">@supports (--foo: green) {
  body {
    color: var(--varName);
  }
}</pre>

<h3 id="Testing_for_the_support_of_a_selector" name="Testing_for_the_support_of_a_selector">セレクターの対応の検査 (例: {{CSSxRef(":is", ":is()")}})</h3>

<p>{{SeeCompatTable}}</p>

<pre class="brush: css highlight[6, 14] notranslate">/* この規則は :is() に対応していないブラウザーでは適用されません */
:is(ul, ol) &gt; li {
  … /* :is(…) セレクターに対応している場合に CSS が適用される */
}

@supports not selector(:is(a, b)) {
  /* :is() に対応していない場合の代替 */
  ul &gt; li,
  ol &gt; li {
    … /* 上記のものは :is(…) に対応していないブラウザーのために展開しています */
  }
}

/* Note: By far, there's no browser that supports the `of` argument of :nth-child(…) */
@supports selector(:nth-child(1n of a, b)) {
  /* This rule needs to be inside the @supports block, otherwise
     it will be partially applied in browsers which don't support
     the `of` argument of :nth-child(…) is supported */
  :is(
      :nth-child(1n of ul, ol) a,
      details &gt; summary
  ) {
    … /* CSS applied when the :is(…) selector and
         the `of` argument of :nth-child(…) are both supported */
  }
}
</pre>

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
   <td>{{SpecName("CSS4 Conditional", "#at-supports-ext", "@supports")}}</td>
   <td>{{Spec2("CSS4 Conditional")}}</td>
   <td><code>selector()</code> 関数を追加</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Conditional", "#at-supports", "@supports")}}</td>
   <td>{{Spec2("CSS3 Conditional")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.at-rules.supports")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries">機能クエリの使用</a></li>
 <li>JavaScript で同様のチェックを実行できる、CSSOM の {{DOMxRef("CSSSupportsRule")}} クラスおよび {{DOMxRef("CSS.supports()")}} メソッド</li>
</ul>
