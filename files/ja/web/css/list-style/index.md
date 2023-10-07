---
title: list-style
slug: Web/CSS/list-style
---

{{CSSRef}}

**`list-style`** は CSS の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、リストのすべてのスタイルプロパティを設定します。

{{EmbedInteractiveExample("pages/css/list-style.html")}}

> **メモ:** このプロパティはリスト項目、すなわち `{{cssxref("display")}}: list-item;` の要素に適用されます。[既定では](https://www.w3.org/TR/html5/rendering.html#lists) {{HTMLElement("li")}} 要素が含まれます。このプロパティは継承されるので、親要素 (ふつうは {{HTMLElement("ol")}} または {{HTMLElement("ul")}}) に設定すれば、同じリストスタイルを内部のすべての項目に適用できます。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`list-style-image`](/ja/docs/Web/CSS/list-style-image)
- [`list-style-position`](/ja/docs/Web/CSS/list-style-position)
- [`list-style-type`](/ja/docs/Web/CSS/list-style-type)

## 構文

```css
/* type */
list-style: square;

/* image */
list-style: url("../img/shape.png");

/* position */
list-style: inside;

/* type | position */
list-style: georgian inside;

/* type | image | position */
list-style: lower-roman url("../img/shape.png") outside;

/* キーワード値 */
list-style: none;

/* グローバル値 */
list-style: inherit;
list-style: initial;
list-style: revert;
list-style: unset;
```

`list-style` プロパティは 1 つ、2 つ、3 つのキーワードを任意の順序で指定します。 {{cssxref("list-style-type")}} と {{cssxref("list-style-image")}} が両方とも設定された場合、 `list-style-type` は画像が利用できない場合の予備として使用されます。

### 値

- {{cssxref("list-style-type")}}
  - : {{cssxref("list-style-type")}} を参照して下さい。
- {{cssxref("list-style-image")}}
  - : {{cssxref("list-style-image")}} を参照して下さい。
- {{cssxref("list-style-position")}}
  - : {{cssxref("list-style-position")}} を参照して下さい。
- `none`
  - : リストスタイルは使用されません。

## アクセシビリティの考慮

注意すべき例外として、Safari は順序なしリストで `list-style` の値に `none` が適用されると、アクセシビリティツリー上でリストとして認識しません。

この問題に対処する最も簡単な方法は、明示的に `role="list"` をマークアップ内の `<ul>` 要素に追加することです。これにより、デザインに影響を与えることなく、リストの意味を復元することができます。

マークアップを変更できない場合の CSS のみの解決策もあります。一つは、それぞれのリスト項目の前に[ゼロ幅スペース](https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AD%E5%B9%85%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9)を[擬似コンテンツ](/ja/docs/Web/CSS/content)として追加することです。

```css
ul {
  list-style: none;
}

ul li::before {
  content: "\200B";
}
```

もう一つは、 list-style プロパティに url の値を適用する方法です。

```css
nav ol,
nav ul {
  list-style: none;
}

/* こうします */

nav ol,
nav ul {
  list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
}
```

これらの CSS による回避策は HTML での解決ができない場合のみに使用してください。また、ユーザーの使い勝手に悪影響を与えないことをテストした後にのみ使用してください。

- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)
- [VoiceOver and list-style-type: none – Unfettered Thoughts](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
- [MDN "WCAG を理解する ― ガイドライン 1.3 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_list_style_type_and_position">リストスタイルの種類と位置の設定</h3>

#### HTML

```html
List 1
<ul class="one">
  <li>List Item1</li>
  <li>List Item2</li>
  <li>List Item3</li>
</ul>
List 2
<ul class="two">
  <li>List Item A</li>
  <li>List Item B</li>
  <li>List Item C</li>
</ul>
```

#### CSS

```css
.one {
  list-style: circle;
}

.two {
  list-style: square inside;
}
```

#### 例

{{EmbedLiveSample('Setting_list_style_type_and_position', 'auto', 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style-type")}}、{{Cssxref("list-style-image")}}、{{Cssxref("list-style-position")}}
