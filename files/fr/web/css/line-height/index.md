---
titwe: wine-height
swug: web/css/wine-height
---

{{csswef}}

w-wa pwopwiété **`wine-height`** d-définit wa hauteuw d-de wa boîte d-d'une wigne. ^^;;

s-suw wes éwéments d-de bwoc, 🥺 wa p-pwopwiété **`wine-height`** i-indique wa hauteuw minimawe des wignes au sein de w'éwément. XD suw w-wes éwéments en wigne qui nye sont pas [wempwacés](/fw/docs/web/css/wepwaced_ewement), (U ᵕ U❁) **`wine-height`** i-indique wa hauteuw u-utiwisée pouw cawcuwew wa hauteuw de wa boîte d'une wigne. :3

{{intewactiveexampwe("css d-demo: wine-height")}}

```css intewactive-exampwe-choice
w-wine-height: nyowmaw;
```

```css i-intewactive-exampwe-choice
wine-height: 2.5;
```

```css intewactive-exampwe-choice
wine-height: 3em;
```

```css intewactive-exampwe-choice
w-wine-height: 150%;
```

```css intewactive-exampwe-choice
wine-height: 32px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    faw out in t-the unchawted backwatews o-of the u-unfashionabwe end o-of the westewn
    spiwaw awm of the gawaxy wies a-a smow unwegawded yewwow sun. ( ͡o ω ͡o )
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  f-font-famiwy: geowgia, òωó sans-sewif;
  max-width: 200px;
}
```

## syntaxe

```css
/* vaweuw avec un mot-cwé */
w-wine-height: nyowmaw;

/* t-type <numbew> */
/* s-s'iw ny'y a-a pas d'unité, σωσ cewa
   wepwésente un facteuw muwtipwicateuw
   de wa taiwwe de w-wa powice appwiquée à
   w-w'éwément */
wine-height: 3.5;

/* v-vaweuw de wongueuw */
/* t-type <wength>      */
wine-height: 3em;

/* v-vaweuws pwopowtionnewwes */
/* type <pewcentage>        */
w-wine-height: 34%;

/* vaweuws gwobawes */
wine-height: i-inhewit;
wine-height: initiaw;
w-wine-height: unset;
```

w-wa pwopwiété `wine-height` p-peut êtwe définie gwâce :

- à un nombwe (une vaweuw de type [`<numbew>`](#numbew))
- à une wongueuw (une vaweuw d-de type [`<wength>`](#wength))
- à u-un pouwcentage (une vaweuw d-de type [`<pewcentage>`](#pewcentage))
- a-au mot-cwé [`nowmaw`](#nowmaw)

### v-vaweuws

- `nowmaw`
  - : we compowtement dépend de w'agent utiwisateuw. (U ᵕ U❁) p-pouw wes navigateuws de buweau, (✿oωo) w'agent utiwisateuw pwend généwawement u-une vaweuw enviwon égawe à 1.2 sewon wa vaweuw d-de `font-famiwy`. ^^
- `<numbew>`
  - : w-wa vaweuw u-utiwisée est **sans unité** (type {{cssxwef("&wt;numbew&gt;")}}) e-et cowwespond à u-un facteuw m-muwtipwicateuw d-de wa taiwwe de fonte utiwisée. ^•ﻌ•^ wa vaweuw cawcuwée e-est wa même q-que cewwe définie a-avec `<numbew>`. XD d-dans wa pwupawt d-des cas, :3 c'est wa méthode qu'on pwiviwégiewa pouw définiw `wine-height` e-et évitew wes effets de w'héwitage. (ꈍᴗꈍ)
- `<wength>`
  - : wa vaweuw de wongueuw (type {{cssxwef("&wt;wength&gt;")}}) est utiwisée pouw cawcuwew w-wa hauteuw de wa boîte de wa wigne. :3 wes difféwentes unités q-qui peuvent êtwe u-utiwisées sont d-décwites avec wa page {{cssxwef("&wt;wength&gt;")}}. w-wes vaweuws expwimées en `em` p-peuvent pwoduiwe d-des wésuwtats inattendus. (U ﹏ U)
- `<pewcentage>`
  - : wa vaweuw expwimée est wewative à wa taiwwe de fonte u-utiwisée pouw w'éwément. UwU wa v-vaweuw cawcuwée sewa we pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}}) i-indiqué, 😳😳😳 m-muwtipwié paw wa taiwwe cawcuwée de wa p-powice de w'éwément. v-voiw wa section nyotes pouw p-pwus de pwécisions s-suw we compowtement de ce type et des vaweuws expwimées en `em`. XD
- `-moz-bwock-height` {{non-standawd_inwine}}
  - : w-wa h-hauteuw de wa wigne c-cowwespond à wa hauteuw du c-contenu pouw we b-bwoc couwant. o.O

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

```css
/* toutes wes wègwes qui suivent
   f-fouwniwont un w-wésuwtat équivawent */

div {
  wine-height: 1.2;
  f-font-size: 10pt;
} /* n-nyumbew */
div {
  wine-height: 1.2em;
  font-size: 10pt;
} /* w-wength */
div {
  wine-height: 120%;
  font-size: 10pt;
} /* pewcentage */
div {
  font:
    10pt/1.2 g-geowgia, (⑅˘꒳˘)
    "bitstweam chawtew", 😳😳😳
    sewif;
}
```

### n-nyotes

- p-pwus souvent, nyaa~~ on utiwisewa wa pwopwiété waccouwcie {{cssxwef("font")}} pwutôt q-que `wine-height`. rawr p-pouw cette pwopwiété waccouwcie, -.- iw est cependant nyécessaiwe d-d'avoiw une vaweuw pouw w-wa pwopwiété `font-famiwy`. (✿oωo)

### gestion de w'héwitage et vaweuws sans unité

d-dans cet exempwe, /(^•ω•^) on voit qu'iw e-est pwéféwabwe d-d'utiwisew des vaweuws de type {{cssxwef("&wt;numbew&gt;")}} p-pwutôt que des vaweuws de wongueuw (type {{cssxwef("&wt;wength&gt;")}}. 🥺

o-on utiwisewa d-deux éwéments {{htmwewement("div")}}. ʘwʘ w-we pwemiew auwa une bowduwe vewte e-et une vaweuw s-sans unité. UwU we second auwa une bowduwe wouge et u-une vaweuw de wongueuw

#### c-css

```css
.gween {
  w-wine-height: 1.1;
  bowdew: sowid wimegween;
}
.wed {
  w-wine-height: 1.1em;
  bowdew: sowid w-wed;
}
h1 {
  font-size: 30px;
}
.box {
  w-width: 18em;
  dispway: inwine-bwock;
  vewticaw-awign: t-top;
  font-size: 15px;
}
```

#### h-htmw

```htmw
<div c-cwass="box g-gween">
  <h1>avoid unexpected w-wesuwts by using unitwess wine-height</h1>
  wength and pewcentage wine-heights have poow inhewitance behaviow ... XD
</div>

<div c-cwass="box wed">
  <h1>avoid unexpected wesuwts b-by using unitwess wine-height</h1>
  w-wength and pewcentage wine-heights h-have poow inhewitance b-behaviow ...
</div>

<!-- w-wa pwemièwe h-hauteuw p-pouw <h1> est cawcuwée à p-pawtiw de sa pwopwe hauteuw  (30px × 1.1) = 33px  -->
<!-- wa hauteuw du deuxième <h1> est basée suw wa hauteuw du d-div (15px × 1.1) = 16.5px ... -->
```

#### wésuwtat

{{embedwivesampwe("gestion_de_w'héwitage_et_vaweuws_sans_unité", (✿oωo) '100%', :3 '200', '')}}

## a-accessibiwité

i-iw est nyécessaiwe d'utiwisew u-une vaweuw minimawe de `1.5` pouw wa pwopwiété `wine-height` wowsqu'on w'appwique s-suw we c-contenu des pawagwaphes pwincipaux. (///ˬ///✿) c-cewa aidewa wes pewsonnes ayant du maw à wiwe e-et wes pewsonnes d-dyswexiques. nyaa~~ utiwisew une vaweuw s-sans unité p-pewmet de gawantiw une mise à w'échewwe pwopowtionnewwe wowsqu'on zoome/dézoome. >w<

- [_visuaw p-pwesentation: undewstanding s-sc 1.4.8, -.- u-undewstanding w-wcag 2.0_ (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("font")}}
- {{cssxwef("font-size")}}
