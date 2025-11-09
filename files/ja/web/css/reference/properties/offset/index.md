---
title: offset
slug: Web/CSS/Reference/Properties/offset
original_slug: Web/CSS/offset
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`offset`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、要素を定義された経路に沿って動かすのに必要なすべてのプロパティを設定します。
定義されたパスに沿って要素をアニメーションするために必要なすべてのプロパティを設定します。 offset プロパティは、オフセット変換を定義するのに役立ちます。これは、[座標変換](/ja/docs/Web/CSS/Guides/Transforms/Using)であり、
要素内の点 ([offset-anchor](/ja/docs/Web/CSS/Reference/Properties/offset-anchor)) を、パス ([offset-path](/ja/docs/Web/CSS/Reference/Properties/offset-path)) 上のさまざまな点 ([offset-distance](/ja/docs/Web/CSS/Reference/Properties/offset-distance)) にあるオフセット位置 ([offset-position](/ja/docs/Web/CSS/Reference/Properties/offset-position)) に配置し、またオプションで、パスの方向に従うように要素を回転 ([offset-rotate](/ja/docs/Web/CSS/Reference/Properties/offset-rotate)) することもできます。

> [!NOTE]
> 仕様書の早期の版では、このプロパティを `motion` と呼んでいました。

{{InteractiveExample("CSS デモ: offset")}}

```css interactive-example-choice
offset: path("M 20 60 L 120 60 L 70 10 L 20 60") 0% auto 90deg;
```

```css interactive-example-choice
offset: path(
    "M 20 210 L 74 210 L 118 140 \
 L 62 140 L 20 210"
  )
  20% auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="wrapper">
    <div id="example-element"></div>
  </div>
  <button id="playback" type="button">再生</button>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: distance 3000ms infinite normal ease-in-out;
  animation-play-state: paused;
}

#example-element.running {
  animation-play-state: running;
}

.wrapper {
  height: 220px;
  width: 200px;
  background:
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 140" width="200" height="140"><path d="M 0 60 L 100 60 L 50 10 L 0 60" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>')
      no-repeat,
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -140 150 230" width="200" height="230"><path d="M 0 70 L 56 70 L 98 0 L 42 0 L 0 70" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>');
}

@keyframes distance {
  to {
    offset-distance: 100%;
  }
}

#playback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}
```

```js interactive-example
window.addEventListener("load", () => {
  const example = document.getElementById("example-element");
  const button = document.getElementById("playback");

  button.addEventListener("click", () => {
    if (example.classList.contains("running")) {
      example.classList.remove("running");
      button.textContent = "再生";
    } else {
      example.classList.add("running");
      button.textContent = "停止";
    }
  });
});
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

## 構文

```css
/* オフセット位置 */
offset: auto;
offset: 10px 30px;
offset: none;

/* オフセット経路 */
offset: ray(45deg closest-side);
offset: path("M 100 100 L 300 100 L 200 300 z");
offset: url(arc.svg);

/* オフセット経路に距離と回転が加わったもの */
offset: url(circle.svg) 100px;
offset: url(circle.svg) 40%;
offset: url(circle.svg) 30deg;
offset: url(circle.svg) 50px 20deg;

/* オフセットアンカーを含む */
offset: ray(45deg closest-side) / 40px 20px;
offset: url(arc.svg) 2cm / 0.5cm 3cm;
offset: url(arc.svg) 30deg / 50px 100px;

/* グローバル値 */
offset: inherit;
offset: initial;
offset: revert;
offset: revert-layer;
offset: unset;
```

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 経路に沿って要素を動かす

#### HTML

```html
<div id="offsetElement"></div>
```

#### CSS

```css
@keyframes move {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

#offsetElement {
  width: 50px;
  height: 50px;
  background-color: blue;
  offset: path("M 100 100 L 300 100 L 200 300 z") auto;
  animation: move 3s linear infinite;
}
```

#### 結果

{{EmbedLiveSample("Animating_an_element_along_a_path", 350, 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
