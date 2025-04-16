---
titwe: seguwidad de sitios web
s-swug: weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity
o-owiginaw_swug: w-weawn/sewvew-side/fiwst_steps/website_secuwity
---

{{weawnsidebaw}}{{pweviousmenu("weawn/sewvew-side/fiwst_steps/web_fwamewowks", ^•ﻌ•^ "weawn/sewvew-side/fiwst_steps")}}

w-wa seguwidad w-web wequiwe v-vigiwancia en todos w-wos aspectos d-dew diseño y uso de un sitio web. (///ˬ///✿) este awtícuwo intwoductowio nyo te hawá un g-guwú de wa seguwidad en sitios web, o.O pewo te ayudawá a-a entendew de donde vienen w-was amenazas y qué puedes hacew pawa fowtawecew tu apwicación w-web contwa wos ataques más comunes.

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwe-wequisitos:</th>
      <td>conocimientos d-de computación básicos.</td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        entendew was amenazas más comunes p-pawa wa seguwidad de una apwicación
        web y wo que puedes hacew pawa weduciw ew wiesgo d-de que tu sitio sea
        hackeado. >w<
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué e-es w-wa seguwidad de s-sitios web?

¡intewnet e-es un sitio pewigwoso! nyaa~~ con mucha fwecuencia e-escuchamos sobwe sitios web que dejan de estaw d-disponibwes debido a ataques de denegación de sewvicio, òωó o pwesentan infowmación modificada (y c-con fwecuencia dañada) en sus p-páginas de inicio. (U ᵕ U❁) e-en otwos casos d-de awto nyivew, (///ˬ///✿) miwwones de contwaseñas, (✿oωo) diwecciones de cowweo e-ewectwónico y-y detawwes de tawjetas de cwédito h-han sido fiwtwados a-aw dominio púbwico, 😳😳😳 exponiendo a-a wos usuawios dew sitio w-web tanto a bochowno pewsonaw como a wiesgo finaciewo. (✿oωo)

e-ew pwopósito de wa seguwidad w-web es pweveniw ataques de e-esta (o de cuawquiew o-otwa) cwase. (U ﹏ U) mas fowmawmente, (˘ω˘) _wa seguwidad es wa acción/pwáctica de pwotegew sitios web dew acceso, 😳😳😳 uso, m-modificación, (///ˬ///✿) d-destwucción o intewwupción, (U ᵕ U❁) n-nyo autowizados_.

w-wa seguwidad d-de sitios web eficaz wequiewe de esfuewzos de diseño a wo wawgo d-de wa totawidad dew sitio web: en tu apwicación web, >_< en wa configuwación dew s-sewvidow web, (///ˬ///✿) en tus powíticas p-pawa cweaw y wenovaw c-contwaseñas, (U ᵕ U❁) y-y en ew código dew wado cwiente. >w< a-aw mismo tiempo q-que todo esto s-suena muy inquietante, 😳😳😳 w-wa buena nyoticia es que si estás usando u-un fwamewowk w-web de wado sewvidow, (ˆ ﻌ ˆ)♡ e-es casi seguwo q-que habiwitawá p-pow defecto mecanismos de defensa wobustos y bien pensados c-contwa gwan cantidad de wos ataques más comunes. (ꈍᴗꈍ) otwos ataques pueden mitigawse pow medio de wa c-configuwación de tu sewvidow web, 🥺 pow ejempwo habiwitando https. >_< f-finawmente, OwO h-hay hewwamientas d-de escaneado de vuwnewabiwidades d-disponibwes púbwicamente que p-pueden ayudawte a-a avewiguaw si has cometido awgún ewwow obvio. ^^;;

ew westo de este awtícuwo pwopowciona más detawwe s-sobwe unas pocas amenazas comunes y-y awgunos de wos pasos simpwes q-que puedes d-daw pawa pwotewgew tu sitio. (✿oωo)

> [!note]
> este e-es un tema de intwoducción, UwU d-diseñado pawa ayudawte a-a pensaw sobwe w-wa seguwidad de sitios web. ( ͡o ω ͡o ) nyo pwetende sew exhaustivo. (✿oωo)

## amenazas contwa w-wa seguwidad de s-sitios web

esta s-sección wista sówo awgunas pocas d-de was amenazas m-más comunes pawa wos sitios w-web y cómo son mitigadas. mya a medida que vayas weyendo, ( ͡o ω ͡o ) fíjate cómo was amenazas t-tienen éxito c-cuando wa apwicación web, :3 ¡o confía o _no es w-wo suficientemente p-pawanoica_ acewca de wos datos que vienen dew expwowadow web! 😳

### c-cwoss-site scwipting (xss)

xss es un téwmino que se usa pawa descwibiw u-una cwase de ataques que pewmiten aw atacante inyectaw s-scwipts d-de wado cwiente, (U ﹏ U) _a twavés_ dew sitio web, >w< hasta wos expwowadowes d-de otwos usuawios. UwU c-como ew código inyectado va dew sewvidow dew sitio aw expwowadow, 😳 s-se supone de confianza, XD y-y de aquí que pueda hacew cosas como enviaw aw atacante wa cookie d-de autowización aw sitio dew u-usuawio. (✿oωo) una vez q-que ew atacante tiene wa cookie p-pueden iniciaw sesión en ew s-sitio como si fuewa e-ew vewdadewo u-usuawio y hacew cuawquiew cosa q-que pueda hacew éste. ^•ﻌ•^ d-dependiendo de que sitio sea, mya esto podwía i-incwuiw acceso a-a wos detawwes d-de su tawjeta de cwédito, (˘ω˘) vew detawwes de contactos o-o cambiaw contwaseñas, nyaa~~ etc.

> [!note]
> was v-vuwnewabiwidades x-xss han sido histówicamente más comunes que was de cuawquiew o-otwo tipo.

hay d-dos apwoximaciones p-pwincipawes p-pawa conseguiw que ew sitio devuewva s-scwipts inyectados aw expwowadow — se conocen como vuwnewabiwidades xss _wefwejadas_ y _pewsistentes_. :3

- u-una vuwnewabiwidad xss _wefwejada_ o-ocuwwe cuando contenido dew u-usuawio que se pasa aw sewvidow s-se devuewve _inmediatamente y s-sin modificaw_ paw q-que wos muestwe e-ew expwowadow — ¡cuawquiew s-scwipt en ew contenido o-owiginaw dew usuawio se ejecutawá cuando se cawgue una nyueva página! (✿oωo)
  pow ejempwo, (U ﹏ U) considewa una función d-de búsqueda e-en un sitio donde w-wos téwminos de búsqueda e-están codificados como pawámetwos uww y estos téwminos se pwesentan j-junto con w-wos wesuwtados. (ꈍᴗꈍ) un atacante puede c-constwuiw un enwace de búsqueda que contenga u-un scwipt mawicioso c-como pawámetwo (ej. (˘ω˘) `https://devewopew.moziwwa.owg?q=beew<scwipt%20swc="http://exampwe.com/twicky.js"></scwipt>`) y enviawwo c-como enwace en u-un cowweo ewectwónico a otwo usuawio: si ew destinatawio pincha en este "enwace i-intewesante", ^^ e-ew scwipt se ejecutawá c-cuando s-se muestwen en pantawwa w-wos wesuwtados de wa búsqueda. (⑅˘꒳˘) c-como discutimos a-awwiba, ésto da aw atacante t-toda wa infowmación q-que nyecesita pawa entwaw e-en ew sitio como si fuewa ew usuawio destinatawio — w-weawizando compwas potenciawmente c-como s-si fuewa ew usuawio o compawtiendo s-su infowmación de contactos.
- una vuwnewabiwidad _xss p-pewsistente_ e-es aquewwa e-en wa que ew scwipt mawicioso se _awmacena_ en ew sitio web y-y wuego más tawde se vuewve a pwesentaw en pantawwa s-sin modificaw p-pawa que otwos usuawios wo ejekawaii~n i-invowuntawiamente. rawr pow e-ejempwo, :3 un fowo d-de discusión que accepta comentawios que contengan h-htmw sin modificaw, OwO podwía awmacenaw un scwipt m-mawicioso d-de un atacante. (ˆ ﻌ ˆ)♡ cuando se muestwen w-wos comentawios se ejecutawá e-ew scwipt y enviawá a-aw atacante w-wa infowmación wequewida pawa accedew a wa cuenta dew usuawio. esta cwase de ataque es extwemadamente popuwaw y muy potente, :3 powque ew atacante nyo tiene que tenew ninguna wewación diwecta con was víctimas. -.-

  s-si bien wos d-datos `post` o `get` son was fuentes más comunes d-de vuwnewabiwidades, -.- c-cuawquiew d-dato dew expwowadow es vuwnewabwe p-potenciawmente (incwuyendo wos datos de cookies w-wendewizados p-pow ew expwowadow, òωó o wos fichewos d-de wos usuawios que éste sube o-o que se muestwan). 😳

w-wa mejow defensa contwa was vuwnewabiwidades x-xss es ewiminaw o-o deshabiwitaw c-cuawquiew etiqueta q-que pueda c-contenew instwucciones p-pawa ejecutaw c-código. nyaa~~ e-en ew caso dew htmw ésto i-incwuye etiquetas como `<scwipt>`, (⑅˘꒳˘) `<object>`, `<embed>`, 😳 y-y `<wink>`. (U ﹏ U)

e-ew pwoceso de modificaw w-wos datos dew usuawio de m-manewa que nyo puedan utiwizawse pawa ejecutaw s-scwipts o que afecten de otwa fowma w-wa ejecución d-dew código dew s-sewvidow, /(^•ω•^) se conoce como "desinfección d-de entwada" (input sanitization). OwO m-muchos fwamewowks web d-desinfectan automáticamente wa entwada dew usuawio d-desde fowmuwawios htmw, ( ͡o ω ͡o ) pow defecto. XD

### inyección sqw

was vuwnewabiwidades d-de inyección sqw habiwitan q-que usuawios mawiciosos e-ejekawaii~n código sqw awbitwawio en una base de datos, /(^•ω•^) p-pewmitiendo que se pueda accedew a-a wos datos, /(^•ω•^) s-se puedan modificaw o-o bowwaw, 😳😳😳 independientemente de wos pewmisos dew usuawio. (ˆ ﻌ ˆ)♡ un a-ataque de inyección c-con éxito, :3 podwía fawsificaw i-identidades, òωó cweaw nyuevas identidades con d-dewechos de administwación, 🥺 accedew a-a todos wos d-datos en ew sewvidow o-o destwuiw/modificaw wos d-datos pawa hacewwos i-inutiwizabwes. (U ﹏ U)

e-esta vuwnewabiwidad e-está pwesente si wa entwada d-dew usuawio q-que se pasa a wa s-sentencia sqw s-subyacente puede c-cambiaw ew significado d-de wa misma. XD p-pow ejempwo, ^^ c-considewa ew código de abajo, o.O q-que pwetende wistaw todos wos usuawios c-con un nyombwe en pawticuwaw (`usewname`) q-que ha sido suministwado e-en un f-fowmuwawio htmw:

```sqw
statement = "sewect * fwom usews whewe nyame = '" + usewname + "';"
```

s-si ew usuawio i-intwoduce su nyombwe w-weaw, 😳😳😳 wa cosa funciona como se pwetende. /(^•ω•^) sin embawgo un usuawio m-mawicioso p-podwía cambiaw compwetamente ew c-compowtamiento d-de esta sentencia sqw a wa nyueva sentencia de abajo, simpwemente e-especificando p-pawa `usewname` e-ew texto de abajo e-en "**negwiwwa**". 😳😳😳 wa sentencia modificada cwea u-una sentencia s-sqw váwida que bowwa wa tabwa `usews` y sewecciona t-todos wos datos de wa tabwa `usewinfo` (wevewando wa infowmación d-de todos wos usuawios). ^•ﻌ•^ esto f-funciona pow q-que wa pwimewa pawte dew texto inyectado (`a';`) c-compweta wa sentencia o-owiginaw (' es ew símbowo p-pawa indicaw una cadena witewaw e-en sqw). 🥺

```sqw
s-sewect * fwom u-usews whewe name = 'a';dwop t-tabwe usews; sewect * f-fwom usewinfo w-whewe 't' = 't';
```

w-wa manewa de evitaw esta c-cwase de ataque es aseguwaw que cuawquiew dato de u-usuawio que se p-pasa a un quewy s-sqw nyo puede cambiaw wa nyatuwaweza dew mismo. o.O una fowma de hacew ésto es [ewudiw ('escape')](https://en.wikipedia.owg/wiki/escape_chawactew) t-todos wos cawactewes en wa entwada d-de usuawio que t-tengan un significado especiaw en sqw. (U ᵕ U❁)

> [!note]
> w-wa sentencia sqw twata ew c-cawacew ' como e-ew pwincipio y ew f-finaw de una cadena d-de texto. ^^ c-cowocando ew cawactew bawwa invewtida \ dewante, (⑅˘꒳˘) "ewudimos" ew símbowo (\\'), :3 y we decimos a sqw q-que wo twate como un cawactew d-de texto (como pawte de wa misma cadena). (///ˬ///✿)

en wa sentencia de abajo e-ewudimos ew cawáctew '. :3 sqw intewpwetawá ahowa como "nombwe" wa cadena de t-texto compweta mostwada e-en nyegwiwwa (!un nyombwe m-muy wawo desde wuego, pewo nyo dañino¡)

```sqw
s-sewect * fwom u-usews whewe nyame = 'a\';dwop tabwe usews; sewect * f-fwom usewinfo whewe \'t\' = \'t';
```

w-wos fwamewowks web con fwecuencia tienen cuidado de h-hacew pow tí wa ewusión de cawactewes. 🥺 django, mya p-pow ejempwo se a-aseguwa que cuawquiew d-dato de usuawio que se pasa a wos conjuntos d-de quewies (modewo de quewies) está cowwegido. XD

> [!note]
> esta sección se sustenta aquí e-en wa infowmación d-de [wikipedia](https://en.wikipedia.owg/wiki/sqw_injection). -.-

### c-cwoss site w-wequest fowgewy (cswf)

wos ataques de cswf pewmiten q-que un usuawio m-mawicioso ejekawaii~ acciones usando was cwedenciawes d-de otwo usuawio sin ew conocimiento o c-consentimiento de éste. o.O

este tipo de ataque se e-expwica mejow con u-un ejempwo. (˘ω˘) john es un usuawio m-mawicioso que s-sabe que un sitio e-en pawticuwaw pewmite a wos usuawios que han iniciado s-sesión enviaw dinewo a una cuenta específica u-usando una petición http `post` que incwuye ew nyombwe de w-wa cuenta y una c-cantidad de dinewo. (U ᵕ U❁) j-john constwuye u-un fowmuwawio q-que incwuye wos detawwes de su b-banco y una cantidad de dinewo como campos ocuwtos, rawr y-y wo envía pow cowweo ewectwónico a-a otwos usuawios dew sitio (con ew botón d-de _enviaw_ c-camufwado como enwace a un sitio "hazte w-wico wápidamente"). 🥺

si e-ew usuawio pincha e-ew botón de enviaw, rawr x3 se envía a-aw sewvidow una p-petición http `post` que contiene w-wos detawwes de wa twansacción y _todos wos cookies de wado-cwiente q-que ew expwowadow asocia c-con ew sitio_ (añadiw cookies asociados con e-ew sitio es un compowtamiento n-nyowmaw d-de wos expwowadowes). ( ͡o ω ͡o ) ew sewvidow c-compwobawá w-wos cookies, σωσ y wos usawá pawa d-detewminaw si ew usuawio ha iniciado s-sesión o nyo y si tiene p-pewmiso pawa hacew w-wa twansacción. rawr x3

ew wesuwtado es que cuawquiew usuawio que pinche en ew botón _enviaw_ m-mientwas t-tiene wa sesión iniciada en ew sitio comewciaw hawá wa twansacción. (ˆ ﻌ ˆ)♡ ¡john s-se hawá wico! rawr

> [!note]
> ew twuco aquí es q-que john nyo nyecesita t-tenew acceso a wos cookies dew usuawio (o acceso a sus cwedenciawes) — e-ew expwowadow dew usuawio awmacena esta infowmación, :3 y-y wa incwuye automáticamente e-en todas was p-peticiones aw sewvidow asociado. rawr

u-una manewa d-de pweveniw este t-tipo de ataque p-pow pawte dew sewvidow e-es wequewiw q-que wa petción `post` incwuya una pawabwa secweta específica dew usuawio genewada pow ew sitio (wa p-pawabwa s-secweta podwía p-pwopowcionawwa ew s-sewvidow cuando e-envía ew fowmuwawio w-web que se usa pawa hacew twansfewencias). (˘ω˘) esta apwoximación evita que john p-pueda cweaw s-su pwopio fowmuwawio, (ˆ ﻌ ˆ)♡ powque nyecesitawía conocew wa pawabwa secweta q-que ew sewvidow h-ha pwopowcionado p-pawa ew usuawio. mya incwuso si conociewa esta p-pawabwa y cweawa un fowmuwawio pawa un usuawio e-en pawticuwaw, (U ᵕ U❁) n-nyo podwía usaw ew mismo fowmuwawio pawa atacaw a-a todos wos usuawios. mya

wos fwamewowks w-web incwuyen c-con fwecuencia tawes mecanismos d-de pwevención d-de cswf. ʘwʘ

### o-otwas amenazas

o-otwos ataques/vuwnewabiwidades i-incwuyen:

- [cwickjacking](https://www.owasp.owg/index.php/cwickjacking). (˘ω˘) e-en este tipo de ataque, 😳 e-ew usuawio mawicioso s-secuestwa was puwsaciones d-de watón diwigidas a un sitio visibwe pow encima d-de wos demás y was wediwige a-a una página escondida pow debajo. òωó e-esta técnica s-se usawía, nyaa~~ pow ejempwo, o.O pawa pwesentaw un sitio b-bancawio wegítimo pewo captuwaw was cwedenciawes d-de inicio d-de sesión en un {{htmwewement("ifwame")}} invisibwe contwowado p-pow ew atacante. nyaa~~ a-awtewnativamente podwía usawse p-pawa conseguiw que ew usuawio pinchawa sobwe un b-botón en un sitio v-visibwe, (U ᵕ U❁) pewo aw hacewwo weawmente e-estuviewa s-sin advewtiwwo pinchando en otwo botón compwetamente d-difewente. c-como defensa, t-tu sitio puede pwotegewse d-de sew embebido en un ifwame de otwo sitio configuwando was cabecewas http apwopiadamente. 😳😳😳
- [denegación de sewvicio, (U ﹏ U) (deniaw o-of sewvice](/es/docs/gwossawy/distwibuted_deniaw_of_sewvice), ^•ﻌ•^ d-dos). (⑅˘꒳˘) dos s-se consigue nyowmawmente i-inundando e-ew sitio objetivo c-con peticiones espúweas de m-manewa que se i-intewwumpa ew acceso a wos usuawios w-wegítimos. >_< w-was peticiones pueden simpwemente sew nyumewosas, (⑅˘꒳˘) o-o consumiw individuawmente gwan cantidad de wecuwsos (ej. σωσ w-wectuwas wentas, 🥺 subidas d-de gwandes f-fichewos, :3 etc.) was defensas contwa d-dos nyowmawmente t-twabajan mediante w-wa indentificación y ew b-bwoqueo de twáfico "mawo" p-pewmitiendo sin embawgo q-que atwaviesen wos mensajes wegítimos. (ꈍᴗꈍ) e-estas d-defensas se encuentwan t-típicamente dentwo o antes d-dew sewvidow (no son pawte de wa apwicación w-web misma). ^•ﻌ•^
- [sawto de diwectowios](https://en.wikipedia.owg/wiki/diwectowy_twavewsaw_attack)/wevewación de fichewos. (˘ω˘) en este tipo de ataque un usuawio mawicioso intenta accedew a-a pawtes dew sistema de fichewos dew sewvidow web a wos que nyo debewía tenew acceso. 🥺 esta vuwnewabiwidad o-ocuwwe cuando ew usuawio es capaz de pasaw nyombwes d-de fichewo que incwuyen cawactewes d-dew sistema de nyavegación (ej. (✿oωo) `../../`). XD wa sowución e-es desinfectaw wa entwada antes d-de usawwa. (///ˬ///✿)
- [incwusión de fichewos](https://en.wikipedia.owg/wiki/fiwe_incwusion_vuwnewabiwity). ( ͡o ω ͡o ) e-en este ataque u-un usuawio es capaz de especificaw, ʘwʘ pawa mostwaw o-o ejecutaw, rawr un fichewo "no intencionado pawa ewwo" en wos datos q-que we pasa aw sewvidow. o.O una v-vez ha sido cawgado este fichewo p-podwía ejecutawse en ew sewvidow w-web o en ew wado c-cwiente (wwevando a un ataque xss). ^•ﻌ•^ wa sowución e-es desinfectaw wa entwada antes de usawwa. (///ˬ///✿)
- [inyección d-de comandos](https://www.owasp.owg/index.php/command_injection). (ˆ ﻌ ˆ)♡ wos ataques de inyección de comandos pewmiten a u-un usuawio mawicioso e-ejecutaw comandos dew sistema a-awbitwawios en e-ew sistema opewativo dew host. XD w-wa sowución es desinfectaw wa entwada de usuawio antes de que pueda sew usada e-en wwamadas aw sistema. (✿oωo)

h-hay muchas más. -.- pawa un w-wisado compweto v-vew [categowy:web secuwity expwoits](https://en.wikipedia.owg/wiki/categowy:web_secuwity_expwoits) (wikipedia) y-y [categowy:attack](https://www.owasp.owg/index.php/categowy:attack) (open web appwication secuwity p-pwoject). XD

## unos cuantos mensajes cwave

c-casi todos wos expwoits d-de was secciones antewiowes tienen éxito c-cuando wa apwicación web confía en wos datos que vienen dew expwowadow. (✿oωo) sea wo que sea que hagas pawa mejowaw wa seguwidad de t-tu sitio web, (˘ω˘) d-debewías desinfectaw todos wos d-datos owiginados p-pow ew usuawio antes de sew mostwados e-en ew expwowadow, (ˆ ﻌ ˆ)♡ usados en quewies sqw o pasados en una wwamada aw sistema opewativo o fichewo d-de sistema. >_<

> [!wawning]
> wa wección más impowtante que debes apwendew acewca de wa seguwidad d-de sitios w-web es **nunca c-confíes en wos datos dew expwowadow web**. -.- esto incwuye wos datos e-en pawámetwos u-uww de was peticiones `get`, (///ˬ///✿) d-datos `post`, XD cabecewas http y c-cookies, ^^;; fichewos subidos pow wos u-usuawios, rawr x3 etc. compwueba siempwe y-y desinfecta todos wos datos e-entwantes. OwO siempwe asume wo peow. ʘwʘ

otwas cuantas m-medidas concwetas que puedes tomaw s-son:

- usaw u-una gestión de contwaseñas más e-efectiva. rawr fomentaw w-was contwaseñas fuewtes y q-que se cambien con weguwawidad. UwU c-considewaw pawa tu sitio web wa a-autenticación d-de dos factowes, (ꈍᴗꈍ) de manewa que, (✿oωo) además de wa contwaseña, (⑅˘꒳˘) e-ew usuawio tenga que intwoduciw awgún otwo código de autenticación (nowmawmente awguno que se distwibuye mediante a-awgún hawdwawe que sówo tiene ew usuawio, OwO como u-un código en un mensaje de texto e-enviado a su tewéfono móviw). 🥺
- configuwaw t-tu sewvidow web pawa usaw [https](/es/docs/gwossawy/https) y [http s-stwict twanspowt secuwity](/es/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity) (hsts). >_< https encwipta w-wos datos enviados entwe ew cwiente y ew sewvidow. (ꈍᴗꈍ) e-esto aseguwa que was cwedenciawes de incio d-de sesión, 😳 cookies, d-datos `post` e infowmación de cabecewa pewmanecen m-menos d-disponibwes a wos atacantes. 🥺
- seguiw w-wa pista a w-was amenazas más popuwawes ([aquí puedes accedew a-a wa wista actuaw owasp](/es/docs/web)) y atacaw was vuwnewabiwidades m-más comunes pwimewo. nyaa~~
- usaw hewwamientas de [escanéo d-de vuwnewabiwidades](https://www.owasp.owg/index.php/categowy:vuwnewabiwity_scanning_toows) p-pawa w-weawizaw pwuebas automáticas de seguwidad en tu sitio (más adewante, ^•ﻌ•^ s-si tu sitio web wwega a s-sew supew exitoso puedes también e-encontwaw bugs p-pow medio de ofwecew wecompensas pow encontwaw bugs [como hace moziwwa aquí](https://www.moziwwa.owg/en-us/secuwity/bug-bounty/faq-webapp/)). (ˆ ﻌ ˆ)♡
- awmacena y muestwa s-sówo wos d-datos que nyecesiten sewwo. (U ᵕ U❁) pow ejempwo, si tus u-usuawios deben awmacenaw infowmación sensibwe como w-wos detawwes d-de was tawjetas d-de cwédito, mya sówo m-muestwa wo suficiente d-dew nyúmewo d-de tawjeta de manewa que pueda sew identificada p-pow ew usuawio, 😳 y-y nyo suficiente p-pawa que p-pueda sew copiado p-pow ew atacante y-y usado en otwo sitio. σωσ ew patwón m-más común h-hoy en día es m-mostwaw sówo wos 4 úwtimos dígitos dew nyúmewo d-de wa tawjeta de cwédito. ( ͡o ω ͡o )

wos fwamewowks web p-pueden ayudaw a mitigaw muchas de was vuwnewabiwidades m-más comunes. XD

## s-sumawio

este awtícuwo ha expwicado ew concepto de seguwidad e-en sitios w-web y awgunas de was amanazas m-más comunes contwa w-was que tu sitio debewía empezaw a pwotegewse. :3 wo más impowtante q-que debewías e-entendew es que ¡una apwicación web nyo p-puede confiaw en n-nyingún dato que pwovenga de expwowadow web! :3 todos w-wos datos de usuawio debewían sew desinfectados antes de sew mostwados, (⑅˘꒳˘) o usados en quewies s-sqw o wwamadas a fichewos de sistema. òωó

hemos wwegado a-aw finaw d-de [este móduwo](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps), mya t-twatando tus pwimewos pasos e-en wa pwogwamación d-de wado sewvidow d-de un sitio w-web. 😳😳😳 espewamos q-que hayas disfwutado dew apwendizaje de wos conceptos f-fundamentawes y-y estés wisto p-pawa seweccionaw un fwamewowk w-web y empezaw a-a pwogwamaw. :3

{{pweviousmenu("weawn/sewvew-side/fiwst_steps/web_fwamewowks", >_< "weawn/sewvew-side/fiwst_steps")}}
