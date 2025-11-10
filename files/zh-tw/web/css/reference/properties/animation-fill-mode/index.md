---
title: animation-fill-mode
slug: Web/CSS/Reference/Properties/animation-fill-mode
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`animation-fill-mode`** [CSS](/zh-TW/docs/Web/CSS) 屬性用於設定 CSS 動畫在執行前後，如何將樣式應用至其目標。

{{InteractiveExample("CSS Demo: animation-fill-mode")}}

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
  <div>動畫<span id="play-status"></span></div>
  <div id="example-element">選擇一個模式以開始！</div>
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

#play-status {
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
  const status = document.getElementById("play-status");

  function update() {
    status.textContent = "延遲中";
    el.className = "";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.className = "animating";
      });
    });
  }

  el.addEventListener("animationstart", () => {
    status.textContent = "播放中";
  });

  el.addEventListener("animationend", () => {
    status.textContent = "已結束";
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

通常使用簡寫屬性 {{cssxref("animation")}} 來一次設定所有動畫屬性會很方便。

## 語法

```css
/* 單一動畫 */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* 多個動畫 */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;

/* 全域值 */
animation-fill-mode: inherit;
animation-fill-mode: initial;
animation-fill-mode: revert;
animation-fill-mode: revert-layer;
animation-fill-mode: unset;
```

### 值

- `none`
  - : 動畫在未執行時，不會對目標應用任何樣式。元素將改為使用任何其他應用於其上的 CSS 規則來顯示。這是預設值。
- `forwards`
  - : 目標將保留執行期間遇到的最後一個[關鍵格](/zh-TW/docs/Web/CSS/Reference/At-rules/@keyframes)所設定的計算值。最後一個關鍵格取決於 {{cssxref("animation-direction")}} 和 {{cssxref("animation-iteration-count")}} 的值：

    | `animation-direction` | `animation-iteration-count` | 遇到的最後一個關鍵格 |
    | --------------------- | --------------------------- | -------------------- |
    | `normal`              | 偶數或奇數                  | `100%` 或 `to`       |
    | `reverse`             | 偶數或奇數                  | `0%` 或 `from`       |
    | `alternate`           | 偶數                        | `0%` 或 `from`       |
    | `alternate`           | 奇數                        | `100%` 或 `to`       |
    | `alternate-reverse`   | 偶數                        | `100%` 或 `to`       |
    | `alternate-reverse`   | 奇數                        | `0%` 或 `from`       |

    動畫屬性的行為就像被包含在一個設定好的 [`will-change`](/zh-TW/docs/Web/CSS/Reference/Properties/will-change) 屬性值中。如果在動畫期間建立了新的堆疊上下文，目標元素在動畫結束後會保留該堆疊上下文。

- `backwards`
  - : 動畫一旦應用到目標上，就會立即套用第一個相關[關鍵格](/zh-TW/docs/Web/CSS/Reference/At-rules/@keyframes)中定義的值，並在 {{cssxref("animation-delay")}} 期間保留此狀態。第一個相關的關鍵格取決於 {{cssxref("animation-direction")}} 的值：

    | `animation-direction`            | 第一個相關的關鍵格 |
    | -------------------------------- | ------------------ |
    | `normal` 或 `alternate`          | `0%` 或 `from`     |
    | `reverse` 或 `alternate-reverse` | `100%` 或 `to`     |

- `both`
  - : 動畫將同時遵循 `forwards` 和 `backwards` 的規則，從而將動畫屬性在兩個方向上延伸。

> [!NOTE]
> 當你在一個 `animation-*` 屬性上指定多個以逗號分隔的值時，它們會按照 {{cssxref("animation-name")}} 出現的順序應用於動畫。關於動畫數量與 `animation-*` 屬性值數量不匹配的情況，請參見[設定多個動畫屬性值](/zh-TW/docs/Web/CSS/Guides/Animations/Using#設定多個動畫屬性值)。

> [!NOTE]
> 在建立 [CSS 滾動驅動動畫](/zh-TW/docs/Web/CSS/Guides/Scroll-driven_animations)時，`animation-fill-mode` 的效果與常規的基於時間的動畫相同。

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

### 設定填充模式

你可以在下面的範例中看到 `animation-fill-mode` 的效果。它展示了如何讓動畫保持在最終狀態，而不是恢復到原始狀態（這是預設行為）。

#### HTML

```html
<p>將你的滑鼠移到灰色方塊上！</p>
<div class="demo">
  <div class="grows-and-stays">這個會變大並保持大小。</div>
  <div class="grows">這個只會變大。</div>
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

#### 結果

{{EmbedLiveSample('設定填充模式',700,300)}}

更多範例請參見 [CSS 動畫](/zh-TW/docs/Web/CSS/Guides/Animations/Using)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 CSS 動畫](/zh-TW/docs/Web/CSS/Guides/Animations/Using)
- JavaScript {{domxref("AnimationEvent")}} API
- 其他相關的動畫屬性：{{cssxref("animation")}}、{{cssxref("animation-composition")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-play-state")}}、{{cssxref("animation-timeline")}}、{{cssxref("animation-timing-function")}}
