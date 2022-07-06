---
title: '@layer'
slug: Web/CSS/@layer
tags:
  - アットルール
  - CSS
  - リファレンス
  - ウェブ
  - layer
  - cascade
browser-compat: css.at-rules.layer
translation_of: Web/CSS/@layer
---
{{CSSRef}}{{SeeCompatTable}}

**`@layer`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、*カスケードレイヤー*を宣言します。カスケードレイヤー内のルールは一緒にカスケードされるため、ウェブ開発者はカスケードをより自由に制御することができます。

```css
@layer utilities {
  /* utilities という名前のレイヤーを作成します。 */
}
```

## 構文

`@layer` アットルールは、 3 つの方法のうちの 1 つでカスケードレイヤーを作成するために使用されます。 1 つ目は、上記の例のように、そのレイヤーの CSS ルールを内部に持つブロックのアットルールを作成する方法です。

```css
@layer utilities {
  .padding-sm {
    padding: .5rem;
  }

  .padding-lg {
    padding: .8rem;
  }
}
```

カスケードレイヤーは {{cssxref("@import")}} で作ることができ、この場合のルールはインポートされたスタイルシートにあることになります。

```css
@import(utilities.css) layer(utilities);
```

また、スタイルを割り当てずに、名前付きのカスケードレイヤーを作成することもできます。これは単一の名前にすることができます。

```css
@layer utilities;
```

また、次のようにして複数のレイヤーを一度に定義することもできます。

```css
@layer theme, layout, utilities;
```

これは、レイヤーを宣言する最初の順序が、どのレイヤーが優先されるかを示すので便利です。宣言の場合と同様に、複数のレイヤーで宣言が見つかった場合は、最後にリストアップされたレイヤーが優先されます。したがって、先ほどの例では、`theme` と `utilities` で競合するルールがあった場合、 `utilities` にあるルールが優先的に適用されるでしょう。

`utilities` のルールの方が `theme` ルールよりも詳細度が低くても適用されます。これは、レイヤーの順序が決まれば、詳細度や見た目の順序は無視されるからです。これは、セレクターが競合するルールを上書きするのに十分な高い詳細度を持つことを保証する必要がなく、後のレイヤーに表示されることだけを保証すればよいため、よりシンプルな CSS セレクターを作成することが可能になるのです。

> **Note:** レイヤー名を宣言して順番を決めたら、名前を宣言し直してレイヤーに CSS ルールを追加してください。すると、スタイルがレイヤーに追加され、レイヤーの順序は変更されません。

レイヤーにないスタイルはまとめて、宣言されたすべてのレイヤーの後にある無名レイヤーに配置されます。これは、レイヤーの外で宣言されたスタイルは、レイヤーで宣言されたスタイルを上書きすることを意味します。

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

### 無名レイヤー

次のように名前のないレイヤーを作成すると、

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

そして、無名の、名前のないレイヤーが作成されます。これは名前付きレイヤーと同じように機能しますが、後からルールを割り当てることはできません。

## 形式文法

{{CSSSyntax}}

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
<div class="item">I am displayed in <code>color: rebeccapurple</code>
because the <code>special</code> layer comes after the <code>base</code> layer.
My green border, font-size, and padding come from the <code>base</code> layer.</div>
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
    padding: .5em;
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

- [The Future of CSS: Cascade Layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)
