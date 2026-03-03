---
title: direction
slug: Web/CSS/Reference/Properties/direction
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

> [!WARNING]
> 作成者は可能な限り `direction` CSS プロパティの使用を避け、代わりに HTML の [`dir`](/ja/docs/Web/HTML/Reference/Global_attributes/dir) グローバル属性を使用することを推奨します。

**`direction`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキスト、表やグリッドの列、水平方向のはみ出し方向を設定します。右書きの言語（ヘブライ語やアラビア語など）では `rtl` を、左書きの言語（英語やそれ以外の多くの言語）では `ltr` を使います。

なお、テキストの方向はふつうは文書内で（例えば [HTML の `dir` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/dir) で）定義するものであり、 `direction` プロパティ直接使用して行うものではありません。

{{InteractiveExample("CSS デモ: direction")}}

```css interactive-example-choice
direction: ltr;
```

```css interactive-example-choice
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}
```

## 構文

```css
/* キーワード値 */
direction: ltr;
direction: rtl;

/* グローバル値 */
direction: inherit;
direction: initial;
direction: revert;
direction: revert-layer;
direction: unset;
```

### 値

- `ltr`
  - : テキストやその他の要素は左から右へと進みます。これがデフォルト値です。
- `rtl`
  - : テキストやその他の要素は右から左へと進みます。

インラインレベル要素で `direction` プロパティに効果を持たせたいときは、{{Cssxref("unicode-bidi")}} プロパティの値が `embed` もしくは `override` である必要があります。

## 解説

このプロパティは、ブロックレベル要素のテキストの基本的な方向と、{{Cssxref("unicode-bidi")}} プロパティで作られた埋め込み (embeddings) の方向を設定します。また、テキストやブロックレベル要素のデフォルトの文字揃えや、表やグリッドの行内にセルが流れる方向を決めます。

HTML の `dir` 属性とは異なり、`direction` プロパティは表の列から表のセルには継承されません。これは CSS の継承が文書ツリーに従うためで、表のセルは表の列の中ではなく、行の中にあるからです。

`direction` プロパティと {{cssxref("unicode-bidi")}} プロパティのみが、 {{cssxref("all")}} 一括指定プロパティの影響を受けません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 右書きの方向を設定

以下の例では、 2 つのテキストがあり、どちらも `direction: rtl` を使って表示されています。アラビア語のテキストはこの設定で正しく表示されますが、日本語のテキストは句点が異常な位置に表示されるようになりました。

```css
blockquote {
  direction: rtl;
  width: 300px;
}
```

```html
<blockquote>
  <p>この段落は日本語ですが、間違って右から左へ書かれています。</p>
  <p></p>
</blockquote>

<blockquote>
  <p>هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
  <p></p>
</blockquote>
```

{{EmbedLiveSample('Setting_right-to-left_direction', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("unicode-bidi")}}
- {{CSSxRef("writing-mode")}}
- SVG の {{SVGAttr("direction")}} 属性
- HTML の [`dir`](/ja/docs/Web/HTML/Reference/Global_attributes/dir) グローバル属性
- [垂直フォームコントロールの作成](/ja/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [テキストの様々な方向の扱い](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
