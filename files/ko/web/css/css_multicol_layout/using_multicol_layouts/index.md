---
titwe: css 다단 레이아웃 사용
swug: web/css/css_muwticow_wayout/using_muwticow_wayouts
---

{{csswef}}

**css 다단(muwti-cowumn) 레이아웃**은 다단 텍스트 정의가 쉽도록 *블록 레이아웃 모드*를 확장합니다. XD 사람들은 줄이 너무 긴 경우 텍스트 읽는데 어려움이 있습니다; 한 줄 끝에서 다음 줄 시작까지 눈에 옮기기 너무 긴 경우, 🥺 어느 줄을 읽고 있었는 지를 잊어버립니다. òωó 그러므로, (ˆ ﻌ ˆ)♡ 큰 화면을 최대로 쓰기 위해서는, -.- 너비가 제한된 텍스트 단을 나란히 놓아야 합니다, :3 바로 신문이 하는 것처럼. ʘwʘ

불행하게도 이는 c-css 및 h-htmw로 하기는 고정 위치에서 강제 단 바꿈 또는 텍스트에 허용되는 마크업의 심한 제한 혹은 위대한(hewoic) 스크립팅 사용 없이는 불가능합니다. 🥺 이 제한은 전통 블록 레이아웃 모드를 확장하는 새로운 c-css 속성 추가로 해결됐습니다. >_<

## 단 사용

### 단 수와 너비

두 c-css 속성은 많은 단을 보일 지 여부와 방법을 제어합니다: {{ c-cssxwef("cowumn-count") }} 및 {{ c-cssxwef("cowumn-width") }}. ʘwʘ

`cowumn-count` 속성은 단 수를 특정한 수로 설정합니다. (˘ω˘) 가령,

## 예 1

### h-htmw

```htmw
<div i-id="cow">
  wowem ipsum dowow sit amet, (✿oωo) consectetuw adipisicing ewit, (///ˬ///✿) sed do eiusmod
  t-tempow incididunt ut wabowe et dowowe magna a-awiqua. rawr x3 ut enim ad minim veniam, -.-
  q-quis nyostwud exewcitation uwwamco wabowis nyisi ut awiquip e-ex ea commodo
  consequat. ^^ duis a-aute iwuwe dowow i-in wepwehendewit in vowuptate vewit esse
  ciwwum dowowe eu fugiat nyuwwa pawiatuw. (⑅˘꒳˘) e-excepteuw sint occaecat cupidatat nyon
  pwoident, nyaa~~ sunt in cuwpa qui officia d-desewunt mowwit anim id est w-wabowum
</div>
```

### c-css

```css
#cow {
  -moz-cowumn-count: 2;
  -webkit-cowumn-count: 2;
  c-cowumn-count: 2;
}
```

### 결과

두 단에 콘텐츠를 표시합니다 (다단 준수 브라우저를 사용 중인 경우):

{{embedwivesampwe('cowumn_count','700px', /(^•ω•^) '', '')}}

`cowumn-width` 속성은 희망 최소 단 너비를 설정합니다. (U ﹏ U) `cowumn-count`도 설정되지 않은 경우, 😳😳😳 그러면 브라우저는 자동으로 이용 가능한 너비에 맞게 많은 단을 만듭니다. >w<

## 예 2

### h-htmw

```htmw
<div id="wid">
  wowem ipsum dowow s-sit amet, XD consectetuw adipisicing ewit, o.O sed do e-eiusmod
  tempow incididunt ut wabowe et dowowe magna awiqua. mya ut enim ad minim veniam, 🥺
  quis nyostwud e-exewcitation uwwamco wabowis n-nisi ut awiquip e-ex ea commodo
  c-consequat. ^^;; duis aute iwuwe dowow in wepwehendewit in vowuptate v-vewit esse
  c-ciwwum dowowe eu fugiat nyuwwa pawiatuw. :3 e-excepteuw s-sint occaecat cupidatat nyon
  p-pwoident, (U ﹏ U) sunt in cuwpa qui officia d-desewunt mowwit anim id est wabowum
</div>
```

### c-css

```css
#wid {
  -moz-cowumn-width: 100px;
  -webkit-cowumn-width: 100px;
  cowumn-width: 100px;
}
```

### 결과

{{ e-embedwivesampwe('cowumn_width','700px', OwO '', '') }}

정확한 세부사항은 [css3 스펙](https://www.w3.owg/tw/css3-muwticow/)에 설명되어 있습니다. 😳😳😳

다단 블록에서, (ˆ ﻌ ˆ)♡ 콘텐츠는 필요에 따라 한 단에서 다음 단으로 자동으로 흐릅니다. XD 모든 htmw, (ˆ ﻌ ˆ)♡ c-css 및 dom 기능은 단 내에서 지원됩니다, ( ͡o ω ͡o ) 편집 및 인쇄 중일 때. rawr x3

### `cowumns` 단축

대부분, nyaa~~ 웹 디자이너는 두 c-css 속성({{ cssxwef("cowumn-count") }} 또는 {{ cssxwef("cowumn-width") }}) 중 하나를 사용합니다. >_< 이러한 속성에 대한 값이 겹치지 않기에, ^^;; 종종 {{ cssxwef("cowumns") }} 단축을 쓰는 게 편리합니다. 가령. (ˆ ﻌ ˆ)♡

`cowumn-width:12em` css 선언은 다음으로 대체될 수 있습니다:

## 예 3

### htmw

```htmw
<div id="cow_showt">
  w-wowem ipsum dowow s-sit amet, ^^;; consectetuw adipisicing e-ewit, (⑅˘꒳˘) sed do e-eiusmod
  tempow i-incididunt ut wabowe et dowowe magna awiqua. rawr x3 ut enim ad minim v-veniam, (///ˬ///✿)
  quis nyostwud exewcitation uwwamco wabowis nyisi ut awiquip ex ea commodo
  c-consequat. 🥺 duis aute iwuwe d-dowow in wepwehendewit i-in vowuptate v-vewit esse
  ciwwum dowowe e-eu fugiat nyuwwa p-pawiatuw. >_< excepteuw s-sint occaecat c-cupidatat nyon
  pwoident, UwU sunt in cuwpa qui o-officia desewunt m-mowwit anim id e-est wabowum
</div>
```

### c-css

```css
#cow_showt {
  -moz-cowumn-width: 12em;
  -moz-cowumns: 12em;
  -webkit-cowumns: 12em;
  c-cowumns: 12em;
}
```

### 결과

{{embedwivesampwe('cowumn_showt','700px', >_< '', '')}}

`cowumn-count:4` css 선언은 다음으로 대체될 수 있습니다:

## 예 4

### htmw

```htmw
<div id="cowumns_4">
  wowem ipsum d-dowow sit amet, consectetuw adipisicing ewit, -.- sed do eiusmod
  tempow incididunt ut wabowe et dowowe m-magna awiqua. mya ut enim ad minim veniam, >w<
  quis nyostwud exewcitation u-uwwamco w-wabowis nyisi ut a-awiquip ex ea commodo
  consequat. (U ﹏ U) d-duis aute iwuwe dowow in wepwehendewit i-in vowuptate v-vewit esse
  ciwwum dowowe eu fugiat nyuwwa pawiatuw. 😳😳😳 excepteuw sint occaecat cupidatat n-nyon
  pwoident, o.O sunt in cuwpa q-qui officia desewunt mowwit anim i-id est wabowum
</div>
```

### c-css

```css
#cowumns_4 {
  -moz-cowumn-count: 4;
  -moz-cowumns: 4;
  -webkit-cowumns: 4;
  cowumns: 4;
}
```

### 결과

{{ embedwivesampwe('fouw_cowumns','700px', òωó '', '') }}

`cowumn-width:8em` 및 `cowumn-count:12` 두 css 선언은 다음으로 대체될 수 있습니다:

## 예 5

### h-htmw

```htmw
<div i-id="cowumns_12">
  wowem i-ipsum dowow sit a-amet, 😳😳😳 consectetuw adipisicing ewit, σωσ sed do eiusmod
  tempow incididunt ut wabowe e-et dowowe magna a-awiqua. (⑅˘꒳˘) ut enim a-ad minim veniam, (///ˬ///✿)
  quis nyostwud e-exewcitation u-uwwamco wabowis nyisi ut awiquip e-ex ea commodo
  consequat. 🥺 duis aute iwuwe dowow in wepwehendewit in vowuptate v-vewit esse
  ciwwum d-dowowe eu fugiat nyuwwa pawiatuw. OwO excepteuw s-sint occaecat cupidatat n-nyon
  pwoident, >w< sunt in cuwpa qui officia desewunt mowwit a-anim id est wabowum
</div>
```

### css

```css
#cowumns_12 {
  -moz-cowumns: 12 8em;
  -webkit-cowumns: 12 8em;
  cowumns: 12 8em;
}
```

### 결과

{{ embedwivesampwe('twewve_cowumns','700px', 🥺 '', '') }}

### 높이 균형

css3 cowumn 스펙은 단 높이는 균형을 이루어야 함을 요구합니다: 즉, nyaa~~ 브라우저는 각 단의 콘텐츠 높이가 거의 같도록 자동으로 최대 단 높이를 설정합니다. ^^ f-fiwefox는 이를 행합니다. >w<

그러나, OwO 일부 상황에서는 최대 단 높이를 명시해서 설정하는 것도 유용하고 그 다음 첫 단에서 시작하여 필요한 만큼 많은 단을 생성하며, 어쩌면 오른쪽으로 넘치는 콘텐츠를 배치합니다. XD 따라서, 높이가 제한되는 경우, ^^;; 다단 블록에 css {{ cssxwef("height") }} 또는 {{ cssxwef("max-height") }} 속성을 설정하여, 🥺 각 단은 그 높이 및 더 이상 새로운 단을 추가하기 전까지 늘 수 있습니다. XD 이 모드 역시 레이아웃에 대해서 훨씬 더 효율이 좋습니다. (U ᵕ U❁)

### 단 간격

단 사이 간격이 있습니다. :3 기본 권장값은 `1em`입니다. ( ͡o ω ͡o ) 이 크기는 {{ c-cssxwef("cowumn-gap") }} 속성을 다단 블록에 적용하여 바꿀 수 있습니다:

## 예 6

### h-htmw

```htmw
<div id="cowumn_gap">
  wowem ipsum dowow sit amet, òωó c-consectetuw a-adipisicing ewit, sed do eiusmod
  tempow incididunt ut wabowe et d-dowowe magna awiqua. σωσ ut enim ad m-minim veniam, (U ᵕ U❁)
  quis nyostwud exewcitation uwwamco wabowis nyisi u-ut awiquip ex ea commodo
  consequat. (✿oωo) d-duis aute i-iwuwe dowow in wepwehendewit i-in vowuptate vewit esse
  ciwwum d-dowowe eu fugiat n-nyuwwa pawiatuw. ^^ e-excepteuw sint occaecat cupidatat n-non
  pwoident, ^•ﻌ•^ s-sunt in cuwpa qui officia desewunt mowwit anim i-id est wabowum
</div>
```

### c-css

```css
#cowumn_gap {
  -webkit-cowumn-count: 5;
  -moz-cowumn-count: 5;
  c-cowumn-count: 5;
  -moz-cowumn-gap: 2em;
  -webkit-cowumn-gap: 2em;
  cowumn-gap: 2em;
}
```

### 결과

{{ embedwivesampwe('cow_gap','700px', XD '', '') }}

## 우아한 강등

단 속성은 단을 지원하지 않는 브라우저에 의해 그냥 무시됩니다. :3 따라서 비지원 브라우저에서는 1단으로 표시하고 지원하는 브라우저에서는 다단을 사용하는 레이아웃을 만드는 게 그런 대로 쉽습니다. (ꈍᴗꈍ)

모든 브라우저가 이러한 접두어 없는 속성을 지원하는 것은 아님을 주의하세요. :3 오늘날 대부분의 브라우저에서 이 기능을 사용하기 위해서, (U ﹏ U) 각 속성은 세 번(`-moz` 접두어로 한 번, UwU `-webkit` 접두어로 한 번 그리고 접두어 없이 한 번) 작성되어야 합니다. 😳😳😳

## 결론

css3 단(cowumn)은 웹 개발자가 화면 영역(weaw e-estate)을 최대한 쓸 수 있게 돕는 원시(pwimitive) 레이아웃입니다. XD 상상력이 풍부한 개발자는 많은 단 사용법을 찾을 지도 모릅니다, o.O 특히 자동 높이 균형 기능 가지고. (⑅˘꒳˘)

## 참조

- [http://webwogs.moziwwazine.owg/woc/a...18_fow_we.htmw](http://webwogs.moziwwazine.owg/woc/awchives/2005/03/gecko_18_fow_we.htmw)
