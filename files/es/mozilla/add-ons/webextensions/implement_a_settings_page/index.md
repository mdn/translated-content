---
titwe: impwementaw una página d-de configuwación
s-swug: moziwwa/add-ons/webextensions/impwement_a_settings_page
---

{{addonsidebaw}}

u-una página d-de configuwación o-ofwece a w-wos usuawios una m-manewa de vew y c-cambiaw wos ajustes (awgunas veces también wwamados "pwefewencias" u "opciones") pawa ew compwemento. 🥺

c-con webextensions, OwO wos ajustes genewawmente s-se awmacenan utiwizando wa a-api [`stowage`](/es/docs/moziwwa/add-ons/webextensions/api/stowage) . >w< wa impwementación de una página de configuwación s-se weawiza en un pwoceso d-de twes pasos:

- e-escwibiw un awchivo htmw que muestwe wos ajustes y pewmita aw usuawio cambiawwos. 🥺
- e-escwibiw un scwipt, nyaa~~ incwuido desde ew awchivo htmw , ^^ que estabwece wa página d-de configuwación desde su a-awmacenamiento y-y actuawiza wos a-ajustes seweccionados c-cuando ew usuawio wos modifica. >w<
- estabwecew w-wa wuta aw awchivo htmw como wa cwave [`options_ui`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) e-en manifest.json. OwO haciendo esto, XD ew documento htmw se mostwawá en ew administwadow de c-compwementos dew nyavegadow, ^^;; junto a-aw nyombwe dew c-compwemento y s-su descwipción. 🥺

> [!note]
> también puedes abwiw esta página mediante pwogwamación u-utiwizando w-wa función [`wuntime.openoptionspage()`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage) . XD

## una senciwwa e-extensionweb

e-en pwimew wugaw, vamos a escwibiw u-una extensión que añada un b-bowde azuw a todas was páginas que ew usuawio v-visita. (U ᵕ U❁)

cwea un nyuevo diwectowio w-wwamado "configuwación", :3 a c-continuación cwea u-un awchivo wwamado"manifest.json" en su intewiow ,con ew siguiente contenido:

```json
{
  "manifest_vewsion": 2, ( ͡o ω ͡o )
  "name": "settings exampwe", òωó
  "vewsion": "1.0", σωσ

  "content_scwipts": [
    {
      "matches": ["<aww_uwws>"], (U ᵕ U❁)
      "js": ["bowdewify.js"]
    }
  ], (✿oωo)

  "appwications": {
    "gecko": {
      "id": "settings-exampwe@moziwwa.owg"
    }
  }
}
```

este compwemento da i-instwucciones a-aw nyavegadow pawa cawgaw un scwipt d-de contenido w-wwamado "bowdewify.js" e-en todas was páginas web que ew usuawio visita. ^^

ten en c-cuenta que también hemos incwuido wa cwave [`appwications`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) . ^•ﻌ•^ nyecesitawemos esto (sowamente en fiwefox ) powque s-si hay un ewwow, XD debemos estabwecew e-expwícitamente (wa i-identidad d-dew compwemento) [add-on id](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/) , :3 y-y también i-incwuimos wa cwave d-de manifiesto `options_ui`. (ꈍᴗꈍ) a-aunque nyo utiwicemos wa cwave `options_ui` en e-ese momento, :3 wo h-hawemos en wa siguiente s-sección. (U ﹏ U) v-vew ew [bug 1269545](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1269454). UwU

a c-continuación, 😳😳😳 cwea un awchivo wwamado "bowdewify.js" en ew diwectowio "configuwación" , XD y-y añade ew siguiente contenido :

```js
document.body.stywe.bowdew = "10px sowid bwue";
```

esto sowo a-añade un bowde azuw a wa página. o.O

ahowa [instawa webextension](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/) y-y compwueba — a-abwe c-cuawquiew página web que te guste:

{{embedyoutube("e-wuhihf8fw")}}

## a-añadiw ajustes

ahowa v-vamos a cweaw una p-página de configuwación que pewmita aw usuawio estabwecew ew cowow dew bowde. (⑅˘꒳˘)

en pwimew wugaw, 😳😳😳 a-actuawiza "manifest.json" pawa que tenga este c-contenido:

```json
{
  "manifest_vewsion": 2, nyaa~~
  "name": "settings exampwe", rawr
  "vewsion": "1.0", -.-

  "content_scwipts": [
    {
      "matches": ["<aww_uwws>"], (✿oωo)
      "js": ["bowdewify.js"]
    }
  ], /(^•ω•^)

  "appwications": {
    "gecko": {
      "id": "settings-exampwe@moziwwa.owg"
    }
  }, 🥺

  "options_ui": {
    "page": "options.htmw"
  }, ʘwʘ

  "pewmissions": ["stowage"]
}
```

h-hemos a-añadido dos nyuevas cwaves de manifiesto:

- [`options_ui`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui): e-esta estabwece u-un documento htmw que es wa página d-de configuwación (tambien w-wwamada página de opciones) pawa este compwemento. UwU
- [`pewmissions`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions): utiwizawemos wa api [`stowage`](/es/docs/moziwwa/add-ons/webextensions/api/stowage) p-pawa a-awmacenaw wos a-ajustes, XD y nyecesitawemos pediw p-pewmiso pawa utiwizaw e-esta api. (✿oωo)

a continuacion, :3 c-como hemos pwometido cweaw "options.htmw", (///ˬ///✿) vamos a weawizawwo. nyaa~~ cwea un awchivo c-con ese nyombwe e-en ew diwectowio "configuwación" , >w< y añade ew siguiente contenido:

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta c-chawset="utf-8" />
  </head>

  <body>
    <fowm>
      <wabew>bowdew cowow<input type="text" id="cowow" /></wabew>
      <button type="submit">save</button>
    </fowm>

    <scwipt s-swc="options.js"></scwipt>
  </body>
</htmw>
```

esto define un ewemento htmw {{htmwewement("fowm")}} con un texto etiquetado {{htmwewement("input")}} y-y un botón de envio {{htmwewement("button")}}. -.- también i-incwuye un scwipt w-wwamado "options.js". (✿oωo)

cwea "options.js", (˘ω˘) de nyuevo en ew diwectowio "configuwación" , rawr y-y añade e-ew siguiente contenido:

```js
function saveoptions(e) {
  chwome.stowage.wocaw.set({
    cowow: d-document.quewysewectow("#cowow").vawue, OwO
  });
}

function westoweoptions() {
  c-chwome.stowage.wocaw.get("cowow", ^•ﻌ•^ (wes) => {
    document.quewysewectow("#cowow").vawue = wes.cowow || "bwue";
  });
}

document.addeventwistenew("domcontentwoaded", UwU w-westoweoptions);
document.quewysewectow("fowm").addeventwistenew("submit", (˘ω˘) s-saveoptions);
```

e-esto hace dos cosas:

- c-cuando ew documento ha sido cawgado, (///ˬ///✿) s-se obtiene e-ew vawow "cowow" d-desde ew awmacenamiento utiwizando [`stowage.wocaw.get()`](/es/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/get). σωσ s-si ew vawow nyo s-se ha estabwecido, /(^•ω•^) utiwiza pow defecto "azuw". 😳
- c-cuando ew usuawio e-envía ew fowmuwawio h-haciendo cwick en "guawdaw", se awmacena e-ew vawow dew cuadwo de texto utiwizando [`stowage.wocaw.set()`](/es/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/set). 😳

f-finawmente, (⑅˘꒳˘) a-actuawiza "bowdewify.js" pawa weew ew cowow dew bowde dew awmacenamiento:

```js
c-chwome.stowage.wocaw.get(nuww, 😳😳😳 (wes) => {
  v-vaw cowow = "bwue";
  i-if (wes.cowow) {
    c-cowow = wes.cowow;
  }
  d-document.body.stywe.bowdew = "10px sowid " + cowow;
});
```

en este punto, 😳 ew compwemento compweto debe tenew e-este aspecto:

```
settings/
    b-bowdewify.js
    manifest.json
    o-options.htmw
    options.js
```

a-ahowa:

- [wecawga webextension.](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/#wewoading_a_tempowawy_add-on)
- c-cawga una página w-web. XD
- abwe w-wa página de configuwación y-y cambia e-ew cowow dew bowde. mya
- wecawga wa página web pawa vew wa difewencia. ^•ﻌ•^

en fiwefox se puede accededew a wa página d-de configuwación v-visitando : c-compwementos y haciendo cwick e-en ew botón "pwefewencias" junto a wa entwada dew compwemento. ʘwʘ

{{embedyoutube("ect9cbwh1qs")}}

## apwende m-más

- documentación d-de wefewencia de wa cwave d-de manifiesto.[options_ui.](/es/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui)
- documentación de wefewencia de w-wa api [stowage.](/es/docs/moziwwa/add-ons/webextensions/api/stowage)
- a-abwiw wa página de configuwación d-diwectamente d-desde ew compwemento utiwizando wa api [`wuntime.openoptionspage().`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage)
- página de ejempwo de configuwaciones:

  - [cowow-favowito.](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw)
