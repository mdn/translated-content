---
title: overscroll-behavior-y
slug: Web/CSS/Reference/Properties/overscroll-behavior-y
original_slug: Web/CSS/overscroll-behavior-y
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`overscroll-behavior-y`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロール領域の垂直方向の境界に達したときのブラウザーの挙動を設定します。

全体的な説明は {{cssxref("overscroll-behavior")}} を参照してください。

## 構文

```css
/* キーワード値 */
overscroll-behavior-y: auto; /* 既定値 */
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* グローバル値 */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: revert;
overscroll-behavior-y: revert-layer;
overscroll-behavior-y: unset;
```

`overscroll-behavior-y` プロパティは、次の値の一覧から選択した一つのキーワードで指定します。

### 値

- `auto`
  - : 既定のスクロールオーバーフロー動作が、通常通り発生します。
- `contain`
  - : この値が設定された要素内では、既定のスクロールオーバーフロー動作（「跳ね返り」効果など）が見られます。ただし、隣接するスクロール領域での{{Glossary("Scroll_chaining", "スクロール連鎖")}}は発生せず、背後に配置された要素はスクロールしません。 `contain` の値では、垂直方向の引いて更新のジェスチャーや、水平方向のスワイプ操作を含む、ブラウザーのネイティブナビゲーションが無効になります。
- `none`
  - : 隣接するスクロール領域へのスクロールの連鎖は発生せず、既定のスクロールオーバーフロー動作が抑止されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 背後にある要素の縦スクロールの抑止

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

完全な例と説明については、 {{cssxref("overscroll-behavior")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-inline")}}
- {{cssxref("overscroll-behavior-block")}}
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール
