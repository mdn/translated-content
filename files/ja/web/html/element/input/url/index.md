---
title: <input type="url">
slug: Web/HTML/Element/input/url
tags:
  - 要素
  - Form Control
  - フォーム入力
  - フォーム
  - HTML
  - HTML 入力型
  - HTML フォーム
  - Input
  - 入力型
  - リファレンス
  - Text
  - URL
  - control
browser-compat: html.elements.input.input-url
translation_of: Web/HTML/Element/input/url
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} 要素の **`url`** 型は、ユーザーに URL を入力および編集させるために使用します。

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

入力値はフォームの送信前に自動的に検証され、空欄または正しい形式の URL のどちらかであることが確認されます。 CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラスが自動的に適用され、フィールド上の現在の値が妥当な URL であるかどうかを視覚的に示します。

`url` 型に対応していないブラウザーでは、 `url` 入力欄は標準の {{HTMLElement("input/text", "text")}} 入力欄で代替されます。

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#値">値</a></strong></td>
      <td>URL を表す {{domxref("DOMString")}}、または空欄</td>
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
      <td>
        <code>list</code>, <code>value</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code>
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

{{HTMLElement("input")}} 要素の {{htmlattrxref("value", "input")}} 属性は {{domxref("DOMString")}} で、自動的に URL の構文として検証されます。より具体的に言うと、検証を通る値の書式は下記の 2 通りがあります。

1. 空文字列 ("")。ユーザーが値を入力しないか、または値が削除されたことを表します。
2. 単一の正しい形式の絶対 URL。 URL が実在する必要はありませんが、少なくとも正しい書式です。簡単に言えば、 `urlscheme://restofurl` の形です。

[検証](#検証)の節で、どのようなメールアドレスが正しい形式であると検証されるかの詳細を参照してください。

## 追加の属性

型に関係なくすべての {{HTMLElement("input")}} 要素を操作する属性に加え、 `url` 型の入力欄は次の属性にも対応しています。

### list

list 属性の値は、同じ文書内にある {{HTMLElement("datalist")}} 要素の {{domxref("Element.id", "id")}} です。 {{HTMLElement("datalist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち {{htmlattrxref("type", "input")}} と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

### maxlength

ユーザーが `url` 入力欄に入力することができる（UTF-16 コード単位での）最大文字数です。 0 以上の整数値である必要があります。 `maxlength` が指定されていないか、無効な値が指定されていると、 `url` 入力欄には最大文字数が設定されません。この値は `minlength` の値以上である必要もあります。

フィールドの URL の長さが UTF-16 コード単位で `maxlength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

### minlength

ユーザーが `url` 入力欄に入力することができる（UTF-16 コード単位での）最小文字数です。これは非負の整数値で、 `maxlength` で指定された値以下である必要があります。 `minlength` が指定されていないか、無効な値が指定されていると、 `url` 入力欄には最小文字数が設定されません。

入力欄の URL の長さが UTF-16 コード単位で `minlength` の長さよりも短いと、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

### pattern

`pattern` 属性は、指定する場合は正規表現であり、入力欄の {{htmlattrxref("value")}} が[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に合格するためにはこれと一致しなければなりません。これは {{jsxref("RegExp")}} 型で使用される JavaScript の妥当な正規表現である必要があり、これは[正規表現のガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)で記述されています。正規表現がコンパイルされるときに `'u'` フラグが指定されるので、パターンは ASCII ではなく Unicode コードポイントの並びとして扱われます。パターンのテキストをスラッシュで囲んではいけません。

指定されたパターンがないかか無効である場合は、正規表現は適用されず、この属性は完全に無視されます。

> **Note:** {{htmlattrxref("title", "input")}} 属性を使用してテキストを指定すると、多くのブラウザーでパターンに一致する要件が何であるかを説明するツールチップを表示することができます。近くに他の説明テキストを配置する必要があります。

詳細と例については[パターン検証](#パターン検証)の節を参照してください。

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

### spellcheck

`spellcheck` はグローバル属性で、要素でスペルチェックを有効にするかどうかを示します。内容が編集可能なものすべてに使用することができますが、ここでは `spellcheck` 属性の {{HTMLElement("input")}} 要素の使用に関して特に考えます。 `spellcheck` で利用できる値は次の通りです。

- `false`
  - : この要素でスペルチェックを無効にします。
- `true`
  - : この要素でスペルチェックを有効にします。
- "" (空文字列) または値なし
  - : スペルチェックについて、要素の既定の動作に従います。これは親の `spellcheck` 設定や、その他の要因に基づくことがあります。

入力欄では、 [readonly](#readonly) 属性が設定されておらず、かつ無効になっていない場合にスペルチェックを有効にすることができます。

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

## URL 入力欄の使用

URL 入力欄を `type` に適切な値 `url` を指定して作成すると、入力されたテキストが少なくとも正規の URL となり得る正しい形式であることを自動的に検証することができるようになります。これにより、ユーザが自分のウェブサイトのアドレスを間違って入力したり、無効なアドレスを入力したりすることを避けることができます。

しかし、指定されたテキストが実際に存在する URL であるか、サイトのユーザーに対応しているか、またはその他の方法で受け入れられるかを確認するには、これだけでは不十分であることに注意することが重要です。これは、フィールドの値が URL として適切にフォーマットされていることを保証するものです。

> **Note:** ユーザーが HTML をその場面の裏でいじることができることを意識しておくことは極めて重要です。ですから、安全を目的として、サイトでクライアント側の値検証機能のみを使用しては*いけません*。何らかのセキュリティ上の問題を含む可能性がある値が提供されるトランザクションの場合は、いずれもサーバー側で値検証を行う*必要があります*。

### 単純な URL 入力欄

現在、この要素を実装しているすべてのブラウザーは、基本的な検証機能を備えた標準的なテキスト入力フィールドとして実装しています。最も基本的な形として、 URL 入力は次のように実装することができます。

```html
<input id="myURL" name="myURL" type="url">
```

{{ EmbedLiveSample('A_simple_URL_input', 600, 40) }}

有効と見なされるのは空欄のときと、有効な書式の URL アドレスが 1 つだけ入力されたときであり、それ以外のときは無効とみなされることに注意してください。 {{htmlattrxref("required", "input")}} 属性を追加すると、適切な書式の URL のみが許可されるようになり、空の場合は入力が有効であるとは見なされなくなります。

ここでは何も不思議なことは起こりません。サーバーに送信されると、上記の入力のデータは、例えば `myURL=http%3A%2F%2Fwww.example.com` のように表現されます。文字が必要に応じてエスケープされていることに注意してください。

### プレイスホルダー

入力データがどのような形式を取るべきか、文脈上のヒントを提供することが役立つ場合があります。これは、ページのデザインがそれぞれの {{HTMLElement("input")}} に説明的なラベルを提供していない場合に特に重要になることがあります。ここが**プレイスホルダー**の登場する場面です。プレイスホルダーは `value` が取るべきフォームを示す値で、有効な値の例を提示します。この値は要素の `value` が `""` の時にエディットボックス内に表示されます。ボックスにデータが入力されると、プレイスホルダーが消え、ボックスが空になると、プレイスホルダーが再び表示されます。

ここでは、 `url` 入力欄に `http://www.example.com` というプレイスホルダーが設定されています。編集フィールドの内容を操作すると、プレイスホルダーが消えたり現れたりすることに注意してください。

```html
<input id="myURL" name="myURL" type="url"
       placeholder="http://www.example.com">
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### 入力欄の寸法の制御

入力ボックスの物理的な長さだけでなく、入力テキスト自体に許される最小・最大の長さも制御することができます。

#### 物理的な入力欄の寸法

入力ボックスの物理的な大きさは、 {{htmlattrxref("size", "input")}} 属性で制御することが可能です。この属性により、入力ボックスが一度に表示できる文字数を指定することができます。この例では、例えば `url` のエディットボックスの幅は 30 文字です。

```html
<input id="myURL" name="myURL" type="url"
       size="30">
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### 要素の値の長さ

`size` は、入力される URL の長さの制限とは別のものです。入力される URL の長さの最小値は {{htmlattrxref("minlength", "input")}} 属性で指定でき、同様に、入力される URL の長さの最大値は {{htmlattrxref("maxlength", "input")}} 属性で設定することができます。もし `maxlength` が `size` を超えている場合は、入力ボックスの内容が操作されたときに、現在の選択部分や挿入部分を表示するために、必要に応じてスクロールします。

以下の例では、幅 30 文字の URL 入力ボックスを生成し、入力内容が 10 文字以上 80 文字以下であることを要求しています。

```html
<input id="myURL" name="myURL" type="url"
       size="30" minlength="10" maxlength="80">
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

> **Note:** 上記の属性は[検証](#検証)に影響します。最短長より短い値や最大長より長い値の入力は無効とみなされます。ほとんどのブラウザーでは、最大長を超える値を入力することさえできません。

### 既定のオプションの提供

#### value 属性を言使用した単一の既定値の提供

他と同様に、 `url` 入力欄に {{htmlattrxref("value", "input")}} 属性を設定することで既定値を指定することができます。

```html
<input id="myURL" name="myURL" type="url"
       value="http://www.example.com">
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### 提案値の提供

さらに一歩進んで、既定の選択肢のリストを用意し、そこからユーザーが選択できるようにすることも可能です。これには {{htmlattrxref("list", "input")}} 属性を使用します。これはユーザーをこれらの選択肢に限定しませんが、よく使われる URL をより迅速に選択できるようにします。これは  {{htmlattrxref("autocomplete", "input")}} へのヒントも提供します。 `list` 属性は {{HTMLElement("datalist")}} 要素の ID を指定し、この要素は 1 つの提案値につき 1 つの {{HTMLElement("option")}} 要素を含んでおり、それぞれの `option` の `value` は URL 入力ボックスの対応する提案値となっています。

```html
<input id="myURL" name="myURL" type="url"
       list="defaultURLs">

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/">
  <option value="http://www.google.com/">
  <option value="http://www.microsoft.com/">
  <option value="https://www.mozilla.org/">
  <option value="http://w3.org/">
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

{{HTMLElement("datalist")}} 要素とその {{HTMLElement("option")}} が配置されると、ブラウザーは URL の候補として指定された値を提供します。これは通常、候補を含むポップアップまたはドロップダウンメニューとして表示されます。具体的な使い勝手はブラウザーによって異なるかもしれませんが、通常、編集ボックスをクリックすると、提案された URL がドロップダウンで表示されます。その後、ユーザーが文字を入力すると、リストが調整され、フィルタリングされた一致する値のみが表示されます。ユーザーが選択するか、独自の値を入力するまで、入力された文字ごとにリストが絞り込まれます。

#### 提案値のラベルの使用

{{htmlattrxref("label", "option")}} 属性を 1 つまたはすべての `<option>` 要素に設定することで、テキストのラベルを提供することができます。ブラウザーによっては、ラベルのみを表示するものもあれば、ラベルと URL の両方を表示するものもあります。

```html
<input id="myURL" name="myURL" type="url"
       list="defaultURLs">

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/" label="MDN Web Docs">
  <option value="http://www.google.com/" label="Google">
  <option value="http://www.microsoft.com/" label="Microsoft">
  <option value="https://www.mozilla.org/" label="Mozilla">
  <option value="http://w3.org/" label="W3C">
</datalist>
```

{{EmbedLiveSample("Using_labels_for_suggested_values", 600, 40)}}

## 検証

`url` 入力欄で利用できる内容の検証には 2 つのレベルがあります。まず、すべての {{HTMLElement("input")}} で提供される標準的なレベルの検証があります。これは、入力内容が有効な URL であるための要件を満たしているかどうかを自動的に確認するものです。しかし、もし特別なニーズがあるなら、それを満たすために追加のフィルタリングを追加するオプションもあります。

> **Warning:** HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用には*なりません*。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ（または大きすぎるデータ、間違った種類のデータなど）がデータベースに入力された場合に災害が発生するおそれがあります。

### 基本的な検証

`url` 入力型に対応しているブラウザーは、自動的に検証を行い、 URL の標準の書式に一致するテキストのみが入力ボックスに入力されることを保証します。

URL の構文はかなり入り組んでいます。 WHATWG の [URL Living Standard](https://url.spec.whatwg.org/) で定義されており、私たちの記事 [What is a URL?](/ja/docs/Learn/Common_questions/What_is_a_URL) で初めての人のために説明されています。

### URL を必須にする

前述のように、フォームを送信する前に URL の入力を必須にする (フィールドを空白にできない) には、入力に {{htmlattrxref("required", "input")}} 属性を含めるだけでよいのです。

```html
<form>
  <input id="myURL" name="myURL" type="url" required>
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

上記のフォームに値を入力せずに送信してみて、どうなるか試してみてください。

### パターンによる検証

入力された URL を、単なる「URL に見える文字列」よりも制限し、特定のパターンに適合させたい場合は、{{htmlattrxref("pattern","input")}} 属性を使用してください。この属性は、入力された値が一致すべき{{Glossary("regular expression", "正規表現")}}を値として取ります。

例えば、 Myco, Inc. の従業員向けに、あるページに問題があった場合に IT 部門に問い合わせるためのサポートページを作るとします。この単純化したフォームでは、ユーザーは問題のあるページの URL と、何が問題なのかを説明するメッセージを入力する必要があります。しかし、入力された URL が Myco のドメインにある場合にのみ、 URL の検証に成功するようにしたいのです。

`url` 型の入力は、標準の URL バリデーション*および*指定された {{htmlattrxref("pattern", "input")}} の両方に対して検証されるので、簡単に実装することができます。では、その方法を見てみましょう。

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
  }

  input:valid+span:after {
    position: absolute;
    content: '✓';
    padding-left: 5px;
  }
```

```html
<form>
  <div>
    <label for="myURL">Enter the problem website address:</label>
    <input id="myURL" name="myURL" type="url"
           required pattern=".*\.myco\..*"
           title="The URL must be in a Myco domain">
    <span class="validity"></span>
  </div>
  <div>
    <label for="myComment">What is the problem?</label>
    <input id="myComment" name="myComment" type="text"
           required>
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

{{EmbedLiveSample("Pattern_validation", 700, 150)}}

まず、 {{htmlattrxref("required", "input")}} 属性が指定されており、有効なメールアドレスの入力が必須になっています。

次に、 `url` 入力欄の `pattern` を `".*\.myco\..*"` に設定しました。このシンプルな正規表現は、文字列が任意の数の文字の後に、ドット、 "myco" 、ドット、そして任意の数の文字が続くことを要求します。ブラウザーは標準的な URL フィルター*および*指定されたテキストに対する独自のパターンの両方を実行するため、「これが有効な URL であり、かつ Myco ドメインであることを確認する」という検証を行うことになります。

これは完全ではありませんが、この単純なデモの要件では十分です。

{{htmlattrxref("title")}} 属性を `pattern` と併用することをお勧めします。その場合、 `title` でパターンを説明する必要があります。つまり、他の情報ではなく、データがどのような形式を取るべきかを説明してください。これは、 `title` が検証エラーメッセージの一部として表示されたり、読み上げられたりする可能性があるからです。例えば、ブラウザーが「入力された値がフィールドに指定された書式と異なります。」というメッセージの後に、あなたが指定した `title` を表示するかもしれません。もし `title` が "URL" のようなものであれば、結果は「入力された値がフィールドに指定された書式と異なります。 URL」というメッセージになり、あまり良いものではなくなります。

そのため、「URL は myco ドメインのものを入力してください」という文字列を指定しています。こうすることで、エラーメッセージ全体が「入力された値がフィールドに指定された書式と異なります。URL は myco ドメインのものを入力してください。」のようになります。

> **Note:** もし、検証用の正規表現を書いていて、うまく動作しない場合は、ブラウザーのコンソールを確認してください。問題を解決するための有用なエラーメッセージが表示されているかもしれません。

## 例

`url` 型の入力欄について他に言うことはありません。数々の例については、[パターンによる検証](#パターンによる検証)と [URL 入力欄の使用](#url_入力欄の使用)の節で確認してください。

[GitHub 上のパターン検証の例](https://github.com/mdn/learning-area/blob/master/html/forms/url-example/index.html) （[ライブ例](https://mdn.github.io/learning-area/html/forms/url-example/)も参照してください）もあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォームガイド](/ja/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/ja/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/ja/docs/Web/HTML/Element/input/email)
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
