---
title: "@scope"
slug: Web/CSS/Reference/At-rules/@scope
original_slug: Web/CSS/@scope
l10n:
  sourceCommit: 0fe8f4d7e9cd5b1b6a39e9fa047468206d3c3ca2
---

**`@scope`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を使用すると、特定の DOM サブツリー内の要素を選択できるようになり、セレクターを DOM 構造に密接に結合させることなく、また上書きしにくい特定のセレクターを書くことなく、要素を正確に対象とすることができます。

JavaScript で `@scope` は CSS オブジェクトモデルインターフェイスの {{DOMxRef("CSSScopeRule")}} からアクセスすることができます。

## 構文

`@scope` アットルールは、 1 つ以上のルールセット（**スコープ付きスタイルルール**と呼ばれます）を収め、選択した要素に適用するスコープを定義します。 `@scope` は 2 つの方法で使用することができます。

1. CSS の中における独立したブロックとして。この場合、**スコープルート**とオプションの**スコープリミット**セレクターを含む前置き部を記述します。これらはスコープの上限と下限を定義します。

   ```css
   @scope (scope root) to (scope limit) {
     ルールセット
   }
   ```

2. HTML で {{htmlelement("style")}} 要素の中に記載するインラインスタイルとして。この場合、前置き部は除外され、囲まれたルールセットは自動的に `<style>` 要素の親要素のスコープになります。

   ```html
   <parent-element>
     <style>
       @scope {
         ルールセット
       }
     </style>
   </parent-element>
   ```

## 解説

複雑なウェブ文書には、ヘッダー、フッター、ニュース記事、地図、メディアプレーヤー、広告などの部品が含まれることがあります。複雑さが増すにつれて、これらの部品のスタイル設定を効果的に管理することが重要になり、スタイルを効果的にスコープ化することで、この複雑さを管理することができます。以下の DOM ツリーを考えてみましょう。

```plain-nolint
body
└─ article.feature
   ├─ section.article-hero
   │  ├─ h2
   │  └─ img
   │
   ├─ section.article-body
   │  ├─ h3
   │  ├─ p
   │  ├─ img
   │  ├─ p
   │  └─ figure
   │     ├─ img
   │     └─ figcaption
   │
   └─ footer
      ├─ p
      └─ img
```

クラスが `article-body` である {{htmlelement("section")}} 内の {{htmlelement("img")}} 要素を選択したい場合は、以下のようにします。

- `.feature > .article-body > img` のようなセレクターを書く方法。しかし、これは高い詳細度を持つため上書きしにくく、また DOM 構造と緊密に結合しています。将来、マークアップの構造が変わったら、CSS を書き直す必要があるかもしれません。
- `.article-body img` のように、詳細度を下げて書く方法。しかし、これでは `section` 内の画像をすべて選択してしまいます。

そこで有益なのが `@scope` です。これを使うことで、セレクターが対象とする要素を正確に定義することができます。例えば、次の例のように単独の `@scope` ブロックを使用して上記の問題を解決することができます。

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

スコープルートセレクターである `.article-body` は、ルールセットが適用される DOM ツリーのスコープの上限を定義し、スコープリミットセレクターである `figure` は下限を定義します。その結果、クラスが `article-body` である `<section>` の中にある {{htmlelement("img")}} 要素のみが選択され、{{htmlelement("figure")}} 要素の中は選択されません。

> [!NOTE]
> このような上限と下限のあるスコープは、一般に**ドーナツスコープ**と呼ばれています。

`article-body` クラスを持つ `<section>` 内の画像をすべて選択したい場合は、スコープリミットセレクターを省略できます。

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

あるいは、 `@scope` ブロックを `article-body` クラスの付いた `<section>` の中、インラインの `<style>` 要素の中に記載しすることができます。

```html
<section class="article-body">
  <style>
    @scope {
      img {
        border: 5px solid black;
        background-color: goldenrod;
      }
    }
  </style>

  <!-- ... -->
</section>
```

> [!NOTE]
> 重要なことは、 `@scope` はセレクターのアプリケーションを固有の DOM サブツリーに分離することはできますが、適用されるスタイルをサブツリー内に完全に分離することはできないということです。（例えば {{cssxref("color")}} や {{cssxref("font-family")}} のように）子から継承されるプロパティは、設定するスコープのを超えて継承されます。

### `:scope` 擬似クラス

`@scope` ブロックのコンテキストにおいて、 {{cssxref(":scope")}} 擬似クラスはスコープルートを表します。スコープの内部からスコープルート自体にスタイルを適用する簡単な方法を提供します。

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

実際、`:scope` はすべてのスコープ付きスタイルルールに暗黙的に付加されます。必要であれば、明示的に `:scope` を前置したり、[入れ子](/ja/docs/Web/CSS/Guides/Nesting)セレクター (`&`) を前置したりして、同じ効果を得ることができます。

以下のブロックにある 3 つのルールは、選択するものがすべて同じです。

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### スコープ付きセレクターの使用に関するメモ

- スコープリミットは `:scope` を使用して、スコープリミットとルートとの間の固有の関係要件を指定することができます。例えば、以下のようになります。

  ```css
  /* :scope の直接の子である場合にのみ、スコープリミットになります。 */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- スコープリミットは `:scope` を使用してスコープルート外の要素を参照することができます。例えば、次のようにします。

  ```css
  /* figure は :scope が .feature の中にある場合に限りリミットとなる */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- スコープ付きスタイルルールはサブツリーを除外できません。 `:scope + p` のような選択はサブツリーの外になるので無効です。

- スコープのルートとリミットはセレクターリストとして定義することも可能で、その場合は複数のスコープが定義されます。次の例では、クラスが `article-hero` または `article-body` である `<section>` 内の `<img>` にはスタイル設定が適用されますが、 `<figure>` の中に含まれているものには適用されません。

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### `@scope` の詳細度

ルールセットを `@scope` ブロックの中に記述しても、スコープのルートとリミットの中で使用されているセレクターに関係なく、そのセレクターの詳細度には影響しません。例えば、次のようになります。

```css
@scope (.article-body) {
  /* img は期待通り、 0-0-1 の詳細度になります。 */
  img { ... }
}
```

しかし、もし `:scope` 擬似クラスを明示的にスコープのついたセレクターに付加するのであれば、その詳細度を計算する際に考慮する必要があります。 `:scope` は通常の擬似クラスと同様、 0-1-0 の詳細度になります。例えば、以下のようになります。

```css
@scope (.article-body) {
  /* :scope img は 0-1-0 + 0-0-1 = 0-1-1 の詳細度になります。 */
  :scope img { ... }
}
```

スコープブロック内で `&` セレクターを使用した場合、 `&` はスコープのルートセレクターを表します。これは、内部的には {{cssxref(":is", ":is()")}} 擬似クラス関数の中に包まれたセレクターとして計算されます。例えば、次のようになります。

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` は `:is(figure, #primary) img` と等価です。 `:is()` は最も詳細な引数（この場合は `#primary`）の詳細度を取るので、スコープされた `& img` セレクターの詳細度は 1-0-0 + 0-0-1 = 1-0-1 となります。

### `@scope` 内における `:scope` と `&` の違い

`:scope` は一致するスコープルートを表し、 `&` はスコープルートに一致するために使用するセレクターを表します。このため、 `&` を複数回連結することが可能です。しかし、 `:scope` を使用することができるのは一度だけです。スコープルートの中のスコープルートに照合することはできません。

```css
@scope (.feature) {
  /* 一致するルート .feature 内の .feature を選択する */
  & & { ... }

  /* 機能しない */
  :root :root { ... }
}
```

### `@scope` の競合の解決方法

`@scope` は [CSS カスケード](/ja/docs/Web/CSS/Guides/Cascade)に新しい基準、**スコープの近接性**を追加します。これは、 2 つのスコープに競合するスタイル設定がある場合、スコープルートまでの DOM ツリー階層のホップ数が最も少ないスタイルを適用するという状態です。この意味を例で見ていきましょう。

以下の HTML スニペットでは、異なるテーマのカードが互いに入れ子になっています。

```html
<div class="light-theme">
  <p>Light theme text</p>
  <div class="dark-theme">
    <p>Dark theme text</p>
    <div class="light-theme">
      <p>Light theme text</p>
    </div>
  </div>
</div>
```

テーマの CSS をこのように書くと、問題が発生します。

```css
.light-theme {
  background: #ccc;
}

.dark-theme {
  background: #333;
}

.light-theme p {
  color: black;
}

.dark-theme p {
  color: white;
}
```

一番内側の段落はライトテーマカードの中なので、黒く色づけされるはずです。しかし、 `.light-theme p` と `.dark-theme p` の両方を対象にしています。 `.dark-theme p` のルールの方がソースの順番で後に現れるため、そちらが適用され、段落は誤って白に着色されてしまいます。

これを修正するには、以下のように `@scope` を使用することができます。

```css
@scope (.light-theme) {
  :scope {
    background: #ccc;
  }
  p {
    color: black;
  }
}

@scope (.dark-theme) {
  :scope {
    background: #333;
  }
  p {
    color: white;
  }
}
```

これで一番内側の段落は正しく黒く色づけされました。これは、 `.light-theme` のスコープルートからは DOM ツリーの階層が1階層しか離れておらず、 `.dark-theme` のスコープルートからは 2 階層しか離れていないためです。したがって、 light スタイルが勝ちます。

> [!NOTE]
> スコープの近さはソースの順序を上書きしますが、[重要度](/ja/docs/Web/CSS/Reference/Values/important)、[レイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)、[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)のような他にも優先度の高い仕様によって上書きされます。

## 形式文法

{{csssyntax}}

## 例

### スコープルート内の基本的なスタイル設定

この例では、 2 つの別個の `@scope` ブロックを使用して、それぞれ `.light-scheme` と `.dark-scheme` クラスを持つ要素内のリンクと照合しています。スコープルート自体を選択し、スタイル設定を提供するために `:scope` を使用していることに注意してください。この例では、スコープルートは {{htmlelement("div")}} 要素であり、それらにクラスが適用されています。

#### HTML

```html
<div class="light-scheme">
  <p>
    MDN には、<a href="/ja/docs/Web/HTML">HTML</a>、
    <a href="/ja/docs/Web/CSS">CSS</a>、
    <a href="/ja/docs/Web/JavaScript">JavaScript</a>
    に関するたくさんの情報があります。
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN には、<a href="/ja/docs/Web/HTML">HTML</a>、
    <a href="/ja/docs/Web/CSS">CSS</a>、
    <a href="/ja/docs/Web/JavaScript">JavaScript</a>
    に関するたくさんの情報があります。
  </p>
</div>
```

#### CSS

```css hidden
div {
  padding: 10px;
}
```

```css
@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }

  a {
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}
```

#### 結果

上記のコードでは、このように描画されます。

{{ EmbedLiveSample("Basic style inside scope roots", "100%", "150") }}

### スコープルートとスコープリミット

この例では、先ほど[解説](#解説)の節で説明した DOM 構造に一致する HTML スニペットが指定されています。この構造は典型的な記事の概要を表します。注目すべき主な機能は、 {{htmlelement("img")}} 要素で、構造内の様々なレベルで入れ子になっています。

この例の目的は、 `<img>` 要素のスタイル設定にスコープルートとリミットを使用し、階層の最上位から開始し、 {{htmlelement("figure")}} 要素内の `<img>` までしか（そして `<img>` は含まれない）表示させない方法を示すことです。つまり、ドーナッツスコープを作成する効果があります。

#### HTML

```html
<article class="feature">
  <section class="article-hero">
    <h2>Article heading</h2>
    <img alt="image" />
  </section>

  <section class="article-body">
    <h3>Article subheading</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
      consectetur leo, nec eleifend quam volutpat vitae. Duis quis felis at
      augue imperdiet aliquam. Morbi at felis et massa mattis lacinia. Cras
      pharetra velit nisi, ac efficitur magna luctus nec.
    </p>

    <img alt="image" />

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <figure>
      <img alt="image" />
      <figcaption>My infographic</figcaption>
    </figure>
  </section>

  <footer>
    <p>Written by Chris Mills.</p>
    <img alt="image" />
  </footer>
</article>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

article {
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid gray;
}

.article-hero,
.article-body,
article footer {
  padding: 20px;
  margin: 10px;
  border: 2px solid lightgray;
}

img {
  height: 100px;
  width: 100%;
  display: block;
  background-color: lightgray;
  color: black;
  padding: 10px;
}
```

この CSS には、 2 つの `@scope` ブロックがあります。

- 最初の `@scope` ブロックは、 `.feature` のクラスを持つ要素（この場合は外側の `<div>` のみ）をスコープルートとして定義しており、 `@scope` を使用して固有の HTML サブセットをテーマにできることを示しています。
- 2 つ目の `@scope` ブロックもスコープルートを `.feature` クラスの要素と定義していますが、さらにスコープリミットは `figure` と定義しています。これにより、格納されたルールセットはスコープルート（この場合は `<div class="figure"> ... </div>`）内の一致する要素にのみ適用され、子孫の `<figure>` 要素の中に入れ子になっているものは適用**されません**。この `@scope` ブロックには、 `<img>` 要素を太い黒枠と金色の背景色でスタイル設定する単一のルールセットが格納されています。

```css
/* スコープ化した CSS */

@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }

  figure {
    background-color: white;
    border: 2px solid black;
    color: black;
    padding: 10px;
  }
}

/* ドーナッツスコープ */

@scope (.feature) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

#### 結果

レンダリングされたコードでは、 `<figure>` 要素（ラベル付けは "My infographic"）内のものを除いて、すべての`<img>`要素が太い境界線と金色の背景でスタイル設定されていることに注目してください。

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":scope")}}
- {{DOMxRef("CSSScopeRule")}}
- [Limit the reach of your selectors with the CSS `@scope` at-rule](https://developer.chrome.com/docs/css-ui/at-scope) on developer.chrome.com (2023)
