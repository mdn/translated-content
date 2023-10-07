---
title: ":focus"
slug: Web/CSS/:focus
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:focus`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 양식의 입력 칸 등 포커스를 받은 요소를 나타냅니다. 보통 사용자가 요소를 클릭 또는 탭하거나, 키보드 <kbd>Tab</kbd> 키로 선택했을 때 발동합니다.

```css
/* Selects any <input> when focused */
input:focus {
  color: red;
}
```

> **참고:** `:focus`는 포커스를 받은 요소 자체에만 해당합니다. 자손이 포커스를 받았을 때의 요소를 선택해야 하면 {{CSSxRef(":focus-within")}}을 사용하세요.

## 구문

{{CSSSyntax}}

## 예제

### HTML

```html
<input class="red-input" value="저는 포커스를 받으면 빨갛게 됩니다." /><br />
<input class="blue-input" value="저는 포커스를 받으면 파랗게 됩니다." />
```

### CSS

<pre class="brush: css highlight[1, 6] notranslate">.red-input:focus {
  background: yellow;
  color: red;
}

.blue-input:focus {
  background: yellow;
  color: blue;
}</pre>

### 결과

{{EmbedLiveSample("예제")}}

## 접근성 고려사항

낮은 시력을 가진 사용자도 시각적 포커스 지시자를 볼 수 있어야 합니다. 이는 또한 맑은 날의 외부처럼 밝은 공간에서의 스크린 사용자처럼 다른 사람에게도 도움이 될 수 있습니다. [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)는 시각적 포커스 지시자의 대비를 최소한 3:1로 요구하고 있습니다.

- Accessible Visual Focus Indicators: [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

절대 포커스의 기본 외곽선(시각적 포커스 지시자)을 대체 외곽선 없이 제거하지 마세요. 대체 외곽선은 [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) 기준을 통과해야 합니다.

- Quick Tip: [Never remove CSS outlines](https://a11yproject.com/posts/never-remove-css-outlines/)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
- {{CSSxRef(":focus-within")}}
