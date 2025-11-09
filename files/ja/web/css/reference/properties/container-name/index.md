---
title: container-name
slug: Web/CSS/Reference/Properties/container-name
original_slug: Web/CSS/container-name
l10n:
  sourceCommit: a69f9903e7444d42adcf2432eaa511c05761c757
---

**container-name** は [CSS](/ja/docs/Web/CSS) のプロパティで、 [@container](/ja/docs/Web/CSS/Reference/At-rules/@container) アットルールによる[コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)で使用されるクエリーコンテナー名のリストを指定します。
コンテナークエリーは、コンテナーコンテキストを持つ最も近い祖先の[サイズ](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries)または[スクロール状態](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)に基づいて、要素にスタイルを適用します。
コンテナーコンテキストの名前が指定されたとき、コンテナーコンテキストのある最も近い祖先の代わりに、 {{Cssxref("@container")}} アットルールを用いて固有のターゲットを指定することができます。

> [!NOTE]
> {{cssxref("container-type")}} プロパティと `container-name` プロパティを使用すると、自動的に `style` 値と `layout` 値が {{cssxref("contain")}} プロパティに適用されます。

## 構文

```css
container-name: none;

/* 単一の名前 */
container-name: myLayout;

/* 複数の名前 */
container-name: myPageLayout myComponentLibrary;

/* グローバル値 */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### 値

- `none`
  - : 既定値。クエリコンテナーには名前がありません。

- {{cssxref("custom-ident")}}
  - : コンテナーを識別するために使用する、大文字と小文字を区別する文字列です。
    以下の条件が適用されます。
    - 名前は有効な {{cssxref("custom-ident")}} であれば何でもかまいませんが、`default` と等しくあってはいけません。
    - 名前の値は引用符で囲んではいけません。
    - 制作者が定義する識別子（例: `--container-name`）を意図するダッシュ記号は許可されています。
    - スペースで区切られた複数の名前のリストが許可されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### コンテナー名の使用

タイトルとテキストを持つカード部品である、次の HTML の例があったとします。

```html
<div class="card">
  <div class="post-meta">
    <h2>カードのタイトル</h2>
    <p>My post details.</p>
  </div>
  <div class="post-excerpt">
    <p>
      A preview of my <a href="https://example.com">blog post</a> about cats.
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
@container excerpt (min-width: 400px) {
  p {
    visibility: hidden;
  }
}

@container (min-width: 400px) {
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
@container meta (max-width: 500px) {
  p {
    visibility: hidden;
  }
}

@container card (max-height: 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```

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
