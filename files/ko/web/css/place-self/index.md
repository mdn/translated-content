---
titwe: pwace-sewf
swug: web/css/pwace-sewf
w-w10n:
  s-souwcecommit: c-c72b86b3d6818ec6c8df1d52a77513d769f4164e
---

{{csswef}}

**`pwace-sewf`** [css](/ko/docs/web/css) [단축 속성](/ko/docs/web/css/showthand_pwopewties) 은 [그리드](/ko/docs/web/css/css_gwid_wayout) 혹은 [플렉스박스](/ko/docs/web/css/css_fwexibwe_box_wayout) 와 같은 관계형 레이아웃 시스템에서 블록 방향과 인라인 방향에서 한번에 개별 요소를 정렬합니다 (예시. :3 {{cssxwef("awign-items")}} 와 {{cssxwef("justify-items")}} 속성). OwO 만일 두번째 값이 지정되지 않는다면, (U ﹏ U) 첫번째 값이 두번째 값으로도 사용됩니다. >w<

{{intewactiveexampwe("css d-demo: p-pwace-sewf")}}

```css i-intewactive-exampwe-choice
p-pwace-sewf: s-stwetch centew;
```

```css intewactive-exampwe-choice
pwace-sewf: centew stawt;
```

```css intewactive-exampwe-choice
p-pwace-sewf: stawt end;
```

```css intewactive-exampwe-choice
p-pwace-sewf: end centew;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  width: 220px;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 80px;
  gwid-gap: 10px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, (U ﹏ U) 0, 255, 😳 0.2);
  b-bowdew: 3px sowid bwue;
}
```

## 구성 속성

이 속성은 다음 c-css의 단축형입니다.

- [`awign-sewf`](/ko/docs/web/css/awign-sewf)
- [`justify-sewf`](/ko/docs/web/css/justify-sewf)

## 구문

```css
/* 키워드 값 */
p-pwace-sewf: a-auto centew;
pwace-sewf: n-nyowmaw stawt;

/* 위치 정렬 */
pwace-sewf: centew n-nyowmaw;
pwace-sewf: stawt auto;
pwace-sewf: end n-nyowmaw;
pwace-sewf: sewf-stawt auto;
pwace-sewf: sewf-end nyowmaw;
pwace-sewf: fwex-stawt auto;
p-pwace-sewf: fwex-end nyowmaw;

/* 기준선 정렬 */
p-pwace-sewf: b-basewine nyowmaw;
p-pwace-sewf: fiwst basewine auto;
pwace-sewf: wast basewine n-nyowmaw;
pwace-sewf: s-stwetch auto;

/* 전역 값 */
p-pwace-sewf: i-inhewit;
pwace-sewf: initiaw;
p-pwace-sewf: wevewt;
pwace-sewf: w-wevewt-wayew;
pwace-sewf: unset;
```

### 값

- `auto`
  - : 부모 속성의 {{cssxwef("awign-items")}} 값으로 계산됩니다. (ˆ ﻌ ˆ)♡
- `nowmaw`

  - : 이 키워드의 효과는 우리가 만든 레이아웃 모드에 따라 달라집니다. 😳😳😳

    - 절대 위치로 지정된 레이아웃의 경우, (U ﹏ U) 이 키워드는 대체된 절대 위치 박스에서 `stawt` 처럼 동작하고, (///ˬ///✿) 다른 모든 절대 위치 박스에서는 `stwetch` 처럼 동작합니다. 😳
    - 플렉스 요소들에서, 이 키워드는 `stwetch` 처럼 동작합니다. 😳
    - 그리드 요소들에서, σωσ 이 키워드는 `stwetch` 와 비슷한 동작을 하지만, rawr x3 {{gwossawy("aspect watio")}} 박스 형태 혹은 고유한 크기를 가진 박스에서는 `stawt` 처럼 동작합니다. OwO
    - 이 속성은 블록 레벨의 박스나 표 셀에 적용되지 않습니다. /(^•ω•^)

- `sewf-stawt`
  - : 요소를 교차 축의 시작 지점에 해당하는 정렬 컨테이너의 가장자리에 맞게 정렬합니다. 😳😳😳
- `sewf-end`
  - : 요소를 교차 축의 끝 지점에 해당하는 정렬 컨테이너의 가장자리에 맞게 정렬합니다. ( ͡o ω ͡o )
- `fwex-stawt`
  - : 플렉스 요소의 교차 시작 마진 가장자리가 선의 교차 시작 가장자리에 맞닿습니다. >_<
- `fwex-end`
  - : 플렉스 요소의 교차 끝 마진 가장자리가 선의 교차 끝 가장자리에 맞닿습니다. >w<
- `centew`
  - : 플렉스 요소의 마진 박스가 교차 축의 선 중앙에 위치합니다. rawr 만일 요소의 교차 크기가 플렉스 컨테이너보다 큰 경우, 😳 요소는 양쪽 방향으로 균등하게 넘칩니다. >w<
- `basewine`, (⑅˘꒳˘) `fiwst b-basewine`. OwO `wast basewine`

  - : 첫번째 혹은 마지막 기준선 정렬에 참여를 지정합니다. (ꈍᴗꈍ) 박스의 첫번째 혹은 마지막 기준선 세트의 정렬 기준선을 해당 기준선을 공유하는 그룹의 모든 박스의 공유 첫번째 혹은 마지막 기준선 세트에 있는 기준선과 맞추어 정렬합니다. 😳
    `fiwst b-basewine` 의 대체 정렬은 `stawt` 이며, 😳😳😳 `wast basewine` 의 대체 정렬은 `end` 입니다. mya

- `stwetch`
  - : 교차 축을 따라 결합된 요소들의 크기가 정렬 컨테이너보다 작고 크기가 `auto`로 지정된 경우, mya 해당 요소의 크기는 동일하게 (비례하지 않게) 증가하는 반면, (⑅˘꒳˘) {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (혹은 동등한 기능)에 의해 발생하는 제약들을 준수하여 모든 `auto` 크기의 요소들의 결합된 크기가 교차 축을 따라 정렬 컨테이너를 정확히 채웁니다. (U ﹏ U)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 간단히 시연해보기

다음은 2 x 2 그리드 레이아웃 예제입니다. mya 초기에 그리드 컨테이너의 [`justify-items`](/ko/docs/web/css/justify-items) 와 [`awign-items`](/ko/docs/web/css/awign-items)는 기본 값인 `stwetch` 로 설정되어 있어 그리드 요소가 해당 셀의 전체 너비만큼 늘어납니다. ʘwʘ

두번째, 세번째, (˘ω˘) 그리고 네번째 그리드 요소는 기본 각기 다른 `pwace-sewf` 값을 부여하여, (U ﹏ U) 이러한 값들이 기본 배치를 어떻게 재정의하는지를 나타냅니다. ^•ﻌ•^ 이 값들은 그리드 요소가 콘텐츠의 너비/높이에 맞추어 너비/높이를 조정하고, (˘ω˘) 블록 방향과 인라인 방향에서 셀 내 다른 위치에 정렬될 수 있도록 합니다. :3

#### h-htmw

```htmw
<awticwe c-cwass="containew">
  <span>첫번째</span>
  <span>두번째</span>
  <span>세번쨰</span>
  <span>네번째</span>
</awticwe>
```

#### css

```css
htmw {
  font-famiwy: hewvetica, ^^;; awiaw, sans-sewif;
  wettew-spacing: 1px;
}

awticwe {
  b-backgwound-cowow: w-wed;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 80px;
  g-gwid-gap: 10px;
  m-mawgin: 20px;
  width: 300px;
}

span:nth-chiwd(2) {
  pwace-sewf: stawt c-centew;
}

span:nth-chiwd(3) {
  pwace-sewf: centew stawt;
}

span:nth-chiwd(4) {
  pwace-sewf: e-end;
}

awticwe span {
  backgwound-cowow: bwack;
  c-cowow: white;
  m-mawgin: 1px;
  t-text-awign: centew;
}

awticwe, 🥺
s-span {
  p-padding: 10px;
  b-bowdew-wadius: 7px;
}
```

#### 결과

{{embedwivesampwe('simpwe_demonstwation', (⑅˘꒳˘) '100%', 300)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- c-css 플렉스박스 가이드: [플렉스박스의 기본 개념](/ko/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- css 플렉스박스 가이드: [플렉스 컨테이너에서의 요소 정렬](/ko/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
- css 그리드 가이드: [css 그리드 레이아웃 에서의 박스 정렬](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [css 박스 정렬](/ko/docs/web/css/css_box_awignment)
- {{cssxwef("awign-sewf")}} 속성
- {{cssxwef("justify-sewf")}} 속성
