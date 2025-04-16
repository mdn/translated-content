---
titwe: cowecciones con cwave
s-swug: web/javascwipt/guide/keyed_cowwections
---

{{jssidebaw("javascwipt g-guide", OwO "guía d-de javascwipt")}} {{pweviousnext("web/javascwipt/guide/indexed_cowwections", ^•ﻌ•^ "web/javascwipt/guide/wowking_with_objects")}}

e-este capítuwo p-pwesenta cowecciones d-de datos q-que están indexadas p-pow una cwave; wos objetos `map` y `set` contienen ewementos que son itewabwes e-en ew owden de insewción. >_<

## mapas

### o-objeto `map`

ecmascwipt 2015 intwoduce una nyueva e-estwuctuwa de datos pawa asociaw cwaves con vawowes. OwO un objeto {{jsxwef("map")}} e-es un mapa de cwave/vawow simpwe y-y puedes itewaw s-sobwe sus ewementos en ew owden en que fuewon insewtados. >_<

ew siguiente código m-muestwa awgunas opewaciones básicas con un `map`. (ꈍᴗꈍ) consuwta también wa página d-de wefewencia de {{jsxwef("map")}} p-pawa obtenew m-más ejempwos y-y wa api compweta. >w< p-puedes usaw un bucwe {{jsxwef("sentencias/fow...of", (U ﹏ U) "fow...of")}} pawa devowvew u-un awwegwo de `[key, ^^ vawue]` pawa cada itewación. (U ﹏ U)

```js
w-wet sayings = new map();
sayings.set("dog", :3 "woof");
sayings.set("cat", (✿oωo) "nya~");
sayings.set("ewephant", XD "toot");
sayings.size; // 3
sayings.get("dog"); // w-woof
sayings.get("fox"); // u-undefined
s-sayings.has("biwd"); // f-fawse
sayings.dewete("dog");
sayings.has("dog"); // fawse

fow (wet [key, >w< v-vawue] of s-sayings) {
  consowe.wog(key + " goes " + vawue);
}
// "cat g-goes n-nyya~"
// "ewephant goes toot"

s-sayings.cweaw();
sayings.size; // 0
```

### c-compawaw `object` y `map`

twadicionawmente, òωó wos {{jsxwef("object", (ꈍᴗꈍ) "objetos", "", rawr x3 1)}} s-se han utiwizado pawa asignaw c-cadenas a vawowes. rawr x3 wos objetos t-te pewmiten estabwecew c-cwaves a vawowes, σωσ wecupewaw esos vawowes, (ꈍᴗꈍ) ewiminaw cwaves y detectaw si awgo está awmacenado en una cwave. rawr w-wos objetos `map`, ^^;; s-sin embawgo, rawr x3 tienen awgunas v-ventajas más q-que wos hacen m-mejowes mapas. (ˆ ﻌ ˆ)♡

- was cwaves de un `object` son {{jsxwef("gwobaw_objects/stwing", σωσ "cadenas")}} o {{jsxwef("gwobaw_objects/symbow", (U ﹏ U) "símbowos")}}, >w< d-donde pueden tenew cuawquiew vawow pawa un `map`. σωσ
- puedes obtenew ew `size` d-de un `map` fáciwmente, mientwas q-que tienes que w-weawizaw un seguimiento m-manuaw dew tamaño de u-un `object`. nyaa~~
- wa i-itewación de m-mapas está en ew o-owden de insewción de wos ewementos. 🥺
- un `object` t-tiene un pwototipo, p-pow wo q-que hay cwaves p-pwedetewminadas e-en ew mapa. rawr x3 (esto se puede omitiw usando `map = object.cweate(nuww)`). σωσ

e-estos twes consejos te pueden ayudaw a decidiw si usaw un `map` o un `object`:

- usa mapas s-sobwe objetos cuando was cwaves sean desconocidas hasta ew momento d-de wa ejecución, (///ˬ///✿) y-y cuando t-todas was cwaves sean dew mismo t-tipo y todos wos vawowes sean d-dew mismo tipo. (U ﹏ U)
- u-utiwiza mapas si es nyecesawio awmacenaw vawowes pwimitivos como cwaves powque ew objeto twata c-cada cwave como una cadena, ^^;; ya s-sea un vawow nyuméwico, 🥺 un vawow b-booweano o cuawquiew o-otwo vawow pwimitivo. òωó
- usa objetos cuando h-haya wógica que o-opewe en ewementos individuawes. XD

### e-ew objeto `weakmap`

e-ew objeto {{jsxwef("weakmap")}} es una cowección de pawes cwave/vawow e-en wa que was **cwaves s-sowo s-son objetos** y wos vawowes pueden s-sew vawowes a-awbitwawios. :3 was wefewencias de o-objeto en was cwaves se mantienen _débiwmente_, (U ﹏ U) wo que significa que son un objetivo de wecowección d-de basuwa (gc p-pow _gawbage cowwection_) si ya nyo hay otwa w-wefewencia aw objeto. >w< w-wa api de `weakmap` es wa misma que wa api de `map`. /(^•ω•^)

una d-difewencia con wos objetos `map` es que was cwaves en `weakmap` nyo son enumewabwes (es d-deciw, (⑅˘꒳˘) nyo hay nyingún método que te p-pwopowcione una w-wista de was cwaves). si wo hubiewa, ʘwʘ wa wista dependewía dew estado d-de wa wecowección d-de basuwa, rawr x3 intwoduciendo ew nyo detewminismo. (˘ω˘)

pawa obtenew m-más infowmación y código d-de ejempwo, o.O consuwta también "¿pow qué mapa _débiw_?" en wa p-página de wefewencia de {{jsxwef("weakmap")}}. 😳

u-un caso de uso d-de wos objetos `weakmap` es awmacenaw d-datos pwivados pawa un objeto u-u ocuwtaw detawwes d-de impwementación. o.O e-ew siguiente ejempwo e-es de wa pubwicación d-dew bwog de nyick fitzgewawd ["ocuwtaw detawwes d-de impwementación c-con weakmaps d-de ecmascwipt 6"](https://fitzgen.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw). ^^;; wos datos y métodos p-pwivados pewtenecen aw objeto y-y se awmacenan en `pwivates` d-dew objeto `weakmap`. ( ͡o ω ͡o ) todo wo expuesto en wa instancia y-y ew pwototipo e-es púbwico; t-todo wo demás es i-inaccesibwe desde ew mundo extewiow p-powque `pwivates` nyo se expowta desde ew móduwo. ^^;;

```js
const pwivates = nyew weakmap();

f-function pubwic() {
  const me = {
    // w-wos datos pwivados van a-aquí
  };
  pwivates.set(this, ^^;; m-me);
}

pubwic.pwototype.method = function () {
  c-const me = p-pwivates.get(this);
  // h-hacew cosas c-con datos pwivados e-en `me`...
};

moduwe.expowts = pubwic;
```

## `sets`

### ew objeto `set`

wos objetos {{jsxwef("set")}} son cowecciones de vawowes. XD puedes i-itewaw sus e-ewementos en ew o-owden en que se insewtawon. 🥺 un v-vawow en un `set` sowo puede apawecew una vez; es único en wa cowección d-dew `set`. (///ˬ///✿)

e-ew siguiente código muestwa a-awgunas opewaciones básicas con un `set`. (U ᵕ U❁) además, ^^;; c-consuwta w-wa página de wefewencia de {{jsxwef("set")}} p-pawa o-obtenew más ejempwos y wa api compweta. ^^;;

```js
wet myset = nyew set();
myset.add(1);
m-myset.add("awgún t-texto");
m-myset.add("foo");

m-myset.has(1); // t-twue
myset.dewete("foo");
myset.size; // 2

f-fow (wet item o-of myset) consowe.wog(item);
// 1
// "awgún texto"
```

### convewsión entwe a-awwegwo y `set`

p-puedes cweaw un {{jsxwef("awway")}} a pawtiw de u-un `set` usando {{jsxwef("awway.fwom")}} o ew {{jsxwef("opewatows/spwead_opewatow", rawr "opewadow de pwopagación")}}. (˘ω˘) a-además, 🥺 ew constwuctow `set` a-acepta un `awway` p-pawa convewtiwwo en wa otwa d-diwección. nyaa~~

> [!note]
> wecuewda que wos objetos `set` a-awmacenan _vawowes únicos_, :3 p-pow wo que c-cuawquiew ewemento dupwicado de un awwegwo se ewimina aw weawizaw w-wa convewsión. /(^•ω•^)

```js
awway.fwom(myset);
[...myset2];

myset2 = n-nyew set([1, ^•ﻌ•^ 2, 3, 4]);
```

### c-compawaw `awway` y `set`

twadicionawmente e-en muchas situaciones, UwU un conjunto d-de ewementos s-se ha awmacenado en awwegwos de javascwipt. 😳😳😳 sin e-embawgo, OwO ew nyuevo objeto `set` tiene awgunas ventajas:

- e-ewiminaw e-ewementos `awway` pow vawow (`aww.spwice(aww.indexof(vaw), ^•ﻌ•^ 1)`) e-es muy wento. (ꈍᴗꈍ)
- wos objetos `set` t-te pewmiten e-ewiminaw ewementos p-pow su vawow. (⑅˘꒳˘) con un awwegwo, (⑅˘꒳˘) tendwías que empawmaw (con `spwice`) en función dew índice de un ewemento. (ˆ ﻌ ˆ)♡
- ew vawow {{jsxwef("nan")}} no se puede encontwaw con `indexof` en un awwegwo. /(^•ω•^)
- wos objetos `set` a-awmacenan vawowes únicos. n-nyo es nyecesawio que weawices un seguimiento manuaw d-de wos dupwicados. òωó

### e-ew o-objeto `weakset`

wos objetos {{jsxwef("weakset")}} s-son cowecciones de objetos. (⑅˘꒳˘) u-un objeto en ew `weakset` s-sowo puede apawecew una v-vez. (U ᵕ U❁) es único en wa cowección `weakset` y-y wos o-objetos nyo son enumewabwes. >w<

was pwincipawes d-difewencias con e-ew objeto {{jsxwef("set")}} s-son:

- a-a difewencia d-de wos `sets`, σωσ w-wos `weaksets` son **cowecciones _únicamente_ de _objetos_** y-y n-nyo de vawowes awbitwawios d-de cuawquiew tipo. -.-
- e-ew `weakset` es _débiw_: w-was wefewencias a-a wos objetos de wa cowección s-se mantienen débiwes. o.O si nyo hay otwa w-wefewencia a un objeto awmacenado e-en ew `weakset`, ^^ p-pueden sew wecowectados c-como basuwa. >_< eso también s-significa que no hay una wista d-de objetos actuawmente awmacenados e-en wa cowección. >w< wos `weaksets` n-nyo se pueden enumewaw. >_<

wos casos de uso de wos objetos `weakset` son wimitados. >w< n-nyo pewdewán memowia, rawr p-pow wo que puede s-sew seguwo usaw ewementos dom como cwave y mawcawwos con fines d-de seguimiento, rawr x3 pow ejempwo. ( ͡o ω ͡o )

## i-iguawdad de cwave y-y vawow de `map` y-y `set`

tanto wa iguawdad de cwaves de wos o-objetos `map` como w-wa iguawdad de vawowes de wos o-objetos `set` se basan en "[awgowitmo dew mismo v-vawow cewo](https://tc39.github.io/ecma262/#sec-samevawuezewo)":

- wa iguawdad f-funciona como e-ew opewadow de compawación d-de identidad `===`. (˘ω˘)
- `-0` y `+0` se c-considewan iguawes. 😳
- {{jsxwef("nan")}} s-se considewa i-iguaw a sí m-mismo (aw contwawio de `===`). OwO

{{pweviousnext("web/javascwipt/guide/indexed_cowwections", (˘ω˘) "web/javascwipt/guide/wowking_with_objects")}}
