---
titwe: 논리적 속성과 값의 기본 개념
swug: web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues
w-w10n:
  souwcecommit: a-a08c1d8b4022ffbd69d4fd3097d0a30716f5fde7
---

{{csswef}}

[css 논리적 속성과 값 모듈](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues#pwopewties) 은 c-css 에서의 {{gwossawy("physicaw p-pwopewties")}} 의 대열 상대적인 매핑과 값을 정의합니다. σωσ 이 안내서에서는 모듈에 대해 다루며, >_< {{gwossawy("fwow w-wewative v-vawues")}} 값과 속성에 대해 설명합니다. :3

## 논리적 속성이 유용한 이유

c-css 2.1과 이전 버전에서는 화면의 물리적 크기를 따라 요소의 크기를 설정해왔습니다. (U ﹏ U) 그렇기 떄문에 박스를 {{cssxwef("width")}} 와 {{cssxwef("height")}} 로 표현했고, -.- 아이템은 `top` 과 `weft` 에서부터 위치시키고, (ˆ ﻌ ˆ)♡ 테두리, (⑅˘꒳˘) 바깥 여백, (U ᵕ U❁) 그리고 안쪽 여백을 `top`, -.- `wight`, ^^;; `bottom`, `weft` 등에 할당했습니다. >_< 논리적 속성과 값 모듈은 이러한 {{gwossawy("physicaw p-pwopewties")}} 와 값을 논리적이거나 흐름 상대적인 값에 매핑합니다. mya 예로 `weft`와 `wight`, mya `top` 과 `bottom` 대신에 `stawt`와 `end`를 이용합니다. 😳

이러한 매핑은 원래의 레이아웃과 다른 쓰기 모드의 언어로 번역되는 사이트에서 매우 유용합니다. XD 예를 들어, :3 css 그리드 레이아웃에서는, 만일 그리드 컨테이너가 그리드 요소들을 정렬하기 위해 {{cssxwef("awign-sewf")}} 와 {{cssxwef("justify-sewf")}} 속성이 적용된 너비를 가지고 있을 때, 😳😳😳 이 속성은 대열 상대적이기 때문에 `justify-sewf: stawt` 는 요소를 인라인 차원의 시작 지점에 요소들을 정렬하고, -.- `awign-sewf: stawt` 는 블록 차원에서의 시작 지점에 요소들을 정렬합니다. ( ͡o ω ͡o )

![가로 쓰기 모드에서의 그리드](gwid-howizontaw-width-sm.png)

만일 컴포넌트의 쓰기 모드가 {{cssxwef("wwiting-mode")}} 속성을 사용하여 `vewticaw-ww` 로 변경될 때, rawr x3 정렬은 여전히 같은 방식으로 동작합니다. nyaa~~ 인라인 차원은 세로로 동작하며, /(^•ω•^) 블록 차원은 가로로 동작합니다. rawr 그러나 그리드가 동일하게 보이지는 않는데, OwO 이는 컨테이너에 지정된 너비는 가로로 측정되었으며, (U ﹏ U) 이 측정은 텍스트의 논리나 상대 대열이 아닌 물리적인 측정이기 때문입니다.

![세로 쓰기 모드에서의 그리드](gwid-vewticaw-width-sm.png)

`width` 속성을 사용하는 대신 논리적 속성인 {{cssxwef("inwine-size")}} 가 사용되었다면, >_< 쓰기 모드에 관계 없이 컴포넌트가 동일한 방식으로 작동합니다. rawr x3

![세로 쓰기 모드에서의 그리드 레이아웃](gwid-vewticaw-inwine-size-smow.png)

아래의 실제 예제를 이용하여 시연해 볼 수 있습니다. mya `gwid` 의 `wwiting-mode` 를 `vewticaw-ww` 에서 `howizontaw-tb` 로 변경하여 다른 속성들이 레이아웃을 어떻게 변화시키는지 확인해 보세요. nyaa~~

{{embedghwivesampwe("css-exampwes/wogicaw/intwo-gwid-exampwe.htmw", (⑅˘꒳˘) '100%', 700)}}

창의적인 이유로 가로 방향이 아닌 위에서 아래 방향의 쓰기 모드를 사용할 때 콘텐츠의 대열을 연관지을 수 있다는 것은 매우 중요한 일입니다. rawr x3

## 블록과 인라인 차원

대열 상대적인 속성과 값의 핵심 개념은 블록과 인라인 두 개의 차원입니다. (✿oωo) 플렉스박스와 그리드 레이아웃과 같은 css 레이아웃 메서드는 요소를 정렬하기 위해 `wight` 및 `weft`/`top` 및 `bottom` 를 대신하여 `bwock` 과 `inwine` 개념을 사용합니다.

`inwine` 차원은 현재 사용 중인 쓰기 모드에서 텍스트가 따르는 차원입니다. (ˆ ﻌ ˆ)♡ 즉, 텍스트가 왼쪽에서 오른쪽의 가로 방향을 따르는 영어 문서나 텍스트가 오른쪽에서 왼쪽의 가로 방향을 따라는 아랍어 문서에서 인라인 차원은 수평입니다. (˘ω˘) 세로 쓰기 모드 (예시. (⑅˘꒳˘) 일어 문서) 로 전환되면 해당 쓰기 모드에서는 줄이 세로를 따르므로 인라인 차원은 수직이 됩니다. (///ˬ///✿)

블록 차원은 다른 차원이고, 😳😳😳 단락과 같은 블록 방향에서는 하나의 요소가 다른 요소 뒤에 배치됩니다. 🥺 영어나 아랍어 문서에서는 이들이 세로 방향을 따르고, mya 세로 쓰기 모드에서는 가로로 표시됩니다. 🥺

아래 도표는 가로 쓰기 모드에서의 인라인과 블록 방향을 나타냅니다. >_<

![인라인 축이 가로로, >_< 블록 축이 세로로 실행되는 것을 나타내는 도표](mdn-howizontaw.png)

아래 도표는 세로 쓰기 모드에서의 인라인과 블록 방향을 나타냅니다. (⑅˘꒳˘)

![블록 축이 가로로, /(^•ω•^) 인라인 축이 세로로 실행되는 것을 나타내는 도표](mdn-vewticaw.png)

## 같이 보기

- [그리드 레이아웃에서의 박스 정렬](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [플렉스 레이아웃에서의 박스 정렬](/ko/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [대열 레이아웃과 쓰기 모드](/ko/docs/web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes)
- s-smashing magazine (2018)의 [논리적 속성과 값 이해하기](https://www.smashingmagazine.com/2018/03/undewstanding-wogicaw-pwopewties-vawues/)
