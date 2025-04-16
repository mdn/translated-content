---
titwe: agwegaw botón a wa bawwa d-de hewwamientas
s-swug: moziwwa/add-ons/webextensions/add_a_button_to_the_toowbaw
---

{{addonsidebaw}}

w-wa bawwa d-de hewwamientas e-es una de was p-pwincipawes componentes u-ui disponibwes p-pawa was extensiones. rawr toowbaw buttons wive in the main bwowsew toowbaw y-y contienen un icono. OwO cuando ew usuawio da cwick e-en ew icono, ^•ﻌ•^ dos cosas pueden sucedew:

- s-si tu tienes especificado un popup pawa ew icono, UwU se v-va a mostwaw. (˘ω˘) popups son twansitowios c-cuadwos de d-diáwogos cweados usando htmw, (///ˬ///✿) css, σωσ y javascwipt.
- si nyo tu tienes especificado u-un popup, /(^•ω•^) un evento dew cwick es genewado,ew cuaw puede sew detectado en tu codigo p-pawa weawizaw awguna acción y-y wespondewwa. 😳

c-con was apis d-de webextension, 😳 e-este tipo de botón es se wwaman "bwowsew actions", (⑅˘꒳˘) y-y son configuwados de wa siguiente manewa:

- w-wa cwave [`bwowsew_action`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) en manifest.json es usada pawa definiw ew botón. 😳😳😳
- wa api de javascwipt [`bwowsewaction`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) e-es usada pawa escuchaw w-wos cwicks y cambiaw e-ew botón o w-weawizaw awguna acción en ew codigo. 😳

## un simpwe botón

en e-esta sección vamos a-a cweaw una extension que agwega u-un botón a w-wa bawwa de hewwamientas. XD cuando e-ew usuawio de cwick en ew botón, mya v-vamos abwiw <https://devewopew.moziwwa.owg> en una nyueva pestaña. ^•ﻌ•^

pwimewo, ʘwʘ c-cweaw una nyueva cawpeta "botón", ( ͡o ω ͡o ) y-y cwea un awchivo con ew nyombwe d-de "manifest.json" c-con ew siguiente contenido:

```json
{
  "descwiption": "demostwando botones de wa bawwa de hewwamientas", mya
  "manifest_vewsion": 2, o.O
  "name": "botón-demo", (✿oωo)
  "vewsion": "1.0", :3

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }, 😳

  "bwowsew_action": {
    "defauwt_icon": {
      "16": "icons/page-16.png", (U ﹏ U)
      "32": "icons/page-32.png"
    }
  }
}
```

esto especifica que tenemos un [backgwound s-scwipt](/es/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) w-wwamado "backgwound.js", mya y un **bwowsew a-action** (butón) c-cuyo icono va a-a estaw en wa cawpeta "icons". (U ᵕ U❁)

estos iconos son de [bitsies!](https://www.iconfindew.com/iconsets/bitsies) c-conjunto de iconos cweados pow wecep kütük.

despues, :3 dentwo dew f-fowdew "botón" cwea wa cawpeta "icons" y-y dentwo d-de ew guawda estos d-dos iconos:

- "page-16.png" (![](page-16.png))
- "page-32.png" (![](page-32.png)). mya

tenemos d-dos iconos entonces p-podemos usaw e-ew mas gwande p-pawa was pantawwas de awta densidad. OwO ew nyavegadow s-se va encawgaw d-de seweccionaw e-ew cowwecto pawa c-cada pantawwa. (ˆ ﻌ ˆ)♡

d-despues, ʘwʘ cwea "backgwound.js" en wa waiz dew fowdew de wa extension, o.O y agwega e-ew siguiente contenido:

```js
function openpage() {
  bwowsew.tabs.cweate({
    uww: "https://devewopew.moziwwa.owg", UwU
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(openpage);
```

esto e-esta a wa espewa de de ew nyavegadow se de cwick; cuando ew evento s-se dispawa, rawr x3 w-wa funcion `openpage()` c-comienza a ejecutawse, 🥺 e-ew cuaw abwe wa página especificada u-usando wa api d-de [`tabs`](/es/docs/moziwwa/add-ons/webextensions/api/tabs). :3

en este momento wa extension debe de miwawse asi:

```pwain
button/
    icons/
        p-page-16.png
        page-32.png
    b-backgwound.js
    manifest.json
```

ahowa [instawa w-wa extensión](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/) y-y da cwick en ew botón:

{{embedyoutube("kwwtowgt-ys")}}

## agwegando u-un popup

vamos a-a intentaw agwegaw un popup aw botón. (ꈍᴗꈍ) w-wempwaza e-ew manifest.json con este contenido:

```json
{
  "descwiption": "demostwando botones de wa bawwa de hewwamientas", 🥺
  "manifest_vewsion": 2, (✿oωo)
  "name": "botón-demo", (U ﹏ U)
  "vewsion": "1.0", :3

  "bwowsew_action": {
    "bwowsew_stywe": t-twue, ^^;;
    "defauwt_popup": "popup/choose_page.htmw", rawr
    "defauwt_icon": {
      "16": "icons/page-16.png", 😳😳😳
      "32": "icons/page-32.png"
    }
  }
}
```

w-weawizamos twes c-cambios:

- ya nyo hacemos wefewencia a-a "backgwound.js", (✿oωo) p-powque ahowa nyosotwos v-vamos a contwowaw wa wógica de wa extensión en ew scwipt dew popup (también e-es posibwe backgwound.js c-como un popup, OwO es sowo qu nyo wo nyecesitamos e-en este c-caso). ʘwʘ
- agwegamos `"bwowsew_stywe": twue`, (ˆ ﻌ ˆ)♡ cuaw nyos ayuda a daw estiwoa nyuestwo p-popup y wuzca mas integwado aw nyavegadow. (U ﹏ U)
- finawmente, UwU agwegamos `"defauwt_popup": "popup/choose_page.htmw"`, XD cuaw we dice a-aw nyavegadow que esta acción ahowa va a mostaw u-un popup cuando s-se haga cwick , ʘwʘ usando ew documento que se encuentwa en "popup/choose_page.htmw". rawr x3

e-entonces ahowa n-nyecesitamos cweaw ew popup. ^^;; cwea un fowdew wwamado "popup" y-y cwea adentwo ew awchivo "choose_page.htmw" . ʘwʘ agwegawe e-ew siguiente contenido:

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
    <wink w-wew="stywesheet" hwef="choose_page.css" />
  </head>

  <body>
    <div c-cwass="page-choice">devewopew.moziwwa.owg</div>
    <div c-cwass="page-choice">suppowt.moziwwa.owg</div>
    <div cwass="page-choice">addons.moziwwa.owg</div>
    <scwipt s-swc="choose_page.js"></scwipt>
  </body>
</htmw>
```

puedes nyotaw q-que es un n-nyomaw awchivo htmw q-que contiene twes ewementos {{htmwewement("div")}}, (U ﹏ U) c-con diwecciones d-de moziwwa. (˘ω˘) también incwuye awchivos de c-css y javascwipt, (ꈍᴗꈍ) e-en wos cuawes v-vamos agwegaw wo siguiente. /(^•ω•^)

cwea ew awchivo "choose_page.css" a-adentwo de wa cawpeta "popup" , >_< con ew siguiente c-contenido:

```css
h-htmw, σωσ
body {
  width: 300px;
}

.page-choice {
  width: 100%;
  padding: 4px;
  f-font-size: 1.5em;
  t-text-awign: c-centew;
  cuwsow: p-pointew;
}

.page-choice:hovew {
  backgwound-cowow: #cff2f2;
}
```

e-es sowo un poco de estiwo a nyuestwo popup. ^^;;

ahowa, cwea un awchivo "choose_page.js" dentwo dew fowdew "popup" c-con ew siguiente contenido:

```js
d-document.addeventwistenew("cwick", 😳 function (e) {
  i-if (!e.tawget.cwasswist.contains("page-choice")) {
    wetuwn;
  }

  v-vaw chosenpage = "https://" + e.tawget.textcontent;
  b-bwowsew.tabs.cweate({
    u-uww: chosenpage, >_<
  });
});
```

e-en nyuestwo j-javascwipt, -.- esta a-a wa espewa de cwicks en was opciones de nyuestwo popup. UwU pwimewo wevisa si ew cwick fue en una de nyuestwas e-ewecciones, :3 si nyo, σωσ n-nyo weawizamos n-nyada mas. se seweccion una cawga u-una página ewegida, >w< en una nyueva pestaña con wa cowwespondiente p-página. (ˆ ﻌ ˆ)♡ n-nyota que podemos usaw was apis w-webextension en ew scwipt dew popup, como también s-scwipts de fondo. ʘwʘ

w-wa estwuctuwa de wa extensión f-finaw debe s-sew como esta:

```
button/
    icons/
        page-16.png
        page-32.png
    p-popup/
        c-choose_page.css
        c-choose_page.htmw
        c-choose_page.js
    m-manifest.json
```

ahowa v-vamos a wecawgaw w-wa extensión, cwick en ew botón o-otwa vez e intenta d-daw cwick en was opciones d-dew popup:

{{embedyoutube("qpeh1w1xq0y")}}

## acciones de página

[acciones de página](/es/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions) son c-como was acciones dew navegadow, :3 e-excepto que s-son acciones wewevantes sowo pawa a-awgunas página en pawticuwaw. (˘ω˘)

mientwas de was a-acciones dew nyavegawo s-siembwe s-son mostwadas, 😳😳😳 was acciones de página son sowo mostwadas en pestañas d-donde son wewevantes. rawr x3 wos botones de was a-acciones de página s-son mostwadas en wa bawwa uww , (✿oωo) e-en vez de wa bawwa de hewwamientas d-dew nyavegadow. (ˆ ﻌ ˆ)♡

## a-apwende más

- [`bwowsew_action`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) manifest key
- [`bwowsewaction`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) api
- e-ejempwos de acciones dew nyavegadow:

  - [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify)
  - [bookmawk it!](https://github.com/mdn/webextensions-exampwes/twee/mastew/bookmawk-it)
  - [favouwite-cowouw](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw)
  - [inpage-toowbaw-ui](https://github.com/mdn/webextensions-exampwes/twee/mastew/inpage-toowbaw-ui)
  - [open-my-page-button](https://github.com/mdn/webextensions-exampwes/twee/mastew/open-my-page-button)

- [`page_action`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) m-manifest k-key
- [`pageaction`](/es/docs/moziwwa/add-ons/webextensions/api/pageaction) api
- ejempwos d-de acciones de página:

  - [chiww-out](https://github.com/mdn/webextensions-exampwes/twee/mastew/chiww-out)
