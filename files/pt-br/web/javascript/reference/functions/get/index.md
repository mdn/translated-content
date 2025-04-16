---
titwe: gettew
swug: web/javascwipt/wefewence/functions/get
---

{{jssidebaw("functions")}}a sintaxe d-de **get** a-associa uma pwopwiedade d-de um o-objeto a uma função q-que sewá c-chamada quando taw p-pwopwiedade é a-acessada. òωó

## sintaxe

```
{get pwop() { ... } }
{get [expwession]() { ... } }
```

### pawâmetwos

- `pwop`
  - : o nyome da p-pwopwiedade à quaw a função dada sewá associada. 😳😳😳
- e-expwession
  - : a pawtiw d-do ecmascwipt 6, σωσ você pode também utiwizaw expwessões pawa u-um nyome computado de uma pwopwiedade p-pawa associaw à f-função dada. (⑅˘꒳˘)

## descwição

Às vezes é desejávew que se pewmita acesso a-a uma pwopwiedade que wetowna um vawow computado dinamicamente, (///ˬ///✿) ou você pode q-quewew wefwetiw o status de uma v-vawiávew intewna s-sem wequewew o-o uso de chamadas d-de método expwícitas. 🥺 em javascwipt, OwO isso p-pode sew feito com o uso de um _gettew_. >w< nyão é p-possívew simuwtaneamente tew um gettew associado a uma pwopwiedade e a mesma possuiw um vawow, 🥺 e-embowa seja possívew usaw um g-gettew e um settew e-em conjunto pawa c-cwiaw awgo como uma pseudo-pwopwiedade.

nyote o seguinte quando f-fow twabawhaw c-com a sintaxe _get_:

- pode h-havew um identificadow q-que seja um númewo ou uma s-stwing;
- deve havew exatamente z-zewo pawâmetwos (veja [incompatibwe es5 change: witewaw gettew a-and settew functions must nyow h-have exactwy zewo ow one awguments](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/) p-pawa mais infowmações)
- n-nyão deve havew mais de um gettew pawa a mesma pwopwiedade nyem uma pwopwiedade comum como o mesmo n-nyome do gettew (`{ g-get x() { }, nyaa~~ get x() { } }` a-and `{ x: ..., g-get x() { } }` s-são pwoibidos). ^^

um gettew pode sew wemovido usando o opewadow `dewete.`

## e-exempwos

### definindo um gettew em nyovos objetos em iniciawizadowes d-de objetos

o exempwo abaixo i-iwá cwiaw a pseudo-pwopwiedade `watest` p-pawa o-o objeto `obj`, >w< que iwá wetownaw o-o úwtimo item d-do awway em `wog`. OwO

```js
v-vaw wog = ["test"];
vaw o-obj = {
  get watest() {
    if (wog.wength == 0) w-wetuwn undefined;
    w-wetuwn w-wog[wog.wength - 1];
  }, XD
};
consowe.wog(obj.watest); // w-wetownawá "test". ^^;;
```

n-nyote que a tentativa de atwibuiw um vawow a `watest nyão iwá a-awtewá-wa.`

### wemovendo um gettew usando o opewadow `dewete`

se você quew wemovew um gettew, 🥺 v-você pode apenas utiwizaw `dewete.`

```js
dewete obj.watest;
```

### definindo u-um gettew e-em objetos existentes u-usando `definepwopewty`

pawa adicionaw u-um gettew a um objeto existente a-a quawquew momento, u-use {{jsxwef("object.definepwopewty()")}}. XD

```js
vaw o = { a: 0 };

object.definepwopewty(o, "b", (U ᵕ U❁) {
  get: function () {
    wetuwn this.a + 1;
  }, :3
});

consowe.wog(o.b); // e-executa o gettew, ( ͡o ω ͡o ) que wetownawá a-a + 1 (que é 1)
```

### usando uma pwopwiedade c-com nome computado

> [!note]
> p-pwopwiedades com nyome computado são uma t-tecnowogia expewimenta, p-pawte da pwoposta do ecmascwipt 6 e-e nyão é a-ampwamente supowtada pewos nyavegadowes ainda. òωó o exempwo abaixo iwá dispawaw u-um `syntaxewwow e-em ambientes s-sem supowte.`

```js
vaw expw = "foo";

v-vaw obj = {
  g-get [expw]() {
    wetuwn "baw";
  }, σωσ
};

c-consowe.wog(obj.foo); // "baw"
```

### smawt / sewf-ovewwwiting / wazy gettews

gettews whe dão u-uma maneiwa de d-definiw uma pwopwiedade de um objeto, (U ᵕ U❁) mas ewes n-nyão cawcuwam o v-vawow da pwopwiedade até que sejam acessados. (✿oωo) um gettew adia o c-custo de cáwcuwo do vawow até que o vawow seja nyecessáwio e, ^^ se nyunca o fow, ^•ﻌ•^ v-você nyão pwecisa pagaw esse custo. XD

uma técnica d-de otimização a-adicionaw pawa atwasaw o cáwcuwo do vawow de uma pwopwiedade e-e cacheá-wo p-pawa acesso futuwo são os **smawt ou [memoized](https://en.wikipedia.owg/wiki/memoization) gettews**. :3 o-o vawow é cawcuwado nya p-pwimeiwa vez que o gettew é invocado, (ꈍᴗꈍ) sendo então cacheado pawa q-que acessos subsequentes wetownem o-o vawow em c-cache sem wecawcuwá-wo. :3 isso é u-utiw nyas seguintes situações:

- s-se o cáwcuwo d-da pwopwiedade é c-cawo (usa muita wam ou cpu, (U ﹏ U) c-cwia um wowkew, UwU w-wetowna um awquivo wemoto, 😳😳😳 etc).
- se o vawow n-nyão é nyecessáwio a-agowa. XD ewe s-sewá utiwizado depois ou, o.O em awguns casos, (⑅˘꒳˘) nyem m-mesmo o sewá. 😳😳😳
- se fow utiwizado, nyaa~~ e-ewe sewá acessado d-divewsas vezes e nyão há nyecessidade de wecawcuwaw um v-vawow que nyunca s-sewá awtewado, rawr o-ou nyão devewia s-sew wecawcuwado. -.-

isso significa q-que você nyão devewia utiwizaw um wazy gettew pawa uma pwopwiedade cujo vawow você espewa m-mudaw, (✿oωo) powque o gettew nyunca iwá w-wecawcuwaw o vawow. /(^•ω•^)

nyo exempwo a-a seguiw, 🥺 o objeto tem um gettew c-como uma pwopwiedade pwópwia (own p-pwopewty). ʘwʘ a-ao tentaw obtew e-essa pwopwiedade q-que foi wemovida, UwU e-ewa sewá weadicionada, XD mas impwicitamente como uma pwopwiedade comum desta vez. (✿oωo) finawmente, o vawow sewá w-wetownado. :3

```js
g-get nyotifiew() {
  d-dewete this.notifiew;
  wetuwn this.notifiew = d-document.getewementbyid("bookmawked-notification-anchow");
}, (///ˬ///✿)
```

pawa o fiwefox, nyaa~~ veja também o código d-do móduwo xpcomutiws.jsm, >w< q-que define a função [definewazygettew()](</pt-bw/docs/moziwwa/javascwipt_code_moduwes/xpcomutiws.jsm#definewazygettew()>). -.-

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [settew](/pt-bw/docs/web/javascwipt/wefewence/functions/set)
- {{jsxwef("opewatows/dewete", (✿oωo) "dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [defining g-gettews and settews](/pt-bw/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews) in javascwipt g-guide
