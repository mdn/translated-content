---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{CSSRef}}{{SeeCompatTable}}

**`scroll-timeline-name`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロール可能な要素（_スクローラー_）を上下（または左右）にスクロールすることで進行する名前付きスクロール進行タイムラインの名前を定義するために使用します。 `scroll-timeline-name` はタイムラインを提供するスクローラーに設定します。

この名前はその後、 [`animation-timeline`](/ja/docs/Web/CSS/animation-timeline) 宣言で参照され、スクロールアクションを通してアニメーションの進行を使用するコンテナーの要素を示します。

> [!NOTE]
> 要素が軸方向の寸法においてそのコンテナーをオーバーフローしない場合、またはオーバーフローが非表示またはクリップされる場合、タイムラインは作成されません。

{{cssxref("scroll-timeline-axis")}} および `scroll-timeline-name` プロパティは [`scroll-timeline`](/ja/docs/Web/CSS/scroll-timeline) 一括指定プロパティを使用して設定することもできます。

## 構文

```css
scroll-timeline-name: none;
scroll-timeline-name: --custom_name_for_timeline;
```

### 値

`scroll-timeline-name` で許可されている値は次の通りです。

- `none`
  - : このタイムラインには名前がありません。
- `<dashed-ident>`

  - : Aスクロール進行タイムラインの名前を定義する任意のカスタム識別子で、 [`animation-timeline`](/ja/docs/Web/CSS/animation-timeline) プロパティで参照することができます。

    > **メモ:** [`<dashed-ident>`](/ja/docs/Web/CSS/dashed-ident) の値は `--` から始める必要があり、これによって CSS の標準キーワードとの名前の衝突を避けることができます。

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
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

下記の CSS は `animation-timeline` プロパティで指定されたタイムラインに従って回転する正方形を定義しています（このプロパティは上記の `--squareTimeline` タイムラインに設定されています）。

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`animation-timeline`](/ja/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/ja/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/ja/docs/Web/CSS/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
