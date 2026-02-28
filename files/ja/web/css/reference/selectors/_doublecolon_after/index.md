---
title: ::after
slug: Web/CSS/Reference/Selectors/::after
l10n:
  sourceCommit: ed2725c99c6011da9d4afa5e47546fe0722ee814
---

CSS において **`::after`** は、選択した要素の最後の子要素として[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を生成します。よく {{CSSxRef("content")}} プロパティを使用して、要素に装飾的な内容を追加するために用いられます。この要素は既定でインラインです。

{{InteractiveExample("CSS デモ: ::after", "tabbed-standard")}}

```css interactive-example
a::after {
  content: " (" attr(href) ")";
}

.dead-link {
  text-decoration: line-through;
}

.dead-link::after {
  content: url("/shared-assets/images/examples/warning.svg");
  display: inline-block;
  width: 12px;
  height: 12px;
}
```

```html interactive-example
<p>
  The sailfish is named for its sail-like dorsal fin and is widely considered
  the fastest fish in the ocean.
  <a href="https://en.wikipedia.org/wiki/Sailfish"
    >You can read more about it here</a
  >.
</p>

<p>
  The red lionfish is a predatory scorpionfish that lives on coral reefs of the
  Indo-Pacific Ocean and more recently in the western Atlantic.
  <a href="" class="dead-link">You can read more about it here</a>.
</p>
```

## 構文

```css-nolint
::after {
  content: /* 値 */;
  /* プロパティ */
}
```

## 解説

`::after` 擬似要素は、関連付けられた要素、すなわち「生成元要素」の直下の子として生成されるインラインボックスです。多くの場合、{{CSSxRef("content")}} プロパティを介して要素に装飾的なコンテンツ（アイコン、引用符、その他の装飾など）を追加するために使用されます。

`::after` 擬似要素は、{{ glossary("replaced elements", "置換要素")}}（{{htmlelement("img")}} など）には適用できません。これらは外部リソースによってコンテンツが決定され、現在の文書のスタイルの影響を受けないためです。

`::after` 擬似要素の {{cssxref("display")}} 値が `list-item` の場合、リストアイテムのように振る舞いますので、{{cssxref("::marker")}} 擬似要素は {{htmlelement("li")}} 要素と同様に生成可能です。

{{cssxref("content")}} プロパティが指定されていない場合、不正な値を持つ場合、または値として `normal` または `none` を取る場合、`::after` 擬似要素はレンダリングされません。これは `display: none` が設定された場合と同様の挙動を示します。

> [!NOTE]
> [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) では[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)と[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を見分けやすくするために、 `::after` の表記法（二重コロン付き）が導入されました。ブラウザーでは CSS2 で導入された `:after` も使用できます。

デフォルトでは、`::before` および `::after` 擬似要素は親要素と同じ重ね合わせコンテキストを共有します。明示的に {{cssxref("z-index")}} が設定されていない場合、`::after` 擬似要素の生成コンテンツは `::before` 擬似要素の生成コンテンツの上に現れます。これは、`::after` が DOM フローにおいて後からレンダリングされるためです。

## アクセシビリティ

`::after` 擬似要素を使用してコンテンツを追加することは推奨されません。スクリーンリーダーによる確実なアクセシビリティが保証されないためです。

## 例

### 基本的な使い方

2 つのクラスを作成しましょう。 1 つはつまらない段落で 1 つは楽しい段落です。これらのクラスを使用して、段落の最後に擬似要素を追加することができます。

#### HTML

```html
<p class="boring-text">古くつまらないテキストです。</p>
<p>つまらなくも楽しくもないふつうのテキストです。</p>
<p class="exciting-text">MDN への協力は楽しいものです。</p>
```

#### CSS

```css
.exciting-text::after {
  content: " <- 楽しい！";
  color: darkgreen;
  font-weight: bolder;
}

.boring-text::after {
  content: " <- ツマラナイ！";
  color: darkviolet;
  font-weight: bolder;
}
```

#### 結果

{{EmbedLiveSample('Basic_usage', 500, 150)}}

### 装飾の例

{{CSSxRef("content")}} プロパティ内の文字列や画像は、大体思う通りに整形することができます。

#### HTML

```html
<span class="ribbon">このテキストの後のオレンジのボックスを見てください。</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "かわいいオレンジのボックスです。";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### 結果

{{EmbedLiveSample('Decorative_example', 450, 20)}}

### ツールチップ

この例は、`::after` を CSS の [`attr()`](/ja/docs/Web/CSS/Reference/Values/attr) 関数と `data-description` [カスタムデータ属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*)との組み合わせで使用し、ツールチップを作成しています。JavaScript は必要ありません。

また、このテクニックを使ってキーボードユーザーに対応することもできます。 `tabindex` に `0` を追加して、それぞれの `span` をキーボードフォーカス可能にし、CSS の `:focus` セレクターを使用することでキーボードフォーカスを可能にします。これは `::before` と `::after` がいかに柔軟であるかを示しています。しかし、最もアクセスしやすいようにするには、他の方法（例えば [details および summary](/ja/docs/Web/HTML/Reference/Elements/details) 要素で作成した詳細折りたたみウィジェットがより適していると思われます。

#### HTML

```html
<p>
  Here we have some
  <span tabindex="0" data-description="collection of words and punctuation">
    text
  </span>
  with a few
  <span tabindex="0" data-description="small popups that appear when hovering">
    tooltips</span
  >.
</p>
```

#### CSS

```css
span[data-description] {
  position: relative;
  text-decoration: underline;
  color: blue;
  cursor: help;
}

span[data-description]:hover::after,
span[data-description]:focus::after {
  content: attr(data-description);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: black;
  font-size: 14px;
  z-index: 1;
}
```

#### 結果

{{EmbedLiveSample('Tooltips', 450, 120)}}

### `::after::marker` 入れ子の擬似要素

`::after::marker` [入れ子の擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements)は、リストアイテム、すなわち {{CSSxRef("display")}} プロパティが `list-item` に設定されている `::after` 擬似要素のリストのマーカー ({{CSSxRef("::marker")}}) を選択します。

このデモでは、`::before` と `::after` を使用してリストナビゲーションメニューの前後に追加のリストアイテムを生成します（`display: list-item` を設定してリストアイテムのように振る舞うようにします）。その後、`ul::before::marker` と `ul::after::marker` を使用して、それぞれのリストマーカーに異なる色を適用します。

#### HTML

```html
<ul>
  <li><a href="#">まえがき</a></li>
  <li><a href="#">はじめに</a></li>
  <li><a href="#">基本の理解</a></li>
</ul>
```

#### CSS

```css
ul {
  font-size: 1.5rem;
  font-family: "Helvetica", "Arial", sans-serif;
}

ul::before,
ul::after {
  display: list-item;
  color: orange;
}

ul::before {
  content: "開始";
}

ul::after {
  content: "終了";
}

ul::before::marker,
ul::after::marker {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('`::after::marker` nested pseudo-elements', 450, 200)}}

3 つのナビゲーションアイテムのリストの箇条書き記号は `<li>` 要素であるため生成されますが、「開始」と「終了」が擬似要素を介して挿入されており、箇条書き記号のスタイル設定には `::marker` が使用されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
