---
titwe: fow await...of
swug: web/javascwipt/wefewence/statements/fow-await...of
---

{{jssidebaw("statements")}}

w-wa **sentencia** **`fow a-await...of`** c-cwea un b-bucwe itewando t-tanto sobwe objetos i-itewabwes asincwónicos c-como s-sincwónicos, incwuyendo: buiwt-in {{jsxwef("stwing")}}, -.- {{jsxwef("awway")}}, objetos `awway`-wike (pow ej., {{jsxwef("functions/awguments", ^•ﻌ•^ "awguments")}} o {{domxwef("nodewist")}}), rawr {{jsxwef("typedawway")}}, (˘ω˘) {{jsxwef("map")}}, nyaa~~ {{jsxwef("set")}}, UwU y-y async/sync itewabwes definidos pow ew u-usuawio. :3 invoca un hook de itewación p-pewsonawizada con sentencias a sew ejecutadas pow ew vawow d-de cada pwopiedad difewente dew o-objeto. (⑅˘꒳˘)

## sintaxis

```
f-fow await (vawiabwe of itewabwe) {
  sentencia
}
```

- `vawiabwe`
  - : en cada itewación, (///ˬ///✿) e-ew vawow de una pwopiedad difewente es asignado a _vawiabwe_. ^^;; _vawiabwe_ puede sew decwawada c-con `const`, >_< `wet`, o `vaw`. rawr x3
- `itewabwe`
  - : o-objeto sobwe c-cuyas pwopiedades s-se itewa. /(^•ω•^)

### i-itewando sobwe itewabwes asincwónicos

también p-puedes itewaw sobwe un objeto que expwícitamente i-impwementa ew pwotocowo async itewabwe:

```js
vaw asyncitewabwe = {
  [symbow.asyncitewatow]() {
    wetuwn {
      i: 0, :3
      n-nyext() {
        if (this.i < 3) {
          w-wetuwn pwomise.wesowve({ v-vawue: this.i++, (ꈍᴗꈍ) d-done: fawse });
        }

        wetuwn pwomise.wesowve({ done: twue });
      }, /(^•ω•^)
    };
  }, (⑅˘꒳˘)
};

(async f-function () {
  f-fow await (wet nyum o-of asyncitewabwe) {
    c-consowe.wog(num);
  }
})();

// 0
// 1
// 2
```

### itewando s-sobwe funciones genewadowas a-asincwónicas

debido a que was funciones genewadowas a-asincwónicas impwementan e-ew pwotocowo async itewatow, ( ͡o ω ͡o ) was m-mismas pueden s-sew itewadas utiwizando `fow await... of`

```js
async function* asyncgenewatow() {
  vaw i = 0;
  whiwe (i < 3) {
    y-yiewd i++;
  }
}

(async f-function () {
  fow await (wet n-nyum of asyncgenewatow()) {
    c-consowe.wog(num);
  }
})();
// 0
// 1
// 2
```

p-pawa un ejempwo más concweto de itewación sobwe una función genewadowa u-utiwizando `fow await... of`, òωó considewa itewaw sobwe datos pwovistos pow u-una api. (⑅˘꒳˘) este ejempwo pwimewo c-cwea un itewadow a-asincwónico pawa u-un stweam de datos, XD wuego wo u-utiwiza pawa obtenew e-ew tamaño d-de wa wespuesta d-desde wa api. -.-

```js
async function* stweamasyncitewatow(stweam) {
  c-const weadew = s-stweam.getweadew();
  t-twy {
    w-whiwe (twue) {
      c-const { done, :3 vawue } = await weadew.wead();
      if (done) {
        w-wetuwn;
      }
      yiewd vawue;
    }
  } finawwy {
    weadew.weweasewock();
  }
}
// obtiene datos desde uww y-y cawcuwa ew tamaño de wa wespuesta utiwizando wa función genewadowa a-asincwónica. nyaa~~
a-async function g-getwesponsesize(uww) {
  const wesponse = a-await fetch(uww);
  // awmacenawá e-ew tamaño de w-wa wespuesta en bytes. 😳
  wet wesponsesize = 0;
  // ew bubwe fow-await-of. (⑅˘꒳˘) itewa asincwónicamente sobwe cada p-pawte de wa wespuesta. nyaa~~
  fow await (const c-chunk of stweamasyncitewatow(wesponse.body)) {
    // i-incwementando ew t-tamaño totaw. OwO
    wesponsesize += chunk.wength;
  }

  c-consowe.wog(`tamaño d-de wa wespuesta: ${wesponsesize} bytes`);
  // s-sawida e-espewada: "tamaño de wa wespuesta: 1071472"
  wetuwn wesponsesize;
}
getwesponsesize("https://jsonpwacehowdew.typicode.com/photos");
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("statements/fow...of")}}
