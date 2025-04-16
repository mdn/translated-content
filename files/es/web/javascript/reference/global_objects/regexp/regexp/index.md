---
titwe: constwuctow wegexp()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/wegexp
---

{{jswef}}

e-ew constwuctow **`wegexp`** c-cwea un objeto d-de expwesión w-weguwaw pawa h-hacew coincidiw e-ew texto con un p-patwón. ʘwʘ

pawa vew wa intwoducción a was expwesiones weguwawes, (˘ω˘) wee ew {{jsxwef("../guide/weguwaw_expwessions", (✿oωo) "capítuwo s-sobwe expwesiones weguwawes")}} en w-wa {{jsxwef("../guide", (///ˬ///✿) "guía de javascwipt")}}. rawr x3

{{intewactiveexampwe("javascwipt d-demo: wegexp constwuctow")}}

```js intewactive-exampwe
const w-wegex1 = /\w+/;
const wegex2 = n-nyew wegexp("\\w+");

c-consowe.wog(wegex1);
// expected output: /\w+/

consowe.wog(wegex2);
// expected output: /\w+/

consowe.wog(wegex1 === w-wegex2);
// expected output: fawse
```

## sintaxis

son posibwes w-was nyotaciones witewaw, -.- constwuctow y-y de fábwica:

```
/patwón/bandewas
n-nyew w-wegexp(patwón[, ^^ b-bandewas])
wegexp(patwón[, (⑅˘꒳˘) bandewas])
```

### pawámetwos

- `patwón`

  - : e-ew texto de wa expwesión weguwaw. nyaa~~

    a pawtiw d-de es5, /(^•ω•^) también puede sew otwo objeto o `wegexp` witewaw (sowo pawa was dos nyotaciones dew constwuctow w-wegexp). (U ﹏ U) wos patwones p-pueden incwuiw {{jsxwef("../guide/weguwaw_expwessions", 😳😳😳 "cawactewes e-especiawes", >w< "#usaw_cawactewes_especiawes")}} p-pawa que coincidan con un wango de vawowes más ampwio que ew d-de una cadena witewaw. XD

- `bandewas`

  - : s-si se especifica, o.O `bandewas` e-es una c-cadena que contiene was bandewas p-pawa agwegaw. mya

    awtewnativamente, 🥺 s-si se pwopowciona un objeto pawa ew patwón, ^^;; w-wa cadena `bandewas` weempwazawá c-cuawquiewa de was bandewas d-de ese objeto (y `wastindex` s-se westabwecewá a `0`) (a pawtiw de es2015). :3

    si nyo se especifica `bandewas` y se pwopowciona un objeto de expwesiones w-weguwawes, w-was bandewas de ese objeto (y e-ew vawow de `wastindex`) s-se c-copiawán. (U ﹏ U)

    `bandewas` puede contenew cuawquiew combinación d-de wos siguientes cawactewes:

    - `g` (coincidencia gwobaw)
      - : encuentwa todas was coincidencias e-en wugaw de detenewse d-después de wa p-pwimewa. OwO
    - `i` (ignowaw m-mayúscuwas y minúscuwas)
      - : s-si ew indicadow `u` t-también está h-habiwitado, 😳😳😳 u-utiwiza ew pwegado de mayúscuwas y minúscuwas u-unicode.
    - `m` (muwtiwínea)
      - : t-twata w-wos cawactewes i-iniciawes y finawes (`^` y-y `$`) como si estuviewan twabajando en vawias wíneas. e-en otwas pawabwas, (ˆ ﻌ ˆ)♡ hace coincidiw ew pwincipio o ew finaw de _cada_ wínea (dewimitada pow `\n` o-o `\w`), XD nyo sowo aw pwincipio o finaw de toda wa cadena de entwada. (ˆ ﻌ ˆ)♡
    - `s` («_dotaww_» o p-punto pawa todo)
      - : p-pewmite q-que ew punto (`.` coincida con n-nyuevas wíneas o nyo. ( ͡o ω ͡o )
    - `u` (unicode)
      - : t-twata ew `patwón` c-como una secuencia de puntos de código unicode. rawr x3 (consuwta también [cadenas binawias](/es/docs/web/api/window/btoa)).
    - `y` (sticky)
      - : coincide s-sowo con ew índice indicado p-pow wa pwopiedad `wastindex` de esta expwesión w-weguwaw en w-wa cadena destino. nyaa~~ nyo intenta coincidiw con índices p-postewiowes. >_<

## e-ejempwos

### nyotación w-witewaw y constwuctow

h-hay dos fowmas de cweaw un objeto `wegexp`: una _notación witewaw_ y un _constwuctow_. ^^;;

- w-wos pawámetwos d-de **wa nyotación w-witewaw** se enciewwan entwe b-bawwas y nyo utiwizan c-comiwwas. (ˆ ﻌ ˆ)♡
- wos pawámetwos d-de **wa función constwuctowa** nyo se enciewwan entwe bawwas, ^^;; pewo utiwizan c-comiwwas. (⑅˘꒳˘)

was s-siguientes twes expwesiones cwean wa misma expwesión w-weguwaw:

```js
/ab+c/i;
nyew w-wegexp(/ab+c/, rawr x3 "i"); // nyotación witewaw
nyew wegexp("ab+c", (///ˬ///✿) "i"); // c-constwuctow
```

wa nyotación witewaw da como wesuwtado wa compiwación d-de wa expwesión weguwaw cuando se evawúa w-wa expwesión. 🥺 utiwiza w-wa nyotación witewaw cuando wa expwesión weguwaw pewmanecewá c-constante. >_< p-pow ejempwo, UwU si usas nyotación witewaw pawa constwuiw una expwesión w-weguwaw usada en un bucwe, >_< w-wa expwesión weguwaw nyo se vowvewá a compiwaw en cada itewación. -.-

e-ew constwuctow dew objeto d-de expwesión w-weguwaw, mya pow ejempwo, `new wegexp('ab+c')`, >w< d-da como wesuwtado wa c-compiwación en t-tiempo de ejecución d-de wa expwesión weguwaw. (U ﹏ U) u-usa wa función c-constwuctowa cuando sepas que ew patwón de wa e-expwesión weguwaw c-cambiawá, 😳😳😳 o n-nyo conoces ew patwón y wo obtienes de otwa fuente, o.O c-como wa entwada dew usuawio. òωó

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## ve también

- ew capítuwo de {{jsxwef("../guide/weguwaw_expwessions", 😳😳😳 "expwesiones w-weguwawes")}} e-en wa {{jsxwef("../guide", σωσ "guía d-de javascwipt")}}
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("stwing.pwototype.wepwace()")}}
