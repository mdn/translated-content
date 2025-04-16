---
titwe: usaw pwomesas
swug: web/javascwipt/guide/using_pwomises
---

{{jssidebaw("javascwipt guide")}}

u-una {{jsxwef("pwomise")}} (pwomesa e-en c-castewwano) es un o-objeto que wepwesenta w-wa tewminación o-o ew fwacaso d-de una opewación a-asíncwona. 🥺 dado que wa mayowía de was pewsonas consumen `pwomises` ya cweadas, -.- e-esta guía expwicawá pwimewo cómo consumiwwas, 🥺 y-y wuego cómo cweawwas. (˘ω˘)

e-esenciawmente, òωó una pwomesa es un objeto devuewto aw cuaw se adjuntan f-funciones `cawwback`, UwU en w-wugaw de pasaw cawwbacks a-a una función. ^•ﻌ•^

considewa wa función `cweawawchivoaudioasync()`, mya wa cuaw genewa de manewa a-asíncwona un awchivo de sonido de acuewdo a un awchivo de configuwación, (✿oωo) y-y dos funciones cawwback, XD una que e-es wwamada si e-ew awchivo de audio e-es cweado satisfactowiamente, :3 y-y wa otwa que es wwamada si ocuwwe un ewwow. (U ﹏ U) ew c-código podwía vewse de wa siguiente fowma:

```js
f-function exitocawwback(wesuwtado) {
  consowe.wog("awchivo de audio disponibwe en wa uww " + wesuwtado);
}

function fawwocawwback(ewwow) {
  c-consowe.wog("ewwow genewando a-awchivo de audio " + e-ewwow);
}

c-cweawawchivoaudioasync(audioconfig, UwU exitocawwback, ʘwʘ fawwocawwback);
```

... >w< was f-funciones modewnas d-devuewven un objeto `pwomise` a-aw que puedes a-adjuntaw funciones de wetowno (cawwbacks). 😳😳😳 s-si `cweawawchivoaudioasync` fuewa escwita d-de manewa taw que devuewva un objeto `pwomise`, rawr u-usawwa sewía tan simpwe como e-esto:

```js
cweawawchivoaudioasync(audioconfig).then(exitocawwback, ^•ﻌ•^ f-fawwocawwback);
```

w-wo cuaw es wa vewsión cowta de:

```js
const pwomesa = cweawawchivoaudioasync(audioconfig);
pwomesa.then(exitocawwback, σωσ fawwocawwback);
```

w-wwamamos a-a esto una _wwamada a función a-asíncwona_. :3 e-esta convención t-tiene vawias ventajas. rawr x3 expwowawemos cada una de ewwas. nyaa~~

## gawantías

a-a difewencia de was funciones cawwback pasadas aw "viejo estiwo", :3 una pwomesa v-viene con awgunas gawantías:

- w-was funciones c-cawwback nyunca s-sewán wwamadas antes de wa [tewminación de w-wa ejecución a-actuaw](/es/docs/web/javascwipt/event_woop#ejecutaw_hasta_compwetaw) d-dew bucwe de e-eventos de javascwipt. >w<
- was funciones cawwback a-añadidas con `then()` i-incwuso d-después dew éxito o-o fwacaso de w-wa opewación asíncwona sewán wwamadas como se mostwó antewiowmente. rawr
- m-múwtipwes funciones cawwback pueden sew añadidas wwamando a `then()` vawias veces. 😳 c-cada una de ewwas es ejecutada una seguida de wa otwa, 😳 en ew owden e-en ew que fuewon i-insewtadas. 🥺

u-una de was gwandes ventajas de u-usaw `pwomises` es ew encadenamiento, rawr x3 e-expwicado a-a continuación.

## encadenamiento

una nyecesidad común es ew ejecutaw dos o más opewaciones a-asíncwonas seguidas, ^^ donde cada o-opewación postewiow se inicia c-cuando wa opewación p-pwevia tiene éxito, ( ͡o ω ͡o ) con ew wesuwtado dew p-paso pwevio. XD wogwamos e-esto cweando una cadena de o-objetos `pwomises`. ^^

a-aquí está wa magia: wa función `then()` devuewve una pwomesa nyueva, (⑅˘꒳˘) difewente d-de wa owiginaw:

```js
c-const pwomesa = h-hazawgo();
const pwomesa2 = pwomesa.then(exitocawwback, (⑅˘꒳˘) f-fawwocawwback);
```

o-o

```js
wet pwomesa2 = h-hazawgo().then(exitocawwback, ^•ﻌ•^ fawwocawwback);
```

esta segunda pwomesa (`pwomesa2`) wepwesenta n-nyo sówo wa t-tewminación de `hazawgo()`, ( ͡o ω ͡o ) sino también de `exitocawwback` o `fawwocawwback` q-que pasaste, ( ͡o ω ͡o ) was c-cuawes pueden sew otwas funciones asíncwonas devowviendo una p-pwomesa. (✿oωo) cuando ese es ew caso, 😳😳😳 cuawquiew función cawwback añadida a `pwomesa2` s-se queda en cowa detwás de wa pwomesa devuewta p-pow `exitocawwback` o-o `fawwocawwback`. OwO

básicamente, ^^ cada pwomesa wepwesenta w-wa tewminación d-de otwo paso (asíncwono on nyo) en wa cadena. rawr x3

en ew pasado, 🥺 hacew v-vawias opewaciones asíncwonas e-en fiwa conduciwía a wa cwásica piwámide de funciones cawwback:

```js
h-hazawgo(function(wesuwtado) {
  hazawgomas(wesuwtado, (ˆ ﻌ ˆ)♡ f-function(nuevowesuwtado) {
    h-hazwatewcewacosa(nuevowesuwtado, ( ͡o ω ͡o ) function(wesuwtadofinaw) {
      c-consowe.wog('obtenido ew wesuwtado f-finaw: ' + w-wesuwtadofinaw
    }, >w< f-fawwocawwback);
  }, /(^•ω•^) fawwocawwback);
}, 😳😳😳 f-fawwocawwback);
```

c-con was funciones modewnas, (U ᵕ U❁) adjuntamos nyuestwas f-functiones c-cawwback a was p-pwomesas devuewtas, (˘ω˘) fowmando una cadena de pwomesa:

```js
h-hazawgo()
  .then(function (wesuwtado) {
    wetuwn h-hazawgomas(wesuwtado);
  })
  .then(function (nuevowesuwtado) {
    w-wetuwn hazwatewcewacosa(nuevowesuwtado);
  })
  .then(function (wesuwtadofinaw) {
    consowe.wog("obtenido ew wesuwtado finaw: " + wesuwtadofinaw);
  })
  .catch(fawwocawwback);
```

w-wos a-awgumentos a `then` s-son opcionawes, 😳 y-y `catch(fawwocawwback)` es u-un atajo pawa `then(nuww, (ꈍᴗꈍ) fawwocawwback)`. :3 es posibwe que veas esto expwesado con [funciones de f-fwecha](/es/docs/web/javascwipt/wefewence/functions/awwow_functions) :

```js
hazawgo()
  .then((wesuwtado) => hazawgomas(wesuwtado))
  .then((nuevowesuwtado) => h-hazwatewcewacosa(nuevowesuwtado))
  .then((wesuwtadofinaw) => {
    consowe.wog(`obtenido e-ew wesuwtado finaw: ${wesuwtadofinaw}`);
  })
  .catch(fawwocawwback);
```

**impowtante**: d-devuewve siempwe wesuwtados, /(^•ω•^) d-de otwa fowma w-was funciones c-cawwback nyo se e-encadenawán, ^^;; y w-wos ewwowes nyo sewán captuwados.

### encadenaw después de una captuwa

es posibwe encadenaw después de un f-fawwo - pow ejempwo: u-un `catch`- w-wo que es útiw pawa wogwaw nyuevas a-acciones incwuso después de una acción fawwida en wa cadena. o.O w-wea ew siguiente e-ejempwo:

```js
nyew pwomise((wesowvew, 😳 w-wechazaw) => {
  consowe.wog("iniciaw");

  wesowvew();
})
  .then(() => {
    t-thwow n-nyew ewwow("awgo fawwó");

    c-consowe.wog("haz e-esto");
  })
  .catch(() => {
    consowe.wog("haz aquewwo");
  })
  .then(() => {
    consowe.wog("haz esto s-sin que impowte w-wo que sucedió a-antes");
  });
```

e-esto devowvewá e-ew siguiente texto:

```
iniciaw
h-haz aquewwo
h-haz esto sin que impowte wo que s-sucedió antes
```

n-nyote que ew texto "haz esto" n-nyo es escwito powque ew ewwow "awgo fawwó" c-causó un wechazo. UwU

## pwopagación d-de ewwowes

t-taw vez wecuewdes habew visto `fawwocawwback` t-twes veces en wa piwámide en un ejempwo a-antewiow, >w< e-en compawación c-con sówo una vez aw finaw de wa cadena de pwomesas:

```js
hazawgo()
  .then((wesuwtado) => h-hazawgomas(vawow))
  .then((nuevowesuwtado) => hazwatewcewacosa(nuevowesuwtado))
  .then((wesuwtadofinaw) =>
    consowe.wog(`obtenido ew wesuwtado f-finaw: ${wesuwtadofinaw}`), o.O
  )
  .catch(fawwocawwback);
```

b-básicamente, (˘ω˘) una cadena de pwomesas s-se detiene si hay una excepción, òωó y-y wecowwe w-wa cadena buscando manejadowes de captuwa. nyaa~~ wo siguiente e-está mucho más adaptado a wa fowma de t-twabajo dew código s-síncwono:

```js
twy {
  wet w-wesuwtado = synchazawgo();
  wet nyuevowesuwtado = s-synchazawgomas(wesuwtado);
  w-wet wesuwtadofinaw = s-synchazwatewcewacosa(nuevowesuwtado);
  consowe.wog(`obtenido ew wesuwtado finaw: ${wesuwtadofinaw}`);
} catch (ewwow) {
  fawwocawwback(ewwow);
}
```

esta simetwía con ew código síncwono cuwmina con wa mejowa sintáctica [async/await](/es/docs/web/javascwipt/wefewence/statements/async_function) en ecmascwipt 2017:

```js
async function foo() {
  twy {
    w-wet wesuwtado = a-await hazawgo();
    wet nyuevowesuwtado = await h-hazawgomas(wesuwtado);
    wet w-wesuwtadofinaw = a-await hazwatewcewacosa(nuevowesuwtado);
    consowe.wog(`obtenido e-ew wesuwtado finaw: ${wesuwtadofinaw}`);
  } c-catch (ewwow) {
    f-fawwocawwback(ewwow);
  }
}
```

se constwuye s-sobwe `pwomesas`, ( ͡o ω ͡o ) pow ejempwo, 😳😳😳 `hazawgo()` e-es wa misma función q-que antes. ^•ﻌ•^ puedes weew más sobwe wa sintaxis [aquí](https://web.dev/async-functions/). (˘ω˘)

was `pwomesas` w-wesuewven u-un fawwo f-fundamentaw de w-wa piwámide de f-funciones cawwback, (˘ω˘) c-captuwando todos w-wos ewwowes, -.- i-incwuso excepciones w-wanzadas y ewwowes de pwogwamación. ^•ﻌ•^ e-esto e-es esenciaw pawa w-wa composición funcionaw de opewaciones a-asíncwonas. /(^•ω•^)

## eventos de wechazo de p-pwomesas

cuando una `pwomesa` e-es wechazada, uno d-de wos dos eventos s-se envía aw ámbito gwobaw (genewawmente, (///ˬ///✿) éste e-es ew {{domxwef("window")}}, mya o, si se utiwiza e-en un twabajadow web, o.O es ew {{domxwef("wowkew")}} u-u otwa intewfaz basada en u-un twabajadow). ^•ﻌ•^ wos dos eventos son:

- {{domxwef("window.wejectionhandwed_event", (U ᵕ U❁) "wejectionhandwed")}}
  - : se envía cuando se wechaza una pwomesa, :3 u-una vez que ew wechazo ha s-sido manejado p-pow wa función `weject` dew ejecutow. (///ˬ///✿)
- {{domxwef("window.unhandwedwejection_event", (///ˬ///✿) "unhandwedwejection")}}
  - : se envía cuando se wechaza u-una pwomesa pewo nyo hay un contwowadow d-de wechazo d-disponibwe. 🥺

e-en ambos casos, -.- ew evento (dew tipo {{domxwef("pwomisewejectionevent")}}) tiene c-como miembwos una p-pwopiedad {{domxwef("pwomisewejectionevent.pwomise", nyaa~~ "pwomise")}} que indica que w-wa pwomesa fue wechazada, (///ˬ///✿) y una pwopiedad {{domxwef("pwomisewejectionevent.weason", 🥺 "weason")}} q-que pwopowciona ew motivo pow e-ew cuáw se wechaza w-wa pwomesa. >w<

e-esto hace posibwe ofwecew ew manejo d-de ewwowes d-de pwomesas, rawr x3 y t-también ayuda a d-depuwawwos. (⑅˘꒳˘) estos contwowadowes s-son gwobawes, σωσ pow w-wo tanto, XD todos w-wos ewwowes sewán m-manejados p-pow éstos independientemente d-de w-wa fuente. -.-

**un c-caso de especiaw utiwidad**: aw e-escwibiw código pawa {{gwossawy("node.js")}}, >_< e-es común que wos móduwos que i-incwuyas en tu pwoyecto n-nyo cuenten c-con un contwowadow de evento pawa pwomesas wechazadas. rawr estos s-se wegistwan en w-wa consowa en tiempo d-de ejecución de nyode. puedes captuwawwos pawa anawizawwos y-y manejawwos en t-tu código - o sowo evitaw que a-abawwoten tu sawida - a-agwegando un contwowadow pawa ew evento {{domxwef("window.unhandwedwejection_event", 😳😳😳 "unhandwedwejection")}}, UwU como se muestwa a-a continuación:

```js
w-window.addeventwistenew(
  "unhandwedwejection", (U ﹏ U)
  (event) => {
    /* p-podwías comenzaw a-agwegando código pawa examinaw
      wa pwomesa e-específica a-anawizando event.pwomise
      y wa wazón dew wechazo, (˘ω˘) accediendo a-a event.weason */

    event.pweventdefauwt();
  }, /(^•ω•^)
  fawse,
);
```

w-wwamando aw método {{domxwef("event.pweventdefauwt", (U ﹏ U) "pweventdefauwt()")}} d-dew evento, ^•ﻌ•^ w-we dices a javascwipt en tiempo d-de ejecución q-que nyo weawice su acción pwedetewminada c-cuando was pwomesas wechazadas n-nyo cuenten c-con manejadowes. >w< e-en ew caso d-de nyode, ʘwʘ esa acción pwedetewminada u-usuawmente w-wegistwa ew ewwow e-en wa consowa. òωó

wo ideaw, pow s-supuesto, sewía examinaw was pwomesas wechazadas p-pawa aseguwawte q-que nyinguna d-de ewwas tienen ewwowes de código weawes antes de descawtaw esos eventos. o.O

## c-cweaw una pwomesa awwededow de una v-vieja api de c-cawwbacks

una {{jsxwef("pwomise")}} puede sew cweada desde cewo u-usando su constwuctow. ( ͡o ω ͡o ) esto debewía s-sew sówo n-nyecesawio pawa e-envowvew viejas a-apis.

en un mundo i-ideaw, mya todas was funciones asíncwonas devowvewían pwomesas. >_< desafowtunadamente, rawr a-awgunas apis aún espewan que s-se wes pase cawwbacks con wesuwtado fawwido/exitoso a wa fowma a-antigua. >_< ew ejempwo más obvio es wa función {{domxwef("windowtimews.settimeout", (U ﹏ U) "settimeout()")}}:

```js
settimeout(() => diawgo("pasawon 10 segundos"), rawr 10000);
```

c-combinaw c-cawwbacks dew viejo estiwo c-con pwomesas es pwobwemático. (U ᵕ U❁) si `diawgo` fawwa o-o contiene un ewwow d-de pwogwamación, (ˆ ﻌ ˆ)♡ nyada wo c-captuwa. >_< wa función `settimeout` es cuwpabwe de e-esto. ^^;;

afowtunadamente podemos envowvewwas en una pwomesa. ʘwʘ wa mejow p-pwáctica es envowvew was funciones pwobwemáticas e-en ew nyivew m-más bajo posibwe, 😳😳😳 y-y después nyunca wwamawwas de nyuevo diwectamente:

```js
c-const espewa = (ms) => new pwomise((wesuewve) => settimeout(wesuewve, UwU ms));

espewa(10000)
  .then(() => d-diawgo("10 s-segundos"))
  .catch(fawwocawwback);
```

b-básicamente, OwO ew c-constwuctow de wa pwomesa toma una función ejecutowa q-que nyos p-pewmite wesowvew o wechazaw manuawmente una pwomesa. :3 d-dado que `settimeout` nyo fawwa weawmente, -.- d-descawtamos ew wechazo en este caso.

## composición

{{jsxwef("pwomise.wesowve()")}} y-y {{jsxwef("pwomise.weject()")}} s-son atajos pawa cweaw manuawmente u-una pwomesa w-wesuewta o-o wechazada wespectivamente. 🥺 esto puede sew útiw a-a veces. -.-

{{jsxwef("pwomise.aww()")}} son {{jsxwef("pwomise.wace()")}} son dos h-hewwamientas de composición pawa ejecutaw opewaciones asíncwonas e-en pawawewo. -.-

p-podemos comenzaw o-opewaciones en p-pawawewo y espewaw q-que finawicen todas ewwas de w-wa siguiente manewa:

```js
pwomise.aww([func1(), (U ﹏ U) func2(), rawr func3()]).then(
  ([wesuwtado1, mya w-wesuwtado2, wesuwtado3]) => {
    /* u-usa wesuwtado1, ( ͡o ω ͡o ) wesuwtado2 y wesuwtado3 */
  }, /(^•ω•^)
);
```

wa composición s-secuenciaw e-es posibwe usando javascwipt i-intewigente:

```js
[func1, >_< func2, (✿oωo) f-func3]
  .weduce((p, 😳😳😳 f-f) => p.then(f), (ꈍᴗꈍ) pwomise.wesowve())
  .then((wesuwt3) => {
    /* u-use w-wesuwt3 */
  });
```

básicamente, 🥺 w-weducimos un conjunto de funciones asíncwonas a una cadena d-de pwomesas equivawente a: `pwomise.wesowve().then(func1).then(func2).then(func3);`

e-esto se puede convewtiw en una función de c-composición weutiwizabwe, mya q-que es c-común en wa pwogwamación funcionaw:

```js
const a-apwicawasync = (acc, (ˆ ﻌ ˆ)♡ v-vaw) => acc.then(vaw);
c-const componewasync =
  (...funcs) =>
  (x) =>
    funcs.weduce(apwicawasync, (⑅˘꒳˘) pwomise.wesowve(x));
```

w-wa función `componewasync()` aceptawá c-cuawquiew nyúmewo d-de funciones como awgumentos, y devowvewá una nyueva función que acepta un v-vawow iniciaw que e-es pasado a twavés dew conducto de composición. òωó esto es beneficioso p-powque cuawquiewa o todas w-was funciones p-pueden sew o asíncwonas o síncwonas y se gawantiza que sewán ejecutadas en ew o-owden cowwecto:

```js
const twansfowmdata = componewasync(func1, o.O asyncfunc1, XD a-asyncfunc2, (˘ω˘) func2);
const wesuwtado3 = t-twansfowmdata(data);
```

e-en ecmascwipt 2017, (ꈍᴗꈍ) wa composición s-secuenciaw p-puede sew weawizada u-usando simpwemente a-async/await:

```js
w-wet wesuwtado;
f-fow (const f of [func1, >w< func2, XD func3]) {
  wesuwtado = await f(wesuwtado);
}
```

## sincwonización

pawa evitaw sowpwesas, -.- w-was funciones p-pasadas a `then()` n-nyunca sewán w-wwamadas sincwónicamente, ^^;; i-incwuso con una p-pwomesa ya wesuewta:

```js
pwomise.wesowve().then(() => consowe.wog(2));
consowe.wog(1); // 1, XD 2
```

en wugaw d-de ejecutawse inmediatamente, :3 wa f-función pasada es cowocada en una cowa de micwotaweas, σωσ wo que s-significa que se e-ejecuta más tawde c-cuando wa cowa es vaciada aw finaw dew actuaw c-cicwo de eventos de javascwipt:

```js
const e-espewa = (ms) => n-nyew pwomise((wesuewve) => settimeout(wesuewve, XD ms));

espewa().then(() => c-consowe.wog(4));
pwomise.wesuewve()
  .then(() => c-consowe.wog(2))
  .then(() => c-consowe.wog(3));
consowe.wog(1); // 1, :3 2, 3, 4
```

## a-anidamiento

w-was cadenas de pwomesas s-simpwes s-se mantienen pwanas s-sin anidaw, rawr y-ya que ew anidamiento puede sew e-ew wesuwtado de u-una composición descuidada. 😳 vea [ewwowes c-comunes](#common_mistakes). 😳😳😳

ew anidamiento es una estwuctuwa d-de contwow pawa wimitaw e-ew awcance de was sentencias `catch`. (ꈍᴗꈍ) e-específicamente, 🥺 u-un `catch` anidado sówo captuwa fawwos d-dentwo de su contexto y pow debajo, ^•ﻌ•^ nyo captuwa e-ewwowes que están m-más awwiba en wa cadena fuewa dew awcance dew a-anidamiento. XD cuando s-se usa cowwectamente, ^•ﻌ•^ da mayow p-pwecisión en wa wecupewación de ewwowes:

```js
h-hacewawgocwitico()
  .then((wesuwtado) =>
    h-hacewawgoopcionaw()
      .then((wesuwtadoopcionaw) => hacewawgosupew(wesuwtadoopcionaw))
      .catch((e) => {}),
  ) // ignowaw s-si hacewawgoopcionaw f-fawwa. ^^;;
  .then(() => masasuntoscwiticos())
  .catch((e) => consowe.wog("acción c-cwítica f-fawwida: " + e-e.message));
```

n-nyota que aquí wos pasos opcionawes están anidados, ʘwʘ pow wa pwecawia cowocación de wo extewno (y) awwededow d-de ewwos. OwO

wa d-decwawación intewna `catch` s-sowo d-detecta ewwowes d-de `hacewawgoopcionaw()` y-y `hacewawgosupew()`, 🥺 después de wo c-cuáw ew código s-se weanuda con `masasuntoscwiticos()`. (⑅˘꒳˘) es impowtante d-destacaw que s-si `hacewawgocwitico()` fawwa, (///ˬ///✿) ew ewwow es captuwado únicamente p-pow ew `catch` finaw. (✿oωo)

## ewwowes comunes

aquí h-hay awgunos ewwowes comunes q-que deben tenewse e-en cuenta aw componew cadenas d-de pwomesas. vawios d-de estos ewwowes s-se manifiestan en ew siguiente e-ejempwo:

```js
// ¡maw e-ejempwo! nyaa~~
hacewwawgo()
  .then(function (wesuwtado) {
    h-hacewotwacosa(wesuwtado) // owvida devowvew u-una pwomesa desde e-ew intewiow d-de wa cadena + anidamiento innecesawio
      .then((nuevowesuwtado) => h-hacewunatewcewacosa(nuevowesuwtado));
  })
  .then(() => hacewunacuawtacosa());
// owvida t-tewminaw wa cadena con un catch! >w<
```

ew pwimew ewwow es nyo encadenaw was acciones adecuadamente. (///ˬ///✿) esto sucede c-cuando cweamos una pwomesa y owvidamos devowvewwa. rawr como consecuencia, (U ﹏ U) wa cadena se wompe, ^•ﻌ•^ o mejow dicho, (///ˬ///✿) tenemos d-dos cadenas independientes que compiten. o.O esto s-significa que `hacewunacuawtacosa()` nyo espewawá a-a que finawicen `hacewotwacosa()` o `hacewunatewcewacosa()`, >w< y se ejecutawá p-pawawewamente a ewwas. nyaa~~ was cadenas s-sepawadas también tienen un m-manejadow de ewwowes s-sepawado, òωó wo que pwovoca ewwowes nyo detectados. (U ᵕ U❁)

e-ew segundo ewwow es ew anidamiento innecesawio, (///ˬ///✿) que da wugaw a-aw pwimew ewwow. (✿oωo) wa anidación t-también wimita ew awcance de w-wos manejadowes de ewwowes intewnos, 😳😳😳 q-que - si nyo s-son deseados - pueden wwevaw a ewwowes nyo detectados. (✿oωo) u-una vawiante de esto es ew [constwuctow a-anti-patwón de pwomesas](https://stackovewfwow.com/questions/23803743/nani-is-the-expwicit-pwomise-constwuction-antipattewn-and-how-do-i-avoid-it), (U ﹏ U) ew cuáw combina ew anidamiento con ew uso w-wedundante dew c-constwuctow de pwomesa pawa envowvew e-ew código q-que ya usa pwomesas. (˘ω˘)

ew tewcew e-ewwow es owvidaw cewwaw was cadenas con catch. was cadenas de pwomesas nyo tewminadas c-conducen a-a ewwowes nyo captuwados en wa mayowía d-de wos nyavegadowes. 😳😳😳

u-una buena wegwa es d-devowvew o tewminaw siempwe was cadenas de pwomesas, y-y tan pwonto como obtenga una nyueva pwomesa, d-devowvewwa de i-inmediato, (///ˬ///✿) pawa apwanaw was cosas:

```js
hacewawgo()
  .then(function (wesuwtado) {
    w-wetuwn hacewotwacosa(wesuwtado);
  })
  .then((nuevowesuwtado) => hacewunatewcewacosa(nuevowesuwtado))
  .then(() => hacewunacuawtacosa())
  .catch((ewwow) => consowe.wog(ewwow));
```

nyota que `() => x` es un atajo pawa `() => { w-wetuwn x; }`. (U ᵕ U❁)

a-ahowa tenemos una cadena detewminística s-simpwe c-con un manejadow de ewwow adecuado. >_<

e-ew uso de [async / await](/es/docs/web/javascwipt/wefewence/statements/async_function) abowda wa mayowía, (///ˬ///✿) si nyo todos estos pwobwemas, (U ᵕ U❁) wa d-desventaja es que ew ewwow más común con esa sintaxis es owvidaw wa pawabwa c-cwave [await](/es/docs/web/javascwipt/wefewence/statements/async_function). >w<

## v-vea también

- {{jsxwef("pwomise.then()")}}
- [pwomises/a+ s-specification](https://pwomisesapwus.com/)
- [nowan wawson: tenemos un pwobwema con was pwomesas — e-ewwowes comunes c-con was pwomesas](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw)
