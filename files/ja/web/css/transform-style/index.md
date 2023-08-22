---
title: transform-style
slug: Web/CSS/transform-style
---

{{CSSRef}}

**`transform-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の子要素を 3D 空間に配置するのか、平面化して要素の平面に配置するのかを設定します。

{{EmbedInteractiveExample("pages/css/transform-style.html")}}

平面化した場合、子要素は自身の 3D 空間に存在しなくなります。

このプロパティは継承されないため、葉要素以外のすべての子孫要素で設定する必要があります。

## 構文

```css
/* キーワード値 */
transform-style: flat;
transform-style: preserve-3d;

/* グローバル値 */
transform-style: inherit;
transform-style: initial;
transform-style: revert;
transform-style: unset;
```

### 値

- `flat`
  - : 要素の子要素を要素自身の平面上に配置することを示します。
- `preserve-3d`
  - : 要素の子要素を 3D 空間に配置することを示します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Transform_style_demonstration">座標変換スタイルのデモ</h3>

この例では、座標変換を使用して 3D の立方体を作成しています。立方体の面の親コンテナーには、既定で `transform-style: preserve-3d` が設定されているため、3D 空間で座標変換され、意図したとおりに表示されます。

また、これと `transform-style: flat` の間で切り替えられるチェックボックスも用意しました。この別な状態では、立方体の面はすべて親の平面上に平坦化され、使用しているブラウザーによっては全く表示されない場合があります。

#### HTML

```html
<section id="example-element">
  <div class="face front">1</div>
  <div class="face back">2</div>
  <div class="face right">3</div>
  <div class="face left">4</div>
  <div class="face top">5</div>
  <div class="face bottom">6</div>
</section>

<div class="checkbox">
  <label for="preserve"><code>preserve-3d</code></label>
  <input type="checkbox" id="preserve" checked />
</div>
```

#### CSS

```css
#example-element {
  margin: 50px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 1, 30deg);
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: #fff;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

#### JavaScript

```js
const cube = document.getElementById("example-element");
const checkbox = document.getElementById("preserve");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    cube.style.transformStyle = "preserve-3d";
  } else {
    cube.style.transformStyle = "flat";
  }
});
```

#### 結果

{{EmbedLiveSample('Transform_style_demonstration', '100%', 260)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
