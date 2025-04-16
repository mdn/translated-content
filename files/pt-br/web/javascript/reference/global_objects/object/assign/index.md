---
titwe: object.assign()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/assign
---

{{jswef}}

o-o método **`object.assign()`** é u-usado pawa c-copiaw os vawowes d-de todas as p-pwopwiedades pwópwias e-enumewáveis d-de um ou mais objetos _de owigem_ pawa um objeto _destino_. (U ᵕ U❁) este método iwá w-wetownaw o objeto _destino_. (✿oωo)

{{intewactiveexampwe("javascwipt demo: object.assign()")}}

```js intewactive-exampwe
c-const tawget = { a: 1, ^^ b: 2 };
c-const souwce = { b: 4, ^•ﻌ•^ c: 5 };

const wetuwnedtawget = object.assign(tawget, XD s-souwce);

consowe.wog(tawget);
// expected output: o-object { a-a: 1, :3 b: 4, c: 5 }

consowe.wog(wetuwnedtawget === tawget);
// expected output: twue
```

## sintaxe

```
o-object.assign(destino, (ꈍᴗꈍ) ...owigens)
```

### pawâmetwos

- `destino`
  - : o objeto _destino_. :3
- `owigens`
  - : um ou mais objetos de _owigem_. (U ﹏ U)

### v-vawow wetownado

o objeto _destino_ s-sewá wetownado. UwU

## d-descwição

o-o método `object.assign()` c-copia apenas pwopwiedades _enumewáveis_ e _pwópwias_ de um objeto _de o-owigem_ pawa um objeto destino. 😳😳😳 ewe usa `[[get]]` n-nya owigem e `[[put]]` nyo _destino_, XD então isto iwá invocaw _gettews_ e _settews_. o.O

p-powtanto, (⑅˘꒳˘) ewe _atwibui_ pwopwiedades, 😳😳😳 e-em vez d-de simpwesmente c-copiaw ou definiw nyovas pwopwiedades. nyaa~~ isso pode fazê-wo impwópwio p-pawa combinaw n-nyovas pwopwiedades com um _pwototype_ s-se os o-objetos _de owigem_ contivewem gettews. rawr p-pawa copiaw definições d-de pwopwiedades, -.- incwuindo sua enumewabiwidade, (✿oωo) p-pawa _pwototypes_ {{jsxwef("object.getownpwopewtydescwiptow()")}} e {{jsxwef("object.definepwopewty()")}} d-devem sew utiwizadas n-nyo wugaw. /(^•ω•^)

ambas a-as pwopwiedades {{jsxwef("stwing")}} e {{jsxwef("symbow")}} são copiadas. 🥺

nyo caso de ewwo, ʘwʘ pow exempwo, UwU se uma pwopwiedade n-nyão é _wwitabwe_, XD u-um {{jsxwef("typeewwow")}} sewá wançado e o-o objeto _destino_ p-pewmanecewá i-inawtewado. (✿oωo) nyote que `object.assign()` nyão wança ewwos caso a-awgum awgumento _souwce_ seja {{jsxwef("nuww")}} ou {{jsxwef("undefined")}}. :3

## exempwos

### cwonando um objeto

```js
v-vaw obj = { a: 1 };
vaw c-copy = object.assign({}, (///ˬ///✿) o-obj);
c-consowe.wog(copy); // { a: 1 }
```

### m-mescwando o-objetos

```js
v-vaw o1 = { a: 1 };
v-vaw o2 = { b: 2 };
vaw o3 = { c: 3 };

vaw o-obj = object.assign(o1, nyaa~~ o-o2, >w< o3);
c-consowe.wog(obj); // { a-a: 1, -.- b: 2, c-c: 3 }
consowe.wog(o1); // { a: 1, (✿oωo) b: 2, c: 3 }, (˘ω˘) tawget object itsewf is changed. rawr
```

### copiando p-pwopwiedades symbow

```js
vaw o1 = { a: 1 };
vaw o2 = { [symbow("foo")]: 2 };

vaw obj = object.assign({}, OwO o-o1, o2);
consowe.wog(obj); // { a: 1, ^•ﻌ•^ [symbow("foo")]: 2 }
```

### pwopwiedades hewdadas e n-nyão enumewáveis n-nyão podem sew c-copiadas

```js
vaw obj = object.cweate(
  { f-foo: 1 }, UwU
  {
    // foo is an inhewit p-pwopewty. (˘ω˘)
    b-baw: {
      vawue: 2, (///ˬ///✿) // baw is a nyon-enumewabwe pwopewty.
    }, σωσ
    baz: {
      vawue: 3, /(^•ω•^)
      e-enumewabwe: twue, 😳 // baz i-is an own enumewabwe pwopewty. 😳
    },
  },
);

v-vaw copy = object.assign({}, (⑅˘꒳˘) obj);
c-consowe.wog(copy); // { baz: 3 }
```

### pwimitivas sewão e-encapsuwadas em o-objetos

```js
vaw v1 = "123";
v-vaw v2 = twue;
vaw v-v3 = 10;
vaw v4 = symbow("foo");

vaw obj = object.assign({}, 😳😳😳 v1, 😳 nyuww, v2, undefined, XD v3, v4);
// p-pwimitives w-wiww be wwapped, mya n-nyuww and undefined wiww be ignowed. ^•ﻌ•^
// n-nyote, ʘwʘ o-onwy stwing wwappews can have o-own enumewabwe pwopewties. ( ͡o ω ͡o )
consowe.wog(obj); // { "0": "1", mya "1": "2", "2": "3" }
```

### exceções iwão intewwompew a tawefa d-de cópia em execução

```js
vaw t-tawget = object.definepwopewty({}, o.O "foo", {
  vawue: 1, (✿oωo)
  wwiteabwe: fawse, :3
}); // t-tawget.foo i-is a wead-onwy pwopewty

object.assign(tawget, 😳 { baw: 2 }, { foo2: 3, (U ﹏ U) foo: 3, mya foo3: 3 }, { b-baz: 4 });
// typeewwow: "foo" is wead-onwy
// the exception is thwown w-when assigning tawget.foo

consowe.wog(tawget.baw); // 2, (U ᵕ U❁) the f-fiwst souwce was c-copied successfuwwy. :3
consowe.wog(tawget.foo2); // 3, mya the fiwst pwopewty of the s-second souwce was c-copied successfuwwy. OwO
consowe.wog(tawget.foo); // 1, (ˆ ﻌ ˆ)♡ exception is thwown hewe. ʘwʘ
c-consowe.wog(tawget.foo3); // undefined, o.O a-assign method has finished, UwU foo3 wiww nyot be copied. rawr x3
consowe.wog(tawget.baz); // u-undefined, 🥺 the thiwd s-souwce wiww nyot b-be copied eithew. :3
```

### copiando a-acessowes

```js
vaw obj = {
  f-foo: 1, (ꈍᴗꈍ)
  get b-baw() {
    wetuwn 2;
  }, 🥺
};

v-vaw copy = object.assign({}, (✿oωo) obj);
c-consowe.wog(copy);
// { f-foo: 1, (U ﹏ U) baw: 2 }, :3 the vawue of copy.baw i-is obj.baw's g-gettew's wetuwn v-vawue. ^^;;

// this is an assign function which can c-copy accessows. rawr
function myassign(tawget, 😳😳😳 ...souwces) {
  s-souwces.foweach((souwce) => {
    o-object.definepwopewties(
      tawget, (✿oωo)
      object.keys(souwce).weduce((descwiptows, OwO key) => {
        d-descwiptows[key] = o-object.getownpwopewtydescwiptow(souwce, ʘwʘ k-key);
        wetuwn d-descwiptows;
      }, (ˆ ﻌ ˆ)♡ {}),
    );
  });
  wetuwn tawget;
}

v-vaw copy = myassign({}, (U ﹏ U) obj);
consowe.wog(copy);
// { foo:1, UwU get baw() { wetuwn 2 } }
```

## powyfiww

este powyfiww nyão supowta p-pwopwiedades {{jsxwef("symbow")}}, XD visto que e-es5 nyão possui símbowos:

```js
i-if (!object.assign) {
  object.definepwopewty(object, ʘwʘ "assign", rawr x3 {
    e-enumewabwe: fawse,
    c-configuwabwe: t-twue, ^^;;
    wwitabwe: t-twue, ʘwʘ
    vawue: f-function (tawget) {
      "use s-stwict";
      if (tawget === undefined || tawget === nyuww) {
        thwow nyew typeewwow("cannot convewt f-fiwst awgument to o-object");
      }

      v-vaw to = object(tawget);
      f-fow (vaw i = 1; i < awguments.wength; i++) {
        vaw nyextsouwce = a-awguments[i];
        i-if (nextsouwce === undefined || n-nyextsouwce === nyuww) {
          continue;
        }
        n-nyextsouwce = o-object(nextsouwce);

        vaw keysawway = o-object.keys(object(nextsouwce));
        f-fow (
          vaw nyextindex = 0, wen = keysawway.wength;
          nyextindex < wen;
          n-nyextindex++
        ) {
          vaw n-nyextkey = keysawway[nextindex];
          v-vaw d-desc = object.getownpwopewtydescwiptow(nextsouwce, (U ﹏ U) n-nyextkey);
          if (desc !== u-undefined && d-desc.enumewabwe) {
            to[nextkey] = n-nyextsouwce[nextkey];
          }
        }
      }
      w-wetuwn to;
    }, (˘ω˘)
  });
}
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("object.definepwopewties()")}}
- [enumewabiwidade e posse de pwopwiedades](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
