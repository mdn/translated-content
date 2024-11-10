---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

**`@container`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、[コンテナーコンテキスト](/ja/docs/Web/CSS/CSS_containment/Container_queries#コンテナーコンテキストの命名)にスタイルを適用する条件付きグループルールです。
スタイル宣言は条件によってフィルタリングされ、条件が真の場合にコンテナーに適用されます。
この条件は、コンテナーのサイズまたは [`<style-feature>`](#container_style_queries) の値が変更されたときに評価されます。

{{cssxref("container-name")}} プロパティは、クエリーコンテナーの名前の一覧を指定します。これらの名前は、対象となるクエリーコンテナーをフィルターするために、`@container` ルールで使用することができます。オプションで、大文字と小文字を区別する `<container-name>` は、クエリーによって対象となるクエリーコンテナーをフィルタリングします。

要素に対して適格なクエリーコンテナーが選択されると、`<container-condition>` の各コンテナー機能はそのクエリーコンテナーに対して評価されます。

## 構文

`@container` アットルールは以下の構文です。

```plain
@container <container-condition> {
  <stylesheet>
}
```

例えば次のようなります。

```css
@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}
/* オプションの <container-name> 付き */
@container tall (height > 30rem) {
  h2 {
    line-height: 1.6;
  }
}
```

### 値

- `<container-condition>`

  - : オプションの `<container-name>` および `<container-query>`。条件が真の場合、この `<stylesheet>` で定義されたスタイルが適用されます。

    - `<container-name>`
      - : オプション。クエリーが真と評価された際にスタイルが適用されるコンテナーの名前を、{{cssxref("ident")}} として指定します。
    - `<container-query>`
      - : コンテナーのサイズが変更された際に、クエリーコンテナーに対して評価される一連の特性を指定します。

- `<stylesheet>`
  - : 一連の CSS 宣言です。

### コンテナークエリー内の論理キーワード

論理キーワードを使用してコンテナー条件を定義することができます。

- `and` は 2 つ以上の条件を結合します。
- `or` は 2 つ以上の条件を結合します。
- `not` は条件を否定します。コンテナークエリーあたり 1 つの 'not' 条件だけが許されており、 `and` または `or` キーワードと同時に使用することはできません。

```css
@container (width > 400px) and (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) or (height > 400px) {
  /* <stylesheet> */
}

@container not (width < 400px) {
  /* <stylesheet> */
}
```

### 名前付きコンテナーコンテキスト

コンテナーコンテキストには、 {{cssxref("container-name")}} プロパティを使用して名前を付けることができます。

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

このために使用する一括指定構文は {{cssxref("container")}} であり、 `container: <name> / <type>` という形式です。例えばこのようにします。

```css
.post {
  container: sidebar / inline-size;
}
```

コンテナークエリーでは、 {{cssxref("container-name")}} プロパティを使用して、クエリーコンテナー名と一致するコンテナー集合にフィルタリングします。

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

使用法や名前の制約の詳細は {{cssxref("container-name")}} ページで説明しています。

### 記述子

以下の記述子は、コンテナー条件内で使用することができます。

- `aspect-ratio`

  - : コンテナーの {{cssxref("aspect-ratio")}} は、 {{cssxref("ratio")}} 値として発生したコンテナーの高さに対する幅として計算されます。

- `block-size`

  - : コンテナーの {{cssxref("block-size")}} を {{cssxref("length")}} 値で表したものです。

- `height`

  - : コンテナーの高さを {{cssxref("length")}} 値で表現したものです。

- `inline-size`

  - : コンテナーの {{cssxref("inline-size")}} を {{cssxref("length")}} 値で表したものです。

- `orientation`

  - : コンテナーの[方向](/ja/docs/Web/CSS/@media/orientation)で、`landscape` または `portrait` のいずれかです。

- `width`
  - : コンテナーの幅を {{cssxref("length")}} 値で表したものです。

## 例

### コンテナーの大きさに基づいたスタイルの設定

タイトルとテキストを持つカード部品の次の例を考えてみましょう。

```html
<div class="post">
  <div class="card">
    <h2>カードのタイトル</h2>
    <p>カードのコンテンツ</p>
  </div>
</div>
```

コンテナーコンテキストは `container-type` プロパティを使用して作成することができます。この用途では `.post` クラスの `inline-size` 値を使用します。
そして、 `@container` アットルールを使用することで、 `.card` クラスの要素に、 `650px` より狭いコンテナー内でスタイルを適用することができます。

```js hidden
const post = document.querySelector(".post");
const span = document.createElement("span");
span.textContent = ".post width: " + post.clientWidth + "px";
post.parentNode.insertBefore(span, post.nextSibling);
// リサイズ時に更新
window.addEventListener("resize", () => {
  span.textContent = ".post width: " + post.clientWidth + "px";
});
```

```css hidden
span {
  display: block;
  text-align: center;
}
.card {
  margin: 10px;
  border: 2px dotted;
  font-size: 1.5em;
}
.post {
  border: 2px solid;
}
```

```css
/* インラインサイズに基づくコンテナーコンテキスト */
.post {
  container-type: inline-size;
}

/* コンテナーが 650px よりも狭かった場合にスタイルを適用 */
@container (width < 650px) {
  .card {
    width: 50%;
    background-color: gray;
    font-size: 1em;
  }
}
```

{{EmbedLiveSample("Setting_styles_based_on_a_container's_size", "100%", 230)}}

### 名前付きコンテナーコンテキストの作成

タイトルとテキストを持つカード部品である次の HTML 例があったとします。

```html
<div class="post">
  <div class="card">
    <h2>カードのタイトル</h2>
    <p>カードのコンテンツ</p>
  </div>
</div>
```

まず、 `container-type` および `container-name` プロパティを用いてコンテナーコンテキストを作成します。
この宣言の一括指定構文は {{cssxref("container")}} ページで説明しています。

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

次に、コンテナークエリーに名前を追加して、そのコンテナーを対象とします。

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### 入れ子のコンテナークエリー

単一のコンテナークエリーで複数のコンテナーを対象とすることはできません。
同じ効果を持つコンテナークエリーを入れ子にすることは可能です。

以下は、 `summary` という名前のコンテナーが `400px` よりも幅が広く、かつ祖先に `800px` よりも幅の広いコンテナーがある場合に、宣言されたスタイルを適用するクエリーです。

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### コンテナースタイルクエリー

{{CSSRef}}{{SeeCompatTable}}

コンテナークエリーは、対象のコンテナー要素のスタイルを計算して評価することもできます。コンテナースタイルクエリーは、1 つ以上の `style()` 関数記法を使用する `@container` クエリーです。 論理値の構文と、スタイル機能をスタイルクエリーに結合するロジックは、[CSS 機能クエリー](/ja/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) と同じです。

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

それぞれの `style()` の引数は、単一の `<style-feature>` です。 **`<style-feature>`** は、有効な CSS [宣言](/ja/docs/Web/CSS/Syntax#css_declarations)、CSS プロパティ、[`<custom-property-name>`](/ja/docs/Web/CSS/var#values) のいずれかです。

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

値のないスタイル特性は、指定されたプロパティの初期値と計算された値が異なる場合、真と評価されます。

`style()` 関数の引数として渡した `<style-feature>` が宣言である場合、スタイルクエリーは、宣言の値がクエリー対象のコンテナのそのプロパティの計算値と同じであれば真と評価されます。 そうでない場合は、偽と評価されます。

以下のコンテナークエリーは、コンテナー要素の `--accent-color` の{{cssxref("computed_value", "計算値")}}が `blue` かどうかを調べます。

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> カスタムプロパティが `blue` という値を持つ場合、そのプロパティが {{cssxref("@property")}} で色として定義されていない限り、同等の 16 進コード `#0000ff` は一致しません。

個別指定プロパティを照会するスタイルの特性クエリは、計算された値が各プロパティで一致する場合は真となり、一致しない場合は偽となります。例えば、`@container style(border: 2px solid red)` は、その短縮形を構成する 12 個の個別指定プロパティ（`border-bottom-style` など）がすべて真であれば真になります。

グローバルな `revert` と `revert-layer` は `<style-feature>` の値としては不正なため、コンテナースタイルクエリーは偽になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテナークエリーの使用](/ja/docs/Web/CSS/CSS_containment/Container_queries)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS 拘束モジュール](/ja/docs/Web/CSS/CSS_containment)
