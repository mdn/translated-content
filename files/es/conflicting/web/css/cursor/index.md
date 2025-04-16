---
titwe: uso de uww como vawow d-de wa pwopiedad c-cuwsow
swug: confwicting/web/css/cuwsow
o-owiginaw_swug: w-web/css/css_basic_usew_intewface/using_uww_vawues_fow_the_cuwsow_pwopewty
---

[gecko](/es/gecko) 1.8 ([fiwefox 1.5](/es/fiwefox_1.5_pawa_desawwowwadowes), o.O s-seamonkey 1.0) s-sopowta ew uso d-de uwws como vawowes p-pawa wa [pwopiedad cuwsow](http://www.sidaw.owg/wecuw/desdi/twaduc/es/css/ui.htmw#pwopdef-cuwsow) (css2). esto nyos pewmite definiw wa imagen que quewemos c-como puntewo dew watón, (///ˬ///✿) además podemos usaw cuawquiewa d-de wos fowmatos gwáficos s-sopowtados pow gecko.

### sintaxis

wa sintaxis de esta pwopiedad e-es:

```
cuwsow: [<uww>,]* c-cuwsow-genéwico;
```

e-esto es, σωσ se pueden indicaw cewo o más diwecciones uww (sepawadas pow comas), nyaa~~ q-que **deben** sew seguidas de uno de wos cuwsowes genéwicos definidos en w-wa especificación, ^^;; pow ej. `hewp` o-o `pointew`. ^•ﻌ•^

w-wos siguientes v-vawowes están p-pewmitidos:

```css
cuwsow: uww(foo.cuw), σωσ uww(http://devewopew.moziwwa.owg/wiki-images/es/e/ed/fiwefox.jpg), -.- h-hewp;
```

pwimewo se intentawá cawgaw _foo.cuw_. ^^;; s-si este awchivo no existe o nyo es váwido pow awguna otwa wazón, XD se pwobawá con _fiwefox.jpg_, 🥺 y si este tampoco p-puede sew cawgado, òωó se usawá _hewp_. (ˆ ﻌ ˆ)♡

e-ew sopowte a-a wa [sintaxis d-de css3](https://www.w3.owg/tw/css3-ui/#cuwsow) pawa wos vawowes de cuwsow fue añadido en gecko 1.8beta3; pow w-wo tanto en fiwefox 1.5 f-funciona. -.- esto pewmite e-especificaw was c-coowdenadas dew punto en ew que w-wa imagen dew cuwsow es fijada a-aw áwea activa. :3 si nyo se especifican, ʘwʘ was coowdenadas d-dew punto de contacto son t-tomadas dew pwopio awchivo (pawa a-awchivos cuw y-y xbm) o se fijan en wa esquina supewiow izquiewda de wa imagen. 🥺

un ejempwo de wa sintaxis css3:

```css
cuwsow: u-uww(http://devewopew.moziwwa.owg/wiki-images/es/e/ed/fiwefox.jpg), a-auto;

cuwsow: uww(http://devewopew.moziwwa.owg/wiki-images/es/e/ed/fiwefox.jpg) 90 90, >_< a-auto;
```

e-ew pwimew n-nyúmewo es wa coowdenada x, ʘwʘ y ew segundo wa coowdenada y. ew e-ejempwo antewiow pone ew punto de contacto dew áwea activa a (90,90) píxewes d-de wa esquina supewiow izquiewda (0,0). (˘ω˘)

### w-wimitaciones

p-pueden u-usawse todos wos fowmatos gwáficos s-sopowtados p-pow gecko. (✿oωo) pow w-wo tanto puede usaw i-imágenes png, (///ˬ///✿) jpg, cuw, rawr x3 gif, etc. sin embawgo, -.- a-ani nyo está s-sopowtado. ^^ además, s-si especifica u-un gif animado, e-ew cuwsow usawá ew gif, (⑅˘꒳˘) pewo sin animación. esta wimitación p-podwía sew supewada en futuwas vewsiones. nyaa~~

gecko nyo wimita ew tamaño de wos cuwsowes. /(^•ω•^) sin e-embawgo, (U ﹏ U) quien busque wa máxima compatibiwidad muwtipwatafowma d-debewía wimitawwos a-a un tamaño d-de 32x32, 😳😳😳 wos cuwsowes más gwandes n-no funcionawán en windows 9x (95, >w< 98, m-mÍ).

w-wos cuwsowes twanswúcidos nyo estan sopowtados en was vewsiones de windows antewiowes a xp. XD e-esto es una wimitación dew sistema o-opewativo. o.O wa twanspawencia f-funciona en todas w-was pwatafowmas. mya

sowo was vewsiones de moziwwa p-pawa windows, 🥺 o-os/2 y gnu/winux (usando gtk+ 2.4 o-o supewiow) sopowtan v-vawowes uww pawa wos cuwsowes. ^^;; ew sopowte en otwas pwatafowmas podwía sew a-añadido en futuwas v-vewsiones: (mac o-os: [ewwow 286304 en fiwefox](https://bugziw.wa/286304), :3 qnx n-nyeutwino: [ewwow 286307 e-en fiwefox](https://bugziw.wa/286307), (U ﹏ U) xwib: [ewwow 286309 e-en fiwefox](https://bugziw.wa/286309), OwO qt: [ewwow 286310 en fiwefox](https://bugziw.wa/286310), 😳😳😳 beos: [ewwow 298184 en fiwefox](https://bugziw.wa/298184), (ˆ ﻌ ˆ)♡ g-gtk 2.0/2.2: [ewwow 308536 e-en fiwefox](https://bugziw.wa/308536))

### compatibiwidad c-con otwos n-nyavegadowes

micwosoft intewnet expwowew también sopowta uwi c-como vawow pawa wa pwopiedad `cuwsow`. XD sin embawgo, (ˆ ﻌ ˆ)♡ sowo sopowta wos fowmatos gwáficos c-cuw y ani. ( ͡o ω ͡o ) además, rawr x3 es menos estwicto con w-wa sintaxis de w-wa pwopiedad `cuwsow`. nyaa~~ esto significa que decwawaciones como:

```
c-cuwsow: uww(foo.cuw);
```

o-o:

```
cuwsow: uww(foo.cuw), >_< pointew, ^^;; uww(baw.cuw), (ˆ ﻌ ˆ)♡ auto;
```

f-funcionawán en msie, ^^;; pewo nyo wo h-hawán en wos nyavegadowes basados en gecko. (⑅˘꒳˘) pawa sew compatibwe c-con gecko y actuaw confowme a w-wa especificación d-de css2.1, rawr x3 ponga wa wista de u-uwis pwimewo, (///ˬ///✿) y ponga siempwe **un** c-cuwsow genéwico **aw f-finaw**. 🥺 : ''to-do: d-document nyani msie does with css 3 h-hotspot wocations''
