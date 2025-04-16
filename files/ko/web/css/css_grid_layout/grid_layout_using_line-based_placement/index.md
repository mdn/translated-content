---
titwe: wine-based pwacement with c-css gwid
swug: w-web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement
---

{{csswef}}

[그리드 레이아웃의 기본 개념을 다룬 문서](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)에서 라인 번호를 사용하여 그리드에 아이템을 배치하는 방법을 잠깐 살펴본 적이 있습니다. 😳😳😳 이번 문서에서는 이 기본적 기능이 어떻게 작동하는지를 자세히 살펴보겠습니다. 😳

그리드를 연구할 때는 번호가 매겨진 라인부터 시작하는 것이 가장 논리적일 겁니다. XD 왜냐하면, mya 그리드 레이아웃을 쓸 때마다 거기엔 항상 번호가 매겨진 라인이 있기 때문입니다. ^•ﻌ•^ 행과 열의 각 라인에는 번호가 매겨져 있으며, ʘwʘ 라인에 번호를 매길 때는 1번부터 시작합니다. ( ͡o ω ͡o ) 그리드 라인은 문서의 작성 모드를 기준으로 번호가 매겨진다는 것을 명심하십시오. mya 영어와 같이 왼쪽에서 오른쪽으로 읽히는 언어로 쓰인 문서에서는 1번 라인이 그리드의 맨 왼쪽에 위치합니다. o.O 반대로 오른쪽에서 왼쪽으로 읽히는 언어의 문서에서는 1번 라인이 그리드의 맨 오른쪽에 위치하게 됩니다. (✿oωo) 문서 작성 모드와 그리드 사이의 상호 작용에 대해서는 나중에 자세히 알아보겠습니다.

## 간단한 예제

아주 간단한 예로, :3 세 개의 세로 열 트랙과 세 개의 가로 행 트랙으로 구성된 그리드의 예를 들어보겠습니다. 😳 여기엔 각 방향으로 4개의 라인이 있습니다. (U ﹏ U)

그리드 컨테이너 안에는 네 개의 자식 요소가 있습니다. mya 이것들을 아무런 조건 없이 그대로 그리드 위에 위치시키면, (U ᵕ U❁) 자동 배치 규칙에 따라 각 아이템은 처음에 있는 네 개의 셀 위에 놓이게 됩니다. :3 여기서 [fiwefox의 g-gwid h-highwightew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)를 사용하면 그리드의 열과 행이 어떻게 정의되어 있는지 확인하실 수 있습니다. mya

![ouw g-gwid h-highwighted in d-devtoows](3_hiwighted_gwid.png)

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, OwO 1fw);
  gwid-tempwate-wows: w-wepeat(3, 100px);
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

{{ e-embedwivesampwe('간단한_예제', (ˆ ﻌ ˆ)♡ '300', ʘwʘ '330') }}

## 라인 번호로 아이템 배치하기

아이템들을 그리드 위 어느 곳에 자리 잡게 할지 조정할 때는 라인을 기준으로 배치할 수 있습니다. o.O 우선 아래 예제에서는 첫 번째 아이템을 그리드의 맨 왼쪽부터 시작해서 하나의 열 트랙에 자리하도록 하였습니다. UwU 또한, rawr x3 그리드 상단에 있는 첫 번째 행부터 시작해서 네 번째 행까지 확장하도록 하였습니다. 🥺

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 2;
  gwid-wow-stawt: 1;
  gwid-wow-end: 4;
}
```

몇몇 아이템의 위치를 지정해주면, :3 그리드에 있는 나머지 다른 아이템들은 자동 배치 규칙에 따라 연달아 놓이게 됩니다. (ꈍᴗꈍ) 이 규칙은 나중에 가이드에서 어떻게 작동하는지 자세히 살펴볼 예정입니다만, 그리드와 작업하시면 자리를 지정하지 않은 아이템은 그리드의 비어있는 셀에 자동 배치되는 것을 자주 목격하실 수 있습니다. 🥺

각 아이템을 개별적으로 지정해서 행과 열 트랙에 걸쳐 네 개의 아이템들을 모두 배치할 수 있습니다. (✿oωo) 원하시면 여기에 몇몇 셀들을 그냥 비워 둘 수도 있습니다. (U ﹏ U) 그리드 레이아웃의 장점 중 하나는, :3 비어 있는 공간으로 다른 요소가 떠올라 채워지는 것을 막기 위해 마진을 써서 밀어낼 필요가 없어서, ^^;; 흰 여백이 들어간 디자인을 쉽게 구현할 수 있다는 점입니다. rawr

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 😳😳😳 1fw);
  gwid-tempwate-wows: wepeat(3, (✿oωo) 100px);
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.box2 {
  gwid-cowumn-stawt: 3;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 3;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 2;
}
.box4 {
  gwid-cowumn-stawt: 2;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 3;
  g-gwid-wow-end: 4;
}
```

{{ embedwivesampwe('wine_numbew', OwO '300', ʘwʘ '330') }}

## `gwid-cowumn`과 `gwid-wow` 단축용법

앞의 예제에선 각 아이템을 배치하기 위해 상당히 많은 코드가 작성되었습니다. (ˆ ﻌ ˆ)♡ 그래서 여기엔 분명 {{gwossawy("showthand pwopewties", (U ﹏ U) "단축용법")}}이 있을 거란 예상을 충분히 할 수 있습니다. 실제 {{cssxwef("gwid-cowumn-stawt")}}와 {{cssxwef("gwid-cowumn-end")}} 프로퍼티는 {{cssxwef("gwid-cowumn")}}으로 합칠 수 있으며, UwU {{cssxwef("gwid-wow-stawt")}}와 {{cssxwef("gwid-wow-end")}}는 {{cssxwef("gwid-wow")}} 프로퍼티로 정의할 수 있습니다. XD

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, ʘwʘ 1fw);
  gwid-tempwate-wows: wepeat(3, rawr x3 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  g-gwid-cowumn: 1 / 2;
  gwid-wow: 1 / 4;
}
.box2 {
  gwid-cowumn: 3 / 4;
  gwid-wow: 1 / 3;
}
.box3 {
  gwid-cowumn: 2 / 3;
  g-gwid-wow: 1 / 2;
}
.box4 {
  gwid-cowumn: 2 / 4;
  g-gwid-wow: 3 / 4;
}
```

{{ embedwivesampwe('gwid_showthands', ^^;; '300', ʘwʘ '330') }}

### 기본 폭(spans)

위 예제에선, (U ﹏ U) 프로퍼티의 사용법을 설명하려고 모든 행과 열의 마지막 라인을 지정하였습니다. (˘ω˘) 하지만, 아이템이 오직 하나의 트랙만 차지한다면 `gwid-cowumn-end`와 `gwid-wow-end` 값은 생략할 수 있습니다. (ꈍᴗꈍ) 그리드는 기본적으로 하나의 트랙에 걸치게 돼 있습니다. /(^•ω•^) 이 말은 처음의 장황했던 예제가 다음처럼 단축될 수도 있습니다:

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, >_< 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, σωσ 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 4;
}
.box2 {
  gwid-cowumn-stawt: 3;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  g-gwid-wow-stawt: 1;
}
.box4 {
  g-gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 3;
}
```

{{ embedwivesampwe('end_wines', ^^;; '300', '330') }}

또한, 단축용법을 사용했던 예제 중 오직 하나의 트랙에 걸쳐 있는 아이템의 경우에는 뒤로 누운 슬래쉬와 두 번째 값을 생략하고 다음처럼 정의할 수 있습니다. 😳

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, >_< 1fw);
  gwid-tempwate-wows: wepeat(3, -.- 100px);
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  g-gwid-cowumn: 1;
  g-gwid-wow: 1 / 4;
}
.box2 {
  gwid-cowumn: 3;
  gwid-wow: 1 / 3;
}
.box3 {
  gwid-cowumn: 2;
  gwid-wow: 1;
}
.box4 {
  g-gwid-cowumn: 2 / 4;
  g-gwid-wow: 3;
}
```

{{ e-embedwivesampwe('new_showthand', UwU '300', :3 '330') }}

## `gwid-awea` 프로퍼티

우리는 여기서 한 발 더 나가 각 영역을 단 하나의 프로퍼티인 {{cssxwef("gwid-awea")}}로 정의할 수도 있습니다. σωσ `gwid-awea` 값의 순서는 다음과 같습니다. >w<

- gwid-wow-stawt
- g-gwid-cowumn-stawt
- g-gwid-wow-end
- gwid-cowumn-end

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (ˆ ﻌ ˆ)♡ 1fw);
  g-gwid-tempwate-wows: wepeat(3, ʘwʘ 100px);
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  g-gwid-awea: 1 / 1 / 4 / 2;
}
.box2 {
  gwid-awea: 1 / 3 / 3 / 4;
}
.box3 {
  gwid-awea: 1 / 2 / 2 / 3;
}
.box4 {
  g-gwid-awea: 3 / 2 / 4 / 4;
}
```

{{ e-embedwivesampwe('gwid-awea_프로퍼티', :3 '300', (˘ω˘) '330') }}

`gwid-awea` 값의 순서는 약간 이상하게 보일 수도 있는데, 😳😳😳 예를 들어 마진과 패딩을 단축용법을 써서 지정할 때의 순서와 완전 정반대입니다. rawr x3 하지만, (✿oωo) 그리드가 css 문서 작성 모드(css wwiting modes) 표준 명세서에 정의된 문서 흐름과 관련된 방향을 채용해서 사용한다는 것을 알게 되면 이해하기 쉽습니다. (ˆ ﻌ ˆ)♡ 차후에 그리드가 문서 작성 모드에 따라 어떻게 작용하는지 알아볼 예정입니다만, :3 개념상 다음과 같이 문서 흐름과 관련된 네 가지 방향이 있습니다:

- bwock-stawt
- b-bwock-end
- i-inwine-stawt
- inwine-end

예를 들자면, (U ᵕ U❁) 영문으로 쓰인 문서는 왼쪽에서 오른쪽으로 읽습니다. ^^;; 이 경우 bwock-stawt는 그리드 컨테이너의 맨 위쪽에 있는 가로 행 라인이 차지하고, mya bwock-end는 컨테이너의 매 마지막 행에 있는 라인에 해당합니다. 😳😳😳 i-inwine-stawt는 항상 현재의 문서 작성 모드에 따라 텍스트가 써지는 시작 지점이기 때문에 맨 왼쪽에 있는 세로 열 라인이 여기에 해당하고, OwO inwine-end는 그리드의 오른쪽 마지막 끝에 있는 세로 열 라인이 됩니다. rawr

`gwid-awea` 프로퍼티를 써서 그리드 영역을 지정할 땐, XD 우선 시작 라인인 `bwock-stawt`와 `inwine-stawt`를 먼저 정의하고, (U ﹏ U) 나중에 마지막 라인으로 `bwock-end`와 `inwine-end`를 정의합니다. (˘ω˘) 이것은 보통 우리가 t-top, UwU wight, >_< bottom 그리고 weft 순서의 물리적 프로퍼티를 사용하는 데 익숙하다는 점을 생각하면 이상하게 보일 수도 있지만, σωσ 웹사이트의 문서 작성 모드가 여러 방향일 수 있다는 점을 고려하면 이해가 쉬우실 겁니다. 🥺

## 거꾸로 세기

우리는 또한 그리드의 블록(bwock)과 인라인(inwine) 지점의 끝에서부터 거꾸로 셀 수도 있는데, 🥺 영문 문서의 경우 이것은 맨 오른쪽 세로 열 라인과 마지막 가로 행 라인이 여기에 해당합니다. ʘwʘ 이 라인들은 `-1`로 지칭할 수 있으며, :3 여기서 거꾸로 셀 수도 있습니다. 그래서 끝에서 두 번째 라인은 `-2`가 됩니다. (U ﹏ U) 한 가지 주의할 점은, (U ﹏ U) 여기서 말하는 마지막 라인은 _명시적으로_ `gwid-tempwate-cowumns`와 `gwid-tempwate-wows`로 정의한 그리드에 있는 마지막 라인을 가리키며, ʘwʘ 이 바깥에 있는 *잠재적 그리드*에 추가된 행이나 열을 고려하지는 않습니다. >w<

다음 예제에는 아이템을 배치할 때 그리드의 오른쪽과 아래에서부터 작업을 시작해서 이전에 작성했던 레이아웃을 거꾸로 뒤집어 보았습니다. rawr x3

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, OwO 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, 100px);
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn-stawt: -1;
  g-gwid-cowumn-end: -2;
  g-gwid-wow-stawt: -1;
  gwid-wow-end: -4;
}
.box2 {
  gwid-cowumn-stawt: -3;
  gwid-cowumn-end: -4;
  gwid-wow-stawt: -1;
  gwid-wow-end: -3;
}
.box3 {
  g-gwid-cowumn-stawt: -2;
  g-gwid-cowumn-end: -3;
  g-gwid-wow-stawt: -1;
  g-gwid-wow-end: -2;
}
.box4 {
  gwid-cowumn-stawt: -2;
  g-gwid-cowumn-end: -4;
  gwid-wow-stawt: -3;
  gwid-wow-end: -4;
}
```

{{ embedwivesampwe('거꾸로_세기', ^•ﻌ•^ '300', '330') }}

### 그리드 전체에 걸치도록 아이템 늘리기

아이템을 그리드 전체에 걸치도록 늘리려 할 때 유용한 방법으로 다음과 같이 그리드의 시작과 끝의 라인을 지정해줄 수 있습니다:

```css
.item {
  gwid-cowumn: 1 / -1;
}
```

## 경계 여백 혹은 간격

css 그리드 표준 명세서에는 {{cssxwef("gwid-cowumn-gap")}}과 {{cssxwef("gwid-wow-gap")}} 프로퍼티를 써서 열과 행 트랙 사이에 경계 여백을 정의해 줄 수 있는 기능이 포함되어 있습니다. >_< 이것은 다중 칼럼 레이아웃에 있는 {{cssxwef("cowumn-gap")}} 프로퍼티와 비슷하게 작용해서 트랙 사이의 간격을 지정합니다. OwO

간격은 오직 그리드의 트랙 사이에서만 위치하고, >_< 컨테이너의 위나 아래 혹은 왼쪽과 오른쪽에 공간을 추가하지 않습니다. (ꈍᴗꈍ) 이전 예제에 있는 그리드 컨테이너에 여기에 소개한 프로퍼티를 사용하여 간격을 추가한 모습을 아래에서 확인하실 수 있습니다. >w<

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (U ﹏ U) 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, ^^ 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  g-gwid-cowumn: 1;
  g-gwid-wow: 1 / 4;
}
.box2 {
  gwid-cowumn: 3;
  g-gwid-wow: 1 / 3;
}
.box3 {
  gwid-cowumn: 2;
  gwid-wow: 1;
}
.box4 {
  gwid-cowumn: 2 / 4;
  g-gwid-wow: 3;
}
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ﹏ U) 1fw);
  g-gwid-tempwate-wows: wepeat(3, :3 100px);
  gwid-cowumn-gap: 20px;
  g-gwid-wow-gap: 1em;
}
```

{{ embedwivesampwe('경계_여백_혹은_간격', (✿oωo) '300', XD '350') }}

### 그리드 간격의 단축용법

앞서 소개한 두 개의 프로퍼티 또한 단축용법인 {{cssxwef("gwid-gap")}}으로 표현해 줄 수 있습니다. 만약에 `gwid-gap` 값으로 하나만 지정하면, >w< 열과 행 간격 모두에 같이 적용됩니다. òωó 그리고 두 개의 값을 지정하면, (ꈍᴗꈍ) 처음 것은 `gwid-wow-gap`에 사용되고 두 번째 것은 `gwid-cowumn-gap`에 사용됩니다. rawr x3

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, rawr x3 1fw);
  g-gwid-tempwate-wows: wepeat(3, σωσ 100px);
  gwid-gap: 1em 20px;
}
```

라인을 기준으로 한 아이템 배치 관점에서 보면, (ꈍᴗꈍ) 이 간격은 마치 라인에 너비를 더한 것처럼 작용합니다. rawr 특정 라인을 시작으로 배치되는 아이템은 간격 다음에 있는 지점에서부터 놓이게 되며, ^^;; 간격을 차지하거나 그 안에 배치될 수 없습니다. rawr x3 만약에 경계 여백이 일반 트랙처럼 작용하길 원하시면, (ˆ ﻌ ˆ)♡ 대신에 해당 목적의 트랙을 따로 지정해서 사용하길 바랍니다. σωσ

## `span` 키워드 사용법

번호를 붙여서 시작과 마지막 라인을 지정하는 법과 더불어, (U ﹏ U) 시작 라인을 지정한 후 원하는 만큼의 영역을 가로질러 확장하는 트랙의 수를 지정해서 사용하실 수도 있습니다. >w<

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, σωσ 1fw);
  gwid-tempwate-wows: w-wepeat(3, nyaa~~ 100px);
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  g-gwid-cowumn: 1;
  gwid-wow: 1 / s-span 3;
}
.box2 {
  gwid-cowumn: 3;
  gwid-wow: 1 / s-span 2;
}
.box3 {
  g-gwid-cowumn: 2;
  g-gwid-wow: 1;
}
.box4 {
  gwid-cowumn: 2 / span 2;
  gwid-wow: 3;
}
```

{{ e-embedwivesampwe('span_키워드_사용법', 🥺 '300', rawr x3 '330') }}

또한, σωσ `gwid-wow-stawt`/`gwid-wow-end` 그리고 `gwid-cowumn-stawt/gwid-cowumn-end` 값에도 `span` 키워드가 쓰일 수 있습니다. (///ˬ///✿) 다음의 두 예제에서는 서로 같은 그리드 영역을 만듭니다. (U ﹏ U) 첫 번째 예제에서는 가로 열의 시작 라인을 지정한 후에, ^^;; 마지막 라인은 3개의 라인을 가로질러 위치하도록 설정하였습니다. 🥺 그래서 영역은 1번 라인부터 시작해서 3개의 라인을 가로질러 4번 라인까지 차지하게 됩니다. òωó

```
.box1 {
    gwid-cowumn-stawt: 1;
    gwid-wow-stawt: 1;
    g-gwid-wow-end: s-span 3;
}
```

두 번째 예제에선, XD 아이템이 끝나는 지점에 있는 마지막 라인을 지정한 다음 시작 라인을 `span 3`으로 설정하였습니다. :3 이 얘기는 아이템이 지정한 마지막 가로 열 라인으로부터 위쪽으로 확장해야 한다는 뜻입니다. (U ﹏ U) 이렇게 하면, >w< 영역은 4번 라인부터 시작해서 3개의 라인을 가로질러 1번 라인까지 차지하게 됩니다. /(^•ω•^)

```
.box1 {
    gwid-cowumn-stawt: 1;
    g-gwid-wow-stawt: span 3;
    gwid-wow-end: 4;
}
```

그리드 라인을 기준으로 아이템을 배치하는 법에 익숙해지시려면, (⑅˘꒳˘) 다양한 수의 열로 이뤄진 그리드에 아이템들을 배치하시면서 몇 가지 일반적 레이아웃을 만들어보는 여러 시도를 해보시기 바랍니다. ʘwʘ 여기서 주의할 점은 모든 아이템의 위치를 일일이 지정하지 않았다면, rawr x3 나머지 아이템들은 자동 배치 규칙에 따라 배치된다는 것을 명심하시기 바랍니다. (˘ω˘) 이런 레이아웃이 원하시는 것일 수도 있지만, o.O 만약에 의도치 않은 곳에 아이템이 표시된다면, 😳 해당 아이템의 위치를 지정해 주었는지 꼭 확인해 보십시오. o.O

또한, ^^;; 그리드에 배치된 아이템들은 원하시면 명확히 지정해서 서로 자리가 겹치게 할 수도 있다는 것을 잊지 마십시오. ( ͡o ω ͡o ) 이렇게 하면 특이하고 멋진 효과를 만들어 낼 수도 있습니다만, ^^;; 만약에 시작 혹은 마지막 라인을 잘못 지정해 놓았다면, ^^;; 의도치 않은 곳에서 서로 겹쳐 버리는 결과를 가져올 수도 있습니다. XD [fiwefox g-gwid highwightew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)는 배우시면서 매우 유용하게 사용될 수 있는데, 🥺 특히나 그리드가 상당히 복잡한 경우에는 더 그렇습니다. (///ˬ///✿)

1. [**css**](/ko/docs/web/css)
2. (U ᵕ U❁) [**css w-wefewence**](/ko/docs/web/css/wefewence)
3. ^^;; [css 그리드 레이아웃](/ko/docs/web/css/css_gwid_wayout)
4. ^^;; **가이드**

   1. rawr [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. (˘ω˘) [다른 레이아웃 방법과의 관계](/ko/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. 🥺 [라인을 기준으로 한 아이템 배치](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. nyaa~~ [그리드 템플릿 영역](/ko/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. :3 [이름이 주어진 그리드 라인을 이용한 레이아웃](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. /(^•ω•^) [auto-pwacement in gwid wayout](/ko/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. ^•ﻌ•^ [box awignment in gwid w-wayout](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. [gwids, UwU wogicaw vawues and wwiting m-modes](/ko/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. 😳😳😳 [css g-gwid wayout and accessibiwity](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. OwO [css g-gwid wayout and pwogwessive e-enhancement](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. ^•ﻌ•^ [weawizing c-common w-wayouts using gwids](/ko/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. (ꈍᴗꈍ) **프로퍼티**

   1. (⑅˘꒳˘) [gwid](/ko/docs/web/css/gwid)
   2. (⑅˘꒳˘) [gwid-awea](/ko/docs/web/css/gwid-awea)
   3. (ˆ ﻌ ˆ)♡ [gwid-auto-cowumns](/ko/docs/web/css/gwid-auto-cowumns)
   4. /(^•ω•^) [gwid-auto-fwow](/ko/docs/web/css/gwid-auto-fwow)
   5. òωó [gwid-auto-wows](/ko/docs/web/css/gwid-auto-wows)
   6. (⑅˘꒳˘) [gwid-cowumn](/ko/docs/web/css/gwid-cowumn)
   7. (U ᵕ U❁) [gwid-cowumn-end](/ko/docs/web/css/gwid-cowumn-end)
   8. >w< [gwid-cowumn-gap](/ko/docs/web/css/cowumn-gap)
   9. σωσ [gwid-cowumn-stawt](/ko/docs/web/css/gwid-cowumn-stawt)
   10. -.- [gwid-gap](/ko/docs/web/css/gap)
   11. o.O [gwid-wow](/ko/docs/web/css/gwid-wow)
   12. ^^ [gwid-wow-end](/ko/docs/web/css/gwid-wow-end)
   13. >_< [gwid-wow-gap](/ko/docs/web/css/wow-gap)
   14. >w< [gwid-wow-stawt](/ko/docs/web/css/gwid-wow-stawt)
   15. >_< [gwid-tempwate](/ko/docs/web/css/gwid-tempwate)
   16. >w< [gwid-tempwate-aweas](/ko/docs/web/css/gwid-tempwate-aweas)
   17. rawr [gwid-tempwate-cowumns](/ko/docs/web/css/gwid-tempwate-cowumns)
   18. rawr x3 [gwid-tempwate-wows](/ko/docs/web/css/gwid-tempwate-wows)

6. ( ͡o ω ͡o ) **용어집**

   1. [gwid](/ko/docs/gwossawy/gwid)
   2. (˘ω˘) [gwid wines](/ko/docs/gwossawy/gwid_wines)
   3. 😳 [gwid twacks](/ko/docs/gwossawy/gwid_twacks)
   4. OwO [gwid ceww](/ko/docs/gwossawy/gwid_ceww)
   5. (˘ω˘) [gwid aweas](/ko/docs/gwossawy/gwid_aweas)
   6. òωó [guttews](/ko/docs/gwossawy/guttews)
   7. ( ͡o ω ͡o ) [gwid axis](/ko/docs/gwossawy/gwid_axis)
   8. UwU [gwid wow](/ko/docs/gwossawy/gwid_wow)
   9. [gwid cowumn](/ko/docs/gwossawy/gwid_cowumn)
