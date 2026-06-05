---
title: CSS `view-timeline` プロパティ
short-title: view-timeline
slug: Web/CSS/Reference/Properties/view-timeline
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

**`view-timeline`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、[名前付きビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#名前付きビュー進行タイムライン)の名前、方向、インセット値を定義します。

## 構成要素のプロパティ

このプロパティは、次の CSS プロパティの一括指定です。

- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

## 構文

```css
/* 単一の成分 */
view-timeline: none;
view-timeline: --custom_name_for_timeline;

/* 2 つの成分 */
view-timeline: --custom_name_for_timeline block;
view-timeline: --custom_name_for_timeline y;
view-timeline: none inline;
view-timeline: none x;

/* 3 つの成分 */
view-timeline: --custom_name_for_timeline block auto;
view-timeline: --custom_name_for_timeline block 20% 200px;

/* グローバル値 */
view-timeline: inherit;
view-timeline: initial;
view-timeline: revert;
view-timeline: revert-layer;
view-timeline: unset;
```

### 値

- `<view-timeline-name>`
  - : {{cssxref("view-timeline-name")}} を参照してください。デフォルト値は `none` です。
- `<view-timeline-inset>`
  - : {{cssxref("view-timeline-inset")}} を参照してください。デフォルト値は `auto` です。
- `<view-timeline-axis>`
  - : {{cssxref("view-timeline-axis")}} を参照してください。デフォルト値は `block` です。

### 解説

`view-timeline` 一括指定プロパティは、スクロール可能な要素（_スクローラー_）内の要素（主体要素として呼ばれる）の可視性の変化に基づいて進行する、名前付きビュー進行タイムラインを定義します。 `view-timeline` は主体要素に設定します。要素がこの軸の方向の寸法でそのコンテナーをはみ出さない場合、または、はみ出した部分が隠されていたりクリップされていたりする場合、タイムラインは作成されません。

スクロール領域内での主体要素の可視状態が追跡されます。デフォルトでは、主体要素がスクロール領域の一方の端で初めて表示された時点でタイムラインは `0%` となり、反対側の端に到達した時点で `100%` となります。

`view-timeline` には 3 つの構成値があります。名前付きビュー進行タイムラインの名前、スクロール軸の値、2 つ以下のタイムラインのインセット値です。
値が 1 つだけ宣言された場合、この値は `view-timeline-name` とみなされます。この名前は {{cssxref("animation-timeline")}} 宣言で参照され、タイムラインの進行に合わせてアニメーションする要素を示します。これは主体要素である場合もありますが、そうであるとは限りません。主体要素がスクロール領域を移動する際に異なる要素をアニメーションさせることができます。

`view-timeline` 一括指定プロパティは `<view-timeline-name>`、`<view-timeline-inset>`、`<view-timeline-axis>` の値の組み合わせとしてコンテナー要素に適用することができます。少なくとも 1 つの値を指定しなければなりません。すべての値を指定した場合は、 `<view-timeline-name>` 値の後に `<view-timeline-axis>` 値や `<view-timeline-inset>` 値が続く順序でなければなりません。

`<view-timeline-name>` で指定される名前は、カンマ区切りの {{cssxref("dashed-ident")}} 値（`--` から始める必要がある）のリストで、これによって CSS の標準キーワードとの名前の衝突を避けることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きビュー進行タイムラインの作成

`--subject-reveal` という名前のビュー進行タイムラインは、`view-timeline` プロパティを使用して、`class` が `animation` の主体要素に定義します。
これを同じ要素のタイムラインとして設定するには `animation-timeline: --subject-reveal` を使用します。その結果、主体要素は文書がスクロールされるにつれて上方向に移動するアニメーションが表示されます。

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

`subject` クラスが指定された `<div>` には、`animation` クラスも指定されています。ここで `view-timeline` を設定し、名前付きビュー進行タイムラインを定義しています。また、同じ値で `animation-timeline` の名前を指定して、ビュー進行タイムラインが進むにつれてアニメーションする要素であることを宣言します。

最後に、要素の透過率と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  view-timeline: --subject-reveal block;
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
  @supports not (view-timeline: none) {
    body::before {
      content: "このブラウザーは `view-timeline` プロパティに対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
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
- {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- {{cssxref("animation-timeline/view", "view()")}}
- [ガイド: CSS によるスクロール駆動アニメーションのタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
