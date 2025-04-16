---
titwe: wewationship of gwid wayout t-to othew wayout m-methods
swug: w-web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods
---

{{csswef}}

c-css 그리드 레이아웃은 레이아웃 작업을 위한 전체 시스템 중의 일부로서, (///ˬ///✿) 다른 c-css 기술과 함께 어우러져 작동하도록 설계되었습니다. σωσ 이번 가이드에서는 이미 사용하고 계신 다른 기술과 그리드가 어떻게 잘 어울리는지 설명해 드리겠습니다. /(^•ω•^)

## 그리드와 플랙스박스

c-css 그리드 레이아웃과 [css 플랙스박스(fwexbox) 레이아웃](/ko/docs/web/css/css_fwexibwe_box_wayout)의 기본 차이점이라면, 😳 플랙스박스는 한 줄로 된 행 _혹은_ 열 방향의 레이아웃과 같이 일차원의 레이아웃을 염두에 두고 설계되었다는 점입니다. 😳 하지만, (⑅˘꒳˘) 그리드는 행과 열 모두를 염두에 둔 2차원적 레이아웃을 고려해서 설계되었습니다. 😳😳😳 그러나 두 기술은 몇 가지 공통된 면모를 공유하고 있어서, 이미 플랙스박스 사용법을 익히셨다면 그리드를 이해하는 데도 도움이 될 만한 둘 사이의 유사점을 목격하실 수도 있습니다. 😳

### 1차원적 대비 2차원적 레이아웃

간단한 예를 들면, 1차원 및 2차원 레이아웃의 차이점은 확연해집니다. XD

첫 번째 예제에서는 플랙스박스를 써서 일련의 네모난 상자들을 배치하였습니다. mya 컨테이너 안에는 다섯 개의 자식 아이템이 있고, ^•ﻌ•^ 플랙스 기준값 200픽셀을 기반으로 아이템이 늘어나거나 줄어들도록 f-fwex 프로퍼티 값을 지정하였습니다. ʘwʘ

또한, {{cssxwef("fwex-wwap")}} 프로퍼티 값으로 `wwap`을 지정해서, ( ͡o ω ͡o ) 만약 컨테이너 안에 있는 공간이 플랙스 기준값 너비의 아이템들을 모두 나열하지 못할 만큼 좁아진다면, mya 다음 행으로 줄 바꿈 하도록 하였습니다. o.O

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

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: f-fwex;
  fwex-wwap: wwap;
}
.wwappew > d-div {
  fwex: 1 1 200px;
}
```

{{ e-embedwivesampwe('onedtwod', (✿oωo) '500', '230') }}

위의 그림에서 보시다시피, :3 두 개의 아이템이 다음 행으로 줄 바꿈 한 것을 확인하실 수 있습니다. 😳 이 아이템들은 남은 공간을 공유하며 아래 위치한 아이템들은 위에 있는 것들과는 일렬로 정렬되지 않았습니다. (U ﹏ U) 이는 플랙스 아이템이 다음 열로 감길 때, mya 새로운 각각의 행 (또는 세로 열 기준으로 작업할 경우 각각의 열)이 새로운 플랙스 컨테이너가 되기 때문입니다. (U ᵕ U❁) 그래서 공간의 분배는 가로 행을 기준으로 이루어집니다. :3

여기서 자주 던지는 질문으로, mya 그러면 이런 아이템을 어떻게 하면 일렬로 정렬할 수 있을까입니다. OwO 이럴 땐 2차원적 레이아웃 방법을 고려해 볼 수 있습니다. (ˆ ﻌ ˆ)♡ 아이템을 정렬할 때 행과 열을 기준으로 제어하고 싶다면, ʘwʘ 이런 경우엔 그리드가 제격입니다. o.O

### css 그리드를 이용한 동일 레이아웃 구현

다음 예제에선 그리드를 써서 똑같은 레이아웃을 만들어 보았습니다. 이번엔 `1fw` 크기로 된 세 개의 세로 열 트랙으로 이루어져 있습니다. UwU 아이템 자체에는 아무것도 설정할 필요가 없고, rawr x3 아이템들은 생성된 그리드의 각 셀에 하나씩 배치됩니다. 🥺 보시다시피 아이템들은 행과 열에 줄지어서 그리드 위에 정확히 맞추어져 있습니다. :3 아이템이 다섯 개인 경우, (ꈍᴗꈍ) 2번째 행의 끝부분은 빈 곳으로 남게 됩니다. 🥺

```css
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, (✿oωo) 1fw);
}
```

{{ embedwivesampwe('two_dimensionaw_with_gwid', (U ﹏ U) '300', :3 '170') }}

그리드와 플랙스박스 둘 사이의 선택을 고민할 때 자신에게 던질 수 있는 간단한 질문으로:

- 레이아웃을 조정할 때 오직 가로 행 **_혹은_** 세로 열 만이 고려 대상이라면 – 플랙스박스를 사용하십시오
- 레아아웃을 조정할 때 가로 행과 세로 열 **_모두_**를 염두에 두어야 한다면 – 그리드를 사용하십시오

### 콘텐츠 중심 혹은 레이아웃 먼저?

1차원 대비 2차원의 차이점 외에도, ^^;; 레이아웃을 할 때 플랙스박스와 그리드 중에서 어떤 것을 써야 할지를 결정하는 또 다른 요인이 있습니다. rawr 플랙스박스는 좀 더 콘텐츠에 초점이 맞춰져 있습니다. 플랙스박스의 이상적인 사용 사례는 여러 아이템을 컨테이너에 고르게 배치하려는 경우입니다. 여기서 콘텐츠의 크기가 각 아이템이 차지하는 공간을 결정합니다. 😳😳😳 아이템이 새로운 줄로 줄 바꿈 되면, (✿oωo) 아이템의 크기와 *해당 줄*의 사용 가능한 공간에 따라 간격이 조정됩니다. OwO

그리드는 레이아웃을 먼저 고려하게 됩니다. ʘwʘ c-css 그리드 레이아웃을 사용할 때는 우선 레이아웃을 작성한 다음 그 위에 아이템을 배치하거나, (ˆ ﻌ ˆ)♡ 자동 배치 규칙을 통해 견고하게 짜인 그리드 위에 놓인 그리드 셀에 아이템을 배치하게 됩니다. (U ﹏ U) 콘텐츠의 크기에 따라 조절되는 트랙을 만들 수도 있지만, UwU 이렇게 하면 전체 트랙을 변경하게 됩니다. XD

플랙스박스를 사용하면서 그 특유의 유연성 때문에 제약을 느낀다면, ʘwʘ css 그리드 레이아웃을 고려해 보시는 것도 좋을 겁니다. 예를 들어 윗줄에 있는 다른 아이템과 일렬로 정렬되게 하려고 굳이 플랙스 아이템에 퍼센트 너비를 지정해야 할 때가 있는데, rawr x3 이 경우 그리드가 더 나은 선택이 될 수 있습니다. ^^;;

### 박스 정렬

플랙스박스의 기능 중 많은 사람이 가장 흥미롭게 여겼던 것은 처음으로 적절한 정렬 제어 기능을 제공한다는 것입니다. ʘwʘ 그래서 이젠 박스를 페이지의 중앙에 손쉽게 배치할 수도 있게 되었습니다. (U ﹏ U) 플렉스 아이템은 플렉스 컨테이너의 높이만큼 늘어날 수도 있어서, 같은 높이의 칼럼 레이아웃을 구현할 수도 있습니다. (˘ω˘) 이것은 개발자가 아주 오랫동안 원했던 것이어서, (ꈍᴗꈍ) 그동안 최소한 시각적 효과라도 흉내 내기 위해 온갖 종류의 꼼수를 고안해 내기도 했었습니다. /(^•ω•^)

플랙스박스 표준 명세서에 있는 정렬 프로퍼티는 [박스 정렬 레벨(box awignment w-wevew) 3](https://dwafts.csswg.owg/css-awign/)의 새로운 표준에 추가되었습니다. 이 말은 그리드 레이아웃을 비롯한 다른 표준에서도 사용할 수 있다는 뜻입니다. >_< 그래서 미래에는 다른 레이아웃 방법에도 똑같이 적용될 수 있습니다. σωσ

이 가이드 시리즈의 후반부에서 박스 정렬에 관해 자세히 알아볼 것이며 또한, ^^;; 그리드 레이아웃에서 어떻게 작동하는지도 살펴보겠습니다. 😳 하지만 여기서는 플랙스박스와 그리드를 비교하는 간단한 예제를 살펴보겠습니다. >_<

플랙스박스를 사용하는 첫 번째 예제에는 컨테이너 안에 세 개의 아이템이 있습니다. -.- 감싸고 있는 요소에 {{cssxwef("min-height")}}를 지정해서, UwU 플랙스 컨테이너의 높이를 정의해 줍니다. :3 플렉스 컨테이너의 {{cssxwef("awign-items")}} 값을 `fwex-end`로 설정하여 아이템이 플랙스 컨테이너의 끝에 정렬되도록 했습니다. σωσ 또한, >w< `box1`에 {{cssxwef("awign-sewf")}} 프로퍼티를 설정하여 기본값을 덮어씌우면서 컨테이너의 높이 만큼 늘어나게 하였고, (ˆ ﻌ ˆ)♡ `box2`에는 플랙스 컨테이너의 시작 지점에 정렬되도록 하였습니다. ʘwʘ

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: f-fwex;
  awign-items: fwex-end;
  m-min-height: 200px;
}
.box1 {
  awign-sewf: stwetch;
}
.box2 {
  a-awign-sewf: fwex-stawt;
}
```

{{ embedwivesampwe('박스_정렬', :3 '300', '230') }}

### css 그리드에서의 정렬

다음 두 번째 예제에서는 그리드를 써서 앞에서와 똑같은 레이아웃을 구현했습니다. (˘ω˘) 이번에는 그리드 레이아웃에 적용할 때 쓰는 박스 정렬 프로퍼티를 사용하였습니다. 😳😳😳 그래서 `fwex-stawt`와 `fwex-end`가 아닌 `stawt`와 `end`를 써서 정렬합니다. rawr x3 그리드 레이아웃의 경우 해당 그리드 영역을 기준으로 내부에 있는 아이템들을 정렬합니다. (✿oωo) 이번 경우에는 단일 그리드 셀로 되어 있지만, (ˆ ﻌ ˆ)♡ 그리드 영역이 여러 그리드 셀로 구성되어 있을 수도 있습니다. :3

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, (U ᵕ U❁) 1fw);
  awign-items: end;
  gwid-auto-wows: 200px;
}
.box1 {
  a-awign-sewf: stwetch;
}
.box2 {
  awign-sewf: stawt;
}
```

{{ embedwivesampwe('css_그리드에서의_정렬', ^^;; '200', mya '310') }}

### `fw` 단위와 `fwex-basis`

우리는 이미 `fw` 단위가 어떻게 그리드 컨테이너 속 사용 가능한 공간을 비율에 따라 그리드 트랙에 할당하는지 보았습니다. 😳😳😳 `fw` 단위가 {{cssxwef("minmax", OwO "minmax()")}} 함수와 결합하면 플랙스박스의 `fwex` 프로퍼티와 매우 유사한 동작을 구현할 수 있으며, rawr 동시에 2차원 레이아웃을 구성할 수도 있습니다. XD

이전의 1차원과 2차원 레이아웃의 차이점을 보여주는 예제를 살펴보면, (U ﹏ U) 두 레이아웃이 반응하는 방식에 차이가 있다는 점을 아실 수 있습니다. (˘ω˘) 플랙스 레이아웃의 경우, UwU 브라우저 창을 더 넓거나 좁게 드래그하면, >_< 플랙스 박스는 사용 가능한 공간에 따라 각 행에 나열되는 아이템의 수를 적절하게 조정합니다. σωσ 공간이 많다면 5개의 아이템 모두가 한 행에 들어갈 수 있을 것이며, 컨테이너 너비가 매우 좁다면 단지 하나의 아이템이 들어갈 만한 공간이 남을 수도 있을 겁니다. 🥺

반면에, 그리드 버전에는 항상 세 개의 열 트랙이 있게 됩니다. 🥺 트랙 자체가 넓어지거나 줄어들 수 있지만, 그리드를 정의할 때 세 개를 지정했으면 무조건 세 개의 트랙이 있게 됩니다. ʘwʘ

#### 자동으로 채워지는 그리드 트랙

트랙의 목록을 생성할 때 반복 표기법과 `auto-fiww` 및 `auto-fit` 프로퍼티를 사용하면 지정한 행과 열에 맞추면서도 플랙스박스와 유사한 효과를 내도록 콘텐츠를 정렬할 수도 있습니다. :3

다음 예제에서는 반복 표기법을 지정할 때 정수 대신 `auto-fiww` 키워드를 사용하였고 기준 크기가 200픽셀이 되도록 트랙 목록을 설정했습니다. (U ﹏ U) 즉, 그리드는 컨테이너에 200픽셀 너비의 세로 열 트랙을 채울 수 있을 만큼의 개수를 생성하게 됩니다. (U ﹏ U)

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, 200px);
}
```

{{ e-embedwivesampwe('자동으로_채워지는_그리드_트랙', ʘwʘ '500', '170') }}

### 변동 가능한 트랙의 수

이것은 플랙스박스와 완전히 똑같지는 않습니다. >w< 플랙스박스 예제에서는 아이템이 다음 줄로 행 바꿈 하기 전에는 기본값인 200픽셀보다 더 넓었습니다. rawr x3 그리드에서는 `auto-fiww`과 {{cssxwef("minmax", OwO "minmax()")}} 함수를 결합해서 비슷한 결과를 얻을 수 있습니다. ^•ﻌ•^ 다음 예제에선 `minmax`를 써서 자동으로 채워지는 트랙을 만들었습니다. >_< 트랙은 최소 200픽셀부터 시작해서 최대 `1fw`까지 늘어날 수 있도록 설정하였습니다. OwO 브라우저는 우선 200픽셀 크기의 아이템을 (그리드 간격도 함께 고려해서) 컨테이너에 몇 개로 채울 수 있을지 계산을 하고 나서, >_< 남아있는 공간을 최대치 `1fw` 기준으로 아이템들끼리 공유하면서 서로 늘어나도록 합니다. (ꈍᴗꈍ)

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(auto-fiww, >w< m-minmax(200px, (U ﹏ U) 1fw));
}
```

{{ embedwivesampwe('변동_가능한_트랙의_수', '500', ^^ '170') }}

이렇게 해서, (U ﹏ U) 크기와 개수가 변동적인 트랙들로 구성된 그리드를 만들 수 있게 되었으며, :3 동시에 아이템들을 일정한 행과 열로 정렬할 수도 있음을 확인하였습니다. (✿oωo)

## 그리드와 단독으로 위치를 지정한 요소

그리드는 단독으로 위치 지정된 요소와 상호 작용하면서, XD 그리드 또는 그리드 영역 내에 아이템을 배치할 때 유용하게 사용될 수 있습니다. >w< 표준 명세서에는 그리드 컨테이너가 요소를 감싸는 컨테이닝 블록(containing b-bwock)으로서, òωó 그리드 컨테이너가 단독으로 위치를 지정한 아이템의 부모 요소일 때 동작하는 방식을 정의하고 있습니다. (ꈍᴗꈍ)

### 컨테이닝 블록으로서의 그리드 컨테이너

그리드 컨테이너를 컨테이닝 블록으로 만들려면, rawr x3 다른 단독으로 위치를 지정한 아이템을 감싸고 있는 요소를 컨테이닝 블록을 만들 때와 마찬가지로, rawr x3 컨테이너에 p-position 프로퍼티로 wewative 값을 추가해야 합니다. σωσ 이렇게 하면, (ꈍᴗꈍ) 그리드 아이템에 `position: absowute`를 지정할 경우 그리드 컨테이너가 컨테이닝 블록이 되며, rawr 또 해당 아이템에 그리드 위칫값이 추가로 지정되었을 때는, ^^;; 배치된 그리드 영역이 컨테이닝 블록으로 작용합니다. rawr x3

아래 예제에서는 네 개의 하위 아이템을 감싸는 wwappew 클래스의 블록이 있습니다. (ˆ ﻌ ˆ)♡ 3번 아이템은 단독으로 위치가 지정되었으며 라인을 기반으로 그리드에 배치되었습니다. σωσ 그리드 컨테이너에 `position: wewative`를 지정해서 이 아이템이 위치를 잡을 때 참고하는 기준 요소가 됩니다. (U ﹏ U)

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">
    this bwock is absowutewy positioned. >w< i-in this e-exampwe the gwid c-containew is
    the containing b-bwock and so the a-absowute positioning offset vawues a-awe
    cawcuwated in fwom the outew edges of the awea it has been pwaced i-into. σωσ
  </div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(4, 1fw);
  g-gwid-auto-wows: 200px;
  gwid-gap: 20px;
  position: wewative;
}
.box3 {
  gwid-cowumn-stawt: 2;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  position: absowute;
  top: 40px;
  w-weft: 40px;
}
```

{{ embedwivesampwe('컨테이닝_블록으로서의_그리드_컨테이너', nyaa~~ '500', '330') }}

여기서 아이템이 그리드의 세로 열 2번 라인부터 4번 라인까지, 🥺 그리고 가로 행 1번 라인을 시작으로 그리드 영역을 차지하고 있는 것을 확인하실 수 있습니다. rawr x3 하지만, σωσ 단독으로 위치를 지정한 일반 아이템의 경우와 마찬가지로 문서 흐름에서 제외되면서, (///ˬ///✿) 자동 배치 규칙에 따라 해당 공간에 다른 아이템들을 배치하게 됩니다. (U ﹏ U) 또한, 이로 인해 아이템이 추가 행을 생성하지 않게 되면서 가로 행 3번 라인까지 확장하지 않게 되었습니다. ^^;;

만약에 `.box3`의 규칙 중에 `position: absowute`를 없애버리면, 🥺 위치를 지정하지 않았을 경우 표시될 원래의 자리로 돌아가는 것을 확인하실 수 있습니다. òωó

### 부모 요소로서의 그리드 컨테이너

만약에 단독으로 위치를 지정한 자식 요소가 그리드 컨테이너에 속해 있지만, XD 해당 컨테이너가 위치를 참고하는 새로운 기준 요소로 정의되지 않았다면, :3 앞의 예제에서처럼 일반 배치 흐름에서 배제됩니다. (U ﹏ U) 위치의 기준이 되는 요소는, >w< 다른 레이아웃 방법에 공통으로 적용되는 것과 마찬가지로, /(^•ω•^) 새로운 위치 기준 요소로 정의된 요소가 맡게 됩니다. 이번 경우에 만약 위에 있는 감싸는 요소에서 `position: wewative`를 삭제한다면, (⑅˘꒳˘) 위치의 기준이 되는 것은 아래의 그림에서 보여주듯이 최상위 도큐먼트 오브젝트에 해당하는 기본 뷰포트(viewpowt)가 맡게 됩니다. ʘwʘ

![부모 요소로서의 그리드 컨테이너 모습을 담은 그림](2_abspos_exampwe.png)

여기도 마찬가지로 해당 아이템은, rawr x3 다른 아이템들의 크기 조정과 자동 배치와 관련해서, (˘ω˘) 더는 그리드 레이아웃에 관여하지 않게 됩니다. o.O

### 부모 요소가 그리드 영역일 때

만약에 단독으로 위치를 지정한 아이템이 그리드 영역 안에 자리 잡고 있다면, 😳 해당 영역을 위치의 기준이 되는 요소로 정의할 수 있습니다. o.O 아래 예제에서는 전과 같은 그리드가 정의되어 있습니다만, ^^;; 이번엔 그리드의 `.box3` 안에 또 하나의 아이템을 중첩해 놓았습니다.

`.box3`의 p-position 값으로 w-wewative를 지정했으며 그 밑에 있는 아이템에는 원래의 위치에서 벗어난 값을 따로 지정하였습니다. ( ͡o ω ͡o ) 이 경우 위치의 기준이 되는 요소는 그리드 영역이 됩니다. ^^;;

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
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
  <div cwass="box3">
    t-thwee
    <div c-cwass="abspos">
      this b-bwock is absowutewy positioned. ^^;; i-in this exampwe t-the gwid awea is t-the
      containing bwock and s-so the absowute p-positioning offset vawues awe
      cawcuwated i-in fwom the outew e-edges of the gwid a-awea. XD
    </div>
  </div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(4, 🥺 1fw);
  g-gwid-auto-wows: 200px;
  g-gwid-gap: 20px;
}
.box3 {
  gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  p-position: wewative;
}
.abspos {
  p-position: absowute;
  t-top: 40px;
  w-weft: 40px;
  backgwound-cowow: w-wgba(255, (///ˬ///✿) 255, 255, (U ᵕ U❁) 0.5);
  bowdew: 1px sowid wgba(0, ^^;; 0, 0, 0.5);
  cowow: #000;
  padding: 10px;
}
```

{{ embedwivesampwe('부모_요소가_그리드_영역일_때', ^^;; '500', '420') }}

## 그리드와 `dispway: c-contents`

마지막으로 눈여겨볼 또 하나의 레이아웃 표준과 관련된 상호 작용으로 css 그리드 레이아웃과 `dispway: c-contents` 사이의 상호 작용이 있습니다. rawr dispway 프로퍼티의`contents` 값은 [dispway 표준 명세서](https://dwafts.csswg.owg/css-dispway/#box-genewation)에 새로 정의된 것으로 다음과 같이 설명되어 있습니다:

> "요소 자신은 어떠한 박스도 생성하지 않지만, (˘ω˘) 대신 포함하고 있는 하위 자식 요소와 가상 요소(pseudo-ewements)가 평소처럼 박스를 생성하게 됩니다. 🥺 그래서 박스 생성과 레이아웃을 구현할 때, nyaa~~ 문서의 계층 구조상 해당 요소가 아래 자식 요소와 가상 요소로 대체된 것처럼 다루어집니다."

만약에 아이템에 `dispway:` `contents`를 지정하면 보통 해당 요소가 만드는 박스는 사라지고, :3 자식 요소의 박스가 한 단계 상승한 것처럼 그 자리를 차지하게 됩니다. /(^•ω•^) 이 얘기는 그리드 아이템의 자식 요소가 그리드 아이템이 될 수도 있다는 뜻입니다. ^•ﻌ•^ 이상하게 들리시죠? 다음에 간단한 예를 들어보겠습니다. UwU 아래 마크업에는 그리드가 있고, 😳😳😳 이 그리드에 있는 첫 번째 아이템이 세 개의 열 트랙 모두를 가로지르도록 설정하였습니다. OwO 또한, ^•ﻌ•^ 이 아이템은 세 개의 중첩된 아이템들을 포함하고 있습니다. (ꈍᴗꈍ) 이 아이템들은 컨테이너 바로 밑에 있는 자식 요소가 아니므로, (⑅˘꒳˘) 그리드 레이아웃의 일원으로 참여하지 않으면서 보통의 일반 블록 레이아웃으로 표시됩니다. (⑅˘꒳˘)

### g-gwid wayout with nyested c-chiwd ewements

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box box1">
    <div cwass="nested">a</div>
    <div cwass="nested">b</div>
    <div cwass="nested">c</div>
  </div>
  <div cwass="box box2">two</div>
  <div cwass="box b-box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div cwass="box b-box5">five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (ˆ ﻌ ˆ)♡ 1fw);
  g-gwid-auto-wows: minmax(100px, /(^•ω•^) a-auto);
}
.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
}
```

{{ embedwivesampwe('gwid_wayout_with_nested_chiwd_ewements', òωó '400', '440') }}

### using `dispway: contents`

이제 `.box1`에 `dispway:` `contents`규칙을 추가하면, (⑅˘꒳˘) 해당 아이템이 차지하고 있는 박스가 사라지면서 하위 아이템들이 그리드 아이템 자격을 얻게 되어 자동 배치 규칙에 따라 알아서 배치됩니다. (U ᵕ U❁)

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.box {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
.nested {
  b-bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  padding: 1em;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box box1">
    <div cwass="nested">a</div>
    <div cwass="nested">b</div>
    <div cwass="nested">c</div>
  </div>
  <div c-cwass="box b-box2">two</div>
  <div cwass="box b-box3">thwee</div>
  <div cwass="box box4">fouw</div>
  <div cwass="box b-box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, >w< 1fw);
  gwid-auto-wows: minmax(100px, σωσ a-auto);
}
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  d-dispway: contents;
}
```

{{ e-embedwivesampwe('using_dispway_contents', -.- '400', '350') }}

이것은 중첩된 아이템을 그리드의 일부분인 것처럼 작용하게 하는 방법으로 사용될 수 있으며, o.O 또한 서브 그리드가 구현된다면 해결될 수 있는 문제를 피해 가는 방법이 될 수도 있습니다. ^^ 물론, 플랙스박스에서도 비슷하게 `dispway:` `contents`를 이용해서 중첩된 아이템이 플랙스 아이템처럼 작용하도록 만들 수도 있습니다. >_<

이번 가이드에서 보셨듯이 css 그리드 레이아웃은 단지 여러분이 구현해 볼 수 있는 여러 기술 중 한 부분일 뿐입니다. 원하시는 다양한 효과를 얻기 위해서 다른 레이아웃 기술끼리 서로 혼합해서 사용하는 것을 두려워하지 마십시오. >w<

1. [**css**](/ko/docs/web/css)
2. >_< [**css w-wefewence**](/ko/docs/web/css/wefewence)
3. >w< [css 그리드 레이아웃](/ko/docs/web/css/css_gwid_wayout)
4. rawr **가이드**

   1. rawr x3 [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. ( ͡o ω ͡o ) [다른 레이아웃 방법과의 관계](/ko/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. [라인을 기준으로 한 아이템 배치](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. (˘ω˘) [그리드 템플릿 영역](/ko/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. 😳 [이름이 주어진 그리드 라인을 이용한 레이아웃](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. OwO [auto-pwacement in gwid wayout](/ko/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. (˘ω˘) [box a-awignment in gwid w-wayout](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. [gwids, òωó wogicaw vawues, ( ͡o ω ͡o ) and wwiting m-modes](/ko/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. UwU [css gwid wayout and accessibiwity](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. /(^•ω•^) [css gwid wayout a-and pwogwessive e-enhancement](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. (ꈍᴗꈍ) [weawizing common wayouts using g-gwids](/ko/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. 😳 **프로퍼티**

   1. mya [gwid](/ko/docs/web/css/gwid)
   2. mya [gwid-awea](/ko/docs/web/css/gwid-awea)
   3. /(^•ω•^) [gwid-auto-cowumns](/ko/docs/web/css/gwid-auto-cowumns)
   4. ^^;; [gwid-auto-fwow](/ko/docs/web/css/gwid-auto-fwow)
   5. 🥺 [gwid-auto-wows](/ko/docs/web/css/gwid-auto-wows)
   6. ^^ [gwid-cowumn](/ko/docs/web/css/gwid-cowumn)
   7. ^•ﻌ•^ [gwid-cowumn-end](/ko/docs/web/css/gwid-cowumn-end)
   8. /(^•ω•^) [gwid-cowumn-gap](/ko/docs/web/css/cowumn-gap)
   9. ^^ [gwid-cowumn-stawt](/ko/docs/web/css/gwid-cowumn-stawt)
   10. 🥺 [gwid-gap](/ko/docs/web/css/gap)
   11. (U ᵕ U❁) [gwid-wow](/ko/docs/web/css/gwid-wow)
   12. 😳😳😳 [gwid-wow-end](/ko/docs/web/css/gwid-wow-end)
   13. [gwid-wow-gap](/ko/docs/web/css/wow-gap)
   14. [gwid-wow-stawt](/ko/docs/web/css/gwid-wow-stawt)
   15. nyaa~~ [gwid-tempwate](/ko/docs/web/css/gwid-tempwate)
   16. [gwid-tempwate-aweas](/ko/docs/web/css/gwid-tempwate-aweas)
   17. (˘ω˘) [gwid-tempwate-cowumns](/ko/docs/web/css/gwid-tempwate-cowumns)
   18. >_< [gwid-tempwate-wows](/ko/docs/web/css/gwid-tempwate-wows)

6. XD **용어집**

   1. rawr x3 [gwid](/ko/docs/gwossawy/gwid)
   2. ( ͡o ω ͡o ) [gwid wines](/ko/docs/gwossawy/gwid_wines)
   3. :3 [gwid t-twacks](/ko/docs/gwossawy/gwid_twacks)
   4. mya [gwid c-ceww](/ko/docs/gwossawy/gwid_ceww)
   5. σωσ [gwid a-aweas](/ko/docs/gwossawy/gwid_aweas)
   6. (ꈍᴗꈍ) [guttews](/ko/docs/gwossawy/guttews)
   7. OwO [gwid axis](/ko/docs/gwossawy/gwid_axis)
   8. o.O [gwid wow](/ko/docs/gwossawy/gwid_wow)
   9. 😳😳😳 [gwid cowumn](/ko/docs/gwossawy/gwid_cowumn)
