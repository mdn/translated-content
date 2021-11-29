---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
tags:
  - '@media'
  - アクセシビリティ
  - CSS
  - メディアクエリー
  - リファレンス
  - メディア特性
browser-compat: css.at-rules.media.prefers-reduced-motion
translation_of: Web/CSS/@media/prefers-reduced-motion
---
**`prefers-reduced-motion`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、ユーザーが余計な動きを最少化するよう要求したことを検出するために使用します。

> **Warning:** このページの下部に埋め込まれた例は、拡大縮小の動きがありますが、一部の読者には問題があるかもしれません。前庭運動障害をお持ちの方は、アニメーションを見る前に、お使いの端末のモーション軽減機能を有効にしてください。

## 構文

- `no-preference`
  - : システムが把握している設定をユーザーが行っていないことを示します。
- `reduce`
  - : 前庭運動障害者の不快感の引き金となるモーションベースのアニメーションの種類を削除したり置き換えたりするインターフェイスを希望することをユーザーがシステムに通知したことを示します。

## ユーザー設定

Firefox では、 `reduce` の要求は以下の場合に尊重されます。

- GTK/GNOME では、 GNOME Tweaks > General タブ (バージョンによっては Appearance タブ) > Animations がオフになっている場合。

    - 他にも、 `gtk-enable-animations = false` を [GTK 3 configuration file](https://wiki.archlinux.org/index.php/GTK#Configuration) の `[Settings]` に追加する方法もあります。

- Windows 10: 設定 > 簡単操作 > ディスプレイ > アニメーションを表示する
- Windows 7: コントロールパネル > コンピューターの簡単操作センター > コンピューターでの作業に集中しやすくします > 必要のないアニメーションは無効にします (可能な場合)
- macOS: システム設定 > アクセシビリティ > 表示 > 動きの抑制
- iOS: 設定 > 一般 > アクセシビリティ > 視覚効果を減らす
- Android 9 以上: 設定 > ユーザー補助 > アニメーションの削除
- Firefox では `about:config`: 数値型の設定項目 `ui.prefersReducedMotion` を追加し、値を `1` とします。この設定の変更は直ちに効果が現れます。

## 例

この例では、既定でで拡大縮小アニメーションが使用されています。アクセシビリティ設定で Reduce Motion を有効にしている場合、このアニメーションは前庭運動に影響のないシンプルなディゾルブにトーンダウンされます。

### HTML

```html
<div class="animation">animated box</div>
```

### CSS

```css
.animation {
  animation: pulse 1s linear infinite both;
}

/* Tone down the animation to avoid vestibular motion triggers like scaling or panning large objects. */
@media (prefers-reduced-motion) {
  .animation {
    animation-name: dissolve;
  }
}
```

```css hidden
.animation {
  background-color: #306;
  color: #fff;
  font: 1.2em sans-serif;
  width: 10em;
  padding: 1em;
  border-radius: 1em;
  text-align: center;
}

@keyframes pulse {
  0% { transform: scale(1); }
  25% { transform: scale(.9); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes dissolve {
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [An Introduction to the Reduced Motion Media Query (CSS Tricks)](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion (WebKit Blog)](https://webkit.org/blog/7551/responsive-design-for-motion/) includes vestibular motion trigger examples.

{{QuickLinksWithSubpages("/ja/docs/Web/CSS/@media/")}}
