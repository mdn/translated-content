---
title: "<textarea>: テキストエリア要素"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: a78cecea4f3b1a7f35564a547052e163911ac491
---

{{HTMLSidebar}}

**`<textarea>`** は [HTML](/ja/docs/Web/HTML) の要素で、複数行のプレーンテキスト編集コントロールを表し、レビューのコメントやお問い合わせフォーム等のように、ユーザーが大量の自由記述テキストを入力できるようにするときに便利です。

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

上記の例では `<textarea>` の様々な機能を紹介しています。

- `id` 属性により、アクセシビリティのために `<textarea>` を {{htmlelement("label")}} 要素に結びつけることができる
- `name` 属性により、フォームが送信されたときにデータポイントに関連付けられた名前を設定している
- `rows` 属性と `cols` 属性により、`<textarea>` が占める実際の大きさを指定することができます。ブラウザーの既定値が様々である可能性があるため、一貫性のためにこれらの値を設定することはよいことでしょう。
- 既定のコンテンツが開始タグと終了タグの間に入っています。`<textarea>` は `value` 属性に対応していません。

`<textarea>` 要素は他にも、フォームの `<input>` と共通の属性のいくつか、例えば `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly`, `required` などを受け付けます。

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持ちます。

- `autocomplete`

  - : この属性は、コントロールの値をブラウザーが自動的に補完してよいかを示します。以下の値を指定できます。

    - `off`: ユーザーはフォームを使用するたびにフィールドへ値を明示的に入力しなければならないか、ドキュメントが独自の自動補完を提供します。ブラウザーは入力内容の自動補完を行いません。
    - `on`: ブラウザーはユーザーが以前入力した値を元に、値の自動補完を行うことができます。

     `autocomplete` 属性を `<textarea>` 要素に指定していない場合、ブラウザーは `<textarea>` 要素のフォームオーナーの `autocomplete` 属性の値を使用します。フォームオーナーは当該 `<textarea>` 要素が子孫になっている {{HTMLElement("form")}} 要素か、textarea 要素の `form` 属性で `id` を指定されている form 要素です。詳しくは、{{HTMLElement("form")}} 要素の [`autocomplete`](/ja/docs/Web/HTML/Element/form#autocomplete) 属性をご覧ください。

- `autocorrect` {{non-standard_inline}}

  - : 文字列で、ユーザーがこの `textarea` を編集しているときに、自動スペルチェックとテキスト置換（設定されている場合）の処理を有効にするかどうかを指定します。許可されている値は以下の通りです。

    - `on`
      - : 自動スペルチェックとテキスト置換を有効にする。
    - `off`
      - : 自動スペルチェックと文字列置換を無効にする。

- `autofocus`
  - : この論理属性で、ページ読み込み時にフォームコントロールがフォーカスを持つべきであることを指定できます。文書内でこの属性を指定することができる要素は、フォーム関連要素のうちのひとつだけです。
- `cols`
  - : 平均的な文字幅による、テキストコントロールの外見上の幅です。この属性を指定する場合は、正の整数を与えなければなりません。指定されなかった場合の既定値は `20` です。
- `disabled`
  - : この真偽値属性は、ユーザーがそのコントロールを利用できないことを示します。(もしこの属性が指定されていない場合、コントロールはその設定を親要素、例えば {{ HTMLElement("fieldset") }} 要素から継承します。もし親要素に `disabled` 属性を持つものがなければ、そのコントロールは利用可能です。)
- `form`
  - : `<textarea>` 要素が関連づけられた form 要素 (フォームオーナー) です。属性値は、同じドキュメント内の form 要素の id としなければなりません。この属性を指定しない場合は、`<textarea>` 要素を form 要素の子要素として配置しなければなりません。この属性により、`<textarea>` 要素を form 要素の子孫としてだけではなく、同一文書のどこにでも配置できるようになりました。
- `maxlength`
  - : ユーザーが入力可能な文字 (UTF-16 コード単位) の最大数です。この属性を指定しない場合、ユーザーは無制限に文字を入力可能です。
- `minlength`
  - : ユーザーが入力しなければならない最小文字数 (UTF-16 コード単位) です。
- `name`
  - : コントロールの名前です。
- `placeholder`

  - : コントロールに何を入力できるかに関する、ユーザーへの助言です。プレイスホルダーのテキスト内にあるキャリッジリターンやラインフィードは、ヒントを表示する際に改行として扱わなければなりません。

    > **メモ:** プレイスホルダーはフォームに入力されるべきデータの種類の例を示すためだけに使用してください。入力欄に関連付けられた {{HTMLElement("label")}} 要素の代わりとして使用*しない*でください。全体的な説明は、[`<input>` ラベル](/ja/docs/Web/HTML/Element/input#%E3%83%A9%E3%83%99%E3%83%AB)を参照してください。

- `readonly`
  - : これは論理属性で、ユーザーがコントロールの値を変更できないことを示します。`disabled` 属性とは異なり、`readonly` 属性はユーザーがコントロールをクリックしたり選択することを妨げません。読み取り専用のコントロールの値は、フォームとともに送信可能です。
- `required`
  - : この属性は、フォームを送信する前に値を入力しなければならないことを示します。
- `rows`
  - : コントロールで見ることが可能なテキストの行数です。指定する場合は、正の整数でなければなりません。指定されなかった場合、既定値は 2 になります。
- `spellcheck`

  - : `<textarea>` がブラウザーや OS に依存したスペルチェックを行うかどうかを指定します。以下の値が使用できます。

    - `true`: 要素でスペルや文法チェックを行う必要があることを示します。
    - `default` : 要素は既定の動作、おそらく親要素の `spellcheck` 値によって動作することを示します。
    - `false` : 要素でスペルチェックを行うべきではないことを示します。

- `wrap`

  - : フォームの送信において、どのように値を折り返すかを制御するかを示します。以下の値を指定可能です。

    - `hard`: ブラウザーは自動的に改行 (CR+LF) を挿入し、各行がコントロールの幅より長くならないようにします。有効にするには、[`cols`](#cols) 属性を指定する必要があります。
    - `soft`: ブラウザーは、入力された値の改行がすべて `CR+LF` のペアであることを保証しますが、値にそれ以外の改行が追加されることはありません。
    - `off` {{non-standard_inline}}: `soft` に似ていますが外観を `white-space: pre` に変更しますので、`cols` を超えた部分は折り返されず、水平方向にスクロール可能になります。

    この属性を指定しない場合の既定値は `soft` です。

## CSS でのスタイル付け

`<textarea>` は[置換要素](/ja/docs/Web/CSS/Replaced_element)です。ラスター画像のように内在サイズを持っています。既定では、 {{cssxref("display")}} の値は `inline-block` です。ボックスモデル、フォント、カラースキームが、普通の CSS を使用して簡単に操作できるので、他のフォーム要素と比較して、スタイル付けは比較的容易です。

[ウェブフォームへのスタイル設定](/ja/docs/Learn/Forms/Styling_web_forms)に、 `<textarea>` をスタイル付けするためのいくつかの有益なコツがあります。

### ベースラインの不整合

HTML 仕様書では、 `<textarea>` のベースラインがどこであるかを定義していません。よって、ブラウザーによりその位置は異なります。 Gecko では `<textarea>` のベースラインを textarea の最初の行のベースラインに設定しています。他のブラウザーは、`<textarea>` のボックスの下端に設定していることもあります。動作を予測できないため、 {{cssxref("vertical-align")}}`: baseline` を使用しないようにしてください。

### テキストエリアの大きさの変更が可能かどうかの制御

多くのブラウザーでは、 `<textarea>` は大きさの変更が可能です。右側の隅にドラッグのためのハンドルがあり、ページ内の要素の大きさを変更するための使用できることが分かるでしょう。これは CSS の {{ cssxref("resize") }} プロパティで制御されます。既定では大きさの変更が有効ですが、 `resize` の値に `none` を使用することで明示的に無効にすることができます。

```css
textarea {
  resize: none;
}
```

### 有効・無効な値のスタイル付け

 `<textarea>` の値が有効であるか無効であるかを (例えば `minlength` と `maxlength` の範囲の中に収まっているか外れているか、または `required`)、 {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラスを用いて強調表示することができます。例えば以下のように、中の値が有効か無効かでテキストエリアの境界を異なる表示にすることができます。

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## 例

### 基本的な例

以下の例は、行数と列数と既定の内容だけを設定した、とても単純なテキストエリアを表示します。

```html
<textarea name="textarea" rows="10" cols="50">ここに何か書いてください</textarea>
```

#### 結果

{{ EmbedLiveSample('Basic_example','600','150') }}

### "minlength" と "maxlength" を使用した例

この例は文字数の最小値と最大値を、それぞれ 10 と 20 に設定しています。見てみましょう。

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">ここに何か書いてください</textarea>
```

#### 結果

{{ EmbedLiveSample('Example using "minlength" and "maxlength"','600','80') }}

なお、`minlength` は最小値を超えて入力された文字をユーザーが削除することを阻止しませんので、入力された値により `<textarea>` が無効になることがあります。また、`minlength` の値が (例えば 3 に) 設定されていた場合であっても、`<textarea>` が空欄である場合は `required` 属性が設定されていない限り有効として扱われます。

### "placeholder" の使用

この例はプレイスホルダーを設定します。ボックスに入力を開始した時に消えることを確認して下さい。

```html
<textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="コメントのテキスト"></textarea>
```

#### 結果

{{ EmbedLiveSample('Example using "placeholder"','600','100') }}

> **メモ:** プレイスホルダーはフォームに入力されるべきデータの種類の例を示すためだけに使用してください。入力欄に関連付けられた {{HTMLElement("label")}} 要素の代わりとして使用*しない*でください。全体的な説明は、[ラベルとプレイスホルダー](/ja/docs/Web/HTML/Element/input)を参照してください。

### 無効と読み取り専用

この例では 2 つの `<textarea>` を示しています。一方は `disabled` であり、もう一方は `readonly` です。両方を試してみて動作の違いを確認してください。 `disabled` の要素はどのような方法でも選択できず (値の送信もされません)、 `readonly` の要素は選択可能で内容をコピーできます (そして値は送信されます)。内容が編集できないだけです。

> **メモ:** Chrome など、 Firefox 以外のブラウザーでは、 `disabled` のテキストエリアのコンテンツが選択可能でコピー可能である場合もあります

```html
<textarea name="textarea" rows="5" cols="30" disabled>
disabled のテキストエリアです。</textarea>
<textarea name="textarea" rows="5" cols="30" readonly>
readonly のテキストエリアです。</textarea>
```

#### 結果

{{ EmbedLiveSample('Disabled_and_readonly','600','100') }}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#リスト化">リスト化</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#ラベル付け可能"
          >ラベル付け可能</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#リセット可能"
          >リセット可能</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#送信可能"
          >サブミット可能</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#フォーム関連コンテンツ"
          >フォーム関連</a
        >
        要素
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>テキストのみ</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role"
            >textbox</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTextAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

他のフォーム関連要素:

- {{ HTMLElement("form") }}
- {{ HTMLElement("button") }}
- {{ HTMLElement("datalist") }}
- {{ HTMLElement("legend") }}
- {{ HTMLElement("label") }}
- {{ HTMLElement("select") }}
- {{ HTMLElement("optgroup") }}
- {{ HTMLElement("option") }}
- {{ HTMLElement("input") }}
- {{ HTMLElement("fieldset") }}
- {{ HTMLElement("output") }}
- {{ HTMLElement("progress") }}
- {{ HTMLElement("meter") }}
