---
title: :invalid
slug: Web/CSS/Reference/Selectors/:invalid
original_slug: Web/CSS/:invalid
---

**`:invalid`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 {{HTMLElement("input")}} 要素や {{HTMLElement("form")}} 要素のうち内容が[検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に失敗したものを表します。

```css
/* 無効な <input> を選択 */
input:invalid {
  background-color: pink;
}
```

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
  <label for="email">Email Address:</label>
  <input id="email" name="email" type="email" value="na@me@example.com" />

  <label for="secret">Secret Code: (lower case letters)</label>
  <input id="secret" name="secret" type="text" value="test" pattern="[a-z]+" />

  <label for="age">Your age: (18+)</label>
  <input id="age" name="age" type="number" value="5" min="18" />

  <label
    ><input name="tos" type="checkbox" required checked /> - Do you agree to
    ToS?</label
  >
</form>
```

この擬似クラスは、フィールドのエラーをユーザーに強調表示するのに便利です。

## 構文

```
:invalid
```

## 例

### 要素が検証に成功すると緑色に、失敗すると赤色に着色されるフォーム

### HTML

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
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

### 結果

{{EmbedLiveSample('Examples', 600, 120)}}

## アクセシビリティの考慮

赤は入力が無効であることを示すためによく使われます。色盲の人によっては、それ以外の色によらない識別方法を伴わないと、入力状態が判別できないことがあります。通常、文字列やアイコンを使用して説明します。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## 注

### ラジオボタン

グループのラジオボタンの 1 つが `required` の場合、 `:invalid` 擬似クラスはグループ内のボタンが 1 つも選択されていない時に選択されます。（グループ化されたラジオボタンは同じ `name` 属性を共有しています。）

### Gecko の既定値

既定で Gecko は `:invalid` 擬似クラスのスタイルを適用しません。しかし、 `:invalid` の場合のサブセットに適用される {{cssxref(":-moz-ui-invalid")}} 擬似クラスにスタイル（{{Cssxref("box-shadow")}} プロパティを用いて赤く「伸びる」スタイル）を適用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 検証に関する他の擬似クラス: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- 関連する Mozilla の擬似クラス: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [フォームデータの検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- JavaScript からの [validity state](/ja/docs/Web/API/ValidityState) へのアクセス
