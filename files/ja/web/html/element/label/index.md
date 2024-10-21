---
title: "<label>: ラベル要素"
slug: Web/HTML/Element/label
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

**`<label>`** は [HTML](/ja/docs/Web/HTML) の要素で、ユーザーインターフェイスの項目のキャプションを表します。

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

`<label>` を {{htmlelement("input")}} や {{htmlelement("textarea")}} などのフォーム要素と関連付けると、いくらかの利点が発生します。

- ラベルのテキストが、対応するテキスト入力欄に視覚的に関連付けられるだけではありません。プログラム的にも関連付けられます。つまり、例えばユーザーがフォーム入力欄にフォーカスを移動した時、読み上げソフトがラベルを読み上げ、支援技術のユーザーが何のデータを入力するべきか理解しやすくすることができます。
- 関連付けられたラベルをクリックして、入力欄自体をクリックした場合と同様に、入力欄にフォーカスを与えたりアクティブ化にしたりすることができます。こうしてヒット領域を拡大すると、タッチパネルの端末を使用している場合を含めて、入力欄をアクティブ化させやすくなります。

`<label>` 要素と `<input>` 要素を明示的に関連付けるには、最初に `id` 属性を `<input>` 要素に追加します。次に、`for` 属性を `<label>` 要素に追加します。`for` の値は `<input>` 要素の `id` と同じにします。

他の方法として、 `<input>` を直接 `<label>` の内側に入れることができますが、この場合は関連付けが明確なので、 `for` および `id` 属性は必要ありません。

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

ラベルがラベル付けするフォームコントロールは、 label 要素の _ラベル対象コントロール_ と呼ばれます。複数のラベルを同じフォームコントロールに関連付けることができます。

```html
<label for="username">名前を入力してください:</label>
<input id="username" name="username" type="text" />
<label for="username">名前を忘れてしまいましたか？</label>
```

`<label>` 要素に関連付けることができる要素には {{HTMLElement('button')}}, {{HTMLElement('input')}} (`type="hidden"` を除く), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}}, {{HTMLElement('textarea')}} があります。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- [`for`](/ja/docs/Web/HTML/Attributes/for)

  - : `for` 属性の値は単一の [`id`](/ja/docs/Web/HTML/Global_attributes/id) でなければならず、これは `<label>` 要素と同一の文書内にある[ラベル付け可能](/ja/docs/Web/HTML/Content_categories#ラベル付け可能)なフォーム関連要素のものです。従って、この `label` 要素が関連付けられるのはフォームコントロール 1 つだけです。

    > [!NOTE]
    > プログラムから `for` 属性を設定する場合は、 [`htmlFor`](/ja/docs/Web/API/HTMLLabelElement/htmlFor) を使用してください。

    文書内で `for` 属性の値に一致する `id` 属性を持つ最初の要素が、この `label` 要素の _ラベル対象コントロール_ になります（その `id` を持つ要素が実際に [ラベル付け可能要素](https://html.spec.whatwg.org/multipage/forms.html#category-label) である場合）。このラベル付け可能な要素でない場合は、 `for` 属性は何も効果がありません。もし、文書の後半に `id` の値に一致する他の要素があったとしても、それらは考慮されません。

    複数の `label` 要素の `for` 属性に同じ値を指定することができます。そうすると、関連するフォームコントロール（`for` 値が参照するフォームコントロール）は複数のラベルを持つことになります。

    > **メモ:** `<label>` 要素は、包含するコントロール要素が `for` 属性が指す要素である場合、 `for` 属性を持ちつつ、中にコントロール要素を含めることができます。

## CSS のスタイル付け

`<label>` には特殊なスタイル上の考慮事項はありません。構造的に単純なインライン要素であり、ほとんどは {{htmlelement("span")}} や {{htmlelement("a")}} 要素と同じ方法でスタイルを適用します。テキストが読みにくくならない限り、あらゆる方法でスタイルを適用することができます。

## アクセシビリティ

### 対話型コンテンツ

`label` の中に{{HTMLElement("a", "アンカー")}}や{{HTMLElement("button", "ボタン")}}のような対話型要素を配置しないでください。そのようにすると、ユーザーが `label` に関連したフォーム入力欄を有効化しにくくなります。

**悪い例:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  <a href="terms-and-conditions.html">利用規約と利用条件</a>に同意します。
</label>
```

**良い例:**

```html example-good
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  利用規約と利用条件に同意します。
</label>
<p>
  <a href="terms-and-conditions.html">利用規約と利用条件を読む</a>
</p>
```

### 見出し

`<label>` の中に[見出し要素](/ja/docs/Web/HTML/Element/Heading_Elements)を配置すると、数多くの種類の支援技術を妨げることになります。見出しは一般的に[ナビゲーションエイド](/ja/docs/Web/HTML/Element/Heading_Elements#ナビゲーション)として使用されるためです。ラベルの文字列を視覚的に調整する必要がある場合は、代わりに `<label>` 要素に CSS クラスを適用してください。

[フォーム](/ja/docs/Web/HTML/Element/form)、またはフォームのセクションにタイトルが必要な場合は、 {{HTMLElement("legend")}} を {{HTMLElement("fieldset")}} の中に配置して使用してください。

**悪い例:**

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

**良い例:**

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### ボタン

{{HTMLElement("input")}} 要素に `type="button"` がついた宣言に妥当な `value` 属性があれば、関連付けるラベルは必要ありません。ラベルを付けると、支援技術がボタン入力をどう解釈するかをじゃまする可能性があります。 {{HTMLElement("button")}} 要素でも同じことが言えます。

## 例

### 暗黙のラベルの定義

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Simple_label_example', '200', '50')}}

### "for" 属性をつけた明示的なラベルの定義

```html
<label for="username">Click me to focus on the input field</label>
<input type="text" id="username" />
```

{{EmbedLiveSample('Using_the_for_attribute', '200', '50')}}

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
        <a href="/ja/docs/Web/HTML/Content_categories#フォーム関連コンテンツ"
          >フォーム関連要素</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、ただし、子孫に
        <code>label</code>
        要素を持つことはできない。ラベル付けの対象となるコントロール以外の<a
          href="/ja/docs/Web/HTML/Content_categories#ラベル付け可能"
          >ラベル付け可能</a
        >要素を入れてはならない。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLLabelElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
