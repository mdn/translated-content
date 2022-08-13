---
title: データ属性の使用
slug: Learn/HTML/Howto/Use_data_attributes
tags:
  - HTML
  - HTML5
  - ウェブ
  - ガイド
  - 例
  - 独自データ属性
translation_of: Learn/HTML/Howto/Use_data_attributes
---
<div>{{LearnSidebar}}</div>

<p><a href="/ja/docs/Web/Guide/HTML/HTML5">HTML5</a> は、特定の要素に関連付ける必要があるが、定義済みの意味を持つ必要のないデータに対する拡張性を念頭に置いて設計されています。 <a href="/ja/docs/Web/HTML/Global_attributes#attr-dataset"><code>data-*</code> 属性</a>により、標準外の属性、 DOM の追加プロパティ、 {{domxref("Node.setUserData()")}} のような特殊な方法に頼らずに、標準的な意味のある HTML 要素に追加情報を格納することができます。</p>

<h2 id="HTML_syntax" name="HTML_syntax">HTML の構文</h2>

<p>構文は単純です。あらゆる要素上で、名前が <code>data-</code> で始まるあらゆる属性がデータ属性です。例えば、記事 (article) があり、視覚表現を行わない追加情報を格納したいとします。 <code>data</code> 属性を使用するとこれだけです。</p>

<pre class="brush: html">&lt;article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"&gt;
...
&lt;/article&gt;</pre>

<h2 id="JavaScript_access" name="JavaScript_access">JavaScript からのアクセス</h2>

<p><a href="/ja/docs/Web/JavaScript">JavaScript</a> でこれらの属性の値を読み出すことも、とても簡単です。 {{domxref("Element.getAttribute", "getAttribute()")}} で完全な HTML での名前を使用して読むこともできますが、もっと簡単な方法が標準で定義されています。 {{domxref("HTMLElement.dataset", "dataset")}} プロパティを通して {{domxref("DOMStringMap")}} で読み出すことができます。</p>

<p><code>dataset</code> オブジェクトを通して <code>data</code> 属性を取得するには、属性名の <code>data-</code> より後の部分を使用して取得します (なお、ダッシュは camelCase に変換されます)。</p>

<pre class="brush: js">const article = document.getElementById('electric-cars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"</pre>

<p>それぞれのプロパティは文字列であり、読み書きができます。上記の場合、 <code>article.dataset.columns = 5</code> を設定すると、その属性が <code>"5"</code> に変わります。</p>

<h2 id="CSS_access" name="CSS_access">CSS からのアクセス</h2>

<p>データ属性はプレーンな HTML 属性であるため、<a href="/ja/docs/Web/CSS">CSS</a> からもアクセスできることに注意してください。 例えば、記事の親データを表示するには、次のように {{cssxref("attr")}} 関数を使用して CSS で<a href="/ja/docs/Web/CSS/content">生成したコンテンツ</a>を使用できます。</p>

<pre class="brush: css">article::before {
  content: attr(data-parent);
}</pre>

<p>CSS の<a href="/ja/docs/Web/CSS/Attribute_selectors">属性セレクタ</a>を使用して、次のようにデータに応じてスタイルを変更することもできます。</p>

<pre class="brush: css">article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}</pre>

<p><a href="https://jsbin.com/ujiday/2/edit">この JSBin の例</a>では、これらすべてが一緒に機能していることがわかります。</p>

<p>データ属性を保存して、ゲームのスコアなど、絶えず変化する情報を含めることもできます。 ここで CSS セレクタと JavaScript アクセスを使用すると、独自の表示ルーチンを作成することなく、気の利いたエフェクトを作成できます。 生成したコンテンツと CSS トランジション（transition、遷移）を使用した例については、<a href="https://www.youtube.com/watch?v=On_WyUB1gOk">このスクリーンキャスト</a>を参照してください（<a href="https://jsbin.com/atawaz/3/edit">JSBin の例</a>）。</p>

<p>データ値は文字列です。 スタイリングを有効にするには、セレクタで数値を引用符で囲む必要があります。</p>

<h2 id="Issues" name="Issues">問題</h2>

<p>支援技術がアクセスできない可能性があるため、データ属性に表示およびアクセス可能なコンテンツを保存しないでください。 さらに、検索クローラーはデータ属性の値にインデックスを付けない場合があります。</p>

<p>考慮すべき主な問題は、Internet Explorer のサポートとパフォーマンスです。 Internet Explorer 11 以降は標準のサポートを提供しますが、以前のバージョンはすべて <a href="https://caniuse.com/#feat=dataset"><code>dataset</code> をサポートしていません</a>（英語）。 IE 10 以下をサポートするには、代わりに {{domxref("Element.getAttribute", "getAttribute()")}} を使用してデータ属性にアクセスする必要があります。 また、通常の JS オブジェクトにこのデータを保存する場合と比較して、<a href="https://jsperf.com/data-dataset">データ属性の読み取りパフォーマンス</a>（英語）が低下します。</p>

<p>ただし、カスタム要素に関連付けられたメタデータの場合、それらは優れたソリューションです。</p>

<p>Firefox 49.0.2（およびおそらくそれに前後したバージョン）では、1022 文字を超えるデータ属性は Javascript（EcmaScript 4）によって読み取られません。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>この記事は、<a href="https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/">hacks.mozilla.org の JavaScript および CSS でのデータ属性の使用</a>（英語）から改編されました。</li>
 <li>カスタム属性は SVG 2 でもサポートされています。 詳細については、{{domxref("SVGElement.dataset")}} および {{SVGAttr("data-*")}} を参照してください。</li>
 <li><a href="https://www.sitepoint.com/use-html5-data-attributes/">HTML5 データ属性の使用方法</a>（Sitepoint、英語）</li>
</ul>
