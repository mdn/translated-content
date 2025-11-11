---
title: column-width
slug: Web/CSS/Reference/Properties/column-width
original_slug: Web/CSS/column-width
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`column-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで理想的な段の幅を設定します。コンテナーは `column-width` の値よりも狭い段がないように、できるだけ多くの段を配置します。コンテナーの幅が指定された値よりも狭い場合、指定された幅よりも狭い単一の段になることがあります。

{{InteractiveExample("CSS デモ: column-width")}}

```css interactive-example-choice
column-width: auto;
```

```css interactive-example-choice
column-width: 6rem;
```

```css interactive-example-choice
column-width: 120px;
```

```css interactive-example-choice
column-width: 18ch;
```

```html-nolint interactive-example
<section id="default-example">
  <p id="example-element">
    ロンドン。ミカエル学期の終わり、リンカーンズ・イン・ホールに大法官が座っています。容赦のない 11 月の天候。街は、まるで地球から水が引き始めたばかりのように泥だらけで、ホルボーン・ヒルを象のようなトカゲのようによちよち歩く、体長 12 メートルほどのメガロサウルスに出会っても不思議ではないでしょう。
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  columns: auto;
  text-align: left;
}
```

このプロパティは様々な画面の大きさに合うレスポンシブデザインを作成するのに役立ちます。特に (優先度の高い) {{cssxref("column-count")}} プロパティがある場合、正確な段の幅を設定するには、すべての幅の値を指定する必要があります。横書きでは、これらは {{cssxref('width')}}, `column-width`, {{cssxref('column-gap')}}, {{cssxref('column-rule-width')}} です。

## 構文

```css
/* キーワード値 */
column-width: auto;

/* <length> 値 */
column-width: 60px;
column-width: 15.5em;
column-width: 3.3vw;

/* グローバル値 */
column-width: inherit;
column-width: initial;
column-width: revert;
column-width: revert-layer;
column-width: unset;
```

`column-width` プロパティは以下に挙げた値のうちの一つで指定します。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 段の最適な幅のヒントを与えます。実際の段の幅は指定された値と異なります。空間を埋める必要がある場合は広くなる可能性があり、利用可能な幅が狭すぎる場合は狭くなる可能性があります。この値は正の数だけで、そうでなければ宣言は無効になります。パーセント値も無効です。
- `auto`
  - : 段の幅は {{cssxref("column-count")}} などの他の CSS プロパティによって決定されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 段の幅をピクセル数で設定

#### HTML

```html live-sample___setting_column_width_in_pixels
<p class="content-box">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
  enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis
  nisl ut aliquip ex ea commodo consequat.
</p>
```

#### CSS

```css live-sample___setting_column_width_in_pixels
.content-box {
  column-width: 100px;
}
```

#### 結果

{{EmbedLiveSample('Setting_column_width_in_pixels', 'auto', 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) （レイアウトの学習）
- [段組みの基本概念](/ja/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
