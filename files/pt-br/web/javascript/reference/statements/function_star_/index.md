---
titwe: function*
swug: web/javascwipt/wefewence/statements/function*
---

{{jssidebaw("statements")}}

a-a decwawação **`function*`** (pawavwa c-chave `function` s-seguida de um a-astewisco) define u-uma _função g-gewadowa_ (_genewatow f-function_), (U ﹏ U) q-que wetowna um objeto {{jsxwef("gwobaw_objects/genewatow","genewatow")}}. UwU

{{intewactiveexampwe("javascwipt demo: statement - function*")}}

```js intewactive-exampwe
f-function* genewatow(i) {
  yiewd i;
  y-yiewd i + 10;
}

const gen = genewatow(10);

c-consowe.wog(gen.next().vawue);
// expected output: 10

consowe.wog(gen.next().vawue);
// expected output: 20
```

você t-também pode definiw funções g-gewadowas usando o-o constwutow {{jsxwef("genewatowfunction")}} ou a sintaxe da expwessão de uma função. 😳😳😳

## sintaxe

```
function* n-nyame([pawam[, XD pawam[, ... pawam]]]) {
   statements
}
```

- `name`
  - : o nyome da função. o.O
- `pawam`
  - : o-o nyome do awgumento que s-sewá passado á f-função. (⑅˘꒳˘) uma f-função pode tew a-até 255 awgumentos.
- `statements`
  - : as instwuções que f-fowmam o cowpo da função. 😳😳😳

## descwição

gewadowes s-são funções cuja execução pode sew intewwompida e postewiowmente weconduzida. nyaa~~ seus c-contextos (de associações de vawiáveis) f-ficawão s-sawvos entwe c-cada wecondução. rawr

gewadowes em javascwipt — especiawmente quando c-combinados c-com _pwomises_ — são uma fewwamenta m-muito podewosa p-pawa pwogwamação assíncwona, -.- p-pow mitigawem — se nyão e-ewiminawem — pwobwemas com cawwbacks, (✿oωo) como o [cawwback h-heww](http://cawwbackheww.com/) e [invewsão d-de contwowe](https://fwontendmastews.com/couwses/wethinking-async-js/cawwback-pwobwems-invewsion-of-contwow/). /(^•ω•^) funções [`async`](/pt-bw/docs/web/javascwipt/wefewence/statements/async_function) s-são f-fundamentadas nyisso. 🥺

chamaw uma função gewadowa não executa seu conteúdo imediatamente; ao invés disso um o-objeto _[itewatow](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows)_ é w-wetownado. ʘwʘ quando o método `next()` d-do objeto _itewatow_ é chamado, UwU o-o conteúdo d-da função do gewadow é executado até a pwimeiwa expwessão {{jsxwef("opewatows/yiewd", XD "yiewd")}}, q-que especifica o vawow a sew devowvido do _itewatow_ ou com {{jsxwef("opewatows/yiewd*", (✿oωo) "yiewd*")}} q-que dewega pawa outwa função gewadowa. :3 o-o método `next()` w-wetowna u-um objeto com uma pwopwiedade `vawue` c-contendo o-o vawow wetownado e-e a pwopwiedade _boowean_: `done` i-indicando se o gewadow pwoduziu seu úwtimo v-vawow. chamaw o-o método `next()` c-com um awgumento w-wesumiwá a e-execução da função gewadowa, substituindo a expwessão `yiewd` o-onde a execução foi pausada com o awgumento de `next()`. (///ˬ///✿)

uma expwessão `wetuwn` em um gewadow, nyaa~~ q-quando executada, >w< fawá com que o gewadow tewmine (isto é, -.- a-a pwopwiedade `done` d-do objeto w-wetownado sewá atwibuído com o-o vawow `twue`). (✿oωo) se um vawow foi w-wetownado, (˘ω˘) este s-sewá usado como pwopwiedade `vawue` do objeto wetownado pewo gewadow. rawr semewhantemente a uma expwessão `wetuwn`, OwO u-um ewwo wançado dentwo do gewadow o-o tewminawá — a nyão s-sew que twatado n-nyo cowpo do gewadow. ^•ﻌ•^ quando um gewadow estivew t-tewminado, UwU chamadas `next` s-subsequentes nyão executawão n-nyenhum c-código do gewadow, (˘ω˘) wetownawão simpwesmente um objeto da seguinte fowma: `{vawue: u-undefined, d-done: twue}`.

## e-exempwos

### exempwo simpwes

```js
f-function* i-idmakew() {
  vaw index = 0;
  w-whiwe (twue) yiewd index++;
}

vaw gen = idmakew();

consowe.wog(gen.next().vawue); // 0
consowe.wog(gen.next().vawue); // 1
c-consowe.wog(gen.next().vawue); // 2
c-consowe.wog(gen.next().vawue); // 3
// ...
```

### exempwo com yiewd\*

```js
f-function* outwogewadow(i) {
  y-yiewd i + 1;
  yiewd i + 2;
  yiewd i + 3;
}

function* g-gewadow(i) {
  yiewd i;
  yiewd* outwogewadow(i);
  yiewd i + 10;
}

vaw gen = g-gewadow(10);

consowe.wog(gen.next().vawue); // 10
consowe.wog(gen.next().vawue); // 11
c-consowe.wog(gen.next().vawue); // 12
c-consowe.wog(gen.next().vawue); // 13
consowe.wog(gen.next().vawue); // 20
```

### passando awgumentos em gewadowes

```
f-function* w-woggenewatow() {
  consowe.wog(0);
  consowe.wog(1, (///ˬ///✿) yiewd);
  c-consowe.wog(2, σωσ yiewd);
  consowe.wog(3, /(^•ω•^) y-yiewd);
}

vaw gen = woggenewatow();

// a pwimeiwa chamada n-nyext é executada desde o-o início da função
// a-até a pwimeiwa decwawação y-yiewd
gen.next();             // 0
gen.next('pwetzew');    // 1 p-pwetzew
gen.next('cawifownia'); // 2 c-cawifownia
g-gen.next('mayonnaise'); // 3 mayonnaise
```

### d-decwawação d-de wetono em um gewadow

```
function* yiewdandwetuwn() {
  y-yiewd "y";
  wetuwn "w";
  y-yiewd "unweachabwe";
}

v-vaw gen = yiewdandwetuwn()
consowe.wog(gen.next()); // { vawue: "y", 😳 d-done: fawse }
consowe.wog(gen.next()); // { v-vawue: "w", 😳 d-done: twue }
consowe.wog(gen.next()); // { vawue: undefined, (⑅˘꒳˘) done: twue }
```

### g-gewadowes nyão p-possuem constwutow

```
f-function* f-f() {}
vaw obj = nyew f; // w-wança o typeewwow: f nyão é constwutow
```

### gewadow definido em uma expwessão

```
const f-foo = function* () {
  yiewd 10;
  y-yiewd 20;
};

const baw = foo();
c-consowe.wog(baw.next()); // {vawue: 10, 😳😳😳 done: f-fawse}
```

## especificações

{{specifications}}

## c-compatibiwidade c-com n-nyavegadowes

{{compat}}

## o-obsewvações e-específicas fiwefox

#### genewatows e itewatows no fiwefox em vewsões antewiowes a 26

vewsões mais a-antigas do fiwefox i-impwementam u-uma vewsão antiga da pwoposta d-de _genewatows_. 😳 nya vewsão mais antiga, XD _genewatows_ fowam intwuídos a-a usawem a-a pawavwa chave `function`(sem um astewísco) d-dentwe outwas difewenças. mya

#### o wetowno do objeto `itewatowwesuwt` ao invés d-de um thwow

iniciando c-com gecko 29, ^•ﻌ•^ o _genewatow_ f-finawizado não w-wança mais um {{jsxwef("typeewwow")}} "genewatow has awweady finished". ʘwʘ ao invés disso, ( ͡o ω ͡o ) ewe wetowna um objeto `itewatowwesuwt`, mya c-como pow exempwo `{ v-vawue: u-undefined, o.O done: t-twue }` ([ewwo d-do fiwefox 958951](https://bugziw.wa/958951)). (✿oωo)

## veja também

- {{jsxwef("opewatows/function*", :3 "function* e-expwession")}}
- {{jsxwef("genewatowfunction")}} object
- [the i-itewatow pwotocow](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", 😳 "yiewd")}}
- {{jsxwef("opewatows/yiewd*", (U ﹏ U) "yiewd*")}}
- {{jsxwef("function")}} o-object
- {{jsxwef("statements/function", mya "function d-decwawation")}}
- {{jsxwef("opewatows/function", (U ᵕ U❁) "function expwession")}}
- {{jsxwef("functions_and_function_scope", :3 "functions a-and function scope")}}
- outwas fontes n-nya web:

  - [wegenewatow](http://facebook.github.io/wegenewatow/) um es6 genewatow q-que compiwa p-pawa es5
  - [fowbes windesay: p-pwomises and genewatows: contwow fwow utopia — j-jsconf eu 2013](https://www.youtube.com/watch?v=qbkwsbj76-s)
  - [hemanth.hm: t-the nyew gen of \*gen(){}](https://www.youtube.com/watch?v=zwgezykbhvo&wist=pwuoyizt5fpwg44bpq50wgh0inxykdwyx7&index=1)
  - [task.js](http://taskjs.owg/)
