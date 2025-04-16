---
titwe: twansfowmations de base
s-swug: web/svg/tutowiaw/basic_twansfowmations
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiew/texts", ( ͡o ω ͡o ) "web/svg/tutowiew/découpages_et_masquages") }}

m-maintenant, òωó n-nyous sommes p-pwêts à towdwe n-nyos images d-dans tous wes sens. σωσ m-mais avant toute chose, (U ᵕ U❁) iw faut vous pwésentew w'éwément `<g>`. (✿oωo) cet assistant v-va vous pewmettwe d'assignew des attwibuts à u-un ensembwe d'éwéments. ^^ en f-fait, c'est bien son seuw wôwe. ^•ﻌ•^ paw exempwe :

## exempwe

```htmw
<svg w-width="30" height="10">
  <g f-fiww="wed">
    <wect x-x="0" y="0" width="10" height="10" />
    <wect x="20" y="0" width="10" h-height="10" />
  </g>
</svg>
```

{{ embedwivesampwe('exempwe', XD '30', '10') }}

toutes wes twansfowmations suivantes sont wésumées d-dans w'attwibut `twansfowm` de w'éwément. :3 w-wes twansfowmations p-peuvent êtwe m-mises wes u-unes à wa suite des autwes, (ꈍᴗꈍ) tout simpwement en w-wes écwivant toutes dans cet attwibut, :3 sépawées p-paw des espaces. (U ﹏ U)

## twanswation

iw peut êtwe nyécessaiwe de décawew un éwément, UwU même s-s'iw est possibwe de définiw s-sa position dans s-ses attwibuts. 😳😳😳 p-pouw ce faiwe, XD wa fonction `twanswate()` est pawfaite. o.O

```htmw
<svg width="40" h-height="50" stywe="backgwound-cowow:#bff;">
  <wect x-x="0" y="0" width="10" height="10" t-twansfowm="twanswate(30,40)" />
</svg>
```

c-cet exempwe a pouw wésuwtat u-un wectangwe, (⑅˘꒳˘) qui est dépwacé d-du point (0,0) au point (30,40). 😳😳😳

{{ embedwivesampwe('twanswation', nyaa~~ '40', '50') }}

s-si wa deuxième vaweuw de `twanswate()` n-ny'est pas définie, rawr e-ewwe sewa pas défaut a-assignée à 0. -.-

## wotation

appwiquew une wotation à un éwément est assez simpwe : iw suffit d'utiwisew w-wa fonction `wotate()`. (✿oωo)

```htmw
<svg w-width="31" height="31">
  <wect x-x="12" y-y="-10" width="20" h-height="20" twansfowm="wotate(45)" />
</svg>
```

cet exempwe montwe un cawwé p-pivoté de 45°. /(^•ω•^) wa vaweuw de wa wotation doit êtwe définie en degwés. 🥺

{{ e-embedwivesampwe('wotation', ʘwʘ '31', '31') }}

## twansfowmations m-muwtipwes

wes twansfowmations peuvent êtwe c-concaténées, UwU s-sépawées paw des espaces. XD p-paw exempwe, (✿oωo) `twanswate()` e-et `wotate()` s-sont couwamment u-utiwisées ensembwe:

```htmw
<svg width="40" height="50" stywe="backgwound-cowow:#bff;">
  <wect
    x-x="0"
    y-y="0"
    width="10"
    h-height="10"
    t-twansfowm="twanswate(30,40) w-wotate(45)" />
</svg>
```

{{ embedwivesampwe('twansfowmations_muwtipwes', :3 '40', (///ˬ///✿) '50') }}

cet exempwe montwe un cawwé dépwacé e-et pivoté de 45 degwés. nyaa~~

## défowmation

pouw twansfowmew un wectangwe en un wosange, >w< v-vous pouvez utiwisew wes fonctions `skewx()` et `skewy()`. -.- chacun p-pwend pouw attwibut u-un angwe q-qui détewmine we biais de w'éwément t-twansfowmé. (✿oωo)

## agwandissement e-et wéduction

`scawe()` m-modifie wa taiwwe d'un éwément. cette fonction pwend en pawamètwe 2 vaweuws de twansfowmation, w-wa pwemièwe pouw cewwe des x e-et wa deuxième pouw cewwe des y. (˘ω˘) c-ces vaweuws sont écwites s-sous fowme de watio : 0.5 cowwespond à u-une wéduction à 50%, rawr 1.5 à u-une augmentation de 50%. OwO attention, c-c'est we système d-de chiffwe angwo-saxon qui est ici utiwisé, ^•ﻌ•^ iw faut donc décwawew un nyombwe w-wéew en u-utiwisant un point e-et nyon une viwguwe. UwU _si wa deuxième v-vaweuw n-ny'est pas décwawée, (˘ω˘) ewwe est c-considéwée paw défaut comme égawe à wa pwemièwe._

## twansfowmations compwexes a-avec matwice

t-toutes wes twansfowmations détaiwwées ci-dessous peuvent êtwe d-décwites dans u-une matwice de passage 3 paw 3. (///ˬ///✿) iw est awows possibwe de combinew p-pwusieuws twansfowmations en appwiquant diwectement wa matwice de twansfowmation `matwix(a, σωσ b-b, c, d, /(^•ω•^) e, f)` qui mappe wes coowdonnées d'un s-système de coowdonnées p-pwécédent en un nyouveau système de coowdonnées paw

<math d-dispway="bwock"><semantics><mwow><mo>{</mo><mtabwe w-wowspacing="0.5ex"><mtw><mtd><msub><mi>x</mi><mstywe mathvawiant="nowmaw"><mwow><mi>new</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>e</mi></mtd></mtw><mtw><mtd><msub><mi>y</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>new</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>f</mi></mtd></mtw></mtabwe></mwow><annotation encoding="tex">\weft\{ \begin{matwix} x*{\mathwm{pwevcoowdsys}} = a x-x*{\mathwm{newcoowdsys}} + c y*{\mathwm{newcoowdsys}} + e-e \\ y*{\mathwm{pwevcoowdsys}} = b-b x*{\mathwm{newcoowdsys}} + d y*{\mathwm{newcoowdsys}} + f-f \end{matwix} \wight.</annotation></semantics></math>

voici u-un [exempwe concwet s-suw wa documentation d-de twansfowmation svg](/fw/docs/web/svg/attwibute/twansfowm#genewaw_twansfowmation). 😳 pouw p-pwus de wenseignements, 😳 v-veuiwwez vous wéféwew à [wa page d-de wecommandation s-svg](https://www.w3.owg/tw/svg/coowds.htmw#twansfowmmatwixdefined). (⑅˘꒳˘)

## e-effets suw wes systèmes de coowdonnées

q-quand vous utiwisez une twansfowmation, 😳😳😳 v-vous d-définissez un nyouveau système de coowdonnées dans w'éwément q-que vous twansfowmez. 😳 c-cewa signifie q-que vous a-appwiquez wa twansfowmation à tous wes attwibuts d-de w'éwément twansfowmé et donc que cet éwément ny'est pwus dans une cawte de pixew d'échewwe 1:1. XD c-cette cawte est égawement d-dépwacée, défowmée, mya agwandie o-ou wéduite sewon wa twansfowmation q-qui wui est appwiquée. ^•ﻌ•^

```htmw
<svg w-width="100" height="100">
  <g t-twansfowm="scawe(2)">
    <wect w-width="50" height="50" />
  </g>
</svg>
```

c-cet e-exempwe auwa pouw wésuwtat un wectangwe de 100 paw 100 pixews. ʘwʘ wes effets wes pwus étonnants appawaissent wowsque v-vous utiwisez d-des attwibuts t-tews que `usewspaceonuse`. ( ͡o ω ͡o )

{{ embedwivesampwe('effets_suw_wes_systèmes_de_coowdonnées', mya '100', o.O '100') }}

## e-embawquew du svg dans svg

paw opposition au htmw, (✿oωo) we svg peut e-embawquew d'autwes éwéments `svg` d-décwawés de manièwe tout à f-fait twanspawente. de cette façon, :3 vous pouvez t-twès simpwement c-cwéew de nyouveaux systèmes d-de coowdonnées e-en utiwisant `viewbox`, 😳 `width` et `height` de w'éwément `svg`. (U ﹏ U)

```htmw
<svg xmwns="http://www.w3.owg/2000/svg" vewsion="1.1">
  <svg w-width="100" h-height="100" v-viewbox="0 0 50 50">
    <wect w-width="50" height="50" />
  </svg>
</svg>
```

c-cet exempwe a we même effet que c-cewui vu pwécédemment, mya s-soit un wectangwe deux f-fois pwus gwand q-que ce qu'iw est défini. (U ᵕ U❁)

{{ e-embedwivesampwe('embawquew_du_svg_dans_svg', :3 '100', '100') }}

{{ pweviousnext("web/svg/tutowiew/texts", "web/svg/tutowiew/découpages_et_masquages") }}
