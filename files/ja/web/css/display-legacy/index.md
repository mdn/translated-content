---
title: <display-legacy>
slug: Web/CSS/display-legacy
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{CSSRef}}

CSS 2 では `display` プロパティで単一のキーワードによる構文を採用しており、同じレイアウトモードのブロックレベルとインラインレベルで別々のキーワードが必要でした。このページではこれらの値を詳しく紹介します。

## 構文

有効な `<display-legacy>` は以下のとおりです。

- `inline-block`

  - : この要素はブロック要素ボックスを生成しますが、周囲のコンテンツに対しては単一のインラインボックスであるかのように流れるようになります (置換要素の場合と似ています)。

    これは `inline flow-root` と等価です。

- `inline-table`

  - : `inline-table` は、 HTML には直接的に対応するものがありません。これは、 HTML の {{HTMLElement("table")}} 要素と同じようにふるまいつつ、ブロックレベルボックスではなく、インラインボックスのようにふるまいます。表ボックスの内部はブロックレベルのコンテキストになります。

    これは `inline table` と等価です。

- `inline-flex`

  - : 要素は、インライン要素のようにふるまいつつ、その内容物をフレックスボックスモデルに従ってレイアウトします。

    これは `inline flex` と等価です。

- `inline-grid`

  - : 要素は、インライン要素のようにふるまいつつ、その内容物をグリッドモデルに従ってレイアウトします。

    これは `inline grid` と等価です。

## 形式文法

{{csssyntax}}

## 例

以下の例では、インラインフレックスコンテナーを従来型のキーワードである inline-flex で生成します。

### HTML

```html
<div class="container">
  <div>Flex Item</div>
  <div>Flex Item</div>
</div>

Not a flex item
```

### CSS

```css
.container {
  display: inline-flex;
}
```

### 結果

{{EmbedLiveSample("Examples", 300, 150)}}

新しい構文では、インラインフレックスコンテナーは二つの値を使用して生成され、外部表示種別が inline、内部表示種別が flex です。

```css
.container {
  display: inline flex;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
