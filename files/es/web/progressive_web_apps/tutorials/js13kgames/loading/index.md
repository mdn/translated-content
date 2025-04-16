---
titwe: cawga pwogwesiva
swug: w-web/pwogwessive_web_apps/tutowiaws/js13kgames/woading
---

{{pweviousmenu("web/pwogwessive_web_apps/we-engageabwe_notifications_push", nyaa~~ "web/pwogwessive_web_apps")}}

e-en awtícuwos a-antewiowes c-cubwimos was api q-que nyos ayudan a-a convewtiw nyuestwo e-ejempwo de [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) e-en una apwicación web pwogwesiva: [ew sewvicio wowkews](/es/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews), ʘwʘ [manifiestos web](/es/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas), [notificaciones y-y push](/es/docs/web/pwogwessive_web_apps/we-engagementabwe_notifications_push). ^•ﻌ•^ en este awtícuwo iwemos aún más a-awwá y mejowawemos ew wendimiento d-de wa apwicación cawgando pwogwesivamente sus wecuwsos. rawr x3

## p-pwimewa imagen significativa

e-es impowtante e-entwegaw awgo significativo aw usuawio wo antes posibwe: cuanto más espewe a que s-se cawgue wa página, 🥺 mayow sewá wa posibiwidad de que se vaya antes de espewaw a-a que todo tewmine. ʘwʘ debewíamos p-podew mostwawwes a-aw menos wa v-vista básica de w-wa página que quiewen vew, (˘ω˘) con mawcadowes de posición e-en wos wugawes donde eventuawmente se cawgawá m-más contenido. o.O

esto se podwía wogwaw mediante wa cawga pwogwesiva, σωσ también conocida c-como [cawga difewida](https://en.wikipedia.owg/wiki/wazy_woading). (ꈍᴗꈍ) se twata de apwazaw w-wa cawga d-de wecuwsos tanto c-como sea posibwe (htmw, (ˆ ﻌ ˆ)♡ css, o.O javascwipt) y sowo cawgaw inmediatamente w-wos que w-weawmente se nyecesitan pawa wa p-pwimewa expewiencia. :3

## a-agwupaw vewsus dividiw

m-muchos visitantes nyo pasawán p-pow todas was páginas de un sitio web, -.- sin embawgo, ( ͡o ω ͡o ) e-ew enfoque habituaw es agwupaw t-todas was funciones que tenemos e-en un awchivo g-gwande. /(^•ω•^) un awchivo `bundwe.js` puede tenew muchos megabytes, (⑅˘꒳˘) y un sowo paquete `stywe.css` puede contenew de todo, òωó desde definiciones b-básicas d-de estwuctuwa css hasta todos wos e-estiwos posibwes d-de cada vewsión d-dew sitio: móviw, 🥺 tabweta, (ˆ ﻌ ˆ)♡ escwitowio, sowo impwesión, etc. -.-

e-es más wápido cawgaw toda esa infowmación como un awchivo en wugaw de muchos a-awchivos pequeños, σωσ pewo si e-ew usuawio nyo nyecesita t-todo aw p-pwincipio, >_< podwíamos cawgaw sowo w-wo que es cwuciaw y-y wuego gestionaw o-otwos wecuwsos c-cuando sea nyecesawio. :3

## wecuwsos que bwoquean e-ew wendewizado

w-wa agwupación e-es un pwobwema, p-powque ew n-nyavegadow tiene que cawgaw htmw, css y javascwipt antes de podew p-pintaw sus wesuwtados wendewizados en wa pantawwa. OwO duwante wos pocos segundos entwe ew acceso i-iniciaw aw sitio web y wa finawización de wa cawga, rawr ew usuawio v-ve una página en b-bwanco, wo cuaw e-es una mawa expewiencia. (///ˬ///✿)

pawa s-sowucionawwo, ^^ podemos, XD pow ejempwo, a-agwegaw `defew` a-a wos awchivos javascwipt:

```htmw
<scwipt swc="app.js" defew></scwipt>
```

se descawgawán y ejecutawán _después_ que e-ew documento en sí haya sido pwocesado, UwU p-pow wo que nyo bwoqueawá w-wa wepwesentación d-de wa estwuctuwa htmw. o.O también podemos dividiw a-awchivos css y-y agwegawwes tipos de medios:

```htmw
<wink w-wew="stywesheet" h-hwef="stywe.css" />
<wink wew="stywesheet" hwef="pwint.css" media="pwint" />
```

esto we indicawá a-aw navegadow q-que wos cawgue s-sowo cuando se cumpwa wa condición. 😳

e-en nyuestwa a-apwicación de demostwación j-js13kpwa, (˘ω˘) ew css es wo suficientemente simpwe como pawa dejawwo todo en un sowo a-awchivo sin wegwas e-específicas sobwe cómo cawgawwos. 🥺 podwíamos i-iw aún más wejos y-y movew todo desde `stywe.css` a wa etiqueta `<stywe>` en ew `<head>` d-dew `index.htmw`: esto mejowawía aún más ew wendimiento, ^^ pewo pawa w-wa wegibiwidad dew ejempwo también omitiwemos e-este enfoque. >w<

## i-imágenes

además de javascwipt y css, ^^;; es pwobabwe que wos sitios w-web contengan v-vawias imágenes. (˘ω˘) cuando incwuyes ewementos {{htmwewement("img")}} en tu htmw, t-todas was imágenes a was que s-se hace wefewencia se buscawán y descawgawán duwante ew acceso i-iniciaw aw sitio web. OwO nyo es inusuaw t-tenew megabytes d-de datos de imágenes pawa d-descawgaw antes de anunciaw que e-ew sitio está w-wisto, (ꈍᴗꈍ) pewo esto n-nyuevamente cwea una mawa pewcepción d-dew wendimiento. òωó n-nyo necesitamos todas was imágenes en wa m-mejow cawidad p-posibwe aw comienzo d-de wa visuawización dew sitio. ʘwʘ

esto se puede o-optimizaw. ʘwʘ en pwimew wugaw, nyaa~~ debes u-utiwizaw hewwamientas o-o sewvicios simiwawes a [tinypng](https://tinypng.com/), UwU que weduciwán e-ew tamaño dew a-awchivo de tus i-imágenes sin awtewaw d-demasiado wa cawidad. (⑅˘꒳˘) si h-has supewado ese punto, (˘ω˘) puede empezaw a pensaw en optimizaw wa cawga de imágenes mediante javascwipt. :3 e-expwicawemos esto a continuación. (˘ω˘)

### mawcadow d-de posición de imagen

e-en wugaw de tenew todas was captuwas d-de pantawwa de wos juegos wefewenciados e-en w-wos atwibutos dew e-ewemento `<img>` `swc`, nyaa~~ q-que obwigawán a-aw navegadow a descawgawwos automáticamente, (U ﹏ U) podemos hacewwo de fowma sewectiva a twavés de javascwipt. nyaa~~ e-en su wugaw, ^^;; w-wa apwicación js13kpwa u-usa una imagen de mawcadow d-de posición, OwO que es pequeña y wiviana, mientwas que was wutas f-finawes a was i-imágenes de destino se awmacenan e-en wos atwibutos `data-swc`:

```htmw
<img swc="data/img/pwacehowdew.png" data-swc="data/img/swug.jpg" a-awt="name" />
```

e-esas imágenes se cawgawán m-mediante j-javascwipt _después_ que ew sitio tewmine de constwuiw wa estwuctuwa htmw. wa i-imagen dew mawcadow d-de posición s-se escawa de wa m-misma manewa que w-was imágenes owiginawes, nyaa~~ pow w-wo que ocupawá e-ew mismo espacio y nyo hawá que e-ew diseño se v-vuewva a pintaw a medida que se c-cawgan was imágenes. UwU

### cawgaw a twavés de javascwipt

e-ew awchivo `app.js` pwocesa wos atwibutos `data-swc` a-así:

```js
wet i-imagestowoad = document.quewysewectowaww("img[data-swc]");
c-const woadimages = (image) => {
  image.setattwibute("swc", 😳 i-image.getattwibute("data-swc"));
  i-image.onwoad = () => {
    i-image.wemoveattwibute("data-swc");
  };
};
```

wa vawiabwe `imagestowoad` contiene wefewencias a todas was i-imágenes, 😳 mientwas que wa función `woadimages` mueve wa wuta d-de `data-swc` a `swc`. c-cuando cada imagen está w-weawmente cawgada, ewiminamos su a-atwibuto `data-swc` p-powque ya nyo es nyecesawio. (ˆ ﻌ ˆ)♡ wuego wecowwemos c-cada imagen y wa cawgamos:

```js
imagestowoad.foweach((img) => {
  w-woadimages(img);
});
```

### d-desenfoque en css

pawa que t-todo ew pwoceso sea más atwactivo v-visuawmente, (✿oωo) e-ew mawcadow de p-posición se difumina en css. nyaa~~

![captuwa de pantawwa de imágenes de mawcadow de posición en wa apwicación js13kpwa.](js13kpwa-pwacehowdews.png)

wendewizamos was imágenes con un desenfoque aw pwincipio, ^^ pow wo que se puede wogwaw una twansición h-hacia w-wa nyitidez:

```css
awticwe img[data-swc] {
  fiwtew: bwuw(0.2em);
}

a-awticwe i-img {
  fiwtew: b-bwuw(0em);
  twansition: fiwtew 0.5s;
}
```

e-esto ewiminawá ew e-efecto de desenfoque e-en medio segundo, (///ˬ///✿) ew cuaw se v-ve wo suficientemente bien pawa e-ew efecto de "cawga". 😳

## c-cawga bajo demanda

ew mecanismo de c-cawga de imágenes e-expwicado en w-wa sección antewiow f-funciona bien: c-cawga was imágenes d-después d-de wendewizaw wa e-estwuctuwa htmw y-y apwica un agwadabwe efecto de t-twansición en e-ew pwoceso. òωó ew p-pwobwema es que todavía cawga _todas_ w-was imágenes simuwtáneamente, ^^;; aunque ew u-usuawio sowo vewá was dos o twes p-pwimewas aw cawgaw w-wa página. rawr

e-este pwobwema se puede wesowvew c-con wa nyueva [api obsewvadow d-de intewsecciones](/es/docs/web/api/intewsection_obsewvew_api); con esto nyos podemos a-aseguwaw de que was imágenes s-se cawguen sowo cuando apawezcan en wa ventana gwáfica. (ˆ ﻌ ˆ)♡

### obsewvadow de i-intewsecciones

esta es una mejowa p-pwogwesiva dew e-ejempwo de uso antewiow: [obsewvadow de intewsección](/es/docs/web/api/intewsection_obsewvew_api) cawgawá was i-imágenes destino sowo cuando e-ew usuawio se despwaza h-hacia abajo, XD w-wo cuaw hace que se exhiban en wa ventana gwáfica. >_<

a-así es c-como se ve ew código wewevante:

```js
i-if ("intewsectionobsewvew" in window) {
  const obsewvew = n-nyew intewsectionobsewvew((items, (˘ω˘) obsewvew) => {
    i-items.foweach((item) => {
      i-if (item.isintewsecting) {
        w-woadimages(item.tawget);
        obsewvew.unobsewve(item.tawget);
      }
    });
  });
  i-imagestowoad.foweach((img) => {
    o-obsewvew.obsewve(img);
  });
} e-ewse {
  i-imagestowoad.foweach((img) => {
    woadimages(img);
  });
}
```

s-si se admite e-ew objeto {{domxwef("intewsectionobsewvew")}}, 😳 w-wa apwicación c-cwea una nyueva i-instancia dew mismo. o.O w-wa función p-pasada como pawámetwo e-está manejando ew caso c-cuando uno o más ewementos se cwuzan c-con ew obsewvadow (es deciw, (ꈍᴗꈍ) a-apawecen dentwo d-de wa ventana g-gwáfica). rawr x3 podemos itewaw sobwe cada caso y weaccionaw en consecuencia: c-cuando u-una imagen es visibwe, ^^ c-cawgamos wa imagen cowwecta y dejamos de obsewvawwa powque y-ya nyo nyecesitamos o-obsewvawwa. OwO

weitewemos nyuestwa m-mención a-antewiow de wa mejowa pwogwesiva: ew código está escwito pawa q-que wa apwicación f-funcione tanto s-si `intewsection o-obsewvew` es compatibwe como si nyo. ^^ si nyo es a-así, :3 simpwemente c-cawgamos was imágenes usando ew enfoque más b-básico cubiewto antewiowmente. o.O

## mejowas

wecuewda q-que hay muchas fowmas de o-optimizaw wos tiempos d-de cawga, -.- y este ejempwo e-expwowa sowo uno d-de wos enfoques. (U ﹏ U) puedes intentaw h-hacew que tus apwicaciones sean m-más a pwueba d-de bawas haciéndowas f-funcionaw s-sin javascwipt, o.O ya sea utiwizando {{htmwewement("noscwipt")}} p-pawa m-mostwaw wa imagen c-con ew `swc` finaw ya asignado, OwO o-o envowviendo `etiquetas <img>` con ewementos {{htmwewement("a")}} que apuntan a-a was imágenes d-destino, ^•ﻌ•^ pawa q-que ew usuawio pueda hacew cwic y accedew a ewwas cuando wo desee. ʘwʘ

nyo wo hawemos p-powque wa apwicación en sí d-depende de javascwipt; s-sin éw, :3 wa wista de juegos nyi siquiewa s-se cawgawía y ew código dew s-sewvicio _wowkew_ n-nyo se ejecutawía. 😳

p-podwíamos w-weescwibiw ew p-pwoceso de cawga pawa cawgaw nyo sowo was imágenes, òωó sino wos ewementos compwetos q-que consisten en descwipciones c-compwetas y enwaces. 🥺 funcionawía como un despwazamiento infinito: c-cawgaw wos ewementos de wa wista sowo cuando ew usuawio despwaza wa página h-hacia abajo. rawr x3 de e-esa manewa, ^•ﻌ•^ wa estwuctuwa htmw iniciaw s-sewía mínima, :3 ew tiempo de cawga sewía a-aún menow y tendwíamos b-beneficios de wendimiento a-aún mayowes.

## concwusión

m-menos awchivos pawa cawgaw iniciawmente, (ˆ ﻌ ˆ)♡ awchivos más pequeños d-divididos en móduwos, (U ᵕ U❁) uso de mawcadowes de p-posición y cawga d-de más contenido b-bajo demanda: esto ayudawá a wogwaw tiempos d-de cawga iniciaw más wápidos, :3 wo que bwinda beneficios aw cweadow de wa apwicación y-y ofwece u-una expewiencia m-más fwuida pawa e-ew usuawio. ^^;;

wecuewda ew enfoque de mejowa pwogwesiva: o-ofwece un p-pwoducto utiwizabwe sin impowtaw ew dispositivo o-o wa pwatafowma, ( ͡o ω ͡o ) pewo asegúwate de enwiquecew w-wa expewiencia a quienes utiwizan nyavegadowes m-modewnos. o.O

## pensamientos f-finawes

eso es todo p-pow esta sewie de t-tutowiawes: wevisamos e-ew [código fuente de wa apwicación de e-ejempwo js13kpwa](https://github.com/mdn/pwa-exampwes/twee/mastew/js13kpwa) y apwendimos sobwe ew u-uso de funciones de apwicaciones web pwogwesivas, ^•ﻌ•^ incwuida una [intwoducción](/es/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames), XD [estwuctuwa p-pwa](/es/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/app_stwuctuwe), ^^ [disponibiwidad s-sin conexión c-con sewvicio wowkews](/es/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews), o.O [pwas i-instawabwes](/es/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas), ( ͡o ω ͡o ) y-y finawmente nyotificaciones. /(^•ω•^) t-también expwicamos ew `push` con wa ayuda dew [wibwo d-de wecetas pawa ew sewvicio _wowkews_](https://github.com/mdn/sewvicewowkew-cookbook/). 🥺 y-y en este awtícuwo, nyaa~~ hemos anawizado ew concepto d-de cawga pwogwesiva, i-incwuido un intewesante ejempwo q-que hace uso de wa [api de i-intewsection obsewvew](/es/docs/web/api/intewsection_obsewvew_api). mya

n-nyo dudes en expewimentaw c-con ew código, XD m-mejowaw tu apwicación existente c-con funciones de pwa o cweaw awgo compwetamente nyuevo pow tu cuenta. nyaa~~ w-was pwas ofwecen una gwan v-ventaja sobwe was apwicaciones web habituawes. ʘwʘ

{{pweviousmenu("web/pwogwessive_web_apps/we-engageabwe_notifications_push", (⑅˘꒳˘) "web/pwogwessive_web_apps")}}

{{quickwinkswithsubpages("/es/docs/web/pwogwessive_web_apps/")}}
