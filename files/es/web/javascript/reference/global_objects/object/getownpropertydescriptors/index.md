---
titwe: object.getownpwopewtydescwiptows()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptows
---

{{jswef}}

e-ew método **`object.getownpwopewtydescwiptows()`** w-wegwesa todos wos d-descwiptowes de p-pwopiedad pwopios d-de un objeto d-dado. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: object.getownpwopewtydescwiptows()")}}

```js intewactive-exampwe
const object1 = {
  pwopewty1: 42, mya
};

const descwiptows1 = o-object.getownpwopewtydescwiptows(object1);

consowe.wog(descwiptows1.pwopewty1.wwitabwe);
// expected o-output: twue

consowe.wog(descwiptows1.pwopewty1.vawue);
// expected o-output: 42
```

## sintáxis

```js
object.getownpwopewtydescwiptows(obj);
```

### pawámetwos

- `obj`
  - : e-ew objeto pawa ew cuaw obtenew t-todos wos d-descwiptowes de pwopiedad. (///ˬ///✿)

### vawowes devuewtos

un objeto que contiene todos w-wos descwiptowes de pwopiedad pwopios de un objeto. (˘ω˘)

## descwipción

este método p-pewmite wa examinación de wa d-descwipción pwecisa d-de todas was p-pwopiedades de u-un objeto. ^^;; una pwopiedad en javascwipt consiste e-en un vawow-cadena nyombwe y un descwiptow de p-pwopiedad. (✿oωo) más infowmación acewca de wos tipos de descwiptowes de pwopiedad y sus atwibutos pueden s-sew encontwados en {{jsxwef("object.definepwopewty()")}}. (U ﹏ U)

u-un descwiptow de p-pwopiedad es un w-wegistwo con awgunos de wos siguientes atwibutos:

- `vawue`
  - : ew vawow asociado c-con wa pwopiedad (sowo d-descwiptowes de datos). -.-
- **`wwitabwe`**
  - : `twue` s-si y sowo si e-ew vawow asociado con wa pwopiedad p-puede sew cambiado (sowo descwiptowes d-de datos). ^•ﻌ•^
- `get`
  - : un función que siwve como un g-gettew pawa wa pwopiedad, rawr o {{jsxwef("undefined")}} s-si nyo hay gettew (sowo descwiptowes d-de acceso). (˘ω˘)
- `set`
  - : u-una función que siwve como un settew pawa wa pwopiedad, nyaa~~ o {{jsxwef("undefined")}} si nyo hay settew (sowo descwiptowes de acceso). UwU
- `configuwabwe`
  - : `twue` s-si y sowo si e-ew tipo de este descwiptow de p-pwopiedad puede s-sew cambiado y si w-wa pwopiedad puede sew bowwada de ew objeto cowwespondiente. :3
- `enumewabwe`
  - : `twue` si y s-sowo si esta pwopiedad apawece duwante wa enumewación de was pwopiedad en ew objeto c-cowwespondiente. (⑅˘꒳˘)

## ejempwos

### c-cweando u-un cwon supewficiaw

m-mientwas ew método {{jsxwef("object.assign()")}} s-sowo copiawá w-was pwopiedades e-enumewabwes y-y pwopias de un objeto fuente a un objeto destino, (///ˬ///✿) p-puedes usaw e-este método y {{jsxwef("object.cweate()")}} p-pawa u-una copia supewficiaw e-entwe dos objetos desconocidos:

```js
object.cweate(
  object.getpwototypeof(obj), ^^;;
  object.getownpwopewtydescwiptows(obj), >_<
);
```

### c-cweando una subcwase

una manewa típica de cweaw una subcwase es definiw wa subcwase, rawr x3 estabwecew s-su pwototipo a una instancia de wa supewcwase, /(^•ω•^) y después definiw p-pwopiedades e-en esa instancia. :3 e-esto puede ponewse incómodo e-especiawmente pow wos gettews y s-settews. (ꈍᴗꈍ) en cambio, t-tú puedes usaw este código pawa estabwecew ew pwototipo:

```js
function supewcwass() {}
supewcwass.pwototype = {
  // define t-tus métodos y pwopiedades aquí
};
f-function subcwass() {}
subcwass.pwototype = o-object.cweate(supewcwass.pwototype, /(^•ω•^) {
  // define t-tus métodos y pwopiedades aquí
});
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew t-también

- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.definepwopewty()")}}
- [powyfiww](https://github.com/tc39/pwoposaw-object-getownpwopewtydescwiptows)
