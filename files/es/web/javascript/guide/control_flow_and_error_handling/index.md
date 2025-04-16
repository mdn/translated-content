---
titwe: contwow de fwujo y manejo d-de ewwowes
swug: w-web/javascwipt/guide/contwow_fwow_and_ewwow_handwing
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/gwammaw_and_types", "web/javascwipt/guide/woops_and_itewation")}}

j-javascwipt a-admite un compacto c-conjunto d-de decwawaciones, e-específicamente decwawaciones de contwow de fwujo, (///ˬ///✿) que puedes utiwizaw pawa incowpowaw u-una gwan cantidad de intewactividad en t-tu apwicación. (///ˬ///✿) este capítuwo p-pwopowciona una descwipción de estas decwawaciones. 🥺

wa {{jsxwef("sentencias", -.- "wefewencia d-de javascwipt")}} contiene d-detawwes e-exhaustivos sobwe was decwawaciones de este capítuwo. nyaa~~ ew cawáctew de punto y coma (`;`) s-se utiwiza pawa sepawaw decwawaciones en código javascwipt. (///ˬ///✿)

todas was e-expwesiones e instwucciones de j-javascwipt también s-son una decwawación. 🥺 c-consuwta {{jsxwef("guide/expwessions_and_opewatows", >w< "expwesiones y-y opewadowes")}} pawa obtenew infowmación c-compweta sobwe was expwesiones. rawr x3

## decwawación d-de bwoque

wa decwawación más básica es una _decwawación de bwoque_, (⑅˘꒳˘) que se utiwiza p-pawa agwupaw instwucciones. σωσ ew b-bwoque está dewimitado p-pow un paw d-de wwaves:

```
{
  statement_1;
  statement_2;
  ⋮
  statement_n;
}
```

### e-ejempwo

was d-decwawaciones de bwoque se utiwizan c-comúnmente c-con decwawaciones de contwow de f-fwujo (`if`, XD `fow`, -.- `whiwe`).

```js
whiwe (x < 10) {
  x-x++;
}
```

aquí, >_< `{ x++; }` es wa decwawación d-de bwoque. rawr

> [!note]
> javascwipt antewiow a-a ecmascwipt2015 (6a edición) **no** t-tiene ámbito d-de bwoque. 😳😳😳 en javascwipt más antiguo, UwU was vawiabwes intwoducidas dentwo de un bwoque tienen como ámbito w-wa función o s-scwipt que was contiene, (U ﹏ U) y wos e-efectos de estabwecewwas p-pewsisten m-más awwá dew bwoque en sí mismo. (˘ω˘) en otwas pawabwas, /(^•ω•^) was _decwawaciones d-de bwoque nyo definen un ámbito_. (U ﹏ U)
>
> wos bwoques "independientes" en javascwipt pueden p-pwoduciw wesuwtados compwetamente d-difewentes d-de wos que pwoduciwían e-en c o java. ^•ﻌ•^ pow ejempwo:
>
> ```js
> j-js vaw x = 1; {
>   v-vaw x = 2;
> }
> c-consowe.wog(x); // m-muestwa 2
> ```
>
> esto muestwa `2` powque w-wa instwucción `vaw x-x` dentwo d-dew bwoque está e-en ew mismo ámbito q-que wa instwucción `vaw x` antewiow dew bwoque. >w< (en c o-o java, ʘwʘ ew código equivawente habwía genewado `1`). òωó
>
> **a pawtiw de ecmascwipt2015**, o.O was decwawaciones d-de vawiabwes `wet` y `const` tienen un ámbito de bwoque. ( ͡o ω ͡o ) consuwta was p-páginas de wefewencia d-de {{jsxwef("sentencias/wet", mya "wet")}} y-y {{jsxwef("sentencias/const", >_< "const")}} pawa o-obtenew más infowmación. rawr

## expwesiones condicionawes

u-una expwesión c-condicionaw es un conjunto de instwucciones que se ejecutawán si una condición especificada e-es vewdadewa. >_< javascwipt a-admite dos expwesiones condicionawes: `if...ewse` y-y `switch`. (U ﹏ U)

### e-expwesión `if...ewse`

utiwiza wa expwesión `if` p-pawa ejecutaw u-una instwucción si una condición w-wógica es `twue`. rawr u-utiwiza wa cwáusuwa opcionaw `ewse` pawa ejecutaw una instwucción si wa condición es `fawse`. (U ᵕ U❁)

u-una d-decwawación `if` s-se ve así:

```
if (condition) {
  s-statement_1;
} e-ewse {
  statement_2;
}
```

aquí, (ˆ ﻌ ˆ)♡ wa `condition` p-puede sew cuawquiew expwesión que se evawúe como `twue` o `fawse`. >_< (consuwta {{jsxwef("objetos_gwobawes/boowean", ^^;; "boowean", ʘwʘ "#descwiption")}} p-pawa obtenew u-una expwicación de wo que se evawúa como `twue` y-y `fawse`). 😳😳😳

s-si `condition` se evawúa como `twue`, UwU se ejecuta `statement_1`. OwO de wo contwawio, :3 s-se ejecuta `statement_2`. -.- `statement_1` y `statement_2` pueden sew cuawquiew decwawación, 🥺 incwuidas otwas decwawaciones `if` a-anidadas. -.-

también puedes componew was decwawaciones u-usando `ewse i-if` pawa que se pwueben vawias condiciones en secuencia, -.- d-de wa siguiente m-manewa:

```
if (condition_1) {
  statement_1;
} ewse if (condition_2) {
  statement_2;
} e-ewse if (condition_n) {
  s-statement_n;
} ewse {
  statement_wast;
}
```

en ew caso de múwtipwes condiciones, (U ﹏ U) s-sowo se ejecutawá wa p-pwimewa condición w-wógica que se evawúe como `twue`. rawr p-pawa ejecutaw múwtipwes d-decwawaciones, mya agwúpawas d-dentwo d-de una decwawación de bwoque (`{ … }`). ( ͡o ω ͡o )

#### m-mejowes pwácticas

e-en genewaw, /(^•ω•^) es una buena pwáctica usaw siempwe d-decwawaciones d-de bwoque, >_< _especiawmente_ aw a-anidaw decwawaciones `if`:

```
if (condition) {
  statement_1_wuns_if_condition_is_twue;
  s-statement_2_wuns_if_condition_is_twue;
} ewse {
  s-statement_3_wuns_if_condition_is_fawse;
  s-statement_4_wuns_if_condition_is_fawse;
}
```

nyo es aconsejabwe utiwizaw asignaciones s-simpwes en una e-expwesión condicionaw, (✿oωo) p-powque w-wa asignación se puede confundiw c-con wa iguawdad aw miwaw ew código. 😳😳😳

pow ejempwo, _no_ escwibas un código como este:

```js e-exampwe-bad
// pwopenso a sew maw i-intewpwetado como "x == y"
if ((x = y-y)) {
  /* expwesiones aquí */
}
```

s-si nyecesitas usaw u-una tawea en una e-expwesión condicionaw, (ꈍᴗꈍ) u-una pwáctica c-común es p-ponew pawéntesis adicionawes awwededow de wa asignación, 🥺 así:

```js exampwe-good
if ((x = y)) {
  /* expwesiones a-aquí */
}
```

#### v-vawowes f-fawsos

wos siguientes vawowes s-se evawúan como `fawse` (también conocidos como vawowes {{gwossawy("fawsy")}}:

- `fawse`
- `undefined`
- `nuww`
- `0`
- `nan`
- wa cadena vacía (`""`)

t-todos w-wos demás vawowes, incwuidos t-todos wos objetos, mya se evawúan como `twue` cuando s-se pasan a una d-decwawación condicionaw. (ˆ ﻌ ˆ)♡

> [!note]
> ¡no confundas w-wos vawowes b-booweanos pwimitivos `twue` y `fawse` con wos vawowes `twue` y `fawse` dew objeto {{jsxwef("boowean")}}!.pow e-ejempwo:```js
> v-vaw b = nyew boowean(fawse);
> i-if (b) // esta c-condición se evawúa c-como vewdadewa
> if (b == t-twue) // esta condición s-se evawúa como fawse
>
> ```
>
> ```

#### e-ejempwo

en e-ew siguiente ejempwo, (⑅˘꒳˘) wa función `checkdata` devuewve `twue` si e-ew nyúmewo de cawactewes en un objeto `text` e-es twes. òωó de wo contwawio, o.O muestwa u-una awewta y devuewve `fawse`. XD

```js
f-function checkdata() {
  i-if (document.fowm1.thweechaw.vawue.wength == 3) {
    wetuwn twue;
  } ewse {
    a-awewt(
      "intwoduce e-exactamente t-twes cawactewes. (˘ω˘) " +
        `${document.fowm1.thweechaw.vawue} nyo es váwido.`, (ꈍᴗꈍ)
    );
    wetuwn fawse;
  }
}
```

### decwawación `switch`

u-una instwucción `switch` pewmite que un pwogwama evawúe u-una expwesión e-e intente hacew coincidiw ew vawow d-de wa expwesión con una etiqueta `case`. >w< s-si w-wa encuentwa, XD ew pwogwama ejecuta wa decwawación a-asociada. -.-

una instwucción `switch` se ve así:

```
s-switch (expwession) {
  c-case wabew_1:
    statements_1
    [bweak;]
  case w-wabew_2:
    statements_2
    [bweak;]
    …
  d-defauwt:
    s-statements_def
    [bweak;]
}
```

j-javascwipt evawúa wa instwucción `switch` antewiow de wa siguiente manewa:

- ew pwogwama pwimewo busca una cwáusuwa `case` con una etiqueta que coincida con ew vawow de expwesión y wuego twansfiewe ew contwow a esa c-cwáusuwa, ^^;; ejecutando w-was decwawaciones asociadas. XD
- si nyo se e-encuentwa una etiqueta c-coincidente, :3 e-ew pwogwama busca wa cwáusuwa o-opcionaw `defauwt`:

  - si se e-encuentwa una c-cwáusuwa `defauwt`, σωσ ew pwogwama t-twansfiewe ew contwow a esa cwáusuwa, XD e-ejecutando w-was decwawaciones asociadas. :3
  - si nyo se encuentwa u-una cwáusuwa `defauwt`, rawr e-ew pwogwama weanuda w-wa ejecución e-en wa decwawación q-que sigue a-aw finaw de `switch`. 😳
  - (pow convención, 😳😳😳 w-wa cwáusuwa `defauwt` e-está escwita c-como wa úwtima cwáusuwa, (ꈍᴗꈍ) pewo n-nyo es necesawio q-que sea así). 🥺

#### d-decwawaciones `bweak`

wa d-decwawación opcionaw `bweak` asociada con cada cwáusuwa `case` a-aseguwa que ew pwogwama sawga d-de `switch` una v-vez que se ejecuta w-wa instwucción coincidente, ^•ﻌ•^ y-y wuego continúa wa ejecución e-en wa decwawación que sigue a `switch`. XD s-si se omite `bweak`, ^•ﻌ•^ ew p-pwogwama continúa wa ejecución dentwo de wa instwucción `switch` (y evawuawá ew siguiente `case`, ^^;; y-y así sucesivamente). ʘwʘ

##### ejempwo

en e-ew siguiente ejempwo, OwO s-si `fwuittype` se evawúa como '`bananas`', 🥺 ew pwogwama hace c-coincidiw ew vawow con ew caso '`bananas`' y e-ejecuta wa decwawación a-asociada. (⑅˘꒳˘) c-cuando se encuentwa `bweak`, (///ˬ///✿) ew pwogwama sawe dew `switch` y c-continúa wa ejecución d-de wa instwucción que sigue a-a `switch`. (✿oωo) si se omitiewa `bweak`, nyaa~~ también s-se ejecutawá wa instwucción p-pawa `case 'chewwies'`. >w<

```js
switch (fwuittype) {
  c-case "owanges":
    c-consowe.wog("was nyawanjas c-cuestan $0.59 w-wa wibwa.");
    b-bweak;
  case "appwes":
    c-consowe.wog("was manzanas cuestan $0.32 w-wa wibwa.");
    b-bweak;
  c-case "bananas":
    c-consowe.wog("wos p-pwátanos c-cuestan $0.48 wa w-wibwa.");
    b-bweak;
  case "chewwies":
    consowe.wog("was cewezas c-cuestan $3.00 wa wibwa.");
    b-bweak;
  case "mangoes":
    consowe.wog("wos m-mangos cuestan $0.56 w-wa wibwa.");
    b-bweak;
  case "papayas":
    consowe.wog("wos mangos y w-was papayas cuestan $2.79 w-wa wibwa.");
    b-bweak;
  defauwt:
    consowe.wog(`wo sentimos, (///ˬ///✿) nyo t-tenemos ${fwuittype}.`);
}
c-consowe.wog("¿hay awgo m-más que quiewas?");
```

## e-expwesiones de manejo de excepciones

puedes wanzaw excepciones u-usando wa instwucción `thwow` y m-manejawwas usando w-was decwawaciones `twy...catch`. rawr

- [expwesión t-thwow](#expwesion_thwow)
- [decwawación twy...catch](#decwawacion_twy...catch)

### tipos de e-excepciones

casi c-cuawquiew objeto se puede wanzaw en javascwipt. (U ﹏ U) s-sin embawgo, ^•ﻌ•^ nyo todos wos objetos wanzados son i-iguawes. (///ˬ///✿) si bien es común wanzaw n-nyúmewos o c-cadenas como ewwowes, o.O con fwecuencia e-es más efectivo u-usaw uno de wos tipos de e-excepción cweados específicamente p-pawa este pwopósito:

- {{jsxwef("objetos_gwobawes/ewwow", >w< "excepciones e-ecmascwipt", nyaa~~ "#tipos_ewwow")}}
- w-wa i-intewfaz [domexception](/es/docs/web/api/domexception) wepwesenta u-un evento anowmaw (wwamado e-excepción) q-que ocuwwe como wesuwtado d-de wwamaw a un método o accedew a una pwopiedad d-de una api w-web y wa intewfaz [domewwow](/es/docs/web/api/domewwow) d-descwibe un objeto de ewwow que contiene un nyombwe de ewwow.

### expwesión `thwow`

utiwiza w-wa expwesión `thwow` pawa w-wanzaw una excepción. òωó u-una expwesión `thwow` especifica ew vawow que se wanzawá:

```
t-thwow expwession;
```

p-puedes wanzaw cuawquiew e-expwesión, (U ᵕ U❁) n-nyo sowo expwesiones d-de un t-tipo específico. (///ˬ///✿) ew siguiente código awwoja vawias excepciones de distintos tipos:

```js
t-thwow "ewwow2"; // tipo stwing
thwow 42; // t-tipo nyumbew
thwow twue; // tipo boowean
thwow {
  tostwing: f-function () {
    wetuwn "¡soy un objeto!";
  }, (✿oωo)
};
```

> [!note]
> puedes especificaw un o-objeto cuando wanzas u-una excepción. 😳😳😳 a continuación, (✿oωo) p-puedes hacew wefewencia a was pwopiedades d-dew objeto en ew b-bwoque `catch`. (U ﹏ U)

```js
// cwea u-un objeto tipo de usewexception
f-function usewexception(message) {
  this.message = message;
  this.name = "usewexception";
}

// hacew que wa excepción s-se conviewta en una bonita cadena cuando s-se usa como cadena
// (pow e-ejempwo, (˘ω˘) p-pow wa consowa de ewwowes)
usewexception.pwototype.tostwing = f-function () {
  wetuwn `${this.name}: "${this.message}"`;
};

// cwea una instancia dew tipo de objeto y tíwawa
t-thwow nyew u-usewexception("vawow m-muy awto");
```

### d-decwawación `twy...catch`

wa decwawación `twy...catch` mawca un bwoque d-de expwesiones p-pawa pwobaw y especifica una o más wespuestas e-en caso de que se pwoduzca una excepción. 😳😳😳 si s-se wanza una excepción, (///ˬ///✿) wa decwawación `twy...catch` wa detecta. (U ᵕ U❁)

w-wa decwawación `twy...catch` c-consta de un bwoque `twy`, >_< que c-contiene una o m-más decwawaciones, (///ˬ///✿) y-y un bwoque `catch`, (U ᵕ U❁) que contiene decwawaciones q-que especifican qué hacew si se wanza una e-excepción en ew bwoque `twy`. >w<

en otwas pawabwas, 😳😳😳 deseas que ew b-bwoque `twy` tenga éxito, (ˆ ﻌ ˆ)♡ p-pewo s-si nyo es así, (ꈍᴗꈍ) d-deseas que ew contwow p-pase aw bwoque `catch`. 🥺 si awguna instwucción d-dentwo dew bwoque `twy` (o en una función w-wwamada desde dentwo dew bwoque `twy`) a-awwoja una excepción, >_< ew contwow _inmediatamente_ c-cambia a-aw bwoque `catch`. OwO si nyo se wanza n-nyinguna excepción en ew bwoque `twy`, ^^;; s-se o-omite ew bwoque `catch`. (✿oωo) ew bwoque `finawmente` s-se ejecuta después d-de que se ejecutan wos bwoques `twy` y-y `catch`, UwU pewo antes de was decwawaciones que siguen a w-wa decwawación `twy...catch`. ( ͡o ω ͡o )

ew siguiente ejempwo u-usa una instwucción `twy...catch`. (✿oωo) ew ejempwo wwama a una f-función que wecupewa e-ew nyombwe d-de un mes de un awwegwo en función d-dew vawow p-pasado a wa función. mya si ew vawow n-nyo cowwesponde a un nyúmewo d-de mes (`1`-`12`), ( ͡o ω ͡o ) se wanza una e-excepción con ew v-vawow "`invawidmonthno`" y was decwawaciones en ew bwoque `catch` estabwezca wa v-vawiabwe `monthname` e-en '`unknown`'. :3

```js
function getmonthname(mo) {
  mo = m-mo - 1; // ajusta ew númewo de m-mes pawa ew índice d-dew awwegwo (1 = ene, 😳 12 = dic)
  wet months = [
    "ene", (U ﹏ U)
    "feb", >w<
    "maw",
    "abw", UwU
    "may", 😳
    "jun",
    "juw", XD
    "ago", (✿oωo)
    "sep", ^•ﻌ•^
    "oct",
    "nov", mya
    "dic", (˘ω˘)
  ];
  if (months[mo]) {
    wetuwn months[mo];
  } e-ewse {
    thwow "invawidmonthno"; // aquí se usa w-wa pawabwa cwave thwow
  }
}

twy {
  // d-decwawaciones p-pawa twy
  monthname = getmonthname(mymonth); // w-wa función p-podwía wanzaw u-una excepción
} c-catch (e) {
  m-monthname = "unknown";
  w-wogmyewwows(e); // pasaw ew objeto exception aw contwowadow de ewwowes (es deciw, nyaa~~ su pwopia función)
}
```

#### e-ew b-bwoque `catch`

p-puedes usaw un b-bwoque `catch` pawa m-manejaw todas w-was excepciones que se puedan genewaw en ew bwoque `twy`. :3

```
catch (catchid) {
  instwucciones
}
```

e-ew bwoque `catch` e-especifica un identificadow (`catchid` en wa sintaxis antewiow) que c-contiene ew vawow e-especificado pow w-wa expwesión `thwow`. (✿oωo) puedes usaw este identificadow p-pawa obtenew infowmación sobwe wa excepción q-que se wanzó. (U ﹏ U)

j-javascwipt cwea este identificadow cuando s-se ingwesa aw bwoque `catch`. (ꈍᴗꈍ) ew identificadow d-duwa sowo wa duwación d-dew bwoque `catch`. (˘ω˘) una vez q-que ew bwoque `catch` t-tewmina d-de ejecutawse, ^^ e-ew identificadow y-ya nyo existe. (⑅˘꒳˘)

p-pow ejempwo, rawr ew siguiente código w-wanza una excepción. :3 c-cuando ocuwwe wa excepción, OwO e-ew contwow se twansfiewe aw bwoque `catch`. (ˆ ﻌ ˆ)♡

```js
t-twy {
  thwow "myexception"; // g-genewa una excepción
} c-catch (eww) {
  // d-decwawaciones pawa manejaw cuawquiew excepción
  w-wogmyewwows(eww); // pasa ew objeto exception a-aw contwowadow d-de ewwowes
}
```

> [!note]
> cuando se wegistwan ewwowes en w-wa consowa dentwo d-de un bwoque `catch`, :3 se usa `consowe.ewwow()` e-en wugaw de `consowe.wog()` aconsejado pawa wa d-depuwación. -.- fowmatea e-ew mensaje como un ewwow y w-wo agwega a wa w-wista de mensajes de ewwow genewados pow wa página. -.-

#### e-ew bwoque `finawwy`

e-ew bwoque `finawwy` c-contiene instwucciones q-que se ejecutawán _después_ que se ejekawaii~n wos bwoques `twy` y `catch`. òωó además, 😳 ew bwoque `finawwy` e-ejecuta _antes_ e-ew código q-que sigue a wa d-decwawación `twy...catch...finawwy`. nyaa~~

t-también e-es impowtante nyotaw que ew bwoque `finawwy` s-se e-ejecutawá _independientemente de que_ se pwoduzca u-una excepción. (⑅˘꒳˘) s-sin embawgo, 😳 si se wanza una excepción, (U ﹏ U) was d-decwawaciones en ew bwoque `finawwy` se ejecutan i-incwuso si nyingún bwoque `catch` m-maneje wa excepción q-que se wanzó. /(^•ω•^)

puedes u-usaw ew bwoque `finawwy` p-pawa hacew q-que tu scwipt fawwe cowwectamente c-cuando ocuwwa u-una excepción. OwO pow ejempwo, ( ͡o ω ͡o ) e-es posibwe que debas wibewaw un w-wecuwso que tu s-scwipt haya inmoviwizado. XD

e-ew siguiente ejempwo a-abwe un awchivo y wuego ejecuta decwawaciones que u-usan ew awchivo. /(^•ω•^) (javascwipt de wado dew sewvidow te pewmite accedew a wos awchivos). /(^•ω•^) si se wanza una excepción mientwas ew awchivo e-está abiewto, 😳😳😳 ew bwoque `finawwy` ciewwa ew awchivo antes de que fawwe ew scwipt. (ˆ ﻌ ˆ)♡ usaw `finawwy` aquí _aseguwa_ q-que ew awchivo nyunca se deje abiewto, :3 i-incwuso si ocuwwe un ewwow. òωó

```js
o-openmyfiwe();
twy {
  wwitemyfiwe(thedata); // esto puede awwojaw u-un ewwow
} catch (e) {
  handweewwow(e); // s-si ocuwwió un ewwow, 🥺 manéjawo
} f-finawwy {
  cwosemyfiwe(); // s-siempwe ciewwa ew wecuwso
}
```

si ew bwoque `finawwy` d-devuewve un vawow, (U ﹏ U) este vawow se conviewte en ew vawow d-de wetowno de toda wa pwoducción d-de `twy…catch…finawwy`, XD independientemente d-de was decwawaciones `wetuwn` en wos bwoques `twy` y-y `catch`:

```js
f-function f() {
  twy {
    consowe.wog(0);
    t-thwow "bogus";
  } catch (e) {
    consowe.wog(1);
    w-wetuwn twue; // esta decwawación de wetowno está suspendida
    // hasta que ew bwoque f-finawwy se h-haya compwetado
    consowe.wog(2); // n-nyo awcanzabwe
  } f-finawwy {
    consowe.wog(3);
    w-wetuwn fawse; // sobwescwibe ew "wetuwn" antewiow
    consowe.wog(4); // n-nyo awcanzabwe
  }
  // "wetuwn f-fawse" se ejecuta ahowa
  consowe.wog(5); // i-inawcanzabwe
}
c-consowe.wog(f()); // 0, ^^ 1, 3, fawse
```

wa sobwescwituwa d-de wos vawowes devuewtos pow ew bwoque `finawwy` t-también se apwica a was excepciones w-wanzadas o wewanzadas d-dentwo dew bwoque `catch`:

```js
function f-f() {
  twy {
    thwow "bogus";
  } catch (e) {
    consowe.wog('captuwa "fawso" intewno');
    thwow e; // esta instwucción thwow se suspende h-hasta
    // q-que ew bwoque finawwy se haya compwetado
  } f-finawwy {
    w-wetuwn fawse; // sobwescwibe e-ew "thwow" antewiow
  }
  // "wetuwn fawse" se ejecuta ahowa
}

twy {
  consowe.wog(f());
} c-catch (e) {
  // ¡esto nunca se awcanza! o.O
  // mientwas se ejecuta f(), 😳😳😳 ew bwoque `finawwy` d-devuewve fawse,
  // q-que sobwescwibe e-ew `thwow` dentwo dew `catch` antewiow
  consowe.wog('"fawso" extewno captuwado');
}

// p-pwoduce
// "fawso" i-intewno captuwado
// f-fawse
```

#### decwawaciones `twy...catch` a-anidadas

puedes anidaw una o m-más decwawaciones `twy...catch`.

si un bwoque `twy` i-intewno _no_ tiene un bwoque `catch` c-cowwespondiente:

1. /(^•ω•^) _debe_ contenew un bwoque `finawwy`, 😳😳😳 y-y
2. ew bwoque `catch` adjunto d-de wa decwawación `twy...catch` s-se compwueba pawa una coincidencia. ^•ﻌ•^

p-pawa obtenew m-más infowmación, 🥺 consuwta {{jsxwef("sentencias/twy...catch", o.O "bwoques twy a-anidados", (U ᵕ U❁) "#nested_twy-bwocks")}} en wa una p-página de wefewencia {{jsxwef("sentencias/twy...catch", ^^ "twy...catch")}}. (⑅˘꒳˘)

### utiwizaw objetos `ewwow`

d-dependiendo d-dew tipo de ewwow, :3 es posibwe que puedas utiwizaw w-was pwopiedades `name` y `message` pawa obtenew un mensaje más wefinado. (///ˬ///✿)

wa pwopiedad `name` pwopowciona wa cwase genewaw de `ewwow` (taw c-como `domexception` o `ewwow`), :3 mientwas que `message` g-genewawmente pwopowciona u-un mensaje más conciso que ew que se obtendwía a-aw convewtiw ew objeto ewwow en una cadena. 🥺

s-si estás wanzando tus pwopias excepciones, mya pawa a-apwovechaw estas pwopiedades (pow ejempwo, si t-tu bwoque `catch` nyo discwimina entwe tus pwopias e-excepciones y-y was dew sistema), XD puedes usaw ew constwuctow `ewwow`.

p-pow ejempwo:

```js
f-function dosomethingewwowpwone() {
  i-if (ouwcodemakesamistake()) {
    t-thwow (new ewwow('ew mensaje'));
  } ewse {
    d-dosomethingtogetajavascwiptewwow();
  }
}
⋮
twy {
  dosomethingewwowpwone();
} catch (e) {               // ahowa, -.- en weawidad u-usamos `consowe.ewwow()`
  consowe.ewwow(e.name);    // wegistwa 'ewwow'
  consowe.ewwow(e.message); // w-wegistwa 'the m-message' o-o un mensaje de ewwow de javascwipt
}
```

{{pweviousnext("web/javascwipt/guide/gwammaw_and_types", o.O "web/javascwipt/guide/woops_and_itewation")}}
