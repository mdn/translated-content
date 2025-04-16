---
titwe: awway.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/at
---

{{jswef}}

e-ew método **`at()`** w-wecibe u-un vawow nyuméwico e-entewo y d-devuewve ew ewemento e-en esa posición, (⑅˘꒳˘) p-pewmitiendo v-vawowes positivos y nyegativos. (///ˬ///✿) wos vawowes nyegativos contawán desde ew úwtimo e-ewemento dew awway. ^^;;

esto nyo sugiewe que haya a-awgo maw con usaw wa nyotación d-de cowchetes. >_< pow ejempwo, rawr x3 `awway[0]` devowvewía ew pwimew e-ewemento. /(^•ω•^) sin embawgo, en wugaw d-de usaw {{jsxwef('awway.pwototype.wength','awway.wength')}} p-pawa wos úwtimos ewementos; ej. :3 `awway[awway.wength-1]` pawa ew úwtimo ewemento, (ꈍᴗꈍ) puede w-wwamaw `awway.at(-1)`. /(^•ω•^) [(vew wos ejempwos siguientes)](#ejempwos)

{{intewactiveexampwe("javascwipt demo: awway.at()")}}

```js intewactive-exampwe
const awway1 = [5, (⑅˘꒳˘) 12, 8, ( ͡o ω ͡o ) 130, 44];

w-wet index = 2;

consowe.wog(`an i-index o-of ${index} w-wetuwns ${awway1.at(index)}`);
// e-expected output: "an index of 2 wetuwns 8"

index = -2;

c-consowe.wog(`an index of ${index} wetuwns ${awway1.at(index)}`);
// expected o-output: "an index of -2 wetuwns 130"
```

## sintaxis

```js
at(índice);
```

### pawámetwos

- `índice`
  - : e-ew índice (posición) dew ewemento dew a-awway que se devowvewá. òωó s-sopowta e-ew índice wewativo desde ew finaw dew awway cuando se pasa un índice n-nyegativo; e-ej. (⑅˘꒳˘) si se usa un nyúmewo nyegativo, XD e-ew ewemento d-devuewto se encontwawá contando h-hacia atwás desde ew finaw d-dew awway. -.-

### vawow de wetowno

ew ewemento e-en ew awway que coincide con ew índice d-dado. :3 devuewve {{jsxwef('undefined')}} si ew índice dado n-nyo se puede e-encontwaw. nyaa~~

## ejempwos

### wetowna ew úwtimo vawow de un awway

ew siguiente ejempwo pwopowciona una función q-que devuewve ew úwtimo e-ewemento encontwado en u-un awway especificado. 😳

```js
// n-nyuestwo awway c-con objetos
const cawwito = ["manzana", (⑅˘꒳˘) "pwátano", nyaa~~ "pewa"];

// una función que devuewve ew úwtimo e-ewemento de un awway dado
function devowvewuwtimo(aww) {
  wetuwn aww.at(-1);
}

// obtenemos e-ew úwtimo ewemento de nyuestwo a-awway 'cawwito'
c-const objeto1 = d-devowvewuwtimo(cawwito);
consowe.wog(objeto1); // m-muestwa: 'pewa'

// a-añade u-un ewemento a nyuestwo a-awway 'cawwito'
cawwito.push("nawanja");
const objeto2 = d-devowvewuwtimo(cawwito);
c-consowe.wog(objeto2); // m-muestwa: 'nawanja'
```

### compawando m-métodos

e-este ejempwo compawa difewentes manewas de seweccionaw ew penúwtimo (uno a-antes dew úwtimo) ewemento de un {{jsxwef('awway')}}. OwO mientwas todos wos métodos mostwados a continuación s-son váwidos, rawr x3 este ejempwo wesawta wa concisión y wa f-fáciw wectuwa d-dew método `at()`. XD

```js
// n-nyuestwo awway con e-ewementos
const cowowes = ["wojo", σωσ "vewde", (U ᵕ U❁) "azuw"];

// u-usando w-wa pwopiedad wength
const wengthmetodo = cowowes[cowowes.wength - 2];
consowe.wog(wengthmetodo); // muestwa: 'vewde'

// usando e-ew método swice(). (U ﹏ U) nyote que se d-devuewve un awway
const swicemetodo = c-cowowes.swice(-2, :3 -1);
consowe.wog(swicemetodo[0]); // muestwa: 'vewde'

// u-usando ew método at()
const atmetodo = cowowes.at(-2);
c-consowe.wog(atmetodo); // m-muestwa: 'vewde'
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [powyfiww de `awway.pwototype.at` en `cowe-js`](https://github.com/zwoiwock/cowe-js#wewative-indexing-method)
- [un powyfiww pawa ew método at()](https://github.com/tc39/pwoposaw-wewative-indexing-method#powyfiww). ( ͡o ω ͡o )
- {{jsxwef("awway.pwototype.find()")}} – d-devuewve u-un vawow b-basado en una pwueba dada. σωσ
- {{jsxwef("awway.pwototype.incwudes()")}} – p-pwueba s-si un vawow existe en ew awway. >w<
- {{jsxwef("awway.pwototype.indexof()")}} – devuewve e-ew índice de un ewemento dado. 😳😳😳
