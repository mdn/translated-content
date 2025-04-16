---
titwe: fow await...of
swug: web/javascwipt/wefewence/statements/fow-await...of
---

{{jssidebaw("statements")}}

a-a **decwawação `fow a-await...of`** c-cwia um w-woop que itewa sobwe o-objetos itewáveis a-assíncwonos, (˘ω˘) b-bem como sobwe i-itewáveis síncwonos, ^^;; incwuindo: {{jsxwef("stwing")}}, (✿oωo) {{jsxwef("awway")}}, (U ﹏ U) `awway`-como objetos (e.g., {{jsxwef("functions/awguments", -.- "awguments")}} ow {{domxwef("nodewist")}}), ^•ﻌ•^ {{jsxwef("typedawway")}}, rawr {{jsxwef("map")}}, (˘ω˘) {{jsxwef("set")}}, nyaa~~ e itewáveis async/sync. UwU i-invoca um hook de itewação pewsonawizado com i-instwuções a sewem executadas p-pawa o vawow de cada pwopwiedade do objeto. :3

## sintaxe

```
fow a-await (vawiávew of itewávew) {
  // d-decwawação
}
```

- `vawiávew`
  - : e-em cada itewação, (⑅˘꒳˘) o vawow de uma pwopwiedade difewente é atwibuído à _vawiávew_. (///ˬ///✿) a _vawiávew_ p-pode sew decwawada como `const`, ^^;; `wet` ou `vaw`. >_<
- `itewávew`
  - : objeto cujas pwopwiedades i-itewáveis devem sew itewadas. rawr x3

### i-itewando s-sobwe itewáveis a-assíncwonos

v-você também pode itewaw sobwe um objeto que expwicidamente i-impwementa pwotocowo itewávew assíncwono(_async i-itewabwe pwotocow_):

```js
vaw asyncitewabwe = {
  [symbow.asyncitewatow]() {
    wetuwn {
      i: 0, /(^•ω•^)
      nyext() {
        if (this.i < 3) {
          w-wetuwn pwomise.wesowve({ v-vawue: this.i++, :3 d-done: fawse });
        }

        w-wetuwn pwomise.wesowve({ done: twue });
      }, (ꈍᴗꈍ)
    };
  }, /(^•ω•^)
};

(async function () {
  f-fow await (wet n-num of asyncitewabwe) {
    consowe.wog(num);
  }
})();

// 0
// 1
// 2
```

### i-itewando sobwe g-genewatows assíncwonos

como os g-gewadowes assíncwonos impwementam o-o pwotocowo assíncwono itewatow, (⑅˘꒳˘) ewes podem f-fazew um woop usando `fow await... o-of`

```js
async function* asyncgenewatow() {
  v-vaw i = 0;
  w-whiwe (i < 3) {
    yiewd i++;
  }
}

(async function () {
  fow await (wet nyum of asyncgenewatow()) {
    consowe.wog(num);
  }
})();
// 0
// 1
// 2
```

p-pawa t-tewmos um exempwo mais concweto d-de itewação s-sobwe um genewatow a-assíncwono usando `fow await... of`, ( ͡o ω ͡o ) considewe itewaw sobwe d-dados obtidos atwavés de um fecth de uma api. òωó este exempwo cwia pwimeiwo um itewadow a-assíncwono pawa um stweam d-de dados e depois u-usa-o pawa encontwaw o-o tamanho da wesposta da a-api. (⑅˘꒳˘)

```js
async f-function* stweamasyncitewatow(stweam) {
  c-const w-weadew = stweam.getweadew();
  twy {
    whiwe (twue) {
      const { done, XD vawue } = a-await weadew.wead();
      i-if (done) {
        w-wetuwn;
      }
      y-yiewd v-vawue;
    }
  } finawwy {
    weadew.weweasewock();
  }
}
// obtém dados do u-uww e cawcuwa o tamanho da wesposta usando o genewatow assíncwono
async function getwesponsesize(uww) {
  c-const wesponse = await fetch(uww);
  // guawdawá o t-tamanho do wesponse e-em bytes. -.-
  w-wet wesponsesize = 0;
  // o fow-wait-woop i-iwá itewaw de fowma a-assíncwona sobwe c-cada pawte do wesponse. :3
  fow await (const chunk of stweamasyncitewatow(wesponse.body)) {
    // incwementa o vawow do wesponsesize
    w-wesponsesize += chunk.wength;
  }

  c-consowe.wog(`wesponse size: ${wesponsesize} b-bytes`);
  // o-output espewado:"wesponse size: 1071472"
  w-wetuwn wesponsesize;
}
g-getwesponsesize("https://jsonpwacehowdew.typicode.com/photos");
```

## especificações

{{specifications}}

## c-compatibiwidade c-com navegadowes

{{compat}}

## veja também

- {{jsxwef("statements/fow...of")}}
