---
title: text-align
slug: Web/CSS/text-align
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/text-align
---
<div>{{CSSRef}}</div>

<p><strong><code>text-align</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、ブロック要素または表セルボックスの水平方向の配置を設定します。つまり、 {{cssxref("vertical-align")}} のように、ただし水平方向に動作します。</p>

<div>{{EmbedInteractiveExample("pages/css/text-align.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers notranslate">/* キーワード値 */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* 表の列における文字ベースの配置 */
text-align: ".";
text-align: "." center;

/* ブロック配置の値 (標準外の構文) */
text-align: -moz-center;
text-align: -webkit-center;

/* グローバル値 */
text-align: inherit;
text-align: initial;
text-align: unset;
</pre>

<p><code>text-align</code> プロパティは、以下の方法のうちの一つで指定されます。</p>

<ul>
 <li>キーワード値 <code><a href="#start">start</a></code>, <code><a href="#end">end</a></code>, <code><a href="#left">left</a></code>, <code><a href="#right">right</a></code>, <code><a href="#center">center</a></code>, <code><a href="#justify">justify</a></code>, <code><a href="#justify-all">justify-all</a></code>, <code><a href="#match-parent">match-parent</a></code> の使用。</li>
 <li><code><a href="#string">&lt;string&gt;</a></code> 値のみを使用、この場合は他の値の既定値が <code><a href="#right">right</a></code> になります。</li>
 <li>キーワード値または <code><a href="#string">&lt;string&gt;</a></code> 値の使用。</li>
</ul>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt id="start"><code>start</code> {{experimental_inline}}</dt>
 <dd>書字方向が左から右であれば <code>left</code> と、右から左であれば <code>right</code> と同じです。</dd>
 <dt id="end"><code>end</code> {{experimental_inline}}</dt>
 <dd>書字方向が左から右であれば <code>right</code> と、右から左であれば <code>left</code> と同じです。</dd>
 <dt id="left"><code>left</code></dt>
 <dd>インラインコンテンツは行ボックスの左辺に寄せられます。</dd>
 <dt id="right"><code>right</code></dt>
 <dd>インラインコンテンツは行ボックスの右辺に寄せられます。</dd>
 <dt id="center"><code>center</code></dt>
 <dd>インラインコンテンツは行ボックス内で中央寄せされます。</dd>
 <dt id="justify"><code>justify</code></dt>
 <dd>インラインコンテンツは両端揃えされます。テキストは最終行を除いて、その左右の端が行ボックスの左右の端に揃うように間隔が空けられます。</dd>
 <dt id="justify-all"><code>justify-all</code> {{experimental_inline}}</dt>
 <dd><code>justify</code> と同じですが、最終行も強制的に両端揃えされます。</dd>
 <dt id="match-parent"><code>match-parent</code> {{experimental_inline}}</dt>
 <dd><code>inherit</code> に似ていますが、 <code>start</code> と <code>end</code> 値が親要素の {{cssxref("direction")}} に従って計算され、適切な <code>left</code> か <code>right</code> 値に置き換えられます。</dd>
 <dt id="string">{{cssxref("&lt;string&gt;")}} {{experimental_inline}}</dt>
 <dd>表のセルに適用された場合、セルのコンテンツが揃えられる位置揃え文字を指定します。</dd>
</dl>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮</h2>

<p>両端揃えによって単語間の空白が不規則になると、失読症のような認知問題を抱えた人にとって問題になることがあります。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN "WCAG を理解する ― ガイドライン 1.4 の解説"</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html">Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Left_alignment" name="Left_alignment">左揃え</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p class="example"&gt;
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight:[2] notranslate">.example {
  text-align: left;
  border: solid;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Left_alignment","100%","100%")}}</p>

<h3 id="Centered_text" name="Centered_text">中央揃え</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;p class="example"&gt;
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
&lt;/p&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css; highlight:[2] notranslate">.example {
  text-align: center;
  border: solid;
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample("Centered_text","100%","100%")}}</p>

<h3 id="Justify" name="Justify">両端揃え</h3>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html notranslate">&lt;p class="example"&gt;
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
&lt;/p&gt;</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css; highlight:[2] notranslate">.example {
  text-align: justify;
  border: solid;
}</pre>

<h4 id="Result_3" name="Result_3">結果</h4>

<p>{{EmbedLiveSample("Justify","100%","100%")}}</p>

<h3 id="Notes" name="Notes">注</h3>

<p>インラインコンテンツを中央揃えせずにブロック自体を中央揃えする標準互換の方法は、次のように、 left 及び right {{cssxref("margin")}} を <code>auto</code> に設定することです。</p>

<pre class="brush: css notranslate">.something {
  margin: auto;
}
</pre>

<pre class="brush: css notranslate">.something {
  margin: 0 auto;
}
</pre>

<pre class="brush: css notranslate">.something {
  margin-left: auto;
  margin-right: auto;
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
   <td>{{SpecName('CSS Logical Properties', '#text-align', 'text-align')}}</td>
   <td>{{Spec2('CSS Logical Properties')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Text', '#alignment', 'text-align')}}</td>
   <td>{{Spec2('CSS4 Text')}}</td>
   <td><code>&lt;string&gt;</code> 値を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Text', '#text-align-property', 'text-align')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td><code>start</code> と <code>end</code>、<code>match-parent</code> キーワードを追加。名前のなかった初期値を（まさにそれである）<code>start</code> に変更。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'text.html#alignment-prop', 'text-align')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#text-align', 'text-align')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.text-align")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}</li>
</ul>
