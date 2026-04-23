---
title: pointer-events
slug: Web/CSS/Reference/Properties/pointer-events
original_slug: Web/CSS/pointer-events
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`pointer-events`** [CSS](/ko/docs/Web/CSS) 속성은 요소가 포인터 이벤트의 [타겟](/ko/docs/Web/API/Event/target)이 될 수 있는 상황 (이 있다면) 을 설정합니다.

{{InteractiveExample("CSS Demo: pointer-events")}}

```css interactive-example-choice
pointer-events: auto;
```

```css interactive-example-choice
pointer-events: none;
```

```css interactive-example-choice
pointer-events: stroke; /* SVG-only */
```

```css interactive-example-choice
pointer-events: fill; /* SVG-only */
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element">
    <p>
      <a href="#">예제 링크</a>
    </p>
    <p>
      <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <a xlink:href="#">
          <circle
            cx="50"
            cy="50"
            fill="#3E6E84"
            r="40"
            stroke="#ffb500"
            stroke-width="5"></circle>
          <text fill="white" text-anchor="middle" x="50" y="55">SVG</text>
        </a>
      </svg>
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-weight: bold;
}

#example-element a {
  color: #009e5f;
}

#example-element svg {
  width: 10em;
  height: 10em;
}
```

## 구문

```css
/* 키워드 값 */
pointer-events: auto;
pointer-events: none;

/* SVG에 사용되는 값들 */
pointer-events: visiblePainted;
pointer-events: visibleFill;
pointer-events: visibleStroke;
pointer-events: visible;
pointer-events: painted;
pointer-events: fill;
pointer-events: stroke;
pointer-events: bounding-box;
pointer-events: all;

/* 전역 값 */
pointer-events: inherit;
pointer-events: initial;
pointer-events: revert;
pointer-events: revert-layer;
pointer-events: unset;
```

`pointer-events` 속성은 아래 나열된 값들 중 단일 값으로 정의됩니다.

### 값

- `auto`
  - : 요소는 `pointer-events` 속성이 정의되지 않은 것처럼 동작합니다. SVG 콘텐츠에서는 이 값과 `visiblePainted` 값이 동일한 효과를 가집니다.
- `none`
  - : 이 요소 자체는 절대 포인트 이벤트의 [타겟](/ko/docs/Web/API/Event/target)이 되지 않습니다. 그러나 `pointer-events` 를 다른 값으로 설정하여 요소의 하위 트리를 여전히 타겟으로 유지할 수 있습니다. 이러한 상황에서는 포인터 이벤트는 이벤트가 포착되거나 [버블](/ko/docs/Web/API/Event/bubbles) 단계 동안 하위 요소로 전달되거나 전달해오는 과정에서 적절하게 부모 요소의 이벤트 리스터를 발생시킵니다.

    > [!NOTE] > `pointerenter` 와 `pointerleave` 이벤트는 포인터 장치가 어느 요소 혹은 그것의 자식 요소로 이동될 때 발생합니다. 따라서, `pointer-events: none` 가 자식이 아닌 부모에 설정되어 있더라도 이벤트는 자식에서 포인터가 이동하면서 발생하게 됩니다.

#### SVG에만 해당되는 값 (HTML에는 실험적인 기능)

- `visiblePainted`
  - : SVG에만 해당되는 값입니다 (HTML에는 실험적인 기능). 요소는 `visibility` 속성이 `visible` 로 설정되어 있고 마우스 커서가 요소의 내부 (즉, 'fill') 에 있으며 `fill` 속성이 `none` 이 아닌 값으로 설정되어 있을 때, 또는 마우스 커서가 요소의 외곽선 (즉, stroke) 위에 있으며 `stroke` 속성이 `none` 이 아닌 값으로 설정되어 있을 때만 요소가 포인터 이벤트의 대상이 될 수 있습니다.
- `visibleFill`
  - : SVG에만 해당되는 값입니다. 요소는 `visibility` 속성이 `visible` 로 설정되어 있고, 마우스 커서가 요소의 내부 (즉, fill) 에 있을 때에만 포인터 이벤트의 대상이 될 수 있습니다. `fill` 속성의 값은 이벤트 처리에 영향을 주지 않습니다.
- `visibleStroke`
  - : SVG에만 해당되는 값입니다. 요소는 `visibility` 속성이 `visible` 로 설정되어 있고, 마우스 커서가 요소의 외곽선 (즉, storke) 위에 있을 때에만 포인터 이벤트의 대상이 될 수 있습니다. `stroke` 속성의 값은 이벤트 처리에 영향을 미치지 않습니다.
- `visible`
  - : SVG에만 해당되는 값입니다 (HTML에는 실험적인 기능). 요소는 `visibility` 속성이 `visible` 로 설정되어 있고, 마우스 커서가 요소의 내부(즉, fill) 또는 외곽선(즉, stroke) 위에 있을 때에만 포인터 이벤트의 대상이 될 수 있습니다. `fill` 과 `stroke` 속성의 값은 이벤트 처리에 영향을 미치지 않습니다.
- `painted`
  - : SVG에만 해당되는 값입니다 (HTML에는 실험적인 기능). 요소는 요소의 내부 (즉, fill)에 마우스 커서가 있고 `fill` 속성이 `none` 이 아닌 값으로 설정되어 있을 때, 혹은 마우스 커서가 요소의 외곽선 (즉, storke) 위에 있고 `storke` 속성이 `none` 이 아닌 값으로 설정되어 있을 때에만 포인터 이벤트의 타겟이 될 수 있습니다. `visibility` 속성의 값은 이벤트 처리에 영향을 주지 않습니다.
- `fill`
  - : SVG에만 해당되는 값입니다. 요소는 포인터가 요소의 내부 (즉, fill) 에 있을 때에만 포인터 이벤트의 타겟이 될 수 있습니다. `fill` 및 `visibility` 속성의 값은 이벤트 처리에 영향을 주지 않습니다.
- `stroke`
  - : SVG에만 해당되는 값입니다. 요소는 포인터가 요소의 외곽선 (즉, storke) 위에 있을 때에만 포인터 이벤트의 타겟이 될 수 있습니다. `stroke` 및 `visibility` 속성의 값은 이벤트 처리에 영향을 주지 않습니다.
- `bounding-box`
  - : SVG에만 해당되는 값입니다. 요소는 포인터가 요소의 [바운딩 박스](/ko/docs/Glossary/Bounding_box) 위에 있을 때에만 포인터 이벤트의 대상이 될 수 있습니다.
- `all`
  - : SVG에만 해당되는 값입니다 (HTML에는 실험적인 기능). 요소는 포인터가 요소의 내부 (즉, fill) 혹은 외곽선 (즉, stroke) 위에 있을 때에만 포인터 이벤트의 대상이 될 수 있습니다. `fill`, `stroke` 및 `visibility` 속성의 값은 이벤트 처리에 영향을 주지 않습니다.

## 설명

이 속성이 정의되지 않았을 때, `visiblePainted` 값과 동일한 특성이 SVG 콘텐츠에 적용됩니다.

요소가 포인터 이벤트의 타겟이 아님을 나타내기 것 이외에도 `none` 값은 포인터 이벤트가 해당 요소를 통과하여 해당 요소 아래에 있는 것을 대신 타겟으로 삼도록 지시합니다.

`pointer-events` 를 사용하여 요소가 포인터 이벤트의 타겟이 되는 것을 방지하는 것은 해당 요소에 설정된 포인터 이벤트 리스너가 발생할 수 없거나, 발생하지 않을 것을 의미하지 않습니다. 만일 요소의 자식들 중 하나에 `pointer-events` 를 명시적으로 설정하여 해당 자식이 포인터 이벤트의 타겟으로 허용하는 경우, 해당 자식 요소를 타겟으로 하는 다른 이벤트들은 부모 요소의 연결을 따라 이벤트가 이동할 때 부모 요소를 통과하여 적절한 이벤트 리스너를 트리거합니다. 물론 부모로부터 가려져 있지만 자식으로부터 가려져 있지는 않은 화면 위 지점애서 다른 포인터 활동도 자식 혹은 부모로부터 (이는 부모를 통과하여 하위에 무엇이 있든 타겟을 대상으로 하기 때문에) 이벤트가 감지될 수 있습니다.

`pointer-events: none` 속성을 가진 요소는 여전히 <kbd>Tab</kbd> 키를 이용한 키보드 네비게이션의 연속적인 포커스를 받을 수 있습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 모든 이미지에 대한 포인터 이벤트 비활성화하기

이 예제는 모든 이미지에 대한 포인트 이벤트(클릭, 드래그, 호버 등)를 비활성화하는 예제입니다.

```css
img {
  pointer-events: none;
}
```

### 단일 링크에 대한 포인트 이벤트 비활성화하기

이 예제는 링크 `http://example.com` 에 대한 포인터 이벤트를 비활성화하는 예제입니다.

#### HTML

```html
<ul>
  <li><a href="https://developer.mozilla.org">MDN</a></li>
  <li><a href="http://example.com">example.com</a></li>
</ul>
```

#### CSS

```css
a[href="http://example.com"] {
  pointer-events: none;
}
```

#### 결과

{{EmbedLiveSample("Disabling_pointer_events_on_a_single_link", "500", "100")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("user-select")}}
- SVG {{SVGAttr("pointer-events")}} 특성
- SVG {{SVGAttr("visibility")}} 특성
- {{domxref("PointerEvent")}}
