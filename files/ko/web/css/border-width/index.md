---
title: border-width
slug: Web/CSS/border-width
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`border-width`** [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 요소 네 면 테두리의 너비를 설정합니다.

{{EmbedInteractiveExample("pages/css/border-width.html")}}

## 구성 속성

`border-width`는 단축 속성으로서 다음의 하위 속성을 포함합니다.

- {{cssxref("border-bottom-width")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-top-width")}}

## 구문

```css
/* 키워드 값 */
border-width: thin;
border-width: medium;
border-width: thick;

/* <length> 값 */
border-width: 4px;
border-width: 1.2rem;

/* 세로방향 | 가로방향 */
border-width: 2px 1.5em;

/* 위 | 가로방향 | 아래 */
border-width: 1px 2em 1.5cm;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
border-width: 1px 2em 0 4rem;

/* 전역 키워드 */
border-width: inherit;
border-width: initial;
border-width: unset;
```

`border-width` 속성은 한 개에서 네 개의 값을 사용해 지정할 수 있습니다.

- **한 개의 값**은 네 면 모두의 테두리 너비를 설정합니다.
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, 두 번째는 **왼쪽과 오른쪽** 테두리 너비를 설정합니다.
- **세 개의 값**을 지정하면 첫 번째는 **위**, 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 테두리 너비를 설정합니다.
- **네 개의 값**을 지정하면 각각 **상, 우, 하, 좌** 순서로 테두리 너비를 지정합니다. (시계방향)

### 값

- `<line-width>`

  - : 테두리의 너비입니다. 0 이상의 {{cssxref("&lt;length&gt;")}} 또는 키워드를 사용할 수 있습니다. 키워드는 다음 세 가지 중 하나여야 합니다.

    | `thin`   |     | 얇은 테두리 |
    | -------- | --- | ----------- |
    | `medium` |     | 중간 테두리 |
    | `thick`  |     | 굵은 테두리 |

    > **참고:** 각 키워드의 굵기를 정의한 명세는 없기 때문에 결과는 구현별로 상이할 수 있습니다. 다만 굵기는 언제나 `thin ≤ medium ≤ thick`이고, 하나의 문서 내에서 동일합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 서로 다른 값의 조합

#### HTML

```html
<p id="sval">한 개의 값: 모든 네 면이 6px 테두리</p>
<p id="bival">두 개의 다른 값: 위아래에 2px 테두리, 좌우에 10px 테두리</p>
<p id="treval">세 개의 다른 값: 위에 0.3em, 아래에 9px, 좌우에 0</p>
<p id="fourval">
  네 개의 다른 값: "얇은" 위, "중간" 오른쪽, "두꺼운" 아래, 왼쪽 1em
</p>
```

#### CSS

```css
#sval {
  border: ridge #ccc;
  border-width: 6px;
}
#bival {
  border: solid red;
  border-width: 2px 10px;
}
#treval {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#fourval {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### 결과

{{ EmbedLiveSample('서로_다른_값의_조합', 320, 320) }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테두리 관련 단축 속성: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}
- 테두리 너비 속성: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}
