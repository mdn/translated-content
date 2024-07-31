---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{CSSRef}}{{SeeCompatTable}}

**`scroll-timeline`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、スクロール可能な要素（_スクローラー_）を上下（または左右）にスクロールすることで進行する名前付きスクロール進行タイムラインを定義するために使用します。 `scroll-timeline` はタイムラインを提供するスクローラーに設定します。スクロール開始位置は 0% の進行を表し、スクロール終了位置は 100% の進行を表します。 0% の位置と 100% の位置が一致する場合（つまり、スクロールコンテナーがスクロールするオーバーフローがない場合）、タイムラインは非アクティブになります。

`scroll-timeline` には 2 つのコンテナー値、名前付きスクロール進行タイムラインの名前と、オプションのスクロール軸の値を指定することができます。

この名前は、[`animation-timeline`](/ja/docs/Web/CSS/animation-timeline) 宣言で参照され、スクロールアクションを通してアニメーションの進行を使用するコンテナーの要素を示します。

> [!NOTE]
> スクローラーが軸方向の寸法でコンテナーをオーバーフローしない場合、またはオーバーフローが非表示またはクリッピングされている場合、タイムラインは作成されません。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`scroll-timeline-name`](/ja/docs/Web/CSS/scroll-timeline-name)
- [`scroll-timeline-axis`](/ja/docs/Web/CSS/scroll-timeline-axis)

## 構文

```css
/* 2 つの値: それぞれ scroll-timeline-name と scroll-timeline-axis が 1 つずつ */
scroll-timeline: --custom_name_for_timeline block;
scroll-timeline: --custom_name_for_timeline inline;
scroll-timeline: --custom_name_for_timeline y;
scroll-timeline: --custom_name_for_timeline x;
scroll-timeline: none block;
scroll-timeline: none inline;
scroll-timeline: none y;
scroll-timeline: none x;

/* 1 つの値: scroll-timeline-name */
scroll-timeline: none;
scroll-timeline: --custom_name_for_timeline;
```

`scroll-timeline` 一括指定プロパティは `<scroll-timeline-name>` と `<scroll-timeline-axis>` の値の組み合わせとしてコンテナー要素に適用することができます。少なくともどちらか一方の値を指定しなければなりません。両方の値を指定する場合は、`<scroll-timeline-name>` 値の後に `<scroll-timeline-axis>` 値が続くようにしなければなりません。

> **メモ:** `<scroll-timeline-name>` は [`<dashed-ident>`](/ja/docs/Web/CSS/dashed-ident) 値でなければなりません。すなわち、 `--` で始めなければなりません。これは標準 CSS キーワードとの名前の衝突を避けるのに役立ちます。

### 値

- `<scroll-timeline-name>`

  - : [`scroll-timeline-name`](/ja/docs/Web/CSS/scroll-timeline-name) を参照してください。

- `<scroll-timeline-axis>`
  - : [`scroll-timeline-axis`](/ja/docs/Web/CSS/scroll-timeline-axis) を参照してください。既定値は `block` です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きスクロール進行タイムラインのアニメーションの作成

この例では、`--squareTimeline` という名前のスクロールタイムラインを `container` という ID の要素に `scroll-timeline-name` プロパティを使用して定義しています。
これを `#square` 要素のアニメーションに適用するには、 `animation-timeline: --squareTimeline` を使用します。

#### HTML

この例の HTML は次の通りです。

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

コンテナー用の CSS では、`--squareTimeline` という名前のスクロールタイムラインのソースとして、`scroll-timeline-name` プロパティを使用して設定します。既定で縦軸を使用するので、[スクロールバー軸](/ja/docs/Web/CSS/scroll-timeline-axis)は定義しません。

コンテナーの高さは `300px` に設定し、コンテナーがはみ出した場合は垂直スクロールバーを作成するように設定します（下記の `stretcher` 要素の CSS `height` ルールはコンテンツをコンテナーからはみ出させます）。

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: --squareTimeline y;
  /* Firefox supports the older "vertical" syntax */
  scroll-timeline: --squareTimeline vertical;
  position: relative;
}
```

下記の CSS は `animation-timeline` プロパティで指定されたタイムラインに従って回転する正方形を定義しています（このプロパティは上記の `--squareTimeline` タイムラインに設定されています）。

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
  animation-timeline: --squareTimeline;
  position: absolute;
  bottom: 0;
}

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

`stretcher` の CSS ルールでは、ブロックの高さを `600px` に設定します。これにより、コンテナー要素をはみ出すコンテンツが作成され、スクロールバーが作成されます。
この要素がなければ、コンテナーからコンテンツがはみ出さないので、スクロールバーが存在せず、したがってアニメーションタイムラインに関連付けるスクロールタイムラインも存在しません。

#### 結果

垂直バーをスクロールすると、正方形がアニメーションします。

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

正方形はスクロールに合わせてアニメーションし、 `scroll-timeline` を使用した場合のアニメーション時間はスクロール速度に依存します（それにもかかわらず、 `animation-duration` プロパティが定義されているので、スクロール駆動アニメーションを確認することができます）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`animation-timeline`](/ja/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/ja/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/ja/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
