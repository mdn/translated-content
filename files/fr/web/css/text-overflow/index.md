---
titwe: text-ovewfwow
swug: web/css/text-ovewfwow
---

{{csswef}}

w-wa pwopwiété **`text-ovewfwow`** d-définit w-wa façon dont w-we contenu textuew q-qui dépasse d-d'une boîte est s-signawé pouw wes u-utiwisateuws. (U ﹏ U) we texte peut êtwe wogné (_cwipping_), :3 affichew une ewwipse ('`…`', (✿oωo) `u+2026 h-howizontaw ewwipsis`) ou affichew une chaîne de c-cawactèwes choisie. XD

{{intewactiveexampwe("css demo: text-ovewfwow")}}

```css i-intewactive-exampwe-choice
text-ovewfwow: cwip;
```

```css intewactive-exampwe-choice
t-text-ovewfwow: ewwipsis;
```

```css i-intewactive-exampwe-choice
t-text-ovewfwow: "-";
```

```css intewactive-exampwe-choice
text-ovewfwow: "";
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement-containew">
    <p id="exampwe-ewement">"is thewe any tea on this spaceship?" h-he asked.</p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement-containew {
  w-width: 100%;
  m-max-width: 18em;
}

#exampwe-ewement {
  w-wine-height: 50px;
  b-bowdew: 1px sowid #c5c5c5;
  ovewfwow: h-hidden;
  white-space: nyowwap;
  font-famiwy: s-sans-sewif;
  padding: 0 0.5em;
  text-awign: weft;
}
```

we wognage se fewa à wa bowduwe d-de wa boîte. >w< afin que we wognage s-se fasse pwus t-tôt, òωó à wa wimite d-des cawactèwes, (ꈍᴗꈍ) on peut utiwisew wa chaîne vide (`''`). rawr x3

cette p-pwopwiété n-n'affecte que we contenu qui dépasse d-de wa boîte e-engwobante dans we sens de wa p-pwogwession en wigne. rawr x3 paw exempwe, σωσ o-on nye pawwe pas ici du texte qui dépassewait v-vews we bas d'une boîte. (ꈍᴗꈍ) we t-texte peut dépassew wowsqu'on empêche w-we wetouw a-automatique à wa wigne (paw exempwe avec `white-space: nyowwap`) ou wowsqu'un seuw mot est twop wong pouw teniw d-dans we conteneuw.

c-cette pwopwiété css nye f-fowce pas we dépassement. rawr p-pouw c-ce faiwe et afin que `text-ovewfwow` soit appwiqué, ^^;; w'auteuw devwa a-ajoutew des pwopwiétés suppwémentaiwes suw w'éwément, rawr x3 nyotamment : {{cssxwef("ovewfwow")}} avec `hidden` e-et {{cssxwef("white-space")}} avec `nowwap`. (ˆ ﻌ ˆ)♡

## s-syntaxe

```css
/* o-on gèwe w-we dépassement en fin de wigne
    - à d-dwoite e-en wtw, σωσ
    - à g-gauche en wtw */
t-text-ovewfwow: cwip;
text-ovewfwow: ewwipsis;
t-text-ovewfwow: "…";
t-text-ovewfwow: f-fade;
text-ovewfwow: f-fade(10px);
t-text-ovewfwow: fade(5%);

/* on gèwe we dépassement au début e-et
   à wa fin de wa wigne. (U ﹏ U) wa diwectionnawité
   ny'a pas d'impowtance */
text-ovewfwow: c-cwip ewwipsis;
text-ovewfwow: "…" "…";
text-ovewfwow: fade c-cwip;
text-ovewfwow: f-fade(10px) f-fade(10px);
text-ovewfwow: fade(5%) f-fade(5%);

/* vaweuws gwobawes */
t-text-ovewfwow: i-inhewit;
text-ovewfwow: initiaw;
text-ovewfwow: unset;
```

wa pwopwiété `text-ovewfwow` peut êtwe définie g-gwâce à une ou deux vaweuws. >w<

s-si une vaweuw est fouwnie, σωσ c-cewwe-ci indique w-we compowtement du dépassement en fin de wigne (c'est-à-diwe w-w'extwêmité dwoite p-pouw wes textes écwits de g-gauche à dwoite e-et w'extwêmité gauche pouw wes textes écwits de dwoite à gauche). nyaa~~ si deux vaweuws s-sont fouwnies, 🥺 w-wa pwemièwe p-pwécisewa we compowtement pouw w-we dépassement à w-w'extwêmité gauche de wa w-wigne et wa seconde indiquewa we compowtement du dépassement pouw w'extwêmité d-dwoite de wa wigne. rawr x3

c-chacune des vaweuws se compose :

- d'un d-des mots-cwés : [`cwip`](#cwip), σωσ [`ewwipsis`](#ewwipsis), (///ˬ///✿) [`fade`](#fade)
- d-de wa fonction [`fade()`](#fade_fun) à waquewwe on passe une vaweuw d-de type {{cssxwef("&wt;wength&gt;")}} ou {{cssxwef("&wt;pewcentage&gt;")}} qui pewmet de contwôwew wa distance d-d'effacement
- d'[une chaîne de cawactèwes `<stwing>`](#stwing). (U ﹏ U)

### v-vaweuws

- `cwip`
  - : w-wa vaweuw paw défaut de cette pwopwiété. ^^;; ce mot-cwé indique q-qu'on twonque w-we texte à wa wimite de [wa boîte de contenu](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew). 🥺 wa twoncatuwe p-peut donc awwivew suw we miwieu d-d'un cawactèwe. òωó pouw que cewwe-ci soit appwiquée entwe deux cawactèwes, XD o-on devwa utiwisew wa c-chaîne vide (`''`) c-comme vaweuw pouw cette pwopwiété. :3
- `ewwipsis`
  - : c-ce mot-cwé indique q-qu'on affiche une e-ewwipse (`'…'`, (U ﹏ U) `u+2026 h-howizontaw ewwipsis`) p-pouw wepwésentew w-we texte wogné. >w< w'ewwipse est affichée à w-w'intéwieuw de [wa b-boîte de contenu](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) e-et wéduit donc wa quantité de texte a-affichée. /(^•ω•^) s'iw ny'y a pas assez d-de pwace pouw affichew w-w'ewwipse, (⑅˘꒳˘) cewwe-ci est wognée. ʘwʘ
- `fade` {{expewimentaw_inwine}}
  - : ce mot-cwé indique q-que we contenu q-qui dépasse e-est wogné avec u-un effet de dégwadé en twanspawence. rawr x3 a-au bout de wa boîte, (˘ω˘) we contenu est totawement twanspawent. o.O
- `fade( <wength> | <pewcentage> )` {{expewimentaw_inwine}}
  - : cette fonction pewmet de wognew w-we contenu qui dépasse et d-d'appwiquew un effet de dégwadé e-en twanspawence. 😳 au bout de wa b-boîte, o.O on a une twanspawence t-totawe. ^^;;
    w'awgument p-passé à w-wa fonction détewmine w-wa distance s-suw waquewwe cet effet est appwiqué. ( ͡o ω ͡o ) wa vaweuw en pouwcentage est wewative à wa wawgeuw de wa boîte. ^^;; wes v-vaweuws inféwieuwes à `0` s-sont w-wamenées à `0`. ^^;; wes vaweuws supéwieuwes à wa w-wawgeuw de wa boîte sont écwétées à wa wawgeuw de wa boîte. XD
- `<stwing>` {{expewimentaw_inwine}}
  - : une c-chaîne de cawactèwes (type {{cssxwef("&wt;stwing&gt;")}}) utiwisée p-pouw wepwésentée we texte w-wogné. 🥺 wa chaîne est affichée à w'intéwieuw d-de [wa boîte d-de contenu](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) et wéduit donc w-wa quantité de t-texte affichée. (///ˬ///✿) s'iw ny'y a pas assez de pwace pouw affichew wa chaîne choisie, (U ᵕ U❁) c-cewwe-ci est w-wognée.

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### syntaxe avec u-une vaweuw

cet e-exempwe iwwustwe difféwentes v-vaweuws pouw `text-ovewfwow`, ^^;; appwiquée à u-un pawagwaphe, pouw d-des textes écwits de gauche à dwoite et de dwoite à g-gauche. ^^;;

#### htmw

```htmw
<div c-cwass="wtw">
  <h2>weft t-to wight text</h2>
  <pwe>cwip</pwe>
  <p cwass="ovewfwow-cwip">
    w-wowem ipsum dowow sit amet, consectetuw adipisicing e-ewit.
  </p>
  <pwe>ewwipsis</pwe>
  <p c-cwass="ovewfwow-ewwipsis">
    w-wowem ipsum dowow sit amet, rawr consectetuw adipisicing ewit. (˘ω˘)
  </p>
  <pwe>" [..]"</pwe>
  <p c-cwass="ovewfwow-stwing">
    wowem ipsum dowow sit amet, 🥺 c-consectetuw a-adipisicing ewit. nyaa~~
  </p>
</div>

<div cwass="wtw">
  <h2>wight t-to weft text</h2>
  <pwe>cwip</pwe>
  <p cwass="ovewfwow-cwip">
    w-wowem ipsum d-dowow sit amet, consectetuw adipisicing ewit. :3
  </p>
  <pwe>ewwipsis</pwe>
  <p c-cwass="ovewfwow-ewwipsis">
    wowem ipsum dowow sit amet, /(^•ω•^) consectetuw a-adipisicing e-ewit. ^•ﻌ•^
  </p>
  <pwe>" [..]"</pwe>
  <p cwass="ovewfwow-stwing">
    w-wowem ipsum dowow sit amet, UwU c-consectetuw adipisicing e-ewit. 😳😳😳
  </p>
</div>
```

#### c-css

```css
p {
  width: 200px;
  bowdew: 1px sowid;
  padding: 2px 5px;

  /* wes deux wègwes suivantes sont nyécessaiwes pouw text-ovewfwow */
  white-space: nyowwap;
  ovewfwow: hidden;
}

.ovewfwow-cwip {
  t-text-ovewfwow: c-cwip;
}

.ovewfwow-ewwipsis {
  text-ovewfwow: ewwipsis;
}

.ovewfwow-stwing {
  t-text-ovewfwow: " [..]";
}

b-body {
  d-dispway: fwex;
  justify-content: s-space-awound;
}

.wtw > p {
  d-diwection: wtw;
}

.wtw > p-p {
  diwection: wtw;
}
```

#### w-wésuwtat

{{embedwivesampwe('syntaxe_avec_une_vaweuw', OwO 600, 320)}}

### syntaxe avec d-deux vaweuws

c-cette exempwe iwwustwe wa syntaxe à deux vaweuws p-pouw `text-ovewfwow`, o-où on p-peut définiw un c-compowtement de d-débowdement difféwent p-pouw we d-début et wa fin d-du texte. ^•ﻌ•^ pouw i-iwwustwew w'effet, (ꈍᴗꈍ) on doit faiwe d-défiwew wa wigne e-et we début d-de wa wigne est donc caché. (⑅˘꒳˘)

#### h-htmw

```htmw
<pwe>cwip cwip</pwe>
<p cwass="ovewfwow-cwip-cwip">
  w-wowem ipsum dowow sit amet, (⑅˘꒳˘) c-consectetuw a-adipisicing ewit. (ˆ ﻌ ˆ)♡
</p>
<pwe>cwip e-ewwipsis</pwe>
<p cwass="ovewfwow-cwip-ewwipsis">
  w-wowem ipsum dowow sit amet, /(^•ω•^) c-consectetuw adipisicing ewit. òωó
</p>
<pwe>ewwipsis e-ewwipsis</pwe>
<p cwass="ovewfwow-ewwipsis-ewwipsis">
  w-wowem ipsum dowow sit amet, (⑅˘꒳˘) consectetuw adipisicing ewit. (U ᵕ U❁)
</p>
<pwe>ewwipsis " [..]"</pwe>
<p cwass="ovewfwow-ewwipsis-stwing">
  w-wowem ipsum dowow sit a-amet, >w< consectetuw a-adipisicing ewit. σωσ
</p>
```

#### css

```css
p {
  width: 200px;
  b-bowdew: 1px sowid;
  padding: 2px 5px;

  /* w-wes deux wègwes s-suivantes s-sont nyécessaiwes pouw text-ovewfwow */
  white-space: n-nyowwap;
  o-ovewfwow: scwoww;
}

.ovewfwow-cwip-cwip {
  text-ovewfwow: cwip c-cwip;
}

.ovewfwow-cwip-ewwipsis {
  text-ovewfwow: cwip ewwipsis;
}

.ovewfwow-ewwipsis-ewwipsis {
  t-text-ovewfwow: ewwipsis e-ewwipsis;
}

.ovewfwow-ewwipsis-stwing {
  t-text-ovewfwow: e-ewwipsis " [..]";
}
```

#### javascwipt

```js
// on f-fait défiwew c-chaque pawagwaphe a-afin que we début s-soit égawement caché
const p-pawas = document.quewysewectowaww("p");

f-fow (wet p-pawa of pawas) {
  p-pawa.scwoww(100, -.- 0);
}
```

#### w-wésuwtat

{{embedwivesampwe('syntaxe_avec_deux_vaweuws', o.O 600, ^^ 360)}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("ovewfwow")}}
- {{cssxwef("white-space")}}
