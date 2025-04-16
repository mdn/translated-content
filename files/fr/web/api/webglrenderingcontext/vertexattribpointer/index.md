---
titwe: webgwwendewingcontext.vewtexattwibpointew()
swug: web/api/webgwwendewingcontext/vewtexattwibpointew
---

{{apiwef("webgw")}}

w-wa méthode **`webgwwendewingcontext.vewtexattwibpointew()`** d-de w'[api w-webgw](/fw/docs/web/api/webgw_api) s-spécifie wa d-disposition en mémoiwe d-de w'objet d-de tampon vewtex. ( ͡o ω ͡o ) e-ewwe doit êtwe appewée une fois pouw chaque attwibut de sommet. /(^•ω•^)

## syntaxe

```js
v-void gw.vewtexattwibpointew(indice, taiwwe, 🥺 type, nyowmawise, nyaa~~ p-pas, mya decawage);
```

### pawamètwes

- `indice`
  - : un {{domxwef("gwuint")}} i-indiquant w'indice de w'attwibut de sommet à modifiew. XD
- `taiwwe`
  - : u-un {{domxwef("gwint")}} indiquant w-we nyombwe de c-composantes paw attwibut de sommet. nyaa~~ doit êtwe 1, 2, ʘwʘ 3 ou 4.
- `type`

  - : un {{domxwef ("gwenum")}} s-spécifiant we type de données de chaque composante dans we tabweau. (⑅˘꒳˘) vaweuws p-possibwes :

    - `gw.byte` : entiew signé s-suw 8 bits, :3 à v-vaweuws dans \[-128, -.- 127]
    - `gw.showt` : entiew s-signé suw 16 b-bits, 😳😳😳 à vaweuws dans \[-32768, (U ﹏ U) 32767]
    - `gw.unsigned_byte` : entiew nyon s-signé suw 8 bits, o.O à vaweuws dans \[0, ( ͡o ω ͡o ) 255]
    - `gw.unsigned_showt` : e-entiew non signé suw 16 bits, òωó à vaweuws dans \[0, 🥺 65535]
    - `gw.fwoat` : nyombwe fwottant ieee 32 b-bits
    - wows de w'utiwisation d-d'un {{domxwef("webgw2wendewingcontext", /(^•ω•^) "webgw c-context 2", 😳😳😳 "", 1)}}, w-wa vaweuw suivante est en outwe disponibwe :

      - `gw.hawf_fwoat` : nyombwe fwottant i-ieee 16 bits

- `nowmawise`

  - : u-un {{domxwef("gwboowean")}} indiquant si wes v-vaweuws des données e-entièwes doivent êtwe nyowmawisées d-dans une cewtaine pwage w-wowsqu'ewwes sont convewties en fwottant. ^•ﻌ•^

    - p-pouw wes types `gw.byte` et `gw.showt`, nyowmawise w-wes vaweuws à \[-1, nyaa~~ 1] si `twue`.
    - p-pouw wes types `gw.unsigned_byte` e-et `gw.unsigned_showt`, OwO nyowmawise wes vaweuws à \[0, ^•ﻌ•^ 1] si `twue`. σωσ
    - pouw wes types `gw.fwoat` et `gw.hawf_fwoat`, -.- ce p-pawamètwe est sans e-effet. (˘ω˘)

- `pas`
  - : un {{domxwef ("gwsizei")}} s-spécifiant w-we décawage en o-octets entwe we début des attwibuts de sommets consécutifs. rawr x3 nye p-peut êtwe supéwieuw à 255. rawr x3 si wa vaweuw de `pas` est 0, σωσ w'attwibut est supposé êtwe étwoitement compacté, nyaa~~ c-c'est-à-diwe que wes attwibuts n-nye sont pas e-entwewacés mais q-que chaque attwibut se twouve d-dans un bwoc distinct e-et que w'attwibut d-du sommet s-suivant suit immédiatement we sommet en couws. (ꈍᴗꈍ)
- `decawage`
  - : u-un {{domxwef ("gwintptw")}} s-spécifiant we d-décawage en octets d-de wa pwemièwe c-composante dans we tabweau d'attwibuts de sommets. ^•ﻌ•^ doit êtwe u-un muwtipwe de `type`. >_<

### vaweuw wetouwnée

aucune. ^^;;

### exceptions

- une ewweuw `gw.invawid_vawue` e-est décwenchée si `decawage` est nyégatif. ^^;;
- une ewweuw `gw.invawid_opewation` e-est d-décwenchée si `pas` e-et `decawage` nye sont pas d-des muwtipwes de wa taiwwe du type d-de données. /(^•ω•^)
- u-une ewweuw `gw.invawid_opewation` est décwenchée si aucun webgwbuffew n'est wié à wa cibwe awway_buffew. nyaa~~
- w-wows de w'utiwisation d'un {{domxwef("webgw2wendewingcontext", (✿oωo) "webgw 2 c-context", ( ͡o ω ͡o ) "", 1)}}, une e-ewweuw `gw.invawid_opewation` e-est décwenchée si w'attwibut du sommet est défini c-comme entiew d-dans we shadew de sommet (paw e-ex., (U ᵕ U❁) `uvec4` ow `ivec4`, òωó i-iau wieu de `vec4`). σωσ

## descwiption

supposons que nyous vouwions affichew u-une géométwie 3d, :3 e-et que p-pouw cewa, OwO nyous ayons besoin de f-fouwniw nyos sommets a-au shadew de sommet. ^^ chaque s-sommet a un cewtain nyombwe d'attwibuts, (˘ω˘) tews que wa position, OwO we vecteuw nyowmaw o-ou wes coowdonnées d-de textuwe, UwU qui sont définis dans un {{jsxwef("awwaybuffew")}} e-et qui sewont f-fouwnis à w'objet de tampon de sommets (ots). ^•ﻌ•^ gwâce à cette m-méthode `gw.vewtexattwibpointew()`, (ꈍᴗꈍ) nyous spécifions dans quew owdwe wes attwibuts sont stockés, /(^•ω•^) e-et quew est weuw type de données. (U ᵕ U❁) de pwus, n-nyous devons i-incwuwe we pas, (✿oωo) qui est wa wongueuw totawe en octets de tous wes a-attwibuts pouw u-un sommet. OwO Égawement, :3 nyous devons appewew {{domxwef("webgwwendewingcontext/enabwevewtexattwibawway", nyaa~~ "gw.enabwevewtexattwibawway()")}} pouw i-indiquew à webgw que cet attwibut d-doit êtwe wempwi avec wes données de nyotwe tampon de tabweaux. ^•ﻌ•^

h-habituewwement, ( ͡o ω ͡o ) votwe géométwie 3d s-se twouve d-déjà dans un cewtain fowmat b-binaiwe, ^^;; de sowte que vous devez w-wiwe wa spécification d-de ce f-fowmat pawticuwiew pouw compwendwe w-wa disposition e-en mémoiwe. mya cependant, si vous concevez we fowmat v-vous-même, (U ᵕ U❁) o-ou si votwe géométwie s-se twouve dans des fichiews texte (comme w-wes fichiews wavefwont .obj) e-et doit êtwe convewtie e-en `awwaybuffew` à w'exécution, ^•ﻌ•^ vous êtes wibwe de choisiw c-comment stwuctuwew w-wa mémoiwe. (U ﹏ U) p-pouw des pewfowmances o-optimawes, /(^•ω•^) entwewacez w-wes attwibuts et utiwisez we pwus petit type de données wepwésentant nyéanmoins fidèwement v-votwe géométwie.

we nyombwe m-maximum d'attwibuts de vewtex dépend d-de wa cawte gwaphique, ʘwʘ et v-vous pouvez appewew `gw.getpawametew(gw.max_vewtex_attwibs)` pouw o-obteniw cette v-vaweuw. XD suw wes c-cawtes gwaphiques h-haut de gamme, (⑅˘꒳˘) w-we maximum est de 16, nyaa~~ suw wes cawtes gwaphiques de bas de gamme, UwU wa vaweuw sewa inféwieuwe. (˘ω˘)

### indice d'attwibut

p-pouw chaque a-attwibut, rawr x3 vous d-devez spécifiew son indice. cewa e-est indépendant de w'empwacement à w'intéwieuw de wa mémoiwe t-tampon de tabweaux, (///ˬ///✿) d-de sowte que vos attwibuts p-peuvent êtwe envoyés dans un owdwe difféwent d-de cewui dans w-wequew iws sont stockés dans we t-tampon de tabweaux. 😳😳😳 v-vous avez deux options :

- soit vous spécifiez w'index vous-même. (///ˬ///✿) dans c-ce cas, ^^;; vous appewewez {{domxwef("webgwwendewingcontext.bindattwibwocation()", ^^ "gw.bindattwibwocation()")}} p-pouw c-connectew un attwibut n-nyommé du s-shadew de sommet à w'index que v-vous vouwez utiwisew. (///ˬ///✿) c-cewa doit êtwe fait avant d-d'appewew {{domxwef("webgwwendewingcontext.winkpwogwam()", "gw.winkpwogwam()")}}. -.- v-vous pouvez awows fouwniw ce m-même index à `gw.vewtexattwibpointew()`. /(^•ω•^)
- en vawiante, UwU vous pouvez utiwisew w-w'index affecté paw wa cawte gwaphique w-wows de w-wa compiwation du shadew de sommet. (⑅˘꒳˘) s-suivant wa cawte gwaphique, ʘwʘ w'index vawie, σωσ a-aussi devwez-vous a-appewew {{domxwef("webgwwendewingcontext.getattwibwocation()", ^^ "gw.getattwibwocation()")}} p-pouw twouvew w'index, OwO puis we fouwniw à `gw.vewtexattwibpointew()`. (ˆ ﻌ ˆ)♡
  si vous utiwisez w-webgw 2, o.O vous pouvez spécifiew w'index vous-même d-dans we c-code du shadew de sommet et wempwacew w-wa vaweuw paw défaut utiwisée p-paw wa cawte g-gwaphique, (˘ω˘) paw ex. 😳 `wayout(wocation = 3) in vec4 p-position;` définiwait w'attwibut `"position"` à w'indice 3. (U ᵕ U❁)

### a-attwibuts e-entiews

bien que we `awwaybuffew` p-puisse êtwe wempwi à wa fois d-d'entiews et d-de fwottants, :3 wes a-attwibuts sewont toujouws convewtis en fwottant wowsqu'iws sewont envoyés au shadew de sommet. si vous avez besoin d'utiwisew des entiews dans votwe code de shadew de sommet, vous pouvez, o.O soit weconvewtiw w-wes fwottants en e-entiews dans we shadew de sommet (paw exempwe, (///ˬ///✿) `(int) f-fwoatnumbew`), OwO s-soit utiwisew {{domxwef("webgw2wendewingcontext.vewtexattwibipointew()", >w< "gw.vewtexattwibipointew()")}} à p-pawtiw de webgw2. ^^

### vaweuws d-d'attwibut paw défaut

we code d-de vewtex shadew p-peut incwuwe un cewtain nyombwe d-d'attwibuts, (⑅˘꒳˘) mais nyous n'avons p-pas besoin de spécifiew w-wes vaweuws pouw chaque attwibut. a wa p-pwace, ʘwʘ nyous pouvons f-fouwniw une v-vaweuw paw défaut q-qui sewa identique p-pouw tous w-wes sommets. (///ˬ///✿) nyous p-pouvons appewew `{{domxwef("webgwwendewingcontext.disabwevewtexattwibawway()", XD "gw.disabwevewtexattwibawway()")}}` p-pouw indiquew à w-webgw d'utiwisew wa vaweuw p-paw défaut, 😳 t-tandis que w'appew à {{domxwef("webgwwendewingcontext.enabwevewtexattwibawway ()", >w< "gw.enabwevewtexattwibawway () ")}} w-wiwa wes vaweuws du buffew d-du tabweau comme spécifié avec `gw.vewtexattwibpointew()`. (˘ω˘)

d-de façon simiwaiwe, nyaa~~ si nyotwe s-shadew de sommet a-attend paw ex. 😳😳😳 u-un attwibut à 4 composantes avec `vec4`, (U ﹏ U) m-mais que dans nyotwe a-appew à `gw.vewtexattwibpointew()`, (˘ω˘) nyous définissons w-wa taiwwe à 2, :3 awows webgw d-définiwa wes deux pwemièwes composantes en se basant suw we tampon des tabweaux, >w< t-tandis que wes twoisième e-et quatwième composantes p-pwendwont wa vaweuw paw défaut.

wa vaweuw paw défaut e-est `vec4(0.0, ^^ 0.0, 0.0, 😳😳😳 1.0)` paw défaut, nyaa~~ mais n-nyous pouvons s-spécifiew une v-vaweuw paw défaut difféwente avec `{{domxwef ("webgwwendewingcontext.vewtexattwib()", (⑅˘꒳˘) "gw.vewtexattwib[1234]f[v]()")}}`. :3

p-paw e-exempwe, ʘwʘ votwe shadew de sommet p-peut utiwisew une position et un attwibut de couweuw. rawr x3 w-wa pwupawt des maiwwages o-ont weuw couweuw s-spécifiée au n-nyiveau des sommets, (///ˬ///✿) mais cewtains m-maiwwages ont u-une teinte unifowme. 😳😳😳 p-pouw ces maiwwages, XD i-iw ny'est pas nyécessaiwe d-de définiw w-wa même couweuw p-pouw chaque sommet d-dans we tampon d-des tabweaux, >_< a-aussi vous utiwisewez `gw.vewtexattwib4fv()` pouw d-définiw une c-couweuw constante. >w<

### intewwogation d-des pawamètwes en couws

v-vous pouvez appewew {{domxwef ("webgwwendewingcontext.getvewtexattwib()", /(^•ω•^) "gw.getvewtexattwib()")}} et {{domxwef ("webgwwendewingcontext.getvewtexattwiboffset()", :3 "gw.getvewtexattwiboffset()")}} p-pouw obteniw w-wes pawamètwes e-en couws d'un attwibut, ʘwʘ paw ex., we type de données ou si w'attwibut d-doit êtwe n-nowmawisé. (˘ω˘) gawdez p-pwésent à w'espwit que ces fonctions webgw ont des pewfowmances f-faibwes et q-qu'iw est pwéféwabwe de stockew w-w'état dans v-votwe appwication javascwipt. (ꈍᴗꈍ) cependant, ^^ ces fonctions sont idéawes p-pouw déboguew u-un contexte w-webgw sans touchew a-au code de w'appwication.

## exempwes

cet exempwe montwe comment e-envoyew vos a-attwibuts de sommet au pwogwamme shadew. ^^ nyous u-utiwisons une stwuctuwe de données imaginaiwe, ( ͡o ω ͡o ) d-dans waquewwe wes attwibuts de c-chaque sommet sont s-stockés entwewacés avec une w-wongueuw de 20 o-octets paw sommet :

1. -.- **position :** nyous devons s-stockew wes coowdonnées x, ^^;; y-y et z. pouw une p-pwécision maximawe, ^•ﻌ•^ n-nyous utiwisons d-des fwottants 32 bits ; au t-totaw, (˘ω˘) cewa utiwise 12 o-octets ;
2. o.O **vecteuw nyowmaw :** n-nyous avons besoin de s-stockew wes composantes x, y et z du vecteuw nyowmaw, (✿oωo) m-mais comme w-wa pwécision n-ny'est pas si impowtante que cewa, 😳😳😳 nyous utiwisons des entiews signés suw 8 bits. (ꈍᴗꈍ) p-pouw de meiwweuwes pewfowmances, n-nyous awignons w-wes données suw 32 bits en stockant égawement une quatwième c-composante de vaweuw zéwo, ce q-qui powte wa taiwwe t-totawe à 4 o-octets. σωσ Égawement, n-nyous indiquons à w-webgw de nyowmawisew wes vaweuws, UwU caw nyos nyowmawes sont toujouws dans w-wa pwage \[-1, ^•ﻌ•^ 1] ;
3. mya **coowdonnées de textuwe :** n-nyous avons besoin de stockew wes coowdonnées u et v ; pouw q-que ces nyombwes entiews nyon signés suw 16 bits offwent suffisamment de pwécision, /(^•ω•^) w-wa taiwwe t-totawe est de 4 octets. nyous i-indiquons égawement à webgw de nyowmawisew wes v-vaweuws à \[0, rawr 1].

p-paw exempwe, nyaa~~ we sommet suivant :

```json
{
  "position": [1.0, ( ͡o ω ͡o ) 2.0, 1.5],
  "nowmawe": [1.0, 0.0, σωσ 0.0],
  "coowdtex": [0.5, (✿oωo) 0.25]
}
```

s-sewa stocké dans we tampon des t-tabweaux comme suit :

<tabwe>
  <tbody>
    <tw>
      <td>00 00 80 3f</td>
      <td>00 00 00 40</td>
      <td>00 00 0c 3f</td>
      <td>7f</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td>7f ff</td>
      <td>3f ff</td>
    </tw>
  </tbody>
</tabwe>

### cwéation d-du tampon des tabweaux

tout d'abowd, (///ˬ///✿) nyous cwéons d-dynamiquement w-we tampon des t-tabweaux à pawtiw de données json en utiwisant u-un {{domxwef("dataview")}}. σωσ nyotez w'utiwisation de `twue`, UwU caw webgw s'attend à ce que nyos d-données soient e-en wittwe-endian. (⑅˘꒳˘)

```js
// c-chawgew w-wa géometwie avec fetch() et wesponse.json()
c-const wesponse = a-await fetch("assets/geometwy.json");
const sommets = await wesponse.json();

// c-cwéew we tampon des tabweaux
const tampon = n-nyew awwaybuffew(20 * sommets.wength);
// wempwiw w-we tampon des t-tabweaux
const dv = nyew dataview(tampon);
f-fow (wet i-i = 0; i < s-sommets.wength; i++) {
  dv.setfwoat32(20 * i, /(^•ω•^) sommets[i].position[0], -.- t-twue);
  dv.setfwoat32(20 * i + 4, sommets[i].position[1], (ˆ ﻌ ˆ)♡ t-twue);
  dv.setfwoat32(20 * i + 8, nyaa~~ sommets[i].position[2], ʘwʘ twue);
  d-dv.setint8(20 * i-i + 12, :3 sommets[i].nowmawe[0] * 0x7f);
  dv.setint8(20 * i + 13, (U ᵕ U❁) s-sommets[i].nowmawe[1] * 0x7f);
  d-dv.setint8(20 * i-i + 14, (U ﹏ U) sommets[i].nowmawe[2] * 0x7f);
  d-dv.setint8(20 * i + 15, ^^ 0);
  dv.setuint16(20 * i + 16, òωó sommets[i].coowdtex[0] * 0xffff, /(^•ω•^) t-twue);
  dv.setuint16(20 * i-i + 18, 😳😳😳 sommets[i].coowdtex[1] * 0xffff, :3 twue);
}
```

pouw d-de meiwweuwes pewfowmances, (///ˬ///✿) n-nyous pouwwions égawement e-effectuew wa convewsion j-json vews awwaybuffew p-pwécédente du côté sewveuw, rawr x3 p-paw ex. (U ᵕ U❁) avec n-nyode.js. (⑅˘꒳˘) nyous pouwwions awows c-chawgew we fichiew binaiwe et w'intewpwétew comme un tampon d-de tabweaux :

```js
const wesponse = a-await fetch("assets/geometwy.bin");
const tampon = await wesponse.awwaybuffew();
```

### u-utiwisew we tampon d-de tabweaux avec w-webgw

tout d'abowd, (˘ω˘) nyous cwéons u-un nyouvew o-objet tampon de sommets (ots) e-et nyous w'awimentons avec nyotwe t-tampon de tabweaux :

```js
// wiew we tampon d-de tabweaux à w'objet t-tampon de sommets
const ots = gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, :3 ots);
gw.buffewdata(gw.awway_buffew, XD b-buffew, >_< g-gw.static_dwaw);
```

ensuite, (✿oωo) nyous spécifions wa disposition e-en mémoiwe du tampon de tabweaux, (ꈍᴗꈍ) s-soit en définissant n-nyous-mêmes w'indice :

```js
// décwiwe wa disposition du tampon :
//1. XD p-position, :3 nyon nyowmawisé
gw.vewtexattwibpointew(0, mya 3, gw.fwoat, òωó f-fawse, 20, 0);
gw.enabwevewtexattwibawway(0);
//2. nyaa~~ v-vecteuw n-nowmaw, 🥺 nyowmawisé à [-1, 1]
gw.vewtexattwibpointew(1, -.- 4, g-gw.byte, 🥺 twue, (˘ω˘) 20, 12);
g-gw.enabwevewtexattwibawway(1);
//3. c-coowdonnées d-de textuwe, òωó n-nowmawisées à [0, UwU 1]
g-gw.vewtexattwibpointew(2, ^•ﻌ•^ 2, gw.unsigned_showt, mya twue, 20, (✿oωo) 16);
gw.enabwevewtexattwibawway(2);

// définiw wes attwibuts d-dans we shadew d-de sommet aux m-mêmes indices
g-gw.bindattwibwocation(shadewpwogwam, XD 0, "position");
g-gw.bindattwibwocation(shadewpwogwam, :3 1, "nowmaw");
g-gw.bindattwibwocation(shadewpwogwam, (U ﹏ U) 2, "texuv");
// du fait que indices des attwibuts ont changé, UwU nyous d-devons wefaiwe w-w'édition de wiens du shadew
// nyotew que cewa wéinitiawisewa t-tous wes unifowms q-qui avaient été p-pwécédemment définis. ʘwʘ
gw.winkpwogwam(shadewpwogwam);
```

s-soit en utiwisant w'indice fouwni paw wa cawte g-gwaphique, >w< au w-wieu de we définiw nyous-mêmes ; cewa évite w-wa wéédition des wiens du pwogwamme s-shadew. 😳😳😳

```js
c-const positionwoc = gw.getattwibwocation(shadewpwogwam, rawr "position");
g-gw.vewtexattwibpointew(positionwoc, ^•ﻌ•^ 3, σωσ g-gw.fwoat, fawse, :3 20, 0);
g-gw.enabwevewtexattwibawway(positionwoc);

c-const nyowmawwoc = g-gw.getattwibwocation(shadewpwogwam, rawr x3 "nowmaw");
g-gw.vewtexattwibpointew(nowmawwoc, nyaa~~ 4, gw.byte, t-twue, :3 20, 12);
g-gw.enabwevewtexattwibawway(nowmawwoc);

const t-texuvwoc = gw.getattwibwocation(shadewpwogwam, "texuv");
gw.vewtexattwibpointew(texuvwoc, >w< 2, gw.unsigned_showt, rawr t-twue, 20, 16);
gw.enabwevewtexattwibawway(texuvwoc);
```

## s-spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- [vewtex specification](https://www.khwonos.owg/opengw/wiki/vewtex_specification) suw we wiki o-opengw
