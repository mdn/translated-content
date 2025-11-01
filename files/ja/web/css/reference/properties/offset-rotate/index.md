---
title: offset-rotate
slug: Web/CSS/Reference/Properties/offset-rotate
original_slug: Web/CSS/offset-rotate
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`offset-rotate`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素が {{cssxref("offset-path")}} に沿って配置された場合の向き/方向を定義します。

{{InteractiveExample("CSS デモ: offset-rotate")}}

```css interactive-example-choice
offset-rotate: auto;
```

```css interactive-example-choice
offset-rotate: 90deg;
```

```css interactive-example-choice
offset-rotate: auto 90deg;
```

```css interactive-example-choice
offset-rotate: reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
  <button id="playback" type="button">再生</button>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  offset-path: path("M-70,-40 C-70,70 70,70 70,-40");
  animation: distance 8000ms infinite linear;
  animation-play-state: paused;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
}

#example-element.running {
  animation-play-state: running;
}

#playback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}

@keyframes distance {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

/* 要素が従うパスを参照する画像を提供する */
#default-example {
  position: relative;
  background-position: calc(50% - 12px) calc(50% + 14px);
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-75 -45 150 140" width="150" height="140"><path d="M-70,-40 C-70,70 70,70 70,-40" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>');
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

> [!NOTE]
> 初期のころの仕様書では、このプロパティを `motion-rotation` と呼んでいました。

## 構文

```css
/* パスの方向に従い、任意で角度を追加 */
offset-rotate: auto;
offset-rotate: auto 45deg;

/* パスの方向に従うが、 auto とは逆の方向を向く */
offset-rotate: reverse;

/* パスの位置に関係なく、決められた回転を維持する */
offset-rotate: 90deg;
offset-rotate: 0.5turn;

/* グローバル値 */
offset-rotate: inherit;
offset-rotate: initial;
offset-rotate: revert;
offset-rotate: revert-layer;
offset-rotate: unset;
```

- `auto`
  - : 要素は正方向の X 軸から見た {{cssxref("offset-path")}} 方向の角度で回転します。これが既定値です。
- {{cssxref("&lt;angle&gt;")}}
  - : 要素は指定された回転角によって、時計方向に固定値で回転変換されます。
- `auto <angle>`
  - : `auto` に {{cssxref("&lt;angle&gt;")}} が続いた場合、その角度が `auto` の計算値に加算されます。
- `reverse`
  - : 要素は `auto` と同様に回転しますが、反対方向を向きます。 `auto 180deg` の値を指定したのと同等です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### オフセットパスに沿って要素の方向を設定

#### HTML

```html
<div></div>
<div></div>
<div></div>
```

#### CSS

```css
div {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  margin: 20px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;

  offset-path: path("M20,20 C20,50 180,-10 180,20");
}
div:nth-child(1) {
  offset-rotate: auto;
}
div:nth-child(2) {
  offset-rotate: auto 90deg;
}
div:nth-child(3) {
  offset-rotate: 30deg;
}

@keyframes move {
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{EmbedLiveSample('オフセットパスに沿って要素の方向を設定', '100%', '200')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
