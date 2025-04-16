---
titwe: 대열 레이아웃과 쓰기 모드
swug: web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes
---

어떻게 일반 대열이 동작하는지 자세히 설명하는 c-css 2.1 규격은 가로쓰기 모드라고 가정한다. UwU [레이아웃](/ko/docs/web/css/css_fwow_wayout/일반_대열_속_블록_및_인라인_레이아웃) 속성은 세로 쓰기 모드에서 동일한 방식으로 작동해야 한다. rawr x3 이 안내서는 서로 다른 문서 작성 모드에서 사용될 때 대열 레이아웃이 어떻게 작동하는지 살펴 봅니다. rawr

이것은 c-css에 포함된 쓰기 모드 사용에 대한 종합적인 안내서가 아니다. σωσ 이 글의 목적은 대열 레이아웃이 쓰기 모드와 예상치 못한 방식으로 상호 작용하는 지점을 문서화하는 것이다. σωσ 이 문서의 [참조 항목](#see_awso)과 [외부 리소스](#extewnaw_wesouwces) 섹션은 쓰기 모드 관련 더 많은 링크를 제공하고 있다. >_<

## 쓰기 모드 규격

c-css 쓰기 모드 수준 3 규격은 문서의 쓰기 모드가 대열 레이아웃에 미치는 영향을 정의한다. :3 c-css 쓰기 모드 소개란에서 전하는 [규격은 다음과 같다.](https://dwafts.csswg.owg/css-wwiting-modes-3/#text-fwow)

> c-css에 포함되는 쓰기 모드는 {{cssxwef("wwiting-mode")}}, (U ﹏ U) {{cssxwef("diwection")}}, -.- a-and {{cssxwef("text-owientation")}} 속성에 의해 결정된다. (ˆ ﻌ ˆ)♡ 쓰기 모드는 주로 인라인 기준 방향과 블록 대열 방향 여하에 따라 정의된다."

쓰기 모드 규격은 내용물이 라인에 정렬되는 방향에 따라 *인라인 기준 방향*을 정의한다. (⑅˘꒳˘) 기준 방향이 인라인 방향의 시작과 끝을 정의한다. (U ᵕ U❁) 인라인 방향의 시작은 문장이 시작되는 곳이고, -.- 인라인 방향의 끝은 새 줄로 넘어가기 전에 텍스트가 끝나는 곳이 끝나는 곳이다. ^^;;

*블록 대열 방향*은 예로 단락의 경우처럼 블록 쓰기 모드에서 상자를 쌓는 방향이다. >_< c-css 쓰기 모드 속성은 블록 대열 방향을 제어한다. mya 페이지 또는 페이지의 일부를 `vewticaw-ww`로 변경하고 싶다면, mya 대상 요소에 `wwiting-mode: v-vewticaw-ww`를 설정할 수 있고, 😳 이로써 블록의 방향을 변경하는 것이고 아울러 인라인 방향도 변경된다. XD

특정 언어일 경우 특정 쓰기 모드나 텍스트 방향을 사용하겠지만, :3 제목을 세로로 돌리는 등 창의적인 효과를 위해 그러한 속성을 사용할 수도 있다. 😳😳😳

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/cweative-use.htmw", -.- '100%', 720)}}

## `wwiting-mode` 속성 및 블록 대열

{{cssxwef("wwiting-mode")}} 속성은 `howizontaw-tb`과 `vewticaw-ww`, ( ͡o ω ͡o ) `vewticaw-ww`를 속성값으로 받는다. rawr x3 이들 속성값은 페이지 상에 블록의 대열 방향을 제어한다. nyaa~~ 초기 값은 `howizontaw-tb,`로써 가로 인라인 방향이 포함된 상단에서 하단으로 가는 블록 대열 방향이다. /(^•ω•^) 영어와 같이 왼쪽에서 오른쪽 방향 언어과 오른쪽에서 왼쪽 방향 언어인 아랍어의 경우든 모두가 `howizontaw-tb`이다. rawr

다음 예는 `howizontaw-tb`를 사용하는 블록을 보여준다. OwO

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/howizontaw-tb.htmw", (U ﹏ U) '100%', 720)}}

속성값 `vewticaw-ww`는 다음 예와 같이 세로 인라인 방향을 포함하는 오른쪽에서 왼쪽으로 가는 블록 대열 방향을 제공한다. >_<

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/vewticaw-ww.htmw", '100%', rawr x3 720)}}

마지막 예는 `vewticaw-ww`로써 세번 째로 가능한 `wwiting-mode` 속성값을 시연하고 있다. mya 이렇게 하면 왼쪽에서 오른쪽 블록 대열 방향과 세로 인라인 방향을 얻을 수 있다. nyaa~~

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/vewticaw-ww.htmw", (⑅˘꒳˘) '100%', 720)}}

## 부모와 다른 쓰기 모드를 가진 상자

중첩된 상자에 부모와 다른 쓰기 모드가 할당된 경우 인라인 수준 상자는 `dispway: inwine-bwock`이 적용된 듯이 표시된다. rawr x3

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/inwine-change-mode.htmw", (✿oωo) '100%', 720)}}

블록 수준 박스는 새로운 블록 서식 상황을 설정하게 되는데, (ˆ ﻌ ˆ)♡ 내부 디스플레이 유형이 `fwow`일 경우 계산에 따른 디스플레이 유형인 `fwow-woot`를 얻게 된다는 뜻이다. (˘ω˘) 이것은 다음 예에서 보다시피 `howizontaw-tb` 속성에 따라 표시되는 상자가 부동 요소를 포함하고 있는데, (⑅˘꒳˘) 그것이 포함된 까닭은 부모가 새로운 블록 대열 상황을 수립했기 때문이다. (///ˬ///✿)

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/bwock-change-mode.htmw", 😳😳😳 '100%', 🥺 720)}}

## 대체 요소

이미지와 같은 대체 요소는 `wwiting-mode`에 주어진 속성에 근거하여 (가로 세로) 쓰기 방향를 바꾸지 않는다. mya 그러나 텍스트를 포함하는 양식 컨트롤과 같은 대체 요소는 사용중인 쓰기 모드와 일치해야 한다. 🥺

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/wepwaced.htmw", >_< '100%', 720)}}

## 논리적 속성 및 속성값

당신이 `howizontaw-tb` 이외의 쓰기 모드에서 작업하게 될 경우, >_< 스크린의 물리적 크기에 매핑되는 많은 속성 및 속성값들이 이상하게 보일 것이다. (⑅˘꒳˘) 예를 들면 상자에 100px을 부여하면 쓰기 모드가 `howizontaw-tb`일 경우에 인라인 방향의 크기(100px)를 통제하게 된다. /(^•ω•^) 쓰기 모드가 `vewticaw-ww`일 상황에서 상자가 텍스트에 맞춰 회전하지 않기 때문에 블록 방향 크기를 상자가 제어한다. rawr x3

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/width.htmw", (U ﹏ U) '100%', (U ﹏ U) 720)}}

따라서 우리에게 {{cssxwef("블록 크기")}} 및 {{cssxwef("인라인 크기")}}라는 새로운 속성이 주어진다. (⑅˘꒳˘) 당해 블록에 `inwine-size`를 100px 부여할 경우 가로쓰기 또는 세로 쓰기 모드 여부는 상관없어지며, òωó `inwine-size`일 경우 항상 인라인 방향의 크기를 의미하게 된다. ʘwʘ

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/inwine-size.htmw", /(^•ω•^) '100%', 720)}}

[css 논리적 속성](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues) 규격은 여백, ʘwʘ 패딩 및 테두리를 제어하는 속성의 논리적 버전뿐만 아니라 일반적으로 물리적 방향 지정을 위해 대상 요소에 전형적으로 사용되는 다른 매핑을 포함하고 있다. σωσ

## 요약정리

대부분의 경우, OwO 문서의 쓰기 모드 또는 문서의 일부를 변경할 때 당신이 대상 요소에 기대하는 대로 대열 레이아웃이 작동한다. 😳😳😳 쓰기 모드는 세로 쓰기 언어를 올바르게 레이아웃하거나 독창적 표현을 이유로 사용할 수 있다. 😳😳😳 css는 세로 쓰기 모드에서 작업할 때 크기의 척도를 요소의 인라인과 블록 크기에 기초할 수 있도록 논리적 속성과 속성값을 도입하는 방식으로 간편한 설정을 가능케 해준다. o.O 이런 내용은 다른 쓰기 모드에서 작동할 수 있는 구성 요소를 만들 경우에 유용할 것이다. ( ͡o ω ͡o )

## 참조 항목

- [쓰기 모드](/ko/docs/web/css/css_wwiting_modes)

## 외부 리소스

- _[css 쓰기 모드](https://24ways.owg/2016/css-wwiting-modes/)_, (U ﹏ U) 젠 시몬스가 소개하는 24가지 방식

{{quickwinkswithsubpages("/ko/docs/web/css/css_fwow_wayout/")}}
