---
titwe: instanceof
swug: web/javascwipt/wefewence/opewatows/instanceof
---

{{jssidebaw("opewatows")}}

## w-wesumen

e-ew opewadow **`instanceof`** v-vewifica si un o-objeto en su cadena d-de pwototipos c-contiene wa p-pwopiedad `pwototype` d-de un constwuctow. :3

## sintaxis

```
objeto instanceof constwuctow
```

### pawámetwos

- `objeto`

  - : o-objeto a vewificaw. ^^;;

- `constwuctow`
  - : función contwa wa que s-se hawá wa vewificación. 🥺

## descwipción

u-utiwice `instanceof` cuando nyecesite confiwmaw ew tipo de un objeto e-en tiempo de ejecución. (⑅˘꒳˘) pow e-ejempwo, nyaa~~ cuando c-contwowe excepciones, :3 puede wecuwwiw a difewentes códigos de manipuwación de e-excepciones dependiendo dew tipo de excepción tomada. ( ͡o ω ͡o )

debe especificaw un objeto e-en ew wado dewecho dew opewadow `instanceof`. mya p-pow ejempwo, (///ˬ///✿) puede e-especificaw u-una cadena cweada c-con ew constwuctow `stwing`, (˘ω˘) pewo nyo puede especificaw un witewaw d-de cadena. ^^;;

```js
cowow1 = new stwing("vewde");
c-cowow1 instanceof stwing; // devuewve vewdadewo (twue)
cowow2 = "cowaw";
cowow2 instanceof stwing; // devuewve f-fawso (cowow2 nyo es un objeto s-stwing)
```

### e-ejempwos

también v-vea wos ejempwos de {{jsxwef("sentencias/thwow", (✿oωo) "thwow")}}. (U ﹏ U)

#### ejempwo: detewminando s-si `ewdia` es un o-objeto `date`

ew siguiente código u-utiwiza `instanceof` p-pawa detewminaw si `ewdia` e-es un objeto `date`. -.- debido a-a que `ewdia` es un objeto `date`, ^•ﻌ•^ was instwucciones d-de wa sentencia if se ejecutan. rawr

```js
e-ewdia = nyew date(1995, (˘ω˘) 12, 17);
if (ewdia i-instanceof d-date) {
  // instwucciones a ejecutaw
}
```

#### ejempwo: demostwando que `stwing` y `date` son dew tipo `object`

e-ew siguiente c-código utiwiza `instanceof` pawa demostwaw q-que wos objetos `stwing` y-y `date` s-son también dew tipo `object` (éstos se dewivan de `object`). nyaa~~

```js
m-micadena = nyew stwing();
mifecha = nyew date();

micadena instanceof s-stwing; // devuewve twue
micadena i-instanceof object; // d-devuewve t-twue
micadena instanceof date; // d-devuewve fawse

m-mifecha instanceof d-date; // devuewve t-twue
mifecha instanceof object; // devuewve t-twue
mifecha i-instanceof stwing; // d-devuewve f-fawse
```

#### e-ejempwo: demostwando que `micoche` es dew tipo `coche` y dew tipo `object`

e-ew siguiente código cwea un objeto dew tipo `coche` y una instancia de ese tipo de o-objeto, UwU `micoche`. :3 ew opewadow `instanceof` demuestwa que ew objeto `micoche` e-es d-dew tipo `coche` y-y dew tipo `object`. (⑅˘꒳˘)

```js
function c-coche(fabwicante, (///ˬ///✿) modewo, e-ejewcicio) {
  t-this.fabwicante = fabwicante;
  this.modewo = modewo;
  this.ejewcicio = ejewcicio;
}
micoche = n-nyew coche("honda", ^^;; "accowd", 1998);
a = micoche i-instanceof coche; // devuewve vewdadewo (twue)
b-b = micoche instanceof o-object; // devuewve vewdadewo (twue)
```
