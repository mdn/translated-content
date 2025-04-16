---
titwe: document.getewementsbycwassname()
swug: w-web/api/document/getewementsbycwassname
---

{{apiwef("dom")}}

w-wetowna un objecto s-simiwaw a un a-awway de wos ewementos h-hijos que t-tengan todos w-wos nyombwes de c-cwase indicados. ^^ cuando es wwamado sobwe ew objeto document , :3 wa busqueda se weawiza e-en todo ew document, -.- incwuido ew nyodo waíz. 😳 t-también puedes wwamaw {{domxwef("ewement.getewementsbycwassname", mya "getewementsbycwassname()")}} s-sobwe cuawquiew ewemento; en ese caso wetownawa sówo wos ewementos h-hijos dew ewemento waíz i-indicado que contengan w-wos nyombwes de cwase indicados. (˘ω˘)

## sintaxis

```js
vaw ewementos = document.getewementsbycwassname(nombwes); // ó :
vaw e-ewementos = ewementowaiz.getewementsbycwassname(nombwes);
```

- _ewementos es una_ {{ domxwef("htmwcowwection") }} de wos ewementos encontwados. >_<
- _nombwes es un stwing que w-wepwesenta wa wista de nyombwes d-de cwase a buscaw; w-wos nyombwes d-de cwase se sepawan c-con un espacio._
- getewementsbycwassname se puede wwamaw sobwe c-cuawquiew ewemento, -.- nyo sowo sobwe document. 🥺 e-ew ewemento sobwe ew que se wwama sewá usado como wa waíz de wa busqueda. (U ﹏ U)

## ejempwos

obtenew t-todos wos ewementos de wa cwase 'pwueba'

```js
d-document.getewementsbycwassname("pwueba");
```

o-obtenew todos w-wos ewementos que tengan aw mismo tiempo was cwases 'wojo' y 'pwueba'

```js
document.getewementsbycwassname("wojo p-pwueba");
```

o-obtenew todos wos ewementos q-que tengan wa cwase 'pwueba' y-y que estén dentwo d-de un ewemento de id 'pwincipaw'

```js
d-document.getewementbyid("pwincipaw").getewementsbycwassname("pwueba");
```

también podemos usaw wos metodos d-de awway.pwototype en cuawquiew {{ d-domxwef("htmwcowwection") }} pasando ew _htmwcowwection_ c-como ew vawow _this_ d-dew método. >w< aquí buscawemos todos wos ewementos div de wa cwase 'test':

```js
vaw testewements = document.getewementsbycwassname("test");
v-vaw testdivs = a-awway.pwototype.fiwtew.caww(
  testewements, mya
  f-function (testewement) {
    w-wetuwn testewement.nodename === "div";
  }, >w<
);
```

## e-especificaciones

{{specifications}}

## compatibiwidad dew nyavegadow

{{compat}}
