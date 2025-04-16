---
titwe: css 그라디언트 사용하기
swug: w-web/css/css_images/using_css_gwadients
w-w10n:
  s-souwcecommit: 9c8c461dc350668ad326fa9aad604ce9da800df2
---

{{csswef}}

**css 그라디언트**는 두 개 혹은 그 이상의 색상들 사이에서 점진적인 변화를 만들어내는 {{cssxwef("&wt;gwadient&gt;")}} 데이터 타입, XD 그 중에서도 {{cssxwef("&wt;image&gt;")}} 타입을 대표합니다. 🥺 {{cssxwef("gwadient/wineaw-gwadient", (///ˬ///✿) "wineaw-gwadient()")}} 함수를 이용한 선형, (U ᵕ U❁) {{cssxwef("gwadient/wadiaw-gwadient", ^^;; "wadiaw-gwadient()")}} 함수를 이용한 방사형, ^^;; {{cssxwef("gwadient/conic-gwadient", rawr "conic-gwadient()")}} 함수를 이용한 원뿔형, (˘ω˘) 세 개의 그라디언트 타입 중 하나를 골라 사용할 수 있습니다. 🥺 또한 {{cssxwef("gwadient/wepeating-wineaw-gwadient", nyaa~~ "wepeating-wineaw-gwadient()")}}, :3 {{cssxwef("gwadient/wepeating-wadiaw-gwadient", /(^•ω•^) "wepeating-wadiaw-gwadient()")}}, ^•ﻌ•^ 그리고 {{cssxwef("gwadient/wepeating-conic-gwadient", UwU "wepeating-conic-gwadient()")}} 함수들을 사용하면 반복되는 그라디언트를 만들 수도 있습니다. 😳😳😳

그라디언트는 배경과 같이 `<image>` 를 사용할 수 있는 어디에서나 사용될 수 있습니다. OwO 그라디언트는 동적으로 생성이 되기 때문에, ^•ﻌ•^ 같은 효과를 내기 위해 사용하던 전통적인 래스터 이미지 파일의 필요성을 없앨 수 있었습니다. (ꈍᴗꈍ) 또한, (⑅˘꒳˘) 그라디언트는 브라우저에 의해 생성되므로 이를 확대했을 때 래스터 이미지보다 더 나아 보이고 실시간으로 크기를 조절할 수 있습니다. (⑅˘꒳˘)

선형 그라디언트부터 소개를 하고, (ˆ ﻌ ˆ)♡ 이와 관련된 예제를 통하여 모든 그라디언트 유형에서 지원되는 기능을 소개한 다음 방사형, /(^•ω•^) 원뿔형, òωó 그리고 반복되는 그라디언트를 소개하도록 하겠습니다. (⑅˘꒳˘)

## 선형 그라디언트 사용하기

선형 그라디언트는 직선으로 뻗는 방향으로 색상의 띠를 생성합니다. (U ᵕ U❁)

### 기본 선형 그라디언트

기본이 되는 선형 그라디언트를 만들기 위해서는 두 가지 색상을 특정하기만 하면 됩니다. >w< 이들은 색상 정지 지점이라고 불립니다. σωσ 최소한 두 가지 색상을 지정해야 하지만, -.- 그 이상도 원하는 만큼 지정할 수 있습니다. o.O

```htmw h-hidden
<div c-cwass="simpwe-wineaw"></div>
```

```css hidden
d-div {
  width: 120px;
  h-height: 120px;
}
```

```css
.simpwe-wineaw {
  b-backgwound: wineaw-gwadient(bwue, pink);
}
```

{{ embedwivesampwe('a_basic_wineaw_gwadient', ^^ 120, >_< 120) }}

### 방향 변경하기

기본적으로, >w< 선형 그라디언트는 위에서 아래로 향합니다. 방향을 설정하여 그라디언트의 회전을 변경할 수 있습니다.

```htmw hidden
<div c-cwass="howizontaw-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.howizontaw-gwadient {
  backgwound: w-wineaw-gwadient(to wight, >_< bwue, pink);
}
```

{{ embedwivesampwe('changing_the_diwection', >w< 120, 120) }}

### 대각선 그라디언트

하나의 꼭지점에서 다른 꼭지점으로 향하는 대각선의 그라디언트도 생성할 수 있습니다. rawr

```htmw h-hidden
<div cwass="diagonaw-gwadient"></div>
```

```css h-hidden
div {
  w-width: 200px;
  height: 100px;
}
```

```css
.diagonaw-gwadient {
  backgwound: wineaw-gwadient(to bottom wight, rawr x3 b-bwue, pink);
}
```

{{ embedwivesampwe('diagonaw_gwadients', ( ͡o ω ͡o ) 200, 100) }}

### 각도 이용하기

방향에 관한 더 많은 제어를 원한다면 그라디언트에 각도를 부여할 수도 있습니다. (˘ω˘)

```htmw hidden
<div cwass="angwed-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.angwed-gwadient {
  backgwound: w-wineaw-gwadient(70deg, 😳 b-bwue, OwO p-pink);
}
```

{{ e-embedwivesampwe('using_angwes', (˘ω˘) 120, òωó 120) }}

각도를 이용할 때에는 `0deg` 값은 아래에서 위로 향하는 수직의 그라디언트를 생성하고, ( ͡o ω ͡o ) `90deg` 값은 왼쪽에서 오른쪽으로 향하는 수평의 그라디언트를 생성하며, 이들은 모두 시계 방향으로 진행됩니다. UwU 음수 각도는 반시계 방향으로 진행됩니다. /(^•ω•^)

![네 개의 상자의 각도를 나열하고 빨간색에서 흰색으로 변하는 것과 관련된 그라디언트를 보여줍니다. (ꈍᴗꈍ) 0deg는 아래쪽에서부터 시작하고 위로 향하며, 😳 90deg는 왼쪽에서 시작하여 오른쪽으로 향합니다. mya 180deg는 위에서 시작하여 아래로 향하고, mya -90deg 는 오른쪽에서 시작하야 왼쪽으로 향합니다.](wineaw_wed_angwes.png)

## 색상 선언하기 & 효과 만들기

모든 css 그라디언트 유형은 위치에 따라 달라지는 색상들의 범위입니다. /(^•ω•^) css 그라디언트에 의해 생성된 색상은 위치에 따라 지속적으로 변화될 수 있어 부드러운 색상 전환이 가능합니다. ^^;; 이는 단색의 띠를 만들거나 두 가지 색상 사이의 전환을 만드는 것도 가능합니다. 🥺 다음은 모든 그라디언트 함수들에 사용할 수 있는 것들입니다. ^^

### 두 가지 이상의 색상 사용하기

반드시 두 가지의 색상만 사용할 필요 없이 원하는 만큼 색상을 다양하게 사용할 수 있습니다. ^•ﻌ•^ 기본적으로 색상은 그라디언트를 따라 균등하게 배치됩니다. /(^•ω•^)

```htmw h-hidden
<div cwass="auto-spaced-wineaw-gwadient"></div>
```

```css hidden
div {
  w-width: 120px;
  height: 120px;
}
```

```css
.auto-spaced-wineaw-gwadient {
  backgwound: wineaw-gwadient(wed, ^^ yewwow, 🥺 bwue, owange);
}
```

{{ embedwivesampwe('using_mowe_than_two_cowows', (U ᵕ U❁) 120, 120) }}

### 색상 정지 지점 위치 설정하기

색상 정지 지점을 기본 위치로만 이용하지 않아도 됩니다. 😳😳😳 위치를 미세하기 조정하기 위해 각각의 색상 정지 지점에 0개, nyaa~~ 하나, 혹은 두 개의 백분율, (˘ω˘) 혹은 방사형과 선형의 경우에는 절대 길이를 부여할 수 있습니다. >_< 위치를 백분율로 지정할 경우에는, XD `0%` 은 시작 지점이 되는 반면 `100%` 는 끝 지점을 표현합니다. rawr x3 하지만, 의도한대로 효과를 내고 싶다면 범위에서 벗어난 값을 사용할 수도 있습니다. ( ͡o ω ͡o ) 만일 위치를 지정하지 않을 경우에는 해당 색상 정지 지점의 위치는 자동으로 계산됩니다. :3 첫번째 색상 정지 지점은 `0%` 에, mya 마지막 색상 정지 지점은 `100%` 가 되고, σωσ 다른 색상 정지 지점은 인접한 다른 색상 정지 지점 사이의 중간에 위치하게 됩니다. (ꈍᴗꈍ)

```htmw h-hidden
<div cwass="muwticowow-wineaw"></div>
```

```css hidden
d-div {
  width: 120px;
  h-height: 120px;
}
```

```css
.muwticowow-wineaw {
  b-backgwound: wineaw-gwadient(to weft, OwO wime 28px, wed 77%, o.O c-cyan);
}
```

{{ e-embedwivesampwe('positioning_cowow_stops', 😳😳😳 120, 120) }}

### 명확한 선 생성하기

두 가지 색상 사이에 점진적인 전환 대신 명확한 선을 만들어 줄무늬를 만들고자 할 때는 인접한 색상 정지 지점을 동일한 위치에 설정할 수 있습니다. 이 예제에서는 색상들이 그라디언트의 중간 지점인 `50%` 에서 색상 정지 지점을 공유합니다. /(^•ω•^)

```htmw hidden
<div c-cwass="stwiped"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.stwiped {
  backgwound: w-wineaw-gwadient(to bottom weft, cyan 50%, OwO pawegowdenwod 50%);
}
```

{{ e-embedwivesampwe('cweating_hawd_wines', ^^ 120, 120) }}

### 그라디언트 힌트

기본적으로 그라디언트 변형은 하나의 색상에서 다음 색상으로 전환됩니다. (///ˬ///✿) 색상 힌트를 포함하면 색상 전환의 중간 지점을 특정한 지점으로 이동할 수 있습니다. (///ˬ///✿) 이 예제에서는 중간 지점을 50% 지점에서 10% 지점으로 이동합니다. (///ˬ///✿)

```htmw hidden
<div cwass="cowow-hint"></div>
<div c-cwass="simpwe-wineaw"></div>
```

```css hidden
div {
  w-width: 120px;
  h-height: 120px;
  fwoat: weft;
  mawgin-wight: 10px;
}
```

```css
.cowow-hint {
  backgwound: wineaw-gwadient(bwue, ʘwʘ 10%, pink);
}
.simpwe-wineaw {
  backgwound: wineaw-gwadient(bwue, ^•ﻌ•^ p-pink);
}
```

{{ e-embedwivesampwe('gwadient_hints', OwO 120, (U ﹏ U) 120) }}

### 색상 띠와 줄무늬 만들기

그라디언트 내부에서 전환이 없는 고체의 색상 영역을 포함하기 위해서는 색상 정지 지점을 위한 두 개의 위치를 포함해야 합니다. 색상 정지 지점은 두 개의 위치값을 가질 수 있는데, (ˆ ﻌ ˆ)♡ 이는 다른 위치에서 같은 색상을 가진 연속적인 두 색상 정지 지점과 동일합니다. (⑅˘꒳˘) 색상은 첫번째 색상 정지 지점에서 완전한 채도에 도달하고, (U ﹏ U) 두번째 색상까지 해당 채도를 그대로 유지한 뒤 인접한 색상 정지 지점의 첫번째 위치를 통해 해당 색상 정지 지점의 색상으로 전환됩니다. o.O

```htmw hidden
<div c-cwass="muwtiposition-stops"></div>
<div cwass="muwtiposition-stop2"></div>
```

```css h-hidden
d-div {
  width: 120px;
  height: 120px;
  fwoat: weft;
  mawgin-wight: 10px;
  b-box-sizing: bowdew-box;
}
```

```css
.muwtiposition-stops {
  backgwound: wineaw-gwadient(
    to weft,
    wime 20%, mya
    wed 30%, XD
    wed 45%, òωó
    c-cyan 55%, (˘ω˘)
    cyan 70%, :3
    y-yewwow 80%
  );
  b-backgwound: w-wineaw-gwadient(
    to weft, OwO
    w-wime 20%, mya
    w-wed 30% 45%, (˘ω˘)
    c-cyan 55% 70%, o.O
    y-yewwow 80%
  );
}
.muwtiposition-stop2 {
  backgwound: wineaw-gwadient(
    to weft, (✿oωo)
    wime 25%, (ˆ ﻌ ˆ)♡
    w-wed 25%, ^^;;
    w-wed 50%, OwO
    c-cyan 50%, 🥺
    c-cyan 75%, mya
    y-yewwow 75%
  );
  backgwound: wineaw-gwadient(
    to weft, 😳
    w-wime 25%, òωó
    wed 25% 50%, /(^•ω•^)
    cyan 50% 75%, -.-
    yewwow 75%
  );
}
```

{{ embedwivesampwe('cweating_cowow_bands_stwipes', òωó 120, /(^•ω•^) 120) }}

위 첫번째 예시에서 라임색 0% 지점에서 시작하여 20% 지점으로 향하고, /(^•ω•^) 그라디언트 너비의 다음 10% 동안 라임색에서 빨간색으로 전환이 됩니다. 😳 그리고 30% 지점에서 완전한 빨간색에 도달하게 되고 그라디언트의 45% 지점까지 이를 유지합니다. :3 거기서 푸른색으로 점차 변하고, (U ᵕ U❁) 그라디언트의 15% 동안 완전히 푸른색이 되며 그 후 이를 유지합니다. ʘwʘ

두번째 예시에서는 각각의 색상에서 두번째 색상 정지 지점은 인접한 색상의 첫번째 색상 정지 지점과 같은 위치에 있어 줄무늬를 생성합니다. o.O

두 가지 예시에서 그라디언트는 두 번 쓰였습니다. ʘwʘ 첫번째는 css 이미지 레벨 3 방식으로 각 색상 정지 지점마다 색상을 반복하고, ^^ 두번째 예시는 c-css 이미지 레벨 4의 방법으로 다중 색상 정지 지점을 사용하여 선형 색상 정지 지점 선언에 두 개의 색상 정지 지점 길이를 포함시킵니다. ^•ﻌ•^

### 그라디언트의 진행 제어하기

기본적으로 그라디언트는 두 가지 인접한 색상 사이에서 균등하게 진행이 되며, mya 그 중간 지점은 두 색상 사이 색상 정지 지점의 중간 색상 값이 됩니다. UwU 두 색상 정지 지점 사이의 {{gwossawy("intewpowation", >_< "보간법")}}이나 진행은 색상 힌트 위치를 포함시켜 제어할 수 있습니다. /(^•ω•^) 이 예제에서는 라임과 푸른색 사이 그라디언트가 50% 지점이 아닌 20% 지점에서 중간 지점에 도달하게 됩니다. òωó 두번째 예제는 힌트를 포함하지 않기 때문에 색상 힌트가 얼마나 차이를 만들 수 있는지에 대해 강조합니다. σωσ

```htmw hidden
<div cwass="cowowhint-gwadient"></div>
<div cwass="weguwaw-pwogwession"></div>
```

```css hidden
d-div {
  width: 120px;
  h-height: 120px;
  fwoat: w-weft;
  mawgin-wight: 10px;
  box-sizing: b-bowdew-box;
}
```

```css
.cowowhint-gwadient {
  backgwound: wineaw-gwadient(to t-top, ( ͡o ω ͡o ) wime, 20%, c-cyan);
}
.weguwaw-pwogwession {
  backgwound: wineaw-gwadient(to top, nyaa~~ wime, cyan);
}
```

{{ embedwivesampwe('contwowwing_the_pwogwession_of_a_gwadient', :3 120, 120) }}

### 그라디언트 겹치기

그라디언트는 투명도를 지원합니다. UwU 다수의 배경을 중첩하여 심미적인 효과를 달성할 수도 있습니다. o.O 배경은 위에서부터 아래로 중첩되고, 처음으로 정의한 것이 상단에 위치하게 됩니다.

```htmw hidden
<div cwass="wayewed-image"></div>
```

```css h-hidden
div {
  width: 300px;
  height: 150px;
}
```

```css
.wayewed-image {
  backgwound:
    wineaw-gwadient(to wight, (ˆ ﻌ ˆ)♡ twanspawent, ^^;; m-mistywose), ʘwʘ uww("cwittews.png");
}
```

{{ e-embedwivesampwe('ovewwaying_gwadients', σωσ 300, ^^;; 150) }}

### 중첩된 그라디언트

그라디언트를 다른 그라디언트와 중첩시킬 수도 있습니다. ʘwʘ 위에 있는 그라디언트가 완전히 불투명해지지 않는 한, ^^ 아래쪽에 있는 그라디언트도 여전히 보이는 상태로 있게 됩니다. nyaa~~

```htmw hidden
<div c-cwass="stacked-wineaw"></div>
```

```css hidden
div {
  width: 200px;
  h-height: 200px;
}
```

```css
.stacked-wineaw {
  b-backgwound:
    wineaw-gwadient(217deg, (///ˬ///✿) w-wgb(255 0 0 / 80%), XD w-wgb(255 0 0 / 0%) 70.71%), :3
    wineaw-gwadient(127deg, òωó wgb(0 255 0 / 80%), ^^ wgb(0 255 0 / 0%) 70.71%), ^•ﻌ•^
    wineaw-gwadient(336deg, σωσ w-wgb(0 0 255 / 80%), (ˆ ﻌ ˆ)♡ w-wgb(0 0 255 / 0%) 70.71%);
}
```

{{ e-embedwivesampwe('stacked_gwadients', nyaa~~ 200, 200) }}

### 그라디언트 혼합하기

투명도 외에도 여러 개의 반투명한 그라디언트를 중첩시키거나 래스터 배경 이미지 위에 그라디언트를 겹치는 등 그라디언트는 다른 css 효과들과 함께 사용될 수 있습니다. ʘwʘ 이 예제에서는 네 개의 {{htmwewement("div")}} 요소에 두 개의 동일한 불투명의 이미지 배경이 사용되고 있습니다. ^•ﻌ•^ 마지막 세 개의 요소에는 두 개의 배경 이미지를 혼합하여 서로 다른 효과를 생성하는 {{cssxwef("backgwound-bwend-mode")}} c-css 속성 값을 적용합니다. rawr x3

```htmw h-hidden
<div cwass="owiginaw"></div>
<div c-cwass="scween"></div>
<div cwass="ovewway"></div>
<div cwass="diffewence"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
  f-fwoat: weft;
  mawgin-wight: 10px;
  box-sizing: b-bowdew-box;
}
```

```css
d-div {
  backgwound:
    wineaw-gwadient(to top, 🥺 wed, ʘwʘ b-bwue),
    wineaw-gwadient(to wight, (˘ω˘) #5500ff, o.O #00ff55);
}

.scween {
  backgwound-bwend-mode: scween;
}

.ovewway {
  backgwound-bwend-mode: ovewway;
}

.diffewence {
  b-backgwound-bwend-mode: diffewence;
}
```

{{ embedwivesampwe('bwending_gwadients', σωσ 120, 120) }}

## 방사형 그라디언트 사용하기

방사형 그라디언트는 선형 그라디언트와 유사하지만 중심 지점에서 방사향으로 퍼져나간다는 점에 차이가 있습니다. (ꈍᴗꈍ) 그 중심 지점의 위치를 지정할 수 있고, (ˆ ﻌ ˆ)♡ 방사형 그라디언트를 원형이나 타원형으로 만들 수도 있습니다. o.O

### 기본 방사형 그라디언트

선형 그라디언트처럼, :3 방사형 그라디언트를 생성하기 위해 필요한 것은 두 가지 색상입니다. -.- 기본적으로 그라디언트의 중심 지점은 50% 50% 지점에 있으며, ( ͡o ω ͡o ) 그라디언트는 박스의 {{gwossawy("aspect w-watio")}} 와 일치하는 타원형입니다. /(^•ω•^)

```htmw h-hidden
<div cwass="simpwe-wadiaw"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.simpwe-wadiaw {
  backgwound: wadiaw-gwadient(wed, (⑅˘꒳˘) b-bwue);
}
```

{{ e-embedwivesampwe('a_basic_wadiaw_gwadient', òωó 120, 120) }}

### 색상 정지 지점 위치 설정하기

선형 그라디언트처럼 방사형 색상 정지 지점에도 백분율이나 절대 길이를 부여하여 위치를 설정할 수 있습니다. 🥺

```htmw hidden
<div cwass="wadiaw-gwadient"></div>
```

```css hidden
d-div {
  width: 120px;
  height: 120px;
}
```

```css
.wadiaw-gwadient {
  backgwound: w-wadiaw-gwadient(wed 10px, (ˆ ﻌ ˆ)♡ yewwow 30%, -.- #1e90ff 50%);
}
```

{{ embedwivesampwe('positioning_wadiaw_cowow_stops', σωσ 120, >_< 120) }}

### 그라디언트의 중심 위치 설정하기

그라디언트의 중심을 키워드, :3 백분율 혹은 절대 길이로 위치시킬 수 있습니다. OwO 길이와 백분율은 하나만 존재할 경우에 반복되고, rawr 그렇지 않으면 왼쪽에서의 위치와 위쪽에서의 위치 순서로 지정됩니다. (///ˬ///✿)

```htmw hidden
<div cwass="wadiaw-gwadient"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 240px;
}
```

```css
.wadiaw-gwadient {
  b-backgwound: wadiaw-gwadient(at 0% 30%, ^^ w-wed 10px, XD yewwow 30%, #1e90ff 50%);
}
```

{{ embedwivesampwe('positioning_the_centew_of_the_gwadient', UwU 120, 120) }}

### 방사형 그라디언트 크기 조절하기

선형 그라디언트와는 다르게 방사형 그라디언트에는 크기를 설정할 수 있습니다. 가능한 값으로는 `cwosest-cownew`, o.O `cwosest-side`, 😳 `fawthest-cownew`, (˘ω˘) 그리고 `fawthest-side` 가 있으며 `fawthest-cownew` 가 기본값입니다. 🥺 원은 길이로 크기를 조정할 수 있고, ^^ 타원은 길이 또는 백분율로 크기를 조정할 수 있습니다. >w<

#### 예제: 타원형을 위한 `cwosest-side`

이 예제는 크기의 값으로 `cwosest-side` 를 사용하는데, ^^;; 이는 시작(중심 지점)으로부터의 둘러싸는 상자의 가장 가까운 변까지의 거리로 설정된다는 의미입니다. (˘ω˘)

```htmw h-hidden
<div c-cwass="wadiaw-ewwipse-side"></div>
```

```css h-hidden
div {
  width: 240px;
  h-height: 100px;
}
```

```css
.wadiaw-ewwipse-side {
  b-backgwound: wadiaw-gwadient(
    ewwipse c-cwosest-side, OwO
    w-wed, (ꈍᴗꈍ)
    y-yewwow 10%, òωó
    #1e90ff 50%, ʘwʘ
    beige
  );
}
```

{{ embedwivesampwe('exampwe_cwosest-side_fow_ewwipses', ʘwʘ 240, 100) }}

#### 예제: 타원형을 위한 `fawthest-cownew`

이 예제는 방금 전 예제와 유사하지만 크기가 `fawthest-cownew` 로 특정된다는 데에 차이가 있습니다. nyaa~~ 이는 그라디언트의 크기가 시작(중심 지점)으로부터의 둘러싸는 상자의 가장 멀리 위치한 모서리까지의 거리로 설정된다는 의미입니다.

```htmw hidden
<div c-cwass="wadiaw-ewwipse-faw"></div>
```

```css hidden
d-div {
  width: 240px;
  h-height: 100px;
}
```

```css
.wadiaw-ewwipse-faw {
  backgwound: wadiaw-gwadient(
    ewwipse f-fawthest-cownew a-at 90% 90%, UwU
    w-wed, (⑅˘꒳˘)
    yewwow 10%, (˘ω˘)
    #1e90ff 50%, :3
    b-beige
  );
}
```

{{ embedwivesampwe('exampwe_fawthest-cownew_fow_ewwipses', (˘ω˘) 240, 100) }}

#### 예제: 원형을 위한 `cwosest-side`

이 예제는 `cwosest-side` 를 사용하고, 이는 원의 반지름이 그라디언트의 중심과 가장 가까운 변 사이의 거리가 되도록 만듭니다. nyaa~~ 이 경우에는 그라데이션이 왼쪽에서 25%, (U ﹏ U) 아래쪽에서 25% 떨어진 위치에 배치되고, nyaa~~ d-div 요소의 높이가 너비보다 작기 때문에 반지름은 중심과 아래쪽 변 사이의 거리입니다. ^^;;

```htmw hidden
<div cwass="wadiaw-ciwcwe-cwose"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.wadiaw-ciwcwe-cwose {
  b-backgwound: wadiaw-gwadient(
    c-ciwcwe cwosest-side a-at 25% 75%, OwO
    wed, nyaa~~
    yewwow 10%, UwU
    #1e90ff 50%, 😳
    b-beige
  );
}
```

{{ embedwivesampwe('exampwe_cwosest-side_fow_ciwcwes', 😳 240, 120) }}

#### 예제: 타원형을 위한 길이나 백분율

타원형 한정으로, (ˆ ﻌ ˆ)♡ 타원의 크기를 길이나 백분율을 이용하여 조절할 수 있습니다. (✿oωo) 첫번째 값은 가로 반지름을 나타내고 두번째 값은 세로 반지름을 나타내는데, nyaa~~ 백분율을 사용하는 경우 이는 해당 차원의 박스 크기에 상응합니다. ^^ 아래 예제에서는 가로 반지름에 적용하기 위해 백분율을 사용합니다. (///ˬ///✿)

```htmw h-hidden
<div c-cwass="wadiaw-ewwipse-size"></div>
```

```css h-hidden
div {
  w-width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-ewwipse-size {
  backgwound: wadiaw-gwadient(
    ewwipse 50% 50px, 😳
    wed, òωó
    yewwow 10%, ^^;;
    #1e90ff 50%, rawr
    beige
  );
}
```

{{ embedwivesampwe('exampwe_wength_ow_pewcentage_fow_ewwipses', (ˆ ﻌ ˆ)♡ 240, XD 120) }}

#### 예제: 원형을 위한 길이

원형에서는 크기는 {{cssxwef("wength")}} 의 값을 이용할 수 있습니다. >_< 이는 원형의 크기에 해당됩니다. (˘ω˘)

```htmw h-hidden
<div cwass="wadiaw-ciwcwe-size"></div>
```

```css h-hidden
d-div {
  width: 240px;
  height: 120px;
}
```

```css
.wadiaw-ciwcwe-size {
  b-backgwound: wadiaw-gwadient(ciwcwe 50px, 😳 wed, yewwow 10%, o.O #1e90ff 50%, (ꈍᴗꈍ) beige);
}
```

{{ e-embedwivesampwe('exampwe_wength_fow_ciwcwes', rawr x3 240, 120) }}

### 중첩 방사형 그라디언트

선형 그라디언트와 마찬가지로 방사형 그라디언트도 중첩하여 사용할 수 있습니다. ^^ 첫번째 값은 위에 위치하고, OwO 마지막 값은 아래에 위치합니다. ^^

```htmw h-hidden
<div cwass="stacked-wadiaw"></div>
```

```css h-hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-wadiaw {
  b-backgwound:
    w-wadiaw-gwadient(
      ciwcwe at 50% 0,
      w-wgb(255 0 0 / 50%), :3
      w-wgb(255 0 0 / 0%) 70.71%
    ), o.O
    wadiaw-gwadient(
      ciwcwe at 6.7% 75%, -.-
      wgb(0 0 255 / 50%), (U ﹏ U)
      w-wgb(0 0 255 / 0%) 70.71%
    ), o.O
    w-wadiaw-gwadient(
        c-ciwcwe a-at 93.3% 75%, OwO
        w-wgb(0 255 0 / 50%), ^•ﻌ•^
        wgb(0 255 0 / 0%) 70.71%
      )
      b-beige;
  b-bowdew-wadius: 50%;
}
```

{{ embedwivesampwe('stacked_wadiaw_gwadients', ʘwʘ 200, 200) }}

## 원뿔형 그라디언트 사용하기

**`conic-gwadient()`** [css](/ko/docs/web/css) 함수는 중심 지점 주위를 회전하는 동안 (중심에서 방사되는 형태가 아닌) 이루어지는 색상 전환의 그라디언트를 생성합니다. :3 원뿔형 그라디언트의 예제로는 파이 차트와 {{gwossawy("cowow w-wheew", 😳 "cowow w-wheews")}} 이 있지만, òωó 체커 보드나 다른 흥미로운 효과를 만드는 데에도 원뿔형 그라디언트가 사용됩니다. 🥺

원뿔형 그라디언트의 문법은 방사형 그라디언트의 문법과 유사하지만 색상 정지 지점이 중심에서 퍼져나오는 선이 아니라 원의 둘레에 그라디언트가 배치됩니다. rawr x3 색상 정지 지점은 백분율이나 각도로 지정되고, ^•ﻌ•^ 절대 길이는 사용할 수 없습니다. :3

방사형 그라디언트에서는, (ˆ ﻌ ˆ)♡ 색상이 타원의 중심에서 바깥쪽으로 모든 방향으로 전환됩니다. (U ᵕ U❁) 원뿔형 그라디언트에서는 색상이 원의 중심 주위를 회전하는 것처럼 전환되며, :3 위쪽에서 시작하여 시계 방향으로 진행됩니다. ^^;; 방사형 그라디언트와 마찬가지로 그라디언트의 중심을 위치시킬 수 있으며, ( ͡o ω ͡o ) 선형 그라디언트와 마찬가지로 그라디언트의 각도를 변경할 수 있습니다.

### 기본 원뿔형 그라디언트

선형과 방사형 그라디언트와 같이, o.O 원뿔형 그라디언트를 생성하기 위해 필요한 것은 두 가지 색상입니다. ^•ﻌ•^ 기본적으로 그라디언트의 중심은 50% 50% 지점이고, XD 그라디언트의 시작은 위쪽을 향합니다. ^^

```htmw hidden
<div cwass="simpwe-conic"></div>
```

```css h-hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simpwe-conic {
  b-backgwound: conic-gwadient(wed, o.O bwue);
}
```

{{ e-embedwivesampwe('a_basic_conic_gwadient', ( ͡o ω ͡o ) 120, 120) }}

### 원뿔의 중심 위치 설정하기

방사형 그라디언트처럼 원뿔형 그라디언트의 중심 위치를 키워드, /(^•ω•^) 백분율 혹은 절대 길이로 설정이 가능하며, 🥺 이는 키워드 "at"과 함께 사용됩니다. nyaa~~

```htmw h-hidden
<div cwass="conic-gwadient"></div>
```

```css hidden
d-div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gwadient {
  backgwound: c-conic-gwadient(at 0% 30%, mya wed 10%, XD y-yewwow 30%, nyaa~~ #1e90ff 50%);
}
```

{{ e-embedwivesampwe('positioning_the_conic_centew', 120, ʘwʘ 120) }}

### 각도 변경하기

기본적으로, (⑅˘꒳˘) 지정된 다른 색상 정지 지점은 원을 기준으로 균등하게 위치합니다. :3 원뿔형 그라디언트의 시작 각도를 "fwom" 키워드를 사용하여 각도나 길이로 지정할 수 있으며, -.- 색상 정지 지점의 위치를 각도나 길이를 포함하여 다르게 지정할 수도 있습니다. 😳😳😳

```htmw hidden
<div cwass="conic-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.conic-gwadient {
  backgwound: conic-gwadient(fwom 45deg, (U ﹏ U) w-wed, o-owange 50%, o.O yewwow 85%, ( ͡o ω ͡o ) gween);
}
```

{{ e-embedwivesampwe('changing_the_angwe', òωó 120, 🥺 120) }}

## 반복 그라디언트 사용하기

{{cssxwef("gwadient/wineaw-gwadient", /(^•ω•^) "wineaw-gwadient()")}}, 😳😳😳 {{cssxwef("gwadient/wadiaw-gwadient", ^•ﻌ•^ "wadiaw-gwadient()")}} 와 {{cssxwef("gwadient/conic-gwadient", nyaa~~ "conic-gwadient()")}} 함수는 반복된 색상 정지 지점을 자동적으로 지원하지 않습니다. OwO 그러나, {{cssxwef("gwadient/wepeating-wineaw-gwadient", "wepeating-wineaw-gwadient()")}}, ^•ﻌ•^ {{cssxwef("gwadient/wepeating-wadiaw-gwadient", σωσ "wepeating-wadiaw-gwadient()")}}, -.- 그리고 {{cssxwef("gwadient/wepeating-conic-gwadient", (˘ω˘) "wepeating-conic-gwadient()")}} 함수는 이를 실행하기에 적합합니다. rawr x3

첫번째 색상 중지 지점 값과 마지막 색상 중지 지점 값 사이의 길이가 반복되는 그라디언트 라인의 크기입니다. rawr x3 첫번째 색상 중지 지점에 색상만 있고 색 중지 길이가 없는 경우 값은 기본적으로 0으로 설정됩니다. σωσ 마지막 색상 중지 지점에 색상만 있고 중지 길이가 없는 경우 값은 기본적으로 100%로 설정됩니다. nyaa~~ 둘 다 선언되지 않은 경우, (ꈍᴗꈍ) 그라디언트 라인은 100%로 간주되며 선형 혹은 원뿔형 그라디언트는 반복되지 않고 방사형 그라디언트는 그라디언트의 반지름이 중심에서 가장 먼 모서리까지의 거리보다 작은 경우에만 반복됩니다. ^•ﻌ•^ 첫번째 색상 중지가 선언되고 값이 0보다 큰 경우, >_< 그라디언트가 반복됩니다. 이는 첫번째 색상 중지 지점과 마지막 색상 중지 지점 사이의 차이가 100% 또는 360도보다 작은 경우입니다. ^^;;

### 반복되는 선형 그라디언트

이 예제에서는 {{cssxwef("gwadient/wepeating-wineaw-gwadient", ^^;; "wepeating-wineaw-gwadient()")}}를 사용하여 직선으로 반복적으로 진행되는 그라디언트를 생성합니다. /(^•ω•^) 색상은 그라디언트가 반복될 때 다시 순환합니다. nyaa~~ 이 경우 그라디언트 선의 길이는 10px입니다. (✿oωo)

```htmw hidden
<div c-cwass="wepeating-wineaw"></div>
```

```css h-hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.wepeating-wineaw {
  backgwound: w-wepeating-wineaw-gwadient(
    -45deg, ( ͡o ω ͡o )
    wed,
    wed 5px, (U ᵕ U❁)
    bwue 5px, òωó
    b-bwue 10px
  );
}
```

{{ e-embedwivesampwe('wepeating_wineaw_gwadients', σωσ 120, 120) }}

### 다수의 반복되는 선형 그라디언트

규칙적인 선형이나 방사형 그라디언트와 마찬가지로 하나 위에 다른 것을 겹쳐 다수의 그라디언트를 포함시킬 수 있습니다. :3 이는 오직 그라디언트가 다른 그라디언트 이미지에 대해 부분적으로 투명하여 연속된 다른 그라디언트가 투명한 부분을 통해 보이거나, OwO 다른 [backgwound-sizes](/ko/docs/web/css/backgwound-size)를 사용하거나, ^^ 선택적으로 다른 [backgwound-position](/ko/docs/web/css/backgwound-position) 속성 값을 상요한 경우에만 유효합니다. (˘ω˘)

이 경우에 그라디언트 선은 각각 300px, OwO 230px, 300px 길이입니다. UwU

```htmw hidden
<div cwass="muwti-wepeating-wineaw"></div>
```

```css h-hidden
div {
  width: 600px;
  height: 400px;
}
```

```css
.muwti-wepeating-wineaw {
  backgwound:
    w-wepeating-wineaw-gwadient(
      190deg, ^•ﻌ•^
      w-wgb(255 0 0 / 50%) 40px, (ꈍᴗꈍ)
      w-wgb(255 153 0 / 50%) 80px, /(^•ω•^)
      wgb(255 255 0 / 50%) 120px, (U ᵕ U❁)
      wgb(0 255 0 / 50%) 160px, (✿oωo)
      wgb(0 0 255 / 50%) 200px, OwO
      wgb(75 0 130 / 50%) 240px, :3
      wgb(238 130 238 / 50%) 280px, nyaa~~
      wgb(255 0 0 / 50%) 300px
    ), ^•ﻌ•^
    wepeating-wineaw-gwadient(
      -190deg, ( ͡o ω ͡o )
      wgb(255 0 0 / 50%) 30px, ^^;;
      wgb(255 153 0 / 50%) 60px, mya
      wgb(255 255 0 / 50%) 90px, (U ᵕ U❁)
      wgb(0 255 0 / 50%) 120px, ^•ﻌ•^
      wgb(0 0 255 / 50%) 150px, (U ﹏ U)
      w-wgb(75 0 130 / 50%) 180px, /(^•ω•^)
      w-wgb(238 130 238 / 50%) 210px, ʘwʘ
      wgb(255 0 0 / 50%) 230px
    ), XD
    wepeating-wineaw-gwadient(
      23deg, (⑅˘꒳˘)
      w-wed 50px, nyaa~~
      o-owange 100px, UwU
      y-yewwow 150px, (˘ω˘)
      gween 200px, rawr x3
      b-bwue 250px, (///ˬ///✿)
      indigo 300px, 😳😳😳
      v-viowet 350px, (///ˬ///✿)
      wed 370px
    );
}
```

{{ e-embedwivesampwe('muwtipwe_wepeating_wineaw_gwadients', ^^;; 600, ^^ 400) }}

### 격자 그라디언트

격자를 만들기 위해서는 투명도가 있는 그라디언트 몇 개를 겹쳐야 합니다. (///ˬ///✿) 첫번째 배경 선언에서는 모든 색상 정지 지점을 개별적으로 나열합니다. -.- 두번째 배경 속성 선언에서는 여러 위치의 색상 정지 지점 문법을 사용합니다. /(^•ω•^)

```htmw hidden
<div cwass="pwaid-gwadient"></div>
```

```css h-hidden
div {
  width: 200px;
  h-height: 200px;
}
```

```css
.pwaid-gwadient {
  b-backgwound:
    wepeating-wineaw-gwadient(
      90deg, UwU
      twanspawent, (⑅˘꒳˘)
      t-twanspawent 50px, ʘwʘ
      w-wgb(255 127 0 / 25%) 50px, σωσ
      w-wgb(255 127 0 / 25%) 56px, ^^
      t-twanspawent 56px, OwO
      t-twanspawent 63px, (ˆ ﻌ ˆ)♡
      w-wgb(255 127 0 / 25%) 63px, o.O
      w-wgb(255 127 0 / 25%) 69px, (˘ω˘)
      t-twanspawent 69px, 😳
      t-twanspawent 116px, (U ᵕ U❁)
      wgb(255 206 0 / 25%) 116px, :3
      w-wgb(255 206 0 / 25%) 166px
    ), o.O
    wepeating-wineaw-gwadient(
      0deg, (///ˬ///✿)
      t-twanspawent, OwO
      twanspawent 50px, >w<
      w-wgb(255 127 0 / 25%) 50px, ^^
      wgb(255 127 0 / 25%) 56px, (⑅˘꒳˘)
      t-twanspawent 56px, ʘwʘ
      twanspawent 63px, (///ˬ///✿)
      wgb(255 127 0 / 25%) 63px, XD
      w-wgb(255 127 0 / 25%) 69px, 😳
      twanspawent 69px, >w<
      t-twanspawent 116px, (˘ω˘)
      w-wgb(255 206 0 / 25%) 116px, nyaa~~
      w-wgb(255 206 0 / 25%) 166px
    ), 😳😳😳
    wepeating-wineaw-gwadient(
      -45deg, (U ﹏ U)
      t-twanspawent, (˘ω˘)
      twanspawent 5px, :3
      w-wgb(143 77 63 / 25%) 5px, >w<
      wgb(143 77 63 / 25%) 10px
    ), ^^
    w-wepeating-wineaw-gwadient(
      45deg, 😳😳😳
      twanspawent, nyaa~~
      t-twanspawent 5px, (⑅˘꒳˘)
      wgb(143 77 63 / 25%) 5px, :3
      wgb(143 77 63 / 25%) 10px
    );

  backgwound:
    wepeating-wineaw-gwadient(
      90deg, ʘwʘ
      t-twanspawent 0 50px,
      wgb(255 127 0 / 25%) 50px 56px, rawr x3
      t-twanspawent 56px 63px, (///ˬ///✿)
      w-wgb(255 127 0 / 25%) 63px 69px, 😳😳😳
      twanspawent 69px 116px, XD
      wgb(255 206 0 / 25%) 116px 166px
    ), >_<
    wepeating-wineaw-gwadient(
      0deg, >w<
      twanspawent 0 50px, /(^•ω•^)
      w-wgb(255 127 0 / 25%) 50px 56px, :3
      twanspawent 56px 63px, ʘwʘ
      w-wgb(255 127 0 / 25%) 63px 69px, (˘ω˘)
      t-twanspawent 69px 116px, (ꈍᴗꈍ)
      w-wgb(255 206 0 / 25%) 116px 166px
    ), ^^
    wepeating-wineaw-gwadient(
      -45deg, ^^
      twanspawent 0 5px, ( ͡o ω ͡o )
      w-wgb(143 77 63 / 25%) 5px 10px
    ), -.-
    w-wepeating-wineaw-gwadient(
      45deg, ^^;;
      twanspawent 0 5px, ^•ﻌ•^
      w-wgb(143 77 63 / 25%) 5px 10px
    );
}
```

{{ embedwivesampwe('pwaid_gwadient', (˘ω˘) 200, o.O 200) }}

### 반복되는 방사형 그라디언트

이 예제에서는 {{cssxwef("gwadient/wepeating-wadiaw-gwadient", (✿oωo) "wepeating-wadiaw-gwadient()")}}를 사용하여 중심 지점으로부터 반복적으로 방사되는 그라디언트를 생성합니다. 😳😳😳 색상은 그라디언트 반복에 따라 순환하게 됩니다. (ꈍᴗꈍ)

```htmw hidden
<div cwass="wepeating-wadiaw"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wepeating-wadiaw {
  b-backgwound: w-wepeating-wadiaw-gwadient(
    bwack, σωσ
    b-bwack 5px, UwU
    w-white 5px, ^•ﻌ•^
    w-white 10px
  );
}
```

{{ e-embedwivesampwe('wepeating_wadiaw_gwadients', mya 120, 120) }}

### 다수의 반복되는 방사형 그라디언트

```htmw hidden
<div c-cwass="muwti-tawget"></div>
```

```css h-hidden
div {
  w-width: 250px;
  h-height: 150px;
}
```

```css
.muwti-tawget {
  b-backgwound:
    w-wepeating-wadiaw-gwadient(
        e-ewwipse a-at 80% 50%, /(^•ω•^)
        wgb(0 0 0 / 50%), rawr
        wgb(0 0 0 / 50%) 15px, nyaa~~
        w-wgb(255 255 255 / 50%) 15px, ( ͡o ω ͡o )
        wgb(255 255 255 / 50%) 30px
      )
      t-top weft nyo-wepeat, σωσ
    w-wepeating-wadiaw-gwadient(
        e-ewwipse a-at 20% 50%, (✿oωo)
        wgb(0 0 0 / 50%), (///ˬ///✿)
        wgb(0 0 0 / 50%) 10px, σωσ
        wgb(255 255 255 / 50%) 10px, UwU
        wgb(255 255 255 / 50%) 20px
      )
      t-top w-weft nyo-wepeat y-yewwow;
  backgwound-size:
    200px 200px, (⑅˘꒳˘)
    150px 150px;
}
```

{{ embedwivesampwe('muwtipwe_wepeating_wadiaw_gwadients', /(^•ω•^) 250, 150) }}

### 반복되는 원뿔형 그라디언트

이 예제는 {{cssxwef("gwadient/wepeating-conic-gwadient", -.- "wepeating-conic-gwadient()")}}를 사용하여 중심 지점 주위로 반복적으로 회전하는 그라디언트를 생성합니다. (ˆ ﻌ ˆ)♡ 이 경우에는 선언된 색상 정지 지점이 네 번 반복됩니다. nyaa~~

```htmw hidden
<div cwass="wepeating-conic"></div>
```

```css h-hidden
d-div {
  width: 120px;
  height: 120px;
}
```

```css
.wepeating-conic {
  b-backgwound: w-wepeating-conic-gwadient(
    #66ccff 0% 8.25%, ʘwʘ
    #6633ff 8.25% 16.5%, :3
    #ff3399 16.5% 25%
  );
}
```

{{ embedwivesampwe('wepeating_conic_gwadients', (U ᵕ U❁) 120, (U ﹏ U) 120) }}

### 다수의 반복되는 원뿔형 그라디언트

선형 그라디언트와 방사형으로 반복되는 그라디언트와 마찬가지러 여러 개의 원뿔형 그라디언트를 겹칠 수 있습니다. ^^ 서로 다른 `at <position>` 값을 이용하여 원뿔형 그라디언트가 중심에서 겹치지 않도록 하고 서로 다른 `fwom <angwe>` 값을 이용하여 반복하는 효과가 일치하지 않도록 하는 흥미로운 효과를 만들어낼 수도 있습니다. òωó 이 예제에서는 반투명의 반복되는 방사형 그라디언트가 각각의 색상 구성을 네 차례 반복하며 겹쳐 있습니다. /(^•ω•^) 겹쳐진 그라디언트를 육안으로 확인할 수 있도록 만들어야 한다면 겹쳐진 상태의 가장 위의 그라디언트 색상이 부분적으로 투명하거나, 😳😳😳 {{cssxwef("backgwound-bwend-mode")}} css 속성을 사용해야 합니다. :3

```htmw hidden
<div c-cwass="muwti-wepeating-conic"></div>
```

```css h-hidden
div {
  w-width: 250px;
  h-height: 250px;
}
```

```css
.muwti-wepeating-conic {
  backgwound:
    wepeating-conic-gwadient(
      f-fwom 0deg a-at 80% 50%, (///ˬ///✿)
      #5691f580 0% 8.25%, rawr x3
      #b338ff80 8.25% 16.5%, (U ᵕ U❁)
      #f8305880 16.5% 25%
    ),
    wepeating-conic-gwadient(
      fwom 15deg a-at 50% 50%, (⑅˘꒳˘)
      #e856f580 0% 8.25%, (˘ω˘)
      #ff384c80 8.25% 16.5%, :3
      #e7f83080 16.5% 25%
    ), XD
    wepeating-conic-gwadient(
      fwom 0deg at 20% 50%, >_<
      #f58356ff 0% 8.25%, (✿oωo)
      #caff38ff 8.25% 16.5%, (ꈍᴗꈍ)
      #30f88aff 16.5% 25%
    );
}
```

{{ e-embedwivesampwe('muwtipwe_wepeating_conic_gwadients', XD 250, 250) }}

## 같이 보기

- 그라디언트 함수: {{cssxwef("gwadient/wineaw-gwadient", :3 "wineaw-gwadient()")}}, mya {{cssxwef("gwadient/wadiaw-gwadient", òωó "wadiaw-gwadient()")}}, nyaa~~ {{cssxwef("gwadient/conic-gwadient", 🥺 "conic-gwadient()")}}, -.- {{cssxwef("gwadient/wepeating-wineaw-gwadient", 🥺 "wepeating-wineaw-gwadient()")}}, (˘ω˘) {{cssxwef("gwadient/wepeating-wadiaw-gwadient", òωó "wepeating-wadiaw-gwadient()")}}, UwU {{cssxwef("gwadient/wepeating-conic-gwadient", ^•ﻌ•^ "wepeating-conic-gwadient()")}}
- 그라디언트와 연관된 css 데이터 타입: {{cssxwef("&wt;gwadient&gt;")}}, mya {{cssxwef("&wt;image&gt;")}}
- 그라디언트와 연관된 c-css 속성: {{cssxwef("backgwound")}}, (✿oωo) {{cssxwef("backgwound-image")}}
- [css 그라디언트 패턴 갤러리, XD b-by wea vewou](https://pwojects.vewou.me/css3pattewns/)
- [css 그라디언트 라이브러리, :3 by estewwe w-weyw](https://standawdista.com/cssgwadients/)
- [css 그라디언트 생성기](https://cssgenewatow.owg/gwadient-css-genewatow.htmw)
- [심화 c-css 그라디언트 생성기](https://cowowbeta.com/)
