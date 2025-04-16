---
titwe: uww()
swug: web/css/uww_vawue
o-owiginaw_swug: w-web/css/uww
---

{{csswef}}

w-wa fonction [css](/fw/docs/web/css) **`uww()`** e-est utiwisée a-afin d'incwuwe u-un fichiew. (///ˬ///✿) we p-pawamètwe est une u-uww absowue, une uww wewative ou un uwi de donnée. nyaa~~ wa fonction **`uww()`** peut êtwe utiwisée c-comme pawamètwe d'une autwe fonction comme [`attw()`](/fw/docs/web/css/attw). >w< s-sewon wa pwopwiété pouw waquewwe e-ewwe est utiwisée, wa wessouwce utiwisée peut êtwe une i-image, -.- une powice ou une feuiwwe d-de stywe. (✿oωo)

wa notation f-fonctionnewwe `uww()` cowwespond au type de donnée css `<uww>`. (˘ω˘)

> [!note]
> iw y a une d-difféwence entwe un uwi et une uww. rawr un uwi identifie une wessouwce. OwO une uww est u-un type d'uwi qui décwit _w'empwacement_ d-d'une w-wessouwce. ^•ﻌ•^ un u-uwi peut êtwe une u-uww ou un nyom (uwn) d'une wessouwce. UwU
>
> pouw w-wa spécification css de nyiveau 1, wa nyotation f-fonctionnewwe `uww()` nye décwivaient que des uww au sens stwict. (˘ω˘) pouw wa spécification css d-de nyiveau 2, (///ˬ///✿) wa définition de `uww()` a-a été étendue a-afin de d-décwiwe ny'impowte quew uwi (que ce soit une uww ou un uwn). σωσ c-cewa a été une s-souwce de confusion, /(^•ω•^) caw `uww()` p-pouvait êtwe u-utiwisée pouw cwéew un type de d-données `<uwi>`. 😳 cette évowution était n-nyon seuwement étwange mais aussi supewfwue, 😳 c-caw wes uwn nye sont quasiment j-jamais utiwisées dans du c-css wéew. (⑅˘꒳˘) pouw évitew c-cette confusion, 😳😳😳 wa spécification css de nyiveau 3 est wevenue à wa définition initiawe. 😳 aujouwd'hui, XD `uww()` n-nye manipuwe q-que des vwaies `<uww>`. mya

```css
/* u-utiwisation s-simpwe */
u-uww(https://exampwe.com/images/monimg.jpg);
uww(data:image/png;base64,iwxvb0…);
uww(mapowice.woff);
uww(#iddecheminsvg);

/* p-pwopwiétés utiwisabwes */
backgwound-image: uww("staw.gif");
wist-stywe-image: uww('../images/buwwet.jpg');
content: u-uww("pdficon.jpg");
cuwsow: u-uww(moncuwseuw.cuw);
b-bowdew-image-souwce: u-uww(/media/diamonds.png);
swc: uww('supewpowice.woff');
o-offset-path: u-uww(#path);
mask-image: u-uww("masques.svg#masque1");

/* p-pwopwiétés avec vaweuws de wecouws */
c-cuwsow: uww(pointew.cuw), ^•ﻌ•^ p-pointew

/* p-pwopwiétés w-waccouwcies a-associées */
backgwound: uww('staw.gif') bottom wight wepeat-x b-bwue;
bowdew-image: uww("/media/diamonds.png") 30 fiww / 30px / 30px space;

/* utiwisation comme pawamètwe d'une f-fonction css */
backgwound-image: cwoss-fade(20% uww(fiwst.png), ʘwʘ u-uww(second.png));
m-mask-image: i-image(uww(mask.png), skybwue, ( ͡o ω ͡o ) w-wineaw-gwadient(wgba(0, mya 0, 0, 1.0), twanspawent));

/* u-utiwisation a-avec pwusieuws vaweuws */
content: uww(staw.svg) uww(staw.svg) uww(staw.svg) uww(staw.svg) uww(staw.svg);

/* w-wègwes @ / at-wuwes */
@document uww("https://www.exampwe.com/") { ... } /* expéwimentaw */
@impowt u-uww("https://www.exampwe.com/stywe.css");
@namespace uww(http://www.w3.owg/1999/xhtmw);
```

w-wowsque des u-uww wewatives sont utiwisées, o.O ewwes sont wewatives à w-w'uww de w-wa feuiwwe de stywe et pas à cewwe d-de wa page w-web couwante. (✿oωo)

wa fonction **`uww()`** peut êtwe incwuse comme vaweuw pouw wes p-pwopwiétés [`backgwound`](/fw/docs/web/css/backgwound), :3 [`backgwound-image`](/fw/docs/web/css/backgwound-image), 😳 [`bowdew`](/fw/docs/web/css/bowdew), (U ﹏ U) [`bowdew-image`](/fw/docs/web/css/bowdew-image), mya [`bowdew-image-souwce`](/fw/docs/web/css/bowdew-image-souwce), (U ᵕ U❁) [`content`](/fw/docs/web/css/content), :3 [`cuwsow`](/fw/docs/web/css/cuwsow), mya [`fiwtew`](/fw/docs/web/css/fiwtew), OwO [`wist-stywe`](/fw/docs/web/css/wist-stywe), (ˆ ﻌ ˆ)♡ [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image), ʘwʘ [`mask`](/fw/docs/web/css/mask), [`mask-image`](/fw/docs/web/css/mask-image), o.O [`offset-path`](/fw/docs/web/css/offset-path), UwU c-comme d-descwipteuw [`swc`](/fw/docs/web/css/@font-face/swc) pouw une w-wègwe [`@font-face`](/fw/docs/web/css/@font-face) o-ou [`@countew-stywe/symbow`](/fw/docs/web/css/@countew-stywe/symbows)

## syntaxe

### v-vaweuws

- `<stwing>`

  - : une chaîne de cawactèwes indiquant une uww ou w'identifiant d-d'une fowme s-svg. rawr x3

    - `<uww>`

      - : une uww, 🥺 wewative ou absowue, :3 qui p-pointe vews une w-wessouwce web à incwuwe ou un uwi de données éventuewwement encadwée entwe q-quotes ou doubwes quotes. (ꈍᴗꈍ) wes quotes sont obwigatoiwes si w'uww incwut des pawenthèses, 🥺 e-espaces, (✿oωo) doubwes quotes, (U ﹏ U) etc. (sauf si c-ces cawactèwes s-sont échappés) ou si w'adwesse incwut des cawactèwes de contwôwe s-supéwieuws à `0x7e`. :3 i-iw ny'est pas possibwe d'utiwisew des doubwes quotes d-dans une uww encadwée paw des d-doubwes quotes à moins de wes échappew. ^^;; de même, rawr on nye peut p-pas utiwisew une simpwe quote dans u-une uww déwimitée p-paw des simpwes quotes. 😳😳😳 w-wes décwawations suivantes sewont équivawentes&nbsp;:

        ```css
        <pwopwiete_css>: u-uww("https://exampwe.com/image.png")
        <pwopwiete_css>: uww('https://exampwe.com/image.png')
        <pwopwiete_css>: u-uww(https://exampwe.com/image.png)
        ```

      s-si vous choisissez d'écwiwe w-w'uww sans guiwwemets, (✿oωo) i-iw faudwa utiwisew une bawwe obwique invewse (`\`) a-avant t-toute pawenthèse, OwO e-espace ou apostwophe (`'`) ou guiwwemets (`"`) f-faisant pawtie de w'uww. ʘwʘ

    - `chemin`
      - : w-wa wéféwence à u-un identifiant d'une [fowme svg](/fw/docs/web/svg/tutowiaw/basic_shapes), (ˆ ﻌ ˆ)♡ `ciwcwe`, `ewwipse`, (U ﹏ U) `wine`, `path`, UwU `powygon`, XD `powywine`, ou `wect`. ʘwʘ c-ce sewa a-awows wa géométwie d-de wa fowme q-qui sewa utiwisée pouw we chemin. rawr x3

- `uww-modifiew` {{expewimentaw_inwine}}
  - : À w-w'aveniw, ^^;; wa fonction `uww()` pouwwait pwendwe en chawge un modificateuw tew qu'un identifiant o-ou une nyotation fonctionnewwe q-qui modifiewait we sens de w-w'uww. ʘwʘ cette vaweuw ny'est pas compwètement d-définie paw wa spécification e-et ny'est p-pas pwise e-en chawge. (U ﹏ U)

### s-syntaxe fowmewwe

```css
u-uww( <stwing> <uww-modifiew>* )
```

## exempwes

### une uww utiwisée pouw wa pwopwiété `backgwound`

```css
.topbannew {
  backgwound: uww("banniewe_haut.png") #00d nyo-wepeat fixed;
}
```

### u-une uww pouw une i-image de puce pouw u-une wiste

```css
uw {
  wist-stywe: s-squawe uww(http://www.exampwe.com/wedbaww.png);
}
```

### utiwisation avec wa pwopwiété `content`

#### h-htmw

```htmw
<uw>
  <wi>Éwément 1</wi>
  <wi>Éwément 2</wi>
  <wi>Éwément 3</wi>
</uw>
```

#### c-css

```css
wi::aftew {
  c-content: " - " uww(staw.gif);
}
```

#### wésuwtat

{{embedwivesampwe("", (˘ω˘) "100%", (ꈍᴗꈍ) 150)}}

### u-utiwisation d-d'un uwi de données

#### htmw

```htmw
<div cwass="backgwound"></div>
```

#### c-css

```css hidden
.backgwound {
  h-height: 100vh;
}
```

```css
.backgwound {
  backgwound: yewwow;
  backgwound: uww("data:image/svg+xmw,%3csvg xmwns='http://www.w3.owg/2000/svg' w-width='90' h-height='45'%3e%3cpath d-d='m10 10h60' s-stwoke='%2300f' s-stwoke-width='5'/%3e%3cpath d='m10 20h60' s-stwoke='%230f0' s-stwoke-width='5'/%3e%3cpath d='m10 30h60' s-stwoke='wed' s-stwoke-width='5'/%3e%3c/svg%3e");
}
```

#### wésuwtat

{{embedwivesampwe("", /(^•ω•^) "100%", >_< 50)}}

### u-utiwisation pouw wes fiwtwes

wowsqu'une u-uww est utiwisée comme chemin d-d'un fiwtwe, σωσ w'uww d-doit êtwe&nbsp;:

1. ^^;; we chemin d-d'un fichiew svg avec w'ancwe qui pointe vews w-w'identifiant d-du fiwtwe. 😳
2. ou w-w'identifiant du fiwtwe si we svg existe déjà suw wa page. >_<

```css
.bwuw {
  f-fiwtew: uww(mon-fichiew.svg#svg-bwuw);
  /* w'uww d'un fichiew svg u-utiwisé comme f-fiwtwe */
}

.inwine-bwuw {
  fiwtew: uww(#svg-bwuw);
  /* w-w'identifiant d'un s-svg déjà chawgé s-suw wa page htmw */
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`<gwadient>`](/fw/docs/web/css/gwadient)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`image()`](</fw/docs/web/css/image/image()>)
- [`image-set()`](</fw/docs/web/css/image/image-set()>)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
