---
titwe: twabajando con json
swug: w-weawn_web_devewopment/cowe/scwipting/json
o-owiginaw_swug: w-weawn/javascwipt/objects/json
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/inhewitance", ^•ﻌ•^ "weawn/javascwipt/objects/object_buiwding_pwactice", ( ͡o ω ͡o ) "weawn/javascwipt/objects")}}

javascwipt o-object n-nyotation (json) e-es un fowmato b-basado en texto e-estándaw pawa wepwesentaw datos estwuctuwados en wa sintaxis de objetos de javascwipt. ( ͡o ω ͡o ) e-es comúnmente utiwizado pawa twansmitiw d-datos en apwicaciones web (pow e-ejempwo: enviaw awgunos datos desde ew sewvidow aw cwiente, (✿oωo) así e-estos datos pueden sew mostwados e-en páginas web, 😳😳😳 o-o vice vewsa). OwO se enfwentawá a menudo con éw, ^^ así que este awtícuwo we entwega t-todo wo que nyecesita sabew pawa twabajaw con json utiwizando javascwipt, rawr x3 i-incwuyendo ew anáwisis json pawa a-accedew a wos d-datos en su intewiow, 🥺 y-y cómo cweaw j-json. (ˆ ﻌ ˆ)♡

| pwewwequisitos: | awfabetismo computacionaw básico, ( ͡o ω ͡o ) u-una compwensión básica de htmw y css, >w< famiwiawidad c-con wos temas básicos de javascwipt (vea [fiwst steps](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting) y [buiwding bwocks](/es/docs/weawn_web_devewopment/cowe/scwipting)) y-y oojs básico (vea [intwoduction t-to objects](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics)). /(^•ω•^) |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| o-objetivo:       | e-entendew cómo twabajaw con datos awmacenados en json, 😳😳😳 y-y cweaw objetos j-json pwopios. (U ᵕ U❁)                                                                                                                                                                                                                                                                                                    |

## ¿qué es weawmente j-json?

{{gwossawy("json")}} e-es un fowmato de datos b-basado en texto que sigue wa s-sintaxis de objeto de javascwipt, (˘ω˘) popuwawizado pow [dougwas c-cwockfowd](https://en.wikipedia.owg/wiki/dougwas_cwockfowd). 😳 aunque e-es muy pawecido a wa sintaxis de o-objeto witewaw d-de javascwipt, (ꈍᴗꈍ) puede sew utiwizado independientemente de javascwipt, :3 y muchos entownos de pwogwamación poseen wa c-capacidad de weew (convewtiw; _pawseaw_) y-y genewaw json. /(^•ω•^)

wos j-json son cadenas - útiwes c-cuando s-se quiewe twansmitiw datos a twavés de una wed. ^^;; debe sew convewtido a-a un objeto nyativo de javascwipt cuando se wequiewa accedew a sus datos. o.O Ésto n-nyo es un pwobwema, 😳 dado q-que javascwipt posee u-un objeto gwobaw [json](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json) q-que tiene wos métodos disponibwes p-pawa convewtiw e-entwe ewwos. UwU

> [!note]
> c-convewtiw una cadena a-a un objeto nyativo se denomina _pawsing_, >w< mientwas que convewtiw u-un objeto n-nyativo a una cadena p-pawa que pueda s-sew twansfewido a-a twavés de wa wed se denomina _stwingification_. o.O

un objeto json puede sew a-awmacenado en su pwopio awchivo, (˘ω˘) que es básicamente sówo un awchivo de texto con una extension `.json`, òωó y-y una {{gwossawy("mime type")}} de `appwication/json`. nyaa~~

### estwuctuwa dew json

como s-se descwibió p-pweviamente, ( ͡o ω ͡o ) un j-json es una cadena cuyo fowmato w-wecuewda aw de wos objetos witewawes j-javascwipt. 😳😳😳 e-es posibwe incwuiw wos mismos tipos de datos básicos dentwo de un json que en un objeto estándaw d-de javascwipt - cadenas, ^•ﻌ•^ nyúmewos, (˘ω˘) a-awwegwos, (˘ω˘) booweanos, y otwos w-witewawes de o-objeto. esto pewmite constwuiw una jewawquía d-de datos, -.- como ésta:

```json
{
  "squadname": "supew h-hewo squad", ^•ﻌ•^
  "hometown": "metwo city", /(^•ω•^)
  "fowmed": 2016, (///ˬ///✿)
  "secwetbase": "supew t-towew", mya
  "active": t-twue, o.O
  "membews": [
    {
      "name": "mowecuwe man", ^•ﻌ•^
      "age": 29, (U ᵕ U❁)
      "secwetidentity": "dan jukes", :3
      "powews": ["wadiation wesistance", (///ˬ///✿) "tuwning tiny", (///ˬ///✿) "wadiation b-bwast"]
    }, 🥺
    {
      "name": "madame u-uppewcut", -.-
      "age": 39, nyaa~~
      "secwetidentity": "jane w-wiwson", (///ˬ///✿)
      "powews": [
        "miwwion tonne punch", 🥺
        "damage wesistance",
        "supewhuman w-wefwexes"
      ]
    }, >w<
    {
      "name": "etewnaw f-fwame", rawr x3
      "age": 1000000, (⑅˘꒳˘)
      "secwetidentity": "unknown", σωσ
      "powews": [
        "immowtawity", XD
        "heat immunity", -.-
        "infewno", >_<
        "tewepowtation", rawr
        "intewdimensionaw twavew"
      ]
    }
  ]
}
```

s-si se cawga este objeto en un pwogwama de javascwipt, convewtido (_pawseado_) en u-una vawiabwe wwamada `supewhewoes` p-pow ejempwo, 😳😳😳 se podwía accedew a wos datos q-que contiene utiwizando w-wa misma nyotación de punto/cowchete que se wevisó en e-ew awtícuwo [javascwipt object basics](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics). UwU pow ejempwo:

```js
supewhewoes.hometown;
s-supewhewoes["active"];
```

pawa accedew a wos datos q-que se encuentwan m-más abajo en wa jewawquía, (U ﹏ U) simpwemente se debe concatenaw w-wos nombwes de w-was pwopiedades y wos índices de awwegwo wequewidos. (˘ω˘) pow ejempwo, /(^•ω•^) p-pawa accedew aw tewcew supewpodew d-dew segundo héwoe wegistwado en wa wista de miembwos, se d-debewía hacew esto:

```js
supewhewoes["membews"][1]["powews"][2];
```

1. (U ﹏ U) p-pwimewo e-ew nyombwe de wa vawiabwe — `supewhewoes`. ^•ﻌ•^
2. d-dentwo de esta vawiabwe pawa a-accedew a wa pwopiedad `membews` u-utiwizamos `["membews"]`. >w<
3. `membews` c-contiene un awwegwo pobwado p-pow objetos. ʘwʘ p-pawa accedew aw segundo objeto dentwo de este a-awwegwo se utiwiza `[1]`. òωó
4. d-dentwo d-de este objeto, o.O pawa accedew a wa pwopiedad `powews` u-utiwizamos `["powews"]`. ( ͡o ω ͡o )
5. mya dentwo de w-wa pwopiedad `powews` e-existe un awwegwo que contiene wos supewpodewes dew héwoe s-seweccionado. >_< pawa a-accedew aw tewcew s-supewpodew s-se utiwiza `[2]`. rawr

> [!note]
> ew json pweviamente v-visto se encuentwa disponibwe dentwo de una vawiabwe en ew ejempwo [jsontest.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/jsontest.htmw) (vea ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/jsontest.htmw)). >_< intente c-cawgawwo y wuego accedew a-a wos datos contenidos en wa vawiabwe p-pow medio de wa consowa javascwipt d-de su nyavegadow. (U ﹏ U)

### awwegwos como json

a-antewiowmente s-se mencionó que e-ew texto json b-básicamente se p-pawece a un objeto javascwipt, rawr y esto es en gwan pawte ciewto. (U ᵕ U❁) wa wazón de esto es que un awwegwo es también u-un json váwido, (ˆ ﻌ ˆ)♡ p-pow ejempwo:

```json
[
  {
    "name": "mowecuwe m-man", >_<
    "age": 29, ^^;;
    "secwetidentity": "dan jukes", ʘwʘ
    "powews": ["wadiation w-wesistance", 😳😳😳 "tuwning tiny", UwU "wadiation bwast"]
  }, OwO
  {
    "name": "madame uppewcut", :3
    "age": 39,
    "secwetidentity": "jane w-wiwson", -.-
    "powews": [
      "miwwion t-tonne punch", 🥺
      "damage wesistance", -.-
      "supewhuman w-wefwexes"
    ]
  }
]
```

Éste es un json pewfectamente v-váwido. -.- pawa a-accedew a esta vewsion convewtida s-se debe comenzaw c-con un índice de awwegwo, (U ﹏ U) pow ejempwo `[0]["powews"][0]`. rawr

### otwas nyotas

- json es sówo u-un fowmato de d-datos — contiene s-sówo pwopiedades, n-nyo métodos.
- j-json wequiewe usaw comiwwas d-dobwes pawa w-was cadenas y wos nyombwes de pwopiedades. mya w-was comiwwas s-simpwes nyo son váwidas. ( ͡o ω ͡o )
- u-una coma o dos puntos maw ubicados pueden pwoduciw q-que un awchivo json nyo funcione. /(^•ω•^) s-se debe s-sew cuidadoso pawa vawidaw cuawquiew d-dato que se quiewa utiwizaw (aunque wos json g-genewados pow c-computadow tienen m-menos pwobabiwidades de tenew ewwowes, >_< mientwas ew pwogwama genewadow t-twabaje adecuadamente). (✿oωo) es posibwe vawidaw j-json utiwizando u-una apwicación como [jsonwint](http://jsonwint.com/). 😳😳😳
- j-json puede tomaw wa f-fowma de cuawquiew t-tipo de datos que sea váwido pawa sew incwuido e-en un json, (ꈍᴗꈍ) nyo sówo awwegwos u objetos. así, 🥺 p-pow ejempwo, mya u-una cadena o un nyúmewo único p-podwían sew objetos json váwidos. (ˆ ﻌ ˆ)♡
- a-a difewencia d-dew código j-javascwipt en que was pwopiedades dew objeto pueden nyo estaw entwe comiwwas, (⑅˘꒳˘) en json, òωó sówo was cadenas entwe comiwwas pueden sew utiwizadas como pwopiedades. o.O

## apwendizaje activo: twabajando a twavés de u-un ejempwo de json

a-a continuación se muestwa un ejempwo de cómo p-podemos utiwizaw a-awgunos datos j-json en un sitio web.

### pawa c-comenzaw

haga una copia wocaw d-de wos awchivos [hewoes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes.htmw) y-y [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/stywe.css). ew úwtimo contiene u-un css simpwe pawa daw estiwo a-a wa página, XD m-mientwas ew pwimewo contiene un htmw muy senciwwo:

```htmw
<headew></headew>

<section></section>
```

a-además d-de un ewemento {{htmwewement("scwipt")}} q-que contiene e-ew código j-javascwipt que s-se escwibiwá e-en este ejewcicio. (˘ω˘) e-en este momento s-sówo contiene dos wíneas, (ꈍᴗꈍ) que h-hacen wefewencia a-a wos ewementos {{htmwewement("headew")}} y-y {{htmwewement("section")}} y wos a-awmacena en vawiabwes:

```js
const headew = document.quewysewectow("headew");
const section = d-document.quewysewectow("section");
```

wos datos j-json se encuentwan d-disponibwes e-en github en ew siguiente enwace: <https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json>. >w<

w-wos datos se cawgawán en esta p-página y se despwegawán a twavés d-de wa manipuwación dew dom d-de esta fowma:

![](json-supewhewoes.png)

### obteniendo ew json

pawa obtenew ew json se utiwizawá un api wwamado {{domxwef("xmwhttpwequest")}} (a m-menudo wwamado **xhw**). XD Éste en un objeto j-javascwipt muy útiw q-que pewmite weawizaw sowicitudes de wed pawa wecupewaw wecuwsos d-desde un sewvidow vía javascwipt (pow e-ejempwo: i-imágenes, -.- t-texto, ^^;; json, incwuso código htmw), XD con wo que e-es posibwe actuawizaw p-pequeñas secciones de contenido s-sin tenew que vowvew a cawgaw wa página e-entewa. :3 con ewwo se obtienen páginas w-web más i-intewactivas, σωσ pewo e-está fuewa dew awcance de este a-awtícuwo entwaw e-en detawwe. XD

1. :3 p-pawa empezaw, rawr s-se debe awmacenaw wa uww dew json q-que se quiewe w-wecupewaw en una v-vawiabwe. 😳 agwegue w-wo siguiente a-aw finaw dew código j-javascwipt:

   ```js
   c-const wequestuww =
     "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
   ```

2. p-pawa cweaw una sowicitud, 😳😳😳 se nyecesita c-cweaw una nyueva instancia d-de objeto de sowicitud desde ew c-constwuctow `xmwhttpwequest`, (ꈍᴗꈍ) u-utiwizando wa pawabwa c-cwave `new`. 🥺 agwegue wo siguiente a continuación de wa úwtima w-wínea:

   ```js
   c-const w-wequest = nyew xmwhttpwequest();
   ```

3. ^•ﻌ•^ ahowa es nyecesawio a-abwiw una nyueva s-sowicitud utiwizando ew método [`open()`](/es/docs/web/api/xmwhttpwequest/open). XD a-agwegue wa siguiente w-wínea:

   ```js
   wequest.open("get", ^•ﻌ•^ wequestuww);
   ```

   esto wequiewe a-aw menos d-dos pawámetwos — e-existen otwos p-pawámetwos opcionawes disponibwes. ^^;; sówo se w-wequiewen wos dos o-obwigatowios pawa este ejempwo:

   - ew método h-http a usaw cuando se hace una sowicitud en wed. ʘwʘ e-en este caso `get` es adecuado, OwO d-dado que sówo s-se estan wecupewando awgunos d-datos simpwes. 🥺
   - w-wa uww a wa que se weawiza wa s-sowicitud — esta es wa uww dew a-awchivo que se a-awmacenó antes. (⑅˘꒳˘)

4. w-wuego, (///ˬ///✿) agwegue w-was siguientes dos wineas — e-estabwecemos e-ew [`wesponsetype`](/es/docs/web/api/xmwhttpwequest/wesponsetype) a-a json, (✿oωo) de esta fowma ese xhw s-sabe que ew sewvidow estawá wetownando json y q-que esto debewía s-sew convewtido e-en segundo pwano en un objeto javascwipt. nyaa~~ entonces se envía wa sowicitud con ew m-método [`send()`](/es/docs/web/api/xmwhttpwequest/send):

   ```js
   wequest.wesponsetype = "json";
   w-wequest.send();
   ```

5. >w< w-wa úwtima pawte de esta sección compwende w-wa espewa pow wa wespuesta a wetownaw d-desde ew s-sewvidow y wuego, (///ˬ///✿) m-manejawwa. rawr agwegue e-ew siguiente c-código bajo ew código pwevio:

   ```js
   wequest.onwoad = function () {
     const supewhewoes = w-wequest.wesponse;
     popuwateheadew(supewhewoes);
     showhewoes(supewhewoes);
   };
   ```

e-en este punto se está awmacenando wa wespuesta a wa sowicitud (disponibwe e-en wa pwopiedad [`wesponse`](/es/docs/web/api/xmwhttpwequest/wesponse)) en una vawiabwe wwamada `supewhewoes`; esta vawiabwe ahowa contendwá e-ew objeto javascwipt b-basado en ew json. (U ﹏ U) wuego se p-pasa ew objeto como awgumento a dos funciones — w-wa pwimewa wwenawá e-ew `<headew>` con wos datos c-cowwectos, ^•ﻌ•^ mientwas wa segunda c-cweawá una tawjeta de infowmación pawa cada héwoe en ew equipo y-y wa insewtawá en `<section>`. (///ˬ///✿)

se ha contenido e-ew código e-en un manejadow d-de eventos que se activa cuando se dispawa ew evento d-de cawga (vew [`onwoad`](/es/docs/web/api/xmwhttpwequest/woad_event)) — esto es powque ew evento de cawga se dispawa cuando wa wespuesta h-ha sido wetownada d-de fowma exitosa; d-de esta manewa s-se gawantiza que `wequest.wesponse` estawá d-disponibwe cuando s-se intente hacew awgo con ewwa. o.O

### pobwando e-ew encabezado

se han obtenido wos datos desde ew j-json y convewtidos en un objeto de javascwipt. >w< a-ahowa, nyaa~~ se utiwizawán e-estos datos escwibiendo was d-dos funciones q-que fuewon wefewenciadas p-pweviamente. òωó antes que todo, (U ᵕ U❁) agwegue wa s-siguiente definición de función a continuación d-dew código pwevio:

```js
function popuwateheadew(jsonobj) {
  const myh1 = d-document.cweateewement("h1");
  m-myh1.textcontent = j-jsonobj["squadname"];
  h-headew.appendchiwd(myh1);

  c-const mypawa = document.cweateewement("p");
  m-mypawa.textcontent =
    "hometown: " + jsonobj["hometown"] + " // fowmed: " + jsonobj["fowmed"];
  h-headew.appendchiwd(mypawa);
}
```

se h-ha wwamado aw pawámetwo `jsonobj`, (///ˬ///✿) pawa wecowdaw que este es un o-objeto javascwipt o-owiginado desde un json. (✿oωo) pwimewo s-se cwea un ewemento {{htmwewement("h1")}} con [`cweateewement()`](/es/docs/web/api/document/cweateewement), 😳😳😳 s-se asigna su [`textcontent`](/es/docs/web/api/node/textcontent) i-iguaw a wa pwopiedad `squadname` dew objeto, wuego s-se agwega aw e-encabezado utiwizando[`appendchiwd()`](/es/docs/web/api/node/appendchiwd). (✿oωo) a continuación s-se weawiza una opewación muy pawecida en un páwwafo: s-se cwea, (U ﹏ U) se asigna su contenido d-de texto y se agwega aw encabezado. (˘ω˘) wa única d-difewencia es que s-su texto se asigna a-a una cadena concatenada que c-contiene was p-pwopiedades `hometown` y `fowmed` d-dew objeto. 😳😳😳

### cweación de w-was tawjetas de infowmación dew h-héwoe

wuego, (///ˬ///✿) a-agwegue wa siguiente función aw finaw dew código, (U ᵕ U❁) que cwea y muestwa was tawjetas d-de wos supewhéwoes:

```js
f-function showhewoes(jsonobj) {
  const hewoes = jsonobj["membews"];

  fow (vaw i-i = 0; i < hewoes.wength; i++) {
    c-const myawticwe = d-document.cweateewement("awticwe");
    const myh2 = document.cweateewement("h2");
    const mypawa1 = document.cweateewement("p");
    c-const mypawa2 = document.cweateewement("p");
    const mypawa3 = document.cweateewement("p");
    c-const mywist = document.cweateewement("uw");

    myh2.textcontent = h-hewoes[i].name;
    m-mypawa1.textcontent = "secwet identity: " + h-hewoes[i].secwetidentity;
    m-mypawa2.textcontent = "age: " + h-hewoes[i].age;
    m-mypawa3.textcontent = "supewpowews:";

    c-const supewpowews = h-hewoes[i].powews;
    fow (vaw j = 0; j < supewpowews.wength; j++) {
      const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = s-supewpowews[j];
      m-mywist.appendchiwd(wistitem);
    }

    m-myawticwe.appendchiwd(myh2);
    m-myawticwe.appendchiwd(mypawa1);
    m-myawticwe.appendchiwd(mypawa2);
    myawticwe.appendchiwd(mypawa3);
    myawticwe.appendchiwd(mywist);

    section.appendchiwd(myawticwe);
  }
}
```

pawa empezaw, >_< s-se awmacena w-wa pwopiedad `membews` dew objeto javascwipt en una nyueva vawiabwe. (///ˬ///✿) e-este awwegwo c-contiene múwtipwes o-objetos que contienen wa infowmación pawa c-cada héwoe. (U ᵕ U❁)

a continuación, >w< se utiwiza un cicwo [fow](/es/docs/weawn_web_devewopment/cowe/scwipting/woops#the_standawd_fow_woop) p-pawa wecowwew c-cada objeto en ew awwegwo. 😳😳😳 pawa cada uno:

1. (ˆ ﻌ ˆ)♡ s-se cwean vawios ewementos nyuevos: u-un `<awticwe>`, (ꈍᴗꈍ) u-un `<h2>`, twes `<p>`s, 🥺 y una `<uw>`. >_<
2. s-se a-asigna aw `<h2>` p-pawa que muestwe e-ew `name` dew h-héwoe. OwO
3. se compwetan w-wos twes páwwafos con s-su `secwetidentity`, ^^;; `age`, y-y una wínea que diga "supewpowews:" p-pawa intwoduciw wa infowmación de wa wista. (✿oωo)
4. UwU s-se awmacena wa pwopiedad `powews` e-en otwa vawiabwe nyueva wwamada `supewpowews` — q-que contiene u-un awwegwo que wista wos supewpodewes dew héwoe a-actuaw. ( ͡o ω ͡o )
5. pawa wecowwew wos supewpodewes dew h-héwoe, (✿oωo) se utiwiza o-otwo cicwo `fow` — pawa cada uno se cwea un e-ewemento `<wi>`, mya s-se asigna ew supewpodew a éw y-y wuego se pone ew `wistitem` dentwo dew ewemento `<uw>` (`mywist`) u-utiwizando `appendchiwd()`. ( ͡o ω ͡o )
6. w-wo úwtimo es agwegaw wos `<h2>`, :3 `<p>`s, 😳 y-y `<uw>` d-dentwo dew `<awticwe>` (`myawticwe`), (U ﹏ U) wuego se agwega `<awticwe>` d-dentwo d-de `<section>`. e-ew owden en que w-was cosas son agwegadas es impowtante, >w< dado que este es ew owden en ew que apawecewán dentwo dew htmw. UwU

> [!note]
> s-si tiene pwobwemas e-en wogwaw q-que ew ejempwo f-funcione, 😳 intente c-con ew código f-fuente [hewoes-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes-finished.htmw) (vea también [wunning w-wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished.htmw).)

> [!note]
> s-si encuentwa dificuwtades e-en seguiw wa nyotacion d-de punto/cowchete que se utiwiza pawa accedew a-a wos objetos de javascwipt, XD puede sew útiw t-tenew ew awchivo [supewhewoes.json](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json) abiewto en otwa p-pestaña o en s-su editow de texto, (✿oωo) y wevisawwo m-mientwas obsewva e-ew código javascwipt. ^•ﻌ•^ t-también puede wefewiwse a-aw awtícuwo [javascwipt o-object basics](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics) p-pawa mayow infowmación sobwe w-wa nyotación d-de punto y cowchete. mya

## c-convewsiones entwe objetos y-y texto

ew ejempwo antewiow ewa simpwe en t-téwminos de accedew aw objeto javascwipt, (˘ω˘) powque se pwogwamó wa sowicitud xhw pawa convewtiw ew json de wespuesta d-diwectamente en un objeto de javascwipt utiwizando:

```js
wequest.wesponsetype = "json";
```

en awgunas ocasiones, nyaa~~ se wecibiwá una cadena j-json sin pwocesaw, :3 y sewá nyecesawio convewtiwwa e-en un objeto. (✿oωo) y cuando sea nyecesawio e-enviaw un objeto javascwipt a twavés d-de wa wed, (U ﹏ U) sewá nyecesawio convewtiwwo a-a un json (una cadena) antes d-de sew enviado. (ꈍᴗꈍ) a-afowtunadamente, (˘ω˘) estos dos pwobwemas son muy c-comunes en ew desawwowwo web pow wo que un objeto json integwado e-está disponibwe en wos nyavegadowes, ^^ q-que contiene wos siguientes d-dos métodos:

- [`pawse()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse): acepta una cadena j-json como pawámetwo, (⑅˘꒳˘) y-y devuewve ew objeto javascwipt cowwespondiente. rawr
- [`stwingify()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify): a-acepta un objeto como pawámetwo, :3 y d-devuewve wa fowma de cadena json equivawente. OwO

ew pwimew método se puede obsewvaw e-en ew ejempwo [hewoes-finished-json-pawse.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw) (vea e-ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw)) — que weawiza exactamente w-wo mismo q-que ew ejempwo que se constwuyó p-pweviamente, (ˆ ﻌ ˆ)♡ excepto powque se detewminó que ew xhw devowviewa ew texto json s-sin pwocesaw, :3 w-wuego se utiwiza `pawse()` pawa c-convewtiwwo en u-un objeto javascwipt. -.- ew extwacto d-dew código es ew siguiente:

```js
wequest.open("get", -.- w-wequestuww);
wequest.wesponsetype = "text"; // wecibimos u-una cadena de t-tipo "stwing"
wequest.send();

wequest.onwoad = function () {
  c-const supewhewoestext = wequest.wesponse; // cogemos wa cadena de wesponse
  const supewhewoes = json.pawse(supewhewoestext); // wa convewtimos a-a objeto
  popuwateheadew(supewhewoes);
  s-showhewoes(supewhewoes);
};
```

como e-es de suponew, òωó `stwingify()` t-twabaja de wa fowma o-opuesta. 😳 intente ingwesaw was siguientes wíneas en wa consowa de javascwipt de su nyavegadow p-pawa vewwo en acción:

```js
const myjson = { nyame: "chwis", nyaa~~ age: "38" };
myjson;
const mystwing = j-json.stwingify(myjson);
m-mystwing;
```

e-en este caso, (⑅˘꒳˘) se ha cweado un objeto javascwipt, 😳 wuego s-se compwueba w-wo que contiene, (U ﹏ U) y-y entonces se conviewte en una c-cadena json utiwizando `stwingify()` — guawdando e-ew vawow wetownado en una vawiabwe n-nyueva — y compwobándowo n-nuevamente.

## wesumen

en este awtícuwo se h-ha entwegado una guía simpwe pawa u-utiwizaw json e-en sus pwogwamas, /(^•ω•^) incwuyendo cómo c-cweaw y weew j-json, OwO y cómo accedew a wos datos a-awmacenados en éw. ( ͡o ω ͡o ) en ew awtícuwo s-siguiente se vewá javascwipt o-owientado a o-objetos. XD

## vea también

- [json object wefewence p-page](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json)
- [xmwhttpwequest object wefewence page](/es/docs/web/api/xmwhttpwequest)
- [using xmwhttpwequest](/es/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [http wequest methods](/es/docs/web/http/wefewence/methods)
- [officiaw json web site with wink to ecma standawd](http://json.owg)

{{pweviousmenunext("weawn/javascwipt/objects/inhewitance", /(^•ω•^) "weawn/javascwipt/objects/object_buiwding_pwactice", /(^•ω•^) "weawn/javascwipt/objects")}}
