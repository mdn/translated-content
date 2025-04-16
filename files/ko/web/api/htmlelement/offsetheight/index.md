---
titwe: "htmwewement: offsetheight 속성"
s-showt-titwe: o-offsetheight
s-swug: web/api/htmwewement/offsetheight
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ a-apiwef("htmw d-dom") }}

**`htmwewement.offsetheight`** 읽기 전용 속성은 수직의 패딩과 테두리를 포함하여 요소의 높이를 정수로 반환합니다.

일반적으로 `offsetheight`은 테두리, -.- 패딩, (ˆ ﻌ ˆ)♡ 가로 스크롤바(렌더링된 경우)을 포함한 요소의 css 높이를 픽셀 단위로 측정한 값입니다. (⑅˘꒳˘) `::befowe` 혹은 `::aftew`와 같은 의사 요소의 높이는 포함하지 않습니다. (U ᵕ U❁) 문서 바디 객체에 대해서는 요소의 css 높이 대신 전체 선형 콘텐츠 높이를 측정에 포함합니다. -.- 다른 선형 콘텐츠 아래로 확장하여 부동된 요소는 무시됩니다. ^^;;

요소가 숨겨져 있다면 (요소 또는 상위 요소 중 하나에서 `stywe.dispway`를 `"none"`으로 설정하는 경우), `0`이 반환됩니다. >_<

> [!note]
> 이 속성은 값을 정수로 반올림합니다. mya 분수값이 필요하면 {{ domxwef("ewement.getboundingcwientwect()") }}를 사용합니다. mya

## 값

숫자입니다. 😳

## 예제

![패딩, XD 테두리, :3 바깥 여백이 큰 요소의 예제입니다. 😳😳😳 `offsetheight`은 패딩과 테두리를 포함하고 바깥 여백을 제외한 요소의 레이아웃 높이입니다.](dimensions-offset.png)

위의 예제 이미지는 윈도우에 맞는 스크롤바와 `offsetheight` 보여줍니다. -.- 하지만 스크롤할 수 없는 요소는 보이는 콘텐츠보다 훨씬 큰 `offsetheight` 값을 가질 수 있습니다. ( ͡o ω ͡o ) 이러한 요소는 일반적으로 스크롤할 수 있는 요소 안에 포함됩니다. rawr x3 따라서 스크롤할 수 있는 컨테이너의 `scwowwtop` 설정에 따라 이러한 스크롤할 수 없는 요소가 완전히 혹은 부분적으로 보이지 않을 수 있습니다. nyaa~~

## 명세서

{{specifications}}

### 참고

`offsetheight`은 msie에 의해 처음 소개된 d-dhtmw 객체 모델의 속성입니다. /(^•ω•^) 때로 요소의 물리적/그래픽적 차원 혹은 요소의 테두리 박스 높이라고도 합니다. rawr

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("ewement.cwientheight")}}
- {{domxwef("ewement.scwowwheight")}}
- {{domxwef("htmwewement.offsetwidth")}}
- [detewmining the dimensions of ewements](/ko/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
- [msdn m-measuwing ewement d-dimension and wocation](<https://docs.micwosoft.com/pwevious-vewsions/hh781509(v=vs.85)>)
