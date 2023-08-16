---
title: border-radius
slug: Web/CSS/border-radius
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`border-radius`** 속성은 요소 테두리 경계의 꼭짓점을 둥글게 만듭니다. 하나의 값을 사용해 원형 꼭짓점을, 두 개의 값을 사용해 타원형 꼭짓점을 적용할 수 있습니다.

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

꼭짓점 반경은 요소의 테두리 존재 여부와는 별개로 전체 {{Cssxref("background")}}에 적용됩니다. 원형 꼭짓점으로 인해 배경이 잘리는 지점은 {{cssxref("background-clip")}} 속성이 지정합니다.

{{cssxref("border-collapse")}}의 값이 `collapse`인 표 요소는 `border-radius` 속성의 영향을 받지 않습니다.

> **참고:** 다른 단축 속성과 마찬가지로, 각각의 하위 속성이 부모를 상속하도록 할 수는 없습니다. 즉, `border-radius: 0 0 inherit inherit`처럼 일부만 재정의할 수 없습니다. 대신, 원래의 본디속성을 하나씩 사용하세요.

## 구성 속성

`border-radius`는 다음 CSS 속성의 단축 속성입니다.

- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}

## 구문

```css
/* The syntax of the first radius allows one to four values */
/* Radius is set for all 4 sides */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* The syntax of the second radius allows one to four values */
/* (first radius values) / radius */
border-radius: 10px 5% / 20px;

/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Global values */
border-radius: inherit;
border-radius: initial;
border-radius: unset;
```

`border-radius` 속성은 다음 방법으로 지정할 수 있습니다.

- 한 개에서 네 개의 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}} 값은 꼭짓점의 단일 반지름을 설정합니다.
- 선택적으로 "`/`" 이후에 한 개에서 네 개의 `<length>` 또는 `<percentage>` 값을 사용해 추가 반지름을 설정해서 타원형 꼭짓점을 만들 수 있습니다.

### 값

| _radius_                    | ![all-corner.png](all-corner.png)                       | 테두리의 각 꼭짓점 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 한 개 값 구문에서만 사용합니다.                        |
| --------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _top-left-and-bottom-right_ | ![top-left-bottom-right.png](top-left-bottom-right.png) | 왼쪽 위와 오른쪽 아래 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 두 개 값 구문에서만 사용합니다.            |
| _top-right-and-bottom-left_ | ![top-right-bottom-left.png](top-right-bottom-left.png) | 오른쪽 위와 왼쪽 아래 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 두 개 또는 세 개 값 구문에서만 사용합니다. |
| _top-left_                  | ![top-left.png](top-left.png)                           | 왼쪽 위 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 세 개 또는 네 개 값 구문에서만 사용합니다.               |
| _top-right_                 | ![top-right.png](top-right.png)                         | 오른쪽 위 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 네 개 값 구문에서만 사용합니다.                        |
| _bottom-right_              | ![bottom-right.png](bottom-right.png)                   | 오른쪽 아래 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 네 개 값 구문에서만 사용합니다.                      |
| _bottom-left_               | ![bottom-left.png](bottom-left.png)                     | 왼쪽 아래 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 네 개 값 구문에서만 사용합니다.                        |

- {{cssxref("&lt;length&gt;")}}
  - : 길이 값을 사용해 원의 반지름 또는 타원의 짧은반지름과 긴반지름을 지정합니다. 음의 값은 유효하지 않습니다.
- {{cssxref("&lt;percentage&gt;")}}
  - : 백분율 값을 사용해 원의 반지름 또는 타원의 짧은반지름과 긴반지름을 지정합니다. 가로축 값은 요소 박스의 너비에 대한 백분율이고, 세로축 값은 박스의 높이에 대한 백분율입니다. 음의 값은 유효하지 않습니다.

예를 들어...

```css
border-radius: 1em/5em;

/* 아래와 같음 */
border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* 아래와 같음 */
border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

```
  border: solid 10px;
  /* 테두리가 'D'형태가 됨 */
  border-radius: 10px 40px 40px 10px;
```

```
  border: groove 1em red;
  border-radius: 2em;
```

```
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
```

```
  border: none;
  border-radius: 40px 10px;
```

```
  border: none;
  border-radius: 50%;
```

```
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
```

```
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
```

### 라이브 샘플

1. <https://jsfiddle.net/Tripad/qnGKj/2/>
2. <https://jsfiddle.net/Tripad/qnGKj/3/>
3. <https://jsfiddle.net/Tripad/qnGKj/4/>
4. <https://jsfiddle.net/Tripad/qnGKj/5/>
5. <https://jsfiddle.net/Tripad/qnGKj/6/>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 꼭짓점 반경 관련 CSS 속성: {{Cssxref("border-top-left-radius")}}, {{Cssxref("border-top-right-radius")}}, {{Cssxref("border-bottom-right-radius")}}, {{Cssxref("border-bottom-left-radius")}}
