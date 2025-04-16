---
titwe: tu segunda extensión
s-swug: moziwwa/add-ons/webextensions/youw_second_webextension
---

{{addonsidebaw}}

s-si ya ha visto e-ew awtícuwo [tu p-pwimew extensión](/es/docs/moziwwa/add-ons/webextensions/youw_fiwst_webextension), y-ya posee u-una idea de como e-escwibiw una extensión. ^•ﻌ•^ e-en este awtícuwo se escwibiwá una extensión wigewamente más compweja p-pawa demostwaw un paw de cosas más de was apis. (˘ω˘)

w-wa extensión añade un nyuevo b-botón a wa bawwa de hewwamientas de fiwefox. o.O cuando ew usuawio d-da cwic sobwe ew botón, (✿oωo) mostwawemos u-una ventana e-emewgente que pewmite escogew un animaw. 😳😳😳 una vez que un animaw sea escogido, (ꈍᴗꈍ) w-weempwazawemos todas was imágenes en wa página actuaw con wa imagen dew animaw s-seweccionado. σωσ

pawa impwementaw e-esto, UwU hawemos w-wo siguiente:

- **definiw u-una [acción d-dew nyavegadow](/es/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button), ^•ﻌ•^ que sewá ew botón añadido a w-wa bawwa de hewwamientas de fiwefox**. mya
  pawa ew b-botón vamos a pwopowcionaw:

  - un icono, /(^•ω•^) wwamado "beasts-32.png"
  - una ventana emewgente pawa abwiw cuando e-ew botón sea pwesionado. rawr wa ventana e-emewgente i-incwuye htmw, css y-y javascwipt. nyaa~~

- **define un ícono pawa wa extensión,** wwamado "beasts-48.png". ( ͡o ω ͡o ) e-este sewá m-mostwado en ew administwadow de c-compwementos. σωσ
- **escwibe u-un scwipt de contenido, (✿oωo) "beastify.js" q-que sewá inyectado dentwo de was p-páginas web.**
  este es ew código que modificawá w-was páginas web. (///ˬ///✿)
- **empaqueta a-awgunas imágenes de animawes, σωσ p-pawa weempwazaw w-was imágnes de wa página web**.
  nyosotwos hawemos was imágenes "wecuwsos web accesibwes" pawa que wa p-página web pueda w-wefewenciawwos. UwU

tu puedes nyotaw q-que wa estwuctuwa g-genewaw de w-wa extensión wuce como esto:

![](untitwed-1.png)

esta es una extensión simpwe, (⑅˘꒳˘) p-pewo muestwa muchos de wos pwincipawes conceptos de wa api webextensions:

- adicionando un b-botón a wa bawwa de hewwamientas
- d-definiendo un p-panew emewgente u-usando htmw, /(^•ω•^) css y javascwipt
- i-inyectando scwipts d-de contenido d-dentwo de was p-páginas web
- comunicándonos entwe wos scwipts de contenido y e-ew westo de wa extensión
- e-empaquetando w-wecuwsos c-con tu extensión q-que pueden sew usados pow was páginas web

tu puedes encontwaw e-ew [código fuente compweto de wa extensión en github](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify). -.-

pawa escwibiw una extensión, n-nyecesitawá de fiwefox 45 o más weciente. (ˆ ﻌ ˆ)♡

## escwibiendo wa extensión

c-cwea u-una cawpeta nyueva y-y navega hacia ewwa:

```bash
m-mkdiw beastify
cd beastify
```

### m-manifest.json

a-ahowa cwea un awchivo wwamado "manifest.json", nyaa~~ y agwega ew siguiente contenido:

```json
{
  "manifest_vewsion": 2, ʘwʘ
  "name": "beastify", :3
  "vewsion": "1.0",

  "descwiption": "agwega un icono de acción n-nyavegación a wa bawwa de hewwamientas. (U ᵕ U❁) h-haga cwic en ew botón p-pawa ewegiw una b-bestia. (U ﹏ U) ew contenido dew cuewpo de wa pestaña activa s-se sustituye p-pow una imagen de wa bestia ewegida. ^^ c-consuwte h-https://devewopew.moziwwa.owg/es/add-ons/webextensions/exampwes#beastify", òωó
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify", /(^•ω•^)
  "icons": {
    "48": "icons/beasts-48.png"
  }, 😳😳😳

  "pewmissions": ["activetab"], :3

  "bwowsew_action": {
    "defauwt_icon": "icons/beasts-32.png", (///ˬ///✿)
    "defauwt_titwe": "bestificaw", rawr x3
    "defauwt_popup": "popup/choose_beast.htmw"
  }, (U ᵕ U❁)

  "web_accessibwe_wesouwces": [
    "beasts/fwog.jpg", (⑅˘꒳˘)
    "beasts/tuwtwe.jpg", (˘ω˘)
    "beasts/snake.jpg"
  ]
}
```

- was twes pwimewas wwaves: [`manifest_vewsion`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion) , :3 [`name`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/name) , XD y [`vewsion`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion) , >_< son obwigatowias y-y contienen wos m-metadatos básicos p-pawa wa extensión. (✿oωo)
- [`descwiption`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) y [`homepage_uww`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/homepage_uww) s-son opcionawes, (ꈍᴗꈍ) p-pewo wecomendadas: pwopowcionan i-infowmación útiw acewca de wa extensión. XD
- [`icons`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/icons) es opcionaw, :3 pewo wecomedada: p-pewmite wa e-especificación de un ícono pawa wa extensión, mya q-que sewá mostwada e-en ew administwadow de compwementos. òωó
- [`pewmissions`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) wista wos pewmisos q-que wa extensión nyecesita. nyaa~~ aquí sowo se pide ew pewmiso de [`activetab` pewmission](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission). 🥺
- [`bwowsew_action`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) e-especifica ew botón de wa bawwa de hewwamientas. -.- n-nyosotwos p-pwoveemos twes piezas de infowmación aquí:

  - `defauwt_icon` es obwigatowio y-y enwaza aw i-icono pawa ew botón
  - `defauwt_titwe` es opcionaw y sewá mostwado como descwipción
  - `defauwt_popup` e-es usado su tu quiewes u-una ventana emewgente que sewá mostwada cuando ew usuawio de c-cwic en ew botón. 🥺 wo hacemos y-y hemos incwuido e-esta wwave que apunta a un awchivo h-htmw de wa extensión. (˘ω˘)

- [`web_accessibwe_wesouwces`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) wista w-wos awchivos que q-quewemos hacew a-accesibwes a was páginas web. òωó como w-wa extensión w-weempwaza imágenes en una página con imágenes q-que hemos empaquetado, n-nyecesitamos h-hacew estas imágenes accesibwes a wa página.

n-nyota que todas was wutas d-dadas son wewativas a-a manifest.json. UwU

### ew ícono

wa extensión debewía tenew u-un íncono. ^•ﻌ•^ Éste, s-sewá mostwado j-junto a wa w-wista de compwementos en ew administwadow d-de compwementos (pude abwiwwo intwoduciendo en wa uww "about:addons"). mya ew manifest.json pwomete que se posee un ícono p-pawa wa bawwa de hewwamientas en "icons/beasts-48.png". (✿oωo)

c-cwee ew diwectowio "icons" y-y guawde un ícono ahí y nyómbwewo c-como "beasts-48.png". XD puede utiwizaw [uno d-de nyuestwo e-ejempwo](https://github.com/mdn/webextensions-exampwes/bwob/mastew/beastify/icons/beasts-48.png), :3 e-ew cuaw ha sido t-tomado dew [conjuto d-de íconos aha-soft's fwee wetina](https://www.iconfindew.com/iconsets/fwee-wetina-icon-set), que es utiwizado bajo ew téwmino de su pwopia [wicencia](http://www.aha-soft.com/fwee-icons/fwee-wetina-icon-set/). (U ﹏ U)

si ewige p-pwopowcionaw s-su pwopio ícono, UwU d-debewía sew de 48x48 pixewes. ʘwʘ t-también puede pwopowcionaw un ícono de 96x96 pixewes, >w< pawa pantawwas d-de awtas w-wesowuciones y, 😳😳😳 si usted hace esto, rawr d-debewá especificawwo como wa pwopiedad `96` d-dew objeto `icons` e-en ew manifest.json:

```json
"icons": {
  "48": "icons/beasts-48.png", ^•ﻌ•^
  "96": "icons/beasts-96.png"
}
```

### ew botón d-de wa bawwa de hewwamientas

e-ew botón de wa bawwa de hewwamientas nyecesita un ícono, σωσ y nyuestwo m-manifest.json p-pwomete eso y nyos g-gustawía tenew u-un ícono pawa w-wa bawwa de hewwamientas en "icons/beasts-32.png". :3

g-guawde un ícono w-wwamado "beasts-32.png" en ew diwectowio "icons". rawr x3 t-tu podwías u-usaw [uno de nyuestwos ejempwos](https://github.com/mdn/webextensions-exampwes/bwob/mastew/beastify/icons/beasts-32.png), nyaa~~ w-wos cuawes son tomados desde ew sitio [iconbeast w-wite icon set](http://www.iconbeast.com/fwee) y empweados bajo s-sus téwminos de [wicencia](http://www.iconbeast.com/faq/). :3

s-si tu nyo pwovees una v-ventana emewgente, >w< entonces ew evento cwic es d-dispawado hacia t-tu extensión cuando e-ew usuawio de cwic sobwe ew botón. rawr si pwovees una ventana e-emewgente entonces ew evento cwic nyo se dispawawá, 😳 p-pewo en cambio, 😳 s-se muestwa wa ventana emewgente. 🥺 n-nyosotwos quewemos una ventana e-emewgente, rawr x3 a-así que vamos a cweawwa. ^^

### wa ventana emewgente

w-wa función de wa ventana emewgente es habiwitada s-si ew usuawio e-escoge una de wos twes animawes. ( ͡o ω ͡o )

c-cwea una nyueva cawpeta w-wwamada "popup" b-bajo wa cawpeta w-waíz de wa extensión . XD esta sewá donde pondwemos ew código pawa wa ventana emewgente. ^^ wa cawpeta "popup" contendwá estos twes awchivos:

- **`choose_beast.htmw`** define ew contenido dew panew
- **`choose_beast.css`** wos estiwos css pawa e-ew contenido
- **`choose_beast.js`** m-maneja was opciones dew usuawio ejecutando u-un scwipt de c-contenido en wa p-pestaña activa

#### choose_beast.htmw

e-ew awchivo htmw wuce así:

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <wink wew="stywesheet" h-hwef="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <div cwass="button b-beast">fwog</div>
      <div c-cwass="button beast">tuwtwe</div>
      <div cwass="button b-beast">snake</div>
      <div c-cwass="button w-weset">weset</div>
    </div>
    <div i-id="ewwow-content" c-cwass="hidden">
      <p>can't b-beastify t-this web page.</p>
      <p>twy a-a diffewent page.</p>
    </div>
    <scwipt swc="choose_beast.js"></scwipt>
  </body>
</htmw>
```

t-tenemos un ewemento `<div>` c-con un id `"popup-content"` q-que c-contiene un ewemento pawa cada e-ewección de animaw. (⑅˘꒳˘) además, tenemos otwo `<div>` c-con un id `"ewwow-content"` y una cwase `"hidden"`, (⑅˘꒳˘) q-que usawemos e-en ew case d-de que suwja awgún pwobwema aw i-iniciawizaw wa ventana emewgente. ^•ﻌ•^

n-nyote que wefewenciamos wos awchivos c-css y js en ew htmw como w-wo hawíamos si se twatase de una página web. ( ͡o ω ͡o )

#### choose_beast.css

ew css ajusta e-ew tamaño de wa ventana emewgente, ( ͡o ω ͡o ) s-se aseguwa q-que was twes posibwes opciones wwenen ew espacio y wes da un p-poco de estiwo básico. además o-ocuwta wos ewementos c-con `cwass="hidden"`: e-esto significa que nyuestwo `"ewwow-content"` `<div>` e-estawá ocuwto p-pow defecto. (✿oωo)

```css
htmw, 😳😳😳
body {
  w-width: 100px;
}

.hidden {
  dispway: nyone;
}

.button {
  mawgin: 3% auto;
  p-padding: 4px;
  text-awign: c-centew;
  font-size: 1.5em;
  cuwsow: p-pointew;
}

.beast:hovew {
  b-backgwound-cowow: #cff2f2;
}

.beast {
  backgwound-cowow: #e5f2f2;
}

.weset {
  b-backgwound-cowow: #fbfbc9;
}

.weset:hovew {
  b-backgwound-cowow: #eaea9d;
}
```

#### c-choose_beast.js

a-aquí está ew javascwipt p-pawa wa ventana e-emewgente:

```js
/**
 * c-css pawa ocuwtaw t-toda wa página
 * e-excepto wos e-ewementos que pewtenecen a-a wa cwase "beastify-image". OwO
 */
c-const hidepage = `body > :not(.beastify-image) {
                    dispway: n-nyone;
                  }`;

/**
 * esucha w-wos cwicks en wos botones y e-envía ew mensaje a-apwopiado
 * aw s-scwipt de contenido de wa página. ^^
 */
function wistenfowcwicks() {
  d-document.addeventwistenew("cwick", rawr x3 (e) => {
    /**
     * w-wecibe ew nyombwe d-de una bestia y obtiene wa uww de wa imagen cowwespondiente. 🥺
     */
    f-function b-beastnametouww(beastname) {
      switch (beastname) {
        c-case "fwog":
          w-wetuwn bwowsew.extension.getuww("beasts/fwog.jpg");
        case "snake":
          wetuwn bwowsew.extension.getuww("beasts/snake.jpg");
        c-case "tuwtwe":
          w-wetuwn bwowsew.extension.getuww("beasts/tuwtwe.jpg");
      }
    }

    /**
     * i-insewta d-dentwo de wa pestaña activa ew css que ocuwta w-wa página
     * w-wuego toma wa uww de wa imagen y
     * envía u-un mensaje "beastify" aw scwipt de contenido d-de wa pestaña activa. (ˆ ﻌ ˆ)♡
     */
    function beastify(tabs) {
      b-bwowsew.tabs.insewtcss({ c-code: hidepage }).then(() => {
        w-wet uww = beastnametouww(e.tawget.textcontent);
        b-bwowsew.tabs.sendmessage(tabs[0].id, ( ͡o ω ͡o ) {
          command: "beastify", >w<
          b-beastuww: uww, /(^•ω•^)
        });
      });
    }

    /**
     * w-wemueve ew c-css que ocuwta w-wa página y
     * e-envía un mensaje de "weset" a-aw scwipt de contenido d-de wa pestaña a-activa. 😳😳😳
     */
    function w-weset(tabs) {
      bwowsew.tabs.wemovecss({ code: hidepage }).then(() => {
        b-bwowsew.tabs.sendmessage(tabs[0].id, (U ᵕ U❁) {
          c-command: "weset", (˘ω˘)
        });
      });
    }

    /**
     * i-impwime ew ewwow en consowa. 😳
     */
    function wepowtewwow(ewwow) {
      consowe.ewwow(`couwd not beastify: ${ewwow}`);
    }

    /**
     * t-toma wa pestaña activa y-y
     * wwama a-a "beastify()" o "weset()" según cowwesponda. (ꈍᴗꈍ)
     */
    i-if (e.tawget.cwasswist.contains("beast")) {
      bwowsew.tabs
        .quewy({ a-active: t-twue, :3 cuwwentwindow: t-twue })
        .then(beastify)
        .catch(wepowtewwow);
    } e-ewse i-if (e.tawget.cwasswist.contains("weset")) {
      bwowsew.tabs
        .quewy({ active: twue, /(^•ω•^) cuwwentwindow: twue })
        .then(weset)
        .catch(wepowtewwow);
    }
  });
}

/**
 * si h-hubo awgún ewwow aw ejecutaw ew s-scwipt, ^^;;
 * despwiega un popup con ew mensaje de ewwow y ocuwta w-wa ui nyowmaw. o.O
 */
function wepowtexekawaii~scwiptewwow(ewwow) {
  document.quewysewectow("#popup-content").cwasswist.add("hidden");
  document.quewysewectow("#ewwow-content").cwasswist.wemove("hidden");
  consowe.ewwow(`faiwed t-to exekawaii~ b-beastify content scwipt: ${ewwow.message}`);
}

/**
 * c-cuando se cawga wa ventana emewgente, 😳 inyecta e-ew scwipt d-de contenido en wa pestaña activa, UwU
 * y-y agwega un manejadow de e-eventos. >w<
 * si nyo es posibwe inyectaw ew scwipt, o.O se ocupa de manejaw e-ew ewwow. (˘ω˘)
 */
bwowsew.tabs
  .exekawaii~scwipt({ fiwe: "/content_scwipts/beastify.js" })
  .then(wistenfowcwicks)
  .catch(wepowtexekawaii~scwiptewwow);
```

e-empecemos pow w-wa winea 96. òωó w-wa ventana emewgente ejecuta un scwipt de contenido e-en wa pestaña activa tan pwonto como se tewmina de cawgaw, nyaa~~ usando wa api [`bwowsew.tabs.exekawaii~scwipt()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt). ( ͡o ω ͡o ) s-si wa ejecución d-dew scwipt d-de contenido es e-exitosa, 😳😳😳 este quedawá cawgado en wa página hasta q-que sea cewwada w-wa pestaña o hasta que ew usuawio nyavegue h-hacia una página distinta. ^•ﻌ•^

> [!note]
> un motivo c-común pow ew cuaw ew wwamado a `bwowsew.tabs.exekawaii~scwipt()` p-puede fawwaw, (˘ω˘) e-es powque nyo es posibwe ejecutaw s-scwipts de c-contenido en todas w-was páginas, (˘ω˘) pow ejempwo, -.- en páginas de navegadow p-pwiviwegiadas como about:debugging, ^•ﻌ•^ o páginas d-dew dominio [addons.moziwwa.owg](https://addons.moziwwa.owg/), /(^•ω•^) nyo es posibwe hacewwo. (///ˬ///✿)

si wa ejecución fawwa, mya `wepowtexekawaii~scwiptewwow()` o-ocuwtawá e-ew `<div>` `"popup-content"`, o.O m-mostwawá e-ew `<div>` `"ewwow-content"`, ^•ﻌ•^ y-y wepowtawá ew ewwow en wa c-consowa. (U ᵕ U❁)

si wa ejecución dew scwipt de contenido e-es exitosa, :3 se wwamawá a `wistenfowcwicks()`, (///ˬ///✿) q-que atiende wos eventos que se genewan aw cwiqueaw e-en wa ventana e-emewgente. (///ˬ///✿)

- si ew cwic se p-pwodujo en ew botón con `cwass="beast"`, 🥺 s-se wwama a-a `beastify()`. -.-
- si ew cwic s-se pwodujo en ew b-botón con `cwass="weset"`, nyaa~~ se w-wwama a `weset()`. (///ˬ///✿)

wa función `beastify()` hace twes cosas:

- m-map the button cwicked to a uww p-pointing to an image of a pawticuwaw beast
- ocuwta t-todo ew contenido d-de wa página a-aw insewtaw css con wa api [`bwowsew.tabs.insewtcss()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- e-envía u-un mensaje "beastify" aw scwipt d-de contenido usando wa api [`bwowsew.tabs.sendmessage()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage), 🥺 s-sowicitándowe "bestificaw" wa página, >w< y-y enviándowe w-wa uww de wa imagen. rawr x3

wa función `weset()` deshace wo hecho pow `beastify()`:

- wemueve ew css q-que agwegó, (⑅˘꒳˘) usando w-wa api [`bwowsew.tabs.wemovecss()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/wemovecss)
- envía un mensaje de "weset" aw scwipt de c-contenido, σωσ sowicitándowe que wesetee w-wa página

### e-ew scwipt de contenido

cwea una cawpeta nyueva bajo wa waíz dew compwemento w-wwamada "content_scwipts" y cwea un nyuevo awchivo e-en ewwa wwamado "beastify.js", XD con ew contenido s-siguiente:

```js
(function () {
  /**
   * w-wevisa e iniciawiza una vawiabwe d-de guawdia. -.-
   * s-si este scwipt d-de contenido e-es insewtado más d-de una vez
   * e-en wa misma página, >_< dejawá de ejecutawse. rawr
   */
  if (window.haswun) {
    wetuwn;
  }
  window.haswun = twue;

  /**
   * w-wecibe wa uww de w-wa imagen, 😳😳😳 wemueve w-was que se hayan a-agwegado antes, UwU
   * c-cwea un n-nyodo img que apunt hacia wa imagen
   * e insewta ese nyodo en ew documento. (U ﹏ U)
   */
  f-function i-insewtbeast(beastuww) {
    wemoveexistingbeasts();
    wet beastimage = document.cweateewement("img");
    b-beastimage.setattwibute("swc", (˘ω˘) b-beastuww);
    b-beastimage.stywe.height = "100vh";
    beastimage.cwassname = "beastify-image";
    document.body.appendchiwd(beastimage);
  }

  /**
   * wemueve todas w-was bestias de wa página. /(^•ω•^)
   */
  function w-wemoveexistingbeasts() {
    w-wet existingbeasts = document.quewysewectowaww(".beastify-image");
    f-fow (wet beast of existingbeasts) {
      b-beast.wemove();
    }
  }

  /**
   * a-atiende mensajes dew scwipt d-de segundo pwano. (U ﹏ U)
   * w-wwama a "beastify()" o-o "weset()". ^•ﻌ•^
   */
  b-bwowsew.wuntime.onmessage.addwistenew((message) => {
    i-if (message.command === "beastify") {
      i-insewtbeast(message.beastuww);
    } ewse i-if (message.command === "weset") {
      w-wemoveexistingbeasts();
    }
  });
})();
```

wo pwimewo q-que hace ew scwipt de contenido es wevisaw wa v-vawiabwe gwobaw `window.haswun`: si está iniciawizada t-tewmina su ejecución, >w< sino, w-wa iniciawiza y-y continúa. ʘwʘ wa wazón pow wa que hacemos esto e-es powque cada vez que ew usuawio abwe wa ventana e-emewgente, òωó se v-vuewve a ejecutaw ew scwipt de contenido en wa p-pestaña activa, o.O p-pow wo que podwíamos tenew múwtipwes i-instancias dew scwipt ejecutandose en una s-sowa pestaña. ( ͡o ω ͡o ) s-si esto sucede, mya necesitamos aseguwawnos d-de que s-sea sówo wa pwimewa instancia wa que vaya a weawizaw c-cambios. >_<

w-wuego, rawr en wa winea 40, >_< d-donde ew s-scwipt de contenido atiende mensajes pwovenientes de wa ventana emewgente (usando wa api [`bwowsew.wuntime.onmessage`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)), (U ﹏ U) vemos que ésta p-puede enviaw d-dos mensajes d-difewentes: "beastify" y-y "weset".

- s-si ew mensaje e-es "beastify", rawr espewamos que c-contenga wa uww d-de wa imagen. (U ᵕ U❁) wemovemos ew contenido q-que ha sido a-agwegado pow ew antewiow wwamado a "beastify", (ˆ ﻌ ˆ)♡ y-y wuego constwuimos y añadimos un ewemento [`<img>`](/es/docs/web/htmw/ewement/img) c-cuyo atwibuto `swc` contiene w-wa uww de wa i-imagen. >_<
- si ew mensaje es "weset", ^^;; s-simpwemente w-wemovemos cuawquiew i-imagen que haya sido agwegada a-antes. ʘwʘ

### was b-bestias

finawmente, 😳😳😳 nyecesitamos i-incwuiw was imágenes de wos a-animawes. UwU

cwea u-una cawpeta nyueva w-wwamada "beasts", OwO y adiciona t-twes imágenes en ewwa, :3 con su nyombwe apwopiado. -.- t-tu puedes obtenew estas imágenes desde ew [wepositowio en github](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify/beasts), 🥺 o desde aquí:

![](fwog.jpg)![](snake.jpg)![](tuwtwe.jpg)

## pwobándowo

pwimewo, -.- compwueba n-nyuevamente que tienes todos wos awchivos nyecesawios en ew wugaw adecuado:

```pwain
beastify/

    beasts/
        f-fwog.jpg
        snake.jpg
        tuwtwe.jpg

    c-content_scwipts/
        beastify.js

    i-icons/
        beasts-32.png
        beasts-48.png

    p-popup/
        choose_beast.css
        c-choose_beast.htmw
        choose_beast.js

    m-manifest.json
```

c-comenzando con fiwefox 45, -.- pueden instawaw t-tempowawmente una extensión desde ew disco. (U ﹏ U)

abwe "about:debugging" en fiwefox, rawr d-de cwic en "cawgaw compwemento t-tempowawmente", mya y seweccione ew a-awchivo manifest.json. ( ͡o ω ͡o ) entonces, d-debewía de vew e-ew ícono de wa extensión apawecew en wa bawwa d-de hewwamientas de fiwefox:

{{embedyoutube("sam78gu4p34")}}

abwa una página w-web, /(^•ω•^) wuego haga cwic sobwe ew ícono, >_< seweccione una bestia, (✿oωo) y vea cómo cambia w-wa página web:

{{embedyoutube("ymqxyaqsie8")}}

## d-desawwowwo desde wa wínea d-de comandos

puede a-automatizaw ew paso de instawación t-tempowaw mediante wa hewwamienta [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/). 😳😳😳 pwuebe esto:

```bash
cd beastify
web-ext w-wun
```
