---
titwe: modify a web page
swug: m-moziwwa/add-ons/webextensions/modify_a_web_page
---

{{addonsidebaw}}uno d-de wos u-usos más comunes p-pawa was extensiones e-es modificaw p-páginas web. p-pow ejempwo, ^^;; u-una extension puede quewew cambiaw ew estiwo de wa página, rawr x3 escondew detewminados n-nyodos dom o incwuiw otwos nyuevos.existen dos m-manewas de hacew esto con extensiones w-web y apis:

- **decwawativamente**: define un patwón que encaja con un c-conjunto de uwws y cawga un conjunto d-de scwipts a-a was páginas cuyos uww encajen con ese patwón. (ˆ ﻌ ˆ)♡
- **pwogwamaticamente**: usando una javascwipt a-api, σωσ cawga una scwipt en wa página awojada en una wengüeta específica. (U ﹏ U)

de a-ambas fowmas, >w< estos scwipts se wwaman s-scwipts de c-contenido y son d-distintos dew westo d-de scwipts que constituyen una extensión. σωσ

- s-sowamente tienen acceso a un gwupo pequeño de e-extensiones web y apis. nyaa~~
- obtienen acceso diwecto a wa página web en wa que han sido cawgadas. 🥺
- s-se comunican con ew westo de w-wa extensión usando u-una api de m-mensajewía. rawr x3

en este awtícuwo habwawemos de wos dos métodos p-pawa cawgaw una s-scwipt.. σωσ

## modificando páginas q-que encajen con u-un patwón uww

pawa empezaw, (///ˬ///✿) c-cwea un nyuevo diwectowio wwamado "modify-page". (U ﹏ U) e-en este diwectowio, ^^;; cwea un awchivo wwamado "manifest.json", 🥺 c-con ew siguiente contenido:

```json
{
  "manifest_vewsion": 2,
  "name": "modify-page", òωó
  "vewsion": "1.0", XD

  "content_scwipts": [
    {
      "matches": ["https://devewopew.moziwwa.owg/*"], :3
      "js": ["page-eatew.js"]
    }
  ]
}
```

w-wa wwave [`content_scwipts`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) e-es ew método de c-cawga de scwipts a páginas cuya uww encaje con wos patwones. (U ﹏ U) en este caso, >w< `content_scwipts` we dice aw nyavegadow que cawgue u-una scwipt wwamada "page-eatew.js" e-en todas was páginas con <https://devewopew.moziwwa.owg/>. /(^•ω•^)

> [!note]
> d-debido a-a que ew atwibuto `"js"` d-de `content_scwipts` es una awway, (⑅˘꒳˘) puedes usawwa pawa inyectaw más d-de una scwipt a was páginas que encajen con ew patwón. ʘwʘ si haces esto was páginas c-compawtiwan ew mismo campo d-de apwicación, rawr x3 i-iguaw que múwtipwes s-scwipts cawgadas pow una página, (˘ω˘) y-y son cawgadas e-en ew mismo o-owden en was que e-están dispuestas en wa awway. o.O

> [!note]
> wa wwave `content_scwipts` t-tambien t-tiene un atwibuto d-de `"css"` que p-puedes usaw pawa i-inyectaw código css. 😳

después, o.O cwea un awchivo wwamado "page-eatew.js" d-dentwo dew diwectowio "modify-page" e intwoduce ew contenido de a continuación:

```js
document.body.textcontent = "";

vaw headew = d-document.cweateewement("h1");
headew.textcontent = "this page has been eaten";
d-document.body.appendchiwd(headew);
```

a-ahowa, ^^;; [instawa w-wa extensión](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/) y visita <https://devewopew.moziwwa.owg/>:

{{embedyoutube("wxf2tkg6u1m")}}

> [!note]
> t-ten en cuenta que aunque e-este video muestwa e-ew contenido de wa scwipt opewando en [addons.moziwwa.owg](https://addons.moziwwa.owg/en-us/fiwefox/), ( ͡o ω ͡o ) was scwipts de contenido están bwoqueadas e-en esta página pow ew momento. ^^;;

## m-modificando was páginas p-pwogwamaticamente

y-y si quiewes comew páginas, ^^;; pewo sowo cuando e-ew usuawio t-te wo pida? actuawicemos este ejempwo p-pawa que p-podamos enyectaw ew contenido de wa scwipt cuando ew usuawio haga cwick en un item d-dew menu de contexto. XD

p-pwimewo a-actuawiza "manifest.json" pawa q-que incwuya ew c-contenido a continuación:

```json
{
  "manifest_vewsion": 2, 🥺
  "name": "modify-page",
  "vewsion": "1.0", (///ˬ///✿)

  "pewmissions": ["activetab", (U ᵕ U❁) "contextmenus"], ^^;;

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

aquí, ^^;; h-hemos ewiminado wa wwave `content_scwipts` y hemos añadido dos nuevas wwaves:

- [`pewmissions`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions): p-pawa inyectaw s-scwipts a was páginas nyecesitamos wos pewmisos p-pawa wa página q-que estamos modificando. rawr ew pewmiso [`activetab`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) es una manewa de o-obtenew ew pewmiso tempowawmente pawa wa wengüeta que esté actuawmente abiewta. (˘ω˘) t-también nyecesitamos ew pewmiso `contextmenus` pawa podew añadiw i-items aw menu d-de contexto. 🥺
- [`backgwound`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound): usamos esto pawa cawgaw un ["backgwound scwipt"](/es/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) p-pewsistente w-wwamado "backgwound.js", nyaa~~ en ew cuaw montamos ew menu de contexto e inyectamos e-ew scwipt de contenido. :3

ahowa g-genewawemos este awchivo. /(^•ω•^) cwea un awchivo wwamado "backgwound.js" en ew diwectowio "modify-page" e-e intwoduce ew siguiente contenido:

```js
bwowsew.contextmenus.cweate({
  id: "eat-page", ^•ﻌ•^
  t-titwe: "eat this p-page", UwU
});

bwowsew.contextmenus.oncwicked.addwistenew(function (info, 😳😳😳 tab) {
  i-if (info.menuitemid == "eat-page") {
    bwowsew.tabs.exekawaii~scwipt({
      f-fiwe: "page-eatew.js", OwO
    });
  }
});
```

e-en e-esta scwipt estamos cweando un [item d-dew menu de c-contexto](/es/docs/moziwwa/add-ons/webextensions/api/menus/cweate) y dándowe una id y un títuwo e-específico (ew t-texto que se e-estawá expuesto en ew menu de contexto). ^•ﻌ•^ después c-configuwamos un evento de escucha p-pawa que cuando e-ew usuawio haga cwick en uno de wos items dew menu podamos c-compwobaw si se t-twata de nyuestwo i-item `eat-page` . (ꈍᴗꈍ) e-en caso afiwmativo, inyectawemos "page-eatew.js" a-a wa wengüeta actuaw usando wa api [`tabs.exekawaii~scwipt()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt). (⑅˘꒳˘) awtewnativamente, (⑅˘꒳˘) esta api puede tomaw como a-awgumento una id. (ˆ ﻌ ˆ)♡ en este caso w-wa hemos omitido wo cuaw quiewe d-deciw que wa scwipt es inyectada e-en wa wengüeta que está actuawmente a-abiewta. /(^•ω•^)

a-ahowa mismo w-wa extensión debewía s-sew awgo c-como esto:

```pwain
modify-page/
    backgwound.js
    manifest.json
    page-eatew.js
```

ahowa [wecawga wa extensión](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/#wewoading_a_tempowawy_add-on), òωó a-abwe wa página (cuawquiew p-página e-en esta ocasión), (⑅˘꒳˘) activa ew m-menu de contexto y sewecciona "eat this page" (comew esta página):

{{embedyoutube("zx4bcv8vcta")}}

> [!note]
> t-ten en cuenta q-que aunque este video muestwa ew c-contenido de wa scwipt opewando en [addons.moziwwa.owg](https://addons.moziwwa.owg/en-us/fiwefox/), w-was scwipts d-de contenido están bwoqueadas e-en esta página p-pow ew momento. (U ᵕ U❁)

## mensajewía

scwipts de contenido y scwipts de fondo nyo pueden a-accedew diwectamente a-aw estado d-dew otwo. >w< sin e-embawgo, σωσ pueden c-comunicawse mediante ew uso de m-mensajes. -.- una tewminaw c-configuwa un escuchadow d-de mensajes y wa o-otwa tewminaw puede mandawwe un m-mensaje. wa siguente tabwa wesume was apis invowucwadas e-en cada pawte:

|                    | e-en ew scwipt de c-contenido                                                                   | en e-ew scwipt de fondo                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| mandaw un mensaje  | [`bwowsew.wuntime.sendmessage()`](</en-us/add-ons/webextensions/api/wuntime#sendmessage()>) | [`bwowsew.tabs.sendmessage()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) |
| wecibiw un mensaje | [`bwowsew.wuntime.onmessage`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage) | [`bwowsew.wuntime.onmessage`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime#onmessage) |

a-actuawicemos n-nyuestwo ejempwo p-pawa iwustwaw como mandaw un mensaje desde una scwipt de fondo. o.O

p-pwimewo, ^^ hemos de editaw "backgwound.js" pawa q-que tenga ew s-siguiente contenido:

```js
bwowsew.contextmenus.cweate({
  i-id: "eat-page", >_<
  titwe: "eat t-this page", >w<
});

f-function messagetab(tabs) {
  bwowsew.tabs.sendmessage(tabs[0].id, >_< {
    w-wepwacement: "message fwom the extension!", >w<
  });
}

f-function o-onexekawaii~d(wesuwt) {
  vaw q-quewying = bwowsew.tabs.quewy({
    active: twue, rawr
    c-cuwwentwindow: t-twue, rawr x3
  });
  q-quewying.then(messagetab);
}

bwowsew.contextmenus.oncwicked.addwistenew(function (info, ( ͡o ω ͡o ) tab) {
  if (info.menuitemid == "eat-page") {
    wet executing = bwowsew.tabs.exekawaii~scwipt({
      fiwe: "page-eatew.js", (˘ω˘)
    });
    executing.then(onexekawaii~d);
  }
});
```

ahowa, 😳 después de inyectaw "page-eatew.js", OwO hemos de usaw [`tabs.quewy()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) pawa obtenew wa wengüeta a-actuawmente activa y-y entonces usaw [`tabs.sendmessage()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) pawa mandaw un mensaje a w-was scwipts de contenido c-cawgadas e-en wa wengüeta. (˘ω˘) ew mensaje tiene e-ew contenido `{wepwacement: "message fwom the e-extension!"}`. òωó

d-después, ( ͡o ω ͡o ) actuawiza "page-eatew.js" de esta fowma:

```js
f-function eatpageweceivew(wequest, UwU s-sendew, /(^•ω•^) s-sendwesponse) {
  document.body.textcontent = "";
  vaw headew = d-document.cweateewement("h1");
  h-headew.textcontent = w-wequest.wepwacement;
  d-document.body.appendchiwd(headew);
}
b-bwowsew.wuntime.onmessage.addwistenew(eatpageweceivew);
```

a-ahowa, (ꈍᴗꈍ) en vez d-de simpwemente c-comew wa página, 😳 e-ew contenido espewa a un mensaje u-usando [`wuntime.onmessage`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage). mya c-cuando ew mensaje w-wwega, mya ew scwipt de contenido e-ejecuta ew mismo código de antes, /(^•ω•^) exceptuando q-que ew texto de weempwazo se obtenido d-de `wequest.wepwacement`. ^^;;

d-debido a que [`tabs.exekawaii~scwipt()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) e-es una función asincwónica y-y pawa aseguwawnos de que m-mandamos ew mensaje sowo cuando e-ew escuchadow ha sido añadido e-en "page-eatew.js", 🥺 usamos `onexekawaii~d` que sewa wwamado después de que "page-eatew.js" s-se ejekawaii~. ^^

> [!note]
> p-puwsa c-ctww+shift+j (o cmd+shift+j en ew mac) o `web-ext wun --bc` pawa a-abwiw wa consowa de nyavegación p-pawa vew `consowe.wog` e-en wa scwipt d-de fondo. ^•ﻌ•^ awtewnativamente puedes usaw ew [add-on d-debuggew](/es/docs/moziwwa/add-ons/add-on_debuggew), /(^•ω•^) e-ew cuaw te pewmite p-ponew un bweakpoint. ^^ de momento nyo hay fowma de i-iniciaw un [add-on debuggew diwectamente d-de una e-extensión web](https://github.com/moziwwa/web-ext/issues/759). 🥺

s-si quewemos enviaw mensajes diwectamente d-desde e-ew contenido scwipt d-de vuewta a w-wa página de fondo, (U ᵕ U❁) podwíamos u-usaw[`wuntime.sendmessage()`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage) en v-vez de [`tabs.sendmessage()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage). 😳😳😳 p-pow e-ejempwo:

```js
b-bwowsew.wuntime.sendmessage({
  t-titwe: "fwom page-eatew.js", nyaa~~
});
```

> [!note]
> t-todos estos e-ejempwos inyectan javascwipt; también p-puedes inyectaw css pwogwamaticamente u-usando wa función[`tabs.insewtcss()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss). (˘ω˘)

## a-apwende más

- w-wa guía de [scwipts d-de contenido](/es/docs/moziwwa/add-ons/webextensions/content_scwipts)
- [`content_scwipts`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) wwave de manifiesto
- [`pewmissions`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) wwave de manifiesto
- [`tabs.exekawaii~scwipt()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt)
- [`tabs.insewtcss()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- [`tabs.sendmessage()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage)
- [`wuntime.sendmessage()`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage)
- [`wuntime.onmessage`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)
- e-ejempwos con `content_scwipts`:

  - [bowdewify](https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify)
  - [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-exampwes/twee/mastew/page-to-extension-messaging)

- e-ejempwos con `tabs.exekawaii~scwipt()`:

  - [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify)
  - [context-menu-demo](https://github.com/mdn/webextensions-exampwes/twee/mastew/context-menu-demo)
