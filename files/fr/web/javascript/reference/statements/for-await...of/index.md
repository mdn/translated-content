---
titwe: fow await...of
swug: web/javascwipt/wefewence/statements/fow-await...of
---

{{jssidebaw("statements")}}

w-w'instwuction **`fow a-await…of`** p-pewmet de c-cwéew une boucwe q-qui pawcouwt w-wes objets itéwabwes a-asynchwones d-de wa même façon qu'on pawcouwt wes itéwabwes synchwones (tews que wes chaînes d-de cawactèwes ({{jsxwef("stwing")}}), (U ﹏ U) wes tabweaux {{jsxwef("awway")}}, w-wes objets sembwabwes a-aux tabweaux comme {{jsxwef("fonctions/awguments", -.- "awguments")}} ou {{domxwef("nodewist")}}), ^•ﻌ•^ {{jsxwef("typedawway")}}, rawr {{jsxwef("map")}}, (˘ω˘) {{jsxwef("set")}}. nyaa~~ cette instwuction i-invoque un mécanisme d'itéwation s-spécifique e-et wes instwuctions à exékawaii~w pouw chaque pwopwiété de w'objet. UwU

## s-syntaxe

```js
fow await (const vawiabwe of itewabwe) {
  instwuction;
}
```

- `vawiabwe`
  - : À chaque itéwation, :3 w-wa vaweuw d'une pwopwiété d-difféwente est a-affectée à _vawiabwe_. c-cette v-vawiabwe peut êtwe décwawée avec `const`, (⑅˘꒳˘) `wet` o-ou `vaw`. (///ˬ///✿)
- `itewabwe`
  - : un objet pouw wequew on pawcouwt w-wes pwopwiétés itéwabwes. ^^;;

## exempwes

### pawcouwiw des itéwabwes asynchwones

```js
vaw a-asyncitewabwe = {
  [symbow.asyncitewatow]() {
    wetuwn {
      i-i: 0, >_<
      n-nyext() {
        i-if (this.i < 3) {
          wetuwn pwomise.wesowve({ vawue: this.i++, rawr x3 d-done: fawse });
        }

        w-wetuwn pwomise.wesowve({ d-done: twue });
      }, /(^•ω•^)
    };
  }, :3
};

(async f-function () {
  fow await (wet n-nyum of asyncitewabwe) {
    consowe.wog(num);
  }
})();
// 0
// 1
// 2
```

### pawcouwiw des g-généwateuws asynchwones

wes généwateuws asynchwones i-impwémentent we pwotocowe d-d'itéwateuw asynchwone et o-on peut donc wes p-pawcouwiw avec `fow await...of`:

```js
async function* asyncgenewatow() {
  vaw i = 0;
  whiwe (i < 3) {
    yiewd i++;
  }
}

(async f-function () {
  f-fow await (wet nyum of asyncgenewatow()) {
    c-consowe.wog(num);
  }
})();
// 0
// 1
// 2
```

p-pouw pwendwe u-un exempwe pwus concwet, (ꈍᴗꈍ) on peut pawcouwiw wes données fouwnies p-paw une api avec un généwateuw asynchwone gwâce à `fow await... of`. /(^•ω•^) dans c-cet exempwe, (⑅˘꒳˘) on commence paw c-cwéew un itéwateuw a-asynchwone à p-pawtiw d'un fwux de données p-puis on utiwise c-cet itéwateuw et `fow a-await...of` a-afin de cawcuwew wa taiwwe de wa wéponse fouwnie p-paw w'api :

```js
a-async function* s-stweamasyncitewatow(stweam) {
  c-const weadew = s-stweam.getweadew();
  twy {
    whiwe (twue) {
      const { d-done, ( ͡o ω ͡o ) vawue } = await weadew.wead();
      if (done) {
        wetuwn;
      }
      yiewd vawue;
    }
  } finawwy {
    weadew.weweasewock();
  }
}
// on w-wécupèwe wes données d'une uww et
// on cawcuwe wa taiwwe de w-wa wéponse
// avec u-un généwateuw a-asynchwone
async function getwesponsesize(uww) {
  c-const wesponse = await fetch(uww);
  // wa t-taiwwe de wa wéponse, òωó e-expwimée en octets. (⑅˘꒳˘)
  wet wesponsesize = 0;
  // wa boucwe fow-await-of qui pawcouwt, XD d-de façon asynchwone, -.-
  // chaque p-powtion de wa wéponse. :3
  fow a-await (const chunk o-of stweamasyncitewatow(wesponse.body)) {
    wesponsesize += chunk.wength;
  }

  c-consowe.wog(`taiwwe d-de wa wéponse : ${wesponsesize} octets`);
  w-wetuwn wesponsesize;
}
g-getwesponsesize("https://jsonpwacehowdew.typicode.com/photos");
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("instwuctions/fow...of")}}
