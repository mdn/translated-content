---
title: CSS コンテナーの使用
slug: Web/CSS/Guides/Containment/Using
original_slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

CSS コンテナー (CSS containment) は、ウェブページの表示性能を向上させるために、開発者がページの任意のサブツリーをページのそれ以外の部分から独立させることができます。もしページの一部が独立していることをブラウザーが知っていれば、レンダリングを最適化し、表示性能を向上させることができます。

{{cssxref("contain")}} と {{cssxref("content-visibility")}} プロパティを使うことで、開発者はユーザーエージェントに、要素がコンテンツをすべて表示すべきかどうか、また画面外にあるときにコンテンツを表示すべきかどうかを知らせることができます。ユーザーエージェントは、必要に応じて要素に抑制を適用し、必要なときまでレイアウトやレンダリングを延期することができます。

このガイドでは、 CSS コンテナーの基本的な目的と、 `contain` と `content-visibility` を活用してユーザー体験を向上させる方法について記述しています。

## 基本的な例

ウェブページには、論理的には互いに独立した複数の節が含まれていることがよくあります。 CSS コンテナーにより、レンダリング時に他のセクションを本当に独立して扱うことができます。

例えば、ブログは通常複数の記事を含み、それぞれが下記のマークアップのように見出しとコンテンツを含みます。

```html
<h1>私のブログ</h1>
<article>
  <h2>良い記事の見出し</h2>
  <p>コンテンツはこちら。</p>
</article>
<article>
  <h2>他の記事の他の見出し</h2>
  <p>さらなるコンテンツはこちら。</p>
</article>
```

CSS では、 {{cssxref("contain")}} プロパティに `content` という値をそれぞれの記事に適用します。 `content` の値は `contain: layout paint style` の一括指定です。

```css
article {
  contain: content;
}
```

論理的には、それぞれの記事はページ上の他の記事から独立しています。この情報は通常、ウェブ開発者がページを作成する際に知っていることであり、明白なことです。
しかし、ブラウザーはコンテンツの意図を知らないので、記事や他のコンテンツの節が完全に自己完結しているとみなすことはできません。

このプロパティは、このことをブラウザーに説明し、パフォーマンスの最適化を明示的に許可する方法を提供します。
これは、要素の内部レイアウトがページの他の部分とは完全に別個のものであり、要素に関するすべてがその境界の内側に描画されることをブラウザーに指示します。目に見えてはみ出すものはありません。

それぞれの `<article>` に `contain: content` を設定することで、このことを指示しています。つまり、それぞれの記事が独立していることをブラウザーに指示したのです。ブラウザーはこの情報を使用して、それぞれの `<article>` コンテンツをどのようにレンダリングするかを決定することができます。例えば、表示可能領域の外にある記事はレンダリングしないかもしれません。

記事がページの終わりに追加されたとき、ブラウザーはレイアウトを再計算したり、先行するコンテンツを再描画する必要はありません。また、抑制要素のサブツリーの外側の領域に触れる必要もありません。しかし、ボックスモデルのプロパティが依存関係にある場合、ブラウザーはレイアウトを再計算し、再描画する必要があります。例えば、 `<article>` のサイズがコンテンツに依存するようにスタイル設定されている場合（例えば `height: auto` など）、ブラウザーはサイズが変化することを考慮する必要があります。

## 主要概念と用語

### `contain` の値

抑制には、レイアウト、描画、サイズ、スタイルの 4 つの種類があります。 {{cssxref("contain")}}プロパティを使用して、要素に適用する種類を指定します。

#### レイアウト抑制

```css
article {
  contain: layout;
}
```

レイアウトは通常、文書全体がスコープになっています。つまり、文書全体の中から 1 つの要素を動かしただけで、すべてが動かされたかのように扱われます。 `contain: layout` を使うことで、ブラウザーに対して必要な要素のみを伝えることができます。要素の中にあるものはすべてその要素にスコープされ、ページの他の部分には影響せず、包含ボックスは独立した[整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Formatting_contexts)を確立します。

加えて以下のことが言えます。

- {{cssxref("float")}} レイアウトは指定した要素の内部で独立して行われます。
- レイアウト抑制の境界でマージンが相殺されることはありません。
- レイアウトのコンテナーは `absolute`/`fixed` で位置指定された子孫要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)になります。
- この包含ボックスは[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を作ります。従って {{cssxref("z-index")}} を使用することができます。

> [!NOTE]
> `contain` の `style` および `layout` の値は、 {{cssxref("container-type")}} および {{cssxref("container-name")}} プロパティを使用すると自動的に適用されます。

#### 描画抑制

```css
article {
  contain: paint;
}
```

描画抑制は、基本的に、ボックスを[主要ボックス](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model#主ボックス)のパディング境界でクリッピングします。視覚的なはみ出しは行われません。 `paint` 抑制にも `layout` 抑制と同じことが当てはまります（上記を参照）。

もうひとつの利点は、包含ボックスが画面外にある場合、ブラウザーはその内包する要素を描く必要がないことです — これらはそのボックスによって完全に内包されているので、画面外にあるに違いないからです。

#### サイズ抑制

```css
article {
  contain: size;
}
```

サイズ抑制を単独で使用した場合、表示性能の最適化はあまり期待できません。しかし、要素の子のサイズが要素自体のサイズに影響しないことを意味し、そのサイズは子がないものとして計算されます。

要素に `contain: size` を設定した場合、{{cssxref("contain-intrinsic-size")}} または個別指定プロパティ {{cssxref("contain-intrinsic-width")}} および {{cssxref("contain-intrinsic-height")}} の順に要素のサイズを指定する必要があります。サイズが設定されていない場合、要素はほとんどの場合ゼロサイズになるというリスクがあります。

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto;
}
```

#### スタイル抑制

```css
article {
  contain: style;
}
```

名前に反して、スタイル抑制は、[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) や {{cssxref("@scope")}} のようにスタイルのスコープを提供するものではありません。
`style` 値の主な用途は、 [CSS カウンター](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters) がある要素で変更され、それがツリーの残りの部分に影響する可能性がある状況を防ぐことです。

`contain: style` を使用すると、{{cssxref("counter-increment")}} と {{cssxref("counter-set")}} プロパティがそのサブツリーにのみ限定された新しいカウンターを作成することを保証します。

複数の種類の抑制を含めることができます。 `contain: layout paint`のようにスペースで区切られた複数の値を含めるか、2つの[特別な値](#特別な値)のいずれかを使用することができます。

#### 特別な値

`contain` には 2 つの特別な値があり、最初の 3 つまたは 4 つすべての種類の抑制を一括指定することができます。

- `content`
- `strict`

1 つ目は上記の例で既に見ました。 `contain: content` を使用すると、 `layout`、`paint`、`style` の抑制が有効になります。 `size` を外しているので、広く適用しても安全な値です。

`contain: strict` 宣言は、 `contain: size layout paint style` 宣言（4 つのスペースで区切られた値を記載する）と同じ動作をし、ほとんどの抑制を提供します。これは `size` という抑制を適用するために使用することができます。子要素のサイズに依存するため、ボックスのサイズがゼロになってしまう危険性があります。

このリスクを避けるために、 `strict` を使用するときは常にサイズを設定します。

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto;
}
```

The above is the same as:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto;
}
```

### `content-visibility`

重い抑制から恩恵を受けることができるコンテンツがたくさんあり、それが画面外にあることが多い場合、例えば、ブログの記事がすべて無限にスクロール可能なブログとしてブログのホームページで閲覧可能な場合、 `content-visibility: auto` を使用することで、すべての抑制を一度に適用することができます。

{{cssxref("content-visibility")}} プロパティは、要素のコンテナーそのものをすべて描画するかどうかを制御し、強力な一連の抑制を強制することで、ユーザーエージェントが必要になるまでレイアウトや描画の大部分を省略することができます。これにより、ユーザーエージェントは必要になるまで要素のレンダリング作業（レイアウトや描画を含む）を省略することができます。

取り得る値は以下の通りです。

- `visible`: 既定で、要素のコンテンツは通常通りにレイアウトされ、レンダリングされます。
- `hidden`: この要素は[コンテンツをスキップします](#コンテンツのスキップ)。スキップされたコンテンツは、ページ内検索やタブ順ナビゲーションなどのユーザーエージェント機能からアクセスすることはできませんし、選択可能にもフォーカス可能にもなりません。
- `auto`: この要素は、`contain: content` が設定されているかのように、レイアウト抑制、スタイル抑制、描画抑制をオンにします。要素が[ユーザーに関連しない](#ユーザーとの関連)場合は、そのコンテンツもスキップします。hidden`とは異なり、スキップされたコンテンツはユーザーとの対話操作に利用でき、フォーカス、選択、通常のタブ操作、コンテンツ内検索が可能です。

### ユーザーとの関連

ユーザーエージェントには、コンテンツが[ユーザーに関連している](https://drafts.csswg.org/css-contain/#relevant-to-the-user)という概念があります。要素が「ユーザーに関連する」ようになるのは、以下のいずれかが当てはまる場合です。

- 要素がビューポートまたはビューポートの周りのユーザーエージェントが定義したマージン（ビューポート寸法の 50%、要素の可視性が変更されたときにアプリが準備をする時間を与えるため）に現れたとき。
- 要素またはそのコンテンツがフォーカスを受け取ったとき。
- 要素またはそのコンテンツが選択されたとき。例えば、マウスカーソルでテキスト上をドラッグしたり、他にも何らかのハイライト処理によって選択されたりしたとき。
- 要素やそのコンテンツが{{glossary("top layer", "最上位レイヤー")}}に配置されたとき。

`content-visibility: auto` が設定されていて、コンテンツがユーザーに関連するとブラウザーが判断した場合、ブラウザーはそのコンテンツをレンダリングします。

### コンテンツのスキップ

要素に `content-visibility: hidden` を設定すると、ブラウザーにその要素はユーザーに関係ないので、[コンテンツをスキップする](https://drafts.csswg.org/css-contain/#skips-its-contents)と指示し、レンダリングしないようにします。これはパフォーマンスの向上に役立ちます。

また、ブラウザーは要素に `content-visibility: auto` が設定されていて、そのコンテンツがユーザーにとって関連性がないと判断した場合、その要素のコンテンツをスキップします。

要素がコンテンツをスキップするのは次のような場合です。

- レイアウト、スタイル、描画、サイズ抑制がオンになっているとき。
- そのコンテンツが、 {{cssxref("visibility", "visibility: hidden")}} が設定されているときのように描画されないとき。
- そのコンテンツが、 {{cssxref("pointer-events", "pointer-events: none")}} が設定されているときのように、ポインターイベントを受け取らないとき。

これは上記のどちらの場合でも起こりますが、 `content-visibility: auto` の場合、コンテンツは検索でき、フォーカスを受け取ることができ、関連性のないものから関連性のあるものへと移行することができます。これは `content-visibility: hidden` では起こりません。

> [!NOTE]
> `content-visibility: hidden` から visible 値へのアニメーションには {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} と {{cssxref("@starting-style")}} スタイルを設定する必要があります。詳しくは、 [`display` および `content-visibility` のトランジション](/ja/docs/Web/CSS/Guides/Transitions/Using#display_と_content-visibility_のトランジション) を参照してください。

## 関連情報

- [CSS コンテナーモジュール](/ja/docs/Web/CSS/Guides/Containment)
- [学習: CSS のパフォーマンス最適化](/ja/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)
- [An Introduction to CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) (Igalia.com, 2019)
- {{domxref("Element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} イベント
