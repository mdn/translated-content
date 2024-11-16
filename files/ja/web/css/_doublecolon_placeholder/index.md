---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 59ef5b046557b45a515b654458667e6da6d0f4aa
---

{{CSSRef}}

**`::placeholder`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、 {{HTMLElement("input")}} または {{HTMLElement("textarea")}} 要素の[プレイスホルダーテキスト](/ja/docs/Web/HTML/Element/input#placeholder)を表します。

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

セレクターに `::placeholder` を使ったルールを使用できるのは、 {{cssxref("::first-line")}} 擬似要素が適用できる CSS プロパティだけです。

> [!NOTE]
> 多くのブラウザーでは、プレイスホルダー文字列の外見は既定で半透明または明るい灰色です。

## 構文

```css
::placeholder {
  /* ... */
}
```

## アクセシビリティの考慮

### 色のコントラスト

#### コントラスト比

プレイスホルダー文字列はふつう、どのような入力が正しいかを示すものであり、実際の入力ではないことを示すために、薄い色になっています。

プレイスホルダー文字列と入力欄の背景色のコントラスト比が、弱視の人が読むことができるために十分であることと同時に、プレイスホルダー文字列と入力テキストの差が違いが十分であり、プレイスホルダーが入力されたデータと誤認しないようになっていることを確認することが重要です。

色のコントラスト比は、プレイスホルダー文字列と入力欄の背景色の値とを比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、太字ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### ユーザビリティ

プレイスホルダー文字列のコントラストが十分に高いと、入力された値と誤解される可能性があります。プレイスホルダー文字列は人間が {{htmlelement("input")}} 要素の中にコンテンツを入力すると、消滅するものでもあります。どちらも、特に認知症の人にはフォームの入力を完了させるのに困難を伴う可能性があります。

プレイスホルダー情報を提供するには、他にも入力欄の外側で視覚的に近いところに表示し、 [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を使用して {{HTMLElement("input")}} とヒントをプログラム的に関連付ける方法もあります。

この実装方法では、上方が入力欄に入力されてもヒントを見ることができ、ページが読み込まれたときに既に入力されているように見えることがありません。多くの読み上げ技術は `aria-describedby` を使用して、入力欄のラベルのテキストを読み上げた後でヒントを読み上げ、読み上げソフトを使用している人は、追加情報が必要なければ読み上げを抑止することができます。

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

プレイスホルダー文字列は、 [Windows 高コントラストモード](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)では、ユーザーが入力した文字列と同じスタイルで表示されます。これは人によっては、中身が入力されたものか、それとも中身がプレイスホルダー文字列かを見分けることが難しくなります。

### ラベル

プレイスホルダーは {{htmlelement("label")}} 要素の置き換えではありません。 [`for`](/ja/docs/Web/HTML/Element/label#for) および [`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性の組み合わせを使用して入力欄とプログラム的に関連付けが行われていないラベルがないと、読み上げソフトのような支援技術が {{htmlelement("input")}} 要素を解釈できなくなります。

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## 例

### プレイスホルダーの外見の変更

この例では、プレースホルダーテキストのスタイルに加えることができる調整項目を紹介します。

#### HTML

```html
<input placeholder="こちらに入力..." />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
```

#### 結果

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### 不透明なテキスト

Firefox など一部のブラウザーでは、プレースホルダーの既定の {{cssxref("opacity")}} を 100% 未満に設定しています。もし、プレースホルダーのテキストを完全に不透明化したい場合は、 `opacity` に `1` を設定してください。

#### HTML

```html
<input placeholder="既定の透明度..." />
<input placeholder="完全に不透明..." class="force-opaque" />
```

#### CSS

```css
::placeholder {
  color: green;
}

.force-opaque::placeholder {
  opacity: 1;
}
```

#### 結果

{{EmbedLiveSample("Opaque_text", 200, 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":placeholder-shown")}} 擬似クラスは、アクティブなプレイスホルダーを*持つ*要素にスタイルを適用できます。
- 関連する HTML 要素: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML フォーム](/ja/docs/Learn/Forms)
