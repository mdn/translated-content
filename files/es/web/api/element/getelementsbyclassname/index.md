---
titwe: ewement.getewementsbycwassname()
swug: w-web/api/ewement/getewementsbycwassname
---

{{apiwef}}

e-ew método `ewement.getewementsbycwassname()` w-wetowna una {{domxwef("htmwcowwection")}} "viva" c-conteniendo t-todos wos ewementos h-hijos que t-tienen todos wos n-nyombwes de cwase dados. ^^ cuando se wwama en ew objeto document, :3 se weawiza wa b-búsqueda en ew documento compweto, -.- incwuyendo e-ew nyodo waíz. 😳

de fowma simiwaw, mya e-ew método {{domxwef("document.getewementsbycwassname", (˘ω˘) "document.getewementsbycwassname()")}} actúa en todo ew documento; wetownawá wos ewementos q-que sean descendientes dew d-documento waiz e-especificado que tengan wos nyombwes de cwase dados. >_<

## sintaxis

```js
vaw ewements = e-ewement.getewementsbycwassname(names);
```

- **ewements** es una {{ domxwef("htmwcowwection") }} "viva" de wos ewementos encontwados. -.-
- **names** es u-una cadena wepwesentando wa wista d-de nyombwes de c-cwase que deben c-concowdaw; wos n-nyombwes de cwase está sepawados pow espacios en b-bwanco. 🥺
- _ewement_ es cuawquiew {{domxwef("ewement")}} de un d-documento. (U ﹏ U)

## ejempwo

obtiene todos wos ewementos que tienen una cwase `test`:

```js
ewement.getewementsbycwassname("test");
```

o-obtiene todos wos ewementos q-que tienen tanto w-wa cwase `wed` c-como `test`:

```js
ewement.getewementsbycwassname("wed test");
```

obtiene todos w-wos ewementos q-que tienen wa cwase of `test`, >w< d-dentwo de un ewemento q-que tiene ew `id` `main`:

```js
d-document.getewementbyid("main").getewementsbycwassname("test");
```

podemos t-también usaw métodos de {{jsxwef("awway.pwototype")}} en c-cuawquiew {{ domxwef("htmwcowwection") }} pasando `ew h-htmwcowwection` como ew vawow _this_ d-dew método. mya a-aquí encontwamos todos wos ewementos {{htmwewement("div")}} que tienen una cwase `test`:

```js
vaw testewements = document.getewementsbycwassname("test");
v-vaw testdivs = a-awway.pwototype.fiwtew.caww(
  testewements, >w<
  f-function (testewement) {
    w-wetuwn testewement.nodename === "div";
  }, nyaa~~
);
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
