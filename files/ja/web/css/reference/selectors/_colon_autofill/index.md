---
title: CSS `:autofill` 擬似クラス
short-title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

**`:autofill`** は CSS の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 {{HTMLElement("input")}} 要素の値がブラウザーによって自動補完された時に一致します。このクラスはユーザーがフィールドを編集すると一致しなくなります。

{{InteractiveExample("CSS デモ: :autofill", "tabbed-shorter")}}

```css interactive-example
input {
  border: 3px solid black;
}
input:autofill {
  outline: 5px solid magenta;
  border: 3px dashed yellow;
}
```

```html-nolint interactive-example
<form>
  <p>テキストボックスをクリックし、ブラウザーが提案するオプションから任意のものを選択してください。</p>
  <p>
    <label for="name">名前</label>
    <input id="name" name="name" type="text" autocomplete="given-name" />
  </p>
  <p>
    <label for="email">メールアドレス</label>
    <input id="email" name="email" type="email" autocomplete="email" />
  </p>
  <p>
    <label for="country">国</label>
    <input
      id="country"
      name="country"
      type="text"
      autocomplete="country-name" />
  </p>
</form>
```

## 解説

`:autofill` 擬似クラスでは、ユーザーエージェントによって自動入力された未編集のコンテンツを含む {{htmlelement("input")}} 要素を選択します。自動入力は、ブラウザー設定で自動入力が有効になっている場合、または要素自体に [`autocomplete` 属性](/ja/docs/Web/HTML/Reference/Attributes/autocomplete)が設定されている場合に発生することがあります。

ユーザーがブラウザーの自動補完機能を使用してフォームコントロールを自動入力すると、選択内容に基づいて自動入力可能なすべてのフォームコントロールに値が入力されます。これらはすべて `:autofill` UI 状態と一致します。ユーザーがコントロールを編集すると、たとえ値が自動入力された値と同じであっても、そのコントロールは `:autofill` と一致しなくなります。

仕様書では、ベンダー接頭辞付きの `:-webkit-autofill` 擬似クラスを別名として収録しています。これは、ユーザーエージェントによって自動入力された input 要素にも一致しますが、ユーザーが自動入力されたフィールドを編集した場合は一致しなくなります。

多くのブラウザーのユーザーエージェントスタイルシートでは、スタイル宣言に `!important` が使用されており、一部のスタイルを上書きできない点に注意してください。たとえば、Chrome の内部スタイルシートには次のような記述があります。

```css-nolint
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color:
    light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
  color: fieldtext !important;
}
```

つまり、独自のルールにおいて、選択された自動入力された入力要素のデフォルトの {{cssxref('background-color')}}、 {{cssxref('background-image')}}、{{cssxref('color')}} の値を自身のルールで上書きすることはできませんが、{{cssxref('appearance')}} は上書き可能です。また、現在フォーカスされていない自動入力された要素については、これらのプロパティを上書きすることができます。

## 構文

```css
:autofill {
  /* ... */
}
```

## 例

次の例は、`:autofill` 擬似クラスを使用して、ブラウザーによって自動補完されたテキストフィールドの境界線を変更することを示しています。

### HTML

HTML `<input>` 要素を 3 つ含んでおり、それぞれに {{htmlelement("label")}} が関連付けられています。`name` と `email` は自動補完され、`:autofill` と一致する可能性が高いですが、`pet` の値は一致しない可能性が高いです。

```html
<form method="post" action="">
  <p>
    <label for="name">名前: </label>
    <input name="n" id="name" autocomplete="given-name" />
  </p>
  <p>
    <label for="email">メールアドレス</label>
    <input type="email" name="email" id="email" autocomplete="email" />
  </p>
  <p>
    <label for="pet">ペットの名前: </label>
    <input name="pet" id="pet" />
  </p>
</form>
```

### CSS

`<input>` 要素が `:autofill` 状態になった際、{{cssxref("border-radius")}}、{{cssxref("outline")}}、{{cssxref("border-color")}} を適用します。

```css
input {
  border-radius: 0px;
}

input:autofill {
  border-radius: 0.5lh;
  outline: 5px dashed magenta;
  border-color: yellow;
}
```

```css hidden
@supports not selector(:autofill) {
  body::before {
    content: "このブラウザーは :autofill セレクターに対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

### 結果

{{EmbedLiveSample('Examples')}}

`name` フィールドの自動補完を有効にすると、`name` と `email` の両方に丸みを帯びた枠線とマゼンタ色の輪郭が適用されますが、ユーザーエージェントのスタイルシートに `!important` フラグが設定されているため、枠線の表示は変わらない可能性があります。いずれかのフィールドを編集してみてください。値を編集すると、たとえ自動補完の値に戻したとしても、`:autofill` のスタイルが適用されなくなることに注目してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<input>` 擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
