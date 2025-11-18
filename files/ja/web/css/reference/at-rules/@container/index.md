---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
original_slug: Web/CSS/@container
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

**`@container`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、[コンテナーコンテキスト](/ja/docs/Web/CSS/Guides/Containment/Container_queries#コンテナーコンテキストの命名)にスタイルを適用する条件付きグループルールです。
スタイル宣言は条件によってフィルタリングされ、条件が真の場合にコンテナーに適用されます。
この条件は、クエリーされたコンテナーのサイズ、[`<style-feature>`](#コンテナースタイルクエリー)、スクロール状態のいずれかが変化したときに評価されます。

{{cssxref("container-name")}} プロパティは、クエリーコンテナーの名前の一覧を指定します。これらの名前は、対象となるクエリーコンテナーをフィルターするために、`@container` ルールで使用することができます。オプションで、大文字と小文字を区別する `<container-name>` は、クエリーによって対象となるクエリーコンテナーをフィルタリングします。

要素に対して適格なクエリーコンテナーが選択されると、`<container-condition>` の各コンテナー機能はそのクエリーコンテナーに対して評価されます。

## 構文

`@container` アットルールは以下の構文です。

```plain
@container <container-condition># {
  <stylesheet>
}
```

例えば次のようなります。

```css
/* <size-query> 付き */
@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}

/* オプションの <container-name> 付き */
@container tall (height > 30rem) {
  p {
    line-height: 1.6;
  }
}

/* <scroll-state> 付き */
@container scroll-state(scrollable: top) {
  .back-to-top-link {
    visibility: visible;
  }
}

/* <container-name> および <scroll-state> 付き */
@container sticky-heading scroll-state(stuck: top) {
  h2 {
    background: purple;
    color: white;
  }
}

/* 単一の条件で複数のクエリー */
@container (width > 400px) and style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}

/* 条件リスト */
@container card (width > 400px), style(--responsive: true), scroll-state(stuck: top) {
  h2 {
    font-size: 1.5em;
  }
}
```

### 値

- `<container-condition>`
  - : オプションの `<container-name>` および `<container-query>`。条件が真の場合、この `<stylesheet>` で定義されたスタイルが適用されます。
    - `<container-name>`
      - : オプション。クエリーが真と評価された際にスタイルが適用されるコンテナーの名前を、{{cssxref("ident")}} として指定します。
    - `<container-query>`
      - : コンテナーのサイズ、[`<style-feature>`](#コンテナースタイルクエリー)、スクロール状態のいずれかが変更された際に、クエリーコンテナーに対して評価される一連の特性を指定します。

- `<stylesheet>`
  - : 一連の CSS ルールまたは宣言です。

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

`<container-condition>` クエリーには、[サイズ](#サイズコンテナー記述子)および[スクロール状態](#スクロール状態コンテナー記述子)が入ります。

#### サイズコンテナー記述子

`<container-condition>` には、 1 つ以上の論理型のサイズクエリーを含めることができ、それぞれは括弧で囲みます。サイズクエリーには、サイズ記述子、値、および記述子に応じて比較演算子が含まれます。複数の条件を含める場合の構文は、 [`@media`](/ja/docs/Web/CSS/Reference/At-rules/@media) サイズ機能クエリーの場合と同じです。

```css
@container (min-width: 400px) {
  /* … */
}
@container (orientation: landscape) and (width > 400px) {
  /* … */
}
@container (15em <= block-size <= 30em) {
  /* … */
}
```

- `aspect-ratio`
  - : コンテナーの {{cssxref("aspect-ratio")}} は、 {{cssxref("ratio")}} 値として発生したコンテナーの高さに対する幅として計算されます。

- `block-size`
  - : コンテナーの {{cssxref("block-size")}} を {{cssxref("length")}} 値で表したものです。

- `height`
  - : コンテナーの高さを {{cssxref("length")}} 値で表現したものです。

- `inline-size`
  - : コンテナーの {{cssxref("inline-size")}} を {{cssxref("length")}} 値で表したものです。

- `orientation`
  - : コンテナーの[方向](/ja/docs/Web/CSS/Reference/At-rules/@media/orientation)で、`landscape` または `portrait` のいずれかです。

- `width`
  - : コンテナーの幅を {{cssxref("length")}} 値で表したものです。

#### スクロール状態コンテナー記述子

スクロール状態コンテナー記述子は、`scroll-state` キーワードに続く括弧のセット内の `<container-condition>` 内で指定します。例えば、

```css
@container scroll-state(scrollable: top) {
  /* … */
}
@container scroll-state(stuck: inline-end) {
  /* … */
}
@container scroll-state(snapped: both) {
  /* … */
}
```

スクロール状態コンテナー記述子に対応しているキーワードには、物理値および{{glossary("flow relative values", "フロー相対値")}}が含まれます。

- `scrollable`
  - : スクロールバーをドラッグしたり、トラックパッドのジェスチャーを使用したりといった、ユーザーによるスクロールによって、コンテナーを指定した方向にスクロールできるかどうかを問い合わせます。つまり、指定した方向にスクロールできるコンテンツがあふれているかどうかです。有効な `scrollable` 値には、次のキーワードを含めることができます。
    - `none`
      - : このコンテナーが{{glossary("scroll container", "スクロールコンテナー")}}でないか、その他の理由でどの方向にもスクロールできない場合。
    - `top`
      - : このコンテナーが上方向にスクロール可能である場合。
    - `right`
      - : このコンテナーが右方向にスクロール可能である場合。
    - `bottom`
      - : このコンテナーが下方向にスクロール可能である場合。
    - `left`
      - : このコンテナーが左方向にスクロール可能である場合。
    - `x`
      - : このコンテナーが左方向と右方向の一方または両方に水平にスクロール可能である場合。
    - `y`
      - : このコンテナーが上方向と下方向の一方または両方に垂直にスクロール可能である場合。
    - `block-start`
      - : このコンテナーがブロックの先頭方向にスクロール可能である場合。
    - `block-end`
      - : このコンテナーがブロックの末尾方向にスクロール可能である場合。
    - `inline-start`
      - : このコンテナーがインラインの先頭方向にスクロール可能である場合。
    - `inline-end`
      - : このコンテナーがインラインの末尾方向にスクロール可能である場合。
    - `block`
      - : このコンテナーがブロックの先頭方向と末尾方向の一方または両方にスクロール可能である場合。
    - `inline`
      - : このコンテナーがインラインの先頭方向と末尾方向の一方または両方にスクロール可能である場合。

    条件を満たすと、`@container` ブロック内のルールがスクロールコンテナーの子孫に適用されます。

    方向に関係なく、コンテナーがスクロール可能かどうかを評価するには、`not` 演算子と `none` 値を使用してください。

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`
  - : コンテナーが、指定された軸に沿って[スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)コンテナーの祖先にスナップされているか、またはスナップされるかどうかを問い合わせます。有効な `snapped` の値としては、次のキーワードがあります。
    - `none`
      - : コンテナーは、その親スクロールコンテナーのスクロール[スナップターゲット](/ja/docs/Glossary/Scroll_snap#スナップターゲット)ではありません。 `snapped: none` クエリーを実装している場合、スクロールコンテナーのスナップターゲットであるコンテナーには `@container` スタイルは適用されませんが、スナップターゲットではないコンテナーにはスタイルが適用されます。
    - `x`
      - : このコンテナーは、その親スクロールコンテナーの水平スクロールスナップターゲットです。つまり、親コンテナーに対して水平方向にスナップします。
    - `y`
      - : このコンテナーは、その親スクロールコンテナーの垂直スクロールスナップターゲットです。つまり、親コンテナーに対して垂直方向にスナップします。
    - `block`
      - : このコンテナーは、その親スクロールコンテナーのブロック軸のスクロールスナップターゲットです。つまり、親コンテナーに対してブロック方向にスナップします。
    - `inline`
      - : このコンテナーは、その親スクロールコンテナーのインライン軸のスクロールスナップターゲットです。つまり、親コンテナーに対してインライン方向にスナップします。
    - `both`
      - : コンテナーは、その親スクロールコンテナーの水平方向および垂直方向のスクロールスナップターゲットであり、両方向に親にスナップします。コンテナーは、水平軸または垂直軸に沿って親にスナップするだけでは一致しません。両方である必要があります。

    `none` 以外の `snapped` のスクロール状態のクエリーでコンテナーを評価するには、そのコンテナーは、 `none` 以外の {{cssxref("scroll-snap-type")}} 値を持つスクロールコンテナーを祖先とするコンテナーでなければなりません。 `snapped: none` クエリーは、スクロールコンテナーの祖先がない場合でも一致します。

    評価は、スクロールスナップコンテナーで [`scrollsnapchanging`](/ja/docs/Web/API/Element/scrollsnapchanging_event) イベントが発生すると行われます。条件を満たすと、 `@container` ブロック内のルールがコンテナーの子孫に適用されます。

    方向に関係なく、コンテナーがスナップターゲットであるかどうかを評価するには、 `not` 演算子とともに `none` 値を使用します。

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : {{cssxref("position")}} 値が [`sticky`](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning#粘着位置指定) であるコンテナーが、そのスクロールコンテナーの祖先の端に固定されているかどうかを問い合わせます。有効な `stuck` の値には、次のキーワードがあります。
    - `none`
      - : コンテナーは、そのコンテナーのどの端にも固定されていません。コンテナーに `position: sticky` が設定されていなくても、`none` クエリーは一致することに注意してください。
    - `top`
      - : コンテナーは、そのコンテナーの上端に固定されています。
    - `right`
      - : コンテナーは、そのコンテナーの右端に固定されています。
    - `bottom`
      - : コンテナーは、そのコンテナーの下端に固定されています。
    - `left`
      - : コンテナーは、そのコンテナーの左端に固定されています。
    - `block-start`
      - : コンテナーは、そのコンテナーのブロック方向の先頭に固定されています。
    - `block-end`
      - : コンテナーは、そのコンテナーのブロック方向の末尾に固定されています。
    - `inline-start`
      - : コンテナーは、そのコンテナーのインライン方向の先頭に固定されています。
    - `inline-end`
      - : コンテナーは、そのコンテナーのインライン方向の末尾に固定されています。

    `none` 以外の `stuck` スクロール状態クエリーでコンテナーを評価するには、そのコンテナーに `position: sticky` が設定されており、スクロールコンテナー内にある必要があります。条件が成立すると、`@container` ブロック内のルールが `position: sticky` コンテナーの子孫に適用されます。

    反対の軸の 2 つの値が同時に一致することもありえます。

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    ただし、反対側の端の 2 つの値は、同時に一致することはありません。

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    方向に関係なく、コンテナーがスタックしているかどうかを評価するには、 `none` 値を `not` 演算子とともに使用します。

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

## 公式定義

{{csssyntax}}

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
    background-color: lightgray;
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

コンテナークエリーは、対象のコンテナー要素のスタイルを計算して評価することもできます。コンテナースタイルクエリーは、1 つ以上の `style()` 関数記法を使用する `@container` クエリーです。 論理値の構文と、スタイル機能をスタイルクエリーに結合するロジックは、[CSS 機能クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) と同じです。

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

それぞれの `style()` の引数は、単一の `<style-feature>` です。 **`<style-feature>`** は、有効な CSS [宣言](/ja/docs/Web/CSS/Guides/Syntax/Introduction#css_宣言)、CSS プロパティ、[`<custom-property-name>`](/ja/docs/Web/CSS/Reference/Values/var#values) のいずれかです。

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

値のないスタイル特性は、指定されたプロパティの初期値と計算値が異なる場合、真と評価されます。

`style()` 関数の引数として渡した `<style-feature>` が宣言である場合、スタイルクエリーは、宣言の値がクエリー対象のコンテナーのそのプロパティの計算値と同じであれば真と評価されます。 そうでない場合は、偽と評価されます。

以下のコンテナークエリーは、コンテナー要素の `--accent-color` の[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)が `blue` かどうかを調べます。

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> カスタムプロパティが `blue` という値を持つ場合、そのプロパティが {{cssxref("@property")}} で色として定義されていない限り、同等の 16 進コード `#0000ff` は一致しません。

個別指定プロパティを照会するスタイルの機能クエリーは、計算された値が各プロパティで一致する場合は真となり、一致しない場合は偽となります。例えば、 `@container style(border: 2px solid red)` は、その短縮形を構成する 12 個の個別指定プロパティ（`border-bottom-style` など）がすべて真であれば真になります。

グローバルな `revert` と `revert-layer` は `<style-feature>` の値としては不正なため、コンテナースタイルクエリーは偽になります。

### スクロール状態クエリー

スクロール状態クエリーの例の手順を追って説明については、「[コンテナースクロール状態クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)」をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテナークエリーの使用](/ja/docs/Web/CSS/Guides/Containment/Container_queries)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [コンテナースクロール状態クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS コンテナーモジュール](/ja/docs/Web/CSS/Guides/Containment)
- [CSS アットルール関数](/ja/docs/Web/CSS/Reference/At-rules/At-rule_functions)
