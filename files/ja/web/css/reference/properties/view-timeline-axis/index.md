---
title: view-timeline-axis
slug: Web/CSS/Reference/Properties/view-timeline-axis
l10n:
  sourceCommit: aefcc1599f9a67bfb4e0e5f48b2175eac61739fe
---

**`view-timeline-axis`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[名前付きビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#名前付きビュー進行タイムライン)で使用されているスクロールの方向を指定します。

## 構文

```css
/* 論理プロパティ値 */
view-timeline-axis: block;
view-timeline-axis: inline;

/* 非論理プロパティ値 */
view-timeline-axis: y;
view-timeline-axis: x;

/* グローバル値 */
view-timeline-axis: inherit;
view-timeline-axis: initial;
view-timeline-axis: revert;
view-timeline-axis: revert-layer;
view-timeline-axis: unset;
```

### 値

- `<axis>`
  - : ビューの進行タイムラインで使用されるスクロール方向を指定します。値は {{cssxref("axis")}} キーワードのいずれか（`block`、`inline`、`x`、`y`）を使用することができます。デフォルト値は `block` です。

## 解説

`view-timeline-axis` プロパティは、要素のボックスに基づいた[名前付きビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#名前付きビュー進行タイムライン)の方向または軸 (`<axis>`) を指定します。

デフォルトでは、CSS の {{cssxref("@keyframes")}} アニメーションは時間ベースのデフォルトタイムラインに沿って進行します。代わりにビュー進行タイムラインを介してアニメーションの進行を設定する場合は、`view-timeline-axis` がタイムラインの進行方向を制御します。

ビュー進行タイムラインでは、タイムラインに沿ったアニメーションの進行は、要素（_主体_）の可視性に基づきます。`view-timeline-axis` プロパティは主体に設定します。

主体はスクロール可能な要素内に含まれている必要があります。スクロール可能な要素が軸方向のサイズでコンテナーからオーバーフローしていない場合、またはオーバーフローが非表示またはクリップされている場合、スクロール進行タイムラインは生成されません。

`view-timeline-axis` は {{cssxref("view-timeline-inset")}} や {{cssxref("view-timeline-name")}} プロパティとともに、{{cssxref("view-timeline")}} 一括指定プロパティの構成要素です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ビュー進行タイムラインの軸を定義

この例では、`--subject-reveal` という名前のビュー進行タイムラインが、"animation" クラスの主体要素の `view-timeline-name` プロパティを使用して定義されています。そして、このタイムラインは、`animation-timeline: --subject-reveal;` を使用する形で、同じ要素のアニメーションに適用されます。

`view-timeline-axis` の効果を示すために、この例ではアニメーションを駆動するために水平方向の（デフォルトではない）スクロールバーを使用しています。

#### HTML

この例の HTML は以下の通りです。

```html
<div class="content">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <p>
    Risus quis varius quam quisque id. Et ligula ullamcorper malesuada proin
    libero nunc consequat interdum varius. Elit ullamcorper dignissim cras
    tincidunt lobortis feugiat vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras.
  </p>

  <p>
    A erat nam at lectus urna duis convallis convallis. Nibh ipsum consequat
    nisl vel pretium lectus.
  </p>

  <p>
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris.
  </p>
</div>
```

#### CSS

CSS では、`subject` 要素を `--subject-reveal` という名前付きのビュー進行タイムラインのソースとして、`view-timeline-name` プロパティを使用して設定します。
スクロール軸は `view-timeline-axis: x;` で設定します。`view-timeline-axis: horizontal;` も同時に記述していますが、これは標準外の古い値である `horizontal` および `vertical` を対応するブラウザー向けに、`x` や `y` の代わりに対応するためです。

`content` の祖先要素は、 `display: flex;` と `flex-flow: column wrap;` を使用してコンテンツをレイアウトすることで、水平方向にオーバーフローするようになっています。

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 50%;
  height: 400px;
  margin-top: 30px;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}

p {
  font-family: "Helvetica", "Arial", sans-serif;
}

p {
  font-size: 1.3rem;
  line-height: 1.4;
}

.animation {
  view-timeline-name: --subject-reveal;
  view-timeline-axis: x;
  view-timeline-axis: horizontal;

  animation: appear 1ms linear both;
  animation-timeline: --subject-reveal;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

```css hidden
@layer no-support {
  body::before {
    display: block;
    text-align: center;
    padding: 1em;
  }
  @supports not (view-timeline-axis: inherit) {
    body::before {
      content: "このブラウザーは `view-timeline-axis` プロパティに対応していません。";
      background-color: wheat;
    }
  }
  @supports (view-timeline-axis: horizontal) {
    body::before {
      content: "このブラウザーは `view-timeline-axis` プロパティの古い値に対応しています。";
      background-color: yellow;
    }
  }
}
```

#### 結果

画面下部の水平バーをスクロールすると、スクロールに合わせて主体要素がアニメーション表示されます。

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- {{cssxref("view()")}}
- [ガイド: スクロール駆動アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
