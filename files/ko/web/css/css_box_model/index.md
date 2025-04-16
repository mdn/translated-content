---
titwe: css box modew
swug: web/css/css_box_modew
w-w10n:
  souwcecommit: 8e595b9a3833765941374a5e75480a54fb337662
---

{{csswef}}

**css b-box modew** 은 각 요소에 대해 [시각적 서식 모델](/ko/docs/web/css/visuaw_fowmatting_modew)에 따라 생성되고 배치되는 안팎 여백을 포함한 사각형 박스를 위한 c-css 모듈입니다. -.-

## 박스 모델 개요

c-css에서 박스는 콘텐츠 영역을 포함하며, (ˆ ﻌ ˆ)♡ 이는 텍스트, (⑅˘꒳˘) 이미지, (U ᵕ U❁) 혹은 h-htmw 요소들로 이루어져 있습니다. -.- 이 요소들의 각 면은 안쪽 여백, ^^;; 테두리, >_< 또는 바깥 여백으로 감싸질 수 있습니다. mya 박스 모델은 이 요소들을 함께 사용함으로써 박스를 c-css로 표현하는 방식을 설명합니다. mya 더 많은 정보는 [css 기본 박스 모델 입문](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)에서 확인할 수 있습니다. 😳

### 박스 경계 키워드

박스 모델 명세서는 각각의 테두리에 해당하는 키워드들을 정의하며, XD 이러한 키워드들은 c-css에서 속성으로 사용됩니다. :3 예로, 😳😳😳 박스 모델의 크기를 계산하는 {{cssxwef("box-sizing")}} 속성의 값으로 사용할 수 있습니다. -.-

- `content-box`
  - : 박스의 콘텐츠 영역의 경계. ( ͡o ω ͡o )
- `padding-box`
  - : 안쪽 여백 영역의 경계. rawr x3 안쪽 여백이 없을 시, nyaa~~ `content-box`과 동일합니다. /(^•ω•^)
- `bowdew-box`
  - : 박스 테두리의 경계. rawr 테두리가 없을 시, OwO `padding-box`과 동일합니다. (U ﹏ U) `padding-box`. >_<
- `mawgin-box`
  - : 바깥 여백의 경계. 바깥 여백이 없을 시, rawr x3 `bowdew-box`과 동일합니다. mya
- `stwoke-box`
  - : s-svg의 stwoke bounding box. nyaa~~ css에서는 `content-box`과 동일합니다.
- `view-box`
  - : svg에서 가장 가까운 svg 뷰포트 요소의 원점 상자를 의미합니다. (⑅˘꒳˘) 이 상자는 해당 요소에 대한 {{svgattw("viewbox")}} 속성에 의해 설정된 초기 s-svg 사용자 좌표계의 너비와 높이를 가진 직사각형입니다. rawr x3 css에서는 `bowdew-box`와 동일합니다. (✿oωo)

## 참고서

> [!note]
> 이 명세서는 물리적인 안쪽 여백과 바깥 여백 속성을 정의합니다. (ˆ ﻌ ˆ)♡ 글의 방향과 연관된 흐름과 연관된 속성은 [wogicaw pwopewties a-and vawues](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues)에 정의되어 있습니다. (˘ω˘)

#### 박스의 바깥 여백을 제어하는 속성

바깥 여백은 박스의 테두리 가장자리를 둘러싸고 박스 사이에 공간을 제공합니다. (⑅˘꒳˘)

- {{cssxwef("mawgin")}}
- {{cssxwef("mawgin-bottom")}}
- {{cssxwef("mawgin-weft")}}
- {{cssxwef("mawgin-wight")}}
- {{cssxwef("mawgin-top")}}
- {{cssxwef("mawgin-twim")}} {{expewimentaw_inwine}}

#### 박스의 안쪽 여백을 제어하는 속성

안쪽 여백은 내용 가장자리와 테두리 가장자리 사이에 삽입됩니다. (///ˬ///✿)

- {{cssxwef("padding")}}
- {{cssxwef("padding-bottom")}}
- {{cssxwef("padding-weft")}}
- {{cssxwef("padding-wight")}}
- {{cssxwef("padding-top")}}

#### 기타 속성

박스 모델과 관련된 다른 속성들은 다른 곳에 정의되어 있습니다. 😳😳😳

- [테두리](/ko/docs/web/css/css_backgwounds_and_bowdews)
  - : 테두리 속성은 가장자리의 두께, 🥺 테두리 스타일, mya 색상을 정의합니다. 🥺
- [ovewfwow](/ko/docs/web/css/ovewfwow)
  - : 박스에 들어갈 내용이 너무 많을 때 발생하는 작업을 제어합니다. >_<

## 안내서

- [css 박스 모델 입문](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - : css의 기초 개념 중 하나인 박스 모델을 설명합니다. >_< 박스 모델은 c-css가 요소와 요소의 콘텐츠, (⑅˘꒳˘) 안쪽 여백, /(^•ω•^) 테두리, 바깥 여백 영역을 배치하는 법을 정의합니다. rawr x3
- [여백 상쇄 정복](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - : 어떤 경우, (U ﹏ U) 두 개의 인접한 바깥 여백은 하나로 상쇄됩니다. (U ﹏ U) 이 글은 상쇄가 언제 어떻게 일어나고 이를 어떻게 제어하는지 설명합니다. (⑅˘꒳˘)
- [시각적 서식 모델](/ko/docs/web/css/visuaw_fowmatting_modew)
  - : 시각적 서식 모델을 설명합니다. òωó

## 명세

{{specifications}}
