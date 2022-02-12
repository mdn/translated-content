---
title: <input type="url">
slug: Web/HTML/Element/input/url
tags:
  - 要素
  - Form Control
  - フォーム入力s
  - フォーム
  - HTML
  - HTML Input Types
  - HTML フォーム
  - Input
  - 入力型
  - リファレンス
  - Text
  - URL
  - control
translation_of: Web/HTML/Element/input/url
---
{{HTMLRef("Input_types")}}

<span class="seoSummary">{{HTMLElement("input")}} 要素の `<strong>url</strong>` 型は、ユーザーに URL を入力および編集させるために使用します。</span>

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) をクローンしてプルリクエストを送信してください。</div>

入力値はフォームの送信前に自動的に検証され、空欄または正しい形式の URL のどちらかであることが確認されます。 CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラスが自動的に適用され、フィールド上の現在の値が妥当なメールアドレスであるかどうかを視覚的に示します。

`url` 型に対応していないブラウザーでは、 `url` 入力欄は標準の {{HTMLElement("input/text", "text")}} 入力欄で代替されます。

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("値")}}</strong></td>
   <td>URL を表す {{domxref("DOMString")}}、または空欄</td>
  </tr>
  <tr>
   <td><strong>イベント</strong></td>
   <td>{{event("change")}} および {{event("input")}}</td>
  </tr>
  <tr>
   <td><strong>対応している共通属性</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("maxlength", "input")}}, {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("readonly", "input")}}, {{htmlattrxref("required", "input")}}, {{htmlattrxref("size", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td>`list`, `value`, `selectionEnd`, `selectionDirection`</td>
  </tr>
  <tr>
   <td><strong>メソッド</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}, {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}</td>
  </tr>
 </tbody>
</table>

## 値

{{HTMLElement("input")}} 要素の {{htmlattrxref("value", "input")}} 属性は {{domxref("DOMString")}} で、自動的に URL の構文として検証されます。より具体的に言うと、検証を通る値の書式は下記の2通りがあります。

<ol>
 <li>空文字列 ("")。ユーザーが値を入力しないか、または値が削除されたことを表します。</li>
 <li>単一の正しい形式の絶対 URL。 URL が実在する必要はありませんが、少なくとも正しい書式です。簡単に言えば、 `urlscheme://restofurl` の形です。</li>
</ol>

{{anch("検証")}}の節で、どのようなメールアドレスが正しい形式であると検証されるかの詳細を参照してください。

<h2 id="Additional_attributes" name="Additional_attributes">追加の属性</h2>

型に関係なくすべての {{HTMLElement("input")}} 要素を操作する属性に加え、 `url` 型の入力欄は次の属性にも対応しています。

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">属性</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>`{{anch("list")}}`</td>
   <td>オプションで自動補完の定義済みの選択肢を含む &lt;datalist&gt; 要素の id</td>
  </tr>
  <tr>
   <td>`{{anch("maxlength")}}`</td>
   <td>入力欄が受け付ける最大文字数</td>
  </tr>
  <tr>
   <td>`{{anch("minlength")}}`</td>
   <td>入力欄が取りうる、妥当と判断される最小文字列長</td>
  </tr>
  <tr>
   <td>`{{anch("pattern")}}`</td>
   <td>妥当と判断されるために、入力欄の内容が一致する必要がある正規表現</td>
  </tr>
  <tr>
   <td>`{{anch("placeholder")}}`</td>
   <td>空欄の時に入力欄に表示される入力例の値</td>
  </tr>
  <tr>
   <td>`{{anch("readonly")}}`</td>
   <td>入力欄の内容を読み取り専用にするかどうかを示す論理属性</td>
  </tr>
  <tr>
   <td>`{{anch("size")}}`</td>
   <td>入力欄の長さを何文字分にするかを表す数値</td>
  </tr>
  <tr>
   <td>`{{anch("spellcheck")}}`</td>
   <td>入力欄でスペルチェックを有効にするかどうか、既定のスペルチェック構成を利用するかを制御する</td>
  </tr>
 </tbody>
</table>

<p id="htmlattrdeflist">{{page("/ja/docs/Web/HTML/Element/input/text", "list", 0, 1, 2)}}</p>

<h3 id="htmlattrdefmaxlength">{{htmlattrdef("maxlength")}}</h3>

ユーザーが `url` 入力欄に入力することができる (UTF-16 コード単位での) 最大文字数です。 0 以上の整数値である必要があります。 `maxlength` が指定されていないか、無効な値が指定されていると、 `url` 入力欄には最大文字数が設定されません。この値は `minlength` の値以上である必要もあります。

フィールドの URL の長さが UTF-16 コード単位で `maxlength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

<h3 id="htmlattrdefminlength">{{htmlattrdef("minlength")}}</h3>

ユーザーが `url` 入力欄に入力することができる (UTF-16 コード単位での) 最小文字数です。これは非負の整数値で、 `maxlength` で指定された値以下である必要があります。 `minlength` が指定されていないか、無効な値が指定されていると、 `url` 入力欄には最小文字数が設定されません。

入力欄の URL の長さが UTF-16 コード単位で `minlength` の長さよりも短いと、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

<h3 id="htmlattrdefpattern">{{htmlattrdef("pattern")}}</h3>

{{page("/ja/docs/Web/HTML/Element/input/text", "pattern-include")}}

詳細と例については{{anch("Pattern validation", "パターン検証")}}の節を参照してください。

{{page("/ja/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/ja/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

{{page("/ja/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

{{page("/ja/docs/Web/HTML/Element/input/text", "spellcheck", 0, 1, 2)}}

<h2 id="Non-standard_attributes" name="Non-standard_attributes">標準外の属性</h2>

ブラウザーによっては、以下の標準外の属性が利用できます。一般的な規則として、できれば使用することを避けてください。

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">属性</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>`{{anch("autocorrect")}}`</td>
   <td>オートコレクトを行うかどうかを `on` または `off` で示します。 <strong>Safari のみ。</strong></td>
  </tr>
  <tr>
   <td>`{{anch("mozactionhint")}}`</td>
   <td>入力欄を編集している間、ユーザーが <kbd>Enter</kbd> または <kbd>Return</kbd> キーを押したときに実行されるアクションを示す文字列です。これは仮想キーボードのキーに適切なラベルを特定するために使用します。 <strong>Android 版 Firefox for のみ。</strong></td>
  </tr>
 </tbody>
</table>

{{page("/ja/docs/Web/HTML/Element/input/text", "autocorrect", 0, 1, 2)}}

{{page("/ja/docs/Web/HTML/Element/input/text", "mozactionhint", 0, 1, 2)}}

<h2 id="Using_URL_inputs" name="Using_URL_inputs">URL 入力欄の使用</h2>

When you create a URL input with the proper `type` value, `url`, you get automatic validation that the entered text is at least in the correct form to potentially be a legitimate URL. This can help avoid cases in which the user mis-types their web site's address, or provides an invalid one.

It's important, however, to note that this is not enough to ensure that the specified text is a URL which actually exists, corresponds to the user of the site, or is acceptable in any other way. It simply ensures that the value of the field is properly formatted to be a URL.

<div class="note">
<strong>注</strong>: ユーザーが HTML をその場面の裏でいじることができることを意識しておくことは極めて重要です。ですから、安全を目的として、サイトでクライアント側の値検証機能のみを使用しては<em>いけません</em>。何らかのセキュリティ上の問題を含む可能性がある値が提供されるトランザクションの場合は、いずれもサーバー側で値検証を行う<em>必要があります</em>。
</div>

<h3 id="A_simple_URL_input" name="A_simple_URL_input">A simple URL input</h3>

Currently, all browsers which implement this element implement it as a standard text input field with basic validation features. In its most basic form, a URL input can be implemented like this:

<pre class="brush: html notranslate">&lt;input id="myURL" name="myURL" type="url"&gt;</pre>

{{ EmbedLiveSample('A_simple_URL_input', 600, 40) }}

Notice that it's considered valid when empty and when a single validly-formatted URL address is entered, but is otherwise not considered valid. By adding the {{htmlattrxref("required", "input")}} attribute, only properly-formed URLs are allowed; the input is no longer considered valid when empty.

There is nothing magical going on here. Submitting this form would cause the following data to be sent to the server: `myURL=http%3A%2F%2Fwww.example.com`. Note how characters are escaped as necessary.

<h3 id="Placeholders">Placeholders</h3>

Sometimes it's helpful to offer an in-context hint as to what form the input data should take. This can be especially important if the page design doesn't offer descriptive labels for each {{HTMLElement("input")}}. This is where <strong>placeholders</strong> come in. A placeholder is a value that demonstrates the form the `value` should take by presenting an example of a valid value, which is displayed inside the edit box when the element's `value` is "". Once data is entered into the box, the placeholder disappears; if the box is emptied, the placeholder reappears.

Here, we have a `url` input with the placeholder `http://www.example.com`. Note how the placeholder disappears and reappears as you manipulate the contents of the edit field.

<pre class="brush: html notranslate">&lt;input id="myURL" name="myURL" type="url"
       placeholder="http://www.example.com"&gt;</pre>

{{ EmbedLiveSample('Placeholders', 600, 40) }}

<h3 id="Controlling_the_input_size">Controlling the input size</h3>

You can control not only the physical length of the input box, but also the minimum and maximum lengths allowed for the input text itself.

<h4 id="Physical_input_element_size">Physical input element size</h4>

The physical size of the input box can be controlled using the {{htmlattrxref("size", "input")}} attribute. With it, you can specify the number of characters the input box can display at a time. In this example, for instance, the `url` edit box is 30 characters wide:

<pre class="brush: html notranslate">&lt;input id="myURL" name="myURL" type="url"
       size="30"&gt;</pre>

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

<h4 id="Element_value_length">Element value length</h4>

The `size` is separate from the length limitation on the entered URL itself. You can specify a minimum length, in characters, for the entered URL using the {{htmlattrxref("minlength", "input")}} attribute; similarly, use {{htmlattrxref("maxlength", "input")}} to set the maximum length of the entered URL. If `maxLength` exceeds `size`, the input box's contents will scroll as needed to show the current selection or insertion point as the content is manipulated.

The example below creates a 30-character wide URL address entry box, requiring that the contents be no shorter than 10 characters and no longer than 80 characters.

<pre class="brush: html notranslate">&lt;input id="myURL" name="myURL" type="url"
       size="30" minlength="10" maxlength="80"&gt;
</pre>

{{EmbedLiveSample("Element_value_length", 600, 40) }}

<div class="note">
<strong>Note</strong>: These attributes also affect validation; a value shorter or longer than the specified minimum/maximum lengths will be classified as invalid; in addition most browsers will simply refuse to let the user enter a value longer than the specified maximum length.
</div>

<h3 id="Providing_default_options">Providing default options</h3>

As always, you can provide a default value for a `url` input box by setting its {{htmlattrxref("value", "input")}} attribute:

<div id="Default_value">
<pre class="brush: html notranslate">&lt;input id="myURL" name="myURL" type="url"
       value="http://www.example.com"&gt;</pre>
</div>

{{EmbedLiveSample("Default_value", 600, 40)}}

<h4 id="Offering_suggested_values">Offering suggested values</h4>

Taking it a step farther, you can provide a list of default options from which the user can select by specifying the {{htmlattrxref("list", "input")}} attribute. This doesn't limit the user to those options, but does allow them to select commonly-used URLs more quickly. This also offers hints to {{htmlattrxref("autocomplete", "input")}}. The `list` attribute specifies the ID of a {{HTMLElement("datalist")}}, which in turn contains one {{HTMLElement("option")}} element per suggested value; each `option`'s `value` is the corresponding suggested value for the URL entry box.

<pre class="brush: html notranslate">&lt;input id="myURL" name="myURL" type="url"
       list="defaultURLs"&gt;

&lt;datalist id="defaultURLs"&gt;
  &lt;option value="https://developer.mozilla.org/"&gt;
  &lt;option value="http://www.google.com/"&gt;
  &lt;option value="http://www.microsoft.com/"&gt;
  &lt;option value="https://www.mozilla.org/"&gt;
  &lt;option value="http://w3.org/"&gt;
&lt;/datalist&gt;</pre>

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

With the {{HTMLElement("datalist")}} element and its {{HTMLElement("option")}}s in place, the browser will offer the specified values as potential values for the URL; this is typically presented as a popup or drop-down menu containing the suggestions. While the specific user experience may vary from one browser to another, typically clicking in the edit box presents a drop-down of the suggested URLs. Then, as the user types, the list is adjusted to show only matching values. Each typed character narrows down the list until the user makes a selection or types a custom value.

<h4 id="Using_labels_for_suggested_values">Using labels for suggested values</h4>

You can opt to include the {{htmlattrxref("label", "option")}} attribute on one or all of your `&lt;option&gt;` elements to provide textual labels. Some browsers may display only the labels, while others may display both the label and the URL.

<pre class="brush: html notranslate">&lt;input id="myURL" name="myURL" type="url"
       list="defaultURLs"&gt;

&lt;datalist id="defaultURLs"&gt;
  &lt;option value="https://developer.mozilla.org/" label="MDN Web Docs"&gt;
  &lt;option value="http://www.google.com/" label="Google"&gt;
  &lt;option value="http://www.microsoft.com/" label="Microsoft"&gt;
  &lt;option value="https://www.mozilla.org/" label="Mozilla"&gt;
  &lt;option value="http://w3.org/" label="W3C"&gt;
&lt;/datalist&gt;</pre>

{{EmbedLiveSample("Using_labels_for_suggested_values", 600, 40)}}

<h2 id="Validation">Validation</h2>

There are two levels of content validation available for `url` inputs. First, there's the standard level of validation offered to all {{HTMLElement("input")}}s, which automatically ensures that the contents meet the requirements to be a valid URL. But there's also the option to add additional filtering to ensure that your own specialized needs are met, if you have any.

<div class="warning">
<strong>Important</strong>: HTML form validation is <em>not</em> a substitute for scripts that ensure that the entered data is in the proper format. It's far too easy for someone to make adjustments to the HTML that allow them to bypass the validation, or to remove it entirely. It's also possible for someone to simply bypass your HTML entirely and submit the data directly to your server. If your server-side code fails to validate the data it receives, disaster could strike when improperly-formatted data (or data which is too large, is of the wrong type, and so forth) is entered into your database.
</div>

<h3 id="Basic_validation">Basic validation</h3>

Browsers that support the `url` input type automatically provide validation to ensure that only text that matches the standard format for URLs is entered into the input box.

The syntax of a URL is fairly intricate. It's defined by WHATWG's [URL Living Standard](https://url.spec.whatwg.org/) and is described for newcomers in our article [What is a URL?](/ja/docs/Learn/Common_questions/What_is_a_URL)

<h3 id="Making_a_URL_required">Making a URL required</h3>

As mentioned earlier, to make a URL entry required before the form can be submitted (you can't leave the field blank), you just need to include the {{htmlattrxref("required", "input")}} attribute on the input.

<div id="Default_value">
<pre class="brush: html notranslate">&lt;form&gt;
  &lt;input id="myURL" name="myURL" type="url" required&gt;
  &lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;</pre>
</div>

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Try submitting the above form with no value entered to see what happens.

<h3 id="Pattern_validation" name="Pattern_validation">パターンによる値検証</h3>

If you need the entered URL to be restricted further than just "any string that looks like a URL," you can use the {{htmlattrxref("pattern", "input")}} attribute to specify a {{Glossary("regular expression")}} the value must match for the value to be valid.

For example, let's say you're building a support page for employees of Myco, Inc. which will let them contact their IT department for help if one of their pages has a problem. In our simplified form, the user needs to enter the URL of the page that has a problem, and a message describing what is wrong. But we want the URL to only successfully validate if the entered URL is in a Myco domain.

Since inputs of type `url` validate against both the standard URL validation <em>and</em> the specified {{htmlattrxref("pattern", "input")}}, you can implement this easily. Let's see how:

<div class="hidden">
<pre class="brush: css notranslate">div {
  margin-bottom: 10px;
  position: relative;
  }

  input[type="number"] {
    width: 100px;
  }

  input + span {
    padding-right: 30px;
  }

  input:invalid+span:after {
    position: absolute; content: '✖';
    padding-left: 5px;
  }

  input:valid+span:after {
    position: absolute;
    content: '✓';
    padding-left: 5px;
  }</pre>
</div>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="myURL"&gt;Enter the problem website address:&lt;/label&gt;
    &lt;input id="myURL" name="myURL" type="url"
           required pattern=".*\.myco\..*"
           title="The URL must be in a Myco domain"&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="myComment"&gt;What is the problem?&lt;/label&gt;
    &lt;input id="myComment" name="myComment" type="text"
           required&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button&gt;Submit&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;
</pre>

{{EmbedLiveSample("Pattern_validation", 700, 150)}}

First of all, the {{htmlattrxref("required", "input")}} attribute is specified, making it mandatory that a valid email address be provided.

Second, in the `url` input we set `pattern` to `".*\.myco\..*"`. This simple regular expression requests a string that has any number of characters, followed by a dot, followed by "myco", followed by a dot, followed by any number of characters. And because the browser runs both the standard URL filter <em>and</em> our custom pattern against the specified text, we wind up with a validation which says "make sure this is a valid URL, and also in a Myco domain."

This isn't perfect, but it is good enough for this simple demo's requirements.

It's advisable to use the {{htmlattrxref("title")}} attribute along with `pattern`. If you do, the `title` <em>must</em> describe the pattern; it should explain what format the data should take on, rather than any other information. That's because the `title` may be displayed or spoken as part of a validation error message. For example, the browser might present the message "The entered text doesn't match the required pattern." followed by your specified `title`. If your `title` is something like "URL", the result would be the message "The entered text doesn't match the required pattern. URL", which is not a good user experience.

That's why, instead, we specify the string "The URL must be in a myco domain". By doing that, the resulting full error message might be something like "The entered text doesn't match the required pattern. The URL should be in a myco domain."

<div class="note">
<strong>Note</strong>: If you run into trouble while writing your validation regular expressions and they're not working properly, check your browser's console; there may be helpful error messages there to aid you in solving the problem.
</div>

<h2 id="Examples" name="Examples">例</h2>

There's not much else to say about `url` type inputs; check the {{anch("Pattern validation")}} and {{anch("Using URL inputs")}} sections for numerous examples.

You can also find our [pattern validation example on GitHub](https://github.com/mdn/learning-area/blob/master/html/forms/url-example/index.html) (see it [running live also](https://mdn.github.io/learning-area/html/forms/url-example/)).

## 仕様書

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
   <td>{{SpecName('HTML WHATWG', 'forms.html#url-state-(type=url)', '&lt;input type="url"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'sec-forms.html#url-state-typeurl', '&lt;input type="url"&gt;')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName("URL", "#urls", "URL syntax")}}</td>
   <td>{{Spec2("URL")}}</td>
   <td>Living Standard</td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("html.elements.input.input-url")}}

## 関連情報

<ul>
 <li>[HTML フォームガイド](/ja/docs/Learn/HTML/Forms)</li>
 <li>{{HTMLElement("input")}}</li>
 <li>[`&lt;input type="tel"&gt;`](/ja/docs/Web/HTML/Element/input/tel)</li>
 <li>[`&lt;input type="email"&gt;`](/ja/docs/Web/HTML/Element/input/email)</li>
 <li>[CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)</li>
</ul>
