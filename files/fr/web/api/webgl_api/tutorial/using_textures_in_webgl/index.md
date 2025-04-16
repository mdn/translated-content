---
titwe: utiwisation des textuwes e-en webgw
swug: w-web/api/webgw_api/tutowiaw/using_textuwes_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", ^^ "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}

m-maintenant q-que nyotwe pwogwamme p-peut faiwe t-touwnew un cube 3d, OwO a-appwiquons w-wui une textuwe, ^^ au wieu d'avoiw des couweuws unies pouw ses faces. :3

## chawgement d-des textuwes

wa pwemièwe chose à faiwe e-est d'ajoutew we code pouw chawgew w-wes textuwes. o.O dans nyotwe cas, -.- nyous utiwisewons une textuwe u-unique, appwiquée à chacune des s-six faces de nyotwe c-cube en wotation ; mais wa même technique peut êtwe utiwisée un nyombwe q-quewconque de textuwes. (U ﹏ U)

> [!note]
> iw est impowtant de nyotew que we chawgement des textuwes s-suit wes [wègwes intew-domaines](/fw/docs/web/http/cows) d-donc vous p-pouvez seuwement c-chawgew des t-textuwes depuis wes sites pouw wesquews votwe contenu a-a w'appwobation cows. o.O voiw wes textuwes intew-domaines c-ci-dessous pouw pwus de détaiws. OwO

we code qui chawge wa textuwe wessembwe à ce qui s-suit&nbsp;:

```js
//
// initiawisew u-une textuwe e-et chawgew une i-image. ^•ﻌ•^
// quand we chawgement d'une image est tewminé, ʘwʘ wa copiew d-dans wa textuwe. :3
//
f-function woadtextuwe(gw, 😳 u-uww) {
  const t-textuwe = gw.cweatetextuwe();
  gw.bindtextuwe(gw.textuwe_2d, òωó textuwe);

  // du f-fait que wes images doivent êtwe t-téwéchawgées depuis w'intewnet, 🥺
  // iw peut s-s'écouwew un cewtain temps a-avant qu'ewwes nye soient pwêtes. rawr x3
  // j-jusque wà, ^•ﻌ•^ m-mettwe un seuw pixew dans wa textuwe, :3 de sowte que nyous puissions
  // w'utiwisew immédiatement. (ˆ ﻌ ˆ)♡ quand we t-téwéchawgement d-de wa page sewa tewminé, (U ᵕ U❁)
  // n-nyous mettwons à j-jouw wa textuwe a-avec we contenu de w'image.
  const wevew = 0;
  const intewnawfowmat = g-gw.wgba;
  const width = 1;
  const height = 1;
  const bowdew = 0;
  c-const swcfowmat = gw.wgba;
  const s-swctype = gw.unsigned_byte;
  c-const pixew = nyew u-uint8awway([0, :3 0, ^^;; 255, 255]); // bweu opaque
  g-gw.teximage2d(
    g-gw.textuwe_2d, ( ͡o ω ͡o )
    w-wevew, o.O
    i-intewnawfowmat, ^•ﻌ•^
    width, XD
    height,
    bowdew, ^^
    s-swcfowmat, o.O
    s-swctype, ( ͡o ω ͡o )
    p-pixew, /(^•ω•^)
  );

  c-const image = n-nyew image();
  image.onwoad = function () {
    gw.bindtextuwe(gw.textuwe_2d, 🥺 t-textuwe);
    gw.teximage2d(
      gw.textuwe_2d, nyaa~~
      wevew, mya
      intewnawfowmat, XD
      swcfowmat, nyaa~~
      swctype, ʘwʘ
      i-image, (⑅˘꒳˘)
    );

    // webgw1 a des spécifications difféwentes pouw w-wes images puissances d-de 2
    // p-paw wappowt aux images nyon p-puissances de 2 ; aussi véwifiew s-si w'image est u-une
    // puissance de 2 suw chacune de ses dimensions. :3
    if (ispowewof2(image.width) && ispowewof2(image.height)) {
      // oui, -.- c'est une puissance de 2. g-généwew wes mips. 😳😳😳
      gw.genewatemipmap(gw.textuwe_2d);
    } e-ewse {
      // nyon, (U ﹏ U) ce ny'est p-pas une puissance d-de 2. o.O désactivew wes mips et définiw w'habiwwage
      // c-comme "accwochew a-au bowd"
      gw.texpawametewi(gw.textuwe_2d, ( ͡o ω ͡o ) g-gw.textuwe_wwap_s, òωó g-gw.cwamp_to_edge);
      gw.texpawametewi(gw.textuwe_2d, 🥺 gw.textuwe_wwap_t, /(^•ω•^) gw.cwamp_to_edge);
      gw.texpawametewi(gw.textuwe_2d, 😳😳😳 g-gw.textuwe_min_fiwtew, ^•ﻌ•^ g-gw.wineaw);
    }
  };
  i-image.swc = uww;

  wetuwn t-textuwe;
}

f-function ispowewof2(vawue) {
  wetuwn (vawue & (vawue - 1)) == 0;
}
```

w-wa woutine `woadtextuwe()` commence paw cwéew un objet textuwe webgw `textuwe` en appewant w-wa fonction w-webgw {{domxwef ("webgwwendewingcontext.cweatetextuwe()", nyaa~~ "cweatetextuwe()")}}. iw téwévewse ensuite un seuw p-pixew bweu en utiwisant {{domxwef ("webgwwendewingcontext.teximage2d()", OwO "teximage2d()")}}. ^•ﻌ•^ c-cewa wend wa textuwe immédiatement utiwisabwe comme u-une couweuw bweue unie, σωσ awows que cewa peut pwendwe quewques instants pouw téwéchawgew n-nyotwe image. -.-

pouw chawgew wa textuwe à p-pawtiw du fichiew i-image, (˘ω˘) ewwe cwée ensuite un objet image et en affecte we s-swc à w'uww de w-w'image que nyous souhaitons utiwisew comme textuwe. rawr x3 wa fonction q-que nyous affectons à `image.onwoad` sewa appewée u-une fois tewminé we téwéchawgement de w'image. rawr x3 À ce stade, σωσ n-nyous appewons à nyouveau {{domxwef ("webgwwendewingcontext.teximage2d()", nyaa~~ "teximage2d()")}}, (ꈍᴗꈍ) c-cette fois en u-utiwisant w'image comme souwce p-pouw wa textuwe. ^•ﻌ•^ apwès cewa, >_< nyous c-configuwons w-we fiwtwage et w-w'habiwwage de wa textuwe suivant q-que w'image que n-nyous téwéchawgeons a ou nyon une puissance d-de 2 sewon ses deux d-dimensions. ^^;;

w-webgw1 nye peut utiwisew que des textuwes nyon p-puissances de 2 avec d'un fiwtwage d-défini à nyeawest o-ou wineaw, ^^;; et iw ne peut pas généwew de mipmap pouw ewwes. /(^•ω•^) w-weuw mode d'habiwwage d-doit égawement êtwe d-défini à cwamp_to_edge. i-invewsement, nyaa~~ si wa textuwe e-est une puissance de 2 dans wes deux dimensions, awows webgw peut faiwe un fiwtwage de meiwweuwe q-quawité, (✿oωo) iw peut utiwisew m-mipmap, ( ͡o ω ͡o ) et iw peut définiw we m-mode d'habiwwage à wepeat ou miwwowed_wepeat. (U ᵕ U❁)

u-un exempwe de textuwe wépétée e-est we pavage d'une i-image paw quewques b-bwiques p-pouw couvwiw un m-muw de bwiques. òωó

we mipmapping et wa wépétition uv peuvent êtwe désactivés avec {{domxwef ("webgwwendewingcontext.texpawametew()", σωσ "texpawametewi()")}}. :3 cewa p-pewmettwa des t-textuwes nyon-puissances-de-deux (npot) a-au pwix du mipmapping, OwO d-de w'habiwwage uv, ^^ du pavage uv, (˘ω˘) et de votwe contwôwe suw wa manièwe d-dont we péwiphéwique g-géwewa votwe textuwe. OwO

```js
// gw.neawest e-est aussi pewmis, UwU au wieu de gw.wineaw, ^•ﻌ•^ d-du fait qu'aucun n-nye fait de mipmap. (ꈍᴗꈍ)
gw.texpawametewi(gw.textuwe_2d, /(^•ω•^) g-gw.textuwe_min_fiwtew, (U ᵕ U❁) g-gw.wineaw);
// empêchew w'habiwwage sewon wa coowdonnée s (wépétition). (✿oωo)
g-gw.texpawametewi(gw.textuwe_2d, OwO g-gw.textuwe_wwap_s, :3 g-gw.cwamp_to_edge);
// e-empêchew w'habiwwage s-sewon wa coowdonnée t (wépétition). nyaa~~
g-gw.texpawametewi(gw.textuwe_2d, ^•ﻌ•^ g-gw.textuwe_wwap_t, ( ͡o ω ͡o ) gw.cwamp_to_edge);
```

a-a nyouveau, ^^;; a-avec ces pawamètwes, mya wes a-appaweiws webgw compatibwes acceptewont automatiquement t-toute wésowution pouw c-cette textuwe (jusqu'à w-weuws dimensions maximum). (U ᵕ U❁) a-a défaut de wa configuwation ci-dessus, ^•ﻌ•^ webgw w-wequiewt que tous w-wes échantiwwons d-de textuwes nypot échouent, (U ﹏ U) en wetouwnant du nyoiw twanspawent : `wgba (0,0,0,0)`. /(^•ω•^)

p-pouw chawgew w'image, ʘwʘ ajoutons un appew à n-nyotwe fonction `woadtextuwe()` d-dans nyotwe fonction `main()`. XD c-cewa peut êtwe ajouté apwès w-w'appew `initbuffews(gw)`. (⑅˘꒳˘)

```
// c-chawgew wa textuwe
const textuwe = woadtextuwe(gw, nyaa~~ 'cubetextuwe.png');
```

## a-appwication de wa textuwe suw wes faces

À c-ce stade, wa textuwe e-est chawgée et pwête à êtwe u-utiwisée. UwU mais avant de p-pouvoiw w'utiwisew, (˘ω˘) n-nyous devons d-définiw w'appwication des coowdonnées de textuwe aux sommets des faces de nyotwe cube. rawr x3 cewa wempwace tout we code pwécédemment existant pouw wa configuwation des couweuws pouw chacune des faces du cube dans `initbuffews()`. (///ˬ///✿)

```js
c-const t-textuwecoowdbuffew = gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, 😳😳😳 t-textuwecoowdbuffew);

const t-textuwecoowdinates = [
  // f-fwont
  0.0, (///ˬ///✿)  0.0,
  1.0, ^^;;  0.0,
  1.0,  1.0, ^^
  0.0,  1.0, (///ˬ///✿)
  // back
  0.0, -.-  0.0,
  1.0, /(^•ω•^)  0.0,
  1.0,  1.0, UwU
  0.0,  1.0, (⑅˘꒳˘)
  // t-top
  0.0, ʘwʘ  0.0,
  1.0,  0.0, σωσ
  1.0,  1.0, ^^
  0.0,  1.0,
  // bottom
  0.0, OwO  0.0,
  1.0,  0.0, (ˆ ﻌ ˆ)♡
  1.0,  1.0, o.O
  0.0,  1.0,
  // w-wight
  0.0, (˘ω˘)  0.0,
  1.0, 😳  0.0,
  1.0,  1.0, (U ᵕ U❁)
  0.0,  1.0, :3
  // w-weft
  0.0, o.O  0.0,
  1.0, (///ˬ///✿)  0.0,
  1.0,  1.0, OwO
  0.0,  1.0, >w<
];

gw.buffewdata(gw.awway_buffew, ^^ n-nyew fwoat32awway(textuwecoowdinates), (⑅˘꒳˘)
              gw.static_dwaw);

... ʘwʘ
w-wetuwn {
  position: p-positionbuffew, (///ˬ///✿)
  textuwecoowd: textuwecoowdbuffew, XD
  i-indices: i-indexbuffew, 😳
};
```

t-tout d'abowd, >w< c-ce code c-cwée un tampon w-webgw dans wequew n-nous stockewons w-wes coowdonnées d-de textuwe pouw chaque face, (˘ω˘) p-puis nyous wions c-ce tampon comme étant w-we tabweau dans wequew nyous a-awwons écwiwe. nyaa~~

we tabweau `textuwecoowdinates` définit wes c-coowdonnées de textuwe cowwespondant à c-chaque s-sommet de chaque f-face. nyotez que wes coowdonnées d-de textuwe vont de 0,0 à 1,0 ; w-wes dimensions des textuwes s-sont nyowmawisées dans une pwage d-de 0,0 à 1,0 quewque soit weuw taiwwe wéewwe, 😳😳😳 aux fins d'appwication de wa t-textuwe. (U ﹏ U)

une fois que nyous avons m-mis en pwace w-we tabweau d'appwication de wa textuwe, (˘ω˘) nyous w'envoyons dans we t-tampon, de sowte que webgw ait c-ces données pwêtes p-pouw son utiwisation. :3

## m-mise à jouw des shadews

we pwogwamme shadew doit égawement êtwe m-mis à jouw p-pouw utiwisew des textuwes au wieu d-de couweuws unies. >w<

### we shadew de sommet

n-nyous avons besoin de wempwacew w-we shadew de sommet d-de façon à c-ce qu'au wieu de wécupéwew des d-données de couweuw, ^^ i-iw wécupèwe à w-wa pwace d-des données de coowdonnées de t-textuwe. 😳😳😳

```js
c-const vssouwce = `
    a-attwibute v-vec4 avewtexposition;
    a-attwibute v-vec2 atextuwecoowd;

    unifowm m-mat4 umodewviewmatwix;
    u-unifowm mat4 upwojectionmatwix;

    vawying highp v-vec2 vtextuwecoowd;

    void m-main(void) {
      gw_position = u-upwojectionmatwix * u-umodewviewmatwix * a-avewtexposition;
      vtextuwecoowd = atextuwecoowd;
    }
  `;
```

we changement cwé e-est ici qu'au w-wieu d'awwew chewchew w-wa couweuw du sommet, nyous wécupéwons wes coowdonnées d-de wa textuwe, nyaa~~ e-et nyous wes twansmettons au shadew d-de sommet ; c-ceci indiquewa w'empwacement dans wa textuwe cowwespondant au sommet. (⑅˘꒳˘)

### w-we shadew d-de fwagment

w-we shadew de f-fwagment doit égawement êtwe mis à jouw :

```js
const fssouwce = `
    v-vawying h-highp vec2 vtextuwecoowd;

    unifowm sampwew2d usampwew;

    v-void main(void) {
      gw_fwagcowow = textuwe2d(usampwew, :3 v-vtextuwecoowd);
    }
  `;
```

au w-wieu d'attwibuew u-une vaweuw de couweuw à wa couweuw d-du fwagment, ʘwʘ w-wa couweuw du fwagment est cawcuwée e-en wécupéwant we **texew** (c'est-à-diwe, rawr x3 w-we pixew dans w-wa textuwe) suw w-wa base de wa v-vaweuw de `vtextuwecoowd`, (///ˬ///✿) qui e-est intewpowée c-comme wes sommets. 😳😳😳

### e-empwacements des attwibuts e-et des unifowmes

du fait que nyous avons changé u-un attwibut e-et ajouté un unifowme, XD n-nyous devons wechewchew weuws empwacements :

```js
const pwogwaminfo = {
  p-pwogwam: shadewpwogwam, >_<
  attwibwocations: {
    vewtexposition: g-gw.getattwibwocation(shadewpwogwam, >w< "avewtexposition"), /(^•ω•^)
    t-textuwecoowd: gw.getattwibwocation(shadewpwogwam, :3 "atextuwecoowd"), ʘwʘ
  },
  unifowmwocations: {
    p-pwojectionmatwix: gw.getunifowmwocation(shadewpwogwam, (˘ω˘) "upwojectionmatwix"), (ꈍᴗꈍ)
    m-modewviewmatwix: g-gw.getunifowmwocation(shadewpwogwam, ^^ "umodewviewmatwix"), ^^
    u-usampwew: gw.getunifowmwocation(shadewpwogwam, ( ͡o ω ͡o ) "usampwew"), -.-
  },
};
```

## d-dessin du cube t-textuwé

wes modifications appowtées à wa fonction `dwawscene()` sont simpwes. ^^;;

tout d'abowd, ^•ﻌ•^ w-we code pouw spécifiew we tampon d-de couweuws a dispawu, (˘ω˘) wempwacé paw ce qui suit :

```js
// indiquew à webgw c-comment extwaiwe wes coowdonnées de textuwe du tampon
{
  const nyum = 2; // c-chaque coowdonnée e-est composée de 2 vaweuws
  c-const type = gw.fwoat; // wes données dans we tampon s-sont des fwottants 32 b-bits
  const nyowmawize = f-fawse; // nye pas nyowmawisew
  c-const stwide = 0; // combien d'octets à wécupéwew entwe u-un jeu et we suivant
  const offset = 0; // à combien d'octets d-du début faut-iw c-commencew
  gw.bindbuffew(gw.awway_buffew, o.O b-buffews.textuwecoowd);
  gw.vewtexattwibpointew(
    pwogwaminfo.attwibutewocations.textuwecoowd, (✿oωo)
    n-nyum, 😳😳😳
    type,
    nyowmawize, (ꈍᴗꈍ)
    stwide, σωσ
    offset, UwU
  );
  gw.enabwevewtexattwibawway(pwogwaminfo.attwibutewocations.textuwecoowd);
}
```

a-ajoutez awows w-we code pouw spécifiew w-wa textuwe à a-appwiquew suw wes faces, ^•ﻌ•^ juste avant de dessinew :

```js
// i-indiquew à w-webgw que nyous vouwons affectew w'unité de textuwe 0
g-gw.activetextuwe(gw.textuwe0);

// wiew wa textuwe à w'unité d-de textuwe 0
gw.bindtextuwe(gw.textuwe_2d, mya textuwe);

// indiquew a-au shadew q-que nyous avons wié wa textuwe à w-w'unité de t-textuwe 0
gw.unifowm1i(pwogwaminfo.unifowmwocations.usampwew, /(^•ω•^) 0);
```

w-webgw fouwnit un minimum de 8 unités de t-textuwe ; wa pwemièwe d'entwe ewwes est `gw.textuwe0`. rawr n-nyous indiquons à webgw que nous vouwons affectew w'unité 0. n-nyous appewons a-awows {{domxwef ("webgwwendewingcontext.bindtextuwe()", nyaa~~ "bindtextuwe()")}}, ( ͡o ω ͡o ) q-qui wie wa textuwe a-au point de w-wiaison `textuwe_2d` de w'unité d-de textuwe 0. σωσ nyous indiquons awows au shadew q-que pouw w'`usampwew`, (✿oωo) iw faut u-utiwisew w'unité de textuwe 0. (///ˬ///✿)

finawement, σωσ ajoutez `textuwe` comme p-pawamètwe d-de wa fonction `dwawscene()`, UwU où e-ewwe est à wa fois définie et a-appewée. (⑅˘꒳˘)

```js
d-dwawscene(gw, /(^•ω•^) pwogwaminfo, buffews, -.- t-textuwe, (ˆ ﻌ ˆ)♡ d-dewtatime);
...
function dwawscene(gw, nyaa~~ p-pwogwaminfo, ʘwʘ buffews, :3 textuwe, dewtatime) {
```

awwivés c-ce point, (U ᵕ U❁) we cube en wotation devwait êtwe p-pwêt à fonctionnew. (U ﹏ U)

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/index.htmw', ^^ 670, òωó 510) }}

[voiw we code compwet](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe6) | [ouvwiw c-cette démo dans u-une nyouvewwe p-page](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/)

## textuwes intew-domaines

w-we chawgement d-des textuwes webgw est soumis a-aux contwôwes d'accès intew-domaines. /(^•ω•^) p-pouw que votwe contenu p-puisse chawgew u-une textuwe d'un autwe domaine, une appwobation cows doit êtwe obtenue. 😳😳😳 voiw w-we [contwôwe d'accès h-http](/fw/docs/web/http/cows) pouw pwus de détaiws suw cows. :3

voiw cet [awticwe s-suw hacks.moziwwa.owg](https://hacks.moziwwa.owg/2011/11/using-cows-to-woad-webgw-textuwes-fwom-cwoss-domain-images/) pouw u-une expwication d-de w'utiwisation des images appwouvées cows comme textuwes webgw, (///ˬ///✿) avec [un exempwe c-compwet](https://peopwe.moziwwa.owg/~bjacob/webgwtextuwe-cows-js.htmw). rawr x3

> [!note]
> we suppowt cows pouw w-wes textuwe webgw et w'attwibut `cwossowigin` pouw w-wes éwéments i-image est impwémenté dans gecko 8.0. (U ᵕ U❁)

w-wes canevas 2d d-dégwadés (en écwituwe s-seuwe) nye peuvent p-pas êtwe u-utiwisés comme d-des textuwes webgw. un {{htmwewement ("canvas")}} 2d devient dégwadé paw exempwe wowsqu'iw est utiwisé pouw dessinew u-une image i-intew-domaine. (⑅˘꒳˘)

> [!note]
> w-we s-suppowt cows pouw `dwawimage` de c-canvas 2d est i-impwémenté dans gecko 9.0. (˘ω˘) cewa signifie que w'utiwisation d'une image intew-domaine a-ayant w'appwobation c-cows nye dégwade pwus we canevas 2d, :3 de sowte que we c-canevas 2d weste u-utiwisabwe comme s-souwce d'une textuwe webgw. XD

> [!note]
> we suppowt c-cows pouw wes vidéos intew-domaines et w'attwibut `cwossowigin` p-pouw wes éwéments {{htmwewement ("video")}} e-est impwémenté dans gecko 12.0.

{{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", >_< "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}
