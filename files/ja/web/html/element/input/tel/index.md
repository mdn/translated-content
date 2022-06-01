---
title: <input type="tel">
slug: Web/HTML/Element/input/tel
tags:
  - 要素
  - フォーム入力
  - フォーム
  - HTML
  - HTML フォーム
  - HTML input
  - Input
  - 入力要素
  - 入力型
  - Phone Numbers
  - リファレンス
browser-compat: html.elements.input.input-tel
translation_of: Web/HTML/Element/input/tel
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} 要素の **`tel`** 型は、ユーザーに電話番号を入力または編集させるために使用します。 [`<input type="email">`](/ja/docs/Web/HTML/Element/input/email) や [`<input type="url">`](/ja/docs/Web/HTML/Element/input/url) とは異なり、送信前に値が特定の書式であると自動的には検証されません。電話番号の書式は世界中で様々だからです。

{{EmbedInteractiveExample("pages/tabbed/input-tel.html", "tabbed-standard")}}

`tel` の入力欄は機能的に標準の `text` 入力欄と同じであるという事実にもかかわらず、便利な用途を提供します。もっとも手っ取り早く表れるのは、モバイルブラウザー — 特に携帯電話のもの — では、電話番号の入力に最適化された専用のキーパッドを表示することがあります。電話番号の専用の入力型を使用すると、カスタム検証を追加して電話番号の扱いをもっと便利にすることができます。

> **Note:** `tel` 型に対応していないブラウザーでは、通常の {{HTMLElement("input/text", "text")}} 入力欄で代用されます。

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#値">値</a></strong></td>
      <td>
        電話番号を表す {{domxref("DOMString")}}、または空欄
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("maxlength", "input")}},
        {{htmlattrxref("minlength", "input")}},
        {{htmlattrxref("pattern", "input")}},
        {{htmlattrxref("placeholder", "input")}},
        {{htmlattrxref("readonly", "input")}},
        {{htmlattrxref("size", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <code>list</code>, <code>selectionStart</code>,
        <code>selectionEnd</code>, <code>selectionDirection</code>,
        <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}},
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
      </td>
    </tr>
  </tbody>
</table>

## 値

{{HTMLElement("input")}} 要素の {{htmlattrxref("value", "input")}} 属性には、電話番号を表す文字列、または空文字列 (`""`) の {{domxref("DOMString")}} が入ります。

## 追加の属性

型に関係なくすべての {{HTMLElement("input")}} 要素を操作する属性に加え、電話番号型の入力欄は次の属性にも対応しています。

### list

list 属性の値は、同じ文書内にある {{HTMLElement("datalist")}} 要素の {{domxref("Element.id", "id")}} です。 {{HTMLElement("datalist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち {{htmlattrxref("type", "input")}} と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

### maxlength

ユーザーが電話番号欄に入力することができる（UTF-16 コード単位での）最大文字数です。 0 以上の整数値である必要があります。 `maxlength` が指定されていないか、無効な値が指定されていると、電話番号欄には最大文字数が設定されません。この値は `minlength` の値以上である必要もあります。

フィールドに入力された長さが UTF-16 コード単位で `maxlength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。

### minlength

ユーザーが電話番号欄に入力することができる（UTF-16 コード単位での）最小文字数です。これは非負の整数値で、 `maxlength` で指定された値以下である必要があります。 `minlength` が指定されていないか、無効な値が指定されていると、電話番号欄には最小文字数が設定されません。

入力欄のテキストの長さが UTF-16 コード単位で `minlength` の長さよりも短いと、電話番号欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。

### pattern

`pattern` 属性は、指定する場合は正規表現であり、入力欄の {{htmlattrxref("value")}} が[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に合格するためにはこれと一致しなければなりません。これは {{jsxref("RegExp")}} 型で使用される JavaScript の妥当な正規表現である必要があり、これは[正規表現のガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)で記述されています。正規表現がコンパイルされるときに `'u'` フラグが指定されるので、パターンは ASCII ではなく Unicode コードポイントの並びとして扱われます。パターンのテキストをスラッシュで囲んではいけません。

指定されたパターンがないかか無効である場合は、正規表現は適用されず、この属性は完全に無視されます。

> **Note:** {{htmlattrxref("title", "input")}} 属性を使用してテキストを指定すると、多くのブラウザーでパターンに一致する要件が何であるかを説明するツールチップを表示することができます。近くに他の説明テキストを配置する必要があります。

詳細と例については後述の[パターン検証](#パターン検証)を参照してください。

### placeholder

`placeholder` 属性は文字列で、その欄にどのような種類の情報が求められるかについてのユーザーに対する短いヒントを提供します。これは求められるデータの種類を紹介する一語または短い句であり、説明的なメッセージではありません。テキストには改行を含めることは<em>できません</em>。

コントロールの内容がある書字方向 ({{Glossary("LTR")}} または {{Glossary("RTL")}}) であるものの、プレイスホルダーを逆の方向に表示する必要がある場合、 Unicode 双方向アルゴリズム書式文字を使用してプレイスホルダーの中で書字方向を上書きすることができます。詳しくは、[双方向テキストでの Unicode コードの使い方（英語）](https://www.w3.org/International/questions/qa-bidi-unicode-controls)を参照してください。

> **Note:** 可能であれば `placeholder` を使用することは避けてください。フォームを説明する他の方法ほど意味論的に有益ではなく、コンテンツに予期しない技術的な問題を引き起こす可能性があります。詳しくは、[\<input>: 入力欄 (フォーム入力) 要素](/ja/docs/Web/HTML/Element/input)の[プレイスホルダーはアクセシブルではない](/ja/docs/Web/HTML/Element/input#プレイスホルダーはアクセシブルではない)を参照してください。

### readonly

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `value` は、 JavaScript コードから直接 {{domxref("HTMLInputElement")}} の `value` プロパティを設定することで変更することができます。

> **Note:** 読み取り専用フィールドは値を持てないため、 `required` は `readonly` 属性も指定されている入力欄には効果がありません。

### size

`size` 属性は数値であり、入力欄の幅を何文字分とするかを示します。値はゼロより大きな数値である必要があり、既定値は 20 です。文字の幅は様々であるため、これは正確ではない可能性もあり、依存することはできません。結果の入力欄は文字数やフォント（使用中の {{cssxref("font")}} 設定）によって、指定された文字数より狭くなったり広くなったりすることがあります。

これはユーザーがフィールドに入力することができる文字数の制限を設定するものではありません。これは一度に見える文字数をおよそ指定するだけです。入力データの長さの上限を設定するには、 [`maxlength`](#maxlength) 属性を使用してください。

## 標準外の属性

ブラウザーによっては、以下の標準外の属性が利用できます。一般的な規則として、できれば使用することを避けてください。

### autocorrect

Safari 拡張である `autocorrect` 属性は文字列で、ユーザーがこの欄を編集している間に自動修正を有効にするかどうかを示します。次の値が許されています。

- `on`
  - : 構成されていれば、打ち間違いの自動修正や、テキストの置き換え処理を有効にします。
- `off`
  - : 自動修正やテキストの置き換えを無効にします。

### mozactionhint

Mozilla 拡張で Android 版 Firefox で対応しており、ユーザーがフィールドを編集中に <kbd>Enter</kbd> キーや <kbd>Return</kbd> キーを押した場合に行われるアクションの種類のヒントを提供します。この情報は仮想キーボードの <kbd>Enter</kbd> キーにどのようなラベルを使用するかを決定するために使用されます。

> **Note:** これはグローバル属性 {{htmlattrxref("enterkeyhint")}} として[標準化されています](https://html.spec.whatwg.org/#input-modalities:-the-enterkeyhint-attribute)が、まだ広くは実装されていません。 Firefox の実装状態の変遷を確認するには、 {{bug(1490661)}} を参照してください。

許可されている値は `go`, `done`, `next`, `search`, `send` です。ブラウザーはこのヒントを使用して、 Enter キーにどのラベルを置くかを決定します。

## tel 入力欄の使用

ウェブにおいて、電話番号はとてもよく収集されるデータの種類です。例えば、何らかの会員登録や通信販売サイトで、商取引や緊急時連絡の目的でユーザーに電話番号を尋ねることが良くあります。一般的にどのように電話番号が入力されるかを考えれば、残念ながら「1つのサイズですべてに合う」ような解決策は現実的ではありません。

幸い、自分でサイトの要件を検討し、自分で適切なレベルの検証を実装することができます。詳しくは、以下の[検証](#検証)をご覧ください。

### カスタムキーボード

`<input type="tel">` の主な利点の一つは、携帯電話のブラウザーに電話番号を入力するための特別なキーボードを表示させることです。例えば、いくつかの端末でキーパッドがどのように表示されるかを示します。

| Android 版 Firefox                                    | WebKit iOS (Safari/Chrome/Firefox)                           |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| ![Android 版 Firefox のスクリーンショット](fx-android-tel.png) | ![iOS 版 Firefox のスクリーンショット](iphone-tel-keyboard-50pct.png) |

### 単純な tel 入力欄

最も基本的なフォームにおいて、 tel 入力欄は次のように実装することができます。

```html
<label for="telNo">電話番号:</label>
<input id="telNo" name="telNo" type="tel">
```

{{ EmbedLiveSample('A_simple_tel_input', 600, 40) }}

ここでは何も不思議なことは起こりません。サーバーに送信されると、上記の入力のデータは、例えば `telNo=+12125553151` のように表現されます。

### プレイスホルダー

入力データがどのような形式を取るべきか、文脈上のヒントを提供することが役立つ場合があります。これは、ページのデザインがそれぞれの {{HTMLElement("input")}} に説明的なラベルを提供していない場合に特に重要になることがあります。ここが**プレイスホルダー**の登場する場面です。プレイスホルダーは `value` が取るべきフォームを示す値で、有効な値の例を提示します。この値は要素の `value` が `""` の時にエディットボックス内に表示されます。ボックスにデータが入力されると、プレイスホルダーが消え、ボックスが空になると、プレイスホルダーが再び表示されます。

ここでは、 `123-4567-8901` というプレイスホルダーを持つ `tel` 入力欄があります。編集フィールドの内容を操作すると、プレイスホルダーが消えたり現れたりすることに注意してください。

```html
<input id="telNo" name="telNo" type="tel"
       placeholder="123-4567-8901">
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### 入力欄の寸法の制御

入力ボックスの物理的な長さだけでなく、入力テキスト自体に許される最小・最大の長さも制御することができます。

#### 物理的な入力欄の寸法

入力ボックスの物理的な大きさは、 {{htmlattrxref("size", "input")}} 属性で制御することが可能です。この属性により、入力ボックスが一度に表示できる文字数を指定することができます。この例では、例えば `tel` のエディットボックスの幅は 20 文字です。

```html
<input id="telNo" name="telNo" type="tel"
       size="20">
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### 要素の値の長さ

`size` は、入力される電話番号の長さの制限とは別のものです。入力される電話番号の長さの最小値は {{htmlattrxref("minlength", "input")}} 属性で指定でき、同様に、入力される電話番号の長さの最大値は {{htmlattrxref("maxlength", "input")}} 属性で設定することができます。

以下の例では、幅 20 文字の電話番号入力ボックスを生成し、入力内容は 9 文字以上、 14 文字以下であることを要求しています。

```html
<input id="telNo" name="telNo" type="tel"
       size="20" minlength="9" maxlength="14">
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

> **Note:** 上記の属性は[検証](#検証)に影響します。 - 上記の例では、値の長さが 9 文字未満、または 14 文字以上の場合、入力は無効とみなされます。ほとんどのブラウザーでは、最大長を超える値を入力することさえできません。

### 既定のオプションの提供

#### value 属性を言使用した単一の既定値の提供

他と同様に、 `tel` 入力欄に {{htmlattrxref("value", "input")}} 属性を設定することで既定値を指定することができます。

```html
<input id="telNo" name="telNo" type="tel"
       value="333-4444-4444">
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### 提案値の提供

さらに一歩進んで、電話番号の既定値のリストを用意し、そこからユーザーが選択できるようにすることも可能です。これには {{htmlattrxref("list", "input")}} 属性を使用します。これはユーザーをこれらの選択肢に限定しませんが、よく使われる電話番号をより迅速に選択できるようにします。これは  {{htmlattrxref("autocomplete", "input")}} へのヒントも提供します。 `list` 属性は {{HTMLElement("datalist")}} 要素の ID を指定し、この要素は 1 つの提案値につき 1 つの {{HTMLElement("option")}} 要素を含んでおり、それぞれの `option` の `value` は電話番号入力ボックスの対応する提案値となっています。

```html
<label for="telNo">電話番号: </label>
<input id="telNo" name="telNo" type="tel" list="defaultTels">

<datalist id="defaultTels">
  <option value="111-1111-1111">111-1111-1111</option>
  <option value="122-2222-2222">122-2222-2222</option>
  <option value="333-3333-3333">333-3333-3333</option>
  <option value="344-4444-4444">344-4444-4444</option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

{{HTMLElement("datalist")}} 要素とその {{HTMLElement("option")}} が配置されると、ブラウザーは電話番号の候補として指定された値を提供します。これは通常、候補を含むポップアップまたはドロップダウンメニューとして表示されます。具体的な使い勝手はブラウザーによって異なるかもしれませんが、通常、編集ボックスをクリックすると、提案された電話番号がドロップダウンで表示されます。その後、ユーザーが文字を入力すると、リストが調整され、フィルタリングされた一致する値のみが表示されます。ユーザーが選択するか、独自の値を入力するまで、入力された文字ごとにリストが絞り込まれます。

以下は、その様子のスクリーンショットです。

![](phone-number-with-options.png)

## 検証

以前にも触れましたが、電話番号で万能のクライアント側検証方法を提供することは非常に困難です。では、どうすればいいのでしょうか。いくつかの選択肢を考えてみましょう。

> **Warning:** HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用には*なりません*>。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ（または大きすぎるデータ、間違った種類のデータなど）が送信された場合に災害が発生するおそれがあります。

### 電話番号を必須にする

空の入力を無効として、サーバーに送信されないようにするには、 {{htmlattrxref("required", "input")}} 属性を使用します。例えば、このような HTML を使ってみましょう。

```html
<form>
  <div>
    <label for="telNo">電話番号を入力してください (必須): </label>
    <input id="telNo" name="telNo" type="tel" required>
    <span class="validity"></span>
  </div>
  <div>
    <button>送信</button>
  </div>
</form>
```

そして、有効な入力をチェックマークで、無効な入力をバッテンで強調するために、以下の CSS を記述してみましょう。

```css
div {
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
  color: #8b0000;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
  color: #009000;
}
```

出力結果は次のようになります。

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### パターンによる値検証

入力された数値をさらに制限し、特定のパターンに適合させたい場合は、{{htmlattrxref("pattern","input")}}属性を使用してください。この属性は、入力された値が一致すべき{{Glossary("regular expression", "正規表現")}}を値として取ります。

この例では、前と同じ CSS を使用しますが、 HTML は次のように変更します。

```html
<form>
  <div>
    <label for="telNo">電話番号を入力してください (xxx-xxx-xxxx 形式で): </label>
    <input id="telNo" name="telNo" type="tel" required
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
    <span class="validity"></span>
  </div>
  <div>
    <button>送信</button>
  </div>
</form>
```

```css hidden
div {
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
  color: #8b0000;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
  color: #009000;
}
```

{{EmbedLiveSample("Pattern_validation", 700, 70)}}

入力された値は、 xxx-xxx-xxxx というパターンに一致しない限り、無効であると報告されることに注意してください。例えば、 41-323-421 は受け入れられません。 800-MDN-ROCKS も同様です。しかし、 865-555-6502 は受理されます。実際のアプリケーションでは、ユーザーのロケールに応じて使用するパターンを変更する必要があるでしょう。

## 例

この例では、ユーザーにどの国にいるかを選択させる {{htmlelement("select")}} 要素と、電話番号の各部分を入力させる一連の `<input type="tel">` 要素でシンプルなインターフェイスを表します。複数の `tel` 入力欄を使ってはいけないという理由はありません。

それぞれの入力欄には {{htmlattrxref("placeholder","input")}} 属性があり、目の見えるユーザーが何を入力すればよいかのヒントを表示します。また {{htmlattrxref("pattern","input")}} で、求められる部分で指定された文字数を強制します。さらに [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性があり、画面リーダーのユーザーに何を入力すればよいかのヒントを読み上げることができるようになっています。

```html
<form>
  <div>
    <label for="country">国を選択してください:</label>
    <select id="country" name="country">
      <option>UK</option>
      <option selected>US</option>
      <option>Germany</option>
    </select>
  </div>
  <div>
    <p>電話番号を入力してください: </p>
    <span class="areaDiv">
      <input id="areaNo" name="areaNo" type="tel" required
             placeholder="Area code" pattern="[0-9]{3}"
             aria-label="Area code">
      <span class="validity"></span>
    </span>
    <span class="number1Div">
      <input id="number1" name="number1" type="tel" required
             placeholder="First part" pattern="[0-9]{3}"
             aria-label="First part of number">
      <span class="validity"></span>
    </span>
    <span class="number2Div">
      <input id="number2" name="number2" type="tel" required
             placeholder="Second part" pattern="[0-9]{4}"
             aria-label="Second part of number">
      <span class="validity"></span>
    </span>
  </div>
  <div>
    <button>送信</button>
  </div>
</form>
```

この JavaScript は比較的単純で、 {{domxref("GlobalEventHandlers.onchange", "onchange")}} イベントハンドラーを含んでおり、 `<select>` の値が変更されると `<input>` 要素の `pattern`, `placeholder`, `aria-label` をその国/地域の電話番号の形式に合わせて更新するようになっています。

```js
var selectElem = document.querySelector("select");
var inputElems = document.querySelectorAll("input");

selectElem.onchange = function() {
  for(var i = 0; i < inputElems.length; i++) {
    inputElems[i].value = "";
  }

  if(selectElem.value === "US") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Area code";
    inputElems[0].pattern = "[0-9]{3}";

    inputElems[1].placeholder = "First part";
    inputElems[1].pattern = "[0-9]{3}";
    inputElems[1].setAttribute("aria-label","First part of number");

    inputElems[2].placeholder = "Second part";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label","Second part of number");
  } else if(selectElem.value === "UK") {
    inputElems[2].parentNode.style.display = "none";

    inputElems[0].placeholder = "Area code";
    inputElems[0].pattern = "[0-9]{3,6}";

    inputElems[1].placeholder = "Local number";
    inputElems[1].pattern = "[0-9]{4,8}";
    inputElems[1].setAttribute("aria-label","Local number");
  } else if(selectElem.value === "Germany") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Area code";
    inputElems[0].pattern = "[0-9]{3,5}";

    inputElems[1].placeholder = "First part";
    inputElems[1].pattern = "[0-9]{2,4}";
    inputElems[1].setAttribute("aria-label","First part of number");

    inputElems[2].placeholder = "Second part";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label","Second part of number");
  }
}
```

この例は次のように見えます。

{{EmbedLiveSample('Examples', 600, 140)}}

これは面白いアイデアで、国際電話番号の取り扱いの問題を解決する可能性を示しています。この例を拡張して、潜在的にすべての国に対して正しいパターンを提供しなければなりませんが、これは大変な作業ですし、ユーザーが自分の番号を正しく入力するというフールプルーフの保証もありません。

クライアント側でこれだけ大変なことをするべきなのか、クライアント側ではユーザーが好きな書式で任意の数字を入力し、サーバー側でサニタイズすればよいのではないかとも思うでしょう。しかし、この選択はあなたがすることです。

```css hidden
div {
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
  color: #8b0000;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
  color: #009000;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォームガイド](/ja/docs/Learn/Forms)
- [フォームとアクセシビリティ](/ja/docs/Web/Accessibility/ARIA/forms)
- {{HTMLElement("input")}}

  - [`<input type="text">`](/ja/docs/Web/HTML/Element/input/text)
  - [`<input type="email">`](/ja/docs/Web/HTML/Element/input/email)

- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
