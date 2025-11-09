---
title: アクセシビリティのためのメディアクエリーの使用
slug: Web/CSS/Guides/Media_queries/Using_for_accessibility
original_slug: Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

[**CSS メディアクエリー**](/ja/docs/Web/CSS/Guides/Media_queries)は、障碍を持ったユーザーがウェブサイトをより理解することを支援するためにも利用することができます。

## 動きの削減

点滅やフラッシュのアニメーションは、注意欠陥障害 (ADHD) のような認知障害を持った人々にとって問題になる可能性があります。加えて、特定の種類の動きが前庭障害、てんかん、片頭痛、スコピック感受性などを引き起こす可能性があります。ユーザーの環境設定に応じてアニメーションを削減したり、アニメーションを完全にオフにしたりすることも、バッテリー残量が少ないユーザーや低スペックの端末を使用しているユーザーにとって好ましいことです。

[`prefers-reduced-motion`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) メディアクエリーを使用すると、オペレーティングシステムのアクセシビリティ設定で動きを少なくするように設定しているユーザーに対して、アニメーションやトランジションの少ない、使い勝手の良い体験を提供することができます。これには 2 つの値があります。

- `no-preference`
  - : システムが把握している設定をユーザーが行っていないことを示します。
- `reduce`
  - : ユーザーが、動きやアニメーションを最小限に抑えたインターフェイスを推奨することをシステムに通知したことを示します。できれば、必要のない動きがすべて除去される程度までです。

### 例

この例は、[アクセシビリティ設定](/ja/docs/Web/Accessibility/Guides/Browsing_safely)で動きを抑制するよう設定しないと煩いアニメーションが表示されます。

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```

`prefers-reduced-motion` の値は `reduce` であり、 "none" ではありません。この設定は、すべてのアニメーションを削除しなければならないことを意味するものではありません。アニメーションを削除するには、 `* {animation: none !important;}` を使用してください。むしろ、ユーザーは、操作によって起動されるアニメーションを含め、機能や伝達される情報にとって不可欠なアニメーションを除き、モーションアニメーションが無効になっていることを期待しています（[WCAG: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html) を参照）。

## 関連情報

- [`prefers-contrast`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): ユーザーのコントラストの環境設定に基づいてページスタイルを調整
- [`prefers-reduced-transparency`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
- [`inverted-colors`](/ja/docs/Web/CSS/Reference/At-rules/@media/inverted-colors)
- [Designing With Reduced Motion For Motion Sensitivities](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
