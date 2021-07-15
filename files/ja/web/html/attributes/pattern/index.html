---
title: 'HTML attribute: pattern'
slug: Web/HTML/Attributes/pattern
tags:
  - Attribute
  - Attributes
  - Constraint Validation API
  - HTML
  - Reference
translation_of: Web/HTML/Attributes/pattern
---
<p>{{HTMLSidebar}}</p>

<p><strong><code>pattern</code></strong> 属性は、フォームコントロールの値が一致すべき<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現</a>を指定します。 <code>null</code> 以外の値が <code>pattern</code> 値によって設定された制約に適合しない場合、 {{domxref('ValidityState')}} オブジェクトの読み取り専用の {{domxref('ValidityState.patternMismatch','patternMismatch')}} プロパティが真になります。</p>

<p><code>pattern</code>属性は {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, {{HTMLElement("input/search", "search")}} の入力型の属性です。</p>

<div id="pattern-include">
<p><code>pattern</code>属性は、<a href="/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation">制約検証</a>を通過させるために、入力の {{htmlattrxref("value")}} が一致するべき正規表現です。これは有効な JavaScript の正規表現でなければならず、 {{jsxref("RegExp")}} 型で使用されたり、 <a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現ガイド</a>で説明されているものと同じものです。通り正規表現をコンパイルする際に <code>'u'</code> フラグを指定することで、パターンが ASCII ではなく Unicode コードポイントの並びとして扱われるようになります。パターンテキストの周りには、スラッシュを指定してはいけません。</p>

<p>パターンが指定されていないか無効な場合、正規表現は適用されず、この属性は無視されます。</p>

<div class="note">
<p><strong>ヒント:</strong> {{htmlattrxref("title", "input")}} 属性を使用すると、ほとんどのブラウザーがパターンに一致するための要件を説明するためにツールチップとして表示するテキストを指定することができます。説明をツールチップだけに頼っては<strong>いけません</strong>。ユーザービリティについての詳細は以下を参照してください。</p>
</div>
</div>

<p>pattern 属性に対応している入力型の中には、特に {{HTMLElement("input/email", "email")}} および {{HTMLElement("input/url", "url")}} 入力型のように、一致しなければならない期待値の構文を持っているものがあります。 pattern 属性が存在せず、値がその値型の期待される構文と一致しない場合、 {{domxref('ValidityState')}} オブジェクトの読み取り専用の {{domxref('ValidityState.typeMismatch','typeMismatch')}} プロパティが真になります。</p>

<h3 id="Usability" name="Usability">ユーザービリティ</h3>

<p><code>pattern</code> を含める場合は、コントロールの近くの可視テキストでパターンについて説明してください。さらに、パターンを説明する <code><a href="/ja/docs/Web/HTML/Global_attributes/title">title</a></code> 属性を含めてください。ユーザーエージェントは、制約検証中に title の内容を使用して、パターンが一致しないことをユーザーに伝えることができます。ブラウザーによっては、タイトルの内容を持つツールチップを表示し、視覚障碍者のユーザーの使い勝手を向上させます。さらに、支援技術は、コントロールにフォーカスを合わせるとタイトルを声に出して読むことができる場合がありますが、アクセシビリティのためにはこれに頼るべきではありません。</p>

<h3 id="Constraint_validation" name="Constraint_validation">制約検証</h3>

<p>入力欄の値が空文字列ではなく、正規表現全体と一致しない場合は、 {{domxref('ValidityState.patternMismatch','patternMismatch')}} が真になります。<br>
 pattern の正規表現は、値に一致したときに、先頭が文字列の先頭に該当し、末尾が文字列の末尾に該当するため、これは JavaScript の正規表現とは少し異なります。 pattern 属性の場合、パターンの先頭に <code>^(?:</code> が、末尾に <code>)$</code> が指定されているかのように、値の部分ではなく全体に一致します。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>以下ののものを考えてみてください。</p>

<div id="example1">
<pre class="brush: html notranslate">&lt;p&gt;
 &lt;label&gt;Enter your phone number in the format (123)456-7890
  (&lt;input name="tel1" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit area code" size="2"/&gt;)-
   &lt;input name="tel2" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit prefix" size="2"/&gt; -
   &lt;input name="tel3" type="tel" pattern="[0-9]{4}" placeholder="####" aria-label="4-digit number" size="3"/&gt;
 &lt;/label&gt;
&lt;/p&gt;</pre>

<p>ここでは北米の電話番号を示す3つの部分があり、電話番号の3つの構成要素すべてを含む暗黙のラベルがありますが、それぞれ3桁、3桁、4桁で <code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code> 属性によってそれぞれ設定されています。</p>

<p>値が長すぎたり短すぎたり、数字ではない文字が含まれていたりすると、 patternMismatch が true になります。 <code>true</code> の場合、要素は CSS の {{cssxref(":invalid")}} 擬似クラスに一致します。</p>

<pre class="brush: css notranslate">input:invalid {
  border: red solid 3px;
}</pre>

<p>{{EmbedLiveSample("example1", 300, 40)}}</p>
</div>

<p>代わりに <code><a href="/ja/docs/Web/HTML/Attributes/minlength">minlength</a></code> と <code><a href="/ja/docs/Web/HTML/Attributes/maxlength">maxlength</a></code> 属性を用いた場合、 {{domxref('validityState.tooLong')}} または {{domxref('validityState.tooShort')}} が true になります。</p>

<h3 id="Specifying_a_pattern" name="Specifying_a_pattern">パターンの指定</h3>

<p>{{htmlattrxref("pattern", "input")}} 属性を使用すると、入力された値が有効とみなされるために一致しなければならない正規表現を指定することができます (正規表現を使用して入力を検証する簡単な集中講座は、<a href="/ja/docs/Learn/HTML/Forms/Form_validation#Validating_against_a_regular_expression">正規表現に対する検証</a>を参照してください)。</p>

<p>以下の例では、値を 4-8 文字に制限し、小文字のみを含むことを要求しています。</p>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="uname"&gt;Choose a username: &lt;/label&gt;
    &lt;input type="text" id="uname" name="name" required size="45"
           pattern="[a-z]{4,8}" title="4 to 8 lowercase letters"&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
    &lt;p&gt;Usernames must be lowercase and 4-8 characters in length.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button&gt;Submit&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<div class="hidden">
<pre class="brush: css notranslate">div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}</pre>
</div>

<p>This renders like so:</p>

<p>{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}</p>

<h3 id="Accessibility_Concerns" name="Accessibility_Concerns">アクセシビリティの考慮</h3>

<p>コントロールに <code>pattern</code> 属性がある場合、 <code>title</code> 属性が使われていれば、そのパターンを説明しなければなりません。テキストコンテンツを視覚的な表示するために <code>title</code> 属性に頼ることは、多くのユーザーエージェントがアクセス可能な方法で属性を公開しないので、一般的には推奨されません。ブラウザーによっては、タイトルを持つ要素の上にポインターを置いたときにツールチップを表示しますが、キーボードのみのユーザーやタッチのみのユーザーは除外されてしまいます。これが、どのようにコントロールに記入すれば要件に合うかをユーザーに知らせる情報を含める必要がある理由の一つです。</p>

<p>一部のブラウザーでは <code>title</code> を使用してエラーメッセージを表示していますが、ブラウザーはポインターを置いたときにもタイトルをテキストとして表示することがあり、エラーが発生していない状況でも表示されることがあるので、エラーが発生したかのような言葉を使用しないように注意してください。</p>

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
   <td>{{ SpecName('HTML WHATWG', 'forms.html#attr-input-pattern', 'pattern') }}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5.1', 'forms.html#attr-input-pattern', 'pattern') }}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C', 'forms.html#attr-input-pattern', 'pattern') }}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.attributes.pattern")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation">Constraint validation</a></li>
 <li><a href="/ja/docs/Web/Guide/HTML/Forms/Data_form_validation">Forms: Data form validation</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a></li>
</ul>
