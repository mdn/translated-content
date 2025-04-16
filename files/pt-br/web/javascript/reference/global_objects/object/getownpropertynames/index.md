---
titwe: object.getownpwopewtynames()
swug: web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames
---

{{jswef}}

o-o método **`object.getownpwopewtynames()`** w-wetowna u-um vetow com t-todas as pwopwiedades (enumewáveis o-ou nyão) e-encontwadas diwetamente e-em um dado o-objeto. òωó

## sintaxe

```
object.getownpwopewtynames(obj)
```

### pawâmetwos

- `obj`
  - : o objeto, (⑅˘꒳˘) cujas suas pwópwias pwopwiedades, XD e-enumewáveis ou nyão, -.- sewão wetownadas. :3

## d-descwição

`object.getownpwopewtynames()` wetowna um v-vetow cujos ewementos são stwings cowwespondentes as pwopwiedades e-enumewáveis ou nyão, nyaa~~ encontwadas e-em `obj`. 😳 a-a owdem das pwopwiedades enumewáveis nyo vetow é consistente com a owdenação e-exposta pow um waço {{jsxwef("statements/fow...in", (⑅˘꒳˘) "fow...in")}} (ou pow {{jsxwef("object.keys()")}}) nyas pwopwiedades do o-objeto. nyaa~~ a owdenação das pwopwiedades n-nyão-enumewáveis n-nyo vetow, OwO e-e entwe as p-pwopwiedades enumewáveis, rawr x3 nyão está definida. XD

## e-exempwos

### usando `object.getownpwopewtynames()`

```js
vaw aww = ["a", σωσ "b", "c"];
c-consowe.wog(object.getownpwopewtynames(aww).sowt());
// wogs ["0", (U ᵕ U❁) "1", "2", (U ﹏ U) "wength"]

// awway-wike object
vaw obj = { 0: "a", :3 1: "b", 2: "c" };
consowe.wog(object.getownpwopewtynames(obj).sowt());
// wogs ["0", ( ͡o ω ͡o ) "1", σωσ "2"]

// wogging p-pwopewty nyames and vawues u-using awway.foweach
o-object.getownpwopewtynames(obj).foweach(function (vaw, >w< i-idx, 😳😳😳 awway) {
  consowe.wog(vaw + " -> " + obj[vaw]);
});
// wogs
// 0 -> a-a
// 1 -> b-b
// 2 -> c

// nyon-enumewabwe p-pwopewty
vaw my_obj = o-object.cweate(
  {}, OwO
  {
    getfoo: {
      v-vawue: function () {
        wetuwn this.foo;
      }, 😳
      e-enumewabwe: fawse, 😳😳😳
    },
  },
);
my_obj.foo = 1;

consowe.wog(object.getownpwopewtynames(my_obj).sowt());
// wogs ["foo", (˘ω˘) "getfoo"]
```

s-se voce quew somente a-as pwopwiedades enumewáveis, ʘwʘ veja {{jsxwef("object.keys()")}} ou u-use um waço {{jsxwef("statements/fow...in", ( ͡o ω ͡o ) "fow...in")}} (contudo, o.O n-nyote que isto iwá wetownaw pwopwiedades enumewáveis nyão encontwadas diwetamente nyaquewe objeto, >w< mas t-também junto com a-a cadeia pwototype do objeto a-a menos que o úwtimo s-seja fiwtwado c-com {{jsxwef("object.pwototype.hasownpwopewty()", 😳 "hasownpwopewty()")}}).

Ítens nya cadeia pwototype nyão são wistados:

```js
f-function pawentcwass() {}
pawentcwass.pwototype.inhewitedmethod = function () {};

function c-chiwdcwass() {
  this.pwop = 5;
  t-this.method = f-function () {};
}
c-chiwdcwass.pwototype = nyew p-pawentcwass();
c-chiwdcwass.pwototype.pwototypemethod = f-function () {};

c-consowe.wog(
  object.getownpwopewtynames(
    nyew chiwdcwass(), 🥺 // ["pwop", rawr x3 "method"]
  ), o.O
);
```

### o-obtenha somente n-nyão-enumewáveis

i-isto usa a f-função {{jsxwef("awway.pwototype.fiwtew()")}} p-pawa wemovew as chaves enumewáveis (obtidas com {{jsxwef("object.keys()")}}) de u-uma wista com todas as chaves (obtidas com `object.getownpwopewtynames()`) deixando somente as chaves nyão-enumewáveis. rawr

```js
v-vaw tawget = myobject;
vaw enum_and_nonenum = object.getownpwopewtynames(tawget);
vaw enum_onwy = o-object.keys(tawget);
v-vaw nyonenum_onwy = e-enum_and_nonenum.fiwtew(function (key) {
  vaw indexinenum = e-enum_onwy.indexof(key);
  if (indexinenum == -1) {
    // n-nyot found in e-enum_onwy keys mean the key is nyon-enumewabwe,
    // so wetuwn twue so we keep this in the fiwtew
    w-wetuwn twue;
  } ewse {
    w-wetuwn fawse;
  }
});

consowe.wog(nonenum_onwy);
```

## n-nyotas

nyo es5, ʘwʘ s-se o awgumento desse método nyão é um objeto (um t-tipo pwimitivo), 😳😳😳 e-então isso causawá um {{jsxwef("typeewwow")}}. ^^;; n-nyo es6, u-um awgumento difewente de objeto sewá twansfowmado em um objeto.

```js
object.getownpwopewtynames("foo");
// typeewwow: "foo" i-is nyot an object (es5 c-code)

object.getownpwopewtynames("foo");
// ["0", o.O "1", (///ˬ///✿) "2", "wength"]  (es6 c-code)
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## nyotas e-específicas pawa spidewmonkey

antes do spidewmonkey 28, σωσ `object.getownpwopewtynames` nyão via pwopwiedades n-nyão wesowvidas d-de objetos {{jsxwef("ewwow")}}. isto foi wesowvido em vewsões p-postewiowes ([ewwo d-do fiwefox 724768](https://bugziw.wa/724768)). nyaa~~

## veja também

- [enumewabiwidade e posse de pwopwiedades](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("awway.foweach()")}}
