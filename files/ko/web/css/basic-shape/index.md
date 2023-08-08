---
title: <basic-shape>
slug: Web/CSS/basic-shape
---

{{CSSRef}}

**`<basic-shape>`** [CSS](/ko/docs/Web/CSS) [자료형](/ko/docs/Web/CSS/CSS_Types)은 {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}, {{cssxref("offset-path")}} 속성이 사용할 형태를 정의합니다.

{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}

## 구문

`<basic-shape>` 자료형은 아래의 기본 형태 함수 중 하나를 사용해 정의합니다.

형태를 생성할 때, 형태의 기준 상자는 `<basic-shape>` 값을 사용하는 속성이 결정합니다. 형태의 좌표계는 기준 상자의 좌상단을 원점으로 하고, X축은 오른쪽, Y축은 아래쪽으로 나가게 됩니다. 백분율료 표현한 모든 길이는 기준 상자의 크기를 사용해 계산합니다.

### 형태 함수

다음의 형태를 지원합니다. 모든 `<basic-shape>` 값은 함수형 표기법을 사용하고, 여기서는 [값 정의 구문](/ko/docs/Web/CSS/Value_definition_syntax)을 통해 정의합니다.

- `inset()`

  - :

    ```
    inset( <shape-arg>{1,4} [round <border-radius>]? )
    ```

    인셋(inset) 사각형을 정의합니다.

    매개변수 네 개를 모두 제공했을 땐 기준 상자의 상, 우, 하, 좌측 모서리에서 각각의 값만큼 안쪽으로 이동하여 인셋 사각형의 모서리를 구성합니다. 매개변수는 여백 단축 속성의 구분을 따르므로 네 모서리를 한 개, 두 개 등의 값만으로 정의할 수 있습니다.

    선택적 {{cssxref("border-radius", "&lt;border-radius&gt;")}} 매개변수를 `border-radius` 단축 속성 구문을 사용해 지정하면 인셋 사각형의 모서리를 둥글게 만들 수 있습니다.

    좌우 인셋 각각 75%처럼, 한 축의 인셋 쌍 값의 합이 요소가 차지하는 크기보다 큰 경우 면적 없는 형태를 정의합니다. For this specification, this results in an empty float area.

- `circle()`

  - :

    ```
    circle( [<shape-radius>]? [at <position>]? )
    ```

    `<shape-radius>` 매개변수는 원의 반지름 *r*을 지정합니다. 음수는 유효하지 않습니다. 백분율 값을 사용하면 기준 상자의 너비와 높이를 공식 `sqrt(width^2+height^2)/sqrt(2)`에 대입한 결과가 최종 값이 됩니다.

    {{cssxref("&lt;position&gt;")}} 매개변수는 원의 중심을 지정합니다. 생략할 경우 중앙을 기본값으로 사용합니다.

- `ellipse()`

  - :

    ```
    ellipse( [<shape-radius>{2}]? [at <position>]? )
    ```

    `<shape-radius>` 매개변수는 타원의 X축, Y축 반지름인 rx와 ry를 순서대로 지정합니다. 두 값 모두 음수는 유효하지 않습니다. 백분율 값을 사용하면 기준 상자의 너비(rx)와 높이(ry)를 사용해 계산합니다.

    {{cssxref("&lt;position&gt;")}} 매개변수는 타원의 중심을 지정합니다. 생략할 경우 중앙을 기본값으로 사용합니다.

- `polygon()`

  - :

    ```
    polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )
    ```

    `<fill-rule>` represents the [filling rule](/ko/docs/Web/SVG/Attribute/fill-rule) used to determine the interior of the polygon. Possible values are `nonzero` and `evenodd`. Default value when omitted is `nonzero`.

    Each pair argument in the list represents _xi_ and _yi_ - the x and y axis coordinates of the ith vertex of the polygon.

- `path()`

  - :

    ```
    path( [<fill-rule>,]? <string>)
    ```

    The optional `<fill-rule>` represents the [filling rule](/ko/docs/Web/SVG/Attribute/fill-rule) used to determine the interior of the path. Possible values are `nonzero` and `evenodd`. Default value when omitted is `nonzero`.

    The required \<string> is an [SVG Path](/ko/docs/SVG/Attribute/d) string encompassed in quotes

The arguments not defined above are defined as follows:

```
<shape-arg> = <length> | <percentage>
<shape-radius> = <length> | <percentage> | closest-side | farthest-side
```

Defines a radius for a circle or ellipse. If omitted it defaults to `closest-side`.

`closest-side` uses the length from the center of the shape to the closest side of the reference box. For circles, this is the closest side in any dimension. For ellipses, this is the closest side in the radius dimension.

`farthest-side` uses the length from the center of the shape to the farthest side of the reference box. For circles, this is the farthest side in any dimension. For ellipses, this is the farthest side in the radius dimension.

## 기본 형태의 계산값

The values in a `<basic-shape>` function are computed as specified, with these exceptions:

- Omitted values are included and compute to their defaults.
- A {{cssxref("&lt;position&gt;")}} value in `circle()` or `ellipse()` is computed as a pair of offsets (horizontal then vertical) from the top left origin, each given as a combination of an absolute length and a percentage.
- A [`<border-radius>`](/ko/docs/Web/CSS/border-radius) value in `inset()` is computed as an expanded list of all eight {{cssxref("length")}} or percentage values.

## 기본 형태의 보간법

When animating between one `<basic-shape>` and another, the rules below are applied. The values in the shape functions interpolate as a simple list. The list values interpolate as {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, or {{cssxref("calc()")}} where possible. If list values are not one of those types but are identical, those values do interpolate.

- Both shapes must use the same reference box.
- If both shapes are the same type, that type is `ellipse()` or `circle()`, and none of the radii use the `closest-side` or `farthest-side` keywords, interpolate between each value in the shape functions.
- If both shapes are of type `inset()`, interpolate between each value in the shape functions.
- If both shapes are of type `polygon()`, both polygons have the same number of vertices, and use the same `<fill-rule>`, interpolate between each value in the shape functions.
- If both shapes are of type `path()`, both paths strings have the same number and types of path data commands in the same order, interpolate each path data command as real numbers.
- In all other cases no interpolation occurs.

## Examples

### Animated polygon

In this example, we use the [@keyframes](/ko/docs/Web/CSS/@keyframes) at-rule to animate a clip path between two polygons. Note that both polygons have the same number of vertices, which is necessary for this type of animation to work.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(
    50% 0%,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0% 50%,
    40% 40%
  );
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(
      50% 0%,
      60% 40%,
      100% 50%,
      60% 60%,
      50% 100%,
      40% 60%,
      0% 50%,
      40% 40%
    );
  }

  to {
    clip-path: polygon(
      50% 30%,
      100% 0%,
      70% 50%,
      100% 100%,
      50% 70%,
      0% 100%,
      30% 50%,
      0% 0%
    );
  }
}
```

#### Result

{{EmbedLiveSample('Animated_polygon','340', '340')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Edit Shape Paths in CSS — Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
- [Overview of CSS Shapes](/ko/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
