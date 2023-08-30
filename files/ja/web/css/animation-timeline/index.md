---
title: animation-timeline
slug: Web/CSS/animation-timeline
---

{{CSSRef}}

**`animation-timeline`** は [CSS](/ja/docs/Web/CSS) のプロパティで、この要素に適用されるスクロールアニメーションを記述する 1 つ以上の {{cssxref("@scroll-timeline")}} アットルールの名前を指定します。

<!-- {{EmbedInteractiveExample("pages/css/animation-name.html")}} -->

ふつうはすべてのアニメーションプロパティを一度に設定する一括指定プロパティの {{cssxref("animation")}} を使用したほうが便利です。

## 構文

```css
/* 単一のアニメーション */
animation-timeline: none;
animation-timeline: test_05;
animation-timeline: -specific;
animation-timeline: sliding-vertically;

/* 複数のアニメーション */
animation-timeline: test1, animation4;
animation-timeline:
  none,
  -moz-specific,
  sliding;

/* グローバル値 */
animation-timeline: initial;
animation-timeline: inherit;
animation-timeline: revert;
animation-timeline: unset;
```

### 値

- `auto`
  - : アニメーションのタイムラインはこの文書の既定の [DocumentTimeline](/ja/docs/Web/API/DocumentTimeline) です。
- `none`
  - : アニメーションはタイムラインに関連付けられません。
- `<timeline-name>`
  - : スクロールタイムラインを識別する {{cssxref('custom-ident')}} または文字列で、 {{cssxref('@scroll-timeline')}} ルールで宣言されているものです。 2 つ以上のスクロールタイムラインが同じ名前であった場合、カスケード中で最後に宣言されたものが使用されます。一致するスクロールタイムラインがなければ、アニメーションはタイムラインに関連付けられません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 単純な例

`squareTimeline` という名前のスクロールタイムラインが宣言されており、 `#square` 要素に `animation-timeline: squareTimeline` を用いて適用されています。

#### HTML

```html
<div id="container">
  <div id="square"></div>
</div>
```

#### CSS

```css
#container {
  height: 300px;
}

#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;
}

@scroll-timeline squareTimeline {
  source: selector("#container");
  orientation: "vertical";
  scroll-offsets: 0px, 300px;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

#### 結果

{{EmbedLiveSample("Simple example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [@scroll-timeline アットルール](/ja/docs/Web/CSS/@scroll-timeline)
