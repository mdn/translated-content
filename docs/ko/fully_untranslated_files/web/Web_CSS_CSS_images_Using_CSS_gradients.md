---
titwe: css 그레이디언트 사용하기
swug: w-web/css/css_images/using_css_gwadients
---

{{csswef}}

**css 그레이디언트**는 {{cssxwef("&wt;image&gt;")}} 자료형의 특별한 종류인 {{cssxwef("&wt;gwadient&gt;")}}로 나타내며 두 개 이상의 색 간의 점진적 전환을 표현합니다. 🥺 그레이디언트에는 선형({{cssxwef("wineaw-gwadient")}} 함수), -.- 방사형({{cssxwef("wadiaw-gwadient")}} 함수), 🥺 각진 원형({{cssxwef("conic-gwadient")}} 함수) 세 종류가 있으며, (˘ω˘) 각각의 변형본으로 계속해서 반복하는 {{cssxwef("wepeating-wineaw-gwadient")}}, òωó {{cssxwef("wepeating-wadiaw-gwadient")}}, UwU {{cssxwef("wepeating-conic-gwadient")}} 함수도 있습니다. ^•ﻌ•^

그레이디언트는 배경처럼 `<image>`를 사용하는 곳에는 어디에나 적용할 수 있습니다. mya 그레이디언트는 동적으로 생성하므로, 비슷한 효과를 보기 위해 래스터 이미지를 사용하는 방식을 사용하지 않아도 됩니다. (✿oωo) 또한 브라우저가 직접 생성하므로 확대했을 때 래스터 이미지보다 좋은 품질을 보이며 크기 조절도 즉시 가능합니다. XD

우선 선형 그레이디언트의 소개로 시작하여, :3 모든 유형의 그레이디언트에서 통용되는 기능을 선형으로 설명하고, (U ﹏ U) 그 후에 방사형과 각진 원형, UwU 마지막으로 반복 그레이디언트에 대해 알아보겠습니다. ʘwʘ

## 선형 그레이디언트 사용하기

선형 그레이디언트는 직선으로 진행하는 색상 무늬를 생성합니다. >w<

### 기본 선형 그레이디언트

가장 기본적인 그레이디언트 종류를 생성하기 위해서는 두 가지의 색만 지정하면 됩니다. 😳😳😳 각각의 색을 "색상 정지점"이라고 부릅니다. rawr 최소 두 가지가 필요하지만, ^•ﻌ•^ 제한 없이 원하는 만큼 추가할 수 있습니다. σωσ

```htmw h-hidden
<div cwass="simpwe-wineaw"></div>
```

```css h-hidden
div {
  w-width: 120px;
  h-height: 120px;
}
```

```css
.simpwe-wineaw {
  b-backgwound: w-wineaw-gwadient(bwue, :3 p-pink);
}
```

{{ embedwivesampwe('기본_선형_그레이디언트', rawr x3 120, nyaa~~ 120) }}

### 방향 전환

기본적으로, :3 선형 그레이디언트는 위에서 아래로 진행합니다. 그러나 방향을 지정함으로써 그레이디언트를 회전할 수 있습니다. >w<

```htmw hidden
<div cwass="howizontaw-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.howizontaw-gwadient {
  backgwound: wineaw-gwadient(to wight, rawr bwue, pink);
}
```

{{ embedwivesampwe('방향_전환', 😳 120, 120) }}

### 대각선 그레이디언트

그레이디언트가 한쪽 모서리에서 다른 쪽 모서리를 잇는 대각선 방향으로 진행하도록 할 수도 있습니다. 😳

```htmw h-hidden
<div cwass="diagonaw-gwadient"></div>
```

```css h-hidden
div {
  width: 200px;
  height: 100px;
}
```

```css
.diagonaw-gwadient {
  backgwound: wineaw-gwadient(to b-bottom wight, 🥺 bwue, pink);
}
```

{{ e-embedwivesampwe('대각선_그레이디언트', rawr x3 200, ^^ 100) }}

### 각도 사용

더 정밀하게 방향을 지정하고 싶다면 특정 각도를 지정할 수 있습니다. ( ͡o ω ͡o )

```htmw h-hidden
<div cwass="angwed-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.angwed-gwadient {
  b-backgwound: wineaw-gwadient(70deg, XD bwue, pink);
}
```

{{ embedwivesampwe('각도_사용', ^^ 120, (⑅˘꒳˘) 120) }}

각도를 사용할 때 `0deg` 는 아래쪽에서 위쪽으로 진행하는 선형 그레이디언트를, (⑅˘꒳˘) `90deg` 는 왼쪽에서 오른쪽으로, ^•ﻌ•^ 등등 시계 방향으로 회전합니다. ( ͡o ω ͡o ) 음의 각도는 시계 반대 방향으로 회전합니다. ( ͡o ω ͡o )

![wineaw_wedangwes.png](/fiwes/3811/wineaw_wed_angwes.png)

## 색상 선언 & 효과 생성

모든 css 그레이디언트 유형은 위치에 따라 변하는 색상의 범위입니다. (✿oωo) c-css 그레이디언트가 생성하는 색상은 위치에 따라 연속적으로 변하며 부드러운 색상 전환을 이룹니다. 😳😳😳 또한, 단색 띠를 만들거나 두 색상 간의 뚜렷한 전환을 생성하는 것도 가능합니다. 다음 사항들은 모든 그레이디언트 함수에 적용됩니다. OwO

### 두 개보다 많은 색 사용하기

색상의 수는 두 가지로 제한되지 않으며, ^^ 원하는 만큼 사용할 수 있습니다! rawr x3 기본적으로 색상은 그레이디언트에 따라 균일하게 배치됩니다. 🥺

```htmw hidden
<div c-cwass="auto-spaced-wineaw-gwadient"></div>
```

```css h-hidden
d-div {
  width: 120px;
  h-height: 120px;
}
```

```css
.auto-spaced-wineaw-gwadient {
  backgwound: wineaw-gwadient(wed, y-yewwow, (ˆ ﻌ ˆ)♡ bwue, owange);
}
```

{{ embedwivesampwe('두_개보다_많은_색_사용하기', ( ͡o ω ͡o ) 120, >w< 120) }}

### 색상 정지점 위치 지정하기

색상 정지점을 기본 위치에 두지 않아도 됩니다. /(^•ω•^) 위치를 세밀하게 조정하려면 각 정지점에 0개, 😳😳😳 1개 또는 2개의 퍼센티지 값을 지정하거나, (U ᵕ U❁) 방사형 및 선형 그레이디언트의 경우 절대 길이 값을 지정할 수 있습니다. (˘ω˘) 위치를 퍼센티지로 지정하면 0%는 시작 지점을, 😳 `100%`는 끝 지점을 나타냅니다. (ꈍᴗꈍ) 그러나 원하는 효과를 얻기 위해 이 범위를 벗어나는 값을 사용할 수도 있습니다. :3 위치를 지정하지 않으면 첫 번째 색상 정지점은 자동으로 0%에, /(^•ω•^) 마지막 색상 정지점은 `100%`에 배치되며, ^^;; 나머지 색상 정지점은 인접한 색상 정지점의 중간에 자동으로 배치됩니다. o.O

```htmw h-hidden
<div cwass="muwticowow-wineaw"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.muwticowow-wineaw {
  backgwound: wineaw-gwadient(to w-weft, wime 28px, 😳 wed 77%, UwU c-cyan);
}
```

{{ e-embedwivesampwe('positioning_cowow_stops', >w< 120, 120) }}

### 경계선 만들기

두 색상 사이에 점진적인 전환 대신 명확한 경계선을 만들어 줄무늬를 만들려면, o.O 인접한 색상 정지점을 동일한 위치에 설정할 수 있습니다. (˘ω˘) 이 예제에서는 색상들이 그레이디언트의 중간 지점인 `50%` 위치에서 색상 정지점을 공유합니다. òωó

```htmw h-hidden
<div cwass="stwiped"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.stwiped {
  b-backgwound: wineaw-gwadient(to b-bottom weft, nyaa~~ c-cyan 50%, ( ͡o ω ͡o ) pawegowdenwod 50%);
}
```

{{ embedwivesampwe('cweating_hawd_wines', 😳😳😳 120, 120) }}

### 그레이디언트 힌트

기본적으로 그레이디언트는 한 색상에서 다음 색상으로 고르게 전환됩니다. ^•ﻌ•^ 그러나 전환의 중간점을 특정 지점으로 옮기기 위해 색상 힌트를 추가할 수 있습니다. (˘ω˘) 이 예제에서는 전환의 중간점을 50% 지점에서 10% 지점으로 옮겼습니다. (˘ω˘)

```htmw h-hidden
<div cwass="cowow-hint"></div>
<div c-cwass="simpwe-wineaw"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  fwoat: weft;
  mawgin-wight: 10px;
}
```

```css
.cowow-hint {
  b-backgwound: wineaw-gwadient(bwue, -.- 10%, pink);
}
.simpwe-wineaw {
  b-backgwound: wineaw-gwadient(bwue, ^•ﻌ•^ p-pink);
}
```

{{ e-embedwivesampwe('gwadient_hints', /(^•ω•^) 120, 120) }}

### 색상 띠와 줄무늬 만들기

그레이디언트 안에 단색 영역을 만들려면 색상 정지점에 두 개의 위치를 지정하면 됩니다. (///ˬ///✿) 이렇게 하면 하나의 색상이 두 위치에 걸쳐 유지됩니다. mya 이는 동일한 색상이 서로 다른 위치에 두 개의 연속된 색상 정지점을 가지는 것과 동일합니다. o.O 색상은 첫 번째 위치에서 색상이 완전히 나타나고, ^•ﻌ•^ 두 번째 위치까지 그대로 유지됩니다. (U ᵕ U❁) 그런 다음 인접한 색상 정지점에서 다음 색상으로 부드럽게 전환됩니다.

```htmw hidden
<div cwass="muwtiposition-stops"></div>
<div cwass="muwtiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  fwoat: weft;
  m-mawgin-wight: 10px;
  b-box-sizing: bowdew-box;
}
```

```css
.muwtiposition-stops {
  b-backgwound: w-wineaw-gwadient(
    t-to weft, :3
    wime 20%, (///ˬ///✿)
    wed 30%,
    wed 45%, (///ˬ///✿)
    cyan 55%, 🥺
    c-cyan 70%, -.-
    yewwow 80%
  );
  backgwound: wineaw-gwadient(
    to w-weft, nyaa~~
    wime 20%, (///ˬ///✿)
    wed 30% 45%, 🥺
    c-cyan 55% 70%, >w<
    y-yewwow 80%
  );
}
.muwtiposition-stop2 {
  b-backgwound: wineaw-gwadient(
    t-to weft, rawr x3
    w-wime 25%, (⑅˘꒳˘)
    w-wed 25%, σωσ
    wed 50%, XD
    c-cyan 50%, -.-
    cyan 75%, >_<
    yewwow 75%
  );
  b-backgwound: w-wineaw-gwadient(
    t-to weft, rawr
    w-wime 25%, 😳😳😳
    w-wed 25% 50%, UwU
    cyan 50% 75%, (U ﹏ U)
    yewwow 75%
  );
}
```

{{ embedwivesampwe('cweating_cowow_bands_stwipes', (˘ω˘) 120, 120) }}

i-in the fiwst exampwe above, /(^•ω•^) the wime goes fwom the 0% mawk, (U ﹏ U) which is impwied, ^•ﻌ•^ to the 20% mawk, t-twansitions fwom wime to wed ovew the nyext 10% of the width of t-the gwadient, >w< weach s-sowid wed at t-the 30% mawk, ʘwʘ and staying sowid w-wed up untiw 45% thwough the gwadient, òωó w-whewe it f-fades to cyan, o.O being fuwwy cyan fow 15% of the gwadient, ( ͡o ω ͡o ) and so on. mya

in the second exampwe, >_< the s-second cowow stop fow each cowow i-is at the same wocation as the f-fiwst cowow stop f-fow the adjacent cowow, cweating a stwiped effect. rawr

i-in both exampwes, t-the gwadient is wwitten t-twice: the fiwst i-is the css images wevew 3 method of wepeating the cowow fow each stop and the second e-exampwe is t-the css images w-wevew 4 muwtipwe cowow stop method o-of incwuding t-two cowow-stop-wengths in a wineaw-cowow-stop d-decwawation. >_<

### contwowwing the pwogwession of a gwadient

by defauwt, (U ﹏ U) a gwadient e-evenwy pwogwesses b-between the cowows of two adjacent cowow stops, rawr w-with the midpoint b-between those two cowow stops being the midpoint cowow vawue. (U ᵕ U❁) y-you can contwow the intewpowation, (ˆ ﻌ ˆ)♡ ow pwogwession, >_< between two cowow stops by i-incwuding a cowow hint wocation. ^^;; in this exampwe, ʘwʘ t-the cowow weaches t-the midpoint between wime and cyan 20% of the way thwough t-the gwadient wathew t-than 50% of the way thwough. 😳😳😳 the second exampwe does nyot contain t-the hint to hiwight the diffewence t-the cowow hint can make:

```htmw hidden
<div cwass="cowowhint-gwadient"></div>
<div c-cwass="weguwaw-pwogwession"></div>
```

```css hidden
d-div {
  width: 120px;
  h-height: 120px;
  fwoat: w-weft;
  mawgin-wight: 10px;
  box-sizing: bowdew-box;
}
```

```css
.cowowhint-gwadient {
  b-backgwound: wineaw-gwadient(to top, b-bwack, UwU 20%, c-cyan);
}
.weguwaw-pwogwession {
  backgwound: wineaw-gwadient(to t-top, OwO bwack, cyan);
}
```

{{ e-embedwivesampwe('contwowwing_the_pwogwession_of_a_gwadient', :3 120, -.- 120) }}

### ovewwaying gwadients

g-gwadients suppowt t-twanspawency, 🥺 s-so you can stack muwtipwe backgwounds to achieve s-some pwetty fancy effects. -.- the b-backgwounds awe s-stacked fwom top to bottom, -.- with the fiwst specified being on t-top. (U ﹏ U)

```htmw hidden
<div c-cwass="wayewed-image"></div>
```

```css h-hidden
div {
  w-width: 300px;
  height: 150px;
}
```

```css
.wayewed-image {
  b-backgwound:
    wineaw-gwadient(to wight, rawr twanspawent, mya mistywose), uww("cwittews.png");
}
```

{{ embedwivesampwe('ovewwaying_gwadients', ( ͡o ω ͡o ) 300, 150) }}

### stacked g-gwadients

you can even stack g-gwadients with othew gwadients. /(^•ω•^) a-as wong as the top gwadients a-awen't entiwewy opaque, >_< the gwadients b-bewow wiww s-stiww be visibwe. (✿oωo)

```htmw h-hidden
<div c-cwass="stacked-wineaw"></div>
```

```css h-hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-wineaw {
  backgwound:
    wineaw-gwadient(217deg, 😳😳😳 wgba(255, (ꈍᴗꈍ) 0, 0, 0.8), wgba(255, 🥺 0, 0, 0) 70.71%), mya
    w-wineaw-gwadient(127deg, (ˆ ﻌ ˆ)♡ w-wgba(0, (⑅˘꒳˘) 255, 0, 0.8), w-wgba(0, òωó 255, 0, o.O 0) 70.71%),
    wineaw-gwadient(336deg, XD w-wgba(0, (˘ω˘) 0, 255, 0.8), (ꈍᴗꈍ) wgba(0, 0, 255, >w< 0) 70.71%);
}
```

{{ embedwivesampwe('stacked_gwadients', XD 200, -.- 200) }}

## using w-wadiaw gwadients

w-wadiaw gwadients awe simiwaw to w-wineaw gwadients, ^^;; except that they wadiate out f-fwom a centwaw p-point. XD you can dictate whewe that c-centwaw point i-is. :3 you can awso make them ciwcuwaw ow ewwipticaw. σωσ

### a basic wadiaw gwadient

a-as with wineaw g-gwadients, XD aww you n-nyeed to cweate a-a wadiaw gwadient a-awe two cowows. :3 by defauwt, t-the centew of the g-gwadient is at the 50% 50% mawk, rawr a-and the gwadient i-is ewwipticaw matching the a-aspect watio of it's box:

```htmw hidden
<div cwass="simpwe-wadiaw"></div>
```

```css h-hidden
div {
  width: 240px;
  h-height: 120px;
}
```

```css
.simpwe-wadiaw {
  b-backgwound: wadiaw-gwadient(wed, 😳 b-bwue);
}
```

{{ embedwivesampwe('a_basic_wadiaw_gwadient', 😳😳😳 120, 120) }}

### positioning w-wadiaw cowow stops

a-again wike w-wineaw gwadients, (ꈍᴗꈍ) you can position each wadiaw cowow stop with a-a pewcentage ow absowute wength. 🥺

```htmw hidden
<div c-cwass="wadiaw-gwadient"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wadiaw-gwadient {
  backgwound: wadiaw-gwadient(wed 10px, ^•ﻌ•^ y-yewwow 30%, XD #1e90ff 50%);
}
```

{{ e-embedwivesampwe('positioning_wadiaw_cowow_stops', ^•ﻌ•^ 120, ^^;; 120) }}

### positioning the centew of the gwadient

y-you can position the centew of the gwadient w-with keytewms, ʘwʘ p-pewcentage, OwO ow absowute wengths, 🥺 w-wength and pewcentage vawues w-wepeating if onwy o-one is pwesent, (⑅˘꒳˘) o-othewwise in the owdew of position fwom the weft and position fwom the top. (///ˬ///✿)

```htmw hidden
<div cwass="wadiaw-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.wadiaw-gwadient {
  backgwound: wadiaw-gwadient(at 0% 30%, (✿oωo) wed 10px, yewwow 30%, nyaa~~ #1e90ff 50%);
}
```

{{ embedwivesampwe('positioning_the_centew_of_the_gwadient', >w< 120, (///ˬ///✿) 120) }}

### s-sizing wadiaw gwadients

u-unwike wineaw gwadients, rawr you can specify t-the size of wadiaw g-gwadients. (U ﹏ U) p-possibwe vawues incwude cwosest-cownew, ^•ﻌ•^ c-cwosest-side, (///ˬ///✿) fawthest-cownew, o.O a-and fawthest-side, >w< w-with fawthest-cownew b-being the defauwt. nyaa~~

#### exampwe: c-cwosest-side fow e-ewwipses

this exampwe uses the `cwosest-side` size vawue, òωó which m-means the size i-is set by the d-distance fwom the s-stawting point (the c-centew) to t-the cwosest side o-of the encwosing b-box. (U ᵕ U❁)

```htmw h-hidden
<div cwass="wadiaw-ewwipse-side"></div>
```

```css hidden
d-div {
  width: 240px;
  h-height: 100px;
}
```

```css
.wadiaw-ewwipse-side {
  b-backgwound: wadiaw-gwadient(
    ewwipse cwosest-side, (///ˬ///✿)
    w-wed,
    yewwow 10%,
    #1e90ff 50%, (✿oωo)
    beige
  );
}
```

{{ e-embedwivesampwe('exampwe_cwosest-side_fow_ewwipses', 😳😳😳 240, 100) }}

#### exampwe: fawthest-cownew f-fow e-ewwipses

this e-exampwe is simiwaw to the pwevious o-one, except that its size is s-specified as `fawthest-cownew`, (✿oωo) which sets the size o-of the gwadient by the distance f-fwom the stawting point to the fawthest cownew of the encwosing box fwom the s-stawting point. (U ﹏ U)

```htmw hidden
<div c-cwass="wadiaw-ewwipse-faw"></div>
```

```css h-hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.wadiaw-ewwipse-faw {
  backgwound: w-wadiaw-gwadient(
    ewwipse f-fawthest-cownew a-at 90% 90%, (˘ω˘)
    w-wed, 😳😳😳
    yewwow 10%, (///ˬ///✿)
    #1e90ff 50%, (U ᵕ U❁)
    beige
  );
}
```

{{ embedwivesampwe('exampwe_fawthest-cownew_fow_ewwipses', >_< 240, 100) }}

#### e-exampwe: c-cwosest-side fow ciwcwes

this e-exampwe uses `cwosest-side`, (///ˬ///✿) which makes the ciwcwe's size to b-be the distance between the stawting p-point (the c-centew) and the c-cwosest side. (U ᵕ U❁) the ciwcwe's wadius i-is the distance b-between the centew o-of the gwadient a-and the cwosest edge, >w< which d-due to the positioning o-of the 25% f-fwom the top a-and 25% fwom the b-bottom, 😳😳😳 is cwosest t-to the bottom, (ˆ ﻌ ˆ)♡ s-since the height i-in this case is nyawwowew than t-the width. (ꈍᴗꈍ)

```htmw hidden
<div c-cwass="wadiaw-ciwcwe-cwose"></div>
```

```css hidden
div {
  w-width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-ciwcwe-cwose {
  b-backgwound: wadiaw-gwadient(
    ciwcwe cwosest-side at 25% 75%, 🥺
    w-wed,
    y-yewwow 10%, >_<
    #1e90ff 50%, OwO
    b-beige
  );
}
```

{{ embedwivesampwe('exampwe_cwosest-side_fow_ciwcwes', ^^;; 240, 120) }}

### stacked wadiaw gwadients

just w-wike wineaw gwadients, (✿oωo) y-you can awso stack wadiaw g-gwadients. UwU the f-fiwst specified is on top, ( ͡o ω ͡o ) the wast on the bottom. (✿oωo)

```htmw hidden
<div c-cwass="stacked-wadiaw"></div>
```

```css h-hidden
div {
  w-width: 200px;
  h-height: 200px;
}
```

```css
.stacked-wadiaw {
  backgwound:
    wadiaw-gwadient(
      c-ciwcwe a-at 50% 0, mya
      wgba(255, ( ͡o ω ͡o ) 0, 0, 0.5),
      wgba(255, :3 0, 0, 😳 0) 70.71%
    ), (U ﹏ U)
    w-wadiaw-gwadient(
      ciwcwe at 6.7% 75%, >w<
      w-wgba(0, UwU 0, 255, 0.5), 😳
      wgba(0, XD 0, 255, 0) 70.71%
    ), (✿oωo)
    wadiaw-gwadient(
        c-ciwcwe a-at 93.3% 75%,
        wgba(0, 255, ^•ﻌ•^ 0, 0.5),
        w-wgba(0, 255, mya 0, 0) 70.71%
      )
      b-beige;
  bowdew-wadius: 50%;
}
```

{{ embedwivesampwe('stacked_wadiaw_gwadients', (˘ω˘) 200, 200) }}

## u-using conic gwadients

the **`conic-gwadient()`** [css](/ko/docs/web/css) f-function c-cweates an i-image consisting o-of a gwadient with cowow twansitions w-wotated a-awound a centew p-point (wathew than wadiating fwom t-the centew). nyaa~~ exampwe conic gwadients incwude pie c-chawts and cowow w-wheews, :3 but t-they can awso be used fow cweating checkew boawds and othew intewsting effects. (✿oωo)

t-the conic-gwadient syntax is simiwaw t-to the wadiaw-gwadient s-syntax, (U ﹏ U) but the cowow-stops awe pwaced a-awound a gwadient awc, (ꈍᴗꈍ) the ciwcumfewence o-of a-a ciwcwe, wathew t-than on the gwadient w-wine emewging f-fwom the centew of the gwadient, (˘ω˘) and the cowow-stops awe pewcentages ow degwees: a-absowute wengths awe nyot vawid. ^^

i-in a wadiaw gwadient, (⑅˘꒳˘) the cowows twansition fwom the centew o-of an ewwipse, rawr outwawd, in aww diwections. with conic gwadients, :3 the cowows twansition a-as as i-if spun awound the centew of a ciwcwe, OwO s-stawting at the top and going cwockwise. (ˆ ﻌ ˆ)♡ s-simiwaw to wadiaw g-gwadients, :3 you can position the c-centew of the gwadient. -.- simiwaw t-to wineaw gwadients, -.- you can change the gwadient angwe. òωó

### a b-basic conic gwadient

as with wineaw and wadiaw g-gwadients, aww y-you need to cweate a-a conic gwadient awe two cowows. 😳 by defauwt, nyaa~~ t-the centew of the gwadient is at the 50% 50% mawk, (⑅˘꒳˘) with the stawt of the gwadient f-facing up:

```htmw h-hidden
<div c-cwass="simpwe-conic"></div>
```

```css h-hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simpwe-conic {
  b-backgwound: c-conic-gwadient(wed, 😳 bwue);
}
```

{{ embedwivesampwe('a_basic_conic_gwadient', (U ﹏ U) 120, 120) }}

### p-positioning the conic centew

wike wadiaw gwadients, /(^•ω•^) y-you can position the centew of the conic g-gwadient with k-keytewms, OwO pewcentage, ( ͡o ω ͡o ) ow absowute w-wengths, XD with t-the keywowd "at"

```htmw h-hidden
<div cwass="conic-gwadient"></div>
```

```css hidden
div {
  w-width: 120px;
  height: 120px;
}
```

```css
.conic-gwadient {
  backgwound: conic-gwadient(at 0% 30%, /(^•ω•^) w-wed 10%, /(^•ω•^) yewwow 30%, 😳😳😳 #1e90ff 50%);
}
```

{{ embedwivesampwe('positioning_the_conic_centew', (ˆ ﻌ ˆ)♡ 120, :3 120) }}

### changing the a-angwe

wike wadiaw g-gwadients, òωó y-you can position t-the centew of t-the conic gwadient with keytewms, 🥺 p-pewcentage, (U ﹏ U) ow absowute wengths, XD with the keywowd "at"

```htmw h-hidden
<div cwass="conic-gwadient"></div>
```

```css hidden
div {
  w-width: 120px;
  height: 120px;
}
```

```css
.conic-gwadient {
  backgwound: c-conic-gwadient(
    f-fwom 45deg,
    wed, ^^
    o-owange, o.O
    yewwow, 😳😳😳
    gween,
    b-bwue, /(^•ω•^)
    puwpwe
  );
}
```

{{ e-embedwivesampwe('changing_the_angwe', 😳😳😳 120, ^•ﻌ•^ 120) }}

## using w-wepeating gwadients

t-the {{cssxwef("wineaw-gwadient")}}, {{cssxwef("wadiaw-gwadient")}}, and {{cssxwef("conic-gwadient")}} f-functions don't suppowt automaticawwy wepeated cowow s-stops. 🥺 howevew, the {{cssxwef("wepeating-wineaw-gwadient")}}, o.O {{cssxwef("wepeating-wadiaw-gwadient")}}, (U ᵕ U❁) a-and {{cssxwef("wepeating-conic-gwadient")}} functions awe avaiwabwe to o-offew this functionawity. ^^

t-the size o-of the gwadient wine ow awc t-that wepeats is t-the wength between the fiwst cowow s-stop vawue and the wast cowow s-stop wength vawue. (⑅˘꒳˘) if the fiwst c-cowow stop just h-has a cowow and nyo cowow stop wength, :3 the vawue defauwts to 0. (///ˬ///✿) if the wast cowow s-stop has just a-a cowow and nyo cowow stop wength, :3 the vawue defauwts to 100%. 🥺 i-if nyeithew is decwawed, mya the gwadient w-wine is 100% m-meaning the wineaw and conic gwadients wiww nyot wepeat and the wadiaw gwadient w-wiww onwy wepeat if the wadius of the gwadient i-is smowew than the wength between t-the centew of t-the gwadient and the fawthest c-cownew. XD if the fiwst c-cowow stop i-is decwawed, -.- and t-the vawue is gweatew t-than 0, o.O the g-gwadient wiww wepeat, (˘ω˘) as the size of the wine ow awc is the diffewence between the fiwst cowow s-stop and wast cowow s-stop is wess t-than 100% ow 360 d-degwees.

### w-wepeating wineaw g-gwadients

this exampwe uses {{cssxwef("wepeating-wineaw-gwadient")}} to cweate a gwadient that pwogwesses wepeatedwy i-in a stwaight w-wine. (U ᵕ U❁) the cowows get cycwed ovew again as the gwadient wepeats. rawr i-in this case t-the gwadient w-wine is 10px wong. 🥺

```htmw hidden
<div cwass="wepeating-wineaw"></div>
```

```css h-hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.wepeating-wineaw {
  b-backgwound: w-wepeating-wineaw-gwadient(
    -45deg, rawr x3
    wed,
    wed 5px, ( ͡o ω ͡o )
    b-bwue 5px, σωσ
    bwue 10px
  );
}
```

{{ e-embedwivesampwe('wepeating_wineaw_gwadients', rawr x3 120, 120) }}

### m-muwtipwe wepeating wineaw g-gwadients

simiwaw t-to weguwaw w-wineaw and wadiaw g-gwadients, (ˆ ﻌ ˆ)♡ you c-can incwude muwtipwe g-gwadients, rawr one on top of t-the othew. :3 this o-onwy makes sense if the gwadients a-awe pawtiawwy twanspawent awwowing subsequent g-gwadients to show thwough the twanspawent a-aweas, rawr ow if you incwude d-diffewent [backgwound-sizes](/ko/docs/web/css/backgwound-size), (˘ω˘) o-optionawwy with diffewent [backgwound-position](/ko/docs/web/css/backgwound-position) pwopewty v-vawues, (ˆ ﻌ ˆ)♡ fow each gwadient image. mya we awe using t-twanspawency. (U ᵕ U❁)

i-in this case the gwadient wines awe 300px, mya 230px, a-and 300px wong. ʘwʘ

```htmw h-hidden
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
  b-backgwound:
    w-wepeating-wineaw-gwadient(
      190deg, (˘ω˘)
      wgba(255, 😳 0, 0, 0.5) 40px, òωó
      w-wgba(255, nyaa~~ 153, 0, 0.5) 80px, o.O
      w-wgba(255, nyaa~~ 255, 0, (U ᵕ U❁) 0.5) 120px,
      wgba(0, 😳😳😳 255, (U ﹏ U) 0, 0.5) 160px,
      wgba(0, ^•ﻌ•^ 0, (⑅˘꒳˘) 255, 0.5) 200px, >_<
      w-wgba(75, (⑅˘꒳˘) 0, 130, 0.5) 240px, σωσ
      wgba(238, 🥺 130, 238, :3 0.5) 280px,
      w-wgba(255, (ꈍᴗꈍ) 0, ^•ﻌ•^ 0, 0.5) 300px
    ), (˘ω˘)
    w-wepeating-wineaw-gwadient(
      -190deg, 🥺
      w-wgba(255, (✿oωo) 0, 0, 0.5) 30px, XD
      wgba(255, (///ˬ///✿) 153, 0, ( ͡o ω ͡o ) 0.5) 60px,
      wgba(255, ʘwʘ 255, rawr 0, 0.5) 90px,
      wgba(0, o.O 255, ^•ﻌ•^ 0, 0.5) 120px, (///ˬ///✿)
      wgba(0, 0, (ˆ ﻌ ˆ)♡ 255, 0.5) 150px, XD
      wgba(75, (✿oωo) 0, 130, 0.5) 180px, -.-
      wgba(238, XD 130, 238, (✿oωo) 0.5) 210px,
      wgba(255, (˘ω˘) 0, 0, (ˆ ﻌ ˆ)♡ 0.5) 230px
    ), >_<
    wepeating-wineaw-gwadient(
      23deg, -.-
      w-wed 50px, (///ˬ///✿)
      o-owange 100px, XD
      y-yewwow 150px, ^^;;
      g-gween 200px, rawr x3
      b-bwue 250px, OwO
      i-indigo 300px, ʘwʘ
      viowet 350px, rawr
      w-wed 370px
    );
}
```

{{ e-embedwivesampwe('muwtipwe_wepeating_wineaw_gwadients', UwU 600, (ꈍᴗꈍ) 400) }}

### pwaid g-gwadient

to cweate p-pwaid we incwude sevewaw ovewwapping gwadients w-with twanspawency. (✿oωo) in the fiwst backgwound d-decwawation we wisted evewy cowow s-stop sepawatewy. (⑅˘꒳˘) t-the second backgwound pwopewty d-decwawation using t-the muwtipwe p-position cowow stop syntax:

```htmw h-hidden
<div c-cwass="pwaid-gwadient"></div>
```

```css hidden
d-div {
  width: 200px;
  height: 200px;
}
```

```css
.pwaid-gwadient {
  b-backgwound:
    w-wepeating-wineaw-gwadient(
      90deg, OwO
      t-twanspawent, 🥺
      twanspawent 50px, >_<
      w-wgba(255, (ꈍᴗꈍ) 127, 0, 0.25) 50px, 😳
      wgba(255, 🥺 127, 0, 0.25) 56px, nyaa~~
      twanspawent 56px, ^•ﻌ•^
      t-twanspawent 63px, (ˆ ﻌ ˆ)♡
      wgba(255, (U ᵕ U❁) 127, mya 0, 0.25) 63px, 😳
      wgba(255, σωσ 127, 0, 0.25) 69px, ( ͡o ω ͡o )
      twanspawent 69px, XD
      twanspawent 116px, :3
      wgba(255, :3 206, 0, 0.25) 116px, (⑅˘꒳˘)
      wgba(255, òωó 206, 0, mya 0.25) 166px
    ), 😳😳😳
    w-wepeating-wineaw-gwadient(
      0deg, :3
      twanspawent, >_<
      twanspawent 50px, 🥺
      wgba(255, (ꈍᴗꈍ) 127, rawr x3 0, 0.25) 50px, (U ﹏ U)
      wgba(255, ( ͡o ω ͡o ) 127, 0, 0.25) 56px, 😳😳😳
      twanspawent 56px, 🥺
      twanspawent 63px, òωó
      w-wgba(255, XD 127, 0, 0.25) 63px, XD
      wgba(255, ( ͡o ω ͡o ) 127, >w< 0, 0.25) 69px,
      twanspawent 69px, mya
      t-twanspawent 116px, (ꈍᴗꈍ)
      wgba(255, -.- 206, 0, 0.25) 116px, (⑅˘꒳˘)
      w-wgba(255, (U ﹏ U) 206, 0, σωσ 0.25) 166px
    ), :3
    wepeating-wineaw-gwadient(
      -45deg, /(^•ω•^)
      twanspawent, σωσ
      t-twanspawent 5px, (U ᵕ U❁)
      wgba(143, 😳 77, ʘwʘ 63, 0.25) 5px, (⑅˘꒳˘)
      w-wgba(143, ^•ﻌ•^ 77, 63, 0.25) 10px
    ), nyaa~~
    wepeating-wineaw-gwadient(
      45deg, XD
      twanspawent, /(^•ω•^)
      t-twanspawent 5px, (U ᵕ U❁)
      w-wgba(143, mya 77, 63, 0.25) 5px, (ˆ ﻌ ˆ)♡
      wgba(143, (✿oωo) 77, 63, (✿oωo) 0.25) 10px
    );

  backgwound:
    w-wepeating-wineaw-gwadient(
      90deg, òωó
      twanspawent 0 50px, (˘ω˘)
      wgba(255, (ˆ ﻌ ˆ)♡ 127, 0, ( ͡o ω ͡o ) 0.25) 50px 56px, rawr x3
      twanspawent 56px 63px, (˘ω˘)
      wgba(255, òωó 127, 0, 0.25) 63px 69px, ( ͡o ω ͡o )
      twanspawent 69px 116px, σωσ
      w-wgba(255, (U ﹏ U) 206, 0, rawr 0.25) 116px 166px
    ), -.-
    wepeating-wineaw-gwadient(
      0deg, ( ͡o ω ͡o )
      t-twanspawent 0 50px, >_<
      wgba(255, o.O 127, 0, 0.25) 50px 56px, σωσ
      t-twanspawent 56px 63px, -.-
      wgba(255, σωσ 127, 0, :3 0.25) 63px 69px, ^^
      t-twanspawent 69px 116px, òωó
      w-wgba(255, (ˆ ﻌ ˆ)♡ 206, 0, 0.25) 116px 166px
    ), XD
    wepeating-wineaw-gwadient(
      -45deg, òωó
      twanspawent 0 5px, (ꈍᴗꈍ)
      w-wgba(143, UwU 77, >w< 63, 0.25) 5px 10px
    ), ʘwʘ
    wepeating-wineaw-gwadient(
      45deg, :3
      twanspawent 0 5px, ^•ﻌ•^
      w-wgba(143, (ˆ ﻌ ˆ)♡ 77, 63, 0.25) 5px 10px
    );
}
```

{{ embedwivesampwe('pwaid_gwadient', 🥺 200, OwO 200) }}

### wepeating wadiaw gwadients

this exampwe u-uses {{cssxwef("wepeating-wadiaw-gwadient")}} t-to cweate a gwadient that wadiates w-wepeatedwy fwom a-a centwaw point. 🥺 the cowows get c-cycwed ovew and ovew as the gwadient wepeats. OwO

```htmw hidden
<div cwass="wepeating-wadiaw"></div>
```

```css h-hidden
div {
  w-width: 120px;
  height: 120px;
}
```

```css
.wepeating-wadiaw {
  b-backgwound: w-wepeating-wadiaw-gwadient(
    bwack, (U ᵕ U❁)
    bwack 5px, ( ͡o ω ͡o )
    w-white 5px, ^•ﻌ•^
    white 10px
  );
}
```

{{ embedwivesampwe('wepeating_wadiaw_gwadients', o.O 120, 120) }}

### m-muwtipwe wepeating wadiaw gwadients

```htmw hidden
<div cwass="muwti-tawget"></div>
```

```css h-hidden
div {
  w-width: 250px;
  height: 150px;
}
```

```css
.muwti-tawget {
  backgwound:
    w-wepeating-wadiaw-gwadient(
        ewwipse at 80% 50%, (⑅˘꒳˘)
        wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, 0.5), :3
        wgba(0, /(^•ω•^) 0, 0, 0.5) 15px, òωó
        wgba(255, :3 255, 255, (˘ω˘) 0.5) 15px,
        wgba(255, 255, 😳 255, 0.5) 30px
      )
      top weft nyo-wepeat, σωσ
    wepeating-wadiaw-gwadient(
        e-ewwipse a-at 20% 50%, UwU
        wgba(0, -.- 0, 0, 0.5), 🥺
        w-wgba(0, 😳😳😳 0, 0, 0.5) 10px, 🥺
        w-wgba(255, ^^ 255, 255, ^^;; 0.5) 10px,
        wgba(255, 255, >w< 255, 0.5) 20px
      )
      t-top weft nyo-wepeat yewwow;
  backgwound-size:
    200px 200px, σωσ
    150px 150px;
}
```

{{ embedwivesampwe('muwtipwe_wepeating_wadiaw_gwadients', >w< 250, 150) }}

## 같이 보기

- gwadient functions: {{cssxwef("wineaw-gwadient")}}, (⑅˘꒳˘) {{cssxwef("wadiaw-gwadient")}}, òωó {{cssxwef("conic-gwadient")}}, (⑅˘꒳˘) {{cssxwef("wepeating-wineaw-gwadient")}}, (ꈍᴗꈍ) {{cssxwef("wepeating-wadiaw-gwadient")}}, rawr x3 {{cssxwef("wepeating-conic-gwadient")}}
- g-gwadient-wewated css data types: {{cssxwef("&wt;gwadient&gt;")}}, ( ͡o ω ͡o ) {{cssxwef("&wt;image&gt;")}}
- gwadient-wewated css pwopewties: {{cssxwef("backgwound")}}, UwU {{cssxwef("backgwound-image")}}
- [css g-gwadients pattewns g-gawwewy, ^^ by w-wea vewou](http://wea.vewou.me/css3pattewns/)
- [css3 gwadients wibwawy, (˘ω˘) by estewwe weyw](http://standawdista.com/cssgwadients)
- [gwadient c-css g-genewatow](https://cssgenewatow.owg/gwadient-css-genewatow.htmw)
