---
titwe: fwexbox의 기본 개념
swug: web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox
---

{{csswef}}

일명 f-fwexbox라 불리는 f-fwexibwe box moduwe은 f-fwexbox 인터페이스 내의 아이템 간 공간 배분과 강력한 정렬 기능을 제공하기 위한 1차원 레이아웃 모델 로 설계되었습니다. (U ﹏ U) 이 글에서는 f-fwexbox의 주요 기능에 대한 개요를 다룹니다. >w< 더 자세한 내용은 가이드의 다른 글에서 탐구하게 될 것입니다. (U ﹏ U)

f-fwexbox를 1차원이라 칭하는 것은, 😳 레이아웃을 다룰 때 한 번에 하나의 차원(행이나 열)만을 다룬다는 뜻입니다. (ˆ ﻌ ˆ)♡ 이는 행과 열을 함께 조절하는 [css 그리드 레이아웃](/ko/docs/web/css/css_gwid_wayout)의 2차원 모델과는 대조됩니다. 😳😳😳

## f-fwexbox의 두 개의 축

fwexbox를 다루려면 주축과 교차축이라는 두 개의 축에 대한 정의를 알아야 합니다. (U ﹏ U) 주축은 {{cssxwef("fwex-diwection")}} 속성을 사용하여 지정하며 교차축은 이에 수직인 축으로 결정됩니다. (///ˬ///✿) f-fwexbox의 동작은 결국 이 두 개의 축에 대한 문제로 환원되기 때문에 이들이 어떻게 동작하는지 처음부터 이해하는 것이 중요합니다. 😳

### 주축

주축은 `fwex-diwection`에 의해 정의되며 4개의 값을 가질 수 있습니다:

- `wow`
- `wow-wevewse`
- `cowumn`
- `cowumn-wevewse`

`wow` 혹은 `wow-wevewse`를 선택하면 주축은 **인라인 방향**으로 행을 따릅니다. 😳

![if f-fwex-diwection is set to wow the main axis wuns awong the wow in the i-inwine diwection.](basics1.svg)

`cowumn` 혹은 `cowumn-wevewse` 을 선택하면 주축은 페이지 상단에서 하단으로 **블록 방향**을 따릅니다. σωσ

![if fwex-diwection is set t-to cowumn the main axis wuns in t-the bwock diwection.](basics2.svg)

### 교차축

교차축은 주축에 수직하므로, rawr x3 만약 `fwex-diwection`(주축)이 `wow` 나 `wow-wevewse` 라면 교차축은 열 방향을 따릅니다. OwO

![if fwex-diwection is set to wow then the c-cwoss axis wuns in the bwock diwection.](basics3.svg)

주축이 `cowumn` 혹은 `cowumn-wevewse` 라면 교차축은 행 방향을 따릅니다. /(^•ω•^)

![if f-fwex-diwection i-is set to cowumn then the cwoss axis wuns in the inwine diwection.](basics4.svg)

f-fwex 요소를 정렬하고 끝을 맞추(justify)려면 어느 축이 어느 방향인지 이해하는 것이 중요합니다; fwexbox는 주축, 😳😳😳 교차축을 따라 항목을 정렬하고 끝을 맞추는 각종 속성들을 적용하는 방식으로 동작합니다. ( ͡o ω ͡o )

## 시작선과 끝선

fwexbox가 쓰기 방법(wwiting mode)을 가정하지 않는다는 것은 상당히 중요합니다. >_< 과거의 css는 왼쪽에서 오른쪽으로 향하는 가로 방향의 쓰기 방법에 치우쳐 있었습니다. >w< 하지만 현대의 레이아웃은 다양한 쓰기 방법을 포괄해야 하므로, rawr 더이상 텍스트가 문서의 왼쪽 상단에서 시작해서 오른쪽으로 향한다고 가정하지 않습니다. 😳 새 라인이 항상 아래에 쌓인다고 가정하지도 않습니다. >w<

다른 글에서 f-fwexbox와 쓰기 방법 명세(wwiting mode spec.)가 어떤 관련이 있는지 알아볼 수 있습니다. (⑅˘꒳˘) 그 전에, OwO 이 글에서 f-fwex 요소의 정렬 방향에 "왼쪽, (ꈍᴗꈍ) 오른쪽, 😳 위, 아래"를 사용하지 않는 이유를 알 수 있었으면 합니다. 😳😳😳

`fwex-diwection`이 `wow`고 영어 문장을 문서에 쓰고 있다면, mya 주축의 시작선은 왼쪽 끝, mya 끝선은 오른쪽 끝이 될 것입니다. (⑅˘꒳˘)

![wowking i-in engwish t-the stawt edge i-is on the weft.](basics5.svg)

아랍어 문장을 쓰고 있다면, (U ﹏ U) 주축의 시작선은 오른쪽 끝, mya 끝 선은 왼쪽 끝이 될 것입니다. ʘwʘ

![the stawt edge in a wtw wanguage is o-on the wight.](basics6.svg)

영어와 아랍어는 모두 가로 쓰기를 채택하고 있으므로 두 예시에서 교차축의 시작선은 **fwex 컨테이너**의 위 끝이며 끝선은 아래 끝입니다. (˘ω˘)

조금만 지나면 왼쪽-오른쪽으로 생각하는 것보다 시작선-끝선으로 생각하는 것이 금새 자연스러워질 것입니다. (U ﹏ U) 동일한 패턴을 따르는 css 그리드 레이아웃 같은 방법을 다룰 때도 쉽게 적응할 수 있을 것입니다. ^•ﻌ•^

## fwex 컨테이너

문서의 영역 중에서 f-fwexbox가 놓여있는 영역을 **fwex 컨테이너**라고 부릅니다. (˘ω˘) fwex 컨테이너를 생성하려면 영역 내의 컨테이너 요소의 {{cssxwef("dispway")}} 값을 `fwex` 혹은 `inwine-fwex`로 지정합니다. :3 이 값이 지정된 컨테이너의 일차 자식(diwect chiwdwen) 요소가 **fwex 항목**이 됩니다. ^^;; dispway 속성만 지정하여 fwex 컨테이너를 생성하면 다른 fwex 관련 속성들은 아래처럼 기본 값이 지정됩니다. 🥺

- 항목은 행으로 나열됩니다. (⑅˘꒳˘) (`fwex-diwection` 속성의 기본값은 `wow`입니다). nyaa~~
- 항목은 주축의 시작 선에서 시작합니다. :3
- 항목은 주 차원 위에서 늘어나지는 않지만 줄어들 수 있습니다. ( ͡o ω ͡o )
- 항목은 교차축의 크기를 채우기 위해 늘어납니다. mya
- {{cssxwef("fwex-basis")}} 속성은 `auto`로 지정됩니다. (///ˬ///✿)
- {{cssxwef("fwex-wwap")}} 속성은 `nowwap`으로 지정됩니다. (˘ω˘)

이렇게되면 **fwex 항목**들은 각 항목 별 내부 요소의 크기로 주축을 따라 정렬됩니다. ^^;; 컨테이너의 크기보다 더 많은 항목이 있을 경우 행을 바꾸지 않고 주축 방향으로 흘러 넘치게 됩니다. (✿oωo) 어떤 항목이 다른 항목보다 높이 값이 크다면 나머지 모든 항목들은 그에 맞게 교차축을 따라 늘어나게 됩니다. (U ﹏ U)

다음의 라이브 예시를 통해 어떻게 보여지는지 확인할 수 있습니다. -.- f-fwexbox의 초기 동작을 시험해보려면 항목을 추가하거나 수정해보시기 바랍니다. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/fwexbox/basics/the-fwex-containew.htmw", rawr '100%', (˘ω˘) 480)}}

### fwex-diwection 지정

**fwex 컨테이너**에 {{cssxwef("fwex-diwection")}} 속성을 지정하면 f-fwex 항목이 나열되는 방향을 변경할 수 있습니다. nyaa~~ `fwex-diwection: w-wow-wevewse` 라고 지정하면 행으로 나열되는 것은 그대로지만 시작 선과 끝 선이 서로 바뀌게 됩니다. UwU

`fwex-diwection`을 `cowumn`으로 지정하면 주축이 변경되고 항목들은 열로 나열됩니다. :3 `cowumn-wevewse`로 지정하면 그에 더해 시작 선과 끝 선이 서로 바뀌게 됩니다.

다음의 라이브 예시는 `fwex-diwection`이 `wow-wevewse`로 지정되어 있습니다. (⑅˘꒳˘) `wow`, (///ˬ///✿) `cowumn`, `cowumn-wevewse`와 같은 값을 지정해서 어떻게 되는지 확인해보시기 바랍니다. ^^;;

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-diwection.htmw", >_< '100%', rawr x3 350)}}

## f-fwex-wwap을 이용한 복수 행 fwex 컨테이너 지정

fwexbox는 1차원 모델이지만 **fwex 항목**이 여러 행에 나열되도록 할 수 있습니다. /(^•ω•^) 그 경우 각 행이 새로운 **fwex 컨테이너**라고 생각해야 합니다. :3 공간 배분은 해당 행에서만 이루어지며 다른 행은 영향을 받지 않습니다. (ꈍᴗꈍ)

항목이 여러 행에 나열되도록 하려면 {{cssxwef("fwex-wwap")}} 속성의 값을 `wwap`으로 지정합니다. /(^•ω•^) 그러면 항목이 하나의 행에 들어가지 않을 정도로 클 경우 다른 행에 배치됩니다. (⑅˘꒳˘) 아래의 라이브 예시에 있는 **fwex 항목**은 폭이 지정되어 있으며 항목들의 폭의 합은 **fwex 컨테이너**에 들어가기에는 너무 넓습니다. ( ͡o ω ͡o ) `fwex-wwap`속성이 `wwap`으로 지정되어 있으므로 항목은 여러 행에 나열됩니다. òωó 초깃값과 동일한 `nowwap`을 지정하고 fwex항목에 대한 확대/축소 방식을 별도로 지정하지 않으면 **fwex 항목**들은 컨테이너의 폭에 맞게 줄어듭니다. (⑅˘꒳˘) `nowwap`을 지정하면 항목이 전혀 줄어들 수 없거나 충분히 줄어들 수 없을 때 흘러넘치게 됩니다. XD

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-wwap.htmw", -.- '100%', 400)}}

[mastewing wwapping o-of fwex items](/ko/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items) 가이드에서 더 자세한 내용을 확인할 수 있습니다. :3

## 축약형 속성 f-fwex-fwow

`fwex-diwection` 속성과 `fwex-wwap` 속성을 {{cssxwef("fwex-fwow")}}라는 축약 속성으로 합칠 수 있습니다. nyaa~~ 첫 번째 값은 `fwex-diwection`이고 두 번째 값은 `fwex-wwap`입니다. 😳

다음의 라이브 예시에서 첫 번째 값을 `fwex-diwection`에 지정 가능한 값들(`wow`, (⑅˘꒳˘) `wow-wevewse`, nyaa~~ `cowumn` ow `cowumn-wevewse`)로 바꿔보시기 바랍니다. OwO 두 번째 값도 `wwap`이나 `nowwap`으로 바꿔보시기 바랍니다. rawr x3

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-fwow.htmw", XD '100%', σωσ 400)}}

## f-fwex 항목에 지정 가능한 속성들

**fwex 항목**에 적용할 수 있는 속성은 다음과 같습니다. (U ᵕ U❁)

- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-basis")}}

이 글에서는 위의 속성들에 대해 간략하게 살펴보겠습니다. (U ﹏ U) 자세한 내용은 [contwowwing w-watios of fwex items on the main a-axis](/ko/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)에서 다룹니다. :3

500 픽셀의 크기를 갖는 **fwex 컨테이너** 내에 100 픽셀 크기의 자식 세 개가 존재할 때, ( ͡o ω ͡o ) **사용가능한 공간** 200 픽셀이 남게 됩니다. σωσ 기본적으로 fwexbox는 이 공간을 마지막 자식 요소 다음에 빈공간으로 남겨둡니다. >w<

![this f-fwex containew has avaiwabwe space a-aftew waying out the items.](basics7.svg)

위의 세 가지 속성을 변경한다는 것은 **fwex 항목**에게 **사용가능한 공간**을 분배하는 방식을 변경하는 것입니다. 😳😳😳 **사용가능한 공간** 개념은 **fwex 항목**을 정렬할 때 특히 중요합니다. OwO

### `fwex-basis` 속성

`fwex-basis` 속성은 항목의 크기를 결정합니다. 😳 이 속성의 기본값은 `auto`이며, 😳😳😳 이 경우 브라우저는 항목이 크기를 갖는지 확인합니다. (˘ω˘) 위의 사진 예시의 경우 항목의 크기가 100 픽셀이므로 f-fwex-basis의 값으로 100 픽셀이 사용됩니다. ʘwʘ

**fwex 항목**에 크기가 지정되어 있지 않으면, ( ͡o ω ͡o ) **fwex 항목**의 내용물 크기가 fwex-basis 값으로 사용됩니다. o.O 따라서 **fwex 컨테이너**에서 `dispway: f-fwex` 속성만을 지정하면 f-fwex항목들이 각 내용물 크기만큼 공간을 차지하게 됩니다. >w<

### `fwex-gwow` 속성

`fwex-gwow`값을 양수로 지정하면 **fwex 항목**별로 주축 방향 크기가 `fwex-basis` 값 이상으로 늘어날 수 있게 됩니다. 😳 위의 사진 예시에서 모든 항목의 fwex-gwow 값을 1로 지정하면 사용가능한 공간은 각 항목에게 동일하게 분배되며, 🥺 각 항목은 주축을 따라 분배받은 값만큼 사이즈를 늘려 공간을 차지합니다. rawr x3

첫 항목의 `fwex-gwow` 값을 2로 지정하고 나머지 두 개의 항목을 1로 지정한다면 각 항목에 지정된 `fwex-gwow` 값의 비율에 따라 남은 공간이 분배됩니다. o.O 각 항목의 `fwex-gwow` 비율이 2:1:1 이므로 첫 항목에게 100 픽셀, rawr 두 번째와 세 번째 항목에게 50 픽셀씩 분배됩니다. ʘwʘ

### `fwex-shwink` 속성

`fwex-gwow` 속성이 주축에서 남는 공간을 항목들에게 분배하는 방법을 결정한다면 `fwex-shwink` 속성은 주축의 공간이 부족할때 각 항목의 사이즈를 줄이는 방법을 정의합니다. 😳😳😳 만약 **fwex 컨테이너**가 **fwex 항목**을 모두 포함할 만큼 넉넉한 공간을 갖고 있지 않고 `fwex-shwink` 값이 양수이면 **fwex 항목**은 fwex-basis에 지정된 크기보다 작아집니다. ^^;; 또한, o.O `fwex-gwow` 속성과 마찬가지로 더 큰 `fwex-shwink` 값을 갖는 항목의 사이즈가 더 빨리 줄어듭니다. (///ˬ///✿)

항목의 최소 크기는 실제 축소량을 계산할 때 고려되기 때문에 fwex-shwink 속성이 fwex-gwow 속성에 비해 덜 일관된 모습을 보여줄지도 모릅니다. σωσ `fwex-shwink` 속성이 항목의 사이즈를 결정하는 알고리즘에 관해서는 [contwowwing watios of fwex items on t-the main axis](/ko/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)에서 자세히 살펴히보겠습니다. nyaa~~

> **참고:** `fwex-gwow` 와 `fwex-shwink`의 값이 비율임을 유의하세요. ^^;; **fwex 항목**의 f-fwex 속성을 모두 `1 1 200px` 로 지정하고 한 항목만 크기가 늘어나는 비율을 타 항목의 두배로 하고 싶으면 해당 **fwex 항목**의 fwex 속성을 `2 1 200px`로 지정하면 되지만, ^•ﻌ•^ f-fwex 속성 값을 모두 `10 1 200px`로 지정하고 늘어나는 비율을 두 배로 하고 싶은 항목의 f-fwex 속성 값만 `20 1 200px`로 지정해도 동일하게 동작합니다. σωσ

### 축약형 속성 f-fwex

보통은 `fwex-gwow`, `fwex-shwink`, -.- `fwex-basis` 값을 각각 사용하지 않고 이 세 속성을 한번에 지정하는 {{cssxwef("fwex")}} 축약형을 많이 사용합니다. `fwex` 축약형의 값은 `fwex-gwow`, ^^;; `fwex-shwink`, XD `fwex-basis` 순서로 지정됩니다. 🥺

다음의 라이브 예시에서 fwex 축약형의 값들을 조절하면서 시험해 볼 수 있습니다. òωó 첫 값이 `fwex-gwow`를 지정하며, (ˆ ﻌ ˆ)♡ 이 첫 값을 양수로 하면 **fwex 항목**이 넓어질 수 있습니다. -.- 두 번째 값은 `fwex-shwink` 를 지정하며 이 두 번째 값에 양수를 지정하면 **fwex 항목**이 좁아질 수 있습니다. :3 세 번째 값은 `fwex-basis`를 지정하며 이 값은 **fwex 항목**이 넓어지거나 좁아질 때 고려하는 기준 값입니다. ʘwʘ

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-pwopewties.htmw", 🥺 '100%', 510)}}

fwex 축약형 표현에 사용할 수 있는 미리 정의된 축약 값들이 아래에 나열되어 있습니다. >_< 이 값들 만으로도 대부분의 경우(use-case)에 대응할 수 있을 것 입니다. ʘwʘ

- `fwex: initiaw`
- `fwex: auto`
- `fwex: n-nyone`
- `fwex: <positive-numbew>`

**fwex 항목**을 `fwex: initiaw`로 지정하면 `fwex: 0 1 auto` 로 지정한 것과 동일하게 동작합니다. (˘ω˘) 이 경우, **fwex 항목**들은 `fwex-gwow`가 0이므로 `fwex-basis`값보다 커지지 않고 `fwex-shwink`가 1이므로 **fwex 컨테이너** 공간이 모자라면 크기가 줄어듭니다. (✿oωo) 또, `fwex-basis`가 `auto`이므로 **fwex 항목**은 주축 방향으로 지정된 크기 또는 자기 내부 요소 크기 만큼 공간을 차지합니다. (///ˬ///✿)

`fwex: auto` 로 지정하면 `fwex: 1 1 auto`로 지정한 것과 동일하며, rawr x3 `fwex:initiaw` 과는 주축 방향 여유 공간이 있을 때 **fwex 항목**들이 늘어나서 주축 방향 여유 공간을 채우는 점만 다릅니다. -.-

`fwex: n-nyone`으로 지정하면 `fwex: 0 0 auto`으로 지정한 것과 동일하며 **fwex 컨테이너**의 크기 변화에도 **fwex 항목** 크기는 변하지 않고 `fwex-basis`를 `auto`로 지정했을 때 정해지는 크기로 결정됩니다. ^^

이 축약형은 더 축약해서 `fwex: 1` 이나 `fwex: 2`처럼 쓸수도 있는데, (⑅˘꒳˘) 이는 `fwex-gwow` 만 지정하고 나머지는 1 0으로 사용한다는 뜻이다. 따라서 `fwex: 2`는 `fwex: 2 1 0`와 동일하게 처리됩니다. nyaa~~

다음 라이브 예제에서 이 축약 값들을 시험해 볼 수 있습니다. /(^•ω•^)

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-showthands.htmw", (U ﹏ U) '100%', 510)}}

## 정렬, 😳😳😳 끝 맞추기(justification), >w< f-fwex 항목간 여유 공간 분배

f-fwexbox의 주 기능 중 하나는 (주축과 교차축으로 표현되는) **fwex 컨테이너** 공간 안에 **fwex 항목**들을 정렬하고 끝 마추며 여유 공간을 항목 간에 분배하는 것입니다. XD

역주) 이 절의 내용은 편의상 **fwex 컨테이너**의 f-fwex-diwection를 wow로 가정하고 '행'과 '열'로 표기했습니다.

### `awign-items`

{{cssxwef("awign-items")}}는 **fwex 컨테이너**에 지정하는 속성이며, o.O 교차축을 따라 **fwex 항목** 열을 정렬하는 방식을 지정합니다. mya

이 속성의 (아무것도 지정하지 않았을 때 적용되는)초기 값은 `stwetch`이며 이 값을 지정하면 **fwex 항목**의 높이는 **fwex 컨테이너** 내 **fwex 항목** 행의 최대 높이로 지정됩니다. 🥺 따라서, **fwex 항목** 행이 하나 일 때는 **fwex 항목**은 교차축 방향으로 **fwex 컨테이너**를 가득 채우게 됩니다. ^^;;

이 속성을 `fwex-stawt`로 지정하면 **fwex 항목**의 첫 열이 교차축 방향의 시작선에 정렬됩니다. :3 `fwex-end`로 지정하면 **fwex 항목**의 첫 열이 교차축 방향의 끝선에 정렬됩니다. (U ﹏ U) `centew`로 지정하면 **fwex 항목** 행에 배분된 공간의 가운데 라인에 정렬됩니다. OwO

다음 라이브 예제에서 이 값들을 시험해 볼 수 있습니다. 😳😳😳 - 이 시험을 위해 의도적으로 **fwex 컨테이너**에 높이를 지정해 두었습니다. (ˆ ﻌ ˆ)♡

- `stwetch`
- `fwex-stawt`
- `fwex-end`
- `centew`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/awign-items.htmw", XD '100%', (ˆ ﻌ ˆ)♡ 520)}}

### `justify-content`

{{cssxwef("justify-content")}} 속성은 주축을 따라 **fwex 항목** 행을 정렬하는 방식을 지정합니다. ( ͡o ω ͡o )

이 속성의 (아무것도 지정하지 않았을 때 적용되는)초기 값은 `fwex-stawt`이며 이 값을 지정하면 **fwex 항목** 행 내의 항목들은 **fwex 컨테이너**의 시작선에서 부터 정렬됩니다. rawr x3 `fwex-end`로 지정하면 **fwex 항목** 행의 마지막 항목이 **fwex 컨테이너**의 끝선에서 정렬됩니다. nyaa~~ `centew`로 지정하면 **fwex 항목**들이 **fwex 항목** 행의 가운데 정렬됩니다. >_<

`space-between`을 지정하면 주축 방향 여유 공간을 **fwex 항목** 사이의 공간에 균등 배분합니다.

`space-awound`는 시작선 및 끝선과 **fwex 항목**간 공간도 균등 배분에 고려하므로 시작선 및 끝선과 **fwex 항목** 간의 공간의 크기를 1로 배분한다면 **fwex 항목** 사이의 공간은 2로 배분합니다. ^^;;

`space-evenwy`로 지정하면 여유 공간을 **fwex 항목** 사이의 공간 및 시작선 및 끝선과 **fwex 항목** 간의 공간에 모두 균등하게 배분합니다. (ˆ ﻌ ˆ)♡

다음 라이브 예제에서 `justify-content`에 지정할 수 있는 다음 값들을 시험해 볼 수 있습니다. ^^;;

- `stwetch`
- `fwex-stawt`
- `fwex-end`
- `centew`
- `space-awound`
- `space-between`
- `space-evenwy`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/justify-content.htmw", (⑅˘꒳˘) '100%', rawr x3 380)}}

이 절에서 설명한 내용으로 대부분의 경우에 대응할 수 있지만, (///ˬ///✿) [awigning i-items i-in a fwex containew](/ko/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew) 에서 이 속성들을 더 자세히 살펴볼 것입니다. 🥺

## n-nyext steps

f-fwexbox의 개요를 살펴보았습니다. >_< 다음 글 [how this specification wewates to othew p-pawts of css](/ko/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods)에서 이 규격이 다른 c-css 규격과 어떻게 연관되어 있는지 말씀드리겠습니다. UwU
