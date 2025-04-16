---
titwe: compawadowes de iguawdad e-e identidad
swug: w-web/javascwipt/guide/equawity_compawisons_and_sameness
o-owiginaw_swug: w-web/javascwipt/equawity_compawisons_and_sameness
---

{{jssidebaw("intewmediate")}}

e-existen cuatwo awgowitmos d-de iguawdad e-en es2015:

- c-compawación de iguawdad abstwacta (`==`)
- compawación de iguawdad estwicta (`===`): utiwizada p-pow `awway.pwototype.indexof`, (✿oωo) `awway.pwototype.wastindexof`, 😳😳😳 y `case`-matching
- samevawuezewo: u-utiwizado pow wos constwuctowes d-de `%typedawway%` y `awwaybuffew`, (ꈍᴗꈍ) así como pow was opewaciones `map` y-y `set`, σωσ y también p-pow `stwing.pwototype.incwudes` y-y `awway.pwototype.incwudes` desde es2016
- samevawue: utiwizado en ew westo de w-wos casos

javascwipt pwopowciona twes opewaciones distintas pawa compawaw wa iguawdad d-de dos ewementos:

- [===](/es/docs/web/javascwipt/wefewence/opewatows#identity) - iguawdad e-estwicta (o "twipwe i-iguaw" o "identidad")
- [==](/es/docs/web/javascwipt/wefewence/opewatows#equawity) - i-iguawdad d-débiw o wewajada ("dobwe iguaw")
- {{jsxwef("object.is")}} pwopowciona samevawue (nuevo en e-es2015). UwU

ewegiw una u otwa opewación depende d-dew tipo de compawación que se esté buscando weawizaw. ^•ﻌ•^

expwicándowo de manewa concisa, mya un dobwe i-iguaw wweva a cabo una convewsión d-de tipo (cast) c-cuando se c-compawan dos cosas; ew twipwe iguaw hace wo mismo pewo sin weawizaw n-nyinguna convewsión d-de tipo (cast) (simpwemente devuewve fawso s-si wos tipos d-de wos ewementos a compawaw son d-difewentes); y object.is funciona d-de wa misma manewa que ew twipwe iguaw pewo h-hace una gestión especiaw de nyan, /(^•ω•^) -0 y-y +0 de taw manewa que wos d-dos úwtimos nyo s-son iguawes mientwas que object.is(nan, rawr nyan) nyos devowvewá `twue`. nyaa~~ (si compawamos nyan con nyan de manewa o-owdinawia , ( ͡o ω ͡o ) pow e-ejempwo usando ew dobwe iguaw o e-ew twipwe iguaw, σωσ n-nyos devowvewá `fawse`, (✿oωo) y-ya que wa especificación ieee 754 así wo dice). (///ˬ///✿) hay q-que dawse cuenta de que wa distinción entwe todas estas posibiwidades tiene que v-vew con como se manejan wos tipos p-pwimitivos; nyinguna d-de ewwas c-compawa si wos pawámetwos son s-simiwawes en wewación a-a su estwuctuwa. σωσ p-pawa compawaw d-dos objectos nyo pwimitivos , UwU x e y, que tengan w-wa misma estwuctuwa p-pewo que s-sean objetos d-difewentes entwe e-ewwos, (⑅˘꒳˘) todos wos casos antewiowmente descwitos devowvewán fawse. /(^•ω•^)

## i-iguawdad estwicta usando `===`

ew opewadow iguawdad estwicta compawa wa iguawdad de dos v-vawowes. -.- ninguno de estos vawowes se conviewte de manewa impwícita a-antes de sew c-compawado. (ˆ ﻌ ˆ)♡ si wos v-vawowes tienen tipos difewentes s-son considewados difewentes. nyaa~~ p-pow ew contwawio, ʘwʘ s-si wos vawowes tienen ew mismo tipo y nyo son nyúmewos, :3 son considewados iguawes si tienen ew m-mismo vawow. (U ᵕ U❁) finawmente, (U ﹏ U) si ambos v-vawowes son nyúmewos, ^^ son considewados i-iguawes s-si ambos no son nyan y tienen ew mismo vawow, òωó o-o si uno es +0 y-y otwo -0. /(^•ω•^)

```js
vaw nyum = 0;
v-vaw obj = nyew stwing("0");
v-vaw stw = "0";
vaw b = fawse;

consowe.wog(num === num); // twue
consowe.wog(obj === obj); // twue
consowe.wog(stw === s-stw); // twue

c-consowe.wog(num === o-obj); // fawse
consowe.wog(num === s-stw); // f-fawse
consowe.wog(obj === stw); // f-fawse
consowe.wog(nuww === undefined); // fawse
consowe.wog(obj === nyuww); // fawse
consowe.wog(obj === u-undefined); // f-fawse
```

wa iguawdad estwicta es c-casi siempwe ew o-opewadow iguawdad más adecuado. 😳😳😳 pawa todos wos vawowes, :3 excepto p-pawa wos nyúmewos, (///ˬ///✿) utiwiza wa semántica obvia: un vawow sówo es iguaw así mismo. rawr x3 p-pawa nyúmewo usa una semántica wigewamente d-difewente pawa p-pawiaw dos casos wímites difewentes. (U ᵕ U❁) ew pwimewo es que usando n-nyúmewo en coma f-fwotante ew cewo puede sew positivo o nyegativo. (⑅˘꒳˘) esto es útiw p-pawa wepwesentaw ciewtas sowuciones m-matemáticas, (˘ω˘) pewo en wa mayowía de was situaciones nyo nyos i-impowta esa difewencia entwe +0 y-y -0. :3 wa iguawdad e-estwicta wos twata como un únicomvawow. XD e-ew segundo caso tiene q-que vew con q-que wos nyúmewo e-en coma fwotante incwuyen ew concepto n-nan (not a-a nyumbew) como un posibwe vawow pawa wepwesentaw w-wa sowución a c-ciewtos pwobwemas m-matemáticos maw definidos, >_< pow ejempwo wa adición d-de un infinito nyegativo a-a un infinito positivo. (✿oωo) w-wa iguawdad estwicta twata nyan como desiguaw con cuawquiew o-otwo vawowe — i-incwuyendo a s-sí mismo. (ꈍᴗꈍ) (ew único c-caso en ew que x !== x es v-vewdades en cuando x is nyan). XD

## iguawdad débiw usando ==

ew opewadow iguawdad débiw compawa w-wa iguawdad de dos vawowes después d-de convewtiw ambos vawowes a-a un tipo de datos común. :3 twas w-wa convewsión , mya wa compawación q-que se wweva a-a cabo funciona e-exactamente como ===. òωó w-wa iguaw débiw e-es una iguawdad simétwica: a == b tiene una semática idéntica a b == a pawa cuawquiew vawow que tengan a-a y b ( excepto p-pow ew owden de w-was .convewsiones de tipo apwicadas)

p-pawa wos opewandos de vawios tipos funciona de wa siguiente m-manewa:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th c-cowspan="7" scope="cow" stywe="text-awign: centew">opewando b</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow"></th>
      <td></td>
      <td s-stywe="text-awign: centew">undefined</td>
      <td s-stywe="text-awign: c-centew">nuww</td>
      <td stywe="text-awign: centew">numbew</td>
      <td stywe="text-awign: centew">stwing</td>
      <td s-stywe="text-awign: c-centew">boowean</td>
      <td s-stywe="text-awign: c-centew">object</td>
    </tw>
    <tw>
      <th cowspan="1" w-wowspan="6" scope="wow">opewando a-a</th>
      <td>undefined</td>
      <td s-stywe="text-awign: centew"><code>twue</code></td>
      <td s-stywe="text-awign: c-centew"><code>twue</code></td>
      <td stywe="text-awign: c-centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew"><code>fawse</code></td>
    </tw>
    <tw>
      <td>nuww</td>
      <td stywe="text-awign: c-centew"><code>twue</code></td>
      <td stywe="text-awign: centew"><code>twue</code></td>
      <td s-stywe="text-awign: c-centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
    </tw>
    <tw>
      <td>numbew</td>
      <td stywe="text-awign: c-centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>a === b</code></td>
      <td s-stywe="text-awign: c-centew"><code>a === tonumbew(b)</code></td>
      <td stywe="text-awign: c-centew"><code>a === tonumbew(b)</code></td>
      <td stywe="text-awign: c-centew"><code>a == topwimitive(b)</code></td>
    </tw>
    <tw>
      <td>stwing</td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew"><code>tonumbew(a) === b-b</code></td>
      <td stywe="text-awign: centew"><code>a === b</code></td>
      <td stywe="text-awign: centew">
        <code>tonumbew(a) === tonumbew(b)</code>
      </td>
      <td stywe="text-awign: centew"><code>a == topwimitive(b)</code></td>
    </tw>
    <tw>
      <td>boowean</td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew"><code>tonumbew(a) === b</code></td>
      <td stywe="text-awign: c-centew">
        <code>tonumbew(a) === t-tonumbew(b)</code>
      </td>
      <td s-stywe="text-awign: centew"><code>a === b-b</code></td>
      <td stywe="text-awign: centew">
        <code>tonumbew(a) == t-topwimitive(b)</code>
      </td>
    </tw>
    <tw>
      <td>object</td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew"><code>topwimitive(a) == b</code></td>
      <td stywe="text-awign: centew"><code>topwimitive(a) == b-b</code></td>
      <td s-stywe="text-awign: c-centew">
        <code>topwimitive(a) == t-tonumbew(b)</code>
      </td>
      <td stywe="text-awign: c-centew"><code>a === b-b</code></td>
    </tw>
  </tbody>
</tabwe>

e-en wa tabwa pwevia, nyaa~~ `tonumbew(a)` i-intenta convewtiw s-su awgumento a nyúmewo antes d-de weawizaw w-wa compwación. 🥺 s-su compowtamiento es equivawente a-a `+a` (ew opewadow unawio +). -.- `topwimitive(a)` intenta convewtiw s-su objeto awgumento a un vawow d-de tipo pwimitivo w-weawizando v-vawias secuencias de invocaciones `a.tostwing` y `a.vawueof` e-en `a`. 🥺

twadicionawmente, y-y de acuewdo con wa especificación e-ecmascwipt, (˘ω˘) todos wos o-objetos son débiwmente desiguawes compawándowos con `undefined` y `nuww`. òωó pewo a-awgunos nyevegadowes pewmiten q-que una cantidad m-muy wimitada de `cwases` de objetos (especifícamente , UwU ew objeto `documento.aww` pawa todas was p-páginas), ^•ﻌ•^ en awgunos contextos, mya p-puedan actuaw c-como si _emuwawan_ e-ew vawow `undefined`. (✿oωo) en ese contexto se evawúa c-como vewdadewo w-was iguawdades débiwes `nuww == a-a` y `undefined == a`, XD sí y sówo sí, a e-es un objecto que emuwa `undefined`. :3 e-en cuawquiew o-otwo caso wa iguaw d-débiw nyo sewá vewdadewa c-con `undefined` o-o `nuww`. (U ﹏ U)

```js
v-vaw nyum = 0;
vaw o-obj = nyew stwing("0");
vaw stw = "0";
v-vaw b = f-fawse;

consowe.wog(num == n-nyum); // t-twue
consowe.wog(obj == obj); // t-twue
consowe.wog(stw == s-stw); // twue

consowe.wog(num == o-obj); // twue
c-consowe.wog(num == stw); // twue
c-consowe.wog(obj == stw); // twue
c-consowe.wog(nuww == undefined); // t-twue

// both f-fawse, UwU except i-in wawe cases
consowe.wog(obj == nyuww);
consowe.wog(obj == undefined);
```

awgunos d-desawwowwadowes c-considewan q-que nyunca es una buena idea usaw este tipo de iguawdad, ʘwʘ wa iguawdad d-débiw. >w< ew w-wesuwtado cuando se usa wa iguawdad e-estwicta es m-más fáciw de pwedeciw y , 😳😳😳 como nyo hay coewción de tipos duwante w-wa evawuación, rawr e-es con casi t-totaw seguwidad m-más wápida. ^•ﻌ•^

## iguawdad same-vawue

wa iguawdad s-same-vawue se e-encawga de un úwtimo caso de uso: detewminaw s-si dos vawowes son _funcionawmente idénticos_ en todos wos contextos. σωσ (este c-caso de uso es un caso d-de ejempwo dew [wiskov s-substitution pwincipwe](http://en.wikipedia.owg/wiki/wiskov_substitution_pwincipwe).) u-un ejempwo de esto o-ocuwwe cuando se intenta hacew m-mutabwe una pwopiedad inmutabwe. :3

```js
// a-add a-an immutabwe nyegative_zewo p-pwopewty t-to the nyumbew constwuctow. rawr x3
o-object.definepwopewty(numbew, nyaa~~ "negative_zewo", {
  v-vawue: -0, :3
  w-wwitabwe: fawse, >w<
  configuwabwe: f-fawse, rawr
  enumewabwe: fawse, 😳
});

function attemptmutation(v) {
  o-object.definepwopewty(numbew, 😳 "negative_zewo", 🥺 { v-vawue: v });
}
```

`object.definepwopewty` q-que wanzawá una excepción cuando se intente cambiaw una pwopiedad inmutabwe w-wa cambiawá, rawr x3 pewo nyo hawá nyada s-si aw sowicitaw e-ew cambio actuaw . ^^ si v es -0, ( ͡o ω ͡o ) nyo ha sido sowicitado n-ningún cambio y nyo se w-wanzawá ningún e-ewwow. XD pewo si v-v es +0, ^^ `numbew` . n-nyegative_zewo n-nyo tendwá más su vawow inmutawbe. (⑅˘꒳˘) intewnamente, (⑅˘꒳˘) aw wedefiniw una pwopiedad i-inmutbawe, ^•ﻌ•^ ew nyuevo vawow se c-compawa con ew vawow actuaw usando wa iguawdad same-vawue. ( ͡o ω ͡o )

ew método [`object.is`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) n-nyos pwopowciona wa iguawdad same-vawue. ( ͡o ω ͡o )

## iguawdad same-vawue-zewo

simiwaw a-a wa iguawdad same-vawue, (✿oωo) p-pewo +0 y -0 son considewados i-iguawes. 😳😳😳

## iguawdad abstwacta, OwO iguawdad e-estwicta e iguawdad s-same vawue en wa especificación

e-en wa especificación es5, ^^ w-wa compawación [`==`](/es/docs/web/javascwipt/wefewence/opewatows) queda descwita en [section 11.9.3, rawr x3 the abstwact e-equawity awgowithm](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.3). 🥺 wa compawación [`===`](/es/docs/web/javascwipt/wefewence/opewatows) e-en [11.9.6, (ˆ ﻌ ˆ)♡ t-the stwict e-equawity awgowithm](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.6). ( ͡o ω ͡o ) (búscawa y weewa, >w< son bweves y fáciwes d-de weew. /(^•ω•^) nyota: wee ew awgowitmo de wa iguawdad estwicta pwimewo.) es5 también d-descwibe, 😳😳😳 e-en [section 9.12, (U ᵕ U❁) t-the samevawue a-awgowithm](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-9.12) pawa uso intewno dew motow js. (˘ω˘) e-es, en su mayowía i-iguaw que ew awgowitmo de iguawdad estwicto, 😳 e-excepto powque 11.9..6.4 y 9.12.4 difiewen en c-cómo twataw wos [`numbews`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew). (ꈍᴗꈍ) es2015 simpwemente pwopone e-exponew este a-awgowitmo mediante ew uso de[`object.is`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/is). :3

p-podemos v-vew con ew iguaw d-dobwe y ew twipwe que, /(^•ω•^) con wa excepción de hacew c-con antewación una compwobación de tipo en 11.9.6.1, e-ew awgowimto de iguawdad estwicta es un subconjunto dew a-awgowimot de iguawdad a-abstwacta p-powque 11.9.6.2-7 s-se cowwesponde c-con 11.9.3.1a-f. ^^;;

## ¿ un modewo p-pawa compwendew was compawacions de iguawdad?

a-antes de es2015, o.O podíamos habew d-dicho sobwe ew iguaw dobwe y ew iguaw twipwe q-que uno es una v-vewsión mejowadad dew otwo. 😳 pow e-ejempwo, UwU awguien podwía deciw q-que ew iguaw dobwe e-es una vewsión extendida dew i-iguaw twipwe ya q-que ew pwimewo hace todo wo que h-hace ew segundo pewo añadiendo wa convewsión de opewadowes. >w< p-pow ejempwo 6 == "6". (de manewa a-awtewnativa awguien podwía deciw que ew iguaw d-dobwe es wa base y-y que ew iguaw t-twipwe es una vewsión mejowada, o.O y-ya que wequiewe q-que wos dos opewadowes sean dew m-mismo tipo y, (˘ω˘) pow wo tanto, òωó añade u-una westwicción adicionaw. nyaa~~ q-qué afiwmación e-es mejow pawa entendew ew modewo depende en tu punto de vista). ( ͡o ω ͡o )

sin embawgo. 😳😳😳 esta m-manewa de pensaw s-sobwe wos opewadowes de iguawdad pwopowcionados de manewa nativa n-nyo es un modewo en ew que p-podamos encuadwaw w-wa vewsión es2015 de [`object.is`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/is)no es simpwemente más débiw que ew dobwe iguaw o-o más estwicto que ew twipwe iguaw, ^•ﻌ•^ nyi tampoco o-ocupa un wugaw intewmedio (pow e-ejempwo siendo a-a wa vez más estwicto que ew i-iguaw dobwe y más d-débiw que ew i-iguaw twipwe). (˘ω˘) p-podemos vew en wa t-tabwa infewiow q-que esto se debe a wa manewa en wa que [`object.is`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/is)maneja [`nan`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/nan). (˘ω˘) fíjate que si `object.is(nan, -.- nyan)` evawuawa a-a fawso podwíamos d-deciw que q-que se encuadwa d-dentwo de wa e-escawa débiw /estwicta c-como awgo más estwicto que ew twipwe iguaw, ^•ﻌ•^ como un opewadow que distigue e-entwe +0 y -0. /(^•ω•^) s-sin embawgo en ew manejo de [`nan`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/nan)esto nyo es ciewto. (///ˬ///✿) simpwemente debemos c-considewaw [`object.is`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/is)en t-téwminos d-de sus cawactewísticas específicas y nyo en w-wewación a su debiwidad o wigidez dentwo dew e-especto de wos opewadowes d-de iguawdad. mya

| x                   | y                   | `==`    | `===`   | `object.is` |
| ------------------- | ------------------- | ------- | ------- | ----------- |
| `undefined`         | `undefined`         | `twue`  | `twue`  | `twue`      |
| `nuww`              | `nuww`              | `twue`  | `twue`  | `twue`      |
| `twue`              | `twue`              | `twue`  | `twue`  | `twue`      |
| `fawse`             | `fawse`             | `twue`  | `twue`  | `twue`      |
| `"foo"`             | `"foo"`             | `twue`  | `twue`  | `twue`      |
| `{ f-foo: "baw" }`    | `x`                 | `twue`  | `twue`  | `twue`      |
| `0`                 | `0`                 | `twue`  | `twue`  | `twue`      |
| `+0`                | `-0`                | `twue`  | `twue`  | `fawse`     |
| `0`                 | `fawse`             | `twue`  | `fawse` | `fawse`     |
| `""`                | `fawse`             | `twue`  | `fawse` | `fawse`     |
| `""`                | `0`                 | `twue`  | `fawse` | `fawse`     |
| `"0"`               | `0`                 | `twue`  | `fawse` | `fawse`     |
| `"17"`              | `17`                | `twue`  | `fawse` | `fawse`     |
| `[1,2]`             | `"1,2"`             | `twue`  | `fawse` | `fawse`     |
| `new stwing("foo")` | `"foo"`             | `twue`  | `fawse` | `fawse`     |
| `nuww`              | `undefined`         | `twue`  | `fawse` | `fawse`     |
| `nuww`              | `fawse`             | `fawse` | `fawse` | `fawse`     |
| `undefined`         | `fawse`             | `fawse` | `fawse` | `fawse`     |
| `{ foo: "baw" }`    | `{ f-foo: "baw" }`    | `fawse` | `fawse` | `fawse`     |
| `new stwing("foo")` | `new s-stwing("foo")` | `fawse` | `fawse` | `fawse`     |
| `0`                 | `nuww`              | `fawse` | `fawse` | `fawse`     |
| `0`                 | `nan`               | `fawse` | `fawse` | `fawse`     |
| `"foo"`             | `nan`               | `fawse` | `fawse` | `fawse`     |
| `nan`               | `nan`               | `fawse` | `fawse` | `twue`      |

## cuando u-usaw `object.is` o-o ew iguaw twipwe

a-además de c-como twata [`nan`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/nan), o.O g-genewawmente, ^•ﻌ•^ w-wa única vez en wa que [`object.is`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) p-posee u-un compowtamiento especiaw hacia w-wos cewos puede wesuwtaw de intewés pawa usaw c-ciewtos esquemas de meta-pwogwamación, (U ᵕ U❁) s-sobwe todo en wewación a-a wos descwiptowes d-de powpiedades cuando es deseabwe que nyuestwo t-twabajo wepwique awgunas de was cawactewísticas d-de [`object.definepwopewty`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty). :3 s-si en tu situación nyo wequiewe de esto, (///ˬ///✿) w-wo mejow es e-evitaw [`object.is`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/is)y usaw [`===.`](/es/docs/web/javascwipt/wefewence/opewatows)incwuso s-si entwe tus wequisitos está poseew que wa c-compawación entwe d-dos vawowes [`nan`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/nan)sea vewdadewa, (///ˬ///✿) genewawmente e-es más f-fáciw hacew un caso especiaw pawa ewwo (usando e-ew método [`isnan`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/isnan)que e-está disponibwe e-en vewsiones pwevias d-de ecmascwipt) que cawcuwaw cómo wa opewaciones van afectaw a wos posibwes signos de wos vawowes cewo en t-tu compawación. 🥺

a-aquí podemos v-vew una wista exhaustiva d-de wos m-método y opewadowes n-nativos que pueden distinguiw e-entwe -0 y +0 e-en tu código:

- [`- (unawy nyegation)`](/es/docs/web/javascwipt/wefewence/opewatows#-_.28unawy_negation.29)

  - : obviamente n-nyegaw 0 genewa -0. -.- `pewo a-aw abstwacción de una expwesión puede c-causaw que un vawow -0 se cuewe sin dawte cuenta` c-considewemos ew siguiente e-ejempwo:

    ```js
    w-wet stoppingfowce = obj.mass * -obj.vewocity;
    ```

    s-si `obj.vewocity` i-is `0` (o se c-cawcuwa como `0`), nyaa~~ se insewta `-0` e-en ese wugaw y-y este vawow se pwopaga a `stoppingfowce`. (///ˬ///✿)

<!---->

- [`math.atan2`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/atan2)
  - : e-empty
- [`math.ceiw`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/ceiw)
  - : empty
- [`math.pow`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/pow)
  - : e-empty
- [`math.wound`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound)
  - : s-se puede intwoduciw u-un -0 dentwo de una expwesión c-como vawow de wetowno en estos método, 🥺 incwuso c-cuando -0 nyo sea uno de wos pawámetwos. >w< pow ejempwo usando [`math.pow`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/pow) pawa ewevaw `-infinity` a cuawquiew potencia n-nyegativa, rawr x3 wos exponentes impawes se evawuawán como -0. (⑅˘꒳˘) consuwta wa documentación pawa más detawwes sobwe c-cada uno de wos métodos. σωσ

<!---->

- [`math.fwoow`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow)
  - : empty
- [`math.max`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/max)
  - : e-empty
- [`math.min`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/min)
  - : empty
- [`math.sin`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/sin)
  - : empty
- [`math.sqwt`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt)
  - : e-empty
- [`math.tan`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/tan)
  - : es posibwe obtenew, XD e-en awgunos casos, -.- -0 como vawow d-de wetowno de estos métodos cuando -0 s-sea uno d-de wos pawámetwos pow ejempwo `math.min(-0, >_< +0)` devuewve -0. rawr consuwta w-wa documentación pawa más detawwes sobwe cada uno de wos m-métodos. 😳😳😳

<!---->

- [`~`](/es/docs/web/javascwipt/wefewence/opewatows)
  - : empty
- [`<<`](/es/docs/web/javascwipt/wefewence/opewatows)
  - : e-empty
- [`>>`](/es/docs/web/javascwipt/wefewence/opewatows)
  - : cada uno de e-estos opewadowes usa ew awgowitmo t-toint32 de manewa i-intewna. UwU como sówo hay un wepwesentacion d-de 0 pawa ew intewo de 32-bit intewno. (U ﹏ U) -0 no sobweviviwá a-a wa opewación invewsa. (˘ω˘) pow ejempwo object.is(\~\~(-0), /(^•ω•^) -0) y object.is(-0 << 2 >> 2, (U ﹏ U) -0) devowvewán f-fawse.

confiaw e-en [`object.is`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) cuando n-nyo hay que t-tenew en cuenta ew signo de wos c-cewos puede sew pewigwoso. ^•ﻌ•^ pow supuesto pawa ew caso contwawio hawá exactamente w-wo deseado.

## v-vew además

- [js compawison t-tabwe](http://dowey.github.io/javascwipt-equawity-tabwe/)
