---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
---

{{HTMLRef("Input_types")}}

{{htmlelement("input")}} 要素の **`radio`** 型は、一般に**ラジオグループ**、すなわち関連するオプションの組み合わせを示すラジオボタンの集まりです。グループ内でラジオボタンは一つしか同時に選択することができません。ラジオボタンはふつう、小さな円で描かれ、選択されたら塗りつぶしや強調表示されます。

{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}

ラジオボタンと呼ばれるのは、以下のように外見や操作方法が古い型のラジオのプッシュボタンに似ているからです。

![古い時代のラジオボタンの外観を示します。](https://mdn.mozillademos.org/files/15610/old-radio.jpg)

> **メモ:** [**注**:](https://github.com/mdn/interactive-examples) [チェックボックス](/ja/docs/Web/HTML/Element/input/checkbox)はラジオボタンに似ていますが、重要な違いがあります。ラジオボタンは一組の中で一つの値を選択するように設計されているのに対し、チェックボックスは個別に値をオンまたはオフに設定できます。複数のコントロールが存在するところでは、ラジオボタンは全体の中で一つを選択できますが、チェックボックスは複数の値を選択することができます。

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#value">値</a></strong>
      </td>
      <td>ラジオボタンの値を表す {{domxref("DOMString")}}</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>{{event("change")}} および {{event("input")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td><code>checked</code> および <code>value</code></td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <code><a href="#checked">checked</a></code> および
        <code><a href="#value">value</a></code>
      </td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## 値

`value` 属性はラジオボタンの値を持つ {{domxref("DOMString")}} です。値は{{Glossary("user agent", "ユーザーエージェント")}}がユーザーに表示することはありません。代わりに、グループ内のどのラジオボタンが選択されているかを識別するために使用されます。

### ラジオグループの定義

ラジオグループは、グループ内のそれぞれのラジオボタンに同じ {{htmlattrxref("name", "input")}} を設定することで定義します。ラジオグループが確立されると、グループ内のラジオボタンを選択すると、同じグループの現在選択されているラジオボタンが自動的に選択解除されます。

ページ内には、固有の `name` を持っている限り、好きなだけの数のラジオグループを作成することができます。

例えば、フォームでユーザーに希望する問い合わせ方法を尋ねる必要がある場合、3 つのラジオボタンを作成し、それぞれの `name` プロパティに `contact` を設定しますが、1 つは {{htmlattrxref("value", "input")}} を `email` に、1 つは value を `phone` に、1 つは value を `mail` に設定します。ユーザーは `value` または `name` を見ることはありません (表示させるコードを追加しない限り)。

最終的な HTML はこのようになります。

```html
<form>
  <p>希望する連絡方法を選択してください。</p>
  <div>
    <input type="radio" id="contactChoice1"
     name="contact" value="email">
    <label for="contactChoice1">電子メール</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="phone">
    <label for="contactChoice2">電話</label>

    <input type="radio" id="contactChoice3"
     name="contact" value="mail">
    <label for="contactChoice3">郵便</label>
  </div>
  <div>
    <button type="submit">送信</button>
  </div>
</form>
```

ここでは三つのラジオボタンがあり、それぞれの `name` が `contact` に設定されており、それぞれのラジオボタンを個別に識別するための固有の `value` を持っています。それぞれは固有の {{domxref("Element.id", "id")}} も持っており、 {{HTMLElement("label")}} 要素の {{htmlattrxref("for", "label")}} 属性でラジオボタンにラベルを結びつけるために使われます。

この例をこちらで試すことができます。

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### ラジオグループのデータ表現

ラジオボタンが選択された状態で上記のフォームが送信されると、フォームのデータには `contact=value` の形の項目が含まれます。例えば、ユーザーが「電話」ラジオボタンをクリックしてからフォームを送信すると、フォームのデータには `contact=phone` という行が含まれます。

HTML で `value` 属性を省略すると、送信されたフォームデータのそのグループには `on` の値が割り当てられます。この場合、ユーザーが「電話」をクリックしてフォームを送信したのに、結果のフォームデータが `contact=on` となるため有益ではありません。ですから、 `value` 属性を設定することを忘れないようにしてください。

> **メモ:** フォームが送信されたときにラジオボタンが全く選択されていないと、ラジオグループが送信されたフォームにまったく含まれず、報告される値がなくなります。

実際には、フォームがグループ内のラジオボタンをまったく選択しない状態で送信するのを許可することは一般的ではないので、既定で一つを `checked` 状態を設定しておくことには意味があります。下記の[既定のラジオボタンの選択](#selecting_a_radio_button_by_default)を参照してください。

例に若干のコードを加えて、このフォームで生成されるデータを確認できるようにしましょう。 HTML を変更して、フォームデータを出力するための {{HTMLElement("pre")}} を追加します。

```html
<form>
  <p>希望する連絡方法を選択してください。</p>
  <div>
    <input type="radio" id="contactChoice1"
           name="contact" value="email">
    <label for="contactChoice1">電子メール</label>
    <input type="radio" id="contactChoice2"
           name="contact" value="phone">
    <label for="contactChoice2">電話</label>
    <input type="radio" id="contactChoice3"
           name="contact" value="mail">
    <label for="contactChoice3">郵便</label>
  </div>
  <div>
    <button type="submit">送信</button>
  </div>
</form>
<pre id="log">
</pre>
```

それから、いくらかの [JavaScript](/ja/docs/Web/JavaScript) を追加して、ユーザーが「送信」ボタンをクリックしたときに発生する {{domxref("HTMLFormElement/submit_event", "submit")}} イベントのイベントリスナーを設定します。

```js
var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = output + entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);
```

この例を試してみて、 `contact` グループに二つ以上の結果が出ないことを確認してください。

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## 追加の属性

すべての {{HTMLElement("input")}} 型で共通する属性に加え、 `radio` 型の入力は次の属性にも対応しています。

| 属性                  | 説明                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| [`checked`](#checked) | 論理属性で、このラジオボタンがグループ内で項目が現在選択されているかどうかを示す                   |
| [`value`](#value)     | ラジオボタンがオンになっている場合に、フォームを投稿したときラジオボタンの値として使用される文字列 |

### {{htmlattrdef("checked")}}

論理属性で、もしあれば、このラジオボタンがラジオグループ内で現在選択されているものであることを示します。

他のブラウザーとは異なり、 Firefox は既定でページ読み込みを通して `<input>` の[チェック状態を維持します](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。この機能を制御するには {{htmlattrxref("autocomplete","input")}} 属性を使用してください。

### {{htmlattrdef("value")}}

`value` はすべての {{HTMLElement("input")}} で共通のものの一つです。しかし、 `radio` 型の入力欄では特別な目的になります。フォームが送信されるとき、現在チェックされているラジオボタンのみがサーバーに送信され、報告される値は `value` 属性の値になります。 `value` が指定されていない場合は、既定で `on` という文字列になります。これは前述の[値](#value)の節で説明しています。

## ラジオボタンの使用

上記で最も基本的なラジオボタンの使用方法を見てきました。他に必要になりそうなラジオボタンに関するよく使われる機能や技術を見てみましょう。

### 既定のラジオボタンの選択

ラジオボタンを既定で選択状態にするには、単に `checked` 属性を加えるだけです。前回の例を更新するとこのようになります。

```html
<form>
  <p>希望する連絡方法を選択してください。</p>
  <div>
    <input type="radio" id="contactChoice1"
     name="contact" value="email" checked>
    <label for="contactChoice1">電子メール</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="phone">
    <label for="contactChoice2">電話</label>

    <input type="radio" id="contactChoice3"
     name="contact" value="mail">
    <label for="contactChoice3">郵便</label>
  </div>
  <div>
    <button type="submit">送信</button>
  </div>
</form>
```

{{EmbedLiveSample('Selecting_a_radio_button_by_default', 600, 130)}}

In this case, the first radio button is now selected by default.

> **メモ:** If you put the `checked` attribute on more than one radio button, later instances will override earlier ones; that is, the last `checked` radio button will be the one that is selected. This is because only one radio button in a group can ever be selected at once, and the user agent automatically deselects others each time a new one is marked as checked.

### ラジオボタンのヒット領域を大きくする

In the above examples, you may have noticed that you can select a radio button by clicking on its associated {{htmlelement("label")}} element, as well as on the radio button itself. This is a really useful feature of HTML form labels that makes it easier for users to click the option they want, especially on small-screen devices like smartphones.

Beyond accessibility, this is another good reason to properly set up `<label>` elements on your forms.

## 検証

Radio buttons don't participate in constraint validation; they have no real value to be constrained.

## ラジオボタンの整形

The following example shows a slightly more thorough version of the example we've seen throughout the article, with some additional styling, and with better semantics established through use of specialized elements. The HTML looks like this:

```html
<form>
  <fieldset>
    <legend>希望する連絡方法を選択してください。</legend>
    <div>
      <input type="radio" id="contactChoice1"
       name="contact" value="email" checked>
      <label for="contactChoice1">電子メール</label>

      <input type="radio" id="contactChoice2"
       name="contact" value="phone">
      <label for="contactChoice2">電話</label>

      <input type="radio" id="contactChoice3"
       name="contact" value="mail">
      <label for="contactChoice3">郵便</label>
    </div>
    <div>
      <button type="submit">送信</button>
    </div>
  </fieldset>
</form>
```

There's not much new to note here except for the addition of {{htmlelement("fieldset")}} and {{htmlelement("legend")}} elements, which help to group the functionality nicely and in a semantic way.

The CSS involved is a bit more significant:

```css
html {
  font-family: sans-serif;
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  margin-right: 15px;
  line-height: 32px;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

button,
legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}

button:hover,
button:focus {
  color: #999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
```

Most notable here is the use of the {{cssxref("-moz-appearance")}} property (with prefixes needed to support some browsers). By default, radio buttons (and [checkboxes](/ja/docs/Web/HTML/Element/input/checkbox)) are styled with the operating system's native styles for those controls. By specifying `appearance: none`, you can remove the native styling altogether, and create your own styles for them. Here we've used a {{cssxref("border")}} along with {{cssxref("border-radius")}} and a {{cssxref("transition")}} to create a nice animating radio selection. Notice also how the {{cssxref(":checked")}} pseudo-class is used to specify the styles for the radio button's appearance when selected.

> **メモ:** **Compatibility note**: If you wish to use the {{cssxref("appearance")}} property, you should test it very carefully. Although it is supported in most modern browsers, its implementation varies widely. In older browsers, even the keyword `none` does not have the same effect across different browsers, and some do not support it at all. The differences are smaller in the newest browsers.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Notice that when clicking on a radio button, there's a nice, smooth fade out/in effect as the two buttons change state. In addition, the style and coloring of the legend and submit button are customized to have strong contrast. This might not be a look you'd want in a real web application, but it definitely shows off the possibilities.

## 仕様書

| 仕様書                                                                                                                                   | 状態                             |     |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --- |
| {{SpecName('HTML WHATWG', 'forms.html#radio-button-state-(type=radio)', '&lt;input type="radio"&gt;')}} | {{Spec2('HTML WHATWG')}} |     |
| {{SpecName('HTML5 W3C', 'forms.html#radio-button-state-(type=radio)', '&lt;input type="radio"&gt;')}} | {{Spec2('HTML5 W3C')}}     |     |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} およびそれが実装している {{domxref("HTMLInputElement")}} インターフェイス
- {{domxref("RadioNodeList")}}: ラジオボタンのリストを表現するインターフェイス
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
