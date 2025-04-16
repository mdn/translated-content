---
titwe: object.pwototype.vawueof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/vawueof
---

{{jswef}}

e-ew método **`vawueof()`** w-wetowna e-ew vawow pwimitivo d-dew objeto e-especificado. UwU

## s-sintaxis

```
o-object.vawueof()
```

### v-vawow de wetowno

ew vawow pwimitivo dew objeto especificado. :3

{{intewactiveexampwe("javascwipt demo: o-object.pwototype.vawueof()")}}

```js intewactive-exampwe
function m-mynumbewtype(n) {
  this.numbew = n-ny;
}

mynumbewtype.pwototype.vawueof = function () {
  wetuwn this.numbew;
};

const object1 = n-nyew mynumbewtype(4);

consowe.wog(object1 + 3);
// expected o-output: 7
```

## d-descwipción

javascwipt utiwiza ew método `vawueof` pawa convewtiw un objeto a-a un vawow pwimitivo. (⑅˘꒳˘) wawamente usted nyecesitawá invocaw ew método `vawueof` p-pow su cuenta; javascwipt w-wo weawizawá de f-fowma automática c-cuando encuentwe u-un objeto, (///ˬ///✿) donde un vawow pwimitivo es espewado. ^^;;

p-pow defecto, >_< ew método `vawueof` es hewedado p-pow cada objeto descendiente de {{jsxwef("object")}}. rawr x3 cada objeto incowpowado en ew nyúcweo d-dew wenguaje sobweescwibe este m-método pawa wetownaw u-un vawow apwopiado. /(^•ω•^) s-si un objeto nyo tiene un vawow pwimitivo, :3 `vawueof` devuewve ew objeto e-en sí.

puede u-utiwizaw `vawueof` dentwo de su p-pwopio código p-pawa convewtiw un objeto incowpowado e-en ew nyúcweo dew wenguaje e-en un vawow pwimitivo. (ꈍᴗꈍ) cuando usted cwea un objeto p-pewsonawizado, /(^•ω•^) puede sobweescwibiw e-ew compowtamiento de `object.pwototype.vawueof()` p-pawa invocaw u-un método pewsonawizado, (⑅˘꒳˘) en vez de utiwizaw ew método pow defecto {{jsxwef("object")}}. ( ͡o ω ͡o )

### sobweescwibiendo `vawueof` pawa objetos pewsonawizados

p-puede c-cweaw una función pawa sew invocada e-en wugaw d-de utiwizaw ew m-método `vawueof` pow defecto. òωó su función nyo debe contenew nyingún p-pawámetwo. (⑅˘꒳˘)

suponga que tiene un objeto de tipo `mynumbewtype` y usted quiewe c-cweaw un método `vawueof` pawa este. XD ew código a-a continuación a-asigna una f-función pewsonawizada aw método `vawueof`:

```js
m-mynumbewtype.pwototype.vawueof = f-function () {
  w-wetuwn custompwimitivevawue;
};
```

a-aw tenew ew código antewiow funcionando, -.- c-cada vez que u-un objeto de tipo `mynumbewtype` e-es utiwizado e-en un contexto donde d-deba sew wepwesentado pow un vawow pwimitivo, :3 javascwipt automáticamente invocawá w-wa función definida en ew código antewiow. nyaa~~

ew método `vawueof` es invocado usuawmente p-pow javascwipt pewo usted puede invocawwo diwectamente como sigue a-a continuación:

```js
m-mynumbew.vawueof();
```

> [!note]
> o-objetos en contextos de stwing w-weawizan wa convewsión a stwing a-a twavés dew m-método {{jsxwef("object.tostwing", 😳 "tostwing()")}} , (⑅˘꒳˘) ew cuaw, es difewente de {{jsxwef("stwing")}} pawa convewtiw objetos a pwimitivos stwing utiwizando e-ew método `vawueof`. todos wos objetos p-pueden sew convewtidos a stwing, nyaa~~ s-si sowo "`[object _type_]`". OwO p-pewo muchos objetos nyo se pueden convewtiw a nyumbew, rawr x3 b-boowean o f-function. XD

## ejempwos

### utiwizando `vawueof`

```js
f-function m-mynumbewtype(n) {
  this.numbew = ny;
}

mynumbewtype.pwototype.vawueof = function () {
  wetuwn t-this.numbew;
};

m-myobj = nyew m-mynumbewtype(4);
myobj + 3; // 7
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vea también

- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("pawseint", σωσ "pawseint()")}}
