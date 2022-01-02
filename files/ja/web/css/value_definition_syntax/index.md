---
title: 値の定義構文
slug: Web/CSS/Value_definition_syntax
tags:
  - CSS
  - Guide
  - Reference
  - Syntax
translation_of: Web/CSS/Value_definition_syntax
---
<div>{{CSSRef}}</div>

<p><strong>CSS の値の定義構文</strong>は、形式文法であり、 CSS プロパティや関数の有効な値の組み合わせ定義するのに使われます。この構文に加えて、有効な値の組み合わせは意味的な制約で有効値の集まりをさらに制限できます (例えば、数値を正の値に限定します)。</p>

<p>定義構文ではどの値が許可され、相互作用が可能であるかを記述します。成分は、<em>リテラル</em>とみなされる文字列、<em>キーワード</em>や、CSS データ型の値、またはその他の CSS プロパティのいずれかです。</p>

<h2 id="Component_value_types" name="Component_value_types">コンポーネント値型</h2>

<h3 id="Keywords" name="Keywords">キーワード</h3>

<h4 id="Generic_keywords" name="Generic_keywords">共通キーワード</h4>

<p>引用符なしのリテラルで、字句通りの意味が事前に定義されているキーワードです。例: <code>auto</code>, <code>smaller</code>, <code>ease-in</code></p>

<h4 id="The_specific_case_of_inherit_initial_and_unset" name="The_specific_case_of_inherit_initial_and_unset"><code>inherit</code>, <code>initial</code>, <code>unset</code> の特殊な場合</h4>

<p>すべての CSS プロパティで、 CSS 全体で定義されているキーワード <code>inherit</code>, <code>initial</code>, <code>unset</code> を使うことができます。これらは値定義に現れず、暗黙的に定義されています。</p>

<h3 id="Literals" name="Literals">リテラル</h3>

<p>CSS のスラッシュ ('<code>/</code>') やカンマ ('<code>,</code>') のようないくつかの文字は、文字自身として現れ、プロパティ定義で値の区切りに使われます。カンマはよく、列挙する値や数学的な関数の引数の区切りに使われます。スラッシュはよく、意味的に異なるものの、共通の構文を持つ値の集まりの区切りに使われます。よくあるのは、<ruby>一括指定<rp> (</rp><rt>shorthand</rt><rp>) </rp></ruby>プロパティで、同じ型だが異なるプロパティに属する成分を区切る使い方です。</p>

<p>どちらの記号も値定義に文字通り現れます。</p>

<h3 id="Data_types" name="Data_types">データ型</h3>

<h4 id="Basic_data_types" name="Basic_data_types">基本データ型</h4>

<p>データの種類によっては CSS 全体で使われ、仕様書のすべての値に一度だけ定義されるものがあります。これは<em>基本データ型</em>と呼ばれ、名前を記号 '<code>&lt;</code>' と '<code>&gt;</code>' で囲って表現されます。例: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …</p>

<h4 id="Non-terminal_data_types" name="Non-terminal_data_types">非終端データ型 (Non-terminal data types)</h4>

<p>一般的でないデータ型ですが、非終端データ型も '<code>&lt;</code>' と '<code>&gt;</code>' で囲います。</p>

<p>非終端データ型には 2 種類あります:</p>

<ul>
 <li>引用符で囲われた、<em>同名プロパティを共有</em>するデータ型。データ型はそのプロパティと同じ値集合を共有します。ショートハンドプロパティの定義によく使われます。</li>
 <li><em>同名プロパティを共有しない</em>データ型。このデータ型は基本データ型に非常に近いものです。唯一の違いは、物理的な定義位置です。通常、このデータ型を使うプロパティの定義に物理的に非常に近い場所で定義されます。</li>
</ul>

<h2 id="Component_value_combinators" name="Component_value_combinators">構成値の組み合わせ</h2>

<h3 id="Brackets" name="Brackets">角括弧</h3>

<p><em>角括弧</em>はいくつかの対象、結合子、乗算子を取り囲み、単一の成分に変換します。<strong>ひとまとまりの成分の結合優先順を無視する</strong>ために使われます。</p>

<pre class="syntaxbox notranslate">bold [ thin &amp;&amp; &lt;length&gt; ]</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>bold thin 2vh</code></li>
 <li><code>bold 0 thin</code></li>
 <li><code>bold thin 3.5em</code></li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>thin bold 3em</code>。 <code>bold</code> は角括弧で定義された成分と並列なので、その後に出現しなければなりません。</li>
</ul>

<h3 id="Juxtaposition" name="Juxtaposition">並列</h3>

<p>いくつかのキーワード、リテラル、データ型を順に置き、1 つ以上の空白で区切る置き方を<em>並列</em>と呼びます。並列の成分は<strong>どれも必須で、記述順どおりに出現する必要があります</strong>。</p>

<pre class="syntaxbox notranslate">bold &lt;length&gt; , thin
</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>bold 1em, thin</code></li>
 <li><code>bold 0, thin</code></li>
 <li><code>bold 2.5cm, thin</code></li>
 <li><code>bold 3vh, thin</code></li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>thin 1em, bold</code>。対象は記述通りの順でなければなりません</li>
 <li><code>bold 1em thin</code>。対象は必須です。リテラルであるカンマも存在する必要があります</li>
 <li><code>bold 0.5ms, thin</code>。<code>ms</code> 値は {{cssxref("&lt;length&gt;")}} ではありません。</li>
</ul>

<h3 id="Double_ampersand" name="Double_ampersand">二重アンパサンド</h3>

<p>2 つ以上の成分を二重アンパサンド <code>&amp;&amp;</code> で区切ると、<strong>対象すべてが必須だが出現順は問わない</strong>という意味になります。</p>

<pre class="syntaxbox notranslate">bold &amp;&amp; &lt;length&gt;
</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>bold 1em</code></li>
 <li><code>bold 0</code></li>
 <li><code>2.5cm bold</code></li>
 <li><code>3vh bold</code></li>
</ul>

<p>次の値には一致します。</p>

<ul>
 <li><code>bold</code>。どちらの成分も出現しなければなりません。</li>
 <li><code>bold 1em bold</code>。どちらの成分も 1 度だけ出現しなければなりません。</li>
</ul>

<div class="blockIndicator note">
<p><strong>注:</strong> 並列は二重アンパサンドより優先されます。例えば <code>bold thin &amp;&amp; &lt;length&gt;</code> は <code>[ bold thin ] &amp;&amp; &lt;length&gt;</code> と同じ意味です。これは <code>bold thin &lt;length&gt;</code> や <code>&lt;length&gt; bold thin</code> を含みますが、<code>bold &lt;length&gt; thin</code> は含みません。</p>
</div>

<h3 id="Double_bar" name="Double_bar">二重バー</h3>

<p>2 つ以上の成分を二重バー <code>||</code> で区切ると、すべての対象が省略可能であることを意味します。<strong>少なくともいずれか 1つ が存在する必要がありますが、順序は問いません</strong>。<a href="/ja/docs/CSS/Shorthand_properties">一括指定プロパティ</a>の値定義に使われます。</p>

<pre class="syntaxbox notranslate">&lt;'border-width'&gt; || &lt;'border-style'&gt; || &lt;'border-color'&gt;
</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>1em solid blue</code></li>
 <li><code>blue 1em</code></li>
 <li><code>solid 1px yellow</code></li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>blue yellow</code>。各成分は最大で 1回 だけ出現できます。</li>
 <li><code>bold</code>。どの対象の値もこのキーワードを使えません。</li>
</ul>

<div class="blockIndicator note">
<p><strong>注:</strong> 二重アンパサンドは二重バーより優先されます。例えば <code>bold || thin &amp;&amp; &lt;length&gt;</code> は <code>bold || [ thin &amp;&amp; &lt;length&gt; ]</code> と同じ意味です。 <code>bold</code>, <code>thin &lt;length&gt;</code>, <code>bold thin &lt;length&gt;</code>, <code>thin &lt;length&gt; bold</code> を含みますが、<code>&lt;length&gt; bold thin</code> は 含みません。 bold を省略しないのなら、<code>thin &amp;&amp; &lt;length&gt;</code> 成分全体よりも前か後ろに置く必要があるからです。</p>
</div>

<h3 id="Single_bar" name="Single_bar">単一バー</h3>

<p>2 つ以上の対象を単一バー <code>|</code> で区切ると、全対象が排他的な選択肢であることを意味します。<strong>選択肢のうち 1 つだけが存在する必要があります</strong>。利用可能なキーワードを列挙する際に使われます。</p>

<pre class="syntaxbox notranslate">&lt;percentage&gt; | &lt;length&gt; | left | center | right | top | bottom</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>3%</code></li>
 <li><code>0</code></li>
 <li><code>3.5em</code></li>
 <li><code>left</code></li>
 <li><code>center</code></li>
 <li><code>right</code></li>
 <li><code>top</code></li>
 <li><code>bottom</code></li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>center 3%</code>。各成分は 1 つだけ存在しなければなりません。</li>
 <li><code>3em 4.5em</code>。成分は最大で 1 回だけ存在できます。</li>
</ul>

<div class="blockIndicator note">
<p><strong>注:</strong> 二重バーは単一バーより優先されます。例えば <code>bold | thin || &lt;length&gt;</code> は <code>bold | [ thin || &lt;length&gt; ]</code> と同じ意味です。<code>bold</code>, <code>thin</code>, <code>&lt;length&gt;</code>, <code>&lt;length&gt; thin</code>, や <code>thin &lt;length&gt; </code>を含みますが、<code>bold &lt;length&gt;</code> は含みません。<code>|</code> 結合子の両側それぞれから 1つだけ対象が存在できるからです。</p>
</div>

<h2 id="Component_value_multipliers" name="Component_value_multipliers">成分値の乗算子</h2>

<p>乗算子は、それ以前にある対象を何回繰り返せるかを表す記号です。乗算子がなければ、対象は 1 度だけ出現する必要があります。</p>

<p>乗算子は足し合わせることはできず、他のどの結合子より優先される点に注意してください。</p>

<h3 id="Asterisk" name="Asterisk">アスタリスク (*)</h3>

<p>アスタリスク乗算子は対象の <strong>0 回以上</strong>の出現を示します。</p>

<pre class="syntaxbox notranslate">bold smaller*</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>bold</code></li>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code> など</li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>smaller</code>。<code>bold</code> は並列で、他のどの <code>smaller</code> キーワードより先に出現する必要があります。</li>
</ul>

<h3 id="Plus" name="Plus">プラス (+)</h3>

<p>プラス乗算子は対象の <strong>1 回以上</strong>の出現を示します。</p>

<pre class="syntaxbox notranslate">bold smaller+</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code> など</li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>bold</code>。<code>smaller</code> が少なくとも 1 回 出現しなければなりません。</li>
 <li><code>smaller</code>。<code>bold</code> は並列で、他のどの <code>smaller</code> キーワードよりも前に出現しなければなりません。</li>
</ul>

<h3 id="Question_mark" name="Question_mark">疑問符 (?)</h3>

<p><em>疑問符乗算子</em>は、対象は省略可能で、<strong>0 回または 1 回</strong>出現することを意味します。</p>

<pre class="syntaxbox notranslate">bold smaller?</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>bold</code></li>
 <li><code>bold smaller</code></li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>bold smaller smaller</code> 。<code>smaller</code> は最大で 1 回しか出現できません。</li>
 <li><code>smaller</code>。<code>bold</code> は並列で、他のどの <code>smaller</code> キーワードよりも前に出現する必要があります。</li>
</ul>

<h3 id="Curly_braces" name="Curly_braces">波括弧 ({ })</h3>

<p>波括弧乗算子は、カンマで区切った 2 つの整数を囲うもので、対象が<strong>少なくともA回、最大でB回</strong>出現することを示します。</p>

<pre class="syntaxbox notranslate">bold smaller{1,3}</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code></li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>bold</code>。<code>smaller</code> が少なくとも 1 度出現する必要があります。</li>
 <li><code>bold smaller smaller smaller smaller</code>。<code>smaller</code> は最大で 1度しか出現できません。</li>
 <li><code>smaller</code>。<code>bold</code> は並列で、他のどの <code>smaller</code> キーワードよりも前に出現する必要があります。</li>
</ul>

<h3 id="Hash_mark" name="Hash_mark">ハッシュ記号 (#)</h3>

<p>ハッシュ記号乗算子は対象が (プラス乗算子のように) 1 回以上繰り返されるが、それぞれがカンマ ('<code>,</code>') で区切られている必要があることを示します。</p>

<pre class="syntaxbox notranslate">bold smaller#</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller, smaller</code></li>
 <li><code>bold smaller, smaller, smaller</code> など</li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>bold</code>。<code>smaller</code> が少なくとも 1 度出現する必要があります。</li>
 <li><code>bold smaller smaller smaller</code>。<code>smaller</code> の出現部がそれぞれカンマで区切られている必要があります。</li>
 <li><code>smaller</code>。<code>bold</code> は並列で、どの <code>smaller</code> キーワードよりも前に出現する必要があります。</li>
</ul>

<h3 id="Exclamation_point" name="Exclamation_point">強調点 (!)</h3>

<p>グループの後の<em>強調点乗算子</em>は、グループが必須であり、少なくとも1つの値を生み出す必要があることを示します。グループ内の項目の文法が内容全体を省略することができるとしていても、少なくとも1つの成分値を省略することはできません。</p>

<pre class="syntaxbox notranslate">[ bold? smaller? ]!
</pre>

<p>この例は次の値に一致します。</p>

<ul>
 <li><code>bold</code></li>
 <li><code>smaller</code></li>
 <li><code>bold smaller</code></li>
</ul>

<p>次の値には一致しません。</p>

<ul>
 <li><code>bold</code> も <code>smaller</code> もないものは、どちらか一つが現れる必要があります。</li>
 <li><code>smaller bold</code>。 <code>bold</code> は並列であり、 <code>smaller</code> キーワードの前に現れる必要があります。</li>
 <li><code>bold smaller bold</code>。 <code>bold</code> および <code>smaller</code> は一度だけしか現れてはいけません。</li>
</ul>

<h2 id="Summary" name="Summary">概要</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">記号</th>
   <th scope="col">名前</th>
   <th scope="col">説明</th>
   <th scope="col">例</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th colspan="4">結合子</th>
  </tr>
  <tr>
   <td></td>
   <td>並列</td>
   <td>どちらも必須でこの順で出現する必要あり</td>
   <td><code>solid &lt;length&gt;</code></td>
  </tr>
  <tr>
   <td><code>&amp;&amp;</code></td>
   <td>二重アンパサンド</td>
   <td>どちらも必須だが出現順は問わない</td>
   <td><code>&lt;length&gt; &amp;&amp; &lt;string&gt;</code></td>
  </tr>
  <tr>
   <td><code>||</code></td>
   <td>二重バー</td>
   <td>どちらかが存在する必要があり、出現順は問わない</td>
   <td><code>&lt;'border-image-outset'&gt; || &lt;'border-image-slice'&gt;</code></td>
  </tr>
  <tr>
   <td><code>|</code></td>
   <td>単一バー</td>
   <td>1つだけ存在する必要あり</td>
   <td><code>smaller | small | normal | big | bigger</code></td>
  </tr>
  <tr>
   <td><code>[ ]</code></td>
   <td>角括弧</td>
   <td>結合優先順を変える</td>
   <td><code>bold [ thin &amp;&amp; &lt;length&gt; ]</code></td>
  </tr>
  <tr>
   <th colspan="4">乗算子</th>
  </tr>
  <tr>
   <td></td>
   <td>乗算子なし</td>
   <td>1回</td>
   <td><code>solid</code></td>
  </tr>
  <tr>
   <td><code>*</code></td>
   <td>アスタリスク</td>
   <td>0 回以上</td>
   <td><code>bold smaller*</code></td>
  </tr>
  <tr>
   <td><code>+</code></td>
   <td>プラス記号</td>
   <td>1 回以上</td>
   <td><code>bold smaller+</code></td>
  </tr>
  <tr>
   <td><code>?</code></td>
   <td>疑問符</td>
   <td>0 回か 1 回 (<em>省略可能 (optional)</em> を表す)</td>
   <td><code>bold smaller?</code></td>
  </tr>
  <tr>
   <td><code>{A,B}</code></td>
   <td>波括弧</td>
   <td>少なくとも <code>A</code> 回、最大で <code>B</code> 回</td>
   <td><code>bold smaller{1,3}</code></td>
  </tr>
  <tr>
   <td><code>#</code></td>
   <td>ハッシュ記号 (シャープ、ナンバー)</td>
   <td>1 回以上。各出現がカンマ ('<code>,</code>') で区切られている必要がある</td>
   <td><code>bold smaller#</code></td>
  </tr>
  <tr>
   <td><code>!</code></td>
   <td>強調点</td>
   <td>グループが少なくとも1つの値を生み出す必要がある</td>
   <td><code>[ bold? smaller? ]!</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Values", "#value-defs", "Value definition syntax")}}</td>
   <td>{{Spec2("CSS3 Values")}}</td>
   <td>ハッシュ記号乗算子を追加</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "about.html#value-defs", "Value definition syntax")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>二重アンパサンド結合子を追加</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#notation-for-property-values", "Value definition syntax")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSS_key_concepts}}</li>
</ul>
