---
title: Flexbox
slug: Learn/CSS/CSS_layout/Flexbox
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

flexbox는 행과 열 형태로 항목 무리를 배치하는 일차원 레이아웃 메서드입니다. 항목은 부족한 공간에 맞추기 위해 축소되거나 여분의 공간을 채우기 위해 변형된다. 이 문서는 근간이 되는 내용 전체를 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선결 사항:</th>
      <td>
        HTML의 기초 (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 입문서</a
        >)와 CSS 작동 방식에 대한 개념(<a
          href="/ko/docs/Learn/CSS/Introduction_to_CSS"
          >CSS 입문서</a
        >를 공부하세요.)
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        웹 레이아웃을 생성하기 위해 flexbox 레이아웃 시스템을 사용하는 방법을
        학습하기.
      </td>
    </tr>
  </tbody>
</table>

## 왜 flexbox인가?

오랫동안 CSS 레이아웃을 작성할 수 있는 신뢰할 수 있는 크로스 브라우저 호환 도구는 [부동체](/ko/docs/Learn/CSS/CSS_layout/Floats) 및 [위치잡기](/ko/docs/Learn/CSS/CSS_layout/위치잡기) 도구였습니다. 이것들은 무난하고 작동하지만, 어떤 면에서는 되려 제한적이고 좌절감을 맞보게 합니다.

다음과 같은 간단한 레이아웃 요구 사항은 그러한 도구를 사용하여 달성하기가 어렵거나 불가능합니다. 또한, 편리하지도 유연한 방식도 못됩니다.

- 부모 요소 내부에 포함된 블록 콘텐츠를 세로로 중심부에 맞추기.
- 사용 가능한 너비와 높이에 관계없이 하나의 컨테이너에 포함된 모든 자녀 요소가 주어진 너비와 높이를 똑같은 크기로 점유하기.
- 다단 레이아웃에 포함된 모든 단이 서로 다른 크기의 콘텐츠를 포함하고 있더라도 동일한 높이로 채택하기.

다음 섹션에서 확인하겠지만, flexbox는 많은 레이아웃 작업을 훨씬 쉽게 만들어 줍니다. 본격적으로 파헤쳐봅시다!

## 간단한 예제 소개

이 문서에서 우리는 여러분이 flexbox의 작동 방식을 이해하는데 도움이 되는 일련의 연습을 수행하도록 하겠습니다. 시작하려면, 첫 번째 착수 파일인 [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html)을 우리의 깃허브 저장소에서 사본을 내려받기하여 최신 브라우저(Firefox 또는 Chrome 등)에서 동 파일을 열어 코드 편집기에서 코드를 살펴봐야 합니다. 당신은 그걸 시연한 실제 장면을 [여기서도](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html) 볼 수 있습니다.

(편집기로 본) 소스안에 최상위 수준에 {{htmlelement("header")}} 요소와 세 개의 {{htmlelement("article")}}를 포함한 {{htmlelement("section")}} 요소가 있음을 알 수 있습니다. 우리는 이것들을 사용해 상당히 표준적인 삼단 레이아웃을 생성할 겁니다.

![](flexbox-example1.png)

## flexbox로 레이아웃할 요소 지정

먼저 어떤 요소들을 flexbox로 레이아웃할 요소를 선택해야 합니다. 이를 위해 영향을 주고 싶은 요소의 부모 요소에 특별한 {{cssxref("display")}} 속성값을 지정합니다. 이 경우 우리는 {{htmlelement("article")}} 요소를 레이아웃하길 원하므로 (flex container가 될) {{htmlelement("section")}}에 해당 속성값을 지정합니다:

```css
section {
  display: flex;
}
```

그 결과는 다음과 같아야 합니다:

![](flexbox-example2.png)

자. 이 단일 선언이 우리에게 필요한 모든 것을 제공합니다. 놀랍죠, 그쵸? 우리는 단의 크기가 동일한 다단 레이아웃를 갖게 되었고, 단의 높이가 모두 같습니다. 이렇게 된 까닭은 (flex container의 자식인) flex item에 주어진 기본값이 이와 같은 일반적인 문제를 해결하도록 설정되었기 때문입니다. 관련 내용은 나중에 추가합니다.

> **참고:** 인라인 항목을 flexbox로 취급해 레이아웃하길 희망한다면 {{cssxref("display")}} 속성값을 `inline-flex`로 지정할 수도 있습니다.

## flex 모델의 측방

요소들을 flexbox로 레이아웃될 때 그 상자들은 두 개의 축을 따라 배치됩니다.

![flex_terms.png](flex_terms.png)

- **`기본 축`** (`main axis`)

  은 flex item이 배치되고 있는 방향으로 진행하는 축입니다(예: 페이지를 가로지르는 행 또는 페이지 밑으로 쌓이는 열). 이 기본 축의 시작과 끝을 일컬어 **main start**과 **main end**라고 합니다.

- **`교차축`** (`cross axis`)

  은 flex item이 내부에 배치되는 방향에 직각을 이루는 축입니다. 이 축의 시작과 끝을 일컬어 **cross start**과 **cross end**라고 합니다.

- `display: flex`이 설정된 부모 요소(우리 예제에서 {{htmlelement("section")}}이 해당)를 일컬어

  **`flex container`** (`flex container`)

  라고 합니다.

- flex container 내부에 flexbox로 레이아웃되는 항목을 일컬어

  **`flex item`** (`flex items`)

  이라고 합니다(우리 예제에서 {{htmlelement("article")}} 요소가 해당됩니다).

후속 절을 진행할 때 이러한 용어를 명심하길 바랍니다. 사용 중인 어떤 용어에 대해 혼란스러워지면 언제든지 다시 참조할 수 있습니다.

## 행 또는 열?

flexbox는 기본 축이 진행되는 방향(자식 flexbox들이 컨테이너 내부에 배치되는 방향)을 지정하는 {{cssxref("flex-direction")}} 속성을 제공합니다. 기본값으로 이것은 `row`로 설정되어 브라우저의 기본 언어가 작동하는 방향(영어 브라우저의 경우 왼쪽에서 오른쪽)을 따라 일렬로 배치됩니다.

다음 선언문을 {{htmlelement("section")}} 규칙에 추가하세요:

```css
flex-direction: column;
```

이로써 항목 무리를 열 레이아웃으로 되돌려 놓는걸 확인하게 된다. 해당 항목들은 어떤 내용의 CSS를 추가하기 이전 상황과 유사하다. 진도를 더 나가기 전에 동 선언문을 예제에서 삭제하십시오.

> **참고:** 당신은 `row-reverse`와 `column-reverse` 속성값을 사용하여 역방향으로 배치할 수 있습니다. 이들 값으로도 실험해보십시오!

## 접기

당신의 레이아웃에 너비 또는 높이가 고정 크기를 갖고 있어 생기는 한 가지 문제는 결국 flexbox 자식 요소가 컨테이너에서 대열이탈하면서 레이아웃이 깨진다는 것입니다. 우리가 제시하는 [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox-wrap0.html) 예제를 확인하고 난 뒤 [라이브 보기](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html)를 시도하세요(이 예제를 따라해보고 싶다면 이제 이 파일의 사본을 내려받으세요):

![](flexbox-example3.png)

여기서 우리는 자식들이 정말로 소속 컨테이너에서 이탈하는 모습을 확인할 수 있습니다. 이것을 해소할 수 있는 한 가지 방법은 다음 선언을 {{htmlelement("section")}} 규칙 부분에 추가하면 됩니다:

```css
flex-wrap: wrap;
```

또한, 다음 선언문을 {{htmlelement("article")}} 규칙 부분에 추가해보세요:

```css
flex: 200px;
```

지금 시도해보십시오. 이 규칙이 포함되면 레이아웃이 훨씬 더 나아 보입니다:

![](flexbox-example4.png)우리는 이제 여러 행을 갖게 되었다. 많은 flexbox 자녀들이 합당하다 싶게 각 행마다 (분배되어) 알맞게 맞춰졌습니다. 대열이탈된 것들은 다음 행으로 넘어갑니다. 아티클 요소에 `flex: 200px` 선언이 지정되었다는 의미는 각 요소에 적어도 200px 너비가 지정되었다는 의미이다. 우리는 나중에 이 속성에 대해 더 자세히 논의할 겁니다. 마지막 행에 있는 마지막 몇몇 자식들의 각 너비가 더 연장되면서 전체 행이 마찬가지로 채워진 것을 볼 수 있습니다.

하지만 할 수 있는 게 더 있습니다. 우선, {{cssxref("flex-direction")}} 속성값을 `row-reverse`로 변경해 보십시오. 이제 여러 행 레이아웃을 보유한 것은 마찬가지지만, 브라우저 창의 반대쪽 구석에서 시작하여 역방향 대열이 된 것이 확인될 겁니다.

## flex-flow 약칭

이 시점에서 {{cssxref("flex-direction")}}와 {{cssxref("flex-wrap")}} — {{cssxref("flex-flow")}}를 대신하는 약칭이 존재한다는 점을 언급할 가치가 있다. 예를 들어, 여러분은 다음을

```css
flex-direction: row;
flex-wrap: wrap;
```

다음으로 대체할 수 있다.

```css
flex-flow: row wrap;
```

## flex item의 flex 크기 조정

이제 첫 번째 예제로 복귀해서, 우리가 어떻게 flex item의 비율을 조절할 수 있는지 살펴봅시다. [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html)사본을 브라우저 탭으로 열거나 [flexbox1.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox1.html) 사본을 새로운 출발점으로 삼으세요.([라이브 참조](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

첫째, 당신의 CSS 파일 하단에 다음 규칙을 추가하십시오:

```css
article {
  flex: 1;
}
```

이것은 각 flex item이 기본 축을 따라 남은 공간을 어느 정도나 점유할지를 결정하는 단위가 없는 비율 값입니다. 이 경우, 우리는 각각의 {{htmlelement("article")}} 요소에 1의 값을 부여하고 있는데, 이는 패딩과 여백이 지정된 이후 남은 여분의 공간을 모두 동등한 크기로 점유하게 된다는 의미입니다. 그것은 비율이며, 각 flex item에 400000의 값을 부여하면 정확히 동일한 효과가 있음을 의미합니다.

이제 이전 규칙 아래에 다음 규칙을 추가합시다.

```css
article:nth-of-type(3) {
  flex: 2;
}
```

이제 새로 고침할 때, 세 번째 {{htmlelement("article")}}이 다른 두 개보다 사용 가능한 너비의 두 배나 많이 점유한다는 것을 알 수 있습니다. 말하자면 현재 총 4개의 비례 단위가 있는 겁니다. 처음 두 개의 flex item은 각각 하나로 구분되어 사용 가능한 공간의 1/4을 차지합니다. 세 번째 것은 두 개의 단위(2배율)를 차지하기 때문에 사용 가능한 공간의 2/4를 점유합니다(또는 1/2).

또한 flex 값 내에서 최소 크기 값을 지정할 수 있습니다. 다음과 같이 문서 부분의 기존 규칙을 업데이트해 보십시오.

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

이것은 기본적으로 "각 flex item은 먼저 사용 가능한 공간에서 200px를 부여받습니다. 그 후, 나머지 사용 가능한 공간은 비례 단위에 따라 분배됩니다." 새로 고침을 해보면 공간 배분 방식이 달라진 것이 확인될 겁니다.

![](flexbox-example1.png)

flexbox의 실제 값은 flex성/반응성에 포함되어 있다고 볼 수 있습니다. 다시 말해 브라우저 창의 크기를 재조정하거나 다른 {{htmlelement("article")}} 요소를 추가하더라도 레이아웃이 계속 정상적으로 작동합니다.

## flex: 약칭 對 정식 명칭

{{cssxref("flex")}} 최대 세 가지 서로 다른 값을 지정할 수 있는 약칭 속성입니다.

- 단위없는 비례 값은 우리가 위에서 논의한 바 있습니다. 단위없는 비례 값은 {{cssxref("flex-grow")}}라는 정식 명칭 속성을 사용하여 개별적으로 지정할 수 있습니다.
- 두 번째 단위없는 비례 값인 {{cssxref("flex-shrink")}}는 flex item이 컨테이너에서 넘칠 때(대열이탈) 존재를 드러냅니다. 이 값은 컨테이너 대열이탈을 방지하기 위해 넘치는 양을 각 flex item의 크기에서 어느 정도나 뺏어올지를 지정합니다. 이 값은 꽤 고수준의 flexbox 기능이며, 우리는 이 문서에서는 추가 내용을 다루지 않겠습니다.
- 위에서 논의했던 최소 크기 값입니다. 최소 크기 값은 {{cssxref("flex-basis")}}라는 정식 명칭 값을 사용하여 개별적으로 지정될 수 있습니다.

우리는 꼭 사용해야 할 경우가 아니라면(예를 들어, 이전 설정을 재정의하는 등) flex 속성에 정식 명칭을 사용하지 말라고 권고합니다. 정식 명칭의 사용은 추가 코드 작성이 많아 질뿐만 아니라 다소 혼란스러울 수도 있습니다.

## 수평 및 수직 정렬

또한 flexbox 기능을 사용하여 기본 축 또는 교차축을 따라 flex item을 정렬할수 있습니다. 이 기능은 새로운 예제인 [flex-align0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flex-align0.html)을 통해 살펴보자([라이브로도 보세요](http://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)). flexbox가 우리는 깔끔한 flex형 단추/툴바로 바뀌게될 겁니다. 지금 당장은 몇몇 단추들이 왼쪽 상단 모서리에 몰린 상태의 수평 메뉴 표시줄이 보입니다.

![](flexbox-example5.png)

우선 이 예제의 사본을 취득합니다.

이제 예제의 CSS의 맨 아래에 다음 내용을 추가하세요:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

페이지를 새로 고치면 버튼들이 수평 및 수직으로 중심이 잘 맞춰져 있음을 알 수 있습니다. 우리는 두 가지 새로운 속성을 통해 이 작업을 수행했습니다.

{{cssxref("align-items")}} 속성은 flex item이 교차축 어디에 놓일 지를 제어합니다.

- 이 속성값은 기본값으로 `stretch`입니다. 이 값은 교차축 방향으로 부모 요소를 채우기 위해 모든 flex item을 연장합니다. 부모가 교차 축 방향으로 고정폭이 주어지지 않았다면 모든 flex item이 최장 항목만큼 길어집니다. 이런 방식으로 우리의 첫 번째 예제가 기본값으로 같은 높이의 열을 얻게 된 것입니다.
- 우리가 위의 코드에서 사용한 `center` 값은 항목 무리가 자기들 고유의 면적를 유지하는 동시에 교차축을 따라 중심에 놓이게 만듭니다. 그런 까닭에 현재 예제 속 버튼이 수직으로 중심에 놓여있습니다.
- 또한 교차축의 시작과 끝에 맞춰 모든 항목을 정렬하게 해주는 `flex-start`와 `flex-end`와 같은 값도 가질 수 있습니다. 자세한 내용은 {{cssxref("align-items")}}을 참조하십시오.

{{cssxref("align-self")}} 속성을 단추에 적용함으로써 flex item에 속한 개별 항목에 대한 {{cssxref("align-items")}}동작을 재지정할 수 있습니다. 예를 들어 다음을 CSS에 추가해보세요:

```css
button:first-child {
  align-self: flex-end;
}
```

이것이 어떤 효과를 미치는지 한번 보고, 다 보았다면 다시 제거하세요.

{{cssxref("justify-content")}}는 flex item 무리가 기본 축 상 어디에 놓이는지를 제어합니다.

- 기본값은 `flex-start`이며, 이는 모든 항목이 기본 축의 시작 부분에 놓이도록 만듭니다.
- 당신은 `flex-end`를 사용하여 항목 무리를 기본 축의 가장자리에 놓이도록 만들 수도 있습니다.
- `center`는 `justify-content`를 대체할 수 있는 값으로 flex item 무리를 기본 축의 중심에 놓이도록 만들 겁니다.
- 우리가 위에서 사용했던 값인 `space-around`는 유용합니다. 모든 항목을 기본 축을 따라 고르게 분배하고 양쪽 끝에 약간의 공간도 남겨 놓습니다.
- 그 외에도 `space-between`이라는 값도 있습니다. 이는 `space-around`와 매우 흡사하다. 다만 이것은 양쪽 끝에 공간을 남기지 않습니다.

우리는 진도를 더 나가기 전에 여러분이 이들 값을 가지고 어떻게 작동하는지 시험해보라고 권장하고 싶습니다.

## flex item 순서 정하기

flexbox에는 소스 순서에 영향을 미치지 않고 flex item의 레이아웃 순서를 변경하는 기능도 있습니다. 이는 전통적인 레이아웃 메서드로는 불가능했던 내용입니다.

이를 위한 코드는 간단합니다: 당신의 버튼바 예제 코드에 다음과 같은 CSS를 추가해 보십시오:

```css
button:first-child {
  order: 1;
}
```

페이지를 새로 고치면 이제 "Smile" 버튼이 기본 축의 끝으로 이동한 것이 확인될 겁니다. 어떻게 이런 식으로 작동하는지 좀 더 상세히 얘기해 보겠습니다:

- 기본값으로 모든 flex item들은 {{cssxref("order")}} 값이 0입니다.
- 순위값이 높은 flex item들은 디스플레이 순서상 순위값이 낮은 항목들보다 나중에 나타납니다.
- 순위값이 동일한 항목들은 소스 순서대로 나타납니다. 따라서 4개 항목의 순서값이 각기 2, 1, 1, 0로 설정된 경우 표시 순서는 제4, 제2, 제3, 제1 순이 됩니다.
- 제 3항목은 동일한 순서값을 가지고 있지만, 소스 순서 상 제 2항목 뒤에 있기 때문에 제 2 항목 뒤에 나타납니다.

당신은 0 지정 항목보다 일찍 항목을 표시하도록 음수 순서 값을 설정할 수 있습니다. 예를 들어, 다음 규칙을 사용하여 "Blush" 버튼을 기본 축의 시작 부분에 표시할 수 있습니다:

```css
button:last-child {
  order: -1;
}
```

## 중첩된 flexbox box

flexbox를 사용하여 꽤 복잡한 레이아웃을 만들 수 있습니다. flex item을 flex container로 설정해도 전혀 문제없습니다. 그렇게 되면 그 컨테이너의 자녀가 flexbox처럼 배치됩니다. [complex-flexbox.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/complex-flexbox.html)를 찾아보세요. ([라이브로도 보세요](http://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![](flexbox-example7.png)

이를 위한 HTML은 상당히 간단합니다. 세 개의 {{htmlelement("article")}}를 포함하는 {{htmlelement("section")}} 요소가 있습니다. 세 번째 {{htmlelement("article")}}은 세 개의 {{htmlelement("div")}}를 포함하고 있습니다. :

```
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

앞의 레이아웃에 사용했던 코드를 살펴봅시다.

먼저 {{htmlelement("section")}}의 자식들을 flexbox로 취급해 배치하였습니다.

```css
section {
  display: flex;
}
```

다음으로 {{htmlelement("article")}} 무리 자체에 대해 약간의 flex 값을 설정하였습니다. 여기서 두 번째 규칙에 주목하십시오. 우리는 세 번째 {{htmlelement("article")}}이 자기 자식들을 flex item처럼 배치하도록 설정하고 있습니다. 그러나 이번에는 열처럼 배치하고 있습니다.

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
```

다음으로 첫 번째 {{htmlelement("div")}}를 선택합니다. 우리는 먼저 선택된 요소에 100px의 최소 높이를 효과적으로 주기 위해 `flex:1 100px;`을 사용합니다. 그리고 나서 우리는 그것의 자식들을 ({{htmlelement("button")}} 요소 무리를) flex item처럼 배치하도록 설정했습니다. 여기서 우리는 그것들을 줄 바꿈 행에 배치하고, 우리가 앞서 본 개별 버튼 예제에서 했던 것처럼 사용 가능한 공간의 중심에 정렬합니다.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

마지막으로, 우리는 버튼에 약간의 크기를 설정하되, 다소 흥미롭게도 1 auto라는 flex 값을 부여합니다. 이것은 매우 흥미로운 효과를 지니게 되는데, 브라우저 창의 폭을 조정해 보면 확인됩니다. 버튼은 최대한의 공간을 점유할 뿐만아니라 동일 선상에 가능한 한 많은 요소를 놓으려고 합니다. 그러나 해당 요소들이 더 이상 동일 선상에 안착할 수 없을 경우 새로운 라인으로 밀려납니다.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## 크로스 브라우저 호환성

flexbox 지원은 파이어폭스, 크롬, 오페라, 마이크로소프트 에지 및 인터넷 익스플로러 11, 안드로이드 및 iOS 최신 버전 등 대부분의 신형 브라우저에서 사용할 수 있습니다. 그러나 flexbox를 지원하지 않는 (또는 지원하지만, 실제로 구식 버전의 flexbox를 지원하는) 구형 브라우저 사용자가 여전히 존재한다는 것을 알아야 합니다.

여러분이 단지 기술을 익히고 실험할 뿐이라면 호환성 문제는 그다지 중요하지 않습니다; 그러나 만약 여러분이 실제 웹사이트에서 flexbox의 사용을 고려하고 있다면, 여러분은 (구형 브라우저에서) 테스트를 수행해야 하고, 최대한 다양한 브라우저 사용자들이 수용할만한 사이트 방문 경험을 보장할 필요가 있습니다.

flexbox는 몇몇 CSS 기능보다 다소 까다롭습니다. 예를 들어 브라우저에 CSS 그림자 기능이 빠진 경우 해당 사이트을 여전히 사용할 수 있습니다. 그러나 flexbox 기능을 지원하지 않을 경우 레이아웃이 완전히 깨져서 사용할 수 없게 됩니다.

[크로스 브라우저 테스트](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing) 단원에서 크로스 브라우저 지원 문제를 극복하기 위한 전략에 대해 논의합니다.

## 요약정리

이로써 flexbox의 기본 안내서를 마감합니다. 재미있는 경험이었기 바라며, 당신이 학습 진도를 더해 갈수록 flexbox를 자유자제로 다룰 수 있게 될 겁니다. 다음으로 CSS 레이아웃의 또 다른 중요한 측면인 CSS grid를 살펴볼 것입니다.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}
