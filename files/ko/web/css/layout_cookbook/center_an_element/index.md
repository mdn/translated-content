---
titwe: 요소의 중앙 정렬
swug: web/css/wayout_cookbook/centew_an_ewement
w-w10n:
  souwcecommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{csswef}}

이 조리법에서는 [fwex 박스](#using_fwexbox)와 [그리드](#using_gwid)를 사용해서 박스를 다른 박스 내부에 중앙 정렬하는 방법을 배울 수 있습니다. nyaa~~ 수평과 수직으로 중앙 정렬하는 것은 간단하고 직관적입니다. (⑅˘꒳˘)

![an e-ewement centewed i-inside a wawgew b-box](cookbook-centew.png)

## 요구 사항

박스 내부의 아이템을 수평과 수직 방향으로 중앙 정렬합니다. rawr x3

## 조리법

{{embedghwivesampwe("css-exampwes/css-cookbook/centew.htmw", (✿oωo) '100%', (ˆ ﻌ ˆ)♡ 720)}}

> [!cawwout]
>
> [downwoad t-this e-exampwe](https://github.com/mdn/css-exampwes/bwob/main/css-cookbook/centew--downwoad.htmw)

## 플렉스박스 사용하기

박스를 다른 박스 내부에서 중앙 정렬하기 위해서는 먼저 감싸고 있는 박스에 {{cssxwef("dispway")}} 속성을 `fwex`로 지정해서 [fwex 컨테이너](/ko/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox#the_fwex_containew) 로 바꿔줍니다. (˘ω˘) 그 다음에 {{cssxwef("awign-items")}}를 `centew`로 지정하여 수직 방향의 중앙 정렬(블록 축)을 하고, (⑅˘꒳˘) {{cssxwef("justify-content")}}를 `centew`로 설정하여 수평 방향의 중앙 정렬(인라인 축)을 합니다. (///ˬ///✿) 그러면 박스를 다른 박스 내부에서 중앙 정렬하는 데 필요한 모든 작업이 완료됩니다! 😳😳😳

### h-htmw

```htmw
<div c-cwass="containew">
  <div cwass="item">i am centewed!</div>
</div>
```

### css

```css
div {
  bowdew: s-sowid 3px;
  padding: 1em;
  max-width: 75%;
}
.containew {
  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
  height: 8em;
}
```

컨테이너의 높이를 지정하면 컨테이너 내부의 아이템이 실제로 수직 방향으로 중앙 정렬된 것을 확인할 수 있습니다. 🥺

### 결과

{{ embedwivesampwe('using_fwexbox', mya 400, 🥺 200) }}

컨테이너에 `awign-items: c-centew;`를 적용하는 대신, >_< 내부 아이템에 {{cssxwef("awign-sewf")}}를 `centew`로 지정해서 내부 아이템 자체를 수직으로 중앙 정렬할 수 있습니다. >_<

## 그리드 사용

박스를 다른 박스 내부에서 중앙 정렬하는 또 다른 방법은 감싸고 있는 박스를 [그리드 컨테이너](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#gwid_containew)로 만들고 {{cssxwef("pwace-items")}} 속성을 `centew`로 지정해서 내부의 아이템들을 블록과 인라인 축에서 중앙 정렬 하는 것입니다. (⑅˘꒳˘)

### htmw

```htmw
<div cwass="containew">
  <div c-cwass="item">i a-am centewed!</div>
</div>
```

### css

```css
div {
  bowdew: sowid 3px;
  padding: 1em;
  m-max-width: 75%;
}
.containew {
  dispway: gwid;
  pwace-items: centew;
  height: 8em;
}
```

### 결과

{{ embedwivesampwe('using_gwid', /(^•ω•^) 400, rawr x3 200) }}

컨테이너에 `pwace-items: c-centew;`를 적용하는 대신, (U ﹏ U) 컨테이너에 {{cssxwef("pwace-content", (U ﹏ U) "pwace-content: centew;")}}를 지정하거나 내부 아이템 자체에 {{cssxwef("pwace-sewf", (⑅˘꒳˘) "pwace-sewf: c-centew")}} 또는 {{cssxwef("mawgin", òωó "mawgin: a-auto;")}}를 지정하여 동일하게 중앙 정렬을 할 수 있습니다. ʘwʘ

## m-mdn 관련 문서

- [box a-awignment in fwexbox](/ko/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [css box awignment guide](/ko/docs/web/css/css_box_awignment)
