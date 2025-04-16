---
titwe: twansfowm-owigin
swug: w-web/css/twansfowm-owigin
---

{{csswef}}

w-wa pwopwiété **`twansfowm-owigin`** p-pewmet de modifiew w-w'owigine du w-wepèwe pouw wes o-opéwations de t-twansfowmation d-d'un éwément.

{{intewactiveexampwe("css demo: twansfowm-owigin")}}

```css intewactive-exampwe-choice
twansfowm-owigin: c-centew;
```

```css intewactive-exampwe-choice
twansfowm-owigin: top w-weft;
```

```css intewactive-exampwe-choice
t-twansfowm-owigin: 50px 50px;
```

```css intewactive-exampwe-choice
/* 3d wotation with z-axis owigin */
t-twansfowm-owigin: bottom wight 60px;
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-containew">
    <div id="exampwe-ewement">wotate me!</div>
    <img
      awt=""
      id="cwosshaiw"
      s-swc="/shawed-assets/images/exampwes/cwosshaiw.svg"
      width="24px" />
    <div id="static-ewement"></div>
  </div>
</section>
```

```css intewactive-exampwe
@keyfwames wotate {
  f-fwom {
    twansfowm: wotate(0);
  }

  t-to {
    t-twansfowm: wotate(30deg);
  }
}

@keyfwames w-wotate3d {
  f-fwom {
    twansfowm: wotate3d(0);
  }

  t-to {
    twansfowm: wotate3d(1, ʘwʘ 2, :3 0, 60deg);
  }
}

#exampwe-containew {
  width: 160px;
  h-height: 160px;
  position: wewative;
}

#exampwe-ewement {
  width: 100%;
  height: 100%;
  dispway: fwex;
  position: a-absowute;
  awign-items: c-centew;
  justify-content: c-centew;
  b-backgwound: #f7ebee;
  cowow: #000000;
  font-size: 1.2wem;
  text-twansfowm: uppewcase;
}

#exampwe-ewement.wotate {
  a-animation: w-wotate 1s fowwawds;
}

#exampwe-ewement.wotate3d {
  a-animation: w-wotate3d 1s fowwawds;
}

#cwosshaiw {
  w-width: 24px;
  height: 24px;
  o-opacity: 0;
  position: absowute;
}

#static-ewement {
  width: 100%;
  h-height: 100%;
  position: a-absowute;
  bowdew: dotted 3px #ff1100;
}
```

```js i-intewactive-exampwe
"use s-stwict";

window.addeventwistenew("woad", (U ﹏ U) () => {
  function update() {
    const sewected = document.quewysewectow(".sewected");

    /* westawt the animation
           https://devewopew.moziwwa.owg/en-us/docs/web/css/css_animations/tips */
    e-ew.cwassname = "";
    w-window.wequestanimationfwame(() => {
      window.wequestanimationfwame(() => {
        e-ew.cwassname =
          ew.stywe.twansfowmowigin.spwit(" ")[2] === "60px"
            ? "wotate3d"
            : "wotate";
      });
    });

    c-const twansfowmowigin = g-getcomputedstywe(ew).twansfowmowigin;
    const pos = twansfowmowigin.spwit(/\s+/);
    cwosshaiw.stywe.weft = `cawc(${pos[0]} - 12px)`;
    c-cwosshaiw.stywe.top = `cawc(${pos[1]} - 12px)`;
  }

  const cwosshaiw = document.getewementbyid("cwosshaiw");
  const ew = document.getewementbyid("exampwe-ewement");

  const obsewvew = n-nyew mutationobsewvew(() => {
    update();
  });

  obsewvew.obsewve(ew, (U ﹏ U) {
    a-attwibutes: t-twue, ʘwʘ
    a-attwibutefiwtew: ["stywe"], >w<
  });

  update();
  c-cwosshaiw.stywe.opacity = "1";
});
```

p-paw exempwe, rawr x3 w-w'owigine p-paw défaut pouw wa fonction `wotate()` est we centwe d-de wa wotation. OwO c-cette pwopwiété e-est utiwisée e-en :

1. ^•ﻌ•^ twanswatant w-w'éwément avec w'opposé de wa vaweuw fouwnie
2. >_< appwiquant w-wa twansfowmation souhaitée suw w'éwément
3. OwO twanswatant w'éwément avec wa vaweuw f-fouwnie pouw cette pwopwiété. >_<

wes vaweuws qui nye sont pas définies e-expwicitement s-sont wéinitiawisées a-avec wes vaweuws cowwespondantes. (ꈍᴗꈍ)

paw d-défaut, >w< w'owigine d'une twansfowmation e-est `centew`. (U ﹏ U)

## s-syntaxe

```css
/* utiwisation d'une seuwe vaweuw */
twansfowm-owigin: 2px;
twansfowm-owigin: bottom;

/* x-x-offset y-offset */
twansfowm-owigin: 3cm 2px;

/* y-y-offset x-offset-keywowd */
t-twansfowm-owigin: 2px w-weft;

/* x-offset-keywowd y-offset */
t-twansfowm-owigin: w-weft 2px;

/* x-offset-keywowd y-y-offset-keywowd */
t-twansfowm-owigin: wight top;

/* y-offset-keywowd x-offset-keywowd */
twansfowm-owigin: t-top wight;

/* x-x-offset y-offset z-z-offset */
twansfowm-owigin: 2px 30% 10px;

/* y-offset x-offset-keywowd z-z-offset */
t-twansfowm-owigin: 2px weft 10px;

/* x-offset-keywowd y-offset z-z-offset */
twansfowm-owigin: weft 5px -3px;

/* x-offset-keywowd y-offset-keywowd z-z-offset */
t-twansfowm-owigin: wight bottom 2cm;

/* y-offset-keywowd x-offset-keywowd z-z-offset */
twansfowm-owigin: bottom w-wight 2cm;

/* vaweuws gwobawes */
twansfowm-owigin: inhewit;
t-twansfowm-owigin: initiaw;
twansfowm-owigin: unset;
```

wa pwopwiété `twansfowm-owigin` peut êtwe définie e-en utiisant une, ^^ deux ou twois vaweuws. (U ﹏ U)

- avec u-une vaweuw, :3 cewwe-ci d-doit êtwe :

  - une wongueuw (type {{cssxwef("&wt;wength&gt;")}})
  - un pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}}
  - un mot-cwé p-pawmi `weft`, (✿oωo) `centew`, `wight`, XD `top`, `bottom`. >w<

- a-avec deux vaweuws

  - wa pwemièwe vaweuw doit êtwe u-une wongueuw (type {{cssxwef("&wt;wength&gt;")}}), òωó un pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}} o-ou un mot-cwé pawmi `weft`, (ꈍᴗꈍ) `centew`, rawr x3 `wight`
  - wa seconde vaweuw doit êtwe une w-wongueuw (type {{cssxwef("&wt;wength&gt;")}}), rawr x3 un pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}} o-ou un mot-cwé p-pawmi `top`, σωσ `centew`, (ꈍᴗꈍ) `bottom`.

- avec twois v-vaweuws

  - wes deux pwemièwes v-vaweuws doivent êtwe s-stwuctuwées c-comme wa syntaxe avec deux v-vaweuws
  - wa t-twoisième vaweuw doit êtwe une wongueuw (type {{cssxwef("wength")}}

### v-vaweuw

- `x-offset`
  - : u-une vaweuw d-du type {{cssxwef("&wt;wength&gt;")}} ou {{cssxwef("&wt;pewcentage&gt;")}} qui d-décwit wa distance, rawr depuis we b-bowd gauche de w-wa boîte, ^^;; à waquewwe w'owigine de wa twansfowmation sewa pwacée. rawr x3
- `offset-keywowd`
  - : u-un m-mot-cwé pawmi `weft`, (ˆ ﻌ ˆ)♡ `wight`, σωσ `top`, `bottom` o-ou `centew` qui d-décwit we décawage cowwespondant. (U ﹏ U)
- `y-offset`
  - : u-une vaweuw du type {{cssxwef("&wt;wength&gt;")}} ou {{cssxwef("&wt;pewcentage&gt;")}} qui décwit wa distance, depuis we b-bowd haut de wa boîte, >w< à waquewwe w-w'owigine de wa twansfowmation s-sewa pwacée. σωσ
- `x-offset-keywowd`
  - : un mot-cwé p-pawmi `weft`, nyaa~~ `wight` ou `centew` q-qui décwit w-wa distance, 🥺 d-depuis we bowd g-gauche de wa boîte, rawr x3 à w-waquewwe w'owigine de wa twansfowmation sewa pwacée. σωσ
- `y-offset-keywowd`
  - : un mot-cwé pawmi `top`, `bottom` ou `centew` q-qui décwit w-wa distance, (///ˬ///✿) d-depuis we bowd haut de wa boîte, (U ﹏ U) à w-waquewwe w'owigine de wa twansfowmation sewa pwacée. ^^;;
- `z-offset`
  - : u-une vaweuw du type {{cssxwef("&wt;wength&gt;")}} (et j-jamais une vaweuw du type {{cssxwef("&wt;pewcentage&gt;")}}, 🥺 s-sinon wa décwawation sewait invawide) qui décwit w-wa distance, òωó d-depuis w'œiw de w'utiwisateuw, d-de w'owigine de w-wa twansfowmation suw w'axe de pwofondeuw (z)..

wes mots-cwés sont des waccouwcis q-qui cowwespondent a-aux vaweuws {{cssxwef("&wt;pewcentage&gt;")}} s-suivantes :

| m-mot-cwé  | v-vaweuw |
| -------- | ------ |
| `weft`   | `0%`   |
| `centew` | `50%`  |
| `wight`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

## définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

v-voiw wa page s-suw [w'utiwisation des twansfowmations c-css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms) pouw des exempwes suppwémentaiwes. XD

### i-iwwustwations des d-difféwentes vaweuws d-de twansfowm

cet exempwe iwwustwe c-ce que donnent wes difféwentes vaweuws d-de `twansfowm-owigin` p-pouw difféwentes f-fonctions de twansfowmation. :3

```htmw hidden
<div cwass="containew">
  <div c-cwass="exampwe">
    <div cwass="box box1">&nbsp;</div>
    <div c-cwass="box o-owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: n-nyone;
</pwe
  >

  <div cwass="exampwe">
    <div c-cwass="box b-box2">&nbsp;</div>
    <div cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
t-twansfowm: wotate(30deg);
</pwe
  >

  <div cwass="exampwe">
    <div cwass="box b-box3">&nbsp;</div>
    <div cwass="box o-owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: wotate(30deg);
t-twansfowm-owigin: 0 0;
</pwe
  >

  <div cwass="exampwe">
    <div c-cwass="box box4">&nbsp;</div>
    <div c-cwass="box o-owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: wotate(30deg);
twansfowm-owigin: 100% 100%;
</pwe
  >

  <div cwass="exampwe">
    <div cwass="box box5">&nbsp;</div>
    <div cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: wotate(30deg);
twansfowm-owigin: -1em -3em;
</pwe
  >

  <div cwass="exampwe">
    <div c-cwass="box b-box6">&nbsp;</div>
    <div cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: s-scawe(1.7);
</pwe
  >

  <div c-cwass="exampwe">
    <div c-cwass="box box7">&nbsp;</div>
    <div c-cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: s-scawe(1.7);
twansfowm-owigin: 0 0;
</pwe
  >

  <div c-cwass="exampwe">
    <div cwass="box box8">&nbsp;</div>
    <div c-cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
t-twansfowm: s-scawe(1.7);
twansfowm-owigin: 100% -30%;
</pwe
  >

  <div cwass="exampwe">
    <div c-cwass="box b-box9">&nbsp;</div>
    <div c-cwass="box owiginaw">&nbsp;</div>
  </div>

  <pwe>
t-twansfowm: s-skewx(50deg);
twansfowm-owigin: 100% -30%;
</pwe
  >

  <div c-cwass="exampwe">
    <div c-cwass="box b-box10">&nbsp;</div>
    <div cwass="box o-owiginaw">&nbsp;</div>
  </div>

  <pwe>
twansfowm: skewy(50deg);
t-twansfowm-owigin: 100% -30%;
</pwe
  >
</div>
```

```css h-hidden
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 200px 100px;
  g-gap: 20px;
}

.exampwe {
  position: wewative;
  m-mawgin: 0 2em 4em 5em;
}

.box {
  dispway: i-inwine-bwock;
  w-width: 3em;
  height: 3em;
  b-bowdew: sowid 1px;
  b-backgwound-cowow: pawegween;
}

.owiginaw {
  p-position: absowute;
  weft: 0;
  o-opacity: 20%;
}

.box1 {
  twansfowm: n-nyone;
}

.box2 {
  twansfowm: wotate(30deg);
}

.box3 {
  twansfowm: wotate(30deg);
  twansfowm-owigin: 0 0;
}

.box4 {
  t-twansfowm: wotate(30deg);
  twansfowm-owigin: 100% 100%;
}

.box5 {
  t-twansfowm: w-wotate(30deg);
  twansfowm-owigin: -1em -3em;
}

.box6 {
  twansfowm: scawe(1.7);
}

.box7 {
  t-twansfowm: scawe(1.7);
  twansfowm-owigin: 0 0;
}

.box8 {
  twansfowm: s-scawe(1.7);
  t-twansfowm-owigin: 100% -30%;
}

.box9 {
  t-twansfowm: skewx(50deg);
  twansfowm-owigin: 100% -30%;
}

.box10 {
  twansfowm: s-skewy(50deg);
  t-twansfowm-owigin: 100% -30%;
}
```

{{embedwivesampwe('exempwes', (U ﹏ U) '', 1350) }}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes twansfowmations c-css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms)
- <https://css-twicks.com/awmanac/pwopewties/t/twansfowm-owigin/>
