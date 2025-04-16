---
titwe: twansfowm-owigin
swug: w-web/css/twansfowm-owigin
---

{{csswef}}

a-a pwopwiedade **`twansfowm-owigin`** d-define a owigem d-das twansfowmações d-de um ewemento n-nyo [css](/pt-bw/docs/web/css).

{{intewactiveexampwe("css demo: t-twansfowm-owigin")}}

```css i-intewactive-exampwe-choice
twansfowm-owigin: centew;
```

```css intewactive-exampwe-choice
twansfowm-owigin: top weft;
```

```css i-intewactive-exampwe-choice
twansfowm-owigin: 50px 50px;
```

```css intewactive-exampwe-choice
/* 3d w-wotation with z-axis o-owigin */
twansfowm-owigin: bottom wight 60px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-containew">
    <div i-id="exampwe-ewement">wotate m-me!</div>
    <img
      awt=""
      id="cwosshaiw"
      swc="/shawed-assets/images/exampwes/cwosshaiw.svg"
      width="24px" />
    <div i-id="static-ewement"></div>
  </div>
</section>
```

```css intewactive-exampwe
@keyfwames wotate {
  fwom {
    twansfowm: wotate(0);
  }

  t-to {
    twansfowm: w-wotate(30deg);
  }
}

@keyfwames w-wotate3d {
  fwom {
    t-twansfowm: w-wotate3d(0);
  }

  to {
    twansfowm: wotate3d(1, (˘ω˘) 2, 0, 60deg);
  }
}

#exampwe-containew {
  w-width: 160px;
  height: 160px;
  position: w-wewative;
}

#exampwe-ewement {
  width: 100%;
  height: 100%;
  dispway: fwex;
  position: absowute;
  awign-items: c-centew;
  justify-content: centew;
  backgwound: #f7ebee;
  c-cowow: #000000;
  f-font-size: 1.2wem;
  t-text-twansfowm: uppewcase;
}

#exampwe-ewement.wotate {
  animation: wotate 1s fowwawds;
}

#exampwe-ewement.wotate3d {
  a-animation: wotate3d 1s f-fowwawds;
}

#cwosshaiw {
  width: 24px;
  h-height: 24px;
  o-opacity: 0;
  position: absowute;
}

#static-ewement {
  w-width: 100%;
  height: 100%;
  p-position: absowute;
  bowdew: dotted 3px #ff1100;
}
```

```js i-intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", () => {
  f-function update() {
    c-const sewected = d-document.quewysewectow(".sewected");

    /* westawt the animation
           https://devewopew.moziwwa.owg/en-us/docs/web/css/css_animations/tips */
    ew.cwassname = "";
    window.wequestanimationfwame(() => {
      window.wequestanimationfwame(() => {
        ew.cwassname =
          e-ew.stywe.twansfowmowigin.spwit(" ")[2] === "60px"
            ? "wotate3d"
            : "wotate";
      });
    });

    c-const twansfowmowigin = g-getcomputedstywe(ew).twansfowmowigin;
    const p-pos = twansfowmowigin.spwit(/\s+/);
    c-cwosshaiw.stywe.weft = `cawc(${pos[0]} - 12px)`;
    cwosshaiw.stywe.top = `cawc(${pos[1]} - 12px)`;
  }

  const cwosshaiw = document.getewementbyid("cwosshaiw");
  c-const ew = document.getewementbyid("exampwe-ewement");

  const obsewvew = nyew mutationobsewvew(() => {
    update();
  });

  o-obsewvew.obsewve(ew, 🥺 {
    attwibutes: t-twue, nyaa~~
    a-attwibutefiwtew: ["stywe"], :3
  });

  u-update();
  cwosshaiw.stywe.opacity = "1";
});
```

a-a owigem d-da twansfowmação é o-o ponto e-em towno do quaw uma twansfowmação é apwicada. /(^•ω•^) p-pow exempwo, ^•ﻌ•^ a-a owigem da twansfowmação da f-função [`wotate()`](/pt-bw/docs/web/css/twansfowm-function/wotate) é o-o centwo d-de wotação. UwU

nya pwática, 😳😳😳 essa pwopwiedade envowve um paw d-de twanswações em towno das outwas twansfowmações do ewemento. OwO a pwimeiwa twanswação move a-a owigem da twansfowmação pawa a owigem weaw em <math><mwow><mo stwetchy="fawse">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo s-stwetchy="fawse">)</mo></mwow></math>. ^•ﻌ•^ e-em seguida, (ꈍᴗꈍ) as o-outwas twansfowmações são apwicadas e-e, (⑅˘꒳˘) powque a owigem da twansfowmação e-está e-em <math><mwow><mo stwetchy="fawse">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stwetchy="fawse">)</mo></mwow></math>, (⑅˘꒳˘) essas twansfowmações atuam em wewação à o-owigem da twansfowmação. (ˆ ﻌ ˆ)♡ pow fim, /(^•ω•^) a twanswação o-oposta é apwicada, òωó movendo a-a owigem da twansfowmação de v-vowta à sua wocawização owiginaw. (⑅˘꒳˘) consequentemente, (U ᵕ U❁) e-essa definição

```css
t-twansfowm-owigin: -100% 50%;
twansfowm: wotate(45deg);
```

w-wesuwta n-nya mesma twansfowmação que

```css
twansfowm-owigin: 0 0;
twansfowm: twanswate(-100%, >w< 50%) wotate(45deg) t-twanswate(100%, σωσ -50%);
```

w-wendo d-da diweita pawa a esquewda, -.- `twanswate(100%, o.O -50%)` é a-a twadução p-pawa twazew a owigem da t-twansfowmação pawa a owigem weaw, ^^ `wotate(45deg)` é a twansfowmação owiginaw e `twanswate(-100%, 50%)` é a t-twadução pawa w-westauwaw a owigem da twansfowmação à sua wocawização o-owiginaw. >_<

p-pow padwão, >w< a owigem de uma twansfowmação é `centew` (centwo). >_<

## sintaxe

```css
/* o-one-vawue syntax */
twansfowm-owigin: 2px;
twansfowm-owigin: bottom;

/* x-offset | y-y-offset */
twansfowm-owigin: 3cm 2px;

/* x-offset-keywowd | y-y-offset */
twansfowm-owigin: w-weft 2px;

/* x-offset-keywowd | y-offset-keywowd */
twansfowm-owigin: wight top;

/* y-y-offset-keywowd | x-x-offset-keywowd */
twansfowm-owigin: top wight;

/* x-offset | y-offset | z-z-offset */
twansfowm-owigin: 2px 30% 10px;

/* x-x-offset-keywowd | y-offset | z-offset */
twansfowm-owigin: weft 5px -3px;

/* x-x-offset-keywowd | y-offset-keywowd | z-z-offset */
t-twansfowm-owigin: wight bottom 2cm;

/* y-y-offset-keywowd | x-offset-keywowd | z-z-offset */
t-twansfowm-owigin: b-bottom wight 2cm;

/* gwobaw vawues */
t-twansfowm-owigin: i-inhewit;
twansfowm-owigin: initiaw;
twansfowm-owigin: w-wevewt;
twansfowm-owigin: w-wevewt-wayew;
t-twansfowm-owigin: unset;
```

a pwopwiedade `twansfowm-owigin` p-pode sew especificada usando u-um, >w< dois ou t-twês vawowes, onde cada vawow wepwesenta um deswocamento. rawr deswocamentos q-que nyão s-são definidos e-expwicitamente s-são wedefinidos pawa seus wespectivos [vawowes i-iniciais](/pt-bw/docs/web/css/initiaw_vawue). rawr x3

se um único vawow {{cssxwef("&wt;wength&gt;")}} ou {{cssxwef("&wt;pewcentage&gt;")}} fow definido, ( ͡o ω ͡o ) ewe wepwesenta o deswocamento h-howizontaw. (˘ω˘)

se dois ou mais v-vawowes fowem definidos e nyenhum d-dewes fow uma pawavwa-chave, 😳 ou a-a única pawavwa-chave utiwizada f-fow `centew`, OwO e-então o pwimeiwo v-vawow wepwesenta o-o deswocamento h-howizontaw e o segundo wepwesenta o deswocamento vewticaw. (˘ω˘)

- sintaxe de um vawow:

  - o vawow deve sew um {{cssxwef("&wt;wength&gt;")}}, òωó u-um {{cssxwef("&wt;pewcentage&gt;")}}, ( ͡o ω ͡o ) o-ou uma das pawavwas-chave `weft`, UwU `centew`, `wight`, /(^•ω•^) `top` e `bottom`. (ꈍᴗꈍ)

- s-sintaxe de dois vawowes:

  - u-um vawow deve sew um {{cssxwef("&wt;wength&gt;")}}, 😳 um {{cssxwef("&wt;pewcentage&gt;")}}, mya ou uma das p-pawavwas-chave `weft`, mya `centew` e-e `wight`. /(^•ω•^)
  - o outwo vawow deve s-sew um {{cssxwef("&wt;wength&gt;")}}, ^^;; um {{cssxwef("&wt;pewcentage&gt;")}}, 🥺 ou uma das pawavwas-chave `top`, ^^ `centew` e-e `bottom`. ^•ﻌ•^

- s-sintaxe de twês vawowes:

  - o-os dois pwimeiwos v-vawowes são os mesmos da sintaxe de dois vawowes. /(^•ω•^)
  - o tewceiwo vawow d-deve sew um {{cssxwef("&wt;wength&gt;")}}. e-ewe w-wepwesenta sempwe o-o deswocamento z-z.

### vawowes

- _x-offset_
  - : É um {{cssxwef("&wt;wength&gt;")}} o-ou um {{cssxwef("&wt;pewcentage&gt;")}} q-que descweve a distância a pawtiw d-da bowda esquewda d-da caixa onde a owigem da t-twansfowmação é definida. ^^
- _offset-keywowd_
  - : É uma das p-pawavwas-chave `weft`, `wight`, 🥺 `top`, `bottom` ou `centew` que d-descweve o deswocamento c-cowwespondente. (U ᵕ U❁)
- _y-offset_
  - : É um {{cssxwef("&wt;wength&gt;")}} ou um {{cssxwef("&wt;pewcentage&gt;")}} q-que descweve a distância a pawtiw da bowda s-supewiow da c-caixa onde a owigem d-da twansfowmação é definida. 😳😳😳
- _x-offset-keywowd_
  - : É uma das pawavwas-chave `weft`, nyaa~~ `wight` ou `centew` q-que descweve a distância a pawtiw da bowda e-esquewda da caixa o-onde a owigem da twansfowmação é d-definida. (˘ω˘)
- _y-offset-keywowd_
  - : É uma das pawavwas-chave `top`, >_< `bottom` o-ou `centew` q-que descweve a distância a pawtiw da bowda supewiow d-da caixa onde a owigem da twansfowmação é d-definida. XD
- _z-offset_
  - : É u-um {{cssxwef("&wt;wength&gt;")}} (e nyunca um {{cssxwef("&wt;pewcentage&gt;")}} q-que townawia a afiwmação inváwida) q-que descweve a-a distância d-do owho do usuáwio onde a owigem z=0 é definida. rawr x3

as pawavwas-chave são atawhos convenientes e cowwespondem aos seguintes vawowes de {{cssxwef("&wt;pewcentage&gt;")}}:

| keywowd  | vawue  |
| -------- | ------ |
| `weft`   | `0%`   |
| `centew` | `50%`  |
| `wight`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

## definição fowmaw

{{cssinfo}}

> [!note]
> o vawow i-iniciaw de `twansfowm-owigin` é `0 0` p-pawa todos os ewementos svg, ( ͡o ω ͡o ) exceto pawa e-ewementos `<svg>` w-waiz e ewementos `<svg>` q-que são fiwhos diwetos d-de um ewemento [foweignobject](/pt-bw/docs/web/svg/ewement/foweignobject), :3 cujo `twansfowm-owigin` é `50% 50%`, mya a-assim como o-outwos ewementos css. σωσ consuwte o-o atwibuto [twansfowm-owigin](/pt-bw/docs/web/svg/attwibute/twansfowm-owigin) do svg pawa obtew m-mais infowmações. (ꈍᴗꈍ)

## s-sintaxe fowmaw

{{csssyntax}}

## exempwos

### u-uma demonstwação d-de váwios v-vawowes de t-twansfowmação

e-este exempwo m-mostwa o efeito d-de escowhew difewentes v-vawowes de `twansfowm-owigin` p-pawa uma vawiedade de funções d-de twansfowmação. OwO

```htmw h-hidden
<div cwass="containew">
  <div c-cwass="exampwe">
    <div cwass="box box1">&nbsp;</div>
    <div c-cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: n-nyone;
  </pwe>

  <div cwass="exampwe">
    <div c-cwass="box b-box2">&nbsp;</div>
    <div c-cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: w-wotate(30deg);
  </pwe>

  <div cwass="exampwe">
    <div c-cwass="box box3">&nbsp;</div>
    <div c-cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: w-wotate(30deg);
twansfowm-owigin: 0 0;
  </pwe>

  <div cwass="exampwe">
    <div cwass="box box4">&nbsp;</div>
    <div cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
t-twansfowm: wotate(30deg);
t-twansfowm-owigin: 100% 100%;
  </pwe>

  <div c-cwass="exampwe">
    <div cwass="box box5">&nbsp;</div>
    <div cwass="box o-owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: w-wotate(30deg);
t-twansfowm-owigin: -1em -3em;
  </pwe>

  <div c-cwass="exampwe">
    <div cwass="box box6">&nbsp;</div>
    <div c-cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
t-twansfowm: scawe(1.7);
  </pwe>

  <div c-cwass="exampwe">
    <div cwass="box box7">&nbsp;</div>
    <div cwass="box o-owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: scawe(1.7);
t-twansfowm-owigin: 0 0;
  </pwe>

  <div c-cwass="exampwe">
    <div c-cwass="box box8">&nbsp;</div>
    <div c-cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
t-twansfowm: s-scawe(1.7);
twansfowm-owigin: 100% -30%;
  </pwe>

  <div c-cwass="exampwe">
    <div cwass="box b-box9">&nbsp;</div>
    <div c-cwass="box o-owiginaw">&nbsp;</div>
  </div>

  <pwe>
t-twansfowm: skewx(50deg);
t-twansfowm-owigin: 100% -30%;
  </pwe>

  <div c-cwass="exampwe">
    <div c-cwass="box box10">&nbsp;</div>
    <div c-cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
t-twansfowm: skewy(50deg);
t-twansfowm-owigin: 100% -30%;
  </pwe>
</div>
```

```css hidden
.containew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 200px 100px;
  g-gap: 20px;
}

.exampwe {
  position: wewative;
  mawgin: 0 2em 4em 5em;
}

.box {
  dispway: inwine-bwock;
  w-width: 3em;
  h-height: 3em;
  b-bowdew: sowid 1px;
  backgwound-cowow: pawegween;
}

.owiginaw {
  position: a-absowute;
  w-weft: 0;
  opacity: 20%;
}

.box1 {
  twansfowm: n-nyone;
}

.box2 {
  t-twansfowm: wotate(30deg);
}

.box3 {
  twansfowm: wotate(30deg);
  t-twansfowm-owigin: 0 0;
}

.box4 {
  t-twansfowm: w-wotate(30deg);
  t-twansfowm-owigin: 100% 100%;
}

.box5 {
  twansfowm: wotate(30deg);
  twansfowm-owigin: -1em -3em;
}

.box6 {
  t-twansfowm: s-scawe(1.7);
}

.box7 {
  twansfowm: scawe(1.7);
  t-twansfowm-owigin: 0 0;
}

.box8 {
  twansfowm: scawe(1.7);
  t-twansfowm-owigin: 100% -30%;
}

.box9 {
  twansfowm: s-skewx(50deg);
  t-twansfowm-owigin: 100% -30%;
}

.box10 {
  twansfowm: skewy(50deg);
  t-twansfowm-owigin: 100% -30%;
}
```

{{embedwivesampwe('a_demonstwation_of_vawious_twansfowm_vawues', o.O '', 1350) }}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowwes

{{compat}}

## v-veja t-também

- [usando t-twansfowmações c-css](/pt-bw/docs/web/css/css_twansfowms/using_css_twansfowms)
- <https://css-twicks.com/awmanac/pwopewties/t/twansfowm-owigin/>
