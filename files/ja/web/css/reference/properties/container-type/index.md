---
title: "`container-type` プロパティ"
short-title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

**container-type** は [CSS](/ja/docs/Web/CSS) のプロパティで、コンテナークエリーで使用されるコンテナーコンテキストの種類を指定します。

## 構文

```css
/* キーワード値 */
container-type: normal;
container-type: size;
container-type: inline-size;
container-type: scroll-state;
container-type: anchored;

/* 2 つの値 */
container-type: size scroll-state;

/* グローバル値 */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### 値

このプロパティは、以下のリストから 1 つまたは 2 つのキーワード値を指定します。2 つの値を指定する場合、1 つは `scroll-state` でなければならず、もう 1 つは `inline-size` または `size` でなければなりません。

- `anchored`
  - : そのコンテナー内で、アンカー付きコンテナークエリー用のクエリコンテナーを確立します。この場合、要素のサイズは独立して計算されるわけではなく、[抑制](/ja/docs/Web/CSS/Guides/Containment/Using)は適用されません。
- `inline-size`
  - : コンテナーの[インライン軸](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#ブロック軸とインライン軸)上のサイズクエリー用のクエリーコンテナーを確立します。
    要素に[スタイル](/ja/docs/Web/CSS/Reference/Properties/contain#style)抑制と[インラインサイズ](/ja/docs/Web/CSS/Reference/Properties/contain#inline-size)抑制を適用します。要素のインラインサイズは、子要素を無視して[単独で計算](/ja/docs/Web/CSS/Guides/Containment/Using#サイズ抑制)することができます（[CSS コンテナーの使用](/ja/docs/Web/CSS/Guides/Containment/Using)を参照してください）。

- `normal`
  - : この要素はコンテナーサイズクエリー、スクロール状態クエリー、アンカークエリーのクエリーコンテナーではありませんが、[コンテナースタイルクエリー](/ja/docs/Web/CSS/Reference/At-rules/@container#コンテナースタイルクエリー)および[名前のみのコンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries#名前のみのコンテナークエリー)のクエリーコンテナーであることに変わりはありません。

- `scroll-state`
  - : コンテナーのスクロール状態クエリー用のクエリコンテナーを設定します。この場合、要素のサイズは単独で計算されず、抑制は適用されません。

- `size`
  - : [インラインおよびブロック](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#ブロック軸とインライン軸)の両方の寸法で コンテナーサイズクエリーのためのクエリー コンテナーを確立します。
    コンテナーに[スタイル](/ja/docs/Web/CSS/Reference/Properties/contain#style)抑制と[サイズ](/ja/docs/Web/CSS/Reference/Properties/contain#size)抑制を適用します。サイズ抑制は、インライン方向とブロック方向の両方で要素に適用されます。要素のサイズは、子要素を無視して単独で計算できます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 解説

コンテナークエリーを使用すると、コンテナーに対して実行される条件付きクエリーに基づいて、コンテナー内にスタイルを選択的に適用することができます。 {{cssxref("@container")}} アットルールは、コンテナーに対して実行されるテスト、およびクエリーの返値が `true` の場合にコンテナーのコンテンツに適用されるルールを指定するために使用されます。

特定の種類のコンテナークエリーは、特定の `container-type` プロパティの値が設定されている要素に対してのみ実行可能です。このプロパティは、それらのコンテナーに対して特定のコンテナーコンテキストを確立します。

- [サイズ](#コンテナーサイズクエリー): 最大または最小サイズ、アスペクト比、方向などの一般的なサイズまたはインラインサイズの条件に基づいて、コンテナーの子に CSS ルールを選択的に適用できるようにします。
- [スクロール状態](#コンテナースクロール状態クエリー): コンテナーが途中までスクロールされているスクロールコンテナーであるかどうか、コンテナーがスクロールスナップコンテナーにスナップされている[スナップターゲット](/ja/docs/Glossary/Scroll_snap#スナップターゲット)であるかどうかなどのスクロール状態の条件に基づいて、コンテナーの子に CSS ルールを選択的に適用できるようにします。
- [アンカー付き](#アンカー付きコンテナークエリー): コンテナーが[アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)されており、かつ [position-try の代替オプション](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)が適用されているかどうかに基づいて、そのコンテナーの子要素に対して CSS ルールを選択的に適用することができるようにします。

コンテナーに `container-type` が設定されていない場合、その要素はコンテナーサイズ、スクロール状態、またはアンカー付きクエリーのクエリーコンテナーとはなりませんが、[コンテナースタイルクエリー](/ja/docs/Web/CSS/Reference/At-rules/@container#コンテナースタイルクエリー)や[名前のみのコンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries#名前のみのコンテナークエリー)のコンテナークエリーとして使用することは可能です。

### コンテナーサイズクエリー

[コンテナーサイズクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナーサイズクエリー)を使用すると、最大または最小のサイズ、アスペクト比、向きなどのサイズ条件に基づいて、コンテナーの子孫に CSS ルールを選択的に適用することができます。

サイズコンテナーには、さらにサイズ抑制が適用されます。これにより、要素がそのコンテンツからサイズ情報を取得できなくなります。これは、無限ループを避けるためにコンテナークエリーにとって重要です。そうしないと、コンテナークエリー内の CSS ルールによってコンテンツのサイズが変更され、その結果、クエリーの評価が false になり、親要素のサイズが変更され、その結果、コンテンツのサイズが変更され、クエリーの評価が再び true になり、というように無限ループに陥ってしまいます。この連鎖は、無限ループとして繰り返されます。

コンテナーのサイズは、親要素の全幅に拡大するブロックレベル要素など、コンテキストによって設定するか、明示的に定義する必要があります。コンテキストによるサイズや明示的なサイズを利用できない場合、サイズが抑制されている要素は折りたたまれます。

> [!NOTE]
> コンテナの子要素のサイズ設定には、[コンテナークエリーの長さ単位](/ja/docs/Web/CSS/Guides/Containment/Container_queries#コンテナークエリーの長さ単位)を使用できます。

### コンテナースクロール状態クエリー

[コンテナースクロール状態クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)を使用すると、次のようなスクロール状態の条件に基づいて、コンテナーの子要素に CSS ルールを選択的に適用することができます。

- コンテナーのコンテンツが部分的にスクロールされているかどうか。
- コンテナーがスクロールスナップコンテナーにスナップされているスナップターゲットであるかどうか。
- コンテナーが [`position: sticky`](/ja/docs/Web/CSS/Reference/Properties/display) によって位置指定され、{{glossary("scroll container", "スクロールコンテナー")}}の境界に貼り付いているかどうか。

最初のケースでは、クエリーの対象となるコンテナーはスクロールコンテナーそのものです。他の 2 件の場合、クエリーの対象となるコンテナーは、親スクロールコンテナーのスクロール位置の影響を受ける要素です。

### アンカー付きコンテナークエリー

[アンカー付きコンテナークエリー](/ja/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) を使用すると、{{cssxref("position-try-fallbacks")}} プロパティで指定された position-try 代替が有効になっている場合、アンカー位置指定されたコンテナーの子要素に対して、CSS ルールを選択的に適用することができます。

例えば、アンカー位置指定されたツールチップ要素があり、{{cssxref("position-area")}} の値が `top` であるためデフォルトでアンカーの上部に配置されているものの、`position-try-fallbacks` の値として `flip-block` が指定されている場合を考えます。これにより、ツールチップがビューポートの上端からオーバーフローし始めた際に、ブロック方向に沿って反転し、アンカーの下部に配置されるようになります。これに `container-type: anchored` を設定すれば、`@container` アットルールを通じて position-try 代替が適用されたことを検出し、それに応じて CSS を適用することができます。

```css
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

## 例

### インラインサイズ抑制の確立

次の HTML の例には、画像、タイトル、テキストを持つカード部品があります。

```html
<div class="container">
  <div class="card">
    <h3>通常のカード</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

<div class="container wide">
  <div class="card">
    <h3>広幅のカード</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

インラインのサイズコンテナーコンテキストを作成するには、要素に `container-type` プロパティを追加し、その値を `inline-size` とします。

```css
.container {
  container-type: inline-size;
  width: 300px;
  height: 120px;
}

.wide {
  width: 500px;
}
```

```css hidden
h3 {
  height: 2rem;
  margin: 0.5rem;
}

.card {
  height: 100%;
}

.content {
  background-color: wheat;
  height: 100%;
}

.container {
  margin: 1rem;
  border: 2px dashed red;
  overflow: hidden;
}
```

コンテナークエリーを {{Cssxref("@container")}} アットルールで書くと、コンテナーの横幅が `400px` を超える場合に、コンテナーの要素にスタイルが適用されます。

```css
@container (width > 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

{{EmbedLiveSample('Establishing_inline_size_containment', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [コンテナーのスクロール状態クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [アンカー付きコンテナークエリーの使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("@container")}} アットルール
- CSS {{Cssxref("container")}} 一括指定プロパティ
- CSS {{Cssxref("container-name")}} プロパティ
- CSS {{cssxref("content-visibility")}} プロパティ
