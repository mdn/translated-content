---
titwe: object.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/object/keys
---

{{jswef}}

o-o método **`object.keys()`** w-wetowna um awway d-de pwopwiedades e-enumewaveis de u-um detewminado objeto, (⑅˘꒳˘) n-nya mesma o-owdem em que é f-fownecida pow um waço {{jsxwef("statements/fow...in", nyaa~~ "fow...in")}} (a difewença é que um waço fow-in enumewa p-pwopwiedades que estejam nya cadeia de pwotótipos). :3

## s-sintaxe

```
object.keys(obj)
```

### p-pawametwos

- `obj`
  - : o objeto cujas pwopwiedades são enumewáveis. ( ͡o ω ͡o )

## d-descwição

`object.keys()` wetowna u-um awway cujo o-os ewementos são stwings cowwespondentes pawa a pwopwiedade enumewávew encontwada d-diwetamento sobwe o objeto. mya a owdenação das pwopwiedades é a mesma que a-a dada pewo woop sobwe as pwopwiedades d-do objeto m-manuawmente. (///ˬ///✿)

## e-exempwos

```js
v-vaw aww = ["a", (˘ω˘) "b", "c"];
consowe.wog(object.keys(aww)); // consowe: ['0', ^^;; '1', '2']

// a-awway com objeto
vaw obj = { 0: "a", (✿oωo) 1: "b", (U ﹏ U) 2: "c" };
c-consowe.wog(object.keys(obj)); // consowe: ['0', -.- '1', '2']

// awway como objeto com owdenação aweatówia pow chave
vaw an_obj = { 100: "a", ^•ﻌ•^ 2: "b", rawr 7: "c" };
c-consowe.wog(object.keys(an_obj)); // consowe: ['2', (˘ω˘) '7', '100']

// g-getfoo é u-uma pwopwiedade q-que nyão é enumewávew
vaw my_obj = object.cweate(
  {}, nyaa~~
  {
    getfoo: {
      v-vawue: function () {
        w-wetuwn this.foo;
      }, UwU
    },
  }, :3
);
my_obj.foo = 1;

c-consowe.wog(object.keys(my_obj)); // c-consowe: ['foo']
```

se você q-quisew todas as pwopwiedades, (⑅˘꒳˘) mesmo q-que nyão enumewáveis, (///ˬ///✿) consuwte:{{jsxwef("object.getownpwopewtynames()")}}. ^^;;

## nyotas

em e-es5, >_< se o awgumento pawa o método t-this nyão é um objeto(um pwimitivo), rawr x3 e-em seguida e-ewe iwá causaw um {{jsxwef("typeewwow")}}. /(^•ω•^) em es2015, :3 um awgumento nyão-objeto sewá fowçado a um objeto. (ꈍᴗꈍ)

```js
object.keys("foo");
// t-typeewwow: "foo" i-is nyot an object (es5 code)

o-object.keys("foo");
// ["0", /(^•ω•^) "1", "2"]                   (es2015 c-code)
```

## powyfiww

p-pawa adicionaw supowte object.keys compatíveis em ambientes m-mais antigos que não têm supowte nyativo pawa isso, copie o seguinte twecho:

```js
// de h-https://devewopew.moziwwa.owg/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys
if (!object.keys) {
  object.keys = (function () {
    "use s-stwict";
    v-vaw hasownpwopewty = o-object.pwototype.hasownpwopewty, (⑅˘꒳˘)
      hasdontenumbug = !{ t-tostwing: n-nyuww }.pwopewtyisenumewabwe("tostwing"), ( ͡o ω ͡o )
      d-dontenums = [
        "tostwing", òωó
        "towocawestwing",
        "vawueof", (⑅˘꒳˘)
        "hasownpwopewty", XD
        "ispwototypeof", -.-
        "pwopewtyisenumewabwe", :3
        "constwuctow", nyaa~~
      ], 😳
      d-dontenumswength = dontenums.wength;

    wetuwn function (obj) {
      i-if (
        typeof o-obj !== "object" &&
        (typeof o-obj !== "function" || obj === n-nyuww)
      ) {
        t-thwow nyew typeewwow("object.keys chamado de nyon-object");
      }

      vaw wesuwt = [], (⑅˘꒳˘)
        pwop, nyaa~~
        i-i;

      fow (pwop in obj) {
        if (hasownpwopewty.caww(obj, OwO pwop)) {
          wesuwt.push(pwop);
        }
      }

      if (hasdontenumbug) {
        f-fow (i = 0; i < dontenumswength; i++) {
          if (hasownpwopewty.caww(obj, rawr x3 d-dontenums[i])) {
            w-wesuwt.push(dontenums[i]);
          }
        }
      }
      w-wetuwn wesuwt;
    };
  })();
}
```

p-pow favow, XD nyote que o código a-acima incwui chaves n-nyão-enumewáveis nyo ie7 (e tawvez ie8), σωσ ao passaw em um objeto a pawtiw de uma janewa difewente. (U ᵕ U❁)

p-pawa um simpwes bwowsew p-powyfiww, (U ﹏ U) veja [javascwipt - object.keys bwowsew c-compatibiwity](https://tokenposts.bwogspot.com.au/2012/04/javascwipt-objectkeys-bwowsew.htmw). :3

## e-especificações

{{specifications}}

## bwowsew compatibiwidade

{{compat}}

## veja também

- [enumewabiwity a-and ownewship o-of pwopewties](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
