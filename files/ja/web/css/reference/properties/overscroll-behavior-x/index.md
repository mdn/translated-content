---
title: overscroll-behavior-x
slug: Web/CSS/Reference/Properties/overscroll-behavior-x
original_slug: Web/CSS/overscroll-behavior-x
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`overscroll-behavior-x`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロール領域の水平方向の境界に達したときのブラウザーの挙動を設定します。

全体的な説明は {{cssxref("overscroll-behavior")}} を参照してください。

## 構文

```css
/* キーワード値 */
overscroll-behavior-x: auto; /* 既定値 */
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* グローバル値 */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: revert;
overscroll-behavior-x: revert-layer;
overscroll-behavior-x: unset;
```

`overscroll-behavior-x` プロパティは、次の値の一覧から選択した一つのキーワードで指定します。

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

### 背後にある要素が横にスクロールするのを防ぐ

[overscroll-behavior-x の例](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x)（[ソースコード](https://github.com/mdn/css-examples/blob/master/overscroll-behavior/overscroll-behavior-x.html)も参照）の中で、一方がもう一方の中にある 2 つのブロックレベルボックスがあります。外側のボックスは広い {{cssxref("width")}} を持っているので、ページは水平にスクロールします。内側のボックスは width (と {{cssxref("height")}}) が小さく、ビューポート内にきちんと収まりますが、コンテンツは広い `width` を持つため、水平にスクロールします。

既定では、内側のボックスがスクロールして境界に達すると、ページ全体がスクロールし始めますが、これはおそらく望ましくない動きです。内側のボックスに `overscroll-behavior-x: contain` を設定することで、これを防ぐことができます。

```css
main > div {
  height: 300px;
  width: 500px;
  overflow: auto;
  position: relative;
  top: 100px;
  left: 100px;
  overscroll-behavior-x: contain;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-y")}}
- {{cssxref("overscroll-behavior-inline")}}
- {{cssxref("overscroll-behavior-block")}}
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール
