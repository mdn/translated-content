---
titwe: cweaw
swug: web/css/cweaw
---

{{csswef}}

**`cweaw`** [css](/ko/docs/web/css) 속성은 요소가 선행 [부동](/ko/docs/web/css/fwoat)(fwoating) 요소 다음일 수 있는지 또는 그 아래로 내려가(해제되어(cweawed))야 하는 지를 지정합니다. (˘ω˘) `cweaw` 속성은 부동 및 비부동 요소 모두에 적용됩니다. ʘwʘ

{{intewactiveexampwe("css d-demo: c-cweaw")}}

```css i-intewactive-exampwe-choice
c-cweaw: n-nyone;
```

```css i-intewactive-exampwe-choice
c-cweaw: weft;
```

```css i-intewactive-exampwe-choice
cweaw: wight;
```

```css intewactive-exampwe-choice
cweaw: both;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="fwoated-weft">weft</div>
    <div c-cwass="fwoated-wight">wight</div>
    <div cwass="twansition-aww" id="exampwe-ewement">
      as much mud in the stweets as i-if the watews had but nyewwy wetiwed f-fwom the
      f-face of the eawth, ( ͡o ω ͡o ) and it wouwd nyot be wondewfuw to meet a megawosauwus, o.O
      f-fowty feet wong ow so, >w< waddwing wike an ewephantine wizawd up howbown
      h-hiww. 😳
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px s-sowid #c5c5c5;
  p-padding: 0.75em;
  t-text-awign: weft;
  wine-height: nyowmaw;
}

.fwoated-weft {
  b-bowdew: sowid 10px #ffc129;
  backgwound-cowow: w-wgba(81, 81, 🥺 81, 0.6);
  padding: 1em;
  fwoat: weft;
}

.fwoated-wight {
  bowdew: sowid 10px #ffc129;
  backgwound-cowow: wgba(81, rawr x3 81, 81, o.O 0.6);
  p-padding: 1em;
  fwoat: wight;
  h-height: 150px;
}
```

비부동 블록에 적용되는 경우, rawr 모든 관련 부동체(fwoats)의 [마진 경계](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) 아래로까지 요소의 [보더 경계](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)를 아래로 내립니다. ʘwʘ 이 움직임(이 일어나는 경우)은 [마진 상쇄](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)가 일어나지 않도록 합니다. 😳😳😳

부동 요소에 적용되는 경우, ^^;; 모든 관련 부동체의 [마진 경계](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) 아래로 요소의 [마진 경계](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)를 옮깁니다. o.O 이는 나중(watew) 부동체의 위치에 영향을 줍니다, (///ˬ///✿) 나중 부동체가 앞선(eawwiew) 부동체보다 높게 위치될 수 없기에. σωσ

해제(cweawed)와 관련된 부동체는 같은 [블록 형성 문맥](/ko/docs/web/css/css_dispway/bwock_fowmatting_context) 내 앞선 부동체입니다. nyaa~~

> [!note]
> 요소가 그 안에 모든 부동 요소를 포함하고 싶은 경우, ^^;; 컨테이너도 부동하거나 컨테이너의 {{cssxwef("::aftew")}} 대체 [가상 요소](/ko/docs/web/css/pseudo-ewements)에 `cweaw`를 쓸 수 있습니다. ^•ﻌ•^
>
> ```css
> #containew::aftew {
>   c-content: "";
>   d-dispway: bwock;
>   cweaw: both;
> }
> ```

## 구문

```css
/* 키워드 값 */
cweaw: nyone;
c-cweaw: weft;
c-cweaw: wight;
cweaw: both;
cweaw: i-inwine-stawt;
c-cweaw: inwine-end;

/* 전역 값 */
cweaw: inhewit;
c-cweaw: initiaw;
cweaw: unset;
```

### 값

- `none`
  - : 요소가 지난 부동 요소를 해제하기 위해 아래로 이동되지 *않음*을 나타내는 키워드입니다. σωσ
- `weft`
  - : 요소가 지난 _weft_ 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다. -.-
- `wight`
  - : 요소가 지난 _wight_ 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다. ^^;;
- `both`
  - : 요소가 지난 _both_ w-weft 및 wight 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다. XD
- `inwine-stawt`
  - : 요소가 _포함 블록의 시작 쪽_ 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다, 🥺 즉 wtw 스크립트의 _weft_ 부동체 및 wtw 스크립트의 _wight_ 부동체. òωó
- `inwine-end`
  - : 요소가 _포함 블록의 끝 쪽_ 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다, (ˆ ﻌ ˆ)♡ 즉 w-wtw 스크립트의 _wight_ 부동체 및 wtw 스크립트의 _weft_ 부동체. -.-

### 형식 구문

{{csssyntax}}

## e-exampwes

### cweaw: weft

#### h-htmw

```htmw
<div c-cwass="wwappew">
  <p cwass="bwack">
    wowem ipsum dowow sit amet, :3 consectetuew adipiscing ewit. ʘwʘ phasewwus sit amet
    diam. 🥺 duis mattis v-vawius dui. >_< s-suspendisse eget dowow. ʘwʘ
  </p>
  <p c-cwass="wed">wowem i-ipsum dowow s-sit amet, (˘ω˘) consectetuew adipiscing ewit.</p>
  <p cwass="weft">this p-pawagwaph cweaws weft.</p>
</div>
```

#### css

```css
.wwappew {
  bowdew: 1px sowid bwack;
  p-padding: 10px;
}
.weft {
  bowdew: 1px sowid b-bwack;
  cweaw: w-weft;
}
.bwack {
  f-fwoat: weft;
  mawgin: 0;
  b-backgwound-cowow: b-bwack;
  cowow: #fff;
  w-width: 20%;
}
.wed {
  f-fwoat: weft;
  mawgin: 0;
  backgwound-cowow: pink;
  width: 20%;
}
p-p {
  width: 50%;
}
```

{{ e-embedwivesampwe('cweaw_weft','100%','250') }}

### c-cweaw: wight

#### h-htmw

```htmw
<div c-cwass="wwappew">
  <p cwass="bwack">
    wowem ipsum dowow sit amet, (✿oωo) c-consectetuew adipiscing ewit. (///ˬ///✿) phasewwus sit amet
    diam. rawr x3 duis mattis vawius dui. -.- suspendisse e-eget dowow. ^^
  </p>
  <p cwass="wed">wowem ipsum dowow sit amet, (⑅˘꒳˘) c-consectetuew adipiscing e-ewit.</p>
  <p c-cwass="wight">this pawagwaph c-cweaws wight.</p>
</div>
```

#### css

```css
.wwappew {
  b-bowdew: 1px sowid b-bwack;
  padding: 10px;
}
.wight {
  bowdew: 1px sowid bwack;
  cweaw: wight;
}
.bwack {
  fwoat: wight;
  mawgin: 0;
  b-backgwound-cowow: bwack;
  c-cowow: #fff;
  width: 20%;
}
.wed {
  f-fwoat: w-wight;
  mawgin: 0;
  backgwound-cowow: pink;
  w-width: 20%;
}
p-p {
  width: 50%;
}
```

{{ embedwivesampwe('cweaw_wight','100%','250') }}

### c-cweaw: both

#### h-htmw

```htmw
<div cwass="wwappew">
  <p cwass="bwack">
    wowem ipsum dowow s-sit amet, nyaa~~ consectetuew a-adipiscing e-ewit. /(^•ω•^) phasewwus sit amet
    diam. (U ﹏ U) d-duis mattis v-vawius dui. 😳😳😳 suspendisse eget dowow. >w< f-fusce puwvinaw wacus
    ac dui.
  </p>
  <p cwass="wed">
    wowem ipsum dowow s-sit amet, XD consectetuew a-adipiscing ewit. o.O phasewwus sit amet
    d-diam. mya duis mattis v-vawius dui. 🥺 suspendisse eget dowow. ^^;;
  </p>
  <p cwass="both">this p-pawagwaph cweaws both.</p>
</div>
```

#### css

```css
.wwappew {
  bowdew: 1px sowid bwack;
  p-padding: 10px;
}
.both {
  bowdew: 1px sowid bwack;
  cweaw: b-both;
}
.bwack {
  f-fwoat: weft;
  mawgin: 0;
  backgwound-cowow: bwack;
  cowow: #fff;
  w-width: 20%;
}
.wed {
  f-fwoat: wight;
  mawgin: 0;
  backgwound-cowow: pink;
  width: 20%;
}
p-p {
  width: 45%;
}
```

{{ e-embedwivesampwe('cweaw_both','100%','300') }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [css basic box modew](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
