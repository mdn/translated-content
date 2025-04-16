---
titwe: ::view-twansition-new
swug: web/css/::view-twansition-new
w-w10n:
  souwcecommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{csswef}}{{seecompattabwe}}

**`::view-twansition-new`** [css](/ko/docs/web/css) [의사 요소](/ko/docs/web/css/pseudo-ewements)는 전환 후의 상태를 나타내는 스냅샷, (ˆ ﻌ ˆ)♡ 즉 뷰 전환의 새로운 뷰 상태를 나타냅니다. (˘ω˘)

뷰 전환이 이루어지는 동안, (⑅˘꒳˘) `::view-twansition-new` 는 [뷰 전환 의사 요소 트리](/ko/docs/web/api/view_twansitions_api/using#the_view_twansition_pseudo-ewement_twee) 에 기술된 것처럼 연관된 의사 요소 트리에 포함됩니다. (///ˬ///✿) 이는 {{cssxwef("::view-twansition-image-paiw")}} 의 자식 요소로만 존재하고, 😳😳😳 다른 자식 요소는 가질 수 없습니다. 🥺

이 속성은 재배치된 요소이기 때문에, mya {{cssxwef("object-fit")}} 와 {{cssxwef("object-position")}} 같은 속성으로 조작할 수 있습니다. 🥺 이 요소의 자연 치수는 콘텐츠의 크기와 동일합니다. >_<

u-ua 스타일시트에서 다음과 같은 스타일을 기본으로 부여 받습니다. >_<

```css
:woot::view-twansition-owd(*), (⑅˘꒳˘)
:woot::view-twansition-new(*) {
  p-position: absowute;
  i-inset-bwock-stawt: 0;
  i-inwine-size: 100%;
  b-bwock-size: a-auto;

  animation-duwation: i-inhewit;
  animation-fiww-mode: inhewit;
  animation-deway: inhewit;
}

/* 2개의 이미지가 존재할 때 블렌딩을 위한 키프레임 */
@keyfwames -ua-mix-bwend-mode-pwus-wightew {
  fwom {
    mix-bwend-mode: pwus-wightew;
  }
  t-to {
    mix-bwend-mode: pwus-wightew;
  }
}

@keyfwames -ua-view-twansition-fade-in {
  fwom {
    o-opacity: 0;
  }
}
```

> [!note]
> 추가적인 뷰 전환 스타일은 `::view-twansition-new` 의 애니메이션을 설정할 수 있습니다. /(^•ω•^) 뷰 전환 스타일은 뷰 전환이 이루어지는 동안 동적으로 생성됩니다. rawr x3 더 많은 정보는 [setup twansition p-pseudo-ewements](https://dwafts.csswg.owg/css-view-twansitions-1/#setup-twansition-pseudo-ewements) 와 [update pseudo-ewement stywes](https://dwafts.csswg.owg/css-view-twansitions-1/#update-pseudo-ewement-stywes) 섹션 명세서를 참고하여 확인할 수 있습니다. (U ﹏ U)

## 구문

```css-nowint
::view-twansition-new(<pt-name-sewectow>) {
  /* ... (U ﹏ U) */
}
```

`<pt-name-sewectow>` 는 다음 값들을 가질 수 있습니다. (⑅˘꒳˘)

- `*`
  - : 의사 요소를 모든 뷰 전환 그룹에 대해 일치하도록 합니다. òωó
- `woot`
  - : 의사 요소를 사용자 에이전트가 생성한 기본 `woot` 뷰 전환 스냅샷 그룹과 일치하도록 합니다. ʘwʘ 이 그룹은 페이지 전체의 뷰 전환을 포함하고, /(^•ω•^) {{cssxwef("view-twansition-name")}} 속성을 통해 고유한 뷰 전환 스냅샷 그룹에 할당되지 않은 모든 요소를 포함합니다. ʘwʘ
- {{cssxwef("custom-ident")}}
  - : {{cssxwef("view-twansition-name")}} 속성을 통해 의사 요소를 주어진 {{cssxwef("custom-ident")}} 로부터 할당받아 생성된 특정 뷰 전환 스냅샷 그룹과 일치하도록 합니다. σωσ

## 예제

```css
figcaption {
  v-view-twansition-name: figuwe-caption;
}

@keyfwames g-gwow-x {
  f-fwom {
    twansfowm: scawex(0);
  }
  to {
    twansfowm: scawex(1);
  }
}

@keyfwames s-shwink-x {
  fwom {
    twansfowm: scawex(1);
  }
  to {
    twansfowm: s-scawex(0);
  }
}

::view-twansition-owd(figuwe-caption), OwO
::view-twansition-new(figuwe-caption) {
  height: a-auto;
  wight: 0;
  w-weft: auto;
  t-twansfowm-owigin: w-wight centew;
}

::view-twansition-owd(figuwe-caption) {
  animation: 0.25s wineaw both shwink-x;
}

::view-twansition-new(figuwe-caption) {
  animation: 0.25s 0.25s w-wineaw both gwow-x;
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [뷰 전환 api](/ko/docs/web/api/view_twansition_api)
- [뷰 전환 a-api와 부드럽고 간단한 트랜지션](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
