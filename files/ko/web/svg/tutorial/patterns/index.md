---
title: 패턴
slug: Web/SVG/Tutorial/Patterns
---

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}

## 패턴

패턴은 SVG에 사용할 보다 복잡한 채움 형태의 하나다. 또한 강력하다, 그래서 관련해서 얘기하고 적어도 기본을 익히는 것은 가치가 있다. 색퍼짐(gradients)처럼, 이 {{SVGElement('pattern')}} 요소도 SVG 파일의 `<defs>` 섹션에 놓여야 한다.

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white" />
      <stop offset="95%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red" />
      <stop offset="95%" stop-color="orange" />
    </linearGradient>

    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue" />
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="url(#Gradient1)"
        fill-opacity="0.5" />
    </pattern>
  </defs>

  <rect fill="url(#Pattern)" stroke="black" width="200" height="200" />
</svg>
```

{{ EmbedLiveSample('Patterns','220','220','/files/725/SVG_Pattern_Example.png') }}

패턴 요소 안에는 앞서 포함시킨 다른 기본 도형(shape)의 뭐라도 포함시킬 수 있다. 그리고 그것 각각에 앞서 배운 색퍼짐(gradients)이나 투명(opacity) 등으로 스타일을 줄 수 있다. 여기서 우리는 두개의 사각형(둘은 겹쳐 있고, 하나가 다른 것보다 2배 크기다. 이것이 패턴 전체를 채운다)과 하나의 동그라미를 그려 넣었다.

패턴 관련 복잡한 작업이 단위 체계와 그 크기를 정하는 일이다. 위 예제에서, 우리는 패턴의 `폭(width)`과 `높이(height)` 속성을 정의했다. 이것들은 반복되는 패턴들이 서로 얼마나 떨어지는지를 나타내는 값이다. 이 사각형의 시작위치가 도면의 어딘가로부터 원하는 만큼 밀려나도록 하는 `x`와 `y` 속성도 가능한다. 이들이 여기에 사용된 이유는 아래에서 설명한다.

패턴에도 앞서 봤던 `gradientUnits`같은 속성이 있다. `patternUnits`는 단위를 명시한다. 기본값은 마찬가지로 "objectBoundingBox"이다. 그래서 패턴이 적용될 객체의 폭/높이가 1로 표현된다. 그러므로 이 경우, 폭과 높이가 0.25로 설정되었으므로 우리가 원한 것은 수평과 수직으로 패턴이 4번 반복되는 것이다. 그 말은 패턴의 크기는 전체 박스 크기의 단지 0.25만큼이라는 것이다.

색퍼짐(gradients)과 달리 패턴은 두번째 속성인 `patternContentUnits`을 가진다. 이것은 패턴 요소 내부의 기본 도형에 적용되는 단위 체계다. 기본값은 "userSpaceOnUse"로 `patternUnits` 속성과 반대다. 이 말은 이들 속성들(`patternContentUnits`과 `patternUnits`)을 따로 지정하지 않으면, 우리가 패턴 내부에 그리는 도형들은 패턴 요소가 사용하는 것과 다른 좌표 체계로 그려진다는 것이다. 이것은 직접 작성할 때 살짝 혼란스러울 수 있다는 것이다. 위 예제에서 이 일을 제대로 하려면, 우리의 박스 크기(200픽셀)와 우리가 수평과 수직으로 4번 반복되기를 원한다는 것을 감안해야 한다. 이 말은 각 패턴은 50x50의 정사각형이라는 것이다. 그래서 패턴 안, 두개의 사각형과 하나의 동그라미는 50x50 박스에 맞는 크기로 됐던 것이다. 이 박스 바깥에 그려지는 것들은 그게 뭐든 보이지 않을 것이다. 이 패턴은 또한 10 픽셀 만큼 밀려나야 한다 그래서 이것은 우리의 상자 왼쪽 위에서 시작할 것이다. 그래서 패턴의 x와 y 속성은 10/200 = 0.05로 조정 되어져야 한다.
(역주: 예제의 x, y는 0인데, 설명은 계속 10인 것처럼 하고 있다. 뭔가 오류가 있는 것 같다)

여기서 주의사항은 객체가 크기를 바꾸면 패턴도 그에 맞게 조정되지만, 그 내부는 그렇지 않다는 거다. 그래서 우리는 여전히 4번 반복된 패턴을 가지겠지만 내부의 객체들은 같은 크기를 유지할 것이고 그들 간에 커다란 빈 공간을 직면할 것이다. `patternContentUnits` 속성을 바꿔서 우리는 모든 요소가 같은 단위 체계에 놓이도록 할 수 있다:

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

이제 패턴 내용물은 패턴과 같은 단위 체계라, 패턴이 바른 위치에서 시작하게 하려면 시작위치를 밀어내지 않아야 한다. 그리고 객체의 크기가 더 커지면 패턴은 자동적으로 조정되어 같은 수의 객체와 같은 회수로 반복될 것이다. 이것은 객체의 크기가 변했을 때, 패턴의 크기를 그대로 유지하면서 그냥 반복을 더해서 박스를 채우는 "userSpaceOnUse" 체계와 대조적이다.

Gecko에서 반지름이 0.075보다 작은 동그라미를 그리는 데 어려움이 있다(현재 이것이 패턴 요소에서의 버그인지 아닌지는 알 수 없다). 이 문제를 해결하려면 꼭 해야 하는 것이 아니라면 "objectBoundingBox" 단위에서 그리는 것을 피하는 것이 아마 최선일 것이다.

어느 것도 패턴을 생각할 때 일반적으로 생각하는 것이 아닙니다. 패턴은 보통 크기가 정해지고, 객체의 모양과는 독립적으로 반복됩니다. 이런 식으로 만들려면 패턴과 내용 둘다 현재의 사용자 공간에서 그려져야 한다. 객체를 다음처럼 하고, 도형을 바꾸지 않는다.

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

물론 나중에 개체 크기를 변경해도 패턴의 크기는 조정되지 않는다. 위의 세 가지 예는 아래 높이를 300px로 약간 늘린 직사각형에 보이고 있지만 이게 완벽한 그림이 아니고, 시스템에 따라 가능한 다른 요인이 있음을 밝혀 둔다.

![](svg_pattern_comparison_of_units.png)

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}
