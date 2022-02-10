---
title: <input type="email">
slug: Web/HTML/Element/input/email
tags:
  - Email
  - フォーム
  - HTML
  - HTML フォーム
  - 入力型
  - リファレンス
translation_of: Web/HTML/Element/input/email
---
{{HTMLRef("Input_types")}}

<span class="seoSummary">{{HTMLElement("input")}} 要素の `<strong>email</strong>` 型は、ユーザーに一つのメールアドレス、または、 `[multiple](/ja/docs/Web/HTML/Attributes/multiple)` 属性が設定されていた場合は、メールアドレスのリストを入力および編集させるために使用します。</span>

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) をクローンしてプルリクエストを送信してください。</div>

入力値はフォームの送信前に自動的に検証され、空欄または正しい形式のメールアドレス (またはメールアドレスのリスト) のどちらかであることが確認されます。 CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラスが自動的に適用され、フィールド上の現在の値が妥当なメールアドレスであるかどうかを視覚的に示します。

`email` 型に対応していないブラウザーでは、 `email` 入力欄は標準の {{HTMLElement("input/text", "text")}} 入力欄で代替されます。

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("値")}}</strong></td>
   <td>メールアドレスを表す {{domxref("DOMString")}}、または空欄</td>
  </tr>
  <tr>
   <td><strong>イベント</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} および {{domxref("HTMLElement/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>対応している共通属性</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("maxlength", "input")}}, {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("multiple", "input")}}, {{htmlattrxref("name", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("readonly", "input")}}, {{htmlattrxref("required", "input")}}, {{htmlattrxref("size", "input")}}, {{htmlattrxref("type", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td>`list` および `value`</td>
  </tr>
  <tr>
   <td><strong>メソッド</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}</td>
  </tr>
 </tbody>
</table>

## 値

{{HTMLElement("input")}} 要素の {{htmlattrxref("value", "input")}} 属性には {{domxref("DOMString")}} が入り、メールアドレスの構文に合うかどうかが自動的に検証されます。具体的には、検証に通ることができる値の書式には3種類があります。

<ol>
 <li>空文字列 ("")。ユーザーが値を入力しないか、または値が削除されたことを表します。</li>
 <li>単一の正しい形式のメールアドレス。メールアドレスが実在する必要はありませんが、少なくとも正しい書式です。簡単に言えば、 `username@domain` または `username@domain.tld` の形です。もちろんそれ以上のものもあります。{{anch("検証")}}の節で、メールアドレスの検証アルゴリズムで一致する{{Glossary("regular expression", "正規表現")}}について参照してください。</li>
 <li>{{htmlattrxref("multiple", "input")}} 属性が指定されたとき (のみ)、値はカンマ区切りで複数の正しい形式のメールアドレスを入れることができます。それぞれのメールアドレスの前後にある空白は除去されます。</li>
</ol>

{{anch("検証")}}の節で、どのようなメールアドレスが正しい形式であると検証されるかの詳細を参照してください。

<h2 id="Additional_attributes" name="Additional_attributes">追加属性</h2>

型に関係なくすべての {{HTMLElement("input")}} 要素を操作する属性に加え、 `email` 型の入力欄は次の属性にも対応しています。

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
   <td>The id of the &lt;datalist&gt; element that contains the optional pre-defined autocomplete options</td>
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
   <td>`{{anch("multiple")}}`</td>
   <td>複数のメールアドレスをカンマ区切りで入力することを受け付けるかどうか</td>
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
 </tbody>
</table>

<p id="htmlattrdeflist">{{page("/en-US/docs/Web/HTML/Element/input/text", "list", 0, 1, 2)}}</p>

<h3 id="htmlattrdefmaxlength">{{htmlattrdef("maxlength")}}</h3>

ユーザーが `email` 入力欄に入力することができる (UTF-16 コード単位での) 最大文字数です。 0 以上の整数値である必要があります。 `maxlength` が指定されていないか、無効な値が指定されていると、 `email` 入力欄には最大文字数が設定されません。この値は `minlength` の値以上である必要もあります。

フィールドのメールアドレスの長さが UTF-16 コード単位で `maxlength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

<h3 id="htmlattrdefminlength">{{htmlattrdef("minlength")}}</h3>

ユーザーが `email` 入力欄に入力することができる (UTF-16 コード単位での) 最小文字数です。これは非負の整数値で、 `maxlength` で指定された値以下である必要があります。 `minlength` が指定されていないか、無効な値が指定されていると、 `email` 入力欄には最小文字数が設定されません。

入力欄のメールアドレスの長さが UTF-16 コード単位で `minlength` の長さよりも短いと、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

<h3 id="htmlattrdefmultiple">{{htmlattrdef("multiple")}}</h3>

論理属性で、存在する場合、ユーザーが複数のメールアドレスを、カンマと任意のホワイトスペースで区切ったリストを入力できることを示します。詳しくは{{anch("Allowing multiple e-mail addresses", "複数のメールアドレスの許可")}}または [HTML 属性: multiple](/ja/docs/Web/HTML/Attributes/multiple) を参照してください。

<div class="note">
<strong>注:</strong> 通常、 {{htmlattrxref("required", "input")}} 属性を指定すると、ユーザーは入力欄に妥当なメールアドレスを入力しなければなりません。しかし、 `multiple` 属性を追加すると、ゼロ個のメールアドレス (空文字列、またはホワイトスペースのみの文字列) が妥当な値になります。言い換えれば、 `multiple` が指定されていると、 `required` の値に関係なく、ユーザーはメールアドレスを一つも入力する必要がありません。
</div>

<h3 id="htmlattrdefpattern">{{htmlattrdef("pattern")}}</h3>

{{page("/ja/docs/Web/HTML/Element/input/text", "pattern-include")}}

詳細と例については{{anch("Pattern validation", "パターン検証")}}の節を参照してください。

{{page("/ja/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/ja/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

{{page("/ja/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

<h2 id="Using_email_inputs" name="Using_email_inputs">email 入力欄の使用</h2>

メールアドレスはウェブで最も頻繁に入力される文字列データです。ウェブサイトにログインするときに使われたり、情報をリクエストしたり、注文の確認をできるようにしたり、ウェブメールでつかったりなどです。そのような場合、 `email` 入力型は、ユーザーインターフェイスやメールアドレスの処理の構築作業を簡略化することができるので、ウェブ開発者の仕事をはるかに楽にすることができます。メールアドレスの入力欄を、 `type` の値を正しく `email` にして作成すれば、入力された文字列が少なくとも合法のメールアドレスである可能性がある但し書式であることを自動的に検証してくれます。これにより、ユーザーがアドレスを打ち間違えたり、無効なアドレスを入力したりすることを防ぐのに役立ちます。

しかし、指定された文字列が、実際に存在するメールアドレスであるかどうか、サイトのユーザーに一致するか、他の方法で利用できるかを保証するには不十分です。単に入力欄の値がメールアドレスの形式に沿っているかを保証するだけです。

<div class="note">
<strong>注</strong>: ユーザーが HTML をその場面の裏でいじることができることを意識しておくことは極めて重要です。ですから、安全を目的として、サイトでクライアント側の値検証機能のみを使用しては<em>いけません</em>。何らかのセキュリティ上の問題を含む可能性がある値が提供されるトランザクションの場合は、いずれもサーバー側で値検証を行う<em>必要があります</em>。
</div>

<h3 id="A_simple_email_input" name="A_simple_email_input">単純な email 型の入力欄</h3>

現在、この要素を実装しているすべてのブラウザーが、これを基本的な検証機能がついた標準のテキスト入力欄として実装しています。しかし、仕様書ではブラウザーに自由度を許容しています。例えば、この要素はユーザーの端末に内蔵されたアドレス帳と統合され、メールアドレスをリストから選ぶことができるようにすることも可能です。多くの基本的なフォームでは、 `email` 入力欄は次のように実装されています。

<pre class="brush: html notranslate">&lt;input id="emailAddress" type="email"&gt;</pre>

{{ EmbedLiveSample('A_simple_email_input', 600, 40) }}

なお、妥当と判断されるのは空欄の場合と、単一の妥当な書式のメールアドレスが入力されている場合で、それ以外は妥当であるとは判断されません。 {{htmlattrxref("required", "input")}} 属性を追加することで、妥当な書式のメールアドレスのみが許容されるようになり、空欄の場合は妥当であるとは判断されなくなります。

<h3 id="Allowing_multiple_e-mail_addresses" name="Allowing_multiple_e-mail_addresses">複数のメールアドレスの許可</h3>

`[multiple](/ja/docs/Web/HTML/Attributes/multiple)` 論理属性を追加することで、入力欄に複数のメールアドレスを受け付けるよう構成することができます。

<pre class="brush: html notranslate">&lt;input id="emailAddress" type="email" multiple&gt;</pre>

{{ EmbedLiveSample('Allowing_multiple_e-mail_addresses', 600, 40) }}

入力欄は単一のメールアドレスが入力された時や、任意の数のメールアドレスをカンマ区切りで入力した場合、その中にホワイトスペース文字がある場合も有効として扱われるようになります。

<div class="note">
<strong>注</strong>: `multiple` が使用されると、値を空欄にすることが許可されます。
</div>

`multiple` が指定された場合に有効な文字列の例をいくつか示します。

<ul>
 <li>`""`</li>
 <li>`"me@example"`</li>
 <li>`"me@example.org"`</li>
 <li>`"me@example.org,you@example.org"`</li>
 <li>`"me@example.org, you@example.org"`</li>
 <li>`"me@example.org,you@example.org,    us@example.org"`</li>
</ul>

無効な文字列の例をいくつか示します。

<ul>
 <li>`","`</li>
 <li>`"me"`</li>
 <li>`"me@example.org you@example.org"`</li>
</ul>

<h3 id="Placeholders" name="Placeholders">プレイスホルダー</h3>

フォームがどのような入力データを取るのかについての行内のヒントを提供すると、有益なことがあります。これはページのデザインでそれぞれの {{HTMLElement("input")}} に説明のラベルを付けることができない場合に特に重要になります。ここで<strong>プレイスホルダー</strong>が登場します。プレイスホルダーは、入力される `value` が取るべき値の形式を、有効な値の例を示すことで表現する値であり、 `value` が "" の時に入力欄の中に表示されます。入力欄にデータが入力されると、プレイスホルダーは非表示になり、入力欄が空欄になると、プレイスホルダーは再度表示されます。

ここで、 `email` 入力欄に `sophie@example.com` というプレイスホルダーを設定します。なお、入力欄の中身を操作すると、プレイスホルダーが非表示になったり再表示されたりします。

<pre class="brush: html notranslate">&lt;input type="email" placeholder="sophie@example.com"&gt;</pre>

{{ EmbedLiveSample('Placeholders', 600, 40) }}

<h3 id="Controlling_the_input_size" name="Controlling_the_input_size">入力欄の寸法の制御</h3>

入力ボックスの物理的な長さだけでなく、入力された文字列自身の許容される最小長および最大長も制御することができます。

<h4 id="Physical_input_element_size" name="Physical_input_element_size">物理的な入力欄の寸法</h4>

入力ボックスの物理的な寸法は、入力ボックスの {{htmlattrxref("size", "input")}} 属性を使用して制御することができます。これにより、入力ボックスが同時に表示することができる文字数を指定することができます。この例では `email` 入力ボックスは15文字分の幅になります。

<pre class="brush: html notranslate">&lt;input type="email" size="15"&gt;</pre>

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

<h4 id="Element_value_length" name="Element_value_length">要素の値の長さ</h4>

`size` は入力されたメールアドレスの長さ制限からは独立しており、フィールドを小さい空間に収めることができますが、より長いメールアドレス文字列が入力できます。入力されたメールアドレスの最小文字数は {{htmlattrxref("minlength", "input")}} 属性を使用して、同様に入力されたメールアドレスの最大文字数は {{htmlattrxref("maxlength", "input")}} を使用して設定することができます。

以下の例は32文字の幅で、内容は3文字より短くなったり、64文字より長くなったりしないようにする必要があるメールアドレス入力ボックスを生成します。

<pre class="brush: html notranslate">&lt;input type="email" size="32" minlength="3" maxlength="64"&gt;</pre>

{{EmbedLiveSample("Element_value_length", 600, 40) }}

<h3 id="Providing_default_options" name="Providing_default_options">既定のオプションの提供</h3>

これまでどおり、 {{htmlattrxref("value", "input")}} 属性を設定することで `email` 入力欄に既定値を指定することができます。

<div id="Default_value">
<pre class="brush: html notranslate">&lt;input type="email" value="default@example.com"&gt;</pre>
</div>

{{EmbedLiveSample("Default_value", 600, 40)}}

<h4 id="Offering_suggested_values" name="Offering_suggested_values">サジェスト値の提供</h4>

Taking it a step farther, you can provide a list of default options from which the user can select by specifying the {{htmlattrxref("list", "input")}} attribute. This doesn't limit the user to those options, but does allow them to select commonly-used e-mail addresses more quickly. This also offers hints to {{htmlattrxref("autocomplete", "input")}}. The `list` attribute specifies the ID of a {{HTMLElement("datalist")}}, which in turn contains one {{HTMLElement("option")}} element per suggested value; each `option`'s `value` is the corresponding suggested value for the email entry box.

<pre class="brush: html notranslate">&lt;input type="email" size="40" list="defaultEmails"&gt;

&lt;datalist id="defaultEmails"&gt;
  &lt;option value="jbond007@mi6.defence.gov.uk"&gt;
  &lt;option value="jbourne@unknown.net"&gt;
  &lt;option value="nfury@shield.org"&gt;
  &lt;option value="tony@starkindustries.com"&gt;
  &lt;option value="hulk@grrrrrrrr.arg"&gt;
&lt;/datalist&gt;</pre>

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

With the {{HTMLElement("datalist")}} element and its {{HTMLElement("option")}}s in place, the browser will offer the specified values as potential values for the e-mail address; this is typically presented as a popup or drop-down menu containing the suggestions. While the specific user experience may vary from one browser to another, typically clicking in the edit box presents a drop-down of the suggested e-mail addresses. Then, as the user types, the list is filtered to show only matching values. Each typed character narrows down the list until the user makes a selection or types a custom value.

<img alt="Animation: Using keyboard entry to filter the list of suggested e-mail addresses" src="https://mdn.mozillademos.org/files/14831/html-input-email1.gif" style="border-style: solid; border-width: 1px; height: 168px; width: 352px;">

<h2 id="Validation" name="Validation">検証</h2>

There are two levels of content validation available for `email` inputs. First, there's the standard level of validation offered to all {{HTMLElement("input")}}s, which automatically ensures that the contents meet the requirements to be a valid e-mail address. But there's also the option to add additional filtering to ensure that your own specialized needs are met, if you have any.

<div class="warning">
<strong>重要</strong>: HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用にはなりません。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ (または大きすぎるデータ、間違った種類のデータなど) がデータベースに入力された場合に災害が発生するおそれがあります。
</div>

<h3 id="Basic_validation" name="Basic_validation">基本的な検証</h3>

Browsers that support the `email` input type automatically provide validation to ensure that only text that matches the standard format for Internet e-mail addresses is entered into the input box. Browsers that implement the specification should be using an algorithm equivalent to the following regular expression:

<pre class="brush: js notranslate">/^[a-zA-Z0-9.!#$%&amp;'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
  [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
</pre>

To learn more about how form validation works and how to take advantage of the {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS properties to style the input based on whether or not the current value is valid, see [Form data validation](/ja/docs/Learn/HTML/Forms/Form_validation).

<div class="note">
<strong>Note</strong>: There are known specification issues related to international domain names and the validation of e-mail addresses in HTML. See [W3C bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) for details.
</div>

<h3 id="Pattern_validation" name="Pattern_validation">パターンによる値検証</h3>

If you need the entered e-mail address to be restricted further than just "any string that looks like an e-mail address," you can use the {{htmlattrxref("pattern", "input")}} attribute to specify a {{Glossary("regular expression")}} the value must match for it to be valid. If the {{htmlattrxref("multiple", "input")}} attribute is specified, each individual item in the comma-delineated list of values must match the {{Glossary("regular expression")}}.

For example, let's say you're building a page for employees of Best Startup Ever, Inc. which will let them contact their IT department for help. In our simplified form, the user needs to enter their e-mail address and a message describing the problem they need help with. We want to ensure that not only does the user provide a valid e-mail address, but for security purposes, we require that the address be an internal corporate e-mail address.

Since inputs of type `email` validate against both the standard e-mail address validation <em>and</em> the specified {{htmlattrxref("pattern", "input")}}, you can implement this easily. Let's see how:

<div class="hidden">
<pre class="brush: css notranslate">body {
  font: 16px sans-serif;
}

.emailBox {
  padding-bottom: 20px;
}

.messageBox {
  padding-bottom: 20px;
}

label {
  line-height: 22px;
}

label::after {
  content: ":";
}</pre>
</div>

<pre class="brush: html notranslate">&lt;form&gt;
 &lt;div class="emailBox"&gt;
   &lt;label for="emailAddress"&gt;Your e-mail address&lt;/label&gt;&lt;br&gt;
   &lt;input id="emailAddress" type="email" size="64" maxLength="64" required
          placeholder="username@beststartupever.com" pattern=".+@beststartupever.com"
          title="Please provide only a Best Startup Ever corporate e-mail address"&gt;
 &lt;/div&gt;

 &lt;div class="messageBox"&gt;
   &lt;label for="message"&gt;Request&lt;/label&gt;&lt;br&gt;
   &lt;textarea id="message" cols="80" rows="8" required
             placeholder="My shoes are too tight, and I have forgotten how to dance."&gt;&lt;/textarea&gt;
 &lt;/div&gt;
  &lt;input type="submit" value="Send Request"&gt;
&lt;/form&gt;
</pre>

{{EmbedLiveSample("Pattern_validation", 700, 275)}}

Our {{HTMLElement("form")}} contains one {{HTMLElement("input")}} of type `email` for the user's e-mail address, a {{HTMLElement("textarea")}} to enter their message for IT into, and an `&lt;input&gt;` of type `["submit"](/ja/docs/Web/HTML/Element/input/submit)`, which creates a button to submit the form. Each text entry box has a {{HTMLElement("label")}} associated with it to let the user know what's expected of them.

Let's take a closer look at the e-mail address entry box. Its {{htmlattrxref("size", "input")}} and {{htmlattrxref("maxlength", "input")}} attributes are both set to 64 in order to show room for 64 characters worth of e-mail address, and to limit the number of characters actually entered to a maximum of 64. The {{htmlattrxref("required", "input")}} attribute is specified, making it mandatory that a valid e-mail address be provided.

An appropriate {{htmlattrxref("placeholder", "input")}} is provided—`username@beststartupever.com`—to demonstrate what constitutes a valid entry. This string demonstrates both that an e-mail address should be entered, and suggests that it should be a corporate beststartupever.com account. This is in addition to the fact that using type `email` will validate the text to ensure that it's formatted like an e-mail address. If the text in the input box isn't an e-mail address, you'll get an error message that looks something like this:

<img alt="" src="https://mdn.mozillademos.org/files/14855/enter-valid-email-address.png" style="height: 125px; width: 530px;">

If we left things at that, we would at least be validating on legitimate e-mail addresses. But we want to go one step farther: we want to make sure that the e-mail address is in fact in the form "<em>username</em>@beststartupever.com". This is where we'll use {{htmlattrxref("pattern", "input")}}. We set `pattern` to `.+@beststartupever.com`. This simple regular expression requests a string that consists of at least one character of any kind, then an "@" followed by the domain name "beststartupever.com".

Note that this is not even close to an adequate filter for valid e-mail addresses; it would allow things such as " @beststartupever.com" (note the leading space) or "@@beststartupever.com", neither of which is valid. However, the browser runs both the standard e-mail address filter <em>and</em> our custom pattern against the specified text. As a result, we wind up with a validation which says "make sure this resembles a valid e-mail address, and if it is, make sure it's also a beststartupever.com address."

It's advisable to use the {{htmlattrxref("title")}} attribute along with `pattern`. If you do, the `title` <em>must</em> describe the pattern. That is, it should explain what format the data should take on, rather than any other information. That's because the `title` may be displayed or spoken as part of a validation error message. For example, the browser might present the message "The entered text doesn't match the required pattern." followed by your specified `title`. If your `title` is something like "E-mail address", the result would be the message "The entered text doesn't match the required pattern. E-mail address", which isn't very good.

That's why, instead, we specify the string "Please provide only a Best Startup Ever corporate e-mail address" By doing that, the resulting full error message might be something like "The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate e-mail address."

<img alt="" src="https://mdn.mozillademos.org/files/14853/email-pattern-match-bad.png" style="height: 140px; width: 536px;">

<div class="note">
<strong>Note</strong>: If you run into trouble while writing your validation regular expressions and they're not working properly, check your browser's console; there may be helpful error messages there to aid you in solving the problem.
</div>

<h2 id="Examples" name="Examples">例</h2>

Here we have an email input with the ID `emailAddress` which is allowed to be up to a maximum of 256 characters long. The input box itself is physically 64 characters wide, and displays the text `user@example.gov` as a placeholder anytime the field is empty. In addition, by using the `[multiple](/ja/docs/Web/HTML/Attributes/multiple)` attribute, the box is configured to allow the user to enter zero or more e-mail addresses, separated by commas, as described in {{anch("Allowing multiple e-mail addresses")}}. As a final touch, the `[list](/ja/docs/Web/HTML/Attributes/list)` attribute contains the ID of a {{HTMLElement("datalist")}} whose {{HTMLElement("option")}}s specify a set of suggested values the user can choose from.

As an added touch, the {{HTMLElement("label")}} element is used to establish a label for the email entry box, with its {{htmlattrxref("for", "label")}} attribute referencing the `emailAddress` ID of the {{HTMLElement("input")}} element. By associating the two elements in this way, clicking on the label will focus the input element.

<pre class="brush: html notranslate">&lt;label for="emailAddress"&gt;Email&lt;/label&gt;&lt;br/&gt;
&lt;input id="emailAddress" type="email" placeholder="user@example.gov"
       list="defaultEmails" size="64" maxlength="256" multiple&gt;

&lt;datalist id="defaultEmails"&gt;
  &lt;option value="jbond007@mi6.defence.gov.uk"&gt;
  &lt;option value="jbourne@unknown.net"&gt;
  &lt;option value="nfury@shield.org"&gt;
  &lt;option value="tony@starkindustries.com"&gt;
  &lt;option value="hulk@grrrrrrrr.arg"&gt;
&lt;/datalist&gt;</pre>

{{EmbedLiveSample('Examples', 600, 50)}}

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
   <td>{{SpecName('HTML WHATWG', '#email-state-(type=email)', '&lt;input type="email"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName('HTML5.1', 'sec-forms.html#email-state-typeemail', '&lt;input type="email"&gt;')}}</td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("html.elements.input.input-email")}}

## 関連情報

<ul>
 <li>[HTML フォームガイド](/ja/docs/Learn/HTML/Forms)</li>
 <li>{{HTMLElement("input")}}</li>
 <li>`[&lt;input type="tel"&gt;](/ja/docs/Web/HTML/Element/input/tel)`</li>
 <li>`[&lt;input type="url"&gt;](/ja/docs/Web/HTML/Element/input/url)`</li>
 <li>Attributes:
  <ul>
   <li>`[list](/ja/docs/Web/HTML/Attributes/list)`</li>
   <li>`[minlength](/ja/docs/Web/HTML/Attributes/minlength)`</li>
   <li>`[maxlength](/ja/docs/Web/HTML/Attributes/maxlength)`</li>
   <li>`[multiple](/ja/docs/Web/HTML/Attributes/multiple)`</li>
   <li>`[pattern](/ja/docs/Web/HTML/Attributes/pattern)`</li>
   <li>`[placeholder](/ja/docs/Web/HTML/Attributes/placeholder)`</li>
   <li>`[readonly](/ja/docs/Web/HTML/Attributes/readonly)`</li>
   <li>`[size](/ja/docs/Web/HTML/Attributes/size)`</li>
  </ul>
 </li>
 <li>[Compatibility of CSS properties](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)</li>
</ul>
