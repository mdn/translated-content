---
title: 重ね合わせコンテキスト
slug: Web/CSS/Guides/Positioned_layout/Stacking_context
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**重ね合わせコンテキスト** (Stacking context) は、ビューポートまたはウェブページに面していると想定されるユーザーに対する仮想的な Z 軸に沿って並べられた HTML 要素の三次元の概念化です。重ね合わせコンテキストは、Z 軸（画面上の「奥行き」のサイズと考えてください）に沿って要素が互いに重なり合う方法を決定します。重ね合わせコンテキストは、重なり合うコンテンツがどのようにレンダリングされるかの視覚的な順序を決定します。

重ね合わせコンテキスト内の要素は、その重ね合わせコンテキスト外の要素とは独立して重ね合わされます。これにより、ある重ね合わせコンテキスト内の要素が別のコンテキスト内の要素の重ね順に影響を与えないことが保証されます。それぞれの重ね合わせコンテキストはその兄弟要素から完全に独立しており、重ね合わせ処理時には子孫要素のみが考慮されます。

それぞれの重ね合わせコンテキストは自己完結しています。要素の内容が重ね合わせられた後、その要素全体は親の重ね合わせコンテキストにおける重ね合わせ順序において単一の単位として扱われます。

重ね合わせコンテキスト内では、子要素はすべての兄弟要素の `z-index` 値に基づいて重ね合わされます。これらのネストされた要素の重ね合わせコンテキストは、この親要素内でのみ意味を持ちます。重ね合わせコンテキストは、親の重ね合わせコンテキスト内で単一の単位として原子的に扱われます。重ね合わせコンテキストは、それ以外にも重ね合わせコンテキスト内に含まれることができ、それらが組み合わさって重ね合わせコンテキストの階層構造を生成します。

重ね合わせコンテキストの階層構造は、HTML 要素の階層構造の一部です。なぜなら、特定の要素のみが重ね合わせコンテキストを生成するからです。自分自身で重ね合わせコンテキストを生成しない要素は、親の重ね合わせコンテキストに同化されます。

## 重ね合わせコンテキストを作成する機能

重ね合わせコンテキストは以下のような場面で、文書の随所に様々な要素によって構成されます。

- 文書のルート要素 (`<html>`)
- {{cssxref("position")}} の値が `absolute` または `relative` であり、かつ {{cssxref("z-index")}} の値が `auto` 以外の要素
- {{cssxref("position")}} の値が `fixed` または `sticky` の要素。
- {{cssxref("container-type")}} の値が[コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)のために `size` または `inline-size` に設定されているもの。
- [フレックスアイテム](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)であり、 {{cssxref("z-index")}} の値が `auto` 以外の要素。
- [グリッドアイテム]()であり、 {{cssxref("z-index")}} の値が `auto` 以外の要素。
- {{cssxref("opacity")}} の値が `1` 未満である要素。
- {{cssxref("mix-blend-mode")}} の値が `normal` 以外の要素。
- 以下のプロパティのいずれかが `none` 以外の値を持つ要素。
  - {{cssxref("transform")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - {{cssxref("translate")}}
  - {{cssxref("filter")}}
  - {{cssxref("backdrop-filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- {{cssxref("isolation")}} の値が `isolate` である要素。
- {{cssxref("will-change")}} の値が、初期値以外で重ね合わせコンテキストを作成する任意のプロパティを指定している要素。
- {{cssxref("contain")}} の値が `layout` または `paint` であるか、これらのどちらかを含む複合値（すなわち `contain: strict`, `contain: content`）を持つ要素。
- [最上位レイヤー](/ja/docs/Glossary/Top_layer)に配置され、対応する {{cssxref("::backdrop")}} がある要素。例えば[全画面](/ja/docs/Web/API/Fullscreen_API)や[ポップオーバー](/ja/docs/Web/API/Popover_API)の要素を含む。
- 重ね合わせコンテキストを作成するプロパティ（`opacity` など）を持つ要素が、 {{cssxref("@keyframes")}} を使用してアニメーションし、{{cssxref("animation-fill-mode")}} が [`forwards`](/ja/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) に設定されている場合。

## 入れ子の重ね合わせコンテキスト

重ね合わせコンテキストは、他の重ね合わせコンテキスト内に含まれていることがあり、それらが組み合わさって重ね合わせコンテキストの階層構造を生成することが可能です。

文書のルート要素は重ね合わせコンテキストであり、ほとんどの場合、ネストされた重ね合わせコンテキストを含み、それらの多くはさらに追加の重ね合わせコンテキストを含みます。それぞれの重ね合わせコンテキスト内では、子要素は[`z-index`の使用](/ja/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)で説明されているのと同じルールに従って重ねられます。重要な点として、子の重ね合わせコンテキストの `z-index` 値は、親の重ね合わせコンテキスト内でのみ意味を持ちます。重ね合わせコンテキストは、親の重ね合わせコンテキスト内では単一の単位として原子的に扱われます。

重ね合わせされた要素の Z 軸方向のレンダリング順序を理解するには、それぞれのインデックス値を一種の「バージョン番号」と捉え、子要素は親要素のメジャーバージョン番号の下位にあるマイナーバージョン番号を表現すると考えましょう。

それぞれの要素の積み重ね順序が、その祖先の重ね合わせコンテキストの積み重ね順序にどのように関与するかを示すため、6 つのコンテナー要素を含む例ページを見てみましょう。3 つの兄弟要素である {{htmlelement("article")}} 要素があります。前の `<article>` 要素には 3 つの兄弟要素である {{htmlelement("section")}} が含まれており、その 3 つ目記事の {{htmlelement("heading_elements", "&lt;h1&gt;")}} と {{htmlelement("code")}} は、最初に現れる兄弟 `<section>` 要素と 2 つ目に現れる兄弟 `<section>` 要素の間に現れています。

```html
<article id="container1">
  <h1>記事要素 #1</h1>
  <code>
    position: relative;<br />
    z-index: 5;
  </code>
</article>

<article id="container2">
  <h1>記事要素 #2</h1>
  <code>
    position: relative;<br />
    z-index: 2;
  </code>
</article>

<article id="container3">
  <section id="container4">
    <h1>セクション要素 #4</h1>
    <code>
      position: relative;<br />
      z-index: 6;
    </code>
  </section>

  <h1>記事要素 #3</h1>
  <code>
    position: absolute;<br />
    z-index: 4;
  </code>

  <section id="container5">
    <h1>セクション要素 #5</h1>
    <code>
      position: relative;<br />
      z-index: 1;
    </code>
  </section>

  <section id="container6">
    <h1>セクション要素 #6</h1>
    <code>
      position: absolute;<br />
      z-index: 3;
    </code>
  </section>
</article>
```

すべてのコンテナー要素は、{{cssxref("opacity")}} が `1` 未満であり、{{cssxref("position")}} が `relative` または `absolute` のいずれかに設定されています。これらのプロパティ値の組み合わせは、要素が `z-index` 値が `auto` 以外の場合に、重ね合わせコンテキストを生成します。

```css hidden
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px "Arial",
    sans-serif;
}
h1 {
  font-size: 1.25em;
}
#container1,
#container2 {
  border: 1px dashed #669966;
  padding: 10px;
  background-color: #ccffcc;
}
#container1 {
  margin-bottom: 190px;
}
#container3 {
  border: 1px dashed #990000;
  background-color: #ffdddd;
  padding: 40px 20px 20px;
  width: 330px;
}
#container4 {
  border: 1px dashed #999966;
  background-color: #ffffcc;
  padding: 25px 10px 5px;
  margin-bottom: 15px;
}
#container5 {
  border: 1px dashed #999966;
  background-color: #ffffcc;
  margin-top: 15px;
  padding: 5px 10px;
}
#container6 {
  background-color: #ddddff;
  border: 1px dashed #000099;
  padding-left: 20px;
  padding-top: 125px;
  width: 150px;
  height: 125px;
}
```

```css
section,
article {
  opacity: 0.85;
  position: relative;
}
#container1 {
  z-index: 5;
}
#container2 {
  z-index: 2;
}
#container3 {
  z-index: 4;
  position: absolute;
  top: 40px;
  left: 180px;
}
#container4 {
  z-index: 6;
}
#container5 {
  z-index: 1;
}
#container6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
}
```

色、フォント、配置、[ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)に関する CSS プロパティは、簡略化のために非表示にしています。

{{ EmbedLiveSample('Nested stacking contexts', '100%', '396') }}

上記の例の重ね合わせコンテキストの階層構造は次の通りです。

```plain no-lint
ルート
│
├── 記事 #1
├── 記事 #2
└── 記事 #3
  │
  ├── セクション #4
  ├────  記事 #3 のコンテンツ
  ├── セクション #5
  └── セクション #6
```

3つの`<section>`要素は記事 #3 の子要素です。したがって、セクション要素の重ね合わせは記事 #3 内で完全に解決されます。記事 #3 内での重ね合わせとレンダリングが完了すると、記事 #3 要素全体が、その兄弟要素である `<article>` 要素につけて、ルート要素内で重ね合わせのために渡されます。

`z-index` を「バージョン番号」として比較することで、`z-index` が `1` の要素（セクション #5）は `z-index` が `2` の要素（記事 #2）の上に重ね合わせられる仕組みや、`z-index` が `6` （セクション #4）の要素が `z-index` が `5`（記事 #1）の要素の下に重ね合わせられている様子がわかります。
セクション #4 は記事 #1 の下に描画されます。これは記事 #1 の z-index (`5`) がルート要素の重ね合わせコンテキストの中で有効であるのに対し、セクション #4 の z-index (`6`) は記事 #3 (`z-index: 4`) の重ね合わせコンテキスト内で有効であるからです。そのためセクション #4 は記事 #1 の下になります。セクション #4 は記事 #3 に所属しており、この z-index 値はより小さいからです（`4-6` は `5-0` より小さい）。

同じ理由から、記事 #2 (`z-index: 2`) はセクション #5 (`z-index`: 1) の下に描画されます。セクション #5 は記事 #3 (`z-index: 4`) に所属しており、 z-index 値がより高いからです（`2-0` は `4-1` よりも小さい）。

記事 #3 の z-index は `4` ですが、この値は内部に含まれる 3 つのセクションの `z-index` とは独立しています。これらは異なる重ね合わせコンテキストに属しているからです。

この例をします（最終的な描画順に並べ替えています）。

- ルート
  - 記事 #2: (`z-index`: 2) は、結果として `2-0` の描画順になる
  - 記事 #3: (`z-index`: 4) は、結果として `4-0` の描画順になる
    - セクション #5: (`z-index`: 1) は要素 (`z-index`: 4) の下に重ね合わされる。結果として `4-1` の描画順になる
    - セクション #6: (`z-index`: 3) は要素 (`z-index`: 4) の下に重ね合わされる。結果として `4-3` の描画順になる
    - セクション #4: (`z-index`: 6) は要素 (`z-index`: 4) の下に重ね合わされる。結果として `4-6` の描画順になる

  - 記事 #1: (`z-index`: 5) は、結果として `5-0` の描画順になる

### 結果

それ以外の例は、[2 階層の HTML 構造で、最終階層の `z-index`](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1)、[2 階層の HTML 構造、全階層の `z-index`](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2)、[3 階層の HTML 構造、第 2 階層の `z-index`](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3)にあります。

## 関連情報

- [z-index を理解する](/ja/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [`z-index` なしの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [浮動ボックスの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [z-index の使用](/ja/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- {{glossary("Top layer", "最上位レイヤー")}}
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
