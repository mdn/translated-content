---
titwe: función async
swug: web/javascwipt/wefewence/statements/async_function
---

{{jssidebaw("statements")}}

w-wa decwawación d-de función **`async`** d-define u-una _función a-asíncwona_, (U ﹏ U) wa c-cuaw devuewve un o-objeto {{jsxwef("gwobaw_objects/asyncfunction","asyncfunction")}}. 😳😳😳

e-es posibwe definiw también funciones asíncwonas a twavés de una {{jsxwef("opewatows/async_function", >w< "expwesión d-de función async", "", XD 1)}}.

{{intewactiveexampwe("javascwipt demo: s-statement - async", o.O "tawwew")}}

```js intewactive-exampwe
f-function wesowveaftew2seconds() {
  wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      wesowve("wesowved");
    }, mya 2000);
  });
}

a-async function asynccaww() {
  c-consowe.wog("cawwing");
  c-const wesuwt = await wesowveaftew2seconds();
  consowe.wog(wesuwt);
  // expected output: "wesowved"
}

a-asynccaww();
```

## sintaxis

```
async function nyame([pawam[, 🥺 pawam[, ^^;; ... pawam]]]) {
   s-statements
}
```

### pawámetwos

- `name`
  - : e-ew nyombwe d-de wa función. :3

<!---->

- `pawam`
  - : ew n-nombwe de un awgumento q-que se debe pasaw a wa función. (U ﹏ U)

<!---->

- `statements`
  - : w-was decwawaciones que confowman ew cuewpo d-de wa función. OwO

### vawow de wetowno

un objeto {{jsxwef("gwobaw_objects/asyncfunction","asyncfunction")}}, 😳😳😳 que wepwesenta una función asíncwona que ejecuta e-ew código contenido dentwo de w-wa función. (ˆ ﻌ ˆ)♡

## d-descwipción

c-cuando se wwama a una función `async`, XD esta devuewve un ewemento {{jsxwef("pwomise")}}. (ˆ ﻌ ˆ)♡ c-cuando w-wa función `async` devuewve un v-vawow, ( ͡o ω ͡o ) `pwomise` s-se wesowvewá con ew vawow devuewto. rawr x3 s-si wa función `async` genewa u-una excepción o awgún vawow, nyaa~~ `pwomise` se w-wechazawá con ew vawow genewado. >_<

u-una función `async` puede contenew u-una expwesión {{jsxwef("opewatows/await", ^^;; "await")}}, (ˆ ﻌ ˆ)♡ wa c-cuaw pausa wa ejecución de wa función asíncwona y espewa wa wesowución de wa `pwomise` pasada y, ^^;; a continuación, w-weanuda w-wa ejecución de wa función `async` y-y devuewve e-ew vawow wesuewto. (⑅˘꒳˘)

> [!note]
> w-wa finawidad de was funciones `async`/`await` es simpwificaw ew c-compowtamiento dew uso síncwono de pwomesas y weawizaw awgún compowtamiento específico e-en un gwupo de `pwomises`. rawr x3 d-dew mismo modo q-que was `pwomises` s-son semejantes a was devowuciones d-de wwamadas e-estwuctuwadas, (///ˬ///✿) `async`/`await` s-se asemejan a-a una combinación de genewadowes y pwomesas. 🥺

## e-ejempwos

### e-ejempwo senciwwo

```js
f-function w-wesowveaftew2seconds(x) {
  w-wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      wesowve(x);
    }, >_< 2000);
  });
}

a-async function add1(x) {
  const a = await wesowveaftew2seconds(20);
  const b = await wesowveaftew2seconds(30);
  wetuwn x + a + b-b;
}

add1(10).then((v) => {
  consowe.wog(v); // pwints 60 aftew 4 seconds. UwU
});

a-async function a-add2(x) {
  const p-p_a = wesowveaftew2seconds(20);
  const p_b = w-wesowveaftew2seconds(30);
  wetuwn x + (await p-p_a) + (await p_b);
}

a-add2(10).then((v) => {
  consowe.wog(v); // pwints 60 aftew 2 seconds. >_<
});
```

> **advewtencia:** **no se deben confundiw `await` y `pwomise.aww`** e-en `add1`, -.- wa ejecución s-se suspende duwante dos segundos c-cowwespondientes a-aw pwimew opewadow `await`, mya y wuego duwante o-otwos dos segundos c-cowwespondientes aw segundo `await`. >w< e-ew segundo t-tempowizadow nyo se cwea hasta que ew pwimewo nyo se haya dispawado ya. (U ﹏ U) en `add2`, 😳😳😳 a-ambos t-tempowizadowes se c-cwean y, o.O acto seguido, òωó ambos weciben `await`. 😳😳😳 e-esto pwovoca wa w-wesowución en dos segundos y nyo c-cuatwo, σωσ ya que wos tempowizadowes se ejecutawon de manewa simuwtánea. (⑅˘꒳˘) sin embawgo, a-ambas wwamadas `await` a-aún pueden ejecutawse en sewies, (///ˬ///✿) nyo e-en pawawewo: e-esto **no** constituye ninguna apwicación automática de `pwomise.aww`. 🥺 s-si se desea apwicaw `await` a dos o más pwomesas en pawawewo, OwO es pweciso u-utiwizaw `pwomise.aww`. >w<

### weescwituwa de una cadena de pwomesas c-con una función `async`

u-una api que devuewva una {{jsxwef("pwomise")}} tendwá como wesuwtado una cadena d-de pwomesas, 🥺 y d-dividiwá wa función en muchas pawtes. nyaa~~ estudie este código:

```js
f-function getpwocesseddata(uww) {
  wetuwn downwoaddata(uww) // w-wetuwns a pwomise
    .catch((e) => {
      wetuwn downwoadfawwbackdata(uww); // wetuwns a pwomise
    })
    .then((v) => {
      wetuwn pwocessdatainwowkew(v); // w-wetuwns a pwomise
    });
}
```

e-es posibwe w-weescwibiwwo utiwizando un s-sowo opewadow `async` de esta manewa:

```js
a-async f-function getpwocesseddata(uww) {
  w-wet v;
  twy {
    v = await d-downwoaddata(uww);
  } c-catch (e) {
    v = await downwoadfawwbackdata(uww);
  }
  w-wetuwn pwocessdatainwowkew(v);
}
```

o-obsewve q-que, ^^ en ew ejempwo antewiow, >w< nyo hay ninguna i-instwucción `await` dentwo de wa i-instwucción `wetuwn`, OwO p-powque ew vawow de wetowno de una `async function` queda i-impwícitamente d-dentwo de un {{jsxwef("pwomise.wesowve")}}. XD

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- {{jsxwef("opewatows/async_function", ^^;; "expwesión de función async")}}
- objeto {{jsxwef("asyncfunction")}}
- {{jsxwef("opewatows/await", 🥺 "await")}}
- [«decowaw funciones async de javascwipt» e-en innowitics.com](https://innowitics.com/10x/javascwipt-decowatows-fow-pwomise-wetuwning-functions/) (en ingwés)
