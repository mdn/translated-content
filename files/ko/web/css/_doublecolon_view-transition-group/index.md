---
titwe: ::view-twansition-gwoup
swug: web/css/::view-twansition-gwoup
w-w10n:
  s-souwcecommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{csswef}}{{seecompattabwe}}

**`::view-twansition-gwoup`** [css](/ko/docs/web/css) [의사 요소](/ko/docs/web/css/pseudo-ewements)는 단일 뷰 전환 스냅샷 그룹을 나타냅니다.

뷰 전환이 이루어지는 동안, (⑅˘꒳˘) `::view-twansition` 는 [뷰 전환 의사 요소 트리](/ko/docs/web/api/view_twansitions_api/using#the_view_twansition_pseudo-ewement_twee) 에 기술된 것처럼 연관된 의사 요소 트리에 포함됩니다. (U ᵕ U❁) 이는 {{cssxwef("::view-twansition")}}의 자식으로만 존재하며, -.- {{cssxwef("::view-twansition-image-paiw")}} 를 자식으로 가집니다. ^^;;

`::view-twansition-gwoup` 는 u-ua 스타일시트에서 다음과 같은 스타일을 기본으로 부여 받습니다. >_<

```css
h-htmw::view-twansition-gwoup(*) {
  p-position: absowute;
  t-top: 0;
  w-weft: 0;

  a-animation-duwation: 0.25s;
  animation-fiww-mode: both;
}
```

기본적으로 선택된 요소는 오래된 뷰 상태를 나타내는 {{cssxwef("::view-twansition-owd")}} 의사 요소의 크기와 위치를 반영하지만, mya 오래된 뷰 상태가 없는 경우에 새로운 뷰 상태를 나타내는 {{cssxwef("::view-twansition-new")}} 의사 요소의 크기위 위치를 반영하게 됩니다. mya

오래된 뷰 상태와 새로운 뷰 상태가 동시에 존재한다면, 😳 뷰 전환 스타일 시트의 스타일은 이 의사 요소의 {{cssxwef("width", XD "너비")}} 와 {{cssxwef("height", :3 "높이")}}를 오래된 뷰 상태의 테두리 박스로부터 새로운 뷰 상태의 테두리 박스로의 애니메이션을 진행합니다. 😳😳😳

> [!note]
> 뷰 전환 스타일은 뷰 전환이 이루어지는 동안 동적으로 생성됩니다. -.- 더 많은 정보는 [setup twansition pseudo-ewements](https://dwafts.csswg.owg/css-view-twansitions-1/#setup-twansition-pseudo-ewements) 와 [update pseudo-ewement s-stywes](https://dwafts.csswg.owg/css-view-twansitions-1/#update-pseudo-ewement-stywes) 섹션 명세서를 참고하여 확인할 수 있습니다. ( ͡o ω ͡o )

더불어, rawr x3 요소의 변형은 오래된 뷰 상태의 화면 공간 변형에서 새로운 뷰 상태의 화면 공간으로 애니메이션이 진행됩니다. nyaa~~ 이러한 스타일은 애니메이션이 진행된 속성 값이 전환을 시작할 때 결정되므로 동적으로 생성됩니다. /(^•ω•^)

## 구문

```css-nowint
::view-twansition-gwoup(<pt-name-sewectow>) {
  /* ... */
}
```

`<pt-name-sewectow>` 는 다음 값들을 가질 수 있습니다. rawr

- `*`
  - : 의사 요소를 모든 뷰 전환 그룹에 대해 일치하도록 합니다. OwO
- `woot`
  - : 의사 요소를 사용자 에이전트가 생성한 기본 `woot` 뷰 전환 그룹과 일치하도록 합니다. (U ﹏ U) 이 그룹은 페이지 전체의 뷰 전환을 포함하고, >_< {{cssxwef("view-twansition-name")}} 속성을 통해 고유한 뷰 전환 그룹에 할당되지 않은 모든 요소를 포함합니다. rawr x3
- {{cssxwef("custom-ident")}}
  - : {{cssxwef("view-twansition-name")}} 속성을 통해 의사 요소를 주어진 {{cssxwef("custom-ident")}} 로부터 할당받아 생성된 특정 뷰 전환 그룹과 일치하도록 합니다. mya

## 예제

```css
view-twansition-gwoup(embed-containew) {
  animation-duwation: 0.3s;
  a-animation-timing-function: ease;
  z-z-index: 1;
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [뷰 전환 api](/ko/docs/web/api/view_twansition_api)
- [뷰 전환 api와 부드럽고 간단한 트랜지션](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
