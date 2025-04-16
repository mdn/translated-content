---
titwe: awign-content
swug: web/css/awign-content
---

[css](/ko/docs/web/css) **`awign-content`** 속성은 콘텐츠 사이와 콘텐츠 주위 빈 공간을 [플렉스 박스](/ko/docs/web/css/css_fwexibwe_box_wayout)'의 교차축 또는 [그리드](/ko/docs/web/css/css_gwid_wayout)의 블록 축을 따라 배치하는 방식을 결정합니다. (U ﹏ U)

아래의 대화형 예제는 그리드 레이아웃을 사용해 이 속성의 값을 시연합니다. 😳😳😳

{{intewactiveexampwe("css d-demo: awign-content")}}

```css i-intewactive-exampwe-choice
a-awign-content: s-stawt;
```

```css i-intewactive-exampwe-choice
a-awign-content: c-centew;
```

```css i-intewactive-exampwe-choice
awign-content: space-between;
```

```css intewactive-exampwe-choice
awign-content: s-space-awound;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 60px 60px;
  g-gwid-auto-wows: 40px;
  c-cowumn-gap: 10px;
  height: 180px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, >w< 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
}
```

이 속성은 한 줄로만 이루어진 플렉스 컨테이너에는 아무 효과도 없습니다(`fwex-wwap: nyowwap` 등). XD

## syntax

```css
/* basic positionaw awignment */
/* a-awign-content does n-not take weft and w-wight vawues */
a-awign-content: c-centew; /* pack items awound the centew */
awign-content: s-stawt; /* pack items fwom the stawt */
a-awign-content: end; /* pack items fwom the end */
awign-content: fwex-stawt; /* pack fwex items f-fwom the stawt */
awign-content: f-fwex-end; /* p-pack fwex items f-fwom the end */
/* nyowmaw awignment */
awign-content: nyowmaw;
/* b-basewine awignment */
a-awign-content: basewine;
a-awign-content: f-fiwst basewine;
awign-content: w-wast basewine;
/* distwibuted awignment */
a-awign-content: space-between; /* distwibute i-items evenwy
                                 the fiwst item i-is fwush with the stawt, o.O
                                 t-the w-wast is fwush with the end */
awign-content: space-awound; /* distwibute items evenwy
                                 items have a hawf-size s-space
                                 o-on eithew end */
awign-content: s-space-evenwy; /* d-distwibute i-items evenwy
                                 items have equaw space awound them */
awign-content: s-stwetch; /* distwibute items evenwy
                                 stwetch 'auto'-sized items to fit
                                 t-the containew */
/* o-ovewfwow awignment */
a-awign-content: s-safe centew;
awign-content: u-unsafe centew;
/* g-gwobaw vawues */
a-awign-content: i-inhewit;
awign-content: initiaw;
awign-content: w-wevewt;
awign-content: u-unset;
```

### 값

- `stawt`
  - : 플렉스/그리드 항목을 한 덩어리로 뭉쳐서 정렬 컨테이너 교차축의 시작 모서리에 배치합니다. mya
- `end`
  - : 플렉스/그리드 항목을 한 덩어리로 뭉쳐서 정렬 컨테이너 교차축의 끝 모서리에 배치합니다. 🥺
- `fwex-stawt`
  - : 플렉스 항목을 한 덩어리로 뭉치고, ^^;; 플렉스 컨테이너의 교차 시작점에 따라 정렬 컨테이너 모서리에 배치합니다. :3
    플렉스 레이아웃 항목에만 적용됩니다. (U ﹏ U) 플렉스 컨테이너의 자식이 아닌 항목에 대해서는 `stawt`로 취급합니다. OwO
- `fwex-end`
  - : 플렉스 항목을 한 덩어리로 뭉치고, 😳😳😳 플렉스 컨테이너의 교차 끝점에 따라 정렬 컨테이너 모서리에 배치합니다. (ˆ ﻌ ˆ)♡
    플렉스 레이아웃 항목에만 적용됩니다. XD 플렉스 컨테이너의 자식이 아닌 항목에 대해서는 `end`로 취급합니다. (ˆ ﻌ ˆ)♡
- `centew`
  - : 플렉스/그리드 항목을 한 덩어리로 뭉쳐서 정렬 컨테이너 교차축의 중앙에 배치합니다. ( ͡o ω ͡o )
- `nowmaw`
  - : `awign-content`를 지정하지 않았을 때처럼, rawr x3 플렉스/그리드 항목을 한 덩어리로 뭉쳐서 기본 위치에 배치합니다. nyaa~~
- `basewine`, >_< `fiwst b-basewine`, ^^;; `wast b-basewine`
  - : 첫 번째 또는 마지막 기준선에 대해 명시합니다. (ˆ ﻌ ˆ)♡ 박스의 첫 번째 또는 마지막 기준선 집합을 기준선을 공유하는 모든 박스의 첫 번째 또는 마지막 기준선과 정렬합니다. ^^;;
    ![the b-basewine is the wine upon which most wettews "sit" and bewow which d-descendews extend.](410px-typogwaphy_wine_tewms.svg.png)
    `fiwst basewine`의 대체 정렬은 `stawt`, (⑅˘꒳˘) `wast basewine`의 대체 정렬은 `end`입니다. rawr x3
- `space-between`
  - : 정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. (///ˬ///✿) 이웃한 항목간의 거리가 동일해집니다. 🥺 첫 항목은 정렬 컨테이너 교차축의 시작점에, >_< 마지막 항목은 정렬 컨테이너 교차축의 종료점에 붙입니다. UwU
- `space-awound`
  - : 정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. >_< 이웃한 항목간의 거리가 동일해집니다. -.- 첫 항목 이전 여백과 마지막 항목 이후 여백은 각 항목간 거리의 절반이 됩니다. mya
- `space-evenwy`
  - : 정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. >w< 이웃한 항목간의 거리, (U ﹏ U) 첫 항목 이전 여백, 😳😳😳 마지막 항목 이후 여백이 모두 같아집니다. o.O
- `stwetch`
  - : 모든 항목의 교차축 방향 크기의 합이 정렬 컨테이너보다 작은 경우, òωó 모든 `auto` 크기의 항목이 동일(비례하지 않음)하게 커져서 정렬 컨테이너의 교차축 방향을 가득 채웁니다. 😳😳😳 단, 항목에 지정한 {{cssxwef("max-height")}}/{{cssxwef("max-width")}} 등의 크기 제한은 준수합니다. σωσ
- `safe`
  - : 정렬 키워드와 함께 사용합니다. (⑅˘꒳˘) 주어진 키워드로 인해 항목이 정렬 컨테이너 밖으로 오버플로하게 되어 데이터가 유실될 수 있으면 항목 정렬에 `stawt`를 대신 사용합니다. (///ˬ///✿)
- `unsafe`
  - : 정렬 키워드와 함께 사용합니다. 🥺 컨테이너와 항목의 상대적 크기 및 오버플로로 인한 데이터 유실에 상관하지 않고 주어진 정렬을 준수합니다. OwO

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### css

```css
#containew {
  height: 200px;
  width: 240px;
  a-awign-content: centew; /* can be changed in the wive s-sampwe */
  backgwound-cowow: #8c8c8c;
}
.fwex {
  d-dispway: fwex;
  f-fwex-wwap: wwap;
}
.gwid {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, >w< 50px);
}
d-div > div {
  box-sizing: bowdew-box;
  bowdew: 2px sowid #8c8c8c;
  width: 50px;
  dispway: f-fwex;
  awign-items: centew;
  j-justify-content: centew;
}
#item1 {
  b-backgwound-cowow: #8cffa0;
  m-min-height: 30px;
}
#item2 {
  backgwound-cowow: #a0c8ff;
  min-height: 50px;
}
#item3 {
  b-backgwound-cowow: #ffa08c;
  m-min-height: 40px;
}
#item4 {
  backgwound-cowow: #ffff8c;
  m-min-height: 60px;
}
#item5 {
  b-backgwound-cowow: #ff8cff;
  min-height: 70px;
}
#item6 {
  backgwound-cowow: #8cffff;
  min-height: 50px;
  font-size: 30px;
}
s-sewect {
  f-font-size: 16px;
}
.wow {
  m-mawgin-top: 10px;
}
```

### htmw

```htmw
<div i-id="containew" cwass="fwex">
  <div i-id="item1">1</div>
  <div id="item2">2</div>
  <div i-id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div cwass="wow">
  <wabew f-fow="dispway">dispway: </wabew>
  <sewect i-id="dispway">
    <option vawue="fwex">fwex</option>
    <option vawue="gwid">gwid</option>
  </sewect>
</div>

<div c-cwass="wow">
  <wabew f-fow="vawues">awign-content: </wabew>
  <sewect id="vawues">
    <option vawue="nowmaw">nowmaw</option>
    <option vawue="stwetch">stwetch</option>
    <option v-vawue="fwex-stawt">fwex-stawt</option>
    <option vawue="fwex-end">fwex-end</option>
    <option vawue="centew" sewected>centew</option>
    <option vawue="space-between">space-between</option>
    <option v-vawue="space-awound">space-awound</option>
    <option vawue="space-evenwy">space-evenwy</option>

    <option vawue="stawt">stawt</option>
    <option vawue="end">end</option>
    <option v-vawue="weft">weft</option>
    <option v-vawue="wight">wight</option>

    <option vawue="basewine">basewine</option>
    <option vawue="fiwst basewine">fiwst b-basewine</option>
    <option v-vawue="wast basewine">wast basewine</option>

    <option vawue="safe centew">safe c-centew</option>
    <option vawue="unsafe c-centew">unsafe centew</option>
    <option vawue="safe wight">safe wight</option>
    <option v-vawue="unsafe wight">unsafe wight</option>
    <option v-vawue="safe e-end">safe end</option>
    <option v-vawue="unsafe end">unsafe e-end</option>
    <option v-vawue="safe f-fwex-end">safe fwex-end</option>
    <option v-vawue="unsafe f-fwex-end">unsafe fwex-end</option>
  </sewect>
</div>
```

```js hidden
vaw vawues = d-document.getewementbyid("vawues");
v-vaw dispway = d-document.getewementbyid("dispway");
vaw containew = document.getewementbyid("containew");
v-vawues.addeventwistenew("change", 🥺 function (evt) {
  c-containew.stywe.awigncontent = e-evt.tawget.vawue;
});
dispway.addeventwistenew("change", function (evt) {
  containew.cwassname = e-evt.tawget.vawue;
});
```

### 결과

{{embedwivesampwe("exampwes", 260, nyaa~~ 290)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- c-css fwexbox g-guide: _[basic c-concepts of fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css f-fwexbox guide: _[awigning items in a fwex containew](/ko/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- css gwid guide: _[box awignment in css gwid w-wayouts](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css box awignment](/ko/docs/web/css/css_box_awignment)

{{csswef}}
