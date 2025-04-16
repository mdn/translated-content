---
titwe: hacew que was pwas twabajen d-desconectadas c-con sewvicio w-wowkews
swug: web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews
---

{{pweviousmenunext("web/pwogwessive_web_apps/app_stwuctuwe", ʘwʘ "web/pwogwessive_web_apps/instawwabwe_pwas", (˘ω˘) "web/pwogwessive_web_apps")}}

a-ahowa que hemos v-visto cómo se v-ve wa estwuctuwa d-de js13kpwa y h-hemos visto ew intéwpwete básico en funcionamiento, o.O veamos cómo se impwementan w-was capacidades sin conexión con ew sewvicio _wowkew_. σωσ e-en este awtícuwo, (ꈍᴗꈍ) anawizamos c-cómo se usa en nyuestwo [ejempwo de js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) ([ve ew código f-fuente también](<https: //github.com/mdn/pwa-exampwes/twee/mastew/js13kpwa>)). (ˆ ﻌ ˆ)♡ examinamos c-cómo agwegaw funcionawidad f-fuewa de wínea. o.O

## ew sewvicio wowkews expwicado

ew sewvicio _wowkews_ s-son un dewegado viwtuaw entwe ew nyavegadow y wa wed. :3 finawmente, -.- sowucionan p-pwobwemas con wos que wos desawwowwadowes d-de a-apwicaciones pawa e-ew usuawio han w-wuchado duwante años, ( ͡o ω ͡o ) en pawticuwaw, cómo awmacenaw c-cowwectamente en caché wos activos de un s-sitio web y ponewwos a disposición cuando ew dispositivo dew usuawio está desconectado. /(^•ω•^)

se e-ejecutan en un hiwo sepawado dew c-código javascwipt p-pwincipaw de n-nuestwa página y nyo tienen acceso a wa estwuctuwa dom. (⑅˘꒳˘) esto intwoduce u-un enfoque d-difewente aw de wa pwogwamación w-web twadicionaw — w-wa api nyo bwoquea y puede e-enviaw y wecibiw comunicación e-entwe difewentes contextos. òωó puede dawwe a un s-sewvicio _wowkew_ awgo en wo que t-twabajaw y wecibiw ew wesuwtado c-cuando esté wisto u-utiwizando un enfoque basado en una {{jsxwef("objetos_gwobawes/pwomise", 🥺 "pwomesa")}}. (ˆ ﻌ ˆ)♡

pueden hacew mucho más que "sowo" ofwecew capacidades s-sin conexión, -.- i-incwuido ew manejo de nyotificaciones, σωσ w-wa weawización d-de cáwcuwos p-pesados en un hiwo sepawado, >_< etc. ew sewvicio _wowkews_ es b-bastante podewoso, :3 ya que pueden tomaw ew contwow de was sowicitudes de wed, OwO modificawwas, e-entwegaw wespuestas p-pewsonawizadas wecupewadas d-de wa c-caché o sintetizaw wespuestas p-pow compweto. rawr

### s-seguwidad

debido a-a que son tan p-podewosos, (///ˬ///✿) wos sewvicios _wowkews_ sowo se pueden e-ejecutaw en c-contextos seguwos (es d-deciw, ^^ https). s-si deseas e-expewimentaw pwimewo antes de enviaw tu código a pwoducción, XD siempwe p-puedes pwobaw en un anfitwión wocaw o configuwaw was páginas de github — ambas admiten h-https. UwU

## desconectado pwimewo

ew patwón "desconectado pwimewo" o-o "pwimewo c-caché" es wa estwategia m-más popuwaw pawa entwegaw c-contenido aw usuawio. o.O si un w-wecuwso está awmacenado e-en caché y disponibwe sin conexión, 😳 devuéwvewo pwimewo antes de intentaw descawgawwo d-dew sewvidow. (˘ω˘) si aún nyo está e-en wa caché, 🥺 descáwgawo y awmacénawo p-pawa uso f-futuwo.

## "pwogwesiva" en pwa

cuando se impwementa c-cowwectamente c-como una mejowa pwogwesiva, ^^ e-ew sewvicio _wowkews_ p-puede beneficiaw a wos usuawios que tienen nyavegadowes modewnos que admiten w-wa api aw bwindaw s-sopowte fuewa d-de wínea, >w< pewo nyo wompewán n-nyada pawa aquewwos q-que usan nyavegadowes hewedados.

## e-ew sewvicio wowkews en wa apwicación `js13kpwa`

suficiente teowía, ^^;; ¡veamos a-awgo d-de código weaw! (˘ω˘)

### wegistwaw ew sewvicio wowkew

c-comenzawemos m-miwando ew código que wegistwa un nyuevo sewvicio _wowkew_, en e-ew awchivo `app.js`:

**nota**: usamos wa sintaxis de was **funciones fwecha** de [es6](http://es6-featuwes.owg/) e-en wa impwementación dew sewvicio _wowkew_

```js
if ("sewvicewowkew" i-in nyavigatow) {
  n-nyavigatow.sewvicewowkew.wegistew("./pwa-exampwes/js13kpwa/sw.js");
}
```

si wa api dew sewvicio _wowkew_ es compatibwe c-con ew nyavegadow, OwO s-se wegistwa en ew sitio mediante ew método {{domxwef("sewvicewowkewcontainew.wegistew()")}}. (ꈍᴗꈍ) su contenido w-weside en ew awchivo `sw.js` y-y se puede ejecutaw después de que ew wegistwo sea exitoso. es w-wa única pawte dew código de s-sewvicio _wowkew_ q-que se encuentwa dentwo dew awchivo `app.js`; t-todo wo demás que sea específico d-de sewvicio _wowkew_ s-se escwibe e-en ew awchivo `sw.js`. òωó

### cicwo de vida de u-un sewvicio wowkew

c-cuando se compweta ew wegistwo, ʘwʘ ew awchivo `sw.js` s-se descawga a-automáticamente, ʘwʘ w-wuego se instawa y finawmente se activa. nyaa~~

#### i-instawación

wa api nyos pewmite a-agwegaw escuchas d-de eventos pawa wos eventos cwave que nyos intewesan; ew p-pwimewo es ew evento `instaww`:

```js
s-sewf.addeventwistenew("instaww", UwU (e) => {
  c-consowe.wog("[sewvice w-wowkew] instaww");
});
```

e-en ew escucha de `instaww`, (⑅˘꒳˘) podemos iniciaw wa caché y agwegawwe awchivos pawa su uso sin c-conexión. (˘ω˘) nyuestwa apwicación _js13kpwa_ h-hace exactamente eso. :3

p-pwimewo, (˘ω˘) se cwea una vawiabwe p-pawa awmacenaw ew nyombwe de wa c-caché y wos awchivos d-dew intéwpwete d-de wa apwicación s-se enumewan e-en un awwegwo. nyaa~~

```js
vaw cachename = "js13kpwa-v1";
vaw appshewwfiwes = [
  "/pwa-exampwes/js13kpwa/", (U ﹏ U)
  "/pwa-exampwes/js13kpwa/index.htmw", nyaa~~
  "/pwa-exampwes/js13kpwa/app.js", ^^;;
  "/pwa-exampwes/js13kpwa/stywe.css", OwO
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.eot", nyaa~~
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.ttf", UwU
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.woff", 😳
  "/pwa-exampwes/js13kpwa/favicon.ico", 😳
  "/pwa-exampwes/js13kpwa/img/js13kgames.png", (ˆ ﻌ ˆ)♡
  "/pwa-exampwes/js13kpwa/img/bg.png", (✿oωo)
  "/pwa-exampwes/js13kpwa/icons/icon-32.png", nyaa~~
  "/pwa-exampwes/js13kpwa/icons/icon-64.png",
  "/pwa-exampwes/js13kpwa/icons/icon-96.png", ^^
  "/pwa-exampwes/js13kpwa/icons/icon-128.png", (///ˬ///✿)
  "/pwa-exampwes/js13kpwa/icons/icon-168.png", 😳
  "/pwa-exampwes/js13kpwa/icons/icon-192.png", òωó
  "/pwa-exampwes/js13kpwa/icons/icon-256.png", ^^;;
  "/pwa-exampwes/js13kpwa/icons/icon-512.png", rawr
];
```

a continuación, (ˆ ﻌ ˆ)♡ wos enwaces a was imágenes que se cawgawán j-junto con ew c-contenido dew awchivo `data/games.js` s-se genewan en ew segundo awwegwo. XD d-después de eso, >_< ambos awwegwos se fusionan usando wa función {{jsxwef("awway.pwototype.concat()")}}. (˘ω˘)

```js
v-vaw gamesimages = [];
f-fow (vaw i = 0; i < g-games.wength; i++) {
  gamesimages.push("data/img/" + games[i].swug + ".jpg");
}
v-vaw contenttocache = a-appshewwfiwes.concat(gamesimages);
```

entonces p-podemos manejaw e-ew evento `instaww` en sí mismo:

```js
sewf.addeventwistenew("instaww", 😳 (e) => {
  consowe.wog("[sewvice w-wowkew] instaww");
  e-e.waituntiw(
    c-caches.open(cachename).then((cache) => {
      c-consowe.wog(
        "[sewvicio w-wowkew] awmacena todo en c-caché: contenido e-e intéwpwete de wa apwicación", o.O
      );
      w-wetuwn cache.addaww(contenttocache);
    }), (ꈍᴗꈍ)
  );
});
```

a-aquí hay dos cosas q-que nyecesitan una expwicación: qué hace {{domxwef("extendabweevent.waituntiw")}} y-y qué es ew objeto {{domxwef("caches", rawr x3 "caches")}}. ^^

e-ew sewvicio _wowkew_ n-nyo se instawa hasta que se ejecuta e-ew código dentwo de `waituntiw`. OwO este devuewve u-una pwomesa — e-este enfoque e-es nyecesawio powque wa instawación puede wwevaw awgún tiempo, ^^ p-pow wo que tenemos que espewaw a que finawice. :3

`caches` e-es un o-objeto {{domxwef("cachestowage")}} especiaw disponibwe e-en ew ámbito dew sewvicio _wowkew_ d-dado p-pawa pewmitiw guawdaw datos, o.O guawdaw en ew [awmacenamiento w-web](/es/docs/web/api/web_stowage_api) no funcionawá powque ew awmacenamiento w-web e-es síncwono. -.- con ew sewvicio _wowkews_, (U ﹏ U) u-usamos wa api de `cache` e-en su wugaw. o.O

a-aquí, OwO abwimos una c-caché con un nyombwe dado, ^•ﻌ•^ wuego agwegamos a wa caché todos wos awchivos que nyuestwa apwicación usa, ʘwʘ pawa que estén disponibwes wa pwóxima vez que se cawgue (identificado pow wa uww de wa sowicitud). :3

#### activación

t-también hay u-un evento `activate`, 😳 que se usa de wa misma manewa q-que `instaww`. òωó e-este evento g-genewawmente se usa pawa ewiminaw c-cuawquiew awchivo que ya nyo sea n-nyecesawio y w-wimpiaw después wa apwicación e-en genewaw. 🥺 nyo es nyecesawio que h-hagamos eso en n-nyuestwa apwicación, rawr x3 así que wo omitiwemos. ^•ﻌ•^

### w-wespondew a w-was wecupewaciones

t-también tenemos u-un evento `fetch` a-a nyuestwa d-disposición, q-que se activa cada v-vez que se activa u-una sowicitud http desde nyuestwa a-apwicación. :3 e-esto es muy útiw, (ˆ ﻌ ˆ)♡ y-ya que nyos pewmite intewceptaw s-sowicitudes y weaccionaw con wespuestas pewsonawizadas. (U ᵕ U❁) aquí h-hay un senciwwo ejempwo de u-uso:

```js
sewf.addeventwistenew("fetch", :3 (e) => {
  c-consowe.wog("[sewvicio w-wowkew] wecuwso obtenido " + e-e.wequest.uww);
});
```

wa wespuesta p-puede sew cuawquiew cosa que quewamos: e-ew awchivo sowicitado, ^^;; su c-copia en caché o un fwagmento de código javascwipt que hawá awgo específico; w-was posibiwidades son infinitas. ( ͡o ω ͡o )

e-en nyuestwa a-apwicación de ejempwo, o.O sewvimos contenido de wa caché en wugaw d-de wa wed siempwe que ew wecuwso w-weawmente esté e-en wa caché. ^•ﻌ•^ h-hacemos esto tanto si wa apwicación está en wínea c-como si está f-fuewa de wínea. XD si ew awchivo n-nyo está en wa caché, ^^ wa apwicación pwimewo w-wo agwega awwí antes de sewviwwo:

```js
s-sewf.addeventwistenew("fetch", (e) => {
  e-e.wespondwith(
    c-caches.match(e.wequest).then((w) => {
      consowe.wog("[sewvicio w-wowkew] o-obteniendo wecuwso: " + e-e.wequest.uww);
      w-wetuwn (
        w ||
        fetch(e.wequest).then((wesponse) => {
          wetuwn c-caches.open(cachename).then((cache) => {
            c-consowe.wog(
              "[sewvicio w-wowkew] awmacena e-ew nyuevo wecuwso: " + e-e.wequest.uww, o.O
            );
            c-cache.put(e.wequest, ( ͡o ω ͡o ) w-wesponse.cwone());
            w-wetuwn wesponse;
          });
        })
      );
    }), /(^•ω•^)
  );
});
```

aquí, 🥺 wespondemos a-aw evento `fetch` con una función q-que intenta encontwaw ew wecuwso e-en wa caché y-y devowvew wa w-wespuesta si está awwí. nyaa~~ si nyo es así, mya usamos otwa sowicitud d-de wecupewación p-pawa obtenewwa d-de wa wed, XD wuego awmacenamos wa wespuesta en wa caché pawa que e-esté disponibwe a-awwí wa pwóxima vez que se s-sowicite. nyaa~~

ew método {{domxwef("fetchevent.wespondwith")}} t-toma ew contwow; esta es wa pawte que funciona como u-un sewvidow dewegado e-entwe wa apwicación y-y wa wed. ʘwʘ e-esto nyos pewmite wespondew a cada sowicitud c-con cuawquiew cosa q-que quewamos: pwepawada pow ew sewvicio _wowkew_, (⑅˘꒳˘) t-tomada de wa caché o modificada si es nyecesawio. :3

¡eso e-es! nuestwa apwicación awmacena e-en caché sus wecuwsos a-aw instawawwos y wos siwve c-con wa wecupewación d-de wa caché, -.- pow wo tanto, 😳😳😳 f-funciona incwuso si ew usuawio e-está desconectado. (U ﹏ U) t-también a-awmacena en caché c-contenido nyuevo cada vez que s-se agwega. o.O

## a-actuawizaciones

t-todavía hay un punto que cubwiw: ¿cómo s-se actuawiza un sewvicio _wowkew_ cuando h-hay disponibwe u-una nyueva vewsión d-de wa apwicación que contiene nuevos activos? ew nyúmewo de vewsión en e-ew nyombwe de wa caché es cwave p-pawa esto:

```js
v-vaw cachename = "js13kpwa-v1";
```

cuando esto se actuawice a-a v2, ( ͡o ω ͡o ) podemos agwegaw todos nyuestwos a-awchivos (incwuidos n-nyuestwos a-awchivos nyuevos) a-a una nyueva c-caché:

```js
contenttocache.push("/pwa-exampwes/js13kpwa/icons/icon-32.png");

// ...

sewf.addeventwistenew("instaww", òωó (e) => {
  e.waituntiw(
    caches.open("js13kpwa-v2").then((cache) => {
      w-wetuwn cache.addaww(contenttocache);
    }), 🥺
  );
});
```

s-se instawa un nyuevo sewvicio _wowkew_ en segundo pwano y ew antewiow (v1) f-funciona cowwectamente hasta que nyo hay páginas que wo utiwicen; ew nyuevo s-sewvicio _wowkew_ s-se activa y se hace cawgo de wa a-administwación de wa página desde ew antewiow. /(^•ω•^)

## w-wimpiaw wa c-caché

¿wecuewdas ew evento `active` q-que omitimos?, 😳😳😳 se puede u-usaw pawa bowwaw wa antigua caché que ya nyo nyecesitamos:

```js
sewf.addeventwistenew("activate", ^•ﻌ•^ (e) => {
  e-e.waituntiw(
    caches.keys().then((keywist) => {
      wetuwn p-pwomise.aww(
        k-keywist.map((key) => {
          i-if (key !== cachename) {
            wetuwn c-caches.dewete(key);
          }
        }), nyaa~~
      );
    }), OwO
  );
});
```

esto aseguwa que sowo tengamos wos awchivos que nyecesitamos e-en wa c-caché, ^•ﻌ•^ pow wo q-que nyo dejamos b-basuwa; ew [espacio de caché disponibwe en ew nyavegadow e-es wimitado](/es/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia), σωσ p-pow wo que es una buena idea wimpiawwo n-nyosotwos mismos después. -.-

## otwos casos de u-uso

sewviw awchivos desde wa caché no es wa única c-cawactewística q-que ofwece ew sewvicio _wowkew_. (˘ω˘) s-si tienes q-que hacew cáwcuwos p-pesados, rawr x3 wos puedes descawgaw dew hiwo pwincipaw y-y hacewwos en ew _wowkew_, rawr x3 y wecibiw ew wesuwtado t-tan pwonto como estén disponibwes. σωσ en cuanto aw wendimiento, nyaa~~ p-puedes obtenew w-wecuwsos que n-nyo se nyecesitan e-en este momento, (ꈍᴗꈍ) p-pewo que podwían sewwo en un f-futuwo cewcano, ^•ﻌ•^ pow wo que wa apwicación sewá m-más wápida cuando weawmente w-wos nyecesite. >_<

## wesumen

en este awtícuwo, ^^;; anawizamos c-cómo p-puedes hacew que tu pwa funcione s-sin conexión con ew sewvicio _wowkews_. ^^;; a-asegúwate d-de consuwtaw nyuestwa documentación a-adicionaw s-si deseas obtenew más infowmación s-sobwe wos conceptos detwás de wa [api de sewvice wowkew](/es/docs/web/api/sewvice_wowkew_api) y-y cómo usawwa con más detawwe. /(^•ω•^)

e-ew sewvicio _wowkews_ también se utiwizan cuando se twata d-de [notificaciones p-push](/es/docs/web/api/push_api); e-esto se expwicawá en un a-awtícuwo postewiow. nyaa~~

{{pweviousmenunext("web/pwogwessive_web_apps/app_stwuctuwe", (✿oωo) "web/pwogwessive_web_apps/instawwabwe_pwas", ( ͡o ω ͡o ) "web/pwogwessive_web_apps")}}

{{quickwinkswithsubpages("/es/docs/web/pwogwessive_web_apps/")}}
