---
title: CSS Houdini
slug: Web/CSS/CSS_Houdini
tags:
  - CSS
  - Houdini
  - Experimental
  - Guide
  - Overview
  - Reference
translation_of: Web/CSS/CSS_Houdini
---
<div>{{CSSRef}}</div>

<p><strong>CSS Houdini</strong> は、 CSS エンジンの一部を公開する一連の API です。これにより、開発者は CSS の拡張機能を簡単に作成することができます。これらの拡張機能は、ブラウザーでまだ利用できない機能を代替したり、レイアウトの新しい方法を試したり、クリエイティブな境界線やその他の効果を追加したりするものです。</p>

<p>多くの Houdini の例では、 API の創造的な可能性が紹介されていますが、実用的な使用例もたくさんあります。例えば、 Houdini を使って、型のチェックや既定値を持つ高度なカスタムプロパティを作成することができます。</p>

<h2 id="Basic_example">基本的な例</h2>

<p>通常の <a href="/ja/docs/Web/CSS/--*">CSS カスタムプロパティ</a>は、プロパティの名前と値から成ります。したがって、 <code>--background-color</code> というカスタムプロパティを生成し、色の値を取るようにするとします。この値は、 CSS 内で色の値であるかのように扱われます。</p>

<pre class="brush:css">:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}</pre>

<p>しかし、上記の例では、このプロパティに他の値を使用したり、長さを設定することを止めることはできません。そうすると、 <code>background-color: 12px</code> は有効ではないので、このプロパティが使用されている場所には背景色が設定されません。ブラウザーは、有効でないと認識した CSS に出会うと、その行を捨ててしまうからです。</p>

<p>しかし {{cssxref("@property")}} を使用すると、 {{CSSxRef("@property/syntax","syntax")}} に <code>&lt;color&gt;</code> を指定してカスタムプロパティを設定することができます。これは、このプロパティが有効な色である値を持つ必要があることを示します。</p>

<pre class="brush:css">@property --background-color {
  syntax: '&lt;color&gt;';
  inherits: false;
  initial-value: blue;
}</pre>

<h2 id="Houdini_worklets">Houdini ワークレット</h2>

<p>Houdini の機能の一つにワークレット ({{domxref("Worklet")}}) があります。ワークレットとは JavaScriptで書かれたモジュールで、 Houdini の API の一つを使って CSS を拡張するものです。ワークレットの例は {{domxref("PaintWorklet.registerPaint()")}} のページで見ることができます。いったんワークレットが登録されると、他の値と同様に CSS で使用することができます。つまり、 JavaScript の開発者でなくても、他の人が作成したワークレットを使って Houdini API にアクセスすることができます。</p>

<p><a href="https://houdini.how/">Houdini.how</a> のウェブサイトには、自分のサイトで試すことができるたくさんのワークレットがあります。</p>

<h2 id="Reference">リファレンス</h2>

<h3 id="CSS_at_rule">CSS アット規則と記述子</h3>

<p>{{CSSxRef("@property")}} アット規則で高度なカスタムプロパティを登録することができます。</p>

<ul>
 <li>{{CSSxRef("@property")}}</li>
 <li>{{CSSxRef("@property/inherits","inherits")}}</li>
 <li>{{CSSxRef("@property/initial-value","initial-value")}}</li>
 <li>{{CSSxRef("@property/syntax","syntax")}}</li>
</ul>

<h3 id="Houdini_API_references">Houdini API リファレンス</h3>

<ul>
  <li>{{domxref("CSS_Properties_and_Values_API")}}</li>
  <li>{{domxref("CSS_Typed_OM_API")}}</li>
  <li>{{domxref("CSS_Painting_API")}}</li>
  <li>{{domxref("Worklet")}} のリファレンス</li>
</ul>

<h3 id="Houdini_guides">Houdini ガイド</h3>

<ul>
  <li><a href="/ja/docs/Web/API/CSS_Properties_and_Values_API/guide">プロパティと値 API ガイド</a></li>
  <li><a href="/ja/docs/Web/API/CSS_Typed_OM_API/Guide">型付き OM API ガイド</a></li>
  <li><a href="/ja/docs/Web/API/CSS_Painting_API/Guide">CSS Painting API の使用</a></li>
</ul>

<h2 id="External_resources">外部リソース</h2>

<ul>
 <li><a href="http://houdini.glitch.me/">Interactive introduction to Houdini</a></li>
 <li><a href="https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/">A Practical Overview of CSS Houdini</a></li>
 <li><a href="https://web.dev/css-props-and-vals/">Smarter custom properties with Houdini's new API</a></li>
</ul>
