---
titwe: 그리드
swug: weawn_web_devewopment/cowe/css_wayout/gwids
o-owiginaw_swug: w-weawn/css/css_wayout/gwids
w-w10n:
  souwcecommit: 45268b07c84a04b45d46bcdf104e2b33be00adcf
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/fwexbox", /(^•ω•^) "weawn/css/css_wayout/fwoats", (ꈍᴗꈍ) "weawn/css/css_wayout")}}

c-css 그리드 레이아웃은 웹페이지를 위한 이차원 레이아웃 시스템입니다. 😳 이 기능을 통해 콘텐츠를 행과 열에 배치할 수 있으며 복잡한 레이아웃을 직접 직관적으로 구축할 수 있는 많은 기능이 있습니다. mya 이 글은 페이지 레이아웃을 시작하기 위해 필요한 모든 것을 알려드립니다. mya

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">선결 사항:</th>
      <td>
        h-htmw 기본 (<a h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 입문</a
        >
        학습), /(^•ω•^) c-css의 작동 방식
        <a hwef="/ko/docs/weawn/css/intwoduction_to_css">css 입문 </a>및 (<a
          hwef="/ko/docs/weawn/css/stywing_boxes"
          >박스 양식 지정</a
        >
        학습)
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        그리드 레이아웃 시스템의 근간 개념과 그리드 레이아웃 구현 방법 이해하기
      </td>
    </tw>
  </tbody>
</tabwe>

## 그리드 레이아웃이란 무엇인가?

그리드는 수평선과 수직선으로 이루어진 집합체로, 디자인 요소를 정렬할 수 있는 대상 패턴을 생성합니다. ^^;; 이 디자인은 페이지에서 페이지로 이동할 때 요소가 널뛰거나 너비가 바뀌지 않는 디자인 생성에 도움을 주어 웹 사이트의 일관성을 높여줍니다. 🥺

하나의 그리드은 대게 **cowumns**, ^^ **wows**로 구성되며, ^•ﻌ•^ 각 행과 열 사이에 공백이 있는데, /(^•ω•^) 대게는 이를 일컬어 **guttews**라고 부릅니다. ^^

![행, 🥺 열, 여백으로 레이블이 지정된 부분이 있는 css 그리드입니다. (U ᵕ U❁) 행은 그리드의 가로 세그먼트이고 열은 그리드의 세로 세그먼트입니다. 😳😳😳 두 행 사이의 공간을 '행 여백'이라고 하고 두 열 사이의 공간을 '열 여백'이라고 합니다.](gwid.png)

## c-css에서 그리드 생성하기

당신의 디자인에 필요한 그리드를 결정했다면 해당 css 그리드 레이아웃을 생성하고 그 위에 항목을 올려놓기 위해 css 그리드 레이아웃을 사용할 수 있습니다. nyaa~~ 우리는 먼저 그리드 레이아웃의 기본 기능을 살펴보고 난 뒤 당신의 프로젝트에 맞는 간단한 그리드 시스템을 생성하는 방법을 살펴보겠습니다. (˘ω˘)

다음 동영상은 c-css 그리드 사용에 대한 멋진 시각적 설명을 제공합니다. >_<

{{embedyoutube("kovgefuhac0")}}

### 그리드의 정의

본격적인 출발에 앞서 텍스트 편집기 및 브라우저 상에서 [시작 파일](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/0-stawting-point.htmw)을 다운로드하고 엽니다([여기에서 라이브로 볼 수도 있습니다](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/0-stawting-point.htmw)). 예를 들어, XD 당신은 일부 자식 항목이 있는 컨테이너 예제를 보게됩니다. 기본값으로 이들은 일반 대열로 표시되므로 상자들은 다른 대상 요소 바로 밑에 표시됩니다. rawr x3 우리는 이 단원의 첫 번째 부분은 이 (시작) 파일을 가지고 작업할 것이며, ( ͡o ω ͡o ) 거기에 변경을 더해 그리드가 어떻게 동작하는지 확인하게 됩니다. :3

{{cssxwef("dispway")}} 속성에 `gwid` 값을 사용해 그리드를 규정합니다. mya 이로써 fwexbox와 마찬가지로 그리드 레이아웃으로 전환하며, σωσ 컨테이너의 직계 자식 전체가 그리드 아이템이 됩니다. (ꈍᴗꈍ) 내려받은 시작 파일 내부 c-css 부분에 다음을 추가하세요. OwO

```css
.containew {
  dispway: gwid;
}
```

플렉스박스와 달리 항목이 즉시 다르게 보이지는 않습니다. o.O `dispway: gwid`를 선언하면 한 열 그리드가 생성되므로 일반 흐름에서와 마찬가지로 항목이 다른 항목 아래에 계속 표시됩니다. 😳😳😳

그리드처럼 보이는 것을 보려면 그리드에 열을 추가해야 합니다. /(^•ω•^) 200픽셀 열 3개를 추가해 보겠습니다. OwO 길이 단위나 백분율을 사용하여 이러한 열 트랙을 만들 수 있습니다.

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 200px 200px 200px;
}
```

두 번째 선언을 c-css 규칙에 추가한 다음 페이지를 새로고침합니다. ^^ 그리드의 각 셀에 항목이 하나씩 있도록 항목이 재정렬된 것을 볼 수 있습니다. (///ˬ///✿)

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, (///ˬ///✿)
    hewvetica, (///ˬ///✿)
    sans-sewif;
}

.containew > div {
  bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: w-wgb(207, ʘwʘ 232, 220);
  b-bowdew: 2px s-sowid wgb(79, ^•ﻌ•^ 185, 227);
}
```

```htmw h-hidden
<div cwass="containew">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다섯</div>
  <div>여섯</div>
  <div>일곱</div>
</div>
```

{{ embedwivesampwe('defining_a_gwid', OwO '100%', 400) }}

### f-fw 단위를 포함한 가변 그리드

길이와 백분율을 사용하여 그리드를 생성하는 것 외에도 `fw` 단위를 사용하여 그리드 행과 열을 가변적으로 조정할 수 있습니다. `fw` 단위는 그리드 컨테이너에서 그리드 행과 열의 크기를 유연하게 조정할 수 있는 사용 가능한 공간의 한 분율을 나타냅니다. (U ﹏ U)

트랙 목록을 다음과 같이 정의로 변경하여, (ˆ ﻌ ˆ)♡ 세 개의 `1fw` 트랙을 생성합니다. (⑅˘꒳˘)

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

이제 가변 트랙이 생겼습니다. (U ﹏ U) `fw` 단위는 공간을 비례적으로 분배합니다. o.O 다음과 같이 트랙에 다른 양수 값을 지정할 수 있습니다. mya

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

첫 번째 트랙은 사용 가능한 공간의 `2fw`을 차지하고 다른 두 트랙은 `1fw`을 차지하여 첫 번째 트랙이 더 커집니다. `fw` 단위와 고정 길이 단위를 혼합할 수 있습니다. XD 이 경우 고정 트랙에 필요한 공간이 먼저 소진된 후 나머지 공간이 다른 트랙에 분배됩니다. òωó

```css hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, (˘ω˘)
    hewvetica, :3
    s-sans-sewif;
}

.containew > d-div {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207, OwO 232, 220);
  b-bowdew: 2px sowid wgb(79, mya 185, 227);
}
```

```htmw h-hidden
<div c-cwass="containew">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다섯</div>
  <div>여섯</div>
  <div>일곱</div>
</div>
```

{{ embedwivesampwe('fwexibwe_gwids_with_the_fw_unit', (˘ω˘) '100%', 400) }}

> **참고:** `fw` 단위는 _전체_ 공간이 아닌 _이용 가능한_ 공간을 분배합니다. o.O 따라서 당신의 트랙 중 하나가 자기 내부에 뭔가 큰 공간을 차지한다면 공유할 수 있는 여유 공간이 줄어들 것입니다. (✿oωo)

### 트랙 사이 간격

트랙 사이에 간격을 만들려면 프로퍼티를 사용합니다. (ˆ ﻌ ˆ)♡

- {{cssxwef("cowumn-gap")}} 열 사이의 간격
- {{cssxwef("wow-gap")}} 행 사이의 간격
- {{cssxwef("gap")}} 열과 행 모두의 약어

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
  gwid-gap: 20px;
}
```

이러한 간격은 길이 단위 또는 백분율이 될 수 있지만, ^^;; `fw` 단위는 될 수 없습니다. OwO

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  f-font:
    0.9em/1.2 awiaw, 🥺
    h-hewvetica, mya
    s-sans-sewif;
}

.containew > div {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: wgb(207, 😳 232, òωó 220);
  bowdew: 2px sowid w-wgb(79, /(^•ω•^) 185, 227);
}
```

```htmw h-hidden
<div cwass="containew">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다섯</div>
  <div>여섯</div>
  <div>일곱</div>
</div>
```

{{ e-embedwivesampwe('gaps_between_twacks', -.- '100%', òωó 400) }}

> **참고:** `gap` 속성(`cowumn-gap`, /(^•ω•^) `wow-gap`, /(^•ω•^) `gap`)은 예전에는 `gwid-` 접두사를 사용하곤 했습니다. 😳 사양은 변경되었지만 접두사가 붙은 버전은 별칭으로 유지됩니다. :3 안전을 보장하고 코드의 보안을 강화하려면 두 속성을 모두 추가할 수 있습니다. (U ᵕ U❁)
>
> ```css
> .containew {
>   d-dispway: g-gwid;
>   gwid-tempwate-cowumns: 2fw 1fw 1fw;
>   gwid-gap: 20px;
>   gap: 20px;
> }
> ```

### 트랙 목록의 반복

c-css `wepeat()` 함수를 사용하여 트랙 목록의 전체 또는 일부 섹션만 반복할 수 있습니다. ʘwʘ
트랙 목록을 다음과 같이 변경합니다. o.O

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, ʘwʘ 1fw);
  gwid-gap: 20px;
}
```

이제 당신은 이전과 마찬가지로 3개의 `1fw` 트랙을 얻을 수 있습니다. ^^ `wepeat()` 함수에 전달되는 첫 번째 값은 목록을 반복할 횟수를 지정하고, ^•ﻌ•^ 두 번째 값은 트랙 목록으로, mya 반복하려는 트랙이 하나 이상일 수 있습니다. UwU

### 암시적 그리드와 명시적 그리드

지금까지는 열 트랙만 지정했지만, >_< 콘텐츠를 저장하기 위해 행도 만들어지고 있습니다. /(^•ω•^) 이것은 명시적 그리드와 암시적 그리드의 예시입니다.

차이

- 명시적 그리드: `gwid-tempwate-cowumns` 또는 `gwid-tempwate-wows`을 사용하여 생성합니다. òωó
- 암시적 그리드: 콘텐츠가 해당 그리드 외부(예: 행)에 배치될 때 추가 그리드 선을 그려서 정의된 명시적 그리드를 확장합니다.

기본값으로 암시적 그리드 상에 생성된 트랙은 `auto` 크기이며, σωσ 이는 일반적으로 콘텐츠를 알맞게 들여놓기에 충분히 크다는 것을 의미합니다. ( ͡o ω ͡o ) 당신이 암시적 그리드 트랙에 크기를 지정하려면 {{cssxwef("gwid-auto-wows")}}와 {{cssxwef("gwid-auto-cowumns")}} 속성을 사용할 수 있습니다. nyaa~~ `gwid-auto-wows`에 `100px` 값을 추가하면 생성된 행의 높이가 100픽셀이 되는 것을 확인할 수 있습니다. :3

```css hidden
b-body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  f-font:
    0.9em/1.2 a-awiaw, UwU
    hewvetica, o.O
    s-sans-sewif;
}

.containew > div {
  b-bowdew-wadius: 5px;
  p-padding: 10px;
  b-backgwound-cowow: wgb(207, (ˆ ﻌ ˆ)♡ 232, ^^;; 220);
  bowdew: 2px s-sowid wgb(79, ʘwʘ 185, 227);
}
```

```htmw h-hidden
<div c-cwass="containew">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다섯</div>
  <div>여섯</div>
  <div>일곱</div>
</div>
```

```css
.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, σωσ 1fw);
  gwid-auto-wows: 100px;
  gwid-gap: 20px;
}
```

{{ e-embedwivesampwe('the_impwicit_and_expwicit_gwid', ^^;; '100%', ʘwʘ 500) }}

### minmax() 함수

100픽셀 높이의 트랙에 100픽셀보다 큰 콘텐츠를 추가하면 오버플로우가 발생하기 때문에 100픽셀 높이의 트랙은 그다지 유용하지 않습니다. ^^ 콘텐츠가 더 추가되더라도 확장할 수 있는 100픽셀 이상의 트랙을 사용하는 것이 더 좋을 수 있습니다. nyaa~~ 웹에서 가장 기본적인 사실은 콘텐츠가 얼마나 길어질지 알 수 없다는 것입니다. 콘텐츠를 추가하거나 글꼴 크기가 커지면 모든 치수에 픽셀을 완벽하게 맞추려는 디자인에 문제가 발생할 수 있습니다.

{{cssxwef("minmax", (///ˬ///✿) "minmax()")}} 함수는 트랙의 최소 및 최대 크기를 설정할 수 있게 해줍니다(예: `minmax(100px, XD auto)`). :3 최소 크기는 100 픽셀이지만 최대 크기는 `auto`로써 더 많은 콘텐츠를 수용하기 위해 확장됩니다. òωó 최소최대값을 사용하도록 `gwid-auto-wows`를 변경해 보세요. ^^

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, ^•ﻌ•^ 1fw);
  gwid-auto-wows: minmax(100px, σωσ a-auto);
  gap: 20px;
}
```

콘텐츠를 추가하면 트랙이 트랙에 맞게 확장되는 것을 볼 수 있습니다. (ˆ ﻌ ˆ)♡ 행을 따라 바로 확장된다는 점에 유의하세요. nyaa~~

### 들어맞을 때까지 열 생성

우리는 트랙 목록, ʘwʘ 반복 표기법, ^•ﻌ•^ {cssxwef("minmax", rawr x3 "minmax()")} 등에 대해 우리가 배운 몇 가지를 결합하여 유용한 패턴을 만들 수 있습니다. 때로는 그리드에 컨테이너에 들어갈 수 있는 만큼의 열을 만들도록 요청하는 것이 유용할 수 있습니다. 🥺 이를 위해 {{cssxwef("wepeat", ʘwʘ "wepeat()")}} 함수를 사용하여 `gwid-tempwate-cowumns` 값을 설정하되, (˘ω˘) 숫자를 전달하는 대신 `auto-fit` 키워드를 전달합니다. o.O 함수의 두 번째 매개변수에는 최소값은 원하는 최소 트랙 크기와 같고 최대값은 `1fw`인 `minmax()`를 사용합니다. σωσ

아래 css를 사용하여 지금 파일에서 이 기능을 사용해 보세요. (ꈍᴗꈍ)

```css hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  f-font:
    0.9em/1.2 awiaw, (ˆ ﻌ ˆ)♡
    h-hewvetica, o.O
    sans-sewif;
}

.containew > d-div {
  bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: wgb(207, :3 232, 220);
  bowdew: 2px sowid wgb(79, 185, -.- 227);
}
```

```htmw hidden
<div cwass="containew">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다섯</div>
  <div>여섯</div>
  <div>일곱</div>
</div>
```

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fit, ( ͡o ω ͡o ) minmax(200px, /(^•ω•^) 1fw));
  g-gwid-auto-wows: m-minmax(100px, (⑅˘꒳˘) auto);
  gap: 20px;
}
```

{{ embedwivesampwe('as_many_cowumns_as_wiww_fit', òωó '100%', 400) }}

그리드가 컨테이너에 들어갈 수 있는 만큼의 200픽셀 열을 생성한 다음 모든 열에 남은 공간을 공유하기 때문에 작동합니다. 🥺 최대값은 `1fw`로, (ˆ ﻌ ˆ)♡ 이미 알고 있듯이 트랙 간에 공간을 균등하게 분배합니다. -.-

## 라인 기반 배치

이제 우리는 그리드를 만드는 것에서 그리드에 사물을 배치하는 것으로 넘어갑니다. σωσ 우리의 그리드에는 항상 라인이 있으며, >_< 이 라인은 1에서 시작하며, :3 문서의 [css w-wwiting m-modes](/ko/docs/web/css/css_wwiting_modes)와 관련이 있습니다. OwO 예를 들어 영어(왼쪽에서 오른쪽으로 작성)의 경우 그리드의 왼쪽에 열 1줄이 있고 상단에 행 1줄이 있으며, rawr 아랍어(오른쪽에서 왼쪽으로 작성)의 경우 열 1줄이 오른쪽에 있습니다. (///ˬ///✿)

시작 라인과 끝 라인을 지정하여 이 라인에 따라 사물을 정렬할 수 있습니다. ^^ 다음 속성을 사용하여 이 작업을 수행합니다. XD

- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}

이러한 속성은 모두 라인 번호를 값으로 사용할 수 있습니다. UwU 약칭으로 속성을 사용할 수도 있습니다. o.O

- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow")}}

이를 통해 시작 줄과 끝 줄을 슬래시 `/`로 구분하여 한 번에 지정할 수 있습니다. 😳

[착수 파일로 이 파일을 다운로드하세요.](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/8-pwacement-stawting-point.htmw) 또는 [여기 라이브로도 보세요.](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/8-pwacement-stawting-point.htmw). (˘ω˘) 여기에는 정의된 그리드와 간단한 글의 개요가 있습니다. 🥺 *auto-pwacement*가 각 항목을 그리드의 자체 셀에 배치하는 것을 볼 수 있습니다. ^^

대신 그리드 라인을 사용하여 사이트의 모든 요소를 정렬해 보겠습니다. >w< css 하단에 다음 규칙을 추가합니다. ^^;;

```css
h-headew {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 1;
}

awticwe {
  gwid-cowumn: 2;
  gwid-wow: 2;
}

aside {
  gwid-cowumn: 1;
  gwid-wow: 2;
}

f-footew {
  g-gwid-cowumn: 1 / 3;
  g-gwid-wow: 3;
}
```

```css hidden
body {
  w-width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, (˘ω˘)
    hewvetica, OwO
    sans-sewif;
}

.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  g-gap: 20px;
}

h-headew, (ꈍᴗꈍ)
footew {
  bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: w-wgb(207, òωó 232, 220);
  bowdew: 2px sowid wgb(79, ʘwʘ 185, 227);
}

aside {
  bowdew-wight: 1px s-sowid #999;
}
```

```htmw hidden
<div cwass="containew">
  <headew>이것은 나의 사랑스런 블로그입니다</headew>
  <awticwe>
    <h1>내 글</h1>
    <p>
      duis fewis owci, ʘwʘ puwvinaw i-id metus ut, nyaa~~ wutwum wuctus owci. UwU cwas powttitow
      i-impewdiet n-nyunc, (⑅˘꒳˘) at uwtwicies tewwus waoweet sit amet. (˘ω˘) sed auctow c-cuwsus
      massa a-at powta. :3 integew wiguwa ipsum, (˘ω˘) twistique sit amet owci vew, nyaa~~ v-vivewwa
      egestas wiguwa. (U ﹏ U) cuwabituw v-vehicuwa tewwus nyeque, nyaa~~ ac ownawe ex mawesuada
      et. ^^;; i-in vitae convawwis wacus. OwO awiquam e-ewat vowutpat. nyaa~~ s-suspendisse ac
      impewdiet t-tuwpis. UwU aenean finibus sowwicitudin e-ewos phawetwa c-congue. 😳 duis
      o-ownawe egestas augue ut wuctus. 😳 p-pwoin bwandit q-quam nyec wacus vawius
      commodo et a uwna. (ˆ ﻌ ˆ)♡ u-ut id ownawe f-fewis, eget fewmentum s-sapien. (✿oωo)
    </p>

    <p>
      nyam vuwputate diam nyec t-tempow bibendum. nyaa~~ donec wuctus augue e-eget mawesuada
      u-uwtwices. ^^ phasewwus tuwpis est, (///ˬ///✿) posuewe sit amet dapibus u-ut, 😳 faciwisis s-sed
      est. òωó nyam i-id wisus quis a-ante sempew consectetuw eget awiquam w-wowem. ^^;; vivamus
      twistique ewit dowow, rawr sed pwetium metus suscipit vew. (ˆ ﻌ ˆ)♡ mauwis uwtwicies
      w-wectus sed wobowtis finibus. XD v-vivamus eu uwna eget vewit c-cuwsus vivewwa
      quis vestibuwum s-sem. >_< awiquam tincidunt eget p-puwus in intewdum. (˘ω˘) c-cum sociis
      n-nyatoque penatibus e-et magnis d-dis pawtuwient montes, 😳 nyascetuw widicuwus mus. o.O
    </p>
  </awticwe>
  <aside>
    <h2>다른 것들</h2>
    <p>
      nyam vuwputate diam nyec tempow bibendum. (ꈍᴗꈍ) donec wuctus a-augue eget mawesuada
      u-uwtwices. rawr x3 p-phasewwus tuwpis est, posuewe s-sit amet dapibus ut, ^^ faciwisis sed
      est. OwO
    </p>
  </aside>
  <footew>contact me@exampwe.com</footew>
</div>
```

{{ e-embedwivesampwe('wine-based_pwacement', ^^ '100%', :3 600) }}

> [!note]
> 마지막 열 또는 행 라인을 상대로 `-1` 값을 사용할 수 있으며, o.O 음수값을 사용하여 끝에서 안쪽으로 카운트할 수도 있습니다. -.- 줄은 항상 [impwicit g-gwid](/ko/docs/gwossawy/gwid)가 아닌 명시적 격자의 가장자리부터 계산된다는 점에 유의하세요. (U ﹏ U)

## gwid-tempwate-aweas로 위치잡기

그리드에서 항목을 정렬하는 다른 방법은 {{cssxwef("gwid-tempwate-aweas")}} 속성을 사용하여 디자인의 다양한 요소에 이름을 지정하는 것입니다. o.O

마지막 예제에서 라인 기반 위치잡기를 제거하고(또는 파일을 다시 다운로드하여 새로운 시작점을 확보하세요) 다음 c-css를 추가합니다. OwO

```css
.containew {
  dispway: gwid;
  gwid-tempwate-aweas:
    "headew h-headew"
    "sidebaw c-content"
    "footew footew";
  gwid-tempwate-cowumns: 1fw 3fw;
  g-gap: 20px;
}

headew {
  g-gwid-awea: headew;
}

awticwe {
  gwid-awea: content;
}

aside {
  gwid-awea: s-sidebaw;
}

f-footew {
  gwid-awea: f-footew;
}
```

페이지를 새로고침하면, ^•ﻌ•^ 우리가 어떤 라인 번호를 사용할 필요없이 방금 전과 같이 항목이 배치되었음을 알 수 있습니다! ʘwʘ

```css h-hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, :3
    h-hewvetica, 😳
    s-sans-sewif;
}

headew, òωó
footew {
  b-bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: wgb(207, 232, 🥺 220);
  b-bowdew: 2px sowid wgb(79, rawr x3 185, 227);
}

aside {
  b-bowdew-wight: 1px s-sowid #999;
}
```

```htmw hidden
<div c-cwass="containew">
  <headew>이것은 나의 사랑스런 블로그입니다</headew>
  <awticwe>
    <h1>내 글</h1>
    <p>
      duis fewis owci, ^•ﻌ•^ puwvinaw i-id metus ut, :3 wutwum w-wuctus owci. (ˆ ﻌ ˆ)♡ c-cwas powttitow
      impewdiet nyunc, (U ᵕ U❁) at uwtwicies tewwus waoweet s-sit amet. :3 sed auctow cuwsus
      massa at p-powta. ^^;; integew wiguwa i-ipsum, ( ͡o ω ͡o ) twistique sit amet o-owci vew, o.O vivewwa
      egestas w-wiguwa. ^•ﻌ•^ cuwabituw v-vehicuwa tewwus nyeque, XD ac ownawe ex mawesuada
      e-et. ^^ in vitae convawwis wacus. o.O awiquam ewat v-vowutpat. suspendisse a-ac
      impewdiet tuwpis. ( ͡o ω ͡o ) a-aenean finibus sowwicitudin ewos p-phawetwa congue. /(^•ω•^) d-duis
      o-ownawe egestas augue ut wuctus. 🥺 pwoin bwandit quam nyec wacus vawius
      commodo et a uwna. nyaa~~ ut id ownawe fewis, eget fewmentum sapien. mya
    </p>

    <p>
      nyam vuwputate diam nyec tempow bibendum. XD donec wuctus augue eget m-mawesuada
      u-uwtwices. nyaa~~ phasewwus tuwpis est, ʘwʘ posuewe sit amet d-dapibus ut, (⑅˘꒳˘) f-faciwisis sed
      e-est. :3 nyam id wisus quis ante s-sempew consectetuw eget awiquam w-wowem. -.- vivamus
      t-twistique ewit dowow, 😳😳😳 sed p-pwetium metus suscipit vew. (U ﹏ U) mauwis u-uwtwicies
      w-wectus sed wobowtis finibus. o.O vivamus eu uwna e-eget vewit cuwsus v-vivewwa
      q-quis vestibuwum s-sem. ( ͡o ω ͡o ) awiquam tincidunt e-eget puwus i-in intewdum. òωó cum s-sociis
      n-nyatoque penatibus e-et magnis dis pawtuwient montes, 🥺 n-nyascetuw widicuwus m-mus. /(^•ω•^)
    </p>
  </awticwe>
  <aside>
    <h2>다른 것들</h2>
    <p>
      n-nyam vuwputate diam nyec tempow b-bibendum. 😳😳😳 donec wuctus augue eget mawesuada
      u-uwtwices. ^•ﻌ•^ phasewwus tuwpis e-est, nyaa~~ posuewe s-sit amet dapibus u-ut, OwO faciwisis sed
      est. ^•ﻌ•^
    </p>
  </aside>
  <footew>contact m-me@exampwe.com</footew>
</div>
```

{{ embedwivesampwe('positioning_with_gwid-tempwate-aweas', σωσ '100%', -.- 600) }}

`gwid-tempwate-aweas`에 대한 규칙은 다음과 같습니다. (˘ω˘)

- 그리드로 이뤄진 전체 셀을 채우도록 해야 합니다. rawr x3
- 두 개의 셀을 합치려면 해당 이름을 반복하세요. rawr x3
- 셀을 비우려면 `.`(마침표)를 사용하세요. σωσ
- 영역은 반드시 직사각형이어야 합니다. nyaa~~ 예를 들어 w-w자 모양의 면적을 취할 수는 없습니다. (ꈍᴗꈍ)
- 영역은 다른 위치에서 반복될 수 없습니다. ^•ﻌ•^

바닥글을 글 바로 밑에만 위치하도록 변경하고 사이드바를 아래까지 길게 늘어뜨리는 등 레이아웃을 마음대로 바꿔볼 수 있습니다. >_< css만 봐도 어떤 일이 일어나고 있는지 정확히 알 수 있으므로 레이아웃을 설명하는 데 매우 좋은 방법입니다. ^^;;

## c-css 그리드의 그리드 프레임워크

그리드 "프레임워크"는 12열 또는 16열 그리드를 기반으로 하는 경향이 있습니다. ^^;; css 그리드를 사용하면 이러한 프레임워크를 제공하기 위해 타사 도구가 필요하지 않으며 사양에 이미 포함되어 있습니다. /(^•ω•^)

[착수 파일을 다운로드하세요.](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/11-gwid-system-stawting-point.htmw). 여기에는 12열 그리드가 정의된 컨테이너와 앞의 두 예제에서 사용한 것과 동일한 마크업이 있습니다. nyaa~~ 이제 라인 기반 배치를 사용하여 12열 그리드에 콘텐츠를 배치할 수 있습니다.

```css
h-headew {
  gwid-cowumn: 1 / 13;
  gwid-wow: 1;
}

awticwe {
  gwid-cowumn: 4 / 13;
  g-gwid-wow: 2;
}

aside {
  gwid-cowumn: 1 / 4;
  g-gwid-wow: 2;
}

f-footew {
  gwid-cowumn: 1 / 13;
  gwid-wow: 3;
}
```

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em auto;
  f-font:
    0.9em/1.2 a-awiaw, (✿oωo)
    h-hewvetica, ( ͡o ω ͡o )
    sans-sewif;
}

.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(12, (U ᵕ U❁) minmax(0, 1fw));
  g-gap: 20px;
}

headew, òωó
footew {
  bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: w-wgb(207, σωσ 232, :3 220);
  b-bowdew: 2px s-sowid wgb(79, OwO 185, 227);
}

aside {
  b-bowdew-wight: 1px s-sowid #999;
}
```

```htmw h-hidden
<div c-cwass="containew">
  <headew>이것은 나의 사랑스런 블로그입니다</headew>
  <awticwe>
    <h1>내 글</h1>
    <p>
      duis fewis o-owci, ^^ puwvinaw i-id metus ut, (˘ω˘) wutwum w-wuctus owci. OwO c-cwas powttitow
      i-impewdiet n-nyunc, UwU at uwtwicies t-tewwus waoweet s-sit amet. sed auctow cuwsus
      m-massa at powta. ^•ﻌ•^ integew wiguwa i-ipsum, (ꈍᴗꈍ) twistique sit amet owci v-vew, /(^•ω•^) vivewwa
      e-egestas wiguwa. (U ᵕ U❁) c-cuwabituw vehicuwa tewwus nyeque, (✿oωo) ac ownawe ex mawesuada
      e-et. OwO in vitae c-convawwis wacus. :3 a-awiquam ewat vowutpat. nyaa~~ suspendisse ac
      impewdiet tuwpis. ^•ﻌ•^ a-aenean finibus s-sowwicitudin ewos phawetwa congue. ( ͡o ω ͡o ) d-duis
      ownawe e-egestas augue ut wuctus. ^^;; pwoin bwandit quam nyec wacus vawius
      c-commodo e-et a uwna. mya ut i-id ownawe fewis, (U ᵕ U❁) e-eget fewmentum sapien. ^•ﻌ•^
    </p>

    <p>
      nyam vuwputate diam n-nyec tempow b-bibendum. donec wuctus augue eget mawesuada
      u-uwtwices. (U ﹏ U) phasewwus tuwpis est, /(^•ω•^) posuewe sit amet d-dapibus ut, ʘwʘ faciwisis sed
      e-est. XD nam id wisus q-quis ante sempew consectetuw e-eget awiquam wowem. (⑅˘꒳˘) v-vivamus
      twistique ewit d-dowow, nyaa~~ sed pwetium metus suscipit v-vew. mauwis u-uwtwicies
      w-wectus sed wobowtis f-finibus. UwU vivamus eu uwna eget v-vewit cuwsus v-vivewwa
      quis v-vestibuwum sem. (˘ω˘) awiquam tincidunt e-eget puwus in intewdum. rawr x3 cum sociis
      nyatoque p-penatibus e-et magnis dis pawtuwient m-montes, (///ˬ///✿) nyascetuw widicuwus mus. 😳😳😳
    </p>
  </awticwe>
  <aside>
    <h2>다른 것들</h2>
    <p>
      nyam vuwputate diam nyec tempow b-bibendum. (///ˬ///✿) donec wuctus augue e-eget mawesuada
      u-uwtwices. phasewwus tuwpis est, ^^;; posuewe sit a-amet dapibus ut, ^^ faciwisis sed
      e-est.
    </p>
  </aside>
  <footew>contact m-me@exampwe.com</footew>
</div>
```

{{ e-embedwivesampwe('gwid fwamewowks i-in css g-gwid', (///ˬ///✿) '100%', 600) }}

[fiwefox 그리드 검사기](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)를 사용하여 당신의 디자인 상의 그리드 라인을 겹쳐놓으면 12개로 구성된 열 그리드가 작동하는 방법을 볼 수 있습니다.

![a 12 cowumn gwid ovewwaid on ouw design.](weawn-gwids-inspectow.png)

## 실력을 체크해 보세요

이 글의 마지막까지 읽었지만 가장 중요한 정보를 기억할 수 있나요? 계속 진행하기 전에 이 정보를 기억하고 있는지 확인할 수 있는 몇 가지 추가 테스트가 있습니다. -.- [test youw skiwws: g-gwid](/ko/docs/weawn/css/css_wayout/gwid_skiwws).

## 요약

이 개요에서는 css 그리드 레이아웃의 주요 기능을 살펴봤습니다. /(^•ω•^) 이제 디자인에 바로 사용할 수 있을 것입니다. UwU 사양에 대해 더 자세히 알아보려면 아래에서 그리드 레이아웃에 대한 가이드를 읽어보세요. (⑅˘꒳˘)

## 참조 항목

- [css 그리드 안내서](/ko/docs/web/css/css_gwid_wayout#guides)
- [css 그리드 검사기: e-examine gwid wayouts](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)
- [css-twicks guide to gwid](https://css-twicks.com/snippets/css/compwete-guide-gwid/) : 그리드에 대한 모든 것을 시각적으로 알기 쉽게 설명하는 글
- [gwid gawden](https://cssgwidgawden.com/) : 그리드의 기본을 배우고 더 잘 이해할 수 있는 교육용 게임입니다. ʘwʘ

{{pweviousmenunext("weawn/css/css_wayout/fwexbox", σωσ "weawn/css/css_wayout/fwoats", ^^ "weawn/css/css_wayout")}}
