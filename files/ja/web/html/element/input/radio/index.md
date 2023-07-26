---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
l10n:
  sourceCommit: fa8a44b8bff24a4032181c4fd155c459c0dc9161
---

{{HTMLSidebar}}

{{htmlelement("input")}} 要素の **`radio`** 型は、一般に**ラジオグループ**、すなわち関連するオプションの組み合わせを示すラジオボタンの集まりです。グループ内でラジオボタンは一つしか同時に選択することができません。ラジオボタンはふつう、小さな円で描かれ、選択されたら塗りつぶされたりや強調表示されたりします。

{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}

ラジオボタンと呼ばれるのは、以下のように外見や操作方法が古い型のラジオのプッシュボタンに似ているからです。

![古い時代のラジオボタンの外観を示します。](old-radio.jpg)

> **メモ:** [チェックボックス](/ja/docs/Web/HTML/Element/input/checkbox)はラジオボタンに似ていますが、重要な違いがあります。ラジオボタンは一組の中で一つの値を選択するように設計されているのに対し、チェックボックスは個別に値をオンまたはオフに設定できます。複数のコントロールが存在するところでは、ラジオボタンは全体の中で一つを選択できますが、チェックボックスは複数の値を選択することができます。

## 値

`value` 属性はラジオボタンの値を持つ文字列です。値は{{Glossary("user agent", "ユーザーエージェント")}}がユーザーに表示することはありません。代わりに、グループ内のどのラジオボタンが選択されているかを識別するために使用されます。

### ラジオグループの定義

ラジオグループは、グループ内のそれぞれのラジオボタンに同じ [`name`](/ja/docs/Web/HTML/Element/input#name) を設定することで定義します。ラジオグループが確立されると、グループ内のラジオボタンを選択すると、同じグループの現在選択されているラジオボタンが自動的に選択解除されます。

ページ内には、固有の `name` を持っている限り、好きなだけの数のラジオグループを作成することができます。

例えば、フォームでユーザーに希望する問い合わせ方法を尋ねる必要がある場合、3 つのラジオボタンを作成し、それぞれの `name` プロパティに `contact` を設定しますが、1 つは [`value`](/ja/docs/Web/HTML/Element/input#value) を `email` に、1 つは value を `phone` に、1 つは value を `mail` に設定します。ユーザーは `value` または `name` を見ることはありません（表示させるコードを追加しない限り）。

最終的な HTML はこのようになります。

```html
<form>
  <fieldset>
    <legend>希望する連絡方法を選択してください。</legend>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">メール</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">電話</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">郵便</label>
    </div>
    <div>
      <button type="submit">送信</button>
    </div>
  </fieldset>
</form>
```

ここでは三つのラジオボタンがあり、それぞれの `name` が `contact` に設定されており、それぞれのラジオボタンを個別に識別するための固有の `value` を持っています。それぞれは固有の {{domxref("Element.id", "id")}} も持っており、 {{HTMLElement("label")}} 要素の [`for`](/ja/docs/Web/HTML/Element/label#for) 属性でラジオボタンにラベルを結びつけるために使われます。

この例をこちらで試すことができます。

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### ラジオグループのデータ表現

ラジオボタンが選択された状態で上記のフォームが送信されると、フォームのデータには `contact=value` の形の項目が含まれます。例えば、ユーザーが「電話」ラジオボタンをクリックしてからフォームを送信すると、フォームのデータには `contact=phone` という行が含まれます。

HTML で `value` 属性を省略すると、送信されたフォームデータのそのグループには `on` の値が割り当てられます。この場合、ユーザーが「電話」をクリックしてフォームを送信したのに、結果のフォームデータが `contact=on` となるため有益ではありません。ですから、 `value` 属性を設定することを忘れないようにしてください。

> **メモ:** フォームが送信されたときにラジオボタンが全く選択されていないと、ラジオグループが送信されたフォームにまったく含まれず、報告される値がなくなります。

実際には、フォームがグループ内のラジオボタンをまったく選択しない状態で送信するのを許可することは一般的ではないので、既定で一つを `checked` 状態を設定しておくことには意味があります。下記の[既定のラジオボタンの選択](#既定のラジオボタンの選択)を参照してください。

例に若干のコードを加えて、このフォームで生成されるデータを確認できるようにしましょう。 HTML を変更して、フォームデータを出力するための {{HTMLElement("pre")}} を追加します。

```html
<form>
  <fieldset>
    <legend>希望する連絡方法を選択してください。</legend>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">メール</label>
      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">電話</label>
      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">郵便</label>
    </div>
    <div>
      <button type="submit">送信</button>
    </div>
  </fieldset>
</form>
<pre id="log"></pre>
```

それから、いくらかの [JavaScript](/ja/docs/Web/JavaScript) を追加して、ユーザーが「送信」ボタンをクリックしたときに発生する {{domxref("HTMLFormElement/submit_event", "submit")}} イベントのイベントリスナーを設定します。

```js
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = output;
    event.preventDefault();
  },
  false
);
```

この例を試してみて、 `contact` グループに二つ以上の結果が出ないことを確認してください。

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## 追加の属性

すべての {{HTMLElement("input")}} 型で共通する属性に加え、 `radio` 型の入力は次の属性にも対応しています。

- `checked`

  - : 論理属性で、もしあれば、このラジオボタンがラジオグループ内で現在選択されているものであることを示します。

    Firefox は他のブラウザーとは異なり、既定でページ読み込みをまたがって `<input>` の[チェック状態を維持します](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。この機能を制御するには [`autocomplete`](/ja/docs/Web/HTML/Element/input#autocomplete) 属性を使用してください。

- `value`

`value` はすべての {{HTMLElement("input")}} で共通のものの一つです。しかし、`radio` 型の入力欄では特別な目的になります。フォームが送信されるとき、現在チェックされているラジオボタンのみがサーバーに送信され、報告される値は `value` 属性の値になります。 `value` が指定されていない場合は、既定で `on` という文字列になります。これは以前に[値](#value)の節で説明した通りです。

- `required`
  - : `required` 属性は、ほとんどの {{HTMLElement("input")}} に共通する属性です。同じ名前のラジオボタンのグループのいずれかに `required` 属性がある場合、そのグループのラジオボタンのいずれかをチェックする必要がありますが、その属性が適用されているラジオボタンをチェックする必要があるわけではありません。

## ラジオボタンの使用

上記で最も基本的なラジオボタンの使用方法を見てきました。他に必要になりそうなラジオボタンに関するよく使われる機能や技術を見てみましょう。

### 既定のラジオボタンの選択

ラジオボタンを既定で選択状態にするには、単に `checked` 属性を加えるだけです。前回の例を更新するとこのようになります。

```html
<form>
  <fieldset>
    <legend>希望する連絡方法を選択してください。</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">メール</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">電話</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">郵便</label>
    </div>
    <div>
      <button type="submit">送信</button>
    </div>
  </fieldset>
</form>
```

{{EmbedLiveSample('Selecting_a_radio_button_by_default', 600, 130)}}

この場合、最初のラジオボタンは既定で選択されるようになります。

> **メモ:** 複数のラジオボタンに `checked` 属性を指定した場合、後から指定したものが先に指定したものを上書きします。つまり、最後に `checked` されたラジオボタンが選択されることになります。これは、一度に選択できるラジオボタンはグループ内の 1 つだけであり、ユーザーエージェントは新しいラジオボタンがチェックされるたびに、他のラジオボタンの選択を自動的に解除するからです。

### ラジオボタンのヒット領域を大きくする

上記の例では、ラジオボタンそのものだけでなく、関連する {{htmlelement("label")}} 要素をクリックすることで、ラジオボタンを選択できることにお気づきでしょうか。これは HTML フォームのラベルの実に便利な機能で、特にスマートフォンのような画面の小さな機器では、ユーザーが望む選択肢をクリックしやすくなります。

アクセシビリティを越えて、このこともフォームに `<label>` 要素を適切に設定する良い理由です。

## 検証

ラジオボタンは制約の検証に参加しません。制約されるべき実際の値を持ちません。

## ラジオボタンの整形

以下の例は、この記事を通して見てきた例を少し徹底させたもので、スタイルを追加し、特殊な要素を使用することでより良い意味づけを確立しています。 HTML はこのようになっています。

```html
<form>
  <fieldset>
    <legend>希望する連絡方法を選択してください。</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">メール</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">電話</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">郵便</label>
    </div>
    <div>
      <button type="submit">送信</button>
    </div>
  </fieldset>
</form>
```

この例では、 CSS が絡んでいるのが少し特徴的です。

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

ここで最も注目すべきは、{{cssxref("appearance")}} プロパティ（一部のブラウザーで対応しているために必要な接頭辞付き）を使用している点です。既定で、ラジオボタン（と[チェックボックス](/ja/docs/Web/HTML/Element/input/checkbox)）は、それらのコントロールのためのオペレーティングシステムのネイティブスタイルでスタイル設定されています。 `appearance: none` を指定することで、ネイティブのスタイル設定を完全に削除し、自分自身でスタイルを作成することができます。ここでは、 {{cssxref("border")}} と {{cssxref("border-radius")}} と {{cssxref("transition")}} を使用して、ラジオ選択のアニメーションがあるように作成しています。また、 {{cssxref(":checked")}} 擬似クラスが、選択時のラジオボタンの外観のスタイルを指定するために使用されていることに注目してください。

> **メモ:** もし {{cssxref("appearance")}} プロパティを使用したい場合は、とても慎重にテストする必要があります。このプロパティはほとんどの現代のブラウザーで対応していますが、その実装は大きく異なっています。古いブラウザーでは、キーワード `none` でさえ異なる形で同じ効果を持たず、まったく対応していないブラウザーもあります。最新のブラウザーでは、そのような違いは小さくなっています。

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

ラジオボタンをクリックすると、 2 つのボタンの状態が変わるときに、きれいで滑らかなフェードアウト/イン効果があることに注意してください。さらに、凡例と送信ボタンのスタイルと色は、強いコントラストを保有するようにカスタマイズされています。これは、実際のウェブアプリケーションで使用したい外観ではないかもしれませんが、その可能性を示していることは間違いありません。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>
        ラジオボタンの値を表す文字列です。
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} および {{domxref("HTMLElement/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        <code><a href="#checked">checked</a></code
        >, <code><a href="#value">value</a></code>,
        <code
          ><a href="/ja/docs/Web/HTML/Attributes/required">required</a></code
        >
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>checked</code> および <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
     <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/radio_role">radio</a></code>
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} およびそれが実装している {{domxref("HTMLInputElement")}} インターフェイス
- {{domxref("RadioNodeList")}}: ラジオボタンのリストを表現するインターフェイス
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
