---
title: 張りつくフッター
slug: Web/CSS/How_to/Layout_cookbook/Sticky_footers
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

張りつくフッターのパターンは、コンテンツがビューポートの高さより短い場合に、ページのフッターがビューポートの下部に「張りつく」パターンです。 このレシピでこれを作成するためのいくつかのテクニックを見ていきます。

## 要件

張りつくフッターのパターンは、次の要件を満たす必要があります。

- コンテンツが短い場合、フッターはビューポートの下部に張りつきます。
- ページのコンテンツがビューポートの下部を超えて広がっている場合、フッターは通常どおりコンテンツの下に配置されます。

## レシピ

以下のコードブロックの "Play" をクリックすると、この例を MDN Playground で開きます。

```html-nolint live-sample___sticky-footer-example
<div class="wrapper">
  <header class="page-header">これがヘッダーです</header>
  <main class="page-body">
    <p contenteditable>
      この段落は短いですが、フッターは画面の下部に固定されたままです。この編集可能な領域にコンテンツを追加すると、コンテンツに合わせて必要に応じてフッターが下に移動するのが確認できます。
    </p>
  </main>
  <footer class="page-footer">張りつくフッター</footer>
</div>
```

```css live-sample___sticky-footer-example
* {
  box-sizing: inherit;
}

html {
  height: 100%;
  box-sizing: border-box;
}

body {
  height: 100%;
  font: 1.2em sans-serif;
}

.wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.page-header,
.page-footer {
  background-color: rgb(75 70 74);
  color: white;
  padding: 20px;
}

.page-body {
  padding: 20px;
}

.page-body p {
  border: 1px solid grey;
}
```

{{EmbedLiveSample("sticky-footer-example", "", "400px")}}

> [!NOTE]
> この例と以下の例では、ライブ例がうまくいくように、 wrapper に `min-height: 100%` に設定して使用しています。 また、{{htmlelement("body")}} の {{cssxref("min-height")}} を `100vh` に設定し、それをグリッドコンテナーとして使用することで、ページ全体でこれを実現することもできます。

## 選択したもの

上記の例では、[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)を使用して張りつくフッターを実現しています。 `.wrapper` の最小の高さは `100%` です。 つまり、コンテナーの高さと同じ高さになります。 次に、レイアウトの各部分につき 1 行で、3 行 1 列のグリッドレイアウトを作成します。

[グリッドの自動配置](/ja/docs/Web/CSS/Guides/Grid_layout/Auto-placement)では、アイテムがソース順に配置されるため、ヘッダーは最初の自動サイズ調整トラックに入り、メインコンテンツは `1fr` トラックに、フッターは最後の自動サイズ調整トラックに入ります。`1fr` トラックは使用可能な空間をすべて占有するため、隙間を埋めるように大きくなります。

## 代替策

また、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用して、張りつくフッターを作成することもできます。

```html-nolint live-sample___sticky-footer-flexbox-example
<div class="wrapper">
  <header class="page-header">これがヘッダーです</header>
  <main class="page-body">
    <p contenteditable>
      この段落は短いですが、フッターは画面の下部に固定されたままです。この編集可能な領域にコンテンツを追加すると、コンテンツに合わせて必要に応じてフッターが下に移動するのが確認できます。
    </p>
  </main>
  <footer class="page-footer">張りつくフッター</footer>
</div>
```

```css live-sample___sticky-footer-flexbox-example
* {
  box-sizing: border-box;
}

html,
body {
  box-sizing: border-box;
  height: 100%;
  padding: 0;
  margin: 0;
  font: 1.2em sans-serif;
}

.wrapper {
  box-sizing: border-box;
  min-height: 100%;

  display: flex;
  flex-direction: column;
}

.page-header,
.page-footer {
  background-color: rgb(75 70 74);
  color: white;
  padding: 20px;

  flex-grow: 0;
  flex-shrink: 0;
}

.page-body {
  padding: 20px;

  flex-grow: 1;
}

.page-body p {
  border: 1px solid grey;
}
```

{{EmbedLiveSample("sticky-footer-flexbox-example", "", "400px")}}

フレックスボックスの例は同じように始まりますが、`.wrapper` では `display:flex` を `display:grid` の代わりに使用しています。また、{{cssxref("flex-direction")}} を `column` に設定します。次に、メインコンテンツを [`flex-grow: 1`](/ja/docs/Web/CSS/Reference/Properties/flex-grow) に設定し、他の 2 つの要素を [`flex-shrink: 0`](/ja/docs/Web/CSS/Reference/Properties/flex-shrink) に設定します。これにより、コンテンツがメイン領域いっぱいになったときに、それらが縮小されるのを防ぎます。

## MDN のリソース

- CSS プロパティ: {{cssxref("display")}}, {{cssxref("min-height")}}, {{cssxref("grid-template-rows")}}, {{cssxref("flex-direction")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}
- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
