---
title: '`<input type="radio">` 属性値'
short-title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: 29f7a9f90986462f6b3df9ee8e25cf4ecf3a12f7
---

{{htmlelement("input")}} 要素の **`radio`** 型は、一般に**ラジオグループ**、すなわち関連する一連の選択肢を示すラジオボタンの集まりに使用されます。

グループ内で選択できるラジオボタンは、同時に 1 つだけです。ラジオボタンは通常、小さな円で表示され、選択されると塗りつぶされるか、強調表示されます。

{{InteractiveExample("HTML デモ: &lt;input type=&quot;radio&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>メンテナンス用ドローンを選択してください:</legend>

  <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">ヒューイ</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">デューイ</label>
  </div>

  <div>
    <input type="radio" id="louie" name="drone" value="louie" />
    <label for="louie">ルーイ</label>
  </div>
</fieldset>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

## 値

`value` 属性はラジオボタンの値を持つ文字列です。値は{{Glossary("User agent", "ユーザーエージェント")}}がユーザーに表示することはありません。代わりに、グループ内のどのラジオボタンが選択されているかを識別するために使用されます。

### ラジオグループの定義

ラジオグループは、グループ内のすべてのラジオボタンに同じ [`name`](/ja/docs/Web/HTML/Reference/Elements/input#name) を設定して定義します。ラジオグループができると、グループ内のラジオボタンを選択したとき、同じグループで現在選択されている別のラジオボタンは自動的に選択解除されます。

ページ内には、グループごとに固有の `name` を付ければ、いくつでもラジオグループを作成できます。

例えば、フォームでユーザーに希望する連絡方法を尋ねる場合、3 つのラジオボタンを作成し、それぞれの `name` 属性に `contact` を設定します。また、それぞれの [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) 属性には、`email`、`phone`、`mail` を設定します。ユーザーは、表示するコードを追加しない限り、`value` や `name` を見ることはありません。

最終的な HTML はこのようになります。

```html
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
</fieldset>
```

ここには 3 つのラジオボタンがあり、それぞれの `name` は `contact` に設定されています。また、各ラジオボタンを個別に識別するための固有の `value` と、固有の {{domxref("Element.id", "id")}} もあります。`id` は、{{HTMLElement("label")}} 要素の [`for`](/ja/docs/Web/HTML/Reference/Elements/label#for) 属性を使って、ラベルとラジオボタンを関連付けるために使用されます。

この例を試してみてください。

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### ラジオグループのデータ表現

上記のコントロールを含むフォームでラジオボタンが選択された状態で送信されると、フォームのデータには `contact=value` の形の項目が含まれます。例えば、ユーザーが「電話」ラジオボタンをクリックしてからフォームを送信すると、送信されたフォームデータに `contact=phone` が含まれます。

HTML で `value` 属性を省略すると、送信されたフォームデータのそのグループには `on` の値が割り当てられます。この場合、ユーザーが「電話」をクリックしてフォームを送信したのに、結果のフォームデータが `contact=on` となるため有益ではありません。ですから、 `value` 属性を設定することを忘れないようにしてください。

> [!NOTE]
> フォームが送信されたときにラジオボタンが全く選択されていないと、ラジオグループが送信されたフォームにまったく含まれず、報告される値がなくなります。

実際には、フォームがグループ内のラジオボタンをまったく選択しない状態で送信するのを許可することは一般的ではないので、デフォルトで一つを `checked` 状態を設定しておくことには意味があります。下記の[デフォルトのラジオボタンの選択](#デフォルトのラジオボタンの選択)を参照してください。

例に若干のコードを加えて、これらのコントロールで生成されるデータを確認できるようにしましょう。 HTML を変更して、コントロールを {{HTMLElement("form")}} で囲み、送信ボタンとフォームデータを出力するための {{HTMLElement("pre")}} を追加します。

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

form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]}=${entry[1]}\r`;
  }
  log.innerText = output;
  event.preventDefault();
});
```

この例を試して、`contact` グループの項目が 2 つ以上含まれないことを確認してください。

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## 追加の属性

すべての {{HTMLElement("input")}} 型で共通する属性に加え、 `radio` 型の入力は次の属性にも対応しています。

- `checked`
  - : 論理属性で、存在する場合、このラジオボタンがラジオグループ内でデフォルトで選択されることを示します。

    Firefox は他のブラウザーとは異なり、デフォルトでページ読み込みをまたがって `<input>` の[チェック状態を維持します](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。この機能を制御するには [`autocomplete`](/ja/docs/Web/HTML/Reference/Elements/input#autocomplete) 属性を使用してください。

- `value`
  - : `value` 属性はすべての {{HTMLElement("input")}} 要素に共通しますが、`radio` 型の入力では特別な役割があります。フォームの送信時には、現在チェックされているラジオボタンだけがサーバーに送信され、その値には `value` 属性の値が使われます。`value` が指定されていない場合、デフォルト値は文字列 `on` です。これは前述の[値](#value)の節で説明したとおりです。

- [`required`](/ja/docs/Web/HTML/Reference/Attributes/required)
  - : `required` 属性は、ほとんどの {{HTMLElement("input")}} に共通する属性です。同じ名前のラジオボタンのグループのいずれかに `required` 属性がある場合、そのグループのラジオボタンのいずれかをチェックする必要がありますが、その属性が適用されているラジオボタンをチェックする必要があるわけではありません。

## ラジオボタンの使用

ラジオボタンは、以下のように、古い型のラジオのプッシュボタンと外見や操作方法が似ています。

![古い時代のラジオボタンの外観を示します。](old-radio.jpg)

ラジオボタンは[チェックボックス](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)に似ていますが、重要な違いがあります。ラジオボタンは一組の中から 1 つの値を選択するように設計されていますが、チェックボックスでは個々の値をオンまたはオフにできます。複数のコントロールがある場合、ラジオボタンでは全体から 1 つを選択しますが、チェックボックスでは複数の値を選択できます。

上記で最も基本的なラジオボタンの使用方法を見てきました。他に必要になりそうなラジオボタンに関するよく使われる機能や技術を見てみましょう。

### デフォルトのラジオボタンの選択

ラジオボタンをデフォルトで選択状態にするには、単に `checked` 属性を加えるだけです。前回の例を更新するとこのようになります。

```html
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
</fieldset>
```

{{EmbedLiveSample('Selecting_a_radio_button_by_default', 600, 130)}}

この場合、最初のラジオボタンはデフォルトで選択されるようになります。

> [!NOTE]
> 複数のラジオボタンに `checked` 属性を指定した場合、後から指定したものが先に指定したものを上書きします。つまり、最後に `checked` されたラジオボタンが選択されることになります。これは、一度に選択できるラジオボタンはグループ内の 1 つだけであり、ユーザーエージェントは新しいラジオボタンがチェックされるたびに、他のラジオボタンの選択を自動的に解除するからです。

### ラジオボタンのヒット領域を大きくする

上記の例では、ラジオボタンそのものだけでなく、関連する {{htmlelement("label")}} 要素をクリックすることで、ラジオボタンを選択できることにお気づきでしょうか。これは HTML フォームのラベルの実に便利な機能で、特にスマートフォンのような画面の小さな機器では、ユーザーが望む選択肢をクリックしやすくなります。

アクセシビリティ上の利点に加えて、フォームで `<label>` 要素を適切に設定する理由がもう 1 つあります。

## 検証

[`required`](/ja/docs/Web/HTML/Reference/Attributes/required) 属性が設定されたラジオボタンの場合、または同じ名前のラジオボタンのグループで、そのうちの 1 つ以上に `required` が設定されている場合、このコントロールが有効とみなされるにはラジオボタンが選択されている必要があります。どのラジオボタンもチェックされていない場合、バリデーション中に {{domxref("ValidityState")}} オブジェクトの [`valueMissing`](/ja/docs/Web/API/ValidityState/valueMissing) プロパティが `true` を返し、ブラウザーがユーザーにオプションの選択を要求します。

## ラジオボタンのスタイル設定

次の例は、この記事で見てきた例を少し詳しくしたものです。スタイルを追加し、専用の要素を使ってより適切な意味付けをしています。HTML は次のようになります。

```html
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
</fieldset>
```

この例では、CSS のコードが少し多くなっています。

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

  border: 2px solid #999999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}
```

ここで特に注目すべきなのは、{{cssxref("appearance")}} プロパティ（一部のブラウザーへの対応に必要なベンダー接頭辞付き）を使用している点です。デフォルトでは、ラジオボタン（と[チェックボックス](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)）には、オペレーティングシステムの標準スタイルが適用されます。`appearance: none` を指定すると、標準スタイルを完全に削除して、独自のスタイルを作成できます。ここでは、{{cssxref("border")}}、{{cssxref("border-radius")}}、{{cssxref("transition")}} を使って、選択状態がアニメーションするラジオボタンを作成しています。また、選択時のラジオボタンの外観の指定に {{cssxref(":checked")}} 擬似クラスを使用しています。

> [!NOTE]
> {{cssxref("appearance")}} プロパティを使用する場合は、十分にテストしてください。このプロパティはほとんどの最新ブラウザーで対応していますが、実装には大きな違いがあります。古いブラウザーでは、`none` キーワードの効果もブラウザーによって異なり、このプロパティにまったく対応していないものもあります。最新ブラウザーでは、その違いは小さくなっています。

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

ラジオボタンをクリックすると、2 つのボタンの状態が変わるときに、滑らかなフェードアウト／フェードイン効果が現れます。また、凡例のスタイルと色は、コントラストが強くなるように変更されています。実際のウェブアプリケーションでは使わない外観かもしれませんが、実現できることを示しています。

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
      <td>{{domxref("HTMLElement/change_event", "change")}} および {{domxref("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        <code><a href="#checked">checked</a></code
        >, <code><a href="#value">value</a></code>,
        <code
          ><a href="/ja/docs/Web/HTML/Reference/Attributes/required">required</a></code
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
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role">radio</a></code>
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
