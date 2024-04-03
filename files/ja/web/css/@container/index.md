---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 3d4edafe934c84878d2a46d8c22911ba351b7261
---

{{CSSRef}}{{SeeCompatTable}}

**`@container`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、[格納コンテキスト](/ja/docs/Web/CSS/CSS_container_queries#格納コンテキストの命名) にスタイルを適用する条件付きグループルールです。
スタイル宣言は条件によってフィルタリングされ、条件が真の場合にコンテナーに適用されます。
この条件は、コンテナーのサイズが変わったときに評価されます。

オプションで大文字小文字を区別する {{cssxref("container-name")}} を指定することができ、これによって考慮するクエリーコンテナーの集合を、クエリーコンテナー名が一致するものだけにフィルタリングすることができます。
要素に対して適格なクエリーコンテナが選択されると、`<container-condition>` の各コンテナー機能はそのクエリーコンテナーに対して評価されます。

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
```

### 値

- `<container-condition>`
  - : コンテナーのサイズが変更されたときに、コンテナーに対して評価される特性の集合です。
    `<stylesheet>` で定義したスタイルは、この条件が真であれば適用されます。
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

### 名前付き格納コンテキスト

格納コンテキストには、 {{cssxref("container-name")}} プロパティを使用して名前を付けることができます。

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

コンテナクエリーでは、 {{cssxref("container-name")}} プロパティを使用して、クエリーコンテナー名と一致するコンテナー集合にフィルタリングします。

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
span.innerHTML = ".post width: " + post.clientWidth + "px";
post.parentNode.insertBefore(span, post.nextSibling);
// リサイズ時に更新
window.addEventListener("resize", () => {
  span.innerHTML = ".post width: " + post.clientWidth + "px";
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

単一のコンテナクエリーで複数のコンテナーを対象とすることはできません。
同じ効果を持つコンテナークエリーを入れ子にすることは可能です。

以下は、 `summary` という名前のコンテナーが `400px` よりも幅が広く、かつ祖先に `800px` よりも幅の広いコンテナーがある場合に、宣言されたスタイルを適用するクエリーです。

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### スタイルのコンテナークエリー

コンテナクエリーでは、コンテナー要素の計算されたスタイルを評価することもできます。
以下のコンテナークエリーは、コンテナー要素の `--accent-color` の {{cssxref("computed_value", "計算値")}} が `blue` かどうかを調べます。

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> **メモ:** カスタムプロパティが `blue` という値を持つ場合、そのプロパティが {{cssxref("@property")}} で色として定義されていない限り、同等の 16 進コード `#0000ff` は一致しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテナークエリー](/ja/docs/Web/CSS/CSS_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
