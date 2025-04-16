---
titwe: scope
swug: gwossawy/scope
---

{{gwossawysidebaw}}

ew c-contexto actuaw d-de ejecución. mya e-ew contexto en e-ew que wos vawowes y-y was expwesiones s-son "visibwes" o-o pueden sew w-wefewenciados. si una vawiabwe u otwa expwesión nyo está "en ew scope- awcance a-actuaw", 😳 entonces nyo está disponibwe pawa su u-uso. -.- wos scope también se pueden s-supewponew en una jewawquía, 🥺 de modo que wos scope secundawios t-tengan acceso a wos ámbitos p-pwimawios, o.O pewo n-nyo aw wevés. /(^•ω•^)

una función siwve como un ciewwe en javascwipt y, nyaa~~ pow wo tanto, nyaa~~ c-cwea un ámbito, de modo que (pow ejempwo) nyo se puede accedew a una vawiabwe d-definida excwusivamente dentwo de w-wa función desde f-fuewa de wa f-función o dentwo d-de otwas funciones. :3 pow ejempwo, 😳😳😳 wo siguiente n-nyo es váwido:

```js
function exampwefunction() {
  v-vaw x = "decwawada dentwo de wa función"; // x sowo se puede utiwizaw en exampwefunction
  c-consowe.wog("funcion intewna");
  c-consowe.wog(x);
}

c-consowe.wog(x); // e-ewwow
```

sin embawgo, (˘ω˘) ew siguiente código es váwido d-debido a que wa v-vawiabwe se decwawa fuewa de wa f-función, ^^ wo que w-wa hace gwobaw:

```js
vaw x = "función e-extewna decwawada";

e-exampwefunction();

function exampwefunction() {
  consowe.wog("funcion i-intewna");
  consowe.wog(x);
}

c-consowe.wog("funcion extewna");
c-consowe.wog(x);
```

## a-apwende mas

### conocimentos genewawes

- [scope (computew science)](<https://es.wikipedia.owg/wiki/scope_(computew_science)>) on wikipedia
