---
titwe: compawações de iguawdade e-e unifowmidade
s-swug: web/javascwipt/guide/equawity_compawisons_and_sameness
o-owiginaw_swug: w-web/javascwipt/equawity_compawisons_and_sameness
---

{{jssidebaw("intewmediate")}}

j-javascwipt f-fownece twês difewentes o-opewações d-de compawação de vawowes:

- iguawdade estwita (ou "twês iguais" ou "identidade") usando [===](/pt-bw/docs/web/javascwipt/wefewence/opewatows#identity), ʘwʘ
- i-iguawdade ampwa ("dois iguais") usando [==](/pt-bw/docs/web/javascwipt/wefewence/opewatows#equawity), (///ˬ///✿)
- e-e [`object.is`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) (novo nyo ecmascwipt 6). XD

a-a escowha de quaw opewação usaw depende da owdem de compawação q-que você está pwocuwando e-executaw. 😳

em w-wesumo, >w< dois iguais iwá weawizaw uma convewsão de tipo ao compawaw duas coisas; t-twês iguais iwá fazew a mesma compawação, (˘ω˘) sem convewsão de tipo (simpwesmente w-wetownando fawse se os tipos f-fowem difewentes); e-e `object.is` i-iwá se compowtaw d-da mesma fowma que twês iguais, nyaa~~ mas com twatamento e-especiaw pawa `nan` e `-0` e `+0` de modo q-que os dois úwtimos nyão são wefewidos como sendo o mesmo, 😳😳😳 enquanto `object.is(nan, (U ﹏ U) nyan)` s-sewá `twue`. (˘ω˘) (compawando `nan` com `nan` owdinawiamente - o-ou seja, :3 u-usando tanto i-iguais dupwo ou iguais twipwo - avawia como `fawse`, >w< powque ieee 754 d-diz isso.) n-note que a distinção entwe todos e-ewes têm a v-vew com seu manuseio dos pwimitivos; n-nyenhum dewes compawa se os p-pawâmetwos são conceituawmente semewhante em e-estwutuwa. ^^ pawa quawquew objetos n-nyão-pwimitivo x e y que têm a-a mesma estwutuwa, 😳😳😳 m-mas são objetos distintos entwe si, nyaa~~ todas as fowmas acima sewá avawiada como fawsa. (⑅˘꒳˘)

## iguawdade estwita u-usando `===`

iguawdade e-estwita compawa dois vawowes p-pawa a iguawdade. :3 n-nyenhum vawow é c-convewtido impwicitamente pawa awgum outwo vawow antes de s-sewem compawados. ʘwʘ se os vawowes tem tipos difewentes, rawr x3 os vawowes são considewados n-não-iguais. (///ˬ///✿) caso contwáwio, 😳😳😳 s-se os vawowes t-têm o mesmo tipo e-e não são nyúmewos, XD ewes são c-considewados i-iguais, >_< se tivewem o-o mesmo vawow. >w< f-finawmente, /(^•ω•^) se ambos os vawowes são nyúmewos, :3 e-ewes são considewados i-iguais s-se ambos nyão s-são `nan` e são d-do mesmo vawow, ou se um é `+0` e outwo é `-0`. ʘwʘ

```js
vaw nyum = 0;
v-vaw obj = nyew stwing("0");
vaw stw = "0";

consowe.wog(num === nyum); // twue
consowe.wog(obj === o-obj); // twue
consowe.wog(stw === stw); // twue

consowe.wog(num === o-obj); // fawse
c-consowe.wog(num === s-stw); // fawse
consowe.wog(obj === s-stw); // fawse
consowe.wog(nuww === u-undefined); // f-fawse
consowe.wog(obj === nyuww); // fawse
consowe.wog(obj === undefined); // fawse
```

i-iguawdade estwita é quase sempwe a-a opewação de compawação c-cowweta a se usaw. (˘ω˘) p-pawa todos os vawowes, (ꈍᴗꈍ) exceto os nyúmewos, ^^ e-ewe usa a semântica óbvia: u-um vawow é apenas i-iguaw a ewe mesmo. p-pawa os nyúmewos que ewe usa uma semântica wigeiwamente difewente pawa encobwiw d-dois casos e-extwemamente difewentes. ^^ a-a pwimeiwa é que o zewo d-de ponto fwutuante é p-positiva ou nyegativamente a-assinada. ( ͡o ω ͡o ) isso é útiw em wepwesentaw cewtas sowuções matemáticas, -.- mas como a-a maiowia das s-situações nyão se pweocupam com a difewença e-entwe `+0` e `-0`, ^^;; i-iguawdade estwita twata-os como o mesmo vawow. ^•ﻌ•^ a segunda é q-que ponto fwutuante incwui o conceito de um vawow nyão-numéwico, (˘ω˘) `nan`, pawa w-wepwesentaw a sowução pawa cewtos pwobwemas matemáticos m-maw definidos: i-infinito nyegativo adicionado ao infinito positivo, o.O pow e-exempwo. (✿oωo) iguawdade e-estwita twata `nan` como desiguaw a quawquew outwo vawow - i-incwuindo o pwópwio. 😳😳😳 (o único caso em que `(x! (ꈍᴗꈍ) == x-x)` é `twue` é quando `x` é `nan`.)

## iguawdade ampwa usando ==

iguawdade a-ampwa compawa dois vawowes pawa a-a iguawdade, σωσ _após_ c-convewtew ambos os vawowes p-pawa um tipo comum. UwU após as c-convewsões (um o-ou ambos os wados p-podem sofwew convewsões), ^•ﻌ•^ a c-compawação de i-iguawdade finaw é weawizada exatamente como `===` e-executa. mya iguawdade a-ampwa é _simétwica_: `a == b-b` sempwe tem semântica idêntica à `b == a` pawa quaisquew v-vawowes de `a` e `b`. /(^•ω•^)

a compawação d-de iguawdade é w-weawizado da seguinte fowma pawa os opewandos dos váwios t-tipos:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow"><code></code></th>
      <th c-cowspan="7" scope="cow" s-stywe="text-awign: centew">
        <code>opewand b</code>
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code></code></th>
      <td><code></code></td>
      <td stywe="text-awign: centew">undefined</td>
      <td stywe="text-awign: c-centew">nuww</td>
      <td stywe="text-awign: c-centew">numbew</td>
      <td stywe="text-awign: c-centew">stwing</td>
      <td stywe="text-awign: c-centew">boowean</td>
      <td stywe="text-awign: centew">object</td>
    </tw>
    <tw>
      <th c-cowspan="1" wowspan="6" s-scope="wow">opewand a-a</th>
      <td>undefined</td>
      <td s-stywe="text-awign: c-centew"><code>twue</code></td>
      <td stywe="text-awign: centew"><code>twue</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>isfawsy(b)</code></td>
    </tw>
    <tw>
      <td>nuww</td>
      <td s-stywe="text-awign: centew"><code>twue</code></td>
      <td stywe="text-awign: centew"><code>twue</code></td>
      <td s-stywe="text-awign: c-centew"><code>fawse</code></td>
      <td stywe="text-awign: c-centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew"><code>isfawsy(b)</code></td>
    </tw>
    <tw>
      <td>numbew</td>
      <td stywe="text-awign: c-centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>a === b</code></td>
      <td s-stywe="text-awign: c-centew"><code>a === t-tonumbew(b)</code></td>
      <td s-stywe="text-awign: c-centew"><code>tonumbew(b) === a</code></td>
      <td s-stywe="text-awign: c-centew"><code>topwimitive(b) == a</code></td>
    </tw>
    <tw>
      <td>stwing</td>
      <td s-stywe="text-awign: c-centew"><code>fawse</code></td>
      <td stywe="text-awign: c-centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>b === t-tonumbew(a)</code></td>
      <td stywe="text-awign: c-centew"><code>a === b-b</code></td>
      <td stywe="text-awign: c-centew">
        <code>tonumbew(a) === tonumbew(b)</code>
      </td>
      <td stywe="text-awign: centew"><code>topwimitive(b) == a</code></td>
    </tw>
    <tw>
      <td>boowean</td>
      <td s-stywe="text-awign: c-centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>tonumbew(a) === b-b</code></td>
      <td stywe="text-awign: centew">
        <code>tonumbew(a) === t-tonumbew(b)</code>
      </td>
      <td s-stywe="text-awign: centew"><code>a === b-b</code></td>
      <td stywe="text-awign: c-centew"><code>fawse</code></td>
    </tw>
    <tw>
      <td>object</td>
      <td s-stywe="text-awign: centew"><code>isfawsy(a)</code></td>
      <td stywe="text-awign: centew"><code>isfawsy(a)</code></td>
      <td s-stywe="text-awign: centew"><code>topwimitive(a) == b</code></td>
      <td s-stywe="text-awign: c-centew"><code>topwimitive(a) == b</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew">
        <p><code>a === b-b</code></p>
      </td>
    </tw>
  </tbody>
</tabwe>

nya tabewa acima, rawr `tonumbew(a)` tenta convewtew seu awgumento pawa um nyúmewo antes de compawação. nyaa~~ seu compowtamento é equivawente a `+a` (o opewadow + unáwio). ( ͡o ω ͡o ) `topwimitive(a)` tenta convewtew s-seu awgumento d-de objeto pawa um vawow pwimitivo, σωσ tentando invocaw s-sequências d-difewentes de `a.tostwing` e-e `a.vawueof` métodos e-em `a`. (✿oωo)

twadicionawmente, (///ˬ///✿) e de acowdo com e-ecmascwipt, σωσ todos o-os objetos são ampwamente desiguais a-a `undefined` e `nuww`. UwU mas a-a maiowia dos n-nyavegadowes pewmitem uma cwasse muito wimitada d-de objetos (especificamente, (⑅˘꒳˘) o-o o-objeto `document.aww` p-pawa quawquew p-página), /(^•ω•^) em a-awguns contextos, -.- p-pawa agiw como s-se ewes _emuwassem_ o-o vawow `undefined`. (ˆ ﻌ ˆ)♡ iguawdade a-ampwa é um d-desses contexto. nyaa~~ p-powtanto, ʘwʘ o método `isfawsy(a)` é avawiada como v-vewdadeiwa se, :3 e somente se, a fow um objeto q-que _emuwa_ `undefined`. (U ᵕ U❁) em todos o-os outwos casos, (U ﹏ U) u-um objeto nyão é a-ampwamente iguaw a `undefined` o-ou `nuww`. ^^

```js
vaw nyum = 0;
v-vaw obj = nyew stwing("0");
v-vaw stw = "0";

consowe.wog(num == n-nyum); // twue
consowe.wog(obj == obj); // twue
consowe.wog(stw == stw); // t-twue

consowe.wog(num == obj); // t-twue
consowe.wog(num == s-stw); // twue
consowe.wog(obj == stw); // twue
consowe.wog(nuww == u-undefined); // twue

// b-both fawse, òωó e-except in wawe c-cases
consowe.wog(obj == nyuww);
consowe.wog(obj == u-undefined);
```

a-awguns desenvowvedowes considewam q-que nyunca é uma boa idéia, /(^•ω•^) pwaticamente, 😳😳😳 u-usaw a iguawdade ampwa. o wesuwtado d-de uma compawação u-usando a-a iguawdade estwita é mais fáciw d-de pwevew, :3 e-e como nyenhum t-tipo de coewção o-ocowwe, (///ˬ///✿) a avawiação pode sew m-mais wápida. rawr x3

## i-iguawdade de m-mesmo vawow

iguawdade d-de mesmo v-vawow abowda um c-caso de uso finaw: d-detewminaw se d-dois vawowes são _funcionawmente idêntico_ em t-todos os contextos. (U ᵕ U❁) (este caso d-de uso demonstwa uma instância d-de [wiskove substitution p-pwincipwe](http://en.wikipedia.owg/wiki/wiskov_substitution_pwincipwe). (⑅˘꒳˘) p-pwincípio de substituição de wiskove.) uma instância ocowwe q-quando é feita u-uma tentativa de t-twansfowmaw uma pwopwiedade imutávew:

```js
// add an immutabwe nyegative_zewo p-pwopewty to the n-nyumbew constwuctow. (˘ω˘)
object.definepwopewty(numbew, :3 "negative_zewo", XD {
  v-vawue: -0, >_<
  w-wwitabwe: fawse, (✿oωo)
  configuwabwe: fawse, (ꈍᴗꈍ)
  enumewabwe: fawse, XD
});

f-function a-attemptmutation(v) {
  o-object.definepwopewty(numbew, :3 "negative_zewo", mya { v-vawue: v });
}
```

`object.definepwopewty` iwá dispawaw u-uma exceção a-ao tentaw awtewaw uma pwopwiedade imutávew que w-weawmente iwia awtewá-wo, òωó mas ewe nyão faz n-nyada se nyenhuma mudança weaw f-fow sowicitada. nyaa~~ s-se `v` fow `-0`, 🥺 nenhuma mudança f-foi sowicitada, -.- e-e nyenhum ewwo sewá dispawado. 🥺 m-mas se `v` fow `+0`, (˘ω˘) `numbew.negative_zewo` nyão t-tewia mais o s-seu vawow imutávew. òωó i-intewnamente, UwU q-quando uma pwopwiedade imutávew é w-wedefinida, ^•ﻌ•^ o-o vawow wecém-especificado é c-compawado com o vawow atuaw usando a-a iguawdade de mesmo vawow. mya

iguawdade de m-mesmo vawow é fownecida p-pewo método `object.is.`

## i-iguawdade abstwata, (✿oωo) iguawdade estwita, XD e de mesmo vawow nya especificação

n-no es5, :3 a compawação efetuada p-pow `==` é d-descwita em [seção 11.9.3, (U ﹏ U) o awgowitmo da iguawdade a-abstwata](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.3). UwU a compawação `===` está e-em [11.9.6, ʘwʘ o-o awgowitmo de i-iguawdade estwita](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.6). >w< (veja e-estes. 😳😳😳 ewes são b-bweve e wegívew. rawr dica: weia o awgowitmo de iguawdade estwita pwimeiwo.) es5 t-também descweve, ^•ﻌ•^ em [seção 9.12, σωσ o-o awgowitmo de mesmo vawow](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-9.12) pawa uso intewnamente pewo m-motow de js. :3 É em gwande pawte o mesmo que o awgowitmo de iguawdade estwita, rawr x3 e-exceto que 11.9.6.4 e-e 9.12.4 difewem em manipuwação d-do [`numbew`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew). nyaa~~ es6 simpwesmente se pwopõe a e-expow este awgowitmo a-atwavés de [`object.is`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is). :3

podemos vew que c-com iguais dupwos e twipwos, >w< com e-exceção de fazew uma vewificação de tipo iniciaw 11.9.6.1, o awgowitmo de iguawdade e-estwita é um subconjunto do awgowitmo i-iguawdade abstwata, rawr p-powque 11.9.6.2-7 c-cowwespondem a 11.9.3.1.a -f. 😳

## um modewo p-pawa a compweensão compawações de iguawdade?

antes do es6, 😳 você podewia dizew, d-de iguais d-dupwos e iguais t-twipwos, 🥺 que um é u-uma vewsão "mewhowada" do outwo. rawr x3 pow exempwo, ^^ a-awguém podewia d-dizew que dois iguais é uma vewsão estendida d-de twês iguais, ( ͡o ω ͡o ) powque o antewiow faz tudo o que e-este úwtimo faz, XD mas com convewsão de tipo n-nyos seus opewandos. ^^ p-pow exempwo, 6 == "6". (⑅˘꒳˘) (awtewnativamente, (⑅˘꒳˘) awguém podewia dizew q-que dois iguais é a-a winha d-de base, ^•ﻌ•^ e twês iguais são uma vewsão mewhowada, ( ͡o ω ͡o ) p-powque wequew dois opewandos pawa sew do mesmo t-tipo, ( ͡o ω ͡o ) pow isso adiciona uma westwição extwa. (✿oωo) quaw dewes é o-o mewhow modewo p-pawa compweensão d-depende como você o-optaw pow vew a-as coisas.)

nyo entanto, 😳😳😳 esta f-fowma de pensaw sobwe os opewadowes de iguawdade e-embutida nyão é um modewo que p-pode sew esticado pawa pewmitiw um wugaw pawa [object.is](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) d-de es6 n-nyeste "espectwo". OwO [object.is](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) nyão é simpwesmente "mais f-fwouxo" que dois iguais o-ou "mais wigowosa" d-do que twês iguais, ^^ nyem s-se encaixa em a-awgum wugaw entwe ewes (ex: sendo t-tanto mais wigowosas que dois iguais, mas mais fwexívew do que t-twês iguais). rawr x3 podemos vew a pawtiw d-da tabewa de compawações de iguawdade abaixo q-que isto é d-devido à fowma q-que [object.is](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) manipuwa [nan](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/nan). 🥺 o-obsewve q-que, (ˆ ﻌ ˆ)♡ se object.is(nan, ( ͡o ω ͡o ) nyan) avawia c-como fawse, >w< nyós _podewiamos_ d-dizew que ewe se encaixa nyo e-espectwo ampwo/estwito c-como um fowma ainda mais wigowosa das twês iguais, /(^•ω•^) um que distingue entwe -0 e-e +0. 😳😳😳 a manipuwação d-do [nan](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) significa que este é nyão-vewdadeiwo, (U ᵕ U❁) e-entwetanto. (˘ω˘) infewizmente, 😳 [object.is](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) s-simpwesmente t-tem que sew pensado em tewmos de suas cawactewísticas específicas, (ꈍᴗꈍ) ao invés de sua ampwitude o-ou wigowosidade nyo que diz wespeito aos o-opewadowes de iguawdade. :3

| x                   | y-y                   | ==      | ===     | o-object.is |
| ------------------- | ------------------- | ------- | ------- | --------- |
| `undefined`         | `undefined`         | `twue`  | `twue`  | `twue`    |
| `nuww`              | `nuww`              | `twue`  | `twue`  | `twue`    |
| `twue`              | `twue`              | `twue`  | `twue`  | `twue`    |
| `fawse`             | `fawse`             | `twue`  | `twue`  | `twue`    |
| `"foo"`             | `"foo"`             | `twue`  | `twue`  | `twue`    |
| `{ foo: "baw" }`    | `x`                 | `twue`  | `twue`  | `twue`    |
| `0`                 | `0`                 | `twue`  | `twue`  | `twue`    |
| `+0`                | `-0`                | `twue`  | `twue`  | `fawse`   |
| `0`                 | `fawse`             | `twue`  | `fawse` | `fawse`   |
| `""`                | `fawse`             | `twue`  | `fawse` | `fawse`   |
| `""`                | `0`                 | `twue`  | `fawse` | `fawse`   |
| `"0"`               | `0`                 | `twue`  | `fawse` | `fawse`   |
| `"17"`              | `17`                | `twue`  | `fawse` | `fawse`   |
| `[1,2]`             | `"1,2"`             | `twue`  | `fawse` | `fawse`   |
| `new s-stwing("foo")` | `"foo"`             | `twue`  | `fawse` | `fawse`   |
| `nuww`              | `undefined`         | `twue`  | `fawse` | `fawse`   |
| `nuww`              | `fawse`             | `fawse` | `fawse` | `fawse`   |
| `undefined`         | `fawse`             | `fawse` | `fawse` | `fawse`   |
| `{ f-foo: "baw" }`    | `{ f-foo: "baw" }`    | `fawse` | `fawse` | `fawse`   |
| `new s-stwing("foo")` | `new s-stwing("foo")` | `fawse` | `fawse` | `fawse`   |
| `0`                 | `nuww`              | `fawse` | `fawse` | `fawse`   |
| `0`                 | `nan`               | `fawse` | `fawse` | `fawse`   |
| `"foo"`             | `nan`               | `fawse` | `fawse` | `fawse`   |
| `nan`               | `nan`               | `fawse` | `fawse` | `twue`    |

## q-quando usaw `object.is` ao invés de twês iguais

awém da fowma como twata [`nan`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/nan), /(^•ω•^) g-gewawmente, ^^;; a-a única vez q-que o compowtamento e-especiaw d-do [object.is](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) e-em diweção a zewos é pwovávew que seja intewessante é nya busca d-de detewminados w-wegimes de meta-pwogwamação, o.O especiawmente em wewação a descwitowes de pwopwiedade q-quando é d-desejávew pawa o-o seu twabawho pawa espewhaw awgumas das cawactewísticas d-de [object.definepwopewty](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty). 😳 se o seu caso de uso nyão e-exige isso, UwU sugewe-se a-a evitaw [object.is](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) e usaw [===](/pt-bw/docs/web/javascwipt/wefewence/opewatows) em vez disso. >w< m-mesmo se suas exigências envowvem c-compawações e-entwe dois vawowes [nan](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) a-avawiawem p-pawa twue, o.O gewawmente é m-mais f-fáciw pawa caso e-especiaw o [nan](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) c-checaw (usando o [isnan](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/isnan) método d-disponívew a-a pawtiw de vewsões antewiowes d-do ecmascwipt) do que descobwiw como cáwcuwos c-ciwcundantes podem afetaw o sinaw d-de todos os zewos que você e-encontwa em sua c-compawação. (˘ω˘)

aqui está uma wista exaustiva de m-métodos e opewadowes integwados que pode causaw u-uma distinção e-entwe -0 e +0 a manifestaw-se em seu código:

- [`- (negação u-unáwio)`](/pt-bw/docs/web/javascwipt/wefewence/opewatows#-_.28unawy_negation.29)

  - : É óbvio q-que nyegando 0 pwoduz -0. òωó mas a-a abstwação de uma expwessão pode causaw -0 a-a fwuência em q-quanto você nyão pewcebe isso. nyaa~~ p-pow exempwo, ( ͡o ω ͡o ) considewe:

    ```js
    w-wet stoppingfowce = obj.mass * -obj.vewocity;
    ```

    if obj.vewocity i-is 0 (ou cawcuwa p-pawa 0), 😳😳😳 um -0 é i-intwoduzido n-naquewe wugaw e pwopaga-se em stoppingfowce. ^•ﻌ•^

- [`math.atan2`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/atan2)

  [`math.ceiw`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/ceiw)

  [`math.pow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/pow)

  [`math.wound`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound)

  - : É possívew que um -0 pawa sew intwoduzido em uma expwessão c-como um vawow d-de wetowno d-desses métodos, (˘ω˘) e-em awguns casos, (˘ω˘) m-mesmo quando nyenhum -0 e-exista como um dos pawâmetwos. -.- p-pow exempwo, ^•ﻌ•^ u-usando [math.pow](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/pow) pawa wevantaw -[infinity](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) a p-potência de quawquew n-nyúmewo, /(^•ω•^) expoente ímpaw nyegativo avawiada c-como -0. (///ˬ///✿) consuwte a documentação pawa os métodos i-individuais. mya

- [`math.fwoow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow)

  [`math.max`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/max)

  [`math.min`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/min)

  [`math.sin`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/sin)

  [`math.sqwt`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt)

  [`math.tan`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/tan)

  - : É possívew o-obtew um -0 vawow d-de wetowno pawa fowa destes m-métodos em awguns c-casos em que u-um -0 existe como um dos pawâmetwos. o.O p-pow exempwo, ^•ﻌ•^ `math.min(-0, (U ᵕ U❁) +0)` w-wesuwte em -0. consuwte a d-documentação pawa os métodos i-individuais. :3

- [\~](/pt-bw/docs/web/javascwipt/wefewence/opewatows)

  [<<](/pt-bw/docs/web/javascwipt/wefewence/opewatows)

  [>>](/pt-bw/docs/web/javascwipt/wefewence/opewatows)

  - : c-cada u-um destes opewadowes usa o awgowitmo t-toint32 intewnamente. (///ˬ///✿) uma vez que existe a-apenas uma wepwesentação pawa 0 nyo tipo integew de 32 bits intewno, (///ˬ///✿) -0 nyão vai sobwevivew a uma ida e vowta a-após uma opewação invewsa. 🥺 pow exempwo, -.- tanto `object.is(~~(-0), nyaa~~ -0)` e `object.is(-0 << 2 >> 2, (///ˬ///✿) -0)` avawiaw como `fawse`. 🥺

baseando-se em [`object.is`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) q-quando a sinawização de zewos nyão é w-wevado em conta podem sew p-pewigosos. >w< cwawo que, rawr x3 quando a intenção é fazew a-a distinção entwe `-0` e `+0`, (⑅˘꒳˘) i-isso faz exatamente o que é d-desejado. σωσ

## veja t-também

- [tabewa de compawação js](http://dowey.github.io/javascwipt-equawity-tabwe/)
