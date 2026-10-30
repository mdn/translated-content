---
title: "`container-name` プロパティ (CSS)"
short-title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

**container-name** は [CSS](/ja/docs/Web/CSS) のプロパティで、 [@container](/ja/docs/Web/CSS/Reference/At-rules/@container) アットルールによる[コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)で使用されるクエリーコンテナー名のリストを指定します。

## 構文

```css
container-name: none;

/* 単一の名前 */
container-name: my-layout;

/* 複数の名前 */
container-name: my-page-layout my-component-library;

/* グローバル値 */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### 値

このプロパティは、`<custom-ident>` の値の空白区切りリスト、またはキーワード `none` として指定します。

- `none`
  - : デフォルト値。クエリコンテナーには名前がありません。

- {{cssxref("custom-ident")}}
  - : コンテナーを識別するために使用する、大文字と小文字を区別する文字列です。
    以下の条件が適用されます。
    - 名前は有効な {{cssxref("custom-ident")}} であれば何でもかまいませんが、`default` と等しくあってはいけません。
    - 名前の値は引用符で囲んではいけません。
    - 制作者が定義する識別子（例: `--container-name`）を意図するダッシュ記号は許可されています。
    - 空白で区切られた複数の名前のリストが許可されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 解説

名前が指定されていない場合は、コンテナークエリーは、直近の[コンテナーコンテキスト](/ja/docs/Web/CSS/Guides/Containment/Container_queries#コンテナーコンテキストの命名)のある祖先の[サイズ](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナーサイズクエリー)や[スクロール状態](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)などの属性に基づいて、要素にスタイルを適用します。

> [!NOTE]
> コンテナーの子要素のサイズ設定には、[コンテナークエリーの長さ単位](/ja/docs/Web/CSS/Guides/Containment/Container_queries#コンテナークエリーの長さ単位)を使用できます。

コンテナーコンテキストに名前が指定されている場合、{{Cssxref("@container")}} アットルールにその名前を設定することで、そのコンテナーコンテキストを具体的に指定することができます。

要素に `container-name` を割り当てることでクエリーコンテナーを生成し、関連付けられた `@container` アットルールではクエリー式を指定せずに、その名前の存在のみを照会することができます。これら、いわゆる[**名前のみのコンテナークエリー**](/ja/docs/Web/CSS/Guides/Containment/Container_queries#名前のみのコンテナークエリー)を使用すると、特定の `container-name` が設定された祖先要素を持つかどうかのみに基づいて、要素にスタイルを選択的に適用することができます。

## 例

### コンテナー名の使用

タイトルとテキストを持つカード部品である、次の HTML の例があったとします。

```html
<div class="card">
  <div class="post-meta">
    <h2>カードのタイトル</h2>
    <p>投稿の詳細</p>
  </div>
  <div class="post-excerpt">
    <p>
      ネコに関する<a href="https://example.com">ブログ投稿</a>のプレビュー。
    </p>
  </div>
</div>
```

格納コンテキストを作成するには、 CSS で要素に `container-type` プロパティを追加します。
次の例では、カードのメタ情報用と投稿の抜粋用の 2 つのコンテナーを作成しています。

> [!NOTE]
> これらの宣言のための一括指定構文は {{cssxref("container")}} ページで説明されています。

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

コンテナークエリーを {{Cssxref("@container")}} アットルールで記述すると、クエリーが真と評価されたときにコンテナーの要素にスタイルが適用されます。
次の例では、 `.post-excerpt` 要素のコンテンツのみに適用するコンテナークエリーと、 `.post-meta` と `.post-excerpt` のコンテンツ両方に適用するコンテナークエリーの 2 つがあります。

```css
@container excerpt (width >= 400px) {
  p {
    visibility: hidden;
  }
}

@container (width >= 400px) {
  p {
    font-size: 2rem;
  }
}
```

コンテナークエリーの書き方については、[CSS コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)のページを参照してください。

### 複数のコンテナー名の使用

コンテナーコンテキストには、空白で区切った複数の名前を指定することもできます。

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

これにより、 {{cssxref("@container")}} アットルールでどちらかの名前を使用してコンテナーをターゲットすることができます。
これは、複数のコンテナークエリーで同じコンテナーを対象としたい場合に有益です。

```css
@container meta (width <= 500px) {
  p {
    visibility: hidden;
  }
}

@container card (width <= 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```

### 名前のみのコンテナークエリーの使用

この例では、[名前のみのコンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries#名前のみのコンテナークエリー)の使用方法を示しています。

#### HTML

{{htmlelement("div")}} 要素の `id` を `container` 西、3 つの {{htmlelement("p")}} 要素を、2 つはコンテナー内に、1 つはコンテナーの外に配置します。

```html live-sample_name-only
<div id="container">
  <p>これはコンテナー内です。</p>
  <p>これもコンテナー内です。</p>
</div>
<p>これはコンテナー内ではありません。</p>
```

#### CSS

コンテナーに名前を割り当てます。

```css live-sample_name-only
#container {
  container-name: my-container;
}
```

こうすることで、次のスニペットに示すように、その名前が設定されたコンテナーの中に存在する要素にのみ、スタイルを選択的に適用することができます。

```css live-sample_name-only
@container my-container {
  p {
    background-color: lime;
    font-size: 1.3rem;
    width: 50vw;
    padding: 0.5rem;
    font-family: sans-serif;
  }
}
```

#### 結果

{{embedlivesample("name-only", "100%", 300)}}

指定されたスタイルは、1 つ目と 2 つ目の {{htmlelement("p")}} 要素にのみ適用し、3 つ目には適用しません。

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
- CSS {{Cssxref("container-type")}} プロパティ
- CSS {{cssxref("content-visibility")}} プロパティ
