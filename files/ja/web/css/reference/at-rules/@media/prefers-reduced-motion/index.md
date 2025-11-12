---
title: prefers-reduced-motion
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
original_slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

> [!WARNING]
> このページの下部に埋め込まれた例は、拡大縮小の動きがありますが、一部の読者には問題があるかもしれません。前庭運動障害をお持ちの方は、アニメーションを見る前に、お使いの端末のモーション軽減機能を有効にしてください。

**`prefers-reduced-motion`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、ユーザーが余計な動きを最少化するよう要求したことを検出するために使用します。この設定は、ユーザーがモーションベースのアニメーションを削除、縮小、または置き換えるインターフェイスを推奨していることを、端末のブラウザーに伝えるために使用します。

このようなアニメーションは、[前庭運動障碍](https://www.a11yproject.com/posts/understanding-vestibular-disorders/)のある人に不快感を引き起こす可能性があります。大きなオブジェクトを拡大縮小したりパンなどしたりするアニメーションは、前庭運動を引き起こす可能性があります。

```css
@media (prefers-reduced-motion: reduce) {
  /* ユーザーの端末の設定が「動きを縮小する」に設定されている場合に適用するスタイル */
}
```

## 構文

- `no-preference`
  - : システムが把握している設定をユーザーが行っていないことを示します。このキーワードの値は false と評価されます。
- `reduce`
  - : ユーザーが、端末で動きの縮小に関する設定を有効にしていることを示します。`reduce` のキーワードの値は true として評価されます。よって、`@media (prefers-reduced-motion)` は `@media (prefers-reduced-motion: reduce)` と同等です。

## ユーザー設定

Firefox では、 `reduce` の要求は以下の場合に尊重されます。

- GTK/GNOME: Settings > Accessibility > Seeing > Reduced animation がオンになっている場合。
  - GNOME の古いバージョンでは、 GNOME Tweaks > General タブ (バージョンによっては Appearance タブ) > Animations がオフになっている場合。
  - 他にも、 `gtk-enable-animations = false` を [GTK 3 configuration file](https://wiki.archlinux.org/title/GTK#Configuration) の `[Settings]` に追加する方法もあります。

- Plasma/KDE: System Settings > Workspace Behavior -> General Behavior > "Animation speed" が正しくすべて "Instant" に設定されている場合。
- Windows 10: 設定 > 簡単操作 > ディスプレイ > アニメーションを表示する
- Windows 11: 設定 > アクセシビリティ > 視覚効果 > アニメーション効果
- macOS: システム設定 > アクセシビリティ > 表示 > 動きの抑制
- iOS: 設定 > 一般 > アクセシビリティ > 視覚効果を減らす
- Android 9 以上: 設定 > ユーザー補助 > アニメーションの削除
- Firefox では `about:config`: 数値型の設定項目 `ui.prefersReducedMotion` を追加し、値を `1` とします。この設定の変更は直ちに効果が現れます。

## 例

この例では、 `prefers-reduced-motion` を実証するために、拡大縮小アニメーションを使用しています。端末のアクセシビリティ設定でモーションの削減を有効にすると、 `prefers-reduced-motion` メディアクエリーがユーザーの意向を検出し、同じ[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)で [CSS ソースの順序](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#ソース順)では後方に位置する、モーション削減ルール内の CSS が優先されます。その結果、ボックスの[アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using)は、前庭運動を誘発しない、より控えめなアニメーションである `dissolve` アニメーションにトーンダウンします。

### アニメーションの拡大縮小のトーンダウン

#### HTML

```html
<div class="animation">アニメーションするボックス</div>
```

#### CSS

```css
.animation {
  animation: pulse 1s linear infinite both;
  background-color: purple;
}

/* 前庭運動を引き起こすのを避けるため、アニメーションを控えめにする */
@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: dissolve 4s linear infinite both;
    background-color: green;
    text-decoration: overline;
  }
}
```

```css hidden
.animation {
  color: #fff;
  font: 1.2em sans-serif;
  width: 10em;
  padding: 1em;
  border-radius: 1em;
  text-align: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes dissolve {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
```

#### 結果

{{EmbedLiveSample("アニメーションの拡大縮小のトーンダウン")}}

[端末](#ユーザー設定)のモーションを削減する設定を有効にして、アニメーションの拡大縮小の表示を確認することができます。この例では、キーフレームアニメーションが有効または無効になったときに、背景色とテキスト上の行を視覚的に強調表示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP の {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} ヘッダーによる[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)
- [An introduction to the reduced motion media query](https://css-tricks.com/introduction-reduced-motion-media-query/) (CSS-Tricks, 2019)
- [Responsive design for motion](https://webkit.org/blog/7551/responsive-design-for-motion/) (WebKit Blog, 2017)
