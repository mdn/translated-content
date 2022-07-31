---
title: Window.getComputedStyle()
slug: Web/API/Window/getComputedStyle
tags:
  - API
  - CSSOM View
  - Method
  - Reference
  - Window
  - getComputedStyle
translation_of: Web/API/Window/getComputedStyle
---
<p>{{APIRef("CSSOM")}}</p>

<p class="summary"><span class="seoSummary"><strong><code>Window.getComputedStyle()</code></strong> メソッドは、アクティブなスタイルシートを適用し、それらの値に含まれる可能性のある基本的な計算を解決した後、要素のすべての CSS プロパティの値を含むオブジェクトを返します。</span>個々の CSS プロパティの値は、オブジェクトによって提供される API を介してアクセスするか、CSS プロパティ名でインデックスを作成することでアクセスすることができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>style</var> = window.getComputedStyle(<var>element</var> [, <var>pseudoElt</var>]);</pre>

<dl>
 <dt><code><var>element</var></code></dt>
 <dd>この {{DOMxRef("Element")}} の計算したスタイルを取得します。</dd>
 <dt><code><var>pseudoElt</var></code>{{Optional_Inline}}</dt>
 <dd>一致させる擬似要素を指定する文字列。実在する要素の場合は省略 (または <code>null</code>)。</dd>
</dl>

<p>返値の <code>style</code> は、<em>生きた</em> {{DOMxRef("CSSStyleDeclaration")}} オブジェクトで、要素のスタイルが変わると自動で更新されます。</p>

<h3 id="Throws" name="Throws">例外</h3>

<dl>
 <dt>{{JSxRef("TypeError")}}</dt>
 <dd>渡されたオブジェクトが {{DOMxRef("Element")}} ではないか、 <code><var>pseudoElt</var></code> が妥当な擬似要素セレクターではないか、 {{CSSxRef("::part", "::part()")}} または {{CSSxRef("::slotted", "::slotted()")}} である場合。</dd>
 <dd>
 <div class="blockIndicator note">
 <p><strong>注:</strong> 妥当な擬似要素とは構文的に適切であることを指します。例えば <code>::unsupported</code> は擬似要素として対応はありませんが、妥当と判断されます。</p>
 </div>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、 {{HTMLElement("p")}} の要素のスタイルを設定してから、<code>getComputedStyle()</code> を使用してそれらのスタイルを取得し、それらを <code>&lt;p&gt;</code> のテキストコンテンツに出力します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html; no-line-numbers notranslate">&lt;p&gt;Hello&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css; notranslate">p {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  font: 2rem/2 sans-serif;
  text-align: center;
  background: purple;
  color: white;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js; notranslate">let para = document.querySelector('p');
let compStyles = window.getComputedStyle(para);
para.textContent = 'My computed font-size is ' +
    compStyles.getPropertyValue('font-size') +
    ',\nand my computed line-height is ' +
    compStyles.getPropertyValue('line-height') +
    '.';</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Examples', '100%', '240px')}}</p>

<h2 id="Description" name="Description">解説</h2>

<p>返されるオブジェクトは {{DOMxRef("CSSStyleDeclaration")}} 型で、これは要素の {{DOMxRef("HTMLElement.style", "style")}} プロパティから返されるオブジェクトと同じです。しかし、2つのオブジェクトは異なる目的を持っています。</p>

<ul>
 <li><code>getComputedStyle</code> から返されたオブジェクトは読み取り専用で、 <code>&lt;style&gt;</code> 要素や外部スタイルシートで設定されたものも含めて、要素のスタイルを検査するために使用するためのものです。</li>
 <li><code><em>element</em>.style</code> オブジェクトは、その要素にスタイルを<strong>設定</strong>したり、 JavaScript の操作やグローバルの <code>style</code> 属性から直接追加されたスタイルを検査したりするために使用するためのものです。</li>
</ul>

<p>最初の引数は {{domxref("Element")}} でなければなりません。要素以外、例えば {{DOMxRef("Text")}} ノードであった場合はエラーが発生します。</p>

<h2 id="defaultView">defaultView</h2>

<p>多くのコードサンプルでは、 <code>getComputedStyle</code> は {{DOMxRef("document.defaultView")}} オブジェクトから使用されています。ほとんどの場合、 <code>getComputedStyle</code> は <code>window</code> オブジェクト上に存在するので、これは必要ありません。 <code>defaultView</code> パターンは、 <code>window</code> のテスト仕様を書きたくない人たちと、 Java でも使える API を作りたくない人たちの組み合わせだったのかもしれません。</p>

<h2 id="Use_with_pseudo-elements" name="Use_with_pseudo-elements">擬似要素の使用</h2>

<p><code>getComputedStyle</code> は擬似要素 (例えば <code>::after</code>, <code>::before</code>, <code>::marker</code>, <code>::line-marker</code> — <a class="external" href="https://www.w3.org/TR/css-pseudo-4/">the pseudo-element spec</a> を参照してください) からスタイル情報を取得することができます。</p>

<pre class="brush: html notranslate">&lt;style&gt;
  h3::after {
    content: ' rocks!';
  }
&lt;/style&gt;

&lt;h3&gt;Generated content&lt;/h3&gt;

&lt;script&gt;
  var h3 = document.querySelector('h3');
  var result = getComputedStyle(h3, ':after').content;

  console.log('the generated content is: ', result); // returns ' rocks!'
&lt;/script&gt;
</pre>

<h2 id="Notes" name="Notes">注</h2>

<ul>
 <li>返された {{DOMxRef("CSSStyleDeclaration")}} オブジェクトは、 CSS プロパティの<em><strong>個別指定</strong></em>の名前のアクティブな値を含んでいます。例えば、 <code>border-bottom-width</code> の値は <code>border-width</code> や <code>border</code> などの<a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定プロパティ名</a>ではアクセスできません。 <code>font-size</code> のような個別指定の名前だけで値を問い合わせるのが最も安全です。 <code>font</code> のような一括指定の名前では、ほとんどのブラウザーでは動作しません。</li>
 <li>CSS のプロパティ値は、 <code>getPropertyValue(propName)</code> API を使用してアクセスすることも、 <code>obj['z-index']</code> や <code>obj.zIndex</code>のようにオブジェクトに直接添字を指定してアクセスすることもできます。</li>
 <li><code>getComputedStyle</code> によって返される値は、{{CSSxRef("resolved_value", "解決値", "", 1)}}です。これらの値は通常、CSS 2.1 の{{CSSxRef("computed_value","計算値", "", 1)}}と同じですが、 <code>width</code>, <code>height</code>, <code>padding</code> のような古いプロパティの場合は、{{CSSxRef("used_value","使用値", "", 1)}}と同じになります。もともと CSS 2.0 では、<em>計算値</em>はカスケードと継承後のプロパティの「使用可能な」最終値として定義されていましたが、 CSS 2.1 ではレイアウトする前の値として再定義され、<em>使用値</em>はレイアウト後の値として再定義されています。 CSS 2.0 のプロパティでは、 <code>getComputedStyle</code> は計算値の古い意味を返しますが、現在は<strong>使用値</strong>と呼ばれています。レイアウト前の値とレイアウト後の値の違いの例として、 <code>width</code> や <code>height</code> のパーセント値の解像度があり、これらは<em>使用値</em>のみ同等のピクセル数に置き換えられます。</li>
 <li>返される値が意図的に不正確になる場合があります。「CSS History Leak」のセキュリティ問題を回避するために、ブラウザーは訪問したリンクの計算されたスタイルについて嘘をつき、ユーザーがリンク先の URL を訪問していないかのような値を返すことがあります。これがどのように実装されているかについては、 <a class="external" href="https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/">Plugging the CSS History Leak</a> と <a class="external" href="https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/">Privacy-related changes coming to CSS :visited</a> を参照してください。</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>が動作している間、 <code>getComputedStyle</code> は、 Firefox では元のプロパティ値を返しますが、 WebKit では最終的なプロパティ値を返します。</li>
 <li>Firefox では、 <code>auto</code> の値を持つプロパティは <code>auto</code> の値ではなく、使用値を返します。そのため、 <code>top:auto</code> と <code>bottom:0</code> を <code>height:30px</code> の要素に適用し、包含ブロックを <code>height:100px</code> を適用すると、 Firefox の <code>top</code> のスタイルの計算値は、 100 − 30 = 70 なので <code>70px</code> となります。</li>
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
   <td>{{SpecName("CSSOM", "#dom-window-getcomputedstyle", "getComputedStyle()")}}</td>
   <td>{{Spec2("CSSOM")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Style", "#CSS-CSSview-getComputedStyle", "getComputedStyle()")}}</td>
   <td>{{Spec2("DOM2 Style")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.getComputedStyle")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{DOMxRef("window.getDefaultComputedStyle")}}</li>
 <li>{{CSSxRef("resolved_value", "Resolved Value")}}</li>
</ul>
