---
title: scroll-timeline
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`scroll-timeline`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、[名前付きスクロール進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#名前付きスクロール進行タイムライン) を定義します。これは、スクロール可能な要素（_スクローラー_）を上下（または左右）にスクロールすることで進行します。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("scroll-timeline-name")}}
- {{cssxref("scroll-timeline-axis")}}

## 構文

```css
/* 値 1 つ */
scroll-timeline: none;
scroll-timeline: --custom_name_for_timeline;

/* 値 2 つ */
scroll-timeline: --custom_name_for_timeline block;
scroll-timeline: --custom_name_for_timeline x;
scroll-timeline: none inline;
scroll-timeline: none y;

/* グローバル値 */
scroll-timeline: inherit;
scroll-timeline: initial;
scroll-timeline: revert;
scroll-timeline: revert-layer;
scroll-timeline: unset;
```

### 値

- {{cssxref("scroll-timeline-name", "&lt;scroll-timeline-name>")}}
  - : {{cssxref("dashed-ident")}} またはキーワード `none` です。

- {{cssxref("scroll-timeline-axis", "&lt;scroll-timeline-axis>")}}
  - : {{cssxref("axis")}} キーワードです。デフォルト値は `block` です。

## 解説

`scroll-timeline` 一括指定プロパティは、`scroll-timeline-name` と `scroll-timeline-axis` のプロパティの値の組み合わせとして、コンテナー要素に適用することができます。これは、タイムラインを提供するスクローラーに設定します。コンテナーにスクロールするためのオーバーフローがない場合、またはオーバーフローが非表示またはクリップされている場合、タイムラインは作成されません。

{{cssxref("scroll-timeline-name")}} の値は、`none` に設定されていない場合、{{cssxref("dashed-ident")}} でなければならず、すなわち `--` で始まる必要があります。このことは、名前が標準の CSS キーワードと衝突するのを避けるためにも役立ちます。この名前は、要素の {{cssxref("animation-timeline")}} プロパティの値として使用することができます。これにより、その[アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines)を定義するスクロールコンテナー要素を指定し、スクロールに応じてアニメーションの進行を駆動します。

オプションのスクロール軸の値 {{cssxref("axis")}} は {{cssxref("scroll-timeline-axis")}} を定義し、省略した場合はデフォルトで `block` となります。名前と軸の両方が指定される場合、順序は `<scroll-timeline-name>` の値に続いて `<axis>` の値でなければなりません。`<axis>` が最初に記述されている場合、宣言は不正な状態となり無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きスクロール進行タイムラインのアニメーションの作成

この例では、`--square-timeline` という名前のスクロールタイムラインを `#container` の要素に `scroll-timeline-name` プロパティを使用して定義しています。
これを `#square` 要素のアニメーションに適用するには、 `animation-timeline: --square-timeline` を使用します。

#### HTML

コンテナー内に 2 つの子要素である `<div>` 要素を設置しています。

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

コンテナーの高さを`300px`に設定し、垂直方向にスクロールできるようにします。

`scroll-timeline` プロパティを使用して、コンテナーを `--square-timeline` という名前付きのスクロールタイムラインのソースとして定義し、デフォルトの垂直スクロールバーをタイムラインコントローラーとして明示的に設定します。

```css
#container {
  height: 300px;
  overflow-y: scroll;

  scroll-timeline: --square-timeline y;
  /* Firefox は標準外の vertical/horizontal 構文に対応 */
  scroll-timeline: --square-timeline vertical;

  position: relative;
}
```

正方形の基本スタイルを提供します。`rotateAnimation` に {{cssxref("animation-name")}} プロパティを使用して適用します。 デフォルトでは、時間ベースの文書タイムラインが使用されます。`animation-timeline` プロパティを以上で名前付きした `--square-timeline` タイムラインに設定することで、コンテナーのスクロールに応じて進行するスクロールベースのタイムラインに従って正方形が回転するように設定します。

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 0;

  animation: rotateAnimation 1ms linear;
  animation-timeline: --square-timeline;
}
```

親要素よりも幅の広いストレッチャーを定義することで、コンテナーを確実にオーバーフローするようにします。
コンテナーからオーバーフローするコンテンツがなければ、スクロールバーは生成されず、したがってスクロールタイムラインもできません。同時に、適用された要素を 1 回転させる CSS キーフレームアニメーションも定義します。

```css
#stretcher {
  height: 600px;
  background: #dedede;
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

```css hidden
@layer no-support {
  @supports not (scroll-timeline: --square-timeline) {
    body::before {
      content: "このブラウザーは `scroll-timeline` プロパティに対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### 結果

垂直バーをスクロールすると、正方形がアニメーションします。

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

スクロールすると正方形がアニメーションします。`scroll-timeline` を使用した場合、アニメーションの再生時間は `animation-duration` プロパティの値ではなく、スクロール速度によって決まります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}
- [ガイド: スクロール駆動アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
