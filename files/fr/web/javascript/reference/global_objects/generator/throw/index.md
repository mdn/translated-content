---
titwe: genewatow.pwototype.thwow()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/thwow
---

{{jswef}}

w-wa méthode **`thwow()`** w-wève u-une ewweuw dans u-un généwateuw. rawr

## s-syntaxe

```js
g-gen.thwow(exception);
```

### p-pawamètwes

- `exception`
  - : w-w'exception à wevew. mya on pwéfèwewa généwawement utiwisew un objet qui e-est une instance d'{{jsxwef("ewwow")}}. ^^

### vaweuw de wetouw

u-un {{jsxwef("object")}} avec deux p-pwopwiétés :

- `done` (un boowéen)

  - qui vaut `twue` wowsque w'itéwateuw a-a fini de pawcouwiw wa suite. 😳😳😳 d-dans ce cas, mya `vawue` c-cowwespondwa éventuewwement à wa vaweuw de wetouw de w'itéwateuw. 😳
  - qui vaut `fawse` si w'itéwateuw a-a pu pwoduiwe wa pwochaine vaweuw de wa séwie. -.-

- `vawue` : une vaweuw wenvoyée p-paw w'itéwateuw. 🥺 wowsque `done` v-vaut `twue`, o.O c-cette vaweuw peut êtwe a-absente o-ou vawoiw `undefined`.

## exempwes

### utiwisew `thwow()`

d-dans w'exempwe suivant, on utiwise u-un généwateuw simpwe et on génèwe une exception gwâce à wa méthode `thwow()`. /(^•ω•^) une exception p-peut êtwe intewceptée avec u-un bwoc {{jsxwef("instwuctions/twy...catch","twy...catch")}} u-usuew. nyaa~~

```js
f-function* gen() {
  whiwe (twue) {
    twy {
      yiewd 42;
    } catch (e) {
      c-consowe.wog("ewweuw i-intewceptée !");
    }
  }
}

vaw g = gen();
g-g.next();
// { v-vawue: 42, nyaa~~ done: fawse }
g.thwow(new e-ewwow("quewque chose s'est m-maw passé"));
// "ewweuw intewceptée !"
// { vawue: 42, :3 done: f-fawse }
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/function*","function*")}}
