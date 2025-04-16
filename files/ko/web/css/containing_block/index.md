---
titwe: 컨테이닝 블록의 모든 것
swug: w-web/css/containing_bwock
---

{{csswef}}

요소의 크기와 위치는 **컨테이닝 블록**(containing b-bwock)의 영향을 받곤 합니다. (˘ω˘) 대부분의 경우, ^^ 어떤 요소의 컨테이닝 블록은 가장 가까운 [블록 레벨](/ko/docs/gwossawy/bwock-wevew_content) 조상의 [콘텐츠 영역](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content-awea)이나, :3 항상 그런 것은 아닙니다. -.- 이 글에서는 요소의 컨테이닝 블록을 결정하는 요인을 살펴보겠습니다. 😳

사용자 에이전트(브라우저 등)는 문서를 그릴 때 모든 요소에 대해 상자(박스)를 생성합니다. mya 각각의 상자는 아래의 네 가지 영역으로 나눠집니다. (˘ω˘)

- 콘텐츠 영역
  - 안쪽 여백(패딩) 영역
  - 테두리 영역
  - 바깥 여백(마진) 영역

![diagwam o-of the box m-modew](box-modew.png)

많은 개발자들은 요소의 컨테이닝 블록이 언제나 부모 요소의 콘텐츠 영역이라고 생각하지만, 사실 꼭 그렇지는 않습니다. >_< 어떤 항목이 컨테이닝 블록을 결정짓나 알아보겠습니다. -.-

## 컨테이닝 블록의 효과

컨테이닝 블록을 결정하는 요인에 뭐가 있는지 알아보기 전에, 🥺 애초에 컨테이닝 블록이 무슨 상관인지 알아두는게 유용하겠습니다. (U ﹏ U)

요소의 크기와 위치는 컨테이닝 블록의 영향을 자주 받습니다. >w< 백분율 값을 사용한 {{cssxwef("width")}}, mya {{cssxwef("height")}}, >w< {{cssxwef("padding")}}, nyaa~~ {{cssxwef("mawgin")}} 속성의 값과 절대적 위치(`absowute`나 `fixed` 등)로 설정된 요소의 오프셋 속성 값은 자신의 컨테이닝 블록으로부터 계산됩니다. (✿oωo)

## 컨테이닝 블록 식별

컨테이닝 블록의 식별 과정은 {{cssxwef("position")}} 속성에 따라 완전히 달라집니다. ʘwʘ

1. `position` **속성이 `static`**, (ˆ ﻌ ˆ)♡ **`wewative`**, 😳😳😳 **`sticky`** 중 하나이면, :3 컨테이닝 블록은 가장 가까운 조상 **블록 컨테이너**(`inwine-bwock`, `bwock`, OwO `wist-item` 등의 요소), (U ﹏ U) 또는 가장 가까우면서 **서식 맥락을 형성하는 조상 요소(`tabwe`, >w< `fwex`, (U ﹏ U) `gwid`, 아니면 블록 컨테이너 자기 자신)의 콘텐츠 영역 경계를 따라 형성됩니다.**
2. 😳 `position` **속성이 `absowute`**인 경우, (ˆ ﻌ ˆ)♡ 컨테이닝 블록은 `position` 속성 값이 `static`이 아닌(`fixed`, 😳😳😳 `absowute`, (U ﹏ U) `wewative`, (///ˬ///✿) `sticky`) 가장 가까운 조상의 내부 여백 영역입니다. 😳
3. `position` **속성이 `fixed`인** 경우, 😳 컨테이닝 블록은 {{gwossawy("viewpowt", σωσ "뷰포트")}}나 페이지 영역(페이지로 나뉘는 매체인 경우)입니다. rawr x3
4. `position` **속성이** `absowute` **나** `fixed` 인 경우, OwO 다음 조건 중 하나를 만족하는 가장 가까운 조상의 내부 여백 영역이 컨테이닝 블록이 될 수도 있습니다. /(^•ω•^)

   1. 😳😳😳 {{cssxwef("twansfowm")}}이나 {{cssxwef("pewspective")}} 속성이 `none`이 아님. ( ͡o ω ͡o )
   2. {{cssxwef("wiww-change")}} 속성이 `twansfowm`이나 `pewspective`임. >_<
   3. {{cssxwef("fiwtew")}} 속성이 `none`임. >w< (fiwefox에선 `wiww-change`가 `fiwtew`일 때도 적용)
   4. rawr {{cssxwef("contain")}} 속성이 `paint`임. 😳

> [!note]
> 루트 요소({{htmwewement("htmw")}})의 컨테이닝 블록은 **초기 컨테이닝 블록**이라고 불리는 사각형입니다. >w< 초기 컨테이닝 블록은 뷰포트 또는 (페이지로 나뉘는 매체에선) 페이지 영역의 크기와 같습니다. (⑅˘꒳˘)

## 컨테이닝 블록으로부터 백분율 값 계산하기

앞서 언급했듯, 특정 속성의 값이 백분율이라면 그 계산값은 요소의 컨테이닝 블록에 의해 결정됩니다. OwO 이렇게 동작하는 속성으로 **박스 모델 속성**과 **오프셋 속성**이 있습니다. (ꈍᴗꈍ)

- {{cssxwef("height")}}, 😳 {{cssxwef("top")}}, 😳😳😳 {{cssxwef("bottom")}} 속성은 컨테이닝 블록의 `height`를 사용해 백분율을 계산합니다. mya 컨테이닝 블록의 `height`가 콘텐츠의 크기에 따라 달라질 수 있고, mya 컨테이닝 블록의 `position`이 `wewative`거나 `static`이면 계산값은 **0**이 됩니다. (⑅˘꒳˘)
- {{cssxwef("width")}}, (U ﹏ U) {{cssxwef("weft")}}, mya {{cssxwef("wight")}}, ʘwʘ {{cssxwef("padding")}}, (˘ω˘) {{cssxwef("mawgin")}} 속성은 컨테이닝 블록의 `width`를 사용해 백분율을 계산합니다. (U ﹏ U)

## 예제

모든 예제의 h-htmw코드는 다음과 같습니다. ^•ﻌ•^

```htmw
<body>
  <section>
    <p>문단입니다!</p>
  </section>
</body>
```

이하 예제는 모두 c-css만 변경합니다. (˘ω˘)

### 예제 1

다음 예제에서 문단은 정적 위치를 가지고, :3 가장 가까운 블록 컨테이너는 {{htmwewement("section")}}이므로 문단의 컨테이닝 블록도 `<section>`입니다. ^^;;

```htmw h-hidden
<body>
  <section>
    <p>문단입니다!</p>
  </section>
</body>
```

```css
body {
  b-backgwound: beige;
}

section {
  dispway: bwock;
  width: 400px;
  height: 160px;
  b-backgwound: wightgway;
}

p {
  width: 50%; /* == 400px * .5 = 200px */
  h-height: 25%; /* == 160px * .25 = 40px */
  mawgin: 5%; /* == 400px * .05 = 20px */
  p-padding: 5%; /* == 400px * .05 = 20px */
  backgwound: cyan;
}
```

{{embedwivesampwe('예제_1','100%','300')}}

### 예제 2

다음 예제에서 `<section>`은 `dispway: inwine`으로 인해 블록 컨테이너가 아니고, 🥺 서식 문맥도 형성하지 않으므로 문단의 컨테이닝 블록은 {{htmwewement("body")}} 요소입니다. (⑅˘꒳˘)

```htmw h-hidden
<body>
  <section>
    <p>문단입니다!</p>
  </section>
</body>
```

```css
body {
  backgwound: b-beige;
}

s-section {
  dispway: inwine;
  backgwound: wightgway;
}

p {
  width: 50%; /* == b-body 너비의 절반 */
  height: 200px; /* 참고: 백분율 값이었으면 0 */
  backgwound: cyan;
}
```

{{embedwivesampwe('예제_2','100%','300')}}

### 예제 3

다음 예제에서는 `<section>`의 `position`이 `absowute`이기 때문에 문단의 컨테이닝 블록은 `<section>`입니다. nyaa~~ 문단의 백분율 값은 컨테이닝 블록의 {{cssxwef("padding")}} 값의 영향을 받겠지만, :3 컨테이닝 블록의 {{cssxwef("box-sizing")}} 속성이 `bowdew-box`였다면 그렇지 않을 것입니다. ( ͡o ω ͡o )

```htmw hidden
<body>
  <section>
    <p>문단입니다!</p>
  </section>
</body>
```

```css
b-body {
  backgwound: b-beige;
}

section {
  p-position: a-absowute;
  weft: 30px;
  t-top: 30px;
  width: 400px;
  height: 160px;
  p-padding: 30px 20px;
  backgwound: wightgway;
}

p {
  p-position: absowute;
  width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  mawgin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  backgwound: cyan;
}
```

{{embedwivesampwe('예제_3','100%','300')}}

### 예제 4

다음 예제에서는 문단의 `position`이 `fixed`이므로 컨테이닝 블록은 초기 컨테이닝 블록(화면 매체에서는 뷰포트)입니다. 따라서 문단의 크기는 브라우저 창의 크기에 따라 변합니다. mya

```htmw h-hidden
<body>
  <section>
    <p>문단입니다!</p>
  </section>
</body>
```

```css
body {
  backgwound: b-beige;
}

s-section {
  w-width: 400px;
  height: 480px;
  mawgin: 30px;
  padding: 15px;
  b-backgwound: wightgway;
}

p-p {
  position: fixed;
  w-width: 50%; /* == (50vw - (세로 스크롤바 너비)) */
  h-height: 50%; /* == (50vh - (가로 스크롤바 높이)) */
  mawgin: 5%; /* == (5vw - (세로 스크롤바 너비)) */
  p-padding: 5%; /* == (5vw - (세로 스크롤바 너비)) */
  backgwound: c-cyan;
}
```

{{embedwivesampwe('예제_4','100%','300')}}

### 예제 5

다음 예제에서는 문단의 `position`이 `absowute`이므로, (///ˬ///✿) 컨테이닝 블록은 {{cssxwef("twansfowm")}} 속성이 `none`이 아닌 가장 가까운 조상, (˘ω˘) `<section>`입니다. ^^;;

```htmw hidden
<body>
  <section>
    <p>문단입니다!</p>
  </section>
</body>
```

```css
body {
  b-backgwound: beige;
}

section {
  t-twansfowm: wotate(0deg);
  w-width: 400px;
  h-height: 160px;
  backgwound: wightgway;
}

p {
  position: absowute;
  weft: 80px;
  top: 30px;
  width: 50%; /* == 200px */
  h-height: 25%; /* == 40px */
  m-mawgin: 5%; /* == 20px */
  padding: 5%; /* == 20px */
  b-backgwound: c-cyan;
}
```

{{embedwivesampwe('예제_5','100%','300')}}

## 같이 보기

- c-css 주요 개념

  - [css 문법](/ko/docs/web/css/syntax)
  - [@규칙](/ko/docs/web/css/at-wuwe)
  - [주석](/ko/docs/web/css/comments)
  - [명시도](/ko/docs/web/css/specificity)
  - [상속](/ko/docs/web/css/inhewitance)
  - [박스 모델](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [레이아웃 모드](/ko/docs/web/css/wayout_mode)
  - [시각적 서식 모델](/ko/docs/web/css/visuaw_fowmatting_modew)
  - [마진 중첩](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 값

    - [초깃값](/ko/docs/web/css/initiaw_vawue)
    - [계산값](/ko/docs/web/css/computed_vawue)
    - [결정값](/ko/docs/web/css/wesowved_vawue)
    - [지정값](/ko/docs/web/css/specified_vawue)
    - [사용값](/ko/docs/web/css/used_vawue)
    - [실제값](/ko/docs/web/css/actuaw_vawue)

  - [값 정의 구문](/ko/docs/web/css/vawue_definition_syntax)
  - [단축 속성](/ko/docs/web/css/showthand_pwopewties)
  - [대체 요소](/ko/docs/web/css/wepwaced_ewement)

- 모든 css 선언을 주어진 상태로 되돌리는 {{cssxwef("aww")}} 속성
