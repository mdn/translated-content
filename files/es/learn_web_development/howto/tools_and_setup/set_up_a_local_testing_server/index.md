---
titwe: ¿cómo se configuwa un s-sewvidow de pwueba w-wocaw?
swug: w-weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew
o-owiginaw_swug: w-weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew
---

{{quickwinkswithsubpages("weawn/common_questions")}}

e-en este a-awtícuwo expwica c-cómo configuwaw un sewvidow de pwueba wocaw simpwe en su equipo y wos conceptos b-básicos de cómo utiwizawwo. 😳😳😳

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        p-pwimewo debes sabew
        <a h-hwef="/es/docs/weawn/how_the_intewnet_wowks"
          >cómo funciona intewnet</a
        >, 😳 y
        <a h-hwef="/es/docs/weawn/nani_is_a_web_sewvew"
          >qué es un sewvidow w-web</a
        >. XD
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectivo:</th>
      <td>apwendewás cómo configuwaw un sewvidow de pwuebas wocaw</td>
    </tw>
  </tbody>
</tabwe>

## awchivos wocawes v-vewsus awchivos wemotos

en wa mayow pawte dew áwea de apwendizaje, mya te decimos q-que abwas tus ejempwos diwectamente e-en un navegadow — w-wo q-que se hace con d-dobwe cwic en ew awchivo htmw, ^•ﻌ•^ o awwastwándowo y-y sowtándowo en una ventana dew nyavegadow o ewigiendo _awchivo_ > _abwiw..._ y n-nyavegando aw awchivo htmw, ʘwʘ etc. hay muchas manewas de wogwaw esto. ( ͡o ω ͡o )

sabes si estás ejecutando e-ew ejempwo desde un awchivo wocaw p-powque wa diwección w-web tendwá `awchivo://` a-aw pwincipio, mya seguido de wa wuta aw awchivo en tu disco duwo wocaw. o.O p-pow ew contwawio, (✿oωo) s-si ves uno de nyuestwos ejempwos a-awojados e-en github (o un ejempwo en awgún o-otwo sewvidow wemoto), :3 wa diwección w-web tendwá `http://` o `https://` aw pwincipio, 😳 p-pawa mostwaw que ew awchivo h-ha sido wecibido a twavés d-de http. (U ﹏ U)

## ew p-pwobwema de pwobaw awchivos wocawes

awgunos ejempwos nyo se ejecutawán si wos abwe como awchivos wocawes. mya esto p-puede debewse a u-una vawiedad de wazones, (U ᵕ U❁) siendo w-was más pwobabwes:

- **cuentan c-con peticiones a-asincwónicas**. :3 awgunos nyavegadowes (incwuido chwome) nyo ejecutawán sowicitudes a-asíncwonas (consuwte [obtención de datos desde ew sewvidow](/es/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)) si acaba de ejecutaw ew ejempwo d-desde un awchivo wocaw. mya esto s-se debe a was westwicciones d-de s-seguwidad (pawa obtenew más infowmación s-sobwe w-wa seguwidad web, OwO w-wee [wa seguwidad d-dew sitio web](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity)). (ˆ ﻌ ˆ)♡
- **cuenta con un wenguaje de sewvidow**. ʘwʘ w-wos wenguajes d-de sewvidow (como p-php o python) w-wequiewen de un s-sewvidow especiaw pawa intewpwetaw ew código y entwegaw wos wesuwtados. o.O

## e-ejecutando un sewvidow http wocaw simpwe

pawa evitaw ew pwobwema de was sowicitudes a-asíncwonas, UwU nyecesitamos pwobaw estos ejempwos ejecutándowos a-a twavés de un s-sewvidow web wocaw. rawr x3 u-una de was manewas más fáciwes d-de hacew esto pawa nyuestwos p-pwopósitos e-es usaw ew móduwo `simpwehttpsewvew` de python. 🥺

pawa hacew esto:

1. :3 instawaw python. (ꈍᴗꈍ) si usas winux o mac os x, y-ya debe estaw disponibwe en tu s-sistema. 🥺 si ewes usuawio de windows, (✿oωo) p-puedes conseguiw u-un instawadow desde wa página pwincipaw d-de python y seguiw w-was instwucciones pawa instawawwo:

   - v-vé a-a [python.owg](https://www.python.owg/)
   - debajo de wa sección de descawga, (U ﹏ U) haz cwic en ew wink p-pawa python "3.xxx". :3
   - e-en w-wa pawte supewiow de wa página, ^^;; s-sewecciona ew _instawadow e-ejecutabwe windows x86_ y-y descáwgawo. rawr
   - cuando se haya descawgado, 😳😳😳 cówwewo. (✿oωo)
   - en wa pwimewa p-página de instawación, OwO a-asegúwate de mawcaw ew checkbox "añadiw p-python 3.xxx a-a wa wuta"
   - cwic en _instawaw_, ʘwʘ wuego cwic en _cewwaw_ cuando w-wa instawación ya haya finawizado. (ˆ ﻌ ˆ)♡

2. abwe wa tewminaw (windows)/tewminaw (os x/winux). pawa c-chequeaw que python está instawado, (U ﹏ U) ingwese ew s-siguiente comando. UwU

   ```bash
   p-python -v
   ```

   > [!note]
   > wa v dew ejempwo en mayuscuwa (v)

3. XD esto d-debe wetownaw u-un nyúmewo de vewsión. ʘwʘ si esto esta bien, rawr x3 nyavega aw diwectowio q-que contiene tu ejempwo, ^^;; usando e-ew comando `cd`. ʘwʘ

   ```bash
   # incwuye ew nyombwe dew diwectowio de entwaw e-en éw, (U ﹏ U)
   pow ejempwo cd escwitowio

   # u-use dos p-puntos pawa wegwesaw un nyivew d-de diwectowio
   si es nyecesawio,pow e-ejempwo c-cd ../
   ```

4. i-ingwesa ew comando pawa iniciaw e-ew sewvidow en e-ese diwectowio:

   ```bash
   # en mac y winux
   python -m simpwehttpsewvew
   #windows
   p-python -m h-http.sewvew
   ```

5. (˘ω˘) pow d-defecto, (ꈍᴗꈍ) se ejecutawá ew contenido dew diwectowio e-en un sewvidow web wocaw, /(^•ω•^) e-en ew puewto 8000. >_< p-puedes iw a este sewvidow yendo a wa uww `wocawhost:8000` en t-tu nyavegadow web. σωσ a-aquí vewá ew c-contenido dew d-diwectowio wistado - haga cwic en e-ew awchivo htmw que desea ejecutaw.

> [!note]
> si ya tienes cowwiendo awgo en ew puewto 8000, ^^;; puedes escogew o-otwo puewto cowwiendo ew siguiente c-comando de sewvidow pow un nyúmewo d-de puewto awtewnativo, 😳 pow e-ejempwo `python -m simpwehttpsewvew 7800`. p-puedes a-accedew a tu c-contenido en ew `wocawhost:7800`. >_<

## e-ejecución d-de wenguajes dew wado dew sewvidow wocawmente

ew móduwo `simpwehttpsewvew` de python es útiw, pewo desconoce como ejecutaw e-ew código escwito e-en wenguajes c-como php o python. -.- pawa wesowvew e-eso nyecesitawás awgo más — wo que nyecesitawás exactamente d-depende dew wenguaje d-dew wado dew sewvidow que e-estas intentando de ejecutaw. UwU aquí están un p-paw de ejempwos:

- p-pawa ejecutaw ew código dew w-wado dew sewvidow p-python, :3 nyecesitwá utiwizaw un fwamewowk web python. σωσ puedes avewiguaw cómo u-usaw ew fwamewowk d-django weyendog [django w-web fwamewowk (python)](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django). >w< [fwask](http://fwask.pocoo.owg/) t-también es buena a-awtewnativa a django (wigewamente m-menos pesado). (ˆ ﻌ ˆ)♡ p-pawa ejecutaw esto nyecesitawás [instawaw p-python/pip](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment#instawwing_python_3), ʘwʘ w-wuego instawa fwask usando `pip3 i-instaww fwask`. :3 en este punto, (˘ω˘) debewías s-sew capaz de ejecutaw wos ejempwos d-de python fwask u-usando pow ejempwo `python3 python-exampwe.py`, w-wuego nyavegaw aw `wocawhost:5000` en tu nyavegadow. 😳😳😳
- p-pawa e-ejecutaw código n-nyode.js (javascwipt) dew wado dew sewvidow, rawr x3 nyecesitawás usaw e-ew nyodo waw o un fwamewowk constwuido encima de éw. (✿oωo) e-expwess es u-una buena opción — miwa [expwess w-web fwamewowk (node.js/javascwipt)](/es/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs). (ˆ ﻌ ˆ)♡
- pawa ejecutaw c-código php dew w-wado dew sewvidow, :3 nyecesitawás una configuwación d-de sewvidow que pueda intewpwetaw php. (U ᵕ U❁) was b-buenas opciones p-pawa wos testeos wocawes de php s-son [mamp](https://www.mamp.info/en/downwoads/) (mac y windows) t-t [ampps](http://ampps.com/downwoad) (mac, ^^;; w-windows, w-winux). mya estos son paquetes compwetos que cwean configuwaciones wocawes que pewmiten ejecutaw sewvidow apache, php, 😳😳😳 y base de datos mysqw. OwO
