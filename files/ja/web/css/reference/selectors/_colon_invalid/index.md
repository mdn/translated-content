---
title: CSS `:invalid` 擬似クラス
short-title: :invalid
slug: Web/CSS/Reference/Selectors/:invalid
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:invalid`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 {{HTMLElement("input")}} 要素や {{HTMLElement("form")}} 要素のうち内容が[検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に失敗したものを表します。

{{InteractiveExample("CSS デモ: :invalid", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:invalid {
  background-color: ivory;
  border: none;
  outline: 2px solid red;
  border-radius: 5px;
}
```

```html interactive-example
<form>
  <label for="email">メールアドレス:</label>
  <input id="email" name="email" type="email" value="na@me@example.com" />

  <label for="secret">秘密のコード: (小文字)</label>
  <input id="secret" name="secret" type="text" value="test" pattern="[a-z]+" />

  <label for="age">年齢: (18 以上)</label>
  <input id="age" name="age" type="number" value="5" min="18" />

  <label
    ><input name="tos" type="checkbox" required checked /> - 規約に同意しますか？</label
  >
</form>
```

この擬似クラスは、フィールドのエラーをユーザーに強調表示するのに便利です。

## 構文

```css
:invalid {
  /* ... */
}
```

## アクセシビリティ

入力が無効であることを示す際、一般的に赤色が使用されます。特定の種類の色覚異常のある人は、色に頼らずに意味を伝える追加の指標が併記されていない限り、入力の状態を判断することができません。一般的には、説明文やアイコンなどが使用されます。

- [MDN "WCAG を理解する、ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## 例

### 要素に色付けして検証結果を表示

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">URL を入力して下さい:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">メールアドレスを入力して下さい:</label>
    <input type="email" id="email_input" required />
  </div>
</form>
```

#### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: maroon;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

#### 結果

{{EmbedLiveSample('Coloring elements to show validation', 600, 200)}}

### 段階的にセクションを表示

この例では、`:invalid` と [後続兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)である `~` を組み合わせて、フォームを段階的に表示するようにしています。これにより、フォームはまず最初のアイテムを表示させ、ユーザーがそれぞれのアイテムを入力するたびに次のアイテムが表示されます。フォーム全体が完成すると、ユーザーはフォームを送信することができます。

#### HTML

```html
<form>
  <fieldset>
    <legend>個人情報</legend>
    <label for="form-name">名前</label><br />
    <input type="text" name="name" id="form-name" required />
  </fieldset>

  <fieldset>
    <legend>連絡先情報</legend>
    <label for="form-email">メールアドレス</label><br />
    <input type="email" name="email" id="form-email" required />
  </fieldset>

  <fieldset>
    <legend>メッセージ</legend>
    <label for="form-message">メッセージ</label><br />
    <textarea name="message" id="form-message" required></textarea>
  </fieldset>

  <button type="submit" name="send">送信</button>
</form>
```

#### CSS

```css
/* 無効な fieldset の後の fieldset を非表示にする */
fieldset:invalid ~ fieldset {
  display: none;
}

/* フォームが不正な間は、ボタンを淡色表示にしてクリック不可にする */
form:invalid button {
  opacity: 0.3;
  pointer-events: none;
}

input,
textarea {
  box-sizing: border-box;
  width: 100%;
  font-family: monospace;
  padding: 0.25em 0.5em;
}

button {
  width: 100%;
  border: thin solid darkgrey;
  font-size: 1.25em;
  background-color: darkgrey;
  color: white;
}
```

#### 結果

{{EmbedLiveSample('段階的にセクションを表示', 600, 300)}}

## メモ

### ラジオボタン

グループのラジオボタンの 1 つが `required` の場合、`:invalid` 擬似クラスはグループ内のボタンが 1 つも選択されていない時に選択されます。（グループ化されたラジオボタンは同じ `name` 属性を共有しています。）

### Gecko のデフォルト値

デフォルトで Gecko は `:invalid` 擬似クラスにスタイルを適用しません。しかし、{{Cssxref("box-shadow")}} プロパティを用いて赤く「伸びる」スタイルを、{{cssxref(":-moz-ui-invalid")}} 擬似クラス（`:invalid` の場合のサブセットに適用される）に適用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 検証に関する他の擬似クラス: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- 関連する Mozilla の擬似クラス: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [フォームデータの検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- JavaScript からの [validity state](/ja/docs/Web/API/ValidityState) へのアクセス
