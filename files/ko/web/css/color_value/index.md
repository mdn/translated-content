---
title: <color>
slug: Web/CSS/color_value
tags:
  - CSS
  - CSS Data Type
  - Reference
  - Web
browser-compat: css.types.color
translation_of: Web/CSS/color_value
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`<color>`** [자료형](/ko/docs/Web/CSS/CSS_Types)은 색을 나타냅니다. `<color>`는 이 색이 배경과 [어떻게 합성되어야 하는지](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) 나타내는 [알파 채널](https://ko.wikipedia.org/wiki/%EC%95%8C%ED%8C%8C_%EC%B1%84%EB%84%90) 투명도 값도 가질 수 있습니다.

`<color>`는 다음 방법으로 정의할 수 있습니다.

- 키워드 사용 (`blue`, `transparent` 등)
- RGB 3차원 좌표계 사용 (# + 16진수 표기법 또는 `rgb()`, `rgba()`의 함수형 표기법)
- HSL 실린더형 좌표계 사용 (`hsl()`, `hsla()`의 함수형 표기법)

> **참고:** 이 글은 `<color>` 자료형에 대해 상세히 기술합니다. HTML에서 실제로 색을 쓰는 법이 더 알고 싶으시면 [CSS로 HTML 요소에 색 입히기](/ko/docs/Web/HTML/Applying_color)를 참고하세요.

## 구문

`<color>` 자료형은 아래 나열된 선택지 중 하나를 사용해 지정합니다.

> **참고:** `<color>` 값은 정확하게 정의할 수 있지만 실제로 화면에 표시될 때는 기기별로 차이가 있을 수도 있습니다. 대부분의 화면 색이 제대로 조정되지 않았으며 일부 브라우저는 기기의 [색상 프로필](https://ko.wikipedia.org/wiki/ICC_%ED%94%84%EB%A1%9C%ED%8C%8C%EC%9D%BC)을 지원하지 않기 때문입니다.

### 색상 키워드

색상 키워드는 대소문자를 구분하지 않는 식별자로, `red`, `blue`, `black`, `lightseagreen`처럼 특정 색을 나타냅니다. 이름이 표현하는 색을 그럭저럭 가리키고 있긴 하지만 모든 키워드의 본질은 인위적이며 어떤 특정한 규칙을 따르거나 하지 않습니다.

색상 키워드를 사용할 땐 몇 가지 고려할 점이 있습니다.

- [HTML](/ko/docs/Web/HTML)은 CSS1에서 찾을 수 있는 16가지 기본 색상만 인식합니다. 알 수 없는 값은 특정 알고리즘을 사용해 변환하는데 그 결과는 대개 완전히 다른 색입니다. 나머지 색상 키워드는 CSS와 [SVG](/ko/docs/Web/SVG)에서만 사용해야 합니다.
- HTML과 달리 CSS는 알 수 없는 키워드를 완전히 무시합니다.
- 모든 색상 키워드는 투명도 없는 단일 색상을 표현합니다.
- 어떤 키워드는 다른 키워드의 다른 이름입니다.

  - `aqua` / `cyan`
  - `fuchsia` / `magenta`
  - `darkgray` / `darkgrey`
  - `darkslategray` / `darkslategrey`
  - `dimgray` / `dimgrey`
  - `lightgray` / `lightgrey`
  - `lightslategray` / `lightslategrey`
  - `gray` / `grey`
  - `slategray` / `slategrey`

- 많은 키워드를 [X11](https://ko.wikipedia.org/wiki/X_%EC%9C%88%EB%8F%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)에서 가져오긴 했지만, 제조사들이 X11 색상을 특정 하드웨어에 맞춰 조절한 경우도 있었기에 RGB값은 차이가 존재할 수 있습니다.

> **참고:** CSS의 진화와 함께 색상 키워드도 많은 변화를 겪었습니다.
>
> - CSS Level 1은 16개의 기본 색상만 지니고 있었습니다. VGA 그래픽 카드가 표현할 수 있는 색에서 가져온 것이기에 [VGA](https://ko.wikipedia.org/wiki/%EB%B9%84%EB%94%94%EC%98%A4_%EA%B7%B8%EB%9E%98%ED%94%BD%EC%8A%A4_%EC%96%B4%EB%A0%88%EC%9D%B4) 색상이라고 칭했습니다.
> - CSS Level 2에서는 `orange` 키워드를 추가했습니다.
> - 초기 브라우저들은 명세에 없음에도 불구하고 주로 X11 색상표에서 가져온 다양한 색상을 지원했습니다. 그러나 SVG 1.0과 CSS Colors Level 3 이전까지 그 목록이 정식으로 정해진 적은 없었습니다. 추가한 색상 키워드는 확장 색상 키워드, X11 색상, 또는 SVG 색상이라고 부릅니다.
> - CSS Colors Level 4에선 [웹 개척자 에릭 메이어를 기리기 위해](https://codepen.io/trezy/post/honoring-a-great-man) `rebeccapurple` 키워드를 추가했습니다.

<table id="colors_table">
  <thead>
    <tr>
      <th scope="col">명세</th>
      <th scope="col">키워드</th>
      <th scope="col">RGB 16진수값</th>
      <th scope="col">미리보기</th>
    </tr>
  </thead>
  <tbody>
    <tr style="position: relative">
      <td rowspan="16">{{SpecName("CSS1")}}</td>
      <td style="text-align: center"><code>black</code></td>
      <td><code>#000000</code></td>
      <td style="background: black"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>silver</code></td>
      <td><code>#c0c0c0</code></td>
      <td style="background: silver"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>gray</code></td>
      <td><code>#808080</code></td>
      <td style="background: gray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td style="background: white"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background: maroon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>red</code></td>
      <td><code>#ff0000</code></td>
      <td style="background: red"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>purple</code></td>
      <td><code>#800080</code></td>
      <td style="background: purple"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td style="background: fuchsia"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>green</code></td>
      <td><code>#008000</code></td>
      <td style="background: green"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lime</code></td>
      <td><code>#00ff00</code></td>
      <td style="background: lime"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>olive</code></td>
      <td><code>#808000</code></td>
      <td style="background: olive"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>yellow</code></td>
      <td><code>#ffff00</code></td>
      <td style="background: yellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>navy</code></td>
      <td><code>#000080</code></td>
      <td style="background: navy"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>blue</code></td>
      <td><code>#0000ff</code></td>
      <td style="background: blue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>teal</code></td>
      <td><code>#008080</code></td>
      <td style="background: teal"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: aqua"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS2.1")}}</td>
      <td style="text-align: center"><code>orange</code></td>
      <td><code>#ffa500</code></td>
      <td style="background: orange"></td>
    </tr>
    <tr>
      <td rowspan="130">{{SpecName("CSS3 Colors")}}</td>
      <td style="text-align: center"><code>aliceblue</code></td>
      <td><code>#f0f8ff</code></td>
      <td style="background: aliceblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>antiquewhite</code></td>
      <td><code>#faebd7</code></td>
      <td style="background: antiquewhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>aquamarine</code></td>
      <td><code>#7fffd4</code></td>
      <td style="background: aquamarine"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>azure</code></td>
      <td><code>#f0ffff</code></td>
      <td style="background: azure"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>beige</code></td>
      <td><code>#f5f5dc</code></td>
      <td style="background: beige"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>bisque</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: bisque"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>blanchedalmond</code></td>
      <td><code>#ffebcd</code></td>
      <td style="background: blanchedalmond"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>blueviolet</code></td>
      <td><code>#8a2be2</code></td>
      <td style="background: blueviolet"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>brown</code></td>
      <td><code>#a52a2a</code></td>
      <td style="background: brown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>burlywood</code></td>
      <td><code>#deb887</code></td>
      <td style="background: burlywood"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>cadetblue</code></td>
      <td><code>#5f9ea0</code></td>
      <td style="background: cadetblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>chartreuse</code></td>
      <td><code>#7fff00</code></td>
      <td style="background: chartreuse"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>chocolate</code></td>
      <td><code>#d2691e</code></td>
      <td style="background: chocolate"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>coral</code></td>
      <td><code>#ff7f50</code></td>
      <td style="background: coral"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>cornflowerblue</code></td>
      <td><code>#6495ed</code></td>
      <td style="background: cornflowerblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>cornsilk</code></td>
      <td><code>#fff8dc</code></td>
      <td style="background: cornsilk"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>crimson</code></td>
      <td><code>#dc143c</code></td>
      <td style="background: crimson"></td>
    </tr>
    <tr>
      <td style="text-align: center">
        <code>cyan</code><br />(<code>aqua</code>의 다른 이름)
      </td>
      <td><code>#00ffff</code></td>
      <td style="background: cyan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkblue</code></td>
      <td><code>#00008b</code></td>
      <td style="background: darkblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkcyan</code></td>
      <td><code>#008b8b</code></td>
      <td style="background: darkcyan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgoldenrod</code></td>
      <td><code>#b8860b</code></td>
      <td style="background: darkgoldenrod"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgray</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgreen</code></td>
      <td><code>#006400</code></td>
      <td style="background: darkgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgrey</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkkhaki</code></td>
      <td><code>#bdb76b</code></td>
      <td style="background: darkkhaki"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkmagenta</code></td>
      <td><code>#8b008b</code></td>
      <td style="background: darkmagenta"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkolivegreen</code></td>
      <td><code>#556b2f</code></td>
      <td style="background: darkolivegreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkorange</code></td>
      <td><code>#ff8c00</code></td>
      <td style="background: darkorange"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkorchid</code></td>
      <td><code>#9932cc</code></td>
      <td style="background: darkorchid"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkred</code></td>
      <td><code>#8b0000</code></td>
      <td style="background: darkred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darksalmon</code></td>
      <td><code>#e9967a</code></td>
      <td style="background: darksalmon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkseagreen</code></td>
      <td><code>#8fbc8f</code></td>
      <td style="background: darkseagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkslateblue</code></td>
      <td><code>#483d8b</code></td>
      <td style="background: darkslateblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkslategray</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkslategrey</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkturquoise</code></td>
      <td><code>#00ced1</code></td>
      <td style="background: darkturquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkviolet</code></td>
      <td><code>#9400d3</code></td>
      <td style="background: darkviolet"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>deeppink</code></td>
      <td><code>#ff1493</code></td>
      <td style="background: deeppink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>deepskyblue</code></td>
      <td><code>#00bfff</code></td>
      <td style="background: deepskyblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>dimgray</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>dimgrey</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>dodgerblue</code></td>
      <td><code>#1e90ff</code></td>
      <td style="background: dodgerblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>firebrick</code></td>
      <td><code>#b22222</code></td>
      <td style="background: firebrick"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>floralwhite</code></td>
      <td><code>#fffaf0</code></td>
      <td style="background: floralwhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>forestgreen</code></td>
      <td><code>#228b22</code></td>
      <td style="background: forestgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>gainsboro</code></td>
      <td><code>#dcdcdc</code></td>
      <td style="background: gainsboro"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>ghostwhite</code></td>
      <td><code>#f8f8ff</code></td>
      <td style="background: ghostwhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>gold</code></td>
      <td><code>#ffd700</code></td>
      <td style="background: gold"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>goldenrod</code></td>
      <td><code>#daa520</code></td>
      <td style="background: goldenrod"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>greenyellow</code></td>
      <td><code>#adff2f</code></td>
      <td style="background: greenyellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>grey</code></td>
      <td><code>#808080</code></td>
      <td style="background: grey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>honeydew</code></td>
      <td><code>#f0fff0</code></td>
      <td style="background: honeydew"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>hotpink</code></td>
      <td><code>#ff69b4</code></td>
      <td style="background: hotpink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>indianred</code></td>
      <td><code>#cd5c5c</code></td>
      <td style="background: indianred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>indigo</code></td>
      <td><code>#4b0082</code></td>
      <td style="background: indigo"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>ivory</code></td>
      <td><code>#fffff0</code></td>
      <td style="background: ivory"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>khaki</code></td>
      <td><code>#f0e68c</code></td>
      <td style="background: khaki"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lavender</code></td>
      <td><code>#e6e6fa</code></td>
      <td style="background: lavender"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lavenderblush</code></td>
      <td><code>#fff0f5</code></td>
      <td style="background: lavenderblush"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lawngreen</code></td>
      <td><code>#7cfc00</code></td>
      <td style="background: lawngreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lemonchiffon</code></td>
      <td><code>#fffacd</code></td>
      <td style="background: lemonchiffon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightblue</code></td>
      <td><code>#add8e6</code></td>
      <td style="background: lightblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightcoral</code></td>
      <td><code>#f08080</code></td>
      <td style="background: lightcoral"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightcyan</code></td>
      <td><code>#e0ffff</code></td>
      <td style="background: lightcyan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgoldenrodyellow</code></td>
      <td><code>#fafad2</code></td>
      <td style="background: lightgoldenrodyellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgray</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgreen</code></td>
      <td><code>#90ee90</code></td>
      <td style="background: lightgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgrey</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightpink</code></td>
      <td><code>#ffb6c1</code></td>
      <td style="background: lightpink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightsalmon</code></td>
      <td><code>#ffa07a</code></td>
      <td style="background: lightsalmon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightseagreen</code></td>
      <td><code>#20b2aa</code></td>
      <td style="background: lightseagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightskyblue</code></td>
      <td><code>#87cefa</code></td>
      <td style="background: lightskyblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightslategray</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightslategrey</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightsteelblue</code></td>
      <td><code>#b0c4de</code></td>
      <td style="background: lightsteelblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightyellow</code></td>
      <td><code>#ffffe0</code></td>
      <td style="background: lightyellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>limegreen</code></td>
      <td><code>#32cd32</code></td>
      <td style="background: limegreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>linen</code></td>
      <td><code>#faf0e6</code></td>
      <td style="background: linen"></td>
    </tr>
    <tr>
      <td style="text-align: center">
        <code>magenta</code><br />(<code>fuchsia</code>의 다른 이름)
      </td>
      <td><code>#ff00ff</code></td>
      <td style="background: magenta"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumaquamarine</code></td>
      <td><code>#66cdaa</code></td>
      <td style="background: mediumaquamarine"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumblue</code></td>
      <td><code>#0000cd</code></td>
      <td style="background: mediumblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumorchid</code></td>
      <td><code>#ba55d3</code></td>
      <td style="background: mediumorchid"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumpurple</code></td>
      <td><code>#9370db</code></td>
      <td style="background: mediumpurple"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumseagreen</code></td>
      <td><code>#3cb371</code></td>
      <td style="background: mediumseagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumslateblue</code></td>
      <td><code>#7b68ee</code></td>
      <td style="background: mediumslateblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumspringgreen</code></td>
      <td><code>#00fa9a</code></td>
      <td style="background: mediumspringgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumturquoise</code></td>
      <td><code>#48d1cc</code></td>
      <td style="background: mediumturquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumvioletred</code></td>
      <td><code>#c71585</code></td>
      <td style="background: mediumvioletred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>midnightblue</code></td>
      <td><code>#191970</code></td>
      <td style="background: midnightblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mintcream</code></td>
      <td><code>#f5fffa</code></td>
      <td style="background: mintcream"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mistyrose</code></td>
      <td><code>#ffe4e1</code></td>
      <td style="background: mistyrose"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>moccasin</code></td>
      <td><code>#ffe4b5</code></td>
      <td style="background: moccasin"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>navajowhite</code></td>
      <td><code>#ffdead</code></td>
      <td style="background: navajowhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>oldlace</code></td>
      <td><code>#fdf5e6</code></td>
      <td style="background: oldlace"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>olivedrab</code></td>
      <td><code>#6b8e23</code></td>
      <td style="background: olivedrab"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>orangered</code></td>
      <td><code>#ff4500</code></td>
      <td style="background: orangered"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>orchid</code></td>
      <td><code>#da70d6</code></td>
      <td style="background: orchid"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>palegoldenrod</code></td>
      <td><code>#eee8aa</code></td>
      <td style="background: palegoldenrod"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>palegreen</code></td>
      <td><code>#98fb98</code></td>
      <td style="background: palegreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>paleturquoise</code></td>
      <td><code>#afeeee</code></td>
      <td style="background: paleturquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>palevioletred</code></td>
      <td><code>#db7093</code></td>
      <td style="background: palevioletred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>papayawhip</code></td>
      <td><code>#ffefd5</code></td>
      <td style="background: papayawhip"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>peachpuff</code></td>
      <td><code>#ffdab9</code></td>
      <td style="background: peachpuff"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>peru</code></td>
      <td><code>#cd853f</code></td>
      <td style="background: peru"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>pink</code></td>
      <td><code>#ffc0cb</code></td>
      <td style="background: pink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>plum</code></td>
      <td><code>#dda0dd</code></td>
      <td style="background: plum"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>powderblue</code></td>
      <td><code>#b0e0e6</code></td>
      <td style="background: powderblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>rosybrown</code></td>
      <td><code>#bc8f8f</code></td>
      <td style="background: rosybrown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>royalblue</code></td>
      <td><code>#4169e1</code></td>
      <td style="background: royalblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>saddlebrown</code></td>
      <td><code>#8b4513</code></td>
      <td style="background: saddlebrown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>salmon</code></td>
      <td><code>#fa8072</code></td>
      <td style="background: salmon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>sandybrown</code></td>
      <td><code>#f4a460</code></td>
      <td style="background: sandybrown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>seagreen</code></td>
      <td><code>#2e8b57</code></td>
      <td style="background: seagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>seashell</code></td>
      <td><code>#fff5ee</code></td>
      <td style="background: seashell"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>sienna</code></td>
      <td><code>#a0522d</code></td>
      <td style="background: sienna"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>skyblue</code></td>
      <td><code>#87ceeb</code></td>
      <td style="background: skyblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>slateblue</code></td>
      <td><code>#6a5acd</code></td>
      <td style="background: slateblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>slategray</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>slategrey</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>snow</code></td>
      <td><code>#fffafa</code></td>
      <td style="background: snow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>springgreen</code></td>
      <td><code>#00ff7f</code></td>
      <td style="background: springgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>steelblue</code></td>
      <td><code>#4682b4</code></td>
      <td style="background: steelblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>tan</code></td>
      <td><code>#d2b48c</code></td>
      <td style="background: tan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>thistle</code></td>
      <td><code>#d8bfd8</code></td>
      <td style="background: thistle"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>tomato</code></td>
      <td><code>#ff6347</code></td>
      <td style="background: tomato"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>turquoise</code></td>
      <td><code>#40e0d0</code></td>
      <td style="background: turquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>violet</code></td>
      <td><code>#ee82ee</code></td>
      <td style="background: violet"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>wheat</code></td>
      <td><code>#f5deb3</code></td>
      <td style="background: wheat"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>whitesmoke</code></td>
      <td><code>#f5f5f5</code></td>
      <td style="background: whitesmoke"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>yellowgreen</code></td>
      <td><code>#9acd32</code></td>
      <td style="background: yellowgreen"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Colors")}}</td>
      <td style="text-align: center">
        <a href="https://en.wikipedia.org/wiki/Eric_A._Meyer#Personal_life"
          ><code>rebeccapurple</code></a
        >
      </td>
      <td><code>#663399</code></td>
      <td style="background: rebeccapurple"></td>
    </tr>
  </tbody>
</table>

### transparent 키워드

`transparent` 키워드는 완전히 투명한 색으로, "색"을 입힌 항목의 뒷편이 모두 보입니다. 기술적으로 `transparent`는 `rgba(0,0,0,0)`의 짧은 이름입니다.

> **참고:** {{cssxref("gradient")}} 등 특정 상황에서 의도하지 않은 결과를 피하기 위해, 현재 CSS 명세에선 `transparent`를 [투명도를 미리 곱한 색 공간](https://www.w3.org/TR/2012/CR-css3-images-20120417/#color-stop-syntax)에서 계산하도록 명시하고 있습니다. 그러나 오래된 브라우저에서는 투명도 0의 검정으로 취급할 수 있다는 점을 주의하세요.

> **참고:** `transparent`는 CSS Level 2 (Revision 1) 전까지 실제 색상이 아니었습니다. 대신 {{cssxref("background")}}와 {{cssxref("border")}}의 `<color>` 자리에 사용하는 특별한 키워드로, 상속받은 단색을 덮어 쓸 수 있도록 추가됐었습니다. CSS Colors Level 3에서 알파 채널이 추가되면서 `transparent`도 실제 색상으로 재정의되었습니다. 덕분에 `<color>` 값 어디에나 사용할 수 있습니다.

### currentColor 키워드

`currentColor` 키워드는 요소의 {{Cssxref("color")}} 속성값을 나타냅니다. 이를 통해 다른 속성이 `color` 속성값을 따라가도록 설정할 수 있습니다.

`color` 속성의 값으로 `currentColor` 키워드를 사용하면, 값을 상속받은 `color` 속성에서 대신 가져옵니다.

#### currentColor 예제

```html
<div style="color: blue; border: 1px dashed currentColor;">
  이 글의 색은 파랑입니다.
  <div style="background: currentColor; height:9px;"></div>
  이 블록은 파란 테두리로 둘러쌓여 있습니다.
</div>
```

{{EmbedLiveSample("currentColor_예제")}}

### RGB 색상

RGB 색상 모델은 빨강, 초록, 파랑을 통해 특정 색을 표현합니다. 선택사항으로 색의 투명도를 알파 채널로 표현할 수 있습니다.

#### 구문

RGB 색상은 # 뒤의 16진수 표기법이나 함수형 표기법(`rgb()`, `rgba()`)으로 표현할 수 있습니다.

> **참고:** CSS Colors Level 4부터 `rgba()`는 `rgb()`의 다른 이름입니다. Level 4 표준을 구현한 브라우저에서는 같은 매개변수를 받고 동일하게 행동합니다.

- 16진수 표기법: `#RRGGBB[AA]`
  - : `R`(빨강), `G`(초록), `B`(파랑), `A`(알파)는 16진수 문자(0-9, A-F)입니다. `A`는 선택사항입니다. 예를 들어 `#ff0000`은 `#ff0000ff`와 같습니다.
- 16진수 표기법: `#RGB[A]`
  - : `R`(빨강), `G`(초록), `B`(파랑), `A`(알파)는 16진수 문자(0-9, A-F)입니다. `A`는 선택사항입니다. 세 글자 표기법(`#RGB`)은 여섯 글자 표기법(`#RRGGBB`)의 단축 표현입니다. 예를 들어 `#f09`는 `#ff0099`와 같습니다. 비슷하게 네 글자 표기법(`#RGBA`)은 여덟 글자 표기법(`#RRGGBBAA`)의 단축 표기법이다. 예를 들어 `#0f38`은 `#00ff3388`과 같습니다.
- 함수형 표기법: `rgb(R, G, B[, A])` 또는 `rgba(R, G, B, A)`
  - : `R`(빨강), `G`(초록), `B`(파랑)은 {{cssxref("&lt;integer&gt;")}}나 {{cssxref("&lt;percentage&gt;")}}이며 숫자 `255`가 `100%`와 동일합니다. `A`(알파)는 0과 1 사이의 {{cssxref("&lt;number&gt;")}}거나 {{cssxref("&lt;percentage&gt;")}}이며 숫자 `1`이 `100%`(불투명)와 동일합니다.
- 함수형 표기법: `rgb(R G B[ A])` 또는 `rgba(R G B A)`
  - : CSS Colors Level 4부터 공백으로 구분한 값을 함수형 표기법과 사용할 수 있습니다.

#### 예제

##### 다양한 RGB 구문

다음 예제는 한 가지 색상을 만들 때 쓸 수 있는 다양한 RGB 색상 구문을 보입니다.

```css
/* 아래 모든 구문은 불투명한 핫핑크를 표현합니다. */

/* 16진수 구문 */
#f09
#F09
#ff0099
#FF0099

/* 함수형 구문 */
rgb(255,0,153)
rgb(255, 0, 153)
rgb(255, 0, 153.0) /* 오류! 소수점 금지 */
rgb(100%,0%,60%)
rgb(100%, 0%, 60%)
rgb(100%, 0, 60%) /* 오류! 정수와 백분율 혼용 금지 */
rgb(255 0 153)

/* 16진수와 알파 값 */
#f09f
#F09F
#ff0099ff
#FF0099FF

/* 함수형 구문과 알파 값 */
rgb(255, 0, 153, 1)
rgb(255, 0, 153, 100%)

/* 공백 구분 구문 */
rgb(255 0 153 / 1)
rgb(255 0 153 / 100%)

/* 정숫값을 사용한 함수형 구문 */
rgb(255, 0, 153.6, 1)
rgb(1e2, .5e1, .5e0, +.25e2%)
```

##### 다양한 RGB 투명도 구문

```css
/* 16진수 구문 */
#3a30                    /*   0% opaque green */
/*   0% opaque green */
#3A3F                    /* full opaque green */
#33aa3300                /*   0% opaque green */
#33AA3388                /*  50% opaque green */

/* 함수형 구문 */
rgba(51, 170, 51, .1)    /*  10% opaque green */
rgba(51, 170, 51, .4)    /*  40% opaque green */
rgba(51, 170, 51, .7)    /*  70% opaque green */
rgba(51, 170, 51,  1)    /* full opaque green */

/* 공백 구분 구문 */
rgba(51 170 51 / 0.4)    /*  40% opaque green */
rgba(51 170 51 / 40%)    /*  40% opaque green */

/* 정숫값을 사용한 함수형 구문 */
rgba(255, 0, 153.6, 1)
rgba(1e2, .5e1, .5e0, +.25e2%)    /*  40% opaque green */

/* 정숫값을 사용한 함수형 구문 */
rgba(255, 0, 153.6, 1)
rgba(1e2, .5e1, .5e0, +.25e2%);
```

### HSL 색상

HSL 색상 모델은 색상, 채도, 명도를 통해 특정 색상을 표현합니다. 선택사항으로 색의 투명도를 알파 채널로 표현할 수 있습니다.

많은 디자이너들은 색상, 채도, 명도를 따로 조절할 수 있는 HSL이 RGB보다 더 직관적임을 발견합니다. 또한 HSL을 사용하면 짝이 맞는 색(예컨대 한 가지 색의 여러 밝기) 여러 종류를 더 쉽게 만들 수 있습니다.

#### 구문

HSL 색상은 함수형 <a id="hsl()" name="hsl()"><code>hsl()</code></a>과 <a id="hsla()" name="hsla()"><code>hsla()</code></a> 표기법을 사용합니다.

> **참고:** CSS Colors Level 4부터 `hsla()`는 `hsl()`의 다른 이름입니다. Level 4 표준을 구현한 브라우저에서는 같은 매개변수를 받고 동일하게 행동합니다.

- 함수형 포기법: `hsl(H, S, L[, A])` 또는 `hsla(H, S, L, A)`
  - : `H`(색상)는 색상원에서의 {{cssxref("&lt;angle&gt;")}}로 {{SpecName("CSS4 Colors","#the-hsl-notation")}} 기준 `deg`, `rad`, `grad`, `turn`을 사용할 수 있습니다. 단위 없이 {{cssxref("&lt;number&gt;")}}로 표현할 경우 {{SpecName("CSS3 Colors", "#hsl-color")}}에 명시된 것과 같이 각도로 해석합니다. 정의에 따르면 빨강=`0deg`=`360deg`이며 다른 색은 (초록=`120deg`, 파랑=`240deg` 등) 원을 따라 분포하고 있습니다. `<angle>`이라면 암묵적으로 원의 주위를 한 바퀴 돕니다. 예컨대 `-120deg`=`240deg`, `480deg`=`120deg`, `-1turn`=`1turn` 입니다.

    `S`(채도)와 `L`(명도)은 {{cssxref("&lt;percentage&gt;")}}입니다. `100%` 채도는 제일 진한 색이며 `0%`는 회색입니다. `100%` 명도는 흰색, `0%` 명도는 검은색, `50%` 명도는 "보통" 색입니다.

    `A`(알파)는 0과 1 사이의 {{cssxref("&lt;number&gt;")}}거나 {{cssxref("&lt;percentage&gt;")}}이며 숫자 `1`이 `100%`(불투명)와 동일합니다.

- 함수형 표기법: `hsl(H S L[ A])` 또는 `hsla(H S L A)`
  - : CSS Colors Level 4부터 공백으로 구분한 값을 함수형 표기법과 사용할 수 있습니다.

#### 예제

##### 다양한 HSL 구문

```css
/* 아래 모든 구문은 라벤더를 표현합니다. */
hsl(270,60%,70%)
hsl(270, 60%, 70%)
hsl(270 60% 70%)
hsl(270deg, 60%, 70%)
hsl(4.71239rad, 60%, 70%)
hsl(.75turn, 60%, 70%)

/* 아래 모든 구문은 85% 투명한 라벤더를 표현합니다. */
hsl(270, 60%, 50%, .15)
hsl(270, 60%, 50%, 15%)
hsl(270 60% 50% / .15)
hsl(270 60% 50% / 15%)
```

##### 제일 진한 색상

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">표현</th>
      <th scope="col">설명</th>
      <th scope="col">미리보기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(0, 100%, 50%)</code></td>
      <td>red</td>
      <td style="background: hsl(0, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(30, 100%, 50%)</code></td>
      <td>orange</td>
      <td style="background: hsl(30, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(60, 100%, 50%)</code></td>
      <td>yellow</td>
      <td style="background: hsl(60, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td>lime green</td>
      <td style="background: hsl(90, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>green</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(150, 100%, 50%)</code></td>
      <td>blue-green</td>
      <td style="background: hsl(150, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(180, 100%, 50%)</code></td>
      <td>cyan</td>
      <td style="background: hsl(180, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(210, 100%, 50%)</code></td>
      <td>sky blue</td>
      <td style="background: hsl(210, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(240, 100%, 50%)</code></td>
      <td>blue</td>
      <td style="background: hsl(240, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(270, 100%, 50%)</code></td>
      <td>purple</td>
      <td style="background: hsl(270, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(300, 100%, 50%)</code></td>
      <td>magenta</td>
      <td style="background: hsl(300, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(330, 100%, 50%)</code></td>
      <td>pink</td>
      <td style="background: hsl(330, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(360, 100%, 50%)</code></td>
      <td>red</td>
      <td style="background: hsl(360, 100%, 50%)"></td>
    </tr>
  </tbody>
</table>

##### 밝고 어두운 초록

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Notation</th>
      <th scope="col">Description</th>
      <th scope="col">Live</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 0%)</code></td>
      <td>black</td>
      <td style="background: hsl(120, 100%, 0%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 20%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 20%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 40%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 40%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 60%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 60%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 80%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 80%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 100%)</code></td>
      <td>white</td>
      <td style="background: hsl(120, 100%, 100%)"></td>
    </tr>
  </tbody>
</table>

##### 진하고 옅은 초록

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Notation</th>
      <th scope="col">Description</th>
      <th scope="col">Live</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>green</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 80%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 80%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 60%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 60%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 40%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 40%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 20%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 20%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 0%, 50%)</code></td>
      <td>gray</td>
      <td style="background: hsl(120, 0%, 50%)"></td>
    </tr>
  </tbody>
</table>

##### 다양한 HSL 투명도 구문

```css
hsla(240, 100%, 50%, .05) /*   5% opaque blue */
hsla(240, 100%, 50%, .4)  /*  40% opaque blue */
hsla(240, 100%, 50%, .7)  /*  70% opaque blue */
hsla(240, 100%, 50%, 1)   /* full opaque blue */

/* Whitespace syntax */
hsla(240 100% 50% / .05)  /*   5% opaque blue */

/* Percentage value for alpha */
hsla(240 100% 50% / 5%)   /*   5% opaque blue */
```

### 시스템 색상

모든 시스템에서 모든 시스템 색상을 지원하는건 아닙니다. 공개 웹 페이지에서 사용하는건 좋지 않습니다.

- ActiveText
  - : Text of active links
- ButtonBorder
  - : Base border color of controls
- ButtonFace
  - : Background color of controls
- ButtonText
  - : Foreground color of controls
- Canvas
  - : Background of application content or documents
- CanvasText
  - : Foreground color in application content or documents
- Field
  - : Background of input fields
- FieldText
  - : Text in input fields
- GrayText
  - : Foreground color for disabled items (e.g. a disabled control)
- Highlight
  - : Background of selected items
- HighlightText
  - : Foreground color of selected items
- LinkText
  - : Text of non-active, non-visited links
- Mark
  - : Background of text that has been specially marked (such as by the HTML `mark` element)
- MarkText
  - : Text that has been specially marked (such as by the HTML `mark` element)
- VisitedText
  - : Text of visited links

## 보간

애니메이션과 [그레이디언트](/ko/docs/Web/CSS/CSS_Images/Using_CSS_gradients)는 `<color>` 값의 빨강, 초록, 파랑 각 구성 성분을 부동소수점 실수를 사용해 보간합니다. 보간 중 예상하지 못한 무채색이 등장하는걸 방지하기 위해 계산은 [알파 채널을 미리 곱한 sRGBA 색 공간](https://www.gimp.org/docs/plug-in/appendix-alpha.html)에서 수행합니다. 애니메이션에서 보간의 속도는 [타이밍 함수](/ko/docs/Web/CSS/single-transition-timing-function)가 결정합니다.

## 접근성 고려사항

색을 구별하기 어려운 사람도 있으므로, [WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) 권고안은 특정 메시지, 행동, 또는 결과를 나타내는 방법으로 오직 색만 사용하는걸 강력히 반대하고 있습니다. [색과 색상 대비](/ko/docs/Learn/Accessibility/CSS_and_JavaScript#Color_and_color_contrast)를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("opacity")}} 속성으로 요소 자체의 투명도를 바꿀 수 있습니다.
- `<color>`를 지정할 수 있는 흔히 쓰이는 속성: {{Cssxref("color")}}, {{Cssxref("background-color")}}, {{Cssxref("border-color")}}, {{Cssxref("box-shadow")}}, {{Cssxref("outline-color")}}, {{Cssxref("text-shadow")}}
- [CSS로 HTML 요소에 색 입히기](/ko/docs/Web/HTML/Applying_color)
