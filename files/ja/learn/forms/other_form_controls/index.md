---
title: その他のフォームコントロール
slug: Learn/Forms/Other_form_controls
l10n:
  sourceCommit: 89175e6714699477a461efef4d3eddd9213cba86
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

ここでは、 `<input>` 以外のフォーム要素の機能を、ドロップダウンリストや複数行のテキストフィールドなどの他の操作型から、 {{htmlelement('output')}} 要素（前回の記事で実際に使用しました）やプログレスバーなどの他の便利なフォーム機能まで、詳しく見ていきましょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシーと、基本的な
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML の理解</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        <code>&#x3C;input></code> 以外のフォーム機能と、それを HTML を使用して実装する方法を理解する。
      </td>
    </tr>
  </tbody>
</table>

## 複数行のテキストフィールド

複数行のテキストフィールドは、 {{HTMLElement("textarea")}} 要素を {{HTMLElement("input")}} 要素の代わりに指定します。

```html
<textarea cols="30" rows="8"></textarea>
```

これは次のように表示されます。

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

`<textarea>` と通常の単一行のテキストフィールドとの主な違いは、ユーザーが送信データの中に改行を (リターンを押すことで) 入れることができることです。

`<textarea>` は閉じタグを取ることができ、既定のテキストを開始タグと終了タグの間に置いてください。これに対し、 {{HTMLElement("input")}} は閉じタグのない空要素です。 [`value`](/ja/docs/Web/HTML/Element/input#値) 属性の中に既定の値が入ります。

注意として、`<textarea>` 要素（その他の HTML 要素、CSS、JavaScript を含む）には何でも入れられるものの、この性質により、プレーンテキストコンテンツのように描画されます（フォームコントロール以外で [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) を使うと、プレーンテキストの代わりに HTML/「リッチ」コンテンツの API を使用できます）。

視覚的には、入力されたテキストは折り返され、フォームコントロールは既定でサイズ変更可能です。最近のブラウザーではドラッグハンドルを提供しており、これをドラッグすることでテキストエリアのサイズを大きくしたり小さくしたりすることができます。

下記のスクリーンショットは macOS での Firefox 71 と Safari 13 、Windows10 での Edge 18, Yandex 14, Firefox 71, Chrome 79 における、それぞれ既定、フォーカス中、無効状態の `<textarea>` 要素を示しています。

![Mac OSX の Firefox 71 と Safari 13、 Windows 10 の Edge 18、Yandex 14、Firefox、Chrome で、既定、フォーカス中、無効状態の 'textarea' 要素を示しています。](textarea_basic.png)

> **メモ:** 多少面白いテキストエリアの使用例は、このシリーズの最初の記事の[例](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html) が見つかります ([ソースコードも見てください](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html))。

### 複数行レンダリングの制御

{{htmlelement("textarea")}} では、複数行にまたがってレンダリングするのを制御する 3 つの属性を受け付けます:

- [`cols`](/ja/docs/Web/HTML/Element/textarea#cols)
  - : このテキストコントロールの幅（桁数）を、平均的な文字幅で指定します。これは `<textarea>` をリサイズすることで変更でき、また CSS で上書きもできるため、有効な開始時の幅です。何も指定されていない場合、既定値は 20 です。
- [`rows`](/ja/docs/Web/HTML/Element/textarea#rows)
  - : このコントロールの行数を指定します。これは `<textarea>`をリサイズすることで変更でき、また CSS で上書きもできるため、有効な開始時の高さです。何も指定されていない場合、既定値は 2 です。
- [`wrap`](/ja/docs/Web/HTML/Element/textarea#wrap)
  - : コントロールがどのようにテキストを折り返すかを指定します。値は `soft` （既定値）、この値では送信されるテキストは改行されないが、ブラウザーで表示されるテキストは折り返される、 `hard` （この値を使うには `cols` 属性を指定する必要がある）、この値では送信テキストとレンダリングされるテキストの両方が折り返される、`off`、この値では折り返しを行わない、を取ります。

### テキストエリアのリサイズの制御

`<textarea>` をリサイズできるかは CSS の `resize` プロパティで制御されます。とりうる値は次の通りです。

- `both`: 既定値 — 水平、垂直ともリサイズ許可
- `horizontal`: 水平のみリサイズ許可
- `vertical`: 垂直のみリサイズ許可
- `none`: リサイズ許可しない
- `block` と `inline`: `block` や `inline` 方向のみにリサイズできる実験的な値（これはテキストの方向性によって変わります。詳しくは [Handling different text directions](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) を見てください）。

これがどのように動作するのかのデモは、{{cssxref("resize")}} リファレンスページの最初にあるインタラクティブな例で遊んでみてください。

## ドロップダウンコントロール

ドロップダウンコントロールは、ユーザーインターフェイスのスペースをあまり取らずに、ユーザーがさまざまなオプションから選択できるようにするためのシンプルな方法です。HTML には、**選択ボックス**と**自動補完ボックス**という 2 つの形式のドロップダウンコンテンツがあります。どちらの場合も相互作用は同じです。コントロールを有効にすると、ブラウザーにはユーザーが選択できる値のリストが表示されます。

> **メモ:** すべてのドロップダウンボックスの例は、GitHub の [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html)にあります ([ライブでもご覧ください](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html))。

### 選択ボックス

単純な選択ボックスは、1 つ以上の {{HTMLElement("option")}} 要素を子要素として持つ {{HTMLElement("select")}} 要素で作成され、それぞれが可能な値のうちの 1 つを指定します。

#### 基本的な例

```html
<select id="simple" name="simple">
  <option>バナナ</option>
  <option selected>さくらんぼ</option>
  <option>レモン</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

必要に応じて、希望する {{HTMLElement("option")}} 要素の [`selected`](/ja/docs/Web/HTML/Element/option#selected) 属性を用いて、選択ボックスの既定値を設定することができます。
このオプションは、ページが読み込まれたときにあらかじめ選択されています。

#### optgroup の使用

{{HTMLElement("option")}} 要素は、 {{HTMLElement("optgroup")}} 要素の中に入れ子にすることができ、視覚的に関連する値のグループを作成することができます。

```html
<select id="groups" name="groups">
  <optgroup label="果物">
    <option>バナナ</option>
    <option selected>さくらんぼ</option>
    <option>レモン</option>
  </optgroup>
  <optgroup label="野菜">
    <option>人参</option>
    <option>茄子</option>
    <option>馬鈴薯</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("Using_optgroup", 120, 120)}}

{{HTMLElement("optgroup")}} 要素では、 [`label`](/ja/docs/Web/HTML/Element/optgroup#attr-label) 属性の値が入れ子になったオプションの値の前に表示されます。ブラウザーは通常、それらをオプションから視覚的に離して（すなわち太字にしたり、入れ子レベルを変えたりして）表示しますので、実際のオプションと混同される可能性は低くなります。

#### value 属性の使用

{{HTMLElement("option")}} 要素に明示的な value 属性が設定されている場合、そのオプションが選択された状態でフォームが送信された時にその値が送信されます。上の例のように value 属性を省略した場合は、 {{HTMLElement("option")}} 要素の内容が値として使われます。そのため、 value 属性は必要ありませんが、選択ボックスに視覚的に表示されている値とは異なる値を短くしたり、サーバーに送信したい理由があるかもしれません。

例えば、

```html
<select id="simple" name="simple">
  <option value="banana">大きく美しい黄色いバナナ</option>
  <option value="cherry">ふくよかでジューシーなさくらんぼ</option>
  <option value="lemon">鋭くて力強いレモン</option>
</select>
```

既定では、選択ボックスの高さは、単一の値を表示するのに十分です。オプションの [`size`](/ja/docs/Web/HTML/Attributes/size) 属性は、選択ボックスにフォーカスがない場合に表示されるオプションの数を制御します。

### 複数選択の選択ボックス

既定では、選択ボックスは、ユーザーに単一の値を選択させるだけです。 {{HTMLElement("select")}} 要素に [`multiple`](/ja/docs/Web/HTML/Element/select#multiple) 属性を追加することで、オペレーティングシステムが提供するデフォルトのメカニズム（例えば、 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> を押しながらデスクトップ上で複数の値をクリックするなど）を使用して、ユーザーが複数の値を選択できるようにすることができます。

```html
<select id="multi" name="multi" multiple size="2">
  <optgroup label="野菜">
    <option>バナナ</option>
    <option selected>さくらんぼ</option>
    <option>レモン</option>
  </optgroup>
  <optgroup label="野菜">
    <option>人参</option>
    <option>茄子</option>
    <option>馬鈴薯</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("Multiple_choice_select_box", 120, 120)}}

> **メモ:** 複数選択可能な選択ボックスの場合、選択ボックスはドロップダウンコンテンツとして値を表示しないことに気づくでしょう - 代わりに、すべての値がリストに一度に表示され、オプションの [`size`](/ja/docs/Web/HTML/Attributes/size)属性はウィジェットの高さを決定します。

> **メモ:** {{HTMLElement("select")}} 要素に対応しているすべてのブラウザーは、 [`multiple`](/ja/docs/Web/HTML/Element/select#multiple)/select#multiple)/select#multiple) 属性にも対応しています。

### 自動補完のボックス

表示する値を指定する {{HTMLElement("option")}} 子要素つきの {{HTMLElement("datalist")}} 要素を使って、フォームウィジェット用の自動補完の提案値を提供できます。 `<datalist>` には `id`が必要です。

データリストは、 {{htmlelement("input")}} 要素（つまり`text` や `email` の入力型）の [`list`](/ja/docs/Web/HTML/Element/input#list) 属性の値をデータリストの `id` の値を指定することで結びつけます。

データリストがフォームウィジェットに関連づけられると、オプションはユーザーが入力する自動補完テキストに使われます。典型的には、これはユーザーが入力に打ち込んだものに一致するドロップダウンボックスで表示されます。

#### 基本的な例

例を見てみましょう。

```html
<label for="myFruit">好きな果物は何ですか？</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
<datalist id="mySuggestion">
  <option>リンゴ</option>
  <option>バナナ</option>
  <option>ブラックベリー</option>
  <option>ブルーベリー</option>
  <option>レモン</option>
  <option>ライチ</option>
  <option>桃</option>
  <option>梨</option>
</datalist>
```

{{EmbedLiveSample("Basic_example_2", 120, 120)}}

#### datalist の対応状況と代替手段

ほぼすべてのブラウザーが datalist に対応していますが、IEバージョン10以下のような古いブラウザーにも対応をする場合は、代替手段を提供するという仕掛けがあります。

```html
<label for="myFruit">好きな果物は何ですか？（代替手段付き）</label>
<input type="text" id="myFruit" name="fruit" list="fruitList" />

<datalist id="fruitList">
  <label for="suggestion">または果物を選択</label>
  <select id="suggestion" name="altFruit">
    <option>リンゴ</option>
    <option>バナナ</option>
    <option>ブラックベリー</option>
    <option>ブルーベリー</option>
    <option>レモン</option>
    <option>ライチ</option>
    <option>桃</option>
    <option>梨</option>
  </select>
</datalist>
```

{{EmbedLiveSample("Datalist_support_and_fallbacks", 120, 120)}}

{{HTMLElement("datalist")}} 要素に対応したブラウザーは、 {{HTMLElement("option")}} 要素以外を無視し、 datalist はこれはうまく対応していくでしょう。 {{HTMLElement("datalist")}} 要素に対応していない古いブラウザーでは、ラベルと選択ボックスが表示されます。

以下の画面ショットは、Safari 6 でレンダリングされた datalist の代替手段を示しています。

![Mac OS の Safari で datalist 要素を代替させた画面](datalist-safari.png)

この代替手段を使用する場合は、`<input>` と `<select>` の両方のデータがサーバーサイドで収集されていることを確認してください。

#### より目立たない datalist の使用方法

[HTML 仕様書](https://html.spec.whatwg.org/multipage/input.html#attr-input-list)によると、 [`list`](/ja/docs/Web/HTML/Element/input#list) 属性と {{HTMLElement("datalist")}} 要素はユーザーの入力を必要とするあらゆる種類のウィジェットに使用することができます。このため、少し目立たないと思われるような使用法もあります。

例えば、 `range` 入力型で `{{htmlelement("datalist")}}` に対応しているブラウザーでは、 datalist の `{{htmlelement("option")}}` 値の範囲ごとに小さなチェックマークが範囲の上に表示されます。 [`<input type="range">` のリファレンスページでこの例](/ja/docs/Web/HTML/Element/input/range#a_range_control_with_hash_marks)を見ることができます。

また、 {{htmlelement('datalist')}} と [`<input type="color">`](/ja/docs/Web/HTML/Element/input/color) に対応しているブラウザーは、フルカラーパレットを利用できるようにしつつ、カスタマイズしたパレットを既定で表示することができます。

この場合、ブラウザーによって挙動が異なるため、このような使用はプログレッシブエンハンスメントとして考え、グレイスフルデグラデーションを保証するようにしましょう。

## その他のフォーム機能

このほかにも、これまで述べてきたような目立つものではありませんが、状況によっては有用なフォーム機能がいくつかありますので、簡単にご紹介しておきましょう。

> **メモ:** この節の例は GitHub 上の [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) にあります（[ライブでも確認してください](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)）。

### メーターとプログレスバー

メーターやプログレスバーは、数値を視覚的に表現するものです。

#### progress

プログレスバーは、 [`max`](/ja/docs/Web/HTML/Element/progress#max) 属性を用いて指定した最大値まで時間と共に変化する値を表します。このようなバーは、 {{ HTMLElement("progress")}} 要素を使用して作成されます。

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

これは、ダウンロードされたファイルの総数の割合や、アンケートで記入された質問の数など、進捗状況の報告が必要なものを実装するためにあります。

{{HTMLElement("progress")}} 要素の内側の内容は、この要素に対応していないブラウザーや、スクリーンリーダーが発声するための代替となります。

#### meter

メーターバーは [`max`](/ja/docs/Web/HTML/Element/meter#max) と [`min`](/ja/docs/Web/HTML/Element/meter#min)t/meter#min) 値で区切られた範囲内の固定された値を表します。この値は視覚的にバーとして表示され、このバーがどのように見えるかを知るために、他のいくつかの設定された値と比較します。

- [`low`](/ja/docs/Web/HTML/Element/meter#low) と [`high`](/ja/docs/Web/HTML/Element/meter#high) の値は範囲を 3 つに分割します。

  - 範囲の下位の部分は [`min`](/ja/docs/Web/HTML/Element/meter#min) と [`low`](/ja/docs/Web/HTML/Element/meter#low) 値の間であり、端も含みます。
  - 範囲の中位の部分は [`low`](/ja/docs/Web/HTML/Element/meter#low) と [`high`](/ja/docs/Web/HTML/Element/meter#high) 値の間であり、端を含みません。
  - 範囲の上位の部分は [`high`](/ja/docs/Web/HTML/Element/meter#high) と [`max`](/ja/docs/Web/HTML/Element/meter#max) 値の間であり、端も含みます。

- [`optimum`](/ja/docs/Web/HTML/Element/meter#optimum) 値は {{HTMLElement("meter")}} 要素の最適な値を定義します。 [`low`](/ja/docs/Web/HTML/Element/meter#low) および [`high`](/ja/docs/Web/HTML/Element/meter#high) 値と組み合わせて、どの範囲の値を推奨するかを定義します。

  - [`optimum`](/ja/docs/Web/HTML/Element/meter#optimum) の値が範囲の下位の部分にある場合、範囲の下位の部分を推奨部分、中位の部分を平均部分、上位の部分を最悪の部分と見なします。
  - [`optimum`](/ja/docs/Web/HTML/Element/meter#optimum) の値が範囲の中位の部分にある場合、範囲の下位の部分を平均部分、中位の部分を推奨部分、上の部分を同じく平均部分と見なします。
  - [`optimum`](/ja/docs/Web/HTML/Element/meter#optimum) の値が範囲の上位の部分にある場合、範囲の下位の部分を最悪の部分、中位の部分を平均部分、上位の部分を推奨部分と見なします。

すべてのブラウザーは、 {{HTMLElement("meter")}} 要素を実装するために、メーターバーの色を変更するためにこれらの値を使用します。

- 現在の値が範囲の推奨部分にある場合は、バーが緑色になります。
- 現在の値が範囲の平均部分にある場合は、バーが黄色になります。
- 現在の値が範囲の最悪の部分にある場合、バーが赤くなります。

このようなバーは {{HTMLElement("meter")}} 要素を使用して作成されます。これは、例えば、ディスク上で使用されている総容量を示すバーで、それがいっぱいになりそうなときには赤色に変わるような、あらゆる種類のメーターを実装するためのものです。

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

{{HTMLElement("meter")}} 要素の中の内容は、その要素に対応していないブラウザーと支援技術が発声するための代替です。

HTMLElement("progress")}} と {{HTMLElement("meter")}} の対応はかなり良好です - Internet Explorer は対応していませんが、他のブラウザーは十分に対応しています。

## スキルをテストしよう!

この記事の終わりまで到達しましたが、最も重要な情報を覚えていますか？次に移る前に、この情報を保持しているか検証するテストがあります — [Test your skills: Other controls](/ja/docs/Learn/Forms/Test_your_skills:_Other_controls) を見てください。

## まとめ

最も後のいくつかの記事で見てきたように、利用できるフォーム要素にはいろいろな種類がたくさんあります。一見してすべてを詳しく覚えておく必要はなく、詳細について調べたいだけ、記事に戻ることができます。

いろいろなフォームコントロールの背後にある HTML をざっと理解したので、[それらのスタイル設定](/ja/docs/Learn/Forms/Styling_web_forms)について見ていきましょう。

{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}
