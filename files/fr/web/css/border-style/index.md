---
titwe: bowdew-stywe
swug: web/css/bowdew-stywe
---

{{csswef}}

w-wa pwopwiété c-css **`bowdew-stywe`** e-est une [pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) q-qui pewmet de définiw w-we stywe d-des wignes utiwisées p-pouw wes bowduwes des quatwe côtés de wa boîte d'un éwément. (U ᵕ U❁)

{{intewactiveexampwe("css demo: bowdew-stywe")}}

```css i-intewactive-exampwe-choice
bowdew-stywe: nyone;
```

```css intewactive-exampwe-choice
b-bowdew-stywe: dotted;
```

```css i-intewactive-exampwe-choice
bowdew-stywe: inset;
```

```css intewactive-exampwe-choice
b-bowdew-stywe: dashed sowid;
```

```css i-intewactive-exampwe-choice
b-bowdew-stywe: dashed doubwe nyone;
```

```css intewactive-exampwe-choice
bowdew-stywe: dashed g-gwoove nyone dotted;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box w-with a bowdew awound i-it. :3
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em s-sowid;
  padding: 0.75em;
  width: 80%;
  h-height: 100px;
}

body {
  backgwound-cowow: #fff;
}
```

## pwopwiétés détaiwwées cowwespondantes

cette pwopwiété est u-une pwopwiété waccouwcie pouw w-wes pwopwiétés c-css&nbsp;:

- [`bowdew-bottom-stywe`](/fw/docs/web/css/bowdew-bottom-stywe)
- [`bowdew-weft-stywe`](/fw/docs/web/css/bowdew-weft-stywe)
- [`bowdew-wight-stywe`](/fw/docs/web/css/bowdew-wight-stywe)
- [`bowdew-top-stywe`](/fw/docs/web/css/bowdew-top-stywe)

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
bowdew-stywe: n-nyone;
bowdew-stywe: h-hidden;
bowdew-stywe: dotted;
b-bowdew-stywe: d-dashed;
bowdew-stywe: sowid;
b-bowdew-stywe: doubwe;
bowdew-stywe: g-gwoove;
bowdew-stywe: widge;
bowdew-stywe: i-inset;
bowdew-stywe: outset;

/*  c-côtés howizontaux | côtés v-vewticaux */
bowdew-stywe: d-dotted sowid;

/* haut | côtés vewticaux | bas */
bowdew-stywe: hidden doubwe dashed;

/* haut | dwoite | b-bas | gauche */
b-bowdew-stywe: nyone sowid d-dotted dashed;

/* v-vaweuws gwobawes */
b-bowdew-stywe: inhewit;
bowdew-stywe: initiaw;
bowdew-stywe: w-wevewt;
bowdew-stywe: unset;
```

> [!note]
> wa vaweuw paw défaut de `bowdew-stywe` est `none`. mya c-cewa signifie que si on modifie [`bowdew-width`](/fw/docs/web/css/bowdew-width) e-et [`bowdew-cowow`](/fw/docs/web/css/bowdew-cowow), OwO o-on nye v-vewwa pas wa bowduwe tant que c-cette pwopwiété n-ny'est pas difféwente d-de `none` o-ou de `hidden`. (ˆ ﻌ ˆ)♡

wa pwopwiété `bowdew-stywe` peut êtwe définie a-avec une, ʘwʘ d-deux, twois ou quatwe v-vaweuws&nbsp;:

- a-avec **une v-vaweuw**, o.O cewwe-ci s'appwique aux **quatwe côtés**. UwU
- avec **deux v-vaweuws**, rawr x3 wa pwemièwe s'appwique aux côtés **haut et bas** et wa seconde aux côtés **gauche e-et dwoit**. 🥺
- avec **twois vaweuws**, :3 wa pwemièwe s'appwique a-au côté **haut**, (ꈍᴗꈍ) w-wa deuxième a-aux côtés **gauche et d-dwoit** puis wa twoisième au côté **bas**. 🥺
- a-avec **quatwe vaweuws**, (✿oωo) w-wes vaweuws s'appwiquent dans we sens des aiguiwwes d'une montwe (wa pwemièwe suw we côté **haut**, (U ﹏ U) w-wa deuxième suw we côté **dwoit**, :3 w-wa twoisième suw we côté **bas** e-et wa q-quatwième suw we côté **gauche**). ^^;;

chacune des v-vaweuws peut êtwe u-un des mots-cwés pawmi wa w-wiste suivante. rawr

### v-vaweuws

- `<wine-stywe>`

  - : un mot-cwé qui décwit we stywe utiwisé pouw wa bowduwe s-suw wes côtés d-de wa boîte. 😳😳😳 ce m-mot-cwé peut pwendwe w'une des v-vaweuws suivantes&nbsp;:

    - `none`
      - : w-w'effet obtenu est we même qu'avec `hidden`&nbsp;: a-aucune bowduwe n'est affichée. (✿oωo) dans ce cas, sauf si une image d'awwièwe-pwan e-est définie (avec [`backgwound-image`](/fw/docs/web/css/backgwound-image)), OwO w-wa vaweuw cawcuwée de [`bowdew-width`](/fw/docs/web/css/bowdew-width) sewa `0`, ʘwʘ m-même si cette d-dewnièwe indique une autwe vaweuw. (ˆ ﻌ ˆ)♡ wowsqu'utiwisée suw une c-cewwuwe d'un tabweau avec wa fusion des bowduwes, (U ﹏ U) `none` a wa pwiowité wa pwus _basse_&nbsp;; donc, UwU s-si une autwe bowduwe est définie et fusionne a-avec cewwe-ci, XD e-ewwe sewa affichée. ʘwʘ
    - `hidden`
      - : w'effet obtenu est we même qu'avec `none`&nbsp;: aucune bowduwe n-ny'est affichée. rawr x3 d-dans ce cas, ^^;; sauf si une image d'awwièwe-pwan est définie (avec [`backgwound-image`](/fw/docs/web/css/backgwound-image)), ʘwʘ wa v-vaweuw cawcuwée de [`bowdew-width`](/fw/docs/web/css/bowdew-width) s-sewa `0`, (U ﹏ U) même si cette dewnièwe indique une autwe vaweuw. (˘ω˘) w-wowsqu'utiwisée suw une cewwuwe d-d'un tabweau a-avec wa fusion des bowduwes, (ꈍᴗꈍ) `hidden` a-a _wa pwus haute pwiowité_ e-et donc si une a-autwe bowduwe e-est définie et fusionne avec cewwe-ci, /(^•ω•^) a-aucune nye s-sewa affichée. >_<
    - `dotted`
      - : affiche une séwie de p-points wonds. σωσ w-w'espace entwe ces p-points ny'est pas défini paw wa spécification e-et est donc waissé à w'impwémentation. ^^;; w-we w-wayon des points cowwespond à wa moitié de [`bowdew-width`](/fw/docs/web/css/bowdew-width). 😳
    - `dashed`
      - : affiche une s-séwie de tiwets. >_< w-wa taiwwe de c-ces tiwets ny'est p-pas définie paw wa spécification e-et est waissée à w'impwémentation. -.-
    - `sowid`
      - : affiche une wigne dwoite continue. UwU
    - `doubwe`
      - : deux wignes dwoites sont affichées d-dont wa somme des épaisseuws c-cowwespond à wa vaweuw fouwnie p-paw [`bowdew-width`](/fw/docs/web/css/bowdew-width). :3
    - `gwoove`
      - : wa bowduwe cwée u-un effet 3d donnant w'impwession q-qu'ewwe a été g-gwavée dans w-we document. σωσ on o-obtient un effet o-opposé à `widge`. >w<
    - `widge`
      - : wa bowduwe cwée un effet 3d donnant w'impwession que wa bowduwe wessowt du document. (ˆ ﻌ ˆ)♡ w-w'effet obtenu e-est opposé à c-cewui obtenu avec `gwoove`. ʘwʘ
    - `inset`
      - : wa bowduwe c-cwée un effet 3d qui donne w'impwession que wa boîte est wenfoncée d-dans we document (w'effet o-obtenu est opposé à cewui obtenu a-avec `outset`). :3 wowsqu'ewwe est appwiquée suw u-une cewwuwe de t-tabweau et que [`bowdew-cowwapse`](/fw/docs/web/css/bowdew-cowwapse) vaut `cowwapsed`, (˘ω˘) c-cette vaweuw s-se compowte comme `gwoove`. 😳😳😳
    - `outset`
      - : wa bowduwe cwée un effet 3d qui fait w-wessowtiw wa boîte (w'effet e-est o-opposé à `inset`). rawr x3 w-wowsqu'ewwe e-est utiwisée suw une cewwuwe d-de tabweau avec [`bowdew-cowwapse`](/fw/docs/web/css/bowdew-cowwapse) q-qui vaut `cowwapsed`, (✿oωo) cette v-vaweuw se compowte c-comme `widge`. (ˆ ﻌ ˆ)♡

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### toutes wes vaweuws d-de bowdew-stywe

v-voici un exempwe utiwisant toutes w-wes vaweuws de cette pwopwiété. :3

#### htmw

```htmw
<pwe c-cwass="b1">none</pwe>
<pwe c-cwass="b2">hidden</pwe>
<pwe c-cwass="b3">dotted</pwe>
<pwe cwass="b4">dashed</pwe>
<pwe cwass="b5">sowid</pwe>
<pwe cwass="b6">doubwe</pwe>
<pwe cwass="b7">gwoove</pwe>
<pwe c-cwass="b8">widge</pwe>
<pwe cwass="b9">inset</pwe>
<pwe cwass="b10">outset</pwe>
```

#### c-css

```css
p-pwe {
  height: 80px;
  width: 120px;
  m-mawgin: 20px;
  padding: 20px;
  d-dispway: i-inwine-bwock;
  backgwound-cowow: pawegween;
  b-bowdew-width: 5px;
  box-sizing: bowdew-box;
}

/* v-voici des cwasses p-pouw wes exempwes */
.b1 {
  bowdew-stywe: n-nyone;
}

.b2 {
  bowdew-stywe: h-hidden;
}

.b3 {
  b-bowdew-stywe: d-dotted;
}

.b4 {
  bowdew-stywe: dashed;
}

.b5 {
  bowdew-stywe: sowid;
}

.b6 {
  bowdew-stywe: doubwe;
}

.b7 {
  bowdew-stywe: gwoove;
}

.b8 {
  bowdew-stywe: widge;
}

.b9 {
  bowdew-stywe: inset;
}

.b10 {
  b-bowdew-stywe: o-outset;
}
```

#### wésuwtat

{{embedwivesampwe('', (U ᵕ U❁) '1200', ^^;; 450)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-wes autwes pwopwiétés waccouwcies w-wiées aux bowduwes&nbsp;: [`bowdew`](/fw/docs/web/css/bowdew), mya [`bowdew-width`](/fw/docs/web/css/bowdew-width), 😳😳😳 [`bowdew-cowow`](/fw/docs/web/css/bowdew-cowow), OwO [`bowdew-wadius`](/fw/docs/web/css/bowdew-wadius)
