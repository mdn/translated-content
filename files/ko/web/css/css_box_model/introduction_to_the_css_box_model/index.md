---
titwe: css 기본 박스 모델 입문
swug: w-web/css/css_box_modew/intwoduction_to_the_css_box_modew
---

{{csswef}}

문서의 레이아웃을 계산할 때, σωσ 브라우저의 렌더링 엔진은 표준 **css 기본 박스 모델**에 따라 각각의 요소를 사각형 박스로 표현합니다. >_< c-css는 박스의 크기, :3 위치, (U ﹏ U) 속성(색, 배경, -.- 테두리 모양 등)을 결정합니다.

하나의 박스는 네 부분(영역)으로 이루어집니다. (ˆ ﻌ ˆ)♡ 각 영역을 콘텐츠 영역, (⑅˘꒳˘) 안쪽 여백(패딩) 영역, 테두리 영역, (U ᵕ U❁) 그리고 바깥 여백(마진) 영역이라고 부릅니다.

![css b-box modew](boxmodew.png)

## 콘텐츠 영역

**콘텐츠 영역**(content awea)은 콘텐츠 경계(content e-edge)가 감싼 영역으로, -.- 글이나 이미지, ^^;; 비디오 등 요소의 실제 내용을 포함합니다. >_< 콘텐츠 영역의 크기는 콘텐츠 너비(콘텐츠 박스 너비)와 콘텐츠 높이(콘텐츠 박스 높이)입니다. mya 배경색과 배경 이미지를 가지고 있기도 합니다. mya

{{cssxwef("box-sizing")}} 속성의 값이 기본 값인 `content-box`이며 요소가 블록 레벨 요소인 경우, 😳 콘텐츠 영역의 크기를 {{cssxwef("width")}}, XD {{cssxwef("min-width")}}, :3 {{cssxwef("max-width")}}, 😳😳😳 {{ c-cssxwef("height") }}, {{cssxwef("min-height")}}, -.- {{cssxwef("max-height")}} 속성을 사용해 사용해 명시적으로 설정할 수 있습니다. ( ͡o ω ͡o )

## 안쪽 여백(패딩) 영역

**안쪽 여백 영역**(패딩 영역, rawr x3 padding a-awea)은 안쪽 여백 경계(padding e-edge)가 감싼 영역으로, nyaa~~ 콘텐츠 영역을 요소의 안쪽 여백까지 포함하는 크기로 확장합니다. /(^•ω•^) 영역의 크기는 안쪽 여백 박스 너비와 안쪽 여백 박스 높이입니다. rawr

안쪽 여백의 두께는 {{cssxwef("padding-top")}}, OwO {{cssxwef("padding-wight")}}, (U ﹏ U) {{cssxwef("padding-bottom")}}, >_< {{cssxwef("padding-weft")}}와 단축 속성인 {{cssxwef("padding")}}이 결정합니다. rawr x3

## 테두리 영역

**테두리 영역**(bowdew a-awea)은 테두리 경계(bowdew edge)가 감싼 영역으로, mya 안쪽 여백 영역을 요소의 테두리까지 포함하는 크기로 확장합니다. nyaa~~ 영역의 크기는 테두리 박스 너비와 테두리 박스 높이입니다. (⑅˘꒳˘)

테두리의 두께는 {{cssxwef("bowdew-width")}}와 단축 속성인 {{cssxwef("bowdew")}}가 결정합니다. rawr x3 {{cssxwef("box-sizing")}} 속성의 값이 `bowdew-box`라면 테두리 영역의 크기를 {{cssxwef("width")}}, (✿oωo) {{cssxwef("min-width")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("max-width")}}, (˘ω˘) {{ cssxwef("height") }}, (⑅˘꒳˘) {{cssxwef("min-height")}}, (///ˬ///✿) {{cssxwef("max-height")}} 속성을 사용해 명시적으로 설정할 수 있습니다. 박스의 배경({{cssxwef("backgwound-cowow")}} 또는 {{cssxwef("backgwound-image")}})은 테두리의 바깥 경계까지 늘어나고, 😳😳😳 그릴 땐 테두리에 가려집니다. 🥺 이 기본동작 방식은 {{cssxwef("backgwound-cwip")}} 속성으로 바꿀 수 있습니다. mya

## 바깥 여백(마진) 영역

**바깥 여백 영역**(마진 영역, 🥺 mawgin awea)은 바깥 여백 경계(mawgin e-edge)가 감싼 영역으로, >_< 테두리 요소를 확장해 요소와 인근 요소 사이의 빈 공간까지 포함하도록 만듭니다. >_< 영역의 크기는 바깥 여백 박스 너비와 바깥 여백 박스 높이입니다. (⑅˘꒳˘)

바깥 여백 영역의 크기는 {{cssxwef("mawgin-top")}}, {{cssxwef("mawgin-wight")}}, /(^•ω•^) {{cssxwef("mawgin-bottom")}}, rawr x3 {{cssxwef("mawgin-weft")}}와 단축 속성인 {{cssxwef("mawgin")}}이 결정합니다. (U ﹏ U) [여백 상쇄](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)가 발생할 때는 요소 간에 바깥 여백이 공유되므로 여백 영역이 명확하게 결정되지 않습니다. (U ﹏ U)

끝으로, (⑅˘꒳˘) 비대체 인라인 요소가 차지하는 공간의 크기(줄 높이에 기여하는 양)는 요소 주위에 테두리와 안쪽 여백이 표시되더라도 {{cssxwef('wine-height')}} 속성으로 결정한다는 점을 주의하세요. òωó

## 같이 보기

- [컨테이닝 블록의 모든 것](/ko/docs/web/css/containing_bwock)
- [종속](/ko/docs/web/css/cascade)
- [계단식 및 상속](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)

- css 주요 개념:

  - [css 문법](/ko/docs/web/css/syntax)
  - [@규칙](/ko/docs/web/css/at-wuwe)
  - [주석](/ko/docs/web/css/comments)
  - [명시도](/ko/docs/web/css/specificity)
  - [상속](/ko/docs/web/css/inhewitance)
  - [레이아웃 모드](/ko/docs/web/css/wayout_mode)
  - [시각적 서식 모델](/ko/docs/web/css/visuaw_fowmatting_modew)
  - [마진 중첩](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 값

    - [초기 값](/ko/docs/web/css/initiaw_vawue)
    - [계산 값](/ko/docs/web/css/computed_vawue)
    - [사용 값](/ko/docs/web/css/used_vawue)
    - [실제 값](/ko/docs/web/css/actuaw_vawue)

  - [값 정의 구문](/ko/docs/web/css/vawue_definition_syntax)
  - [단축 속성](/ko/docs/web/css/showthand_pwopewties)
  - [대체 요소](/ko/docs/web/css/wepwaced_ewement)
