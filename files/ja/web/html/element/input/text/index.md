---
title: <input type="text">
slug: Web/HTML/Element/input/text
tags:
  - フォーム入力
  - フォーム
  - HTML
  - HTML フォーム
  - Input
  - 入力型
  - リファレンス
  - Text
  - テキスト入力
  - text input
browser-compat: html.elements.input.input-text
translation_of: Web/HTML/Element/input/text
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} 要素の **`text`** 型は、基本的な単一行のテキスト入力欄を生成します。

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("値")}}</strong></td>
      <td>
        テキスト入力欄に含まれる文字列を表す {{domxref("DOMString")}}。
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
        {{htmlattrxref("required", "input")}},
        {{htmlattrxref("size", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>{{htmlattrxref("list", "input")}}, <code>value</code></td>
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

 {{htmlattrxref("value", "input")}} 属性は、テキスト入力欄に入力された現在のテキストの値が入っている {{domxref("DOMString")}} です。 JavaScript では {{domxref("HTMLInputElement")}} の `value` プロパティを使ってこれを受け取ることができます。

```js
let theText = myTextInput.value;
```

入力欄に検証の制約がない場合 (詳しくは{{anch("検証")}}を参照)、値は空文字列 ("") にすることができます。

## 追加の属性

型に関係なくすべての {{HTMLElement("input")}} 要素を操作する属性に加え、 `text` 型の入力欄は次の属性にも対応しています。

### list

list 属性の値は、同じ文書内にある {{HTMLElement("datalist")}} 要素の {{domxref("Element.id", "id")}} です。 {{HTMLElement("datalist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち {{htmlattrxref("type", "input")}} と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

### maxlength

ユーザーが `text` 入力欄に入力することができる (UTF-16 コード単位での) 最大文字数です。 0 以上の整数値である必要があります。 `maxlength` が指定されていないか、無効な値が指定されていると、 `text` 入力欄には最大文字数が設定されません。この値は `minlength` の値以上である必要もあります。

フィールドのテキスト値の長さが UTF-16 コード単位で `maxlength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

### minlength

ユーザーが `text` 入力欄に入力することができる (UTF-16 コード単位での) 最小文字数です。これは非負の整数値で、 `maxlength` で指定された値以下である必要があります。 `minlength` が指定されていないか、無効な値が指定されていると、 `text` 入力欄には最小文字数が設定されません。

入力欄のテキスト値の長さが UTF-16 コード単位で `minlength` の長さよりも短いと、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

### pattern

`pattern` 属性は、指定する場合は正規表現であり、入力欄の {{htmlattrxref("value")}} が[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に合格するためにはこれと一致しなければなりません。これは {{jsxref("RegExp")}} 型で使用される JavaScript の妥当な正規表現である必要があり、これは[正規表現のガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)で記述されています。正規表現がコンパイルされるときに `'u'` フラグが指定されるので、パターンは ASCII ではなく Unicode コードポイントの並びとして扱われます。パターンのテキストをスラッシュで囲んではいけません。

指定されたパターンがないかか無効である場合は、正規表現は適用されず、この属性は完全に無視されます。

> **Note:** {{htmlattrxref("title", "input")}} 属性を使用してテキストを指定すると、多くのブラウザーでパターンに一致する要件が何であるかを説明するツールチップを表示することができます。近くに他の説明テキストを配置する必要があります。

詳細や例については{{anch("Specifying a pattern", "パターンの指定")}}を参照してください。

### placeholder

`placeholder` 属性は文字列で、その欄にどのような種類の情報が求められるかについてのユーザーに対する短いヒントを提供します。これは求められるデータの種類を紹介する一語または短い句であり、説明的なメッセージではありません。テキストには改行を含めることは<em>できません</em>。

コントロールの内容がある書字方向 ({{Glossary("LTR")}} または {{Glossary("RTL")}}) であるものの、プレイスホルダーを逆の方向に表示する必要がある場合、 Unicode 双方向アルゴリズム書式文字を使用してプレイスホルダーの中で書字方向を上書きすることができます。詳しくは、[双方向テキストでの Unicode コードの使い方（英語）](https://www.w3.org/International/questions/qa-bidi-unicode-controls)を参照してください。

> **Note:** 可能であれば `placeholder` を使用することは避けてください。フォームを説明する他の方法ほど意味論的に有益ではなく、コンテンツに予期しない技術的な問題を引き起こす可能性があります。詳しくは、[\<input>: 入力欄 (フォーム入力) 要素](/ja/docs/Web/HTML/Element/input)の[プレイスホルダーはアクセシブルではない](/ja/docs/Web/HTML/Element/input#プレイスホルダーはアクセシブルではない)を参照してください。

### readonly

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `value` は、 JavaScript コードから直接 {{domxref("HTMLInputElement")}} の `value` プロパティを設定することで変更することができます。

> **Note:** 読み取り専用フィールドは値を持てないため、 `required` は `readonly` 属性も指定されている入力欄には効果がありません。

### size

`size` 属性は数値であり、入力欄の幅を何文字分とするかを示します。値はゼロより大きな数値である必要があり、既定値は 20 です。文字の幅は様々であるため、これは正確ではない可能性もあり、依存することはできません。結果の入力欄は文字数やフォント（使用中の {{cssxref("font")}} 設定）によって、指定された文字数より狭くなったり広くなったりすることがあります。

これはユーザーがフィールドに入力することができる文字数の制限を設定するものではありません。これは一度に見える文字数をおよそ指定するだけです。入力データの長さの上限を設定するには、 `{{anch("maxlength")}}` 属性を使用してください。

### spellcheck

`spellcheck` はグローバル属性で、要素でスペルチェックを有効にするかどうかを示します。内容が編集可能なものすべてに使用することができますが、ここでは `spellcheck` 属性の {{HTMLElement("input")}} 要素の使用に関して特に考えます。 `spellcheck` で利用できる値は次の通りです。

- `false`
  - : この要素でスペルチェックを無効にします。
- `true`
  - : この要素でスペルチェックを有効にします。
- "" (空文字列) または値なし
  - : スペルチェックについて、要素の既定の動作に従います。これは親の `spellcheck` 設定や、その他の要因に基づくことがあります。

入力欄では、 {{anch("readonly")}} 属性が設定されておらず、かつ無効になっていない場合にスペルチェックを有効にすることができます。

`spellcheck` を読み取ることで返される値は、{{Glossary("user agent", "ユーザーエージェント")}}の設定によって上書きされる場合、コントロール内のスペルチェックの実際の状態を反映しない可能性があります。

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

## テキスト入力欄の使用

`text` 型の `<input>` 要素は、基本的な単一行の入力欄を作成します。どこでも、ユーザーに単一行の値を入力させたい場所で、もっと具体的な入力型が値の中にない場合 (例えば、[日付](/ja/docs/Web/HTML/Element/input/datetime-local)、 [URL](/ja/docs/Web/HTML/Element/input/url)、[メールアドレス](/ja/docs/Web/HTML/Element/input/email)、[検索語](/ja/docs/Web/HTML/Element/input/search)など、もっと良い選択肢が利用できるもの) に使用します。

### 基本的な例

```html
<form>
  <div>
    <label for="uname">ユーザー名を選んでください: </label>
    <input type="text" id="uname" name="name">
  </div>
  <div>
    <button>送信</button>
  </div>
</form>
```

これは次のように表示されます。

{{EmbedLiveSample("Basic_example", 600, 50)}}

送信されると、サーバーに送信される名前と値の組のデータは `name=Chris` になります（送信前に入力値として "Chris" が入力された場合）。 {{htmlattrxref("name", "input")}} 属性を {{HTMLElement("input")}} 要素に付け忘れてはいけません。さもないと、テキスト入力欄の値が送信されるデータに含まれなくなります。

### プレイスホルダーの設定

{{htmlattrxref("placeholder","input")}} 属性を使用して、テキスト入力欄の内部に有用なプレイスホルダーを提供することで、何を入力すればよいかのヒントを提供することができます。次の例を見てください。

```html
<form>
  <div>
    <label for="uname">ユーザー名を選んでください: </label>
    <input type="text" id="uname" name="name"
           placeholder="小文字で一語">
  </div>
  <div>
    <button>送信</button>
  </div>
</form>
```

プレイスホルダーがどう表示されるかを以下で確認できます。

{{EmbedLiveSample("Setting_placeholders", 600, 50)}}

プレイスホルダーはふつう、要素の前景色よりも薄い色で表示され、ユーザーが入力欄にテキストを入力し始めると（または、 `value` 属性に設定することで、プログラム的に値を設定する場合も）自動的に消滅します。

### 物理的な入力要素の寸法

入力ボックスの物理的な寸法は、 {{htmlattrxref("size", "input")}} 属性を使って制御することができます。これによって、テキスト入力欄が一度に表示できる文字数を指定することができます。これは要素の幅に影響し、幅をピクセル数ではなく文字数で指定することができます。例えば、この例の中では、入力欄は30文字の幅です。

```html
<form>
  <div>
    <label for="uname">ユーザー名を選んでください: </label>
    <input type="text" id="uname" name="name"
           placeholder="小文字で一語"
           size="30">
  </div>
  <div>
    <button>送信</button>
  </div>
</form>
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 50) }}

## 検証

`text` 型の `<input>` 要素には、適用される自動的な検証はありませんが（基本的なテキスト入力欄は、自由な文字列を受け付けることが求められるからです）、以下に解説するように、クライアント側の検証のオプションがいくつか利用できます。

> **Note:** HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するサーバースクリプトの代用には*なりません*。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ（または大きすぎるデータ、間違った種類のデータなど）がデータベースに入力された場合に災害が発生するおそれがあります。

### スタイル付けのメモ

ユーザーにとって値が妥当かそうでないかが分かりやすくなるように、フォーム要素のスタイル付けに便利な擬似クラスが利用できます。 {{cssxref(":valid")}} および {{cssxref(":invalid")}} です。この節では、以下の CSS を使用して入力欄の値が妥当であれば隣にチェックマークを表示し、妥当な値でなければ隣にバツ (X) マークを表示します。

```css
div {
  margin-bottom: 10px;
  position: relative;
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
}
```

このテクニックにはフォーム要素の後に配置される {{htmlelement("span")}} 要素も必要で、これがアイコンのホルダーとして動作します。ブラウザーによっては一部の入力型で、直後に配置されたアイコンをうまく表示できないことがあるのでこれが必要です。

### 入力を必須にする

入力を行わないとフォームの送信が許可されないようにするための簡単な方法として、 {{htmlattrxref("required","input")}} 属性を使うことができます。

```html
<form>
  <div>
    <label for="uname">ユーザー名を選んでください: </label>
    <input type="text" id="uname" name="name" required>
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
input + span {
  padding-right: 30px;
}
input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}
input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

次のように表示されます。

{{ EmbedLiveSample('Making_input_required', 600, 70) }}

検索用語を入力せずにフォームを送信しようとした場合、ブラウザーはエラーメッセージを表示します。

### 入力値の長さ

 {{htmlattrxref("minlength", "input")}} 属性を使用して入力された値の最小の長さ (文字数) を指定することができます。同様に、 {{htmlattrxref("maxlength", "input")}} を使用して入力された値の最大長を文字数で設定します。

以下の例では、入力値が4～8文字の長さであることが求められます。

```html
<form>
  <div>
    <label for="uname">ユーザー名を選んでください: </label>
    <input type="text" id="uname" name="name" required size="10"
           placeholder="ユーザー名"
           minlength="4" maxlength="8">
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
input + span {
  padding-right: 30px;
}
input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}
input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

以下のように表示されます。

{{ EmbedLiveSample('Input_value_length', 600, 70) }}

4 文字未満でフォームを送信しようとすると、適切なエラーメッセージが表示されます（ブラウザーによって異なります）。 8 文字を超えて入力しようとしても、ブラウザーが許しません。

> **Note:** `minlength` を指定して `required` を指定しないと、ユーザーが値を指定する必要がなくなるので、入力は妥当と判断されます。

### パターンの指定

 {{htmlattrxref("pattern","input")}} 属性を使用して、入力値が妥当と判断されるために一致しなければならない正規表現を指定することができます（入力値を検証するために正規表現を使うための短期コースは[正規表現による検証](/ja/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression)をご覧ください）。

以下の例では、 4～8 文字の値で、英小文字のみが含まれているという要件の制約を与えます。

```html
<form>
  <div>
    <label for="uname">ユーザー名を選んでください: </label>
    <input type="text" id="uname" name="name" required size="45"
           pattern="[a-z]{4,8}">
    <span class="validity"></span>
    <p>ユーザー名は小文字で 4～8 文字でなければなりません。</p>
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

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

次のように表示されます。

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## 例

 [最初の HTML フォーム](/ja/docs/Learn/Forms/Your_first_form)および [HTML フォームの構成方法](/ja/docs/Learn/Forms/How_to_structure_a_web_form)の記事の文脈で、良いテキスト入力欄の例を見ることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォーム](/ja/docs/Learn/Forms)
- {{HTMLElement("input")}} およびそれに基づく {{domxref("HTMLInputElement")}} インターフェイス
- [`<input type="search">`](/ja/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}}: 複数行のテキスト入力欄
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
