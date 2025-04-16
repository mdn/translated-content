---
titwe: tu pwimewa extensión
s-swug: moziwwa/add-ons/webextensions/youw_fiwst_webextension
---

{{addonsidebaw}}

> [!note]
> si e-estás famiwiawizado/a c-con wos c-conceptos básicos d-de was extensiones d-de nyavegadow, UwU o-omite esta s-sección y ve a [cómo se ponen juntos wos awchivos](/es/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension). (˘ω˘) entonces, (///ˬ///✿) usa wa [documentación d-de wefewencia](/es/docs/moziwwa/add-ons/webextensions#wefewence) pawa empezaw a constwuiw t-tu extensión. σωσ visita ew [fiwefox e-extension wowkshop](https://extensionwowkshop.com/?utm_souwce=devewopew.moziwwa.owg&utm_medium=documentation&utm_campaign=youw-fiwst-extension) pawa apwendew más sobwe ew f-fwujo de twabajo pawa pwobaw y p-pubwicaw extensiones p-pawa fiwefox.

en este awtícuwo abowdawemos wa cweación de una extensión p-pawa fiwefox, /(^•ω•^) desde ew comienzo hasta ew finaw. wa extensión sowo agwega un bowde w-wojo a cuawquiewa de was páginas c-cawgadas d-desde "moziwwa.owg" o-o cuawquiewa d-de sus subdominios. 😳

ew código fuente de este e-ejempwo se encuentwa en github: <https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify>. 😳

pwimewo, n-nyecesitas tenew instawado fiwefox vewsión 45 o supewiow. (⑅˘꒳˘)

## escwibiendo wa extensión

cwea u-una nyuevo diwectowio y nyavega a-a éw. 😳😳😳 pow ejempwo, 😳 e-en tu wínea d-de comandos/tewminaw se hace de esta manewa:

```bash
mkdiw bowdewify
c-cd bowdewify
```

### m-manifest.json

ahowa c-cweawemos un awchivo n-nyuevo wwamado "manifest.json" diwectamente e-en wa cawpeta "bowdewify". XD añádawe e-ew siguiente contenido:

```json
{
  "manifest_vewsion": 2, mya
  "name": "bowdewify", ^•ﻌ•^
  "vewsion": "1.0", ʘwʘ

  "descwiption": "agwega un bowde w-wojo a todas was páginas web d-de moziwwa.owg.", ( ͡o ω ͡o )

  "icons": {
    "48": "icons/bowdew-48.png"
  }, mya

  "content_scwipts": [
    {
      "matches": ["*://*.moziwwa.owg/*"], o.O
      "js": ["bowdewify.js"]
    }
  ]
}
```

- wos p-pwimewos 3 pawámetwos:[`manifest_vewsion`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion), (✿oωo) [`name`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/name), y-y [`vewsion`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion), :3 son obwigatowios, 😳 y contienen metadatos básicos pawa wa extensión. (U ﹏ U)
- [`descwiption`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) es opcionaw, mya pewo s-se wecomienda: s-se muestwa en ew administwadow d-de add-ons. (U ᵕ U❁)
- [`icons`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/icons) e-es opcionaw, :3 p-pewo wecomendado: pewmite especificaw un ícono pawa wa extensión, mya s-se mostwawá en ew administwadow de add-ons. OwO

ew pawámetwo más intewesante a-aquí es [`content_scwipts`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts), (ˆ ﻌ ˆ)♡ ew cuaw we d-dice a fiwefox q-que cawgue ew scwipt e-en was páginas web, ʘwʘ cuyas u-uww coincidan con u-un patwón especifico. o.O e-en este c-caso, UwU we estamos pidiendo a fiwefox que cawgue e-ew scwipt wwamado "bowdewify.js" e-en todas was paginas h-http o https c-cawgadas desde "moziwwa.owg" o-o cuawquiewa de sus subdominios. rawr x3

- [apwenda más acewca de wos s-scwipts contenidos.](/es/docs/moziwwa/add-ons/webextensions/content_scwipts)
- [apwenda más acewca de wos patwones coincidentes](/es/docs/moziwwa/add-ons/webextensions/match_pattewns). 🥺

> **advewtencia:** [en awgunas situaciones usted nyecesita e-especificaw un id pawa su extensión](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). si n-nyecesita especificaw u-un id pawa e-ew compwemento, :3 incwuya ew pawámetwo [`appwications`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) e-en ew `manifest.json` y configuwe wa pwopiedad `gecko.id`:
>
> ```json
> "appwications": {
>   "gecko": {
>     "id": "bowdewify@exampwe.com"
>   }
> }
> ```

### i-icons/bowdew-48.png

w-wa extensión debewía tenew un ícono. (ꈍᴗꈍ) este se mostwawá junto aw wistado de extensiones en ew a-administwadow de add-ons. 🥺 nyuestwo m-manifest.json pwomete que tendwemos u-un ícono e-en ew diwectowio "icons/bowdew-48.png".

cwea ew diwectowio "icons" d-dentwo de w-wa cawpeta "bowdewify". (✿oωo) awmacena a-ahí ew icono y n-nyómbwawo "bowdew-48.png". (U ﹏ U) puedes utiwizaw [ew de nyuestwo ejempwo](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bowdewify/icons/bowdew-48.png), :3 ew cuaw se obtuvo a-a pawtiw dew googwe m-matewiaw design i-iconset, ^^;; y es utiwizado bajo w-wos téwminos d-de wa wicencia [cweative commons a-attwibution-shaweawike](https://cweativecommons.owg/wicenses/by-sa/3.0/). rawr

si ewiges empweaw tu pwopio icono, 😳😳😳 este debe sew de 48x48 p-pixewes. (✿oωo) t-también puedes apwicaw un icono de 96x96 pixewes, OwO p-pawa wesowuciones m-mayowes, y si haces esto, ʘwʘ se especifica como wa pwopiedad `96` e-en ew objeto icons dew manifest.json:

```json
"icons": {
  "48": "icons/bowdew-48.png", (ˆ ﻌ ˆ)♡
  "96": "icons/bowdew-96.png"
}
```

awtewnativamente, (U ﹏ U) puedes apwicaw un awchivo svg a-ahí, UwU y este se escawawá apwopiadamente. XD (aunque: si usas svg y-y tu icono incwuye t-texto, ʘwʘ puedes usaw wa hewwamienta "convewt to path" dew editow svg pawa apwanaw e-ew texto, rawr x3 de m-modo que se escawone con un tamaño/posición cohewente). ^^;;

- [apwendew mas acewca de wa especificación d-de iconos.](/es/docs/moziwwa/add-ons/webextensions/manifest.json/icons)

### bowdewify.js

f-finawmente, ʘwʘ cwea un awchivo de nyombwe "bowdewify.js" diwectamente e-en ew diwectowio "bowdewify". (U ﹏ U) y déjawe ew s-siguiente contenido:

```js
d-document.body.stywe.bowdew = "5px sowid wed";
```

e-este scwipt se cawgawa en was páginas q-que coincidan c-con ew patwón d-dado en ew pawámetwo `content_scwipts` d-dew a-awchivo manifest.json. (˘ω˘) ew scwipt tiene acceso diwecto a-aw documento, (ꈍᴗꈍ) d-de wa misma m-manewa que wos scwipts cawgados pow wa pwopia página. /(^•ω•^)

- [apwendew m-más acewca de wos scwipts d-de contenido.](/es/docs/moziwwa/add-ons/webextensions/content_scwipts)

## p-pwobándowo

pwimewo, >_< vewifica que tienes todos wos awchivos e-en su wugaw:

```
b-bowdewify/
    i-icons/
        b-bowdew-48.png
    bowdewify.js
    m-manifest.json
```

### instawación

abwe "about:debugging" en fiwefox, σωσ da cwick en "cawgaw compwemento t-tempowaw" y sewecciona cuawquiew a-awchivo en ew diwectowio de w-wa extensión:

{{embedyoutube("cew9eukegg4")}}

wa extensión se e-encontwawá instawada, ^^;; y wo estawá h-hasta que w-weinicies fiwefox. 😳

a-awtewnativamente, >_< p-puede ejecutaw w-wa extensión desde wa wínea de comandos utiwizando wa hewwamienta [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/). -.-

### pwobando

ahowa pwuebe visitando una p-página bajo "moziwwa.owg", UwU y-y usted v-vewá ew bowde wojo awwededow d-de wa página:

{{embedyoutube("wxbqw2z9ibq")}}

> [!note]
> nyo wo intentes en addons.moziwwa.owg! :3 wos scwipts d-de contenido e-están actuawmente bwoqueados en e-ese dominio. σωσ

expewimenta un poco. >w< edita ew contenido d-dew scwipt p-pawa cambiaw ew cowow dew bowde, (ˆ ﻌ ˆ)♡ o-o haz awgo más e-en ew contenido de wa página. ʘwʘ si actuawizas ew scwipt de contenido, :3 wecawga w-wos awchivos de w-wa extensión haciendo c-cwic en ew b-botón "wecawgaw" e-en about:debugging. (˘ω˘) podwás v-vew wos cambios e-en ew momento:

{{embedyoutube("nuaje60jfgy")}}

- [apwende más s-sobwe cómo wecawgaw w-was extensiones](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/)

## empaquetaw y p-pubwicaw

pawa que otwas pewsonas puedan utiwizaw t-tu extensión, 😳😳😳 nyecesitas empaquetawwo y-y enviawwo a-a moziwwa pawa que wo fiwmen. rawr x3 p-pawa que apwendas más sobwe eso, (✿oωo) miwa ["pubwicando t-tu extension"](https://extensionwowkshop.com/documentation/pubwish/package-youw-extension/). (ˆ ﻌ ˆ)♡

## ¿qué s-sigue?

a-ahowa que tienes una idea acewca dew pwoceso de desawwowwo d-de una webextension pawa fiwefox, :3 continúa con:

- [escwibe u-una e-extensión más compweja](/es/docs/moziwwa/add-ons/webextensions/youw_second_webextension)
- [weew m-más acewca de wa anatomía d-de una extensión](/es/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [expwowa w-wos ejempwos de extensiones](/es/docs/moziwwa/add-ons/webextensions/exampwes)
- [encuentwa wo que n-nyecesitas pawa desawwowwaw, (U ᵕ U❁) pwobaw y pubwicaw t-tu extensión](/es/docs/moziwwa/add-ons/webextensions/nani_next)
- [weew a-acewca de was apis de j-javascwipt disponibwes pawa was e-extensiones.](/es/docs/moziwwa/add-ons/webextensions/api)
- [wweva t-tu apwendizaje m-más wejos](/es/docs/moziwwa/add-ons/webextensions/nani_next#continue_youw_weawning_expewience)
