---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
tags:
  - Element
  - Form Button
  - Form input
  - Forms
  - HTML
  - HTML forms
  - Input
  - Input Types
  - Reference
  - Reset Button
  - reset
translation_of: Web/HTML/Element/input/reset
---
<div>{{HTMLRef("Input_types")}}</div>

<p><span class="seoSummary">{{HTMLElement("input")}} 要素の <strong><code>reset</code></strong> 型はボタンとして表示され、既定の {{domxref("Element/click_event", "click")}} イベントのハンドラーは、フォーム内の入力欄すべてを初期値にリセットします。</span></p>

<div>{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div class="note">
<p>通常、フォームにリセットボタンを配置するべきではありません。このようなボタンは便利なものではなく、間違ってボタンをクリックしてしまったユーザーをイライラさせる可能性が高くなります (<a href="/ja/docs/Web/HTML/Element/input/submit">送信ボタン</a>をクリックしようとしているときにクリックしてしまうことが多いです)。</p>
</div>

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

<p><code>&lt;input type="reset"&gt;</code> 要素の {{htmlattrxref("value", "input")}} 属性は、ボタンのラベルとして表示される {{domxref("DOMString")}} を示します。 <code>reset</code> などのボタンは他の値を持ちません。</p>

<div id="summary-example3">
<pre class="brush: html notranslate">&lt;input type="reset" value="フォームをリセット"&gt;</pre>
</div>

<p>{{EmbedLiveSample("summary-example3", 650, 30)}}</p>

<p><code>value</code> を指定しなかった場合は、既定のラベルが付いたボタンが表示されます (通常は「リセット」ですが、{{Glossary("user agent", "ユーザーエージェント")}}によって異なります)。</p>

<div id="summary-example1">
<pre class="brush: html notranslate">&lt;input type="reset"&gt;</pre>
</div>

<p>{{EmbedLiveSample("summary-example1", 650, 30)}}</p>

<h2 id="Using_reset_buttons" name="Using_reset_buttons">リセットボタンの使用</h2>

<p><code>&lt;input type="reset"&gt;</code> ボタンはフォームをリセットするために使用されます。独自のボタンを作成して JavaScript を使用してカスタマイズしたいのであれば、 <code><a href="/ja/docs/Web/HTML/Element/input/button">&lt;input type="button"&gt;</a></code> またはよりよい {{htmlelement("button")}} 要素を使用してください。</p>

<h3 id="A_simple_reset_button" name="A_simple_reset_button">単純なリセットボタン</h3>

<p>単純なリセットボタンを作成するところから始めましょう。</p>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="example"&gt;Type in some sample text&lt;/label&gt;
    &lt;input id="example" type="text"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="reset" value="フォームをリセット"&gt;
  &lt;/div&gt;
&lt;/form&gt;
</pre>

<p>次のように表示されます。</p>

<p>{{EmbedLiveSample("A_simple_reset_button", 650, 100)}}</p>

<p>テキストフィールドにいくらかテキストを入力してから、リセットボタンを押してみてください。</p>

<h3 id="Adding_a_reset_keyboard_shortcut" name="Adding_a_reset_keyboard_shortcut">リセットのショートカットキーの追加</h3>

<p>リセットボタンにショートカットキーを追加するには — あらゆる {{HTMLElement("input")}} で通用する方法としてと — グローバル属性の {{htmlattrxref("accesskey")}} を使用します。</p>

<p>この例では、 <kbd>r</kbd> がアクセスキーとして指定されます (<kbd>r</kbd> はブラウザーや OS の組み合わせによる特定の修飾キーを押しながら押す必要があります {{htmlattrxref("accesskey")}} に有益なリストがあります)。</p>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="example"&gt;Type in some sample text&lt;/label&gt;
    &lt;input id="example" type="text"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="reset" value="Reset the form"
     accesskey="r"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>{{EmbedLiveSample("Adding_a_reset_keyboard_shortcut", 650, 100)}}</p>

<p>上記の例の問題点は、アクセスキーが何であるかをユーザーが知る方法がないことです。これは特に、一般的には競合を避けるために修飾キーが標準的ではないために特に問題になります。サイトを構築する際には、サイトデザインの邪魔にならないような方法でこの情報を提供するようにしてください (例えば、サイトのアクセスキーについての情報を指す簡単にアクセスできるリンクを提供するなど)。ボタンにツールチップを追加する ({{htmlattrxref("title")}} 属性を使う) ことも役立ちますが、アクセシビリティのためには完全な解決策ではありません。</p>

<h3 id="Disabling_and_enabling_a_reset_button" name="Disabling_and_enabling_a_reset_button">リセットボタンの無効化と有効化</h3>

<p>リセットボタンを無効化するには、以下のようにグローバル属性の {{htmlattrxref("disabled")}} を指定するだけです。</p>

<div id="disable-example1">
<pre class="brush: html notranslate">&lt;input type="reset" value="Disabled" disabled&gt;</pre>
</div>

<p>実行時に <code>disabled</code> を <code>true</code> または <code>false</code> に設定することで、ボタンを有効化したり無効化したりすることができます。 JavaScript では、これは <code>btn.disabled = true</code> や <code>btn.disabled = false</code> のようになります。</p>

<div class="note">
<p><strong>注</strong>: ボタンの有効化や無効化についてのより詳しい情報は、 <code><a href="/ja/docs/Web/HTML/Element/input/button#Disabling_and_enabling_a_button">&lt;input type="button"&gt;</a></code> のページを参照してください。</p>
</div>

<h2 id="Validation" name="Validation">検証</h2>

<p>ボタンは制約の検証には関係しません。制約を受ける実際の値を持っていません。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>上記に簡単な例を挙げました。リセットボタンについては、これ以上言うことはありません。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'forms.html#reset-button-state-(type=reset)', '&lt;input type="reset"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#reset-button-state-(type=reset)', '&lt;input type="reset"&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.input.input-reset")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("input")}} およびそれが実装している {{domxref("HTMLInputElement")}} インターフェイス</li>
 <li><a href="/ja/docs/Learn/Forms/Basic_native_form_controls#Actual_buttons">フォームとボタン</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/forms">フォーム (アクセシビリティ)</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms">HTML フォーム</a></li>
 <li>{{HTMLElement("button")}} 要素</li>
 <li><a href="/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls">CSS プロパティの互換性</a></li>
</ul>
