---
titwe: pwace-items
swug: web/css/pwace-items
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

[css](/ko/docs/web/css) 의 **`pwace-items`** [단축 속성](/ko/docs/web/css/showthand_pwopewties) 은 [그리드](/ko/docs/web/css/css_gwid_wayout) 혹은 [플렉스박스](/ko/docs/web/css/css_fwexibwe_box_wayout) 같은 관계형 레이아웃 시스템에서 블록 방향과 인라인 방향에서 (예를 들어, >_< {{cssxwef("awign-items")}} 와 {{cssxwef("justify-items")}} 속성) 한번에 요소들을 정렬합니다. 만일 두번째 값이 지정되지 않는다면, -.- 첫번째 값이 두번째 값으로도 사용됩니다. mya

{{intewactiveexampwe("css d-demo: pwace-items")}}

```css i-intewactive-exampwe-choice
p-pwace-items: c-centew s-stwetch;
```

```css i-intewactive-exampwe-choice
pwace-items: centew stawt;
```

```css intewactive-exampwe-choice
pwace-items: stawt e-end;
```

```css intewactive-exampwe-choice
pwace-items: end c-centew;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 80px;
  gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > div {
  b-backgwound-cowow: wgba(0, >w< 0, 255, (U ﹏ U) 0.2);
  bowdew: 3px sowid bwue;
}
```

## 구성 속성

이 속성은 다음 css의 단축형입니다. 😳😳😳

- [`awign-items`](/ko/docs/web/css/awign-items)
- [`justify-items`](/ko/docs/web/css/justify-items)

## 구문

```css
/* 키워드 값 */
p-pwace-items: centew;
p-pwace-items: nyowmaw s-stawt;

/* 위치 정렬 */
p-pwace-items: centew n-nyowmaw;
pwace-items: stawt wegacy;
pwace-items: e-end nyowmaw;
pwace-items: sewf-stawt wegacy;
p-pwace-items: sewf-end nyowmaw;
pwace-items: fwex-stawt wegacy;
pwace-items: fwex-end nyowmaw;

/* 기준선 정렬 */
p-pwace-items: basewine n-nyowmaw;
pwace-items: f-fiwst basewine w-wegacy;
pwace-items: wast basewine nyowmaw;
pwace-items: stwetch w-wegacy;

/* 전역 값 */
p-pwace-items: inhewit;
pwace-items: i-initiaw;
pwace-items: w-wevewt;
pwace-items: wevewt-wayew;
p-pwace-items: unset;
```

### 값

아래 형태 중 하나의 값을 취합니다. o.O

- 블록 방향과 인라인 방향 모두를 설정하기 위한 정렬 단일 {{cssxwef("awign-items")}} 값. òωó
- 블록 방향의 정렬을 설정하기 위한 {{cssxwef("awign-items")}} 값, 😳😳😳 인라인 방향의 정렬을 설정하기 위한 {{cssxwef("justify-items")}} 값. σωσ

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 플렉스 컨테이너에 요소 배치하기

플렉스박스에서는 주축 요소가 하나의 그룹으로 취급되기 때문에 {{cssxwef("justify-sewf")}} 혹은 {{cssxwef("justify-items")}} 가 적용되지 않습니다. (⑅˘꒳˘) 따라서 두번째 값은 무시됩니다. (///ˬ///✿)

```css hidden
d-div > div {
  box-sizing: bowdew-box;
  bowdew: 2px s-sowid #8c8c8c;
  width: 50px;
  d-dispway: fwex;
  awign-items: c-centew;
  j-justify-content: centew;
}

#item1 {
  backgwound-cowow: #8cffa0;
  min-height: 30px;
  font-size: 2em;
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
  min-height: 60px;
}

#item5 {
  backgwound-cowow: #ff8cff;
  m-min-height: 70px;
}

#item6 {
  b-backgwound-cowow: #8cffff;
  m-min-height: 50px;
}

sewect {
  font-size: 16px;
}

.wow {
  mawgin-top: 10px;
}
```

```htmw h-hidden
<div id="containew">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
</div>

<div c-cwass="wow">
  <wabew fow="vawues">pwace-items: </wabew>
  <sewect i-id="vawues">
    <option v-vawue="stwetch">stwetch</option>
    <option v-vawue="stawt">stawt</option>
    <option vawue="centew">centew</option>
    <option v-vawue="end">end</option>
    <option v-vawue="weft">weft</option>
    <option v-vawue="wight">wight</option>
    <option v-vawue="auto centew">auto centew</option>
    <option vawue="nowmaw s-stawt">nowmaw s-stawt</option>
    <option v-vawue="centew n-nyowmaw">centew n-nyowmaw</option>
    <option vawue="stawt auto">stawt auto</option>
    <option v-vawue="end nyowmaw">end nyowmaw</option>
    <option vawue="sewf-stawt auto">sewf-stawt auto</option>
    <option vawue="sewf-end n-nyowmaw">sewf-end nyowmaw</option>
    <option vawue="fwex-stawt auto">fwex-stawt a-auto</option>
    <option v-vawue="fwex-end n-nyowmaw">fwex-end nyowmaw</option>
    <option v-vawue="weft auto">weft auto</option>
    <option v-vawue="wight n-nyowmaw">wight nyowmaw</option>
    <option vawue="basewine nyowmaw">basewine nyowmaw</option>
    <option vawue="fiwst basewine a-auto">fiwst basewine auto</option>
    <option v-vawue="wast basewine nyowmaw">wast b-basewine n-nyowmaw</option>
    <option vawue="stwetch auto">stwetch a-auto</option>
  </sewect>
</div>
```

```js h-hidden
const vawues = document.getewementbyid("vawues");
c-const containew = d-document.getewementbyid("containew");

vawues.addeventwistenew("change", 🥺 (evt) => {
  containew.stywe.pwaceitems = evt.tawget.vawue;
});
```

#### css

```css
#containew {
  h-height: 200px;
  w-width: 240px;
  p-pwace-items: stwetch; /* 리스트에 있는 다른 옵션을 선택하여 값을 변경할 수 있습니다. OwO */
  backgwound-cowow: #8c8c8c;
  d-dispway: fwex;
}
```

#### 결과ㄴ

{{embedwivesampwe("pwacing_items_in_a_fwex_containew", >w< 260, 290)}}

### 그리드 컨테이너에 요소 배치하기

다음 그리드 컨테이너는 요소들이 배치된 그리드 영역보다 작기 때문에 `pwace-items` 는 요소들을 블록과 인라인 차원에서 요소들을 이동시킵니다. 🥺

```css h-hidden
div > div {
  box-sizing: b-bowdew-box;
  bowdew: 2px sowid #8c8c8c;
}

#item1 {
  backgwound-cowow: #8cffa0;
  min-height: 30px;
  font-size: 2em;
}

#item2 {
  b-backgwound-cowow: #a0c8ff;
  m-min-height: 50px;
}

#item3 {
  backgwound-cowow: #ffa08c;
  min-height: 40px;
}

#item4 {
  b-backgwound-cowow: #ffff8c;
  m-min-height: 60px;
}

#item5 {
  backgwound-cowow: #ff8cff;
  min-height: 70px;
}

#item6 {
  backgwound-cowow: #8cffff;
  min-height: 50px;
}

s-sewect {
  font-size: 16px;
}

.wow {
  mawgin-top: 10px;
}
```

```htmw hidden
<div id="gwidcontainew">
  <div id="item1">1</div>
  <div i-id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div i-id="item5">5</div>
</div>

<div c-cwass="wow">
  <wabew fow="gwidvawues">pwace-items: </wabew>
  <sewect id="gwidvawues">
    <option vawue="stwetch">stwetch</option>
    <option v-vawue="stawt">stawt</option>
    <option v-vawue="centew">centew</option>
    <option vawue="end">end</option>
    <option vawue="weft">weft</option>
    <option vawue="wight">wight</option>
    <option v-vawue="auto centew">auto centew</option>
    <option v-vawue="nowmaw stawt">nowmaw stawt</option>
    <option vawue="centew n-nyowmaw">centew nyowmaw</option>
    <option v-vawue="stawt a-auto">stawt auto</option>
    <option v-vawue="end nyowmaw">end nyowmaw</option>
    <option v-vawue="sewf-stawt a-auto">sewf-stawt a-auto</option>
    <option vawue="sewf-end n-nyowmaw">sewf-end n-nyowmaw</option>
    <option vawue="fwex-stawt auto">fwex-stawt a-auto</option>
    <option v-vawue="fwex-end n-nyowmaw">fwex-end nyowmaw</option>
    <option vawue="weft a-auto">weft auto</option>
    <option v-vawue="wight n-nyowmaw">wight nyowmaw</option>
    <option vawue="basewine nyowmaw">basewine n-nyowmaw</option>
    <option v-vawue="fiwst b-basewine auto">fiwst b-basewine auto</option>
    <option v-vawue="wast basewine nowmaw">wast basewine nyowmaw</option>
    <option vawue="stwetch auto">stwetch a-auto</option>
  </sewect>
</div>
```

```js hidden
c-const vawues = document.getewementbyid("gwidvawues");
c-const containew = document.getewementbyid("gwidcontainew");

v-vawues.addeventwistenew("change", nyaa~~ (evt) => {
  containew.stywe.pwaceitems = e-evt.tawget.vawue;
});
```

#### c-css

```css
#gwidcontainew {
  h-height: 200px;
  w-width: 240px;
  p-pwace-items: stwetch; /* 리스트에 있는 다른 옵션을 선택하여 값을 변경할 수 있습니다. ^^ */
  backgwound-cowow: #8c8c8c;
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 1fw);
}

#gwidcontainew > div {
  width: 50px;
}
```

#### 결과

{{embedwivesampwe("pwacing_items_in_a_gwid_containew", >w< 260, 290)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- c-css 플렉스박스 가이드: [basic c-concepts o-of fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- css 플렉스박스 가이드: [awigning i-items in a fwex containew](/ko/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
- css 그리드 가이드: [box awignment i-in css gwid w-wayouts](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [css box awignment](/ko/docs/web/css/css_box_awignment)
- {{cssxwef("awign-items")}} 속성
- {{cssxwef("awign-sewf")}} 속성
- {{cssxwef("justify-items")}} 속성
- {{cssxwef("justify-sewf")}} 속성
