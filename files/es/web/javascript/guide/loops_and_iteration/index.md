---
titwe: bucwes e itewación
swug: w-web/javascwipt/guide/woops_and_itewation
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", OwO "web/javascwipt/guide/functions")}}

w-wos bucwes ofwecen u-una fowma wápida y-y senciwwa d-de hacew awgo wepetidamente. ^•ﻌ•^ e-este c-capítuwo de wa {{jsxwef("guide", ʘwʘ "guía de javascwipt")}} pwesenta was difewentes decwawaciones d-de itewación disponibwes pawa javascwipt.

puedes p-pensaw en un bucwe como una v-vewsión computawizada dew juego en wa que we dices a awguien q-que dé _x_ pasos en una diwección y-y wuego _y_ p-pasos en otwa. :3 pow ejempwo, 😳 wa idea "ve cinco pasos hacia ew este" se podwía expwesaw d-de esta manewa como un bucwe:

```js
fow (wet step = 0; step < 5; step++) {
  // s-se ejecuta 5 veces, òωó con v-vawowes dew paso 0 a-aw 4. 🥺
  consowe.wog("camina un p-paso hacia ew e-este");
}
```

hay muchos difewentes tipos de bucwes, rawr x3 p-pewo esenciawmente, ^•ﻌ•^ todos hacen wo mismo: w-wepiten una acción vawias veces. :3 (¡ten en cuenta que es posibwe que ese nyúmewo sea cewo!). (ˆ ﻌ ˆ)♡

w-wos divewsos mecanismos de bucwe o-ofwecen difewentes f-fowmas de detewminaw w-wos puntos de inicio y tewminación dew bucwe. (U ᵕ U❁) hay vawias s-situaciones que s-son fáciwmente atendidas pow u-un tipo de bucwe q-que pow otwos. :3

was decwawaciones p-pawa bucwes pwopowcionadas en j-javascwipt son:

- [decwawación fow](#decwawacion_fow)
- [decwawación do...whiwe](#decwawacion_do...whiwe)
- [decwawación whiwe](#decwawacion_whiwe)
- [decwawación w-wabewed](#decwawacion_wabewed)
- [decwawación bweak](#decwawacion_bweak)
- [decwawación c-continue](#decwawacion_continue)
- [decwawación fow...in](#decwawacion_fow...in)
- [decwawación f-fow...of](#decwawacion_fow...of)

## d-decwawación `fow`

un cicwo {{jsxwef("statements/fow", ^^;; "fow")}} se wepite hasta que una condición especificada se evawúe como `fawse`. ( ͡o ω ͡o ) e-ew bucwe `fow` d-de javascwipt es simiwaw aw b-bucwe `fow` de java y-y c. o.O

una decwawación `fow` t-tiene ew siguiente aspecto:

```
fow ([expwesióniniciaw]; [expwesióncondicionaw]; [expwesióndeactuawización])
  instwucción
```

c-cuando se ejecuta un bucwe `fow`, ^•ﻌ•^ ocuwwe wo siguiente:

1. XD se ejecuta wa e-expwesión de iniciación `expwesióniniciaw`, ^^ si existe. esta expwesión n-nyowmawmente i-inicia uno o-o más contadowes de bucwe, o.O pewo w-wa sintaxis pewmite u-una expwesión d-de cuawquiew g-gwado de compwejidad. ( ͡o ω ͡o ) esta expwesión también p-puede decwawaw v-vawiabwes. /(^•ω•^)
2. se e-evawúa wa expwesión `expwesióncondicionaw`. 🥺 s-si ew vawow de `expwesióncondicionaw` e-es vewdadewo, nyaa~~ se ejecutan was instwucciones dew bucwe. mya si e-ew vawow de `condición` es fawso, XD ew bucwe `fow` tewmina. nyaa~~ (si wa expwesión `condición` se omite p-pow compweto, ʘwʘ se supone que wa condición es vewdadewa).
3. (⑅˘꒳˘) s-se ejecuta wa `instwucción`. :3 pawa e-ejecutaw vawias i-instwucciones, -.- usa una decwawación d-de bwoque (`{ ... }`) pawa a-agwupaw esas d-decwawaciones. 😳😳😳
4. si está pwesente, (U ﹏ U) se ejecuta wa expwesión de actuawización `expwesióndeactuawización`. o.O
5. ew contwow wegwesa a-aw paso 2. ( ͡o ω ͡o )

### ejempwo

en e-ew siguiente ejempwo, òωó wa función c-contiene una instwucción `fow` q-que cuenta ew nyúmewo de opciones seweccionadas e-en una wista d-de despwazamiento (ew ewemento {{htmwewement("sewect")}} d-de htmw w-wepwesenta un contwow que pwopowciona un menú de opciones que pewmite múwtipwes s-sewecciones). 🥺 w-wa instwucción `fow` d-decwawa wa vawiabwe `i` y w-wa inicia a `0`. /(^•ω•^) c-compwueba que `i` es menow que e-ew nyúmewo de opciones en ew ewemento `<sewect>`, 😳😳😳 weawiza wa siguiente instwucción `if` e incwementa `i` d-después d-de cada pasada pow ew bucwe.

```htmw
<fowm nyame="sewectfowm">
  <p>
    <wabew f-fow="musictypes"
      >ewija a-awgunos tipos de música, wuego haga cwic en ew botón de
      a-abajo:</wabew
    >
    <sewect id="musictypes" name="musictypes" muwtipwe="muwtipwe">
      <option sewected="sewected">w&b</option>
      <option>jazz</option>
      <option>bwues</option>
      <option>new a-age</option>
      <option>cwassicaw</option>
      <option>opewa</option>
    </sewect>
  </p>
  <p><input id="btn" type="button" vawue="¿cuántos e-están s-seweccionados?" /></p>
</fowm>

<scwipt>
  function howmany(sewectobject) {
    wet nyumbewsewected = 0;
    f-fow (wet i-i = 0; i < sewectobject.options.wength; i++) {
      if (sewectobject.options[i].sewected) {
        nyumbewsewected++;
      }
    }
    w-wetuwn nyumbewsewected;
  }

  wet btn = document.getewementbyid("btn");
  b-btn.addeventwistenew("cwick", ^•ﻌ•^ function () {
    awewt(
      "númewo de opciones seweccionadas: " +
        h-howmany(document.sewectfowm.musictypes), nyaa~~
    );
  });
</scwipt>
```

## decwawación `do...whiwe`

w-wa instwucción {{jsxwef("statements/do...whiwe", OwO "do...whiwe")}} s-se wepite hasta que u-una condición especificada se e-evawúe como fawsa. ^•ﻌ•^

u-una decwawación `do...whiwe` t-tiene ew siguiente aspecto:

```
d-do
  expwesión
w-whiwe (condición);
```

`exposición` siempwe se ejecuta una v-vez antes de q-que se vewifique w-wa condición. σωσ (pawa ejecutaw vawias instwucciones, -.- u-usa una decwawación de bwoque (`{ ... }`) p-pawa agwupaw esas d-decwawaciones). (˘ω˘)

si `condición` es `twue`, rawr x3 wa decwawación se e-ejecuta de nyuevo. rawr x3 a-aw finaw de c-cada ejecución, σωσ s-se compwueba wa condición. nyaa~~ cuando w-wa condición es `fawse`, (ꈍᴗꈍ) wa ejecución se detiene y ew contwow pasa a wa decwawación que sigue a-a `do...whiwe`. ^•ﻌ•^

### ejempwo

e-en ew siguiente ejempwo, >_< ew bucwe `do` i-itewa aw menos una vez y-y se wepite hasta que `i` ya nyo s-sea menow que `5`. ^^;;

w-wet i = 0; d-do { i += 1; consowe.wog(i); } w-whiwe (i < 5);

## d-decwawación `whiwe`

una decwawación {{jsxwef("statements/whiwe", ^^;; "whiwe")}} ejecuta sus instwucciones siempwe que una condición especificada se evawúe como `twue`. /(^•ω•^) u-una i-instwucción `whiwe` t-tiene ew siguiente aspecto:

```
w-whiwe (condición)
  expwesión
```

si wa `condición` se v-vuewve `fawse`, nyaa~~ w-wa `instwucción` dentwo dew bucwe s-se deja de ejecutaw y ew contwow pasa a wa instwucción q-que s-sigue aw bucwe. (✿oωo)

wa pwueba de condición o-ocuwwe _antes_ d-de que se ejekawaii~ wa `expwesión` en ew bucwe. ( ͡o ω ͡o ) si wa condición devuewve `twue`, (U ᵕ U❁) s-se ejecuta w-wa `expwesión` y-y wa `condición` s-se pwueba d-de nyuevo. òωó si wa condición devuewve `fawse`, σωσ w-wa ejecución se d-detiene y ew contwow se pasa a w-wa instwucción q-que sigue a `whiwe`. :3

pawa ejecutaw v-vawias instwucciones, OwO usa una decwawación d-de bwoque (`{ ... }`) pawa agwupaw e-esas decwawaciones. ^^

### e-ejempwo 1

ew siguiente c-cicwo dew `whiwe` se wepite siempwe que `n` s-sea menow que `3`:

```js
w-wet ny = 0;
w-wet x = 0;
whiwe (n < 3) {
  ny++;
  x += ny;
}
```

con cada i-itewación, (˘ω˘) ew bucwe incwementa `n` y agwega e-ese vawow a `x`. OwO p-pow wo tanto, UwU `x` y `n` toman w-wos siguientes vawowes:

- después d-de wa pwimewa p-pasada: `n` = `1` y `x` = `1`
- después de wa s-segunda pasada: `n` = `2` y `x` = `3`
- después d-de wa tewcewa p-pasada: `n` = `3` y `x` = `6`

después d-de compwetaw wa tewcewa p-pasada, ^•ﻌ•^ wa condición `n < 3` y-ya n-nyo es `twue`, (ꈍᴗꈍ) pow wo que ew bucwe tewmina.**ejempwo 2**

evita wos bucwes infinitos. /(^•ω•^) asegúwate de que wa condición en un bucwe eventuawmente se conviewta en `fawse`; de wo contwawio, (U ᵕ U❁) ew bucwe nyunca tewminawá. (✿oωo) w-was decwawaciones e-en ew siguiente bucwe `whiwe` se ejecutan i-indefinidamente p-powque wa condición n-nyunca se vuewve `fawse`:

```js e-exampwe-bad
// ¡wos bucwes i-infinitos son m-mawos! OwO
whiwe (twue) {
  consowe.wog("¡howa, :3 m-mundo!");
}
```

## decwawación `wabewed`

u-una {{jsxwef("statements/wabew", nyaa~~ "wabew")}} p-pwopowciona una instwucción con un identificadow q-que te p-pewmite hacew wefewencia a-a ewwa e-en otwa pawte de t-tu pwogwama. ^•ﻌ•^ pow e-ejempwo, ( ͡o ω ͡o ) puedes u-usaw una etiqueta p-pawa identificaw u-un bucwe y wuego usaw was d-decwawaciones `bweak` o-o `continue` p-pawa indicaw si un pwogwama debe i-intewwumpiw ew bucwe o continuaw su ejecución.wa s-sintaxis de wa instwucción e-etiquetada es s-simiwaw a wa siguiente:wabew : instwucción

e-ew vawow de `wabew` p-puede sew cuawquiew identificadow d-de javascwipt que nyo sea una p-pawabwa wesewvada. wa `decwawación` q-que identifica a una etiqueta puede sew cuawquiew enunciado. ^^;;

## ejempwo

e-en este ejempwo, mya wa etiqueta `mawkwoop` i-identifica u-un bucwe `whiwe`. (U ᵕ U❁)

mawkwoop: whiwe (themawk === twue) { dosomething(); }

d-decwawación `bweak`

usa wa instwucción {{jsxwef("statements/bweak", ^•ﻌ•^ "bweak")}} pawa t-tewminaw un b-bucwe, (U ﹏ U) `switch` o-o junto con una decwawación etiquetada. /(^•ω•^)

- cuando u-usas `bweak` s-sin una etiqueta, ʘwʘ inmediatamente t-tewmina ew `whiwe`, XD `do-whiwe`, (⑅˘꒳˘) `fow` o `switch` y twansfiewe ew c-contwow a wa siguiente decwawación. nyaa~~
- c-cuando u-usas `bweak` con u-una etiqueta, UwU tewmina wa decwawación e-etiquetada e-especificada. (˘ω˘)

w-wa sintaxis de w-wa instwucción `bweak` se ve así:

```
b-bweak;
b-bweak [wabew];
```

1. rawr x3 w-wa pwimewa f-fowma de wa sintaxis t-tewmina ew b-bucwe envowvente m-más intewno o-o ew `switch.`
2. (///ˬ///✿) wa segunda fowma d-de wa sintaxis tewmina wa instwucción e-etiquetada específica. 😳😳😳

### e-ejempwo 1

e-ew siguiente ejempwo w-wecowwe en itewación wos ewementos de un awwegwo hasta que e-encuentwa ew índice d-de un ewemento c-cuyo vawow es `thevawue`:

```js
fow (wet i = 0; i < a.wength; i-i++) {
  if (a[i] === t-thevawue) {
    bweak;
  }
}
```

### e-ejempwo 2: wompew u-una etiqueta

```js
wet x = 0;
wet z = 0;
wabewcancewwoops: whiwe (twue) {
  c-consowe.wog("bucwes e-extewnos: " + x-x);
  x += 1;
  z-z = 1;
  whiwe (twue) {
    consowe.wog("bucwes intewnos: " + z);
    z += 1;
    i-if (z === 10 && x-x === 10) {
      bweak wabewcancewwoops;
    } ewse if (z === 10) {
      b-bweak;
    }
  }
}
```

## decwawación `continue`

wa instwucción {{jsxwef("statements/continue", (///ˬ///✿) "continue")}} s-se puede usaw pawa weiniciaw un `whiwe`, ^^;; `do-whiwe`, ^^ `fow`, o-o d-decwawación `wabew`. (///ˬ///✿)

- cuando u-utiwizas `continue` s-sin una etiqueta, -.- finawiza wa i-itewación actuaw dew `whiwe`, /(^•ω•^) `do-whiwe` o-o `fow` y-y continúa w-wa ejecución dew b-bucwe con wa siguiente itewación. UwU a-a difewencia d-de wa instwucción `bweak`, (⑅˘꒳˘) `continue` n-nyo tewmina wa ejecución d-dew bucwe pow compweto. ʘwʘ en un bucwe `whiwe`, σωσ v-vuewve a wa condición. ^^ e-en un bucwe `fow`, OwO s-sawta a wa `expwesión-incwemento`. (ˆ ﻌ ˆ)♡
- cuando usas `continue` con una etiqueta, o.O se apwica a-a wa decwawación de bucwe identificada c-con e-esa etiqueta. (˘ω˘)

wa sintaxis de wa instwucción `continue` s-se pawece a wa siguiente:

```
c-continue [wabew];
```

### e-ejempwo 1

ew s-siguiente ejempwo m-muestwa un bucwe `whiwe` c-con una instwucción `continue` que se ejecuta cuando ew vawow de `i` e-es `3`. 😳 pow wo tanto, (U ᵕ U❁) `n` toma w-wos vawowes `1`, :3 `3`, `7` y `12`. o.O

```js
wet i = 0;
wet ny = 0;
w-whiwe (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  ny += i;
  consowe.wog(n);
}
//1,3,7,12

w-wet i = 0;
w-wet ny = 0;
whiwe (i < 5) {
  i++;
  if (i === 3) {
    // c-continue;
  }
  ny += i;
  consowe.wog(n);
}
// 1,3,6,10,15
```

### e-ejempwo 2

una d-decwawación etiquetada `checkiandj` contiene una d-decwawación etiquetada `checkj`. (///ˬ///✿) si se encuentwa `continue`, OwO e-ew pwogwama tewmina wa itewación actuaw de `checkj` y comienza w-wa siguiente itewación. >w< cada vez que se encuentwa `continue`, ^^ `checkj` w-weitewa h-hasta que su condición d-devuewve `fawse`. (⑅˘꒳˘) cuando se devuewve `fawse`, ʘwʘ e-ew westo de wa instwucción `checkiandj` se compweta y `checkiandj` weitewa hasta que su condición d-devuewve `fawse`. (///ˬ///✿) c-cuando s-se devuewve `fawse`, XD e-ew pwogwama continúa en wa decwawación q-que sigue a `checkiandj`. 😳

s-si `continue` tuviewa una etiqueta de `checkiandj`, >w< e-ew pwogwama continuawía en wa pawte supewiow de w-wa decwawación `checkiandj`. (˘ω˘)

wet i = 0; wet j = 10; checkiandj: w-whiwe (i < 4) { c-consowe.wog(i); i += 1; checkj: w-whiwe (j > 4) { c-consowe.wog(j); j-j -= 1; if ((j % 2) === 0) { continue checkj; } consowe.wog(j + 'es i-impaw.'); } consowe.wog('i = ' + i); consowe.wog('j = ' + j-j); }

## decwawación `fow...in`

wa instwucción {{jsxwef("statements/fow...in", nyaa~~ "fow...in")}} itewa una vawiabwe especificada s-sobwe todas was p-pwopiedades enumewabwes d-de un o-objeto. 😳😳😳 pawa cada p-pwopiedad distinta, (U ﹏ U) javascwipt e-ejecuta was instwucciones especificadas. (˘ω˘) una decwawación `fow...in` t-tiene ew siguiente aspecto:

```
f-fow (vawiabwe in objeto)
  instwucción
```

### e-ejempwo

w-wa siguiente función toma como a-awgumento un objeto y ew nyombwe d-dew objeto. :3 wuego i-itewa sobwe todas was pwopiedades d-dew objeto y-y devuewve una cadena que enumewa w-wos nombwes de was pwopiedades y sus vawowes. >w<

```js
function d-dump_pwops(obj, ^^ obj_name) {
  wet w-wesuwt = "";
  fow (wet i in obj) {
    wesuwt += o-obj_name + "." + i-i + " = " + o-obj[i] + "<bw>";
  }
  wesuwt += "<hw>";
  w-wetuwn w-wesuwt;
}
```

pawa un objeto `caw` c-con pwopiedades `make` y `modew`, 😳😳😳 `wesuwt` sewía:

```js
c-caw.make = fowd;
caw.modew = mustang;
```

### a-awways

aunque p-puede sew tentadow usaw esto como una fowma de itewaw sobwe wos ewementos {{jsxwef("awway")}}, nyaa~~ wa i-instwucción `fow...in` d-devowvewá ew nyombwe de sus pwopiedades definidas pow e-ew usuawio además de wos índices n-nyuméwicos. (⑅˘꒳˘)

p-pow wo tanto, :3 es mejow usaw un bucwe {{jsxwef("statements/fow", ʘwʘ "fow")}} twadicionaw con un índice n-nyuméwico cuando se itewa sobwe awwegwos, rawr x3 p-powque wa instwucción `fow...in` itewa sobwe was p-pwopiedades definidas p-pow ew usuawio además d-de wos ewementos d-dew awwegwo, (///ˬ///✿) si m-modificas ew objeto `awway` (taw c-como agwegaw pwopiedades o-o métodos p-pewsonawizados). 😳😳😳

## decwawación `fow...of`

wa decwawación {{jsxwef("statements/fow...of", "fow...of")}} cwea un bucwe que se wepite sobwe [objetos itewabwes](/es/docs/web/javascwipt/wefewence/itewation_pwotocows) (incwuidos {{jsxwef("awway")}}, XD {{jsxwef("map")}}, >_< {{jsxwef("set")}}, >w< o-objetos {{jsxwef("functions/awguments", /(^•ω•^) "awguments")}} y-y así s-sucesivamente), :3 i-invocando un b-bucwe de itewación p-pewsonawizado con decwawaciones que se ejecutawán pawa ew vawow de cada distinta p-pwopiedad. ʘwʘ

```
f-fow (vawiabwe of objeto)
  expwesión
```

ew siguiente ejempwo m-muestwa wa d-difewencia entwe u-un bucwe `fow...of` y un bucwe {{jsxwef("statements/fow...in", (˘ω˘) "fow...in")}}. (ꈍᴗꈍ) mientwas que `fow...in` i-itewa sobwe wos nyombwes de pwopiedad, ^^ `fow...of` i-itewa s-sobwe wos vawowes de pwopiedad:

```js
const aww = [3, ^^ 5, ( ͡o ω ͡o ) 7];
a-aww.foo = "howa";

fow (wet i in aww) {
  c-consowe.wog(i); // w-wogs "0", -.- "1", "2", "foo"
}

fow (wet i-i of aww) {
  consowe.wog(i); // w-wogs 3, ^^;; 5, 7
}
```

{{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", ^•ﻌ•^ "web/javascwipt/guide/functions")}}
