---
title: CSS コンテナークエリー
slug: Web/CSS/CSS_containment/Container_queries
---

{{CSSRef}}

コンテナークエリーによって、要素のコンテナーのサイズに基づいて要素にスタイル設定を適用することができます。例えば、コンテナーが周囲の文脈で利用できる空間が少ない場合、特定の要素を非表示にしたり、小さなフォントを使用したりすることができます。
コンテナークエリーは、[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)の代替となるもので、ビューポートサイズや他の端末の特性に基づいて要素にスタイルを適用します。

![ブラウザーの全幅であるビューポートの幅に基づくメディアクエリーと、コンテナー要素の幅であるコンテナーコンテキストの幅に基づくコンテナークエリー。](container-query.svg)

## コンテナークエリーの使用

コンテナークエリーを使用するには、要素で**コンテナーコンテキスト**を宣言し、後でこのコンテナーの寸法をクエリーしたいとブラウザーが認識できるようにする必要があります。
これを行うには、 {{Cssxref("container-type")}} プロパティに `size`、`inline-size`、`normal` の値を指定して使用します。

これらの値は以下のような効果があります。

- `size`
  - : クエリーは、コンテナーの[インラインおよびブロック](/ja/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#ブロック軸とインライン軸)軸の寸法に基づきます。
    コンテナーにレイアウト、スタイル設定、サイズ格納を適用します。
- `inline-size`
  - : クエリーは、コンテナーの[インライン](/ja/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#ブロック軸とインライン軸)軸の寸法に基づきます。
    その要素にレイアウト、スタイル設定、インラインサイズ格納を適用します。
- `normal`
  - : 要素はコンテナーサイズクエリーのクエリーコンテナーではありませんが、コンテナースタイルクエリーのクエリーコンテナーであることに変わりはありません。

次の例では、タイトルとテキストを持つブログ記事用のカード部品を考えてみましょう。

```html
<div class="post">
  <div class="card">
    <h2>カードのタイトル</h2>
    <p>カードのコンテンツ</p>
  </div>
</div>
```

コンテナーコンテキストは `container-type` プロパティを使用して作成することができます。

```css
.post {
  container-type: inline-size;
}
```

次に、 {{cssxref("@container")}} アットルールを使用してコンテナークエリーを定義します。
次の例のクエリーは、コンテナーコンテキストを持つ最も近い祖先のサイズに基づいて要素にスタイルを適用します。
具体的には、このクエリーは、コンテナーの幅が `700px` よりも広い場合、カードのタイトルに大きなフォントサイズを適用します。

```css
/* カードタイトルの既定のスタイルを設定 */
.card h2 {
  font-size: 1em;
}

/* コンテナーが 700px より広い場合 */
@container (min-width: 700px) {
  .card h2 {
    font-size: 2em;
  }
}
```

コンテナークエリーを使用することで、毎回カードが配置される場所を詳細に知ることなく、ページの複数の領域でカードを再利用することができます。
カードがあるコンテナーが `700px` より狭い場合、カードタイトルのフォントは小さくなり、カードが `700px` より広いコンテナーにある場合、カードタイトルのフォントは大きくなります。

コンテナークエリーの構文の詳細については、 {{cssxref("@container")}} のページを参照してください。

### コンテナーコンテキストの命名

前の節では、コンテナークエリーは、コンテナーコンテキストを持つ最も近い祖先に基づいてスタイル設定を適用しました。
{{Cssxref("container-name")}} プロパティを使用して、コンテナーコンテキストに名前を付けることが可能です。一度名前をつけると、その名前を `@container` クエリーで使用することができ、特定のコンテナーを対象とすることができます。
次の例では、 `sidebar` という名前のコンテナーコンテキストを作成しています：

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

そして、 `@container` アットルールを用いて、このコンテナーコンテキストを対象とすることができます。

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

コンテナーコンテキストの命名に関する詳細情報は、 {{cssxref("container-name")}} ページにあります。

### コンテナーの一括指定構文

コンテナーを宣言するための一括指定は `container` プロパティを使用します。

```css
.post {
  container: sidebar / inline-size;
}
```

このプロパティの詳細情報については、 {{Cssxref("container")}} のリファレンスを参照してください。

### コンテナークエリーの長さ単位

コンテナークエリーを使用してコンテナーにスタイルを設定する場合、コンテナークエリーの長さ単位を使用することができます。
この単位は、クエリーするコンテナーの寸法に相対する長さを指定します。
コンテナーに対する相対的な長さの単位を使用する成分は、具体的な長さの値を再計算する必要がなく、様々なコンテナーでより柔軟に使用することができます。

コンテナークエリーの長さの単位は以下の通りです。

- `cqw`: クエリーコンテナーの幅の 1%
- `cqh`: クエリーコンテナーの高さの 1%
- `cqi`: クエリーコンテナーのインラインサイズの 1%
- `cqb`: クエリーコンテナーのブロックサイズの 1%
- `cqmin`: `cqi` または `cqb` の小さい方
- `cqmax`: `cqi` または `cqb` の大きい方

次の例では、 `cqi` 単位を用いて、コンテナーのインラインサイズに基づいて見出しのフォントサイズを設定しています。

```css
@container (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

これらの単位の詳細については、[コンテナークエリーの長さの単位](/ja/docs/Web/CSS/length#コンテナークエリーの長さの単位)を参照してください。

## コンテナークエリーの代替

コンテナークエリーにまだ対応していないブラウザーでは、 {{cssxref("grid")}} と {{cssxref("flex")}} を使用することで、このページで用いたカードコンポーネントに同様の効果を作成することができます。
次の例では、 {{cssxref("grid-template-columns")}} 宣言を使用して、カード部品の 2 列のレイアウトを作成しています。

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

ビューポートが小さい端末用に一列のレイアウトを使用したい場合は、メディアクエリーを使用してグリッドテンプレートを変更することができます。

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} アットルール
- CSS {{Cssxref("contain")}} プロパティ
- CSS {{Cssxref("container")}} 一括指定プロパティ
- CSS {{Cssxref("container-name")}} プロパティ
- CSS {{cssxref("content-visibility")}} プロパティ
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) (Ahmad Shadeed)
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Collection of Container Queries articles](https://github.com/sturobson/Awesome-Container-Queries)
