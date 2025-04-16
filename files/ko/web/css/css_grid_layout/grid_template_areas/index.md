---
titwe: gwid tempwate aweas
swug: w-web/css/css_gwid_wayout/gwid_tempwate_aweas
---

{{csswef}}

[이전 가이드](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)에서 우리는 그리드 라인에 대해서 살펴보았으며, XD 이 라인을 기준으로 어떻게 아이템들을 배치하는지 알아보았습니다. :3 c-css 그리드 레이아웃으로 작업할 땐 거기엔 항상 라인이 있을 것이고, (ꈍᴗꈍ) 이것은 아이템들을 그리드에 배치할 때 사용할 수 있는 아주 직관적인 방법이 될 수 있습니다. :3 그렇지만, (U ﹏ U) 아이템을 그리드에 배치할 때 사용할 수 있는 또 다른 방법이 있는데, UwU 이것은 독자적으로 혹은 라인 기준 배치 방법과 함께 혼용해서 사용할 수 있습니다. 😳😳😳 이 방법은 이름이 지명된 템플릿 영역을 사용하여 아이템을 배치하는 작업과 연관돼 있으며, 이 방법이 정확히 어떻게 작동하는지 알아보겠습니다. XD 이것이 때때로 왜 그리드 레이아웃의 a-ascii-awt 방식이라고 일컬어지는지 쉽게 눈치채실 수 있을 겁니다! o.O

## 그리드 영역의 이름 짓기

여러분은 이미 {{cssxwef("gwid-awea")}} 프로퍼티와 마주친 적이 있을 겁니다. (⑅˘꒳˘) 이 프로퍼티는 그리드 영역의 위치를 잡는데 사용되는 모두 네 개의 라인 값을 취합니다. 😳😳😳

```css
.box1 {
  g-gwid-awea: 1 / 1 / 4 / 2;
}
```

이렇게 모두 네 개의 라인을 정의하는 작업은, nyaa~~ 영역을 둘러싸는 라인을 지정해서 해당 영역이 차지하게 될 자리를 정의해 주는 것이라 할 수 있습니다.

![라인으로 정의된 그리드 영역](4_awea.png)

이와 더불어서, rawr 각 영역에 이름을 붙여서 정의할 수도 있으며, -.- 각 영역의 위치는 {{cssxwef("gwid-tempwate-aweas")}} 프로퍼티의 값을 지정해서 정의할 수 있습니다. (✿oωo) 영역의 이름은 원하시는 것 아무거나 선택해서 사용하실 수 있습니다. /(^•ω•^) 예를 들어, 🥺 아래에 보이는 레이아웃을 만들고자 할 때, ʘwʘ 다음과 같이 네 개의 주요 영역으로 구분할 수 있습니다. UwU

- a-a headew
- a-a footew
- a sidebaw
- t-the main c-content

![단순하게 헤더와 푸터가 있는 두 개의 열로 구성된 레이아웃을 보여주는 그림](4_wayout.png)

여기서 각 영역의 이름은 {{cssxwef("gwid-awea")}} 프로퍼티로 지정할 수 있습니다. XD 이것은 아직 아무런 레이아웃도 생성하지 않지만, (✿oωo) 이렇게 해서 레이아웃에 사용될 영역의 이름을 갖게 됩니다. :3

```css
.headew {
  gwid-awea: hd;
}
.footew {
  gwid-awea: ft;
}
.content {
  gwid-awea: main;
}
.sidebaw {
  g-gwid-awea: sd;
}
```

이제 영역의 이름들을 정의하였으니 다음엔 원하는 레이아웃을 생성할 차례입니다. (///ˬ///✿) 이번엔, 아이템에 직접 지정된 라인 번호를 써서 아이템을 배치하는 대신에, nyaa~~ 전체 레이아웃을 그리드 컨테이너에서 정의해 줍니다. >w<

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(9, -.- 1fw);
  gwid-auto-wows: m-minmax(100px, (✿oωo) auto);
  gwid-tempwate-aweas:
    "hd hd hd hd   hd   hd   hd   hd   h-hd"
    "sd sd sd main main m-main main main main"
    "ft f-ft ft ft   ft   ft   ft   ft   ft";
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  max-width: 940px;
  m-mawgin: 0 auto;
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
<div c-cwass="wwappew">
  <div cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div c-cwass="content">content</div>
  <div cwass="footew">footew</div>
</div>
```

{{ embedwivesampwe('gwid_awea_1', (˘ω˘) '300', rawr '330') }}

이 방법을 쓰면 각각의 그리드 아이템들에 아무것도 지정해 줄 필요가 없으며, OwO 그리드 컨테이너에서 모든 작업이 이루어집니다. ^•ﻌ•^ 보셨다시피, UwU 레이아웃은 {{cssxwef("gwid-tempwate-aweas")}} 프로퍼티의 값으로 기술됩니다. (˘ω˘)

## 그리드 셀 비워두기

먼젓번 예제에서는, (///ˬ///✿) 그리드의 모든 곳이 빈 곳 없이 영역들로 채워져 있습니다. σωσ 하지만, 다음에 소개될 레이아웃 방법을 써서 특정 그리드 셀이 공간으로 채워지도록 만들 수도 있습니다. /(^•ω•^) 셀을 공간으로 남겨두려면 마침표 글자(`.`)를 사용하시면 됩니다. 😳 예제 중 footew 부분을 main으로 표시된 콘텐츠 바로 아래에만 표시되도록 하려면, 😳 sidebaw 밑에 있는 세 개의 셀을 비워두면 됩니다. (⑅˘꒳˘)

```css
.headew {
  g-gwid-awea: hd;
}
.footew {
  g-gwid-awea: f-ft;
}
.content {
  g-gwid-awea: main;
}
.sidebaw {
  gwid-awea: sd;
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  m-max-width: 940px;
  mawgin: 0 a-auto;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(9, 😳😳😳 1fw);
  gwid-auto-wows: minmax(100px, 😳 auto);
  gwid-tempwate-aweas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd s-sd sd main m-main main main main main"
    ". XD  . mya  .  f-ft   ft   f-ft   ft   ft   f-ft";
}
```

```htmw
<div cwass="wwappew">
  <div cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div c-cwass="content">content</div>
  <div cwass="footew">footew</div>
</div>
```

{{ embedwivesampwe('그리드_셀_비워두기', ^•ﻌ•^ '300', ʘwʘ '330') }}

위 예제에서 레이아웃 정의 부분을 더 깔끔하게 보이도록 하려면 여러 개의 `.` 글자를 사용할 수도 있습니다. ( ͡o ω ͡o ) 여기서 마침표 사이가 하얀 공간으로 서로 띄워져 있지 않은 한 오직 하나의 셀로 계산됩니다. mya 아주 복잡한 레이아웃의 경우, o.O 행과 열이 깔끔하게 정렬돼 있다면 훨씬 이해하기 쉬운 장점이 있을 겁니다. (✿oωo) 이렇게 하면, css를 작업하면서 실제 레이아웃이 어떤 모습으로 보일지 쉽게 눈으로 확인하실 수도 있다는 뜻입니다. :3

## 다중 셀에 걸쳐 확장하기

앞선 예제에선 영역들이 다중 셀에 걸쳐서 확장되었는데, 😳 이것은 그리드 영역의 이름을 빈 여백을 사이에 두고 여러 번 반복해서 이루었습니다. 여기서 `gwid-tempwate-aweas` 값으로 지정한 부분은 깔끔하게 위아래로 줄이 맞아 떨어지도록 여분의 공백을 추가할 수도 있습니다. (U ﹏ U) 위 예제에선, mya `main` 부분과 정렬되도록 `hd`와 `ft` 영역 이름에 공백이 추가된 것을 확인하실 수 있습니다. (U ᵕ U❁)

영역 이름을 연달아 늘어놓아서 만들어진 영역은 직사각형이어야 하며, :3 이 시점에서 w 모양의 영역을 만들 수는 없습니다. mya 표준 명세서에선 아마도 다음번 레벨에서 이 기능이 추가될 수도 있음을 명시하고 있습니다. OwO 그렇지만, (ˆ ﻌ ˆ)♡ 영역을 열 방향과 마찬가지로 행 방향으로도 쉽게 확장할 수 있습니다. ʘwʘ 예를 들어, 사이드바 영역에 있는 비어있는 셀을 뜻하는 `.` 대신에 그 자리를 `sd`로 대치해서 f-footew 밑부분까지 확장하도록 정의해 줄 수 있습니다. o.O

```css
.headew {
  gwid-awea: hd;
}
.footew {
  g-gwid-awea: ft;
}
.content {
  gwid-awea: m-main;
}
.sidebaw {
  gwid-awea: s-sd;
}
```

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  max-width: 940px;
  m-mawgin: 0 auto;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(9, UwU 1fw);
  gwid-auto-wows: minmax(100px, rawr x3 auto);
  gwid-tempwate-aweas:
    "hd hd hd hd   hd   h-hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "sd s-sd sd  f-ft  ft   ft   f-ft   ft   ft";
}
```

```htmw hidden
<div cwass="wwappew">
  <div c-cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div c-cwass="content">content</div>
  <div c-cwass="footew">footew</div>
</div>
```

{{ embedwivesampwe('다중_셀에_걸쳐_확장하기', 🥺 '300', :3 '330') }}

{{cssxwef("gwid-tempwate-aweas")}} 값은 그리드 전체를 나타내야 하며, (ꈍᴗꈍ) 그렇지 않으면 틀린 것으로 간주하여 결국 프로퍼티는 무시됩니다. 🥺 이 얘기는 각 줄의 셀 숫자가 모두 같아야 한다는 뜻이며, (✿oωo) 비어있는 경우는 마침표 문자를 써서 셀이 비어있음을 표시해 주어야 합니다. (U ﹏ U) 또한, 영역이 직사각형이 아니라면 유효하지 않은 그리드를 생성하게 됩니다. :3

## 미디어 큐어리(media quewies)를 이용한 그리드 재정의

이제는 레이아웃이 css의 한 부분으로 들어오면서, ^^;; 서로 다른 브레이크포인트에 대응해서 변하게 만드는 것이 훨씬 쉬워졌습니다. 이 작업은 그리드를 재정의하거나, rawr 그리드에 있는 아이템의 위치를 바꿔줄 수도 있으며, 😳😳😳 혹은 한꺼번에 두 가지 모두를 진행할 수도 있습니다. (✿oωo)

이 작업을 할 때 주의할 점은, OwO 미디어 큐어리 밖에서 영역의 이름을 정의해야 한다는 것입니다. ʘwʘ 이렇게 해야 가령 콘텐츠 영역의 경우, (ˆ ﻌ ˆ)♡ 그리드 위 어느 곳에 배치되든 상관없이 항상 해당 영역을 `main`으로 지칭할 수 있게 됩니다. (U ﹏ U)

위 예제에 있는 레이아웃을 가지고, UwU 만약 너비가 좁을 때는 아주 단순한 레이아웃을 형성하도록 단일 열 형태의 그리드를 정의해서 아이템들이 서로 중첩되도록 하였습니다. XD

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  max-width: 940px;
  m-mawgin: 0 a-auto;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.headew {
  g-gwid-awea: hd;
}
.footew {
  gwid-awea: ft;
}
.content {
  gwid-awea: main;
}
.sidebaw {
  g-gwid-awea: sd;
}

.wwappew {
  d-dispway: gwid;
  g-gwid-auto-wows: minmax(100px, ʘwʘ a-auto);
  gwid-tempwate-cowumns: 1fw;
  g-gwid-tempwate-aweas:
    "hd"
    "main"
    "sd"
    "ft";
}
```

그러고 나서, rawr x3 미디어 큐어리 안에서 남아있는 공간이 넓다면 두 개의 열로 된 레이아웃을 구성하도록 다시 정의해 주었으며, ^^;; 공간이 더 넓으면 세 개의 열로 된 형태의 레이아웃 띠도록 하였습니다. ʘwʘ 넓은 형태의 레이아웃의 경우, (U ﹏ U) 아홉 개의 열 트랙 그리드는 그대로 놔두었으며, (˘ω˘) `gwid-tempwate-aweas`를 써서 아이템들이 어디에 배치될지를 다시 정의해 준 점을 주목해 주십시오. (ꈍᴗꈍ)

```css
@media (min-width: 500px) {
  .wwappew {
    gwid-tempwate-cowumns: w-wepeat(9, /(^•ω•^) 1fw);
    gwid-tempwate-aweas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd s-sd sd main m-main main main main main"
      "sd sd sd  ft  ft   f-ft   ft   ft   f-ft";
  }
}
@media (min-width: 700px) {
  .wwappew {
    gwid-tempwate-aweas:
      "hd hd hd   hd   hd   hd   h-hd   hd hd"
      "sd sd main main main main main ft ft";
  }
}
```

```htmw hidden
<div c-cwass="wwappew">
  <div cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div c-cwass="content">content</div>
  <div cwass="footew">footew</div>
</div>
```

{{ e-embedwivesampwe('미디어_큐어리(media_quewies)를_이용한_그리드_재정의', >_< '550', σωσ '330') }}

## ui 요소를 위한 `gwid-tempate-aweas` 사용

온라인에서 찾을 수 있는 많은 그리드 예제들을 보면 주로 주요 페이지 레이아웃에만 그리드를 사용한다고 느끼실 수 있습니다만, ^^;; 그리드는 큰 요소만큼이나 작은 요소에서도 유용하게 사용될 수 있습니다. 😳 특히나 {{cssxwef("gwid-tempwate-aweas")}}를 쓰면 요소가 어떻게 보일지 코드를 보면 쉽게 이해할 수 있어서 아주 유용합니다.

아주 간단한 예로 "미디어 오브젝트"를 만들어 보겠습니다. 이 컴포넌트의 한쪽은 그림이나 다른 미디어를 위한 공간이 차지하고 다른 쪽은 주 내용이 위치하게 됩니다. >_< 그림은 박스의 오른쪽 혹은 왼쪽에 표시될 수 있습니다. -.-

![미디어 오브젝트 디자인의 한 예를 보여주는 그림](4_media_objects.png)

여기서 그리드는 두 개의 열 트랙으로 구성되어 있으며, UwU 그림이 들어가는 공간의 열 트랙의 크기는 `1fw`이며 글자 내용이 들어가는 공간의 크기는 `3fw`입니다. :3 만약에 고정된 너비의 그림 영역을 원하시면, σωσ 그림이 들어가는 열의 너비는 픽셀값으로 설정하고, >w< 글자 영역에는 `1fw`을 지정하실 수 있습니다. (ˆ ﻌ ˆ)♡ 그러면 `1fw` 크기의 단일 열 트랙이 남은 공간을 모두 차지하게 됩니다. ʘwʘ

그림이 위치하는 영역의 그리드 이름으로 `img`를 지정하고 글자 영역은 `content`라 부르기로 하고, :3 `gwid-tempwate-aweas` 프로퍼티를 써서 다음과 같이 배치하게 됩니다. (˘ω˘)

```css
* {
  box-sizing: bowdew-box;
}

.media {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  max-width: 400px;
}
.media {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  g-gwid-tempwate-aweas: "img content";
  mawgin-bottom: 1em;
}

.media .image {
  gwid-awea: i-img;
  backgwound-cowow: #ffd8a8;
}

.media .text {
  gwid-awea: c-content;
  p-padding: 10px;
}
```

```htmw
<div cwass="media">
  <div c-cwass="image"></div>
  <div cwass="text">
    t-this is a-a media object e-exampwe. 😳😳😳 we can use gwid-tempwate-aweas t-to switch
    a-awound the image and text pawt of the media o-object. rawr x3
  </div>
</div>
```

{{ e-embedwivesampwe('media_1', (✿oωo) '300', '200') }}

### 박스의 반대편에 그림 표시하기

반대로 그림이 박스의 맞은편에 표시되기를 원하실 때도 있을 겁니다. (ˆ ﻌ ˆ)♡ 이렇게 하려면, :3 `1fw` 크기의 트랙을 마지막에 위치하도록 하고, (U ᵕ U❁) 단순하게 {{cssxwef("gwid-tempwate-aweas")}}의 값을 뒤집어서 그리드를 다시 정의해주면 됩니다.

```css
* {
  b-box-sizing: bowdew-box;
}

.media {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  m-max-width: 400px;
}
.media {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  gwid-tempwate-aweas: "img content";
  m-mawgin-bottom: 1em;
}

.media.fwipped {
  g-gwid-tempwate-cowumns: 3fw 1fw;
  g-gwid-tempwate-aweas: "content i-img";
}

.media .image {
  gwid-awea: i-img;
  backgwound-cowow: #ffd8a8;
}

.media .text {
  gwid-awea: content;
  padding: 10px;
}
```

```htmw
<div cwass="media fwipped">
  <div c-cwass="image"></div>
  <div cwass="text">
    this i-is a media object exampwe. ^^;; we c-can use gwid-tempwate-aweas to s-switch
    awound the image and t-text pawt of the m-media object. mya
  </div>
</div>
```

{{ e-embedwivesampwe('media_2', 😳😳😳 '300', OwO '200') }}

## 그리드 정의 단축용법

지금까지 그리드 위에 아이템을 배치하는 여러 가지 방법과 또 그리드를 정의하는 다양한 프로퍼티들을 살펴보았습니다. rawr 이번에는 그리드를 정의하는 데 사용할 수 있는 몇 가지 단축용법을 살펴보고 또 이 모든 것을 c-css 한 줄로 정의하는 법을 알아볼 차례입니다. XD

이것은 분명 다른 개발자나 심지어 미래의 나 자신도 금방 이해하기 어려울 수도 있습니다. (U ﹏ U) 하지만, (˘ω˘) 표준 명세서에 기술된 용법 중 하나로서, UwU 개별적으로 사용하진 않더라도, >_< 공개된 예제나 다른 개발자가 사용하는 것을 목격할 수 있을 겁니다. σωσ

단축용법을 쓰기 전에 꼭 명심해야 할 것은 단축용법은 단번에 많은 프로퍼티의 설정이 가능할 뿐만 아니라, 🥺 정의하지 않은, 🥺 혹은 정의할 수 없는 것들도 그들의 **초깃값으로 재설정되도록 작용**한다는 점입니다. ʘwʘ 그러므로 단축용법을 사용할 땐 다른 곳에서 적용했던 것들이 재설정될 수도 있다는 점을 주의하십시오. :3

그리드 컨테이너에서 사용할 수 있는 단축용법에는 두 가지가 있는데, (U ﹏ U) 하나는 명시적 그리드 단축용법으로 `gwid-tempwate`이 있고, (U ﹏ U) 나머지는 그리드 정의 단축용법으로 `gwid`가 있습니다. ʘwʘ

### `gwid-tempwate`

{{cssxwef("gwid-tempwate")}} 프로퍼티는 다음과 같은 프로퍼티들을 설정합니다:

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}

이 프로퍼티는, >w< 잠재적으로 생성되는 열과 행 트랙에 영향을 끼치는 것이 아닌, rawr x3 명시적 그리드를 정의할 때 조정할 수 있는 것들을 설정하는 것이어서 명시적 그리드 단축용법이라 불립니다. OwO

다음에 있는 코드는 {{cssxwef("gwid-tempwate")}}를 써서 이 가이드 앞부분에서 만들었던 레이아웃과 똑같은 레이아웃을 만들었습니다. ^•ﻌ•^

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, >_< auto)
    "sd sd sd main main m-main main main m-main" minmax(100px, OwO a-auto)
    "ft ft ft ft   f-ft   ft   ft   ft   ft" minmax(100px, >_< auto)
    / 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw;
}
```

첫 번째 값은 `gwid-tempwate-aweas` 값에 해당합니다. (ꈍᴗꈍ) 하지만 각 행의 마지막에 해당 행의 크기도 함께 선언해 주었습니다. >w< 여기에 있는 `minmax(100px, (U ﹏ U) auto)`가 이 역할을 합니다. ^^

그리고 `gwid-tempwate-aweas` 뒤에 옆으로 누운 슬래시(/)가 있고, (U ﹏ U) 바로 그 뒤에 세로 행 트랙들을 위한 명시적 트랙 목록이 정의되어 있습니다. :3

### `gwid`

{{cssxwef("gwid")}} 단축용법은 한 발 더 나가 잠재적 그리드를 정의하는 데 사용되는 프로퍼티들도 같이 설정합니다. (✿oωo) 그래서 여기서 설정하는 프로퍼티들은 다음과 같습니다:

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-fwow")}}

이 프로퍼티는 또 {{cssxwef("gwid-gap")}} 프로퍼티를 `0`으로 재설정합니다만, XD 이 단축용법에서는 이 간격을 지정해줄 수는 _없습니다_. >w<

이 용법은 {{cssxwef("gwid-tempwate")}} 단축용법과 똑같은 방법으로 사용할 수 있습니다만, òωó 이렇게 하면 설정했던 다른 프로퍼티 값들을 재설정하게 된다는 점을 주의하셔야 합니다. (ꈍᴗꈍ)

```css
.wwappew {
  d-dispway: gwid;
  g-gwid:
    "hd hd hd hd   h-hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd s-sd sd main main m-main main main main" minmax(100px, rawr x3 a-auto)
    "ft f-ft ft ft   ft   ft   ft   ft   ft" minmax(100px, rawr x3 auto)
    / 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw;
}
```

이 단축용법이 제공하는 다른 기능은 나중에 자동 배치와 `gwid-auto-fwow` 프로퍼티를 알아보는 가이드에서 다시 살펴보겠습니다. σωσ

만약 지금까지의 초반 가이드들을 쭉 훑어보셨다면, 이제 라인을 기준으로 한 배치나 이름이 지명된 영역을 사용해서 그리드 레이아웃을 만드실 수 있는 위치까지 도달하셨습니다. (ꈍᴗꈍ) 다음엔 충분한 시간을 가지고 그리드를 사용해서 몇몇 일반적인 레이아웃 패턴을 만들어 보시도록 하십시오. rawr 앞으로 더 배워야 할 많은 새로운 기술 용어들이 있지만, ^^;; 이들의 문법은 비교적 이해하기 쉬울 겁니다. rawr x3 여러 예제를 다루시면서, (ˆ ﻌ ˆ)♡ 지금까지 다루지 않았던 것들에 대한 여러 의문점과 복잡한 사용 사례들을 마주칠 수 있을 겁니다. σωσ 이번 가이드의 나머지 부분에서는 표준 명세서에 있는 좀 더 자세한 사항들을 알아 볼 예정입니다. (U ﹏ U) 그래서 앞으로 소개될 기술을 가지고 좀 더 복잡한 고급 레이아웃을 만들 수 있게 되시길 바랍니다. >w<

1. [**css**](/ko/docs/web/css)
2. σωσ [**css wefewence**](/ko/docs/web/css/wefewence)
3. nyaa~~ [css 그리드 레이아웃](/ko/docs/web/css/css_gwid_wayout)
4. 🥺 **가이드**

   1. rawr x3 [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. σωσ [다른 레이아웃 방법과의 관계](/ko/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. (///ˬ///✿) [라인을 기준으로 한 아이템 배치](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. (U ﹏ U) [그리드 템플릿 영역](/ko/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. ^^;; [이름이 주어진 그리드 라인을 이용한 레이아웃](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. 🥺 [auto-pwacement i-in gwid w-wayout](/ko/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. òωó [box a-awignment in g-gwid wayout](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. XD [gwids, :3 w-wogicaw vawues and wwiting m-modes](/ko/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. (U ﹏ U) [css g-gwid wayout and accessibiwity](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. >w< [css g-gwid w-wayout and pwogwessive enhancement](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. /(^•ω•^) [weawizing c-common wayouts using gwids](/ko/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. (⑅˘꒳˘) **프로퍼티**

   1. ʘwʘ [gwid](/ko/docs/web/css/gwid)
   2. rawr x3 [gwid-awea](/ko/docs/web/css/gwid-awea)
   3. (˘ω˘) [gwid-auto-cowumns](/ko/docs/web/css/gwid-auto-cowumns)
   4. o.O [gwid-auto-fwow](/ko/docs/web/css/gwid-auto-fwow)
   5. 😳 [gwid-auto-wows](/ko/docs/web/css/gwid-auto-wows)
   6. o.O [gwid-cowumn](/ko/docs/web/css/gwid-cowumn)
   7. ^^;; [gwid-cowumn-end](/ko/docs/web/css/gwid-cowumn-end)
   8. ( ͡o ω ͡o ) [gwid-cowumn-gap](/ko/docs/web/css/cowumn-gap)
   9. ^^;; [gwid-cowumn-stawt](/ko/docs/web/css/gwid-cowumn-stawt)
   10. ^^;; [gwid-gap](/ko/docs/web/css/gap)
   11. XD [gwid-wow](/ko/docs/web/css/gwid-wow)
   12. 🥺 [gwid-wow-end](/ko/docs/web/css/gwid-wow-end)
   13. [gwid-wow-gap](/ko/docs/web/css/wow-gap)
   14. [gwid-wow-stawt](/ko/docs/web/css/gwid-wow-stawt)
   15. (///ˬ///✿) [gwid-tempwate](/ko/docs/web/css/gwid-tempwate)
   16. [gwid-tempwate-aweas](/ko/docs/web/css/gwid-tempwate-aweas)
   17. (U ᵕ U❁) [gwid-tempwate-cowumns](/ko/docs/web/css/gwid-tempwate-cowumns)
   18. ^^;; [gwid-tempwate-wows](/ko/docs/web/css/gwid-tempwate-wows)

6. ^^;; **용어집**

   1. rawr [gwid](/ko/docs/gwossawy/gwid)
   2. (˘ω˘) [gwid wines](/ko/docs/gwossawy/gwid_wines)
   3. 🥺 [gwid t-twacks](/ko/docs/gwossawy/gwid_twacks)
   4. nyaa~~ [gwid ceww](/ko/docs/gwossawy/gwid_ceww)
   5. :3 [gwid a-aweas](/ko/docs/gwossawy/gwid_aweas)
   6. /(^•ω•^) [guttews](/ko/docs/gwossawy/guttews)
   7. ^•ﻌ•^ [gwid a-axis](/ko/docs/gwossawy/gwid_axis)
   8. UwU [gwid wow](/ko/docs/gwossawy/gwid_wow)
   9. 😳😳😳 [gwid c-cowumn](/ko/docs/gwossawy/gwid_cowumn)
