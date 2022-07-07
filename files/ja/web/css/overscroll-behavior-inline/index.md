---
title: overscroll-behavior-inline
slug: Web/CSS/overscroll-behavior-inline
tags:
  - CSS
  - CSS ボックスモデル
  - CSS 論理的プロパティ
  - CSS プロパティ
  - NeedsExample
  - リファレンス
  - overscroll-behavior-inline
  - recipe:css-property
browser-compat: css.properties.overscroll-behavior-inline
translation_of: Web/CSS/overscroll-behavior-inline
---
{{CSSRef}}

**`overscroll-behavior-inline`** は CSS のプロパティで、スクロール領域のインライン方向の境界に達したときのブラウザーの挙動を設定します。

全体的な説明は {{cssxref("overscroll-behavior")}} を参照してください。

```css
/* キーワード値 */
overscroll-behavior-inline: auto; /* default */
overscroll-behavior-inline: contain;
overscroll-behavior-inline: none;

/* グローバル値 */
overscroll-behavior-inline: inherit;
overscroll-behavior-inline: initial;
overscroll-behavior-inline: revert;
overscroll-behavior-inline: unset;
```

## 構文

`overscroll-behavior-inline` プロパティは、次の値の一覧のうち一つのキーワードで指定します。

### 値

- `auto`
  - : スクロールの末端における既定の振る舞いが通常通りに発生します。
- `contain`
  - : この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。
- `none`
  - : 隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Preventing_inline_overscrolling">インライン方向のオーバースクロールの抑止</h3>

このデモでは、一方がもう一方の中にある二つのブロックレベルボックスがあります。外側のボックスは広い {{cssxref("width")}} を持っているので、ページは水平にスクロールします。内側のボックスは width (と {{cssxref("height")}}) が小さく、ビューポート内にきちんと収まりますが、内容は広い幅を持ち、水平にスクロールします。

既定では、内側のボックスがスクロールして境界に達すると、ページ全体がスクロールし始めますが、これはおそらく望ましくない動きです。インライン方向でこれが発生することを防ぐために、内側のボックスに `overscroll-behavior-inline: contain` を設定しました。

#### HTML

```html
<main>
  <div>
    <div>
      <p><code>overscroll-behavior-inline</code> has been used to make it so that when the scroll boundaries of the yellow inner box are reached, the whole page does not begin to scroll.</p>
    </div>
  </div>
</main>
```

#### CSS

```css
main {
  height: 400px;
  width: 3000px;
  background-color: white;
  background-image: repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 19px, rgba(0,0,0,0.5) 20px);
}

main > div {
  height: 300px;
  width: 400px;
  overflow: auto;
  position: relative;
  top: 50px;
  left: 50px;
  overscroll-behavior-inline: contain;
}

div > div {
  height: 100%;
  width: 1500px;
  background-color: yellow;
  background-image: repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 19px, rgba(0,0,0,0.5) 20px);
}

p {
  padding: 10px;
  background-color: rgba(255,0,0,0.5);
  margin: 0;
  width: 360px;
  position: relative;
  top: 10px;
  left: 10px;
}
```

#### 結果

{{EmbedLiveSample('Preventing_inline_overscrolling','100%', 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
