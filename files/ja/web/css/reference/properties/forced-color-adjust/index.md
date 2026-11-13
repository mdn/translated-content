---
title: forced-color-adjust
slug: Web/CSS/Reference/Properties/forced-color-adjust
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`forced-color-adjust`** は [CSS](/ja/docs/Web/CSS) のプロパティで、特定の要素を強制カラーモードから除外することができます。これにより、これらの値の制御が CSS に戻されます。

## 構文

```css
forced-color-adjust: auto;
forced-color-adjust: none;
forced-color-adjust: preserve-parent-color;

/* グローバル値 */
forced-color-adjust: inherit;
forced-color-adjust: initial;
forced-color-adjust: revert;
forced-color-adjust: revert-layer;
forced-color-adjust: unset;
```

`forced-color-adjust` プロパティの値は以下のキーワードのうちの一つでなければなりません。

### 値

- `auto`
  - : 強制カラーモードでは、要素の色が{{Glossary("user agent", "ユーザーエージェント")}}によって調整されます。これが既定値です。
- `none`
  - : 強制カラーモードでも、要素の色は{{Glossary("user agent", "ユーザーエージェント")}}によって調整されません。
- `preserve-parent-color`
  - : 強制カラーモードでは、{{cssxref("color")}} プロパティが親要素から継承される場合（つまり、[カスケード値](/ja/docs/Web/CSS/Guides/Cascade/Introduction)が存在しないか、カスケード値が `currentColor`、{{cssxref("inherit")}}、または親要素から継承する別のキーワードである場合）、その値は親要素の `color` プロパティの[使用色](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)として計算されます。それ以外の場合は、`none` と同じ挙動を示します。

## 使用上のメモ

このプロパティは、ユーザーの色とコントラストの要求に適応するための変更を行う場合にのみ使用してください。例えば、{{Glossary("user agent", "ユーザーエージェント")}}による色の最適化によって、ハイコントラストやダークモードでの使い勝手が悪くなることを認識した場合などです。このプロパティを使用すると、そのモードでの結果を微調整して、使い勝手を高めることができます。**ユーザーの選択を尊重しないために使用すべきではありません**。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 色の温存

下記の例では、最初のボックスはユーザーが設定した配色を使用します。例えば、 Windows の高コントラストモードの黒スキームでは、背景が黒、文字が白になります。 2 つ目のボックスは `.box` クラスに設定されたサイトの色を保持します。

{{cssxref("@media/forced-colors", "forced-colors")}} メディア特性を使用すると、強制カラーモードの最適化を `forced-color-adjust` プロパティと一緒に追加することができます。

#### CSS

```css
.box {
  border: 5px solid grey;
  background-color: #cccccc;
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
  <p>これは、色の設定を反映すべきボックスです。</p>
</div>

<div class="box forced">
  <p>これはサイトが設定した色を保持すべきボックスです。</p>
</div>
```

#### 結果

{{EmbedLiveSample("Preserving_colors", 640, 300)}}

次のスクリーンショットは、 Windows の高コントラストモードで表示した画像です。

![上の例では、高コントラストモードで、最初のボックスは黒い背景、 2 番目のボックスは CSS のグレーの背景で表示されています。](windows-high-contrast.jpg)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Styling for Windows high contrast with standards for forced colors.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
