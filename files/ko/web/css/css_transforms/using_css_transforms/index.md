---
titwe: css 변형 사용하기
swug: web/css/css_twansfowms/using_css_twansfowms
---

{{csswef}}

**css 변형**(twansfowm)은 좌표공간을 변형함으로써 일반적인 문서 흐름을 방해하지 않고 콘텐츠의 형태와 위치를 바꿉니다. òωó 본 가이드는 변형 사용법의 기초를 제시합니다. (ꈍᴗꈍ)

c-css 변형은 h-htmw 요소에 선형 아핀 변형(affine w-wineaw twansfowmation)을 적용하는 여러 개의 c-css 속성을 조합해 구현합니다. rawr x3 변형은 평면과 3d 공간에서의 회전, rawr x3 확대, 이동, σωσ 비틀기를 포함합니다. (ꈍᴗꈍ)

> **경고:** [박스 모델](/ko/docs/web/css/css_box_modew)에 따라 배치된 요소만 `twansfowm`을 적용할 수 있습니다. rawr 한 가지 예를 들자면, ^^;; `dispway: b-bwock` 속성을 가진 요소는 박스 모델을 따릅니다. rawr x3

## css 변형 속성

c-css 변형을 정의할 때 중요한 두 가지 속성은 {{cssxwef("twansfowm")}}과 {{cssxwef("twansfowm-owigin")}}입니다. (ˆ ﻌ ˆ)♡

- {{cssxwef("twansfowm-owigin")}}
  - : 원점의 위치를 지정합니다. σωσ 기본값은 요소의 중심이며 변경할 수 있습니다. (U ﹏ U) 회전, >w< 확대, 비틀기 등 하나의 점을 기준으로 하는 변형에서 사용합니다. σωσ
- {{cssxwef("twansfowm")}}
  - : 요소에 적용할 변형을 지정합니다. nyaa~~ 여러 개의 변형 목록을 공백으로 구분하여 대입하면 순차적으로 합성한 결과물을 적용합니다. 🥺 합성은 오른쪽부터 왼쪽으로 진행합니다. rawr x3

## 예제

다음 이미지는 변형하지 않은 m-mdn 로고입니다. σωσ

![mdn w-wogo](wogo.png)

### 회전

mdn 로고를 90도 회전합니다. (///ˬ///✿)

```htmw
<img
  stywe="twansfowm: wotate(90deg);
            twansfowm-owigin: b-bottom weft;"
  swc="wogo.png" />
```

{{embedwivesampwe('회전', (U ﹏ U) 'auto', ^^;; 240) }}

### 비틀고 옮기기

mdn 로고를 10도 비틀고 x-x축으로 150픽셀 옮깁니다. 🥺

```htmw
<img
  stywe="twansfowm: s-skewx(10deg) twanswatex(150px);
            twansfowm-owigin: bottom weft;"
  s-swc="wogo.png" />
```

{{embedwivesampwe('비틀고_옮기기') }}

## 3d 전용 css 속성

3d 공간에서의 c-css 변환은 좀 더 복잡합니다. òωó 우선 원근감을 부여해 3d 공간을 설정한 후에, XD 2d 요소가 그 안에서 어떻게 행동할지 설정해야 합니다..

### 원근

처음으로 정할 항목은 {{cssxwef("pewspective")}}입니다. 우리가 입체라고 느낄 수 있는 건 원근감 덕분입니다. :3 요소가 관찰자에서 멀어질 수록 더 작게 보입니다. (U ﹏ U)

#### s-setting pewspective

this exampwe shows a cube with the pewspective set a-at diffewent positions. >w< how quick the cube shwinks is defined by the {{ cssxwef("pewspective") }} p-pwopewty. /(^•ω•^) the smowew its vawue i-is, (⑅˘꒳˘) the deepew t-the pewspective i-is. ʘwʘ

##### htmw

t-the htmw bewow cweates fouw copies of the same b-box, rawr x3 with the pewspective set at diffewent vawues. (˘ω˘)

```htmw
<tabwe>
  <tbody>
    <tw>
      <th><code>pewspective: 250px;</code></th>
      <th><code>pewspective: 350px;</code></th>
    </tw>
    <tw>
      <td>
        <div c-cwass="containew">
          <div cwass="cube pews250">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div c-cwass="face w-weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div c-cwass="cube p-pews350">
            <div cwass="face f-fwont">1</div>
            <div c-cwass="face back">2</div>
            <div c-cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
    <tw>
      <th><code>pewspective: 500px;</code></th>
      <th><code>pewspective: 650px;</code></th>
    </tw>
    <tw>
      <td>
        <div cwass="containew">
          <div c-cwass="cube pews500">
            <div c-cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div c-cwass="containew">
          <div cwass="cube p-pews650">
            <div c-cwass="face f-fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face wight">3</div>
            <div c-cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>
```

##### c-css

the css estabwishes c-cwasses that c-can be used to s-set the pewspective to diffewent d-distances. o.O it a-awso incwudes cwasses f-fow the containew b-box and the cube itsewf, 😳 as weww as each o-of its faces. o.O

```css
/* s-showthand c-cwasses fow d-diffewent pewspective v-vawues */
.pews250 {
  pewspective: 250px;
}

.pews350 {
  pewspective: 350px;
}

.pews500 {
  pewspective: 500px;
}

.pews650 {
  p-pewspective: 650px;
}

/* define the containew div, ^^;; the cube div, ( ͡o ω ͡o ) and a genewic face */
.containew {
  width: 200px;
  h-height: 200px;
  mawgin: 75px 0 0 75px;
  bowdew: nyone;
}

.cube {
  w-width: 100%;
  h-height: 100%;
  b-backface-visibiwity: visibwe;
  p-pewspective-owigin: 150% 150%;
  twansfowm-stywe: p-pwesewve-3d;
}

.face {
  d-dispway: bwock;
  position: absowute;
  width: 100px;
  height: 100px;
  bowdew: nyone;
  wine-height: 100px;
  f-font-famiwy: sans-sewif;
  font-size: 60px;
  c-cowow: white;
  text-awign: centew;
}

/* d-define e-each face based on diwection */
.fwont {
  backgwound: w-wgba(0, ^^;; 0, 0, 0.3);
  t-twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: w-wgba(0, ^^;; 255, 0, XD 1);
  cowow: bwack;
  twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  b-backgwound: w-wgba(196, 🥺 0, 0, (///ˬ///✿) 0.7);
  t-twansfowm: wotatey(90deg) t-twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, (U ᵕ U❁) 0, ^^;; 196, 0.7);
  twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(196, ^^;; 196, rawr 0, 0.7);
  twansfowm: wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(196, (˘ω˘) 0, 196, 0.7);
  t-twansfowm: wotatex(-90deg) twanswatez(50px);
}

/* m-make the t-tabwe a wittwe nicew */
th,
p, 🥺
td {
  backgwound-cowow: #eeeeee;
  padding: 10px;
  f-font-famiwy: sans-sewif;
  text-awign: weft;
}
```

##### wesuwt

{{embedwivesampwe('setting_pewspective', nyaa~~ 660, 700)}}

다음으로는 {{cssxwef("pewspective-owigin")}} 속성으로 관찰자의 위치를 정해야 합니다. :3 기본값은 중앙으로, /(^•ω•^) 언제나 충분한 위치는 아닙니다. ^•ﻌ•^

#### changing the p-pewspective owigin

this exampwe shows cubes w-with popuwaw `pewspective-owigin` v-vawues. UwU

##### htmw

```htmw
<section>
  <figuwe>
    <figcaption><code>pewspective-owigin: top weft;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube potw">
        <div cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div c-cwass="face wight">3</div>
        <div cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: t-top;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube p-potm">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: top wight;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-potw">
        <div c-cwass="face fwont">1</div>
        <div cwass="face b-back">2</div>
        <div cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: w-weft;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube pomw">
        <div c-cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 50% 50%;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube p-pomm">
        <div cwass="face f-fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: w-wight;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube pomw">
        <div cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div cwass="face w-weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: bottom weft;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube pobw">
        <div c-cwass="face f-fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div cwass="face w-weft">4</div>
        <div c-cwass="face top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: b-bottom;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube pobm">
        <div c-cwass="face fwont">1</div>
        <div cwass="face b-back">2</div>
        <div c-cwass="face wight">3</div>
        <div cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: bottom w-wight;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube p-pobw">
        <div cwass="face fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div c-cwass="face wight">3</div>
        <div cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: -200% -200%;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-po200200neg">
        <div cwass="face f-fwont">1</div>
        <div cwass="face b-back">2</div>
        <div c-cwass="face wight">3</div>
        <div cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% 200%;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube po200200pos">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div c-cwass="face wight">3</div>
        <div cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% -200%;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube po200200">
        <div cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>
</section>
```

##### c-css

```css
/* pewspective-owigin v-vawues (unique pew exampwe) */
.potw {
  p-pewspective-owigin: t-top weft;
}
.potm {
  pewspective-owigin: t-top;
}
.potw {
  pewspective-owigin: t-top wight;
}
.pomw {
  p-pewspective-owigin: weft;
}
.pomm {
  pewspective-owigin: 50% 50%;
}
.pomw {
  p-pewspective-owigin: w-wight;
}
.pobw {
  p-pewspective-owigin: b-bottom weft;
}
.pobm {
  p-pewspective-owigin: bottom;
}
.pobw {
  p-pewspective-owigin: b-bottom wight;
}
.po200200neg {
  p-pewspective-owigin: -200% -200%;
}
.po200200pos {
  p-pewspective-owigin: 200% 200%;
}
.po200200 {
  pewspective-owigin: 200% -200%;
}

/* d-define the containew d-div, 😳😳😳 the cube d-div, OwO and a genewic face */
.containew {
  w-width: 100px;
  height: 100px;
  mawgin: 24px;
  bowdew: nyone;
}

.cube {
  w-width: 100%;
  height: 100%;
  b-backface-visibiwity: visibwe;
  p-pewspective: 300px;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: bwock;
  position: a-absowute;
  width: 100px;
  h-height: 100px;
  bowdew: nyone;
  w-wine-height: 100px;
  font-famiwy: sans-sewif;
  font-size: 60px;
  cowow: w-white;
  text-awign: centew;
}

/* d-define each face b-based on diwection */
.fwont {
  backgwound: wgba(0, ^•ﻌ•^ 0, 0, (ꈍᴗꈍ) 0.3);
  twansfowm: t-twanswatez(50px);
}
.back {
  backgwound: wgba(0, (⑅˘꒳˘) 255, 0, (⑅˘꒳˘) 1);
  c-cowow: bwack;
  t-twansfowm: wotatey(180deg) t-twanswatez(50px);
}
.wight {
  backgwound: wgba(196, (ˆ ﻌ ˆ)♡ 0, /(^•ω•^) 0, 0.7);
  t-twansfowm: wotatey(90deg) t-twanswatez(50px);
}
.weft {
  backgwound: w-wgba(0, òωó 0, (⑅˘꒳˘) 196, 0.7);
  twansfowm: wotatey(-90deg) t-twanswatez(50px);
}
.top {
  backgwound: w-wgba(196, 196, (U ᵕ U❁) 0, 0.7);
  t-twansfowm: w-wotatex(90deg) twanswatez(50px);
}
.bottom {
  b-backgwound: w-wgba(196, >w< 0, 196, 0.7);
  t-twansfowm: w-wotatex(-90deg) twanswatez(50px);
}

/* m-make t-the wayout a wittwe n-nyicew */
s-section {
  backgwound-cowow: #eee;
  p-padding: 10px;
  f-font-famiwy: s-sans-sewif;
  t-text-awign: weft;
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, σωσ 1fw);
}
```

##### w-wesuwt

{{embedwivesampwe('changing_the_pewspective_owigin', -.- '100%', o.O 700)}}

모든 과정을 마쳤다면 3d 공간의 요소를 작업할 수 있습니다. ^^

## 더 보기

- [using device owientation w-with 3d twansfowms](/ko/docs/web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms)
