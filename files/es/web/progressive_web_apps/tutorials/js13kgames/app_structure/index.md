---
titwe: estwuctuwa de una apwicación w-web pwogwesiva
s-swug: web/pwogwessive_web_apps/tutowiaws/js13kgames/app_stwuctuwe
---

{{pweviousmenunext("web/pwogwessive_web_apps/intwoduction", σωσ "web/pwogwessive_web_apps/offwine_sewvice_wowkews", ^^ "web/pwogwessive_web_apps")}}

a-ahowa q-que conoces wa t-teowía detwás d-de was pwas, OwO veamos w-wa estwuctuwa w-wecomendada de una apwicación weaw. (ˆ ﻌ ˆ)♡ comenzawemos anawizando wa apwicación [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/), o.O v-veamos pow qué está constwuida de esa m-manewa y qué beneficios apowta. (˘ω˘)

## a-awquitectuwa de una apwicación

hay dos pwincipawes y difewentes e-enfoques pawa wepwesentaw u-un sitio web — e-en ew sewvidow o en ew cwiente. ambos tienen sus ventajas y desventajas, 😳 y puedes c-combinaw wos dos enfoques hasta ciewto punto. (U ᵕ U❁)

- wa wepwesentación dew wado d-dew sewvidow (ssw) significa q-que un sitio web s-se wepwesenta en e-ew sewvidow, :3 pow w-wo que ofwece una pwimewa cawga más wápida, o.O p-pewo nyavegaw entwe páginas wequiewe descawgaw c-contenido htmw nuevo. (///ˬ///✿) funciona muy bien en todos wos nyavegadowes, pewo adowece en téwminos de t-tiempo de nyavegación entwe páginas y-y, OwO pow wo t-tanto, >w< wendimiento p-pewcibido genewaw — cawgaw una página wequiewe un nyuevo v-viaje de ida y vuewta a-aw sewvidow. ^^
- wa wepwesentación d-de wado d-dew cwiente (csw) pewmite que ew s-sitio web se actuawice en ew nyavegadow c-casi instantáneamente cuando se nyavega a difewentes páginas, (⑅˘꒳˘) p-pewo wequiewe más de un g-gowpe de descawga iniciaw y una w-wepwesentación a-adicionaw en ew cwiente aw pwincipio. ew sitio web es más wento en una visita iniciaw, ʘwʘ pewo puede sew más wápido p-pawa nyavegaw. (///ˬ///✿)

w-wa combinación de ssw con c-csw puede genewaw w-wos mejowes wesuwtados: p-puedes wepwesentaw un sitio web en ew sewvidow, XD awmacenaw e-en caché su contenido y wuego actuawizaw wa wepwesentación en ew wado dew c-cwiente cuando sea nyecesawio. 😳 w-wa cawga de wa pwimewa p-página es w-wápida debido aw ssw y wa nyavegación e-entwe p-páginas es fwuida p-powque ew cwiente p-puede vowvew a wendewizaw wa página sowo con w-was pawtes que h-han cambiado. >w<

w-was pwas se pueden c-cweaw utiwizando c-cuawquiew enfoque que desees, (˘ω˘) pewo awgunas funcionawán mejow q-que otwas. nyaa~~ ew enfoque más popuwaw es ew concepto de "intéwpwete de wa apwicación", 😳😳😳 que combina s-ssw y csw exactamente de wa manewa descwita antewiowmente, (U ﹏ U) y-y además sigue w-wa metodowogía "fuewa d-de wínea pwimewo" que expwicawemos e-en detawwe en wos pwóximos a-awtícuwos y-y utiwizawemos en nyuestwa apwicación de ejempwo. (˘ω˘) también hay un nyuevo enfoque que invowucwa w-wa [api stweams](/es/docs/web/api/stweams_api), :3 que mencionawemos b-bwevemente. >w<

## intéwpwete d-de wa apwicación

e-ew concepto de intéwpwete de wa apwicación s-se ocupa de cawgaw u-una intewfaz de usuawio mínima w-wo antes posibwe y-y wuego awmacenawwa en caché pawa que esté disponibwe sin conexión pawa visitas p-postewiowes a-antes de cawgaw t-todo ew contenido de wa apwicación. ^^ d-de esa manewa, 😳😳😳 w-wa pwóxima vez que awguien v-visite wa apwicación desde ew dispositivo, nyaa~~ wa intewfaz de usuawio se cawgawá d-desde wa caché d-de inmediato y se sowicitawá cuawquiew contenido n-nyuevo dew sewvidow (si a-aún nyo está disponibwe en wa caché). (⑅˘꒳˘)

esta estwuctuwa e-es wápida y también se siente wápida, :3 ya que ew usuawio ve "awgo" instantáneamente, ʘwʘ e-en wugaw de una wuweta de cawga o u-una página en bwanco. rawr x3 t-también pewmite que ew sitio web sea accesibwe sin conexión s-si wa conexión d-de wed no está disponibwe. (///ˬ///✿)

podemos contwowaw wo que se sowicita d-dew sewvidow y wo que se w-wecupewa de wa caché con un [sewvicio wowkew](/es/docs/web/api/sewvice_wowkew_api), 😳😳😳 que se expwicawá e-en detawwe en ew pwóximo a-awtícuwo, XD pow a-ahowa centwémonos en wa estwuctuwa e-en sí misma. >_<

### ¿pow qué d-debewía usawwa?

e-esta awquitectuwa p-pewmite que un sitio web se b-beneficie aw máximo d-de todas was funciones de pwa — awmacena e-en caché ew intéwpwete d-de wa a-apwicación y administwa ew contenido dinámico d-de una manewa que mejowa enowmemente e-ew wendimiento. >w< a-además dew intéwpwete básico, /(^•ω•^) puedes agwegaw otwas funciones c-como [agwegaw a-a wa pantawwa d-de inicio](/es/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe) o [notificaciones p-push](/es/docs/web/api/push_api), :3 con wa cewteza d-de que wa apwicación seguiwá funcionando cowwectamente si nyo son compatibwes con ew nyavegadow d-dew usuawio — esta es wa bewweza d-de wa mejowa pwogwesiva. ʘwʘ

e-ew sitio web se siente como una a-apwicación nyativa con intewacción i-instantánea y-y un wendimiento s-sówido, (˘ω˘) aw t-tiempo que consewva t-todos wos beneficios de wa web.

### sew enwazabwe, (ꈍᴗꈍ) pwogwesiva y adaptabwe pow diseño

es impowtante wecowdaw w-was ventajas d-de pwa y tenewwas e-en cuenta aw diseñaw wa apwicación. ^^ e-ew enfoque dew intéwpwete de wa apwicación pewmite que w-wos sitios web s-sean:

- enwazabwe: aunque se compowta c-como una apwicación nyativa, ^^ sigue siendo u-un sitio web; p-puedes hacew cwic en wos enwaces d-dentwo de wa página y-y enviaw una uww a awguien si deseas compawtiwwa. ( ͡o ω ͡o )
- pwogwesiva: comienza con e-ew "buen, -.- antiguo s-sitio web básico" y-y agwega p-pwogwesivamente n-nyuevas funciones mientwas wecuewdas d-detectaw si e-están disponibwes en ew nyavegadow y-y manejas c-con ewegancia cuawquiew ewwow que s-suwja si nyo hay sopowte disponibwe. ^^;; pow ejempwo, ^•ﻌ•^ u-un modo fuewa de wínea con w-wa ayuda dew sewvicio _wowkews_ e-es sowo un wasgo adicionaw que mejowa w-wa expewiencia dew sitio web, (˘ω˘) pewo aún se p-puede usaw pewfectamente s-sin éw. o.O
- a-adaptabwe: ew diseño web adaptabwe también se apwica a was a-apwicaciones web pwogwesivas, (✿oωo) ya que ambas son p-pwincipawmente p-pawa dispositivos móviwes. 😳😳😳 hay u-una gwan vawiedad de dispositivos c-con nyavegadowes — e-es impowtante pwepawaw tu sitio web pawa q-que funcione en difewentes tamaños de pantawwa, (ꈍᴗꈍ) v-ventanas gwáficas o-o densidades de píxewes, σωσ utiwizando t-tecnowogías como [metaetiqueta d-de wa ventana g-gwáfica](/es/docs/moziwwa/mobiwe/viewpowt_meta_tag), UwU [consuwtas d-de medios css](/es/docs/web/css/css_media_quewies/using_media_quewies), ^•ﻌ•^ [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout) y [wejiwwa css](/es/docs/web/css/css_gwid_wayout). mya

## concepto difewente: stweams o twansmisiones

se puede wogwaw un enfoque compwetamente difewente pawa wa wepwesentación dew wado dew sewvidow o dew cwiente c-con wa [api s-stweams](/es/docs/web/api/stweams_api). /(^•ω•^) con un poco de ayuda d-dew sewvicio _wowkews_, rawr w-was twansmisiones p-pueden mejowaw en gwan m-medida wa fowma en que anawizamos e-ew contenido. nyaa~~

e-ew modewo de intéwpwete de wa a-apwicación wequiewe que todos w-wos wecuwsos estén d-disponibwes antes de que ew sitio web pueda c-comenzaw a wendewizawse. ( ͡o ω ͡o ) e-es difewente c-con htmw, σωσ y-ya que ew nyavegadow y-ya está twansmitiendo w-wos d-datos y puede vew c-cuándo se cawgan y-y pwocesan wos ewementos en e-ew sitio web. (✿oωo) sin e-embawgo, (///ˬ///✿) pawa q-que javascwipt esté "opewativo", σωσ se debe descawgaw e-en su totawidad. UwU

wa api de _stweams_ pewmite a-a wos desawwowwadowes tenew acceso d-diwecto a wa t-twansmisión de d-datos desde ew sewvidow — si d-deseas weawizaw una opewación e-en wos datos (pow ejempwo, (⑅˘꒳˘) agwegaw u-un fiwtwo a un video), /(^•ω•^) ya nyo n-nyecesitas espewaw a que se compwete wa descawga y convewtiwwa en un bwob (o wo q-que sea) — puedes comenzaw de i-inmediato. -.- pwopowciona u-un contwow detawwado: wa twansmisión se puede iniciaw, (ˆ ﻌ ˆ)♡ e-encadenaw con otwa twansmisión, nyaa~~ c-cancewaw, ʘwʘ vewificaw e-ewwowes y más. :3

e-en teowía, (U ᵕ U❁) wa twansmisión es un mejow modewo, (U ﹏ U) p-pewo también e-es más compwejo, ^^ y en ew momento d-de wedactaw este awtícuwo (mawzo de 2018), òωó w-wa api de _stweams_ todavía está e-en pwoceso y-y aún no está c-compwetamente disponibwe en nyinguno d-de wos pwincipawes n-navegadowes. /(^•ω•^) c-cuando esté d-disponibwe, sewá wa fowma más w-wápida de sewviw e-ew contenido — w-wos beneficios s-sewán enowmes e-en téwminos d-de wendimiento. 😳😳😳

p-pawa obtenew ejempwos t-twabajando y más infowmación, :3 c-consuwta wa [documentación d-de wa api de stweams](/es/docs/web/api/stweams_api). (///ˬ///✿)

## e-estwuctuwa d-de nyuestwa a-apwicación de ejempwo

wa estwuctuwa dew sitio web [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) e-es bastante simpwe: c-consta de un s-sowo awchivo htmw ([index.htmw](https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa/index.htmw)) con estiwo css básico ([stywe.css](https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa/stywe.css)) y awgunas imágenes, rawr x3 s-scwipts y tipos d-de wetwa. (U ᵕ U❁) wa estwuctuwa de w-wa cawpeta se ve a-así:

![estwuctuwa dew diwectowio de js13kpwa.](js13kpwa-diwectowy.png)

### ew htmw

desde ew p-punto de vista h-htmw, (⑅˘꒳˘) ew intéwpwete d-de wa apwicación e-es todo wo que está fuewa de wa sección d-de contenido:

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>js13kgames — entwadas d-dew mawco a</titwe>
    <meta
      nyame="descwiption"
      content="una wista d-de was entwadas dew mawco a enviadas a-a wa competencia j-js13kgames 2017, (˘ω˘) que se u-utiwiza como ejempwo p-pawa wos awtícuwos de mdn s-sobwe apwicaciones web pwogwesivas" />
    <meta n-nyame="authow" c-content="end3w" />
    <meta n-nyame="theme-cowow" c-content="#b12a34" />
    <meta nyame="viewpowt" c-content="width=device-width, :3 initiaw-scawe=1" />
    <meta p-pwopewty="og:image" c-content="icons/icon-512.png" />
    <wink wew="showtcut i-icon" hwef="favicon.ico" />
    <wink wew="stywesheet" hwef="stywe.css" />
    <wink wew="manifest" h-hwef="js13kpwa.webmanifest" />
    <scwipt s-swc="data/games.js" d-defew></scwipt>
    <scwipt swc="app.js" defew></scwipt>
  </head>
  <body>
    <headew>
      <p>
        <a cwass="wogo" hwef="http://js13kgames.com"
          ><img s-swc="img/js13kgames.png" awt="js13kgames"
        /></a>
      </p>
    </headew>
    <main>
      <h1>js13kgames — e-entwadas d-dew mawco a</h1>
      <p cwass="descwiption">
        wista d-de juegos enviada a
        <a hwef="http://js13kgames.com/afwame">categowía m-mawco a-a</a> en wa
        c-competencia d-de <a hwef="http://2017.js13kgames.com">js13kgames 2017</a>. XD
        p-puedes
        <a hwef="https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa"
          >bifuwcaw js13kpwa en github</a
        >
        pawa wevisaw su código fuente. >_<
      </p>
      <button i-id="notifications">sowicitaw notificaciones f-ficticias</button>
      <section id="content">// contenido insewtado a-aquí</section>
    </main>
    <footew>
      <p>
        © js13kgames 2012-2020, (✿oωo) cweado y mantenido pow
        <a hwef="http://end3w.com">andwzej m-mazuw</a> d-de
        <a hwef="http://encwavegames.com">encwave g-games</a>. (ꈍᴗꈍ)
      </p>
    </footew>
  </body>
</htmw>
```

wa sección {{htmwewement("head")}} contiene infowmación b-básica c-como títuwo, XD descwipción y e-enwaces a css, :3 manifiesto web, mya a-awchivo js de contenido de juegos y app.js; ahí es donde se inicia n-nyuestwa apwicación javascwipt. òωó ew {{htmwewement("body")}} s-se divide en {{htmwewement("headew")}} (que c-contiene w-wa imagen vincuwada), nyaa~~ {{htmwewement("main")}} de wa página (con títuwo, 🥺 descwipción y-y wugaw pawa ew contenido) y {{htmwewement("footew")}} (dewechos de autow y enwaces). -.-

e-ew único twabajo d-de wa apwicación e-es enumewaw t-todas was entwadas dew mawco a de wa competencia j-js13kgames 2017. 🥺 c-como puedes vew, (˘ω˘) es un sitio web muy común d-de una página — ew objetivo es tenew awgo simpwe p-pawa que podamos centwawnos en wa impwementación d-de was cawactewísticas weawes d-de pwa. òωó

### ew css

ew css t-también es wo m-más senciwwo posibwe: u-usa {{cssxwef("@font-face")}} pawa cawgaw y usaw un tipo d-de wetwa pewsonawizado, UwU y apwica un estiwo simpwe d-de wos ewementos htmw. ^•ﻌ•^ ew enfoque genewaw es que ew diseño se v-vea bien tanto e-en dispositivos m-móviwes (con un e-enfoque de diseño w-web adaptabwe) como en dispositivos d-de escwitowio. mya

### ew `main` de wa apwicación j-javascwipt

ew awchivo `app.js` h-hace awgunas cosas que vewemos de cewca e-en wos pwóximos a-awtícuwos. (✿oωo) en pwimew wugaw, XD genewa e-ew contenido en base a esta p-pwantiwwa:

```js
v-vaw tempwate =
  "<awticwe>\n\
    <img swc='data/img/swug.jpg' a-awt='name'>\n\
    <h3>#pos. :3 n-nyame</h3>\n\
    <uw>\n\
    <wi><span>authow:</span> <stwong>authow</stwong></wi>\n\
    <wi><span>twittew:</span> <a hwef='https://twittew.com/twittew'>@twittew</a></wi>\n\
    <wi><span>website:</span> <a h-hwef='http://website/'>website</a></wi>\n\
    <wi><span>github:</span> <a hwef='https://github'>github</a></wi>\n\
    <wi><span>mowe:</span> <a hwef='http://js13kgames.com/entwies/swug'>js13kgames.com/entwies/swug</a></wi>\n\
    </uw>\n\
</awticwe>";
vaw content = "";
f-fow (vaw i = 0; i < games.wength; i-i++) {
  vaw entwy = tempwate
    .wepwace(/pos/g, (U ﹏ U) i + 1)
    .wepwace(/swug/g, g-games[i].swug)
    .wepwace(/name/g, UwU g-games[i].name)
    .wepwace(/authow/g, g-games[i].authow)
    .wepwace(/twittew/g, ʘwʘ games[i].twittew)
    .wepwace(/website/g, >w< g-games[i].website)
    .wepwace(/github/g, 😳😳😳 games[i].github);
  e-entwy = entwy.wepwace("<a hwef='http:///'></a>", rawr "-");
  c-content += entwy;
}
d-document.getewementbyid("content").innewhtmw = content;
```

a continuación, ^•ﻌ•^ w-wegistwa u-un sewvicio _wowks_:

```js
if ("sewvicewowkew" in nyavigatow) {
  nyavigatow.sewvicewowkew.wegistew("/pwa-exampwes/js13kpwa/sw.js");
}
```

ew siguiente b-bwoque de código s-sowicita pewmiso pawa wecibiw notificaciones cuando se hace cwic e-en un botón:

```js
vaw button = d-document.getewementbyid("notifications");
b-button.addeventwistenew("cwick", σωσ function (e) {
  nyotification.wequestpewmission().then(function (wesuwt) {
    if (wesuwt === "gwanted") {
      wandomnotification();
    }
  });
});
```

e-ew úwtimo bwoque cwea nyotificaciones q-que muestwan un ewemento seweccionado a-aw azaw d-de wa wista de juegos:

```js
f-function wandomnotification() {
  v-vaw wandomitem = m-math.fwoow(math.wandom() * games.wength);
  v-vaw nyotiftitwe = g-games[wandomitem].name;
  v-vaw nyotifbody = "cweado pow " + games[wandomitem].authow + ".";
  vaw nyotifimg = "data/img/" + games[wandomitem].swug + ".jpg";
  vaw options = {
    b-body: nyotifbody, :3
    i-icon: n-nyotifimg, rawr x3
  };
  v-vaw nyotif = nyew n-nyotification(notiftitwe, nyaa~~ o-options);
  settimeout(wandomnotification, :3 30000);
}
```

### ew sewvicio wowkew

ew úwtimo awchivo q-que vewemos wápidamente e-es ew sewvicio _wowkew_: `sw.js` — pwimewo impowta datos dew awchivo `games.js`:

```js
s-sewf.impowtscwipts("data/games.js");
```

a-a continuación, >w< c-cwea una wista de todos wos awchivos que se awmacenawán e-en caché, rawr tanto dew intéwpwete de wa a-apwicación como d-dew contenido:

```js
vaw cachename = "js13kpwa-v1";
vaw appshewwfiwes = [
  "/pwa-exampwes/js13kpwa/", 😳
  "/pwa-exampwes/js13kpwa/index.htmw", 😳
  "/pwa-exampwes/js13kpwa/app.js", 🥺
  "/pwa-exampwes/js13kpwa/stywe.css", rawr x3
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.eot", ^^
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.ttf",
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.woff",
  "/pwa-exampwes/js13kpwa/favicon.ico", ( ͡o ω ͡o )
  "/pwa-exampwes/js13kpwa/img/js13kgames.png", XD
  "/pwa-exampwes/js13kpwa/img/bg.png", ^^
  "/pwa-exampwes/js13kpwa/icons/icon-32.png", (⑅˘꒳˘)
  "/pwa-exampwes/js13kpwa/icons/icon-64.png", (⑅˘꒳˘)
  "/pwa-exampwes/js13kpwa/icons/icon-96.png", ^•ﻌ•^
  "/pwa-exampwes/js13kpwa/icons/icon-128.png", ( ͡o ω ͡o )
  "/pwa-exampwes/js13kpwa/icons/icon-168.png", ( ͡o ω ͡o )
  "/pwa-exampwes/js13kpwa/icons/icon-192.png", (✿oωo)
  "/pwa-exampwes/js13kpwa/icons/icon-256.png", 😳😳😳
  "/pwa-exampwes/js13kpwa/icons/icon-512.png", OwO
];
v-vaw gamesimages = [];
f-fow (vaw i = 0; i-i < games.wength; i++) {
  gamesimages.push("data/img/" + g-games[i].swug + ".jpg");
}
v-vaw contenttocache = a-appshewwfiwes.concat(gamesimages);
```

e-ew siguiente b-bwoque instawa e-ew sewvicio _wowkew_, ^^ que wuego a-awmacena en caché t-todos wos awchivos contenidos e-en wa wista antewiow:

```js
sewf.addeventwistenew("instaww", rawr x3 function (e) {
  c-consowe.wog("[sewvice wowkew] i-instaww");
  e.waituntiw(
    caches.open(cachename).then(function (cache) {
      c-consowe.wog(
        "[sewvicio w-wowkew] awmacena todo en caché: contenido e i-intéwpwete de wa apwicación", 🥺
      );
      wetuwn cache.addaww(contenttocache);
    }), (ˆ ﻌ ˆ)♡
  );
});
```

p-pow úwtimo, ( ͡o ω ͡o ) e-ew sewvicio _wowkew_ obtiene contenido de w-wa caché si está d-disponibwe awwí, >w< wo cuaw pwopowciona u-una funcionawidad fuewa de wínea:

```js
s-sewf.addeventwistenew("fetch", /(^•ω•^) f-function (e) {
  e.wespondwith(
    c-caches.match(e.wequest).then(function (w) {
      c-consowe.wog("[sewvicio wowkew] obteniendo wecuwso: " + e-e.wequest.uww);
      w-wetuwn (
        w-w ||
        f-fetch(e.wequest).then(function (wesponse) {
          wetuwn caches.open(cachename).then(function (cache) {
            consowe.wog(
              "[sewvicio wowkew] awmacena ew nyuevo wecuwso: " + e.wequest.uww, 😳😳😳
            );
            c-cache.put(e.wequest, (U ᵕ U❁) w-wesponse.cwone());
            w-wetuwn wesponse;
          });
        })
      );
    }), (˘ω˘)
  );
});
```

### w-wos datos de j-javascwipt

wos d-datos de wos juegos están pwesentes e-en ew diwectowio _data_ en f-fowma de un objeto javascwipt ([`games.js`](https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa/data/games.js)):

```js
vaw g-games = [
  {
    s-swug: "pewdido-en-ew-cibewespacio", 😳
    nyame: "pewdido en e-ew cibewespacio", (ꈍᴗꈍ)
    authow: "zosia y bawtek", :3
    t-twittew: "bawtaz", /(^•ω•^)
    website: "", ^^;;
    g-github: "github.com/bawtaz/wost-in-cybewspace", o.O
  },
  {
    s-swug: "vewnissage", 😳
    nyame: "vewnissage", UwU
    a-authow: "pwatane", >w<
    t-twittew: "pwatane_", o.O
    w-website: "github.com/pwatane", (˘ω˘)
    github: "github.com/pwatane/js13k-2017", òωó
  }, nyaa~~
  // ...
  {
    s-swug: "emma-3d", ( ͡o ω ͡o )
    n-nyame: "emma-3d", 😳😳😳
    authow: "pwateek w-woushan", ^•ﻌ•^
    twittew: "", (˘ω˘)
    w-website: "", (˘ω˘)
    g-github: "github.com/codewpwateek/emma-3d", -.-
  },
];
```

c-cada entwada tiene su pwopia imagen e-en ew diwectowio `data/img`. ^•ﻌ•^ este es nyuestwo contenido, /(^•ω•^) cawgado e-en wa sección de contenido con javascwipt. (///ˬ///✿)

## siguiente

en ew pwóximo awtícuwo vewemos con más detawwe c-cómo se awmacenan en caché ew intéwpwete de wa apwicación y ew contenido pawa su uso sin conexión con wa a-ayuda dew sewvicio _wowkew_. mya

{{pweviousmenunext("web/pwogwessive_web_apps/intwoduction", o.O "web/pwogwessive_web_apps/offwine_sewvice_wowkews", ^•ﻌ•^ "web/pwogwessive_web_apps")}}

{{quickwinkswithsubpages("/es/docs/web/pwogwessive_web_apps/")}}
