---
title: '@font-feature-values'
slug: Web/CSS/@font-feature-values
tags:
  - At-rule
  - CSS
  - CSS Fonts
  - Reference
translation_of: Web/CSS/@font-feature-values
---
<div>{{CSSRef}}</div>

<p><strong><code>@font-feature-values</code></strong> は <a href="/ja/docs/Web/CSS" title="CSS">CSS</a> の<a href="/ja/docs/Web/CSS/At-rule" title="At-rule">アット規則</a>で、OpenType で有効化された特性が異なるものに対して {{cssxref("font-variant-alternates")}} プロパティで共通の名前を使用することができます。これは、複数のフォントを使用している場合に CSS を簡素化するのに役立ちます。</p>

<p><code>@font-feature-values</code> アット規則は、CSS の最上位で使用することも、任意の <a href="/ja/docs/Web/CSS/At-rule#条件付きグループルール">CSS の条件付きグループアット規則</a>の内部で使用することもできます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Feature_value_blocks" name="Feature_value_blocks">特性値のブロック</h3>

<dl>
 <dt><code>@swash</code></dt>
 <dd>{{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "swash()", "#swash()")}} 関数記法に渡される特性名を指定します。文字飾り (swash) の特性値に定義できる値は 1 個だけです。<code>ident1: 2</code> は正しいですが、<code>ident2: 2 4</code> は正しくありません。</dd>
 <dt id="@annotation"><code>@annotation</code></dt>
 <dd>{{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "annotation()", "#annotation()")}} 関数記法に渡される特性名を指定します。注釈 (annotation) 特性値に定義できる値は 1 個だけです。<code>ident1: 2</code> は正しいですが、<code>ident2: 2 4</code> は正しくありません。</dd>
 <dt id="@ornaments"><code>@ornaments</code></dt>
 <dd>{{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "ornaments()", "#ornaments()")}} 関数記法に渡される特性名を指定します。装飾活字 (ornaments) の特性値に定義できる値は 1 個だけです。<code>ident1: 2</code> は正しいですが、<code>ident2: 2 4</code> は正しくありません。</dd>
 <dt id="@stylistic"><code>@stylistic</code></dt>
 <dd>{{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "stylistic()", "#stylistic()")}} 関数記法に渡される特性名を指定します。文字様式 (stylistic) の特性値に定義できる値は 1 個だけです。<code>ident1: 2</code> は正しいですが、<code>ident2: 2 4</code> は正しくありません。</dd>
 <dt id="@styleset"><code>@styleset</code></dt>
 <dd>{{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "styleset()", "#styleset()")}} 関数記法に渡される特性名を指定します。<code>ident1: 2 4 12 1</code> は、OpenType 値 <code>ss02</code> および <code>ss04</code>, <code>ss12</code>, <code>ss01</code> にマッピングされます。<code>99</code> よりも大きな値は正しいですが、どの OpenType 値にもマッピングされず、無視されます。</dd>
 <dt id="@character-variant"><code>@character-variant</code></dt>
 <dd>{{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "character-variant()", "#character-variant()")}} 関数記法に渡される特性名を指定します。異体字 (character-variant) の特性値に定義できる値は 1 個または 2 個です。<code>ident1: 3</code> は <code>cv03=1</code> にマッピングされ、<code>ident2: 2 4</code> は <code>cv02=4</code> にマッピングされますが、 <code>ident2: 2 4 5</code> は無効です。</dd>
</dl>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_styleset_in_a_font-feature-values_rule" name="Using_styleset_in_a_font-feature-values_rule">@font-feature-values 規則内での @styleset の使用</h3>

<pre class="brush: css notranslate">/* "nice-style" を Font One に指定するアット規則 */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* Font Two における "nice-style" のためのアット規則 */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

…

/* 1 回の宣言でアット規則を適用 */
.nice-look {
  font-variant-alternates: styleset(nice-style);
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
   <td>{{SpecName('CSS3 Fonts', '#font-feature-values', '@font-feature-values')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.at-rules.font-feature-values")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このアット規則が定義する値を使用する {{cssxref("font-variant-alternates")}} プロパティ。</li>
</ul>
