---
title: container-type
slug: Web/CSS/Reference/Properties/container-type
original_slug: Web/CSS/container-type
l10n:
  sourceCommit: a69f9903e7444d42adcf2432eaa511c05761c757
---

要素はクエリーコンテナーを確立するのに、 **`container-type`** という [CSS](/ja/docs/Web/CSS) プロパティを使用することができます。 `container-type` は、コンテナークエリーで使用されるコンテナーコンテキストの種類を定義するために使用されます。利用できるコンテナーコンテキストは次のとおりです。

- [サイズ](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries): 最大または最小サイズ、アスペクト比、方向などの一般的なサイズまたはインラインサイズの条件に基づいて、コンテナーの子に CSS ルールを選択的に適用できるようにします。
- [スクロール状態](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries): コンテナーが途中までスクロールされているスクロールコンテナーであるかどうか、コンテナーがスクロールスナップコンテナーにスナップされている[スナップターゲット](/ja/docs/Glossary/Scroll_snap#スナップターゲット)であるかどうかなどのスクロール状態の条件に基づいて、コンテナーの子に CSS ルールを選択的に適用できるようにします。

> [!NOTE]
> `container-type` および {{cssxref("container-name")}} プロパティを使用すると、自動的に `style` 値と `layout` 値が {{cssxref("contain")}} プロパティに適用されます。

## 構文

```css
/* キーワード値 */
container-type: normal;
container-type: size;
container-type: inline-size;
container-type: scroll-state;

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

`container-type` プロパティは、以下のリスト内の 1 つの値、または 2 つの値（そのうちの 1 つは `scroll-state` で、もう 1 つは `inline-size` または `size`）を指定できます。言い換えれば、要素は、サイズクエリーコンテナー、スクロール状態クエリーコンテナー、その両方、またはどちらでもないものとして設定できます。

- `inline-size`
  - : コンテナーの[インライン軸](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#ブロック軸とインライン軸)上のサイズクエリー用のクエリーコンテナーを確立します。
    要素にレイアウト、スタイル、インラインサイズ抑制を適用します。

    インラインサイズ抑制が要素に適用されます。要素のインラインサイズは、子要素を無視して[単独で計算](/ja/docs/Web/CSS/Guides/Containment/Using#サイズ抑制)することができます （[CSS コンテナーの使用](/ja/docs/Web/CSS/Guides/Containment/Using)を参照してください）。

- `normal`
  - : この要素はコンテナーサイズクエリーのクエリーコンテナーではありませんが、[コンテナースタイルクエリー](/ja/docs/Web/CSS/Reference/At-rules/@container#コンテナースタイルクエリー)のクエリーコンテナーであることに変わりはありません。

- `scroll-state`
  - : コンテナーのスクロール状態クエリー用のクエリコンテナーを設定します。この場合、要素のサイズは単独で計算されず、抑制は適用されません。

- `size`
  - : [インラインおよびブロック](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#ブロック軸とインライン軸)の両方の寸法で コンテナーサイズクエリーのためのクエリー コンテナーを確立します。
    コンテナーにレイアウト抑制、スタイル抑制、サイズ抑制を適用します。

    サイズ抑制は、インライン方向とブロック方向の両方で要素に適用されます。要素のサイズは、子要素を無視して単独で計算できます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 解説

コンテナークエリーを使用すると、コンテナーに対して実行される条件付きクエリーに基づいて、コンテナー内にスタイルを選択的に適用することができます。 {{cssxref("@container")}} アットルールは、コンテナーに対して実行されるテスト、およびクエリーの返値が `true` の場合にコンテナーのコンテンツに適用されるルールを指定するために使用されます。

コンテナークエリーは、要素をサイズまたはスクロール状態のコンテナー、あるいはその両方として定義する `container-type` プロパティを持つ要素に対してのみ実行されます。

### コンテナーサイズクエリー

[コンテナーサイズクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナーサイズクエリー)を使用すると、最大または最小のサイズ、アスペクト比、向きなどのサイズ条件に基づいて、コンテナーの子孫に CSS ルールを選択的に適用することができます。

サイズコンテナーには、さらにサイズ抑制が適用されます。これにより、要素がそのコンテンツからサイズ情報を取得できなくなります。これは、無限ループを避けるためにコンテナークエリーにとって重要です。そうしないと、コンテナークエリー内の CSS ルールによってコンテンツのサイズが変更され、その結果、クエリーの評価が false になり、親要素のサイズが変更され、その結果、コンテンツのサイズが変更され、クエリーの評価が再び true になり、というように無限ループに陥ってしまいます。この連鎖は、無限ループとして繰り返されます。

コンテナーのサイズは、親要素の全幅に拡大するブロックレベル要素など、コンテキストによって設定するか、明示的に定義する必要があります。コンテキストによるサイズや明示的なサイズを利用できない場合、サイズが抑制されている要素は折りたたまれます。

### コンテナースクロール状態クエリー

[コンテナースクロール状態クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)を使用すると、次のようなスクロール状態の条件に基づいて、コンテナーの子要素に CSS ルールを選択的に適用することができます。

- コンテナーのコンテンツが部分的にスクロールされているかどうか。
- コンテナーがスクロールスナップコンテナーにスナップされているスナップターゲットであるかどうか。
- コンテナーが [`position: sticky`](/ja/docs/Web/CSS/Reference/Properties/display) によって位置指定され、{{glossary("scroll container", "スクロールコンテナー")}}の境界に貼り付いているかどうか。

最初のケースでは、クエリーの対象となるコンテナーはスクロールコンテナーそのものです。他の 2 件の場合、クエリーの対象となるコンテナーは、親スクロールコンテナーのスクロール位置の影響を受ける要素です。

## 例

### インラインサイズ抑制の確立

次の HTML の例には、画像、タイトル、テキストを持つカード部品があります。

```html
<div class="container">
  <div class="card">
    <h3>Normal card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

<div class="container wide">
  <div class="card">
    <h3>Wider card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

コンテナーコンテキストを作成するには、要素に `container-type` プロパティを追加します。以下は、 `inline-size` 値を使用してコンテナーの[インライン軸](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#ブロック軸とインライン軸)のコンテナーコンテキストを作成しています。

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

コンテナークエリーを {{Cssxref("@container")}} アットルールで書くと、コンテナーの横幅が 400px を超える場合に、コンテナーの要素にスタイルが適用されます。

```css
@container (min-width: 400px) {
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
- {{Cssxref("@container")}} アットルール
- CSS {{Cssxref("container")}} 一括指定プロパティ
- CSS {{Cssxref("container-name")}} プロパティ
- CSS {{cssxref("content-visibility")}} プロパティ
