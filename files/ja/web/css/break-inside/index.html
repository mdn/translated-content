---
title: break-inside
slug: Web/CSS/break-inside
tags:
  - CSS
  - CSS Fragmentation
  - CSS Multi-column Layout
  - CSS Property
  - NeedsExample
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/break-inside
---
<div>{{CSSRef}}</div>

<p><strong><code>break-inside</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、生成されたボックスの途中で、ページ、段、領域をどのように区切るかを設定します。ボックスが生成されない場合は、このプロパティは無視されます。</p>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* グローバル値 */
break-inside: inherit;
break-inside: initial;
break-inside: unset;
</pre>

<p>区切り位置になる可能性のある場所 (言い換えれば、要素の境界) は、三つのプロパティに影響されます。前の要素の {{cssxref("break-after")}} の値、次の要素の {{cssxref("break-before")}} の値、包含要素の <code>break-inside</code> の値です。</p>

<p>区切られるかどうかを判断するために、以下の規則が適用されます。</p>

<ol>
 <li>考慮される三つの値の中の何れかに<em>区切りを強制する値</em> (<code>always</code>, <code>left</code>, <code>right</code>, <code>page</code>, <code>column</code>, <code>region</code> の何れか) がある場合、それが優先されます。そのような区切りが複数ある場合は、フローの中で最も後に現れる要素のものが使用されます (つまり、 <code>break-before</code> の値は <code>break-after</code> の値より優先し、それは更に <code>break-inside</code> よりも優先します)。</li>
 <li>考慮される三つの値の中に<em>区切りを防止する値</em> (<code>avoid</code>, <code>avoid-page</code>, <code>avoid-region</code>, <code>avoid-column</code> の何れか) が含まれていた場合は、その場所で区切りは適用されません。</li>
</ol>

<p>強制的な区切りが適用されると、必要に応じてソフトな区切りが追加される場合がありますが、 <code>avoid</code> に関する値に解決される要素の境界には追加されません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>break-inside</code> プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>主ボックスの途中に何らかの (ページ、段、領域の) 区切りを挿入することを許可しますが、強制はしません。</dd>
 <dt><code>avoid</code></dt>
 <dd>主ボックスの途中に何らかの (ページ、段、領域の) 区切りを挿入することを禁止します。</dd>
 <dt><code>avoid-page</code></dt>
 <dd>主ボックスの途中の改ページを禁止します。</dd>
 <dt><code>avoid-column</code></dt>
 <dd>主ボックスの途中の段区切りを禁止します。</dd>
 <dt><code>avoid-region</code> {{experimental_inline}}</dt>
 <dd>主ボックスの途中の領域区切りを禁止します。</dd>
</dl>

<h2 id="Page_break_aliases" name="Page_break_aliases">改ページの別名</h2>

<p>互換性のため、ブラウザーは古い {{cssxref("page-break-inside")}} を <code>break-inside</code> の別名として扱います。これにより、 <code>page-break-inside</code> を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。</p>

<table>
 <thead>
  <tr>
   <th scope="col">page-break-inside</th>
   <th scope="col">break-inside</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>auto</code></td>
   <td><code>auto</code></td>
  </tr>
  <tr>
   <td><code>avoid</code></td>
   <td><code>avoid</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Avoiding_breaking_inside_a_figure" name="Avoiding_breaking_inside_a_figure">図の中の改行を防ぐ</h3>

<p>次の例では、すべての段にまたがる <code>&lt;h1&gt;</code> (<code>column-span: all</code> を使用して実現) と、 <code>column-width: 200px</code> を使用して複数の段に配置された一連の段落を含むコンテナーを用意しています。また、画像とキャプションを含む <code>&lt;figure&gt;</code> もあります。</p>

<p>既定では、画像とキャプションの間に改行が入る可能性がありますが、これは私たちが望んでいるものではありません。これを避けるために、 <code>break-inside: avoid</code> を <code>&lt;figure&gt;</code> に設定しています。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;article&gt;
  &lt;h1&gt;Main heading&lt;/h1&gt;

  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus. Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque dapibus, eu lacinia lectus dictum.&lt;/p&gt;

  &lt;figure&gt;
    &lt;img src="https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png"&gt;
    &lt;figcaption&gt;The Firefox logo — fox wrapped around the world&lt;/figcaption&gt;
  &lt;/figure&gt;

  &lt;p&gt;Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie nec nisi.&lt;/p&gt;

  &lt;p&gt;In finibus viverra enim vel suscipit. Quisque consequat velit eu orci malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl, sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.&lt;/p&gt;
&lt;/article&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">html {
  font-family: helvetica, arial, sans-serif;
}

body {
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h1 + p {
  margin-top: 0;
}

p {
  line-height: 1.5;
  break-after: column;
}

figure {
  break-inside: avoid;
}

img {
  max-width: 70%;
  display: block;
  margin: 0 auto;
}

figcaption {
  font-style: italic;
  font-size: 0.8rem;
  width: 70%;
}

article {
  column-width: 200px;
  gap: 20px;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Avoiding_breaking_inside_a_figure', '100%', 600)}}</p>

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
   <td>{{SpecName('CSS3 Fragmentation', '#break-within', 'break-inside')}}</td>
   <td>{{Spec2('CSS3 Fragmentation')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Regions', '#region-flow-break', 'break-inside')}}</td>
   <td>{{Spec2('CSS3 Regions')}}</td>
   <td>領域区切りを扱うようにプロパティを拡張した。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Multicol', '#break-before-break-after-break-inside', 'break-inside')}}</td>
   <td>{{Spec2('CSS3 Multicol')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.break-inside", 4)}}</p>

<h3 id="Notes_on_compatibility" name="Notes_on_compatibility">互換性のメモ</h3>

<p>Forefox 65 以前では、より古い {{cssxref("page-break-inside")}} プロパティがページと同様に段の分割も防止するするよう動作します。後方互換性のために両方のプロパティを追加してください。</p>

<p>古い WebKit ベースのブラウザーでは、接頭辞付きの <code>-webkit-column-break-inside</code> プロパティで段区切りを制御することができます。</p>
