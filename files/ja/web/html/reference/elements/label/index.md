---
title: "<label>: ラベル要素"
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: 7b8768d410a281446b0b95627c531d852e624353
---

**`<label>`** は [HTML](/ja/docs/Web/HTML) の要素で、ユーザーインターフェイスの項目のキャプションを表します。

{{InteractiveExample("HTML デモ: &lt;label&gt;", "tabbed-shorter")}}

```html interactive-example
<div class="preference">
  <label for="cheese">チーズが好き</label>
  <input type="checkbox" name="cheese" id="cheese" />
</div>

<div class="preference">
  <label for="peas">エンドウ豆が好き</label>
  <input type="checkbox" name="peas" id="peas" />
</div>
```

```css interactive-example
.preference {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0.5rem;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- [`for`](/ja/docs/Web/HTML/Reference/Attributes/for)
  - : この値は、同じ文書内の[ラベル付け可能](/ja/docs/Web/HTML/Guides/Content_categories#ラベル付け可能)なフォームコントロールの [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) であり、[この `<label>` をそのフォームコントロールに関連付けます](#ラベルとフォームコントロールの関連付け)。なお、 JavaScript が反映するプロパティは [`htmlFor`](/ja/docs/Web/API/HTMLLabelElement/htmlFor) です。

## 使用上の注意

### ラベルとフォームコントロールの関連付け

文書内で `for` 属性の値に一致する `id` 属性を持つ最初の要素が、この `label` 要素で「ラベル付けされたコントロール」になります（その `id` を持つ要素が実際に[ラベル付け可能要素](/ja/docs/Web/HTML/Guides/Content_categories#ラベル付け可能)である場合）。この要素がラベル付け可能でない場合は、 `for` 属性は何も効果がありません。もし、文書の後半に `id` の値に一致する他の要素があったとしても、それらは考慮されません。

複数の `<label>` 要素を同じフォームコントロールに関連付けすることができます。複数の `<label>` 要素の `for` 属性に同じ値を指定することで、そのコントロールは複数のラベルを持つことになります。

`<label>` を {{htmlelement("input")}} や {{htmlelement("textarea")}} などのフォーム要素と関連付けると、いくつかの利点が発生します。

- ラベルのテキストが、対応するテキスト入力欄に視覚的に関連付けられるだけではありません。プログラム的にも関連付けられます。つまり、例えばユーザーがフォーム入力欄にフォーカスを移動した時、読み上げソフトがラベルを読み上げ、支援技術のユーザーが何のデータを入力するべきか理解しやすくすることができます。
- 関連付けられたラベルをクリックして、入力欄自体をクリックした場合と同様に、入力欄にフォーカスを与えたりアクティブ化にしたりすることができます。こうしてヒット領域を拡大すると、タッチパネルの端末を使用している場合を含めて、入力欄をアクティブ化させやすくなります。

`<label>` をフォームコントロールと関連付けする方法は 2 つあり、一般に「明示的な関連付け」と「暗黙的な関連付け」と呼ばれます。

`<label>` 要素と `<input>` 要素を明示的に関連付けるには、最初に `id` 属性を `<input>` 要素に追加します。次に、`for` 属性を `<label>` 要素に追加します。`for` の値は `<input>` 要素の `id` と同じにします。

```html
<label for="peas">エンドウ豆が好きです</label>
<input type="checkbox" name="peas" id="peas" />
```

他の方法として、 `<input>` を直接 `<label>` の内側に入れることができますが、この場合は暗黙的な関連付けなので、 `for` および `id` 属性は必要ありません。

```html
<label>
  エンドウ豆が好きです
  <input type="checkbox" name="peas" />
</label>
```

> [!NOTE]
> `<label>` 要素は、 `for` 属性が含まれているコントロール要素を指している限り、 `for` 属性と内部のコントロール要素の両方を同時に設定できます。

これらの 2 つのメソッドは同等ですが、いくつか考慮点があります。

- 一般的なブラウザーと{{glossary("screen reader", "スクリーンリーダー")}}の組み合わせは、暗黙的な関連付けに対応していますが、すべての支援技術が対応しているわけではありません。
- デザインによっては、関連付けの種類がスタイル設定のしやすさに影響する場合があります。 `<label>` とフォームコントロールを親子関係ではなく兄弟要素にすると、別々の隣接ボックスとなり、グリッドやフレックスレイアウトで揃えるなど、よりカスタマイズ性の高いレイアウトが可能になります。
- 明示的な関連付けには、フォームコントロールが `id` 属性を保有し、かつその値が文書全体で一意であることが要求されます。これは特にコンポーネント化されたアプリケーションでは困難です。 React の [`useId()`](https://react.dev/reference/react/useId) など、フレームワークは多くの場合、独自の解決策を提供しますが、それでも適切な機能を実現させるには追加の調整が必要です。

一般に、外部ツールや支援技術との互換性を確実に実現するため、`for`属性による明示的な関連付けの使用を推奨します。実際、最大限の互換性を得るために、内側にある要素に同時に `id`/`for` 属性を指定することもできます。

ラベルがラベル付けするフォームコントロールは、 label 要素の _ラベル対象コントロール_ と呼ばれます。複数のラベルを同じフォームコントロールに関連付けることができます。

```html
<label for="username">名前を入力してください:</label>
<input id="username" name="username" type="text" />
<label for="username">名前を忘れてしまいましたか？</label>
```

`<label>` 要素に関連付けることができる要素には {{HTMLElement('button')}}, {{HTMLElement('input')}} （type="hidden"` を除く）, {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}}, {{HTMLElement('textarea')}} があります。

## アクセシビリティ

### 対話型コンテンツ

[暗黙的に関連付けられた](#ラベルとフォームコントロールの関連付け)フォームコントロール以外に、{{HTMLElement("a", "アンカー")}}や{{HTMLElement("button", "ボタン")}}などの追加の操作可能な要素を `<label>` 内に配置しないでください。そうすると、 `label` に関連付けられたフォーム入力要素をユーザーが操作しにくくなります。

**悪い例:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  <a href="terms-and-conditions.html">利用規約と利用条件</a>に同意します。
</label>
```

**良い例:**

```html example-good
<p>
  <a href="terms-and-conditions.html">利用規約と利用条件を読む</a>
</p>
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  利用規約と利用条件に同意します。
</label>
```

> [!NOTE]
> フォームコントロールより前に、利用規約へのリンクなど必要なコンテキストを配置することは良い習慣です。これにより、ユーザーはコントロールを操作する前にそれを読むことができます。

### 見出し

`<label>` の中に[見出し要素](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)を配置すると、数多くの種類の支援技術を妨げることになります。見出しは一般的に[ナビゲーションエイド](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements#ナビゲーション)として使用されるためです。ラベルの文字列を視覚的に調整する必要がある場合は、代わりに `<label>` 要素に CSS クラスを適用してください。

[フォーム](/ja/docs/Web/HTML/Reference/Elements/form)、またはフォームのセクションにタイトルが必要な場合は、 {{HTMLElement("legend")}} を {{HTMLElement("fieldset")}} の中に配置して使用してください。

**悪い例:**

```html example-bad
<label for="your-name">
  <h3>氏名</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

**良い例:**

```html example-good
<label class="large-label" for="your-name">
  氏名
  <input id="your-name" name="your-name" type="text" />
</label>
```

### ボタン

{{HTMLElement("input")}} 要素に `type="button"` がついた宣言に妥当な `value` 属性があれば、関連付けるラベルは必要ありません。ラベルを付けると、支援技術がボタン入力をどう解釈するかをじゃまする可能性があります。 {{HTMLElement("button")}} 要素でも同じことが言えます。

## 例

### 暗黙的なラベルの定義

```html
<label>ここをクリック <input type="text" /></label>
```

{{EmbedLiveSample('Defining an implicit label', '200', '50')}}

### "for" 属性をつけた明示的なラベルの定義

```html
<label for="username">クリックすると入力フィールドにフォーカスします</label>
<input type="text" id="username" />
```

{{EmbedLiveSample('Using_the_for_attribute', '200', '50')}}

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
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フォーム関連コンテンツ"
          >フォーム関連要素</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、ただし、子孫に <code>label</code> 要素を持つことはできない。ラベル付けの対象となるコントロール以外の<a
          href="/ja/docs/Web/HTML/Guides/Content_categories#ラベル付け可能"
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
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
