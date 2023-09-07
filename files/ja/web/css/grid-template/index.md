---
title: grid-template
slug: Web/CSS/grid-template
---

{{CSSRef}}

**`grid-template`** は CSS のプロパティで、[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティとして {{glossary("grid column", "grid columns")}}、{{glossary("grid rows", "rows")}}、{{glossary("grid areas", "areas")}} を定義します。

{{EmbedInteractiveExample("pages/css/grid-template.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`grid-template-areas`](/ja/docs/Web/CSS/grid-template-areas)
- [`grid-template-columns`](/ja/docs/Web/CSS/grid-template-columns)
- [`grid-template-rows`](/ja/docs/Web/CSS/grid-template-rows)

## 構文

```css
/* キーワード値 */
grid-template: none;

/* grid-template-rows / grid-template-columns の値 */
grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;
grid-template: fit-content(100px) / fit-content(40%);

/* grid-template-areas grid-template-rows / grid-template-column の値 */
grid-template:
  "a a a"
  "b b b";
grid-template:
  "a a a" 20%
  "b b b" auto;
grid-template:
  [header-top] "a a a" [header-bottom]
  [main-top] "b b b" 1fr [main-bottom]
  / auto 1fr auto;

/* グローバル値 */
grid-template: inherit;
grid-template: initial;
grid-template: revert;
grid-template: unset;
```

### 値

- `none`
  - : 3 個すべてのプロパティの値に `none` を設定するキーワードで、明示的なグリッドがないことを意味します。名前付きグリッド領域はありません。行と列は暗黙的に生成されます。これらのサイズは {{cssxref("grid-auto-rows")}} および {{cssxref("grid-auto-columns")}} プロパティによって決定されます。
- `<'grid-template-rows'> / <'grid-template-columns'>`
  - : {{cssxref("grid-template-rows")}} および {{cssxref("grid-template-columns")}} に特定の値を設定し、{{cssxref("grid-template-areas")}} の値に `none` を設定します。
- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

  - : {{cssxref("grid-template-areas")}} にリストの文字列を設定し、{{cssxref("grid-template-rows")}} にリストの各文字列に従ったトラックサイズを設定します (サイズ指定の足りない部分には `auto` が設定されます)。さらに、各サイズの前後で定義された名前付き線をつなぎ、{{cssxref("grid-template-columns")}} にトラックリストのスラッシュ記号の後で指定されたサイズを設定します (指定されていない場合は `none` が設定されます)。

    > **メモ:** これらのトラックリストに {{cssxref("repeat()")}} 関数を使うことはできません。トラックは "ASCII アート" 内の行列と一対一の関係で視覚的に並んでいるためです。

> **メモ:** {{cssxref("grid")}} 一括指定プロパティは同じ構文を受け入れますが、暗黙的なグリッドプロパティをその初期値にリセットしてしまいます。これらの値が別々にカスケードされないようにするには、(`grid-template` ではなく) `grid` を使用してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドテンプレートの定義

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 200px;
  grid-template:
    [header-left] "head head" 30px [header-right]
    [main-left] "nav  main" 1fr [main-right]
    [footer-left] "nav  foot" 30px [footer-right]
    / 120px 1fr;
}

header {
  background-color: lime;
  grid-area: head;
}

nav {
  background-color: lightblue;
  grid-area: nav;
}

main {
  background-color: yellow;
  grid-area: main;
}

footer {
  background-color: red;
  grid-area: foot;
}
```

#### HTML

```html
<section id="page">
  <header>ヘッダー</header>
  <nav>ナビゲーション</nav>
  <main>メイン領域</main>
  <footer>フッター</footer>
</section>
```

#### 結果

{{EmbedLiveSample("Defining_a_grid_template", "100%", "200px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}
- グリッドレイアウトガイド: [CSS グリッドにおける線に基づく配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- グリッドレイアウトガイド: [グリッドテンプレート領域 - グリッド定義の一括指定](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#グリッド定義の一括指定)
- 動画チュートリアル: _[Grid Template shorthand](https://gridbyexample.com/video/grid-template-shorthand/)_
