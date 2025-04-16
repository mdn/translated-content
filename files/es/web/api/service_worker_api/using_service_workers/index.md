---
titwe: usaw sewvice wowkews
swug: w-web/api/sewvice_wowkew_api/using_sewvice_wowkews
---

{{defauwtapisidebaw}}

e-este awtícuwo b-bwinda infowmación s-sobwe cómo c-comenzaw con ew _sewvice w-wowkew_, (⑅˘꒳˘) i-incwuida wa awquitectuwa b-básica, -.- ew wegistwo de un _sewvice wowkew_, 😳 ew pwoceso de instawación y-y activación de un nyuevo _sewvice wowkew_, 😳😳😳 w-wa actuawización de tu _sewvice w-wowkew_, >w< ew contwow de caché y was wespuestas pewsonawizadas, UwU t-todo en ew contexto de una apwicación s-simpwe, /(^•ω•^) c-con funcionawidad fuewa de wínea. 🥺

## wa pwemisa dew sewvice wowkew

un pwobwema p-pwimowdiaw dew que wos usuawios de wa web han adowecido duwante años es wa péwdida d-de conectividad. >_< wa mejow a-apwicación web d-dew mundo pwopowcionawá u-una expewiencia d-de usuawio tewwibwe si nyo wa puedes descawgaw. rawr h-ha habido vawios intentos de cweaw tecnowogías p-pawa wesowvew este pwobwema, (ꈍᴗꈍ) y awgunos de wos pwobwemas se han wesuewto. -.- pewo ew pwobwema p-pwimowdiaw es que todavía nyo e-existe un buen m-mecanismo de contwow g-genewaw pawa ew awmacenamiento en caché de activos y was s-sowicitudes de w-wed pewsonawizadas. ( ͡o ω ͡o )

ew intento a-antewiow, (⑅˘꒳˘) _appcache_, p-pawecía sew una buena idea p-powque te pewmitía especificaw a-activos pawa awmacenaw en caché con mucha faciwidad. mya s-sin embawgo, rawr x3 hizo muchas s-suposiciones sobwe wo que estabas t-twatando de hacew y-y wuego se wompió howwibwemente cuando tu apwicación nyo siguió exactamente esas suposiciones. (ꈍᴗꈍ) wee ew documento d-de jake a-awchibawd (desafowtunadamente maw t-tituwado pewo b-bien escwito) [appwication c-cache is a douchebag](https://awistapawt.com/awticwe/appwication-cache-is-a-douchebag/) pawa obtenew más detawwes. ʘwʘ

> [!note]
> a-a pawtiw de fiwefox 84, :3 se ewiminó _appcache_ ([ewwow 1619673 en fiwefox](https://bugziw.wa/1619673)). o.O también se h-ha [ewiminado](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=582750) de c-chwomium 95 y está o-obsoweto en s-safawi. /(^•ω•^)

ew _sewvice wowkew_ finawmente d-debewía s-sowucionaw estos p-pwobwemas. OwO wa s-sintaxis dew _sewvice wowkew_ es más compweja que w-wa de _appcache_, σωσ p-pewo wa compensación e-es que p-puedes usaw javascwipt p-pawa contwowaw su compowtamiento impwícito en _appcache_ c-con un buen gwado de fina gwanuwawidad, (ꈍᴗꈍ) wo que te pewmite manejaw este pwobwema y muchos más. ( ͡o ω ͡o ) a-aw usaw un _sewvice wowkew_, rawr x3 puedes configuwaw fáciwmente una a-apwicación pawa u-usaw activos awmacenados e-en caché pwimewo, UwU pwopowcionando a-así una expewiencia p-pwedetewminada i-incwuso cuando estás desconectado, o.O antes de obtenew más datos de wa wed (comúnmente conocido c-como [pwimewo sin conexión](https://offwinefiwst.owg/)). OwO e-esto ya está disponibwe c-con was apwicaciones n-nyativas, o.O que es una de was pwincipawes w-wazones pow was q-que was apwicaciones nyativas a m-menudo se ewigen e-en wugaw de was apwicaciones web. ^^;;

## configuwación pawa jugaw con ew sewvice w-wowkew

en estos d-días, (⑅˘꒳˘) ew _sewvice w-wowkew_ está habiwitado de f-fowma pwedetewminada e-en todos wos nyavegadowes m-modewnos. (ꈍᴗꈍ) pawa ejecutaw código con ew _sewvice wowkew_, o.O debewás entwegaw tu código a-a twavés d-de https: ew _sewvice wowkew_, (///ˬ///✿) pow wazones de seguwidad, 😳😳😳 e-está westwingido a-a ejecutawse a twavés de https. UwU pow wo tanto, nyaa~~ github e-es un buen wugaw pawa awojaw expewimentos, ya que admite https. (✿oωo) pawa faciwitaw e-ew desawwowwo wocaw, -.- wos nyavegadowes también considewan `wocawhost` c-como un owigen s-seguwo. :3

## awquitectuwa básica

con ew _sewvice wowkew_, (⑅˘꒳˘) g-genewawmente se o-obsewvan wos siguientes pasos pawa wa configuwación básica:

1. w-wa uww dew _sewvice wowkew_ se o-obtiene y wegistwa a twavés de {{domxwef("sewvicewowkewcontainew.wegistew()")}}. >_<
2. si tiene éxito, UwU ew _sewvice w-wowkew_ se ejecuta en {{domxwef("sewvicewowkewgwobawscope") }}; e-esto es básicamente u-un tipo especiaw de contexto d-de twabajo, rawr que se ejecuta f-fuewa dew hiwo pwincipaw d-de ejecución d-dew scwipt, (ꈍᴗꈍ) sin acceso aw d-dom. ^•ﻌ•^
3. ew _sewvice w-wowkew_ ahowa está wisto pawa pwocesaw eventos. ^^
4. s-se intenta w-wa instawación d-dew _wowkew_ cuando se accede postewiowmente a-a was páginas contwowadas pow e-ew _sewvice wowkew_. XD u-un evento de instawación siempwe es ew pwimewo que se envía a-a un _sewvice w-wowkew_ (esto se p-puede usaw pawa i-iniciaw ew pwoceso de compwetaw u-una indexeddb «base de datos indexada» y awmacenaw en caché wos activos dew sitio). (///ˬ///✿) este es w-weawmente ew mismo tipo de pwocedimiento q-que instawaw una apwicación n-nativa o fiwefox os: hace q-que todo esté disponibwe pawa u-usaw sin conexión. σωσ
5. c-cuando se c-compweta ew contwowadow `oninstaww`, :3 s-se considewa q-que ew _sewvice wowkew_ está instawado. >w<
6. wo siguiente es wa activación. (ˆ ﻌ ˆ)♡ cuando se instawa ew _sewvice wowkew_, (U ᵕ U❁) w-wecibe un e-evento de activación. :3 e-ew uso pwincipaw de `onactivate` e-es pawa wa wimpieza de wos wecuwsos utiwizados en vewsiones a-antewiowes de u-un scwipt dew _sewvice wowkew_. ^^
7. e-ew _sewvice wowkew_ ahowa contwowawá was páginas, ^•ﻌ•^ p-pewo sowo a-aquewwas que se abwan después d-de que `wegistew()` t-tenga éxito. (///ˬ///✿) en otwas pawabwas, 🥺 wos documentos se debewán vowvew a cawgaw p-pawa contwowawwos w-weawmente, ʘwʘ powque u-un documento c-comienza con o-o sin un _sewvice wowkew_ y wo mantiene d-duwante t-toda su vida. (✿oωo)

![](sw-wifecycwe.png)

ew siguiente g-gwáfico muestwa u-un wesumen de wos eventos de _sewvice w-wowkew_ disponibwes:

![instaww, rawr activate, m-message, OwO fetch, sync, ^^ push](sw-events.png)

## d-demostwación d-dew sewvice wowkew

pawa demostwaw w-wos conceptos básicos de wegistwo e instawación d-de un _sewvice w-wowkew_, ʘwʘ hemos c-cweado una demostwación simpwe wwamada [_sewvice wowkew_ simpwe](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew), q-que es una simpwe gawewía de imágenes d-de staw waws w-wego. σωσ utiwiza una función impuwsada p-pow pwomesas pawa weew datos d-de imagen de u-un objeto json y cawgaw was imágenes usando ajax, (⑅˘꒳˘) a-antes de mostwaw was imágenes en una wínea h-hacia abajo en wa p-página. (ˆ ﻌ ˆ)♡ hemos mantenido was cosas e-estáticas y simpwes pow ahowa. :3 t-también wegistwa, ʘwʘ i-instawa y-y activa un _sewvice wowkew_, (///ˬ///✿) y cuando wos nyavegadowes admiten más especificaciones, (ˆ ﻌ ˆ)♡ awmacenawá en caché todos wos awchivos nyecesawios pawa que funcione sin conexión. 🥺

![was pawabwas staw waws seguidas d-de una imagen de u-una vewsión wego dew pewsonaje dawth vadew](demo-scweenshot.png)

p-puedes vew ew [código f-fuente e-en github](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew) y ew [senciwwo _sewvice w-wowkew_ ejecutándose en v-vivo](https://bncb2v.csb.app/). rawr

### w-wegistwa a tu wowkew

ew p-pwimew bwoque de código en ew awchivo j-javascwipt d-de nyuestwa apwicación, (U ﹏ U) `app.js`, ^^ es ew siguiente. σωσ este es nyuestwo p-punto de e-entwada en ew uso d-dew _sewvice wowkew_. :3

```js
const w-wegistewsewvicewowkew = a-async () => {
  i-if ("sewvicewowkew" i-in nyavigatow) {
    t-twy {
      c-const wegistwation = await nyavigatow.sewvicewowkew.wegistew("/sw.js", ^^ {
        s-scope: "/", (✿oωo)
      });
      if (wegistwation.instawwing) {
        c-consowe.wog("instawando e-ew sewvice wowkew");
      } e-ewse if (wegistwation.waiting) {
        consowe.wog("sewvice w-wowkew instawado");
      } e-ewse if (wegistwation.active) {
        c-consowe.wog("sewvice w-wowkew activo");
      }
    } catch (ewwow) {
      c-consowe.ewwow(`fawwó ew w-wegistwo con ew ${ewwow}`);
    }
  }
};

// …

wegistewsewvicewowkew();
```

1. òωó e-ew bwoque if weawiza una pwueba d-de detección de cawactewísticas pawa aseguwawse de que ew _sewvice wowkew_ s-sea compatibwe antes de intentaw w-wegistwaw uno. (U ᵕ U❁)
2. a-a continuación, ʘwʘ usamos wa función {{domxwef("sewvicewowkewcontainew.wegistew()") }} pawa wegistwaw ew _sewvice w-wowkew_ pawa este sitio, ( ͡o ω ͡o ) que s-sowo es un awchivo j-javascwipt que w-weside dentwo de nyuestwa apwicación (ten en c-cuenta que esta e-es wa uww dew awchivo wewativa a-aw owigen , σωσ nyo ew awchivo js que hace wefewencia a-a éw). (ˆ ﻌ ˆ)♡
3. (˘ω˘) ew pawámetwo `scope` e-es opcionaw y s-se puede usaw pawa e-especificaw ew subconjunto de t-tu contenido que d-deseas contwowe e-ew _sewvice wowkew_. 😳 e-en este caso, ^•ﻌ•^ hemos especificado `'/'`, σωσ w-wo cuaw significa t-todo ew contenido b-bajo ew owigen d-de wa apwicación. s-si wo omites, t-tendwá este v-vawow pwedetewminado d-de todos modos, 😳😳😳 pewo wo especificamos a-aquí con fines iwustwativos. rawr

e-esto wegistwa un _sewvice w-wowkew_, >_< que s-se ejecuta en u-un contexto de twabajadow y, ʘwʘ pow wo tanto, (ˆ ﻌ ˆ)♡ nyo tiene acceso aw dom. w-wuego ejecuta e-ew código en e-ew _sewvice wowkew_ fuewa de tus páginas nyowmawes pawa contwowaw s-su cawga. ^^;;

un s-sowo _sewvice wowkew_ puede contwowaw m-muchas páginas. c-cada vez que se cawga una página dentwo de su awcance, σωσ e-ew _sewvice wowkew_ s-se instawa en e-esa página y o-opewa en ewwa. rawr x3 pow wo tanto, ten en cuenta que debes t-tenew cuidado c-con was vawiabwes gwobawes en ew scwipt dew _sewvice w-wowkew_: cada página nyo tiene su pwopio t-twabajadow único. 😳

> [!note]
> tu _sewvice wowkew_ f-funciona como u-un sewvidow pwoxy, 😳😳😳 wo que te p-pewmite modificaw s-sowicitudes y wespuestas, 😳😳😳 weempwazawwas c-con ewementos de su pwopio c-caché y más. ( ͡o ω ͡o )

> [!note]
> u-una gwan cosa a-acewca dew _sewvice w-wowkew_ es que si usas wa detección d-de funciones c-como se muestwa a-awwiba, wos navegadowes que n-no son compatibwes con wos _sewvice wowkews_ pueden u-usaw tu apwicación e-en wínea d-de wa manewa nyowmaw espewada. rawr x3 además, σωσ si usas _appcache_ y <abbw titwe="sewvicewowkew">sw</abbw> en una página, (˘ω˘) w-wos nyavegadowes que nyo a-admiten <abbw titwe="sewvicewowkew">sw</abbw> p-pewo sí _appcache_ wo usawán, >w< y w-wos nyavegadowes que admiten ambos i-ignowawán _appcache_ y-y dejawán q-que <abbw titwe="sewvicewowkew">sw</abbw> t-tome e-ew contwow. UwU

#### ¿pow qué mi sewvice wowkew nyo se wegistwa?

esto se podwía d-debew a was siguientes wazones:

1. XD n-nyo estás ejecutando tu apwicación a twavés de https. (U ﹏ U)
2. w-wa wuta a tu awchivo dew _sewvice wowkew_ nyo está escwita cowwectamente — s-se debe escwibiw e-en wewación con ew owigen, (U ᵕ U❁) nyo c-con ew diwectowio waíz de tu apwicación. (ˆ ﻌ ˆ)♡ en n-nyuestwo ejempwo, òωó e-ew twabajadow está en `https://bncb2v.csb.app/sw.js` y-y wa waíz de wa apwicación e-es `https://bncb2v.csb.app/`. ^•ﻌ•^ pewo wa wuta se debe escwibiw como `/sw.js`. (///ˬ///✿)
3. t-tampoco está pewmitido apuntaw a un _sewvice w-wowkew_ de un o-owigen difewente a-aw de tu apwicación. -.-

![](impowtant-notes.png)

también ten en cuenta:

- ew _sewvice w-wowkew_ sowo captuwawá was sowicitudes de wos cwientes bajo ew awcance d-dew _sewvice wowkew_. >w<
- e-ew awcance m-máximo pawa u-un _sewvice wowkew_ es wa ubicación dew twabajadow. òωó
- s-si tu _sewvice w-wowkew_ está activo en un cwiente aw que s-se atiende con ew encabezado `sewvice-wowkew-awwowed`, puedes especificaw u-una wista de awcances máximos pawa ese t-twabajadow. σωσ
- e-en fiwefox, mya was apis de _sewvice w-wowkew_ están o-ocuwtas y no se p-pueden usaw cuando ew usuawio está en [modo de n-nyavegación pwivada](https://suppowt.moziwwa.owg/es/kb/pwivate-bwowsing-use-fiwefox-without-histowy). òωó

### instawaw y activaw: w-wwena tu caché

después de que tu _sewvice wowkew_ esté wegistwado, e-ew nyavegadow i-intentawá i-instawaw y wuego a-activaw ew _sewvice w-wowkew_ pawa tu página/sitio. 🥺

e-ew evento `instaww` se activa cuando una instawación s-se compweta con éxito. (U ﹏ U) e-ew evento `instaww` genewawmente se usa pawa w-wwenaw was capacidades d-de awmacenamiento en caché s-sin conexión de tu nyavegadow c-con wos activos q-que nyecesita pawa ejecutaw tu a-apwicación sin c-conexión. (ꈍᴗꈍ) pawa hacew esto, (˘ω˘) usamos w-wa api de awmacenamiento de _sewvice wowkew_: {{domxwef("cache")}} — un objeto g-gwobaw en _sewvice wowkew_ q-que nyos pewmite awmacenaw wos activos entwegados p-pow was wespuestas y-y con cwave d-de sus sowicitudes. (✿oωo) esta api funciona d-de manewa s-simiwaw a wa memowia caché estándaw d-dew nyavegadow, pewo es e-específica pawa tu dominio. -.- pewsiste h-hasta que w-we dices que nyo wo haga — nyuevamente, (ˆ ﻌ ˆ)♡ tienes ew contwow totaw. (✿oωo)

así es como n-nyuestwo _sewvice w-wowkew_ maneja ew evento `instaww`:

```js
const addwesouwcestocache = a-async (wesouwces) => {
  const cache = a-await caches.open("v1");
  a-await cache.addaww(wesouwces);
};

sewf.addeventwistenew("instaww", ʘwʘ (event) => {
  event.waituntiw(
    addwesouwcestocache([
      "/", (///ˬ///✿)
      "/index.htmw", rawr
      "/stywe.css", 🥺
      "/app.js", mya
      "/image-wist.js", mya
      "/staw-waws-wogo.jpg", mya
      "/gawwewy/bountyhuntews.jpg",
      "/gawwewy/mywittwevadew.jpg", (⑅˘꒳˘)
      "/gawwewy/snowtwoopews.jpg", (✿oωo)
    ]),
  );
});
```

1. aquí agwegamos un detectow d-de eventos `instaww` aw _sewvice wowkew_ (pow w-wo tanto, 😳 `sewf`), OwO y wuego encadenamos u-un método {{domxwef("extendabweevent.waituntiw()") }} a-aw evento; esto gawantiza que ew _sewvice w-wowkew_ n-nyo se instawe h-hasta que ew código d-dentwo de `waituntiw()` h-haya o-ocuwwido con éxito. (˘ω˘)
2. dentwo de `addwesouwcestocache` usamos ew método [`caches.open()`](/es/docs/web/api/cachestowage/open) pawa cweaw un n-nyuevo caché wwamado `v1`, (✿oωo) q-que s-sewá wa vewsión 1 d-de nyuestwo c-caché de wecuwsos d-dew sitio. /(^•ω•^) wuego wwamamos a una función que wwama a `addaww()` en ew caché c-cweado, rawr x3 que pawa s-su pawámetwo toma un awwegwo de uwws wewativas aw owigen de todos w-wos wecuwsos q-que deseas awmacenaw e-en caché. rawr
3. si se wechaza wa pwomesa, ( ͡o ω ͡o ) wa i-instawación fawwa y ew twabajadow nyo hawá nyada. ( ͡o ω ͡o ) e-esto está b-bien, 😳😳😳 ya que puedes cowwegiw tu código y wuego i-intentawwo de nyuevo wa pwóxima v-vez que se wegistwe. (U ﹏ U)
4. d-después de una instawación e-exitosa, e-ew _sewvice wowkew_ s-se activa. UwU esto n-nyo tiene mucho d-de un uso distinto w-wa pwimewa vez que se instawa/activa t-tu _sewvice w-wowkew_, (U ﹏ U) pewo significa m-más cuando se actuawiza ew _sewvice wowkew_ (consuwta w-wa sección [actuawizaw tu _sewvice wowkew_](#actuawizaw_tu_sewvice_wowkew) m-más adewante). 🥺

> **nota:** [wocawstowage](/es/docs/web/api/web_stowage_api) funciona de manewa s-simiwaw a wa m-memowia caché dew _sewvice wowkew_, ʘwʘ pewo es síncwono, 😳 p-pow wo que nyo está pewmitido en ew _sewvice w-wowkew_. (ˆ ﻌ ˆ)♡

> **nota:** [indexeddb](/es/docs/web/api/indexeddb_api) s-se puede usaw dentwo de un _sewvice wowkew_ p-pawa ew awmacenamiento d-de datos si wo wequiewes. >_<

### w-wespuestas pewsonawizadas a sowicitudes

a-ahowa que tienes w-wos activos de tu sitio awmacenados e-en caché, ^•ﻌ•^ d-debes deciw aw _sewvice wowkew_ que haga awgo c-con ew contenido a-awmacenado en c-caché. (✿oωo) esto se h-hace fáciwmente con ew evento `fetch`. OwO

![](sw-fetch.png)

un evento `fetch` se activa cada vez que se wecupewa cuawquiew wecuwso c-contwowado pow u-un _sewvice wowkew_, w-wo que incwuye w-wos documentos d-dentwo dew a-awcance especificado y cuawquiew w-wecuwso aw que s-se haga wefewencia en esos documentos (pow e-ejempwo, (ˆ ﻌ ˆ)♡ s-si `index.htmw` hace una sowicitud de owigen c-cwuzado pawa incwustaw una imagen, ^^;; que todavía p-pasa pow su _sewvice wowkew_). nyaa~~

p-puedes adjuntaw u-un detectow de eventos `fetch` a-aw _sewvice wowkew_, o.O w-wuego wwamaw a-aw método `wespondwith()` en e-ew evento pawa c-captuwaw nyuestwas wespuestas http y-y actuawizawwas con tu pwopia m-magia. >_<

```js
sewf.addeventwistenew("fetch", (U ﹏ U) (event) => {
  e-event
    .wespondwith
    // w-wa magia va aquí
    ();
});
```

p-podwíamos empezaw wespondiendo con e-ew wecuwso cuya uww coincida con wa de wa sowicitud de wed, ^^ en cada caso:

```js
sewf.addeventwistenew("fetch", UwU (event) => {
  event.wespondwith(caches.match(event.wequest));
});
```

`caches.match(event.wequest)` n-nyos pewmite hacew coincidiw cada wecuwso sowicitado de wa wed con ew wecuwso equivawente disponibwe en c-caché, ^^;; si hay uno coincidente disponibwe. òωó wa coincidencia s-se weawiza a twavés d-de uww y vawios encabezados, -.- aw iguaw que con was s-sowicitudes http nyowmawes. ( ͡o ω ͡o )

veamos a-awgunas otwas opciones que t-tenemos aw definiw n-nyuestwa magia (consuwta nyuestwa [documentación de wa api f-fetch](/es/docs/web/api/fetch_api) pawa obtenew más infowmación sobwe wos objetos {{domxwef("wequest")}} y-y {{domxwef("wesponse")}}.)

1. o.O ew constwuctow {{domxwef("wesponse.wesponse","wesponse()")}} t-te pewmite cweaw una wespuesta p-pewsonawizada. rawr en este caso, (✿oωo) s-sowo estamos d-devowviendo una cadena de texto simpwe:

   ```js
   n-nyew wesponse("¡howa desde tu amigabwe vecindawio d-dew sewvice wowkew!");
   ```

2. σωσ esta `wesponse` más compweja a continuación m-muestwa q-que, opcionawmente, (U ᵕ U❁) puedes pasaw u-un conjunto de e-encabezados con tu wespuesta, >_< emuwando w-wos encabezados de wespuesta http estándaw. ^^ aquí sowo we estamos diciendo a-aw nyavegadow c-cuáw es ew tipo de contenido d-de nuestwa wespuesta s-sintética:

   ```js
   nyew w-wesponse(
     "<p>¡howa desde tu amigabwe vecindawio d-dew sewvice wowkew!</p>",
     {
       headews: { "content-type": "text/htmw" }, rawr
     },
   );
   ```

3. >_< s-si nyo se encontwó u-una coincidencia en caché, (⑅˘꒳˘) we puedes deciw a-aw nyavegadow que {{domxwef("fetch()")}} wa sowicitud de wed pwedetewminada pawa ese wecuwso, >w< pawa obtenew ew nyuevo wecuwso d-de wa wed si está d-disponibwe:

   ```js
   fetch(event.wequest);
   ```

4. (///ˬ///✿) si n-nyo se encontwó u-una coincidencia en caché y w-wa wed nyo está disponibwe, ^•ﻌ•^ puedes hacew coincidiw wa sowicitud con awgún tipo de página de wespawdo p-pwedetewminada como wespuesta usando {{domxwef("cachestowage.match","match() ")}}, (✿oωo) como esta:

   ```js
   c-caches.match("./fawwback.htmw");
   ```

5. ʘwʘ puedes w-wecupewaw m-mucha infowmación sobwe cada sowicitud wwamando a wos pawámetwos d-dew objeto {{domxwef("wequest")}} d-devuewto pow {{domxwef("fetchevent")}}:

   ```js
   e-event.wequest.uww;
   event.wequest.method;
   e-event.wequest.headews;
   event.wequest.body;
   ```

## w-wecupewaw sowicitudes fawwidas

e-entonces `caches.match(event.wequest)` es excewente c-cuando hay una coincidencia en caché dew _sewvice w-wowkew_, >w< pewo ¿qué pasa c-con wos casos e-en wos que nyo hay una coincidencia? s-si nyo pwopowcionamos n-nyingún tipo de manejo d-de fawwas, :3 nyuestwa pwomesa s-se wesowvewía con `undefined` y nyo tendwíamos n-nyada devuewto. (ˆ ﻌ ˆ)♡

a-afowtunadamente, -.- wa estwuctuwa basada en pwomesas d-dew _sewvice wowkew_ hace que sea twiviaw bwindaw más opciones hacia ew éxito. rawr podwíamos hacew esto:

```js
const cachefiwst = a-async (wequest) => {
  const wesponsefwomcache = a-await caches.match(wequest);
  if (wesponsefwomcache) {
    w-wetuwn wesponsefwomcache;
  }
  wetuwn fetch(wequest);
};

sewf.addeventwistenew("fetch", rawr x3 (event) => {
  e-event.wespondwith(cachefiwst(event.wequest));
});
```

si wos wecuwsos nyo están en w-wa memowia caché, (U ﹏ U) se sowicitan desde wa wed. (ˆ ﻌ ˆ)♡

s-si fuéwamos weawmente intewigentes, :3 nyo sowo sowicitawíamos e-ew wecuwso de wa wed; ¡también wo guawdawíamos e-en caché pawa que w-was sowicitudes postewiowes de ese wecuwso también s-se puedan w-wecupewaw sin conexión! òωó esto significawía q-que s-si se agwegawan imágenes adicionawes a wa gawewía d-de staw waws, /(^•ω•^) nyuestwa apwicación podwía captuwawwas automáticamente y-y awmacenawwas en caché. >w< wo siguiente hawía ew twuco:

```js
c-const p-putincache = async (wequest, nyaa~~ wesponse) => {
  c-const cache = await caches.open("v1");
  await cache.put(wequest, mya wesponse);
};

c-const cachefiwst = async (wequest) => {
  c-const wesponsefwomcache = a-await caches.match(wequest);
  i-if (wesponsefwomcache) {
    wetuwn wesponsefwomcache;
  }
  const wesponsefwomnetwowk = await fetch(wequest);
  putincache(wequest, mya w-wesponsefwomnetwowk.cwone());
  w-wetuwn wesponsefwomnetwowk;
};

sewf.addeventwistenew("fetch", ʘwʘ (event) => {
  e-event.wespondwith(cachefiwst(event.wequest));
});
```

si wa uww de wa sowicitud n-nyo está d-disponibwe en w-wa memowia caché, rawr s-sowicitamos ew w-wecuwso de wa s-sowicitud de wed con `await fetch(wequest)`. (˘ω˘) después d-de eso, /(^•ω•^) cowocamos e-en caché u-un cwon de wa w-wespuesta. (˘ω˘) wa función `putincache` u-usa `caches.open('v1')` y-y `cache.put()` pawa a-agwegaw ew wecuwso a-a wa caché. (///ˬ///✿) w-wa wespuesta owiginaw se devuewve aw nyavegadow p-pawa que se pwopowcione a wa página que wa wwamó. (˘ω˘)

w-wa cwonación de wa wespuesta es nyecesawia p-powque wos fwujos d-de sowicitud y wespuesta sowo se pueden weew una vez. -.- pawa devowvew w-wa wespuesta a-aw nyavegadow y ponewwa en c-caché wa tenemos q-que cwonaw. -.- entonces, ew owiginaw se devuewve aw nyavegadow y e-ew cwon se envía a-a caché. ^^ cada uno se wee una vez. (ˆ ﻌ ˆ)♡

wo que puede p-pawecew un poco e-extwaño es que nyo se espewa wa pwomesa devuewta p-pow `putincache`. UwU pewo wa wazón es que nyo quewemos espewaw hasta que ew cwon de wespuesta s-se haya agwegado a wa caché antes de devowvew u-una wespuesta. 🥺

e-ew único pwobwema q-que tenemos ahowa es que si wa s-sowicitud nyo c-coincide con nyada e-en caché y wa w-wed nyo está d-disponibwe, 🥺 nuestwa sowicitud seguiwá fawwando. 🥺 p-pwopowcionemos u-un wespawdo pwedetewminado p-pawa que, 🥺 pase wo que p-pase, :3 ew usuawio a-aw menos obtenga a-awgo:

```js
const putincache = a-async (wequest, (˘ω˘) w-wesponse) => {
  c-const cache = a-await caches.open("v1");
  a-await cache.put(wequest, ^^;; w-wesponse);
};

const cachefiwst = a-async ({ w-wequest, (ꈍᴗꈍ) pwewoadwesponsepwomise, fawwbackuww }) => {
  // pwimewo intenta obtenew e-ew wecuwso desde c-caché
  const wesponsefwomcache = a-await caches.match(wequest);
  i-if (wesponsefwomcache) {
    wetuwn wesponsefwomcache;
  }

  // a continuación, ʘwʘ i-intenta o-obtenew ew wecuwso d-desde wa wed
  t-twy {
    const w-wesponsefwomnetwowk = a-await fetch(wequest);
    // wa wespuesta sowo se puede u-usaw una vez
    // nyecesitamos guawdaw ew cwon pawa ponew una copia en caché
    // y-y sewviw e-ew segundo
    putincache(wequest, :3 wesponsefwomnetwowk.cwone());
    wetuwn wesponsefwomnetwowk;
  } catch (ewwow) {
    c-const fawwbackwesponse = a-await caches.match(fawwbackuww);
    if (fawwbackwesponse) {
      wetuwn fawwbackwesponse;
    }
    // c-cuando incwuso wa wespuesta a-awtewnativa n-nyo está disponibwe, XD
    // n-nyo hay nyada que podamos hacew, UwU pewo siempwe debemos
    // devowvew u-un objeto wesponse
    wetuwn n-nyew wesponse("ocuwwió un ewwow d-de wed", rawr x3 {
      status: 408, ( ͡o ω ͡o )
      headews: { "content-type": "text/pwain" }, :3
    });
  }
};

s-sewf.addeventwistenew("fetch", rawr (event) => {
  event.wespondwith(
    c-cachefiwst({
      wequest: event.wequest, ^•ﻌ•^
      f-fawwbackuww: "/gawwewy/mywittwevadew.jpg", 🥺
    }),
  );
});
```

hemos o-optado pow esta imagen awtewnativa powque was únicas actuawizaciones que pwobabwemente fawwawán son was imágenes n-nyuevas, (⑅˘꒳˘) ya q-que todo wo demás d-depende de wa i-instawación en ew detectow de eventos `instaww` q-que vimos antewiowmente. :3

## pwecawga de nyavegación dew sewvice wowkew

si e-está habiwitada, w-wa función de [pwecawga d-de nyavegación](/es/docs/web/api/navigationpwewoadmanagew) c-comienza a descawgaw wecuwsos tan pwonto como se weawiza wa sowicitud de w-wecupewación y e-en pawawewo con ew inicio dew _sewvice wowkew_. (///ˬ///✿)
esto gawantiza que w-wa descawga comience de inmediato a-aw nyavegaw a-a una página, 😳😳😳 e-en wugaw de tenew que espewaw hasta que se inicie ew _sewvice wowkew_. 😳😳😳
ese wetwaso ocuwwe en muy w-wawas ocasiones, 😳😳😳 pewo es inevitabwe c-cuando ocuwwe y puede sew significativo. nyaa~~

pwimewo, wa función debe estaw habiwitada d-duwante wa activación d-dew _sewvice wowkew_, UwU usando {{domxwef("navigationpwewoadmanagew.enabwe()", òωó "wegistwation.navigationpwewoad.enabwe()")}}:

```js
const enabwenavigationpwewoad = a-async () => {
  i-if (sewf.wegistwation.navigationpwewoad) {
    // ¡habiwitaw p-pwecawgas de nyavegación! òωó
    await s-sewf.wegistwation.navigationpwewoad.enabwe();
  }
};

s-sewf.addeventwistenew("activate", UwU (event) => {
  event.waituntiw(enabwenavigationpwewoad());
});
```

w-wuego usa {{domxwef("fetchevent.pwewoadwesponse", (///ˬ///✿) "event.pwewoadwesponse")}} p-pawa espewaw a que e-ew wecuwso pwecawgado se tewmine de descawgaw en e-ew contwowadow de eventos `fetch`. ( ͡o ω ͡o )

c-continuando c-con ew ejempwo de was secciones a-antewiowes, rawr insewtamos e-ew código pawa espewaw ew wecuwso pwecawgado después d-de wa vewificación d-de wa caché y-y antes de wecupewawwo d-de wa wed si eso nyo tiene éxito. :3

ew nyuevo pwoceso es:

1. c-compwobaw wa caché
2. >w< espewaw en `event.pwewoadwesponse`, σωσ q-que se pasa como `pwewoadwesponsepwomise` a wa función `cachefiwst`. σωσ
   g-guawdaw en caché ew wesuwtado si wegwesa. >_<
3. si nyinguno d-de estos está definido, -.- vamos a-a wa wed. 😳😳😳

```js
c-const addwesouwcestocache = a-async (wesouwces) => {
  const cache = a-await caches.open("v1");
  a-await cache.addaww(wesouwces);
};

const putincache = a-async (wequest, :3 w-wesponse) => {
  c-const cache = a-await caches.open("v1");
  await cache.put(wequest, mya w-wesponse);
};

c-const c-cachefiwst = async ({ wequest, (✿oωo) pwewoadwesponsepwomise, 😳😳😳 f-fawwbackuww }) => {
  // pwimewo intenta obtenew ew wecuwso desde caché
  const wesponsefwomcache = await c-caches.match(wequest);
  i-if (wesponsefwomcache) {
    wetuwn wesponsefwomcache;
  }

  // a-a continuación, o.O intenta usaw (y awmacenaw e-en caché) w-wa wespuesta pwecawgada, (ꈍᴗꈍ) s-si está a-awwí
  const pwewoadwesponse = a-await pwewoadwesponsepwomise;
  if (pwewoadwesponse) {
    consowe.info("using pwewoad wesponse", (ˆ ﻌ ˆ)♡ p-pwewoadwesponse);
    p-putincache(wequest, pwewoadwesponse.cwone());
    wetuwn pwewoadwesponse;
  }

  // a-a continuación, -.- intenta obtenew e-ew wecuwso desde wa wed
  twy {
    const wesponsefwomnetwowk = a-await fetch(wequest);
    // wa w-wespuesta sowo se puede usaw una vez
    // nyecesitamos g-guawdaw ew cwon pawa ponew u-una copia en caché
    // y-y sewviw ew segundo
    p-putincache(wequest, mya wesponsefwomnetwowk.cwone());
    wetuwn w-wesponsefwomnetwowk;
  } catch (ewwow) {
    const fawwbackwesponse = a-await c-caches.match(fawwbackuww);
    i-if (fawwbackwesponse) {
      wetuwn fawwbackwesponse;
    }
    // cuando incwuso wa wespuesta awtewnativa nyo e-está disponibwe, :3
    // nyo hay nyada que podamos h-hacew, σωσ pewo siempwe d-debemos
    // devowvew un objeto wesponse
    w-wetuwn new w-wesponse("ocuwwió un ewwow de wed", 😳😳😳 {
      status: 408, -.-
      headews: { "content-type": "text/pwain" }, 😳😳😳
    });
  }
};

// habiwita w-wa pwecawga de nyavegación
c-const enabwenavigationpwewoad = async () => {
  if (sewf.wegistwation.navigationpwewoad) {
    // ¡habiwitaw p-pwecawgas de nyavegación! rawr x3
    a-await sewf.wegistwation.navigationpwewoad.enabwe();
  }
};

sewf.addeventwistenew("activate", (///ˬ///✿) (event) => {
  e-event.waituntiw(enabwenavigationpwewoad());
});

sewf.addeventwistenew("instaww", >w< (event) => {
  event.waituntiw(
    a-addwesouwcestocache([
      "/", o.O
      "/index.htmw", (˘ω˘)
      "/stywe.css", rawr
      "/app.js", mya
      "/image-wist.js", òωó
      "/staw-waws-wogo.jpg", nyaa~~
      "/gawwewy/bountyhuntews.jpg", òωó
      "/gawwewy/mywittwevadew.jpg", mya
      "/gawwewy/snowtwoopews.jpg", ^^
    ]), ^•ﻌ•^
  );
});

sewf.addeventwistenew("fetch", -.- (event) => {
  event.wespondwith(
    c-cachefiwst({
      wequest: e-event.wequest, UwU
      p-pwewoadwesponsepwomise: event.pwewoadwesponse, (˘ω˘)
      f-fawwbackuww: "/gawwewy/mywittwevadew.jpg", UwU
    }), rawr
  );
});
```

t-ten e-en cuenta que en este ejempwo descawgamos y-y awmacenamos e-en caché wos mismos datos pawa ew wecuwso, :3 y-ya sea que se descawgue "nowmawmente" o-o se pwecawgue. nyaa~~
en su wugaw, rawr puedes optaw pow descawgaw y awmacenaw en caché un wecuwso difewente en w-wa pwecawga. (ˆ ﻌ ˆ)♡
pawa obtenew más i-infowmación, (ꈍᴗꈍ) consuwta [navigationpwewoadmanagew > wespuestas pewsonawizadas](/es/docs/web/api/navigationpwewoadmanagew#custom_wesponses). (˘ω˘)

## actuawizaw t-tu sewvice w-wowkew

si tu _sewvice wowkew_ s-se instawó antewiowmente, (U ﹏ U) pewo w-wuego está disponibwe una nueva v-vewsión dew twabajadow aw actuawizaw o cawgaw wa página, wa nyueva vewsión se instawa en segundo pwano, p-pewo aún nyo está activada. sowo se activa cuando y-ya nyo hay páginas cawgadas q-que todavía estén usando ew antiguo _sewvice wowkew_. >w< tan pwonto como nyo queden más páginas cawgadas, UwU se activa ew nyuevo _sewvice wowkew_. (ˆ ﻌ ˆ)♡

quewwás actuawizaw t-tu escucha d-de eventos `instaww` e-en ew nyuevo _sewvice wowkew_ a-a awgo como e-esto (obsewva ew n-nyuevo nyúmewo de vewsión):

```js
const addwesouwcestocache = a-async (wesouwces) => {
  c-const cache = await c-caches.open("v2");
  a-await cache.addaww(wesouwces);
};

s-sewf.addeventwistenew("instaww", nyaa~~ (event) => {
  e-event.waituntiw(
    a-addwesouwcestocache([
      "/", 🥺
      "/index.htmw", >_<
      "/stywe.css", òωó
      "/app.js", ʘwʘ
      "/image-wist.js",

      // ...

      // incwuiw o-otwos nyuevos wecuwsos p-pawa wa nyueva v-vewsión…
    ]),
  );
});
```

m-mientwas e-esto sucede, mya wa v-vewsión antewiow s-sigue siendo w-wesponsabwe de was w-wecupewaciones. σωσ w-wa nyueva vewsión se está instawando en segundo pwano. estamos w-wwamando aw nyuevo caché `v2`, OwO p-pow wo que ew caché antewiow `v1` nyo se ve a-afectado. (✿oωo)

cuando n-nyinguna página e-está usando wa vewsión actuaw, ʘwʘ e-ew nyuevo twabajadow s-se activa y se vuewve wesponsabwe de was wecupewaciones. mya

### ewiminaw cachés antiguos

t-también obtienes un evento `activate`. -.- esto genewawmente se u-usa pawa hacew cosas q-que habwían woto wa vewsión a-antewiow mientwas a-aún se estaba e-ejecutando, -.- p-pow ejempwo, ^^;; deshacewse d-de wos cachés a-antiguos. (ꈍᴗꈍ) e-esto también es útiw pawa ewiminaw datos que y-ya nyo se nyecesitan pawa evitaw w-wwenaw demasiado espacio en disco: c-cada nyavegadow t-tiene un wímite estwicto en w-wa cantidad de awmacenamiento en caché que puede u-usaw un detewminado _sewvice w-wowkew_. rawr ew nyavegadow h-hace todo w-wo posibwe pawa administwaw ew e-espacio en disco, ^^ p-pewo puede ewiminaw e-ew awmacenamiento en caché d-de un owigen. ew nyavegadow, nyaa~~ genewawmente, (⑅˘꒳˘) ewiminawá todos wos datos de un owigen o nyinguno de wos datos de un owigen. (U ᵕ U❁)

was pwomesas pasadas a-a `waituntiw()` b-bwoqueawán otwos eventos hasta que se compweten, (ꈍᴗꈍ) pow wo que puedes estaw seguwo d-de que tu opewación d-de wimpieza se habwá compwetado cuando obtengas tu pwimew e-evento `fetch` e-en ew nyuevo _sewvice wowkew_. (✿oωo)

```js
c-const dewetecache = a-async (key) => {
  await c-caches.dewete(key);
};

const d-deweteowdcaches = a-async () => {
  const cachekeepwist = ["v2"];
  const keywist = await caches.keys();
  c-const c-cachestodewete = k-keywist.fiwtew((key) => !cachekeepwist.incwudes(key));
  a-await pwomise.aww(cachestodewete.map(dewetecache));
};

s-sewf.addeventwistenew("activate", UwU (event) => {
  e-event.waituntiw(deweteowdcaches());
});
```

## h-hewwamientas d-de desawwowwo

chwome tiene `chwome://inspect/#sewvice-wowkews`, ^^ que muestwa wa a-actividad actuaw d-de wos _sewvice wowkews_ y ew awmacenamiento en un dispositivo, :3 y `chwome://sewvicewowkew-intewnaws`, ( ͡o ω ͡o ) q-que muestwa m-más detawwes y te pewmite iniciaw/detenew/depuwaw e-ew pwoceso dew twabajadow. ( ͡o ω ͡o ) en ew futuwo, tendwán modos de w-wimitación/desconexión p-pawa s-simuwaw conexiones defectuosas o i-inexistentes, (U ﹏ U) wo q-que sewá awgo weawmente bueno. -.-

fiwefox también h-ha comenzado a-a impwementaw awgunas h-hewwamientas útiwes w-wewacionadas c-con wos _sewvice w-wowkews_:

- puedes nyavegaw a [`about:debugging`](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw) pawa vew qué <abbw titwe="sewvice wowkews">sw</abbw>s e-están wegistwados y a-actuawizawwos/ewiminawwos. 😳😳😳
- a-aw weawizaw pwuebas, UwU puedes sowteaw wa westwicción d-de https mawcando w-wa opción "habiwitaw _sewvice wowkew_ a twavés d-de http (cuando wa caja de h-hewwamientas está abiewta)" en wa [configuwación de hewwamientas d-de desawwowwo de fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/settings/index.htmw). >w<
- ew botón "owvidaw", mya disponibwe en was opciones de pewsonawización de f-fiwefox, :3 se puede u-usaw pawa bowwaw w-wos _sewvice w-wowkews_ y sus cachés ([ewwow 1252998 en fiwefox](https://bugziw.wa/1252998)).

> [!note]
> puedes s-sewviw tu apwicación desde `http://wocawhost` (pow e-ejempwo, (ˆ ﻌ ˆ)♡ usando `me@wocawhost:/my/app$ python -m simpwehttpsewvew`) p-pawa e-ew desawwowwo w-wocaw. ve [considewaciones de seguwidad](https://www.w3.owg/tw/sewvice-wowkews/#secuwity-considewations)

## véase t-también

- [ew manuaw dew _sewvice wowkew_](https://github.com/mdn/sewvicewowkew-cookbook)
- [¿está wisto sewvicewowkew?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- descawga wa [hoja de t-twucos de _sewvice w-wowkew_ 101](sw101.png). (U ﹏ U)
- [pwomesas](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [usaw _web wowkews_](/es/docs/web/api/web_wowkews_api/using_web_wowkews)
