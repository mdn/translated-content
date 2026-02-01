---
title: ::placeholder
slug: Web/CSS/Reference/Selectors/::placeholder
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`::placeholder`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、 {{HTMLElement("input")}} または {{HTMLElement("textarea")}} 要素の[プレイスホルダーテキスト](/ja/docs/Web/HTML/Reference/Elements/input#placeholder)を表します。

{{InteractiveExample("CSS デモ: ::placeholder", "tabbed-shorter")}}

```css interactive-example
input {
  margin-top: 0.5rem;
}

input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: red;
}
```

```html interactive-example
<label for="first-name">電話番号:</label><br />

<input
  id="first-name"
  type="tel"
  name="phone"
  minlength="9"
  maxlength="9"
  placeholder="9 桁の数値で" />
```

セレクターに `::placeholder` を使ったルールを使用できるのは、 {{cssxref("::first-line")}} 擬似要素が適用できる CSS プロパティだけです。

> [!NOTE]
> 多くのブラウザーでは、プレイスホルダー文字列の外見は既定で半透明または明るい灰色です。

## 構文

```css
::placeholder {
  /* ... */
}
```

## アクセシビリティ

### 色のコントラスト

#### コントラスト比

プレイスホルダー文字列はふつう、どのような入力が正しいかという例を示すものであり、実際の入力ではないことを示すために、薄い色になっています。

プレイスホルダー文字列と入力欄の背景色のコントラスト比について確認すべき重要なことは、弱視の人が読むことができるために十分であることと同時に、プレイスホルダー文字列と入力テキストの差が違いが十分で、プレイスホルダー文字列が入力された文字列だと誤認されないようになっていることです。

色のコントラスト比は、プレイスホルダー文字列と入力欄の背景色の値とを比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、太字ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### ユーザビリティ

コントラストが十分に高いプレイスホルダー文字列とは、すでに入力された文字列と誤解される可能性があるものです。またプレイスホルダー文字列とは、人間が {{htmlelement("input")}} 要素の中にコンテンツを入力すると、消滅するものでもあります。いずれにしろ、特に認知機能に障害を持つ人にとっては、フォームの入力を完了させるときに、困難を伴う可能性があります。

プレイスホルダーの情報を提供する他の方法としては、入力欄の外側で視覚的に近いところに表示し、 [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) を使用して {{HTMLElement("input")}} とヒントをプログラム的に関連付ける方法もあります。

この実装方法では、情報が入力欄に入力されてもヒントを見ることができ、なおかつページが読み込まれたときに既に文字列が入力されているように見えることがありません。多くの読み上げ技術は `aria-describedby` を使用して、入力欄のラベルのテキストを読み上げた後でヒントを読み上げ、読み上げソフトを使用している人は、追加情報が必要なければ読み上げを抑止することができます。

```html
<label for="user-email">Your email address</label>
<span id="user-email-hint" class="input-hint">Example: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Windows 高コントラストモード

プレイスホルダー文字列は、[Windows 高コントラストモード](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)では、ユーザーが入力した文字列と同じスタイルで表示されます。人によってはこれにより、中身が入力された文字列なのか、それとも中身がプレイスホルダー文字列なのかを見分けることが困難になります。

### ラベル

プレイスホルダーは {{htmlelement("label")}} 要素の置き換えではありません。 [`for`](/ja/docs/Web/HTML/Reference/Elements/label#for) および [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性の組み合わせを使用し、入力欄とプログラム的に関連付けが行われていないラベルでは、読み上げソフトのような支援技術が {{htmlelement("input")}} 要素を解釈できなくなります。

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## 例

### プレイスホルダーの外見の変更

この例では、プレースホルダーテキストのスタイルに加えることができる調整項目を紹介します。

#### HTML

```html
<input placeholder="こちらに入力" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
  opacity: 0.5;
}
```

#### 結果

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### 不透明なテキスト

一部のブラウザーではプレースホルダーテキストの不透明度が低下します。完全に不透明なテキストが必要な場合は、{{CSSXref("color")}} プロパティの値を明示的に設定してください。対応する入力要素と同じ色にするには、[`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) 値を使用することができます。

#### HTML

```html
<input placeholder="ブラウザーが設定した色" />
<input placeholder="入力欄と同じ色" class="explicit-color" />
<input placeholder="半透明のテキスト色" class="opacity-change" />
```

#### CSS

```css
input {
  font-weight: bold;
  color: green;
}

.explicit-color::placeholder {
  /* 入力要素と同じ色を使用し、ブラウザーでデフォルト色を設定するのを避ける */
  color: currentColor;
}

.opacity-change::placeholder {
  /* 半透明のテキスト */
  color: color-mix(in srgb, currentColor 70%, transparent);
}
```

#### 結果

{{EmbedLiveSample("default_color", 200, 60)}}

> [!NOTE]
> ブラウザーによってプレースホルダーテキストのデフォルト色が異なります。例えば、Firefox は入力要素の色を不透明度 54% で使用し、Chrome は `darkgray` 色を使用します。ブラウザ間でプレースホルダーテキストの色を統一したい場合は、`color` を明示的に設定してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":placeholder-shown")}} 擬似クラスは、アクティブなプレイスホルダーを*持つ*要素にスタイルを適用できます。
- 関連する HTML 要素: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)
