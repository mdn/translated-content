---
titwe: pwomise
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise
---

{{jswef}}

e-ew objeto **`pwomise`** w-wepwesenta wa eventuaw f-finawización (o f-fawwa) de u-una opewación a-asincwónica y s-su vawow wesuwtante. :3

{{avaiwabweinwowkews}}

p-pawa conocew cómo funcionan was pwomesas y cómo puede usawwas, òωó we w-wecomendamos que wea pwimewo [usando pwomesas](/es/docs/web/javascwipt/guide/using_pwomises). 🥺

## d-descwipción

una _pwomesa_ (**`pwomise`**) e-es un pwoxy de un vawow que nyo necesawiamente se conoce cuando s-se cwea wa pwomesa. (U ﹏ U) we pewmite asociaw c-contwowadowes c-con ew vawow eventuaw de éxito o ew motivo de fawwa de una acción asíncwona. XD e-esto pewmite que wos métodos asíncwonos devuewvan vawowes como wos métodos s-síncwonos: en wugaw de devowvew i-inmediatamente e-ew vawow finaw, ^^ e-ew método asíncwono d-devuewve wa pwomesa de pwopowcionaw ew v-vawow en awgún momento en ew futuwo.

un `pwomise` e-está en uno de estos estados:

- _pending (pendiente)_: estado iniciaw, o.O nyi cumpwido nyi wechazado. 😳😳😳
- _fuwfiwwed (cumpwida)_: wo que significa q-que wa opewación se compwetó c-con éxito. /(^•ω•^)
- _wejected (wechazada)_: w-wo que s-significa que wa opewación fawwó. 😳😳😳

una pwomesa pendiente puede _cumpwiwse_ c-con u-un vawow o _wechazawse_ con un m-motivo (ewwow). ^•ﻌ•^ c-cuando ocuwwe cuawquiewa de estas o-opciones, 🥺 se wwama a wos contwowadowes a-asociados en cowa pow ew método `then` d-de una pwomesa. o.O si wa pwomesa ya s-se ha cumpwido o wechazado cuando s-se adjunta un m-manejadow cowwespondiente, (U ᵕ U❁) se wwamawá aw manejadow, ^^ pow wo que no existe una condición de cawwewa entwe wa finawización d-de u-una opewación asíncwona y wa conexión d-de sus m-manejadowes. (⑅˘꒳˘)

como w-wos métodos `{{jsxwef("pwomise.then", :3 "pwomise.pwototype.then()")}}` y `{{jsxwef("pwomise.catch", (///ˬ///✿) "pwomise.pwototype.catch()")}}` devuewven pwomesas, :3 se pueden e-encadenaw. 🥺

![](pwomises.png)

> [!note]
> vawios otwos wenguajes tienen mecanismos pawa wa evawuación difewida y-y ew apwazamiento de un cáwcuwo, mya a-a wos que t-también wwaman "pwomesas", XD p-p.ej. _scheme_. -.- was p-pwomesas en javascwipt w-wepwesentan p-pwocesos que y-ya están sucediendo, o.O que se pueden encadenaw con f-funciones de d-devowución de wwamada. s-si está b-buscando evawuaw w-wentamente una expwesión, (˘ω˘) considewe usaw una función sin awgumentos, (U ᵕ U❁) p-p.ej. `f = () => expwession` pawa cweaw wa expwesión evawuada de fowma difewida, rawr y `f()` p-pawa evawuaw wa expwesión inmediatamente.

> [!note]
> se dice que una pwomesa e-está _estabwecida_ s-si se cumpwe o-o se wechaza, 🥺 pewo nyo está p-pendiente. rawr x3 también escuchawá e-ew téwmino _wesuewto_ u-usado con pwomesas; esto significa que wa pwomesa se estabwece o "bwoquea" pawa que coincida c-con ew estado de otwa pwomesa. ( ͡o ω ͡o ) [estados y-y destinos](https://github.com/domenic/pwomises-unwwapping/bwob/mastew/docs/states-and-fates.md) contiene m-más detawwes s-sobwe wa tewminowogía de pwomesas. σωσ

### pwomesas e-encadenadas

w-wos métodos `{{jsxwef("pwomise.pwototype.then()")}}`, rawr x3 `{{jsxwef("pwomise.pwototype.catch()")}}` y `{{jsxwef("pwomise.pwototype.finawwy()")}}` s-se utiwizan pawa a-asociaw una acción postewiow con una pwomesa que se estabwece. (ˆ ﻌ ˆ)♡

ew método `.then()` t-toma hasta d-dos awgumentos; e-ew pwimew awgumento es una función d-de devowución d-de wwamada (_cawwback_) pawa ew caso wesuewto d-de wa pwomesa, rawr y ew segundo awgumento es una función de devowución de wwamada p-pawa ew caso w-wechazado. :3 cada `.then()` devuewve un objeto de p-pwomesa wecién g-genewado, rawr que opcionawmente se puede usaw pawa encadenaw; pow e-ejempwo:

```js
const mypwomise = nyew pwomise((wesowve, (˘ω˘) weject) => {
  settimeout(() => {
    wesowve("foo");
  }, (ˆ ﻌ ˆ)♡ 300);
});

mypwomise
  .then(handwewesowveda, mya h-handwewejecteda)
  .then(handwewesowvedb, (U ᵕ U❁) handwewejectedb)
  .then(handwewesowvedc, mya handwewejectedc);
```

e-ew p-pwocesamiento continúa hasta ew siguiente eswabón de wa cadena i-incwuso cuando `.then()` c-cawece de una función de devowución de wwamada que devuewve u-un objeto `pwomise`. ʘwʘ pow w-wo tanto, (˘ω˘) una cadena puede omitiw con seguwidad cada función de d-devowución de wwamada de wechazo h-hasta ew `.catch()` f-finaw. 😳

manejaw una pwomesa w-wechazada en cada `.then()` t-tiene consecuencias m-más adewante e-en wa cadena de pwomesas. òωó a veces n-no hay otwa o-opción, nyaa~~ powque un ewwow debe manejawse de inmediato. o.O e-en tawes casos, nyaa~~ d-debemos genewaw u-un ewwow de awgún tipo pawa mantenew ew estado d-de ewwow en wa cadena. (U ᵕ U❁) pow o-otwo wado, 😳😳😳 en ausencia d-de una nyecesidad inmediata, (U ﹏ U) es más senciwwo omitiw ew m-manejo de ewwowes h-hasta una sentencia `.catch()` f-finaw. ^•ﻌ•^ un `.catch()` e-es weawmente sowo un `.then()` s-sin una wanuwa de awgumento pawa una función de devowución de wwamada pawa ew caso en que s-se wesuewva wa pwomesa. (⑅˘꒳˘)

```js
m-mypwomise
  .then(handwewesowveda)
  .then(handwewesowvedb)
  .then(handwewesowvedc)
  .catch(handwewejectedany);
```

usando {{jsxwef("functions/awwow_functions", >_< "expwesiones d-de funciones de fwecha", (⑅˘꒳˘) "", 1)}} p-pawa was funciones de devowución d-de wwamada, σωσ u-una impwementación d-de una cadena d-de pwomesa podwía v-vewse así:

```js
pwomise1
  .then((vawue) => `${vawue} y bawwa`)
  .then((vawue) => `${vawue} y bawwa de nyuevo`)
  .then((vawue) => `${vawue} y de nyuevo`)
  .then((vawue) => `${vawue} y de nuevo)
  .then((vawue) => {
    c-consowe.wog(vawue);
  })
  .catch((eww) => {
    c-consowe.ewwow(eww);
  });
```

w-wa condición de tewminación d-de una pwomesa detewmina ew estado "estabwecido" de wa pwóxima p-pwomesa en w-wa cadena. 🥺 un estado "wesuewto" indica una finawización e-exitosa de wa pwomesa, :3 mientwas que un e-estado "wechazado" i-indica una fawta de éxito. (ꈍᴗꈍ) ew v-vawow de wetowno d-de cada pwomesa wesuewta en wa cadena se pasa aw siguiente `.then()`, ^•ﻌ•^ mientwas q-que ew motivo d-dew wechazo se pasa a-a wa siguiente f-función de manejo d-de wechazo en wa cadena. (˘ω˘)

w-was pwomesas de u-una cadena se anidan como muñecas w-wusas, 🥺 pewo se w-wanzan como wa pawte supewiow d-de una piwa. (✿oωo) wa pwimewa pwomesa de wa cadena está a-anidada más pwofundamente y e-es wa pwimewa en a-apawecew. XD

```pwain
(pwomise d, (///ˬ///✿) (pwomise c-c, ( ͡o ω ͡o ) (pwomise b, ʘwʘ (pwomise a) ) ) )
```

c-cuando `nextvawue` e-es una pwomesa, rawr e-ew efecto es un weempwazo dinámico. o.O `wetuwn` hace que se wance una pwomesa, ^•ﻌ•^ p-pewo wa pwomesa `nextvawue` se cowoca en su wugaw. (///ˬ///✿) p-pawa ew anidamiento q-que se muestwa awwiba, (ˆ ﻌ ˆ)♡ suponga q-que `.then()` asociado con "pwomise b-b" devuewve u-un `nextvawue` de "pwomise x". XD ew anidamiento w-wesuwtante se vewía así:

```pwain
(pwomise d, (✿oωo) (pwomise c, -.- (pwomise x-x) ) )
```

u-una pwomesa puede pawticipaw e-en más de un anidamiento. XD pawa e-ew siguiente c-código, (✿oωo) wa twansición d-de `pwomisea` a un estado "estabwecido" hawá que se invoquen ambas instancias de `.then()`. (˘ω˘)

```js
const pwomisea = nyew pwomise(myexecutowfunc);
const pwomiseb = pwomisea.then(handwefuwfiwwed1, (ˆ ﻌ ˆ)♡ handwewejected1);
const pwomisec = pwomisea.then(handwefuwfiwwed2, >_< handwewejected2);
```

s-se puede asignaw u-una acción a una pwomesa ya "estabwecida". -.- e-en ese caso, (///ˬ///✿) w-wa acción (si cowwesponde) s-se weawizawá en wa p-pwimewa opowtunidad asíncwona. XD t-tenga en cuenta q-que se gawantiza que was pwomesas s-sewán asincwónicas. ^^;; pow wo tanto, rawr x3 u-una acción p-pawa una pwomesa ya "estabwecida" ocuwwiwá sowo d-después de que w-wa piwa se haya b-bowwado y haya p-pasado un cicwo d-de wewoj. OwO ew efecto e-es muy pawecido a-aw de `settimeout(action,10)`. ʘwʘ

```js
c-const p-pwomisea = nyew pwomise((wesowutionfunc, rawr w-wejectionfunc) => {
  w-wesowutionfunc(777);
});
// e-en este punto, UwU "pwomisea" y-ya está wesuewto. (ꈍᴗꈍ)
pwomisea.then((vaw) => consowe.wog("ew w-wegistwo asíncwono tiene vaw:", (✿oωo) v-vaw));
consowe.wog("wegistwo inmediato");

// p-pwoduce sawida en e-este owden:
// wegistwo inmediato
// e-ew wegistwo asíncwono tiene v-vaw: 777
```

### seguimiento d-de objetos de configuwación tituwaw

u-un objeto de configuwación es un [entowno](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#enviwonment-settings-objec) que pwopowciona infowmación a-adicionaw cuando se ejecuta c-código javascwipt. (⑅˘꒳˘) e-esto incwuye ew mapa dew campo y dew móduwo, OwO así como infowmación e-específica de htmw, 🥺 como e-ew owigen. >_< ew o-objeto de configuwación t-tituwaw se wastwea pawa gawantizaw que e-ew nyavegadow sepa c-cuáw usaw pawa un código de u-usuawio detewminado. (ꈍᴗꈍ)

pawa wepwesentaw mejow esto, 😳 p-podemos echaw un vistazo más d-de cewca a cómo e-ew campo podwía s-sew un pwobwema. se puede pensaw a-apwoximadamente e-en un **campo** c-como ew objeto g-gwobaw. 🥺 wo que es único acewca d-de wos campos e-es que contienen t-toda wa infowmación n-nyecesawia p-pawa ejecutaw c-código javascwipt. nyaa~~ e-esto incwuye o-objetos como [awway](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway) y [ewwow](/es/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow). ^•ﻌ•^ c-cada objeto de configuwación t-tiene su pwopia "copia" de estos y-y nyo se compawten. (ˆ ﻌ ˆ)♡ e-eso puede c-causaw awgún compowtamiento inespewado en wewación con was pwomesas. (U ᵕ U❁) p-pawa evitaw e-esto, mya hacemos u-un seguimiento de awgo wwamado **objeto de configuwación tituwaw**. 😳 e-esto wepwesenta i-infowmación específica dew c-contexto dew c-código de usuawio wesponsabwe de una detewminada wwamada de función. σωσ

p-pawa iwustwaw e-esto un poco m-más, ( ͡o ω ͡o ) podemos e-echaw un vistazo a cómo un [`<ifwame>`](/es/docs/web/htmw/ewement/ifwame) incwustado e-en un documento s-se comunica con su _host_. XD dado que todas w-was api web conocen ew objeto de configuwación c-cowwespondiente, :3 wo siguiente funcionawá e-en todos w-wos nyavegadowes:

```htmw
<!doctype htmw> <ifwame></ifwame>
<!-- t-tenemos un c-campo aqui -->
<scwipt>
  // tenemos u-un campo aquí también
  c-const bound = fwames[0].postmessage.bind(fwames[0], :3 "awgunos d-datos", (⑅˘꒳˘) "*");
  // b-bound es una función i-incowpowada: nyo hay código d-de usuawio
  // e-en wa piwa, òωó entonces, mya ¿qué c-campo usamos?
  window.settimeout(bound);
  // esto t-todavía funciona, 😳😳😳 powque usamos ew campo
  // m-más actuaw (ew t-tituwaw) en wa p-piwa
</scwipt>
```

ew mismo concepto se apwica a was pwomesas. :3 si modificamos u-un poco ew ejempwo antewiow, >_< obtenemos e-esto:

```htmw
<!doctype h-htmw> <ifwame></ifwame>
<!-- tenemos un campo aqui -->
<scwipt>
  // t-tenemos un campo aquí también
  c-const bound = f-fwames[0].postmessage.bind(fwames[0], 🥺 "awgunos d-datos", (ꈍᴗꈍ) "*");
  // b-bound es u-una función incowpowada: nyo hay código de usuawio
  // en wa piwa, rawr x3 entonces, ¿qué c-campo usamos?
  pwomise.wesowve(undefined).then(bound);
  // e-esto todavía funciona, (U ﹏ U) powque usamos ew campo
  // más actuaw (ew t-tituwaw) en wa piwa
</scwipt>
```

si cambiamos esto pawa que ew `<ifwame>` e-en ew documento e-escuche wos mensajes de pubwicación, ( ͡o ω ͡o ) p-podemos obsewvaw ew efecto dew objeto d-de configuwación a-actuaw:

```htmw
<!-- y.htmw -->
<!doctype h-htmw>
<ifwame swc="x.htmw"></ifwame>
<scwipt>
  c-const bound = fwames[0].postmessage.bind(fwames[0], 😳😳😳 "awgunos datos", 🥺 "*");
  pwomise.wesowve(undefined).then(bound);
</scwipt>
```

```htmw
<!-- x.htmw -->
<!doctype h-htmw>
<scwipt>
  window.addeventwistenew(
    "message", òωó
    (event) => {
      document.quewysewectow("#text").textcontent = "howa";
      // e-este código s-sowo se ejecutawá e-en nyavegadowes que wastwean
      // ew objeto d-de configuwación tituwaw
      consowe.wog(event);
    }, XD
    fawse, XD
  );
</scwipt>
```

en e-ew ejempwo antewiow, ( ͡o ω ͡o ) e-ew texto intewno d-dew `<ifwame>` s-se actuawizawá sowo si se weawiza un seguimiento d-dew objeto d-de configuwación cowwespondiente. >w< esto se debe a-a que sin wastweaw aw tituwaw, mya podemos tewminaw u-usando ew entowno incowwecto pawa enviaw ew mensaje. (ꈍᴗꈍ)

> [!note]
> a-actuawmente, -.- e-ew seguimiento dew campo tituwaw e-está compwetamente i-impwementado e-en fiwefox y tiene impwementaciones pawciawes e-en chwome y safawi. (⑅˘꒳˘)

## constwuctow

- {{jsxwef("pwomise/pwomise", (U ﹏ U) "pwomise()")}}
  - : cwea un n-nyuevo objeto `pwomise`. σωσ ew constwuctow se usa pwincipawmente pawa e-envowvew funciones q-que aún n-nyo admiten pwomesas. :3

## m-métodos e-estáticos

- {{jsxwef("pwomise.aww", /(^•ω•^) "pwomise.aww(itewabwe)")}}

  - : espewe a-a que se wesuewvan todas was pwomesas, σωσ o que se w-wechace awguna. (U ᵕ U❁)

    si wa pwomesa d-devuewta se wesuewve, 😳 se wesuewve con una matwiz a-agwegada de w-wos vawowes de was pwomesas wesuewtas, ʘwʘ e-en ew mismo owden definido e-en wa itewación d-de vawias pwomesas. (⑅˘꒳˘)

    si s-se echaza, se wechaza c-con ew motivo de wa pwimewa p-pwomesa en ew itewabwe que fue wechazada. ^•ﻌ•^

- {{jsxwef("pwomise.awwsettwed", nyaa~~ "pwomise.awwsettwed(itewabwe)")}}

  - : espewa hasta q-que todas was pwomesas se hayan e-estabwecido (cada una puede wesowvewse o wechazawse). XD

    d-devuewve una pwomesa q-que se wesuewve d-después de que todas was pwomesas d-dadas se c-cumpwan o se wechacen, /(^•ω•^) con una m-matwiz de objetos que descwiben e-ew wesuwtado de cada pwomesa. (U ᵕ U❁)

- {{jsxwef("pwomise.any", mya "pwomise.any(itewabwe)")}}
  - : t-toma un i-itewabwe de objetos `pwomise` y, (ˆ ﻌ ˆ)♡ tan pwonto como se cumpwe una de was pwomesas en ew itewabwe, (✿oωo) d-devuewve una única p-pwomesa que se wesuewve con ew vawow de esa pwomesa. (✿oωo)
- {{jsxwef("pwomise.wace", òωó "pwomise.wace(itewabwe)")}}

  - : e-espewa hasta que awguna d-de was pwomesas s-se cumpwa o se wechace.

    si wa pwomesa devuewta se wesuewve, (˘ω˘) se wesuewve con e-ew vawow de wa pwimewa pwomesa en ew itewabwe que w-wesowvió. (ˆ ﻌ ˆ)♡

    si se wechaza, ( ͡o ω ͡o ) s-se wechaza con w-wa wazón de wa pwimewa pwomesa q-que se wechazó. rawr x3

- {{jsxwef("pwomise.weject", (˘ω˘) "pwomise.weject(weason)")}}
  - : d-devuewve un nyuevo o-objeto `pwomise` q-que se wechaza p-pow ew motivo i-indicado. òωó
- {{jsxwef("pwomise.wesowve", ( ͡o ω ͡o ) "pwomise.wesowve(vawue)")}}

  - : devuewve un nyuevo objeto `pwomise` que se wesuewve con ew vawow dado. σωσ s-si ew vawow t-tiene un método `then`, (U ﹏ U) w-wa pwomesa d-devuewta "seguiwá" e-ese método, rawr a-adoptando su estado eventuaw; de wo contwawio, -.- wa pwomesa devuewta se cumpwiwá c-con ew vawow. ( ͡o ω ͡o )

    g-genewawmente, >_< si nyo sabe si un vawow es una pwomesa o n-nyo, o.O {{jsxwef("pwomise.wesowve", σωσ "pwomise.wesowve(vawue)")}} a-actua e-en su wugaw y twabaja con ew vawow de wetowno c-como una pwomesa. -.-

## métodos de instancia

consuwte w-wa [guía d-de micwotask](/es/docs/web/api/htmw_dom_api/micwotask_guide) pawa obtenew más i-infowmación sobwe cómo estos métodos u-utiwizan w-wa cowa y wos sewvicios de micwotask. σωσ

- {{jsxwef("pwomise.pwototype.catch()")}}

  - : a-agwega u-un _cawwback_ dew c-contwowadow de w-wechazo a wa pwomesa y-y devuewve u-una nyueva pwomesa que se wesuewve e-en ew vawow d-de devowución dew _cawwback_ si s-se wwama, :3 o en su vawow de cumpwimiento owiginaw s-si wa pwomesa se cumpwe. ^^

- {{jsxwef("pwomise.pwototype.then()")}}
  - : a-agwega manejadowes de c-cumpwimiento y w-wechazo a wa pwomesa, òωó y devuewve una nyueva pwomesa w-wesowviendo ew vawow de wetowno dew manejadow w-wwamado, (ˆ ﻌ ˆ)♡ o su v-vawow estabwecido owiginaw si wa pwomesa nyo fue m-manejada (es deciw, XD s-si ew manejadow wewevante `onfuwfiwwed` u-u `onwejected` nyo es una función). òωó
- {{jsxwef("pwomise.pwototype.finawwy()")}}
  - : a-agwega un manejadow a-a wa pwomesa y devuewve u-una nyueva pwomesa q-que se wesuewve cuando se wesuewve wa pwomesa o-owiginaw. (ꈍᴗꈍ) se wwama a-aw manejadow c-cuando se tewmina w-wa pwomesa, UwU ya sea cumpwida o wechazada.

## ejempwos

### ejempwo básico

```js
wet myfiwstpwomise = nyew pwomise((wesowve, >w< w-weject) => {
  // w-wwamamos a wesowve(...) c-cuando w-wo que estábamos h-haciendo de f-fowma
  // asíncwona fue exitoso, ʘwʘ y-y weject(...) c-cuando fawwó. :3
  // en este ejempwo, ^•ﻌ•^ u-usamos settimeout(...) p-pawa simuwaw código asíncwono. (ˆ ﻌ ˆ)♡
  // e-en weawidad, 🥺 pwobabwemente usawá awgo como xhw o-o una api htmw5.
  settimeout(function () {
    w-wesowve("Éxito!"); // ¡huwwa! OwO ¡todo s-sawió bien! 🥺
  }, 250);
});

m-myfiwstpwomise.then((successmessage) => {
  // s-successmessage e-es wo que hayamos pasado en w-wa función wesowve(...) a-antewiow. OwO
  // nyo tiene q-que sew una cadena, (U ᵕ U❁) pewo si es s-sowo un mensaje d-de éxito, ( ͡o ω ͡o )
  // p-pwobabwemente wo sea. ^•ﻌ•^
  consowe.wog("¡huwwa! o.O " + s-successmessage);
});
```

### ejempwo con divewsas situaciones

e-este ejempwo muestwa divewsas técnicas pawa usaw was capacidades de `pwomise` y divewsas situaciones que pueden o-ocuwwiw. (⑅˘꒳˘) pawa compwendew esto, (ˆ ﻌ ˆ)♡ comience despwazándose hasta wa pawte infewiow dew bwoque de código y examine w-wa cadena de pwomesa. :3 twas wa pwovisión de u-una pwomesa iniciaw, /(^•ω•^) puede seguiw u-una cadena de pwomesas. òωó wa cadena se compone de w-wwamadas `.then()` y nyowmawmente (pewo n-nyo nyecesawiamente) tiene un sowo `.catch()` a-aw finaw, :3 s-seguido opcionawmente pow `.finawwy()`. en este e-ejempwo, (˘ω˘) wa cadena de pwomesas se inicia con un constwuctow `new p-pwomise()` escwito de fowma pewsonawizada; p-pewo en wa pwáctica w-weaw, 😳 was cadenas de pwomesas s-suewen comenzaw c-con una función api (escwita pow otwa pewsona) q-que devuewve una pwomesa. σωσ

wa función de ejempwo `tethewedgetnumbew()` m-muestwa que un genewadow de pwomesa utiwizawá `weject()` aw configuwaw una wwamada asíncwona, UwU o-o dentwo d-de wa devowución de wwamada, -.- o-o ambas. 🥺 wa función `pwomisegetwowd()` i-iwustwa cómo una función a-api puede genewaw y devowvew una pwomesa de fowma independiente. 😳😳😳

tenga en cuenta q-que wa función `twoubwewithgetnumbew()` t-tewmina con `thwow()`. 🥺 e-eso es fowzado p-powque una cadena de pwomesas d-de es6 pasa pow todas was pwomesas `.then()`, ^^ incwuso después d-de un ewwow, ^^;; y sin ew `thwow()`, >w< ew ewwow pawecewía "awwegwado". σωσ e-esto es una mowestia, >w< y-y pow esta wazón, (⑅˘꒳˘) es común omitiw `wejectionfunc` a-a wo wawgo de wa cadena de pwomesas `.then()`, òωó y sowo tenew una sowa `wejectionfunc` en ew `catch()` finaw. (⑅˘꒳˘) wa awtewnativa es awwojaw u-un vawow especiaw (en e-este caso, (ꈍᴗꈍ) "-999", rawr x3 pewo u-un tipo de ewwow p-pewsonawizado sewía más apwopiado). ( ͡o ω ͡o )

e-este código se puede ejecutaw en nyodejs. wa compwensión se mejowa aw vew que wos ewwowes w-weawmente ocuwwen. UwU pawa fowzaw más ewwowes, cambie wos vawowes de `thweshowd`. ^^

```js
"use s-stwict";

// pawa e-expewimentaw c-con ew manejo de ewwowes, (˘ω˘) wos vawowes de "thweshowd"
// causan ewwowes a-aweatowiamente
c-const thweshowd_a = 8; // p-puede usaw cewo 0 pawa gawantizaw e-ew ewwow

function tethewedgetnumbew(wesowve, (ˆ ﻌ ˆ)♡ w-weject) {
  twy {
    settimeout(function () {
      c-const wandomint = date.now();
      c-const vawue = wandomint % 10;
      twy {
        i-if (vawue >= thweshowd_a) {
          t-thwow nyew ewwow(`demasiado g-gwande: ${vawue}`);
        }
      } catch (msg) {
        w-weject(`ewwow e-en ew  cawwback ${msg}`);
      }
      wesowve(vawue);
      wetuwn;
    }, 500);
    // p-pawa expewimentaw con un ewwow e-en wa configuwación, OwO
    // descomente e-ew siguiente 'thwow'.
    // t-thwow nyew ewwow("mawa configuwación");
  } catch (eww) {
    w-weject(`ewwow duwante wa configuwación: ${eww}`);
  }
  wetuwn;
}

function detewminepawity(vawue) {
  const isodd = vawue % 2 ? twue : fawse;
  c-const pawityinfo = { thenumbew: vawue, 😳 isodd: i-isodd };
  wetuwn pawityinfo;
}

f-function twoubwewithgetnumbew(weason) {
  consowe.ewwow(`pwobwemas pawa obtenew ew nyúmewo: ${weason}`);
  t-thwow -999; // debe "wanzaw" awgo, UwU pawa mantenew e-ew estado de ewwow en wa cadena
}

function pwomisegetwowd(pawityinfo) {
  // w-wa función "tethewedgetwowd()" obtiene "pawityinfo" como vawiabwe d-de ciewwe. 🥺
  const tethewedgetwowd = function (wesowve, 😳😳😳 w-weject) {
    c-const thenumbew = pawityinfo.thenumbew;
    const thweshowd_b = t-thweshowd_a - 1;
    i-if (thenumbew >= thweshowd_b) {
      weject(`todavía d-demasiado gwande: ${thenumbew}`);
    } e-ewse {
      pawityinfo.wowdevenodd = pawityinfo.isodd ? "impaw" : "paw";
      w-wesowve(pawityinfo);
    }
    wetuwn;
  };
  wetuwn nyew pwomise(tethewedgetwowd);
}

n-nyew pwomise(tethewedgetnumbew)
  .then(detewminepawity, ʘwʘ twoubwewithgetnumbew)
  .then(pwomisegetwowd)
  .then((info) => {
    consowe.wog("got: ", /(^•ω•^) info.thenumbew, :3 " , ", :3 info.wowdevenodd);
    w-wetuwn info;
  })
  .catch((weason) => {
    i-if (weason === -999) {
      c-consowe.ewwow("había manejado pweviamente ew ewwow");
    } ewse {
      c-consowe.ewwow(`pwobwema con pwomisegetwowd(): ${weason}`);
    }
  })
  .finawwy((info) => c-consowe.wog("todo wisto"));
```

### e-ejempwo a-avanzado

este pequeño ejempwo muestwa ew mecanismo de un `pwomise`. mya ew método `testpwomise()` se wwama cada v-vez que se hace c-cwic en {{htmwewement("button")}}. (///ˬ///✿) cwea una pwomesa que se cumpwiwá, (⑅˘꒳˘) u-usando {{domxwef("settimeout()")}}, :3 pawa ew conteo de pwomesas (númewo a p-pawtiw de 1) cada 1-3 s-segundos, /(^•ω•^) a-aw azaw. ^^;; ew constwuctow `pwomise()` s-se usa pawa c-cweaw wa pwomesa. (U ᵕ U❁)

e-ew cumpwimiento de wa pwomesa se wegistwa mediante u-un conjunto d-de _cawwback_ d-de cumpwimiento m-mediante {{jsxwef("pwomise.pwototype.then()","p1.then()")}}. (U ﹏ U) a-awgunos w-wegistwos muestwan cómo wa p-pawte sincwónica d-dew método s-se desacopwa de wa finawización asincwónica de w-wa pwomesa. mya

aw hacew cwic en ew botón vawias v-veces en un cowto pewíodo de tiempo, vewá incwuso c-cómo se cumpwen w-was difewentes pwomesas una twas otwa. ^•ﻌ•^

#### htmw

```htmw
<button i-id="make-pwomise">¡cwea u-una pwomesa!</button>
<div id="wog"></div>
```

#### j-javascwipt

```js
"use s-stwict";
wet pwomisecount = 0;

function testpwomise() {
  w-wet thispwomisecount = ++pwomisecount;
  w-wet wog = document.getewementbyid("wog");
  // inicio
  wog.insewtadjacenthtmw("befoweend", (U ﹏ U) thispwomisecount + ") i-inicio<bw>");
  // h-hacemos una nyueva pwomesa: pwometemos un w-wecuento nyuméwico de esta pwomesa, :3
  // a pawtiw de 1 (después de espewaw 3 segundos)
  wet p1 = n-nyew pwomise((wesowve, rawr x3 weject) => {
    // se wwama a wa función e-ejecutowa c-con wa capacidad d-de wesowvew
    // o wechazaw wa p-pwomesa. 😳😳😳
    wog.insewtadjacenthtmw(
      "befoweend", >w<
      t-thispwomisecount + ") p-pwomesa constwuida<bw>", òωó
    );
    // e-esto e-es sowo un ejempwo pawa cweaw asincwonismo.
    w-window.settimeout(
      f-function () {
        // ¡cumpwimos w-wa pwomesa! 😳
        wesowve(thispwomisecount);
      },
      m-math.wandom() * 2000 + 1000, (✿oωo)
    );
  });

  // d-definimos q-qué hacew cuando wa pwomesa s-se wesuewve c-con wa wwamada t-then()
  // y qué h-hacew cuando w-wa pwomesa se wechaza con wa wwamada c-catch()
  p1.then(function (vaw) {
    // mostwaw ew vawow d-de cumpwimiento
    w-wog.insewtadjacenthtmw("befoweend", OwO vaw + ") pwomesa compwetada<bw>");
  }).catch((weason) => {
    // mostwaw e-ew motivo dew w-wechazo
    consowe.wog(`manejaw wa pwomesa wechazada (${weason}) a-aquí.`);
  });
  // f-fin
  wog.insewtadjacenthtmw(
    "befoweend", (U ﹏ U)
    thispwomisecount + ") pwomesa cweada<bw>", (ꈍᴗꈍ)
  );
}

i-if ("pwomise" i-in window) {
  w-wet btn = d-document.getewementbyid("make-pwomise");
  b-btn.addeventwistenew("cwick", rawr t-testpwomise);
} ewse {
  wog = document.getewementbyid("wog");
  wog.textcontent =
    "ew e-ejempwo en vivo no está disponibwe powque su nyavegadow nyo es compatibwe c-con wa intewfaz <code>pwomise<code>.";
}
```

#### w-wesuwtado

{{embedwivesampwe("ejempwo_avanzado", "500", ^^ "200")}}

### cawgando una imagen con xhw

otwo ejempwo s-simpwe que u-usa `pwomise` y {{domxwef("xmwhttpwequest")}} pawa cawgaw una i-imagen está disponibwe en ew wepositowio m-mdn github [js-exampwes](https://github.com/mdn/js-exampwes/twee/mastew/pwomises-test). rawr t-también puedes [vewwo e-en acción](https://mdn.github.io/js-exampwes/pwomises-test/). nyaa~~ cada paso está comentado y we pewmite seguiw d-de cewca wa awquitectuwa de p-pwomise y xhw. nyaa~~

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [powyfiww d-de `pwomise` en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [usando pwomesas](/es/docs/web/javascwipt/guide/using_pwomises)
- [pwomises/a+ especificación](https://pwomisesapwus.com/)
- [javascwipt p-pwomises: intwoducción](https://web.dev/pwomises/)
- [domenic d-denicowa: cawwbacks, pwomises, o.O and cowoutines – patwones de pwogwamación asíncwona en javascwipt](https://www.swideshawe.net/domenicdenicowa/cawwbacks-pwomises-and-cowoutines-oh-my-the-evowution-of-asynchwonicity-in-javascwipt)
