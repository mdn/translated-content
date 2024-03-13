---
title: overflow
slug: Web/CSS/overflow
---

{{CSSRef}}

**`overflow`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 요소의 콘텐츠가 너무 커서 요소의 [블록 서식 맥락](/ko/docs/Web/Guide/CSS/Block_formatting_context)에 맞출 수 없을 때의 처리법을 지정합니다. {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}의 값을 설정합니다.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

적용 가능한 방법은 잘라내기, 스크롤바 노출, 넘친 콘텐츠 그대로 노출 등이 있습니다.

`visible`(기본값)이 아닌 다른 값으로 `overflow` 속성을 사용할 경우 새로운 [블록 서식 문맥](/ko/docs/Web/Guide/CSS/Block_formatting_context)을 생성합니다. 이는 기술적인 요구사항으로, 만약 스크롤하는 요소와 float이 교차한다면, 각 스크롤 단계마다 내용물을 강제적으로 다시 감싸게 될 것입니다. 이는 결국 스크롤 속도를 느리게 할 것입니다.

`overflow` 속성이 효력을 갖기 위해선 반드시 블록 레벨 컨테이너의 높이(`height` 또는 `max-height`)를 설정하거나, `white-space`를 `nowrap`으로 설정해야 합니다.

> **참고:** 하나의 축을 `visible`(기본값)로 하고, 다른 축에는 다른 값을 지정할 경우 `visible`이 `auto`처럼 동작합니다.

> **참고:** JavaScript {{domxref("Element.scrollTop")}} 속성을 사용하면 요소의 `overflow`가 `hidden`일 때도 스크롤할 수 있습니다.

## 구문

```css
/* 키워드 값 */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* 전역 값 */
overflow: inherit;
overflow: initial;
overflow: unset;
```

`overflow` 속성은 아래의 키워드 값을 하나 또는 두 개 사용해 지정합니다. 두 개를 사용한 경우 첫 번째 값은 `overflow-x`, 두 번째 값은 `overflow-y`를 지정합니다. 하나만 사용하면 지정한 값을 양 축 모두에 적용합니다.

### 값

- `visible`
  - : 콘텐츠를 자르지 않으며 안쪽 여백 상자 밖에도 그릴 수 있습니다.
- `hidden`
  - : 콘텐츠를 안쪽 여백 상자에 맞추기 위해 잘라냅니다. 스크롤바를 제공하지 않고, 스크롤할 방법(드래그, 마우스 휠 등)도 지원하지 않습니다. 코드를 사용해 스크롤할 수는 있으므로 ({{domxref("HTMLElement.offsetLeft", "offsetLeft")}} 속성 설정 등), 이 상태의 요소도 스크롤 컨테이너입니다.
- `clip` {{experimental_inline}}
  - : `hidden`과 마찬가지로, 콘텐츠를 안쪽 여백 상자에 맞춰 자릅니다. 그러나 `clip`은 코드를 사용한 스크롤링도 방지하므로 어떠한 스크롤도 불가능합니다. 이 상태의 요소는 스크롤 컨테이너가 아니며, 새로운 블록 서식 문맥도 생성하지 않습니다. 서식 문맥이 필요하다면 {{cssxref("display", "display:flow-root", "#flow-root")}}을 사용할 수 있습니다.
- `scroll`
  - : 콘텐츠를 안쪽 여백 상자에 맞추기 위해 잘라냅니다. 브라우저는 콘텐츠를 실제로 잘라냈는지 여부를 따지지 않고 항상 스크롤바를 노출하므로 내용의 변화에 따라 스크롤바가 생기거나 사라지지 않습니다. 프린터는 여전히 넘친 콘텐츠를 출력할 수도 있습니다.
- `auto`
  - : {{glossary("user agent", "사용자 에이전트")}}가 결정합니다. 콘텐츠가 안쪽 여백 상자에 들어간다면 `visible`과 동일하게 보이나, 새로운 블록 서식 문맥을 생성합니다. 데스크톱 브라우저의 경우 콘텐츠가 넘칠 때 스크롤바를 노출합니다.

<!---->

- `overlay` {{deprecated_inline}}
  - : `auto`와 동일하게 동작하지만, 스크롤바가 공간을 차지하는 대신 콘텐츠 위에 위치합니다. Webkit(Safari 등)과 Blink(Chrome 또는 Opera 등) 기반 브라우저만 지원합니다.

### 형식 구문

{{csssyntax}}

## 예제

```css
p {
  width: 12em;
  height: 6em;
  border: dotted;
  overflow: visible; /* content is not clipped */
}
```

`visible` (default)
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```css
p {
  overflow: hidden; /* no scrollbars are provided */
}
```

`overflow: hidden`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```css
p {
  overflow: scroll; /* always show scrollbars */
}
```

`overflow: scroll`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```css
p {
  overflow: auto; /* append scrollbars if necessary */
}
```

`overflow: auto`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 CSS 속성: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
