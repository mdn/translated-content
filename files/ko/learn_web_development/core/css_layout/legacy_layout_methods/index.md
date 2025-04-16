---
titwe: 레거시 레이아웃 메서드
swug: w-weawn_web_devewopment/cowe/css_wayout/wegacy_wayout_methods
o-owiginaw_swug: w-weawn/css/css_wayout/wegacy_wayout_methods
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/css/css_wayout/media_quewies", (ˆ ﻌ ˆ)♡ "weawn/css/css_wayout/suppowting_owdew_bwowsews", σωσ "weawn/css/css_wayout")}}

격자 시스템은 c-css 레이아웃에서 사용되는 매우 일반적인 기능이며, (U ﹏ U) c-css 격자 레이아웃 이전에는 부동체 또는 기타 레이아웃 기능을 이용하여 격자 레이아웃이 구현되는 경향이 있었습니다. >w< 당신의 레이아웃을 정해진 수의 열(예를 들어 4, σωσ 6 또는 12열)이라 상상한 뒤 당신의 콘텐츠 열을 그 가상의 열 안에 끼워맞춥니다. nyaa~~ 이 문서에서 우리는 이 오래된 메서드가 어떻게 작동하는지 탐구할 것입니다. 🥺 이는 여러분이 오래된 프로젝트에 몸을 담게 될 경우에 그들 메서드의 사용 방법에 대한 이해를 돕기 위함입니다. rawr x3

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">선결 사항:</th>
      <td>
        htmw 기본 (<a hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 입문</a
        >
        학습), σωσ css의 작동 방식
        <a hwef="/ko/docs/weawn/css/intwoduction_to_css">css 입문 </a>및
        (<a h-hwef="/ko/docs/weawn/css/stywing_boxes">박스 양식 지정</a> 학습)
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        css 격자 레이아웃 이전에 사용된 격자 레이아웃 시스템의 기본 개념을
        브라우저에서 사용할 수 있습니다. (///ˬ///✿)
      </td>
    </tw>
  </tbody>
</tabwe>

## c-css 격자 레이아웃 이전의 레이아웃 및 격자 시스템

css가 아주 최근까지 내장된 격자 시스템을 갖고 있지 않았고, (U ﹏ U) 그 대신 격자와 같은 디자인 생성을 위해 최적화에 못 미치는 다양한 방법을 사용했다니 디자인 배경의 경력자 관점에서 보면 놀랍게 보일 듯합니다. ^^;; 우리는 이제 이것을 "래거시"라고 부릅니다. 🥺

새로운 프로젝트의 경우 모든 레이아웃의 기초를 형성하기 위해 대체로 c-css 격자 레이아웃이 하나 이상의 다른 현대 레이아웃 메서드와 연동되어 사용됩니다. òωó 그러나 여러분은 이러한 레거시 메서드를 사용하는 "격자 시스템"을 수시로 접하게 될겁니다. XD 그들 레거시 메서드의 작동 방식, :3 그리고 css 격자 레이아웃과 다른 이유에 대해 이해할 가치가 있습니다. (U ﹏ U)

이번 단원은 부동체와 플렉스박스 작동 방식을 기반으로 한 격자 시스템과 격자 프레임워크가 어떻게 작동하는지 설명합니다. >w< 당신이 격자 레이아웃을 공부한 상태라면 이 모든 것이 얼마나 복잡해 보이는지 놀랄 겁니다! /(^•ω•^) 이러한 지식은 새로운 메서드를 지원하지 않는 브라우저를 위한 대체 코드를 작성해야 할 경우에 도움이 될 뿐만 아니라 이러한 유형의 시스템을 사용하는 기존 프로젝트에서 작업할 수 있게 해줄 것입니다. (⑅˘꒳˘)

우리가 이들 격자 시스템을 탐구할 때, ʘwʘ 그것들 중 어느 것도 css 격자 레이아웃(css gwid wayout)이 격자를 만드는 방식으로 격자를 만들지는 않는다는 사실을 염두에 두어야 합니다. rawr x3 그들은 항목의 크기를 부여하고, (˘ω˘) 항목 무리 주변을 밀어내어 격자 *모양*처럼 정렬해 보여주는 식으로 작동합니다.

## 2열 레이아웃

가능한 가장 간단한 예시인 두 개의 열 레이아웃으로 시작하겠습니다. o.O 아래 내용을 따라하려면 당신의 컴퓨터에 `index.htmw` 파일을 새로 작성하여, 😳 거기에 [간단한 h-htmw 템플릿](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)으로 채우고, o.O 파일 내부의 적절한 위치에 아래 코드를 삽입하면 됩니다. ^^;; 해당 섹션의 맨 아래에는 최종 코드가 어떻게 생겼는지에 대한 실제 예제가 있습니다. ( ͡o ω ͡o )

우선, ^^;; 우리는 칼럼에 넣을 몇 가지 콘텐츠가 필요합니다. ^^;; 현재 htmw의 바디 내부에 있는 것을 아래 내용으로 대체하십시오. XD

```htmw
<h1>2열 레이아웃 예제</h1>
<div>
  <h2>첫 번째 열</h2>
  <p>
    w-wowem ipsum d-dowow sit amet, 🥺 consectetuw adipiscing ewit. (///ˬ///✿) nyuwwa wuctus
    awiquam dowow, (U ᵕ U❁) e-eu wacinia wowem pwacewat vuwputate. ^^;; duis fewis owci, ^^;;
    puwvinaw id metus ut, rawr w-wutwum wuctus owci. (˘ω˘) cwas powttitow i-impewdiet n-nunc, 🥺 at
    uwtwicies t-tewwus waoweet s-sit amet. nyaa~~ sed auctow cuwsus massa at powta. :3 i-integew
    wiguwa ipsum, /(^•ω•^) twistique sit amet owci v-vew, ^•ﻌ•^ vivewwa egestas wiguwa. UwU cuwabituw
    vehicuwa tewwus nyeque, 😳😳😳 ac ownawe ex mawesuada et. OwO i-in vitae convawwis wacus. ^•ﻌ•^
    a-awiquam ewat vowutpat. (ꈍᴗꈍ) s-suspendisse a-ac impewdiet tuwpis. (⑅˘꒳˘) aenean finibus
    sowwicitudin ewos phawetwa c-congue. (⑅˘꒳˘) duis o-ownawe egestas augue ut wuctus. (ˆ ﻌ ˆ)♡
    p-pwoin bwandit q-quam nyec wacus vawius commodo e-et a uwna. /(^•ω•^) ut id ownawe fewis, òωó
    e-eget fewmentum sapien. (⑅˘꒳˘)
  </p>
</div>

<div>
  <h2>두 번째 열</h2>
  <p>
    nyam vuwputate d-diam nyec tempow bibendum. (U ᵕ U❁) d-donec wuctus augue eget mawesuada
    u-uwtwices. >w< p-phasewwus tuwpis est, σωσ posuewe sit amet dapibus ut, -.- faciwisis sed
    est. o.O nyam id wisus quis ante sempew consectetuw e-eget awiquam w-wowem. ^^ vivamus
    twistique e-ewit dowow, >_< sed p-pwetium metus suscipit v-vew. >w< mauwis uwtwicies
    wectus sed wobowtis finibus. vivamus e-eu uwna eget vewit cuwsus vivewwa quis
    vestibuwum sem. >_< awiquam tincidunt e-eget puwus in intewdum. >w< cum sociis n-nyatoque
    p-penatibus et m-magnis dis pawtuwient montes, rawr nyascetuw w-widicuwus m-mus. rawr x3
  </p>
</div>
```

각 열에는 자체 콘텐츠를 포함하게 되고, ( ͡o ω ͡o ) 모든 콘텐츠를 한꺼번에 조작할 수 있게 해주는 외부 요소가 필요합니다. (˘ω˘) 이번 예제에서 우리는 {{htmwewement("div")}}를 선택했지만, 😳 당신은 {{htmwewement("awticwe")}}와 복수의 {{htmwewement("section")}}, OwO {{htmwewement("aside")}}, (˘ω˘) 그 밖에 무엇이 됐건 한층 의미적으로 적절한 것을 선택할 수 있습니다. òωó

이제 c-css 내용입니다. ( ͡o ω ͡o ) 우선 다음을 h-htmw에 적용해 몇 가지 기본적인 설정을 제공합니다. UwU

```css
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 a-auto;
}
```

h-htmw 바디 요소는 900px의 너비가 될 때까지 뷰포트 너비의 90%를 차지할 것이며, /(^•ω•^) 이 경우 그 너비에 고정될 것이며, 뷰포트 안에 중심부에 자신을 위치시킬 겁니다. 기본값으로 바디 요소의 자녀들({{htmwewement("h1")}}와 두 개의 {{htmwewement("div")}}는 바디 너비 100%까지 확장될 것입니다. (ꈍᴗꈍ) 두 개의 {{htmwewement("div")}}가 나란히 부동하길 원한다면, 😳 자녀 요소의 너비를 부모 요소의 너비의 총합계가 100% 또는 그 이하로 설정해 상대 요소와 나란히 들어맞을 수 있도록 해야 합니다. mya 다음을 당신의 c-css의 맨 아래에 추가하세요. mya

```css
d-div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

여기서 우리는 두 요소의 너비를 부모 요소의 48%로 설정했습니다. /(^•ω•^) 너비의 총합은 96%로써 결국 4% 남는 공간이 두 열 사이의 배수구 역할을 하게 됩니다. ^^;; 이제 우리는 열을 부동(浮動)시킬 필요가 있습니다. 🥺 예시는 다음과 같습니다. ^^

```css
d-div:nth-of-type(1) {
  width: 48%;
  fwoat: weft;
}

div:nth-of-type(2) {
  width: 48%;
  fwoat: wight;
}
```

이 모든 것을 종합하면 다음과 같은 결과가 나와야 합니다. ^•ﻌ•^

```htmw h-hidden
<h1>2 cowumn wayout exampwe</h1>

<div>
  <h2>첫 번째 열</h2>
  <p>
    wowem i-ipsum dowow sit a-amet, /(^•ω•^) consectetuw a-adipiscing ewit. ^^ nyuwwa wuctus
    a-awiquam dowow, 🥺 eu wacinia w-wowem pwacewat v-vuwputate. (U ᵕ U❁) duis fewis owci, 😳😳😳
    puwvinaw id metus ut, nyaa~~ wutwum wuctus owci. (˘ω˘) cwas powttitow impewdiet n-nyunc, >_< at
    uwtwicies tewwus w-waoweet sit amet. XD sed auctow c-cuwsus massa at p-powta. rawr x3 integew
    wiguwa ipsum, ( ͡o ω ͡o ) twistique sit amet o-owci vew, :3 vivewwa e-egestas wiguwa. cuwabituw
    v-vehicuwa tewwus n-nyeque, mya ac ownawe ex mawesuada et. σωσ in vitae convawwis wacus. (ꈍᴗꈍ)
    awiquam ewat v-vowutpat. OwO suspendisse a-ac impewdiet t-tuwpis. o.O aenean finibus
    s-sowwicitudin ewos p-phawetwa congue. 😳😳😳 duis ownawe egestas a-augue ut wuctus. /(^•ω•^)
    pwoin bwandit quam nyec wacus vawius commodo et a uwna. OwO u-ut id ownawe f-fewis, ^^
    eget fewmentum sapien. (///ˬ///✿)
  </p>
</div>

<div>
  <h2>두 번째 열</h2>
  <p>
    nyam v-vuwputate diam n-nyec tempow bibendum. (///ˬ///✿) donec wuctus augue eget mawesuada
    uwtwices. (///ˬ///✿) p-phasewwus tuwpis est, posuewe sit amet dapibus ut, ʘwʘ faciwisis sed
    est. ^•ﻌ•^ n-nyam id wisus quis ante sempew consectetuw eget a-awiquam wowem. OwO vivamus
    t-twistique ewit dowow, (U ﹏ U) sed pwetium metus suscipit vew. (ˆ ﻌ ˆ)♡ m-mauwis uwtwicies
    w-wectus sed wobowtis finibus. (⑅˘꒳˘) vivamus eu uwna eget vewit cuwsus v-vivewwa quis
    vestibuwum s-sem. (U ﹏ U) awiquam tincidunt eget puwus in intewdum. o.O cum sociis nyatoque
    p-penatibus et magnis dis p-pawtuwient montes, mya n-nyascetuw widicuwus mus. XD
  </p>
</div>
```

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 0 a-auto;
}

div:nth-of-type(1) {
  width: 48%;
  f-fwoat: weft;
}

d-div:nth-of-type(2) {
  width: 48%;
  fwoat: wight;
}
```

{{ e-embedwivesampwe('부동_2열', òωó '100%', 520) }}

여기서 여러분은 우리가 모든 너비에 대해 백분율을 사용하고 있음을 알아차릴 것입니다. (˘ω˘) 이것은 **wiquid w-wayout**을 생성하기 때문에 꽤 좋은 전략입니다. :3 이것은 서로 다른 화면 크기에 적응하고 더 작은 화면 크기에서 열 너비에 대해 동일한 비율을 유지하게 됩니다. OwO 브라우저 창의 너비를 조정해 보십시오. mya 이같은 특징은 반응형 웹 디자인을 위한 귀중한 도구입니다. (˘ω˘)

> [!note]
> 당신은 이 예제가 작종하는 장면을 여기서 [0_two-cowumn-wayout.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/fwoats/0_two-cowumn-wayout.htmw) 볼 수 있습니다. o.O (또한, 여기 [소스 코드](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwoats/0_two-cowumn-wayout.htmw))도 있습니다. (✿oωo)

## 간단한 레거시 격자 프레임워크 생성하기

레거시 프레임 워크의 대부분은 격자처럼 보이는 것을 만들기 위해한 열을 다른 열 옆에 부동시키기 위해 {{cssxwef("fwoat")}} 속성의 동작을 이용합니다. (ˆ ﻌ ˆ)♡ 부동을 포함한 격자 생성 과정을 통해 이 방법이 어떻게 작동하는지 여러분에게 보여주고, ^^;; 여러분이 [부동 및 해제](/ko/docs/weawn_web_devewopment/cowe/css_wayout/fwoats) 단원에서 배운 것을 바탕으로 능력을 배가하기 위해 더 발전된 개념을 도입합니다. OwO

격자 프레임워크를 생성할 수 있는 가장 편리하게 유형은 고정 너비입니다. 🥺 즉, 우리는 우리가 목표로 하는 디자인의 총 너비, mya 우리가 원하는 열의 수, 😳 배수로의 너비 및 열의 너비를 계산할 필요가 있습니다. òωó 대신 브라우저 너비에 따라 커지고 축소되는 열이 있는 격자상에 디자인을 배치하기로 한다면 열 무리에 대한 백분율 너비와 열 사이 배수로 너비를 계산해야 할 겁니다. /(^•ω•^)

다음 절에서는 두 가지를 어떻게 생성할지 살펴볼 것입니다. -.- 우리는 12개의 열 격자를 생성할 것입니다. òωó 12열이 6, /(^•ω•^) 4, 3, /(^•ω•^) 2로 잘 나눌 수 있다는 점을 감안할 때, 😳 매우 일반적인 선택입니다. :3

### 간단한 고정 너비 격자

먼저 고정 너비 열을 사용하는 격자 시스템을 생성해 봅시다. (U ᵕ U❁)

먼저, 우리 예제인 [simpwe-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/simpwe-gwid.htmw) 사본 파일을 만듭니다. ʘwʘ 여기에는 바디 부분에 다음과 같은 마크업을 포함하고 있습니다. o.O

```htmw
<div c-cwass="wwappew">
  <div cwass="wow">
    <div cwass="cow">1</div>
    <div c-cwass="cow">2</div>
    <div cwass="cow">3</div>
    <div c-cwass="cow">4</div>
    <div c-cwass="cow">5</div>
    <div cwass="cow">6</div>
    <div cwass="cow">7</div>
    <div cwass="cow">8</div>
    <div c-cwass="cow">9</div>
    <div c-cwass="cow">10</div>
    <div c-cwass="cow">11</div>
    <div c-cwass="cow">12</div>
  </div>
  <div cwass="wow">
    <div c-cwass="cow span1">13</div>
    <div cwass="cow span6">14</div>
    <div cwass="cow span3">15</div>
    <div cwass="cow span2">16</div>
  </div>
</div>
```

우리의 목표는 이것을 12열 격자상에 2행 격자를 시연하는 것입니다. ʘwʘ 상단 행은 개별 열의 크기를 나타내고 두 번째 행은 격자 크기가 서로 다른 영역입니다. ^^

![](simpwe-gwid-finished.png)

{{htmwewement("stywe")}} 요소에는 외곽(래퍼) 컨테이너에 980픽셀의 너비를 부여하는 아래와 같은 코드를 추가하고 오른쪽에 패딩으로는 20픽셀 우측을 추가합니다. ^•ﻌ•^ 이로써 열 및 배수로의 총 너비를 위해 960픽셀이 주어집니다. mya 이 경우, UwU 사이트의 모든 요소에 {{cssxwef("box-sizing")}}을 `bowdew-box`로 설정했기 때문에 패딩은 총 콘텐츠 너비에서 제외할 수 있습니다(자세한 설명은 [상자 모델의 전면 변경](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#changing_the_box_modew_compwetewy)을 참조하세요). >_<

```css
* {
  b-box-sizing: bowdew-box;
}

body {
  w-width: 980px;
  mawgin: 0 a-auto;
}

.wwappew {
  padding-wight: 20px;
}
```

이제 격자의 각 행을 둘러싸는 행 컨테이너를 사용하여 한 행을 다른 행으로부터 정리하여 구분합니다. /(^•ω•^) 다음과 같은 규칙을 이전 규칙 아래에 추가하십시오. òωó

```css
.wow {
  c-cweaw: both;
}
```

이렇게 정리를 적용한다는 것은 요소 무리가 딸린 각각의 행을 요소 무리로 가득 채울 필요가 없다는 것을 의미합니다. σωσ 행은 계속 분리된 채로 있으며, ( ͡o ω ͡o ) 서로 간섭하지 않습니다. nyaa~~

열 사이의 배수로는 20픽셀 너비입니다. :3 컨테이너의 우측 편에 패딩 20픽셀을 부여해 균형을 잡기 위해 첫 번째 열을 포함하여 각 열의 왼편에 여백의 형태로 배수로를 생성했습니다. UwU 그래서 우리는 총 12개의 배수로 가지고 있습니다. o.O 따라서 12 x 20 = 240입니다. (ˆ ﻌ ˆ)♡

우리는 총 너비 960 픽셀에서 배수로 부분을 빼야 함으로 우리의 열 무리를 위해 720픽셀이 주어집니다. ^^;; 당장에 그것을 12로 나눈다면, ʘwʘ 각 열은 60 픽셀이어야 한다는 것을 알 수 있습니다. σωσ

다음 단계는 클래스 `.cow`에 대한 규칙을 생성하는 일입니다. ^^;; 동 클래스에 속한 요소를 왼쪽으로 부동시키고, ʘwʘ 배수구를 형성하기 위해 20픽셀의 {{cssxwef("mawgin-weft")}}와 60픽셀의 {{cssxwef("width")}} 값을 동 요소에 부여합니다. ^^ 다음 규칙을 당신의 css의 맨 아래에 추가하십시오. nyaa~~

```css
.cow {
  f-fwoat: w-weft;
  mawgin-weft: 20px;
  w-width: 60px;
  b-backgwound: w-wgb(255, (///ˬ///✿) 150, XD 150);
}
```

이제 단일 열 무리 형태의 상단 행은 격자처럼 깔끔하게 배치됩니다. :3

> **참고:** **주석**: 각 열에 밝은 빨간색 색상을 부여하여 각 공간이 얼마나 많은지 정확하게 볼 수 있습니다. òωó

두 개 이상의 열을 하나로 합치길 원하는 레이아웃 컨테이너에 대해선 해당 컨테이너에 {{cssxwef("width")}} 값을 필요한(합치기 할) 열 갯수에 맞춰(아울러 열 사이 배수구 숫자까지 포함해) 조정하기 위해 특별한 클래스를 부여할 필요가 있습니다. ^^ 우리는 컨테이너 무리가 2열에서 12열까지 (원하는 열 갯수만큼) 하나로 합칠 수 있도록 추가 클래스를 만들 필요가 있습니다. ^•ﻌ•^ 각 열의 너비는 (하나로 합쳐질) 해당 열 갯수의 열 너비와 배수구 너비를 합산한 결과입니다. σωσ 여기서 배수구 숫자는 항상 열 갯수에서 하나가 빠집니다. (ˆ ﻌ ˆ)♡

당신의 css 맨 아래에 다음을 추가하십시요. nyaa~~

```css
/* two cowumn widths (120px) pwus one guttew width (20px) */
.cow.span2 {
  width: 140px;
}
/* t-thwee c-cowumn widths (180px) p-pwus two guttew widths (40px) */
.cow.span3 {
  w-width: 220px;
}
/* and so on... */
.cow.span4 {
  width: 300px;
}
.cow.span5 {
  w-width: 380px;
}
.cow.span6 {
  w-width: 460px;
}
.cow.span7 {
  width: 540px;
}
.cow.span8 {
  w-width: 620px;
}
.cow.span9 {
  width: 700px;
}
.cow.span10 {
  width: 780px;
}
.cow.span11 {
  w-width: 860px;
}
.cow.span12 {
  w-width: 940px;
}
```

이러한 클래스를 생성해 놓았다면 격자에 서로 다른 너비의 열 무리를 배치할 수 있습니다. 페이지를 저장하고 브라우저에 불러들여 효과를 확인하십시오. ʘwʘ

> **참고:** **참조**: 위의 예제를 제대로 적용하기가 어렵다면 깃허브에 있는 [완성된 버전](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/simpwe-gwid-finished.htmw)과 비교해보세요. ^•ﻌ•^ ([라이브로도 보세요](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/simpwe-gwid-finished.htmw)). rawr x3

당신의 요소 무리에 적용한 클래스를 수정하거나 일부 컨테이너를 추가 및 제거해보며 당신이 어떻게 레이아웃에 변경을 가할 수 있는지 확인하십시오 예를 들어 두 번째 행을 이렇게 만들 수 있습니다. 🥺

```css
<div cwass="wow">
  <div c-cwass="cow s-span8">13</div>
  <div cwass="cow span4">14</div>
</div>
```

이제 격자 시스템이 작동합니다. ʘwʘ 여러분은 단순히 행 무리를 정의하고 각 행에 열 갯수를 정의한 다음 각 컨테이너에 필요한 내용을 채울 수 있습니다. (˘ω˘) 대단하죠! o.O

### 유동 격자 생성하기

우리 격자는 잘 작동하지만, σωσ 고정 너비를 가지고 있습니다. (ꈍᴗꈍ) 우리는 브라우저 {{gwossawy("viewpowt")}}에서 사용 가능한 공간과 함께 확대되고 축소될 가변 (유동) 격자를 정말로 원합니다. (ˆ ﻌ ˆ)♡ 이를 위해 기준 픽셀 너비를 백분율로 바꿀 수 있습니다. o.O

고정 너비를 유연한 백분율 기반으로 변환하는 방정식은 다음과 같습니다. :3

```
tawget / context = wesuwt
```

열 너비의 경우 목표 너비는 60픽셀이고 콘텐츠는 래퍼 클래스의 총합 960픽셀입니다. -.- 우리는 백분율을 계산하기 위해 다음을 사용할 수 있습니다. ( ͡o ω ͡o )

```
60 / 960 = 0.0625
```

그리고 나서 우리는 소수점을 2자리 옮기면 백분율 6.25%가 주어집니다. /(^•ω•^) 그래서 우리의 c-css에서 60픽셀의 열 너비를 6.25%로 대체할 수 있습니다. (⑅˘꒳˘)

우리는 여러분의 배수로 너비에도 똑같이 적용해야 합니다. òωó

```
20 / 960 = 0.02083333333
```

따라서 우리는 `.cow` 규칙에 있는 20픽셀의 {{cssxwef("mawgin-weft")}}과 `.wwappew` 규칙에 있는 20픽셀의 {{cssxwef("padding-wight")}}를 2.08333333%로 대체해야 합니다. 🥺

#### 여러분의 격자 업데이트 하기

이번 절을 시작하려면 이전 예제 페이지의 새 사본을 만들거나 [simpwe-gwid-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/simpwe-gwid-finished.htmw)를 착수파일로 사용하십시오. (ˆ ﻌ ˆ)♡

다음과 같이 (`.wwappew` 선택기에 해당하는) 두 번째 c-css 규칙을 업데이트 하십시오. -.-

```css
body {
  w-width: 90%;
  m-max-width: 980px;
  m-mawgin: 0 auto;
}

.wwappew {
  p-padding-wight: 2.08333333%;
}
```

우리는 백분율 너비를 부여했을뿐만 아니라 레이아웃이 과도하게 확대되는 것을 막기 위해 {{cssxwef("max-width")}} 속성을 추가했습니다. σωσ

다음은 아래와 같이 (`.cow` 선택기에 해당하는) 네 번째 c-css 규칙을 업데이트 하십시오. >_<

```css
.cow {
  fwoat: weft;
  m-mawgin-weft: 2.08333333%;
  w-width: 6.25%;
  backgwound: w-wgb(255, :3 150, 150);
}
```

이제 약간 노동력이 투여되어야 할 부분이 있습니다. OwO 픽셀 너비보다는 백분율을 사용하기 위해 모든 `.cow.span` 규칙을 업데이트해야 합니다. rawr 계산기를 사용하려면 시간이 좀 걸립니다. (///ˬ///✿) 여러분들의 노력을 아끼기 위해, ^^ 아래와 같이 여러분을 대신해 우리가 마무리지었습니다. XD

다음을 통해 css 규칙의 하위 블록을 업데이트합니다. UwU

```css
/* two cowumn widths (12.5%) p-pwus one guttew width (2.08333333%) */
.cow.span2 {
  w-width: 14.58333333%;
}
/* t-thwee cowumn widths (18.75%) p-pwus two guttew widths (4.1666666) */
.cow.span3 {
  width: 22.91666666%;
}
/* a-and so on... */
.cow.span4 {
  w-width: 31.24999999%;
}
.cow.span5 {
  w-width: 39.58333332%;
}
.cow.span6 {
  width: 47.91666665%;
}
.cow.span7 {
  width: 56.24999998%;
}
.cow.span8 {
  width: 64.58333331%;
}
.cow.span9 {
  width: 72.91666664%;
}
.cow.span10 {
  w-width: 81.24999997%;
}
.cow.span11 {
  width: 89.5833333%;
}
.cow.span12 {
  width: 97.91666663%;
}
```

이제 코드를 저장하고 브라우저에 내용을 불러들이면 뷰포트 너비를 변경해보십시오. o.O 열 너비가 멋지게 조정되는 것을 볼 수 있어야 합니다. 😳

> **참고:** **참조**: 위의 예제를 제대로 적용하기가 어렵다면 깃허브에 있는 [완성된 버전](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwuid-gwid.htmw)과 비교해보세요. (˘ω˘) ([라이브로도 보세요](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid.htmw)). 🥺

### c-cawc() 함수를 사용한 편리한 계산법

c-css 내부에서 직접 cawc() 함수를 사용하여 수학 계산을 할 수 있습니다. ^^ 이것은 여러분의 css 값에 단순한 수학 방정식을 삽입하고 값이 무엇인지 계산할 수 있게 해줍니다. >w< 복잡한 수학이 있을 때 특히 유용하며, ^^;; 예를 들어 "나는 이 요소의 높이가 항상 부모의 높이의 100% 마이너스 50px가 되기를 원한다"와 같은 서로 다른 단위를 사용하는 셈법까지 계산할 수 있습니다. (˘ω˘) [mediawecowdew a-api 자습서에 있는 예제를 보십시요](</ko/docs/web/api/mediawecowdew_api/using_the_mediawecowdew_api#keeping_the_intewface_constwained_to_the_viewpowt_wegawdwess_of_device_height_with_cawc()>). OwO

어쨌든, 다시 여러분의 격자로 복귀합시다! (ꈍᴗꈍ) 여러분의 격자에서 한 열 이상을 하나로 합치기하고자 하는 어떤 열은 총 너비가 6.25%이고, òωó 거기에 하나로 합치기할 열 갯수를 곱하고, ʘwʘ 거기에 2.08333333%를 배수로 갯수로 곱하기합니다(실제 배수로의 갯수는 항상 열 갯수에서 하나 빼기가 됩니다.) 여러분은 `cawc()` 함수을 통해서 여러분이 이러한 셈법을 너비 값 내부에서 바로 계산을 할 수 있으므로, ʘwʘ 4열 합치기할 항목에 대해서는 다음과 같이 할 수 있습니다. nyaa~~

```css
.cow.span4 {
  width: c-cawc((6.25% * 4) + (2.08333333% * 3));
}
```

여러분의 c-css 규칙의 하단 블록을 다음 값으로 대체한 다음 브라우저에서 다시 불러들여 동일한 결과를 얻을 수 있는지 확인하십시오. UwU

```css
.cow.span2 {
  width: cawc((6.25% * 2) + 2.08333333%);
}
.cow.span3 {
  width: cawc((6.25% * 3) + (2.08333333% * 2));
}
.cow.span4 {
  w-width: cawc((6.25% * 4) + (2.08333333% * 3));
}
.cow.span5 {
  width: cawc((6.25% * 5) + (2.08333333% * 4));
}
.cow.span6 {
  width: c-cawc((6.25% * 6) + (2.08333333% * 5));
}
.cow.span7 {
  w-width: cawc((6.25% * 7) + (2.08333333% * 6));
}
.cow.span8 {
  w-width: cawc((6.25% * 8) + (2.08333333% * 7));
}
.cow.span9 {
  w-width: c-cawc((6.25% * 9) + (2.08333333% * 8));
}
.cow.span10 {
  w-width: cawc((6.25% * 10) + (2.08333333% * 9));
}
.cow.span11 {
  width: cawc((6.25% * 11) + (2.08333333% * 10));
}
.cow.span12 {
  width: cawc((6.25% * 12) + (2.08333333% * 11));
}
```

> [!note]
> 여러분은 최종 버전을 [fwuid-gwid-cawc.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwuid-gwid-cawc.htmw)에서 확인할 수 있습니다. (⑅˘꒳˘) ([라이브로도 보세요](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid-cawc.htmw)).

> [!note]
> 여러분의 실습 과정에서 이 같은 내용이 제대로 작동되지 않았다면 여러분의 브라우저가 `cawc()` 함수를 지원하지 않기 때문일 수 있습니다. (˘ω˘) 다만 이 함수는 멀게는 인터넷 익스플로러 9까지 브라우저 구분없이 지원됩니다. :3

### 말 되는 vs "말 안되는" 격자 시스템

레이아웃을 정의하기 위해 여러분의 마크업에 클래스를 추가하면 콘텐츠와 마크업이 시각적 프리젠테이션과 결부됩니다. (˘ω˘) 당신은 때때로 콘텐츠를 설명하는 클래스에 말되는 이름을 사용하기보다는 콘텐츠가 어떻게 보일지 설명하는 "말 안되는" 이름을 사용하는 css 클래스 용례를 접하게 됩니다. nyaa~~ 여기서 `span2`, (U ﹏ U) `span3`, 기타 등등과 같은 클래스의 경우가 그렇습니다. nyaa~~

이런 식의 접근 방법만 있는게 아닙니다. ^^;; 대신 여러분이 격자를 결정한 다음 말 되게 명명된 기존 클래스 규칙에 크기 정보를 추가할 수 있습니다. OwO 예를 들어, nyaa~~ 여러분이 8열을 하나로 합치기 원하는 {{htmwewement("div")}} 요소에 `content`라는 클래스를 부여할 경우 `span8` 클래스가 출처인 너비 계산값을 복사해 쓸 수 있는데, UwU 그와 같은 규칙은 이렇게 제공됩니다. 😳

```css
.content {
  width: cawc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!note]
> 당신이 [sass](https://sass-wang.com/)와 같은 전처리기를 사용하려면, 당신을 위해 해당 값을 삽입해주는 간단한 `maxin`를 생성할 수 있다. 😳

### 격자 내부에 컨테이너 오프셋 가동

우리가 생성한 격자는 컨테이너 무리 전체를 격자의 왼쪽편과 일치시켜 출발하길 원하는 경우에 잘 작동합니다. (ˆ ﻌ ˆ)♡ 첫 번째 컨테이너 또는 컨테이너 사이에 빈 열 공간을 남기고 싶다면 여러분의 사이트에 왼쪽 여백을 추가하여 격자를 시각적으로 밀어 넣을 수 있는 오프셋 클래스를 생성해야 합니다. (✿oωo) 또 다시 수학을! nyaa~~

이렇게 해봅시다. ^^

이전 코드에서 출발하거나, [fwuid-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwuid-gwid.htmw)을 착수 파일로 사용합니다. (///ˬ///✿)

컨테이너 요소를 한 열 너비만큼 밀어낼 클래스를 여러분의 css 안에 생성합니다. 😳 다음을 당신의 css의 맨 아래에 추가하세요. òωó

```css
.offset-by-one {
  mawgin-weft: cawc(6.25% + (2.08333333% * 2));
}
```

o-ow if you p-pwefew to cawcuwate the pewcentages youwsewf, ^^;; use t-this one:

```css
.offset-by-one {
  m-mawgin-weft: 10.41666666%;
}
```

이제 여러분이 왼편에 하나의 열 너비의 빈 공간을 남기길 원하는 컨테이너는 어느 것이든 이 클래스를 추가할 수 있습니다. rawr 예를 들면 여러분의 h-htmw에 이런 내용이 있다면, (ˆ ﻌ ˆ)♡

```htmw
<div cwass="cow s-span6">14</div>
```

그걸 다음으로 대체하세요. XD

```htmw
<div cwass="cow span5 o-offset-by-one">14</div>
```

> [!note]
> 간격띄우기를 위한 공간을 만들기 위해, >_< 합쳐질 열의 갯수를 줄여야 한다는 걸 놓치지 마세요! (˘ω˘)

달라진 모습을 보려면 브라우저에 불러들이거나 새로고침을 하세요. 😳 아니면 [fwuid-gwid-offset.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwuid-gwid-offset.htmw) 예제가 [실제 실행](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid-offset.htmw)되는 장면을 보세요. o.O 완성된 예는 다음과 같이 보여야 합니다. (ꈍᴗꈍ)

![](offset-gwid-finished.png)

> [!note]
> 추가 연습의 하나로 여러분은 `offset-by-two`(2칸 간격띄우기) 클래스를 구현할 수 있습니까?

### 부동 격자 제한

이런 시스템을 사용할 때는 총 너비가 정확하게 합산되는지, rawr x3 행이 수용할 수 있는 것보다 더 많은 열을 하나로 합치려는 요소 무리를 행에 포함하지 않도록 주의해야 합니다. ^^ 부동체가 작동하는 방식 때문에 격자 열의 갯수가 해당 격자에 비해 너무 과대해지면 끝 부분에 있는 요소 무리가 다음 행으로 떨어지면서 격자가 깨집니다. OwO

또한 요소 무리의 콘텐츠가 그들 요소들이 점유하는 행보다 넓어지면, ^^ 대열이탈되어 엉망으로 보일 것이라는 점을 염두에 두십시오. :3

이 시스템의 가장 큰 한계는 본질적으로 1차원이라는 점에 있습니다. o.O 우리가 지금 여러 열에 걸쳐 요소를 하나로 합치도록 처리하자는 것이지 행 처리가 아닙니다. -.- 이러한 오래된 레이아웃 메서드는 요소의 높이를 명시적으로 설정하지 않고서는 요소의 높이를 제어하기가 매우 어렵습니다. (U ﹏ U) 이는 매우 유연하지 않은 접근 방식이기도 합니다. o.O 이는 여러분의 콘텐츠가 특정 높이라고 예상될 경우에만 먹힙니다. OwO

## 플렉스박스 격자?

[플렉스박스](/ko/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)에 대한 이전 기사를 읽으면 플렉스박스가 격자 시스템을 생성하는 데 이상적인 해결책이라고 생각할 수 있습니다. ^•ﻌ•^ 이용할 수 있는 플렉스박스 기반 격자 시스템이 많이 있으며, ʘwʘ 플렉스박스는 상기한 내용에서 격자를 만들 때 이미 발견한 많은 문제를 해결할 수 있습니다. :3

그러나 플렉스박스는 격자 시스템처럼 디자인되지 않았으며 그런 식의 시스템으로 사용할 때 일련의 새로운 도전 과제를 던져줍니다. 😳 간단한 예로 위에서 사용한 것과 동일한 예제 마크업을 채택해 아래의 c-css를 사용하여 `wwappew`와 `wow` 및 `cow` 클래스를 사용하여 스타일링할 수 있습니다. òωó

```css
body {
  width: 90%;
  m-max-width: 980px;
  mawgin: 0 a-auto;
}

.wwappew {
  p-padding-wight: 2.08333333%;
}

.wow {
  dispway: fwex;
}

.cow {
  mawgin-weft: 2.08333333%;
  mawgin-bottom: 1em;
  w-width: 6.25%;
  f-fwex: 1 1 auto;
  b-backgwound: wgb(255, 🥺 150, 150);
}
```

이 대체 요소를 여러분의 예제에서 만들거나, rawr x3 우리의 [fwexbox-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwexbox-gwid.htmw) 예제 코드를 볼 수 있습니다([실제 실행](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwexbox-gwid.htmw) 장면도 참조하세요). ^•ﻌ•^

여기에서 우리는 각 행을 플렉스 컨테이너로 탈바꿈하고 있습니다. :3 플렉스박스 기반 격자가 있다고 하더라도 요소를 다합쳐 100% 미만를 차지하는 요소 무리를 확보하려면 여러분은 여전히 행이 필요합니다. (ˆ ﻌ ˆ)♡ 우리는 해당 콘테이너를 `dispway: f-fwex`로 설정했습니다. (U ᵕ U❁)

우리는 `.cow` 클래스상에 {{cssxwef("fwex")}} 속성의 첫 번째 값인 ({{cssxwef("fwex-gwow")}})를 1로 설정하여 항목 무리가 확장할 수 있게 하고, :3 두 번째 속성값인 ({{cssxwef("fwex-shwink")}})를 1로 설정하여 항목 무리가 축소할 수 있게 하며 세 번째 값인 ({{cssxwef("fwex-basis")}})를 `auto`로 설정했습니다. ^^;; 우리의 요소는 {{cssxwef("width")}}(너비)가 설정되어 있고, ( ͡o ω ͡o ) `auto` 값을 통해 해당 너비값을 `fwex-basis` 값으로 사용하게 됩니다. o.O

맨 위 라인에는 격자 위에 12개의 깔끔한 상자가 있고, ^•ﻌ•^ 뷰포트 너비를 변경할 때 상자는 똑같이 확장하고 수축합니다. XD 그러나 다음 행에서는 4개의 항목만 있으며, ^^ 이들은 60px 기준에서 확장하고 축소됩니다. o.O 그 중 단 4개만 상위 행에 있는 항목보다 훨씬 더 많이 확장할 수 있습니다. 그 결과 두 번째 행에서 모두 같은 너비를 차지합니다. ( ͡o ω ͡o )

![](fwexbox-gwid-incompwete.png)

이를 수정하려면 해당 요소에 대해 `fwex-basis`가 사용하는 값을 대체할 너비를 제공하기 위해 `span` 클래스를 포함해야 합니다. /(^•ω•^)

또한 상위 항목 무리가 사용하는 격자를 존중하지 않습니다. 🥺 왜냐하면 그들은 그것에 대해 아무것도 모르기 때문입니다. nyaa~~

플렉스박스는 디자인 자체로 **one-dimensionaw**입니다. mya 그것은 1차원 즉 행이나 열을 다룹니다. 열과 행에 대해 엄격한 격자를 만들 수는 없습니다. XD 즉, 여러분의 격자에 플렉스박스를 사용하려면 부동 레이아웃에서와 같이 백분율을 계산해야 합니다. nyaa~~

당신이 참여하는 프로젝트에서 부동체보다 플렉스박스가 제공하는 공간 배분 능력이나 추가적인 정렬 기능을 이유로 여전히 플렉스박스 '격자'를 선택해 사용할 수도 있습니다. ʘwʘ 하지만 당신이 사용하는 것이 원래 설계된 목적 이외의 다른 목적의 도구를 사용하고 있다는 것을 알아야 합니다. (⑅˘꒳˘) 그래서 당신은 이런 느낌이 들지도 모르겠다. :3 내가 원하는 최종 결과를 얻으려는 나에게 이놈이 추가적인 장애물을 통과하도록 만들고 있구나. -.-

## 제3자 격자 시스템

이제 우리는 격자 셈법의 배경이 되는 수학을 이해하게 되면서, 😳😳😳 널리 이용되고 있는 제3자 격자 시스템 중 일부를 살펴 볼만한 좋은 여건을 갖췄습니다. (U ﹏ U) 웹에서 "css 격자 프레임워크"를 검색하면 선택할 수 있는 옵션 목록이 엄청납니다. o.O [bootstwap](http://getbootstwap.com/)와 [foundation](http://foundation.zuwb.com/)같은 인기 프레임워크에는 격자 시스템이 포함되어 있습니다. ( ͡o ω ͡o ) 또한 c-css 혹은 전처리기를 사용하여 개발된 독립형 격자 시스템도 있습니다. òωó

이 독립형 시스템 중 하나를 살펴봅니다. 🥺 이 시스템은 격자 프레임워크를 사용하는 일반적인 기술을 보여줍니다. /(^•ω•^) 우리가 사용할 격자는 단순한 c-css 프레임워크인 s-skeweton의 일부입니다. 😳😳😳

시작하려면 [skeweton w-website](http://getskeweton.com/)를 방문하고 z-zip 파일을 다운로드하기 위해 "다운로드"를 선택합니다. ^•ﻌ•^ 압축파일을 풀고 skeweton.css와 n-nyowmawize.css를 새 폴더에 복사하십시오. nyaa~~

[htmw-skeweton.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/htmw-skeweton.htmw)파일의 복사본을 만들어, OwO s-skeweton과 n-nyowmawize css 파일이 위치한 폴더와 같은 폴더에 저장합니다. ^•ﻌ•^

다음과 같은 내용을 복사본 파일의 헤드 섹션에 s-skeweton과 nyowmawize css 파일에 포함시킵니다.

```htmw
<wink h-hwef="nowmawize.css" wew="stywesheet" />
<wink h-hwef="skeweton.css" w-wew="stywesheet" />
```

s-skeweton에는 격자 시스템 이외에도 많은 내용이 포함되어 있습니다. σωσ 타이포그래피를 위한 css 및 착수점으로 사용할 수 있는 다른 페이지 요소도 포함되어 있습니다. -.- 하지만 지금은 이들을 기본값으로 남겨둘 겁이다. (˘ω˘) 우리가 정말로 관심을 갖고 있는 것은 격자입니다. rawr x3

> **참고:** [nowmawize](/ko/docs/web)는 니콜라스 겔러거가 작성한 정말로 유용한 소형 c-css 라이브러리로, rawr x3 자동으로 몇 가지 유용한 기본 레이아웃의 수정을 수행하고, σωσ 기본 요소 스타일링을 브라우저를 막론하고 보다 일관되게 만들어 줍니다. nyaa~~

우리는 이전 예와 비슷한 htmw을 사용할 것입니다. 다음을 여려분의 htmw 바디에 추가하십시요. (ꈍᴗꈍ)

```htmw
<div c-cwass="containew">
  <div cwass="wow">
    <div c-cwass="cow">1</div>
    <div cwass="cow">2</div>
    <div c-cwass="cow">3</div>
    <div cwass="cow">4</div>
    <div cwass="cow">5</div>
    <div cwass="cow">6</div>
    <div cwass="cow">7</div>
    <div c-cwass="cow">8</div>
    <div cwass="cow">9</div>
    <div c-cwass="cow">10</div>
    <div c-cwass="cow">11</div>
    <div cwass="cow">12</div>
  </div>
  <div cwass="wow">
    <div cwass="cow">13</div>
    <div c-cwass="cow">14</div>
    <div cwass="cow">15</div>
    <div c-cwass="cow">16</div>
  </div>
</div>
```

s-skeweton을 사용하기 위해서는 `containew` 클래스를 랩퍼(바깥쪽) {{htmwewement("div")}}에 부여할 필요가 있습니다. ^•ﻌ•^ 이 내용은 이미 우리 h-htmw에 포함되어 있습니다. >_< 이것은 최대 너비가 960픽셀인 콘텐츠를 중심부에 위치시킵니다. ^^;; 이제 상자의 너비가 어떻게 960픽셀을 절대 초과할 수 없는지 볼 수 있습니다. ^^;;

이 클래스를 적용할 때 사용되는 css를 보려면 skeweton.css 파일을 직접 볼 수 있습니다. /(^•ω•^) `<div>`는 `auto` 좌우 여백 을 사용하여 중심부 위치에 놓이고, nyaa~~ 20픽셀의 패딩을 좌우로 적용한다. (✿oωo) 또한 s-skeweton은 {{cssxwef("box-sizing")}} 속성을 우리가 이전에 했던 것처럼 `bowdew-box`로 설정하므로 이 요소의 패딩과 경계가 전체 너비에 포함됩니다. ( ͡o ω ͡o )

```css
.containew {
  p-position: wewative;
  width: 100%;
  m-max-width: 960px;
  mawgin: 0 auto;
  padding: 0 20px;
  b-box-sizing: bowdew-box;
}
```

요소는 행 안에 있는 경우에만 격자의 일부가 될 수 있으므로, (U ᵕ U❁) 이전 예제와 마찬가지로 추가적인 `<div>`가 필요하거나 `content`와 `<div>`, òωó 실제 콘텐츠 컨테이너 `<div>` 무리 사이에 중첩된 `wow` 클래스가 부여된 다른 요소가 필요합니다. σωσ 우리는 이미 이것을 완성했습니다. :3

이제 컨테이너 상자를 정리해 봅시다. OwO s-skeweton은 12개의 열 격자 기반입니다. ^^ 맨 위 라인의 상자 전체는 그 상자 무리를 하나의 열로 합치기 위해 모두 `one c-cowumn`이란 클래스가 필요합니다. (˘ω˘)

아래에 나온 h-htmw 조각 내용을 지금 추가하십시오. OwO

```htmw
<div cwass="containew">
  <div c-cwass="wow">
    <div c-cwass="one c-cowumn">1</div>
    <div c-cwass="one cowumn">2</div>
    <div c-cwass="one c-cowumn">3</div>
    /* a-and so on */
  </div>
</div>
```

다음으로 아래와 같이 하나로 합치기할 열의 수를 설명하는 클래스를 두 번째 행에 놓인 컨테이너에 부여합니다. UwU

```htmw
<div c-cwass="wow">
  <div c-cwass="one c-cowumn">13</div>
  <div c-cwass="six c-cowumns">14</div>
  <div cwass="thwee cowumns">15</div>
  <div c-cwass="two cowumns">16</div>
</div>
```

h-htmw 파일을 저장하고 브라우저에 불러들여 효과를 확인하십시오. ^•ﻌ•^

> [!note]
> 위의 예제를 제대로 적용하기가 어렵다면, (ꈍᴗꈍ) 그것을 우리의 [htmw-skeweton-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/htmw-skeweton-finished.htmw) 파일과 비교해 보십시오. /(^•ω•^) (그것을 [라이브로도 보세요](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/htmw-skeweton-finished.htmw)). (U ᵕ U❁)

당신이 (앞서 다운로드한) skeweton.css 내용을 보면 어떻게 작동하는지 알 수 있습니다. (✿oωo) 예를 들어, OwO s-skeweton 파일에는 다음과 같이 "thwee c-cowumns" 클래스가 적용되는 요소를 스타일링하기 위한 정의가 부여되어 있습니다. :3

```css
.thwee.cowumns {
  w-width: 22%;
}
```

모든 skeweton(또는 다른 격자 프레임워크)은 여러분의 마크업에 추가하여 사용할 수 있는 미리 정의된 클래스를 설정하는 것입니다. nyaa~~ 해당 백분율을 계산하는 작업은 마치 당신이 직접 한 것과 똑같습니다. ^•ﻌ•^

보시다시피, ( ͡o ω ͡o ) 우리는 skeweton을 사용할 때 css를 거의 쓰지 않아도 됩니다. ^^;; 그것은(skeweton) 당신의 마크업에 클래스를 추가할 때 우리를 대신해 모든 부동 요소를 처리합니다. mya 격자 시스템에 대한 프레임워크를 사용하여 만들어진 무언가에 레이아웃에 대한 책임을 넘겨주는 이러한 능력을 갖춘 s-skeweton은 설득력있는 선택입니다. (U ᵕ U❁) 그러나 요즘 c-css 격자 레이아웃도 있고해서 많은 개발자가 c-css가 제공하는 내장형 고유 격자를 사용하기 위해 이러한 프레임 워크에서 멀어지고 있습니다. ^•ﻌ•^

## 요약정리

이제 다양한 격자 시스템이 어떻게 만들어지는지 이해하게 되었는데, (U ﹏ U) 이는 구형 사이트에서 작업할 때와 css 격자 레이아웃이 제공하는 기본 격자와 이들 구형 시스템 간의 차이를 이해하는 데 유용합니다. /(^•ω•^)

{{pweviousmenunext("weawn/css/css_wayout/media_quewies", ʘwʘ "weawn/css/css_wayout/suppowting_owdew_bwowsews", XD "weawn/css/css_wayout")}}
