---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
tags:
  - CSS
  - CSS グリッド
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.grid-template-areas
translation_of: Web/CSS/grid-template-areas
---
{{CSSRef}}

**`grid-template-areas`** は CSS のプロパティで、グリッド内でセルを確立し、名前を割り当てることにより、名前付きの {{glossary("grid areas", "グリッド領域")}} を指定します。

{{EmbedInteractiveExample("pages/css/grid-template-areas.html")}}

これらの領域は、特定のグリッドアイテムに関連付けられていませんが、グリッド配置プロパティである {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}} およびそれらの一括指定プロパティ {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, {{cssxref("grid-area")}} で参照することができます。

## 構文

```css
/* キーワード値 */
grid-template-areas: none;

/* <string> 値 */
grid-template-areas: "a b";
grid-template-areas: "a b b"
                     "a c d";

/* グローバル値 */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: unset;
```

### 値

- `none`
  - : グリッドコンテナーは名前付きのグリッド領域を定義しません。
- `{{cssxref("&lt;string&gt;")}}+`
  - : リストのすべての文字列ごとに行が生成され、文字列内の各セルごとに列が生成されます。行の中や行をまたがって複数の名前付きセルトークンがあると、対応するグリッドセルにまたがる単一の名前付きグリッド領域を生成します。これらのセルが四角形を形成しない限り、宣言は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きグリッド領域の指定

#### HTML

```html
<section id="page">
  <header>ヘッダー</header>
  <nav>ナビゲーション</nav>
  <main>メイン領域</main>
  <footer>フッター</footer>
</section>
```

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas: "head head"
                       "nav  main"
                       "nav  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

#### 結果

{{EmbedLiveSample("Specifying_named_grid_areas", "100%", "250px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template")}}
- グリッドレイアウトガイド: [グリッドテンプレート領域](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- 動画チュートリアル: [Grid Template Areas](https://gridbyexample.com/video/grid-template-areas/)
