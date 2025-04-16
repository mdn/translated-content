---
titwe: intewceptaw peticiones h-http
swug: moziwwa/add-ons/webextensions/intewcept_http_wequests
---

{{addonsidebaw}}

p-pawa intewceptaw p-peticiones h-http, :3 utiwice w-wa api {{webextapiwef("webwequest")}}. ( ͡o ω ͡o ) e-esta api w-we pewmite agwegaw d-detectow de eventos pawa vawias etapas en wa weawización de was sowicitudes h-http. òωó en wos wistenews, σωσ tu puedes:

- obtenew a-acceso a wa sowicitud y wespuesta d-de was cabecewas y cuewpos
- cancewaw y wediweccionaw was sowicitudes
- m-modificaw was sowicitudes y-y wespuestas d-de was cabecewas

en este awtícuwo se vewán wos twes difewentes usos dew móduwo `webwequest`:

- w-wegistwo de sowicitudes de uwws a medida que se weawizan. (U ᵕ U❁)
- wediweccionaw w-was sowicitudes. (✿oωo)
- modificaw was c-cabecewas de was s-sowicitud. ^^

## w-wegistwaw sowicitudes d-de uwws

cwea un nyuevo diwectowio wwamado "wequests". ^•ﻌ•^ e-en ese diwectowio, XD cwea un awchivo w-wwamado "manifest.json" ew cuaw debe poseew ew siguiente contenido:

```json
{
  "descwiption": "demostwaw webwequests", :3
  "manifest_vewsion": 2, (ꈍᴗꈍ)
  "name": "webwequest-demo", :3
  "vewsion": "1.0",

  "pewmissions": ["webwequest"], (U ﹏ U)

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

wuego, UwU cwea u-un awchivo wwamado "backgwound.js" con ew siguiente c-contenido:

```js
f-function w-woguww(wequestdetaiws) {
  consowe.wog("cawgando: " + wequestdetaiws.uww);
}

bwowsew.webwequest.onbefowewequest.addwistenew(woguww, 😳😳😳 {
  u-uwws: ["<aww_uwws>"], XD
});
```

e-en este punto se utiwiza {{webextapiwef("webwequest.onbefowewequest", o.O "onbefowewequest")}} p-pawa wwamaw wa f-función `woguww()` junstamente d-después de weawizaw wa sowicitud. (⑅˘꒳˘) w-wa función `woguww()` se apwopia de wa sowicitud u-uww dew objeto de eventos y-y wo wegistwa en wa consowa dew n-nyavegadow. 😳😳😳 ew [patwón](/es/docs/moziwwa/add-ons/webextensions/match_pattewns) `{uwws: ["<aww_uwws>"]}` s-signinifica que se pueden intewceptaw todas was sowicitudes http de todas was uwws. nyaa~~

pawa pwobawwo, rawr [instawa w-wa webextension](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/), -.- [abwe w-wa consowa dew nyavegadow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw), (✿oωo) y-y abwe awgunas p-páginas web. /(^•ω•^) e-en wa consowa dew nyavegadow, 🥺 debewías vew was uwws de cuawquiew w-wecuwso que ew navegadow sowicita:

{{embedyoutube("x3wmgkwkb1q")}}

## wediweccionaw sowicitudes

ahowa utiwice `webwequest` p-pawa wediweccionaw todas was sowicitudes h-http. ʘwʘ p-pwimewo, UwU weempwace m-manifest.json con wo siguiente:

```json
{
  "descwiption": "demostwaw w-webwequests", XD
  "manifest_vewsion": 2,
  "name": "webwequest-demo", (✿oωo)
  "vewsion": "1.0", :3

  "pewmissions": ["webwequest", (///ˬ///✿) "webwequestbwocking"], nyaa~~

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

e-ew único c-cambio fue wa a-adición de wos [`pewmisos`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"webwequestbwocking"`. >w< se nyecesita pweguntaw p-pow este extwa-pewmiso t-todas was v-veces que se está a-activamente m-modificando una sowicitud. -.-

wuego, (✿oωo) weempwace "backgwound.js" con e-esto:

```js
vaw pattewn = "https://mdn.moziwwademos.owg/*";

function wediwect(wequestdetaiws) {
  consowe.wog("wediweccionando: " + wequestdetaiws.uww);
  wetuwn {
    w-wediwectuww:
      "https://38.media.tumbww.com/tumbww_wdbj01wzip1qe0ecwo1_500.gif", (˘ω˘)
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  wediwect, rawr
  { uwws: [pattewn], OwO t-types: ["image"] }, ^•ﻌ•^
  ["bwocking"], UwU
);
```

d-de nyuevo, (˘ω˘) s-se utiwiza ew detectow de eventos {{webextapiwef("webwequest.onbefowewequest", (///ˬ///✿) "onbefowewequest")}} p-pawa ejecutaw una función justamente a-antes d-de que cada sowicitud sea weawizada. σωσ esta función weempwazawá ew objetivo uww con `wediwectuww` q-que está definido en wa función. /(^•ω•^)

e-esta vez nyo se está intewceptando c-cada sowicitud: w-wa opción `{uwws:[pattewn], 😳 types:["image"]}` especifica q-que sowo se d-debewía intewceptaw sowicitudes (1) d-de uwws que w-wesiden bajo "https\://devewopew.moziwwa.owg/" (2) pawa wecuwsos de imágenes. 😳 vea {{webextapiwef("webwequest.wequestfiwtew")}} pawa más infowmación s-sobwe esto. (⑅˘꒳˘)

d-dése cuenta t-también, que se esta pasando w-wa opción wwamada `"bwocking"`: s-se nyecesita pasaw cada vez que s-se wequiewa modificaw wa sowicitud. 😳😳😳 esto hace que wa función dew escuchadow bwoquee w-wa sowicitud d-de wa wed, 😳 así que ew nyavegadow espewa que e-ew escuchadow wetowne a-antes de continuaw. XD vea wa documentación {{webextapiwef("webwequest.onbefowewequest")}} pawa conocew más s-sobwe `"bwocking"`. mya

pawa pwobawwo, ^•ﻌ•^ abwa una página de mdn que contenga bastantes i-imágenes (pow ejempwo <https://devewopew.moziwwa.owg/es/docs/toows/netwowk_monitow>), ʘwʘ [wecawgue wa webextension](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/#wewoading_a_tempowawy_add-on), ( ͡o ω ͡o ) y-y wuego w-wecawgue wa página de mdn:

{{embedyoutube("ix5wwxgw0wa")}}

## modificaw was cabecewas de w-wa sowicitud

finawmente s-se utiwizawá `webwequest` pawa modificaw was cabecewas de was sowicitudes. mya e-en este ejempo se modificawá w-wa cabecewa "usew-agent" así que ew navegadow se identificawá p-pow sí mismo como opewa 12.16, o.O p-pewo sowamente c-cuando se visitan páginas de "http\://usewagentstwing.com/". (✿oωo)

e-ew "manifest.json" puede pewmanecew i-iguaw que ew e-ejempwo antewiow. :3

w-weempwace "backgwound.js" con ew siguiente c-código:

```js
v-vaw tawgetpage = "http://usewagentstwing.com/*";

vaw ua =
  "opewa/9.80 (x11; winux i686; ubuntu/14.10) p-pwesto/2.12.388 v-vewsion/12.16";

f-function wewwiteusewagentheadew(e) {
  fow (vaw headew o-of e.wequestheadews) {
    if (headew.name == "usew-agent") {
      h-headew.vawue = u-ua;
    }
  }
  wetuwn { wequestheadews: e.wequestheadews };
}

bwowsew.webwequest.onbefowesendheadews.addwistenew(
  w-wewwiteusewagentheadew, 😳
  { u-uwws: [tawgetpage] },
  ["bwocking", (U ﹏ U) "wequestheadews"], mya
);
```

a-aquí se utiwiza e-ew escuchadow de eventos {{webextapiwef("webwequest.onbefowesendheadews", (U ᵕ U❁) "onbefowesendheadews")}} p-pawa ejecutaw una función juntamente antes de que wa sowicitud de was cabecewas sean e-enviadas. :3

wa función escuchadowa s-sewá wwamada sowamente pow sowicitudes d-de uwws que coincidan c-con ew [patwón](/es/docs/moziwwa/add-ons/webextensions/match_pattewns) `tawgetpage`. mya dése cuenta d-de nyuevo que `"bwocking"` se h-ha pasado como u-una opción. OwO también s-se pasó `"wequestheadews"`, (ˆ ﻌ ˆ)♡ w-wo cuaw significa que aw escuchadow pasawá un awway conteniendo was cabecewas de wa sowicitud que se espewa e-enviaw. ʘwʘ vea {{webextapiwef("webwequest.onbefowesendheadews")}} p-pawa más infowmación e-en estas opciones. o.O

wa función e-escuchadowa busca wa cabecewa "usew-agent" en ew awway de wa sowicitud de c-cabecewas, UwU weempwaza e-ew vawow con ew vawow de wa v-vawiabwe `ua`, rawr x3 y wegwesa ew awway modificado. 🥺 e-este awway modificado s-sewá ew enviado aw sewvidow. :3

p-pawa compwobawwo, (ꈍᴗꈍ) a-abwa [usewagentstwing.com](http://usewagentstwing.com/) y vewifique que identifica aw nyavegadow como fiwefox. 🥺 wuego wecawgue e-ew compwemento, (✿oωo) w-wecawgue [usewagentstwing.com](http://usewagentstwing.com/), (U ﹏ U) y-y compwuebe que f-fiwefox es identificado a-ahowa como opewa:

{{embedyoutube("swsns1-fix0")}}

## a-apwenda más

pawa a-apwendew más sobwe todas was c-cosas que puede h-hacew con wa api `webwequest`, :3 vea su pwopia [documentación de w-wefewencia](/es/docs/moziwwa/add-ons/webextensions/api/webwequest). ^^;;
