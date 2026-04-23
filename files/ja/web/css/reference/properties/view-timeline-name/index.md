---
title: view-timeline-name
slug: Web/CSS/Reference/Properties/view-timeline-name
l10n:
  sourceCommit: 5310a5bff0e1f3e2dfafa44bc2aadbb39e1c4673
---

**`view-timeline-name`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素に関連付けられた 1 つ以上の[名前付きビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) の名前を指定します。

## 構文

```css
/* キーワード値 */
view-timeline-name: none;

/* カスタム識別子 */
view-timeline-name: --custom_name_for_timeline;

/* 複数の識別子 */
view-timeline-name: --first_timeline_name, --another_timeline_name;

/* グローバル値 */
view-timeline-name: inherit;
view-timeline-name: initial;
view-timeline-name: revert;
view-timeline-name: revert-layer;
view-timeline-name: unset;
```

### 値

- `none`
  - : タイムラインに名前がないことを示します。これがデフォルト値です。
- `<dashed-ident>`
  - : {{cssxref("dashed-ident")}} カスタム名識別子のカンマ区切りリストを指定します。すべての `<dashed-ident>` 値は `--` で始まる必要があります。これにより、標準 CSS キーワードとの名前衝突を避けることができます。

## 解説

`view-timeline-name` プロパティは、[ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)の名前を設定するために使用するプロパティです。ビュー進行タイムラインは、スクロール可能な要素（_スクローラー_）内の要素（_主体_）の可視性の変化に基づいて進行します。`view-timeline-name` プロパティは主体に設定されます。また、`view-timeline-name` を設定するのに {{cssxref("view-timeline")}} 一括指定プロパティを使用することもできます。

主体の名前付きスクローラー要素が、[軸方向のサイズ](/ja/docs/Web/CSS/Reference/Properties/view-timeline-axis)においてコンテナーからはみ出さない場合、またはオーバーフローが非表示またはクリップされている場合、スクロール進行タイムラインは生成されません。

作成された `<dashed-ident>` の名前の値は、{{cssxref("animation-timeline")}} 宣言内で参照でき、タイムラインの進行に伴いアニメーション対象である要素を示すために使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きビュー進行タイムラインの作成

`--subject-reveal` という名前のビュー進行タイムラインは、 `view-timeline-name` プロパティを使用して、`class` が `animation` の主体要素に定義します。
これを同じ要素のタイムラインとして設定するには `animation-timeline: --subject-reveal;` を使用します。その結果、主体要素は文書がスクロールされるにつれて上方向に移動するアニメーションが表示されます。

#### HTML

この例の HTML は以下の通りです。

```html
<div class="content">
  <h1>コンテンツ</h1>

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
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

`subject` クラスのついた `<div>` には、`animation` クラスも指定されています。ここで `view-timeline-name` を設定し、名前付きビュー進行タイムラインを定義しています。また、同じ値で `animation-timeline` の名前を指定して、ビュー進行タイムラインが進むにつれてアニメーションする要素であることを宣言します。

最後に、要素の透過率と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  view-timeline-name: --subject-reveal;
  animation-timeline: --subject-reveal;

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
    opacity: 1;
    transform: scaleX(1);
  }
}
```

```css hidden
@layer no-support {
  @supports not (view-timeline-name: none) {
    body::before {
      content: "このブラウザーは `view-timeline-name` プロパティに対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### 結果

スクロールすると、主体要素がアニメーションします。

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline")}}
- [スクロール駆動アニメーションのタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
