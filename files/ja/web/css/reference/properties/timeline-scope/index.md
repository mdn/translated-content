---
title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
original_slug: Web/CSS/timeline-scope
l10n:
  sourceCommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{seecompattable}}

**`timeline-scope`** は [CSS](/ja/docs/Web/CSS) のプロパティで、名前付きアニメーションタイムラインのスコープを変更します。

既定では、名前付きタイムライン（つまり {{cssxref("scroll-timeline-name")}} または {{cssxref("view-timeline-name")}} を使って宣言されたタイムライン）は、直接の子孫要素の制御タイムラインとしてのみ設定することができます（つまり、タイムライン名を値として {{cssxref("animation-timeline")}} を設定することで）。これはタイムラインの既定の「スコープ」です。

`timeline-scope` は子孫要素で定義されたタイムラインの名前を与えます。これにより、タイムラインのスコープが、 `timeline-scope` が設定された要素とその子孫要素に拡大されます。言い換えると、その要素とその子孫要素はそのタイムラインを使って制御できるようになります。

> [!NOTE]
> `timeline-scope` に指定された名前のタイムラインが存在しない場合（または複数のタイムラインが存在する場合）、指定された名前のアクティブでないタイムラインが作成されます。

## 構文

```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### 値

`timeline-scope` に許可されている値は次の通りです。

- `none`
  - : タイムラインのスコープに変更はありません。
- `<dashed-ident>`
  - : 子孫要素で定義されている既存の名前付きタイムライン（{{cssxref("scroll-timeline-name")}} または {{cssxref("view-timeline-name")}} を用いて宣言されたもの）の名前を指定します。これにより、タイムラインのスコープは `timeline-scope` が設定された要素とその子孫要素まで拡張されます。

    > [!NOTE]
    > [`<dashed-ident>`](/ja/docs/Web/CSS/Reference/Values/custom-ident) の値は `--` で始める必要があり、標準的な CSS キーワードとの名前の衝突を避けるのに役立ちます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

この例では、 `--myScroller` という名前のスクロールタイムラインが `scroll-timeline-name` プロパティを使って `scroller` クラスを持つ要素（スクロール要素）に定義されます。これを `box` クラスと `animation` クラスを持つ要素（アニメーション要素）のアニメーションに適用するには、 `animation-timeline: --myScroller` を使用します。ここで注意すべき点は、アニメーションする要素はスクロール要素の子孫ではないということです。これを動作させるために、 `timeline-scope: --myScroller` を {{htmlelement("body")}} に設定することで `--myScroller` のタイムラインのスコープを拡大します。

### HTML

この例の HTML は以下の通りです。

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

CSS は以下の通りです。

まず、 `<body>` の高さを `100vh` に設定し、その 2 つの子要素をフレックスボックスを使って 2 等分の列としてレイアウトします。また、 `timeline-scope: --myScroller` のタイムラインを `<body>` とその中の要素に設定されたアニメーションの制御タイムラインとして設定できるようにする。

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;

  /* タイムラインのスコープを .scroller の <div> 要素から <body> 全体に広げる。 */
  timeline-scope: --myScroller;
}

.content,
.scroller {
  flex: 1;
}
```

次に、スクロールする要素には `--myScroller` タイムラインが設定され、スクロールするように `overflow` が設定され、境界がはっきり見えるように背景色が設定される。スクロールする要素の子要素である長い要素には、スクロールする要素が実際にスクロールするように大きな高さが与えられます。

```css
.scroller {
  overflow: scroll;
  scroll-timeline-name: --myScroller;
  background: deeppink;
}

.long-element {
  height: 2000px;
}
```

次に、アニメーション要素に初歩的なスタイル設定を行い、アニメーションを適用します。また、 `--myScroller` のタイムラインを `animation-timeline: --myScroller` を使って適用します。繰り返しになりますが、これは先ほど `timeline-scope: <body>` 要素に `-myScroller` を設定したからです。アニメーションする要素はスクロール要素の子孫ではありません。

```css
.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 20px;
  left: 0%;
}

.animation {
  animation: rotate-appear;
  animation-timeline: --myScroller;
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    left: 0%;
  }

  to {
    rotate: 720deg;
    left: 100%;
  }
}
```

### 結果

ピンクの部分の縦棒をスクロールさせると、正方形がアニメーションします。

{{EmbedLiveSample("Examples", "100%", "320px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`animation-timeline`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline`](/ja/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-name`](/ja/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- [`view-timeline`](/ja/docs/Web/CSS/Reference/Properties/view-timeline), [`view-timeline-name`](/ja/docs/Web/CSS/Reference/Properties/view-timeline-name)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
