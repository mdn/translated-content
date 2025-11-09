---
title: view-timeline-axis
slug: Web/CSS/Reference/Properties/view-timeline-axis
original_slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{SeeCompatTable}}

**`view-timeline-axis`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロール可能な要素（_スクローラー_）内の要素（主体要素）の可視性の変化に基づいて進行する名前付きビュー進行タイムラインのアニメーションのタイムラインを提供するために使用される、スクロールバーの方向を指定するために使用します。 `view-timeline-axis` は主体要素に設定します。詳しくは [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を参照してください。

> [!NOTE]
> スクローラーの軸方向の寸法がコンテナーをあふれていない場合、またはあふれた部分が非表示またはクリッピングされている場合、タイムラインは作成されません。

`view-timeline-axis` および {{cssxref("view-timeline-name")}} の各プロパティは、 [`view-timeline`](/ja/docs/Web/CSS/Reference/Properties/view-timeline) 一括指定プロパティを使用して設定することもできます。

## 構文

```css
/* 論理プロパティ値 */
view-timeline-axis: block;
view-timeline-axis: inline;
/* 非論理プロパティ値 */
view-timeline-axis: y;
view-timeline-axis: x;
```

### 値

`view-timeline-axis` に許可されている値は次の通りです。

- `block`
  - : スクローラー要素のブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸です。標準的な英語のような横書きモードでは `y` と同じになり、縦書きモードでは `x` と同じになります。これが既定値です。
- `inline`
  - : スクローラー要素のインライン軸にあるスクロールバーで、行内のテキストの流れと並行する方向の軸です。横書きモードでは `x` と同じになり、縦書きモードでは `y` と同じになります。
- `y`
  - : スクローラー要素の垂直軸上のスクロールバーです。
- `x`
  - : スクローラー要素の水平軸上のスクロールバーです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ビュー進行タイムラインの軸を定義

この例では、`--subjectReveal`という名前のビュー進行タイムラインが、クラスが "animation "である主体要素の `view-timeline-name` プロパティを使用して定義されています。このタイムラインは、同じ要素のアニメーションに適用されます。

`view-timeline-axis` の効果を示すために、この例ではアニメーションを駆動するために水平方向の（既定値ではない）スクロールバーを使用しています。

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

CSS では、 `view-timeline-name` プロパティを用いて、 `--subjectReveal` という名前の進行タイムラインの主体要素を設定します。
スクロール軸は `view-timeline-axis: x;` (Chromium) や `view-timeline-axis: horizontal;` (Firefox) を使用して設定します。これにより、スクロールする祖先要素の水平スクロールバーの位置がアニメーションタイムラインを決定します。

`content` の祖先要素は、 `display: flex;` と `flex-flow: column wrap;` を使用してコンテンツをレイアウトすることで、水平方向にオーバーフローするようになっています。

また、主体要素に `animation-duration` を適用することで、この例が Firefox でうまく動作するようになることにも注意してください。

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
  font-family: Arial, Helvetica, sans-serif;
}

p {
  font-size: 1.3rem;
  line-height: 1.4;
}

.animation {
  view-timeline-name: --subjectReveal;
  /* Chromium supports the new x/y syntax */
  view-timeline-axis: x;
  /* Firefox still supports the old horizontal/vertical syntax */
  view-timeline-axis: horizontal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-timeline: --subjectReveal;
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

下部の水平バーをスクロールすると、主体要素がアニメーションで表示されます。

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`animation-timeline`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/ja/docs/Web/CSS/Reference/Properties/view-timeline), [`view-timeline-name`](/ja/docs/Web/CSS/Reference/Properties/view-timeline-name)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
