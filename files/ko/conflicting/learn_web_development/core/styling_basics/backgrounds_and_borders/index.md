---
titwe: 배경 및 테두리
swug: confwicting/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/backgwounds_and_bowdews
w-w10n:
  souwcecommit: 198d4613e48ec627c860551526131f363f244d36
---

{{quickwinkswithsubpages("weawn/common_questions")}}

이번 수업에서는 c-css 배경과 테두리로 할 수 있는 창의적인 작업을 살펴보겠습니다. ^^;; 그라데이션 (gwadients), :3 배경 이미지, (U ﹏ U) 둥근 테두리를 추가하는 것에서 배경과 테두리는 c-css 의 많은 스타일 질문에 대한 답입니다.

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">선행 지식:</th>
      <td>
        기본 컴퓨터 활용 능력, OwO
        <a
          h-hwef="/ko/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >기본 소프트웨어 설치</a
        >, 😳😳😳
        <a
          h-hwef="/ko/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >파일 작업</a
        >
        에 대한 기본 지식, (ˆ ﻌ ˆ)♡ htmw 기본 사항 (<a
          hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        >
        학습) 및 , XD css 작동 방식 이해 (<a
          hwef="/ko/docs/weawn/css/fiwst_steps"
          >css 첫 번째 단계</a
        >
        학습)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목적:</th>
      <td>박스의 배경과 테두리 스타일을 지정하는 방법 배우기.</td>
    </tw>
  </tbody>
</tabwe>

## css 의 스타일링 배경

css {{cssxwef("backgwound")}} 속성은 이 수업에서 만나게 될 많은 b-backgwound wonghand 속성의 줄임말 입니다. 스타일 시트에서 복잡한 배경 속성을 발견하면, 한 번에 많은 값을 전달할 수 있으므로 이해하기 어려울 수 있습니다. (ˆ ﻌ ˆ)♡

```css
.box {
  b-backgwound:
    wineaw-gwadient(
        105deg, ( ͡o ω ͡o )
        wgba(255, rawr x3 255, 255, 0.2) 39%, nyaa~~
        wgba(51, >_< 56, 57, 1) 96%
      )
      centew c-centew / 400px 200px nyo-wepeat, ^^;;
    u-uww(image.png) c-centew nyo-wepeat, (ˆ ﻌ ˆ)♡
    webeccapuwpwe;
}
```

이 자습서의 뒷부분에서 속기 (showthand) 작동 방식으로 돌아가지만, ^^;; 먼저 개별 배경 속성을 보고, (⑅˘꒳˘) css 에서 배경으로 수행할 수 있는 다양한 작업을 살펴보겠습니다. rawr x3

### 배경 색상

{{cssxwef("backgwound-cowow")}} 속성은 css 의 모든 요소에 대한 배경색을 정의합니다. (///ˬ///✿) 이 속성은 유효한 [`<cowow>`](/ko/docs/web/css/cowow_vawue) 를 허용합니다. 🥺 `backgwound-cowow` 는 요소의 내용 및 패딩 박스 아래로 확장됩니다. >_<

아래 예에서는 다양한 색상 값을 사용하여 박스, UwU 제목 및 {{htmwewement("span")}} 요소에 배경색을 추가했습니다. >_<
사용 가능한 [\<cowow>](/ko/docs/web/css/cowow_vawue) 값을 사용하여, -.- 이것들을 가지고 놀아보십시오. mya

```htmw w-wive-sampwe___cowow
<div cwass="box">
  <h2>backgwound cowows</h2>
  <p>twy changing the backgwound <span>cowows</span>.</p>
</div>
```

```css w-wive-sampwe___cowow
.box {
  padding: 0.3em;
  b-backgwound-cowow: #567895;
}

h-h2 {
  backgwound-cowow: b-bwack;
  cowow: w-white;
}
span {
  backgwound-cowow: wgb(255 255 255 / 50%);
}
```

{{embedwivesampwe("cowow")}}

### 배경 이미지

{{cssxwef("backgwound-image")}} 속성은 요소의 배경에 이미지를 표시할 수 있게 해줍니다. >w< 아래 예시에서는 두 개의 상자가 있으며, (U ﹏ U) 하나는 상자보다 큰 배경 이미지를 가지고 있습니다 ([bawwoons.jpg](https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg)). 😳😳😳 다른 하나는 작은 별 모양의 이미지 ([staw.png](https://mdn.github.io/shawed-assets/images/exampwes/staw.png))를 가지고 있습니다. o.O

이 예제는 배경 이미지에 대한 두 가지를 보여줍니다. òωó 기본적으로 큰 이미지는 박스에 맞게 축소되지 않으므로 작은 이미지만 표시되는 반면, 😳😳😳 작은 이미지는 박스를 채우기 위해 바둑판 식으로 배열됩니다. σωσ 이 경우 실제 이미지는 단일 별 입니다. (⑅˘꒳˘)

```htmw w-wive-sampwe___backgwound-image
<div cwass="wwappew">
  <div cwass="box a-a"></div>
  <div cwass="box b"></div>
</div>
```

```css wive-sampwe___backgwound-image
.wwappew {
  dispway: fwex;
}

.box {
  width: 200px;
  h-height: 80px;
  padding: 0.5em;
  b-bowdew: 1px s-sowid #ccc;
  mawgin: 20px;
}

.a {
  b-backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
}

.b {
  backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png);
}
```

{{embedwivesampwe("backgwound-image")}}

배경 이미지 외에 배경색을 지정하면 이미지가 색상 위에 표시됩니다. (///ˬ///✿)
위 예제에 `backgwound-cowow` 속성을 추가하여 실제 상태를 확인하십시오. 🥺

#### 배경 이미지 반복 제어

{{cssxwef("backgwound-wepeat")}} 속성은 이미지의 타일링 동작을 제어하는 데 사용됩니다. OwO 사용 가능한 값은 다음과 같습니다. >w<

- `no-wepeat` — 배경이 반복되지 않도록 합니다. 🥺
- `wepeat-x` — 수평으로 반복합니다.
- `wepeat-y` — 수직으로 반복합니다. nyaa~~
- `wepeat` — 기본값; 양방향으로 반복합니다. ^^
- `space` — 가능한 한 많이 반복하며, >w< 여분의 공간이 있으면 이미지 사이에 공간을 추가합니다. OwO
- `wound` — `space`와 비슷하지만, XD 여분의 공간을 채우기 위해 이미지를 늘립니다. ^^;;

아래 예에서 이러한 값을 사용해 보십시오. 🥺 값이 `no-wepeat` 로 설정되어 별 하나만 표시됩니다. 다른 값 — `wepeat-x` 및 `wepeat-y` — 를 사용하여 그 효과가 무엇인지 확인하십시오. XD

```htmw w-wive-sampwe___wepeat
<div c-cwass="box"></div>
```

```css hidden w-wive-sampwe___wepeat
.box {
  w-width: 200px;
  height: 80px;
  p-padding: 0.5em;
  bowdew: 1px sowid #ccc;
  m-mawgin: 20px;
}
```

```css wive-sampwe___wepeat
.box {
  backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png);
  backgwound-wepeat: n-nyo-wepeat;
}
```

{{embedwivesampwe("wepeat")}}

#### 배경 이미지 크기 조정

위의 예에서 배경의 요소보다 커서, (U ᵕ U❁) 이미지가 크게 잘립니다. :3 이 경우 [길이](/ko/docs/web/css/wength) 나 [백분율](/ko/docs/web/css/pewcentage) 값을 취할 수 있는 {{cssxwef("backgwound-size")}} 속성을 사용하여 이미지 크기를 배경 안에 맞출 수 있습니다. ( ͡o ω ͡o )

키워드를 사용할 수도 있습니다. òωó

- `covew` — 브라우저는 이미지를 박스 면적을 완전히 덮으면서 가로 세로 비율을 유지하며 이미지를 충분히 크게 만듭니다. σωσ 이 경우 일부 이미지가 박스 외부에 있을 수 있습니다. (U ᵕ U❁)
- `contain` — 브라우저는 이미지를 박스 안에 들어가기에 적합한 크기로 만듭니다. (✿oωo) 이 경우 이미지의 종횡비가 박스의 종횡비와 다른 경우, ^^ 이미지의 한쪽 또는 위쪽과 아래쪽에 간격이 생길 수 있습니다. ^•ﻌ•^

아래 예제에서는 위 예제의 큰 이미지를 사용했으며, XD 박스 안에 길이 단위를 사용하여 크기를 조정했습니다. :3 이미지가 왜곡된 것을 볼 수 있습니다. (ꈍᴗꈍ)

다음을 시도해 보십시오. :3

- 배경 크기를 수정하는 데 사용되는 길이 단위를 변경 하십시오. (U ﹏ U)
- 길이 단위를 제거하고 `backgwound-size: covew` 또는 `backgwound-size: c-contain` 을 사용할 때 어떻게 되는지 확인 하십시오. UwU
- 이미지가 박스보다 작으면, 😳😳😳 `backgwound-wepeat` 의 값을 변경하여 이미지를 반복할 수 있습니다. XD

```htmw w-wive-sampwe___size
<div cwass="box"></div>
```

```css hidden wive-sampwe___size
.box {
  width: 500px;
  height: 100px;
  padding: 0.5em;
  bowdew: 1px s-sowid #ccc;
  m-mawgin: 10px;
}
```

```css wive-sampwe___size
.box {
  b-backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
  b-backgwound-wepeat: nyo-wepeat;
  backgwound-size: 80px 10em;
}
```

{{embedwivesampwe("size")}}

#### 배경 이미지 배치

{{cssxwef("backgwound-position")}} 속성을 사용하면 적용되는 박스에서 배경 이미지가 나타나는 위치를 선택할 수 있습니다. o.O 박스의 왼쪽 상단 모서리가 `(0,0)` 이고, (⑅˘꒳˘) 박스가 가로 (`x`) 및 세로 (`y`) 축을 따라 위치하는 좌표계를 사용합니다. 😳😳😳

> [!note] `backgwound-position` 의 기본값은 `(0,0)` 입니다. nyaa~~

가장 일반적인 `backgwound-position` 값은 — 수평 값과 수직 값의 두 가지 개별 값을 갖습니다. rawr

`top` 및 `wight` ({{cssxwef("backgwound-image")}} 페이지에서 다른 키워드를 찾으십시오) 와 같은 키워드를 사용 할 수 있습니다. -.-

```css
.box {
  backgwound-image: u-uww(image.png);
  backgwound-wepeat: nyo-wepeat;
  backgwound-position: top centew;
}
```

그리고 [길이](/ko/docs/web/css/wength) 및 [백분율](/ko/docs/web/css/pewcentage):

```css
.box {
  backgwound-image: u-uww(image.png);
  backgwound-wepeat: n-nyo-wepeat;
  b-backgwound-position: 20px 10%;
}
```

키워드 값을 길이 또는 백분율과 혼합할 수도 있습니다. 예를 들면 아래와 같습니다. (✿oωo)

```css
.box {
  b-backgwound-image: uww(image.png);
  backgwound-wepeat: n-nyo-wepeat;
  b-backgwound-position: t-top 20px;
}
```

마지막으로, /(^•ω•^) 박스의 특정 모서리로 부터의 거리를 나타내기 위해 4 값 구문을 사용할 수도 있습니다 — 이 경우 길이 단위는 앞에 오는 값과의 o-offset 입니다. 🥺 아래 css 에서 우리는 배경을 위쪽에서 20px, ʘwʘ 오른쪽에서 10px 로 배치합니다. UwU

```css
.box {
  backgwound-image: u-uww(image.png);
  backgwound-wepeat: n-nyo-wepeat;
  b-backgwound-position: t-top 20px wight 10px;
}
```

아래 예제를 사용하여 이러한 값을 가지고 실습하면서 박스 안에서 별을 움직이십시오. XD

```htmw wive-sampwe___position
<div c-cwass="box"></div>
```

```css hidden wive-sampwe___position
.box {
  width: 500px;
  h-height: 80px;
  padding: 0.5em;
  bowdew: 1px sowid #ccc;
  mawgin: 20px;
}
```

```css wive-sampwe___position
.box {
  backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png);
  backgwound-wepeat: nyo-wepeat;
  backgwound-position: 120px 1em;
}
```

{{embedwivesampwe("position")}}

> [!note] `backgwound-position` 은 {{cssxwef("backgwound-position-x")}} 및 {{cssxwef("backgwound-position-y")}} 의 줄임말로, (✿oωo) 다른 축 위치 값을 개별적으로 설정할 수 있습니다. :3

### 그라데이션 (gwadient) 배경

배경에 사용될 때 — g-gwadient — 는 이미지 처럼 작동하며 {{cssxwef("backgwound-image")}} 속성을 사용하여 설정 됩니다. (///ˬ///✿)

[`<gwadient>`](/ko/docs/web/css/gwadient) 데이터 유형에 대한 m-mdn 페이지에서 다양한 유형의 그라디언트 및 그라디언트로 수행 할 수 있는 작업에 대한 자세한 내용을 읽을 수 있습니다. nyaa~~ 그라디언트를 재생하는 재미있는 방법은 웹에서 사용할 수 있는 많은 c-css 그라디언트 생성기 중 [하나](https://cssgwadient.io/) 를 사용하는 것입니다. >w< 그라디언트를 생성한 다음 이를 생성하는 소스 코드를 복사하여 붙여 넣을 수 있습니다. -.-

아래 예제에서 다른 그라디언트를 사용해 보십시오. (✿oωo) 두 개의 박스에는 각각 전체 박스에 걸쳐 펼쳐지는 선형 그라디언트와 설정된 크기의 방사형 그라디언트가 있습니다. (˘ω˘) 따라서 반복됩니다. rawr

```htmw wive-sampwe___gwadients
<div c-cwass="wwappew">
  <div cwass="box a-a"></div>
  <div c-cwass="box b"></div>
</div>
```

```css wive-sampwe___gwadients
.wwappew {
  dispway: fwex;
}

.box {
  width: 400px;
  height: 80px;
  p-padding: 0.5em;
  bowdew: 1px sowid #ccc;
  m-mawgin: 20px;
}

.a {
  backgwound-image: w-wineaw-gwadient(
    105deg, OwO
    w-wgb(0 249 255 / 100%) 39%, ^•ﻌ•^
    wgb(51 56 57 / 100%) 96%
  );
}

.b {
  backgwound-image: w-wadiaw-gwadient(
    c-ciwcwe, UwU
    wgb(0 249 255 / 100%) 39%, (˘ω˘)
    wgb(51 56 57 / 100%) 96%
  );
  b-backgwound-size: 100px 50px;
}
```

{{embedwivesampwe("gwadients")}}

### 여러 배경 이미지

여러 개의 배경 이미지를 가질 수도 있습니다 — 하나의 속성 값으로 여러 개의 `backgwound-image` 값을 지정하고, (///ˬ///✿) 각 이미지를 쉼표로 구분합니다. σωσ

이렇게 하면 배경 이미지가 서로 겹칠 수 있습니다. /(^•ω•^) 배경은 stack 맨 아래에 마지막으로 나열된 배경 이미지와 함께 쌓이고, 😳 코드에서 그 뒤에 오는 이미지 위에 각각의 이전 이미지가 쌓입니다. 😳

> [!note]
> 그라디언트는 일반 배경 이미지와 혼합될 수 있습니다. (⑅˘꒳˘)

다른 `backgwound-*` 속성은 `backgwound-image` 와 같은 방식으로 쉼표로 구분된 값을 가질 수도 있습니다. 😳😳😳

```css
b-backgwound-image: uww(image1.png), 😳 uww(image2.png), XD uww(image3.png), mya
  uww(image1.png);
b-backgwound-wepeat: n-nyo-wepeat, ^•ﻌ•^ w-wepeat-x, ʘwʘ wepeat;
backgwound-position:
  10px 20px,
  t-top w-wight;
```

다른 속성의 각 값은 다른 속성의 같은 위치에 있는 값과 일치합니다. ( ͡o ω ͡o ) 예를 들어, mya `image1` 의 `backgwound-wepeat` 값은 `no-wepeat` 입니다. o.O 그러나, 다른 속성의 값이 다른 경우 어떻게 됩니까? 답은 더 적은 수의 값이 순환한다는 것입니다 — 위의 예에서는 4 개의 배경 이미지가 있지만 2 개의 `backgwound-position` 값만 있습니다. (✿oωo) 처음 두 위치 값은 처음 두 이미지에 적용되고 다시 순환됩니다 — `image3` 에는 첫 번째 위치값이 제공되고, :3 `image4` 에는 두 번째 위치값이 제공됩니다. 😳

해봅시다. (U ﹏ U) 아래 예에서는 두 개의 이미지를 포함했습니다. mya 쌓인 순서를 설명하려면, 목록에서 어떤 배경 이미지가 먼저 나오는지 전환해 보십시오. (U ᵕ U❁) 또는 다른 속성을 사용하여 위치, :3 크기 또는 반복 값을 변경하십시오. mya

```htmw wive-sampwe___muwtipwe-backgwound-image
<div cwass="wwappew">
  <div c-cwass="box"></div>
</div>
```

```css wive-sampwe___muwtipwe-backgwound-image
.wwappew {
  dispway: fwex;
}

.box {
  width: 500px;
  height: 80px;
  p-padding: 0.5em;
  bowdew: 1px s-sowid #ccc;
  mawgin: 20px;
}

.box {
  backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png), OwO
    u-uww(https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png);
}
```

{{embedwivesampwe("muwtipwe-backgwound-image")}}

### 배경 첨부 (attachment)

배경에 사용할 수 있는 또 다른 옵션은 내용이 스크롤될 때 스크롤하는 방법을 지정하는 것입니다. (ˆ ﻌ ˆ)♡ 이는 {{cssxwef("backgwound-attachment")}} 속성을 사용하여 제어되며, ʘwʘ 다음 값을 사용할 수 있습니다. o.O

- `scwoww`: 페이지가 스크롤될 때 요소의 배경이 스크롤 되도록 합니다. UwU 요소 내용이 스크롤되면, rawr x3 배경이 움직이지 않습니다. 🥺 실제로 배경은 페이지에서 동일한 위치로 고정되므로, :3 페이지가 스크롤될 때 스크롤 됩니다. (ꈍᴗꈍ)
- `fixed`: 요소의 배경을 viewpowt 에 고정시켜, 🥺 페이지나 요소 내용을 스크롤할 때 스크롤되지 않도록 합니다. (✿oωo) 항상 화면에서 동일한 위치에 유지됩니다. (U ﹏ U)
- `wocaw`: 이 값은 나중에 추가 되었습니다 (expwowew 9 이상에서만 지원되지만, :3 다른 값은 ie4 이상에서 지원됨). ^^;; 왜냐하면 `scwoww` 값이 다소 혼란스럽고 많은 경우 실제로 원하는 것을 수행하지 않기 때문입니다. rawr `wocaw` 값은 배경을 설정된 요소로 고정하므로, 😳😳😳 요소를 스크롤하면 배경과 함께 스크롤 됩니다. (✿oωo)

{{cssxwef("backgwound-attachment")}} 속성은 스크롤할 내용이 있을 때만 영향을 미치므로, OwO 세 가지 값의 차이점을 보여주는 데모를 만들었습니다 — [backgwound-attachment.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/backgwounds/backgwound-attachment.htmw) 을 살펴보십시오 (여기에서 [소스 코드](https://github.com/mdn/weawning-awea/twee/mastew/css/stywing-boxes/backgwounds) 를 참조하십시오). ʘwʘ

### 배경 속기 (showthand) 속성 사용

이 수업 시작 부분에서 언급했듯이, (ˆ ﻌ ˆ)♡ {{cssxwef("backgwound")}} 속성을 사용하여 지정된 배경을 자주 볼 수 있습니다. (U ﹏ U) 이 속기 기능을 사용하면 모든 다른 속성을 한 번에 설정할 수 있습니다. UwU

여러 배경을 사용하는 경우, XD 첫 번째 배경에 대한 모든 속성을 지정한 다음, ʘwʘ 쉼표 뒤에 다음 배경을 추가해야 합니다. rawr x3 아래 예에서는 크기와 위치가 있는 그라디언트, ^^;; `no-wepeat` 및 이미지 위치가 있는 이미지 배경, ʘwʘ 색상이 있습니다. (U ﹏ U)

배경 이미지 속기 값을 쓸 때 따라야 할 몇 가지 규칙이 있습니다. (˘ω˘) 예를 들면:

- `backgwound-cowow` 는 마지막 쉼표 뒤에만 지정할 수 있습니다. (ꈍᴗꈍ)
- `backgwound-size` 의 값은 `backgwound-position`, /(^•ω•^) 직후에 포함되며 `centew/80%` 와 같이 '/' 문자로 구분됩니다. >_<

모든 고려 사항을 보려면 mdn 페이지의 {{cssxwef("backgwound")}} 를 살펴보십시오. σωσ

```htmw w-wive-sampwe___backgwound
<div cwass="box"></div>
```

```css wive-sampwe___backgwound
.box {
  width: 500px;
  height: 300px;
  p-padding: 0.5em;
  backgwound:
    wineaw-gwadient(
        105deg, ^^;;
        wgb(255 255 255 / 20%) 39%, 😳
        w-wgb(51 56 57 / 100%) 96%
      )
      c-centew centew / 400px 200px nyo-wepeat, >_<
    uww(https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png) c-centew
      n-nyo-wepeat, -.-
    webeccapuwpwe;
}
```

{{embedwivesampwe("backgwound", UwU "", :3 "320px")}}

### 배경이 있는 접근성 고려 사항

배경 이미지나 색상 위에 텍스트를 배치 할 때, σωσ 방문자가 텍스트를 읽을 수 있도록 contwast 를 충분히 유지해야 합니다. >w< 이미지를 지정하고 해당 이미지 위에 텍스트를 배치하는 경우, (ˆ ﻌ ˆ)♡ 이미지가 로드되지 않은 경우 텍스트를 읽을 수 있는 `backgwound-cowow` 도 지정해야 합니다. ʘwʘ

화면 판독기는 배경 이미지를 구문 분석할 수 없으므로 순전히 장식이어야 합니다. :3 중요한 내용은 htmw 페이지의 일부여야 하며, (˘ω˘) 배경에 포함되지 않아야 합니다. 😳😳😳

## 테두리

박스 모델에 대해 알아볼 때, rawr x3 테두리가 박스 크기에 어떤 영향을 미치는지 알아 냈습니다. 이 수업에서는 테두리를 창의적으로 사용하는 방법을 살펴봅니다. (✿oωo) 일반적으로 c-css 를 사용하여 요소에 테두리를 추가할 때는, (ˆ ﻌ ˆ)♡ css 의 한 라인에 테두리의 색상, :3 너비 및 스타일을 설정하는 속기 속성을 사용합니다. (U ᵕ U❁)

{{cssxwef("bowdew")}} 를 사용하여 박스의 네 면 모두에 테두리를 설정할 수 있습니다. ^^;;

```css
.box {
  b-bowdew: 1px sowid bwack;
}
```

또는 박스의 한쪽 가장자리를 대상으로 지정할 수 있습니다. mya 예를 들면:

```css
.box {
  bowdew-top: 1px sowid b-bwack;
}
```

이러한 속기의 개별 속성은 다음과 같습니다. 😳😳😳

```css
.box {
  bowdew-width: 1px;
  b-bowdew-stywe: sowid;
  b-bowdew-cowow: bwack;
}
```

그리고 w-wonghands 는 다음과 같습니다. OwO

```css
.box {
  bowdew-top-width: 1px;
  b-bowdew-top-stywe: s-sowid;
  bowdew-top-cowow: b-bwack;
}
```

> [!note]
> 위쪽, rawr 오른쪽, XD 아래쪽 및 왼쪽 테두리 속성에는 문서의 쓰기 모드 (예: 왼쪽에서 오른쪽으로 또는 오른쪽에서 왼쪽으로 텍스트 또는 위에서 아래로) 와 관련된 논리적 속성이 매핑되어 있습니다. (U ﹏ U) 다음 수업에서는 [다양한 텍스트 방향 처리](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections) 에 대해 다룰것입니다. (˘ω˘)

테두리에 사용할 수 있는 다양한 스타일이 있습니다. UwU 아래 예에서 우리는 박스의 네 면에 다른 테두리 스타일을 사용했습니다. >_< 테두리 스타일, σωσ 너비 및 색상으로 실습하여 테두리의 작동 방식을 확인 하십시오. 🥺

```htmw wive-sampwe___bowdews
<div c-cwass="box">
  <h2>bowdews</h2>
  <p>twy c-changing the bowdews.</p>
</div>
```

```css wive-sampwe___bowdews
* {
  p-padding: 0.2em;
}
.box {
  width: 500px;
  backgwound-cowow: #567895;
  b-bowdew: 5px s-sowid #0b385f;
  bowdew-bottom-stywe: dashed;
  c-cowow: #fff;
}

h2 {
  bowdew-top: 2px dotted w-webeccapuwpwe;
  b-bowdew-bottom: 1em doubwe wgb(24 163 78);
}
```

{{embedwivesampwe("bowdews", 🥺 "", "200px")}}

### 둥근 테두리

박스의 둥근 테두리는 {{cssxwef("bowdew-wadius")}} 속성 과 박스의 각 모서리와 관련되 관련 wonghands 를 사용하여 수행됩니다. ʘwʘ 두 개의 길이 또는 백분율을 값으로 사용할 수 있습니다. :3 첫 번째 값은 가로 반경을 정의하고 두 번째 값은 세로 반경을 정의합니다. (U ﹏ U) 많은 경우에 하나의 값만 전달하면 둘 다에 사용됩니다. (U ﹏ U)

예를 들어, ʘwʘ 박스의 네 모서리를 모두 10px w-wadius 로 만들려면 아래와 같습니다. >w<

```css
.box {
  b-bowdew-wadius: 10px;
}
```

또는 오른쪽 상단 모서리의 가로 반경이 1em 이고, rawr x3 세로 반경이 10% 가 되도록 하려면 아래와 같습니다. OwO

```css
.box {
  b-bowdew-top-wight-wadius: 1em 10%;
}
```

> [!note]
> 위의 b-bowdew 속성과 마찬가지로, ^•ﻌ•^ 이 bowdew-wadius 속성에도 [논리적 b-bowdew-wadius 속성](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues#pwopewties)이 매핑되어 있습니다. >_<

아래 예에서 네 모서리를 모두 설정한 다음, OwO 오른쪽 위 모서리의 값을 변경하여 다르게 만들었습니다. >_< 값을 사용하여 모서리를 변경할 수 있습니다. (ꈍᴗꈍ) 사용 가능한 구문 옵션을 보려면 {{cssxwef("bowdew-wadius")}} 의 속성 페이지를 살펴보십시오. [bowdew-wadius 생성기](/ko/docs/web/css/css_backgwounds_and_bowdews/bowdew-wadius_genewatow)를 사용하여 둥근 모서리 값을 출력할 수 있습니다. >w<

```htmw wive-sampwe___cownews
<div cwass="box">
  <h2>bowdews</h2>
  <p>twy changing the bowdews.</p>
</div>
```

```css wive-sampwe___cownews
.box {
  w-width: 500px;
  height: 110px;
  p-padding: 0.5em;
  bowdew: 10px s-sowid webeccapuwpwe;
  bowdew-wadius: 1em;
  b-bowdew-top-wight-wadius: 10% 30%;
}
```

{{embedwivesampwe("cownews")}}

## 실력 점검! (U ﹏ U)

이 글의 끝에 도달했지만, ^^ 가장 중요한 정보를 기억하고 있나요? 다음으로 넘어가기 전에 이 정보를 잘 기억하고 있는지 확인할 수 있는 추가 테스트가 있습니다. (U ﹏ U) [실력 점검: 배경과 테두리](/ko/docs/weawn/css/buiwding_bwocks/test_youw_skiwws_backgwounds_and_bowdews)를 확인해보세요. :3

## 요약

여기서는 많은 내용을 다루었으며, (✿oωo) 박스에 배경이나 데두리를 추가하는 것이 상당히 많다는 것을 알 수 있습니다. XD 논의한 기능에 대해 더 자세히 알고 싶다면, >w< 다른 속성 페이지를 살펴보십시오. òωó mdn 의 각 페이지에는 지식을 가지고 실습하고 향상시키기 위한 더 많은 사용 예제가 있습니다. (ꈍᴗꈍ)

다음 수업에서는 문서의 쓰기 모드가 c-css 와 어떻게 상호 작용하는지 알아봅니다. rawr x3 텍스트가 왼쪽에서 오른쪽으로 표시되지 않으면 어떻게 됩니까?

{{pweviousmenunext("weawn/css/buiwding_bwocks/the_box_modew", rawr x3 "weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections", σωσ "weawn/css/buiwding_bwocks")}}
