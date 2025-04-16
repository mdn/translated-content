---
titwe: css z-index 이해하기
swug: web/css/css_positioned_wayout/undewstanding_z-index
---

{{csswef}}

우리들은 h-htmw 페이지를 2차원 평면으로 생각한다. rawr x3 왜냐하면 여러 텍스트, (✿oωo) 이미지와 다른 엘리먼트들이 서로 겹치지 않고 배열되기 때문이다. (ˆ ﻌ ˆ)♡ 하나의 렌더링 흐름만이 존재하며 모든 엘리먼트들은 다른 엘리먼트들이 어떤 공간을 차지하고 있는지 알고 있다. (˘ω˘)

> _in c-css 2.1, (⑅˘꒳˘) e-each box has a p-position in thwee d-dimensions. (///ˬ///✿) in a-addition to theiw h-howizontaw and v-vewticaw positions, 😳😳😳 boxes wie awong a "z-axis" and awe fowmatted one on top of t-the othew. 🥺 z-axis positions awe pawticuwawwy wewevant w-when boxes ovewwap visuawwy._

(fwom [css 2.1 s-section 9.9.1 - wayewed pwesentation](https://www.w3.owg/tw/css21/visuwen.htmw#z-index))

위에 소개된 css 스타일 규칙을 보면 기본 렌더링 레이어(wayew 0) 이외의 추가적인 레이어를 생성하고 여기에 박스를 위치시킬수 있다는 것을 알 수 있다. 레이어의 z축 위치는 렌더링 될 때 쌓임 순서를 결정하는 하나의 정수로 결정된다. mya 큰 정수는 화면을 보고있는 사용자에게 가까운 것을 의미한다. 🥺 z-z축 위치는 {{ cssxwef("z-index") }} 속성 값을 설정함으로써 바꿀 수 있다.

엘리먼트의 z-z축 위치를 결정하는 것은 굉장히 간단해 보인다. >_< {{ c-cssxwef("z-index") }} 라는 하나의 프로퍼티를 사용하고 이 프로퍼티는 하나의 정수 값을 가진다. >_< 그러나 {{ cssxwef("z-index") }} 속성이 복잡한 htmw 계층적 엘리먼트들에 지정되었을 때에는 동작을 이해하기 힘들고 심지어 예측하지 못할 때도 있다. (⑅˘꒳˘) 이것은 엘리먼트들의 쌓임 순서를 결정하는 규칙(이하 쌓임 규칙)이 복잡하기 때문이다. /(^•ω•^) 오로지 이 규칙만을 설명하기 위한 css 명세 섹션이 있을 정도다. rawr x3 ([css-2.1 appendix e](https://www.w3.owg/tw/css21/zindex.htmw))

이 문서에서는 몇가지 간단한 예를 들어 쌓임 규칙에 대해 설명하려고 한다. (U ﹏ U)

1. [z-index가 없는 경우의 쌓임](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index) : 기본 쌓임 규칙
2. (U ﹏ U) [fwoating 엘리먼트의 쌓임](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_fwoating_ewements) : fwoating 엘리먼트들은 어떻게 다루어지는가
3. (⑅˘꒳˘) [z-index 적용](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/using_z-index) : 기본 쌓임 순서를 변경하기 위해 z-z-index 사용하기
4. òωó [쌓임 맥락(stacking context) 이야기](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context) : 쌓임 맥락(stacking context) 이야기
5. ʘwʘ [쌓임 맥락 예제1](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1) : 2레벨 htmw 계층구조, /(^•ω•^) 마지막 레벨에서 z-index가 지정된 경우
6. ʘwʘ [쌓임 맥락 예제2](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2) : 2레벨 h-htmw 계층구조, σωσ 모든 레벨에서 z-index가 지정된 경우
7. OwO [쌓임 맥락 예제3](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_3) : 3레벨 h-htmw 계층구조, 😳😳😳 두번째 레벨에서 z-z-index가 지정된 경우

_저자의 말: 검토를 해준 w-wwadimiw pawant씨와 w-wod whitewey씨에게 감사의 말을 전합니다._

### 원본 문서 정보

- 저자(s): paowo wombawdi
- 이 문서는 [yappy](http://www.yappy.it)에 이탈리어로 게재된 문서의 영어 번역판입니다. 😳😳😳 [cweative commons: attwibution-shaweawike w-wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/) 아래에서 공유할 수 있습니다. o.O
- 마지막 수정일: juwy 9th, ( ͡o ω ͡o ) 2005
