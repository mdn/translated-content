---
title: env()
slug: Web/CSS/env()
tags:
  - CSS
  - CSS Function
  - CSS Variables
  - CSS 変数
  - CSS 関数
  - Draft
  - Function
  - Reference
  - Variables
  - env
  - env()
  - 変数
  - 関数
translation_of: Web/CSS/env()
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>env()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の関数で、ユーザーエージェントが定義した環境変数の値を、 {{cssxref("var")}} 関数や<a href="/ja/docs/Web/CSS/--*">カスタムプロパティ</a>と同じ方法で CSS に挿入するために使用することができます。異なる点は、ユーザーが定義しているのではなくユーザーエージェントが定義しているものであること、カスタムプロパティは宣言されている要素のスコープであるのに対し、環境変数は文書でグローバルなスコープであることです。</span></p>

<p>ブラウザーに画面上の利用可能な範囲全体を使用するように指示し、 <code>env()</code> 変数を使用できるようにするには、新しいビューポートのメタ値を追加する必要があります。</p>

<pre class="brush: html; no-line-numbers notranslate">&lt;meta name="viewport" content="viewport-fit=cover" /&gt;</pre>

<pre class="brush: css; no-line-numbers notranslate">body {
  padding:
    env(safe-area-inset-top, 20px)
    env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px)
    env(safe-area-inset-left, 20px);
}</pre>

<p>加えて、宣言の外部で使用することができないカスタムプロパティとは異なり、 <code>env()</code> 関数はプロパティ値の任意の部分、記述子の任意の部分 (例 <a href="/ja/docs/Web/CSS/@media">メディアクエリ規則</a>) で使用することができます。仕様書が発展すると、セレクターなどの他の場所でも使用することができるかもしれません。</p>

<p>もともとは iOS ブラウザーで、開発者がコンテンツをビューポートの安全な領域に配置できるように提供されていたもので、仕様で定義されている <code>safe-area-inset-*</code> の値を使用することで、矩形以外の画面を使用している閲覧者でも、コンテンツが見えることを保証するのに役立ちます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css; no-line-numbers notranslate">/* 代替値なしで4つの安全な矩形までの寸法値を使用 */
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/* 代替値付きで使用 */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 1em);
env(safe-area-inset-bottom, 0.5vh);
env(safe-area-inset-left, 1.4rem);
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code id="safe-area-inset-top" style="white-space: nowrap;">safe-area-inset-top</code>, <code id="safe-area-inset-right" style="white-space: nowrap;">safe-area-inset-right</code>, <code id="safe-area-inset-bottom" style="white-space: nowrap;">safe-area-inset-bottom</code>, <code id="safe-area-inset-left" style="white-space: nowrap;">safe-area-inset-left</code></dt>
 <dd><code style="white-space: nowrap;">safe-area-inset-*</code> の値は4つの環境変数から成り、矩形ではない画面において、ビューポートの縁から、コンテンツを置いても切り取られる危険がない安全な矩形までの寸法を、上、右、下、左で定義します。一般的なノートパソコンのモニターなど、矩形のビューポートでは、これらの値はゼロに等しくなります。矩形ではない画面 — 例えば円い時計の画面 — では、矩形の中のすべてのコンテンツが表示できるような矩形から、ユーザーエージェントが設定します。</dd>
</dl>

<p><strong>注</strong>: ほかの CSS プロパティとは異なり、ユーザーエージェントの定義するプロパティ名は大文字・小文字が区別されます。</p>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例では、 <code>env()</code> の第2引数を使用して、環境変数が利用できなかった場合の代替値を提供しています。</p>

<pre class="brush: html notranslate">&lt;p&gt;
  お使いのブラウザーが &lt;code&gt;env()&lt;/code&gt; 関数に対応している場合、
  この段落のテキストと左の境界の間に 50px のパディングが設定されますが、
  上、右、下には設定されません。
  これは、他の CSS プロパティとは異なり、ユーザーエージェントプロパティ名は
  大文字・小文字が区別されるため、 &lt;code&gt;padding: 0 0 0 50px&lt;/code&gt;
  と同等の CSS になるからです。
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">p {
  width: 300px;
  border: 2px solid red;
  padding:
    env(safe-area-inset-top, 50px)
    env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px)
    env(SAFE-AREA-INSET-LEFT, 50px);
}</pre>

<p>{{EmbedLiveSample("Examples")}}</p>

<h3 id="Example_values" name="Example_values">値の例</h3>

<pre class="brush: css notranslate">padding: env(safe-area-inset-bottom, 50px); /* 画面が矩形のユーザーエージェントではゼロ */
padding: env(Safe-area-inset-bottom, 50px); /* UA プロパティは大文字・小文字を区別するため 50px */
padding: env(x, 50px 20px); /* x が妥当な環境変数でなければ padding: '50px 20px' が設定される */
padding: env(x, 50px, 20px); /* x が妥当な環境変数でなく、 '50px, 20px' が妥当なパディング値でないため無視 */
</pre>

<p>代替値の構文は、カスタムプロパティの場合と同様、カンマが許容されます。ただし、プロパティ値がカンマに対応していない場合、値は妥当ではなくなります。</p>

<p><strong>注</strong>: ユーザーエージェントプロパティは <a href="/ja/docs/Web/CSS/all">all</a> プロパティでリセットされません。</p>

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
   <td>{{SpecName("CSS3 Environment Variables", "#env-function", "env()")}}</td>
   <td>{{Spec2("CSS3 Environment Variables")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.custom-property.env")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("var", "var(…)")}}</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Variables">CSS カスタムプロパティと変数のカスケード</a></li>
 <li><a href="/ja/docs/Web/CSS/--*">カスタムプロパティ (--*)</a></li>
 <li><a href="/ja/docs/Web/CSS/Using_CSS_variables">CSS カスタムプロパティ (変数) の使用</a></li>
 <li>{{CSSxRef("@viewport/viewport-fit", "viewport-fit (@viewport)")}}</li>
</ul>
