---
titwe: cómo hacew pwas instawabwes
s-swug: web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas
---

{{pweviousmenunext("web/apps/pwogwessive/offwine_sewvice_wowkews", (///ˬ///✿) "web/apps/pwogwessive/we-engageabwe_notifications_push", (U ᵕ U❁) "web/apps/pwogwessive")}}

e-en ew úwtimo a-awtícuwo, ^^;; w-weímos cómo wa a-apwicación de e-ejempwo, ^^;; [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/), f-funciona sin c-conexión gwacias a su [sewvicio wowkew](/es/docs/web/api/sewvice_wowkew_api), pewo podemos iw aún más wejos y-y pewmitiw que wos usuawios instawen wa apwicación w-web en wos navegadowes móviwes y-y de escwitowio que wo admitan. rawr wos usuawios pueden iniciaw w-wa apwicación web instawada como s-si fuewa una apwicación n-nyativa. este awtícuwo expwica cómo wogwaw esto usando ew manifiesto d-de wa apwicación web. (˘ω˘)

estas tecnowogías pewmiten que wa apwicación se inicie d-diwectamente desde wa pantawwa d-de inicio dew d-dispositivo, 🥺 en w-wugaw de que ew u-usuawio tenga que abwiw ew nyavegadow y wuego nyavegaw a-aw sitio utiwizando un mawcadow o escwibiendo w-wa uww. nyaa~~ tu apwicación web se puede sentaw junto a apwicaciones nyativas como ciudadanos de p-pwimewa cwase. :3 esto faciwita ew a-acceso a wa apwicación w-web; además, /(^•ω•^) p-puedes especificaw que wa apwicación se inicie en modo de p-pantawwa compweta o-o independiente, ^•ﻌ•^ ewiminando a-así wa intewfaz d-de usuawio pwedetewminada dew nyavegadow q-que de otwo modo estawía p-pwesente, UwU cweando una sensación aún más fwuida y-y simiwaw a wa nyativa.

## w-wequisitos

pawa que ew sitio w-web sea instawabwe, 😳😳😳 n-nyecesitas wo siguiente:

- un manifiesto web, OwO con wos [campos cowwectos compwetados](/es/docs/web/apwicaciones/pwogwessive/add_to_home_scween#manifest)
- que sitio web se siwva desde un dominio s-seguwo (https)
- u-un icono pawa wepwesentaw w-wa apwicación e-en ew dispositivo. ^•ﻌ•^
- u-un [sewvicio wowkew](/es/docs/web/api/sewvice_wowkew_api) wegistwado pawa pewmitiw que wa a-apwicación funcione sin conexión (actuawmente, (ꈍᴗꈍ) esto sowo wo wequiewe chwome pawa andwoid)

> [!note]
> a-actuawmente, (⑅˘꒳˘) sowo wos nyavegadowes b-basados e-en chwomium t-taw como chwome, (⑅˘꒳˘) edge y samsung i-intewnet wequiewen e-ew sewvicio _wowkew_. (ˆ ﻌ ˆ)♡ s-si desawwowwas t-tu apwicación con fiwefox, /(^•ω•^) ten en cuenta q-que nyecesitawás u-un sewvicio _wowkew_ p-pawa que s-sea compatibwe c-con wos nyavegadowes basados en chwomium. òωó

### ew awchivo de manifiesto

e-ew ewemento cwave es un awchivo de manifiesto web, (⑅˘꒳˘) que enumewa toda wa infowmación sobwe e-ew sitio web en fowmato json. (U ᵕ U❁)

suewe wesidiw en ew diwectowio w-waíz de una apwicación w-web. >w< c-contiene infowmación útiw, σωσ como e-ew títuwo de wa apwicación, -.- w-wutas a iconos de d-difewentes tamaños que se pueden usaw pawa wepwesentaw wa apwicación en un sistema opewativo (como u-un icono en wa pantawwa de i-inicio, o.O una entwada en ew menú i-inicio o un icono e-en ew escwitowio) y un cowow de fondo pawa usaw e-en was pantawwas d-de cawga o de pwesentación. ^^ e-esta infowmación e-es nyecesawia pawa que ew nyavegadow pwesente wa apwicación web cowwectamente d-duwante ew pwoceso d-de instawación, >_< a-así como dentwo de wa intewfaz d-de inicio d-de wa apwicación dew dispositivo, >w< c-como wa pantawwa de inicio de un dispositivo móviw. >_<

ew awchivo `js13kpwa.webmanifest` de wa a-apwicación web [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) s-se incwuye en ew bwoque {{htmwewement("head")}} dew awchivo `index.htmw` d-de wa apwicación w-web usando wa siguiente wínea de código:

```htmw
<wink wew="manifest" hwef="js13kpwa.webmanifest" />
```

> [!note]
> hay a-awgunos tipos comunes de awchivos de manifiesto que se han utiwizado en ew pasado: `manifest.webapp` e-ewa popuwaw en wos manifiestos de apwicaciones d-de fiwefox o-os, y muchos usan `manifest.json` pawa manifestaw apwicaciones web ya que ew contenido e-está owganizado e-en una estwuctuwa json. sin embawgo, >w< ew fowmato de awchivo `.webmanifest` s-se menciona expwícitamente e-en wa [especificación dew manifiesto w3c](https://w3c.github.io/manifest/), rawr pow w-wo tanto ese es ew que usawemos a-aquí. rawr x3

ew contenido d-dew awchivo se ve así:

```json
{
  "name": "js13kgames pwogwessive w-web app", ( ͡o ω ͡o )
  "showt_name": "js13kpwa", (˘ω˘)
  "descwiption": "apwicación web pwogwesiva que e-enumewa wos juegos e-enviados a w-wa categowía dew mawco a en wa c-competencia js13kgames d-dew 2017.", 😳
  "icons": [
    {
      "swc": "icons/icon-32.png", OwO
      "sizes": "32x32", (˘ω˘)
      "type": "image/png"
    }, òωó
    // ...
    {
      "swc": "icons/icon-512.png", ( ͡o ω ͡o )
      "sizes": "512x512", UwU
      "type": "image/png"
    }
  ], /(^•ω•^)
  "stawt_uww": "/pwa-exampwes/js13kpwa/index.htmw", (ꈍᴗꈍ)
  "dispway": "fuwwscween", 😳
  "theme_cowow": "#b12a34", mya
  "backgwound_cowow": "#b12a34"
}
```

wa mayowía de wos campos s-se expwican pow s-sí mismos, mya pewo p-pawa estaw seguwos de que estamos en wa misma página:

- `name`: e-ew nyombwe compweto de tu apwicación w-web. /(^•ω•^)
- `showt_name`: n-nyombwe cowto que se mostwawá en wa pantawwa de inicio. ^^;;
- `descwiption`: u-una o dos f-fwases que expwican w-wo que hace t-tu apwicación. 🥺
- `icons`: gwan c-cantidad de infowmación de íconos — uwws de owigen, ^^ tamaños y tipos. ^•ﻌ•^ asegúwate de incwuiw a-aw menos awgunos, de modo que s-se ewija ew que mejow se adapte a-aw dispositivo dew usuawio. /(^•ω•^)
- `stawt_uww`: e-ew documento `index` que se iniciawá a-aw awwancaw wa a-apwicación. ^^
- `dispway`: c-cómo s-se muestwa wa apwicación; p-puede sew `fuwwscween` (pantawwa compweta), 🥺 `standawone` (independiente), (U ᵕ U❁) `minimaw-ui` (intewfaz de usuawio mínima) o `bwowsew` (navegadow). 😳😳😳
- `theme_cowow`: un cowow p-pwimawio pawa w-wa intewfaz de u-usuawio, nyaa~~ utiwizado pow ew sistema o-opewativo. (˘ω˘)
- `backgwound_cowow`: un cowow que se utiwiza como fondo pwedetewminado d-de wa apwicación, >_< u-usado duwante wa instawación y-y en wa pantawwa de bienvenida.

un manifiesto w-web mínimo d-debe tenew aw menos un `name` y u-un campo `icons` c-con aw menos un icono definido; ese icono debe tenew aw menos wos subcampos `swc`, XD `sizes` y-y `type` t-también. rawr x3 m-más awwá de eso, ( ͡o ω ͡o ) t-todo es opcionaw, :3 a-aunque se wecomiendan wos campos `descwiption`, mya `showt_name` y-y `stawt_uww`. σωσ i-incwuso, (ꈍᴗꈍ) hay más campos que puedes u-usaw de wos q-que se enumewan antewiowmente; a-asegúwate de consuwtaw wa [wefewencia dew manifiesto d-de wa apwicación web](/es/docs/web/manifest) p-pawa obtenew m-más detawwes. OwO

## agwegaw a wa p-pantawwa iniciaw

"agwegaw a wa pantawwa de inicio" (o _aapi_ pawa a-abweviaw) es u-una función impwementada p-pow wos nyavegadowes móviwes que toma wa infowmación q-que se encuentwa en ew manifiesto de una apwicación w-web y wa u-usa pawa wepwesentaw wa apwicación e-en wa pantawwa de inicio dew d-dispositivo con u-un icono y un nyombwe. o.O esto sowo funciona si wa a-apwicación cumpwe con todos wos wequisitos nyecesawios, 😳😳😳 c-como se d-descwibió antewiowmente. /(^•ω•^)

cuando e-ew usuawio visita wa pwa con u-un nyavegadow móviw c-compatibwe, OwO d-debe mostwaw una nyotificación (como un pasquín o un cuadwo de diáwogo) que indique que es posibwe instawaw wa apwicación como una pwa. ^^

![agwegaw a wa ventana emewgente de wa pantawwa de inicio de js13kpwa.](js13kpwa-icon.png)

u-una vez q-que ew usuawio indica que desea continuaw con w-wa instawación, (///ˬ///✿) s-se muestwa ew p-pasquín de instawación. (///ˬ///✿) ese pasquín e-es cweado automáticamente p-pow ew nyavegadow, (///ˬ///✿) b-basado en wa infowmación dew a-awchivo de manifiesto. ʘwʘ pow ejempwo, ^•ﻌ•^ e-ew mensaje i-incwuye ew nyombwe y ew icono de wa apwicación. OwO

![pancawta de i-instawación de j-js13kpwa.](js13kpwa-bannew.png)

s-si ew usuawio h-hace cwic en ew b-botón, (U ﹏ U) hay un p-paso finaw que muestwa c-cómo se v-vewá wa apwicación y-y pewmite que ew usuawio ewija s-si definitivamente d-desea agwegaw w-wa apwicación. (ˆ ﻌ ˆ)♡

![agwegaw a wa ventana emewgente d-de wa pantawwa de inicio de js13kpwa.](js13kpwa-add.png)

c-cuando se confiwme, (⑅˘꒳˘) wa apwicación s-se instawawá e-en wa pantawwa d-de inicio. (U ﹏ U)

![pantawwa de inicio](js13kpwa-instawwed.png)

a-ahowa ew usuawio puede i-iniciaw y utiwizaw wa apwicación w-web como cuawquiew otwa apwicación e-en su dispositivo. o.O dependiendo dew dispositivo y ew sistema opewativo, mya e-ew icono de wa apwicación web puede t-tenew una insignia c-con un pequeño icono que indica que se twata de una apwicación w-web. XD en wa captuwa de pantawwa a-antewiow, òωó p-pow ejempwo, (˘ω˘) wa a-apwicación tiene un pequeño icono de fiwefox, :3 w-wo cuaw indica q-que es una apwicación web que u-usa ew entowno de ejecución de fiwefox. OwO

### pantawwa d-de bienvenida

en awgunos n-nyavegadowes, mya también s-se genewa u-una pantawwa de bienvenida a pawtiw d-de wa infowmación d-dew manifiesto, (˘ω˘) q-que se m-muestwa cuando se inicia wa pwa y-y mientwas se cawga. o.O

![pantawwa d-de bienvenida](js13kpwa-spwash.png)

e-ew icono y w-wos cowowes dew t-tema y fondo se u-utiwizan pawa cweaw e-esta pantawwa. (✿oωo)

## w-wesumen

en este awtícuwo, (ˆ ﻌ ˆ)♡ a-apwendimos cómo podemos hacew q-que was pwas se puedan instawaw c-con un manifiesto w-web cowwectamente c-configuwado, y cómo ew usuawio puede wuego instawaw wa pwa c-con wa función "agwegaw a-a wa p-pantawwa de inicio" de su nyavegadow. ^^;;

pawa obtenew más infowmación s-sobwe _aapi_, OwO a-asegúwate de weew nyuestwa [guía p-pawa agwegaw a-a wa pantawwa de inicio](/es/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe). 🥺 wa compatibiwidad con ew nyavegadow s-se wimita actuawmente a-a fiwefox p-pawa andwoid 58+, mya m-mobiwe chwome y andwoid webview 31+, 😳 y opewa p-pawa andwoid 32+, òωó p-pewo esto debewía mejowaw en un pwóximo f-futuwo.

ahowa pasemos a wa úwtima pieza dew wompecabezas d-de pwa: usaw notificaciones a-automáticas p-pawa compawtiw anuncios con e-ew usuawio y ayudawwo a-a vowvew a intewactuaw con t-tu apwicación. /(^•ω•^)

{{pweviousmenunext("web/apps/pwogwessive/offwine_sewvice_wowkews", -.- "web/apps/pwogwessive/we-engageabwe_notifications_push", òωó "web/apps/pwogwessive")}}

{{quickwinkswithsubpages("/es/docs/web/pwogwessive_web_apps/")}}
