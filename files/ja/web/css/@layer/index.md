---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: 3c33463072905e81ac620dd9780313369029b498
---

{{CSSRef}}

**`@layer`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、カスケードレイヤーを宣言するために使用し、また複数のカスケードレイヤーがある場合に、優先順位を定義するためにも使用することができます。

{{EmbedInteractiveExample("pages/tabbed/at-rule-layer.html", "tabbed-standard")}}

## 構文

```css
@layer layer-name {rules}
@layer layer-name;
@layer layer-name, layer-name, layer-name;
@layer {rules}
```

ここで次のようになります。

- _layer-name_
  - : カスケードレイヤーの名前です。
- _rules_
  - : そのカスケードレイヤーに含まれる一連の CSS ルールです。

## 解説

カスケードレイヤー内のルールは、一緒にカスケードされ、ウェブ開発者がカスケードをより制御できるようにします。レイヤーの中にないスタイルは一斉に集められ、宣言されたレイヤー、名前付きまたは無名のレイヤーのすべて後に来る単一の無名のレイヤーに配置されます。この意味は、レイヤーの外で宣言されたスタイルは、レイヤーの中で宣言されたスタイルよりも優先されるということです。

`@layer` アットルールは 3 つの方法のいずれかでカスケードレイヤーを作成するために使用します。

最初の方法は、次のようにして名前付きカスケードレイヤーを作成し、 CSS ルールをその中に入れることです。

```css
@layer utilities {
  .padding-sm {
    padding: 0.5rem;
  }

  .padding-lg {
    padding: 0.8rem;
  }
}
```

2 つ目は、スタイルを割り当てずに名前付きのカスケードレイヤーを作成する方法です。これは下記のように単一のレイヤーとすることができます。

```css
@layer utilities;
```

次のようにして複数のレイヤーを一度に定義することもできます。

```css
@layer theme, layout, utilities;
```

これは、レイヤーを宣言する最初の順序が、どのレイヤーが優先されるかを示すので便利です。宣言の場合と同様に、複数のレイヤーで宣言が見つかった場合は、最後にリストアップされたレイヤーが優先されます。したがって、先ほどの例では、`theme` と `utilities` で競合するルールがあった場合、 `utilities` にあるルールが優先的に適用されるでしょう。

`utilities` のルールの方が `theme` ルールよりも詳細度が低くても適用されます。これは、レイヤーの順序が決まれば、詳細度や見た目の順序は無視されるからです。これは、セレクターが競合するルールを上書きするのに十分な高い詳細度を持つことを保証する必要がなく、後のレイヤーに表示されることだけを保証すればよいため、よりシンプルな CSS セレクターを作成することが可能になるのです。

> [!NOTE]
> レイヤー名を宣言して順番を決めたら、名前を宣言し直してレイヤーに CSS ルールを追加してください。すると、スタイルがレイヤーに追加され、レイヤーの順序は変更されません。

3 つ目は、次のように名前のないカスケードレイヤーを作成する方法です。

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

これは無名カスケードレイヤーを作成します。このレイヤーは名前付きレイヤーと同じように機能しますが、後でルールを割り当てることはできません。無名レイヤーの優先順位は、名前付きまたは無名のレイヤーが宣言された順番であり、レイヤーの外側で宣言されたスタイル設定よりも下になります。

カスケードレイヤーを作成するもう一つの方法は、 {{cssxref("@import")}} を使用することです。この場合、ルールはインポートされたスタイルシートの中にあることになります。 `@import` アットルールは、 `@charset` ルールと `@layer` ルールを除く、他のすべての種類のルールに先立って入力しなければならないことを覚えておいてください。

```css
@import "theme.css" layer(utilities);
```

### レイヤーの入れ子

次のように、レイヤーは入れ子にすることができます。

```css
@layer framework {
  @layer layout {
  }
}
```

`framework` の中にある `layout` レイヤーにルールを追加するには、 2 つの名前を `.` でつないでください。

```css
@layer framework.layout {
  p {
    margin-block: 1rem;
  }
}
```

## 形式文法

{{csssyntax}}

## 例

### 単純な例

次の例では、 2 つの CSS ルールが作成されています。 1 つはレイヤーの外にある {{htmlelement("p")}} 要素に対して、もう一つは `.box p` に対して `type` というレイヤーの内側にあります。

レイヤーがなければ、セレクター `.box p` が最も高い詳細度を持つので、テキスト `Hello, world!` は緑色で表示されます。 `type` レイヤーはレイヤー以外のコンテンツを保持するために作成された無名レイヤーの前にあるため、テキストは紫色で表示されます。

また、順序にも注意してください。レイヤー以外のスタイルを最初に宣言しても、それはレイヤーのスタイルの後に適用されます。

#### HTML

```html
<div class="box">
  <p>Hello, world!</p>
</div>
```

#### CSS

```css
p {
  color: rebeccapurple;
}

@layer type {
  .box p {
    font-weight: bold;
    font-size: 1.3em;
    color: green;
  }
}
```

#### 結果

{{EmbedLiveSample("Simple_example")}}

### 既存のレイヤーにルールを割り当てる

次の例では、ルールが適用されていない 2 つのレイヤーを作成し、その 2 つのレイヤーに CSS ルールを適用しています。ベースとなるレイヤーは、色、ボーダー、フォントサイズ、パディングを定義しています。 `special` レイヤーでは、別の色を定義しています。 `special` はレイヤーを定義する際に最後に来るので、それが提供する色が使用され、テキストは `rebeccapurple` を使用して表示されます。その他のルールは `base` のものがそのまま適用されます。

#### HTML

```html
<div class="item">
  I am displayed in <code>color: rebeccapurple</code> because the
  <code>special</code> layer comes after the <code>base</code> layer. My green
  border, font-size, and padding come from the <code>base</code> layer.
</div>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: rebeccapurple;
  }
}

@layer base {
  .item {
    color: green;
    border: 5px solid green;
    font-size: 1.3em;
    padding: 0.5em;
  }
}
```

#### 結果

{{EmbedLiveSample("Assigning_rules_to_existing_layers")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`@import`](/ja/docs/Web/CSS/@import)
- {{domxref("CSSLayerBlockRule")}}
- {{domxref("CSSLayerStatementRule")}}
- [`!important`](/ja/docs/Web/CSS/important)
- [`revert-layer`](/ja/docs/Web/CSS/revert-layer)
- [CSS カスケード入門](/ja/docs/Web/CSS/Cascade)
- [カスケード、詳細度、継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [カスケードレイヤー](/ja/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [The future of CSS: Cascade layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) (bram.us (2021))
