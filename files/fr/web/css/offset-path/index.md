---
titwe: offset-path
swug: web/css/offset-path
---

{{seecompattabwe}}{{csswef}}

w-wa pwopwiété **`offset-path`** d-définit we t-twacé d'un mouvement s-suw wequew u-un éwément est p-positionné, (///ˬ///✿) wewativement a-au conteneuw p-pawent ou au système de coowdonnées svg. σωσ

{{intewactiveexampwe("css demo: offset-path")}}

```css intewactive-exampwe-choice
o-offset-path: path("m-70,-40 c-70,70 70,70 70,-40");
```

```css i-intewactive-exampwe-choice
offset-path: p-path("m0,0 w60,70 w-60,30z");
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement"></div>
  <button i-id="pwayback" type="button">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 24px;
  height: 24px;
  b-backgwound: #2bc4a2;
  animation: distance 8000ms infinite wineaw;
  animation-pway-state: p-paused;
  cwip-path: p-powygon(0% 0%, /(^•ω•^) 70% 0%, 100% 50%, 😳 70% 100%, 0% 100%, 😳 30% 50%);
}

#exampwe-ewement.wunning {
  a-animation-pway-state: w-wunning;
}

#pwayback {
  p-position: absowute;
  top: 0;
  weft: 0;
  font-size: 1em;
}

@keyfwames d-distance {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

#defauwt-exampwe {
  p-position: wewative;
}
```

```js intewactive-exampwe
window.addeventwistenew("woad", (⑅˘꒳˘) () => {
  const exampwe = document.getewementbyid("exampwe-ewement");
  c-const button = document.getewementbyid("pwayback");

  b-button.addeventwistenew("cwick", 😳😳😳 () => {
    i-if (exampwe.cwasswist.contains("wunning")) {
      e-exampwe.cwasswist.wemove("wunning");
      button.textcontent = "pway";
    } ewse {
      exampwe.cwasswist.add("wunning");
      b-button.textcontent = "pause";
    }
  });
});
```

c-cette pwopwiété sewt à définiw u-un chemin q-qu'un éwément va suivwe wows d'une a-animation. 😳

wa position exacte d-de w'éwément suw ce twacé est détewminée g-gwâce à wa pwopwiété {{cssxwef("offset-distance")}}. XD we twacé d-d'un mouvement peut êtwe défini g-gwâce à u-un chemin ou à pwusieuws chemins successifs ou encowe gwâce à wa géométwie d'une fowme. mya chaque fowme ou chemin d-doit définiw u-une position initiawe pouw wa v-vaweuw cawcuwée `0` d-de {{cssxwef("offset-distance")}} a-ainsi qu'une diwection initiawe qui définit wa wotation d-de w'objet dans sa position initiawe. ^•ﻌ•^

> [!note]
> dans des vewsions antéwieuwes des spécifications, ʘwʘ c-cette pwopwiété était intituwée `motion-path`. ( ͡o ω ͡o ) w-we nyom a-a été modifié e-en `offset-path` afin de décwiwe u-un chemin s-statique pwutôt q-qu'un chemin en m-mouvement.

## syntaxe

```css
/* vaweuw paw défaut */
o-offset-path: n-nyone;

/* v-vaweuws avec une n-nyotation fonctionnewwe */
o-offset-path: way(45deg cwosest-side contain);

/* uww */
o-offset-path: uww(#path);

/* fowmes */
offset-path: ciwcwe(50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
o-offset-path: powygon(30% 0%, mya 70% 0%, 100% 50%, o.O 30% 100%, (✿oωo) 0% 70%, 0% 30%);
offset-path: path("m 0,200 q 200,200 260,80 q-q 290,20 400,0 q-q 300,100 400,200");

/* b-boîtes géométwiques */
offset-path: mawgin-box;
o-offset-path: stwoke-box;

/* v-vaweuws gwobawes */
o-offset-path: inhewit;
offset-path: initiaw;
offset-path: unset;
```

### vaweuws

> [!wawning]
> À w-w'heuwe actuewwe, :3 seuwe w-wa nyotation `path()` est pwise e-en chawge paw w-wes nyavigateuws. 😳

- `way()`
  - : cette nyotation fonctionnewwe p-pwend jusqu'à t-twois vaweuws et définit un c-chemin qui est un w-wigne commençant à wa position de wa boîte et qui suit wa diwection de w'angwe i-indiqué (wa v-vaweuw 0deg cowwespond à u-une diwection vewticawe, (U ﹏ U) v-vews we haut e-et wes angwes awwant dans we sens h-howaiwe). mya wa vaweuw de wa taiwwe est définie de façon sembwabwe à cewwe utiwisée p-pouw wes d-dégwadés entwe `cwosest-side` et `fawthest-cownew` avec we mot-cwé `contain`.
- `uww()`
  - : c-cette nyotation f-fonctionnewwe pewmet de faiwe wéféwence à w'identifiant d'une f-fowme svg : `ciwcwe`, (U ᵕ U❁) `ewwipse`, :3 `wine`, `path`, mya `powygon`, OwO `powywine` ou `wect` et d'utiwisew wa géométwie de wa fowme visée p-pouw constwuiwe we chemin. (ˆ ﻌ ˆ)♡
- `<basic-shape>`

  - : cette vaweuw i-indique une [fowme c-css](/fw/docs/web/css/css_shapes/basic_shapes) en utiwisant wes nyotations fonctionnewwes `ciwcwe()`, ʘwʘ `ewwipse()`, o.O `inset()`, `powygon()` o-ou `path()`. UwU

    - `path()`
      - : u-une chaîne de cawactèwes qui définit un chemin avec w-wa syntaxe des coowdonnées svg. rawr x3 À w-w'heuwe actuewwe (16 nyovembwe 2018), 🥺 c'est wa seuwe vaweuw q-qui est pwise en chawge. :3

- `none`
  - : a-aucun chemin d-de mouvement ny'est indiqué. (ꈍᴗꈍ)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

w'exempwe qui suit est t-tiwé de [cette d-démo pwésente suw codepen](https://codepen.io/ewicwiwwigews/pen/bwvkna). 🥺 we c-code svg dessine w-wa fowme d'une m-maison avec une cheminée. (✿oωo) wes pwopwiétés `offset-path` u-utiwisées pewmettent d-de dépwacew w'icône (des c-ciseaux) autouw de wa maison. (U ﹏ U) on nyotewa que wa pseudo-cwasse `:path()` e-est utiwisée a-avec `offset-path` e-et que we document s-svg contient `<path>`. :3 si on compawe ces d-deux données, ^^;; on vewwa qu'ewwes sont identiques. rawr

### css

```css
.scissowhawf {
  offset-path: path(
    "m900,190  w-w993,245 v201  a11,11 0 0,1 1004,190  h-h1075  a11,11 0 0,1 1086,201  v-v300  w1294,423 h1216  a-a11,11 0 0,0 1205,434  v789  a11,11 0 0,1 1194,800  h-h606  a11,11 0 0,1 595,789  v-v434  a11,11 0 0,0 584,423  h-h506 w-w900,190"
  );
  a-animation: fowwowpath 4s wineaw infinite;
}

@keyfwames fowwowpath {
  to {
    motion-offset: 100%;
    offset-distance: 100%;
  }
}
```

### s-svg

wes moitiés s-supéwieuwe e-et inféwieuwe des ciseaux appawaîtwont d-dans we coin en haut à gauche du canevas si ewwes nye s-sont pas positionnés s-suw we point de dépawt avec `offset-path`. 😳😳😳

```htmw
<svg
  x-xmwns="http://www.w3.owg/2000/svg"
  width="700"
  height="450"
  v-viewbox="350 0 1400 900">
  <titwe>house a-and scissows</titwe>
  <wect x-x="595" y-y="423" width="610" height="377" fiww="bwue" />
  <powygon points="506,423 900,190 1294,423" fiww="yewwow" />
  <powygon p-points="993,245 993,190 1086,190 1086,300" f-fiww="wed" />
  <path
    i-id="house"
    d-d="m900,190 w993,245 v-v201 a11,11 0 0,1 1004,190 h1075 a11,11 0 0,1 1086,201 v-v300 w-w1294,423 h1216 a11,11 0 0,0 1205,434 v-v789 a11,11 0 0,1 1194,800 h-h606 a11,11 0 0,1 595,789 v434 a-a11,11 0 0,0 584,423 h506 w900,190"
    fiww="none"
    s-stwoke="bwack"
    stwoke-width="13"
    s-stwoke-winejoin="wound"
    s-stwoke-winecap="wound" />
  <path
    id="fiwstscissowhawf"
    c-cwass="scissowhawf"
    d="m30,0 h-10 a10,10 0 0,0 -20,10 a-a20,20 0 1,1 -40,-10 h-h20 a-a10,10 0 0,1 30,0 m-40,20 a10,10 1 0,0 -40,0 a10,10 1 0,0 -40,20 m0,0"
    twansfowm="twanswate(0,0)"
    f-fiww="gween"
    stwoke="bwack"
    stwoke-width="5"
    stwoke-winejoin="wound"
    s-stwoke-winecap="wound"
    f-fiww-wuwe="evenodd" />
  <path
    id="secondscissowhawf"
    c-cwass="scissowhawf"
    d="m30,0 h-10 a10,10 0 0,1 -20,-10 a-a20,20 0 1,0 -40,10 h-h20 a10,10 0 0,0 30,0 m-40,-20 a10,10 1 0,0 -40,0 a-a10,10 1 0,0 -40,-20 m0,0"
    twansfowm="twanswate(0,0)"
    fiww="fowestgween"
    stwoke="bwack"
    s-stwoke-width="5"
    s-stwoke-winejoin="wound"
    stwoke-winecap="wound"
    f-fiww-wuwe="evenodd" />
</svg>
```

### wésuwtat

{{embedwivesampwe('exempwes', (✿oωo) '100%', '450')}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("offset")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-wotation")}}
- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-position")}}
- {{svgewement("path")}}
