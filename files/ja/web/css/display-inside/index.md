---
title: <display-inside>
slug: Web/CSS/display-inside
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

以下のキーワードは、要素の内部の {{CSSxRef("display")}} 種別を指定し、これは要素 (置換要素ではないものとする) の内容物をレイアウトする整形コンテキストの種類を定義します。これらのキーワードは `display` プロパティの値として使用され、単一のキーワードとしては伝統的な目的に、または Level 3 仕様書では {{CSSxRef("&lt;display-outside&gt;")}} のキーワードと共に使用されます。

## 構文

有効な `<display-inside>` の値は以下の通りです。

- `flow`

  - : 要素は、フローレイアウト (ブロックおよびインラインのレイアウト) を使用して、内容物をレイアウトします。

    外部表示種別が `inline` または `run-in` であり、またブロックまたはインラインの整形コンテキストに関係する場合は、インラインボックスを生成します。そうでない場合は、ブロックコンテナーボックスを生成します。

    ほかのプロパティ ({{CSSxRef("position")}}, {{CSSxRef("float")}}, {{CSSxRef("overflow")}} など) の値や、要素自体がブロックまたはインラインの整形コンテキストに関係するかによって、新たな[ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) を生成する、または内容物が親の整形コンテキストに吸収されます。

- `flow-root`
  - : 要素は、新たな[ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context)を確立するブロック要素ボックスを生成し、整形ルートがある場所を定義します。
- `table`
  - : HTML の {{HTMLElement("table")}} 要素と同じように動作します。これは、ブロックレベルボックスを定義します。
- `flex`
  - : 要素は、ブロック要素のように動作しつつ、そのコンテンツを[フレックスボックスモデル](/ja/docs/Web/CSS/CSS_flexible_box_layout)に従ってレイアウトします。
- `grid`
  - : 要素は、ブロック要素のように動作しつつ、そのコンテンツを[グリッドモデル](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)に従ってレイアウトします。
- `ruby`
  - : 要素は、インライン要素のように動作しつつ、そのコンテンツをルビ (ruby) モデルに従ってレイアウトします。HTML の {{HTMLElement("ruby")}} 要素のように動作します。

> [!NOTE]
> 2 つの値の構文に対応しているブラウザーは、 `display: flex` や `display: grid` などの内部表示種別のみが指定されていると、外部表示種別を `block` に設定します。これで期待通りに動作します。例えば、ある要素を `display: grid` に指定した場合、そのボックスはブロックレベルボックスのグリッドコンテナーとして生成されることが期待されるでしょう。

## 形式文法

{{csssyntax}}

## 例

この例では、親ボックスは `display: flow-root` となり、新しいブロック整形コンテキストを確立して浮動アイテムを含みます。

### HTML

```html
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

### CSS

```css
.box {
  background-color: rgb(224, 206, 247);
  border: 5px solid rebeccapurple;
  display: flow-root;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
