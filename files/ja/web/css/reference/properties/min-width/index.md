---
title: min-width
slug: Web/CSS/Reference/Properties/min-width
original_slug: Web/CSS/min-width
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

**`min-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の最小幅を設定します。これは {{Cssxref("width")}} プロパティの[使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)が、`min-width` で指定した値を下回ることを防ぎます。

{{InteractiveExample("CSS デモ: min-width")}}

```css interactive-example-choice
min-width: 150px;
```

```css interactive-example-choice
min-width: 20em;
```

```css interactive-example-choice
min-width: 75%;
```

```css interactive-example-choice
min-width: 40ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Change the minimum width.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

`min-width` の値が {{Cssxref("max-width")}} および {{Cssxref("width")}} の値より大きい場合は、`min-width` の値が要素の幅になります。

## 構文

```css
/* <length> 値 */
min-width: 3.5em;
min-width: anchor-size(width);
min-width: anchor-size(--myAnchor self-inline, 200%);

/* <percentage> 値 */
min-width: 10%;

/* キーワード値 */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fit-content(20em);
min-width: stretch;

/* グローバル値 */
min-width: inherit;
min-width: initial;
min-width: revert;
min-width: revert-layer;
min-width: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : `min-width` を絶対的な値で定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : `min-width` を包含ブロックの幅に対するパーセント値で定義します。
- `auto`
  - : 既定値です。指定した要素の自動値のソースは、その表示値によって異なります。ブロックボックス、インラインボックス、インラインブロック、および表レイアウトボックスすべてでは、`auto` は `0` に解決されます。

    [フレックスアイテム](/ja/docs/Glossary/Flex_Item)およびグリッドアイテムの場合、最小幅の値は、 `width` プロパティの値などの指定された推奨サイズ、または要素にアスペクト比が設定され、高さが確定しているサイズである場合は変換されたサイズ、それ以外は最小コンテンツサイズが使用されます。フレックスアイテムまたはグリッドアイテムが{{glossary("scroll container","スクロールコンテナー")}}である場合、またはグリッドアイテムが複数のフレックスカラムトラックにまたがる場合、自動最小サイズは `0` になります。

- `max-content`
  - : 内容物の推奨する `min-width` です。
- `min-content`
  - : 内容物の最小の `min-width` です。
- `fit-content`
  - : 利用できる空間を使用しますが、 [`max-content`](/ja/docs/Web/CSS/Reference/Values/max-content) を超えないようにします。すなわち、 `min(max-content, max(min-content, stretch))` です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空白を指定された引数で置き換えた `fit-content` 式を使用します。すなわち、 `min(max-content, max(min-content, 引数))` です。
- `stretch`
  - : 要素の[マージンボックス](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ボックスの構成)の最小の幅を、[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)の幅に制限します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 `100%` と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/Web/CSS/Reference/Properties/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

    > [!NOTE]
    > ブラウザーが `stretch` 値のために使用する別名と実装状況については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 要素の最小幅を設定

```css
table {
  min-width: 75%;
}

form {
  min-width: 0;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("max-width")}}
- {{Cssxref("width")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("box-sizing")}}
- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
