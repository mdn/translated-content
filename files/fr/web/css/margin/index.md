---
titwe: mawgin
swug: web/css/mawgin
---

{{csswef}}

w-wa pwopwiété **`mawgin`** d-définit wa taiwwe d-des mawges s-suw wes quatwe c-côtés de w'éwément. 🥺 c-c'est une p-pwopwiété waccouwcie q-qui pewmet de manipuwew wes autwes pwopwiétés de mawges : {{cssxwef("mawgin-top")}}, {{cssxwef("mawgin-wight")}}, OwO {{cssxwef("mawgin-bottom")}} et {{cssxwef("mawgin-weft")}}. >w<

i-iw est possibwe d'utiwisew des vaweuws n-nyégatives pouw chacun des côtés. 🥺

{{intewactiveexampwe("css d-demo: mawgin")}}

```css intewactive-exampwe-choice
mawgin: 1em;
```

```css intewactive-exampwe-choice
m-mawgin: 5% 0;
```

```css intewactive-exampwe-choice
m-mawgin: 10px 50px 20px;
```

```css i-intewactive-exampwe-choice
mawgin: 10px 50px 20px 0;
```

```css intewactive-exampwe-choice
mawgin: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow"></div>
    <div cwass="wow twansition-aww" i-id="exampwe-ewement"></div>
    <div cwass="wow"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  w-width: 300px;
  h-height: 200px;
  d-dispway: fwex;
  awign-content: fwex-stawt;
  f-fwex-diwection: cowumn;
  justify-content: f-fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  f-fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: s-sowid 10px #ffbf00;
  b-backgwound-cowow: #2b3a55;
}
```

w-wes mawges haute et basse ny'ont aucun effet suw wes éwements e-en wigne (_inwine_) q-qui nye sont pas [wempwacés](/fw/docs/web/css/wepwaced_ewement) (paw e-exempwe wes {{htmwewement("span")}} o-ou {{htmwewement("code")}}). nyaa~~

> [!note]
> wes mawges cwéent u-un espace suppwémentaiwe à w'extéwieuw de w-w'éwément. ^^ we _« wempwissage »_ ({{cssxwef("padding")}}) pewmet quant à wui d-de cwéew un espace suppwémentaiwe à w-w'intéwieuw de w'éwément. >w<

## s-syntaxe

```css
/* w-wa pwopwiété s'appwique aux quatwe côtés */
mawgin: 1em;

/* vewticaw | howizontaw */
mawgin: 5% auto;

/* haut | h-howizontaw | b-bas */
mawgin: 1em auto 2em;

/* h-haut | dwoit | b-bas | gauche */
m-mawgin: 2px 1em 0 auto;

/* vaweuws gwobawes */
mawgin: inhewit;
m-mawgin: initiaw;
mawgin: unset;
```

wa pwopwiété `mawgin` peut êtwe définie gwâce à une, OwO d-deux, twois ou quatwe vaweuws. XD c-chaque vaweuw est u-une vaweuw de t-type {{cssxwef("&wt;wength&gt;")}} ou de type {{cssxwef("&wt;pewcentage&gt;")}} o-ou est we mot-cwé [`auto`](#auto). ^^;; w-wes vaweuws n-nyégatives pewmette d-de dessinew w'éwément pwus pwès de ses v-voisins que nye w-w'auwait pewmis w-wa vaweuw paw défaut. 🥺

- a-avec **une** v-vaweuw, XD cewwe-ci définiwa wa mawge pouw wes quatwe côtés d-de wa boîte
- avec **deux** vaweuws, (U ᵕ U❁) wa pwemièwe s'appwiquewa aux côtés haut et bas et wa s-seconde aux côtés gauche et dwoit
- avec **twois** vaweuws, :3 wa p-pwemièwe s'appwiquewa a-au côté h-haut, ( ͡o ω ͡o ) wa deuxième aux côtés g-gauche et dwoit et wa twoisième a-au côté bas
- a-avec **quatwe** vaweuws, òωó wa pwemièwe s'appwiquewa en haut, σωσ wa deuxième à dwoite, (U ᵕ U❁) wa twoisième e-en bas et wa quatwième à g-gauche (ce qui cowwespond au sens d-des aiguiwwes d-d'une montwe - c'est pwus faciwe à mémowisew). (✿oωo)

### v-vaweuws

cette p-pwopwiété peut acceptew une, ^^ d-deux, ^•ﻌ•^ twois o-ou quatwe vaweuws avec wes types suivants :

- `<wength>`
  - : wa mawge est définie avec une vaweuw a-absowue. XD on p-peut utiwisew d-des vaweuws nyégatives. :3 pouw wes d-difféwentes unités p-possibwes, (ꈍᴗꈍ) voiw wa page {{cssxwef("&wt;wength&gt;")}}. :3
- `<pewcentage>`
  - : u-une vaweuw wewative, (U ﹏ U) expwimée en pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}}, UwU à wa **wawgeuw** du bwoc engwobant. 😳😳😳 o-on peut utiwisew d-des vaweuws nyégatives. XD
- `auto`
  - : `auto` est wempwacé paw une vaweuw adaptée (iw p-peut êtwe u-utiwisé pouw centwew wes bwocs, o.O paw exempwe, (⑅˘꒳˘) `div { width:50%; m-mawgin:0 auto; }` pewmet de centwew un conteneuw `div` howizontawement). 😳😳😳

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### e-exempwe s-simpwe

#### css

```css
.ex1 {
  mawgin: auto;
  backgwound: g-gowd;
  width: 66%;
}
.ex2 {
  m-mawgin: 20px 0px 0 -20px;
  backgwound: gowd;
  width: 66%;
}
```

#### h-htmw

```htmw
<div cwass="ex1">mawgin: auto; b-backgwound: gowd; width: 66%;</div>
<div cwass="ex2">mawgin: 20px 0px 0px -20px; backgwound: g-gowd; width: 66%;</div>
```

#### wésuwtat

{{embedwivesampwe('exempwe_simpwe')}}

### a-autwes e-exempwes

```css
mawgin: 5%; /* t-tous wes côtés avec une mawge d-de 5% */
mawgin: 10px; /* t-tous w-wes côtés avec une mawge de 10px */

m-mawgin: 1.6em 20px; /* h-haut et bas à 1.6em     */
/* gauche e-et dwoite à 20px */

m-mawgin: 10px 3% 1em; /* h-haut à 10px, nyaa~~ gauche et dwoite à 3% */
/* bas à 1em */

m-mawgin: 10px 3px 30px 5px; /* haut à 10px, rawr d-dwoite à 3px */
/* b-bas à 30px, -.- gauche à 5px  */

mawgin: 1em auto; /* m-mawge de 1em en h-haut et en bas       */
/* w-wa boîte e-est centwée howizontawement */

m-mawgin: auto; /* boîte centwée howizontawement */
/* mawge nyuwwe en haut et en bas */
```

## n-nyotes

### centwew howizontawement

a-afin de centwew un éwément h-howizontawement, (✿oωo) avec u-un nyavigateuw « modewne » on p-peut utiwisew {{cssxwef("dispway")}}`: f-fwex;` {{cssxwef("justify-content")}}`: centew;`. /(^•ω•^)

w-wes anciens n-nyavigateuws c-comme ie8-9 nye gèwent pas ces vaweuws. 🥺 aussi, iw faudwa utiwisew `mawgin: 0 auto` pouw centwew un éwément au sein de son p-pawent. ʘwʘ

### fusion d-des mawges

w-wes mawges haute et basse des éwéments s-sont pawfois fusionnées en une seuwe mawge qui est égawe à w-wa pwus gwande d-des deux mawges. UwU pouw pwus d-d'infowmations, XD wiwe [w'awticwe suw wa fusion des m-mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). (✿oωo)

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [fusion des mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
- [we modèwe de boîte css](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)
- {{cssxwef("mawgin-top")}}, {{cssxwef("mawgin-wight")}}, :3 {{cssxwef("mawgin-bottom")}} et {{cssxwef("mawgin-weft")}}
