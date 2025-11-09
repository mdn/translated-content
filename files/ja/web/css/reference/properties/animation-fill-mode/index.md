---
title: animation-fill-mode
slug: Web/CSS/Reference/Properties/animation-fill-mode
original_slug: Web/CSS/animation-fill-mode
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`animation-fill-mode`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 CSS アニメーションの実行の前後にどう対象にスタイルを適用するかを設定します。

{{InteractiveExample("CSS デモ: animation-fill-mode")}}

```css interactive-example-choice
animation-fill-mode: none;
animation-delay: 1s;
```

```css interactive-example-choice
animation-fill-mode: forwards;
animation-delay: 1s;
```

```css interactive-example-choice
animation-fill-mode: backwards;
animation-delay: 1s;
```

```css interactive-example-choice
animation-fill-mode: both;
animation-delay: 1s;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>アニメーション<span id="playstatus"></span></div>
  <div id="example-element">モードを選択すると開始します！</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#playstatus {
  font-weight: bold;
}

.animating {
  animation: slide 1s ease-in 1;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

```js interactive-example
"use strict";

window.addEventListener("load", () => {
  const el = document.getElementById("example-element");
  const status = document.getElementById("playstatus");

  function update() {
    status.textContent = "待機中";
    el.className = "";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.className = "animating";
      });
    });
  }

  el.addEventListener("animationstart", () => {
    status.textContent = "動作中";
  });

  el.addEventListener("animationend", () => {
    status.textContent = "完了";
  });

  const observer = new MutationObserver(() => {
    update();
  });

  observer.observe(el, {
    attributes: true,
    attributeFilter: ["style"],
  });

  update();
});
```

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} を使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* 複数のアニメーション */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;

/* グローバル値 */
animation-fill-mode: inherit;
animation-fill-mode: initial;
animation-fill-mode: revert;
animation-fill-mode: revert-layer;
animation-fill-mode: unset;
```

### 値

- `none`
  - : アニメーションが実行されていない時は、対象にスタイルを適用しません。要素は適用されているその他の CSS 規則を使用して表示されます。これが既定値です。
- `forwards`
  - : 対象は実行の最後の[キーフレーム](/ja/docs/Web/CSS/Reference/At-rules/@keyframes)で設定された計算値を保持します。最後のキーフレームは {{cssxref("animation-direction")}} と {{cssxref("animation-iteration-count")}} の値によって変わります。

    | `animation-direction` | `animation-iteration-count` | 最後のキーフレーム |
    | --------------------- | --------------------------- | ------------------ |
    | `normal`              | 偶数または奇数              | `100%` または `to` |
    | `reverse`             | 偶数または奇数              | `0%` または `from` |
    | `alternate`           | 偶数                        | `0%` または `from` |
    | `alternate`           | 奇数                        | `100%` または `to` |
    | `alternate-reverse`   | 偶数                        | `100%` または `to` |
    | `alternate-reverse`   | 奇数                        | `0%` または `from` |

    アニメーションするプロパティは、設定された [`will-change`](/ja/docs/Web/CSS/Reference/Properties/will-change) プロパティの値に含められたかのように動作します。アニメーション中に新しい重ね合わせコンテキストが作成された場合、アニメーションが完了した後も、対象要素は重ね合わせコンテキストを保持します。

- `backwards`
  - : アニメーションは最初の適切な[キーフレーム](/ja/docs/Web/CSS/Reference/At-rules/@keyframes)で定義された値を対象に適用されると同時に適用し、 {{cssxref("animation-delay")}} の期間これを保持します。最初の適切なキーフレームは、 {{cssxref("animation-direction")}} の値によって変わります。

    | `animation-direction`                | 最初の適切なキーフレーム |
    | ------------------------------------ | ------------------------ |
    | `normal` または `alternate`          | `0%` または `from`       |
    | `reverse` または `alternate-reverse` | `100%` または `to`       |

- `both`
  - : アニメーションは forwards と backwards の両方の既定に従います。よって、アニメーションの設定は実行前と実行後の両方に適用されます。

> [!NOTE]
> `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/Guides/Animations/Using#複数のアニメーションプロパティ値の設定) を参照してください。

> [!NOTE]
> `animation-fill-mode` は [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成するときに、通常の時間ベースのアニメーションと同じ効果があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### fill モードの設定

以下の例で `animation-fill-mode` の効果を見ることができます。これは無限に繰り返されるアニメーションが、元の状態に戻るのではなく最後の状態を維持するようにすることができます（既定の状態）。

#### HTML

```html
<p>マウスを灰色のボックスの上に乗せてください！</p>
<div class="demo">
  <div class="grows-and-stays">これは大きくなって大きいままになります。</div>
  <div class="grows">これは大きくなるだけです。</div>
</div>
```

#### CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
}

@keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}

.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
}

.demo:hover .grows-and-stays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

### 結果

{{EmbedLiveSample('Setting fill mode',700,300)}}

これ以外の例は [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- JavaScript の {{domxref("AnimationEvent")}} API
- その他のアニメーション関連プロパティ: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
