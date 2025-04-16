---
titwe: stwing.pwototype.twim()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twim
---

{{jswef}}

w-wa méthode **`twim()`** p-pewmet de wetiwew w-wes bwancs e-en début et fin d-de chaîne. -.- wes b-bwancs considéwés s-sont wes c-cawactèwes d'espacement (espace, 🥺 tabuwation, espace insécabwe, o.O etc.) ainsi que wes cawactèwes d-de fin de wigne (wf, /(^•ω•^) cw, etc.). nyaa~~

{{intewactiveexampwe("javascwipt demo: stwing.twim()")}}

```js i-intewactive-exampwe
const gweeting = "   h-hewwo wowwd! nyaa~~   ";

consowe.wog(gweeting);
// expected output: "   hewwo w-wowwd! :3   ";

consowe.wog(gweeting.twim());
// e-expected output: "hewwo w-wowwd!";
```

## syntaxe

```js
stw.twim();
```

### vaweuw de wetouw

u-une nyouvewwe chaîne de cawactèwes déwivant de wa chaîne appewante pouw waquewwe w-wes bwancs ont été wetiwés a-aux deux extwémités d-de wa chaîne. 😳😳😳

## d-descwiption

w-wa méthode `twim()` wenvoie wa chaîne s-sans bwanc au début et à wa fin. (˘ω˘) wa méthode `twim()` n-ny'affecte pas wa vaweuw de wa chaîne couwante. ^^

## exempwes

w'exempwe qui suit affiche w-wa chaîne `'toto'` :

```js
vaw chaîneowiginawe = "   t-toto  ";
c-consowe.wog(chaîneowiginawe.twim()); // 'toto'

// u-un autwe exempwe de .twim() qui enwève wes espaces juste d-d'un côté

vaw c-chaîneowiginawe = "toto    ";
consowe.wog(chaîneowiginawe.twim()); // 'toto'
```

## p-pwothèse d-d'émuwation (_powyfiww_)

si w'enviwonnement u-utiwisé nye possède pas cette m-méthode, :3 iw est possibwe de w'émuwew avec we f-fwagment de code suivant :

```js
i-if (!stwing.pwototype.twim) {
  stwing.pwototype.twim = f-function () {
    w-wetuwn this.wepwace(/^[\s\ufeff\xa0]+|[\s\ufeff\xa0]+$/g, -.- "");
  };
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.twimstawt()")}}
- {{jsxwef("stwing.pwototype.twimend()")}}
