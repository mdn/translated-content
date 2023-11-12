---
title: "<select>: HTML 選択要素"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<select>`** は [HTML](/ja/docs/Web/HTML) の要素で、選択式のメニューを提供するコントロールを表します。

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

上の例は、典型的な `<select>` の利用方法を示しています。アクセシビリティのために、 {{htmlelement("label")}} と結び付けられるように `id` 属性が与えられています。それぞれのメニューの選択肢は、 `<select>` の中の {{htmlelement("option")}} 要素で定義されます。

それぞれの `<option>` 要素は、選択肢が選択されたときにサーバーに送信するデータの値を含む [`value`](/ja/docs/Web/HTML/Element/option#value) 属性を持ちます。 `value` 属性が含まれない場合、既定で要素の中に含まれるテキストの値が使用されます。 `<option>` 要素に [`selected`](/ja/docs/Web/HTML/Element/option#selected) 属性を付けることで、ページが最初に読み込まれたときに既定で選択状態にすることができます。

`<select>` 要素は、複数の選択肢を選択することができるかどうかを定める `multiple`、同時にいくつの選択肢を表示することができるかを定める `size` など、制御のために利用することができる固有の属性がいくつかあります。 `required`, `disabled`, `autofocus`, などのような一般のフォーム入力属性の多くも受け付けます。

さらに、 `<option>` 要素を {{htmlelement("optgroup")}} 要素の中に入れることで、ドロップダウンの中で選択肢をグループに分割することができます。

その他の例は、[ネイティブフォームウィジェット: ドロップダウンコンテンツ](/ja/docs/Learn/Forms/Other_form_controls#ドロップダウンコントロール)を参照してください。

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持ちます。

- `autocomplete`
  - : 文字列で、{{Glossary("user agent", "ユーザーエージェント")}}の自動補完機能のヒントを提供します。値の完全なリストや自動補完の使い方の詳細は、 [HTML の autocomplete 属性](/ja/docs/Web/HTML/Attributes/autocomplete)を参照してください。
- `autofocus`
  - : 論理属性で、ページが読み込まれた時にこのフォームコントロールが入力フォーカスを持つべきであることを指定することができます。文書内で `autofocus` 属性を持つことができるフォーム要素は一つだけです。
- `disabled`
  - : 論理属性で、ユーザーがそのコントロールを利用することができないことを示します。もしこの属性が指定されていない場合、コントロールはその設定を親要素、例えば {{htmlelement("fieldset")}} 要素から継承します。もし親要素に `disabled` 属性を持つものがなければ、そのコントロールは利用可能です。
- `form`

  - : `<select>` を関連付ける {{HTMLElement("form")}} 要素（_フォームオーナー_）です。この属性の値は、同じ文書内の `<form>` 要素の [`id`](/ja/docs/Web/HTML/Global_attributes#id) でなければなりません。（この属性が設定されていない場合は、 `<select>` はその祖先である `<form>` が存在すればそれと関連付けられます。）

    この属性によって、 `<select>` 要素は、 `<form>` 要素の子孫に限らず、文書内のどこの `<form>` と結び付けることもできます。これは祖先の `<form>` を上書きすることもできます。

- `multiple`
  - : 論理属性で、リストの複数の選択肢を選択することができることを示します。指定されていない場合は、一度に選択することができる選択肢は一つだけです。 `multiple` が指定されている場合、多くのブラウザーは単一行のドロップダウンの代わりに、スクロールするリストボックスを表示します。
- `name`
  - : この属性は、コントロールの名前を指定するために使用します。
- `required`
  - : 論理属性で、空ではない文字列の値の選択肢を選択しなければならないことを示します。
- `size`

  - : コントロールがスクロールするリストボックスとして表示される場合（つまり、 `multiple` が指定されている場合）、この属性は一度に見えるべきリストの行数を表します。ブラウザーは、 select 要素をスクロールリストボックスとして提供する必要はありません。既定値は `0` です。

    > **メモ:** HTML 仕様書によると、 size 属性の初期値は `1` であるべきとされています。しかしながら、実際のところは、このことによっていくつかのウェブサイトを壊してしまうことがわかり、他のブラウザーでも現在そうしているものはなく、 Mozilla は当分の間、 Firefox でも `0` を返し続けることを選択しました。

## 使用上の注意

### 複数の項目の選択

デスクトップコンピューターでは、 `<select>` 要素に `multiple` 属性がついている場合に、複数の項目を選択する方法がいくつもあります。

マウスを使用すると、 <kbd>Ctrl</kbd>、<kbd>Command</kbd>、<kbd>Shift</kbd> キー（オペレーティングシステムによって異なります）を押しながらクリックすることで、複数の項目を選択または解除することができます。

> **警告:** キーボードから連続していない複数の項目を選択する仕組みは、今のところ Firefox でしか動作しないようです。
>
> macOS では、 <kbd>Ctrl</kbd> + <kbd>↑</kbd> および <kbd>Ctrl</kbd> + <kbd>↓</kbd> のショートカットが、 OS 既定の _Mission Control_ および _Application windows_ のショートカットと競合するため、動作させるためにはこれらをオフにしなければならないでしょう。

キーボードを使用して、連続した複数の項目を選択するには以下のようにします。

- `<select>` 要素にフォーカスを移動します（例えば

  <kbd>Tab</kbd>

  を使用して）。

- <kbd>↑</kbd>

  および

  <kbd>↓</kbd>

  のカーソルキーを使用して、項目を上下に移動し、選択したい範囲の先頭または末尾の項目を選択する。

- <kbd>Shift</kbd>

  キーを押したまま

  <kbd>↑</kbd>

  および

  <kbd>↓</kbd>

  のカーソルキーを使用して、項目を選択する範囲を増加または減少させる。

キーボードを使用して、連続していない複数の項目を選択するには以下のようにします。

- `<select>` 要素にフォーカスを移動します（例えば

  <kbd>Tab</kbd>

  を使用するなど）。

- <kbd>Ctrl</kbd>

  キーを押したまま

  <kbd>↑</kbd>

  および

  <kbd>↓</kbd>

  のカーソルキーを使用して「フォーカスのある」選択肢を、選択したいものに移動します。「フォーカスのある」選択肢は、キーボードでリンクをフォーカスしたときと同様に、点線の輪郭線で強調されます。

- <kbd>スペース</kbd>

  を押して「フォーカスのある」選択肢を選択または解除します。

## CSS のスタイル付け

`<select>` 要素は、 CSS を使って生産的にスタイル付けすることが困難です。他の要素のように、特定の側面で影響を与えることはできます。例えば、[ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)や[表示されるフォント](/ja/docs/Web/CSS/CSS_fonts)を操作したり、 {{cssxref("appearance")}} プロパティを使用してシステムの既定の `appearance` を削除したりすることができます。

しかし、これらのプロパティはブラウザー間で一貫した結果が得られませんし、異なる種類のフォーム要素を互いに一列に並べたりするのは困難なことです。 `<select>` 要素の内部構造は複雑で、制御するのは困難です。完全に制御したいのであれば、スタイル付けをするのに優れた機能を備えたライブラリを使用するか、非意味的要素や JavaScript や [WAI-ARIA](/ja/docs/Learn/Accessibility/WAI-ARIA_basics) をを使用して独自のドロップダウンメニューを実装することを検討してください。

`<select>` のスタイル付けについてのさらなる有益な情報は、以下を参照してください。

- [HTML フォームのスタイル付け](/ja/docs/Learn/Forms/Styling_web_forms)
- [HTML フォームの高度なスタイル付け](/ja/docs/Learn/Forms/Advanced_form_styling)

単純な `<select>` のスタイル設定の例として、下記の「select のスタイルのカスタマイズ」の例もご覧ください。

## 例

### 基本的な select

以下の例では、とても簡単なドロップダウンメニューを生成し、既定で 2 番目の選択肢を選択状態にしておきます。

```html
<!-- 最初に Second Value が選択されます。 -->
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

#### 結果

{{EmbedLiveSample("Basic_select", "", "100")}}

### 高度な複数選択の機能

以下の例はもっと複雑で、 `<select>` 要素で使用できる機能をもっと示しています。

```html
<label>
  Please choose one or more pets:
  <select name="pets" multiple size="4">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Flying pets">
      <option value="parrot">Parrot</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>
  </select>
</label>
```

#### 結果

{{EmbedLiveSample("Advanced_select_with_multiple_features", "", "100")}}

次のことが分かるでしょう。

- `multiple` 属性を入れてあるので、複数のオプションを選択することができます。
- `size` 属性は、同時に 4 行だけ表示できるようにします。スクロールしてすべての選択肢を表示することができます。
- {{htmlelement("optgroup")}} を入れることで、選択肢を複数のグループに分割しています。これは純粋に視覚的なグループ化であり、視覚表現は通常、太字のグループ名と字下げした選択肢で構成されます。
- "Hamster" の選択肢には `disabled` 属性が入っているので、選択することができません。

### select のスタイルのカスタマイズ

この例では、 CSS と JavaScript を使用して `<select>` ボックスに広範な独自スタイルを適用する方法を示しています。

この例では基本的に以下のことを行います。

- 親ラッパーの `<select>` のコンテキスト（[`<option>`](/ja/docs/Web/HTML/Element/option) 要素）を複製し、追加の HTML 要素と JavaScript を使用して標準の期待される動作を再実装します。これには、キーボードアクセシビリティを提供するための基本的なタブの動作が含まれます。
- 状態と CSS を管理するために、いくつかの標準ネイティブの `属性` を新しい要素の `data-attributes` に対応付けします。

> **メモ:** すべてのネイティブ機能をサポートしているわけではありません。これは標準的な HTML から始まりますが、 JSON データ、カスタム HTML、または他のソリューションから始めても同じ結果を得ることができます。

#### HTML

```html
<form>
  <fieldset>
    <legend>Standard controls</legend>
    <select name="1A" id="select" autocomplete="off" required>
      <option>Carrots</option>
      <option>Peas</option>
      <option>Beans</option>
      <option>Pneumonoultramicroscopicsilicovolcanoconiosis</option>
    </select>
  </fieldset>
  <fieldset id="custom">
    <legend>Custom controls</legend>
    <select name="2A" id="select" autocomplete="off" required>
      <option>Carrots</option>
      <option>Peas</option>
      <option>Beans</option>
      <option>Pneumonoultramicroscopicsilicovolcanoconiosis</option>
    </select>
  </fieldset>
</form>
```

#### CSS

```css
body {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.select:focus {
  border-color: blue;
}

html body form fieldset#custom div.select[data-multiple] div.header {
  display: none;
}

html body form fieldset#custom div.select div.header {
  content: "↓";
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0;
  position: relative;
  width: auto;
  box-sizing: border-box;
  border-width: 1px;
  border-style: inherit;
  border-color: inherit;
  border-radius: inherit;
}

html body form fieldset#custom div.select div.header::after {
  content: "↓";
  align-self: stretch;
  display: flex;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 0.5em;
}

html body form fieldset#custom div.select div.header:hover::after {
  background-color: blue;
}

.select .header select {
  appearance: none;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  border-width: 0;
  width: 100%;
  flex: 1;
  display: none;
}

.select .header select optgroup {
  display: none;
}

.select select div.option {
  display: none;
}

html body form fieldset#custom div.select {
  user-select: none;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border-style: solid;
  border-width: 0;
  border-color: gray;
  width: auto;
  display: inline-block;
}

html body form fieldset#custom div.select:focus,
html body form fieldset#custom div.select:hover {
  border-color: blue;
}

html body form fieldset#custom div.select[data-open] {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

html body form fieldset#custom div.select[data-open] datalist {
  display: initial;
}

html body form fieldset#custom div.select datalist {
  appearance: none;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  left: 0;
  display: none;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

html body form fieldset#custom div.select datalist div.option {
  background-color: white;
  margin-bottom: 1px;
  cursor: pointer;
  padding: 0.5em;
  border-width: 0;
}

html body form fieldset#custom div.select datalist div.option:hover,
html body form fieldset#custom div.select datalist div.option:focus,
html body form fieldset#custom div.select datalist div.option:checked {
  background-color: blue;
  color: white;
}

html
  body
  form
  fieldset#custom
  div.select
  div.optgroup
  div.option[data-disabled] {
  color: gray;
}

html
  body
  form
  fieldset#custom
  div.select
  div.optgroup
  div.option[data-checked] {
  background-color: blue;
  color: white;
}

html body form fieldset#custom div.select div.optgroup div.label {
  font-weight: bold;
}

html body form fieldset#custom div.select div.optgroup div.option div.label {
  font-weight: normal;
  padding: 0.25em;
}

html body form fieldset#custom div.select div.header span {
  flex: 1;
  padding: 0.5em;
}
```

#### JavaScript

```js
const selects = custom.querySelectorAll("select");
for (const select of selects) {
  const div = document.createElement("div");
  const header = document.createElement("div");
  const datalist = document.createElement("datalist");
  const optgroups = select.querySelectorAll("optgroup");
  const span = document.createElement("span");
  const options = select.options;
  const parent = select.parentElement;
  const multiple = select.hasAttribute("multiple");
  function onclick(e) {
    const disabled = this.hasAttribute("data-disabled");
    select.value = this.dataset.value;
    span.innerText = this.dataset.label;
    if (disabled) return;
    if (multiple) {
      if (e.shiftKey) {
        const checked = this.hasAttribute("data-checked");
        if (checked) {
          this.removeAttribute("data-checked");
        } else {
          this.setAttribute("data-checked", "");
        }
      } else {
        const options = div.querySelectorAll(".option");
        for (let i = 0; i < options.length; i++) {
          const option = options[i];
          option.removeAttribute("data-checked");
        }
        this.setAttribute("data-checked", "");
      }
    }
  }

  function onkeyup(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.keyCode === 13) {
      this.click();
    }
  }

  div.classList.add("select");
  header.classList.add("header");
  div.tabIndex = 1;
  select.tabIndex = -1;
  span.innerText = select.label;
  header.appendChild(span);

  for (const attribute of select.attributes) {
    div.dataset[attribute.name] = attribute.value;
  }
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("div");
    const label = document.createElement("div");
    const o = options[i];
    for (const attribute of o.attributes) {
      option.dataset[attribute.name] = attribute.value;
    }
    option.classList.add("option");
    label.classList.add("label");
    label.innerText = o.label;
    option.dataset.value = o.value;
    option.dataset.label = o.label;
    option.onclick = onclick;
    option.onkeyup = onkeyup;
    option.tabIndex = i + 1;
    option.appendChild(label);
    datalist.appendChild(option);
  }
  div.appendChild(header);
  for (const o of optgroups) {
    const optgroup = document.createElement("div");
    const label = document.createElement("div");
    const options = o.querySelectorAll("option");

    Object.assign(optgroup, o);
    optgroup.classList.add("optgroup");
    label.classList.add("label");
    label.innerText = o.label;
    optgroup.appendChild(label);
    div.appendChild(optgroup);
    for (const o of options) {
      const option = document.createElement("div");
      const label = document.createElement("div");

      for (const attribute of o.attributes) {
        option.dataset[attribute.name] = attribute.value;
      }
      option.classList.add("option");
      label.classList.add("label");
      label.innerText = o.label;
      option.tabIndex = i + 1;
      option.dataset.value = o.value;
      option.dataset.label = o.label;
      option.onclick = onclick;
      option.onkeyup = onkeyup;
      option.tabIndex = i + 1;
      option.appendChild(label);
      optgroup.appendChild(option);
    }
  }

  div.onclick = (e) => {
    e.preventDefault();
  };

  parent.insertBefore(div, select);
  header.appendChild(select);
  div.appendChild(datalist);
  datalist.style.top = `${header.offsetTop + header.offsetHeight}px`;

  div.onclick = (e) => {
    if (!multiple) {
      const open = div.hasAttribute("data-open");
      e.stopPropagation();
      if (open) {
        div.removeAttribute("data-open");
      } else {
        div.setAttribute("data-open", "");
      }
    }
  };

  div.onkeyup = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      div.click();
    }
  };

  document.addEventListener("click", (e) => {
    if (div.hasAttribute("data-open")) {
      div.removeAttribute("data-open");
    }
  });

  const width = Math.max(
    ...Array.from(options).map((e) => {
      span.innerText = e.label;
      return div.offsetWidth;
    }),
  );

  console.log(width);
  div.style.width = `${width}px`;
}
document.forms[0].onsubmit = (e) => {
  const data = new FormData(this);
  e.preventDefault();
  submit.innerText = JSON.stringify([...data.entries()]);
};
```

#### 結果

{{EmbedGHLiveSample("html-examples/custom-select", '100%', 300)}}

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
        >、<a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#リスト化">リスト化</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#ラベル付け可能"
          >ラベル付け可能</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#リセット可能"
          >リセット可能</a
        >、及び<a href="/ja/docs/Web/HTML/Content_categories#送信可能"
          >サブミット可能</a
        >な<a href="/ja/docs/Web/HTML/Content_categories#フォーム関連コンテンツ"
          >フォーム関連</a
        >要素
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        0 個以上の {{HTMLElement("option")}} 要素または
        {{HTMLElement("optgroup")}} 要素
      </td>
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
        <code>multiple</code> 属性が<strong>なく</strong>、 1 よりも大きい
        <code>size</code> 属性が<strong>ない</strong>ならば
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code>、それ以外の場合は
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role">listbox</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code>multiple</code> 属性が<strong>なく</strong>、 1 よりも大きい
        <code>size</code> 属性が<strong>ない</strong>ならば
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menu_role">menu</a></code>、それ以外の場合は許可されている
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

- `<select>` で発生するイベント: {{domxref("HTMLElement/change_event", "change")}}, {{domxref("HTMLElement/input_event", "input")}}
- {{HTMLElement("option")}} 要素
- {{HTMLElement("optgroup")}} 要素
