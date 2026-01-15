---
title: :valid
slug: Web/CSS/Reference/Selectors/:valid
original_slug: Web/CSS/:valid
---

**`:valid`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、内容物の[検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に成功した {{htmlelement("input")}} 要素 やその他の {{HTMLElement("form")}} 要素を表します。これにより、有効な入力欄に、データの形式が適切であることをユーザーが確認しやすくなる外観を簡単に適用できるようになります。

```css
/* 有効な <input> をすべて選択 */
input:valid {
  background-color: powderblue;
}
```

{{InteractiveExample("CSS デモ: :valid", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid {
  background-color: ivory;
  border: none;
  outline: 2px solid deepskyblue;
  border-radius: 5px;
  accent-color: gold;
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

この擬似クラスは、入力値が正しい入力欄をユーザーに強調表示するのに便利です。

## 構文

```
:user-valid
```

## 例

### 有効／無効なフォームフィールドを示す

この例では、このような構造を使用しています。この構造には、コンテンツを生成するための追加の `<span>` が含まれており、これらを使用して、データが有効であるか無効であるかの表示を提供します。

```html
<div>
  <label for="fname">First name *: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

これらの表示を提供するために、以下の CSS を使用します。

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

生成されたコンテンツを相対的に配置できるように `<span>` を `position: relative` に設定します。そして、フォームのデータが有効か無効かに応じて、生成されるコンテンツを絶対位置指定で配置します。無効なデータには、さらに軽く緊急性を表すために、無効になったときに太い赤い枠線をつけています。

> [!NOTE]
> これらのラベルを追加するために `::before` を使ったのは、すでに `::after` を "required" ラベルに使っていたからです。

以下で試してみることができます。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

必須のテキスト入力は、空の状態では無効ですが、何かが記入されている状態では有効であることに注意してください。一方、 email の入力は、必須ではないため、空の場合は有効ですが、適切な email アドレスでないものが含まれている場合は無効となります。

## アクセシビリティの考慮

緑色は入力が有効であることを示すためによく使われます。色盲の人によっては、それ以外の色によらない識別方法を伴わないと、入力状態が判別できないことがあります。通常、文字列やアイコンを使用して説明します。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の検証関連の擬似クラス: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [フォームデータの検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- JavaScript からの[検証状態](/ja/docs/Web/API/ValidityState)へのアクセス
