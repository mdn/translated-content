---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

**`scrollbar-width`** プロパティは、要素のスクロールバーが表示される時の最大の太さを設定することができます。

## 構文

```css
/* キーワード値 */
scrollbar-width: auto;
scrollbar-width: thin;
scrollbar-width: none;

/* グローバル値 */
scrollbar-width: inherit;
scrollbar-width: initial;
scrollbar-width: revert;
scrollbar-width: revert-layer;
scrollbar-width: unset;
```

### 値

- `<scrollbar-width>`

  - : スクロールバーの幅を、長さまたはキーワードのどちらかで定義します。キーワードが使用する場合は、以下の値のうちの一つでなければなりません。

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>プラットフォーム既定のスクロールバーの幅です。</td>
        </tr>
        <tr>
          <td><code>thin</code></td>
          <td>
            プラットフォームが提供している細いスクロールバー、またはプラットフォーム既定のスクロールバーの幅よりも細いスクロールバーです。
          </td>
        </tr>
        <tr>
          <td><code>none</code></td>
          <td>スクロールバーが表示されませんが、要素はスクロール可能です。</td>
        </tr>
      </tbody>
    </table>

    > [!NOTE]
    > ユーザーエージェントは、ビューポートのルート要素に何らかの `scrollbar-width` の値を設定する必要があります。

## アクセシビリティ

このプロパティは注意して使用してください。 — `scrollbar-width` を `thin` または `none` に設定すると、作者が別なスクロールの仕組みを提供していない限り、スクロールすることが困難または不可能になります。そのようなコンテンツはスワイプのジェスチャーやマウスホイールでスクロールできるものの、端末によっては代替スクロール手段がないことがあります。

WCAG 基準 2.1.1 (キーボード) は、長らく基本的なキーボードのアクセシビリティを勧告してきており、これはコンテンツ領域のスクロールも含みます。また、 WCAG 2.1 で導入された基準 2.5.5 (対象の寸法) では、タッチ対象の幅と高さを 44px 以上にすることを推奨しています (ただし、この問題は高解像度の画面ではさらに複雑になるため、十分なテストが必要です)。

- [MDN WCAG の理解、ガイドライン 2.1 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#ガイドライン_2.1_—_キーボードアクセス可能_キーボードから全ての機能を利用可能にする)
- [MDN WCAG の理解、ガイドライン 2.5 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#ガイドライン_2.5_—_入力様式_キーボードを超えた様々な入力を通して機能をユーザーが操作しやすくする)
- [Understanding Success Criterion 2.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Understanding Success Criterion 2.5.5 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### あふれた際のスクロールバーの大きさを調整

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-width: thin;
}
```

#### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

#### 結果

{{EmbedLiveSample("Sizing_overflow_scrollbars")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オーバーフロー](/ja/docs/Web/CSS/CSS_overflow)モジュール
- [CSS スクロールバースタイル設定](/ja/docs/Web/CSS/CSS_scrollbars_styling)モジュール
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
