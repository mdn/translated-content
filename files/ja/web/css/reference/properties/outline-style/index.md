---
title: outline-style
slug: Web/CSS/Reference/Properties/outline-style
original_slug: Web/CSS/outline-style
l10n:
  sourceCommit: aa714bb37625b21b0f40db1f1ea557e773456fa2
---

**`outline-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の輪郭線のスタイルを設定します。輪郭線とは要素の周りに描かれる線のことで、 {{cssxref("border")}} よりも外側です。

{{InteractiveExample("CSS デモ: outline-style")}}

```css interactive-example-choice
outline-style: none;
```

```css interactive-example-choice
outline-style: dotted;
```

```css interactive-example-choice
outline-style: solid;
```

```css interactive-example-choice
outline-style: groove;
```

```css interactive-example-choice
outline-style: inset;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

たいていの場合、輪郭線の見た目を定義するときは一括指定プロパティ {{cssxref("outline")}} を使ったほうが便利です。

## 構文

```css
/* キーワード値 */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* グローバル値 */
outline-style: inherit;
outline-style: initial;
outline-style: revert;
outline-style: revert-layer;
outline-style: unset;
```

`outline-style` プロパティは、以下に挙げた値のうちの一つで指定します。

### 値

- `auto`
  - : ユーザーエージェントに輪郭線の描画を任せます。
- `none`
  - : 輪郭線を描きません。{{cssxref("outline-width")}} は `0` です。
- `dotted`
  - : 点線の輪郭線です。
- `dashed`
  - : 破線の輪郭線です。
- `solid`
  - : 1 本の実線の輪郭線です。
- `double`
  - : 2 本の実線の輪郭線です。{{cssxref("outline-width")}} は 2 本の線とその隙間の合計です。
- `groove`
  - : ページに刻まれたかのように見える輪郭線です。
- `ridge`
  - : `groove` の逆で、ページから押し出されたように見える輪郭線です。
- `inset`
  - : 領域がページに埋め込まれたかのように見える輪郭線です。
- `outset`
  - : `inset` の逆で、領域がページから隆起しているように見える輪郭線です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 輪郭線のスタイルを auto に設定

`auto` の値は、輪郭線のスタイルが独自のものであることを表します。[仕様書](https://www.w3.org/TR/css-ui-3/#outline-style)によれば、「典型的には、プラットフォーム用のユーザーインターフェイスの既定のスタイル、または、CSS で詳細に記述できるスタイルよりも表現豊かなスタイル 、例えば、輝いて見える半透明の外郭を持つ、輪郭の丸い輪郭線」となっています。

#### HTML

```html live-sample___setting_outline_style_to_auto
<div>
  <p class="auto">Outline デモ</p>
</div>
```

#### CSS

```css live-sample___setting_outline_style_to_auto
.auto {
  outline-style: auto; /* "outline: auto" と同じ */
}

/* デモを見やすく */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 結果

{{ EmbedLiveSample('Setting_outline_style_to_auto') }}

### 輪郭線を dashed と dotted に設定

#### HTML

```html live-sample___setting_outline_style_to_dashed_and_dotted
<div>
  <div class="dotted">
    <p class="dashed">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css live-sample___setting_outline_style_to_dashed_and_dotted
.dotted {
  outline-style: dotted; /* "outline: dotted" と同じ */
}
.dashed {
  outline-style: dashed;
}

/* デモを見やすく */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 結果

{{ EmbedLiveSample('Setting_outline_style_to_dashed_and_dotted') }}

### 輪郭線のスタイルを solid と double に設定

#### HTML

```html live-sample___setting_outline_style_to_solid_and_double
<div>
  <div class="solid">
    <p class="double">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css live-sample___setting_outline_style_to_solid_and_double
.solid {
  outline-style: solid;
}
.double {
  outline-style: double;
}

/* デモを見やすく */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 結果

{{ EmbedLiveSample('Setting_outline_style_to_solid_and_double') }}

### 輪郭線のスタイルを groove と ridge に設定

#### HTML

```html live-sample___setting_outline_style_to_groove_and_ridge
<div>
  <div class="groove">
    <p class="ridge">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css live-sample___setting_outline_style_to_groove_and_ridge
.groove {
  outline-style: groove;
}
.ridge {
  outline-style: ridge;
}

/* デモを見やすく */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 結果

{{ EmbedLiveSample('Setting_outline_style_to_groove_and_ridge') }}

### 輪郭線のスタイルを inset と outset に設定

#### HTML

```html live-sample___setting_outline_style_to_inset_and_outset
<div>
  <div class="inset">
    <p class="outset">Outline デモ</p>
  </div>
</div>
```

#### CSS

```css live-sample___setting_outline_style_to_inset_and_outset
.inset {
  outline-style: inset;
}
.outset {
  outline-style: outset;
}

/* デモを見やすく */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 結果

{{ EmbedLiveSample('Setting_outline_style_to_inset_and_outset') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("outline")}}
- {{cssxref("outline-width")}}
- {{cssxref("outline-color")}}
