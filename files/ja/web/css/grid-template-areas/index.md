---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

**`grid-template-areas`** は [CSS](/ja/docs/Web/CSS) のプロパティで、グリッド内でセルを確立し、名前を割り当てることにより、名前付きの {{glossary("grid areas", "グリッド領域")}} を指定します。

{{EmbedInteractiveExample("pages/css/grid-template-areas.html")}}

これらの領域は、特定のグリッドアイテムに関連付けられていませんが、グリッド配置プロパティである {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}} およびそれらの一括指定プロパティ {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, {{cssxref("grid-area")}} で参照することができます。

## 構文

```css
/* キーワード値 */
grid-template-areas: none;

/* <string> 値 */
grid-template-areas: "a b";
grid-template-areas:
  "a b ."
  "a c d";

/* グローバル値 */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: revert-layer;
grid-template-areas: unset;
```

### 値

- `none`
  - : グリッドコンテナーは名前付きのグリッド領域を定義しません。
- `{{cssxref("&lt;string&gt;")}}+`

  - : リストのすべての文字列ごとに行が生成され、文字列内の各セルごとに列が生成されます。行の中や行をまたがって同じ名前のセルトークンが複数あると、対応するグリッドセルにまたがる単一の名前付きグリッド領域を生成します。これらのセルが長方形にならないと、宣言は無効になります。

    グリッド内のすべての無名の領域は、ヌルセルトークンを使用して参照することができます。ヌルセルトークンは、 1 つ以上の `.` (U+002E FULL STOP) 文字の並び、例えば、`.`、`...`、`.....` などです。ヌルセルトークンは、グリッド内に空欄を作成するために使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きグリッド領域の指定

#### HTML

```html live-sample___specifying_named_grid_areas
<div id="page">
  <header>ヘッダー</header>
  <nav>ナビゲーション</nav>
  <main>メイン領域</main>
  <footer>フッター</footer>
</div>
```

#### CSS

```css live-sample___specifying_named_grid_areas
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    ".  foot";
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

上記のコードでは、グリッドコンテナー内に名前のない領域を作成するために、ヌルトークン (`.`) が使用されています。この領域を使用して、グリッドの左下隅に空の空間を作成しました。

#### 結果

{{EmbedLiveSample("Specifying_named_grid_areas", "100%", "285px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template")}}
- [グリッドテンプレート領域](/ja/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- 動画: [Grid template areas](https://gridbyexample.com/video/grid-template-areas/)
