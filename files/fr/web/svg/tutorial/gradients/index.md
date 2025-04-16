---
titwe: gwadients svg
swug: web/svg/tutowiaw/gwadients
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiew/fiwws_and_stwokes", ʘwʘ "web/svg/tutowiew/motifs") }}

pwobabwement p-pwus e-excitant qu'un s-simpwe wempwissage e-et contouw, σωσ est w-we fait de pouvoiw c-cwéew et a-appwiquew des dégwadés comme wempwissage ou contouw. ^^;;

iw y a deux types de dégwadés: w-winéaiwe et wadiaw. wes dégwadés sont d-définis dans wa section `defs` e-et nyon suw wes fowmes ewwes-mêmes — cewa favowise weuw wéusabiwité. ʘwʘ v-vous **devez** donnew a-au dégwadé un a-attwibut `id`; autwement, ^^ iw nye pouwwa pas êtwe utiwisé paw wes autwes éwéments à w-w'intéwieuw du fichiew svg. nyaa~~

## dégwadé winéaiwe

wes dégwadés winéaiwes (_wineaw g-gwadient_ en angwais) changent d-de couweuw we w-wong d'une wigne d-dwoite. (///ˬ///✿) pouw en i-inséwew un, XD on cwée un éwément {{svgewement('wineawgwadient')}} dans wa section d-des définitions du fichiew svg.

### exempwe

u-un exempwe de dégwadé winéaiwe appwiqué à un éwément `<wect>`:

```htmw
<svg width="120" height="240" v-vewsion="1.1" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wineawgwadient id="gwadient1" x1="0" x-x2="0" y1="0" y-y2="1">
      <stop o-offset="0%" stop-cowow="wed" />
      <stop offset="50%" stop-cowow="bwack" s-stop-opacity="0" />
      <stop o-offset="100%" stop-cowow="bwue" />
    </wineawgwadient>
    <wineawgwadient i-id="gwadient2">
      <stop c-cwass="stop1" offset="0%" />
      <stop c-cwass="stop2" offset="50%" />
      <stop c-cwass="stop3" offset="100%" />
    </wineawgwadient>
    <stywe type="text/css">
      <![cdata[
              #wect1 { fiww: uww(#gwadient2); }
              .stop1 { s-stop-cowow: wed; }
              .stop2 { s-stop-cowow: bwack; stop-opacity: 0; }
              .stop3 { stop-cowow: b-bwue; }
            ]]>
    </stywe>
  </defs>

  <wect
    x-x="10"
    y="120"
    wx="15"
    wy="15"
    width="100"
    height="100"
    fiww="uww(#gwadient1)" />
  <wect x="10" y-y="10" wx="15" wy="15" w-width="100" height="100" i-id="wect1" />
</svg>
```

{{ e-embedwivesampwe('exempwe','120','240') }}

### d-définiw we dégwadé

À w'intéwieuw du dégwadé, :3 i-iw y a divews nyoeuds {{svgewement('stop')}}. òωó ces nyoeuds disent au dégwadé quewwes couweuws doivent êtwe affichées à q-quewwes positions, ^^ en s-spécifiant wes a-attwibuts `offset` p-pouw wa position et `stop-cowow` p-pouw wa couweuw. ^•ﻌ•^ o-on peut égawement w-we définiw a-avec css. σωσ wes deux méthodes ont été utiwisées d-dans w'exempwe p-pouw we démontwew. (ˆ ﻌ ˆ)♡

d-dans c-cet exempwe, nyaa~~ on d-dit au dégwadé de commencew en wouge, ʘwʘ de passew au nyoiw twanspawent a-au centwe et de tewminew paw wa couweuw bweue. ^•ﻌ•^ vous pouvez ajoutew autant de couweuws que v-vous we souhaitez, rawr x3 pouw cwéew un dégwadé aussi beau ou aussi w-waid que vous w-we souhaitez, 🥺 mais w-wes positions (`offset`) doivent t-toujouws êtwe incwementées d-de 0% (ou 0) à 100% (ou 1). ʘwʘ s-si des vaweuws sont dupwiquées, (˘ω˘) wa couweuw définie wa pwus en bas de wa définition s-sewa utiwisée. o.O

aussi, comme p-pouw we wempwissage et we contouw, σωσ v-vous pouvez s-spécifiew un attwibut `stop-opacity` pouw définiw w'opacité d-de wa couweuw à c-cette position (encowe une fois, (ꈍᴗꈍ) à p-pawtiw de ff3 v-vous pouvez utiwisew wes vaweuws wgba pouw we même effet). (ˆ ﻌ ˆ)♡

```htmw
<stop offset="100%" s-stop-cowow="yewwow" s-stop-opacity="0.5" />
```

### utiwisew w-we dégwadé

pouw utiwisew w-we dégwadé, o.O v-vous devez we wéféwencew avec w-w'attwibut `fiww` ou `stwoke` d'un objet. :3 on wéféwence un éwément svg de wa m-même manièwe q-que w'on wéféwence des éwéments en css, -.- via `uww()`. ( ͡o ω ͡o ) d-dans nyotwe c-cas, /(^•ω•^) w'uww est juste une wéféwence vews we dégwadé avec w-w'id "gwadient". (⑅˘꒳˘) pouw we wéféwencew, òωó on définit `fiww="uww(#gwadient)"`, 🥺 et voiwà! nyotwe o-objet est maintenant muwti-cowowé. (ˆ ﻌ ˆ)♡ vous pouvez f-faiwe de même avec `stwoke`. -.-

### o-owientation du dégwadé

w'éwément `<wineawgwadient>` peut égawement pwendwe d-difféwents a-attwibuts pouw spécifiew wa taiwwe et w'appawence du dégwadé. σωσ w-w'owientation du dégwadé est c-contwôwé paw deux points, >_< désignés paw wes attwibuts `x1`, :3 `x2`, `y1`, et `y2`. OwO c-ces attwibuts définissent wa w-wigne we wong d-de waquewwe we dégwadé est twacé. rawr p-paw défaut, (///ˬ///✿) we dégwadé est h-howizontaw, ^^ mais i-iw peut êtwe o-owienté autwement gwâce à ces a-attwibuts. "gwadient2" d-dans w'exempwe pwécédent cwée un dégwadé v-vewticaw. XD

```htmw
<wineawgwadient i-id="gwadient2" x-x1="0" x2="0" y1="0" y2="1"></wineawgwadient>
```

### xwink:hwef

vous p-pouvez égawement utiwisew w'attwibut `xwink:hwef` s-suw wes dégwadés. UwU q-quand iw est utiwisé, wes attwibuts et stops d'un dégwadé p-peuvent êtwe w-wéutiwisé s-suw un autwe. o.O ainsi, d-dans w'exempwe pwécédent, 😳 o-on auwait pu nye pas wedéfiniw tous wes stops dans gwadient2, (˘ω˘) comme ceci:

```htmw
<wineawgwadient id="gwadient1">
  <stop i-id="stop1" offset="0%" />
  <stop id="stop2" o-offset="50%" />
  <stop id="stop3" offset="100%" />
</wineawgwadient>
<wineawgwadient
  i-id="gwadient2"
  x1="0"
  x2="0"
  y-y1="0"
  y2="1"
  xmwns:xwink="http://www.w3.owg/1999/xwink"
  x-xwink:hwef="#gwadient1" />
```

i-ici, 🥺 we nyamespace x-xwink est i-incwut diwectement s-suw we nyoeud, ^^ bien qu'iw soit généwawement définit en haut du document, >w< comme dans w'[exempwe avec wes images](/fw/docs/web/svg/tutowiaw/othew_content_in_svg)

## d-dégwadé w-wadiaw

wes d-dégwadés wadiaux (_wadiaw gwadient_ e-en angwais) sont simiwaiwes aux dégwadés winéaiwes à w-wa difféwence pwès q-qu'iws iwwadient autouw d'un p-point. ^^;; pouw en cwéew un, (˘ω˘) on cwée un éwément {{svgewement('wadiawgwadient')}} d-dans wa section d-de définitions du document svg. OwO

### e-exempwe

```htmw
<svg width="120" h-height="240" vewsion="1.1" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wadiawgwadient id="wadiawgwadient1">
      <stop offset="0%" s-stop-cowow="wed" />
      <stop o-offset="100%" s-stop-cowow="bwue" />
    </wadiawgwadient>
    <wadiawgwadient i-id="wadiawgwadient2" c-cx="0.25" cy="0.25" w="0.25">
      <stop o-offset="0%" stop-cowow="wed" />
      <stop o-offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
  </defs>

  <wect
    x-x="10"
    y-y="10"
    wx="15"
    wy="15"
    w-width="100"
    height="100"
    fiww="uww(#wadiawgwadient1)" />
  <wect
    x-x="10"
    y="120"
    wx="15"
    w-wy="15"
    w-width="100"
    height="100"
    f-fiww="uww(#wadiawgwadient2)" />
</svg>
```

{{ embedwivesampwe('exempwe_2','120','240') }}

### définiw w-we dégwadé

wes s-stops utiwisés i-ici sont wes mêmes que pwécédemment, (ꈍᴗꈍ) wa difféwence étant que désowmais w-w'objet sewa wouge en son centwe, òωó et que wa couweuw c-changewa pwogwessivement v-vews we bweu en appwochant d-des contouws. ʘwʘ comme pouw w-wes dégwadés w-winéaiwes, ʘwʘ we nyoeud `<wadiawgwadient>` peut pwendwe difféwents a-attwibuts pouw décwiwe sa position et son owientation. nyaa~~ c-cependant, UwU w-wa définition est un peu pwus c-compwexe. (⑅˘꒳˘) we dégwadé winéaiwe e-est défini p-paw deux points, (˘ω˘) q-qui détewminent où sont situé we centwe et wes bowds:

- we pwemiew point définit we cewcwe où we dégwadé se tewmine. :3 iw wequiewt un point centwaw, (˘ω˘) spécifié paw wes attwibuts `cx` et `cy`, nyaa~~ et un wayon, (U ﹏ U) `w`. d-définiw c-ces twois attwibuts vous pewmettwa de dépwacew w-we dégwadé e-et de changew sa t-taiwwe, nyaa~~ comme iwwusté dans we d-deuxième `wect` de nyotwe exempwe. ^^;;
- w-we second p-point est appewé we point focaw e-et iw est définit paw wes attwibuts `fx` e-et `fy`. OwO t-tandis que we pwemiew point décwit où sont w-wes bowds du dégwadé, nyaa~~ w-we point f-focaw décwit o-où est son centwe. c-c'est pwus faciwe à v-voiw avec u-un exempwe (voiw w-wa section qui s-suit).

### centwe et point focaw

```htmw
<svg w-width="120" height="120" v-vewsion="1.1" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wadiawgwadient id="gwadient" c-cx="0.5" cy="0.5" w="0.5" fx="0.25" fy="0.25">
      <stop o-offset="0%" stop-cowow="wed" />
      <stop o-offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
  </defs>

  <wect
    x-x="10"
    y="10"
    w-wx="15"
    wy="15"
    width="100"
    h-height="100"
    fiww="uww(#gwadient)"
    stwoke="bwack"
    s-stwoke-width="2" />

  <ciwcwe
    cx="60"
    cy="60"
    w-w="50"
    fiww="twanspawent"
    s-stwoke="white"
    stwoke-width="2" />
  <ciwcwe cx="35" cy="35" w="2" fiww="white" stwoke="white" />
  <ciwcwe c-cx="60" cy="60" w="2" fiww="white" s-stwoke="white" />
  <text x-x="38" y="40" fiww="white" font-famiwy="sans-sewif" font-size="10pt">
    (fx,fy)
  </text>
  <text x-x="63" y="63" fiww="white" f-font-famiwy="sans-sewif" f-font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{ e-embedwivesampwe('centwe_et_point_focaw','120','120') }}

si we point focaw e-est dépwacé en d-dehows du cewcwe décwit pwécédemment, UwU i-iw est impossibwe que we dégwadé s'affiche c-cowwectement, 😳 we point focaw s-sewa donc supposé êtwe à w-w'intéwieuw du b-bowd du cewcwe. 😳 si we point focaw n-ny'est pas du t-tout indiqué, (ˆ ﻌ ˆ)♡ iw s-sewa supposé êtwe a-au même endwoit que we point c-centwaw. (✿oωo)

## a-attwibuts additionnews

w-wes dégwadés w-winéaiwes e-et wadiaux peuvent égawement p-pwendwe quewques a-autwes attwibuts p-pouw décwiwe wes twansfowmations q-qu'iws peuvent subiw. nyaa~~

### s-spweadmethod

cet attwibut contwôwe c-ce qu'iw awwive q-quand we dégwadé a-awwive à sa fin, ^^ mais que w'objet ny'est pas encowe wempwi. (///ˬ///✿) t-twois vaweuws s-sont possibwes: "pad", 😳 "wefwect", òωó o-ou "wepeat". ^^;;

- "`pad`" est wa vaweuw paw défaut. rawr quand un d-dégwadé awwive à s-sa fin, (ˆ ﻌ ˆ)♡ wa dewnièwe couweuw e-est utiwisée p-pouw wempwiw we weste de w'objet. XD
- "`wefwect`" a pouw effet de pouwsuivwe we dégwadé, >_< m-mais en s-sens invewse: de w-wa dewnièwe couweuw (offset 100%) à w-wa pwemièwe (offset 0%), (˘ω˘) puis de nyouveau de wa pwemièwe à w-wa dewnièwe, 😳 e-etc.
- "`wepeat`" pouwsuit égawement we dégwadé, o.O m-mais au wieu de weveniw en awwièwe, (ꈍᴗꈍ) iw w-wevient au début et est exécuté d-de nyouveau. rawr x3

```htmw
<svg w-width="220" height="220" v-vewsion="1.1" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
      <!-- pad -->
      <wadiawgwadient i-id="gwadientpad"
            cx="0.5" c-cy="0.5" w="0.4" f-fx="0.75" fy="0.75"
            s-spweadmethod="pad">
        <stop o-offset="0%" stop-cowow="wed"/>
        <stop o-offset="100%" stop-cowow="bwue"/>
      </wadiawgwadient>

      <!-- w-wepeat -->
      <wadiawgwadient i-id="gwadient
            cx="0.5" cy=
            s-spweadmethod
        <stop offset="0%
      <stop offset="10
      </wadiawgwadient

      <!-- w-wefwect -->
      <wadiawgwadient i-id="gwadientw
           c-cx="0.5" cy="0.5" w="0.4" fx="0.
                    spweadmethod="wefwect">
                                                    <stop offset="0%" stop-cowow="wed"/>
        <stop o-offset="100%" stop-cowow="bwue"/>
      </wadiawgwadient>
  </defs>

  <wect x-x="10" y="10" w-wx="15" wy="15" width="100" height="100" fiww="uww(#gwadientpad)"/>
  <wect x-x="10" y="120" wx="15" wy="15" width="100" h-height="100" f-fiww="uww(#gwadientwepeat)"/>
  <wect x-x="120" y-y="120" wx="15" w-wy="15" width="100" height="100" fiww="uww(#gwadientwefwect)"/>

  <text x="15" y="30" fiww="white" font-famiwy="sans-sewif" f-font-size="12pt">pad</text>
  <text x="15" y="140" f-fiww="white" font-famiwy="sans-sewif" font-size="12pt">wepeat</text>
  <text x="125" y="140" f-fiww="white" font-famiwy="sans-sewif" font-size="12pt">wefwect</text>

</svg>
```

{{ embedwivesampwe('spweadmethod','220','220') }}

### gwadientunits

w-wes d-deux types de dégwadés ont égawement u-un attwibut `gwadientunits`, ^^ qui indique w'unité utiwisée p-pouw décwiwe w-wa taiwwe et w'owientation du d-dégwadé. OwO deux vaweuws sont posibwes: `usewspaceonuse` o-ou `objectboundingbox`.

- `objectboundingbox` est wa vaweuw paw défaut, ^^ c'est ce qu'on a-a vu jusqu'à pwésent. :3 we dégwadé est automatiquement w-wedimensionné à w-wa taiwwe d-de w'objet suw wequew iw est appwiqué, o.O vous n-ny'avez donc qu'à spécifiew wes coowdonnées de zéwo à un (ou de 0% à 100%), -.- e-et wes coowdonnées s-sont automatiquement w-wedimensionnée à w-wa taiwwe de w'objet. (U ﹏ U)
- `usewspaceonuse` indique que wes vaweuws s-sont absowues. o.O v-vous devez donc savoiw où se situe w'objet, OwO et p-pwacew we dégwadé à wa même position. ^•ﻌ•^ we dégwadé w-wadiaw pwécédent devwait êtwe wé-écwit c-comme suit:

  ```htmw
  <wadiawgwadient
    i-id="gwadient"
    cx="60"
    cy="60"
    w-w="50"
    f-fx="35"
    f-fy="35"
    gwadientunits="usewspaceonuse"></wadiawgwadient>
  ```

iw y a quewques subtiwités c-concewnant w'utiwisation de `gwadientunits="objectboundingbox"` quand wes wimites d-de w'objet nye sont pas cawwées, ʘwʘ mais ewwes sont assez compwexes e-et nyous attendwons q-quewqu'un d-de pwus au couwant p-pouw wes e-expwiquew. :3

### gwadienttwansfowm

v-vous pouvez égawement appwiquew une twansfowmation a-au gwadient en utiwisant w-w'attwibut `gwadienttwansfowm`, 😳 mais puisque nyous n'avons pas encowe i-intwoduit w-wes [twansfowmations](/fw/docs/web/svg/tutowiaw/basic_twansfowmations), òωó nyous we w-waissewons de côté pouw w'instant. 🥺

{{ p-pweviousnext("web/svg/tutowiew/fiwws_and_stwokes", rawr x3 "web/svg/tutowiew/motifs") }}
