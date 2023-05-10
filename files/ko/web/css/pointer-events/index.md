---
title: pointer-events
slug: Web/CSS/pointer-events
---
{{CSSRef}}

**`pointer-events`** [CSS](/ko/docs/Web/CSS) 속성은 그래픽 요소가 어떤 상황에서 포인터 이벤트의 [대상](/ko/docs/Web/API/Event/target)이 될 수 있는지 지정합니다.

{{EmbedInteractiveExample("pages/css/pointer-events.html")}}

## 구문

```css
/* 키워드 값 */
pointer-events: auto;
pointer-events: none;
pointer-events: visiblePainted; /* SVG only */
pointer-events: visibleFill;    /* SVG only */
pointer-events: visibleStroke;  /* SVG only */
pointer-events: visible;        /* SVG only */
pointer-events: painted;        /* SVG only */
pointer-events: fill;           /* SVG only */
pointer-events: stroke;         /* SVG only */
pointer-events: all;            /* SVG only */

/* 전역 값 */
pointer-events: inherit;
pointer-events: initial;
pointer-events: unset;
```

`pointer-events` 속성은 아래 목록의 값 중 하나를 선택해서 지정할 수 있습니다.

### 값

- `auto`
  - : 요소가 `pointer-events` 속성을 지정하지 않은 것처럼 행동합니다. SVG 콘텐츠에서는 `auto`와 `visiblePainted`가 동일한 효과를 지닙니다.

<!---->

- `none`
  - : 요소가 포인터 이벤트의 대상이 되지 않습니다. 그러나 해당 요소의 자손이 다른 `pointer-events` 값을 지정한 경우, 그 자손은 대상이 될 수 있습니다. 이 때는 이벤트 캡처/[버블](/ko/docs/Web/API/Event/bubbles) 단계에서 `none`을 지정한 요소의 이벤트 처리기를 발동할 수 있습니다.

#### SVG 전용 (HTML에서 실험적 기능)

- `visiblePainted`
  - : SVG only. The element can only be the target of a mouse event when the `visibility` property is set to `visible` and when the mouse cursor is over the interior (i.e., 'fill') of the element and the `fill` property is set to a value other than `none`, or when the mouse cursor is over the perimeter (i.e., 'stroke') of the element and the `stroke` property is set to a value other than `none`.
- `visibleFill`
  - : SVG only. The element can only be the target of a mouse event when the `visibility` property is set to `visible` and when the mouse cursor is over the interior (i.e., fill) of the element. The value of the `fill` property does not affect event processing.
- `visibleStroke`
  - : SVG only. The element can only be the target of a mouse event when the `visibility` property is set to `visible` and when the mouse cursor is over the perimeter (i.e., stroke) of the element. The value of the `stroke` property does not affect event processing.
- `visible`
  - : SVG only. The element can be the target of a mouse event when the `visibility` property is set to `visible` and the mouse cursor is over either the interior (i.e., fill) or the perimeter (i.e., stroke) of the element. The values of the `fill` and `stroke` do not affect event processing.
- `painted`
  - : SVG only. The element can only be the target of a mouse event when the mouse cursor is over the interior (i.e., 'fill') of the element and the `fill` property is set to a value other than `none`, or when the mouse cursor is over the perimeter (i.e., 'stroke') of the element and the `stroke` property is set to a value other than `none`. The value of the `visibility` property does not affect event processing.
- `fill`
  - : SVG only. The element can only be the target of a mouse event when the pointer is over the interior (i.e., fill) of the element. The values of the `fill` and `visibility` properties do not affect event processing.
- `stroke`
  - : SVG only. The element can only be the target of a mouse event when the pointer is over the perimeter (i.e., stroke) of the element. The values of the `stroke` and `visibility` properties do not affect event processing.
- `all`
  - : SVG only. The element can only be the target of a mouse event when the pointer is over the interior (i.e., fill) or the perimeter (i.e., stroke) of the element. The values of the `fill`, `stroke` and `visibility` properties do not affect event processing.

### 형식 구문

{{csssyntax}}

## 설명

SVG 콘텐츠에 `pointer-events`를 지정하지 않은 경우, `visiblePainted` 값과 동일한 방법을 사용합니다.

`none` 값의 경우 요소가 포인터 이벤트의 대상이 아님을 가리키는 동시에, 이벤트가 요소를 "뚫고" 들어가 "아래" 요소를 대상으로 하도록 만듭니다.

다만, `pointer-events`를 사용해 요소가 포인터 이벤트의 대상이 되지 않도록 지정한다 하여도, 요소의 이벤트 수신기가 절대 발동하지 않거나, 아예 발동할 수 없는 상태가 되는 것은 아닙니다. 만약 자식 요소 중 하나의 `pointer-events`를 명시적으로 허용한 경우, 해당 자식을 대상으로 하는 이벤트는 평범하게 부모 트리를 타고 올라가며, 그 도중에 부모의 이벤트 수신기를 발동시게 됩니다. 물론, 부모 요소가 덮고 있지만 (포인터 이벤트를 허용한) 자식 요소 바깥의 영역은 클릭해도 부모와 자식 둘 다 감지하지 못합니다.

`pointer-events: none`을 지정한 요소여도 <kbd>Tab</kbd> 키를 사용한 순차적 키보드 내비게이션으로 인해 포커스를 획득할 수 있습니다.

We would like to provide finer grained control (than just `auto` and `none`) in HTML for which parts of an element will cause it to "catch" pointer events, and when. To help us in deciding how `pointer-events` should be further extended for HTML, if you have any particular things that you would like to be able to do with this property, then please add them to the Use Cases section of [this wiki page](https://wiki.mozilla.org/SVG:pointer-events) (don't worry about keeping it tidy).

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 기본 예제

다음 예제는 모든 이미지에서 포인터 이벤트(클릭, 드래그, 호버 등)를 비활성화합니다.

```css
img {
  pointer-events: none;
}
```

### 링크 비활성화하기

다음 예제는 `https://example.com` 으로 통하는 링크의 포인터 이벤트를 비활성화합니다.

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

{{EmbedLiveSample("링크_비활성화하기", "500", "100")}}

## 명세

{{Specifications}}

Its extension to HTML elements, though present in early drafts of CSS Basic User Interface Module Level 3, has been pushed to its [level 4](http://wiki.csswg.org/spec/css4-ui#pointer-events).

## 브라우저 호환성

{{Compat}}

## 같이 보기

- The SVG attribute {{SVGAttr("pointer-events")}}
- The SVG attribute {{SVGAttr("visibility")}}
- [WebKit Specs PointerEventsProperty](http://webkit.org/specs/PointerEventsProperty.html) extended for use in (X)HTML content
- {{cssxref("user-select")}} - controls whether the user can select text
