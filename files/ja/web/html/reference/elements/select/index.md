---
title: "<select>: HTML 選択要素"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

**`<select>`** は [HTML](/ja/docs/Web/HTML) の要素で、選択式のメニューを提供するコントロールを表します。

{{InteractiveExample("HTML デモ: &lt;select&gt;", "tabbed-standard")}}

```html interactive-example
<label for="pet-select">ペットを選択してください:</label>

<select name="pets" id="pet-select">
  <option value="">--1 つ選択してください--</option>
  <option value="dog">犬</option>
  <option value="cat">猫</option>
  <option value="hamster">ハムスター</option>
  <option value="parrot">オウム</option>
  <option value="spider">クモ</option>
  <option value="goldfish">金魚</option>
</select>
```

```css interactive-example
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}
```

上の例は、典型的な `<select>` の利用方法を示しています。 `id` 属性を指定して、アクセシビリティのために {{htmlelement("label")}} と関連付けられるようにするとともに、 `name` 属性を指定して、サーバーに送信されるデータポイントと関連付ける名前を表します。それぞれのメニューの選択肢は、 `<select>` の中の {{htmlelement("option")}} 要素で定義されます。

それぞれの `<option>` 要素には、選択肢が選択されたときにサーバーに送信するデータの値を持つ [`value`](/ja/docs/Web/HTML/Reference/Elements/option#value) 属性があります。 `value` 属性が含まれていない場合は、既定で要素の中に含まれるテキストの値が使用されます。 [`selected`](/ja/docs/Web/HTML/Reference/Elements/option#selected) 属性を`<option>` 要素に付けることで、ページが最初に読み込まれたときに既定で選択状態にすることができます。 `selected` 属性が指定されていない場合、最初の `<option>` 要素が既定で選択されます。

`<select>` 要素は JavaScript では {{domxref("HTMLSelectElement")}} オブジェクトで表され、このオブジェクトの {{domxref("HTMLSelectElement.value", "value")}} プロパティは、選択された `<option>` の値を持っています。

`<select>` 要素は、複数の選択肢を選択することができるかどうかを定める `multiple`、同時にいくつの選択肢を表示することができるかを定める `size` など、制御のために利用することができる固有の属性がいくつかあります。 `required`、`disabled`、`autofocus` などのような一般のフォーム入力属性の多くも受け付けます。

さらに、 {{HTMLElement("option")}} 要素を {{HTMLElement("optgroup")}} 要素の中に入れることで、ドロップダウンの中で選択肢をグループに分割することができます。また、{{HTMLElement("hr")}} 要素を含めることで、選択肢間に視覚的な区切りを追加することができます。

その他の例は、[ネイティブフォームウィジェット: ドロップダウンコンテンツ](/ja/docs/Learn_web_development/Extensions/Forms/Other_form_controls#ドロップダウンコントロール)を参照してください。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- [`autocomplete`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : 文字列で、{{Glossary("user agent", "ユーザーエージェント")}}の自動補完機能のヒントを提供します。値の完全なリストや自動補完の使い方の詳細は、 [HTML の autocomplete 属性](/ja/docs/Web/HTML/Reference/Attributes/autocomplete)を参照してください。
- `autofocus`
  - : 論理属性で、ページが読み込まれた時にこのフォームコントロールが入力フォーカスを持つべきであることを指定することができます。文書内で `autofocus` 属性を持つことができるフォーム要素は一つだけです。
- [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled)
  - : 論理属性で、ユーザーがそのコントロールを利用することができないことを示します。もしこの属性が指定されていない場合、コントロールはその設定を親要素、例えば {{htmlelement("fieldset")}} 要素から継承します。もし親要素に `disabled` 属性を持つものがなければ、そのコントロールは利用可能です。
- [`form`](/ja/docs/Web/HTML/Reference/Attributes/form)
  - : この `<select>` を関連付ける {{HTMLElement("form")}} 要素（_フォームオーナー_）です。この属性の値は、同じ文書内の `<form>` 要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) でなければなりません。（この属性が設定されていない場合は、 `<select>` はその祖先である `<form>` が存在すれば、それと関連付けられます。）

    この属性によって、 `<select>` 要素は、 `<form>` 要素の子孫に限らず、文書内のどこの `<form>` と結び付けることもできます。これは祖先の `<form>` を上書きすることもできます。

- [`multiple`](/ja/docs/Web/HTML/Reference/Attributes/multiple)
  - : 論理属性で、リストの複数の選択肢を選択することができることを示します。指定されていない場合は、一度に選択することができる選択肢は一つだけです。 `multiple` が指定されている場合、多くのブラウザーは単一行のドロップダウンの代わりに、スクロールするリストボックスを表示します。複数選択された選択肢は、 {{domxref("URLSearchParams")}} の配列の規約、つまり `name=value1&name=value2` の形式を使用して送信されます。
- `name`
  - : この属性は、コントロールの名前を指定するために使用します。
- [`required`](/ja/docs/Web/HTML/Reference/Attributes/required)
  - : 論理属性で、空ではない文字列の値の選択肢を選択しなければならないことを示します。
- [`size`](/ja/docs/Web/HTML/Reference/Attributes/size)
  - : コントロールがスクロールするリストボックスとして表示される場合（つまり、 `multiple` が指定されている場合）、この属性は一度に見えるべきリストの行数を表します。ブラウザーは、 select 要素をスクロールリストボックスとして提供する必要はありません。既定値は `0` です。

    > [!NOTE]
    > HTML 仕様書によると、 size 属性の初期値は `1` であるべきとされています。しかしながら、実際のところは、このことによっていくつかのウェブサイトを壊してしまうことがわかり、他のブラウザーでも現在そうしているものはなく、 Mozilla は当分の間、 Firefox でも `0` を返し続けることを選択しました。

## 使用上の注意

### 複数の選択肢の選択

デスクトップコンピューターでは、 `<select>` 要素に `multiple` 属性がついている場合に、複数の選択肢を選択する方法がいくつもあります。

マウスを使用すると、 <kbd>Ctrl</kbd>、<kbd>Command</kbd>、<kbd>Shift</kbd> キー（オペレーティングシステムによって異なります）を押しながらクリックすることで、複数の選択肢を選択または解除することができます。

> [!WARNING]
> キーボードから連続していない複数の選択肢を選択する仕組みは、今のところ Firefox でしか動作しないようです。
>
> macOS では、 <kbd>Ctrl</kbd> + <kbd>↑</kbd> および <kbd>Ctrl</kbd> + <kbd>↓</kbd> のショートカットが、 OS 既定の _Mission Control_ および _Application windows_ のショートカットと競合するため、動作させるためにはこれらをオフにしなければならないでしょう。

キーボードを使用して、連続した複数の選択肢を選択するには以下のようにします。

- `<select>` 要素にフォーカスを移動します（例えば <kbd>Tab</kbd> を使用して）。
- <kbd>↑</kbd> および <kbd>↓</kbd> のカーソルキーを使用して、項目を上下に移動し、選択したい範囲の先頭または末尾の項目を選択する。
- <kbd>Shift</kbd> キーを押したまま <kbd>↑</kbd> および <kbd>↓</kbd> のカーソルキーを使用して、項目を選択する範囲を増加または減少させる。

キーボードを使用して、連続していない複数の選択肢を選択するには以下のようにします。

- `<select>` 要素にフォーカスを移動します（例えば <kbd>Tab</kbd> を使用するなど）。
- <kbd>Ctrl</kbd> キーを押したまま <kbd>↑</kbd> および <kbd>↓</kbd> のカーソルキーを使用して選択肢の「フォーカス」を移動します。つまり、選択したいものに移動します。「フォーカス」のある選択肢は、キーボードでリンクをフォーカスしたときと同様に、点線の輪郭線で強調されます。
- <kbd>スペース</kbd> を押して「フォーカス」のある選択肢を選択または解除します。

## CSS によるスタイル設定

`<select>` 要素は、従来は CSS を使って生産的にスタイル設定することが困難であったため、[完全にカスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)が作成できる機能が導入されつつあります。

### 従来の select のスタイル設定

最新のカスタマイズ機能に対応していないブラウザー（またはそれらを使用できない古いコードベース）では、[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)や[表示されるフォント](/ja/docs/Web/CSS/Guides/Fonts)の操作に限定されています。 {{cssxref("appearance")}} プロパティを使用して、システムの既定の `appearance` を削除することもできます。

しかし、従来の `<select>` 要素では、ブラウザー間で一貫した結果を得ることは困難です。完全に制御したいのであれば、スタイル設定をするのに優れた機能を備えたライブラリーを使用するか、非意味的要素や JavaScript や [WAI-ARIA](/ja/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) を使用して独自のドロップダウンメニューを実装することを検討してください。

{{cssxref(":open")}} 擬似クラスを使用することで、 `<select>` 要素が開いた状態（つまり選択肢のドロップダウンリストが表示されている状態）のスタイルを設定できます。これは複数行の `<select>` 要素（[`multiple`](/ja/docs/Web/HTML/Reference/Attributes/multiple) 属性が設定されているもの）には適用されません。これらはドロップダウンではなくスクロール可能なリストボックスとしてレンダリングされる傾向があるため、開いた状態がありません。

`<select>` のスタイル設定についての従来の情報は、以下を参照してください。

- [HTML フォームのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [HTML フォームの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- {{cssxref("field-sizing")}} プロパティは、 `<select>` 要素が格納する選択肢との相対的なサイズを決めるかを制御します。

## アクセシビリティ

`<select>` 内の `<hr>` は、純粋に装飾的なものとみなすべきです。なぜなら、現在、アクセシビリティツリー内に公開されておらず、支援技術にも公開されていないからです。

## 例

### 基本的な select

以下の例では、 3 つの選択肢があるドロップダウンメニューを生成し、既定で 2 番目の選択肢を選択状態にしておきます。

```html
<!-- 最初に 2 番目の値が選択されます。 -->
<select name="choice">
  <option value="first">1 番目の値</option>
  <option value="second" selected>2 番目の値</option>
  <option value="third">3 番目の値</option>
</select>
```

#### 結果

{{EmbedLiveSample("Basic_select", "", "100")}}

### グループ化された選択肢のある select

次の例では、ドロップダウンメニューをグループ化つきで作成し、{{HTMLElement("optgroup")}} と {{HTMLElement("hr")}} を使用して、ドロップダウン内のコンテンツをユーザーが理解しやすくしています。

```html
<label for="hr-select">好きな食べ物</label> <br />

<select name="foods" id="hr-select">
  <option value="">食べ物を選んでください</option>
  <hr />
  <optgroup label="果物">
    <option value="apple">りんご</option>
    <option value="banana">バナナ</option>
    <option value="cherry">さくらんぼ</option>
    <option value="damson">ダムソンプラム</option>
  </optgroup>
  <hr />
  <optgroup label="野菜">
    <option value="artichoke">アーティチョーク</option>
    <option value="broccoli">ブロッコリー</option>
    <option value="cabbage">キャベツ</option>
  </optgroup>
  <hr />
  <optgroup label="肉">
    <option value="beef">牛肉</option>
    <option value="chicken">鶏肉</option>
    <option value="pork">豚肉</option>
  </optgroup>
  <hr />
  <optgroup label="魚">
    <option value="cod">タラ</option>
    <option value="haddock">コダラ</option>
    <option value="salmon">鮭</option>
    <option value="turbot">カレイ</option>
  </optgroup>
</select>
```

#### 結果

{{EmbedLiveSample("select_with_grouping_options", "", "100")}}

### 高度な複数選択の機能

以下の例はもっと複雑で、 `<select>` 要素で使用できる機能をもっと示しています。

```html
<label>
  1 つ以上のペットを選択してください:
  <select name="pets" multiple size="4">
    <optgroup label="4 本足のペット">
      <option value="dog">犬</option>
      <option value="cat">猫</option>
      <option value="hamster" disabled>ハムスター</option>
    </optgroup>
    <optgroup label="飛ぶペット">
      <option value="parrot">オウム</option>
      <option value="macaw">インコ</option>
      <option value="albatross">アホウドリ</option>
    </optgroup>
  </select>
</label>
```

#### 結果

{{EmbedLiveSample("Advanced_select_with_multiple_features", "", "100")}}

次のことが分かるでしょう。

- `multiple` 属性を設定してあるので、複数の選択肢を選択することができます。
- `size` 属性は、同時に 4 行だけ表示できるようにします。スクロールしてすべての選択肢を表示することができます。
- {{htmlelement("optgroup")}} を入れることで、選択肢を複数のグループに分割しています。これは純粋に視覚的なグループ化であり、視覚表現は通常、太字のグループ名と字下げした選択肢で構成されます。
- "Hamster" の選択肢には `disabled` 属性が設定されているので、選択することができません。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#リスト化"
          >リスト化</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#ラベル付け可能"
          >ラベル付け可能</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#リセット可能"
          >リセット可能</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#送信可能"
          >送信可能</a
        >な<a href="/ja/docs/Web/HTML/Guides/Content_categories#フォーム関連コンテンツ"
          >フォーム関連</a
        >要素
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        従来の <code>&lt;select&gt;</code> 要素の場合、 0 個以上の {{HTMLElement("option")}} 要素、{{HTMLElement("optgroup")}} 要素、{{HTMLElement("hr")}} 要素。
        <a href="/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select">カスタマイズ可能な select 要素</a>の場合:
        <ul>
        <li>選択要素の {{htmlelement("button")}}。オプションで子要素として、内部に {{htmlelement("selectedcontent")}} 要素を含んだ <code>&lt;button&gt;</code> 要素を含むことができます。</li>
        <li>ドロップダウンピッカー。他のコンテンツを定義するものであり、ゼロ個以上の <code>&lt;option&gt;</code>、<code>&lt;optgroup&gt;</code>、<code>&lt;hr&gt;</code>、{{htmlelement("div")}}、{{htmlelement("script")}}、{{htmlelement("template")}}、{{htmlelement("noscript")}} 要素を含むことができます。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code>multiple</code> 属性が<strong>なく</strong>、 1 よりも大きい
        <code>size</code> 属性が<strong>ない</strong>ならば
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>、それ以外の場合は
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code>multiple</code> 属性が<strong>なく</strong>、 1 よりも大きい
        <code>size</code> 属性が<strong>ない</strong>ならば
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>、それ以外の場合は、許可されている
        <code>role</code> はなし
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLSelectElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `<select>` で発生するイベント: {{domxref("HTMLElement/change_event", "change")}}, {{domxref("Element/input_event", "input")}}
- {{HTMLElement("option")}} 要素
- {{HTMLElement("optgroup")}} 要素
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)
