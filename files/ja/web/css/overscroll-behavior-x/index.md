---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
---

{{CSSRef}}

**`overscroll-behavior-x`** は CSS のプロパティで、スクロール領域の水平方向の境界に達したときのブラウザーの挙動を設定します。

全体的な説明は {{cssxref("overscroll-behavior")}} を参照してください。

```css
/* キーワード値 */
overscroll-behavior-x: auto; /* 既定値 */
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* グローバル値 */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: unset;
```

## 構文

`overscroll-behavior-x` プロパティは、次の値の一覧のうち一つのキーワードで指定します。

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

### 背後にある要素が横にスクロールするのを防ぐ

簡単な [overscroll-behavior-x の例](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) ([ソースコード](https://github.com/mdn/css-examples/blob/master/overscroll-behavior/overscroll-behavior-x.html)も参照) の中で、一方がもう一方の中にある二つのブロックレベルボックスがあります。外側のボックスは広い {{cssxref("width")}} を持っているので、ページは水平にスクロールします。内側のボックスは width (と {{cssxref("height")}}) が小さく、ビューポート内にきちんと収まりますが、内容は広い `width` を持ち、水平にスクロールします。

既定では、内側のボックスがスクロールして境界に達すると、ページ全体がスクロールし始めますが、これはおそらく望ましくない動きです。これを防ぐために、内側のボックスに `overscroll-behavior-x: contain` を設定することができます。

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

- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
- 対応付けられる論理的プロパティ: {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}
