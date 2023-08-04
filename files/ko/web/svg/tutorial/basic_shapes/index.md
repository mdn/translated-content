---
title: 기본 도형
slug: Web/SVG/Tutorial/Basic_Shapes
---

{{ PreviousNext("Web/SVG/Tutorial/Positions", "Web/SVG/Tutorial/Paths") }}

SVG 드로잉에는 몇 가지 기본 도형들이 있다. 도형들의 목적은 이름에서 명백하게 알 수 있다. 도형들의 위치와 크기를 지정하는 몇몇 속성들은 주어지지만, 여기에서 다뤄지지 않는 다른 속성들과 함께 더 정확하고 완전한 설명이 있는 레퍼런스를 첨부해 두겠다. 그러나, 대부분의 SVG 문서에서 사용되기 때문에 몇 가지 소개를 해줘야한다.

## 기본적인 도형들

도형을 삽입하기 위해서는 당신은 문서안에 요소를 만들어야 한다. 서로다른 요소들은 다른 모양에 해당하며, 서로 다른 속성들을 사용하여 해당 모양의 크기와 위치를 나타낸다. 일부는 다른 모양으로 생성 될 수 있다는 점에서 약간 중복되지만, 사용자의 편의를 위해 SVG 문서를 가능한 짧고 가독성있게 유지하기 위해서 모두 제공된다. 모든 기본 도형은 오른쪽 이미지에 표시된다. 기본 도형을 생성하는 코드는 다음과 같다.

![8개의 다른 도형입니다. 왼쪽 상단에는 검은색 테두리의 사각형이 그 옆에는 검은색 둥근 윤곽선 사각형이 있습니다. 왼쪽 아래에는 빨간색 테두리의 원이 그 뒤에 빨간색 테두리의 타원이 있습니다. 왼쪽 아래에 노란색 선이 있고, 그 옆에는 지그재그로 된 노란선이 있습니다. 노란색 선 아래에는 녹색 테두리의 별이 있고 이미지 끝에는 파란색 물결 모양의 선이 있습니다.](shapes.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

> **참고:** `stroke`, `stroke-width` 그리고 `fill` 속성들은 튜토리얼 뒤쪽에서 설명한다.

### 사각형

[rect](/en-US/Web/SVG/Element/rect) 요소는 당신이 생각하는 것과 일치하며 화면에 사각형을 그린다. 여기에는 화면상에서 직사각형의 위치와 모양을 제어하는 6가지 기본 속성만 있다. 앞서 보여준 이미지는 두 개의 rect 요소를 보여주며 약간 중복된다. 오른쪽에 있는 이미지는 rx 와 ry 속성이 설정되어 있어서 모서리가 둥글다. rx 와 ry 가 설정되지 않은 경우에는 기본값 0으로 들어간다.

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- `x`
  - : 사각형의 좌측 상단의 `x` 값을 의미한다.
- `y`
  - : 사각형의 좌측 상단의 `y` 값을 의미한다.
- `width`
  - : 사각형의 폭을 나타낸다.
- `height`
  - : 사각형의 높이를 나타낸다.
- `rx`
  - : 사각형의 둥근 꼭짓점의 `x` 방향으로의 반지름이다.
- `ry`
  - : 사각형의 둥근 꼭짓점의 `y` 방향으로의 반지름이다.

### 원

당신이 추측한 것 처럼, [circle](/en-US/Web/SVG/Element/circle) 요소는 화면에 원을 그린다. circle 요소에 실제로 적용할 수 있는 속성은 세 가지 뿐이다.

```html
<circle cx="25" cy="75" r="20" />
```

- `r`
  - : 원의 반지름을 의미한다.
- `cx`
  - : 원의 중심 중 `x` 값을 의미한다.
- `cy`
  - : 원의 중심 중 `y` 값을 의미한다.

### 타원

[Ellipse](/en-US/Web/SVG/Element/ellipse)는 원의 x와 y 반경 (수학자들은 장반경, 단반경 이라고 함)을 개별적으로 확장 할 수 있는 circle 요소의 좀 더 일반적인 형태이다.

```html
<ellipse cx="75" cy="75" rx="20" ry="5" />
```

- `rx`
  - : 타원의 `x` 방향으로의 반지름의 길이를 의미한다.
- `ry`
  - : 타원의 `y` 방향으로의 반지름의 길이를 의미한다.
- `cx`
  - : 타원의 중심 중 `x` 값을 의미한다.
- `cy`
  - : 타원의 중심 중 `y` 값을 의미한다.

### 선

[Line](/en-US/Web/SVG/Element/line)s은 단지 직선이다. line 요소는 선의 시작과 끝 지점을 지정하는 두 점을 속성으로 갖는다.

```html
<line x1="10" x2="50" y1="110" y2="150" />
```

- `x1`
  - : 점 1의 `x` 값이다.
- `y1`
  - : 점 1의 `y` 값이다.
- `x2`
  - : 점 2의 `x` 값이다.
- `y2`
  - : 점 2의 `y` 값이다.

### Polyline

[Polyline](/en-US/Web/SVG/Element/polyline)s은 연결된 직선들의 그룹이다. 그 목록(직선들)은 꽤 길어질 수 있기 때문에 모든 포인트가 하나의 속성에 포함된다.

```html
<polyline
  points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145" />
```

- points
  - : 포인트들의 목록, 각 숫자는 공백, 쉼표, EOL 또는 줄 바꿈 문자로 구분된다. 각 포인트는 반드시 `x` 좌표와 `y` 좌표를 가지고 있어야 한다. 따라서 포인트 목록 (0,0), (1,1) 및 (2,2)는 "0 0, 1 1, 2 2"라고 쓸 수 있다.

### 다각형

[Polygon](/en-US/Web/SVG/Element/polygon)s은 점을 연결하는 직선으로 구성된다는 점에서 polyline과 매우 유사하다. 하지만 다각형의 경우, 자동으로 마지막 포인트로부터 첫 번째 포인트로 직선을 만들어서 닫힌 모양을 만든다. 사각형은 다각형의 하나이므로, 융통성있는 사각형을 필요로 하는 경우 polygon 요소를 사용해서 rect 요소를 만들 수 있다.

```html
<polygon
  points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180" />
```

- points
  - : 포인트들의 목록, 각 숫자는 공백, 쉼표, EOL 또는 줄 바꿈 문자로 구분된다. 각 포인트는 반드시 `x` 좌표와 `y` 좌표를 가지고 있어야 한다. 따라서 포인트 목록 (0,0), (1,1) 및 (2,2)는 "0 0, 1 1, 2 2"라고 쓸 수 있다. 그러면 (2,2)에서 (0,0)으로 최종 직선이 그려져서 다각형이 완성된다.

### 패스

[패스](/ko/Web/SVG/Element/path)는 아마 SVG에서 사용할 수 있는 가장 일반적인 형태일 것이다. path 요소를 사용해서 당신은 사각형(둥근 모서리가 있거나 없는), 원, 타원, 폴리라인 및 다각형을 그릴 수 있다. 기본적으로 다른 모든 종류의 모양, 베지에 곡선, 2차원 곡선 등이 가능하다. 그러한 이유로, paths 는 튜토리얼의 [the next section](/en-US/Web/SVG/Tutorial/Paths) 에 들어가지만, 지금은 모양을 제어하는 데 사용되는 단일 속성이 있음을 알려주겠다.

```html
<path d="M 20 230 Q 40 205, 50 230 T 90230" />
```

- `d`
  - : A list of points and other information about how to draw the path. See the [Paths](/en-US/Web/SVG/Tutorial/Paths) section for more information.

{{ PreviousNext("Web/SVG/Tutorial/Positions", "Web/SVG/Tutorial/Paths") }}
