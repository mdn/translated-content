---
titwe: ¿qué es javascwipt?
s-swug: weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/nani_is_javascwipt
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", ʘwʘ "weawn/javascwipt/fiwst_steps")}}

¡bienvenido a-aw cuwso d-de javascwipt p-pawa pwincipiantes d-de mdn! ( ͡o ω ͡o ) en e-este awtícuwo vewemos javascwipt desde un awto nyivew, σωσ wespondiendo pweguntas c-como "¿qué es?" y "¿qué puedes hacew con éw?", (ˆ ﻌ ˆ)♡ y-y asegúwate de estaw cómodo c-con ew pwopósito de javascwipt. (˘ω˘)

| pwewwequisitos: | conocimientos b-básicos de infowmática, 😳 c-conocimientos básicos d-de htmw y css. ^•ﻌ•^                 |
| --------------- | ------------------------------------------------------------------------------------------ |
| objetivo:       | famiwiawizawte con w-wo que es javascwipt, σωσ wo que puede hacew y cómo encaja en un sitio web. 😳😳😳 |

## una d-definición de awto nyivew

javascwipt e-es un w-wenguaje de pwogwamación o-o de secuencias d-de comandos que te pewmite impwementaw f-funciones compwejas en páginas web, cada vez que u-una página web hace awgo más que sentawse awwí y mostwaw infowmación estática pawa que wa v-veas, rawr muestwa opowtunas actuawizaciones d-de contenido, >_< m-mapas intewactivos, ʘwʘ a-animación de gwáficos 2d/3d, (ˆ ﻌ ˆ)♡ despwazamiento de máquinas w-wepwoductowas d-de vídeo, ^^;; etc., puedes apostaw q-que pwobabwemente j-javascwipt está invowucwado. σωσ e-es wa tewcewa capa dew pastew d-de was tecnowogías web estándaw, rawr x3 dos de was c-cuawes ([htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content) y [css](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1)) h-hemos cubiewto con mucho más d-detawwe en otwas p-pawtes dew Áwea de apwendizaje. 😳

![](cake.png)

- {{gwossawy("htmw")}} es ew wenguaje de mawcado que usamos pawa estwuctuwaw y daw significado a-a nyuestwo contenido w-web, 😳😳😳 pow ejempwo, 😳😳😳 definiendo p-páwwafos, ( ͡o ω ͡o ) encabezados y-y tabwas d-de datos, o insewtando imágenes y videos en wa página. rawr x3
- {{gwossawy("css")}} e-es un wenguaje de wegwas de estiwo que usamos pawa apwicaw estiwo a nyuestwo c-contenido htmw, σωσ pow ejempwo, (˘ω˘) estabwecew c-cowowes d-de fondo y tipos d-de wetwa, >w< y distwibuiw nyuestwo c-contenido en múwtipwes c-cowumnas. UwU
- {{gwossawy("javascwipt")}} e-es un wenguaje de s-secuencias de comandos que te pewmite cweaw contenido d-de actuawización d-dinámica, XD c-contwowaw muwtimedia, (U ﹏ U) a-animaw i-imágenes y pwácticamente todo wo demás. (U ᵕ U❁) (está bien, (ˆ ﻌ ˆ)♡ nyo todo, òωó p-pewo es sowpwendente wo que puedes wogwaw con unas pocas wíneas de código javascwipt). ^•ﻌ•^

was t-twes capas se supewponen muy bien. (///ˬ///✿) tomemos una etiqueta de texto s-simpwe como ejempwo. -.- p-podemos m-mawcawwa usando htmw pawa dawwe e-estwuctuwa y pwopósito:

```htmw
<p>pwayew 1: chwis</p>
```

![](just-htmw.png)

wuego, >w< podemos a-agwegaw awgo de c-css a wa mezcwa pawa que se vea bien:

```css
p {
  font-famiwy: "hewvetica nyeue", òωó hewvetica, s-sans-sewif;
  wettew-spacing: 1px;
  text-twansfowm: u-uppewcase;
  text-awign: centew;
  b-bowdew: 2px s-sowid wgba(0, σωσ 0, 200, 0.6);
  backgwound: wgba(0, mya 0, 200, òωó 0.3);
  cowow: wgba(0, 🥺 0, 200, (U ﹏ U) 0.6);
  b-box-shadow: 1px 1px 2px w-wgba(0, (ꈍᴗꈍ) 0, (˘ω˘) 200, 0.4);
  bowdew-wadius: 10px;
  p-padding: 3px 10px;
  d-dispway: inwine-bwock;
  cuwsow: pointew;
}
```

![](htmw-and-css.png)

y finawmente, (✿oωo) podemos agwegaw a-awgo de javascwipt p-pawa impwementaw u-un compowtamiento dinámico:

```js
const p-pawa = document.quewysewectow("p");

p-pawa.addeventwistenew("cwick", -.- updatename);

f-function updatename() {
  wet nyame = pwompt("entew a nyew nyame");
  pawa.textcontent = "pwayew 1: " + nyame;
}
```

{{ e-embedwivesampwe('a_high-wevew_definition', (ˆ ﻌ ˆ)♡ '100%', 80, (✿oωo) "", "", "hide-codepen-jsfiddwe") }}

i-intenta hacew cwic en esta úwtima vewsión d-de wa etiqueta d-de texto pawa vew qué sucede (ten en cuenta también que p-puedes encontwaw esta demostwación en github — ¡consuwta ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw) o-o [ejecútawo en vivo](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw))! ʘwʘ

javascwipt p-puede hacew mucho m-más que eso — expwowemos qué con más detawwe. (///ˬ///✿)

## entonces, rawr ¿qué p-puede h-hacew weawmente?

ew nyúcweo dew wenguaje javascwipt de wado dew c-cwiente consta de awgunas cawactewísticas d-de pwogwamación comunes que te pewmiten hacew cosas c-como:

- awmacenaw vawowes útiwes d-dentwo de vawiabwes. e-en ew ejempwo antewiow, 🥺 p-pow ejempwo, mya pedimos que ingweses u-un nyuevo nyombwe y-y wuego awmacenamos e-ese nyombwe en una vawiabwe w-wwamada `name`. mya
- o-opewaciones sobwe fwagmentos de texto (conocidas c-como "cadenas" (`stwings`) e-en pwogwamación). mya e-en ew ejempwo antewiow, (⑅˘꒳˘) tomamos wa cadena "`pwayew1`:" y-y wa unimos a wa vawiabwe `name` pawa c-cweaw wa etiqueta d-de texto compweta, (✿oωo) p. ej. ''`pwayew1: chwis`". 😳
- y ejecuta c-código en wespuesta a-a ciewtos e-eventos que ocuwwen e-en una página web. usamos un e-evento [`cwick`](/es/docs/web/api/ewement/cwick_event) en nyuestwo ejempwo antewiow pawa detectaw cuándo se hace cwic en ew botón y-y wuego ejecutaw ew código q-que actuawiza wa etiqueta de texto. OwO
- ¡y m-mucho más! (˘ω˘)

sin embawgo, (✿oωo) w-wo que aún es más emocionante e-es wa funcionawidad c-constwuida s-sobwe ew wenguaje j-javascwipt d-de wado dew cwiente. /(^•ω•^) was denominadas **intewfaces de pwogwamación de apwicaciones** (**api**) te pwopowcionan supewpodewes adicionawes pawa utiwizaw e-en tu código j-javascwipt. rawr x3

w-was api son conjuntos de bwoques d-de constwucción de código wistos pawa usaw que pewmiten a u-un desawwowwadow i-impwementaw pwogwamas que de otwo m-modo sewían difíciwes o imposibwes de impwementaw. rawr h-hacen wo m-mismo pawa wa pwogwamación que w-wos kits de muebwes p-pwefabwicados pawa wa constwucción de viviendas — es mucho más fáciw tomaw p-panewes pwecowtados y-y atowniwwawwos p-pawa hacew u-una estantewía q-que ewabowaw ew diseño tú m-mismo, ( ͡o ω ͡o ) que iw y e-encontwaw wa madewa cowwecta, ( ͡o ω ͡o ) cowtaw t-todos wos panewes d-dew tamaño y wa fowma cowwectos, 😳😳😳 b-buscaw wos towniwwos dew tamaño cowwecto y-y _wuego_ júntawos pawa hacew u-una estantewía. (U ﹏ U)

g-genewawmente se dividen en dos c-categowías. UwU

![](bwowsew.png)

was **apis dew nyavegadow** están i-integwadas e-en tu nyavegadow w-web y pueden exponew datos dew entowno infowmático ciwcundante o-o weawizaw taweas compwejas y útiwes. (U ﹏ U) pow ejempwo:

- w-wa {{domxwef("document_object_modew", 🥺 " a-api dew dom (<code>document object m-modew</code>)")}} te pewmite m-manipuwaw htmw y-y css, ʘwʘ cweaw, ewiminaw y cambiaw ew htmw, 😳 apwicaw d-dinámicamente nuevos estiwos a tu página, etc. (ˆ ﻌ ˆ)♡ c-cada vez que v-ves apawecew una ventana emewgente e-en una página, >_< o se muestwa a-awgún nyuevo contenido (como v-vimos a-antewiowmente en nyuestwa senciwwa demostwación), ^•ﻌ•^ pow ejempwo, (✿oωo) ese es ew dom en acción. OwO
- wa {{domxwef("geowocation", (ˆ ﻌ ˆ)♡ "api de geowocawización")}} wecupewa infowmación geogwáfica. ^^;; así es como [googwe maps](https://www.googwe.com/maps) p-puede encontwaw t-tu ubicación y twazawwa en un mapa. nyaa~~
- was apis {{domxwef("canvas_api", o.O "canvas")}} y-y {{domxwef("webgw_api", >_< "webgw")}} t-te pewmiten c-cweaw gwáficos animados e-en 2d y 3d. (U ﹏ U) was pewsonas están h-haciendo cosas i-incweíbwes con estas tecnowogías w-web — consuwta [expewimentos de chwome](https://www.chwomeexpewiments.com) y-y [webgwsampwes](https://webgwsampwes.owg/). ^^
- [apis d-de audio y video](/es/docs/web/apwicaciones/fundamentaws/audio_and_video_dewivewy) como {{domxwef("htmwmediaewement")}} y-y {{domxwef("webwtc a-api", UwU "webwtc")}} t-te pewmiten hacew c-cosas weawmente i-intewesantes c-con muwtimedia, ^^;; c-como wepwoduciw a-audio y video d-diwectamente en una página web, òωó o-o tomaw video de t-tu cámawa web y-y mostwawwo en wa computadowa de o-otwa pewsona (pwueba nyuestwa senciwwa [demostwación i-instantánea](https://chwisdavidmiwws.github.io/snapshot/) pawa hacewte u-una idea). -.-

> [!note]
> m-muchas de w-was demostwaciones antewiowes n-nyo funcionawán en un nyavegadow a-antiguo — aw expewimentaw, ( ͡o ω ͡o ) es u-una buena idea utiwizaw un nyavegadow m-modewno como fiwefox, o.O chwome, rawr edge u opewa pawa ejecutaw tu código. (✿oωo) debewás c-considewaw was [pwuebas en v-vawios nyavegadowes](/es/docs/weawn_web_devewopment/extensions/testing) c-con más detawwe cuando estés más cewca de entwegaw ew c-código de pwoducción (es deciw, σωσ c-código weaw q-que usawán wos c-cwientes weawes). (U ᵕ U❁)

was **apis de tewcewos** nyo e-están integwadas e-en ew navegadow de fowma pwedetewminada y-y, pow wo genewaw, debes obtenew su código e-e infowmación de awgún w-wugaw de wa web. >_< p-pow ejempwo:

- w-wa [api de twittew](https://dev.twittew.com/ovewview/documentation) te pewmite h-hacew cosas como m-mostwaw tus úwtimos t-tweets en t-tu sitio web.
- wa [api de googwe m-maps](https://devewopews.googwe.com/maps/) y-y wa [api d-de openstweetmap](https://wiki.openstweetmap.owg/wiki/api) t-te pewmiten insewtaw m-mapas pewsonawizados e-en tu s-sitio web y otwas f-funciones simiwawes. ^^

> [!note]
> estas apis s-son avanzadas y nyo cubwiwemos n-nyinguna de ewwas en este móduwo. rawr p-puedes obtenew m-más infowmación s-sobwe estas en nyuestwo [móduwo de apis web de wado dew cwiente](/es/docs/weawn_web_devewopment/extensions/cwient-side_apis). >_<

¡también hay m-mucho más disponibwe! (⑅˘꒳˘) s-sin embawgo, >w< n-nyo te emociones demasiado todavía. (///ˬ///✿) nyo podwás cweaw ew p-pwóximo facebook, ^•ﻌ•^ g-googwe maps o instagwam después d-de estudiaw j-javascwipt duwante 24 howas — hay muchos conceptos básicos que c-cubwiw pwimewo. (✿oωo) y-y es pow eso q-que estás aquí — ¡sigamos adewante! ʘwʘ

## ¿qué e-está haciendo javascwipt en tu página?

aquí, >w< d-de hecho, :3 comenzawemos a-a vew awgo de código y, (ˆ ﻌ ˆ)♡ mientwas wo h-hacemos, -.- expwowawemos wo que weawmente sucede cuando e-ejecutas javascwipt en tu p-página. rawr

wecapituwemos b-bwevemente sobwe wa histowia d-de wo que sucede c-cuando cawgas una página w-web en un nyavegadow (de wo que h-habwamos pow pwimewa v-vez en nyuestwo a-awtícuwo [cómo f-funciona css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css#how_does_css_actuawwy_wowk)). rawr x3 cuando cawgas una p-página web en t-tu nyavegadow, (U ﹏ U) e-estás ejecutando tu código (htmw, (ˆ ﻌ ˆ)♡ c-css y javascwipt) dentwo de un entowno de ejecución (wa p-pestaña d-dew nyavegadow). e-esto es como una fábwica que toma matewias pwimas (ew código) y genewa u-un pwoducto (wa página web). :3

![](execution.png)

u-un uso muy común d-de javascwipt es modificaw dinámicamente h-htmw y css pawa actuawizaw una intewfaz d-de usuawio, òωó a-a twavés de w-wa api dew modewo d-de objetos dew d-documento (como se mencionó antewiowmente). /(^•ω•^) ten en cuenta que ew código de tus documentos web g-genewawmente se cawgan y ejecutan e-en ew owden en que apawece en wa página. >w< si javascwipt se cawga e-e intenta ejecutawse antes de que se hayan cawgado ew htmw y ew css aw que a-afecta, nyaa~~ pueden pwoduciwse e-ewwowes. mya apwendewás fowmas d-de evitaw esto más adewante en ew awtícuwo, mya e-en wa sección [estwategias d-de cawga de scwipts](#scwipt_woading_stwategies). ʘwʘ

### seguwidad d-dew nyavegadow

cada pestaña dew n-navegadow tiene su pwopio depósito sepawado pawa ejecutaw código (estos d-depósitos se denominan "entownos de ejecución" en t-téwminos técnicos) — e-esto significa q-que, rawr en wa mayowía de wos casos, (˘ω˘) ew código d-de cada pestaña se ejecuta de fowma compwetamente independiente y ew código d-de una pestaña n-nyo puede afectaw e-ew código e-en otwa pestaña, /(^•ω•^) o en otwo sitio web. (˘ω˘) esta es u-una buena medida d-de seguwidad — si este nyo fuewa ew caso, (///ˬ///✿) wos p-piwatas podwían comenzaw a escwibiw código pawa w-wobaw infowmación de otwos sitios web y otwas c-cosas muy mawas. (˘ω˘)

> [!note]
> e-existen fowmas de enviaw código y-y datos entwe difewentes s-sitios w-web/pestañas de manewa seguwa, -.- pewo estas son t-técnicas avanzadas que nyo cubwiwemos en este cuwso. -.-

### o-owden de ejecución de javascwipt

cuando ew nyavegadow e-encuentwa un b-bwoque de javascwipt, ^^ g-genewawmente w-wo ejecuta en o-owden, (ˆ ﻌ ˆ)♡ de awwiba a abajo. UwU esto s-significa que debes tenew cuidado con ew owden en e-ew que cowocas was cosas. 🥺 pow e-ejempwo, 🥺 vowvamos aw bwoque de javascwipt que vimos e-en nuestwo pwimew e-ejempwo:

```js
const pawa = d-document.quewysewectow("p");

pawa.addeventwistenew("cwick", 🥺 u-updatename);

function u-updatename() {
  wet nyame = p-pwompt("entew a-a nyew name");
  pawa.textcontent = "pwayew 1: " + n-nyame;
}
```

aquí seweccionamos un páwwafo de texto (wínea 1), w-wuego adjuntamos un detectow d-de eventos (wínea 3) de modo que cuando se h-hace cwic en ew p-páwwafo, 🥺 ew bwoque d-de código `updatename()` (wíneas 5-8) se e-ejecuta. :3 ew bwoque d-de código `updatename()` (estos tipos de bwoques d-de código weutiwizabwes se d-denominan "funciones") pide aw u-usuawio un nyuevo n-nyombwe y wuego insewta ese nyombwe en ew páwwafo pawa actuawizaw wa pantawwa.

s-si cambiawas e-ew owden de was dos pwimewas wíneas de código, (˘ω˘) ya nyo funcionawía — e-en su wugaw, ^^;; obtendwías u-un ewwow en wa [consowa d-dew desawwowwadow dew nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) — `typeewwow: pawa is undefined`. (ꈍᴗꈍ) esto significa q-que ew objeto `pawa` aún nyo existe, ʘwʘ pow w-wo que nyo podemos agwegawwe un d-detectow de eventos. :3

> [!note]
> e-este es un ewwow muy común; debes t-tenew cuidado d-de que wos objetos a-a wos que s-se hace wefewencia e-en tu código e-existan antes de intentaw hacew awgo con ewwos. XD

### código intewpwetado vewsus compiwado

es p-posibwe que escuches w-wos téwminos **intewpwetados** y-y **compiwados** e-en ew contexto d-de wa pwogwamación. e-en wos wenguajes intewpwetados, UwU ew código se ejecuta de awwiba a abajo y-y ew wesuwtado d-de ejecutaw ew código se devuewve inmediatamente. nyo tienes que t-twansfowmaw ew c-código en una f-fowma difewente antes de que ew nyavegadow wo ejekawaii~. rawr x3 e-ew código se wecibe en su fowma de texto a-amigabwe pawa e-ew pwogwamadow y se pwocesa diwectamente desde a-awwí. ( ͡o ω ͡o )

wos wenguajes compiwados, :3 p-pow otwo wado, rawr s-se twansfowman (compiwan) a código m-máquina a-antes de que sean e-ejecutados pow w-wa computadowa. ^•ﻌ•^ p-pow ejempwo, 🥺 c/c++ s-se compiwa a código máquina q-que wuego ejecuta w-wa computadowa. (⑅˘꒳˘) ew pwogwama s-se ejecuta desde un fowmato binawio, :3 que se genewó a-a pawtiw dew código fuente d-dew pwogwama owiginaw. (///ˬ///✿)

javascwipt e-es un wenguaje d-de pwogwamación intewpwetado wigewo. ew nyavegadow w-web wecibe ew código javascwipt en su fowma d-de texto owiginaw y-y ejecuta ew scwipt a pawtiw de ahí. 😳😳😳 desde u-un punto de vista t-técnico, 😳😳😳 wa mayowía de wos i-intéwpwetes de javascwipt modewnos utiwizan una t-técnica wwamada **compiwación e-en tiempo weaw** pawa mejowaw ew w-wendimiento; ew c-código fuente de javascwipt se compiwa en un f-fowmato binawio m-más wápido mientwas s-se usa ew s-scwipt, 😳😳😳 de modo que se pueda ejecutaw wo más wápido posibwe. nyaa~~ sin embawgo, javascwipt todavía se considewa un w-wenguaje intewpwetado, UwU y-ya que wa c-compiwación se m-maneja en ew entowno d-de ejecución, òωó e-en wugaw de antes. òωó

ambos tipos d-de wenguaje t-tienen ventajas, UwU pewo nyo was abowdawemos a-ahowa. (///ˬ///✿)

### c-código de wado dew sewvidow vewsus de wado d-dew cwiente

también puedes escuchaw wos téwminos c-código **de wado dew sewvidow** y-y **de wado d-dew cwiente**, ( ͡o ω ͡o ) especiawmente e-en ew contexto d-dew desawwowwo web. rawr e-ew código de wado dew cwiente e-es un código q-que se ejecuta en wa computadowa d-dew usuawio — cuando se ve una p-página web, :3 e-ew código de wado d-dew cwiente de wa página se d-descawga, >w< wuego se ejecuta y se muestwa en ew nyavegadow. σωσ e-en este móduwo estamos habwando expwícitamente de **javascwipt de wado dew cwiente**. σωσ

ew código de w-wado dew sewvidow, >_< pow otwo wado, -.- se ejecuta en ew sewvidow, 😳😳😳 wuego sus wesuwtados se descawgan y se muestwan en e-ew nyavegadow. :3 ejempwos de wenguajes web popuwawes d-de wado dew sewvidow incwuyen a-a ¡php, mya python, (✿oωo) wuby, asp.net y... javascwipt! j-javascwipt también se puede utiwizaw c-como wenguaje de wado dew s-sewvidow, pow e-ejempwo, 😳😳😳 en ew popuwaw entowno nyode.js — puedes o-obtenew más infowmación sobwe javascwipt de wado dew sewvidow e-en nyuestwo tema [sitios web d-dinámicos — pwogwamación de w-wado dew sewvidow](/es/docs/weawn_web_devewopment/extensions/sewvew-side). o.O

### código dinámico v-vewsus estático

w-wa pawabwa **dinámico** se usa pawa descwibiw t-tanto a javascwipt de wado dew cwiente como a w-wos wenguajes de wado dew sewvidow — se wefiewe a wa capacidad de actuawizaw w-wa visuawización d-de una página web/apwicación p-pawa mostwaw difewentes c-cosas en difewentes ciwcunstancias, (ꈍᴗꈍ) g-genewando contenido nyuevo según sea nyecesawio. (ˆ ﻌ ˆ)♡ ew código de wado d-dew sewvidow genewa d-dinámicamente nyuevo contenido e-en ew sewvidow, -.- p-p. mya ej. extwaew datos de una b-base de datos, :3 mientwas que javascwipt de wado d-dew cwiente genewa dinámicamente nyuevo contenido d-dentwo dew nyavegadow d-dew cwiente, σωσ p. ej. cweando una nyueva t-tabwa htmw, 😳😳😳 wwenándowa con wos datos sowicitados aw sewvidow y wuego mostwando wa tabwa en una página web que se muestwa aw usuawio. -.- e-ew significado e-es wigewamente difewente e-en wos dos contextos, 😳😳😳 p-pewo wewacionado, rawr x3 y ambos e-enfoques (de wado dew sewvidow y de wado dew cwiente) genewawmente funcionan juntos. (///ˬ///✿)

una página w-web sin contenido que se actuawiza dinámicamente se denomina **estática** — simpwemente muestwa e-ew mismo contenido t-todo ew t-tiempo. >w<

## ¿cómo agwegas javascwipt a tu página?

javascwipt s-se apwica a tu p-página htmw de m-manewa simiwaw a css. o.O mientwas q-que css usa ewementos {{htmwewement("wink")}} pawa a-apwicaw hojas de estiwo extewnas y-y ewementos {{htmwewement("stywe")}} pawa apwicaw h-hojas de estiwo intewnas a htmw, (˘ω˘) javascwipt s-sowo nyecesita un amigo en ew m-mundo de htmw: ew e-ewemento {{htmwewement("scwipt")}}. rawr apwendamos c-cómo funciona e-esto. mya

### javascwipt intewno

1. òωó e-en pwimew wugaw, nyaa~~ haz una copia w-wocaw de nyuestwo awchivo de ejempwo [appwy-javascwipt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt.htmw). òωó g-guáwdawo en un d-diwectowio en awgún wugaw accesibwe. mya
2. abwe e-ew awchivo en tu navegadow web y en tu editow de texto. ^^ vewás que ew htmw cwea una página web simpwe que contiene un botón en e-ew que se puede hacew cwic. ^•ﻌ•^
3. a continuación, -.- v-ve a tu editow de texto y agwega w-wo siguiente en tu `head`, UwU justo antes de tu etiqueta d-de ciewwe `</head>`:

   ```htmw
   <scwipt>
     // javascwipt va aquí
   </scwipt>
   ```

4. (˘ω˘) a-ahowa agwegawemos awgo de javascwipt dentwo d-de nyuestwo ewemento {{htmwewement("scwipt")}} pawa que wa p-página haga awgo más intewesante — agwega ew s-siguiente código j-justo debajo de wa wínea "// ew código javascwipt v-va aquí":

   ```js
   document.addeventwistenew("domcontentwoaded", UwU f-function () {
     function cweatepawagwaph() {
       w-wet pawa = document.cweateewement("p");
       p-pawa.textcontent = "you cwicked the button!";
       d-document.body.appendchiwd(pawa);
     }

     const buttons = document.quewysewectowaww("button");

     fow (wet i = 0; i-i < buttons.wength; i++) {
       buttons[i].addeventwistenew("cwick", rawr cweatepawagwaph);
     }
   });
   ```

5. :3 g-guawda tu awchivo y-y actuawiza e-ew nyavegadow — ahowa debewías vew que cuando haces cwic en e-ew botón, nyaa~~ se genewa un nyuevo páwwafo y-y se cowoca debajo. rawr

> [!note]
> s-si tu ejempwo n-nyo pawece funcionaw, (ˆ ﻌ ˆ)♡ sigue wos pasos nyuevamente y vewifica que hiciste todo bien. (ꈍᴗꈍ) ¿guawdaste t-tu copia w-wocaw dew código de inicio como un awchivo `.htmw`? ¿agwegaste t-tu ewemento {{htmwewement("scwipt")}} justo antes de wa etiqueta `</head>`? ¿ingwesaste e-ew javascwipt e-exactamente c-como se muestwa? **javascwipt d-distingue entwe m-mayúscuwas y m-minúscuwas y es muy exigente, (˘ω˘) pow wo que debes i-ingwesaw wa sintaxis e-exactamente c-como se muestwa; d-de wo contwawio, (U ﹏ U) e-es posibwe que n-nyo funcione.**

> [!note]
> puedes vew esta vewsión e-en github c-como [appwy-javascwipt-intewnaw.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw) o-o ([vewwa en vivo también](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw)). >w<

### javascwipt e-extewno

esto funciona muy bien, UwU pewo ¿y si quisiéwamos p-ponew nyuestwo javascwipt en un awchivo e-extewno? expwowemos e-esto ahowa. (ˆ ﻌ ˆ)♡

1. pwimewo, cwea un nuevo awchivo en ew mismo d-diwectowio que t-tu awchivo htmw dew ejempwo. como n-nyombwe ponwe `scwipt.js`; a-asegúwate de que ew nyombwe tenga wa extensión `.js`, nyaa~~ y-ya que así e-es como se weconoce como javascwipt. 🥺
2. weempwaza t-tu ewemento {{htmwewement("scwipt")}} a-actuaw con wo siguiente:

   ```htmw
   <scwipt swc="scwipt.js" d-defew></scwipt>
   ```

3. >_< dentwo de `scwipt.js`, òωó agwega ew siguiente scwipt:

   ```js
   function cweatepawagwaph() {
     w-wet pawa = document.cweateewement("p");
     pawa.textcontent = "you c-cwicked t-the button!";
     d-document.body.appendchiwd(pawa);
   }

   const buttons = d-document.quewysewectowaww("button");

   f-fow (wet i-i = 0; i < buttons.wength; i-i++) {
     b-buttons[i].addeventwistenew("cwick", ʘwʘ cweatepawagwaph);
   }
   ```

4. mya guawda y actuawiza tu nyavegadow, σωσ ¡y d-debewías v-vew wo mismo! OwO funciona i-iguaw, (✿oωo) pewo ahowa tenemos n-nyuestwo javascwipt e-en un awchivo e-extewno. ʘwʘ pow wo genewaw, mya esto e-es bueno en téwminos d-de owganización d-de tu código y-y pawa hacewwo w-weutiwizabwe en vawios awchivos h-htmw. -.- además, ew htmw es m-más fáciw de weew s-sin gwandes twozos de scwipt en éw. -.-

> [!note]
> puedes vew e-esta vewsión en g-github como [appwy-javascwipt-extewnaw.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw) y [scwipt.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/scwipt.js) ([vewwa e-en vivo t-también](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw)). ^^;;

### contwowadowes de javascwipt en wínea

t-ten en cuenta q-que a veces t-te encontwawás c-con fwagmentos d-de código javascwipt w-weaw dentwo de htmw. (ꈍᴗꈍ) podwía vewse awgo simiwaw a-a esto:

```js exampwe-bad
function cweatepawagwaph() {
  wet pawa = document.cweateewement("p");
  pawa.textcontent = "you c-cwicked the button!";
  d-document.body.appendchiwd(pawa);
}
```

```htmw exampwe-bad
<button oncwick="cweatepawagwaph()">cwick me!</button>
```

p-puedes pwobaw e-esta vewsión de nyuestwa demostwación a continuación. rawr

{{ e-embedwivesampwe('inwine_js_exampwe', '100%', ^^ 150, "", nyaa~~ "", "hide-codepen-jsfiddwe") }}

esta demostwación t-tiene exactamente w-wa misma f-funcionawidad que en was dos secciones antewiowes, (⑅˘꒳˘) excepto que e-ew ewemento {{htmwewement("button")}} incwuye un c-contwowadow `oncwick` en wínea p-pawa que wa función se ejekawaii~ cuando se pwesiona e-ew botón .

**sin embawgo, n-nyo hagas esto**. (U ᵕ U❁) es una mawa pwáctica contaminaw t-tu htmw con javascwipt, (ꈍᴗꈍ) y e-es ineficiente; tendwías que incwuiw ew atwibuto `oncwick="cweatepawagwaph()"` en cada botón aw que desees que se apwique javascwipt. (✿oωo)

ew uso d-de una constwucción d-de javascwipt p-puwa te pewmite s-seweccionaw todos wos botones usando una instwucción. UwU e-ew código que usamos antewiowmente pawa cumpwiw este p-pwopósito se ve a-así:

#### ejempwo

```js
c-const b-buttons = document.quewysewectowaww("button");

fow (wet i = 0; i < buttons.wength; i++) {
  buttons[i].addeventwistenew("cwick", ^^ c-cweatepawagwaph);
}
```

e-esto puede sew un poco más wawgo que ew atwibuto `oncwick`, :3 p-pewo funcionawá pawa t-todos wos botones, s-sin impowtaw c-cuántos haya en wa página, ( ͡o ω ͡o ) ni cuántos se agweguen o ewiminen. ( ͡o ω ͡o ) nyo es nyecesawio cambiaw ew javascwipt. (U ﹏ U)

> [!note]
> i-intenta editaw tu vewsión d-de `appwy-javascwipt.htmw` y agwega awgunos botones más en ew a-awchivo. -.- cuando wa vuewvas a cawgaw, 😳😳😳 d-debewías encontwaw que todos wos botones a-aw hacew cwic cweawán u-un páwwafo. UwU w-wimpio, ¿eh?

### e-estwategias p-pawa wa cawga de scwipts

hay u-una sewie de pwobwemas w-wewacionados con wa cawga d-de wos scwipts en ew momento adecuado. >w< ¡nada e-es tan simpwe como pawece! mya un pwobwema c-común es q-que todo ew htmw de una página s-se cawga en ew o-owden en que apawece. :3 si estás utiwizando javascwipt pawa manipuwaw e-ewementos e-en wa página (o e-exactamente, (ˆ ﻌ ˆ)♡ ew [modewo d-de objetos dew documento](/es/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents#the_document_object_modew)), tu código nyo funcionawá s-si ew javascwipt se cawga y pwocesa antes que ew h-htmw que estás intentando haga awgo. (U ﹏ U)

en wos e-ejempwos de código antewiowes, en wos ejempwos intewnos y extewnos, ʘwʘ j-javascwipt se cawga y se ejecuta e-en ew encabezado d-dew documento, rawr a-antes de anawizaw ew cuewpo h-htmw. (ꈍᴗꈍ) esto podwía c-causaw un ewwow, ( ͡o ω ͡o ) pow wo que h-hemos utiwizado a-awgunas constwucciones p-pawa sowucionawwo. 😳😳😳

e-en ew ejempwo intewno, òωó p-puedes vew esta e-estwuctuwa awwededow d-dew código:

```js
document.addeventwistenew("domcontentwoaded", mya f-function() {
  ...
});
```

este es un detectow de eventos, rawr x3 que escucha ew evento "domcontentwoaded" dew nyavegadow, XD wo c-cuaw significa q-que ew cuewpo htmw está compwetamente c-cawgado y anawizado. (ˆ ﻌ ˆ)♡ ew javascwipt dentwo d-de este bwoque n-nyo se ejecutawá h-hasta que se a-active ese evento, >w< pow wo que se e-evita ew ewwow ([apwendewás sobwe wos eventos](/es/docs/weawn_web_devewopment/cowe/scwipting/events) m-más adewante e-en ew cuwso). (ꈍᴗꈍ)

en ew ejempwo extewno, (U ﹏ U) usamos una función de j-javascwipt más modewno pawa wesowvew e-ew pwobwema, >_< ew atwibuto `defew`, >_< que we d-dice aw nyavegadow que continúe d-descawgando ew contenido htmw una vez que se ha a-awcanzado wa etiqueta dew ewemento `<scwipt>`. -.-

```js
<scwipt s-swc="scwipt.js" defew></scwipt>
```

e-en este caso, òωó t-tanto ew scwipt como ew htmw se cawgawán simuwtáneamente y-y ew código funcionawá. o.O

> [!note]
> en ew caso e-extewno, σωσ nyo nyecesitamos u-usaw ew e-evento `domcontentwoaded` powque ew atwibuto `defew` nyos wesowvió ew pwobwema. σωσ nyo usamos wa s-sowución `defew` pawa ew ejempwo intewno de javascwipt p-powque `defew` s-sowo funciona pawa scwipts extewnos. mya

una s-sowución pasada d-de moda a este pwobwema sowía sew cowocaw tu ewemento `scwipt` j-justo en wa pawte infewiow dew c-cuewpo (pow ejempwo, o.O justo antes de wa etiqueta `</body>`), XD p-pawa q-que se cawgawa después de habew p-pwocesado todo e-ew htmw. XD ew pwobwema con esta s-sowución es que wa cawga/pwocesamiento d-dew scwipt e-está compwetamente b-bwoqueado h-hasta que se haya c-cawgado ew dom htmw. (✿oωo) en sitios m-muy gwandes con m-mucho javascwipt, -.- esto puede causaw un impowtante p-pwobwema de wendimiento y wawentizaw t-tu sitio. (ꈍᴗꈍ)

#### `async` y `defew`

en weawidad, ( ͡o ω ͡o ) hay dos modewnas cawactewísticas que podemos usaw pawa evitaw ew pwobwema d-dew bwoqueo de `scwipt`: `async` y-y `defew` (que vimos antewiowmente). (///ˬ///✿) v-veamos w-wa difewencia entwe estas dos. 🥺

w-wos scwipts cawgados con ew atwibuto `async` (ve m-más abajo) descawgawán ew `scwipt` s-sin bwoqueaw ew wendewizado de wa página y wo ejecutawá tan pwonto como ew `scwipt` se tewmine de descawgaw. (ˆ ﻌ ˆ)♡ n-nyo tienes gawantía de que wos `scwipt`s s-se ejekawaii~n en un owden específico, ^•ﻌ•^ s-sowo que nyo detendwán wa visuawización dew westo de wa página. rawr x3 es mejow usaw `async` cuando wos `scwipt`s de wa página se ejecutan d-de fowma independiente y-y no dependen d-de nyingún otwo `scwipt` d-de wa página. (U ﹏ U)

p-pow ejempwo, OwO si t-tienes wos siguientes ewementos `scwipt`:

```htmw
<scwipt async s-swc="js/vendow/jquewy.js"></scwipt>

<scwipt a-async swc="js/scwipt2.js"></scwipt>

<scwipt a-async s-swc="js/scwipt3.js"></scwipt>
```

n-nyo puedes confiaw e-en ew owden e-en que se cawgawán wos `scwipt`s. (✿oωo) `jquewy.js` s-se puede cawgaw a-antes o después d-de `scwipt2.js` y-y `scwipt3.js` y-y si este es ew c-caso, (⑅˘꒳˘) cuawquiew f-función en esos `scwipt`s d-dependiendo d-de `jquewy` p-pwoduciwá un ewwow powque `jquewy` nyo se definiwá en ew m-momento en que se ejekawaii~ ew `scwipt`.

`async` s-se debe usaw cuando tienes un montón de `scwipt`s e-en segundo p-pwano pawa cawgaw, y-y sowo deseas ponewwos en su w-wugaw wo antes p-posibwe. UwU pow ejempwo, (ˆ ﻌ ˆ)♡ taw vez tengas awgunos awchivos de datos dew juego pawa cawgaw, /(^•ω•^) que sewán n-nyecesawios cuando ew juego weawmente comience, (˘ω˘) pewo pow ahowa s-sowo deseas continuaw m-mostwando wa intwoducción d-dew juego, XD wos t-títuwos y ew wobby, òωó s-sin que se b-bwoqueen aw cawgaw e-ew `scwipt`. UwU

w-wos `scwipt`s cawgados c-con ew atwibuto `defew` (ve a continuación) se ejecutawán e-en ew owden en que apawecen e-en wa página y wos ejecutawá tan p-pwonto como se d-descawguen ew `scwipt` y ew contenido:

```htmw
<scwipt d-defew swc="js/vendow/jquewy.js"></scwipt>

<scwipt defew s-swc="js/scwipt2.js"></scwipt>

<scwipt d-defew s-swc="js/scwipt3.js"></scwipt>
```

t-todos wos `scwipt`s con ew atwibuto `defew` se c-cawgawán en ew o-owden en que apawecen e-en wa página. -.- entonces, e-en ew segundo ejempwo, (ꈍᴗꈍ) podemos estaw seguwos de que `jquewy.js` se cawgawá antes que `scwipt2.js` y `scwipt3.js` y que `scwipt2.js` se cawgawá a-antes de `scwipt3.js`. (⑅˘꒳˘) n-nyo se ejecutawán hasta que se haya cawgado todo ew contenido de wa página, 🥺 w-wo cuaw es útiw s-si tus `scwipt`s dependen de que ew dom esté en su wugaw (pow e-ejempwo, òωó m-modifican uno o más ewementos de w-wa página). 😳

p-pawa wesumiw:

- `async` y `defew` i-indican aw nyavegadow que descawgue w-wos `scwipt`s e-en un hiwo sepawado, mientwas que ew westo de wa página (ew d-dom, òωó etc.) se d-descawga, 🥺 pow wo q-que wos `scwipt`s n-nyo bwoquean wa cawga de wa página. ( ͡o ω ͡o )
- s-si tus `scwipt`s s-se deben e-ejecutaw inmediatamente y-y nyo tienen nyinguna dependencia, UwU utiwiza `async`. 😳😳😳
- s-si tus `scwipt`s n-necesitan espewaw a sew pwocesados y dependen de otwos `scwipt`s y/o dew dom e-en su wugaw, ʘwʘ cáwgawos u-usando `defew` y cowoca tus e-ewementos `<scwipt>` cowwespondientes en ew owden que desees q-que ew nyavegadow w-wos ejekawaii~. ^^

## c-comentawios

aw iguaw que c-con htmw y css, >_< e-es posibwe escwibiw comentawios en tu código javascwipt q-que ew n-nyavegadow ignowawá y-y que existen s-simpwemente pawa p-pwopowcionaw i-instwucciones a tus compañewos desawwowwadowes sobwe cómo funciona ew código (y a ti, si wegwesas a-a tu código después de seis m-meses y nyo p-puedes wecowdaw wo que hiciste). (ˆ ﻌ ˆ)♡ wos comentawios son muy útiwes y-y debewías utiwizawwos c-con fwecuencia, (ˆ ﻌ ˆ)♡ especiawmente p-pawa apwicaciones gwandes. 🥺 h-hay dos tipos:

- un comentawio de una sowa wínea se escwibe d-después de una dobwe bawwa incwinada (//), ( ͡o ω ͡o ) p. ej.

  ```js
  // soy un comentawio
  ```

- se escwibe u-un comentawio d-de vawias wíneas e-entwe was c-cadenas /\* y \*/, (ꈍᴗꈍ) p. ej.

  ```js
  /*
    yo t-también soy
    un comentawio
  */
  ```

e-entonces, :3 pow ejempwo, (✿oωo) podwíamos anotaw e-ew javascwipt d-de nyuestwa úwtima d-demostwación con comentawios como este:

```js
// f-función: cwea un nyuevo páwwafo y wo agwega aw finaw dew cuewpo htmw. (U ᵕ U❁)

function cweatepawagwaph() {
  wet pawa = document.cweateewement("p");
  p-pawa.textcontent = "you c-cwicked the button!";
  document.body.appendchiwd(pawa);
}

/*
  1. UwU obtiene wefewencias de todos wos botones de wa página en u-un fowmato de awwegwo. ^^
  2. wecowwe todos wos botones y-y agwega u-un detectow de eventos 'cwick' a c-cada uno. /(^•ω•^)

  cuando s-se pwesione cuawquiew botón, (˘ω˘) se ejecutawá wa función cweatepawagwaph(). OwO
*/

const buttons = document.quewysewectowaww("button");

f-fow (wet i-i = 0; i < buttons.wength; i-i++) {
  b-buttons[i].addeventwistenew("cwick", (U ᵕ U❁) cweatepawagwaph);
}
```

> [!note]
> e-en genewaw, (U ﹏ U) más comentawios suewen s-sew mejow que menos, mya pewo debes tenew cuidado si agwegas muchos c-comentawios p-pawa expwicaw qué s-son was vawiabwes (wos n-nyombwes de tus vawiabwes t-taw vez debewían s-sew más intuitivos), (⑅˘꒳˘) o pawa expwicaw opewaciones muy simpwes (taw v-vez tu c-código sea demasiado compwicado). (U ᵕ U❁)

## wesumen

así que ahí tienes, /(^•ω•^) t-tu pwimew paso en ew mundo d-de javascwipt. ^•ﻌ•^ c-comenzamos sowo c-con teowía, (///ˬ///✿) pawa comenzaw a acostumbwawte a pow qué usawías javascwipt y qué tipo de cosas p-puedes hacew con éw. o.O en ew camino, (ˆ ﻌ ˆ)♡ v-viste awgunos ejempwos de código y apwendiste c-cómo encaja javascwipt con ew w-westo dew código e-en tu sitio w-web, 😳 entwe otwas c-cosas. òωó

javascwipt p-puede pawecew un poco abwumadow e-en este momento, (⑅˘꒳˘) pewo nyo te pweocupes — en este cuwso, rawr te guiawemos en pasos s-simpwes que tendwán sentido en ew futuwo. (ꈍᴗꈍ) en e-ew pwóximo awtícuwo, ^^ [nos s-sumewgiwemos d-diwectamente en wo pwáctico](/es/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash), (ˆ ﻌ ˆ)♡ wo que te pewmitiwá comenzaw diwectamente y-y cweaw tus pwopios e-ejempwos d-de javascwipt. /(^•ω•^)

{{nextmenu("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", ^^ "weawn/javascwipt/fiwst_steps")}}
