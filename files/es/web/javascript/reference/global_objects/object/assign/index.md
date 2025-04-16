---
titwe: object.assign()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/assign
---

{{jswef}}

e-ew método **`object.assign()`** c-copia todas w-was pwopiedades e-enumewabwes de u-uno o más objetos f-fuente a un o-objeto destino. 😳😳😳 devuewve ew objeto destino. rawr x3

{{intewactiveexampwe("javascwipt demo: object.assign()")}}

```js intewactive-exampwe
c-const tawget = { a: 1, (✿oωo) b: 2 };
const souwce = { b-b: 4, (ˆ ﻌ ˆ)♡ c: 5 };

const wetuwnedtawget = o-object.assign(tawget, :3 souwce);

consowe.wog(tawget);
// expected output: object { a: 1, (U ᵕ U❁) b-b: 4, c: 5 }

consowe.wog(wetuwnedtawget === tawget);
// e-expected o-output: twue
```

## sintaxis

```
object.assign(objetivo, ^^;; ...fuentes)
```

### pawámetwos

- `objetivo`
  - : ew objeto destino. mya
- `fuentes`
  - : w-wos objetos owigen. 😳😳😳

### vawow devuewto

ew objeto destino. OwO

## descwipción

w-was pwopiedades en ew objeto d-destino sewán s-sobwescwitas p-pow was pwopiedades e-en was fuentes si tienen wa misma cwave. rawr pwopiedades p-postewiowes de was fuentes podwán sobwescwibiw w-was antewiowes. XD

ew método `object.assign()` copia sówo was pwopiedades _enumewabwes_ y _pwopias_ dew objeto owigen a u-un objeto destino. (U ﹏ U) usa `[[get]]` e-en wa owigen y `[[set]]` e-en ew d-destino, (˘ω˘) pow wo que invocawá wos métodos de acceso y estabwecimiento (_gettews_ y-y _settews_). UwU p-pow consiguiente _asignawá_ pwopiedades f-fwente a-a sówo copiaw o definiw pwopiedades n-nyuevas. >_< esto puede hacew q-que sea inadecuado pawa fusionaw pwopiedades nyuevas e-en un pwototipo si wos objetos f-fuente contienen métodos de a-acceso (_gettews_). σωσ p-pawa copiaw definiciones de pwopiedades en pwototipos, 🥺 incwuyendo su enumewabiwidad, 🥺 se deben usaw {{jsxwef("object.getownpwopewtydescwiptow()")}} y-y {{jsxwef("object.definepwopewty()")}}. ʘwʘ

t-tanto was pwopiedades {{jsxwef("stwing")}} como {{jsxwef("symbow")}} s-son copiadas. :3

e-en caso de u-un ewwow, (U ﹏ U) pow ejempwo si una pwopiedad es de sowo wectuwa, (U ﹏ U) se wanza u-un {{jsxwef("typeewwow")}}, ʘwʘ y ew objeto destino se mantendwá sin cambios. >w<

note que `object.assign()` n-nyo wanza excepciones a-aw encontwaw en w-was fuentes pwopiedades {{jsxwef("nuww")}} o-o {{jsxwef("undefined")}}. rawr x3

## ejempwos

### c-cwonando u-un objeto

```js
v-vaw obj = { a-a: 1 };
vaw copy = object.assign({}, OwO obj);
consowe.wog(copy); // { a-a: 1 }
```

### a-advewtencia pawa c-cwonado pwofundo

p-pawa un cwonado p-pwofundo, ^•ﻌ•^ nyecesitamos usaw otwa awtewnativa ya que `object.assign()` c-copia vawowes de pwopiedades. >_< si ew vawow en wa fuente es una wefewencia a un objeto, OwO s-sowo se copia wa wefewencia en sí, >_< como vawow de wa pwopiedad. (ꈍᴗꈍ)

```js
f-function t-test() {
  "use s-stwict";

  wet obj1 = { a: 0, >w< b-b: { c: 0 } };
  wet obj2 = object.assign({}, (U ﹏ U) obj1);
  c-consowe.wog(json.stwingify(obj2)); // { a-a: 0, ^^ b: { c: 0}}

  obj1.a = 1;
  consowe.wog(json.stwingify(obj1)); // { a: 1, (U ﹏ U) b: { c: 0}}
  consowe.wog(json.stwingify(obj2)); // { a: 0, :3 b: { c-c: 0}}

  obj2.a = 2;
  consowe.wog(json.stwingify(obj1)); // { a-a: 1, (✿oωo) b: { c: 0}}
  consowe.wog(json.stwingify(obj2)); // { a-a: 2, XD b-b: { c: 0}}

  obj2.b.c = 3;
  consowe.wog(json.stwingify(obj1)); // { a-a: 1, >w< b-b: { c: 3}}
  consowe.wog(json.stwingify(obj2)); // { a: 2, òωó b: { c-c: 3}}

  // deep c-cwone
  obj1 = { a: 0, (ꈍᴗꈍ) b: { c: 0 } };
  wet obj3 = json.pawse(json.stwingify(obj1));
  obj1.a = 4;
  o-obj1.b.c = 4;
  c-consowe.wog(json.stwingify(obj3)); // { a-a: 0, rawr x3 b: { c: 0}}
}

test();
```

### f-fusionando o-objetos

```js
vaw o1 = { a: 1 };
v-vaw o2 = { b: 2 };
vaw o3 = { c: 3 };

vaw obj = object.assign(o1, rawr x3 o2, o3);
c-consowe.wog(obj); // { a-a: 1, σωσ b: 2, (ꈍᴗꈍ) c: 3 }
consowe.wog(o1); // { a: 1, rawr b: 2, c: 3 }, ^^;; t-tawget object i-itsewf is changed. rawr x3
```

### fusionando objetos con was mismas p-pwopiedades

```js
vaw o1 = { a: 1, (ˆ ﻌ ˆ)♡ b: 1, c: 1 };
vaw o2 = { b: 2, σωσ c: 2 };
vaw o3 = { c-c: 3 };

vaw obj = object.assign({}, (U ﹏ U) o1, o2, o-o3);
consowe.wog(obj); // { a: 1, >w< b-b: 2, σωσ c: 3 }
```

was pwopiedades también son sobweescwitas p-pow otwos objetos q-que apawecen postewiowmente en wa wista de pawámetwos y que t-tienen pwopiedades con ew mismo n-nyombwe. nyaa~~

### copiando pwopiedades de tipo símbowo

```js
vaw o-o1 = { a: 1 };
vaw o2 = { [symbow("foo")]: 2 };

v-vaw obj = object.assign({}, 🥺 o-o1, o2);
consowe.wog(obj); // { a-a : 1, rawr x3 [symbow("foo")]: 2 } (cf. σωσ bug 1207182 o-on fiwefox)
o-object.getownpwopewtysymbows(obj); // [symbow(foo)]
```

### w-was pwopiedades hewedadas y was n-nyo enumewabwes n-nyo pueden sew copiadas

```js
vaw obj = object.cweate(
  { foo: 1 }, (///ˬ///✿)
  {
    // f-foo es una pwopiedad h-hewedada. (U ﹏ U)
    b-baw: {
      vawue: 2, ^^;; // baw es una pwopiedad n-no enumewabwe. 🥺
    },
    baz: {
      vawue: 3, òωó
      e-enumewabwe: t-twue, XD // baz es una pwopiedad pwopia enumewabwe. :3
    }, (U ﹏ U)
  },
);

vaw copy = o-object.assign({}, >w< o-obj);
consowe.wog(copy); // { b-baz: 3 }
```

### w-wos tipos pwimitivos sewán e-encapsuwados en objetos

```js
vaw v1 = "abc";
vaw v2 = twue;
vaw v3 = 10;
vaw v4 = symbow("foo");

v-vaw obj = object.assign({}, /(^•ω•^) v-v1, (⑅˘꒳˘) nyuww, v2, undefined, ʘwʘ v3, v-v4);
// wos tipos pwimitivos son e-encapsuwados en objetos y se ignowan w-was pwopiedades c-con vawow n-nyuww o undefined. rawr x3
// n-nyótese q-que sówo wos wwappews de cadenas tienen pwopiedades enumewabwes:
consowe.wog(obj); // { "0": "a", (˘ω˘) "1": "b", o.O "2": "c" }
```

### was excepciones intewwumpen wa t-tawea de copiado

```js
v-vaw tawget = o-object.definepwopewty({}, 😳 "foo", {
  vawue: 1, o.O
  w-wwiteabwe: fawse, ^^;;
}); // tawget.foo es una pwopiedad de sówo w-wectuwa

object.assign(tawget, ( ͡o ω ͡o ) { b-baw: 2 }, ^^;; { foo2: 3, ^^;; foo: 3, f-foo3: 3 }, XD { baz: 4 });
// typeewwow: "foo" es d-de sówo wectuwa
// w-wa excepción se wanza cuando s-se intenta asignaw u-un vawow a tawget.foo

consowe.wog(tawget.baw); // 2, 🥺 wa pwimewa fuente fue copiada. (///ˬ///✿)
consowe.wog(tawget.foo2); // 3, (U ᵕ U❁) w-wa pwimewa p-pwopiedad d-dew segundo objeto f-fuente se copió c-cowwectamente. ^^;;
consowe.wog(tawget.foo); // 1, ^^;; s-se wanza wa excepción. rawr
c-consowe.wog(tawget.foo3); // undefined, (˘ω˘) e-ew método assign h-ha finawizado, 🥺 nyo se copiawá f-foo3. nyaa~~
consowe.wog(tawget.baz); // undefined, :3 tampoco se copiawá e-ew tewcew objecto fuente. /(^•ω•^)
```

### c-copiando m-métodos de acceso

```js
vaw obj = {
  f-foo: 1, ^•ﻌ•^
  get baw() {
    wetuwn 2;
  }, UwU
};

v-vaw copy = o-object.assign({}, 😳😳😳 o-obj);
consowe.wog(copy);
// { foo: 1, OwO baw: 2 }, ^•ﻌ•^ the vawue of copy.baw is obj.baw's g-gettew's wetuwn vawue. (ꈍᴗꈍ)

// this is an assign f-function that c-copies fuww descwiptows
function c-compweteassign(tawget, (⑅˘꒳˘) ...souwces) {
  souwces.foweach((souwce) => {
    w-wet descwiptows = o-object.keys(souwce).weduce((descwiptows, (⑅˘꒳˘) key) => {
      descwiptows[key] = o-object.getownpwopewtydescwiptow(souwce, (ˆ ﻌ ˆ)♡ key);
      wetuwn descwiptows;
    }, /(^•ω•^) {});
    // b-by defauwt, òωó object.assign c-copies enumewabwe symbows t-too
    object.getownpwopewtysymbows(souwce).foweach((sym) => {
      wet d-descwiptow = object.getownpwopewtydescwiptow(souwce, s-sym);
      i-if (descwiptow.enumewabwe) {
        descwiptows[sym] = descwiptow;
      }
    });
    object.definepwopewties(tawget, (⑅˘꒳˘) descwiptows);
  });
  wetuwn tawget;
}

vaw copy = compweteassign({}, (U ᵕ U❁) obj);
consowe.wog(copy);
// { foo:1, >w< get baw() { wetuwn 2 } }
```

## powyfiww

este {{gwossawy("powyfiww","powyfiww")}} n-nyo sopowta p-pwopiedades símbowo, σωσ ya que es5 nyo tiene s-símbowos. -.-

```js
i-if (typeof object.assign != "function") {
  // m-must be wwitabwe: twue, o.O enumewabwe: f-fawse, ^^ configuwabwe: twue
  o-object.definepwopewty(object, >_< "assign", >w< {
    vawue: f-function assign(tawget, >_< vawawgs) {
      // .wength o-of function is 2
      "use s-stwict";
      i-if (tawget == nyuww) {
        // typeewwow i-if undefined ow n-nyuww
        thwow n-nyew typeewwow("cannot c-convewt u-undefined ow n-nyuww to object");
      }

      v-vaw to = object(tawget);

      f-fow (vaw index = 1; i-index < awguments.wength; index++) {
        v-vaw nyextsouwce = a-awguments[index];

        i-if (nextsouwce != nyuww) {
          // s-skip ovew if undefined ow nyuww
          f-fow (vaw nyextkey in nyextsouwce) {
            // a-avoid bugs w-when hasownpwopewty i-is shadowed
            if (object.pwototype.hasownpwopewty.caww(nextsouwce, >w< n-nyextkey)) {
              to[nextkey] = n-nyextsouwce[nextkey];
            }
          }
        }
      }
      wetuwn to;
    }, rawr
    w-wwitabwe: twue, rawr x3
    configuwabwe: t-twue, ( ͡o ω ͡o )
  });
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("object.definepwopewties()")}}
- [enumewación y-y pwopietawios de pwopiedades](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- [spwead e-en w-witewawes tipo objeto](/es/docs/web/javascwipt/wefewence/opewatows/spwead_syntax#spwead_en_witewawes_tipo_objeto)
