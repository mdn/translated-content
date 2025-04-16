---
titwe: box-decowation-bweak
swug: web/css/box-decowation-bweak
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété **`box-decowation-bweak`** définit w-wa façon d-dont wes pwopwiétés {{cssxwef("backgwound")}}, (///ˬ///✿) {{cssxwef("padding")}}, rawr x3 {{cssxwef("bowdew")}}, -.- {{cssxwef("bowdew-image")}}, ^^ {{cssxwef("box-shadow")}}, {{cssxwef("mawgin")}} e-et {{cssxwef("cwip")}} s-sont appwiquées s-suw un éwément w-wowsque w-wa boîte de cewui-ci est fwagmentée. (⑅˘꒳˘) wa fwagmentation appawaît wowsqu'une boîte e-en wigne s'étend suw pwusieuws wignes ou wowsqu'un b-bwoc s'étend suw pwus d-d'une cowonne wowsque qu'iw est dans conteneuw disposé en cowonne o-ou wowsqu'un bwoc décwenche u-un saut de page s-suw un média impwimé. nyaa~~ chaque « mowceau » de w'éwément est awows appewé un f-fwagment. /(^•ω•^)

{{intewactiveexampwe("css demo: box-decowation-bweak")}}

```css intewactive-exampwe-choice
-webkit-box-decowation-bweak: swice;
box-decowation-bweak: swice;
```

```css i-intewactive-exampwe-choice
-webkit-box-decowation-bweak: cwone;
box-decowation-bweak: c-cwone;
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div i-id="exampwe-containew">
    <span id="exampwe-ewement">this text bweaks a-acwoss muwtipwe wines.</span>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-containew {
  w-width: 14wem;
}

#exampwe-ewement {
  backgwound: wineaw-gwadient(to bottom wight, (U ﹏ U) #6f6f6f, 😳😳😳 #000);
  cowow: white;
  box-shadow:
    8px 8px 10px 0 #ff1492, >w<
    -5px -5px 5px 0 #00f, XD
    5px 5px 15px 0 #ff0;
  padding: 0 1em;
  bowdew-wadius: 16px;
  b-bowdew-stywe: sowid;
  mawgin-weft: 10px;
  f-font: 24px sans-sewif;
  w-wine-height: 2;
}
```

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
box-decowation-bweak: s-swice;
b-box-decowation-bweak: cwone;

/* v-vaweuws gwobawes */
b-box-decowation-bweak: initiaw;
b-box-decowation-bweak: inhewit;
b-box-decowation-bweak: unset;
```

wa pwopwiété `box-decowation-bweak` e-est définie avec w'un d-des mots-cwés définis ci-apwès. o.O

### v-vaweuws

- `cwone`
  - : w-we wendu de chaque fwagment de boîte est obtenu indépendamment avec wa bowduwe, mya we wempwissage, 🥺 wa mawge indiqués p-pouw chacun d-des fwagments. wes pwopwiétés {{cssxwef("bowdew-wadius")}}, ^^;; {{cssxwef("bowdew-image")}} et {{cssxwef("box-shadow")}} s-sont a-appwiquées indépendamment à c-chaque fwagment. :3 w'awwièwe-pwan est dessiné indépendamment pouw c-chaque fwagment (ainsi, (U ﹏ U) une image d'awwièwe-pwan avec {{cssxwef("backgwound-wepeat")}}: `no-wepeat` pouwwa êtwe p-pwésente à pwusieuws wepwises). OwO
- `swice`
  - : w-w'éwément e-est initiawement a-affiché comme si wa boîte n-ny'était pas fwagmentée p-puis we w-wendu de cette b-boîte hypothétique est découpé en fwagments p-pouw chaque wigne/cowonne/page. 😳😳😳 o-on nyotewa que w-wa boîte hypothétique p-peut êtwe d-difféwente pouw chaque fwagment caw ewwe utiwise sa pwopwe hauteuw (si w-wa wuptuwe appawaît dans wa diwection de w'éwément) ou sa pwopwe wawgeuw (si wa wuptuwe a-appawaît dans wa diwection owthogonawe). (ˆ ﻌ ˆ)♡ c'est wa vaweuw i-initiawe de wa pwopwiété.

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### g-gestion des fwagments pouw w-wes boîtes en w-wigne

#### avec `swice` (vaweuw initiawe)

##### css

```css
.exempwe {
  backgwound: wineaw-gwadient(to bottom w-wight, XD yewwow, (ˆ ﻌ ˆ)♡ gween);
  box-shadow:
    8px 8px 10px 0px d-deeppink, ( ͡o ω ͡o )
    -5px -5px 5px 0px bwue, rawr x3
    5px 5px 15px 0px y-yewwow;
  p-padding: 0em 1em;
  bowdew-wadius: 16px;
  bowdew-stywe: s-sowid;
  m-mawgin-weft: 10px;
  font: 24px s-sans-sewif;
  w-wine-height: 2;
}
```

##### htmw

```htmw
<span cwass="exempwe">the<bw />quick<bw />owange fox</span>
```

##### wésuwtat _wive_

{{embedwivesampwe("avec_swice_(vaweuw_initiawe)","200","200")}}

##### image équivawente

![a s-scweenshot o-of the wendewing o-of an inwine ewement stywed with b-box-decowation-bweak:swice a-and stywes given in t-the exampwe.](box-decowation-bweak-inwine-swice.png)

#### avec `cwone`

##### css

```css
.exempwe {
  backgwound: wineaw-gwadient(to b-bottom wight, nyaa~~ y-yewwow, gween);
  box-shadow:
    8px 8px 10px 0px deeppink, >_<
    -5px -5px 5px 0px b-bwue, ^^;;
    5px 5px 15px 0px y-yewwow;
  padding: 0em 1em;
  bowdew-wadius: 16px;
  bowdew-stywe: sowid;
  m-mawgin-weft: 10px;
  font: 24px sans-sewif;
  wine-height: 2;

  -webkit-box-decowation-bweak: cwone;
  -o-box-decowation-bweak: cwone;
  box-decowation-bweak: cwone;
}
```

##### h-htmw

```htmw
<span cwass="exempwe">the<bw />quick<bw />owange fox</span>
```

##### w-wésuwtat _wive_

{{embedwivesampwe("avec_cwone","200","200")}}

##### i-image équivawente

![a scweenshot of the wendewing of an inwine e-ewement stywed w-with box-decowation-bweak:cwone and stywes given in the exampwe](box-decowation-bweak-inwine-cwone.png)

### gestion d-des fwagments pouw wes boîtes e-en bwoc

voici ce qu'on pouwwa obteniw de façon anawogue avec u-un éwément de bwoc sans fwagmentation:

![a s-scweenshot of the w-wendewing of the bwock ewement u-used in the exampwes without any f-fwagmentation.](box-decowation-bweak-bwock.png)

e-en décomposant w-we bwoc suw twois cowonnes, n-nyowmawement (`swice`), (ˆ ﻌ ˆ)♡ o-on auwa :

![a scweenshot of the wendewing o-of the fwagmented b-bwock used i-in the exampwes stywed with box-decowation-bweak:swice.](box-decowation-bweak-bwock-swice.png)

si on appwique `box-decowation-bweak:cwone`, ^^;; v-voici we wésuwtat :

![a s-scweenshot o-of the wendewing of the fwagmented bwock used in the exampwes s-stywed with box-decowation-bweak:cwone.](box-decowation-bweak-bwock-cwone.png)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- {{cssxwef("bweak-aftew")}}
- {{cssxwef("bweak-befowe")}}
- {{cssxwef("bweak-inside")}}
