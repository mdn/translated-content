---
title: min-height
slug: Web/CSS/Reference/Properties/min-height
original_slug: Web/CSS/min-height
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

**`min-height`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の最小高を設定します。これは {{cssxref("height")}} プロパティの[使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)が、`min-height` で指定した値を下回ることを防ぎます。

{{InteractiveExample("CSS デモ: min-height")}}

```css interactive-example-choice
min-height: 150px;
```

```css interactive-example-choice
min-height: 7em;
```

```css interactive-example-choice
min-height: 75%;
```

```css interactive-example-choice
min-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the minimum height. <br />If there is
    more content than the minimum the box will grow to the height needed by the
    content.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

`min-height` の値が {{cssxref("max-height")}} および {{cssxref("height")}} の値より大きい場合は、`min-height` の値が要素の高さになります。

## 構文

```css
/* <length> 値 */
min-height: 3.5em;
min-height: anchor-size(height);
min-height: anchor-size(--myAnchor block, 200px);

/* <percentage> 値 */
min-height: 10%;

/* キーワード値 */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fit-content(20em);
min-height: stretch;

/* グローバル値 */
min-height: inherit;
min-height: initial;
min-height: revert;
min-height: revert-layer;
min-height: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : `min-height` を絶対的な値で定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : `min-height` を包含ブロックの高さに対するパーセント値で定義します。
- `auto`
  - : ブラウザーが指定された要素の `min-height` を計算して選択します。
- `max-content`
  - : 内容物が推奨する `min-height` です。
- `min-content`
  - : 内容物の最小の `min-height` です。
- `fit-content`
  - : 利用できる空間を使用しますが、 [max-content](/ja/docs/Web/CSS/Reference/Values/max-content) を超えないようにします。すなわち、 `min(max-content, max(min-content, stretch))` です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空白を指定された引数で置き換えた `fit-content` 式を使用します。すなわち、 `min(max-content, max(min-content, 引数))` です。
- `stretch`
  - : 要素の[マージンボックス](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ボックスの構成)の最小の高さを、[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)の高さに制限します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 `100%` と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/Web/CSS/Reference/Properties/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

    > [!NOTE]
    > ブラウザーが `stretch` 値のために使用する別名と実装状況については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### min-height の設定

```css
table {
  min-height: 75%;
}

form {
  min-height: 0;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("max-height")}}
- {{Cssxref("height")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("box-sizing")}}
- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
