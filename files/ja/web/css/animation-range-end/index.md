---
title: animation-range-end
slug: Web/CSS/animation-range-end
l10n:
  sourceCommit: c9c9df07f47c9c3a3a9c5d44cebe3f795326af7b
---

{{CSSRef}}{{SeeCompatTable}}

**`animation-range-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、プロパティは、タイムラインに沿ったアニメーションの適用範囲の末尾、つまり、タイムラインに沿ったアニメーションの末尾を設定するために使用します。

`animation-range-end` および {{cssxref("animation-range-start")}} のプロパティは、 [`animation-range`](/ja/docs/Web/CSS/animation-range) 一括指定プロパティを使用して設定することもできます。

> **メモ:** {{cssxref("animation-range-end")}} はリセット専用の値として {{cssxref("animation")}} の一括指定に含まれています。これは、`animation` を記載することで、前回宣言した `animation-range-end` の値が `normal` にリセットされることを意味していますが、`animation` によって固有の値を設定することはできません。 [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)を作成する際には、 `animation` の一括指定を宣言した後に `animation-range-end` を宣言しないと、その効果を得ることができません。

## 構文

```css
/* キーワードまたは長さのパーセント値 */
animation-range-end: normal;
animation-range-end: 80%;
animation-range-end: 700px;

/* 名前付きタイムライン範囲の値 */
animation-range-end: cover;
animation-range-end: contain;
animation-range-end: cover 80%;
animation-range-end: contain 700px;
```

### 値

`animation-range-end` に指定できる値は `normal`、{{cssxref("length-percentage")}}、`<timeline-range-name>`、`<timeline-range-name>` のいずれかとそれに続く `<length-percentage>` です。利用できる値の詳細については [`animation-range`](/ja/docs/Web/CSS/animation-range) を参照してください。

また、 [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) も調べてみてください。異なる値が意味していることを、簡単なビジュアル形式で正確に表示させることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 範囲の終わりを指定した進行タイムラインの作成

`view-timeline` プロパティを `class` が `animation` の主体要素に用いて `--subjectReveal` という名前のビュー進行タイムラインを定義します。
これを同じ要素のタイムラインとして設定するには `animation-timeline: --subjectReveal;` を使用します。その結果、主体要素は文書をスクロールしながら上方向に移動してアニメーションします。

アニメーションを予定より早く終わらせるために、 `animation-range-end` 宣言も設定します。

#### HTML

この例の HTML は下記の通りです。

```html
<div class="content">
  <h1>Content</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>
</div>
```

#### CSS

`subject` 要素とそのコンテンツを含む `content` 要素は最小限のスタイル設定で、テキストコンテンツには基本的なフォント設定がされています。

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

`subject` というクラスを持つ `<div>` には `animation` というクラスも指定されています。ここには `view-timeline` が設定されており、ビューの進行タイムラインを定義しています。また、同じ値で `animation-timeline` という名前も指定され、ビュー進行タイムラインが進むにつれてアニメーションする要素であることを宣言します。また、アニメーションが予想よりも早く終わるように `animation-range-end` 宣言も与えます。

最後に、要素の透過率と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-range-end: contain 50%;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
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

#### 結果

スクロールすると、主体要素のアニメーションを確認することができます。

{{EmbedLiveSample("Creating a named view progress timeline with range end", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`animation-timeline`](/ja/docs/Web/CSS/animation-timeline)
- [`animation-range`](/ja/docs/Web/CSS/animation-range), [`animation-range-start`](/ja/docs/Web/CSS/animation-range-start)
- [`scroll-timeline`](/ja/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/ja/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/ja/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/ja/docs/Web/CSS/view-timeline-inset)
- JavaScript の同等のもの: `rangeEnd` （{{domxref("Element.animate()")}} 呼び出しで利用可能）
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
