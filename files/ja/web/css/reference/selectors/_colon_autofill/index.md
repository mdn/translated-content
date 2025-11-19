---
title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
original_slug: Web/CSS/:autofill
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

**`:autofill`** は CSS の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 {{HTMLElement("input")}} 要素の値がブラウザーによって自動補完された時に一致します。このクラスはユーザーがフィールドを編集すると一致しなくなります。

{{InteractiveExample("CSS デモ: :autofill", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px solid darkorange;
}
```

```html-nolint interactive-example
<form>
  <p>テキストボックスをクリックし、ブラウザーが提案するオプションから任意のものを選択してください。</p>

  <label for="name">名前</label>
  <input id="name" name="name" type="text" autocomplete="name" />

  <label for="email">メールアドレス</label>
  <input id="email" name="email" type="email" autocomplete="email" />

  <label for="country">国</label>
  <input id="country" name="country" type="text" autocomplete="country-name" />
</form>
```

> [!NOTE]
> 多くのブラウザーのユーザーエージェントスタイルシートでは、 `:-webkit-autofill` スタイル定義に `!important` を使用しており、 JavaScript によるハックで解決しない限り、ウェブページから上書きすることができません。例えば、 Chrome では内部スタイルシートで次のようになっています。
>
> ```css
> background-color: rgb(232 240 254) !important;
> background-image: none !important;
> color: -internal-light-dark(black, white) !important;
> ```
>
> これは、 {{cssxref('background-color')}}, {{cssxref('background-image')}}, {{cssxref('color')}} に独自のルールを設定できないことを意味します。

## 構文

```css
:autofill {
  /* ... */
}
```

## 例

次の例は、 `:autofill` 擬似クラスを使用して、ブラウザーによって自動補完されたテキストフィールドの境界線を変更することを示しています。
[無効なセレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list#無効なセレクターリスト)を作成しないように、 `:-webkit-autofill` と `:autofill` は、 {{cssxref(":is()")}} を含む寛容なセレクターリストを使用して照合されます。

```css
input {
  border-radius: 3px;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px dotted orange;
}
```

```html
<form method="post" action="">
  <label for="email">メールアドレス</label>
  <input type="email" name="email" id="email" autocomplete="email" />
</form>
```

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Chromium issue 46543: Auto-filled input text box yellow background highlight cannot be turned off](https://crbug.com/46543)
- [WebKit bug 66032: Allow site authors to override autofilled fields' colors.](https://webkit.org/b/66032)
- [Mozilla bug 740979: implement `:-moz-autofill` pseudo-class on input elements with an autofilled value](https://bugzil.la/740979)
- [User Interface Module Level 4: more selectors](https://wiki.csswg.org/spec/css4-ui#more-selectors)
