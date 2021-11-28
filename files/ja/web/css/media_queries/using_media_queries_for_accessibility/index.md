---
title: アクセシビリティのためのメディアクエリーの使用
slug: Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility
tags:
  - '@media'
  - アクセシビリティ
  - アニメーション
  - CSS
  - ガイド
translation_of: Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility
---
**メディアクエリー**は、障碍を持ったユーザーがウェブサイトをより理解することを支援するためにも利用することができます。

## 動きの縮減

点滅やフラッシュのアニメーションは、注意欠陥障害 (ADHD) のような認知障害を持った人々にとって問題になる可能性があります。加えて、特定の種類の動きが前庭障害、てんかん、片頭痛、スコピック感受性などを引き起こす可能性があります。

また、この方法でユーザー設定によってアニメーションの停止を切り替えると、バッテリーが少ない、または性能が低い携帯電話やコンピューターを使用しているユーザーにも便益があります。

### 構文

- `no-preference`
  - : システムが把握している設定をユーザーが行っていないことを示します。
- `reduce`
  - : ユーザーがシステムに、動作やアニメーションを最小量にして、必要以外の動作を削除したほうが好ましいと通知したことを示します。

### 例

この例は、アクセシビリティ設定で動きを抑制するよう設定しないと煩いアニメーションが表示されます。

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  -webkit-animation: vibrate 0.3s linear infinite both;
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```

## 高コントラストモード

{{CSSRef}}{{Non-standard_header}}

**-ms-high-contrast** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)、 [Microsoft 拡張](/ja/docs/Web/CSS/Microsoft_extensions)であり、アプリケーションが高コントラストモードで表示されているかどうか、どの配色で表示されているかを記述します。

これは弱視やコントラストに敏感な問題を抱えるユーザーだけでなく、直射日光下のコンピューターや携帯電話で作業をしているユーザーにも役立ちます。

## 構文

**`-ms-high-contrast`** メディア特性は、以下の値のうちの一つで指定します。

### 値

- `active`
  - : 配下の整形規則は、システムが任意の配色の高コントラストモードの時に適用されることを示します。
- `black-on-white`
  - : 配下の整形規則は、システムが白地に黒の高コントラストモードの時に適用されることを示します。
- `white-on-black`
  - : 配下の整形規則は、システムが黒地に白の高コントラストモードの時に適用されることを示します。

## 例

以下の宣言は、それぞれ任意の配色、白地に黒、黒地に白の高コントラストモードで表示されているアプリケーションに一致します。

```css
@media screen and (-ms-high-contrast: active) {
  /* すべての高コントラストの整形規則 */
}
@media screen and (-ms-high-contrast: black-on-white) {
  div { background-image: url('image-bw.png'); }
}
@media screen and (-ms-high-contrast: white-on-black) {
  div { background-image: url('image-wb.png'); }
}
```
