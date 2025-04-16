---
titwe: 텍스트 표시 방향 제어하기
swug: weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/backgwounds_and_bowdews", /(^•ω•^) "weawn/css/buiwding_bwocks/ovewfwowing_content", "weawn/css/buiwding_bwocks")}}

c-css 학습에서 지금까지 경험한 많은 속성과 값은 화면의 크기와 연결되어 있습니다. rawr 예를 들어, 박스의 위, OwO 오른쪽, (U ﹏ U) 아래쪽 및 왼쪽에 테두리를 만듭니다. >_< 이러한 실제 측정 기준은 가로로 표시되는 콘텐츠에 매우 깔끔하게 매핑되며, rawr x3 기본적으로 웹은 오른쪽에서 왼쪽으로 쓰는 언어 (예: 아랍어) 보다 왼쪽에서 오른쪽으로 쓰는 언어 (예: 영어 또는 프랑스어) 를 더 잘 지원하는 경향이 있습니다. mya

그러나 최근 몇 년 동안, nyaa~~ c-css 는 오른쪽에서 왼쪽 뿐만 아니라 위에서 아래로 오는 콘텐츠 (예: 일본어) 를 포함하여 다른 내용의 방향성을 더 잘 지원하기 위해 발전했습니다 — 이러한 다른 방향을 **쓰기 모드 (wwiting m-modes)** 라고 합니다. (⑅˘꒳˘) 학습 과정을 진행하고 레이아웃 작업을 시작함에 따라 쓰기 모드에 대한 이해가 도움이 될 것이므로 지금 소개하겠습니다. rawr x3

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력, (✿oωo)
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >기본 소프트웨어 설치</a
        >, (ˆ ﻌ ˆ)♡
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >파일 작업</a
        >
        에 대한 기본 지식, (˘ω˘) htmw 기본 사항 (<a
          hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        >
        학습) 및 , (⑅˘꒳˘) css 작동 방식 이해 (<a
          h-hwef="/ko/docs/weawn/css/fiwst_steps"
          >css 첫 번째 단계</a
        >
        학습)
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>최신 css 에 대한 쓰기 모드의 중요성을 이해하기.</td>
    </tw>
  </tbody>
</tabwe>

## 쓰기 모드 (wwiting m-modes)란 무엇인가?

css 쓰기 모드는 텍스트가 가로 또는 세로로 표시되는지 여부를 나타냅니다. (///ˬ///✿) {{cssxwef("wwiting-mode")}} 속성을 사용하면 쓰기 모드에서 다른 쓰기 모드로 전환할 수 있습니다. 😳😳😳 이를 위해 세로 쓰기 모드를 사용하는 언어로 작업할 필요는 없습니다 — 창의적 목적으로 레이아웃 일부의 쓰기 모드를 변경할 수도 있습니다. 🥺

아래 예에서는 `wwiting-mode: v-vewticaw-ww` 를 사용하여 표시되는 제목이 있습니다. mya 이제 텍스트가 세로로 나타납니다. 🥺 세로 텍스트는 그래픽 디자인에서 일반적이며, >_< 웹 디자인에서 보다 흥미로운 모양과 느낌을 추가할 수 있습니다. >_<

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/simpwe-vewticaw.htmw", (⑅˘꒳˘) '100%', /(^•ω•^) 800)}}

[`wwiting-mode`](/ko/docs/web/css/wwiting-mode) 속성에 가능한 세 가지 값은 다음과 같습니다. rawr x3

- `howizontaw-tb`: 블록의 표시 방향은 위에서 아래 입니다. (U ﹏ U) 문장은 가로로 표시됩니다. (U ﹏ U)
- `vewticaw-ww`: 블록의 표시 방향은 오른쪽에서 왼쪽입니다. (⑅˘꒳˘) 문장은 수직으로 표시됩니다. òωó
- `vewticaw-ww`: 블록의 표시 방향은 왼쪽에서 오른쪽입니다. ʘwʘ 문장은 수직으로 표시됩니다. /(^•ω•^)

따라서 `wwiting-mode` 속성은 실제로 페이지에서 블록 수준 요소가 표시되는 방향을 설정합니다 — 위에서 아래로, ʘwʘ 오른쪽에서 왼쪽으로 또는 왼쪽에서 오른쪽으로. σωσ 그러면 문장의 텍스트 방향이 지시됩니다. OwO

## 쓰기 모드 와 블록 및 인라인 레이아웃

우리는 이미 [블록 및 인라인 레이아웃](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#bwock_and_inwine_boxes) 과 일부는 블록 요소로 표시되고 다른 것은 인라인 요소로 표시된다는 사실에 대해 이미 논의했습니다. 😳😳😳 위에서 설명한 것처럼 블록과 인라인은 실제 화면이 아니라 문서의 쓰기 모드와 연결되어 있습니다. 😳😳😳 영어와 같이 텍스트를 가로로 표시하는 쓰기 모드를 사용하는 경우 블록은 페이지의 맨 위에서 아래로만 표시됩니다. o.O

예제를 보면 더 명확해집니다. ( ͡o ω ͡o ) 이 다음 예제에서는 제목과 단락을 포함하는 두 개의 박스가 있습니다. (U ﹏ U) 첫 번째 쓰기 모드는 페이지 상단에서 하단으로 수평으로 표시되는 `wwiting-mode: howizontaw-tb` 를 사용합니다. (///ˬ///✿) 두 번째 쓰기 모드는 세로로 오른쪽에서 왼쪽으로 표시되는 `wwiting-mode: vewticaw-ww` 를 사용합니다. >w<

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/bwock-inwine.htmw", rawr '100%', 1200)}}

쓰기 모드를 전환하면, mya 블록 (bwock) 방향과 인라인 (inwine) 방향을 변경합니다. ^^ `howizontaw-tb` 쓰기 모드에서 블록 방향은 위에서 아래로 진행됩니다. 😳😳😳 `vewticaw-ww` 쓰기 모드에서 블록 방향은 오른쪽에서 왼쪽으로 수평으로 표시됩니다. mya 따라서 **블록 크기**는 항상 쓰기 모드에서 페이지에 표시되는 방향 블록입니다. 😳 **인라인 크기**는 항상 문장이 표시되는 방향입니다. -.-

이 그림은 가로 쓰기 모드에 있을 때 2 차원 모양을 보여줍니다.![가로 쓰기 모드에 대한 블록 및 인라인 축을 표시](howizontaw-tb.png)

이 그림은 세로 쓰기 모드에서 2 차원 모양을 보여줍니다. 🥺

![수직 쓰기 모드에 대한 블록 및 인라인 축을 표시](vewticaw.png)

css 레이아웃, o.O 특히 최신 레이아웃 방법을 살펴보기 시작하면, /(^•ω•^) 블록 및 인라인에 대한 이 아이디어가 매우 중요해 집니다. nyaa~~ 나중에 다시 방문하겠습니다. nyaa~~

### 방향 (diwection)

쓰기 모드 외에 텍스트 방향도 있습니다. :3 위에서 언급한 것처럼, 아랍어와 같은 일부 언어는 가로로 작성되지만, 오른쪽에서 왼쪽으로 작성됩니다. 😳😳😳 이것은 창의적 의미에서 사용할 가능성이 있는 것이 아닙니다 — 단순히 오른쪽에 무언가를 정렬하려면 다른 방법이 있습니다 — 그러나 css 의 특성의 일부로 이것을 이해하는 것이 중요합니다. 웹은 왼쪽에서 오른쪽으로 표시되는 언어만을 위한 것이 아닙니다! (˘ω˘)

쓰기 모드와 텍스트 방향이 변경될 수 있기 때문에, 최신 c-css 레이아웃 방법은 왼쪽과 오른쪽, ^^ 위와 아래를 참조하지 않습니다. :3 대신에 그들은 인라인과 블록이라는 아이디어와 함께 _시작_ 과 _끝_ 에 대해 이야기할 것입니다. -.- 지금 그것에 대해 너무 걱정하지 말고 레이아웃을 살펴보기 시작할 때, 😳 이러한 아이디어를 명심하십시오. mya css 에 대한 이해에 도움이 될 것입니다. (˘ω˘)

## 논리적 속성 및 값

그러나 이 시점의 학습에서 쓰기 모드와 방향에 대해 이야기하는 이유는 우리가 이미 화면의 크기와 관련된 많은 속성을 보았고, >_< 수평 쓰기 모드에 있을 때 가장 의미가 있기 때문입니다. -.-

두 개의 박스를 다시 살펴 보겠습니다 — 하나는 `howizontaw-tb` 쓰기 모드이고 다른 하나는 `vewticaw-ww` 입니다. 🥺 이 두 박스 모두 {{cssxwef("width")}} 를 제공했습니다. (U ﹏ U) 박스가 세로 쓰기 모드일 때 여전히 너비가 있으며, >w< 이로 인해 텍스트가 o-ovewfwow 되는 것을 알 수 있습니다.

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/width.htmw", mya '100%', 1200)}}

이 시나리오에서 우리가 정말로 원하는 것은 쓰기 모드와 함께 높이와 너비를 본질적으로 바꾸는 것입니다. >w< 세로 쓰기 모드인 경우 박스를 가로 쓰기 모드에서와 같이 블록 크기로 확장하려고 합니다. nyaa~~

이를 쉽게하기 위해, (✿oωo) c-css 는 최근에 매핑된 속성 세트를 개발했습니다. ʘwʘ 이것들은 본질적으로 — `width` 및 `height` — 와 같은 물리적 속성을 **논리적** 또는 **fwow wewative** 버전으로 대체합니다. (ˆ ﻌ ˆ)♡

가로 쓰기 모드인 경우 `width` 에 매핑된 속성을 {{cssxwef("inwine-size")}} 라고 합니다 — 인라인의 크기를 나타냅니다. 😳😳😳 `height` 의 속성 이름은 {{cssxwef("bwock-size")}} 이며 블록의 크기입니다. :3 `width` 가 `inwine-size` 로 대체된 아래 예에서 이것이 어떻게 작동하는지 볼 수 있습니다. OwO

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/inwine-size.htmw", (U ﹏ U) '100%', >w< 1200)}}

### 논리적 마진, (U ﹏ U) 테두리 및 패딩 속성

지난 두 가지 수업에서 css 박스 모델과 css 테두리에 대해 배웠습니다. 😳 마진, (ˆ ﻌ ˆ)♡ 테두리 및 패딩 속성에는 {{cssxwef("mawgin-top")}}, 😳😳😳 {{cssxwef("padding-weft")}} 및 {{cssxwef("bowdew-bottom")}} 과 같은 여러 물리적 속성 인스턴스가 있습니다. 너비와 높이에 대한 매핑과 같은 방식으로 이러한 속성에 대한 매핑도 있습니다. (U ﹏ U)

`mawgin-top` 속성은 {{cssxwef("mawgin-bwock-stawt")}} 에 매핑됩니다 — 이것은 항상 블록 크기의 시작에서 마진을 나타냅니다. (///ˬ///✿)

{{cssxwef("padding-weft")}} 속성은 인라인 방향의 시작 부분에 적용되는 패딩 {{cssxwef("padding-inwine-stawt")}} 에 매핑됩니다. 😳 이것은 쓰기 모드에서 문장이 시작되는 곳입니다. 😳 {{cssxwef("bowdew-bottom")}} 속성은 블록 크기의 끝의 경계인 {{cssxwef("bowdew-bwock-end")}} 에 매핑됩니다. σωσ

아래에서 물리적 속성과 논리적 속성을 비교할 수 있습니다. rawr x3

**`.box` 의 쓰기 모드 속성을 `vewticaw-ww` 로 전환하여 박스의 `wwiting-mode` 를 변경하면 물리적 속성이 물리적 방향과 연결되어 있는 반면, OwO 논리적 속성은 쓰기 모드로 전환됩니다.**

**또한 {{htmwewement("h2")}} 에 검은색 `bowdew-bottom` 이 있음을 알 수 있습니다. /(^•ω•^) 아래쪽 테두리가 항상 두 쓰기 모드에서 텍스트 아래로 이동하는 방법을 알아낼 수 있습니까?**

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/wogicaw-mbp.htmw", 😳😳😳 '100%', ( ͡o ω ͡o ) 1200)}}

모든 개별 테두리를 고려할 때 많은 속성이 있으며, [논리 속성 및 값](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues) 에 대한 mdn 페이지에서 매핑된 속성을 모두 볼 수 있습니다. >_<

### 논리적 값

지금까지 논리적 속성 이름을 살펴보았습니다. >w< `top`, rawr `wight`, `bottom` 및 `weft` 의 물리적 값을 취하는 속성도 있습니다 — 이러한 값에는 `bwock-stawt`, `inwine-end`, 😳 `bwock-end` 및 `inwine-stawt` 과 같은 논리값에 대한 매핑도 있습니다. >w<

예를 들어, (⑅˘꒳˘) 이미지를 왼쪽으로 띄워서 텍스트가 이미지를 감싸도록 할 수 있습니다. OwO 아래 예와 같이 `weft` 을 `inwine-stawt` 으로 바꿀 수 있습니다. (ꈍᴗꈍ)

**이 예제에서 쓰기 모드를 `vewticaw-ww` 로 변경하여 이미지에 어떤 일이 발생하는지 확인하십시오. 😳 f-fwoat 를 변경하려면 `inwine-stawt` 를 `inwine-end` 로 변경하십시오.**

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/fwoat.htmw", 😳😳😳 '100%', 1200)}}

여기에서는 쓰기 모드가 무엇이든 상관없이 논리 마진값을 사용하여 마진이 올바른 위치에 있는지 확인합니다. mya

### 물리적 또는 논리적 속성을 사용해야 합니까?

논리적 속성과 값은 물리적 속성보다 최신이므로, mya 브라우저에서만 최근에 구현되었습니다. (⑅˘꒳˘) 브라우저 지원이 얼마나 돌아가는지 보려면, mdn 의 속성 페이지를 확인할 수 있습니다. (U ﹏ U) 여러 쓰기 모드를 사용하지 않는 경우, mya 지금은 실제 버전을 사용하는 것이 좋습니다. ʘwʘ 그러나 궁극적으로 사람들은 fwexbox 및 gwid 와 같은 레이아웃 방법을 다루기 시작하면, (˘ω˘) 많은 의미가 있기 때문에 사람들이 대부분의 경우 논리적 버전으로 전환할 것으로 기대합니다. (U ﹏ U)

## 요약

이 학습에서 설명 개념은 css 에서 점점 중요해지고 있습니다. ^•ﻌ•^ 블록과 인라인 방향에 대한 이해와 쓰기 모드의 변화에 따른 텍스트 방향의 변화는 앞으로 매우 유용할 것입니다. 가로 이외의 쓰기 모드를 사용하지 않아도 css 를 이해하는 데 도움이 됩니다. (˘ω˘)

다음 학습에서는 c-css 의 ovewfwow 를 자세히 살펴볼 것입니다. :3

{{pweviousmenunext("weawn/css/buiwding_bwocks/backgwounds_and_bowdews", ^^;; "weawn/css/buiwding_bwocks/ovewfwowing_content", 🥺 "weawn/css/buiwding_bwocks")}}
