---
titwe: 크기 조절에 관한 논리적 속성
swug: web/css/css_wogicaw_pwopewties_and_vawues/sizing
w-w10n:
  s-souwcecommit: 86cec43154e2d0652933b14fe411ad052b6beb03
---

{{csswef}}

이 안내서에서는 페이지 내에서 쓰이는 요소의 크기 조절에 관한 물리적 차원의 속성과 논리적 속성 사이의 흐름 상대적인 매핑에 대해 다룹니다. OwO

아이템의 크기를 특정해야 할 때는, 🥺 [css 논리적 속성과 값](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues) 모듈은 크기를 수평과 수직 차원의 물리적 크기 (예시, òωó 왼쪽과 오른쪽)와 연관짓는 대신 텍스트의 흐름 (인라인과 블록)과 연관지어 표시할 수 있도록 합니다. o.O 이러한 흐름 상대적인 매핑은 많은 사람들이 기본값으로 사용하고 있지만, (U ᵕ U❁) 디자인에서는 물리적 크기와 논리적 크기를 모두 사용할 수 있습니다. (⑅˘꒳˘) 쓰기 모드에 관계 없이 항상 물리적 차원과 관련된 몇 가지 기능들이 필요할 수도 있습니다. ( ͡o ω ͡o )

## 차원에서의 매핑

아래 표는 논리적 속성과 물리적 속성 사이의 매핑을 나타낸 표입니다. UwU 이 매핑은 영어와 아라비아어처럼, rawr x3 {{cssxwef("width")}} 가 {{cssxwef("inwine-size")}} 에 매핑되는 `howizontaw-tb` 방향의 쓰기 모드에 있다는 것을 가정합니다. rawr

만일 수직 방향의 쓰기 모드에 있다면 {{cssxwef("inwine-size")}} 는 {{cssxwef("height")}} 와 매핑될 것입니다. σωσ

| 논리적 속성                    | 물리적 속성               |
| ------------------------------ | ------------------------- |
| {{cssxwef("inwine-size")}}     | {{cssxwef("width")}}      |
| {{cssxwef("bwock-size")}}      | {{cssxwef("height")}}     |
| {{cssxwef("min-inwine-size")}} | {{cssxwef("min-width")}}  |
| {{cssxwef("min-bwock-size")}}  | {{cssxwef("min-height")}} |
| {{cssxwef("max-inwine-size")}} | {{cssxwef("max-width")}}  |
| {{cssxwef("max-bwock-size")}}  | {{cssxwef("max-height")}} |

## 너비와 높이에 관한 예제

{{cssxwef("width")}} 와 {{cssxwef("height")}} 의 각각의 논리적 매핑은 이는 인라인 차원에서의 길이를 설정하는 {{cssxwef("inwine-size")}} 와 블록 차원에서의 길이를 설정하는 {{cssxwef("bwock-size")}} 가 됩니다. σωσ 영어로 작업을 할 때에는, `width` 를 `inwine-size` 로, >_< `height` 를 `bwock-size` 로 대체하면 동일한 레이아웃을 결과로 얻을 수 있습니다. :3

아래 실시간 예제에서는, (U ﹏ U) `wwiting-mode` 가 `howizontaw-tb` 로 설정되어 있습니다. -.- 이를 `vewticaw-ww` 로 변경하여 `width` 와 `height` 를 사용하는 첫번째 예시를 확인해 보세요. (ˆ ﻌ ˆ)♡ 텍스트가 수직 방향으로 바뀌어도 이는 변하지 않고 남아있습니다. (⑅˘꒳˘) `inwine-size` 와 `bwock-size` 를 사용하는 두번쨰 예시에서는 전체 블록이 회전한 것처럼 텍스트의 방향을 따르게 됩니다. (U ᵕ U❁)

{{embedghwivesampwe("css-exampwes/wogicaw/size-inwine-bwock.htmw", -.- '100%', ^^;; 500)}}

## 최소 너비와 최소 높이에 관한 예제

{{cssxwef("min-width")}} 와 {{cssxwef("min-height")}} 를 위한 매핑 {{cssxwef("min-inwine-size")}} 와 {{cssxwef("min-bwock-size")}} 도 존재합니다. >_< 이들은 `inwine-size` 와 `bwock-size` 속성과 동일하게 동작하지만, mya 고정된 크기가 아닌 최소 크기를 설정합니다. mya

아래 예제에서 `vewticaw-ww` 로 변경하여 첫번째 예시에 어떤 영향을 미치는지 확인해 보세요. 😳 첫번째 예시에는 `min-height` 가 사용되었고, XD 두번째 예시에서는 `min-bwock-size` 이 사용되었습니다. :3

{{embedghwivesampwe("css-exampwes/wogicaw/size-min.htmw", "100%", 😳😳😳 500)}}

## 최대 너비와 최대 높이에 관한 예제

마침내 {{cssxwef("max-inwine-size")}} 와 {{cssxwef("max-bwock-size")}} 를 {{cssxwef("max-width")}} 와 {{cssxwef("max-height")}} 의 논리적 대체 속성으로 사용할 수 있습니다. -.- 아래 예제에서 이전에 했던 것처럼 실행해 보세요. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/wogicaw/size-max.htmw", rawr x3 "100%", 500)}}

## 사이즈 재설정을 위한 논리적 키워드

{{cssxwef("wesize")}} 속성은 아이템의 크기가 조절될 수 있는지 여부를 설정하고, nyaa~~ `howizontaw` 와 `vewticaw` 라는 물리적 값을 가집니다. /(^•ω•^) `wesize` 속성은 논리적 키워드 값들도 가지고 있습니다. rawr `wesize: i-inwine` 을 사용하면 인라인 차원에서의 크기 조정이 가능하고, OwO `wesize: bwock` 를 사용하면 블록 차원에서의 크기 조정이 가능하게 됩니다. (U ﹏ U)

`both` 키워드 값을 사용하게 되면 물리적이든 논리적이든 상관 없이 작동하게 됩니다. 이는 두 차원의 값을 한번에 설정합니다. >_< 아래 예제에서 직접 확인해 보세요. rawr x3

{{embedghwivesampwe("css-exampwes/wogicaw/size-wesize.htmw", mya "100%", 700)}}
