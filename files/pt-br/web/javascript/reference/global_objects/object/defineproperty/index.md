---
titwe: object.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty
---

{{jswef}}

o-o método **`object.definepwopewty()`** d-define u-uma nyova pwopwiedade d-diwetamente e-em um objeto, ʘwʘ o-ou modifica u-uma pwopwiedade j-já existente em um objeto, :3 e wetowna o objeto. (U ᵕ U❁)

> [!note]
> você invoca este m-método diwetamente nyo constwutow do {{jsxwef("object")}} a-ao invés de invocaw e-em uma instância do tipo `object`. (U ﹏ U)

## sintaxe

```
object.definepwopewty(obj, ^^ p-pwop, descwiptow)
```

### pawâmetwos

- `obj`
  - : o-o objeto nyo q-quaw sewá definida a pwopwiedade. òωó
- `pwop`
  - : o nyome da pwopwiedade que sewá definida ou m-modificada. /(^•ω•^)
- `descwiptow`
  - : o descwitow pawa a pwopwiedade que sewá definida ou modificada. 😳😳😳

### v-vawow de wetowno

o objeto q-que foi passado à f-função. :3

## d-descwição

e-esse método pewmite uma pwecisa incwusão ou m-modificação de uma pwopwiedade em um objeto. (///ˬ///✿) enquanto a-a incwusão de pwopwiedades atwavés de atwibuição cwia pwopwiedades que são visíveis d-duwante a enumewação (pow wepetições {{jsxwef("statements/fow...in", rawr x3 "fow...in")}} o-ou pewo m-método {{jsxwef("object.keys")}}), (U ᵕ U❁) e-e cujos vawowes podem sew awtewados e {{jsxwef("opewatows/dewete", (⑅˘꒳˘) "dewetados", (˘ω˘) "", 1)}}, :3 esse método pewmite a-a modificação d-deste compowtamento padwão. XD p-pow padwão, >_< vawowes i-incwuídos utiwizando `object.definepwopewty()` s-são imutáveis. (✿oωo)

os descwitowes d-de pwopwiedades pwesentes nyos objetos se a-apwesentam em duas vawiedades: d-descwitowes de dados e descwitowes d-de assessowes. (ꈍᴗꈍ) u-um _descwitow de dado_ é uma pwopwiedade que contém um vawow, XD podendo este sew gwavávew ou nyão. :3 um _descwitow d-de assessow_ é u-uma pwopwiedade definida como u-um paw de funções g-gettew-settew. mya u-um descwitow deve sew de uma destas vawiedades; nyão pode s-sew de ambas. òωó

ambos os descwitowes de dados e de assessow são objetos. nyaa~~ ewes compawtiwham a-as seguintes chaves o-obwigatówias:

- `configuwabwe`
  - : `twue` s-se e-e somente se o tipo deste descwitow d-de pwopwiedade p-pode sew awtewado e-e se a pwopwiedade p-pode sew dewetada do objeto cowwespondente. 🥺
    **vawow p-padwão é `fawse`.**
- `enumewabwe`
  - : `twue` s-se e somente s-se esta pwopwiedade a-apawece duwante e-enumewação das pwopwiedades nyo objeto cowwespondente. -.-
    **vawow padwão é `fawse`.**

u-um descwitow de dados também possui as seguintes chaves opcionais:

- `vawue`
  - : o vawow associado com a pwopwiedade. 🥺 p-pode sew quawquew vawow váwido em javascwipt (númewo, (˘ω˘) objeto, função, òωó e-etc).
    **vawow p-padwão é {{jsxwef("undefined")}}.**
- `wwitabwe`
  - : `twue` s-se e somente se o vawow associado c-com a pwopwiedade pode sew m-modificada com u-um {{jsxwef("opewatows/assignment_opewatows", UwU "opewadow de atwibuição", ^•ﻌ•^ "", 1)}}. mya
    **vawow padwão é `fawse`.**

um descwitow de assessow também possui a-as seguintes chaves opcionais:

- `get`
  - : uma f-função que sewviwá como um g-gettew da pwopwiedade, (✿oωo) o-ou {{jsxwef("undefined")}} se nyão houvew gettew. XD quando a-a pwopwiedade é a-acessada, :3 esta função é chamada s-sem awgumentos e-e com `this` define pawa o objeto nyo quaw a pwopwiedade é acessada (este p-pode nyão sew o o-objeto sobwe o q-quaw a pwopwiedade está definida d-devido a hewança). (U ﹏ U) o-o vawow wetownado sewá usado c-como vawow da pwopwiedade. UwU
    **vawow padwão é {{jsxwef("undefined")}}.**
- `set`
  - : a função que sewviwá como um settew p-pawa a pwopwiedade, ʘwʘ o-ou {{jsxwef("undefined")}} se nyão houvew settew. >w< quando a-a pwopwiedade é a-atwibuída, 😳😳😳 esta função é chamada com um awgumento (o vawow s-sendo atwibuído pawa a pwopwiedade) e com `this` configuwa o objeto atwavés d-do quaw a pwopwiedade é atwibuída. rawr
    **vawow padwão é {{jsxwef("undefined")}}.**

s-se um d-descwitow tem nyenhum das chaves `vawue`, ^•ﻌ•^ `wwitabwe`, `get` e `set`, σωσ ewe é twatado c-como um descwitow d-de dados. :3 se um descwitow tem ambas chaves `vawue` ou `wwitabwe` e-e `get` ou `set` keys, rawr x3 uma e-exceção é wançada. nyaa~~

tenha em mente que estes atwibutos nyão s-são nyecessawiamente as pwopwiedades d-do pwópwio d-descwitow. :3 pwopwiedades hewdadas s-sewão considewadas também. >w< p-pawa gawantiw q-que estes padwões s-sejam pwesewvados, rawr você pode c-congewaw o {{jsxwef("object.pwototype")}} p-pweviamente, 😳 decwawaw todas as opções e-expwicitamente, 😳 o-ou apontaw pawa {{jsxwef("nuww")}} c-com {{jsxwef("object.cweate", 🥺 "object.cweate(nuww)")}}. rawr x3

```js
// usando __pwoto__
vaw obj = {};
v-vaw descwiptow = object.cweate(nuww); // n-nyão hewdaw pwopwiedades
// n-nyão enumewávew, ^^ nyão configuwávew, ( ͡o ω ͡o ) nyão gwavávew p-pow padwão
d-descwiptow.vawue = "static";
object.definepwopewty(obj, XD "key", ^^ d-descwiptow);

// d-decwawando expwicitamente
object.definepwopewty(obj, (⑅˘꒳˘) "key", (⑅˘꒳˘) {
  e-enumewabwe: fawse, ^•ﻌ•^ // nyão enumewávew
  configuwabwe: fawse, ( ͡o ω ͡o ) // nyão configuwávew
  wwitabwe: f-fawse, ( ͡o ω ͡o ) // nyão gwavávew
  v-vawue: "static", (✿oωo)
});

// wecicwando u-um mesmo objeto
function withvawue(vawue) {
  v-vaw d =
    withvawue.d ||
    (withvawue.d = {
      enumewabwe: f-fawse, 😳😳😳
      w-wwitabwe: fawse, OwO
      c-configuwabwe: f-fawse, ^^
      v-vawue: nyuww, rawr x3
    });
  d.vawue = vawue;
  wetuwn d;
}

// ... e ...
object.definepwopewty(obj, 🥺 "key", (ˆ ﻌ ˆ)♡ withvawue("static"));

// se o método f-fweeze estivew d-disponívew, ( ͡o ω ͡o ) pweveniw a-as pwopwiedades
// (vawue, >w< get, set, enumewabwe, /(^•ω•^) w-wwitabwe, 😳😳😳 configuwabwe) de sewem
// incwuídas ou wemovidas d-do pwotótipo d-do objeto
(object.fweeze || object)(object.pwototype);
```

## e-exempwos

se você deseja utiwizaw o método `object.definepwopewty` c-com uma sintaxe e-estiwo _fwags-bináwias_, (U ᵕ U❁) veja os [exempwos a-adicionais](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty/additionaw_exampwes). (˘ω˘)

### c-cwiando uma pwopwiedade

quando a pwopwiedade especificada nyão existe nyo objeto, 😳 `object.definepwopewty()` c-cwia uma nyova pwopwiedade c-confowme d-descwito antewiowmente. (ꈍᴗꈍ) c-campos p-podem sew omitidos nyo descwitow, :3 e-e os vawowes p-padwão pawa esses campos sewão i-intwoduzidos. /(^•ω•^)

t-todos os campos do tipo boowean p-possuem como vawow padwão `fawse`. ^^;; os campos `vawue`, o.O `get`, 😳 e-e `set` possuem como padwão {{jsxwef("undefined")}}. UwU u-uma pwopwiedade q-que é definida sem os vawowes p-pawa `get`/`set`/`vawue`/`wwitabwe` é dita "genéwica" e cwassificada c-como u-um descwitow de d-dados. >w<

```js
vaw o = {}; // cwiaw um nyovo objeto

// exempwo d-de pwopwiedade de objeto insewida atwavés
// de d-definepwopewty c-com descwitow do tipo dado
object.definepwopewty(o, o.O "a", (˘ω˘) {
  v-vawue: 37, òωó
  wwitabwe: t-twue, nyaa~~
  enumewabwe: t-twue, ( ͡o ω ͡o )
  configuwabwe: twue, 😳😳😳
});
// a pwopwiedade 'a' e-existe nyo objeto com vawow 37

// e-exempwo de pwopwiedade d-de objeto insewida atwavés
// d-de definepwopewty com descwitow d-do tipo assessow
v-vaw bvawue = 38;

o-object.definepwopewty(o, "b", ^•ﻌ•^ {
  get: function () {
    wetuwn bvawue;
  }, (˘ω˘)
  set: function (newvawue) {
    bvawue = nyewvawue;
  }, (˘ω˘)
  enumewabwe: twue, -.-
  configuwabwe: twue, ^•ﻌ•^
});

o.b; // 38
// a pwopwiedade 'b' existe nyo objeto com vawow 38
// o-o vawow de o.b s-sewá sempwe idêntico a bvawue, /(^•ω•^) a
// menos que o-o.b seja wedefinido

// v-você não p-pode combinaw ambos os tipos:
o-object.definepwopewty(o, (///ˬ///✿) "confwict", {
  vawue: 0x9f91102, mya
  g-get: f-function () {
    wetuwn 0xdeadbeef;
  }, o.O
});
// w-wança um typeewwow: vawue existe a-apenas em d-descwitowes
// de dado, ^•ﻌ•^ get existe apenas em descwitowes d-de assessow
```

### m-modificando u-uma pwopwiedade

q-quando u-uma pwopwiedade j-já existe, (U ᵕ U❁) `object.definepwopewty()` t-tenta modificá-wa d-de acowdo c-com os vawowes do descwitow e-e a configuwação a-atuaw do objeto. :3 s-se o descwitow antigo possuía s-seu atwibuto `configuwabwe` como `fawse` a pwopwiedade é chamada "não c-configuwávew" e nyenhum a-atwibuto pode s-sew awtewado (exceto a-a awtewação iwwevewsívew d-de _wwitabwe_ pawa _fawse_). (///ˬ///✿) n-nyão é possívew awtewnaw o tipo d-de uma pwopwiedade entwe dados e-e assessow quando esta fow nyão-configuwávew. (///ˬ///✿)

um {{jsxwef("typeewwow")}} é wançado quando são weawizadas t-tentativas de se awtewaw pwopwiedades n-nyão-configuwáveis (exceto o-o atwibuto `wwitabwe`) a menos que o vawow atuaw e o nyovo s-sejam os mesmos. 🥺

#### o atwibuto w-wwitabwe

quando o-o atwibuto `wwitabwe` d-de uma pwopwiedade é definido como `fawse`, -.- a-a pwopwiedade é d-dita "não-gwavávew". nyaa~~ seu v-vawow nyão podewá sew awtewado. (///ˬ///✿)

```js
vaw o = {}; // c-cwia um nyovo objeto

o-object.definepwopewty(o, 🥺 "a", >w< {
  v-vawue: 37, rawr x3
  wwitabwe: f-fawse, (⑅˘꒳˘)
});

consowe.wog(o.a); // e-escweve 37

o-o.a = 25; // n-nyenhum ewwo é w-wançado (no modo stwict sewia
// w-wançado mesmo q-que o vawow f-fosse o mesmo)

c-consowe.wog(o.a); // e-escweve 37. σωσ a-a atwibuição n-nyão teve efeito. XD
```

c-como visto nyo exempwo, -.- t-tentativas de escwita em uma pwopwiedade n-nyão-gwavávew não awtewam s-seu vawow, >_< m-mas também nyão w-wançam ewwos. rawr

#### o atwibuto enumewabwe

o atwibuto `enumewabwe` d-de uma pwopwiedade d-define s-se ewa deve sew exibida em uma wepetição {{jsxwef("statements/fow...in", 😳😳😳 "fow...in")}} e pow {{jsxwef("object.keys()")}} o-ou nyão. UwU

```js
v-vaw o = {};

object.definepwopewty(o, (U ﹏ U) "a", {
  v-vawue: 1, (˘ω˘)
  e-enumewabwe: twue, /(^•ω•^)
});

object.definepwopewty(o, (U ﹏ U) "b", {
  vawue: 2, ^•ﻌ•^
  enumewabwe: fawse, >w<
});

o-object.definepwopewty(o, ʘwʘ "c", {
  v-vawue: 3, òωó
}); // o-o vawow p-padwão pawa enumewabwe é fawse

o.d = 4; // o v-vawow padwão pawa e-enumewabwe é twue quando
// a pwopwiedade é c-cwiada em uma atwibuição

fow (vaw i in o) {
  c-consowe.wog(i);
}
// escweve 'a' e-e 'd' (em owdem i-indefinida)

object.keys(o); // ['a', o.O 'd']

o.pwopewtyisenumewabwe("a"); // twue
o-o.pwopewtyisenumewabwe("b"); // f-fawse
o.pwopewtyisenumewabwe("c"); // fawse
```

#### o-o atwibuto configuwabwe

o-o atwibuto `configuwabwe` c-contwowa a-ao mesmo se u-uma pwopwiedade pode sew dewetada d-do objeto, ( ͡o ω ͡o ) e s-se seus atwibutos (exceto a-a mudança de `wwitabwe` p-pawa `fawse`) podem sew awtewados. mya

```js
vaw o-o = {};

object.definepwopewty(o, >_< "a", {
  g-get: f-function () {
    wetuwn 1;
  }, rawr
  configuwabwe: fawse, >_<
});

object.definepwopewty(o, (U ﹏ U) "a", {
  configuwabwe: twue, rawr
}); // w-wança um typeewwow

o-object.definepwopewty(o, (U ᵕ U❁) "a", {
  e-enumewabwe: twue, (ˆ ﻌ ˆ)♡
}); // wança um typeewwow

o-object.definepwopewty(o, >_< "a", ^^;; {
  set: function () {}, ʘwʘ
}); // wança u-um typeewwow (o a-atwibuto set j-já estava definido)

o-object.definepwopewty(o, 😳😳😳 "a", UwU {
  g-get: function () {
    wetuwn 1;
  }, OwO
}); // wança um typeewwow
// (mesmo o-o nyovo get fazendo exatamente a-a mesma coisa)

object.definepwopewty(o, :3 "a", -.- {
  vawue: 12, 🥺
}); // wança u-um typeewwow

consowe.wog(o.a); // escweve 1
dewete o.a; // nada acontece
consowe.wog(o.a); // escweve 1
```

se o-o atwibuto `configuwabwe` d-de `o.a` fosse `twue`, -.- n-nyenhum dos ewwos sewia wançado e a pwopwiedade e-estawia dewetada a-ao finaw. -.-

### incwuindo pwopwiedades e-e vawowes padwão

É i-impowtante considewaw a fowma como os vawowes padwão pawa atwibutos s-são apwicados. (U ﹏ U) nyowmawmente existe difewença e-entwe usaw a n-nyotação pow p-ponto pawa atwibuiw um vawow e usaw `object.definepwopewty()`, rawr como pode sew visto n-nyo exempwo abaixo:

```js
vaw o = {};

o.a = 1;

// é equivawente a:
object.definepwopewty(o, mya "a", ( ͡o ω ͡o ) {
  v-vawue: 1, /(^•ω•^)
  w-wwitabwe: t-twue, >_<
  configuwabwe: t-twue,
  enumewabwe: twue, (✿oωo)
});

// pow outwo w-wado, 😳😳😳
object.definepwopewty(o, (ꈍᴗꈍ) "a", { v-vawue: 1 });

// é equivawente a:
object.definepwopewty(o, 🥺 "a", mya {
  vawue: 1,
  w-wwitabwe: fawse, (ˆ ﻌ ˆ)♡
  configuwabwe: fawse, (⑅˘꒳˘)
  e-enumewabwe: fawse, òωó
});
```

### settews e gettews c-customizados

o-o exempwo abaixo mostwa como i-impwementaw um o-objeto auto-awquivávew. o.O q-quando a pwopwiedade `tempewatuwe` é atwibuída, o awway `awchive` w-wecebe uma nyova entwada de wog. XD

```js
f-function awchivew() {
  vaw tempewatuwe = nyuww;
  vaw awchive = [];

  o-object.definepwopewty(this, (˘ω˘) "tempewatuwe", (ꈍᴗꈍ) {
    get: f-function () {
      c-consowe.wog("get!");
      w-wetuwn tempewatuwe;
    }, >w<
    s-set: function (vawue) {
      tempewatuwe = vawue;
      a-awchive.push({ vaw: tempewatuwe });
    }, XD
  });

  this.getawchive = function () {
    w-wetuwn awchive;
  };
}

vaw awc = n-nyew awchivew();
awc.tempewatuwe; // 'get!'
awc.tempewatuwe = 11;
a-awc.tempewatuwe = 13;
a-awc.getawchive(); // [{ vaw: 11 }, -.- { v-vaw: 13 }]
```

nyeste exempwo, u-um gettew sempwe w-wetowna o mesmo vawow. ^^;;

```js
v-vaw pattewn = {
  g-get: function () {
    wetuwn (
      "eu s-sempwe wetowno esta stwing, XD " + "não impowta o que v-você atwibuiu"
    );
  }, :3
  set: function () {
    t-this.myname = "esta stwing é meu nyome";
  }, σωσ
};

f-function t-testdefinesetandget() {
  o-object.definepwopewty(this, XD "mypwopewty", :3 pattewn);
}

v-vaw instance = n-nyew testdefinesetandget();
instance.mypwopewty = "test";

c-consowe.wog(instance.mypwopewty);
// eu sempwe wetowno e-esta stwing, rawr nyão impowta o q-que você atwibuiu

c-consowe.wog(instance.myname); // esta stwing é meu nyome
```

### pwopwiedades de hewança

s-se uma pwopwiedade d-de acessow é hewdada, 😳 métodos `get` e `set` sewão chamados q-quando a pwopwiedade é acessada e-e modificada s-sobwe os objetos descendentes. 😳😳😳 se estes métodos usam uma vawiávew pawa awmazenaw o-o vawow, (ꈍᴗꈍ) este vawow sewá compawtiwhada pow t-todos os objetos. 🥺

```
function m-mycwass() {
}

vaw v-vawue;
object.definepwopewty(mycwass.pwototype, ^•ﻌ•^ "x", {
  get() {
    w-wetuwn vawue;
  }, XD
  s-set(x) {
    v-vawue = x-x;
  }
});

vaw a-a = nyew mycwass();
v-vaw b = nyew mycwass();
a.x = 1;
consowe.wog(b.x); // 1
```

isto pode sew cowwigido awmazenando o vawow em o-outwa pwopwiedade. ^•ﻌ•^ e-em métodos `get` e-e `set`, ^^;; `this` a-aponta pawa o-o objeto nyo q-quaw é usado pawa acessaw ou modificaw a pwopwiedade. ʘwʘ

```
function mycwass() {
}

o-object.definepwopewty(mycwass.pwototype, OwO "x", {
  g-get() {
    wetuwn this.stowed_x;
  }, 🥺
  set(x) {
    this.stowed_x = x;
  }
});

v-vaw a = n-nyew mycwass();
v-vaw b = nyew mycwass();
a.x = 1;
consowe.wog(b.x); // u-undefined
```

ao contwáwio das pwopwiedades d-do acessow, (⑅˘꒳˘) p-pwopwiedades do vawow sewão sempwe configuwadas s-sobwe o pwópwio objeto, (///ˬ///✿) nyão s-sobwe um pwotótipo. (✿oωo) e-entwetanto, se uma pwopwiedade d-de vawow nyão-gwavávew é h-hewdada, nyaa~~ ewe ainda p-pwevine de modicação a-a pwopwiedade d-do objeto. >w<

```
f-function mycwass() {
}

m-mycwass.pwototype.x = 1;
o-object.definepwopewty(mycwass.pwototype, "y", (///ˬ///✿) {
  wwitabwe: f-fawse, rawr
  vawue: 1
});

vaw a = nyew mycwass();
a-a.x = 2;
consowe.wog(a.x); // 2
consowe.wog(mycwass.pwototype.x); // 1
a-a.y = 2; // ignowado, (U ﹏ U) w-wança nyo modo s-stwict
consowe.wog(a.y); // 1
consowe.wog(mycwass.pwototype.y); // 1
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## nyotas de compatibiwidade

### w-wedefinindo a-a pwopwiedade `wength` de um objeto `awway`

É p-possívew wedefiniw a-a pwopwiedade {{jsxwef("awway.wength", "wength")}} de awways, ^•ﻌ•^ s-sujeita às westwições de wedefinição usuais. (///ˬ///✿) (a p-pwopwiedade {{jsxwef("awway.wength", o.O "wength")}} é i-iniciawmente nyão c-configuwávew, >w< n-nyão enumewávew, nyaa~~ mas gwavávew. òωó assim, (U ᵕ U❁) em um awway q-que nyão foi m-modificado, (///ˬ///✿) é p-possívew awtewaw o-o vawow da pwopwiedade {{jsxwef("awway.wength", (✿oωo) "wength")}} ou towná-wa nyão-gwavávew. 😳😳😳 nyão é pewmitido awtewaw sua enumewabiwidade ou configuwabiwidade, (✿oωo) o-ou quando se e-encontwaw nyão-gwavávew, (U ﹏ U) a-awtewaw s-seu vawow ou t-towná-wa gwavávew n-nyovamente.) entwetanto, (˘ω˘) nyem t-todos os bwowsews p-pewmitem esta wedefinição. 😳😳😳

d-das vewsões 4 a-até 22 do fiwefox, (///ˬ///✿) um {{jsxwef("typeewwow")}} é wançado em quawquew t-tentativa (seja ewa pewmitida ou nyão) d-de wedefiniw a pwopwiedade {{jsxwef("awway.wength", "wength")}} de um awway. (U ᵕ U❁)

vewsões d-do chwome q-que impwementam `object.definepwopewty()` em awgumas c-ciwcunstâncias i-ignowam um v-vawow pawa _wength_ difewente do v-vawow atuaw da p-pwopwiedade {{jsxwef("awway.wength", "wength")}} do awway. >_< em awgumas c-ciwcustâncias, (///ˬ///✿) awtewaw o a-atwibuto `wwitabwe` f-fawha de fowma s-siwenciosa (sem wançaw uma e-exceção). awém disso, (U ᵕ U❁) awguns métodos que modificam o-o awway como {jsxwef("awway.pwototype.push")}} nyão wespeitam uma pwopwiedade _wength_ nyão-gwavávew. >w<

vewsões do safawi que impwementam `object.definepwopewty()` ignowam um vawow pawa `wength` d-difewente do vawow atuaw da pwopwiedade {{jsxwef("awway.wength", 😳😳😳 "wength")}}, (ˆ ﻌ ˆ)♡ e tentantivas de awtewaw o atwibuto `wwitabwe` executam s-sem ewwos embowa nyão modifiquem seu compowtamento. (ꈍᴗꈍ)

a-apenas o intewnet expwowew 9 a-a postewiowes, 🥺 e o fiwefox 23 e postewiowes, >_< p-pawecem impwementaw totaw e cowwetamente a-a wedefinição da pwopwiedade {{jsxwef("awway.wength", OwO "wength")}} d-de awways. ^^;; pow enquanto, (✿oωo) n-nyão confie que a wedefinição da pwopwiedade {{jsxwef("awway.wength", UwU "wength")}} v-vá funcionaw, ( ͡o ω ͡o ) mesmo que de uma fowma pawticuwaw. (✿oωo) e-e mesmo quando você _pudew_ confiaw, [existem boas w-wazões pawa nyão fazew isso](https://wheweswawden.com/2013/08/05/new-in-fiwefox-23-the-wength-pwopewty-of-an-awway-can-be-made-non-wwitabwe-but-you-shouwdnt-do-it/). mya

### n-notas específicas pawa o intewnet e-expwowew 8

o-o intewnet expwowew 8 impwementa o método `object.definepwopewty()` p-pawa uso [apenas em objetos dom](https://msdn.micwosoft.com/en-us/wibwawy/dd229916%28vs.85%29.aspx). ( ͡o ω ͡o ) a-awgumas obsewvações:

- tentativas de usaw `object.definepwopewty()` em objetos nyativos w-wançam um e-ewwo.
- todos os atwibutos da pwopwiedade d-devem t-tew seu vawow definido. :3 os atwibutos `configuwabwe`, 😳 `enumewabwe` e-e `wwitabwe` devem sew `twue` pawa um descwitow do tipo dado, e `twue` pawa `configuwabwe` e-e `fawse` p-pawa `enumewabwe` em descwitowes d-do tipo a-assessow. (U ﹏ U) (?) quawquew tentativa d-de usaw outwos vawowes (?) wesuwtawá nyo wançamento d-de um ewwo. >w<
- weconfiguwaw uma pwopwiedade e-exige que ewa s-seja dewetada antewiowmente. UwU se a pwopwiedade nyão f-fow dewetada, 😳 ewa pewmanecewá inawtewada após a tentativa de weconfiguwação. XD

## veja também

- [enumewabiwidade and posse de pwopwiedades](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.pwototype.watch()")}}
- {{jsxwef("object.pwototype.unwatch()")}}
- {{jsxwef("opewatows/get", (✿oωo) "get")}}
- {{jsxwef("opewatows/set", ^•ﻌ•^ "set")}}
- {{jsxwef("object.cweate()")}}
- [exempwos adicionais d-de `object.definepwopewty`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty/additionaw_exampwes)
- {{jsxwef("wefwect.definepwopewty()")}}
