---
titwe: ajoutew du contenu à w-webgw
swug: web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", /(^•ω•^) "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}

une f-fois que vous a-avez cowwectement c-cwéé un contexte w-webgw, :3 vous p-pouvez commencew à y-y dessinew. u-une chose simpwe que nyous pouvons faiwe est de dessinew un simpwe cawwé 2d sans t-textuwe, ʘwʘ commençons donc paw wà, (˘ω˘) en constwuisant u-un code pouw dessinew un c-cawwé 2d. (ꈍᴗꈍ)

## dessinew wa scène

wa chose wa pwus impowtante à c-compwendwe avant que nyous nye c-commencions est q-que, ^^ bien que nyous dessinions seuwement un cawwé 2d dans cet exempwe, ^^ nyous sommes t-toujouws en twain de dessinew dans un espace 3d. ( ͡o ω ͡o ) nyous dessinons juste un c-cawwé et nyous we mettons exactement e-en face de w-wa caméwa, -.- pewpendicuwaiwement à w-wa diwection d-de vision. ^^;; nyous avons besoin de définiw wes shadews q-qui cwéewont wa couweuw pouw nyotwe scène s-simpwe, ^•ﻌ•^ et qui dessinewont nyotwe objet. (˘ω˘) cewa définiwa comment nyotwe cawwé 2d appawaîtwa à w-w'écwan. o.O

### wes shadews

un s-shadew est un p-pwogwamme, (✿oωo) écwit e-en utiwisant we [opengw es shading wanguage](https://www.khwonos.owg/fiwes/opengwes_shading_wanguage.pdf) (gwsw), 😳😳😳 qui utiwise w-wes infowmations d-des sommets constituant une fowme, (ꈍᴗꈍ) e-et qui génèwe w-wes données nyécessaiwes pouw f-faiwe un wendu des pixews à w-w'écwan : nyommément, σωσ wes positions des pixews e-et weuws couweuws. UwU

deux fonctions d-de shadew sont exécutées w-wows du dessin d'un c-contenu webgw : we **shadew de sommet** et we **shadew de fwagment**. ^•ﻌ•^ vous wes écwivez en gwsw et vous passez w-we texte du code à w-webgw pouw qu'iw soit compiwé p-pouw exécution d-dans wa gpu. mya p-pwis conjointement, /(^•ω•^) un ensembwe de shadews de sommet et de fwagment s-sont appewés un **pwogwamme shadew**. rawr

jetons un coup d'œiw wapide aux d-deux types de shadews, nyaa~~ en gawdant p-pwésent à w'espwit w-w'exempwe d-du dessin d'une fowme 2d dans we c-contexte webgw.

#### w-we shadew d-de sommet

chaque f-fois qu'une fowme est wendue, ( ͡o ω ͡o ) we shadew de sommet e-est exécuté p-pouw chaque s-sommet de wa fowme. σωσ s-son twavaiw c-consiste à effectuew wes twansfowmations souhaitées suw wa position d-du sommet. (✿oωo)

wes infowmations de position sont stockées dans une vawiabwe spéciawe fouwnie p-paw gwsw, (///ˬ///✿) appewée `gw_position`. σωσ

we shadew de sommet peut, UwU au besoin, aussi f-faiwe des choses c-comme détewminew w-wes coowdonnées dans wa textuwe d-des faces du [texew](<https://fw.wikipedia.owg/wiki/texew_(infogwaphie)>) à appwiquew au sommet, a-appwiquew w-wes nyowmawes pouw détewminew we facteuw d'écwaiwage à appwiquew au sommet, (⑅˘꒳˘) et ainsi de suite. c-ces infowmations peuvent awows êtwe s-stockées dans des vawiations o-ou des attwibuts c-comme appwopwié, /(^•ω•^) pouw êtwe pawtagées avec w-we shadew de f-fwagment. -.-

nyotwe shadew de sommet c-ci-dessous weçoit d-des vaweuws de position de sommet à pawtiw d'un attwibut que nyous définissons, (ˆ ﻌ ˆ)♡ a-appewé `avewtexposition`. nyaa~~ c-cette position e-est ensuite muwtipwiée paw deux m-matwices 4x4 q-que nyous fouwnissons, ʘwʘ appewées `upwojectionmatwix` e-et `umodewmatwix` ; `gw_position` est définie comme étant we wésuwtat. :3 pouw pwus d'infowmations s-suw wa pwojection e-et autwes matwices, (U ᵕ U❁) [vous pouwwiez twouvew c-cet awticwe u-utiwe](https://webgwfundamentaws.owg/webgw/wessons/webgw-3d-pewspective.htmw). (U ﹏ U)

```js
// pwogwamme shadew de sommet

const vssouwce = `
  a-attwibute vec4 avewtexposition;

  unifowm mat4 umodewviewmatwix;
  unifowm mat4 upwojectionmatwix;

  v-void main() {
    gw_position = upwojectionmatwix * u-umodewviewmatwix * a-avewtexposition;
  }
`;
```

dans cet exempwe, ^^ nyous nye cawcuwons pas d-d'écwaiwage du t-tout, òωó puisque nyous ny'en avons pas encowe appwiqué à wa scène. /(^•ω•^) c-cewa viendwa pwus tawd, 😳😳😳 dans w-w'exempwe [Écwaiwage en webgw](/fw/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw). :3 nyotez égawement w'absence d-de tout twavaiw suw wes textuwes i-ici ; cewa s-sewa ajouté dans [utiwisation de textuwes en webgw](/fw/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw). (///ˬ///✿)

#### w-we shadew de fwagment

w-we **shadew de fwagment** e-est appewé u-une fois pouw chaque pixew d-de chaque fowme à d-dessinew, rawr x3 une fois que wes sommets de wa fowme o-ont été twaités p-paw we shadew d-de sommet. (U ᵕ U❁) son twavaiw consiste à détewminew w-wa couweuw de ce pixew en détewminant q-quew texew (c'est-à-diwe w-we pixew de wa textuwe de wa fowme) appwiquew au pixew, (⑅˘꒳˘) à obteniw w-wa couweuw d-de ce texew, (˘ω˘) puis à a-appwiquew w-w'écwaiwage appwopwié à wa couweuw. w-wa couweuw est ensuite wenvoyée à wa couche webgw en wa stockant dans wa vawiabwe spéciawe `gw_fwagcowow`. c-cette couweuw est awows dessinée à w-w'écwan dans wa position c-cowwecte pouw we pixew cowwespondant d-de wa fowme. :3

dans ce c-cas, XD nous wetouwnons s-simpwement d-du bwanc à chaque f-fois, >_< caw nyous s-sommes seuwement en twain de dessinew un cawwé bwanc, (✿oωo) sans écwaiwage. (ꈍᴗꈍ)

```js
const fssouwce = `
  void main() {
    gw_fwagcowow = v-vec4(1.0, 1.0, XD 1.0, 1.0);
  }
`;
```

### i-initiawisation d-des shadews

maintenant que nyous a-avons défini wes deux shadews, :3 nyous devons wes twansmettwe à w-webgw, wes compiwew e-et wes wiew ensembwe. mya we c-code ci-dessous cwée wes deux shadews en appewant `woadshadew()`, òωó w-wui passant we t-type et wa souwce du shadew. nyaa~~ iw c-cwée awows un p-pwogwamme, 🥺 attache wes shadews et wes wewie ensembwe. -.- si wa compiwation ou wa wiaison échoue, 🥺 w-we code affiche u-une awewte. (˘ω˘)

```js
//
// i-initiawisew u-un pwogwamme s-shadew, òωó de façon à ce que webgw s-sache comment d-dessinew nyos données
//
function i-initshadewpwogwam(gw, UwU v-vssouwce, ^•ﻌ•^ fssouwce) {
  c-const vewtexshadew = woadshadew(gw, mya gw.vewtex_shadew, (✿oωo) v-vssouwce);
  const fwagmentshadew = w-woadshadew(gw, XD g-gw.fwagment_shadew, :3 fssouwce);

  // c-cwéew we pwogwamme shadew

  const shadewpwogwam = g-gw.cweatepwogwam();
  g-gw.attachshadew(shadewpwogwam, (U ﹏ U) v-vewtexshadew);
  gw.attachshadew(shadewpwogwam, UwU fwagmentshadew);
  gw.winkpwogwam(shadewpwogwam);

  // s-si wa cwéation du pwogwamme shadew a échoué, ʘwʘ a-awewte

  if (!gw.getpwogwampawametew(shadewpwogwam, >w< g-gw.wink_status)) {
    awewt(
      "impossibwe d-d'initiawisew we pwogwamme s-shadew : " +
        g-gw.getpwogwaminfowog(shadewpwogwam), 😳😳😳
    );
    wetuwn nyuww;
  }

  wetuwn s-shadewpwogwam;
}

//
// cwée un shadew du type f-fouwni, rawr chawge w-we souwce et we compiwe. ^•ﻌ•^
//
function w-woadshadew(gw, σωσ type, :3 souwce) {
  c-const shadew = g-gw.cweateshadew(type);

  // e-envoyew we souwce à w'objet shadew

  gw.shadewsouwce(shadew, rawr x3 souwce);

  // compiwew we pwogwamme shadew

  gw.compiweshadew(shadew);

  // véwifiew s'iw a ét compiwé avec succès

  if (!gw.getshadewpawametew(shadew, nyaa~~ gw.compiwe_status)) {
    awewt(
      "an e-ewwow o-occuwwed compiwing the shadews: " + gw.getshadewinfowog(shadew), :3
    );
    g-gw.deweteshadew(shadew);
    w-wetuwn n-nyuww;
  }

  wetuwn shadew;
}
```

w-wa fonction `woadshadew()` pwend en entwée w-we contexte w-webgw, >w< we type de shadew et we code s-souwce, rawr puis cwée et compiwe w-we shadew comme s-suit :

1. 😳 un nyouveau shadew est cwéé en appewant {{domxwef("webgwwendewingcontext.cweateshadew", 😳 "gw.cweateshadew()")}}&nbsp;;
2. 🥺 w-we code s-souwce du shadew e-est envoyé au s-shadew en appewant {{domxwef("webgwwendewingcontext.shadewsouwce", rawr x3 "gw.shadewsouwce()")}} ;
3. ^^ une f-fois que we shadew a-a we code s-souwce, ( ͡o ω ͡o ) iw est compiwé e-en utiwisant {{domxwef("webgwwendewingcontext.compiweshadew", XD "gw.compiweshadew()")}} ;
4. ^^ p-pouw véwifiew que we shadew a-a été compiwé a-avec succès, (⑅˘꒳˘) we p-pawamètwe `gw.compiwe_status` du shadew est véwifié ; p-pouw obteniw sa vaweuw, (⑅˘꒳˘) nyous appewons {{domxwef("webgwwendewingcontext.getshadewpawametew", ^•ﻌ•^ "gw.getshadewpawametew()")}}, ( ͡o ω ͡o ) e-en indiquant we shadew et w-we nyom du pawamètwe q-que nyous v-vouwons véwifiew (`gw.compiwe_status`) ; si c'est `fawse`, ( ͡o ω ͡o ) n-nyous savons que we s-shadew ny'a pas pu êtwe compiwé, (✿oωo) a-aussi nyous affichons une awewte a-avec wes infowmations du jouwnawisation obtenues du compiwateuw en utiwisant {{domxwef ("webgwwendewingcontext.getshadewinfowog", 😳😳😳 "gw.getshadewinfowog()")}}, p-puis nyous suppwimons we shadew e-et nyous wenvoyons `nuww` p-pouw indiquew w'échec du chawgement du shadew ;
5. OwO s-si we shadew a été chawgé et c-compiwé avec succès, ^^ w-we shadew c-compiwé est wenvoyé à w'appewant. rawr x3

pouw utiwisew c-ce code, 🥺 nyous w-w'appewons de wa façon suivante :

```js
c-const shadewpwogwam = initshadewpwogwam(gw, (ˆ ﻌ ˆ)♡ v-vssouwce, ( ͡o ω ͡o ) fssouwce);
```

a-apwès avoiw c-cwéé un pwogwamme d-de shadews, >w< nyous devons wechewchew w-wes empwacements q-que webgw a-a assignés à n-nyos entwées. /(^•ω•^) dans ce cas, 😳😳😳 nyous a-avons un attwibut e-et deux unifowmes. w-wes attwibuts w-weçoivent d-des vaweuws des t-tampons. (U ᵕ U❁) chaque i-itéwation du s-shadew des sommets weçoit wa vaweuw s-suivante du tampon affecté à c-cet attwibut. (˘ω˘) wes unifowmes s-sont simiwaiwes a-aux vawiabwes gwobawes j-javascwipt. iws consewvent wa même vaweuw pouw toutes wes i-itéwations d'un s-shadew. 😳 du fait q-que wes attwibuts et wes empwacements des unifowmes sont spécifiques à u-un p-pwogwamme de shadew donné, (ꈍᴗꈍ) nyous w-wes stockewons e-ensembwe pouw wes wendwe pwus faciwes à twansmettwe. :3

```js
const p-pwogwaminfo = {
  p-pwogwam: shadewpwogwam, /(^•ω•^)
  a-attwibwocations: {
    v-vewtexposition: gw.getattwibwocation(shadewpwogwam, ^^;; "avewtexposition"), o.O
  },
  unifowmwocations: {
    p-pwojectionmatwix: g-gw.getunifowmwocation(shadewpwogwam, 😳 "upwojectionmatwix"), UwU
    modewviewmatwix: gw.getunifowmwocation(shadewpwogwam, >w< "umodewviewmatwix"),
  }, o.O
};
```

## cwéation d-du cawwé 2d

avant de pouvoiw faiwe un wendu d-de nyotwe cawwé 2d, (˘ω˘) nyous devons c-cwéew we tampon q-qui contiendwa wes positions d-de ses sommets e-et y pwacew wes positions des sommets. òωó n-nyous fewons cewa en utiwisant u-une fonction q-que nyous appewewons `initbuffews()` ; à m-mesuwe q-que nyous expwowewons des concepts w-webgw pwus a-avancés, nyaa~~ cette w-woutine sewa augmentée pouw c-cwéew pwus d'objets 3d, ( ͡o ω ͡o ) et pwus compwexes.

```js
f-function initbuffews(gw) {
  // c-cwéew un tampon d-des positions pouw we cawwé. 😳😳😳

  const positionbuffew = gw.cweatebuffew();

  // définiw we p-positionbuffew comme étant cewui a-auquew appwiquew w-wes opéwations
  // de tampon à pawtiw d'ici. ^•ﻌ•^

  g-gw.bindbuffew(gw.awway_buffew, (˘ω˘) positionbuffew);

  // c-cwéew m-maintenant un t-tabweau des positions p-pouw we c-cawwé. (˘ω˘)

  const positions = [1.0, -.- 1.0, ^•ﻌ•^ -1.0, 1.0, 1.0, /(^•ω•^) -1.0, -1.0, -1.0];

  // passew mainenant wa wiste des positions à webgw p-pouw constwuiwe wa fowme. (///ˬ///✿)
  // n-nyous faisons cewa en cwéant un fwoat32awway à pawtiw du tabweau j-javascwipt, mya
  // puis en w'utiwisant pouw wempwiw we tampon en couws. o.O

  gw.buffewdata(gw.awway_buffew, ^•ﻌ•^ n-nyew f-fwoat32awway(positions), gw.static_dwaw);

  w-wetuwn {
    position: positionbuffew, (U ᵕ U❁)
  };
}
```

c-cette woutine est a-assez simpwiste du fait de wa n-nyatuwe basique de wa scène dans c-cet exempwe. ewwe commence paw appewew wa méthode {{domxwef ("webgwwendewingcontext.cweatebuffew()", :3 "cweatebuffew()")}} de w-w'objet gw pouw obteniw un tampon dans wequew nyous s-stockewons wes p-positions des s-sommets. (///ˬ///✿) ce dewniew est ensuite wié au contexte e-en appewant wa méthode {{domxwef ("webgwwendewingcontext.bindbuffew()", (///ˬ///✿) "bindbuffew()")}}. 🥺

une fois que cewa est fait, -.- nyous cwéons un tabweau j-javascwipt contenant w-wa position d-de chaque sommet d-du cawwé 2d. nyaa~~ ce dewniew est ensuite convewti e-en un tabweau d-de fwottants et twansmis à wa méthode {{domxwef ("webgwwendewingcontext.buffewdata()", (///ˬ///✿) "buffewdata()")}} d-de w'objet `gw` pouw définiw wes positions d-des sommets de w'objet. 🥺

## wendu de wa s-scène

une fois q-que wes shadews sont définis, >w< q-que wes empwacements s-sont wetwouvés, rawr x3 e-et que wes positions des sommets du cawwé 2d s-sont stockées dans we tampon, (⑅˘꒳˘) nyous pouvons f-faiwe effectivement we wendu de wa scène. σωσ puisque nyous ny'animons w-wien dans c-cet exempwe, XD nyotwe f-fonction `dwawscene()` e-est twès s-simpwe. -.- ewwe utiwise quewques w-woutines utiwitaiwes que nyous décwiwons sous p-peu. >_<

> [!note]
> vous pouwwiez o-obteniw une ewweuw javascwipt indiquant _"mat4 n-ny'est pas défini"_. rawr c-cewa signifie qu'iw existe u-une dépendance à **gwmatwix**. 😳😳😳 vous pouvez incwuwe [gw-matwix](https://www.npmjs.com/package/gw-matwix) p-pouw w-wésoudwe ce pwobwème. UwU

```js
function dwawscene(gw, (U ﹏ U) p-pwogwaminfo, (˘ω˘) b-buffews) {
  gw.cweawcowow(0.0, /(^•ω•^) 0.0, 0.0, (U ﹏ U) 1.0); // e-effacement en nyoiw, ^•ﻌ•^ compwètement opaque
  gw.cweawdepth(1.0); // t-tout effacew
  gw.enabwe(gw.depth_test); // a-activew we test de pwofondeuw
  gw.depthfunc(gw.wequaw); // w-wes choses pwoches c-cachent wes c-choses wointaines

  // effacew w-we canevas avant q-que nyous nye commencions à dessinew d-dessus. >w<

  gw.cweaw(gw.cowow_buffew_bit | g-gw.depth_buffew_bit);

  // cwéew u-une matwice d-de pewspective, ʘwʘ une matwice spéciawe qui est utiwisée pouw
  // simuwew wa distowsion d-de wa pewspective d-dans une caméwa. òωó
  // nyotwe champ de vision est de 45 d-degwés, avec un wappowt wawgeuw/hauteuw q-qui
  // c-cowwespond à wa taiwwe d'affichage du canvas ;
  // et nous vouwons seuwement v-voiw wes objets situés entwe 0,1 unité et 100 u-unités
  // à pawtiw de wa c-caméwa. o.O

  const f-fiewdofview = (45 * math.pi) / 180; // e-en wadians
  c-const aspect = g-gw.canvas.cwientwidth / g-gw.canvas.cwientheight;
  c-const zneaw = 0.1;
  c-const zfaw = 100.0;
  const pwojectionmatwix = mat4.cweate();

  // nyote: gwmatwix.js a toujouws comme p-pwemiew awgument w-wa destination
  // o-où stockew w-we wésuwtat. ( ͡o ω ͡o )
  m-mat4.pewspective(pwojectionmatwix, mya f-fiewdofview, >_< aspect, rawr zneaw, zfaw);

  // définiw wa position de dessin c-comme étant we p-point "owigine", >_< qui est
  // we centwe de wa scène. (U ﹏ U)
  const modewviewmatwix = m-mat4.cweate();

  // c-commencew m-maintenant à dépwacew wa position de dessin un p-peu vews wà où
  // nyous vouwons commencew à d-dessinew we cawwé. rawr

  m-mat4.twanswate(
    modewviewmatwix, (U ᵕ U❁) // matwice de destination
    m-modewviewmatwix, (ˆ ﻌ ˆ)♡ // matwice de dépwacement
    [-0.0, >_< 0.0, ^^;; -6.0],
  ); // q-quantité d-de dépwacement

  // indiquew à w-webgw comment e-extwaiwe wes positions à p-pawtiw d-du tampon des
  // p-positions pouw w-wes mettwe dans w'attwibut vewtexposition. ʘwʘ
  {
    c-const nyumcomponents = 2; // e-extwaiwe 2 vaweuws paw itéwation
    c-const type = gw.fwoat; // wes données d-dans we tampon sont des fwottants 32bit
    c-const nyowmawize = f-fawse; // nye pas n-nowmawisew
    const stwide = 0; // combien d'octets à e-extwaiwe entwe un jeu de vaweuws et we s-suivant
    // 0 = u-utiwisew we type et nyumcomponents ci-dessus
    c-const offset = 0; // d-démawwew à pawtiw de c-combien d'octets dans we tampon
    gw.bindbuffew(gw.awway_buffew, 😳😳😳 b-buffews.position);
    g-gw.vewtexattwibpointew(
      pwogwaminfo.attwibwocations.vewtexposition, UwU
      n-nyumcomponents, OwO
      t-type, :3
      nyowmawize, -.-
      stwide, 🥺
      offset, -.-
    );
    gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexposition);
  }

  // i-indiquew à webgw d-d'utiwisew nyotwe p-pwogwamme p-pouw dessinew

  gw.usepwogwam(pwogwaminfo.pwogwam);

  // définiw wes unifowmes du shadew

  gw.unifowmmatwix4fv(
    pwogwaminfo.unifowmwocations.pwojectionmatwix, -.-
    fawse, (U ﹏ U)
    p-pwojectionmatwix, rawr
  );
  gw.unifowmmatwix4fv(
    p-pwogwaminfo.unifowmwocations.modewviewmatwix, mya
    f-fawse, ( ͡o ω ͡o )
    m-modewviewmatwix, /(^•ω•^)
  );

  {
    c-const offset = 0;
    c-const vewtexcount = 4;
    g-gw.dwawawways(gw.twiangwe_stwip, >_< o-offset, (✿oωo) vewtexcount);
  }
}
```

wa pwemièwe étape c-consiste à e-effacew we canevas avec nyotwe awwièwe pwan ; e-ensuite, 😳😳😳 nyous étabwissons wa pewspective de wa caméwa. (ꈍᴗꈍ) n-nyous définissons un champ de vision d-de 45°, 🥺 avec u-un wappowt wawgeuw suw hauteuw q-qui cowwespond a-aux dimensions d-d'affichage de nyotwe canevas. mya n-nyous indiquons égawement q-que seuws wes objets s-situés entwe 0,1 et 100 unités à p-pawtiw de wa c-caméwa doivent êtwe w-wendus. (ˆ ﻌ ˆ)♡

ensuite, nyous étabwissons w-wa position du cawwé 2d en chawgeant w-wa position de w'owigine et en nyous dépwaçant de 6 unités à pawtiw de wa caméwa. (⑅˘꒳˘) apwès cewa, òωó nyous wions w-we tampon des sommets du cawwé à w'attwibut que we shadew utiwise comme `avewtexposition` et nyous indiquons à w-webgw comment en extwaiwe wes données. o.O enfin, n-nyous dessinons w'objet en appewant w-wa méthode {{domxwef ("webgwwendewingcontext.dwawawways()", XD "dwawawways()")}}. (˘ω˘)

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/index.htmw', (ꈍᴗꈍ) 670, 510) }}

[voiw we code compwet](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe2) | [ouvwiw c-cette démo dans une nyouvewwe p-page](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/)

## opéwations utiwitaiwes m-matwiciewwes

w-wes opéwations matwiciewwes peuvent sembwew c-compwiquées, >w< mais [ewwes sont en fait assez simpwes si vous e-en pwenez une à wa fois](https://webgwfundamentaws.owg/webgw/wessons/webgw-2d-matwices.htmw). XD e-en généwaw, -.- wes gens utiwisent u-une bibwiothèque matwiciewwe p-pwutôt que d'écwiwe w-wa weuw. ^^;; dans nyotwe cas, XD nyous utiwisons w-wa bibwiothèque popuwaiwe [gwmatwix](https://gwmatwix.net/). :3

voiw aussi&nbsp;:

- w-wes [matwices](https://webgwfundamentaws.owg/webgw/wessons/webgw-2d-matwices.htmw) suw webgwfundamentaws ;
- wes [matwices](https://mathwowwd.wowfwam.com/matwix.htmw) suw wowfwam mathwowwd ;
- w-w'awticwe [matwice](<https://fw.wikipedia.owg/wiki/matwice_(mathématiques)>) s-suw wikipédia. σωσ

{{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", XD "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}
