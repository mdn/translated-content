---
title: "@scope"
slug: Web/CSS/Reference/At-rules/@scope
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`@scope`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を使用すると、特定の DOM サブツリー内の要素を選択できるようになり、セレクターを DOM 構造に密接に結合させることなく、また上書きしにくい特定のセレクターを書くことなく、要素を正確に対象とすることができます。

JavaScript で `@scope` は CSS オブジェクトモデルインターフェイスの {{DOMxRef("CSSScopeRule")}} からアクセスすることができます。

## 構文

`@scope` アットルールは、 1 つ以上のルールセット（**スコープ付きスタイルルール**と呼ばれます）を収め、選択した要素に適用するスコープを定義します。 `@scope` は 2 つの方法で使用することができます。

1. CSS の中における独立したブロックとして。この場合、**スコープルート**とオプションの**スコープリミット**セレクターを含む前置部を記述します。これらはスコープの上限と下限を定義します。

   ```css
   @scope (スコープルート) to (スコープリミット) {
     /* … */
   }
   ```

2. HTML で {{htmlelement("style")}} 要素の中に記載するインラインスタイルとして。この場合、前置き部は除外され、囲まれたルールセットは自動的に `<style>` 要素の親要素のスコープになります。

   ```html
   <parent-element>
     <style>
       @scope {
         /* ルールセット */
       }
     </style>
   </parent-element>
   ```

   また、インラインの `@scope` をスコープ制限セレクターと組み合わせることも可能です。例えば、`@scope to (スコープリミット) { ... }` のようにします。

## 解説

複雑なウェブ文書には、ヘッダー、フッター、ニュース記事、地図、メディアプレーヤー、広告などの部品が含まれることがあります。複雑さが増すにつれて、これらの部品のスタイル設定を効果的に管理することが重要になり、スタイルを効果的にスコープ化することで、この複雑さを管理することができます。以下の DOM ツリーを考えてみましょう。

```plain
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

スコープの上限は包含され、下限は除外されます。この動作を変更するには、いずれかのセレクターを全称子セレクターと組み合わせることができます。例えば、`@scope (スコープルート) to (スコープリミット > *)` とすると両方の境界が包含型になり、`@scope (スコープルート > *) to (スコープリミット)` とすると両方の境界が除外型になります。一方、`@scope (スコープルート > *) to (スコープリミット > *)` とすると、上限は除外型、下限は包含型になります。

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

### `@scope` ブロック内の `:scope` 擬似クラス

`@scope` ブロック内では、{{cssxref(":scope")}} 擬似クラスを使用することで、次のようにスコープのルート要素にスタイルを直接適用することができます。

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

`@scope` ブロック内の `:scope` については、いつかの注意事項があります。

- `:scope` はクラスレベルの詳細度を追加します（詳しくは [@scope の詳細度](#scope_の詳細度)を参照してください）。

- スコープリミットは `:scope` を使用して、スコープリミットとルートとの間の固有の関係要件を指定することができます。例えば、以下のようにします。

  ```css
  /* :scope の直接の子である場合にのみ、スコープリミットになります。 */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- スコープリミットは `:scope` を使用してスコープルート外の要素を参照することができます。例えば、次のようにします。

  ```css
  /* figure は :scope が .feature の中にある場合に限りリミットとなる */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
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

`@scope` ルール内では、単純セレクターと [`&`](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector) 入れ子セレクターの両方が、セレクターの先頭に `:where(:scope)` が付加されたかのように動作します。
{{cssxref(":where()")}} が持つ[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)はゼロであるため、単純セレクターや `&` に重みは追加されません。詳細度の重みは、セレクターの残りの部分によって決定されます。
例えば、`& img` セレクターの詳細度は、`:where(:scope) img` (0-0-1) の詳細度と同等です。

> [!WARNING]
> `@scope` ブロック内の `&` の扱いは、ブラウザーエンジンやリリースバージョンによって異なります。
> 詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を確認してください。

以下のコードブロックにある 2 つの場合において、詳細度は `img` のみから決まります。

```css
@scope (.article-body) {
  /* img は期待通り、 0-0-1 の詳細度になる */
  img {
    /* … */
  }

  /* & img も 0-0-1 の詳細度になる */
  & img {
    /* … */
  }
}
```

一方で、`:scope` を明示的に使用すると、スコープのルートが選択され、クラスレベルの詳細度 (0-1-0) が追加されます。これは、`:scope` が[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)であるためです。
以下のコードブロックでは、`:scope img` の詳細度は 0-1-1 となります。

```css
@scope (.article-body) {
  /* :scope img は 0-1-0 + 0-0-1 = 0-1-1 の詳細度になります。 */
  :scope img {
    /* … */
  }
}
```

### `@scope` の競合の解決方法

`@scope` は [CSS カスケード](/ja/docs/Web/CSS/Guides/Cascade)に新しい基準、**スコープの近接性**を追加します。これは、 2 つのスコープに競合するスタイル設定がある場合、スコープルートまでの DOM ツリー階層のホップ数が最も少ないスタイルを適用するという状態です。この意味を例で見ていきましょう。

次の HTML スニペットを見てみましょう。異なるテーマのカードが互いに入れ子になっています。

```html
<div class="light-theme">
  <p>明るいテーマのテキスト</p>
  <div class="dark-theme">
    <p>暗いテーマのテキスト</p>
    <div class="light-theme">
      <p>明るいテーマのテキスト</p>
    </div>
  </div>
</div>
```

テーマの CSS をこのように書くと、問題が発生します。

```css
.light-theme {
  background: #cccccc;
}

.dark-theme {
  background: #333333;
}

.light-theme p {
  color: black;
}

.dark-theme p {
  color: white;
}
```

一番内側の段落は明るいテーマのカードの中なので、黒く色づけされるはずです。しかし、 `.light-theme p` と `.dark-theme p` の両方を対象にしています。 `.dark-theme p` のルールの方がソースの順番で後に現れるため、そちらが適用され、段落は誤って白に着色されてしまいます。

次のように `@scope` を使用することで、これを修正することができます。

```css
@scope (.light-theme) {
  :scope {
    background: #cccccc;
  }
  p {
    color: black;
  }
}

@scope (.dark-theme) {
  :scope {
    background: #333333;
  }
  p {
    color: white;
  }
}
```

これで一番内側の段落は正しく黒く色づけされました。これは、 `.light-theme` のスコープルートからは DOM ツリーの階層が1階層しか離れておらず、 `.dark-theme` のスコープルートからは 2 階層しか離れていないためです。したがって、 light スタイルが勝ちます。

> [!NOTE]
> スコープの近接性はソースの順序を上書きしますが、[重要度](/ja/docs/Web/CSS/Reference/Values/important)、[レイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)、[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)のような他にも優先度の高い仕様によって上書きされます。

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

{{EmbedLiveSample("Basic style inside scope roots", "100%", "150")}}

### スコープルートとスコープリミット

この例では、先ほど[解説](#解説)の節で説明した DOM 構造に一致する HTML スニペットが指定されています。この構造は典型的な記事の概要を表します。注目すべき主な機能は、 {{htmlelement("img")}} 要素で、構造内の様々なレベルで入れ子になっています。

この例の目的は、 `<img>` 要素のスタイル設定にスコープルートとリミットを使用し、階層の最上位から開始し、 {{htmlelement("figure")}} 要素内の `<img>` までしか（そして `<img>` は含まれない）表示させない方法を示すことです。つまり、ドーナッツスコープを作成する効果があります。

#### HTML

```html
<article class="feature">
  <section class="article-hero">
    <h2>記事の見出し</h2>
    <img alt="image" src="" />
  </section>

  <section class="article-body">
    <h3>記事の副見出し</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
      consectetur leo, nec eleifend quam volutpat vitae. Duis quis felis at
      augue imperdiet aliquam. Morbi at felis et massa mattis lacinia. Cras
      pharetra velit nisi, ac efficitur magna luctus nec.
    </p>

    <img alt="image" src="" />

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <figure>
      <img alt="image" src="" />
      <figcaption>インフォグラフィック</figcaption>
    </figure>
  </section>

  <footer>
    <p>Written by Chris Mills.</p>
    <img alt="image" src="" />
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

- 最初の `@scope` ブロックは、 `.feature` のクラスを持つ要素（この場合は外側の `<article>` のみ）をスコープルートとして定義しており、 `@scope` を使用して固有の HTML サブセットをテーマにできることを示しています。
- 2 つ目の `@scope` ブロックもスコープルートを `.feature` クラスの要素と定義していますが、さらにスコープリミットは `figure` と定義しています。これにより、格納されたルールセットはスコープルート（この場合は `<article class="feature"> ... </article>`）内の一致する要素にのみ適用され、子孫の `<figure>` 要素の中に入れ子になっているものは適用**されません**。この `@scope` ブロックには、 `<img>` 要素を太い黒枠と金色の背景色でスタイル設定する単一のルールセットが格納されています。

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

レンダリングされたコードでは、 `<figure>` 要素（ラベル付けは "My infographic"）内のものを除いて、すべての `<img>` 要素が太い境界線と金色の背景でスタイル設定されていることに注目してください。

{{EmbedLiveSample("Scope roots and scope limits", "100%", "400")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":scope")}}
- {{DOMxRef("CSSScopeRule")}}
- [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
- [Defining the `&` selector in a `@scope` rule](https://css.oddbird.net/scope/parent-selector/) - css.oddbird.net (2025)
- [Limit the reach of your selectors with the CSS `@scope` at-rule](https://developer.chrome.com/docs/css-ui/at-scope) - developer.chrome.com (2023)
