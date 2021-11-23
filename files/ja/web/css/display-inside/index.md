---
title: <display-inside>
slug: Web/CSS/display-inside
tags:
  - CSS
  - CSS データ型
  - CSS 表示
  - データ型
  - リファレンス
  - display-inside
translation_of: Web/CSS/display-inside
---
{{CSSRef}}

以下のキーワードは、要素の内部の {{CSSxRef("display")}} 種別を指定し、これは要素 (置換要素ではないものとする) の内容物をレイアウトする整形コンテキストの種類を定義します。これらのキーワードは `display` プロパティの値として使用され、単一のキーワードとしては伝統的な目的に、または Level 3 仕様書では {{CSSxRef("&lt;display-outside&gt;")}} のキーワードと共に使用されます。

## 構文

有効な `<display-inside>` の値は以下の通りです。

- `flow` {{Experimental_Inline}}

  - : 要素は、フローレイアウト (ブロックおよびインラインのレイアウト) を使用して、内容物をレイアウトします。

    外部表示種別が `inline` または `run-in` であり、またブロックまたはインラインの整形コンテキストに関係する場合は、インラインボックスを生成します。そうでない場合は、ブロックコンテナーボックスを生成します。

    ほかのプロパティ ({{cssxref("position")}}, {{cssxref("float")}}, {{cssxref("overflow")}} など) の値や、要素自体がブロックまたはインラインの整形コンテキストに関係するかによって、新たな[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context) (BFC) を生成する、または内容物が親の整形コンテキストに吸収されます。

- `flow-root`
  - : 要素は、新たな[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)を確立するブロック要素ボックスを生成し、整形ルートがある場所を定義します。
- `table`
  - : HTML の {{HTMLElement("table")}} 要素と同じように動作します。これは、ブロックレベルボックスを定義します。
- `flex`
  - : 要素は、ブロック要素のように動作しつつ、そのコンテンツを[フレックスボックスモデル](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)に従ってレイアウトします。
- `grid`
  - : 要素は、ブロック要素のように動作しつつ、そのコンテンツを[グリッドモデル](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)に従ってレイアウトします。
- `ruby` {{Experimental_Inline}}
  - : 要素は、インライン要素のように動作しつつ、そのコンテンツをルビ (ruby) モデルに従ってレイアウトします。HTML の {{HTMLElement("ruby")}} 要素のように動作します。

> **Note:** 二つの値の構文に対応しているブラウザーは、 `display: flex` や `display: grid` などの内部表示種別のみが指定されていると、外部表示種別を `block` に設定します。これで期待通りに動作します。例えば、ある要素を `display: grid` に指定した場合、そのボックスはブロックレベルボックスのグリッドコンテナーとして生成されることが期待されるでしょう。

<h2 id="Examples">例</h2>

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
    border:1px solid black;
    padding: 10px;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", 180)}}

## 仕様書

| 仕様書                                                                                    | 状態                           |
| ------------------------------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('CSS3 Display', '#typedef-display-inside', 'display-inside')}} | {{Spec2('CSS3 Display')}} |

## ブラウザーの互換性

### 複数のキーワードの対応

{{Compat("css.properties.display.multi-keyword_values", 10)}}

- Chromium のバグ: <https://bugs.chromium.org/p/chromium/issues/detail?id=804600>

### flow-root の対応

{{Compat("css.properties.display.flow-root", 10)}}

### table の対応

{{Compat("css.properties.display.table_values", 10)}}

### grid の対応

{{Compat("css.properties.display.grid", 10)}}

### flex の対応

{{Compat("css.properties.display.flex", 10)}}

### ruby の対応

{{Compat("css.properties.display.ruby_values", 10)}}

## 関連情報

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
