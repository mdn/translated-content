---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
tags:
  - 色の調整
  - CSS
  - CSS 色
  - CSS プロパティ
  - HTML 色
  - HTML スタイル
  - レイアウト
  - リファレンス
  - HTML 整形
  - テキスト整形
  - ウェブ
  - forced-color-adjust
  - recipe:css-property
browser-compat: css.properties.forced-color-adjust
translation_of: Web/CSS/forced-color-adjust
---
{{CSSRef}}

**`forced-color-adjust`** は CSS のプロパティで、特定の要素を強制カラーモードから除外することができます。これにより、これらの値の制御が CSS に戻されます。

## 構文

```css
forced-color-adjust: auto;
forced-color-adjust: none;

/* グローバル値 */
forced-color-adjust: inherit;
forced-color-adjust: initial;
forced-color-adjust: revert;
forced-color-adjust: unset;
```

`forced-color-adjust` プロパティの値は以下のキーワードのうちの一つでなければなりません。

### 値

- `auto`
  - : 強制カラーモードでは、要素の色が{{Glossary("user agent", "ユーザーエージェント")}}によって調整されます。これが既定値です。
- **`none`**
  - : 強制カラーモードでも、要素の色は{{Glossary("user agent", "ユーザーエージェント")}}によって調整されません。

## 使用上のメモ

このプロパティは、ユーザーの色とコントラストの要求に適応するための変更を行う場合にのみ使用してください。例えば、{{Glossary("user agent", "ユーザーエージェント")}}による色の最適化によって、ハイコントラストやダークモードでの使い勝手が悪くなることを認識した場合などです。このプロパティを使用すると、そのモードでの結果を微調整して、使い勝手を高めることができます。**ユーザーの選択を尊重しないために使用すべきではありません**。

このプロパティは [-ms-high-contrast-adjust](https://docs.microsoft.com/en-us/previous-versions/hh771863%28v%3dvs.85%29) プロパティを標準化したものです。この接頭辞つきのプロパティは、 Internet Explorer 10 と EdgeHTML 版の Microsoft Edge において、同様の機能を実現します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 色の温存

下記の例では、最初のボックスはユーザーが設定した配色を使用します。例えば、 Windows の高コントラストモードの黒スキームでは、背景が黒、文字が白になります。 2 つ目のボックスは `.box` クラスに設定されたサイトの色を保持します。

[`forced-colors`](/ja/docs/Web/CSS/@media/forced-colors) メディア特性を使用すると、強制カラーモードの最適化を `forced-color-adjust` プロパティと一緒に追加することができます。

#### CSS

```css
.box {
  border: 5px solid grey;
  background-color: #ccc;
  width: 300px;
  margin: 20px;
  padding: 10px;
}

@media (forced-colors: active) {
  .forced {
    forced-color-adjust: none;
  }
}
```

#### HTML

```html
<div class="box">
  <p>This is a box which should use your color preferences.</p>
</div>

<div class="box forced">
  <p>This is a box which should stay the colors set by the site.</p>
</div>
```

#### 結果

{{EmbedLiveSample("Preserving_colors", 640, 300)}}

次のスクリーンショットは、 Windows の高コントラストモードで表示したイメージです。

![上の例では、高コントラストモードで、最初のボックスは黒い背景、 2 番目のボックスは CSS のグレーの背景で表示されています。](windows-high-contrast.jpg)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
- [Styling for Windows high contrast with standards for forced colors.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("color-adjust")}}
