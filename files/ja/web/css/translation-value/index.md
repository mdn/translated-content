---
title: <translation-value>
slug: Web/CSS/translation-value
tags:
  - CSS
  - CSS Data Type
  - CSS Transforms
  - Data Type
  - Reference
browser-compat: css.types.transform-function
translation_of: Web/CSS/translation-value
---
{{CSSRef}}

**`<translation-value>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、特定の座標変換関数 ({{cssxref("transform")}})、たとえば [`translate()`](/ja/docs/Web/CSS/transform-function/translate()), [`translateX()`](/ja/docs/Web/CSS/transform-function/translateX()), [`translateY()`](/ja/docs/Web/CSS/transform-function/translateY()), [`translate3d()`](/ja/docs/Web/CSS/transform-function/translate3d()) の引数で使用されます。

## 構文

`<translation-value>` データ型は {{Cssxref("&lt;length&gt;")}} 値または {{Cssxref("&lt;percentage&gt;")}} 値のどちらかになります。

## 例

### 座標変換関数の比較

次の例では、DOM 要素と座標変換で作成された 3D 立方体と、立方体を座標変換するための様々な座標変換関数を選択するための選択メニューが用意されており、様々な種類の効果を比較することができます。

選択すると、変換が立方体に適用され、2 秒後に立方体は開始時の状態に戻ります。すべての変換の効果を見ることができるように、`transform3d()` を使って立方体の開始状態をわずかに回転させています。

#### HTML

```html
<main>
  <section id="example-element">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
  </section>

  <div class="select-form">
    <label>座標変換関数を選択してください</label>
    <select>
      <option selected>座標変換関数を選択</option>
      <option>translate(100px, 100px)</option>
      <option>translateX(100px)</option>
      <option>translateY(100px)</option>
      <option>translateZ(100px)</option>
      <option>translate3d(50px, 50px, 50px)</option>
    </select>
  </div>
</main>
```

#### CSS

```css
main {
  width: 400px;
  height: 200px;
  padding: 50px;
  background-image: linear-gradient(135deg, white, cyan, white);
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1.5s;
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
    background: rgba(90,90,90,.7);
    transform: translateZ(50px);
}

.back {
    background: rgba(0,210,0,.7);
    transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210,0,0,.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0,0,210,.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210,210,0,.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210,0,210,.7);
  transform: rotateX(-90deg) translateZ(50px);
}

.select-form {
  margin-top: 50px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector('select');
const example = document.querySelector('#example-element');

selectElem.addEventListener('change', () => {
  if(selectElem.value === 'Choose a function') {
    return;
  } else {
    example.style.transform = `rotate3d(1, 1, 1, 30deg) ${selectElem.value}`;
    setTimeout(function() {
      example.style.transform = 'rotate3d(1, 1, 1, 30deg)';
    }, 2000)
  }
})
```

#### 結果

{{EmbedLiveSample('Translation_function_comparison', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
