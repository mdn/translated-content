---
title: contain
slug: Web/CSS/contain
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

**`contain`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素とそのコンテンツが文書ツリーの残りの部分から可能な限り独立していることを示します。
拘束によって DOM のサブセクションを分離することができ、レイアウト、スタイル、描画、サイズ、または任意の組み合わせの計算をページ全体ではなく DOM サブツリーに制限することによって、性能上で有利になります。拘束は、CSS カウンターや引用のスコープにも使用することができます。

{{EmbedInteractiveExample("pages/css/contain.html")}}

CSS 拘束には、サイズ、レイアウト、スタイル、描画の 4 種類があり、コンテナーに設定します。
プロパティは、5 つの標準値のサブセットか、2 つの一括指定値のうちの 1 つをスペースで区切ったリストです。
コンテナー内の拘束プロパティへの変更は、内包された要素の外側からページの残りの部分には伝搬されません。
拘束の主な利点は、ブラウザーが DOM やページレイアウトを頻繁に再レンダリングする必要がなくなることで、静的なページのレンダリング時にはわずかなパフォーマンス上の利点を、より動的なアプリケーションではより大きなパフォーマンス上の利点につながります。

`contain` プロパティを使用することで、要素の内部が外接ボックスの外で副作用が発生することを防ぐことができるため、独立した要素をたくさん持つページで有用です。

> [!NOTE]
> (`paint`, `strict`, `content` のいずれかの値で) 適用された場合、このプロパティは以下のものを生成します。
>
> 1. 新しい[包含ブロック](/ja/docs/Web/CSS/Containing_block) ({{cssxref("position")}} プロパティが `absolute` または `fixed` である子孫を対象とする)。
> 2. 新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)。
> 3. 新しい[ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context)。

## 構文

```css
/* キーワード値 */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: inline-size;
contain: layout;
contain: style;
contain: paint;

/* 複数のキーワード */
contain: size paint;
contain: size layout paint;
contain: inline-size layout;

/* グローバル値 */
contain: inherit;
contain: initial;
contain: revert;
contain: revert-layer;
contain: unset;
```

### 値

`contain` プロパティは、以下のうちの一つで指定します。

- キーワード `none` **または**
- `size`（または `inline-size`）、`layout`、`style`、`paint` の各キーワードを 1 つ以上、任意の順序で使用。 **または**
- `strict` または `content` の一括指定値のどちらか。

キーワードには、次のような意味があります。

- `none`
  - : その要素が通常通り描画され、拘束を適用されません。
- `strict`
  - : すべての拘束ルールがその要素に適用されます。これは `contain: size layout paint style` と同等です。
- `content`
  - : `size` 以外の拘束ルールがその要素に適用されることを示します。これは `contain: layout paint style` と同等です。
- `size`
  - : サイズ拘束が、インライン方向でもブロック方向でも要素に適用されます。要素のサイズは、子要素を無視して単独で計算することができます。この値は `inline-size` と組み合わせることはできません。
- `inline-size`
  - : インラインサイズ拘束が要素に適用されます。要素のインラインサイズは、子要素を無視して単独で計算することができます。この値は `size` と組み合わせることはできません。
- `layout`
  - : 要素の内部レイアウトはページの他の部分から分離されています。これは、要素の外側にあるものはその内部レイアウトに影響しないということです。
- `style`
  - : 複数の要素とその子孫に影響するプロパティでは、効果は格納された要素をエスケープしません。カウンターと引用符は、要素とそのコンテンツにスコープされます。
- `paint`
  - : その要素の子孫を、境界の外に表示しません。包含ボックスが画面外の場合、ブラウザーは中の要素を描画する必要はありません。そのボックスに完全に含まれていれば、やはり画面外にあるからです。子孫が包含要素の領域を溢れている場合、子孫は包含要素の境界ボックスで切り取られます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 描画拘束

次の例は、`contain: paint` を使用して、要素の子孫がその境界の外側に描画されないようにする方法を示しています。

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  margin: 10px;
  font-size: 20px;
}
```

```html
<div style="contain: paint">
  <p>このテキストは、ボックスの境界で切り取られるでしょう。</p>
</div>
<div>
  <p>このテキストは、ボックスの境界で切り取られないでしょう。</p>
</div>
```

{{EmbedLiveSample("Paint_containment", "100%", 280)}}

### レイアウト拘束

レイアウト拘束を適用した場合としない場合の要素の動作を示す下記の例を考えてみましょう。

```html
<div class="card" style="contain: layout;">
  <h2>カード 1</h2>
  <div class="fixed"><p>固定ボックス 1</p></div>
  <div class="float"><p>浮動ボックス 1</p></div>
</div>
<div class="card">
  <h2>カード 2</h2>
  <div class="fixed"><p>固定ボックス 2</p></div>
  <div class="float"><p>浮動ボックス 2</p></div>
</div>
<div class="card">
  <h2>カード 3</h2>
  <!-- ... -->
</div>
```

```css hidden
p {
  margin: 4px;
  padding: 4px;
}

h2 {
  margin-bottom: 4px;
  padding: 10px;
}

div {
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 gray;
  padding: 6px;
  margin: 6px;
}
```

```css
.card {
  width: 70%;
  height: 90px;
}

.fixed {
  position: fixed;
  right: 10px;
  top: 10px;
  background: coral;
}

.float {
  float: left;
  margin: 10px;
  background: aquamarine;
}
```

最初のカードにはレイアウト拘束が適用され、レイアウトがページの他の部分から分離されています。
他の要素のレイアウト再計算を気にすることなく、ページの他の場所でこのカードを再利用することができます。
浮動要素がカードの境界に重なっても、ページの残りの要素は影響を受けません。
ブラウザーが格納する要素のサブツリーを再計算するとき、その要素だけが再計算されます。格納する要素の外側は何も再計算される必要はありません。
さらに、固定ボックスはカードをレイアウトコンテナーそのものとして使用して位置指定します。

2 枚目と 3 枚目のカードには拘束がありません。
2 枚目のカードの固定ボックスのレイアウトコンテキストはルート要素なので、固定ボックスはページの右上に指定されます。
浮動要素が 2 枚目のカードの境界に重なり、3 枚目のカードに予期しないレイアウトのずれが発生し、それが `<h2>` 要素の位置指定に現れています。
再計算が発生すると、コンテナーそのものに制限されません。
これはパフォーマンスに影響し、ページレイアウトの残りの部分に干渉します。
{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### スタイル拘束

スタイルの拘束は[カウンター](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)と[引用符](/ja/docs/Web/CSS/quotes)を拘束される要素にスコープします。
CSS カウンターの場合、{{cssxref("counter-increment")}} と {{cssxref("counter-set")}} プロパティは、要素が文書のルートにあるかのように要素にスコープされます。

#### 拘束とカウンター

下記の例では、スタイルの拘束が適用された場合のカウンターの動作を見ていきます。

```html
<ul>
  <li>アイテム A</li>
  <li>アイテム B</li>
  <li class="container">アイテム C</li>
  <li>アイテム D</li>
  <li>アイテム E</li>
</ul>
```

```css
body {
  counter-reset: list-items;
}

li::before {
  counter-increment: list-items;
  content: counter(list-items) ": ";
}

.container {
  contain: style;
}
```

拘束がなければ、カウンターはリストアイテムごとに 1 から 5 まで増加します。
スタイル拘束を行うと、{{cssxref("counter-increment")}} プロパティが要素のサブツリーにスコープされ、カウンターは再び 1 から始まります。

{{EmbedLiveSample('拘束とカウンター', '100%', 140)}}

#### 拘束と引用符

CSS の引用符も同様に、[`content`](/ja/docs/Web/CSS/content) の引用符関連の値が要素にスコープされます。

```html
<!-- スタイル拘束付き -->
<span class="open-quote">
  外部
  <span style="contain: style;">
    <span class="open-quote"> 内部 </span>
  </span>
</span>
<span class="close-quote"> 閉じ </span>
<br />
<!-- 拘束なし -->
<span class="open-quote">
  外部
  <span>
    <span class="open-quote"> 内部 </span>
  </span>
</span>
<span class="close-quote"> 閉じ </span>
```

```css
body {
  quotes: "[" "]" "‹" "›";
}
.open-quote:before {
  content: open-quote;
}

.close-quote:after {
  content: close-quote;
}
```

拘束のため、最初の閉じ引用符は内側のスパンを無視し、外側のスパンの閉じ引用符を代わりに使用します。

{{EmbedLiveSample('拘束と引用符', '100%', 40)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 拘束](/ja/docs/Web/CSS/CSS_containment)
- [CSS コンテナークエリー](/ja/docs/Web/CSS/CSS_containment/Container_queries)
- CSS の {{cssxref("content-visibility")}} プロパティ
- CSS の {{cssxref("position")}} プロパティ
