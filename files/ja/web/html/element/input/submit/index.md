---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
tags:
  - Element
  - Form Button
  - Form input
  - HTML
  - HTML forms
  - Input
  - Input Types
  - Reference
  - Submit Form
  - button
  - form
  - submit
  - submit button
translation_of: Web/HTML/Element/input/submit
---
<div>{{HTMLRef("Input_types")}}</div>

<p><span class="seoSummary">{{HTMLElement("input")}} 要素の <strong><code>submit</code></strong> 型は、ボタンとして描画されます。 {{domxref("Element/click_event", "click")}} イベントが発生したとき (ふつうはユーザーがボタンをクリックしたとき)、{{Glossary("user agent", "ユーザーエージェント")}}はサーバーへフォームを送信しようとします。</span></p>

<div id="summary-example2">
<pre class="brush: html notranslate">&lt;input type="submit" value="リクエストを送信"&gt;</pre>
</div>

<p>{{EmbedLiveSample("summary-example2", 650, 30)}}</p>

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#value">値</a></strong></td>
   <td>ボタンのラベルとして使用する {{domxref("DOMString")}}</td>
  </tr>
  <tr>
   <td><strong>イベント</strong></td>
   <td>{{domxref("Element/click_event", "click")}}</td>
  </tr>
  <tr>
   <td><strong>対応している共通属性</strong></td>
   <td>{{htmlattrxref("type", "input")}} および {{htmlattrxref("value", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>value</code></td>
  </tr>
  <tr>
   <td><strong>メソッド</strong></td>
   <td>なし</td>
  </tr>
 </tbody>
</table>

<h2 id="Value" name="Value">値</h2>

<p><code>&lt;input type="submit"&gt;</code> 要素の {{htmlattrxref("value", "input")}} 属性は、ボタンのラベルとして表示される {{domxref("DOMString")}} を示します。ボタンはその他の真の値を持ちません。</p>

<div id="summary-example3">
<pre class="brush: html notranslate">&lt;input type="submit" value="Send Request"&gt;</pre>
</div>

<p>{{EmbedLiveSample("summary-example3", 650, 30)}}</p>

<p><code>value</code> を指定しなかった場合、ボタンにはユーザーエージェントによって選ばれた既定のラベルが表示されます。このラベルは「送信」または「クエリを送信」などのものです。次のものはこのブラウザーにおける送信ボタンの既定のラベルです。</p>

<div id="summary-example1">
<pre class="brush: html notranslate">&lt;input type="submit"&gt;</pre>
</div>

<p>{{EmbedLiveSample("summary-example1", 650, 30)}}</p>

<h2 id="Additional_attributes" name="Additional_attributes">追加の属性</h2>

<p>すべての {{HTMLElement("input")}} 型で共通する属性に加え、 <code>submit</code> 型の入力欄は次の属性にも対応しています。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">属性</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="#formaction">formaction</a></code></td>
   <td>フォームのデータの送信先の URL。もしあれば、フォームの {{htmlattrxref("action", "form")}} 属性を上書きする</td>
  </tr>
  <tr>
   <td><code><a href="#formenctype">formenctype</a></code></td>
   <td>文字列で、フォームのデータに使用するエンコーディング型を指定</td>
  </tr>
  <tr>
   <td><code><a href="#formmethod">formmethod</a></code></td>
   <td>フォームを送信する際に使用する HTTP メソッド ({{HTTPMethod("get")}} または {{HTTPMethod("post")}})</td>
  </tr>
  <tr>
   <td><code><a href="#formnovalidate">formnovalidate</a></code></td>
   <td>論理属性で、存在する場合、サーバーにデータを送信する前にフォームのフィールドに<a href="/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation">制約検証</a>をしないことを示す</td>
  </tr>
  <tr>
   <td><code><a href="#formtarget">formtarget</a></code></td>
   <td>フォームを送信した後で、サーバーから返されるレスポンスを読み込む先の{{Glossary("browsing context", "閲覧コンテキスト")}}</td>
  </tr>
 </tbody>
</table>

<h3 id="htmlattrdefformaction">{{htmlattrdef("formaction")}}</h3>

<p>文字列で、データの送信先の URL を示します。これはこの {{HTMLElement("input")}} が属する {{HTMLElement("form")}} 要素の {{htmlattrxref("action", "form")}} 属性より優先します。</p>

<p>この属性は <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> および {{HTMLElement("button")}} 要素でも使用できます。</p>

<h3 id="htmlattrdefformenctype">{{htmlattrdef("formenctype")}}</h3>

<p>文字列で、フォームのデータをサーバーに送信する際に使われるエンコーディング方法を識別します。許されている値は3つです。</p>

<dl>
 <dt><code>application/x-www-form-urlencoded</code></dt>
 <dd>これは既定値で、フォームのデータを {{jsxref("encodeURI", "encodeURI()")}} などのアルゴリズムを使って URL エンコーディングした後で送信します。</dd>
 <dt><code>multipart/form-data</code></dt>
 <dd>データを管理するために {{domxref("FormData")}} API を使用し、複数のファイルをサーバーに送信することができます。フォームに {{HTMLElement("input")}} 要素の {{htmlattrxref("type", "input")}}<code>=file</code> (<code><a href="/ja/docs/Web/HTML/Element/input/file">&lt;input type="file"&gt;</a></code>) が含まれている場合は、このエンコーディング型を<em>使わなければなりません</em>。</dd>
 <dt><code>text/plain</code></dt>
 <dd>プレーンテキストです。ほとんどデバッグでしか役に立ちませんが、送信されたデータを簡単に見ることができます。</dd>
</dl>

<p><code>formenctype</code> 属性が指定された場合、所属するフォームの {{htmlattrxref("action", "form")}} 属性を上書きします。</p>

<p>この属性は <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> および {{HTMLElement("button")}} 要素でも使用できます。</p>

<h3 id="htmlattrdefformmethod">{{htmlattrdef("formmethod")}}</h3>

<p>文字列で、フォームのデータを送信するときに使用する HTTP メソッドを示します。この値は所有者であるフォームの {{htmlattrxref("method", "form")}} を上書きします。許可されている値は次の通りです。</p>

<dl>
 <dt><code>get</code></dt>
 <dd>URL は <code>formaction</code> または {{htmlattrxref("action", "form")}} 属性で指定された URL に疑問符 ("?") を追加し、 <code>formenctype</code> または {{htmlattrxref("enctype", "form")}} 属性で指定された方法でエンコードされたフォームのデータが続くものになります。この URL は HTTP の {{HTTPMethod("get")}} リクエストを用いてサーバーに送信されます。このメソッドは ASCII 文字のみを含む単純なフォームでうまく動作し、副作用はありません。これが既定値です。</dd>
 <dt><code>post</code></dt>
 <dd>フォームのデータは、 <code>formaction</code> または {{htmlattrxref("action", "form")}} で指定された URL に HTTP の {{HTTPMethod("post")}} メソッドを用いて送信されるリクエストの本文に含められます。このメソッドは複雑なデータやファイルの添付に対応しています。</dd>
 <dt><code>dialog</code></dt>
 <dd>このメソッドは、入力欄が関連付けられたダイアログを閉じるだけで、フォームのデータをまったく送信しない場合ことを表すために使用します。</dd>
</dl>

<p>この属性は <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> および {{HTMLElement("button")}} 要素でも使用できます。</p>

<h3 id="htmlattrdefformnovalidate">{{htmlattrdef("formnovalidate")}}</h3>

<p>A Boolean attribute which, if present, specifies that the form should not be validated before submission to the server. This overrides the value of the {{htmlattrxref("novalidate", "form")}} attribute on the element's owning form.</p>

<p>この属性は <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> および {{HTMLElement("button")}} 要素でも使用できます。</p>

<h3 id="htmlattrdefformtarget">{{htmlattrdef("formtarget")}}</h3>

<p>A string which specifies a name or keyword that indicates where to display the response received after submitting the form. The string must be the name of a <strong>browsing context</strong> (that is, a tab, window, or {{HTMLElement("iframe")}}. A value specified here overrides any target given by the {{htmlattrxref("target", "form")}} attribute on the {{HTMLElement("form")}} that owns this input.</p>

<p>In addition to the actual names of tabs, windows, or inline frames, there are a few special keywords that can be used:</p>

<dl>
 <dt><code>_self</code></dt>
 <dd>Loads the response into the same browsing context as the one that contains the form. This will replace the current document with the received data. This is the default value used if none is specified.</dd>
 <dt><code>_blank</code></dt>
 <dd>Loads the response into a new, unnamed, browsing context. This is typically a new tab in the same window as the current document, but may differ depending on the configuration of the {{Glossary("user agent")}}.</dd>
 <dt><code>_parent</code></dt>
 <dd>Loads the response into the parent browsing context of the current one. If there is no parent context, this behaves the same as <code>_self</code>.</dd>
 <dt><code>_top</code></dt>
 <dd>Loads the response into the top-level browsing context; this is the browsing context that is the topmost ancestor of the current context. If the current context is the topmost context, this behaves the same as <code>_self</code>.</dd>
</dl>

<p>この属性は <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> および {{HTMLElement("button")}} 要素でも使用できます。</p>

<h2 id="Using_submit_buttons" name="Using_submit_buttons">submit ボタンの使用</h2>

<p><code>&lt;input type="submit"&gt;</code> buttons are used to submit forms. If you want to create a custom button and then customize the behavior using JavaScript, you need to use <code><a href="/ja/docs/Web/HTML/Element/input/button">&lt;input type="button"&gt;</a></code>, or better still, a {{htmlelement("button")}} element.</p>

<p>If you choose to use <code>&lt;button&gt;</code> elements to create the buttons in your form, keep this in mind: if there's only one <code>&lt;button&gt;</code> inside the {{HTMLElement("form")}}, that button will be treated as the "submit" button. So you should be in the habit of expressly specifying which button is the submit button.</p>

<h3 id="A_simple_submit_button">A simple submit button</h3>

<p>We'll begin by creating a form with a simple submit button:</p>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="example"&gt;Let's submit some text&lt;/label&gt;
    &lt;input id="example" type="text" name="text"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="submit" value="送信"&gt;
  &lt;/div&gt;
&lt;/form&gt;
</pre>

<p>次のように表示されます。</p>

<p>{{EmbedLiveSample("A_simple_submit_button", 650, 100)}}</p>

<p>テキストフィールドにいくらかテキストを入力してから、送信ボタンを押してみてください。</p>

<p>Upon submitting, the data name/value pair gets sent to the server. In this instance, the string will be <code>text=<em>usertext</em></code>, where "usertext" is the text entered by the user, encoded to preserve special characters. Where and how the data is submitted depends on the configuration of the <code>&lt;form&gt;</code>; see <a href="/ja/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data">Sending form data</a> for more details.</p>

<h3 id="Adding_a_submit_keyboard_shortcut">Adding a submit keyboard shortcut</h3>

<p>Keyboard shortcuts, also known as access keys and keyboard equivalents, let the user trigger a button using a key or combination of keys on the keyboard. To add a keyboard shortcut to a submit button — just as you would with any {{HTMLElement("input")}} for which it makes sense — you use the {{htmlattrxref("accesskey")}} global attribute.</p>

<p>In this example, <kbd>s</kbd> is specified as the access key (you'll need to press <kbd>s</kbd> plus the particular modifier keys for your browser/OS combination. In order to avoid conflicts with the user agent's own keyboard shortcuts, different modifier keys are used for access keys than for other shortcuts on the host computer. See {{htmlattrxref("accesskey")}} for further details.</p>

<p>Here's the previous example with the <kbd>s</kbd> access key added:</p>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="example"&gt;Let's submit some text&lt;/label&gt;
    &lt;input id="example" type="text" name="text"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="submit" value="Send"
     accesskey="s"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>For example, in Firefox for Mac, pressing <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> triggers the Send button, while Chrome on Windows uses <kbd>Alt</kbd>+<kbd>S</kbd>.</p>

<p>{{EmbedLiveSample("Adding_a_submit_keyboard_shortcut", 650, 100)}}</p>

<p>The problem with the above example is that the user will not know what the access key is! This is especially true since the modifiers are typically non-standard to avoid conflicts. When building a site, be sure to provide this information in a way that doesn't interfere with the site design (for example by providing an easily accessible link that points to information on what the site access keys are). Adding a tooltip to the button (using the {{htmlattrxref("title")}} attribute) can also help, although it's not a complete solution for accessibility purposes.</p>

<h3 id="Disabling_and_enabling_a_submit_button">Disabling and enabling a submit button</h3>

<p>To disable a submit button, simply specify the {{htmlattrxref("disabled")}} global attribute on it, like so:</p>

<div id="disable-example1">
<pre class="brush: html notranslate">&lt;input type="submit" value="Disabled" disabled&gt;</pre>
</div>

<p>You can enable and disable buttons at run time by simply setting <code>disabled</code> to <code>true</code> or <code>false</code>; in JavaScript this looks like <code>btn.disabled = true</code> or <code>btn.disabled = false</code>.</p>

<div class="note">
<p>See the <code><a href="/ja/docs/Web/HTML/Element/input/button#Disabling_and_enabling_a_button">&lt;input type="button"&gt;</a></code> page for more ideas about enabling and disabling buttons.</p>
</div>

<h2 id="Validation" name="Validation">検証</h2>

<p>送信ボタンは制約の検証には参加しません。制約を受ける実際の値を持っていません。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>We've included simple examples above. There isn't really anything more to say about submit buttons. There's a reason this kind of control is sometimes called a "simple button."</p>

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
   <td>{{SpecName('HTML WHATWG', 'forms.html#submit-button-state-(type=submit)', '&lt;input type="submit"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#submit-button-state-(type=submit)', '&lt;input type="submit"&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.input.input-submit")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("input")}} およびそれが実装している {{domxref("HTMLInputElement")}} インターフェイス</li>
 <li><a href="/ja/docs/Learn/Forms/Basic_native_form_controls#Actual_buttons">フォームとボタン</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/forms">フォーム (アクセシビリティ)</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms">HTML フォーム</a></li>
 <li>{{HTMLElement("button")}} 要素</li>
 <li><a href="/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls">CSS プロパティの互換性</a></li>
</ul>
