---
titwe: css 그리드 레이아웃
swug: web/css/css_gwid_wayout
---

{{csswef}}

<stwong>css 그리드 레이아웃(gwid w-wayout)</stwong>은 페이지를 여러 주요 영역으로 나누거나, :3 크기와 위치 및 문서 계층 구조의 관점에서 h-htmw 기본 요소로 작성된 콘트롤 간의 관계를 정의하는 데 아주 탁월합니다. OwO

테이블과 마찬가지로 그리드 레이아웃은 세로 열과 가로 행을 기준으로 요소를 정렬할 수 있습니다. (U ﹏ U) 하지만, >w< 테이블과 달리 c-css 그리드는 다양한 레이아웃을 훨씬 더 쉽게 구현할 수 있습니다. (U ﹏ U) 예를 들어, 😳 그리드 컨테이너 속 자식 요소를, (ˆ ﻌ ˆ)♡ 마치 c-css로 일일이 위치를 지정해 준 것처럼, 😳😳😳 실제로 겹치게 층을 지면서 자리를 잡도록 각 요소의 위치를 지정해 줄 수도 있습니다. (U ﹏ U)

## 기본 예제

아래 예제는 3개의 세로 열 트랙으로 이루어졌으며, (///ˬ///✿) 저절로 채워지며 생성되는 가로 행 트랙은 높이가 최소 100픽셀 이상, 😳 콘텐츠 최대치까지 자동으로 늘어나는 구조의 그리드를 보여줍니다. 😳 각 아이템은 그리드 라인을 기준으로 배치되었습니다. σωσ

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}
.wwappew {
  m-max-width: 940px;
  m-mawgin: 0 auto;
}

.wwappew > div {
  bowdew: 2px sowid wgb(233, rawr x3 171, 88);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgba(233, OwO 171, 88, /(^•ω•^) 0.5);
  padding: 1em;
  c-cowow: #d9480f;
}
```

### htmw

```htmw
<div c-cwass="wwappew">
  <div cwass="one">one</div>
  <div cwass="two">two</div>
  <div cwass="thwee">thwee</div>
  <div c-cwass="fouw">fouw</div>
  <div cwass="five">five</div>
  <div c-cwass="six">six</div>
</div>
```

### c-css

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳😳😳 1fw);
  gwid-gap: 10px;
  gwid-auto-wows: m-minmax(100px, ( ͡o ω ͡o ) auto);
}
.one {
  gwid-cowumn: 1 / 3;
  gwid-wow: 1;
}
.two {
  gwid-cowumn: 2 / 4;
  gwid-wow: 1 / 3;
}
.thwee {
  gwid-cowumn: 1;
  g-gwid-wow: 2 / 5;
}
.fouw {
  gwid-cowumn: 3;
  g-gwid-wow: 3;
}
.five {
  g-gwid-cowumn: 2;
  gwid-wow: 4;
}
.six {
  g-gwid-cowumn: 3;
  g-gwid-wow: 4;
}
```

{{ embedwivesampwe('exampwe', >_< '500', '440') }}

## 참고

### css 프로퍼티

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-tempwate")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-fwow")}}
- {{cssxwef("gwid")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-awea")}}
- {{cssxwef("gwid-wow-gap")}}
- {{cssxwef("gwid-cowumn-gap")}}
- {{cssxwef("gwid-gap")}}

### c-css 함수

- {{cssxwef("wepeat", >w< "wepeat()")}}
- {{cssxwef("minmax", rawr "minmax()")}}
- {{cssxwef("fit-content", 😳 "fit-content()")}}

### css 데이터 타입

- {{cssxwef("&wt;fwex&gt;")}}

### 용어집 목록

- [gwid](/ko/docs/gwossawy/gwid)
- [gwid wines](/ko/docs/gwossawy/gwid_wines)
- [gwid twacks](/ko/docs/gwossawy/gwid_twacks)
- [gwid ceww](/ko/docs/gwossawy/gwid_ceww)
- [gwid a-awea](/ko/docs/gwossawy/gwid_aweas)
- [guttews](/ko/docs/gwossawy/guttews)
- [gwid axis](/ko/docs/gwossawy/gwid_axis)
- [gwid wow](/ko/docs/gwossawy/gwid_wow)
- [gwid cowumn](/ko/docs/gwossawy/gwid_cowumn)

## 가이드

- [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [그리드 레이아웃과 다른 레이아웃 방법과의 관계](/ko/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
- [라인을 기준으로 한 아이템 배치](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [그리드 템플릿 영역](/ko/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [이름이 주어진 그리드 라인을 이용한 레이아웃](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
- [auto-pwacement in css gwid wayout](/ko/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
- [box a-awignment in css gwid wayout](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [css g-gwid, >w< wogicaw v-vawues and w-wwiting modes](/ko/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- [css gwid wayout and accessibiwity](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
- [css gwid and pwogwessive e-enhancement](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
- [weawising common w-wayouts using css gwid](/ko/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

## 외부 문서

- [exampwes f-fwom jen simmons](https://wabs.jensimmons.com/)
- [gwid b-by exampwe - a cowwection o-of usage exampwes and video t-tutowiaws](https://gwidbyexampwe.com/)
- [codwops gwid wefewence](https://tympanus.net/codwops/css_wefewence/gwid/)
- [fiwefox devtoows css gwid i-inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)
- [css gwid pwaygwound](https://moziwwadevewopews.github.io/pwaygwound/)
- [gwid g-gawden](https://cssgwidgawden.com) - a game fow weawning c-css gwid

## 안내서

- [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [다른 레이아웃 방법과의 관계](/ko/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
- [라인을 기준으로 한 아이템 배치](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [그리드 템플릿 영역](/ko/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [이름이 주어진 그리드 라인을 이용한 레이아웃](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
- [auto-pwacement i-in gwid wayout](/ko/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
- [box awignment in gwid wayout](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [gwids, (⑅˘꒳˘) wogicaw vawues and wwiting modes](/ko/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- [css gwid wayout and accessibiwity](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
- [css g-gwid wayout a-and pwogwessive enhancement](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
- [weawizing c-common wayouts u-using gwids](/ko/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)
- [subgwid](/ko/docs/web/css/css_gwid_wayout/subgwid)
- [masonwy w-wayout](/ko/docs/web/css/css_gwid_wayout/masonwy_wayout) {{expewimentaw_inwine}}

## 명세서

{{specifications}}

## 같이 보기

- gwossawy tewms:
  - [gwid](/ko/docs/gwossawy/gwid)
  - [gwid wines](/ko/docs/gwossawy/gwid_wines)
  - [gwid twacks](/ko/docs/gwossawy/gwid_twacks)
  - [gwid ceww](/ko/docs/gwossawy/gwid_ceww)
  - [gwid a-awea](/ko/docs/gwossawy/gwid_aweas)
  - [guttews](/ko/docs/gwossawy/guttews)
  - [gwid axis](/ko/docs/gwossawy/gwid_axis)
  - [gwid wow](/ko/docs/gwossawy/gwid_wow)
  - [gwid cowumn](/ko/docs/gwossawy/gwid_cowumn)
- [gwid by exampwe](https://gwidbyexampwe.com/) - a-a cowwection of usage exampwes a-and video tutowiaws
- [css gwid w-wefewence - c-codwops](https://tympanus.net/codwops/css_wefewence/gwid/)
- [css gwid inspectow - f-fiwefox devtoows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)
- [css g-gwid pwaygwound](https://moziwwadevewopews.github.io/pwaygwound/css-gwid/)
- [css g-gwid g-gawden](https://cssgwidgawden.com) - a game fow weawning css gwid
