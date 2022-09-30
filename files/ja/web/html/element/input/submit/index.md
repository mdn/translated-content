---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} 要素の **`submit`** 型は、ボタンとして描画されます。 {{domxref("Element/click_event", "click")}} イベントが発生したとき (ふつうはユーザーがボタンをクリックしたとき)、{{Glossary("user agent", "ユーザーエージェント")}}はサーバーへフォームを送信しようとします。

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#value">値</a></strong>
      </td>
      <td>ボタンのラベルとして使用する {{domxref("DOMString")}}</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        {{htmlattrxref("type", "input")}} および
        {{htmlattrxref("value", "input")}}
      </td>
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

## 値

`<input type="submit">` 要素の {{htmlattrxref("value", "input")}} 属性は、ボタンのラベルとして表示される {{domxref("DOMString")}} を示します。ボタンはその他の真の値を持ちません。

```html
<input type="submit" value="Send Request">
```

{{EmbedLiveSample("summary-example3", 650, 30)}}

`value` を指定しなかった場合、ボタンにはユーザーエージェントによって選ばれた既定のラベルが表示されます。このラベルは「送信」または「クエリを送信」などのものです。次のものはこのブラウザーにおける送信ボタンの既定のラベルです。

```html
<input type="submit">
```

{{EmbedLiveSample("summary-example1", 650, 30)}}

## 追加の属性

すべての {{HTMLElement("input")}} 型で共通する属性に加え、 `submit` 型の入力欄は次の属性にも対応しています。

| 属性                                | 説明                                                                                                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`formaction`](#formaction)         | フォームのデータの送信先の URL。もしあれば、フォームの {{htmlattrxref("action", "form")}} 属性を上書きする                                            |
| [`formenctype`](#formenctype)       | 文字列で、フォームのデータに使用するエンコーディング型を指定                                                                                                    |
| [`formmethod`](#formmethod)         | フォームを送信する際に使用する HTTP メソッド ({{HTTPMethod("get")}} または {{HTTPMethod("post")}})                                                 |
| [`formnovalidate`](#formnovalidate) | 論理属性で、存在する場合、サーバーにデータを送信する前にフォームのフィールドに[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)をしないことを示す |
| [`formtarget`](#formtarget)         | フォームを送信した後で、サーバーから返されるレスポンスを読み込む先の{{Glossary("browsing context", "閲覧コンテキスト")}}            |

### {{htmlattrdef("formaction")}}

文字列で、データの送信先の URL を示します。これはこの {{HTMLElement("input")}} が属する {{HTMLElement("form")}} 要素の {{htmlattrxref("action", "form")}} 属性より優先します。

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

### {{htmlattrdef("formenctype")}}

文字列で、フォームのデータをサーバーに送信する際に使われるエンコーディング方法を識別します。許されている値は 3 つです。

- `application/x-www-form-urlencoded`
  - : これは既定値で、フォームのデータを {{jsxref("encodeURI", "encodeURI()")}} などのアルゴリズムを使って URL エンコーディングした後で送信します。
- `multipart/form-data`
  - : データを管理するために {{domxref("FormData")}} API を使用し、複数のファイルをサーバーに送信することができます。フォームに {{HTMLElement("input")}} 要素の {{htmlattrxref("type", "input")}}`=file` ([`<input type="file">`](/ja/docs/Web/HTML/Element/input/file)) が含まれている場合は、このエンコーディング型を*使わなければなりません*。
- `text/plain`
  - : プレーンテキストです。ほとんどデバッグでしか役に立ちませんが、送信されたデータを簡単に見ることができます。

`formenctype` 属性が指定された場合、所属するフォームの {{htmlattrxref("action", "form")}} 属性を上書きします。

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

### {{htmlattrdef("formmethod")}}

文字列で、フォームのデータを送信するときに使用する HTTP メソッドを示します。この値は所有者であるフォームの {{htmlattrxref("method", "form")}} を上書きします。許可されている値は次の通りです。

- `get`
  - : URL は `formaction` または {{htmlattrxref("action", "form")}} 属性で指定された URL に疑問符 ("?") を追加し、 `formenctype` または {{htmlattrxref("enctype", "form")}} 属性で指定された方法でエンコードされたフォームのデータが続くものになります。この URL は HTTP の {{HTTPMethod("get")}} リクエストを用いてサーバーに送信されます。このメソッドは ASCII 文字のみを含む単純なフォームでうまく動作し、副作用はありません。これが既定値です。
- `post`
  - : フォームのデータは、 `formaction` または {{htmlattrxref("action", "form")}} で指定された URL に HTTP の {{HTTPMethod("post")}} メソッドを用いて送信されるリクエストの本文に含められます。このメソッドは複雑なデータやファイルの添付に対応しています。
- `dialog`
  - : このメソッドは、入力欄が関連付けられたダイアログを閉じるだけで、フォームのデータをまったく送信しない場合ことを表すために使用します。

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

### {{htmlattrdef("formnovalidate")}}

A Boolean attribute which, if present, specifies that the form should not be validated before submission to the server. This overrides the value of the {{htmlattrxref("novalidate", "form")}} attribute on the element's owning form.

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

### {{htmlattrdef("formtarget")}}

A string which specifies a name or keyword that indicates where to display the response received after submitting the form. The string must be the name of a **browsing context** (that is, a tab, window, or {{HTMLElement("iframe")}}. A value specified here overrides any target given by the {{htmlattrxref("target", "form")}} attribute on the {{HTMLElement("form")}} that owns this input.

In addition to the actual names of tabs, windows, or inline frames, there are a few special keywords that can be used:

- `_self`
  - : Loads the response into the same browsing context as the one that contains the form. This will replace the current document with the received data. This is the default value used if none is specified.
- `_blank`
  - : Loads the response into a new, unnamed, browsing context. This is typically a new tab in the same window as the current document, but may differ depending on the configuration of the {{Glossary("user agent")}}.
- `_parent`
  - : Loads the response into the parent browsing context of the current one. If there is no parent context, this behaves the same as `_self`.
- `_top`
  - : Loads the response into the top-level browsing context; this is the browsing context that is the topmost ancestor of the current context. If the current context is the topmost context, this behaves the same as `_self`.

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

## submit ボタンの使用

`<input type="submit">` buttons are used to submit forms. If you want to create a custom button and then customize the behavior using JavaScript, you need to use [`<input type="button">`](/ja/docs/Web/HTML/Element/input/button), or better still, a {{htmlelement("button")}} element.

If you choose to use `<button>` elements to create the buttons in your form, keep this in mind: if there's only one `<button>` inside the {{HTMLElement("form")}}, that button will be treated as the "submit" button. So you should be in the habit of expressly specifying which button is the submit button.

### A simple submit button

We'll begin by creating a form with a simple submit button:

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text">
  </div>
  <div>
    <input type="submit" value="送信">
  </div>
</form>
```

次のように表示されます。

{{EmbedLiveSample("A_simple_submit_button", 650, 100)}}

テキストフィールドにいくらかテキストを入力してから、送信ボタンを押してみてください。

Upon submitting, the data name/value pair gets sent to the server. In this instance, the string will be `text=usertext`, where "usertext" is the text entered by the user, encoded to preserve special characters. Where and how the data is submitted depends on the configuration of the `<form>`; see [Sending form data](/ja/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data) for more details.

### Adding a submit keyboard shortcut

Keyboard shortcuts, also known as access keys and keyboard equivalents, let the user trigger a button using a key or combination of keys on the keyboard. To add a keyboard shortcut to a submit button — just as you would with any {{HTMLElement("input")}} for which it makes sense — you use the {{htmlattrxref("accesskey")}} global attribute.

In this example, <kbd>s</kbd> is specified as the access key (you'll need to press <kbd>s</kbd> plus the particular modifier keys for your browser/OS combination. In order to avoid conflicts with the user agent's own keyboard shortcuts, different modifier keys are used for access keys than for other shortcuts on the host computer. See {{htmlattrxref("accesskey")}} for further details.

Here's the previous example with the <kbd>s</kbd> access key added:

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text">
  </div>
  <div>
    <input type="submit" value="Send"
     accesskey="s">
  </div>
</form>
```

For example, in Firefox for Mac, pressing <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> triggers the Send button, while Chrome on Windows uses <kbd>Alt</kbd>+<kbd>S</kbd>.

{{EmbedLiveSample("Adding_a_submit_keyboard_shortcut", 650, 100)}}

The problem with the above example is that the user will not know what the access key is! This is especially true since the modifiers are typically non-standard to avoid conflicts. When building a site, be sure to provide this information in a way that doesn't interfere with the site design (for example by providing an easily accessible link that points to information on what the site access keys are). Adding a tooltip to the button (using the {{htmlattrxref("title")}} attribute) can also help, although it's not a complete solution for accessibility purposes.

### Disabling and enabling a submit button

To disable a submit button, simply specify the {{htmlattrxref("disabled")}} global attribute on it, like so:

```html
<input type="submit" value="Disabled" disabled>
```

You can enable and disable buttons at run time by simply setting `disabled` to `true` or `false`; in JavaScript this looks like `btn.disabled = true` or `btn.disabled = false`.

> **メモ:** See the [`<input type="button">`](/ja/docs/Web/HTML/Element/input/button#Disabling_and_enabling_a_button) page for more ideas about enabling and disabling buttons.

## 検証

送信ボタンは制約の検証には参加しません。制約を受ける実際の値を持っていません。

## 例

We've included simple examples above. There isn't really anything more to say about submit buttons. There's a reason this kind of control is sometimes called a "simple button."

## 仕様書

| 仕様書                                                                                                                                       | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'forms.html#submit-button-state-(type=submit)', '&lt;input type="submit"&gt;')}} | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'forms.html#submit-button-state-(type=submit)', '&lt;input type="submit"&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} およびそれが実装している {{domxref("HTMLInputElement")}} インターフェイス
- [フォームとボタン](/ja/docs/Learn/Forms/Basic_native_form_controls#Actual_buttons)
- [フォーム (アクセシビリティ)](/ja/docs/Web/Accessibility/ARIA/forms)
- [HTML フォーム](/ja/docs/Learn/HTML/Forms)
- {{HTMLElement("button")}} 要素
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
