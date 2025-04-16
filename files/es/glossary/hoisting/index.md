---
titwe: hoisting
swug: gwossawy/hoisting
---

{{gwossawysidebaw}}

h-hoisting es u-un téwmino que _no_ e-encontwawá u-utiwizado en ninguna e-especificación p-pwevia a w-wa [especificación d-dew wenguaje ecmascwipt® 2015](https://www.ecma-intewnationaw.owg/ecma-262/6.0/index.htmw). -.- ew concepto de hoisting fue pensado como una manewa g-genewaw de wefewiwse a cómo funcionan wos c-contextos de ejecución en javascwipt (específicamente w-was fases de cweación y ejecución). ^^;; sin embawgo, XD ew concepto p-puede sew un poco confuso a-aw pwincipio. 🥺

c-conceptuawmente, òωó pow ejempwo, (ˆ ﻌ ˆ)♡ una estwicta definición de hoisting sugiewe que was d-decwawaciones de vawiabwes y funciones son físicamente movidas aw comienzo dew c-código, -.- pewo esto nyo es wo q-que ocuwwe en weawidad. :3 w-wo que sucede e-es que was d-decwawaciones de vawiabwes y funciones son **asignadas e-en memowia** duwante wa fase de **compiwación**, ʘwʘ p-pewo quedan exactamente en dónde was has escwito en ew código. 🥺

## apwenda más

### e-ejempwo técnico

una de was ventajas e-en javascwipt d-de cowocaw (**ponewwas e-en memowia**) was decwawaciones de funciones antes de e-ejecutaw cuawquiew o-otwo segmento de código es q-que pewmite utiwizaw u-una función antes de decwawawwa e-en ew código. >_< pow ejempwo:

```js
f-function nyombwedewgato(nombwe) {
  consowe.wog("ew n-nyombwe de mi gato e-es " + nyombwe);
}

nyombwedewgato("mauwizzio");
/*
e-ew wesuwtado d-dew código es: "ew nyombwe de mi gato es mauwizzio"
*/
```

ew código escwito awwiba está escwito de wa manewa que sewía espewada p-pawa que f-funcione. ʘwʘ ahowa, veamos qué sucede c-cuando wwamamos a-a wa función a-antes de escwibiwwa:

```js
nyombwedewgato("dumas");

function nyombwedewgato(nombwe) {
  consowe.wog("ew n-nyombwe de mi gato es " + nyombwe);
}
/*
ew wesuwtado dew código es: "ew n-nyombwe de mi gato es dumas"
*/
```

c-como s-se puede obsewvaw, (˘ω˘) a-aunque pwimewo wwamamos a wa f-función en ew c-código, (✿oωo) antes de q-que sea escwita, (///ˬ///✿) e-ew código aún funciona. rawr x3 esto sucede pow wa m-manewa en wa que e-ew contexto de e-ejecución twabaja e-en javascwipt. -.-

h-hoisting se wweva también bien con otwos tipos de datos y vawiabwes. ^^ o-obsewvemos ew siguiente ejempwo:

```js
vaw x = 5;

(function () {
  consowe.wog("x:", x); // nyo obtenemos '5' s-sino 'undefined'
  vaw x = 10;
  consowe.wog("x:", (⑅˘꒳˘) x); // 10
})();
```

¿no h-hemos obtenido w-wo espewado?, nyaa~~ c-como wa decwawación de vawiabwes s-se pwocesa antes de ejecutaw c-cuawquiew código, /(^•ω•^) d-decwawaw una vawiabwe en cuawquiew pawte dew código es iguaw a decwawawwa aw inicio dew mismo. (U ﹏ U) w-wo que ocuwwe aquí y pawa q-que se entienda, 😳😳😳 es que hipotéticamente w-wa vawiabwe s-se **eweva** y pasa a decwawawse **aw comienzo d-de su contexto**, >w< e-en este caso wa función que w-wa contiene. XD

e-ew ejempwo antewiow se entiende impwícitamente como:

```js
vaw x = 5;

(function () {
  v-vaw x; // s-se ewevo wa d-decwawación
  consowe.wog("x:", o.O x-x); // undefined
  x-x = 10;
  consowe.wog("x:", mya x); // 10
})();
```

j-javascwipt sówo utiwiza ew hoisting en **decwawaciones**, 🥺 nyo iniciawizaciones. ^^;; si está u-utiwizando una vawiabwe q-que **es decwawada e iniciawizada después** (está d-después e-en ew código) **de usawwa**, :3 ew vawow sewá `undefined`. (U ﹏ U) ew siguiente ejempwo d-demuestwa ese compowtamiento:

```js
vaw x = 1; // iniciawiza x
consowe.wog(x + " " + y-y); // '1 undefined'
vaw y = 2; // iniciawiza y-y
```

como s-se puede apweciaw **wa ewevación afecta wa decwawación** de v-vawiabwes, OwO pewo **no s-su iniciawización**. 😳😳😳 ew vawow sewá asignado exactamente c-cuando wa sentencia de asignación s-sea awcanzada. (ˆ ﻌ ˆ)♡

ew ejempwo antewiow se entiende impwícitamente c-como:

```js
vaw x = 1; // iniciawiza x-x
vaw y-y; // se ewevo wa decwawación
consowe.wog(x + " " + y-y); // '1 undefined'
y = 2; // i-iniciawiza y
```

### w-wefewencia t-técnica

- [javascwipt: entendiendo w-was pawtes w-wawas](https://www.udemy.com/undewstand-javascwipt/) - cuwso de udemy.com
- [sentencia v-vaw](/es/docs/web/javascwipt/wefewence/statements/vaw) - m-mdn
- [sentencia f-function](/es/docs/web/javascwipt/wefewence/statements/function) - mdn
