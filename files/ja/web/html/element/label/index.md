---
title: <label>
slug: Web/HTML/Element/label
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Web
translation_of: Web/HTML/Element/label
---
{{HTMLRef}}

**HTML の `<label>` 要素**は、ユーザーインターフェイスの項目のキャプションを表します。

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

`<label>` を {{htmlelement("input")}} 要素と関連付けると、いくらかの利点が発生します。

- ラベルのテキストが、対応するテキスト入力欄に視覚的に関連付けられるだけではありません。プログラム的にも関連付けられます。つまり、例えばユーザーがフォーム入力欄にフォーカスを移動した時、読み上げソフトがラベルを読み上げ、支援技術のユーザーが何のデータを入力するべきか理解しやすくすることができます。
- 関連付けられたラベルをクリックして、入力欄自体をクリックした場合と同様に、入力欄にフォーカスを与えたりアクティブ化にしたりすることができます。こうしてヒット領域を拡大すると、タッチパネルの端末を使用している場合を含めて、入力欄をアクティブ化させやすくなります。

`<label>` を `<input>` 要素に関連付けるには、 `<input>` に `id` 属性を設定しなければなりません。そして `<label>` に `for` 属性を設定して、値を input の `id` と同じにします。

他の方法として、 `<input>` を直接 `<label>` の内側に入れることができますが、この場合は関連付けが明確なので、 `for` および `id` 属性は必要ありません。

```html
<label>Do you like peas?
  <input type="checkbox" name="peas">
</label>
```

その他の使用上の注意事項

- label がラベル付けするフォームコントロールは*ラベル付きコントロール* (labeled control) と呼ばれます。一つの入力欄に複数のラベルを関連付けることができます。
- `<label>` がクリックやタップされ、それがフォームのコントロールに関連付けられていた場合は、 `click` イベントが関連付けられたコントロールにも発生するようになります。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("for")}}

  - : `<label>` 要素と同一の文書内にある[ラベル付け可能](/ja/docs/Web/Guide/HTML/Content_categories#ラベル付け可能)フォーム関連要素の {{htmlattrxref("id")}}。文書中の `for` 属性の値と合致する `id` を持つ最初の要素がラベル付け可能な要素であれば、このラベル要素の示す*ラベル付きコントロール*となります。[ラベル付け可能要素](https://html.spec.whatwg.org/multipage/forms.html#category-label)でなければ、 `for` 属性は効果がありません。一致する `id` 値を持つ他の要素が文書内のその後にあったとしても、考慮されません。

    > **Note:** `<label>` 要素は、 `for` 属性が指す要素が包含するコントロール要素である場合、 `for` 属性を持ちつつ、中にコントロール要素を含めることができます。

## CSS のスタイル付け

`<label>` には特殊なスタイル上の考慮事項はありません。 — 構造的に単純なインライン要素であり、ほとんどは {{htmlelement("span")}} や {{htmlelement("a")}} 要素と同じ方法でスタイルを適用します。テキストが読みにくくならない限り、あらゆる方法でスタイルを適用することができます。

## 例

### シンプルな label の例

```html
<label>Click me <input type="text"></label>
```

{{EmbedLiveSample('Simple_label_example', '200', '50', '')}}

### "for" 属性の使用例

```html
<label for="username">Click me</label>
<input type="text" id="username">
```

{{EmbedLiveSample('Using_the_for_attribute', '200', '50', '')}}

## アクセシビリティの考慮

### 対話型コンテンツ

`label` の中に{{HTMLElement("a", "アンカー")}}や{{HTMLElement("button", "ボタン")}}のような対話型要素を配置しないでください。そのようにすると、ユーザーが `label` に関連したフォーム入力欄を有効化する事が難しくなります。

#### 悪い例

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions">
  <a href="terms-and-conditions.html">利用規約と利用条件</a>に同意します。
</label>
```

#### 良い例

```html example-good
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions">
  利用規約と利用条件に同意します。
</label>
<p>
  <a href="terms-and-conditions.html">利用規約と利用条件を読む</a>
</p>
```

### 見出し

見出しは一般的に[ナビゲーションエイド](/ja/docs/Web/HTML/Element/Heading_Elements#Navigation)として使用されるため、 `<label>` の中に[ヘッダー要素](/ja/docs/Web/HTML/Element/Heading_Elements)を配置すると、数多くの種類の支援技術を妨げることになります。ラベルの文字列を視覚的に調整する必要がある場合は、代わりに `<label>` 要素に CSS クラスを適用してください。

[フォーム](/ja/docs/Web/HTML/Element/form)、またはフォームのセクションにタイトルが必要な場合は、 {{HTMLElement("fieldset")}} の中に {{HTMLElement("legend")}} を配置して使用してください。

#### 悪い例

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text">
</label>
```

#### 良い例

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text">
</label>
```

### ボタン

{{HTMLElement("input")}} 要素に `type="button"` がついた宣言に妥当な `value` 属性があれば、関連付けるラベルは必要ありません。ラベルを付けると、支援技術がボタン入力をどう解釈するかをじゃまする可能性があります。 {{HTMLElement("button")}} 要素でも同じことが言えます。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
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
          href="/ja/docs/Web/Guide/HTML/Content_categories#ラベル付け可能"
          >ラベル付け可能</a
        >要素を入れてはならない。
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

| 仕様書                                                                                                         | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'forms.html#the-label-element', '&lt;label&gt;')}}           | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'sec-forms.html#the-label-element', '&lt;label&gt;')}}       | {{Spec2('HTML5 W3C')}}     |          |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.9.1', '&lt;label&gt;')}}               | {{Spec2('HTML4.01')}}     |          |
| [HTML 4.0 Specification \<label> の定義](https://www.w3.org/TR/REC-html40-971218/interact/forms.html#h-17.9.1) | {{Spec2('HTML4.01')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat("html.elements.label")}}
