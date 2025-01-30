---
title: list-style
slug: Web/CSS/list-style
l10n:
  sourceCommit: f30dffedcab86e62919265f08238ed712434a817
---

{{CSSRef}}

**`list-style`** は CSS の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、リストのすべてのスタイルプロパティを設定します。

{{EmbedInteractiveExample("pages/css/list-style.html")}}

このプロパティの値はリストアイテム、すなわち {{HTMLElement("li")}} 要素や `{{cssxref("display")}}: list-item;` が設定された要素に適用されます。このプロパティは継承されるので、親要素（ふつうは {{HTMLElement("ol")}} または {{HTMLElement("ul")}}）に設定すれば、同じリストスタイルを内部のすべてのアイテムに適用できます。

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

/* 2 つの値 */
list-style: georgian outside;
list-style: url("img/pip.svg") inside;

/* 3 つの値 */
list-style: lower-roman url("img/shape.png") outside;

/* キーワード値 */
list-style: none;

/* グローバル値 */
list-style: inherit;
list-style: initial;
list-style: revert;
list-style: revert-layer;
list-style: unset;
```

`list-style` プロパティは 1 つ、2 つ、3 つの値を任意の順序で指定します。 {{cssxref("list-style-type")}} と {{cssxref("list-style-image")}} が両方とも設定された場合、 `list-style-type` は画像が利用できない場合の予備として使用されます。

### 値

- {{cssxref("list-style-type")}}
  - : `<counter-style>`、{{cssxref("string")}}、`none` のいずれかです。一括指定で省略された場合は、既定値の `disc` の値が使用されます。 {{cssxref("list-style-type")}} を参照して下さい。
- {{cssxref("list-style-image")}}
  - : {{cssxref("image")}} または `none` です。省略された場合、既定値の `none` が使用されます。 {{cssxref("list-style-image")}} を参照して下さい。
- {{cssxref("list-style-position")}}
  - : `inside` か `outside` のどちらかです。省略された場合、{{cssxref("list-style-position")}} を参照して下さい。
- `none`
  - : リストスタイルは使用されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

Safari では、 `list-style` 値が `none` である場合、それが {{HTMLElement("nav")}} のナビゲーション要素内に含まれていない限り、順序付きリストまたは順序なしリストをアクセシビリティツリー内のリストとして認識しません。これは[意図的な動作](https://webkit.org/b/170179#c1)であり、バグと認識されていません。

リストを確実にリストとしてアナウンスするようにするには、 [`role="list"`](/ja/docs/Web/Accessibility/ARIA/Roles/list_role) を {{HTMLElement("ol")}} および {{HTMLElement("ul")}} 要素に設定しておください。特に、このリストが `<nav>` に含まれていない場合はなおさらです。これによって、デザインに影響を与えることなく、リストの意味を回復することができます。

```html
<ul role="list">
  <li>アイテム</li>
  <li>他のアイテム</li>
</ul>
```

ARIA `role` がコードに適さない場合は、代わりに CSS を使用することができます。各リストアイテムの前に、テキストや画像などの空ではない[擬似コンテンツ](/ja/docs/Web/CSS/content)を追加すると、リストの意味を復元できますが、視覚的な外観に影響します。 Safari は、追加された擬似コンテンツがアクセシビリティのあるコンテンツとして十分かどうかを判断し、十分であればリストの意味を復元します。通常、 Safari はテキストと画像で十分であるとみなします。そのため、以下に示す `content: "+ ";` が機能します（ただし、デザインに影響を与えないようにするには、追加のスタイル設定が必要です）。

```css
ul {
  list-style: none;
}

ul li::before {
  content: "+ ";
}
```

`content: "";` （空文字列）の宣言は無視されます。また、 `content` の値は `content: " ";` のように空白だけの場合も無視されます。

これらの CSS による回避策は HTML での解決ができない場合のみに使用してください。また、ユーザーの使い勝手に悪影響を与えないことをテストした後にのみ使用してください。

- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2023)
- [VoiceOver and list-style-type: none](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html) (2017)
- [MDN "WCAG を理解する ― ガイドライン 1.3 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [Understanding success criterion 1.3.1: Info and relationships | WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

## 例

### リストスタイルの種類と位置の設定

#### HTML

```html live-sample___setting_list_style_type_and_position
リスト 1
<ul class="one">
  <li>リストアイテム 1</li>
  <li>リストアイテム 2</li>
  <li>リストアイテム 3</li>
</ul>
リスト 2
<ul class="two">
  <li>リストアイテム A</li>
  <li>リストアイテム B</li>
  <li>リストアイテム C</li>
</ul>
```

#### CSS

```css live-sample___setting_list_style_type_and_position
.one {
  list-style: circle;
}

.two {
  list-style: square inside;
}
```

#### 例

{{EmbedLiveSample('Setting_list_style_type_and_position', 'auto', 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 構成要素のプロパティ: {{Cssxref("list-style-type")}}、{{Cssxref("list-style-image")}}、{{Cssxref("list-style-position")}}
- {{cssxref("::marker")}} 擬似要素
- [CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)モジュール
