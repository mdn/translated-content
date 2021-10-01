---
title: 制約検証
slug: Web/Guide/HTML/Constraint_validation
tags:
  - CSS
  - Guide
  - HTML5
  - NeedsContent
  - Selectors
translation_of: Web/Guide/HTML/Constraint_validation
original_slug: Web/Guide/HTML/HTML5/Constraint_validation
---
<p>ウェブフォームの作成は常に複雑な作業でした。フォーム自体をマークアップすること自体は簡単ですが、それぞれの入力欄が妥当で一貫しているかどうかをチェックすることはもっと難しく、問題をユーザーに伝えることは頭痛がするかもしれません。<a href="/ja/docs/Web/Guide/HTML/HTML5">HTML5</a> では、フォームに新しい仕組みが導入されました。{{ HTMLElement("input") }} 要素に意味を持つ新しい型と、クライアント側でフォームの内容をチェックする作業を簡単にする<em>制約検証</em>が追加されました。基本的な、よくある制約は、JavaScript を必要とせずに、新しい属性を設定することでチェックできます。もっと複雑な制約は<a href="/ja/docs/Web/API/Constraint_validation">制約検証 API</a> を使用して検査することができます。</p>

<p>これらの概念の基本的な入門 (サンプル付き) は、<a href="/ja/docs/Learn/HTML/Forms/Form_validation">フォーム検証チュートリアル</a>をご覧ください。</p>

<div class="note"><strong>メモ:</strong> HTML5 の制約検証は、<em>サーバー側</em>での検証の必要性をなくす訳ではありません。不正なフォームのリクエストは減少することが期待されるものの、不正なリクエストはまだ互換性のないブラウザー（例えば、HTML5 や JavaScript に対応していないブラウザー）から送られたり、ウェブアプリケーションをだまそうとする悪意のある人から送られたりする可能性があります。従って、HTML4 の時と同様、クライアント側で行われている検証と一貫性のある方法で、サーバー側でも入力の制約を検証する必要があります。</div>

<h2 id="Intrinsic_and_basic_constraints" name="Intrinsic_and_basic_constraints">組込みの基本的な制約</h2>

<p>HTML5 では、基本的な制約は 2通りの方法で定義されます。</p>

<ul>
 <li>{{ HTMLElement("input") }} 要素の {{ htmlattrxref("type", "input") }} 属性に意味的に最も適切な値を選択することで、例えば <code>email</code> を選択することで、値が妥当なメールアドレスであるかどうかをチェックする制約が自動的に作成されます。</li>
 <li>検証関連属性を設定することで、基本的な制約を簡単な方法で、JavaScript の必要なく記述できます。</li>
</ul>

<h3 id="意味を持つ入力型">意味を持つ入力型</h3>

<p>{{ htmlattrxref("type", "input") }} 属性の組込み制約は次の通りです。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">入力型</th>
   <th scope="col">制約の説明</th>
   <th scope="col">関連付けられた違反</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Element/input/url">&lt;input type="URL"&gt;</a></code></td>
   <td>値は絶対 <a href="/ja/docs/Learn/Common_questions/What_is_a_URL">URL</a> であり、<a href="https://url.spec.whatwg.org/">URL Living Standard</a> で定義された通りでなければなりません。</td>
   <td><strong><a href="/ja/docs/Web/API/ValidityState/typeMismatch">TypeMismatch</a></strong> 制約違反</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Element/input/email">&lt;input type="email"&gt;</a></code></td>
   <td>値は統語的に妥当なメールアドレス、ふつうは <code><var>username</var>@<var>hostname</var>.<var>tld</var></code> の書式でなければなりません。</td>
   <td><strong><a href="/ja/docs/Web/API/ValidityState/typeMismatch">TypeMismatch</a></strong> 制約違反</td>
  </tr>
 </tbody>
</table>

<p>これらの入力型のどちらでも、{{ htmlattrxref("multiple", "input") }} 属性が設定されていたら、この入力欄にカンマ区切りのリストで複数の値を設定することができます。これらの中でここで書かれた条件に満足しないものがある場合、<strong>Type mismatch</strong> 制約違反が発生します。</p>

<p>なお、ほとんどの入力型には組込み制約がありません。制約検証によって防ぐことができたり、既定で不正な値を妥当な値に変換する無害化アルゴリズムがあったりするためです。</p>

<h3 id="Validation-related_attributes" name="Validation-related_attributes">検証関連属性</h3>

<p>上記で述べた <code>type</code> 属性に加えて、下記の要素が基本的な制約を記述するのに使われます。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">属性</th>
   <th scope="col">属性をサポートする入力タイプ</th>
   <th scope="col">とりうる値</th>
   <th scope="col">制約の説明</th>
   <th scope="col">関連する違反</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code></td>
   <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code></td>
   <td><a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">JavaScript 正規表現</a> (<a class="external" href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript 5</a> <code>global</code>, <code>ignoreCase</code> と <code>multiline</code> フラグが<em>無効で</em>コンパイルされたもの)</td>
   <td>値はパターンに一致する必要があります。</td>
   <td><code><strong><a href="/ja/docs/Web/API/ValidityState/patternMismatch">patternMismatch</a></strong></code> 制約違反</td>
  </tr>
  <tr>
   <td rowspan="3"><code><a href="/ja/docs/Web/HTML/Attributes/min">min</a></code></td>
   <td><code>range</code>, <code>number</code></td>
   <td>有効な数値</td>
   <td rowspan="3">値以上であること。</td>
   <td rowspan="3"><strong><code><a href="/ja/docs/Web/API/ValidityState/rangeUnderflow">rangeUnderflow</a></code></strong> 制約違反</td>
  </tr>
  <tr>
   <td><code>date</code>, <code>month</code>, <code>week</code></td>
   <td>有効な日付</td>
  </tr>
  <tr>
   <td><code>datetime</code>, <code>datetime-local</code>, <code>time</code></td>
   <td>有効な日付と時刻</td>
  </tr>
  <tr>
   <td rowspan="3"><code><a href="/ja/docs/Web/HTML/Attributes/max">max</a></code></td>
   <td><code>range</code>, <code>number</code></td>
   <td>有効な数値</td>
   <td rowspan="3">値以下であること。</td>
   <td rowspan="3"><strong><code><a href="/ja/docs/Web/API/ValidityState/rangeOverflow">rangeOverflow</a></code></strong> 制約違反</td>
  </tr>
  <tr>
   <td><code>date</code>, <code>month</code>, <code>week</code></td>
   <td>有効な日付</td>
  </tr>
  <tr>
   <td><code>datetime</code>, <code>datetime-local</code>, <code>time</code></td>
   <td>有効な日付と時刻</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/required">required</a></code></td>
   <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>, <code>date</code>, <code>datetime</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code>, <code>time</code>, <code>number</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>; {{ HTMLElement("select") }} と {{ HTMLElement("textarea") }} 要素にも。</td>
   <td><em>none</em> Boolean 属性のため: 存在すれば <em>true</em>, 存在しなければ <em>false</em></td>
   <td>値は必須 (セットされた場合)。</td>
   <td><strong><code><a href="/ja/docs/Web/API/ValidityState/valueMissing">valueMissing</a></code></strong> 制約違反</td>
  </tr>
  <tr>
   <td rowspan="5"><code><a href="/ja/docs/Web/HTML/Attributes/step">step</a></code></td>
   <td><code>date</code></td>
   <td>日の整数値</td>
   <td rowspan="5">step がリテラル値 <code>any</code> にセットされていない場合、値は <strong>min</strong> + step の整数倍</td>
   <td rowspan="5"><strong><code><a href="/ja/docs/Web/API/ValidityState/stepMismatch">stepMismatch</a></code></strong> 制約違反</td>
  </tr>
  <tr>
   <td><code>month</code></td>
   <td>月の整数値</td>
  </tr>
  <tr>
   <td><code>week</code></td>
   <td>週の整数値</td>
  </tr>
  <tr>
   <td><code>datetime</code>, <code>datetime-local</code>, <code>time</code></td>
   <td>秒の整数値</td>
  </tr>
  <tr>
   <td><code>range</code>, <code>number</code></td>
   <td>整数値</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/minlength">minlength</a></code></td>
   <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>; と {{ HTMLElement("textarea") }} 要素</td>
   <td>整数長</td>
   <td>文字列数 (code points) は、空でない場合は属性値より少なくならない。{{ HTMLElement("textarea") }}では改行はすべて 1 つの文字に正規化される (CRLF の組と対象的に)。</td>
   <td><strong><code><a href="/ja/docs/Web/API/ValidityState/tooShort">tooShort</a></code></strong> 制約違反</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/maxlength">maxlength</a></code></td>
   <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>; と {{ HTMLElement("textarea") }} 要素</td>
   <td>整数長</td>
   <td>文字列数 (code points) は属性値を超えない。</td>
   <td><strong><code><a href="/ja/docs/Web/API/ValidityState/tooLong">tooLong</a></code></strong> 制約違反</td>
  </tr>
 </tbody>
</table>

<h2 id="Constraint_validation_process" name="Constraint_validation_process">制約検証プロセス</h2>

<p>Constraint validation is done through the Constraint Validation API either on a single form element or at the form level, on the {{ HTMLElement("form") }} element itself. The constraint validation is done in the following ways:</p>

<ul>
 <li>By a call to the <code>checkValidity()</code> or <code>reportValidity()</code> method of a form-associated DOM interface, (<code><a href="/ja/docs/Web/API/HTMLInputElement">HTMLInputElement</a></code>, <code><a href="/ja/docs/Web/API/HTMLSelectElement">HTMLSelectElement</a></code>, <code><a href="/ja/docs/Web/API/HTMLButtonElement">HTMLButtonElement</a></code>, <code><a href="/ja/docs/Web/API/HTMLOutputElement">HTMLOutputElement</a></code> or <code><a href="/ja/docs/Web/API/HTMLTextAreaElement">HTMLTextAreaElement</a></code>), which evaluates the constraints only on this element, allowing a script to get this information. The <code>checkValidity()</code> method returns a Boolean indicating whether the element's value passes its constraints. (This is typically done by the user-agent when determining which of the CSS pseudo-classes, {{ Cssxref(":valid") }} or {{ Cssxref(":invalid") }}, applies.) In contrast, the <code>reportValidity()</code> method reports any constraint failures to the user.</li>
 <li>By a call to the <code>checkValidity()</code> or <code>reportValidity()</code> method on the <code><a href="/ja/docs/Web/API/HTMLFormElement">HTMLFormElement</a></code> interface.</li>
 <li>By submitting the form itself.</li>
</ul>

<p>Calling <code>checkValidity()</code> is called <em>statically</em> validating the constraints, while calling <code>reportValidity()</code> or submitting the form is called <em>interactively</em> validating the constraints.</p>

<div class="note"><strong>Note: </strong>

<ul>
 <li>If the {{ htmlattrxref("novalidate", "form") }} attribute is set on the {{ HTMLElement("form") }} element, interactive validation of the constraints doesn't happen.</li>
 <li>Calling the <code>submit()</code> method on the <code><a href="/ja/DOM/HTMLFormElement">HTMLFormElement</a></code> interface doesn't trigger a constraint validation. In other words, this method sends the form data to the server even if doesn't satisfy the constraints. Call the <code>click()</code> method on a submit button instead.</li>
</ul>
</div>

<h2 id="Complex_constraints_using_HTML5_Constraint_API" name="Complex_constraints_using_HTML5_Constraint_API">HTML5 制約 API を使用した複雑な制約</h2>

<p>Using JavaScript and the Constraint API, it is possible to implement more complex constraints, 例えば、constraints combining several fields, or constraints involving complex calculations.</p>

<p>Basically, the idea is to trigger JavaScript on some form field event (like <strong>onchange</strong>) to calculate whether the constraint is violated, and then to use the method <code><em>field</em>.setCustomValidity()</code> to set the result of the validation: an empty string means the constraint is satisfied, and any other string means there is an error and this string is the error message to display to the user.</p>

<h3 id="Constraint_combining_several_fields_Postal_code_validation" name="Constraint_combining_several_fields_Postal_code_validation">Constraint combining several fields: Postal code validation</h3>

<p>The postal code format varies from one country to another. Not only do most countries allow an optional prefix with the country code (like <code>D-</code> in Germany, <code>F- </code> in France or Switzerland), but some countries have postal codes with only a fixed number of digits; others, like the UK, have more complex structures, allowing letters at some specific positions.</p>

<div class="note">
<p><strong>注:</strong> This is not a comprehensive postal code validation library, but rather a demonstration of the key concepts.</p>
</div>

<p>As an example, we will add a script checking the constraint validation for this simple form:</p>

<pre class="brush: html notranslate">&lt;form&gt;
    &lt;label for="ZIP"&gt;ZIP : &lt;/label&gt;
    &lt;input type="text" id="ZIP"&gt;
    &lt;label for="Country"&gt;Country : &lt;/label&gt;
    &lt;select id="Country"&gt;
      &lt;option value="ch"&gt;Switzerland&lt;/option&gt;
      &lt;option value="fr"&gt;France&lt;/option&gt;
      &lt;option value="de"&gt;Germany&lt;/option&gt;
      &lt;option value="nl"&gt;The Netherlands&lt;/option&gt;
    &lt;/select&gt;
    &lt;input type="submit" value="Validate"&gt;
&lt;/form&gt;</pre>

<p>This displays the following form:</p>

<p>{{EmbedLiveSample("Constraint_combining_several_fields_Postal_code_validation")}}</p>

<p>First, we write a function checking the constraint itself:</p>

<pre class="brush: js notranslate">function checkZIP() {
  // For each country, defines the pattern that the ZIP has to follow
  var constraints = {
    ch : [ '^(CH-)?\\d{4}$', "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950" ],
    fr : [ '^(F-)?\\d{5}$' , "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012" ],
    de : [ '^(D-)?\\d{5}$' , "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345" ],
    nl : [ '^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$',
                    "Nederland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS" ]
  };

  // Read the country id
  var country = document.getElementById("Country").value;

  // Get the NPA field
  var ZIPField = document.getElementById("ZIP");

  // Build the constraint checker
  var constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);


  // Check it!
  if (constraint.test(ZIPField.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    ZIPField.setCustomValidity("");
  }
  else {
    // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}
</pre>

<p>Then we link it to the <strong>onchange</strong> event for the {{ HTMLElement("select") }} and the <strong>oninput</strong> event for the {{ HTMLElement("input") }}:</p>

<pre class="brush: js notranslate">window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
}</pre>

<p>You can see a <a href="/@api/deki/files/4744/=constraint.html">live example</a> of the postal code validation.</p>

<h3 id="Limiting_the_size_of_a_file_before_its_upload" name="Limiting_the_size_of_a_file_before_its_upload">アップロード前のファイルサイズの制限</h3>

<p>Another common constraint is to limit the size of a file to be uploaded. Checking this on the client side before the file is transmitted to the server requires combining the Constraint Validation API, and especially the <code>field.setCustomValidity()</code> method, with another JavaScript API, here the File API.</p>

<p>Here is the HTML part:</p>

<pre class="brush: html notranslate">&lt;label for="FS"&gt;Select a file smaller than 75 kB : &lt;/label&gt;
&lt;input type="file" id="FS"&gt;</pre>

<p>This displays:</p>

<p>{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}</p>

<p>The JavaScript reads the file selected, uses the <code>File.size()</code> method to get its size, compares it to the (hard coded) limit, and calls the Constraint API to inform the browser if there is a violation:</p>

<pre class="brush: js notranslate">function checkFileSize() {
  var FS = document.getElementById("FS");
  var files = FS.files;

  // If there is (at least) one file selected
  if (files.length &gt; 0) {
     if (files[0].size &gt; 75 * 1024) { // Check the constraint
       FS.setCustomValidity("The selected file must not be larger than 75 kB");
       return;
     }
  }
  // No custom constraint violation
  FS.setCustomValidity("");
}</pre>

<p>Finally we hook the method with the correct event:</p>

<pre class="brush: js notranslate">window.onload = function () {
  document.getElementById("FS").onchange = checkFileSize;
}</pre>

<p>You can see a <a href="/@api/deki/files/4745/=fileconstraint.html">live example</a> of the File size constraint validation.</p>

<h2 id="Visual_styling_of_constraint_validation" name="Visual_styling_of_constraint_validation">制約検証における表示の整形</h2>

<p>Apart from setting constraints, web developers want to control what messages are displayed to the users and how they are styled.</p>

<h3 id="Controlling_the_look_of_elements" name="Controlling_the_look_of_elements">要素の外見の制御</h3>

<p>The look of elements can be controlled via CSS pseudo-classes.</p>

<h4 id="required_and_optional_CSS_pseudo-classes" name="required_and_optional_CSS_pseudo-classes">CSS の :required および :optional 疑似クラス</h4>

<p>The {{cssxref(':required')}} and {{cssxref(':optional')}} <a href="/ja/docs/Web/CSS/Pseudo-classes">pseudo-classes</a> allow writing selectors that match form elements that have the {{ htmlattrxref("required") }} attribute, or that don't have it.</p>

<h4 id="placeholder-shown_CSS_pseudo-class" name="placeholder-shown_CSS_pseudo-class">:placeholder-shown CSS pseudo-class</h4>

<p>See {{cssxref(':placeholder-shown')}}</p>

<h4 id="valid_invalid_CSS_pseudo-classes" name="valid_invalid_CSS_pseudo-classes">CSS の :valid :invalid 疑似クラス</h4>

<p>The {{cssxref(':valid')}} and {{cssxref(':invalid')}} <a href="/ja/docs/Web/CSS/Pseudo-classes">pseudo-classes</a> are used to represent &lt;input&gt; elements whose content validates and fails to validate respectively according to the input's type setting. These classes allow the user to style valid or invalid form elements to make it easier to identify elements that are either formatted correctly or incorrectly.</p>

<h3 id="Controlling_the_text_of_constraint_violation" name="Controlling_the_text_of_constraint_violation">制約違反の文字列の制御</h3>

<p>The following items can help with controlling the text of a constraint violation:</p>

<ul>
 <li><a href="/ja/docs/Web/API/Constraint_validation#element.setCustomValidity(message)">element.setCustomValidity(message)</a> method on the following elements:

  <ul>
   <li>{{HTMLElement("fieldset")}}. Note: Setting a custom validity message on fieldset elements will not prevent form submission in most browsers.</li>
   <li>{{HTMLElement("input")}}</li>
   <li>{{HTMLElement("output")}}</li>
   <li>{{HTMLElement("select")}}</li>
   <li>Submit buttons (created with either a {{HTMLElement("button")}} element with the <code>submit</code> type, or an <code>input</code> element with the {{HTMLElement("input/submit", "submit")}} type. Other types of buttons do not participate in constraint validation.</li>
   <li>{{HTMLElement("textarea")}}</li>
  </ul>
 </li>
 <li>The <a href="/ja/docs/Web/API/ValidityState"><code>ValidityState</code></a> interface describes the object returned by the <a href="/ja/docs/Web/API/Constraint_validation#validity">validity</a> property of the element types listed above. It represents various ways that an entered value can be invalid. Together, they help explain why an element's value fails to validate, if it's not valid.</li>
</ul>
