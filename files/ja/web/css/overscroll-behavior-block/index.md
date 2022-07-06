---
title: overscroll-behavior-block
slug: Web/CSS/overscroll-behavior-block
tags:
  - CSS
  - CSS ボックスモデル
  - CSS 論理的プロパティ
  - CSS プロパティ
  - リファレンス
  - overscroll-behavior-block
  - recipe:css-property
browser-compat: css.properties.overscroll-behavior-block
translation_of: Web/CSS/overscroll-behavior-block
---
{{CSSRef}}

**`overscroll-behavior-block`** は CSS のプロパティで、スクロール領域のブロック方向の境界に達したときのブラウザーの挙動を設定します。

全体的な説明は {{cssxref("overscroll-behavior")}} を参照してください。

```css
/* キーワード値 */
overscroll-behavior-block: auto; /* 既定値 */
overscroll-behavior-block: contain;
overscroll-behavior-block: none;

/* グローバル値 */
overscroll-behavior-block: inherit;
overscroll-behavior-block: initial;
overscroll-behavior-block: revert;
overscroll-behavior-block: unset;
```

## 構文

`overscroll-behavior-block` プロパティは、次の値の一覧のうち一つのキーワードで指定します。

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

<h3 id="Preventing_block_overscrolling">ブロック方向のオーバースクロールの抑止</h3>

このデモでは、一方がもう一方の中にある二つのブロックレベルボックスがあります。外側のボックスは広い {{cssxref("height")}} を持っているので、ページは垂直にスクロールします。内側のボックスは {{cssxref("width")}} (と `height`) が小さく、ビューポート内にきちんと収まりますが、内容は広い `height` を持つため、垂直にスクロールします。

既定では、内側のボックスがスクロールして境界に達すると、ページ全体がスクロールし始めますが、これはおそらく望ましくない動きです。ブロック方向でこれが発生することを防ぐために、内側のボックスに `overscroll-behavior-block: contain` を設定しました。

#### HTML

```html
<main>
  <div>
    <div>
      <p><code>overscroll-behavior-block</code> has been used to make it so that when the scroll boundaries of the yellow inner box are reached, the whole page does not begin to scroll.</p>
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
  background-image: repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 19px, rgba(0,0,0,0.5) 20px);
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
  background-image: repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 19px, rgba(0,0,0,0.5) 20px);
}

p {
  padding: 10px;
  background-color: rgba(255,0,0,0.5);
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

- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
