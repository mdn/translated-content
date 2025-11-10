---
title: overscroll-behavior-block
slug: Web/CSS/Reference/Properties/overscroll-behavior-block
original_slug: Web/CSS/overscroll-behavior-block
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

**`overscroll-behavior-block`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロール領域のブロック方向の境界に達したときのブラウザーの挙動を設定します。

全体的な説明は {{cssxref("overscroll-behavior")}} を参照してください。

## 構文

```css
/* キーワード値 */
overscroll-behavior-block: auto; /* 既定値 */
overscroll-behavior-block: contain;
overscroll-behavior-block: none;

/* グローバル値 */
overscroll-behavior-block: inherit;
overscroll-behavior-block: initial;
overscroll-behavior-block: revert;
overscroll-behavior-block: revert-layer;
overscroll-behavior-block: unset;
```

`overscroll-behavior-block` プロパティは、次の値の一覧から選択した一つのキーワードで指定します。

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

### ブロック方向のオーバースクロールの抑止

このデモでは、一方がもう一方の中にある 2 つのブロックレベルボックスがあります。外側のボックスは広い {{cssxref("height")}} を持っているので、ページは垂直にスクロールします。内側のボックスは {{cssxref("width")}} (と `height`) が小さく、ビューポート内にきちんと収まりますが、コンテンツは広い `height` を持つため、垂直にスクロールします。

既定では、内側のボックスがスクロールして境界に達すると、ページ全体がスクロールし始めますが、これはおそらく望ましくない動きです。ブロック方向でこれが発生することを防ぐために、内側のボックスに `overscroll-behavior-block: contain` を設定しました。

#### HTML

```html
<main>
  <div>
    <div>
      <p>
        <code>overscroll-behavior-block</code> has been used to make it so that
        when the scroll boundaries of the yellow inner box are reached, the
        whole page does not begin to scroll.
      </p>
    </div>
  </div>
</main>
```

#### CSS

```css
main {
  height: 3000px;
  width: 500px;
  background-color: white;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

main > div {
  height: 300px;
  width: 400px;
  overflow: auto;
  position: relative;
  top: 50px;
  left: 50px;
  overscroll-behavior-block: contain;
}

div > div {
  height: 1500px;
  width: 100%;
  background-color: yellow;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

p {
  padding: 10px;
  background-color: rgb(255 0 0 / 50%);
  margin: 0;
  width: 340px;
  position: relative;
  top: 10px;
  left: 10px;
}
```

#### 結果

{{EmbedLiveSample('Preventing_block_overscrolling','100%', 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-y")}}
- {{cssxref("overscroll-behavior-inline")}}
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール
