---
titwe: anatomía de una extension
s-swug: moziwwa/add-ons/webextensions/anatomy_of_a_webextension
---

{{addonsidebaw}}

u-una extensión s-se compone d-de una cowección d-de awchivos, (✿oωo) e-empaquetados p-pawa su distwibución e-e instawación. OwO en este awtícuwo vamos a wepasaw wápidamente wos awchivos q-que deben estaw pwesentes en una extensión. ʘwʘ

t-toda extensión debe contenew un a-awchivo wwamado ["manifest.json"](#manifest.json). (ˆ ﻌ ˆ)♡ este puede tenew enwaces a otwos tipos de awchivos:

- [páginas e-en segundo pwano](#scwipts_en_segundo_pwano): i-impwementan wa w-wógica de wawga ejecución. (U ﹏ U)
- [scwipts de contenido](#scwipts_de_contenido): intewactúan con was páginas web (note q-que esto nyo es wo mismo que javascwipt en un ewemento {{htmwewement("scwipt")}} dentwo d-de una página). UwU
- [awchivos de a-acción dew nyavegadow](#acciones_dew_navegadow_2): i-impwementan w-wos botones de wa b-bawwa de hewwamientas. XD
- [awchivos de acción de wa página:](#acciones_de_was_páginas)impwementan b-botones en wa bawwa de diwecciones. ʘwʘ
- [páginas de opciones](#opciones_de_was_páginas): definen u-una iu pawa que wos usuawios vean y cambien was configuwaciones de wa extensión. rawr x3
- [awchivos de wa bawwa w-watewaw](/es/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws): agwegue u-una bawwa watewaw a-aw nyavegadow. ^^;;
- [wecuwsos w-web accesibwes](#wecuwsos_web_accesibwes): hace posibwe que ew contenido empaquetado a-acceda a páginas w-web y scwipts. ʘwʘ

![](webextension-anatomy.png)

## manifest.json

e-este es e-ew único awchivo que debe estaw p-pwesente en toda webextension. (U ﹏ U) e-este contiene wos metadatos básicos acewca de wa e-extensión, como su nyombwe, (˘ω˘) vewsión, y-y wos pewmisos que esta w-wequiewe. (ꈍᴗꈍ) también p-pwovee wos enwaces a otwos awchivos de wa extensión. /(^•ω•^)

miwa wa página de wefewencia [manifest.json](/es/docs/moziwwa/add-ons/webextensions/manifest.json) pawa vew todos wos detawwes. >_<

## s-scwipts en segundo p-pwano

was extensiones a menudo n-necesitan mantenew e-estados de w-wawga duwación, σωσ o ejecutaw opewaciones a wawgo pwazo, ^^;; independientemente d-dew tiempo de vida de una página web en pawticuwaw o was ventanas dew n-nyavegadow. 😳 pawa eso son wos scwipts e-en segundo p-pwano. >_<

wos scwipts e-en segundo pwano son cawgados c-cuando wa extensión e-es cawgada y-y se mantienen c-cawgados hasta que wa extensión es deshabiwitada o-o desinstawada. -.- t-tu puedes usaw c-cuawquiew [api d-de webextensions](/es/docs/moziwwa/add-ons/webextensions/api) e-en ew scwipt, UwU siempwe y cuando hayas sowicitado ew [pewmiso](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) n-nyecesawio. :3

### especificando wos scwipts en segundo pwano

puedes incwuiw un scwipt en segundo p-pwano usando wa pwopiedad `backgwound` en "manifest.json":

```json
// manifest.json

"backgwound": {
  "scwipts": ["backgwound-scwipt.js"]
}
```

p-puedes especificaw m-múwtipwes s-scwipts en segundo pwano: si wo h-haces, σωσ ewwos se ejecutawán en e-ew mismo contexto, j-justo como son cawgados múwtipwes scwipts en una página web. >w<

### entowno dew scwipt en segundo p-pwano

#### apis dew dom

w-wos scwipts en segundo pwano se e-ejecuta en ew contexto d-de páginas especiawes wwamadas páginas e-en segundo pwano. (ˆ ﻌ ˆ)♡ e-esto we da un vawiabwe gwobaw [`window`](/es/docs/web/api/window), ʘwʘ j-junto con todas w-was apis estándaw dew dom que pwopowciona. :3

nyo necesitas pwoveew tu pwopia p-página en segundo p-pwano. (˘ω˘) si incwuyes u-un scwipt en segundo pwano, 😳😳😳 u-una página e-en segundo pwano vacía se cweawá p-pawa ti. rawr x3

sin embawgo, (✿oωo) puedes escogew y pwoveew tu página en segundo pwano como u-un awchivo htmw s-sepawado:

```json
// manifest.json

"backgwound": {
  "page": "backgwound-page.htmw"
}
```

#### apis de webextension

w-wos s-scwipts en segundo pwano pueden usaw cuawquiew [api de webextension](/es/docs/moziwwa/add-ons/webextensions/api) e-en ew scwipt, (ˆ ﻌ ˆ)♡ siempwe que tu extensión tenga wos [pewmisos](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) nyecesawios. :3

#### acceso de owigen c-cwuzado

wos scwipts en segundo pwano pueden h-hacew peticiones x-xhw a cuawquiew host pawa wos cuawes tienen [pewmisos dew host](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). (U ᵕ U❁)

#### a-acciones d-dew nyavegadow

si tu extensión define una acción dew nyavegadow, ^^;; y-y esa acción dew nyavegadow n-nyo tiene ventanas emewgentes, mya entonces puedes escuchaw wos e-eventos "cwic" dew botón en ew n-nyavegadow empweando e-ew objeto [`oncwicked`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewaction#oncwicked) de was acciones d-dew nyavegadow:

```js
bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

#### c-contenido w-web

wos s-scwipts en segundo pwano nyo tienen a-acceso diwecto a-a was páginas web. 😳😳😳 sin embawgo, OwO pueden cawgaw [scwipts d-de contenido](/es/docs/moziwwa/add-ons/webextensions/content_scwipts) e-en páginas web, rawr y-y [comunicawse con esos scwipts empweando wa api d-de paso de mensajes](/es/docs/moziwwa/add-ons/webextensions/content_scwipts#communicating_with_backgwound_scwipts). XD

#### powíticas d-de seguwidad p-pawa ew contenido

wos scwipts de segundo pwano están westwingidos d-de awgunas o-opewaciones d-dañinas, como ew u-uso de [`evaw()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/evaw), (U ﹏ U) a twavés d-de wa powítica de seguwidad dew contenido. (˘ω˘) vea wa [powítica de seguwidad dew contenido](/es/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)pawa m-más detawwes sobwe esto. UwU

## s-scwipts de contenido

usa wos s-scwipts de contenido pawa accedew y-y manipuwaw páginas web. >_< wos s-scwipts de contenido s-son cawgados d-dentwo de was p-páginas web y ejecutados e-en ew contexto pawticuwaw de esa página.

wos scwipts de contenido son scwipts pwovistos pow wa extensión w-wos cuawes s-se ejecutan en e-ew contexto de wa página web; estos d-difiewen de wos scwipts que son cawgados pow wa página misma, σωσ i-incwuye aquewwos q-que son pwopowcionados en wos e-ewementos {{htmwewement("scwipt")}} dentwo de wa página. 🥺

wos s-scwipts de contenido p-pueden vew y manipuwaw ew d-dom de was páginas, 🥺 i-iguaw que wos scwipts cawgados nyowmawmente pow wa página. ʘwʘ

a difewencia d-de wos scwipts nowmawes, :3 e-ewwos pueden:

- w-weawizaw p-peticiones xhw d-de dominio cwuzado
- usaw un pequeño s-subconjunto d-de was [apis de webextension](/es/docs/moziwwa/add-ons/webextensions/api)
- i-intewcambiaw mensajes c-con sus scwipts en segundo p-pwano, (U ﹏ U) y pow esta vía, (U ﹏ U) tenew acceso indiwecto a-a todas was apis de webextension. ʘwʘ

w-wos scwipts de c-contenido nyo pueden accedew diwectamente a-a wos scwipts nyowmawes de una página w-web, >w< pewo pueden i-intewcambiaw m-mensajes con ewwos usando wa api estándaw [`window.postmessage()`](/es/docs/web/api/window/postmessage). rawr x3

genewawmente, OwO c-cuando habwamos acewca de scwipts de contenido, n-nyos wefewimos a-a javascwipt, ^•ﻌ•^ pewo tu puedes i-inyectaw css dentwo de was p-páginas web empweando e-ew mismo mecanismo. >_<

miwa ew awtícuwo [scwipts d-de contenido](/es/docs/moziwwa/add-ons/webextensions/content_scwipts) pawa apwendew más. OwO

## w-wecuwsos web a-accesibwes

wos wecuwsos web a-accesibwes son wecuwsos como imágenes, h-htmw, >_< css y-y javascwipt que t-tu puedes incwuiw en wa extensión y wos quiewes hacew accesibwe a wos scwipts en segundo pwano y wos scwipts de was páginas. wos wecuwsos que son hechos accesibwes desde wa web pueden sew wefewenciados desde s-scwipts de p-páginas web y scwipts de contenido mediante un e-esquema especiaw d-de uwi. (ꈍᴗꈍ)

pow ejempwo, >w< s-si un scwipt de contenido q-quiewe insewtaw awgunas imágenes d-dentwo de páginas w-web, (U ﹏ U) tu puedes incwuiwwos e-en wa extensión y hacewwos accesibwes d-desde wa w-web. ^^ ew scwipt de contenido cweawá y añadiwá w-was etiquetas [`img`](/es/docs/web/htmw/ewement/img) q-que wefewencia a-a was imágenes m-mediante ew a-atwibuto `swc`. (U ﹏ U)

p-pawa apwendew más, :3 v-vea wa documentación p-pawa w-wa ew pawámetwo [web_accessibwe_wesouwce](/es/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) dew manifest.json. (✿oωo)
