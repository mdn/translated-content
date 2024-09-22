---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: 8720024f7e04f09f7ca879a0291a85b0eb7168df
---

{{HTMLSidebar}}

{{htmlelement("input")}} 要素の **`checkbox`** 型は、既定でボックスとして描画され、政府の書類で見られるように、有効な時にはチェックが入ります。正確な外見はブラウザーが実行されているオペレーティングシステムの構成によります。一般にこれは四角形ですが、角が丸くなることもあります。チェックボックスによって、フォームで単一の値を選択して（または選択せずに）送信することができます。

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **メモ:** [ラジオボタン](/ja/docs/Web/HTML/Element/input/radio)はチェックボックスと似ていますが、重要な違いがあります。[同じ名前のラジオボタン](/ja/docs/Web/HTML/Element/input/radio#ラジオグループの定義)はグループ化されており、同時に 1 つしか選択できないのに対し、チェックボックスは単一の値をオンにしたりオフにしたり切り替えることができます。複数のコントロールがある場所では、ラジオボタンはその中で一つしか選択できませんが、チェックボックスは複数の値が選択できます。

## 値

チェックボックスの値を表す文字列です。これはクライアント側には表示されませんが、サーバー上ではチェックボックスの `name` と共に送信されるデータに与えられる `value` になります。次の例を見てください。

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews">Subscribe to newsletter?</label>
  </div>
  <div>
    <button type="submit">Subscribe</button>
  </div>
</form>
```

この例では、 `name` を `subscribe` に、 `value` を `newsletter` に設定しました。フォームが送信されると、データの名前と値の組み合わせは `subscribe=newsletter` となります。

`value` 属性が省略された場合は、チェックボックスの既定値は `on` ですので、その場合の送信されるデータは `subscribe=on` となります。

> [!NOTE]
> フォームが送信されたとき、チェックボックスがチェックされていない場合、名前も値もサーバーに送信されません。HTML のみでチェックボックスがチェックされていない状態を表す方法（`value=unchecked` のように）はありません。チェックボックスがチェックされていないときの既定値を送信したい場合は、JavaScript を記述して、フォーム内にチェックされていない状態を示す値を持つ {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} を作成することで実現できます。

## 追加の属性

すべての {{HTMLElement("input")}} 型で[共通する属性](/ja/docs/Web/HTML/Element/input#属性)に加え、 "`checkbox`" 型の入力欄は次の属性にも対応しています。

- `checked`

  - : [論理](/ja/docs/Glossary/Boolean/HTML)属性で、チェックボックスが既定で（ページが読み込まれたときに）チェックされているかどうかを示します。チェックボックスが現在チェックされているかどうかを示すものでは*ありません*。チェックボックスの状態が変化した場合、このコンテンツ属性は変化を反映しません。（{{domxref("HTMLInputElement")}} の `checked` IDL 属性のみが更新されます。）
    > [!NOTE]
    > 他の入力コントロールとは異なり、チェックボックスの値は現在 `checked` の状態にある場合のみ、送信データに含まれます。その場合、チェックボックスの `value` 属性の値、または `value` が設定されていない場合は `on` が入力欄の値として報告されます。
    > 他のブラウザーとは異なり、 Firefox は既定でページ読み込みを通して `<input>` の[チェック状態を維持します](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。この機能を制御するには [`autocomplete`](/ja/docs/Web/HTML/Element/input#autocomplete) 属性を使用してください。

- `value`

  - : `value` 属性はすべての {{HTMLElement("input")}} 要素で共通のものです。しかし、 `checkbox` 型の入力欄では特殊な用途を提供します。フォームが送信されると、現在チェックされているチェックボックスのみがサーバーに送信され、報告される値が `value` 属性の値になります。 `value` が指定されていない場合は、既定で `on` の文字列になります。これは前述の[値](#値)の節で紹介されています。

## チェックボックスの使用

上記で最も基本的なチェックボックスの使用を見てきました。他に必要になりそうなチェックボックスに関するよく使われる機能や技術を見てみましょう。

### 複数チェックボックスの扱い

上記の例では、チェックボックスが 1 つしか含まれていませんでした。実際の状況では、複数のチェックボックスが発生する可能性があります。それらが互いに完全に無関係であれば、上記のようにすべて別々に処理できます。しかし、もしそれらがすべて関連していれば、事はそう単純ではありません。

例えば、次のデモにはユーザーが関心のあることを選択できるように、複数のチェックボックスが含まれています（完全な版は[例](#例)の節で確認してください）。

```html
<fieldset>
  <legend>関心があるものを選んでください</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">コーディング</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">音楽</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Handling_multiple_checkboxes', 600, 100)}}

この例では、両方のチェックボックスに同じ `name` を設定しました。両方のチェックボックスがチェックされてフォームが送信されると、名前/値の組み合わせの文字列は `interest=coding&interest=music` のように送信されます。データがサーバー側に届いたときには、連想配列以外の方法で解析して、 `interest` の値を持つ値を、最後の値だけでなくすべて拾う必要があります。 Python を使用したやり方としては、例えば、[単一のサーバー側の変数で複数のチェックボックスを扱う](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable)を参照してください。

### 既定のチェックボックス

チェックボックスを既定でチェック状態にするには、 `checked` 属性を設定するだけです。次の例を見てください。

```html
<fieldset>
  <legend>関心があるものを選んでください</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
    <label for="coding">コーディング</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">音楽</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Checking_boxes_by_default', 600, 100)}}

### チェックボックスの当たり判定領域を広げる

上記の例では、チェックボックス自身と同様に、関連する {{htmlelement("label")}} 要素をクリックするとチェックボックスを切り替えられることに気づいたかもしれません。これは HTML フォームのラベルの本当に便利な機能で、特にスマートフォンのような画面の小さい端末でオプションをクリックしやすくなります。

これがフォームに `<label>` 要素を適切に設定する、アクセシビリティ以外のもう一つの理由です。

### 未決定状態のチェックボックス

チェックボックスにはチェックと未チェックの状態に加え、第三の状態である**未決定** (indeterminate) を持つことができます。この状態は項目がオンともオフとも言えない状態です。これは JavaScript から {{domxref("HTMLInputElement")}} オブジェクトの `indeterminate` プロパティを使用して設定されます (HTML の属性を使用して設定することはできません)。

```js
inputInstance.indeterminate = true;
```

多くのブラウザーでは、未決定の状態のチェックボックスにはボックス内にチェックの代わりに水平線（ハイフンやマイナス記号のように見えるもの）が引かれます。

このプロパティを使用する機会は多くありません。最もよくある例では、チェックボックスが複数のサブオプション（チェックボックス）を「統括」している場合です。すべてのサブオプションがチェックされたとき、統括しているチェックボックスもチェックされ、すべてのチェックボックスのチェックが外れたとき、統括しているチェックボックスもチェックが外れます。1 つ以上のサブオプションが他とは異なる状態にあるとき、統括しているチェックボックスは未決定の状態になります。

これは以下の例に見られます（この発想は [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) のおかげです）。この例では、製作手順のために収集する材料を追跡しています。材料のチェックボックスをオンまたはオフにすると、 JavaScript の関数はチェックされた材料の総数をチェックします。

- チェックがない場合、製作手順名のチェックボックスは未チェックになります。
- 1 つまたは 2 つがチェックされた場合、製作手順名のチェックボックスは `indeterminate` に設定されます。
- 3 つともチェックされた場合は、製作手順名のチェックボックスが `checked` に設定されます。

ですからこの場合は、材料を集め始めているものの、製作が完成していない状態に `indeterminate` が使われます。

```js
const overall = document.querySelector("#enchantment");
const ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const ingredient of ingredients) {
  ingredient.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  let checkedCount = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```

{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}

> [!NOTE]
> 未決定状態のチェックボックスを持つフォームを送信すると、チェックボックスがチェックされていない場合と同じ結果になります。 — チェックボックスを表すデータは送られません。

## 検証

チェックボックスは[検証](/ja/docs/Web/HTML/Constraint_validation)（すべての {{HTMLElement("input")}} に対して行われる）に対応しています。しかし、多くの場合 {{domxref("ValidityState")}} は常に `false` になります。チェックボックスに [`required`](/ja/docs/Web/HTML/Element/input#required) 属性がある場合で、チェックされていない場合、 {{domxref("ValidityState.valueMissing")}} が `true` になります。

## 例

次の例は、上で見た「複数のチェックボックス」の拡張版です。より標準的なオプションと、チェックされたときに「その他」オプションの値を入力する入力欄を表示させる「その他」チェックボックスがあります。これは JavaScript の単純なブロックで実現します。この例では、`<input>` が直接 `<label>` の中にあり、暗黙のラベルを含んでいます。目に見えるラベルのないテキスト入力は、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) を指定すると、指定されたアクセス可能な名前を提供することができます。この例では、スタイル設定を改善するためにいくつかの CSS も記載しています。

### HTML

```html
<form>
  <fieldset>
    <legend>興味のあるものを選択してください</legend>
    <div>
      <label>
        <input type="checkbox" id="coding" name="interest" value="coding" />
        コーディング
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="music" name="interest" value="music" />
        音楽
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="art" name="interest" value="art" />
        美術
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="sports" name="interest" value="sports" />
        スポーツ
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="cooking" name="interest" value="cooking" />
        料理
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="other" name="interest" value="other" />
        その他
      </label>
      <input
        type="text"
        id="otherValue"
        name="other"
        aria-label="Other interest" />
    </div>
    <div>
      <button type="submit">フォームを送信</button>
    </div>
  </fieldset>
</form>
```

### CSS

```css
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}
```

### JavaScript

```js
const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
```

### 結果

{{EmbedLiveSample('Examples', '100%', 300)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>
        チェックボックスの値を表す文字列。
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} および {{domxref("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td><code>checked</code></td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <code><a href="#checked">checked</a></code>、<code><a href="#indeterminate">indeterminate</a></code>、<code><a href="#value">value</a></code>
      </td>
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
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS のセレクターで、現在の状態に基づいてチェックボックスを整形できます
- {{domxref("HTMLInputElement")}}: HTML DOM API において `<input>` 要素が実装しているもの
- [フォームコントロールの CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
