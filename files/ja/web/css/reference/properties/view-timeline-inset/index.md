---
title: view-timeline-inset
slug: Web/CSS/Reference/Properties/view-timeline-inset
original_slug: Web/CSS/view-timeline-inset
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{SeeCompatTable}}

**`view-timeline-inset`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ビュー進行タイムラインのアニメーションの主体要素が可視であるとみなされるスクロールポート（詳細は{{glossary("Scroll container", "スクロールコンテナー")}}を参照）の位置の調整を表す 1 つまたは 2 つの値を指定するために使用します。別の言い方をすると、これはタイムラインの位置をオフセットする開始値や終了値のインセット（またはアウトセット）を指定することができます。

これは {{cssxref("animation-range")}} とその個別指定プロパティと組み合わせたり、その代わりに使用したりすることができ、タイムラインに沿ってアニメーションの適用範囲を設定することができます。
詳細は [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を参照してください。

## 構文

```css
/* Single value */
view-timeline-inset: auto;
view-timeline-inset: 200px;
view-timeline-inset: 20%;

/* Two values */
view-timeline-inset: 20% auto;
view-timeline-inset: auto 200px;
view-timeline-inset: 20% 200px;
```

### 値

`view-timeline-inset` に指定できる値は以下の通りです。

- `auto`
  - : 設定されている場合、スクロールポートの端に対応する {{cssxref("scroll-padding")}} （または同等の個別指定値）が使用されます。これが設定されていない場合（または `auto` に設定されている場合）、通常は 0 が使用されますが、ユーザーエージェントによっては調査結果を使用して異なる既定値を使用する場合もあります。
- {{cssxref("length-percentage")}}
  - : 有効な `<length-percentage>` 値であれば、インセット/アウトセットの値として受け入れられます。
    - 値が正の値の場合、アニメーションの開始/終了位置は、指定した長さまたはパーセント分だけスクロールポートの内側に移動されます。
    - 値が負の場合、アニメーションの開始/終了位置は、指定した長さまたはパーセントだけスクロールポートの外に移動します。つまり、スクロールポートに現れる前にアニメーションを開始したり、スクロールポートを出た後にアニメーションを終了したりします。

2 つの値が指定された場合、最初の値は関連する軸の開始インセット/アウトセット（アニメーションが始まる場所）を表し、 2 つ目の値は終了インセット/アウトセット（アニメーションが終わる場所）を表します。値が 1 つだけ指定された場合、開始と終了のインセット/アウトセットは両方とも同じ値に設定されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インセットを含む名前付きビュー進行タイムラインの作成

`--subjectReveal` という名前のビュー進行タイムラインを `view-timeline` プロパティを用いて、 `class` が `animation` の主体要素に定義します。
これを同じ要素のタイムラインとして設定するには `animation-timeline: --subjectReveal;` を使用します。その結果、主体要素は文書化されたものをスクロールしながら上方向に移動してアニメーションします。

`view-timeline-inset` 宣言も設定することで、アニメーションを予想より遅く始め、早く終わらせることができます。

#### HTML

この例の HTML は以下の通りです。

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

`subject` 要素とそれを含む `content` 要素には最小限のスタイルを設定し、テキストコンテンツには基本的なフォントを設定します。

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

`subject` クラスのついた `<div>` には、`animation` クラスも指定されています。ここで `view-timeline` を設定し、名前付きビュー進行タイムラインを定義しています。また、アニメーションが予想よりも遅く始まり、早く完了するように `view-timeline-inset` 宣言も指定します。また、同じ値で `animation-timeline` の名前を指定して、ビュー進行タイムラインが進むにつれてアニメーションする要素であることを宣言します。

最後に、要素の透過率と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  view-timeline: --subjectReveal block;
  view-timeline-inset: 70% -100px;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1,
    transform: scaleX(1);
  }
}
```

#### 結果

スクロールすると、主体要素がアニメーションします。

{{EmbedLiveSample("Creating a named view progress timeline with inset", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`animation-timeline`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/ja/docs/Web/CSS/Reference/Properties/view-timeline), [`view-timeline-axis`](/ja/docs/Web/CSS/Reference/Properties/view-timeline-axis), [`view-timeline-name`](/ja/docs/Web/CSS/Reference/Properties/view-timeline-name)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
