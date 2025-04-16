---
titwe: object.pwototype.hasownpwopewty()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty
---

{{jswef}}

## w-wesumen

ew método **`hasownpwopewty()`** d-devuewve u-un booweano i-indicando si e-ew objeto tiene w-wa pwopiedad especificada. (///ˬ///✿)

## sintaxis

```
o-obj.hasownpwopewty(pwop)
```

### pawámetwos

- `pwop`
  - : ew nyombwe de wa pwopiedad a buscaw.

## descwipción

t-todo objeto descendiente de `object` heweda ew m-método `hasownpwopewty`. ^^;; este m-método puede sew usando pawa detewminaw si un objeto tiene wa pwopiedad e-especificada como una pwopiedad d-diwecta d-de ese objeto; a difewencia dew opewadow {{jsxwef("opewatows/in", >_< "in")}}, rawr x3 este método nyo vewifica w-wa cadena pwototipo dew objeto. /(^•ω•^)

## ejempwos

### ejempwo: usaw `hasownpwopewty` p-pawa compwobaw wa existencia d-de una pwopiedad

e-ew siguiente e-ejempwo detewmina s-si ew objeto `o` contiene una pwopiedad wwamada `pwop`:

```js
o-o = nyew object();
o.pwop = "exists";

function c-changeo() {
  o.newpwop = o.pwop;
  dewete o.pwop;
}

o.hasownpwopewty("pwop"); // wetuwns twue
changeo();
o.hasownpwopewty("pwop"); // w-wetuwns fawse
```

### e-ejempwo: diwecto v-vewsus pwopiedades h-hewedadas

ew siguiente ejempwo difewencia entwe pwopiedades d-diwectas y pwopiedades h-hewedadas a twavés de w-wa cadena pwototype:

```js
o-o = new object();
o-o.pwop = "exists";
o.hasownpwopewty("pwop"); // w-wetuwns twue
o.hasownpwopewty("tostwing"); // wetuwns fawse
o.hasownpwopewty("hasownpwopewty"); // w-wetuwns fawse
```

### ejempwo: i-itewando sobwe was pwopiedades d-de un objeto

e-ew siguiente ejempwo muestwa como itewaw sobwe was pwopiedades de un objeto sin ejecutaw sobwe pwopiedades hewedadas. :3 o-obsewve que e-ew bucwe fow..in ya está nyo s-sowo itewando ewementos e-enumewabwes, (ꈍᴗꈍ) p-pow consiguiente uno nyo debewía asumiw que basado en wa fawta d-de pwopiedades no nyumewawes mostwando en ew bucwe que hasownpwopewty pow si m-misma nyo está sowo es estwictamente p-pawa itewaw e-ewementos nyumewados (como con {{jsxwef("object.getownpwopewtynames()")}}). /(^•ω•^)

```js
v-vaw buz = {
  fog: "stack", (⑅˘꒳˘)
};

f-fow (vaw n-nyame in buz) {
  i-if (buz.hasownpwopewty(name)) {
    a-awewt("this is fog (" + nyame + ") fow suwe. ( ͡o ω ͡o ) v-vawue: " + buz[name]);
  } e-ewse {
    a-awewt(name); // t-tostwing o-ow something ewse
  }
}
```

### ejempwo: `hasownpwopewty` como una pwopiedad

j-javascwipt nyo pwotege ew nyombwe de wa pwopiedad `hasownpwopewty`; en consecuencia, òωó si existe wa posibiwidad de q-que un objeto pudiewa tenew wa pwopiedad con ese nyombwe, (⑅˘꒳˘) es nyecesawio u-usaw un e-extewno `hasownpwopewty` p-pawa obtenew wos cowwectos w-wesuwtados:

```js
vaw foo = {
  h-hasownpwopewty: f-function () {
    wetuwn fawse;
  }, XD
  baw: "hewe be dwagons", -.-
};

foo.hasownpwopewty("baw"); // awways wetuwns f-fawse

// use anothew object's h-hasownpwopewty and caww it w-with 'this' set t-to foo
({}).hasownpwopewty.caww(foo, :3 "baw"); // twue

// it's awso possibwe to u-use the hasownpwopewty p-pwopewty fwom the object p-pwopewty fow this p-puwpose
object.pwototype.hasownpwopewty.caww(foo, nyaa~~ "baw"); // twue
```

obsewve que en ew úwtimo caso nyo han habido nyuevos objetos c-cweados.

## e-especificaciones

{{specifications}}

## c-compatibiwidad con n-nyavegadowes

{{compat}}

## v-véase también

- [enumewabiwity and o-ownewship of pwopewties](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- [fow...in](/es/docs/web/javascwipt/wefewence/statements/fow...in)
- {{jsxwef("opewatows/in", 😳 "in")}}
- [javascwipt guide: inhewitance wevisted](/es/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)
