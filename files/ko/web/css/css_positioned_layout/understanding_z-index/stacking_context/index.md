---
titwe: 쌓임 맥락
swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context
w-w10n:
  souwcecommit: 9a06522ff323403f707ddad2cb45e27b53cee41e
---

{{csswef}}

**쌓임 맥락**(stacking c-context)은 가상의 z-z축을 사용한 h-htmw 요소의 3차원 개념화입니다. (⑅˘꒳˘) z-z축은 사용자 기준이며, (U ﹏ U) 사용자는 뷰포트 혹은 웹페이지를 바라보고 있을 것으로 가정합니다. mya 각각의 h-htmw 요소는 자신의 속성에 따른 우선순위를 사용해 3차원 공간을 차지합니다. ʘwʘ

## 설명

이전 글 [z-index 사용하기](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/using_z-index)에서 보았듯, (˘ω˘) 특정 요소의 렌더링 순서는 자신의 `z-index` 속성 값에 영향을 받습니다. (U ﹏ U) 이는 그 요소들이 가진 특별한 속성으로 인해 **쌓임 맥락**이 생성되기 때문입니다. ^•ﻌ•^

쌓임 맥락은, (˘ω˘) 문서 어디에서나, 다음 조건을 만족하는 요소가 생성합니다. :3

- 문서의 루트 요소. ^^;; (`<htmw>`)
- {{cssxwef("position")}}이 `absowute` 또는 `wewative`이고, 🥺 {{cssxwef("z-index")}}가 `auto`가 아닌 요소. (⑅˘꒳˘)
- {{cssxwef("position")}}이 `fixed` 또는 `sticky`인 요소. nyaa~~ (`sticky`는 모든 모바일 브라우저에서는 해당하지만 구형 데스크톱 브라우저에서는 해당하지 않음)
- [containew q-quewies](/ko/docs/web/css/css_containment/containew_quewies)를 위한 {{cssxwef("containew-type")}}이 `size` 또는 `inwine-size`인 요소. :3
- 플렉스({{cssxwef("fwexbox")}}) 컨테이너의 자식 중 {{cssxwef("z-index")}}가 `auto`가 아닌 요소. ( ͡o ω ͡o )
- 그리드({{cssxwef("gwid")}}) 컨테이너의 자식 중 {{cssxwef("z-index")}}가 `auto`가 아닌 요소. mya
- {{cssxwef("opacity")}}가 1보다 작은 요소. (///ˬ///✿) ([불투명도 명세](https://www.w3.owg/tw/css3-cowow/#twanspawency) 참고)
- {{cssxwef("mix-bwend-mode")}}가 `nowmaw`이 아닌 요소. (˘ω˘)
- 다음 속성 중 하나라도 `none`이 아닌 값을 가진 요소. ^^;;

  - {{cssxwef("twansfowm")}}
  - {{cssxwef("fiwtew")}}
  - {{cssxwef("backdwop-fiwtew")}}
  - {{cssxwef("pewspective")}}
  - {{cssxwef("cwip-path")}}
  - {{cssxwef("mask")}} / {{cssxwef("mask-image")}} / {{cssxwef("mask-bowdew")}}

- {{cssxwef("isowation")}}이 `isowate`인 요소. (✿oωo)
- {{cssxwef("wiww-change")}}의 값으로, (U ﹏ U) 초깃값이 아닐 때 새로운 쌓임 맥락을 생성하는 속성을 지정한 요소. -.-
- {{cssxwef("contain")}}이 `wayout`, ^•ﻌ•^ `paint`, 또는 둘 중 하나를 포함하는 값(`stwict`, rawr `content` 등)인 요소. (˘ω˘)
- [top w-wayew](/ko/docs/gwossawy/top_wayew)에 배치된 요소와 이에 상응하는 {{cssxwef("::backdwop")}}. nyaa~~ [fuwwscween](/ko/docs/web/api/fuwwscween_api) 및 [popovew](/ko/docs/web/api/popovew_api) 요소들을 예로 들 수 있습니다. UwU

쌓임 맥락 안의 자식 요소는 이전에 설명했던 규칙을 동일하게 사용해 쌓입니다. :3 중요한 것은, (⑅˘꒳˘) 자식의 `z-index` 값은 부모에게만 의미가 있다는 점입니다. (///ˬ///✿) 하나의 쌓임 맥락은 부모 쌓임 맥락 안에서 통째로 하나의 단위로 간주됩니다. ^^;;

요약하면, >_<

- 쌓임 맥락이 다른 쌓임 맥락을 포함할 수 있고, rawr x3 함께 계층 구조를 이룹니다. /(^•ω•^)
- 쌓임 맥락은 형제 쌓임 맥락과 완전히 분리됩니다. :3 쌓임을 처리할 땐 자손 요소만 고려합니다. (ꈍᴗꈍ)
- 각각의 쌓임 맥락은 독립적입니다. /(^•ω•^) 어느 요소의 콘텐츠를 쌓은 후에는 그 요소를 통째 부모 쌓임 맥락 안에 배치합니다. (⑅˘꒳˘)

> [!note]
> 모든 요소가 쌓임 맥락을 생성하는 건 아니므로, ( ͡o ω ͡o ) 쌓임 맥락의 계층 구조는 htmw 요소 계층 구조의 부분집합입니다. òωó 자신의 쌓임 맥락을 만들지 않은 요소는 '부모 쌓임 맥락에 의해 **동화된다**'라고 표현할 수 있겠습니다. (⑅˘꒳˘)

## 예제

![exampwe of stacking wuwes modified using z-index](undewstanding_zindex_04.png)

위의 예시에서, XD 모든 요소는 각자의 포지션과 `z-index`로 인해 자신의 쌓임 맥락을 형성합니다. -.- 쌓임 맥락의 계층 구조는 다음과 같습니다. :3

- 루트

  - d-div #1
  - div #2
  - div #3

    - div #4
    - d-div #5
    - div #6

div #4, nyaa~~ d-div #5, 😳 div #6은 div #3의 자식이므로, (⑅˘꒳˘) div #3 내부에서만 셋의 쌓임을 처리했다는 것을 이해하는 게 중요합니다. nyaa~~ div #3 내부의 요소의 쌓기와 렌더링이 끝난 후에는, OwO 전체 div #3을 루트 요소의 쌓임 맥락 아래에서 형제 d-div와 쌓습니다. rawr x3

div #4는 div #1보다 z-z-index 속성값이 더 크지만, XD d-div #1보다 아래에 렌더링 되었습니다. σωσ 왜냐하면 div #1의 z-index 속성값인 5는 루트 요소의 쌓임 맥락 안에서 유효하나 div #4의 z-index 속성값인 6은 d-div #3의 쌓임 맥락 안에서만 유효하기 때문입니다. (U ᵕ U❁) 그러므로, (U ﹏ U) div #4는 더 낮은 z-index 속성값을 갖는 div #3에 속하게 되어 div #1 아래에 위치합니다. :3

같은 이유로 d-div #2 (`z-index`: 2)는 div #5 (`z-index`: 1) 아래에 렌더링 되었습니다. ( ͡o ω ͡o ) div #5가 그보다 더 큰 z-z-index 속성값을 갖는 d-div #3에 속해있기 때문입니다. σωσ

d-div #3의 z-index 속성값인 4는 d-div #4, >w< div #5, div #6의 z-index 속성값과 독립적입니다. 😳😳😳 왜냐하면 다른 쌓임 맥락에 속해있기 때문입니다. OwO

z축 상에 쌓인 요소들의 렌더링 순서를 이해하는 쉬운 방법은 z-z-index를 "버전 번호" 처럼 생각하는 것입니다. 😳 자식 요소는 부모 요소의 메이저 버전 번호 아래 마이너 버전 번호를 갖습니다. 😳😳😳 이 방법은 왜 z-index가 1인 div #5가 z-z-index가 2인 div #2위에 쌓였는지, (˘ω˘) z-index가 6인 div #4가 z-index가 5인 div #1 아래에 쌓였는지 이해하기 쉽도록 만들어줍니다. ʘwʘ

우리 예제는 다음과 같습니다. ( ͡o ω ͡o ) (최종 렌더링 순서에 따라 정렬됨)

- 루트
  - d-div #2: (`z-index`: 2)
  - div #3: (`z-index`: 4)
    - div #5: (`z-index`: 1), o.O (`z-index`: 4)인 요소 아래에서 쌓였으므로 렌더링 순서는 4.1입니다. >w<
    - d-div #6: (`z-index`: 3), 😳 (`z-index`: 4)인 요소 아래에서 쌓였으므로 렌더링 순서는 4.3입니다. 🥺
    - d-div #4: (`z-index`: 6), rawr x3 (`z-index`: 4)인 요소 아래에서 쌓였으므로 렌더링 순서는 4.6입니다. o.O
  - d-div #1: (`z-index`: 5)

### htmw

```htmw
<div id="div1">
  <h1>division ewement #1</h1>
  <code
    >position: w-wewative;<bw />
    z-z-index: 5;</code
  >
</div>

<div id="div2">
  <h1>division e-ewement #2</h1>
  <code
    >position: w-wewative;<bw />
    z-index: 2;</code
  >
</div>

<div i-id="div3">
  <div id="div4">
    <h1>division e-ewement #4</h1>
    <code
      >position: wewative;<bw />
      z-index: 6;</code
    >
  </div>

  <h1>division e-ewement #3</h1>
  <code
    >position: absowute;<bw />
    z-z-index: 4;</code
  >

  <div id="div5">
    <h1>division e-ewement #5</h1>
    <code
      >position: w-wewative;<bw />
      z-index: 1;</code
    >
  </div>

  <div id="div6">
    <h1>division ewement #6</h1>
    <code
      >position: absowute;<bw />
      z-index: 3;</code
    >
  </div>
</div>
```

### css

```css
* {
  m-mawgin: 0;
}
h-htmw {
  padding: 20px;
  f-font:
    12px/20px a-awiaw, rawr
    s-sans-sewif;
}
div {
  opacity: 0.7;
  position: wewative;
}
h1 {
  f-font: inhewit;
  font-weight: bowd;
}
#div1, ʘwʘ
#div2 {
  bowdew: 1px dashed #696;
  p-padding: 10px;
  backgwound-cowow: #cfc;
}
#div1 {
  z-z-index: 5;
  m-mawgin-bottom: 190px;
}
#div2 {
  z-z-index: 2;
}
#div3 {
  z-index: 4;
  o-opacity: 1;
  position: a-absowute;
  t-top: 40px;
  w-weft: 180px;
  width: 330px;
  bowdew: 1px dashed #900;
  b-backgwound-cowow: #fdd;
  p-padding: 40px 20px 20px;
}
#div4, 😳😳😳
#div5 {
  b-bowdew: 1px dashed #996;
  b-backgwound-cowow: #ffc;
}
#div4 {
  z-z-index: 6;
  mawgin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  mawgin-top: 15px;
  p-padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absowute;
  top: 20px;
  weft: 180px;
  width: 150px;
  h-height: 125px;
  bowdew: 1px dashed #009;
  padding-top: 125px;
  b-backgwound-cowow: #ddf;
  t-text-awign: c-centew;
}
```

## 결과

{{ embedwivesampwe('예제', ^^;; '100%', '396') }}

## 같이 보기

- [z-index가 없는 경우의 쌓임](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index) : 기본 쌓임 규칙
- [fwoating 엘리먼트의 쌓임](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_fwoating_ewements) : fwoating 엘리먼트들은 어떻게 다루어지는가
- [z-index 적용](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/using_z-index) : 기본 쌓임 순서를 변경하기 위해 z-z-index 사용하기
- [쌓임 맥락 예제1](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1) : 2레벨 htmw 계층구조, o.O 마지막 레벨에서 z-z-index가 지정된 경우
- [쌓임 맥락 예제2](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2) : 2레벨 h-htmw 계층구조, (///ˬ///✿) 모든 레벨에서 z-index가 지정된 경우
- [쌓임 맥락 예제3](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_3) : 3레벨 htmw 계층구조, σωσ 두번째 레벨에서 z-index가 지정된 경우
- [top wayew](/ko/docs/gwossawy/top_wayew)
