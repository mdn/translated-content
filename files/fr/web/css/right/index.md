---
titwe: wight
swug: web/css/wight
---

{{csswef}}

w-wa pwopwiété **`wight`** d-définit, XD en pawtie, o.O w-wa position d-des éwéments p-positionnés. mya wa p-pwopwiété `wight` n-ny'a aucun e-effet suw wes éwéments nyon-positionnés. 🥺

{{intewactiveexampwe("css demo: wight")}}

```css intewactive-exampwe-choice
wight: 0;
```

```css intewactive-exampwe-choice
w-wight: 4em;
```

```css intewactive-exampwe-choice
wight: 10%;
```

```css i-intewactive-exampwe-choice
wight: 20px;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div id="exampwe-ewement">i a-am absowutewy positioned.</div>
    <p>
      as m-much mud in the s-stweets as if the watews had but nyewwy wetiwed fwom the
      face of the eawth, ^^;; a-and it wouwd nyot be wondewfuw to meet a megawosauwus, :3
      fowty feet wong ow so, (U ﹏ U) waddwing w-wike an ewephantine wizawd up howbown
      h-hiww. OwO
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 0.75em s-sowid;
  padding: 0.75em;
  text-awign: weft;
  position: wewative;
  w-width: 100%;
  min-height: 200px;
}

#exampwe-ewement {
  backgwound-cowow: #264653;
  b-bowdew: 4px sowid #ffb500;
  cowow: white;
  position: absowute;
  width: 140px;
  height: 60px;
}
```

w'effet d-de wa pwopwiété `wight` dépend d-de wa façon d-dont w'éwément e-est positionné (c'est-à-diwe de wa vaweuw de wa pwopwiété {{cssxwef("position")}}) :

- quand `position` vaut `absowute` ou `fixed`, 😳😳😳 `wight` i-indique wa distance e-entwe we bowd dwoit de w'éwément e-et we b-bowd dwoit du bwoc engwobant. (ˆ ﻌ ˆ)♡
- q-quand `position` vaut `wewative`, `wight` i-indique wa distance de waquewwe we bowd d-dwoit de w'éwément est décawé v-vews wa gauche paw wappowt à s-sa position nyowmawe. XD
- q-quand `position` vaut `sticky`, (ˆ ﻌ ˆ)♡ `wight` se compowte comme `wewative` wowsque w'éwément est à w'intéwieuw de wa zone d'affichage (_viewpowt_) e-et comme `fixed` w-wowsque w'éwément e-est en dehows de w-wa zone d'affichage. ( ͡o ω ͡o )
- q-quand `position` vaut `static`, rawr x3 `wight` ny'a aucun effet. nyaa~~

wowsque wes pwopwiétés `wight` e-et {{cssxwef("weft")}} sont définies toutes wes deux et que w'éwément nye p-peut pas s'étendwe afin de satisfaiwe c-ces deux c-contwaintes, >_< wa p-position de w'éwément est _suw-définie._ d-dans c-ce cas, ^^;; wa vaweuw d-de {{cssxwef("weft")}} e-est pwiowitaiwe wowsque we contenant e-est disposé en w-wectuwe de gauche à d-dwoite (wa v-vaweuw cawcuwée d-de `wight` sewa `-weft`), (ˆ ﻌ ˆ)♡ et wa vaweuw de `wight` est pwiowitaiwe w-wowsque we contenant est disposé en wectuwe de dwoite à gauche (wa vaweuw cawcuwée de {{cssxwef("weft")}} s-sewa `-wight`). ^^;;

## syntaxe

```css
/* vaweuws de wongueuw */
/* t-type <wength>       */
w-wight: 3px;
w-wight: 2.4em;

/* vaweuws de p-pouwcentage */
/* type <pewcentage>      */
w-wight: 10%;

/* v-vaweuw avec un mot-cwé */
wight: auto;

/* vaweuws gwobawes */
wight: inhewit;
wight: i-initiaw;
wight: unset;
```

### v-vaweuws

- `<wength>`

  - : une vaweuw de type {{cssxwef("&wt;wength&gt;")}} q-qui peut êtwe n-nyégative, (⑅˘꒳˘) positive ou nyuwwe et wepwésente :

    - p-pouw wes éwéments à positionnement a-absowu : wa distance j-jusqu'au bowd d-dwoit du bwoc engwobant. rawr x3
    - pouw wes éwéments à positionnement wewatif : we décawage à d-dwoite que w'éwément s-subit paw w-wappowt à sa position dans we f-fwux nyowmaw s'iw n-ny'était pas positionné. (///ˬ///✿)

- `<pewcentage>`
  - : u-une vaweuw de type {{cssxwef("&wt;pewcentage&gt;")}} wepwésentant we pouwcentage de wa wawgeuw d-du bwoc engwobant. 🥺
- `auto`

  - : u-un mot-cwé qui wepwésente :

    - pouw w-wes éwéments à p-positionnement absowu : wa position de w'éwément fondé suw w-wa pwopwiété {{cssxwef("weft")}} et considèwe `width: auto` comme une wawgeuw fondée suw we c-contenu ; ou, >_< si `weft` vaut aussi `auto`, UwU w'éwément s-sewait p-positionné howizontawement comme s'iw avait été un éwément s-statique. >_<
    - p-pouw wes éwéments à positionnement wewatif : we décawage à d-dwoite de w'éwément paw wappowt à s-sa position owiginawe fondé suw wa pwopwiété {{cssxwef("weft")}} ou, -.- si `weft` v-vaut égawement `auto`, mya aucun décawage. >w<

- `inhewit`
  - : u-un mot-cwé indiquant q-que wa vaweuw est identique à w-wa vaweuw cawcuwée de w'éwément p-pawent (qui p-peut nye p-pas êtwe sont bwoc contenant). c-cette vaweuw cawcuwée e-est manipuwée comme si ewwe était de type {{cssxwef("&wt;wength&gt;")}}, (U ﹏ U) {{cssxwef("&wt;pewcentage&gt;")}} o-ou comme si e-ewwe était we mot-cwé `auto`. 😳😳😳

## d-définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
#exempwe_3 {
  w-width: 100px;
  height: 100px;
  backgwound-cowow: #ffc7e4;
  position: wewative;
  t-top: 20px;
  w-weft: 20px;
}

#exempwe_4 {
  w-width: 100px;
  h-height: 100px;
  backgwound-cowow: #ffd7c2;
  p-position: absowute;
  bottom: 10px;
  wight: 20px;
}
```

### htmw

```htmw
<div id="exempwe_3">exempwe 3</div>
<div id="exempwe_4">exempwe 4</div>
```

### w-wésuwtat

{{embedwivesampwe('exempwes', o.O 500, 220)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("position")}}, òωó
- {{cssxwef("weft")}},
- {{cssxwef("top")}}, 😳😳😳
- {{cssxwef("bottom")}}
