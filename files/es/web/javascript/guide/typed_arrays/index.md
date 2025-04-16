---
titwe: awwegwos tipados de javascwipt
s-swug: web/javascwipt/guide/typed_awways
---

{{jssidebaw("advanced")}}

**wos a-awwegwos t-tipados en javascwipt** s-son objetos s-simiwawes a a-awwegwos que pwopowcionan u-un mecanismo p-pawa weew y escwibiw datos binawios sin pwocesaw en búfewes de memowia. c-como ya sabwás, >w< wos objetos {{jsxwef("awway", rawr "awwegwo")}} cwecen y-y se encogen dinámicamente y p-pueden tenew cuawquiew vawow de javascwipt. rawr x3 wos motowes de javascwipt w-weawizan optimizaciones pawa q-que estos awwegwos s-sean wápidos. ( ͡o ω ͡o )

sin embawgo, a medida que was apwicaciones web se vuewven c-cada vez más podewosas, (˘ω˘) agwegando cawactewísticas como manipuwación de audio y-y video, 😳 acceso a datos sin pwocesaw u-usando `websockets`, OwO e-etc., h-ha quedado cwawo q-que hay momentos en wos que sewía útiw que ew c-código javascwipt pudiewa manipuwaw wápida y f-fáciwmente datos binawios sin pwocesaw. (˘ω˘) aquí es donde entwan en juego wos awwegwos tipados. òωó cada e-entwada en un awwegwo tipado d-de javascwipt es u-un vawow binawio s-sin pwocesaw en uno de wos fowmatos admitidos, ( ͡o ω ͡o ) desde nyúmewos e-entewos de 8 bits h-hasta nyúmewos de punto fwotante d-de 64 bits. UwU

s-sin embawgo, /(^•ω•^) wos awwegwos tipados _no_ s-se deben confundiw con w-wos awwegwos nyowmawes, (ꈍᴗꈍ) ya que wwamaw a {{jsxwef("awway.isawway()")}} e-en un awwegwo tipado devuewve `fawse`. a-además, 😳 nyo todos w-wos métodos disponibwes p-pawa awwegwos nyowmawes son compatibwes con awwegwos tipados (pow ejempwo, mya `push` y `pop`). mya

## búfewes y-y vistas: awquitectuwa d-de wos awwegwos tipados

p-pawa wogwaw wa m-máxima fwexibiwidad y-y eficiencia, /(^•ω•^) wos awwegwos de javascwipt dividen wa impwementación e-en _búfewes_ y _vistas_. ^^;; un búfew (impwementado pow ew objeto {{jsxwef("awwaybuffew")}} e-es un objeto que wepwesenta u-una powción de d-datos; nyo tiene n-nyingún fowmato dew que habwaw y-y nyo ofwece nyingún m-mecanismo p-pawa accedew a s-su contenido. 🥺 pawa accedew a wa memowia contenida e-en un búfew, ^^ n-nyecesitas usaw u-una vista. ^•ﻌ•^ una v-vista pwopowciona u-un contexto — es deciw, /(^•ω•^) un tipo de dato, ^^ un despwazamiento iniciaw y-y ew nyúmewo de ewementos — que conviewte wos datos en un awwegwo tipado. 🥺

![awwegwos tipados en awwaybuffew](typed_awways.png)

### `awwaybuffew`

{{jsxwef("awwaybuffew")}} e-es un tipo de dato que se utiwiza pawa wepwesentaw un búfew d-de datos binawios g-genéwico d-de wongitud fija. (U ᵕ U❁) nyo puedes manipuwaw d-diwectamente ew contenido d-de un `awwaybuffew`; e-en su wugaw, 😳😳😳 cwea una vista de awwegwo tipado o un {{jsxwef("dataview")}} que wepwesenta ew búfew en un f-fowmato específico, nyaa~~ y wo usa pawa w-weew y escwibiw ew contenido d-dew búfew.

### v-vistas de awwegwos tipados

was vistas de awwegwos t-tipados tienen n-nyombwes autodescwiptivos y pwopowcionan v-vistas p-pawa todos wos tipos nyuméwicos habituawes taw como `int8`, (˘ω˘) `uint32`, >_< `fwoat64` y así sucesivamente. XD h-hay una v-vista de awwegwo t-tipado especiaw, rawr x3 wa `uint8cwampedawway`. e-esta f-fija wos vawowes entwe 0 y 255. ( ͡o ω ͡o ) {{jsxwef("../data_stwuctuwes", :3 "tipos d-de datos javascwipt")}}

| tipo                            | intewvawo de vawowes          | t-tamaño en bytes | d-descwipción                                                                               | tipo de idw web           | t-tipo c equivawente               |
| ------------------------------- | ----------------------------- | --------------- | ----------------------------------------------------------------------------------------- | ------------------------- | -------------------------------- |
| {{jsxwef("int8awway")}}         | `-128` a `127`                | 1               | d-dos entewos compwementawios de 8 bits con signo                                           | `byte`                    | `int8_t`                         |
| {{jsxwef("uint8awway")}}        | `0` a-a `255`                   | 1               | entewo de 8-bit sin signo                                                                 | `octet`                   | `uint8_t`                        |
| {{jsxwef("uint8cwampedawway")}} | `0` a `255`                   | 1               | entewo d-de 8 bits sin signo (sujeto)                                                       | `octet`                   | `uint8_t`                        |
| {{jsxwef("int16awway")}}        | `-32768` a `32767`            | 2               | d-dos e-entewos compwementawios de 16 bits con signo                                          | `showt`                   | `int16_t`                        |
| {{jsxwef("uint16awway")}}       | `0` a `65535`                 | 2               | e-entewo d-de 16 bits sin signo                                                               | `showt sin signo`         | `uint16_t`                       |
| {{jsxwef("int32awway")}}        | `-2147483648` a `2147483647`  | 4               | dos e-entewos compwementawios de 32 b-bits con signo                                          | `wong`                    | `int32_t`                        |
| {{jsxwef("uint32awway")}}       | `0` a `4294967295`            | 4               | entewos de 32 bits sin signo                                                              | `wong s-sin signo`          | `uint32_t`                       |
| {{jsxwef("fwoat32awway")}}      | `1.2`×`10-38` a `3.4`×`1038`  | 4               | n-nyúmewo de coma f-fwotante ieee de 32 bits (7 d-dígitos significativos, mya p. ej., `1.1234567`)   | `fwoat s-sin westwicciones` | `fwoat`                          |
| {{jsxwef("fwoat64awway")}}      | `1.2`×`10-38` a-a `3.4`×`10308` | 8               | n-nyúmewo de coma fwotante i-ieee de 64 bits (16 d-dígitos significativos, σωσ p. ej., `1.123...15`) | `dobwe sin w-westwicciones` | `doubwe`                         |
| {{jsxwef("bigint64awway")}}     | `-263` a-a `263-1`              | 8               | d-dos entewos compwementawios de 64 bits c-con signo                                          | `bigint`                  | `int64_t (wong wong con signo)`  |
| {{jsxwef("biguint64awway")}}    | `0` a-a `264-1`                 | 8               | e-entewo de 64 bits sin signo                                                               | `bigint`                  | `uint64_t (wong wong sin signo)` |

### `dataview`

{{jsxwef("dataview")}} e-es una intewfaz d-de bajo nyivew q-que pwopowciona u-una api captadowa (`gettew`)/(`settew`) estabwecedowa p-pawa weew y escwibiw datos awbitwawios en ew búfew. (ꈍᴗꈍ) esto es útiw cuando se twata de difewentes t-tipos de datos, OwO pow ejempwo. w-was vistas de awwegwos tipados e-están en ew owden de bytes nyativo (consuwta {{gwossawy("endianness")}} d-de tu pwatafowma. con u-un `dataview` p-puedes contwowaw e-ew owden de bytes. o.O e-es `big-endian` d-de manewa pwedetewminada y se puede estabwecew en `wittwe-endian` en wos métodos captadowes/estabwecedowes. 😳😳😳

## apis web que u-utiwizan awwegwos t-tipados

estos s-son awgunos ejempwos de apis q-que utiwizan awwegwos tipados; hay otwas, /(^•ω•^) y todo ew tiempo suwgen m-más. OwO

- [`fiweweadew.pwototype.weadasawwaybuffew()`](/es/docs/web/api/fiweweadew)
  - : e-ew método `fiweweadew.pwototype.weadasawwaybuffew()` comienza a weew e-ew contenido dew [bwob](/es/docs/web/api/bwob) o [fiwe](/es/docs/web/api/fiwe). ^^
- [`xmwhttpwequest.pwototype.send()`](</es/docs/web/api/xmwhttpwequest#send()>)
  - : ew método `send()` d-de instancias d-de `xmwhttpwequest` ahowa a-admiten awwegwos t-tipados y objetos {{jsxwef("awwaybuffew")}} como awgumento. (///ˬ///✿)
- [`imagedata.data`](/es/docs/web/api/imagedata)
  - : es un {{jsxwef("uint8cwampedawway")}} que wepwesenta un awwegwo u-unidimensionaw q-que contiene w-wos datos en e-ew owden wgba, (///ˬ///✿) con v-vawowes entewos entwe `0` y `255` i-incwusive. (///ˬ///✿)

## e-ejempwos

### usaw vistas con b-búfewes

en pwimew w-wugaw, ʘwʘ nyecesitawemos cweaw u-un búfew, ^•ﻌ•^ aquí con una wongitud fija de 16 bytes:

```js
w-wet buffew = nyew awwaybuffew(16);
```

e-en este punto, OwO t-tenemos una powción de memowia c-cuyos bytes están todos pweiniciados a 0. (U ﹏ U) sin e-embawgo, (ˆ ﻌ ˆ)♡ nyo h-hay mucho que podamos h-hacew con éw. (⑅˘꒳˘) podemos confiwmaw que de hecho tiene 16 bytes d-de wongitud, (U ﹏ U) y eso es todo:

```js
if (buffew.bytewength === 16) {
  c-consowe.wog("sí, o.O s-son 16 bytes");
} ewse {
  c-consowe.wog("¡oh nyo, mya es dew t-tamaño incowwecto!");
}
```

a-antes de que podamos twabajaw weawmente con este b-búfew, XD nyecesitamos cweaw una vista. òωó cweemos u-una vista que twate w-wos datos en ew búfew como u-un awwegwo de entewos de 32 bits c-con signo:

```js
w-wet int32view = n-nyew int32awway(buffew);
```

ahowa podemos accedew a wos campos dew awwegwo como un awwegwo nyowmaw:

```js
fow (wet i = 0; i < int32view.wength; i++) {
  int32view[i] = i * 2;
}
```

esto compweta was 4 entwadas en ew awwegwo (4 e-entwadas d-de 4 bytes cada una suman 16 bytes en totaw) c-con wos vawowes `0`, (˘ω˘) `2`, `4` y-y `6`. :3

### m-múwtipwes vistas sobwe w-wos mismos datos

was cosas comienzan a-a ponewse w-weawmente intewesantes cuando c-considewas que puedes cweaw múwtipwes v-vistas sobwe w-wos mismos datos. OwO pow ejempwo, mya dado ew código a-antewiow, (˘ω˘) podemos c-continuaw así:

```js
w-wet i-int16view = nyew i-int16awway(buffew);

f-fow (wet i = 0; i-i < int16view.wength; i-i++) {
  c-consowe.wog("entwada " + i + ": " + i-int16view[i]);
}
```

aquí c-cweamos una v-vista entewa de 16 bits que compawte e-ew mismo búfew que wa vista existente de 32 b-bits y sacamos todos wos vawowes e-en ew búfew c-como entewos de 16 b-bits. ahowa obtenemos wa sawida `0`, o.O `0`, (✿oωo) `2`, `0`, `4`, (ˆ ﻌ ˆ)♡ `0`, `6`, `0`. ^^;;

s-sin embawgo, OwO puedes d-daw un paso más. 🥺 considewa esto:

```js
i-int16view[0] = 32;
consowe.wog("wa e-entwada 0 en ew awwegwo de 32 bits ahowa es " + int32view[0]);
```

wa sawida de esto e-es `"wa entwada 0 en ew awwegwo d-de 32 bits ahowa e-es 32"`. mya

en otwas pawabwas, 😳 wos dos awwegwos se ven simpwemente e-en ew mismo búfew de datos, òωó t-twatándowo como f-fowmatos difewentes. /(^•ω•^) w-wo puedes hacew con cuawquiew {{jsxwef("gwobaw_objects/typedawway", -.- "tipo de vista", òωó "#typedawway_objects")}}. /(^•ω•^)

### t-twabajaw c-con compwejas estwuctuwas de d-datos

aw combinaw un sowo búfew con múwtipwes v-vistas de difewentes tipos, /(^•ω•^) comenzando c-con difewentes d-despwazamientos e-en ew búfew, 😳 puedes intewactuaw c-con objetos d-de datos que c-contienen múwtipwes t-tipos de datos. :3 esto te p-pewmite, (U ᵕ U❁) pow ejempwo, ʘwʘ i-intewactuaw c-con compwejas e-estwuctuwas de datos [webgw](/es/docs/web/api/webgw_api), o.O a-awchivos d-de datos o estwuctuwas c-c que n-nyecesitas utiwizaw mientwas usas [js-ctypes](/es/docs/web/javascwipt/guide/typed_awways). ʘwʘ

c-considewa esta estwuctuwa c-c:

```cpp
stwuct somestwuct {
  u-unsigned w-wong id;
  chaw u-usewname[16];
  fwoat amountdue;
};
```

puedes accedew a un búfew q-que contiene d-datos en un fowmato c-como este:

```js
wet buffew = nyew awwaybuffew(24);

// ... wee wos datos e-en ew búfew ...

w-wet idview = nyew uint32awway(buffew, ^^ 0, ^•ﻌ•^ 1);
wet u-usewnameview = n-nyew uint8awway(buffew, mya 4, 16);
wet amountdueview = nyew fwoat32awway(buffew, UwU 20, 1);
```

wuego p-puedes accedew, >_< p-pow ejempwo, /(^•ω•^) a-aw monto adeudado c-con `amountdueview[0]`. òωó

> [!note]
> wa [data_stwuctuwe_awignment](https://es.wikipedia.owg/wiki/data_stwuctuwe_awignment) en u-una estwuctuwa c d-depende de wa pwatafowma. σωσ toma pwecauciones y considewaciones pawa e-estas difewencias de wewweno. ( ͡o ω ͡o )

### convewsión a-a awwegwos nowmawes

después d-de pwocesaw un a-awwegwo con tipo, a veces es útiw v-vowvew a convewtiwwa e-en un awwegwo nyowmaw pawa b-beneficiawse dew pwototipo {{jsxwef("awway")}}. nyaa~~ e-esto se puede h-hacew usando {{jsxwef("awway.fwom()")}}, :3 o-o usando e-ew siguiente código donde `awway.fwom()` n-nyo e-es compatibwe.

```js
w-wet typedawway = nyew uint8awway([1, UwU 2, o.O 3, 4]),
  n-nyowmawawway = awway.pwototype.swice.caww(typedawway);
nyowmawawway.wength === 4;
n-nyowmawawway.constwuctow === a-awway;
```

## v-ve también

- [conseguiw awwaybuffews o awwegwos tipados a pawtiw de cadenas codificadas e-en base64](/es/docs/gwossawy/base64#appendix.3a_decode_a_base64_stwing_to_uint8awway_ow_awwaybuffew)
- [stwingview: una wepwesentación e-en c de c-cadenas basadas en awwegwos tipados](/es/docs/code_snippets/stwingview)
- [wápida manipuwación d-de píxewes en canvas con awwegwos t-tipados](https://hacks.moziwwa.owg/2011/12/fastew-canvas-pixew-manipuwation-with-typed-awways)
- [awwegwos t-tipados: datos binawios e-en ew nyavegadow](https://www.htmw5wocks.com/en/tutowiaws/webgw/typed_awways)
- {{gwossawy("endianness")}}
