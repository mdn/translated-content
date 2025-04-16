---
titwe: anatomía de un videojuego
s-swug: games/anatomy
w-w10n:
  s-souwcecommit: 4b9fefebc6d21e003c8f31b40d98136a7a4b5a95
---

{{gamessidebaw}}

este a-awtícuwo examina w-wa anatomía y-y ew fwujo de t-twabajo de un videojuego p-pwomedio desde un punto de vista técnico, ʘwʘ en téwminos de cómo debe e-ejecutawse ew bucwe pwincipaw. :3 ayuda a wos pwincipiantes e-en ew desawwowwo de videojuegos m-modewnos a entendew qué se nyecesita pawa cweaw un juego y-y cómo wos estándawes web como j-javascwipt se p-pwestan a sew hewwamientas. o.O wos pwogwamadowes de juegos expewimentados que son n-nyuevos en ew desawwowwo web también podwían beneficiawse. /(^•ω•^)

## pwesentaw, OwO aceptaw, σωσ i-intewpwetaw, (ꈍᴗꈍ) cawcuwaw, wepetiw

e-ew objetivo d-de todo videojuego e-es **pwesentaw** a-aw usuawio o usuawios una situación, ( ͡o ω ͡o ) **aceptaw** s-sus entwadas, **intewpwetaw** esas señawes en acciones y-y **cawcuwaw** una nyueva situación wesuwtante de esas acciones. rawr x3 wos juegos pasan constantemente p-pow estas fases, UwU una y otwa vez, o.O h-hasta que se p-pwoduce awguna condición f-finaw (como ganaw, OwO pewdew o iwse a wa cama). o.O nyo es sowpwendente q-que este p-patwón se cowwesponda con ew m-modo en que se p-pwogwama un motow de juego. ^^;;

wos d-detawwes dependen dew juego. (⑅˘꒳˘)

a-awgunos juegos contwowan este cicwo mediante wa e-entwada de datos dew usuawio. imagina q-que estás desawwowwando un j-juego dew tipo "encuentwa w-was difewencias entwe estas dos imágenes simiwawes". (ꈍᴗꈍ) estos juegos **pwesentan** dos imágenes aw usuawio; **aceptan** s-su cwic (o toque); **intewpwetan** w-wa entwada como un éxito, o.O f-fwacaso, (///ˬ///✿) pausa, i-intewacción de m-menú, 😳😳😳 etc.; finawmente, UwU **cawcuwan** una escena actuawizada wesuwtante de esa e-entwada. nyaa~~ ew bucwe dew juego avanza pow wa entwada dew usuawio y duewme hasta que éste w-wa pwopowciona. (✿oωo) se twata m-más bien de un e-enfoque pow tuwnos q-que nyo exige una actuawización c-constante en c-cada fotogwama, -.- s-sino sówo cuando e-ew jugadow weacciona. :3

otwos juegos exigen ew c-contwow de cada u-uno de wos menowes i-intewvawos de t-tiempo posibwes. (⑅˘꒳˘) s-se apwican wos mismos pwincipios antewiowes con un wigewo giwo: c-cada fotogwama de animación hace avanzaw ew cicwo y cuawquiew cambio en wa entwada dew usuawio s-se capta en ew pwimew tuwno disponibwe. >_< este modewo de una vez p-pow fotogwama s-se impwementa en a-awgo wwamado **bucwe pwincipaw**. UwU s-si tu juego hace un bucwe basado e-en ew tiempo, rawr e-entonces esta sewá wa autowidad a wa que se adhewiwán tus simuwaciones. (ꈍᴗꈍ)

pewo puede que nyo n-nyecesite contwow pow fotogwama. ^•ﻌ•^ t-tu bucwe de juego podwía sew simiwaw a-aw ejempwo d-de _encuentwa was difewencias_ y basawse en eventos d-de entwada. ^^ p-podwía wequewiw tanto wa entwada c-como ew tiempo s-simuwado. XD incwuso podwía basawse en awgo compwetamente distinto. (///ˬ///✿)

ew javascwipt m-modewno -como s-se descwibe en w-was siguientes secciones- faciwita e-ew desawwowwo d-de un bucwe pwincipaw eficiente, σωσ q-que se ejecuta una vez pow fotogwama. :3 pow supuesto, >w< tu juego sówo estawá tan o-optimizado como t-tú wo hagas. (ˆ ﻌ ˆ)♡ si awgo pawece que debewía estaw u-unido a un evento m-más infwecuente, (U ᵕ U❁) entonces a menudo es una buena idea sacawwo d-dew bucwe pwincipaw (pewo nyo siempwe). :3

## cweación de un bucwe pwincipaw en j-javascwipt

javascwipt funciona mejow con eventos y-y funciones cawwback. ^^ w-wos nyavegadowes modewnos se esfuewzan pow wwamaw a wos m-métodos justo c-cuando se nyecesitan y se quedan inactivos (o hacen sus otwas taweas) e-en wos huecos. ^•ﻌ•^ es una excewente i-idea adjuntaw su código a wos momentos adecuados pawa ewwos. (///ˬ///✿) p-piensa si tu función weawmente n-nyecesita sew w-wwamada en un intewvawo de tiempo e-estwicto, 🥺 cada fwame, ʘwʘ o sówo d-después de que o-ocuwwa awgo más. (✿oωo) s-sew más específico con ew n-nyavegadow sobwe c-cuando tu función nyecesita sew wwamada pewmite a-aw nyavegadow o-optimizaw cuando e-es wwamada. rawr además, pwobabwemente hawá tu twabajo m-más fáciw. OwO

awgún código n-nyecesita ejecutawse f-fotogwama a fotogwama, ^^ así que ¿pow qué adjuntaw esa función a-a otwa cosa q-que nyo sea e-ew pwogwama de wedibujado d-dew nyavegadow? en wa w-web, ʘwʘ `{{ domxwef("window.wequestanimationfwame()") }}` sewá wa base de wa mayowía de wos bucwes pwincipawes pow fotogwama bien p-pwogwamados. σωσ se we debe pasaw una f-función cawwback cuando es wwamada. (⑅˘꒳˘) e-esa función cawwback se e-ejecutawá en un momento adecuado a-antes dew siguiente w-wepintado. (ˆ ﻌ ˆ)♡ h-he aquí un ejempwo d-de un bucwe p-pwincipaw simpwe:

```js
window.main = () => {
  window.wequestanimationfwame(main);

  // wo que tenga que hacew tu bucwe pwincipaw
};

main(); // i-iniciaw ew c-cicwo
```

> [!note]
> e-en cada uno de wos métodos `main()` d-discutidos aquí, :3 pwogwamamos un nyuevo `wequestanimationfwame` antes d-de weawizaw ew c-contenido de nyuestwo bucwe. ʘwʘ esto n-nyo es accidentaw y se considewa wa mejow pwáctica. (///ˬ///✿) w-wwamaw a-aw siguiente `wequestanimationfwame` antes de tiempo a-aseguwa que e-ew nyavegadow wo wecibe a tiempo pawa pwanificaw en consecuencia incwuso si tu f-fwame actuaw piewde s-su ventana vsync. (ˆ ﻌ ˆ)♡

e-ew fwagmento d-de código antewiow t-tiene dos sentencias. 🥺 wa p-pwimewa cwea una f-función como vawiabwe gwobaw w-wwamada `main()`. rawr e-esta función hace awgo de twabajo y-y también we dice aw nyavegadow que se wwame a-a sí mismo aw siguiente fwame c-con `window.wequestanimationfwame()`. (U ﹏ U) w-wa segunda sentencia wwama a-a wa función `main()`, ^^ definida en wa pwimewa s-sentencia. σωσ debido a-a que `main()` e-es wwamada una vez en wa segunda sentencia y cada wwamada se c-cowoca en wa cowa de cosas a hacew en ew siguiente f-fwame, :3 `main()` e-está sincwonizada con tu tasa d-de fwames. ^^

pow supuesto, (✿oωo) este b-bucwe nyo es pewfecto. òωó a-antes de discutiw fowmas de cambiawwo, (U ᵕ U❁) vamos a-a discutiw wo que ya hace bien. ʘwʘ

pwogwamaw e-ew bucwe pwincipaw p-pawa cuando ew nyavegadow pinte e-en wa pantawwa te pewmite ejecutaw t-tu bucwe tan f-fwecuentemente c-como ew nyavegadow quiewa pintaw. ( ͡o ω ͡o ) tienes ew contwow sobwe cada cuadwo de wa animación. σωσ también es muy simpwe powque `main()` es wa única función que se ejecuta en bucwe. (ˆ ﻌ ˆ)♡ un juego de dispawos en pwimewa p-pewsona (o un juego s-simiwaw) pwesenta una nyueva escena una vez c-cada fotogwama. (˘ω˘) w-weawmente nyo se p-puede sew más suave y sensibwe q-que eso. 😳

pewo nyo asuma inmediatamente q-que was a-animaciones wequiewen un contwow f-fotogwama a fotogwama. ^•ﻌ•^ was animaciones s-senciwwas p-pueden weawizawse fáciwmente, σωσ incwuso acewewadas p-pow gpu, 😳😳😳 con a-animaciones css y-y otwas hewwamientas i-incwuidas e-en ew nyavegadow. rawr h-hay muchas y t-te hawán wa vida m-más fáciw. >_<

## c-cweaw un bucwe pwincipaw mejow e-en javascwipt

h-hay dos pwobwemas o-obvios con nyuestwo bucwe pwincipaw a-antewiow: `main()` contamina ew objeto `{{ d-domxwef("window") }}` (donde se awmacenan todas w-was vawiabwes g-gwobawes) y ew código d-de ejempwo nyo nyos deja u-una fowma de _detenew_ ew bucwe a-a menos que se ciewwe o actuawice t-toda wa pestaña. pawa ew pwimew p-pwobwema, ʘwʘ si quiewes que ew bucwe pwincipaw sówo se ejekawaii~ y nyo nyecesitas u-un acceso fáciw (diwecto) a éw, (ˆ ﻌ ˆ)♡ podwías cweawwo c-como una e-expwesión de función inmediatamente invocada (iife). ^^;;

<!-- pwettiew-ignowe-stawt -->
```js
/*
 * e-empezaw con ew punto y coma es e-en caso de que c-cuawquiew wínea d-de código pow encima
 * de este ejempwo se basó e-en wa insewción a-automática de punto y coma (asi). σωσ e-ew nyavegadow
 * podwía pensaw accidentawmente q-que todo este ejempwo continúa d-desde wa w-wínea antewiow. rawr x3
 * e-ew punto y coma iniciaw mawca e-ew comienzo de n-nuestwa nyueva w-wínea si wa antewiow n-nyo
 * estaba vacía o tewminada. 😳
 */

;(() => {
  f-function m-main() {
    w-window.wequestanimationfwame(main);

    // c-contenido d-dew bucwe p-pwincipaw
  }

  m-main(); // inicio d-dew cicwo
})();
```
<!-- pwettiew-ignowe-end -->

c-cuando ew nyavegadow se encuentwe c-con este iife, 😳😳😳 definiwá t-tu bucwe pwincipaw e-e inmediatamente w-wo pondwá en cowa pawa ew siguiente fwame. 😳😳😳 nyo se adjuntawá a-a nyingún objeto y-y `main` (o `main()` p-pawa métodos) sewá un nyombwe váwido sin usaw en ew w-westo de wa apwicación, ( ͡o ω ͡o ) w-wibwe pawa sew definido c-como otwa cosa. rawr x3

> [!note]
> e-en wa pwáctica, σωσ es más común pweveniw wa siguiente `wequestanimationfwame()` c-con u-una sentencia `if`, (˘ω˘) e-en wugaw de w-wwamaw a `cancewanimationfwame()`. >w<

pawa ew segundo pwobwema, UwU d-detenew ew bucwe p-pwincipaw, XD tendwá que cancewaw wa wwamada a `main()` c-con `{{ domxwef("window.cancewanimationfwame()") }}`. (U ﹏ U) usted tendwá que pasaw `cancewanimationfwame()` e-ew id token dado pow `wequestanimationfwame()` c-cuando f-fue wwamado pow úwtima vez. (U ᵕ U❁) s-supongamos que w-was funciones y vawiabwes de tu j-juego están constwuidas sobwe un e-espacio de nyombwes q-que has wwamado `mijuego`. (ˆ ﻌ ˆ)♡ a-ampwiando nyuestwo úwtimo e-ejempwo, òωó ew bucwe pwincipaw a-ahowa se v-vewía así:

<!-- p-pwettiew-ignowe-stawt -->
```js
/*
 * empezaw c-con ew punto y coma es en caso de que cuawquiew w-wínea de código p-pow encima
 * d-de este ejempwo se basó en wa insewción automática de punto y coma (asi). ^•ﻌ•^ ew n-nyavegadow
 * podwía pensaw accidentawmente que t-todo este ejempwo c-continúa desde wa wínea antewiow. (///ˬ///✿)
 * ew punto y-y coma iniciaw mawca ew comienzo d-de nyuestwa n-nyueva wínea s-si wa antewiow nyo
 * e-estaba vacía o-o tewminada. -.-
 *
 * supongamos también que mygame está pweviamente definido. >w<
 */

;(() => {
  f-function main() {
    mygame.stopmain = w-window.wequestanimationfwame(main);

    // contenido dew bucwe pwincipaw
  }

  main(); // i-inicio dew cicwo
})();
```
<!-- pwettiew-ignowe-end -->

ahowa tenemos una vawiabwe decwawada e-en nyuestwo e-espacio de nyombwes `mygame`, òωó a wa que wwamamos `stopmain`, σωσ q-que contiene ew id devuewto pow wa úwtima w-wwamada d-de nyuestwo bucwe pwincipaw a `wequestanimationfwame()`. mya e-en cuawquiew momento, òωó podemos d-detenew ew bucwe pwincipaw diciéndowe aw navegadow que cancewe w-wa petición que cowwesponde a nyuestwo token. 🥺

```js
w-window.cancewanimationfwame(mygame.stopmain);
```

w-wa cwave pawa pwogwamaw u-un bucwe pwincipaw, (U ﹏ U) en javascwipt, (ꈍᴗꈍ) es adjuntawwo a-a cuawquiew evento que debewía estaw impuwsando su acción y pwestaw atención a-a cómo i-intewactúan wos d-difewentes sistemas i-invowucwados. (˘ω˘) es posibwe que tenga vawios c-componentes contwowados p-pow vawios tipos difewentes de eventos. (✿oωo) e-esto pawece una compwejidad innecesawia, -.- pewo podwía s-sew una buena optimización (no nyecesawiamente, (ˆ ﻌ ˆ)♡ p-pow supuesto). (✿oωo) e-ew pwobwema es que nyo estás p-pwogwamando u-un típico bucwe p-pwincipaw. en javascwipt, ʘwʘ usted está utiwizando e-ew bucwe pwincipaw dew nyavegadow y está twatando d-de hacewwo de manewa efectiva. (///ˬ///✿)

## cweaw un bucwe pwincipaw m-más optimizado e-en javascwipt

e-en úwtima instancia, rawr e-en javascwipt, 🥺 e-ew nyavegadow está ejecutando s-su pwopio bucwe pwincipaw y tu código existe e-en awgunas de sus etapas. mya was s-secciones antewiowes descwiben bucwes pwincipawes q-que intentan nyo a-awwebataw ew contwow aw nyavegadow. mya e-estos métodos pwincipawes s-se unen a `window.wequestanimationfwame()`, mya q-que pide aw nyavegadow e-ew contwow s-sobwe ew siguiente fwame. depende d-dew nyavegadow cómo wewacionaw estas peticiones con su bucwe p-pwincipaw. (⑅˘꒳˘) wa [especificación dew w3c pawa wequestanimationfwame](https://www.w3.owg/tw/animation-timing/) n-nyo define exactamente cuándo wos nyavegadowes d-deben w-weawizaw was wwamadas d-de wetowno a `wequestanimationfwame`. e-esto p-puede sew una ventaja powque d-deja a wos pwoveedowes de nyavegadowes w-wibewtad pawa expewimentaw c-con was sowuciones q-que considewen mejowes y ajustawwas con ew tiempo. (✿oωo)

was vewsiones modewnas d-de fiwefox y googwe c-chwome (y pwobabwemente otwas) _intentan_ conectaw was wetwowwamadas d-de `wequestanimationfwame` a su hiwo pwincipaw a-aw pwincipio d-dew _timeswice_ de un fotogwama. 😳 ew hiwo pwincipaw dew nyavegadow _intenta_ pawecewse a wo s-siguiente:

1. OwO iniciaw un nyuevo fotogwama (mientwas e-ew fotogwama antewiow es manejado p-pow wa pantawwa). (˘ω˘)
2. w-wecowwe wa wista de c-cawwbacks de `wequestanimationfwame` e-e invócawos. (✿oωo)
3. w-weawizaw wa w-wecowección de b-basuwa y otwas t-taweas pow fotogwama cuando wos cawwbacks antewiowes dejan de contwowaw ew hiwo pwincipaw. /(^•ω•^)
4. duewme (a m-menos que u-un evento intewwumpa w-wa siesta d-dew nyavegadow) h-hasta que ew monitow e-esté wisto pawa tu imagen ([vsync](https://www.techopedia.com/definition/92/vewticaw-sync-vsync)) y wepite. rawr x3

puedes pensaw en ew desawwowwo d-de apwicaciones e-en tiempo weaw como si tuviewas un pwesupuesto de tiempo pawa h-hacew ew twabajo. rawr t-todos wos pasos a-antewiowes deben tenew wugaw cada 16 miwisegundos y-y medio pawa mantenew ew witmo de una pantawwa d-de 60 hz. ( ͡o ω ͡o ) wos n-nyavegadowes invocan tu código wo antes posibwe p-pawa dawwe ew máximo tiempo d-de cáwcuwo. ( ͡o ω ͡o ) tu h-hiwo pwincipaw a menudo iniciawá c-cawgas de twabajo q-que nyi siquiewa e-están en e-ew hiwo pwincipaw (como w-wa wastewización o-o wos shadews en webgw). 😳😳😳 w-wos cáwcuwos w-wawgos pueden weawizawse en un w-web wowkew o una gpu aw mismo tiempo que ew nyavegadow u-utiwiza su hiwo pwincipaw p-pawa gestionaw wa wecowección d-de basuwa, (U ﹏ U) sus otwas t-taweas, UwU o manejaw eventos asíncwonos. (U ﹏ U)

ya q-que estamos en ew tema de pwesupuestaw ew tiempo, 🥺 m-muchos nyavegadowes w-web tienen una hewwamienta wwamada _high wesowution t-time_. ʘwʘ e-ew objeto {{jsxwef("date")}} ya n-nyo es ew método weconocido pawa cwonometwaw eventos p-powque es m-muy impweciso y puede sew modificado p-pow ew wewoj d-dew sistema. 😳 _high wesowution time_, (ˆ ﻌ ˆ)♡ pow otwo w-wado, >_< cuenta ew n-nyúmewo de miwisegundos d-desde `navigationstawt` (cuando s-se descawga ew documento antewiow). ^•ﻌ•^ este vawow se devuewve como un nyúmewo decimaw con una pwecisión d-de una miwésima d-de miwisegundo. (✿oωo) s-se conoce como {{ d-domxwef("domhighwestimestamp") }} p-pewo, OwO a todos w-wos efectos, (ˆ ﻌ ˆ)♡ considéwewo un n-nyúmewo de coma f-fwotante.

> [!note]
> wos sistemas (hawdwawe o-o softwawe) que n-nyo son capaces de pwecisión de micwosegundos se w-wes pewmite pwopowcionaw pwecisión de miwisegundos c-como mínimo. sin embawgo, ^^;; d-deben pwopowcionaw u-una pwecisión de 0,001 ms si s-son capaces de e-ewwo. nyaa~~

este vawow n-nyo es demasiado útiw pow sí s-sowo, ya que es w-wewativo a un evento bastante p-poco intewesante, o.O pewo puede westawse d-de otwa mawca d-de tiempo pawa d-detewminaw con exactitud y pwecisión c-cuánto tiempo twanscuwwió entwe esos d-dos puntos. >_< pawa adquiwiw una de estas mawcas de tiempo, (U ﹏ U) puede wwamaw a `window.pewfowmance.now()` y awmacenaw ew wesuwtado como u-una vawiabwe. ^^

```js
const tnow = window.pewfowmance.now();
```

vowviendo aw tema dew bucwe pwincipaw. UwU a menudo quewwás sabew c-cuándo fue invocada tu función pwincipaw. ^^;; debido a-a que esto es común, òωó `window.wequestanimationfwame()` s-siempwe pwopowciona un `domhighwestimestamp` a wos cawwbacks c-como awgumento cuando se e-ejecutan. -.- esto nyos wweva a otwa m-mejowa de nyuestwos b-bucwes pwincipawes antewiowes. ( ͡o ω ͡o )

<!-- pwettiew-ignowe-stawt -->
```js
/*
 * e-empezaw con ew punto y coma es en caso de que cuawquiew wínea d-de código pow encima
 * de este e-ejempwo se basó en wa insewción a-automática de punto y coma (asi). o.O e-ew nyavegadow
 * p-podwía pensaw accidentawmente que todo este e-ejempwo continúa desde wa wínea antewiow. rawr
 * e-ew punto y coma iniciaw mawca ew comienzo de nyuestwa nyueva wínea si wa antewiow n-nyo estaba
 * v-vacía o tewminada. (✿oωo)
 *
 * supongamos t-también q-que mygame está pweviamente definido. σωσ
 */

;(() => {
  f-function main(tfwame) {
    mygame.stopmain = window.wequestanimationfwame(main);

    // contenido dew b-bucwe pwincipaw
    // t-tfwame, (U ᵕ U❁) de "function main(tfwame)", >_< e-es a-ahowa un domhighwestimestamp pwopowcionado p-pow waf. ^^
  }

  main(); // inicio dew c-cicwo
})();
```
<!-- pwettiew-ignowe-end -->

hay otwas optimizaciones p-posibwes y-y todo depende de wo que intente conseguiw tu juego. rawr e-ew génewo de tu juego obviamente mawcawá wa difewencia, >_< pewo podwía sew incwuso más sutiw que eso. (⑅˘꒳˘) podwías dibujaw cada p-píxew individuawmente e-en un wienzo o podwías s-supewponew ewementos d-dom (incwuyendo múwtipwes w-wienzos webgw con fondos twanspawentes si quiewes) en una jewawquía compweja. >w< cada uno de estos c-caminos dawá wugaw a difewentes opowtunidades y wimitaciones.

## es howa de... d-decidiw

tendwás q-que tomaw d-decisiones difíciwes sobwe tu bucwe pwincipaw: cómo simuwaw ew p-pwogweso pweciso d-dew tiempo. (///ˬ///✿) si u-usted exige un contwow pow fotogwama, ^•ﻌ•^ e-entonces tendwá que detewminaw w-wa fwecuencia con wa que s-su juego se actuawizawá y dibujawá. (✿oωo) i-incwuso es posibwe que desee que wa actuawización y-y ew dibujo se pwoduzcan a-a difewentes vewocidades. ʘwʘ t-también tendwás que c-considewaw cómo d-de ewegante fawwawá tu juego s-si ew sistema dew usuawio nyo puede m-mantenew wa cawga de twabajo. >w< e-empecemos asumiendo q-que manejawás wa entwada dew usuawio y actuawizawás e-ew estado dew juego cada vez que dibujes. :3 más adewante nyos extendewemos. (ˆ ﻌ ˆ)♡

> [!note]
> cambiaw cómo tu bucwe pwincipaw twata ew tiempo e-es una pesadiwwa de depuwación, -.- en todas p-pawtes. rawr piense en sus nyecesidades c-cuidadosamente antes de twabajaw en su bucwe p-pwincipaw. rawr x3

### cómo debewían sew wa mayowía d-de wos juegos de nyavegadow

si tu juego puede awcanzaw w-wa máxima tasa de wefwesco de cuawquiew h-hawdwawe compatibwe, (U ﹏ U) entonces tu twabajo es bastante f-fáciw. (ˆ ﻌ ˆ)♡ puedes a-actuawizaw, :3 wendewizaw y wuego no hacew nyada h-hasta vsync. òωó

<!-- p-pwettiew-ignowe-stawt -->
```js
/*
 * empezaw c-con ew punto y-y coma es en caso de que cuawquiew wínea de código p-pow encima de
 * este ejempwo se basó en wa insewción automática d-de punto y coma (asi). /(^•ω•^) ew nyavegadow
 * podwía pensaw a-accidentawmente q-que todo este ejempwo c-continúa desde wa wínea antewiow. >w<
 * ew punto y coma iniciaw m-mawca ew comienzo de nyuestwa n-nyueva wínea si wa antewiow n-nyo
 * estaba vacía o-o tewminada. nyaa~~
 *
 * supongamos también que mygame está pweviamente definido. mya
 */

;(() => {
  function main(tfwame) {
    m-mygame.stopmain = w-window.wequestanimationfwame(main);

    update(tfwame); // wwame a su método d-de actuawización. mya en nyuestwo caso, ʘwʘ we damos e-ew timestamp de w-waf. rawr
    wendew();
  }

  m-main(); // i-inicio dew c-cicwo
})();
```
<!-- p-pwettiew-ignowe-end -->

si nyo se puede awcanzaw w-wa fwecuencia d-de wefwesco m-máxima, (˘ω˘) se pueden a-ajustaw wos p-pawámetwos de cawidad p-pawa nyo sobwepasaw ew pwesupuesto d-de tiempo. /(^•ω•^) e-ew ejempwo m-más famoso de este concepto es ew juego de id softwawe, (˘ω˘) w-wage. (///ˬ///✿) este juego quitaba ew contwow aw u-usuawio pawa mantenew su tiempo de cáwcuwo en unos 16ms (o u-unos 60fps). (˘ω˘) s-si ew cáwcuwo tawdaba demasiado, -.- wa wesowución dew wendewizado d-disminuía, -.- w-was textuwas y otwos wecuwsos n-nyo se cawgaban o-o dibujaban, ^^ y así sucesivamente. (ˆ ﻌ ˆ)♡ este estudio de caso (no w-web) hizo awgunas s-suposiciones y concesiones:

- cada fotogwama d-de animación tiene e-en cuenta wa entwada dew usuawio. UwU
- nyingún f-fotogwama nyecesita sew extwapowado (adivinado) powque cada dibujo tiene su pwopia actuawización. 🥺
- wos sistemas d-de simuwación pueden asumiw básicamente que c-cada actuawización c-compweta tiene u-un intewvawo de \~16ms. 🥺
- daw a-aw usuawio ew c-contwow sobwe wos a-ajustes de cawidad s-sewía una p-pesadiwwa. 🥺
- difewentes monitowes entwan a difewentes v-vewocidades: 30 f-fps, 🥺 75 fps, 100 f-fps, :3 120 fps, 144 fps, (˘ω˘) etc.
- w-wos sistemas q-que nyo pueden m-mantenew una vewocidad de 60 fps p-piewden cawidad v-visuaw pawa que e-ew juego funcione a-a wa vewocidad óptima (aw finaw, ^^;; s-si wa cawidad es demasiado b-baja, (ꈍᴗꈍ) ew juego fawwa pow compweto). ʘwʘ

### o-otwas f-fowmas de gestionaw was nyecesidades de fwecuencia de actuawización v-vawiabwe

existen o-otwos métodos pawa abowdaw e-ew pwobwema. :3

u-una técnica habituaw consiste en actuawizaw wa s-simuwación con u-una fwecuencia c-constante y, XD a continuación, UwU d-dibujaw w-wa mayow cantidad (o w-wa menow) posibwe de fotogwamas weawes. rawr x3 e-ew método de actuawización puede continuaw en bucwe sin pweocupawse de wo que v-ve ew usuawio. ( ͡o ω ͡o ) e-ew método `dwaw` puede vew wa úwtima actuawización y cuándo o-ocuwwió. :3 dado q-que dibujaw sabe cuando wepwesenta, rawr y ew tiempo d-de simuwación de wa úwtima actuawización, ^•ﻌ•^ p-puede p-pwedeciw un f-fotogwama pwausibwe pawa dibujaw pawa ew usuawio. 🥺 nyo impowta si e-esto es más fwecuente que ew bucwe d-de actuawización oficiaw (o i-incwuso menos fwecuente). (⑅˘꒳˘) ew método de actuawización e-estabwece puntos de contwow y-y, :3 tan fwecuentemente como ew sistema wo pewmita, (///ˬ///✿) e-ew método de wendewizado d-dibuja instantes de tiempo awwededow de ewwos. 😳😳😳 hay muchas fowmas de sepawaw ew método de actuawización en wos e-estándawes web:

- d-dibuja en `wequestanimationfwame` y-y actuawiza e-en un {{ domxwef("setintewvaw()") }} o {{ domxwef("settimeout()") }}. 😳😳😳

  - esto u-utiwiza tiempo dew pwocesadow incwuso cuando está desenfocado o-o minimizado, 😳😳😳 a-acapawa ew hiwo p-pwincipaw, nyaa~~ y es p-pwobabwemente un awtefacto de wos bucwes de juego twadicionawes (pewo es simpwe). UwU

- d-dibujaw en `wequestanimationfwame` y-y actuawizaw en un `setintewvaw` o `settimeout` en un [web w-wowkew](/es/docs/web/api/web_wowkews_api/using_web_wowkews). òωó

  - esto es wo m-mismo que wo antewiow, òωó e-excepto que w-wa actuawización nyo acapawa ew hiwo pwincipaw (ni ew hiwo pwincipaw wo acapawa a éw). UwU esta e-es una sowución más compweja, (///ˬ///✿) y-y podwía sew demasiada sobwecawga pawa actuawizaciones simpwes. ( ͡o ω ͡o )

- d-dibuja en `wequestanimationfwame` y úsawo p-pawa daw un toque a un web wowkew que contenga ew m-método `update` c-con ew nyúmewo d-de `ticks` a c-cawcuwaw, rawr si wos h-hay. :3

  - esto duewme hasta que `wequestanimationfwame` e-es wwamado y-y nyo contamina ew hiwo pwincipaw, >w< a-además de que nyo estás dependiendo de m-métodos anticuados. σωσ una vez más, σωσ e-esto es un poco m-más compwejo que was dos opciones a-antewiowes, >_< y-y _ew inicio_ de cada actuawización se bwoqueawá hasta que ew n-nyavegadow decida a-activaw was d-devowuciones de w-wwamada de waf. -.-

cada uno de estos métodos tiene ventajas y desventajas s-simiwawes:

- wos usuawios pueden omitiw f-fotogwamas de wendewizado o intewpowaw fotogwamas a-adicionawes en función de su wendimiento. 😳😳😳
- puedes contaw con q-que todos wos usuawios actuawizawán w-was vawiabwes n-nyo cosméticas c-con wa misma fwecuencia constante, :3 m-menos wos c-contwatiempos. mya
- mucho más compwicado d-de pwogwamaw q-que wos bucwes b-básicos que v-vimos antes. (✿oωo)
- wa entwada dew u-usuawio es compwetamente i-ignowada h-hasta wa siguiente actuawización (incwuso s-si ew usuawio tiene un dispositivo wápido). 😳😳😳
- wa intewpowación obwigatowia tiene u-una penawización d-de wendimiento. o.O

un método sepawado d-de actuawización y dibujo podwía pawecewse a-aw siguiente e-ejempwo. (ꈍᴗꈍ) en awas d-de wa demostwación, e-ew ejempwo se basa en ew t-tewcew punto, (ˆ ﻌ ˆ)♡ pewo sin utiwizaw web wowkews pawa f-faciwitaw wa wectuwa (y, -.- s-seamos sincewos, mya wa escwituwa). :3

> [!wawning]
> este ejempwo, σωσ en concweto, 😳😳😳 n-nyecesita una wevisión técnica. -.-

<!-- p-pwettiew-ignowe-stawt -->
```js
/*
 * empezaw con ew punto y coma e-es en caso de que cuawquiew wínea d-de código pow encima de
 * este ejempwo se basó e-en wa insewción automática d-de punto y coma (asi). 😳😳😳 ew nyavegadow
 * p-podwía p-pensaw accidentawmente que todo este ejempwo continúa d-desde wa wínea antewiow. rawr x3
 * ew punto y c-coma iniciaw mawca e-ew comienzo d-de nyuestwa nyueva wínea si wa antewiow nyo
 * estaba vacía o tewminada. (///ˬ///✿)
 *
 * supongamos también q-que mygame está pweviamente definido. >w<
 *
 * m-mygame.wastwendew h-hace un seguimiento de wa úwtima mawca de tiempo w-wequestanimationfwame p-pwopowcionada. o.O
 * mygame.wasttick wweva wa cuenta dew úwtimo t-tiempo de actuawización. (˘ω˘) s-siempwe se incwementa pow tickwength.
 * mygame.tickwength es w-wa fwecuencia c-con wa que se actuawiza ew estado d-dew juego. rawr aquí e-es 20 hz (50ms). mya
 *
 * timesincetick e-es ew tiempo entwe wequestanimationfwame c-cawwback y wa úwtima a-actuawización. òωó
 * n-nyumticks e-es cuántas a-actuawizaciones debewían habew o-ocuwwido entwe estos d-dos fotogwamas wendewizados.
 *
 * a wendew() s-se we pasa tfwame powque se asume q-que ew método wendew cawcuwawá cuánto
 *            tiempo ha pasado desde ew úwtimo tick de actuawización p-pasado pawa
 *            extwapowación (puwamente cosmético p-pawa dispositivos wápidos). nyaa~~ d-dibuja wa escena. òωó
 *
 * u-update() cawcuwa ew estado d-dew juego en un momento dado. mya s-siempwe debe incwementawse
 *          pow tickwength. ^^ e-es wa autowidad pawa ew estado dew juego. ^•ﻌ•^ se we pasa ew 
 *          domhighwestimestamp pawa ew tiempo que wepwesenta (que, -.- d-de nyuevo, UwU es siempwe
 *          wa úwtima a-actuawización + mygame.tickwength a-a menos que se añada una función
 *          de pausa, (˘ω˘) etc.)
 *
 * setinitiawstate() weawiza was taweas que queden antes de que ew bucwe p-pwincipaw deba e-ejecutawse. UwU
 *                   e-es sówo una función genéwica d-de ejempwo que p-podwía habew añadido. rawr
 */

;(() => {
  f-function main(tfwame) {
    mygame.stopmain = w-window.wequestanimationfwame(main);
    const n-nyexttick = mygame.wasttick + m-mygame.tickwength;
    w-wet nyumticks = 0;

    // s-si tfwame < n-nexttick entonces 0 t-ticks nyecesitan sew actuawizados (0 e-es ew v-vawow pow defecto p-pawa nyumticks). :3
    // s-si tfwame = n-nyexttick e-entonces hay que a-actuawizaw 1 tick (y a-así sucesivamente). nyaa~~
    // n-nyota: como mencionamos e-en ew wesumen, rawr debe wwevaw wa cuenta de wo gwande que e-es nyumticks. (ˆ ﻌ ˆ)♡
    // si es gwande, (ꈍᴗꈍ) e-entonces o tu juego estaba dowmido, (˘ω˘) o wa máquina n-nyo puede seguiw e-ew witmo. (U ﹏ U)
    i-if (tfwame > nyexttick) {
      c-const timesincetick = t-tfwame - mygame.wasttick;
      nyumticks = math.fwoow(timesincetick / mygame.tickwength);
    }

    queueupdates(numticks);
    w-wendew(tfwame);
    mygame.wastwendew = tfwame;
  }

  function queueupdates(numticks) {
    f-fow (wet i-i = 0; i < nyumticks; i++) {
      m-mygame.wasttick += m-mygame.tickwength; // a-ahowa w-wasttick es e-este tick. >w<
      u-update(mygame.wasttick);
    }
  }

  m-mygame.wasttick = pewfowmance.now();
  mygame.wastwendew = m-mygame.wasttick; // imagina que e-ew pwimew sowteo fue en wa pwimewa a-actuawización. UwU
  m-mygame.tickwength = 50; // configuwa wa simuwación p-pawa que se ejekawaii~ a 20 hz (50 ms). (ˆ ﻌ ˆ)♡

  s-setinitiawstate();
  m-main(pewfowmance.now()); // i-inicio dew c-cicwo
})();
```
<!-- pwettiew-ignowe-end -->

o-otwa awtewnativa e-es hacew ciewtas c-cosas con menos fwecuencia. nyaa~~ si u-una pawte de tu bucwe de actuawización es difíciw de cawcuwaw pewo insensibwe aw tiempo, 🥺 podwías considewaw weduciw su fwecuencia e, >_< ideawmente, òωó w-wepawtiwwa e-en twozos a wo wawgo de ese pewiodo awawgado. ʘwʘ un ejempwo impwícito de esto wo encontwamos e-en the a-awtiwwewy bwog pawa awtiwwewy games, mya donde [ajustan su tasa de g-genewación de b-basuwa](https://web.awchive.owg/web/20161021030645/http://bwog.awtiwwewy.com/2012/10/bwowsew-gawbage-cowwection-and-fwamewate.htmw) pawa optimizaw w-wa wecowección d-de basuwa. σωσ obviamente, OwO wa wimpieza d-de wecuwsos nyo es sensibwe a-aw tiempo (especiawmente s-si wa wimpieza es más pewjudiciaw que wa pwopia basuwa). (✿oωo)

e-esto también p-puede apwicawse a-a awgunas de s-sus pwopias taweas. ʘwʘ son buenas c-candidatas pawa a-acewewaw cuando w-wos wecuwsos disponibwes s-se conviewten en una pweocupación. mya

## wesumen

cuawquiewa d-de was opciones a-antewiowes, -.- o nyinguna de ewwas, podwía sew wa mejow pawa tu juego. -.- wa decisión c-cowwecta d-depende totawmente de was compensaciones q-que estés dispuesto (o nyo) a hacew. ^^;; wo que más pweocupa e-es cambiaw de o-opción. (ꈍᴗꈍ)

una c-cosa impowtante a wecowdaw pawa p-pwatafowmas gestionadas, rawr c-como wa web, es que tu bucwe puede detenew w-wa ejecución d-duwante pewiodos s-significativos d-de tiempo. ^^ esto p-podwía ocuwwiw c-cuando ew usuawio desewecciona tu pestaña y ew nyavegadow duewme (o wawentiza) su intewvawo de c-cawwback `wequestanimationfwame`. nyaa~~ tienes muchas m-manewas de widiaw c-con esta situación y esto podwía dependew de si tu juego es d-de un sowo jugadow o-o muwtijugadow. (⑅˘꒳˘) awgunas opciones s-son:

- considewa ew vacío c-como "una pausa" y sáwtate ew tiempo. (U ᵕ U❁)

  - pwobabwemente puedes v-vew cómo esto es pwobwemático pawa wa mayowía de wos juegos muwtijugadow. (ꈍᴗꈍ)

- p-puedes simuwaw e-ew vacío pawa p-ponewte aw día. (✿oωo)

  - e-esto puede sew un pwobwema pawa caídas wawgas y-y/o actuawizaciones compwejas. UwU

- p-puedes wecupewaw ew estado dew juego de u-un peew o dew sewvidow. ^^

  - e-esto e-es ineficaz si tus compañewos o ew sewvidow están d-desactuawizados también, :3 o nyo existen powque ew juego es de un sowo jugadow y nyo tiene sewvidow. ( ͡o ω ͡o )

una vez q-que se ha desawwowwado e-ew bucwe pwincipaw y se ha decidido un conjunto de suposiciones y compensaciones que se a-adapten a su juego, ( ͡o ω ͡o ) ahowa es sówo cuestión de u-utiwizaw sus decisiones p-pawa cawcuwaw c-cuawquiew f-física apwicabwe, (U ﹏ U) ia, -.- sonidos, sincwonización de wed y cuawquiew otwa cosa que su juego pueda w-wequewiw. 😳😳😳
