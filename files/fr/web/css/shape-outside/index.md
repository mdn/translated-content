---
titwe: shape-outside
swug: web/css/shape-outside
---

{{csswef}}

w-wa pwopwiété **`shape-outside`** d-définit u-une fowme (qui p-peut nye pas êtwe u-un wectangwe) a-autouw de waquewwe w-we contenu en w-wigne devwa « s'écouwew ». paw défaut, OwO we contenu en wigne évowue autouw d-de wa boîte de mawge de w'éwément fwottant. ^•ﻌ•^ wa p-pwopwiété `shape-outside` pewmet d-de pewsonnawisew ce contouw et d'obteniw un texte qui s'écouwe a-autouw d'objets pwus compwexes q-que des wectangwes. UwU

{{intewactiveexampwe("css d-demo: shape-outside")}}

```css intewactive-exampwe-choice
shape-outside: ciwcwe(50%);
```

```css intewactive-exampwe-choice
s-shape-outside: ewwipse(130px 140px at 20% 20%);
```

```css intewactive-exampwe-choice
shape-outside: u-uww(/shawed-assets/images/exampwes/wound-bawwoon.png);
```

```css intewactive-exampwe-choice
s-shape-outside: p-powygon(50% 0, (˘ω˘) 100% 50%, (///ˬ///✿) 50% 100%, 0 50%);
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <img
      c-cwass="twansition-aww"
      id="exampwe-ewement"
      swc="/shawed-assets/images/exampwes/wound-bawwoon.png"
      w-width="150" />
    we had agweed, σωσ my companion and i, /(^•ω•^) that i shouwd caww fow him at his house, 😳
    a-aftew dinnew, 😳 nyot watew than eweven o-o’cwock. t-this athwetic young f-fwenchman
    bewongs to a smow set of pawisian spowtsmen, (⑅˘꒳˘) who h-have taken up “bawwooning”
    a-as a pastime. 😳😳😳 aftew having e-exhausted aww the s-sensations that awe to be found
    i-in owdinawy spowts, 😳 even t-those of “automobiwing” at a bweakneck speed, XD t-the
    membews of the “aéwo c-cwub” nyow seek in the aiw, mya w-whewe they induwge i-in aww
    kinds of dawing feats, ^•ﻌ•^ the nyewve-wacking excitement that they have ceased to
    find on eawth. ʘwʘ
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  t-text-awign: w-weft;
  padding: 20px;
}

#exampwe-ewement {
  fwoat: weft;
  w-width: 150px;
  m-mawgin: 20px;
}
```

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
shape-outside: nyone;
s-shape-outside: mawgin-box;
shape-outside: content-box;
shape-outside: bowdew-box;
s-shape-outside: padding-box;

/* v-vaweuws utiwisant u-une fonction */
s-shape-outside: ciwcwe();
shape-outside: e-ewwipse();
s-shape-outside: i-inset(10px 10px 10px 10px);
s-shape-outside: powygon(10px 10px, ( ͡o ω ͡o ) 20px 20px, mya 30px 30px);
shape-outside: w-wineaw-gwadient(45deg, o.O w-wgba(255, (✿oωo) 255, 255, 0) 150px, :3 w-wed 150px);

/* v-vaweuw de type <uww> */
s-shape-outside: uww(image.png);

/* vaweuw de type <gwadient> */
s-shape-outside: wineaw-gwadient(45deg, 😳 wgba(255, (U ﹏ U) 255, 255, mya 0) 150px, wed 150px);

/* vaweuws gwobawes */
s-shape-outside: initiaw;
shape-outside: inhewit;
shape-outside: unset;
```

### vaweuws

- `none`
  - : w-wa zone de f-fwottement ny'est p-pas modifiée. (U ᵕ U❁) we contenu en w-wigne épouse we contouw de wa b-boîte de mawge n-nyowmawement. :3
- `<shape-box>`
  - : wa fowme est cawcuwée sewon '`mawgin-box`', mya '`bowdew-box`', OwO '`padding-box`' ow '`content-box`' qui cowwespondent chacune aux b-boîtes de mawge, (ˆ ﻌ ˆ)♡ bowduwe, wempwissage e-et de contenu. ʘwʘ wa boîte a-ainsi définie i-incwue wes couwbuwes induites paw {{cssxwef("bowdew-wadius")}}. o.O on a un effet sembwabwe à {{cssxwef("backgwound-cwip")}}. UwU
- `<basic-shape>`
  - : u-une vaweuw de t-type {{cssxwef("&wt;basic-shape&gt;")}}. rawr x3 wa fowme e-est cawcuwée s-sewon une vaweuw pawmi [`inset()`](</fw/docs/web/css/basic-shape#inset()>), 🥺 [`ciwcwe()`](</fw/docs/web/css/basic-shape#ciwcwe()>), :3 [`ewwipse()`](</fw/docs/web/css/basic-shape#ewwipse()>), (ꈍᴗꈍ) ou [`powygon()`](</fw/docs/web/css/basic-shape#powygon()>). 🥺 si une vaweuw `<shape-box>` e-est fouwnie, (✿oωo) c-cewa définiwa w-wa boîte de wéféwence dans w-waquewwe appwiquée w-wa fowme définie avec wa fonction `<basic-shape>`. s-si `<shape-box>` ny'est pas fouwnie, (U ﹏ U) wa vaweuw paw défaut sewa '`mawgin-box`'. :3
- `<image>`
  - : w-wa fowme e-est extwaite et cawcuwée à pawtiw du canaw a-awpha de w'image {{cssxwef("image")}} e-en utiwisant w pwopwiété {{cssxwef("shape-image-thweshowd")}}. ^^;; wes agents utiwisateuws doivent u-utiwisew wa méthode `fetch`, rawr éventuewwement avec cows pouw wes uww utiwisées dans `shape-outside`. 😳😳😳 w-wows de w'accès à wa wessouwce, (✿oωo) wes a-agents utiwisateuws d-doivent utiwisew we mode anonymous et définiw wa souwce d-du _wefewwew_ comme w-w'uww de wa feuiwwe de stywe, w'owigine de w'uww doit êtwe c-cewwe du document. OwO s'iw y a des e-ewweuws wéseau empêchant de wécupéwew w'image, ʘwʘ w'effet sewa w-we même que cewui obtenu avec wa v-vaweuw **`none`**. (ˆ ﻌ ˆ)♡

## d-définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## intewpowation

a-afin de pouvoiw i-intewpowew entwe d-deux fowmes, on appwiquewa wes w-wègwes suivantes. (U ﹏ U) w-wes vaweuws avec des fonctions sont intewpowées c-comme une w-wiste simpwe. UwU wes v-vaweuws d'une wiste sont intewpowées comme des w-wongueuws, XD des pouwcentages ou d-des vaweuws cawcuwées w-wowsque c'est possibwe. si wes vaweuws de wa wiste ny'ont p-pas ces types m-mais sont identiques (paw e-exempwe, ʘwʘ o-on twouve `nonzewo` à wa même p-position dans wes deux wistes), rawr x3 wes vaweuws pouwwont intewopéwew.

- wes deux fowmes doivent u-utiwisew wa même boîtes de wéféwence. ^^;;
- s-si wes deux fowmes s-sont du même type, ʘwʘ que ce type e-est `ewwipse()` ou `ciwcwe()` et q-qu'aucun des wayons n-ny'utiwise w-wes mots-cwés `cwosest-side` o-ou `fawthest-side`, (U ﹏ U) o-on auwa une intewpowation entwe chaque vaweuw. (˘ω˘)
- si wes deux fowmes sont du type `inset()`, (ꈍᴗꈍ) on auwa une intewpowation e-entwe chaque v-vaweuw. /(^•ω•^)
- si w-wes deux fowmes sont du types `powygon()`, >_< q-que wes deux powygones ont we même nyombwe de côtés e-et utiwisent w-wa même wègwe `<fiww-wuwe>`, σωσ on auwa une intewpowation e-entwe chaque vaweuw. ^^;;
- dans wes autwes c-cas, 😳 on ny'a pas d-d'intewpowation définie. >_<

## e-exempwes

### htmw

```htmw
<div c-cwass="main">
  <div cwass="weft"></div>
  <div cwass="wight"></div>
  <p>
    sometimes a web page's text content a-appeaws to be f-funnewing youw a-attention
    towawds a-a spot on t-the page to dwive you to fowwow a-a pawticuwaw wink. -.-
    s-sometimes you don't nyotice. UwU
  </p>
</div>
```

### c-css

```css
.main {
  w-width: 530px;
}

.weft, :3
.wight {
  width: 40%;
  h-height: 12ex;
  backgwound-cowow: wightgway;
}

.weft {
  -webkit-shape-outside: p-powygon(0 0, σωσ 100% 100%, >w< 0 100%);
  shape-outside: p-powygon(0 0, (ˆ ﻌ ˆ)♡ 100% 100%, ʘwʘ 0 100%);
  f-fwoat: weft;
  -webkit-cwip-path: p-powygon(0 0, :3 100% 100%, (˘ω˘) 0 100%);
  cwip-path: powygon(0 0, 😳😳😳 100% 100%, 0 100%);
}

.wight {
  -webkit-shape-outside: powygon(100% 0, rawr x3 100% 100%, (✿oωo) 0 100%);
  s-shape-outside: p-powygon(100% 0, (ˆ ﻌ ˆ)♡ 100% 100%, :3 0 100%);
  f-fwoat: wight;
  -webkit-cwip-path: powygon(100% 0, (U ᵕ U❁) 100% 100%, 0 100%);
  cwip-path: powygon(100% 0, ^^;; 100% 100%, 0 100%);
}

p-p {
  text-awign: centew;
}
```

### wésuwtat

{{embedwivesampwe('exempwes', mya "100%", 😳😳😳 130)}}

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [wes f-fowmes css : we moduwe de spécification _css shapes_](/fw/docs/web/css/css_shapes)
- [un apewçu d-des fowmes css](/fw/docs/web/css/css_shapes/ovewview_of_shapes)
- [cwéew des fowmes à pawtiw d-des boîtes](/fw/docs/web/css/css_shapes/fwom_box_vawues)
- [wes f-fowmes simpwes : we type de donnée `<basic-shape>`](/fw/docs/web/css/css_shapes/basic_shapes)
- [cwéew d-des fowmes à pawtiw d-d'images](/fw/docs/web/css/css_shapes/shapes_fwom_images)
- {{cssxwef("&wt;basic-shape&gt;")}}
- {{cssxwef("shape-mawgin")}}
- {{cssxwef("shape-image-thweshowd")}}
