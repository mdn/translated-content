---
title: CSS スクロールバースタイル設定
slug: Web/CSS/CSS_scrollbars_styling
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

**CSS スクロールバースタイル設定** (CSS scrollbars styling) モジュールは、スクロールバーの視覚的なスタイル設定に使用できるプロパティを定義しています。必要に応じてスクロールバーの幅をカスタマイズできます。また、スクロールバーの背景であるスクロールバーのトラックの色、およびスクロールバーのドラッグ可能なハンドルであるスクロールバーのつまみの色もカスタマイズできます。

## スクロールバースタイル設定の実例

この例では、赤いつまみとオレンジ色のトラックを持つ細いスクロールバーが定義されています。つまみを見るには、テキストをスクロールする必要があります。スクロールバーが可視状態になったら、カーソルをスクロールバーの上に移動させるとトラックが表示されます。

```css hidden
.poem {
  width: 300px;
  height: 100px;
  border: 1px solid;
}
```

```css
.poem {
  overflow: scroll;
  scrollbar-color: red orange;
  scrollbar-width: thin;
}
```

```html hidden
<blockquote class="poem">
  <h3>A Small Needful Fact</h3>
  <pre>
Is that Eric Garner worked
for some time for the Parks and Rec.
Horticultural Department, which means,
perhaps, that with his very large hands,
perhaps, in all likelihood,
he put gently into the earth
some plants which, most likely,
some of them, in all likelihood,
continue to grow, continue
to do what such plants do, like house
and feed small and necessary creatures,
like being pleasant to touch and smell,
like converting sunlight
into food, like making it easier
for us to breathe.
</pre
  >
  <p>
    - <a href="https://onbeing.org/poetry/a-small-needful-fact/">Ross Gay</a>
  </p>
</blockquote>
```

{{EmbedLiveSample("Scrollbar_styling_in_action")}}

> [!NOTE]
> スクロールバーをカスタマイズする際は、つまみとトラックが周囲の背景と十分なコントラストを持つようにしてください。また、タッチ入力を使用する人のために、スクロールバーのヒット領域が十分な大きさであることを確認してください。

## リファレンス

### CSS プロパティ

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## 関連概念

- {{CSSxRef("overflow-block")}} プロパティ
- {{CSSxRef("overflow-inline")}} プロパティ
- {{CSSxRef("overflow-x")}} プロパティ
- {{CSSxRef("overflow-y")}} プロパティ
- {{CSSxRef("overflow")}} 一括指定プロパティ
- {{CSSxRef("overflow-clip-margin")}} プロパティ
- {{CSSxRef("scrollbar-gutter")}} プロパティ
- {{CSSxRef("scroll-behavior")}} プロパティ
- {{cssxref("scroll-margin")}} 一括指定プロパティ
- {{cssxref("scroll-padding")}} 一括指定プロパティ
- {{cssxref("scroll-snap-align")}} プロパティ
- {{cssxref("scroll-snap-stop")}} プロパティ
- {{cssxref("scroll-snap-type")}} プロパティ
- {{CSSxRef("::-webkit-scrollbar")}} 擬似要素
- {{glossary("scroll container", "スクロールコンテナー")}} 用語集の用語
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA ロール

## 仕様書

{{Specifications}}

## 関連情報

- {{CSSxRef("::-webkit-scrollbar")}}
- {{CSSxRef("-ms-overflow-style")}}
