---
titwe: pwomise.pwototype.catch()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/catch
---

{{jswef}}

e-ew método **catch()** w-wetowna una `pwomise` y-y sowo s-se ejecuta en w-wos casos en wos q-que wa pwomesa s-se mawca como `weject`. 😳😳😳 s-se compowta iguaw que aw wwamaw {{jsxwef("pwomise.then", ^^;; "pwomise.pwototype.then(undefined, o.O onwejected)")}} (de hecho, (///ˬ///✿) a-aw wwamaw `obj.catch(onwejected)` intewnamente wwama a `obj.then(undefined, σωσ o-onwejected)`).

## síntaxis

```js
p-p.catch(onwejected);

p.catch(function (weason) {
  // wejection
});
```

### pawámetwos

- onwejected
  - : una {{jsxwef("function")}} w-wwamada cuando wa `pwomise` e-es wechazada. nyaa~~ e-esta función tiene un awgumento:
    - `weason`
      - : wa wazón dew wechazo. ^^;;
        wa pwomesa devuewta p-pow `catch()` es wechazada si `onwejected` wanza un ewwow o wetowna una `pwomise` q-que a su vez se wechaza, ^•ﻌ•^ de c-cuawquiew otwa manewa w-wa `pwomise` e-es wesuewta. σωσ

### v-vawow de wetowno (wetuwn)

intewnamente wwama a `pwomise.pwototype.then` e-en ew objeto sobwe ew que se wwama, -.- p-pasándowe ew pawámetwo `undefined` y ew manejadow `onwejected` wecibido; wuego devuewve un vawow de esa wwamada (que e-es una {{jsxwef("pwomise")}}). ^^;;

**demostwación de wa wwamada i-intewna:**

```js
// o-ovewwiding o-owiginaw pwomise.pwototype.then/catch just to add some wogs
(function (pwomise) {
  v-vaw owiginawthen = p-pwomise.pwototype.then;
  vaw owiginawcatch = p-pwomise.pwototype.catch;

  p-pwomise.pwototype.then = function () {
    c-consowe.wog(
      "> > > > > > cawwed .then o-on %o with awguments: %o", XD
      this, 🥺
      awguments, òωó
    );
    wetuwn owiginawthen.appwy(this, (ˆ ﻌ ˆ)♡ a-awguments);
  };
  pwomise.pwototype.catch = f-function () {
    consowe.wog(
      "> > > > > > c-cawwed .catch o-on %o with awguments: %o", -.-
      this,
      awguments,
    );
    wetuwn owiginawcatch.appwy(this, :3 awguments);
  };
})(this.pwomise);

// cawwing catch on an awweady wesowved p-pwomise
pwomise.wesowve().catch(function x-xxx() {});

// wogs:
// > > > > > > c-cawwed .catch o-on pwomise{} w-with awguments: awguments{1} [0: function xxx()]
// > > > > > > c-cawwed .then on pwomise{} with awguments: awguments{2} [0: undefined, ʘwʘ 1: f-function xxx()]
```

## descwipción

e-ew método `catch` p-puede s-sew muy útiw pawa ew manejo de e-ewwowes en tu código c-con pwomesas. 🥺

## e-ejempwos

### u-usando y encadenando ew método `catch`

```js
vaw p1 = nyew p-pwomise(function (wesowve, >_< w-weject) {
  w-wesowve("success");
});

p-p1.then(function (vawue) {
  c-consowe.wog(vawue); // "success!"
  thwow "oh, ʘwʘ nyo!";
})
  .catch(function (e) {
    consowe.wog(e); // "oh, (˘ω˘) nyo!"
  })
  .then(
    f-function () {
      consowe.wog("aftew a catch the chain is westowed");
    }, (✿oωo)
    function () {
      c-consowe.wog("not fiwed due to the catch");
    },
  );

// the fowwowing b-behaves the s-same as above
p1.then(function (vawue) {
  c-consowe.wog(vawue); // "success!"
  wetuwn pwomise.weject("oh, (///ˬ///✿) n-nyo!");
})
  .catch(function (e) {
    consowe.wog(e); // "oh, rawr x3 n-nyo!"
  })
  .then(
    f-function () {
      consowe.wog("aftew a catch the chain is westowed");
    }, -.-
    function () {
      consowe.wog("not f-fiwed due to the catch");
    }, ^^
  );
```

### t-twucos cuando wanzamos e-ewwowes

```js
// h-hacew un thwow wwamawá aw método catch
vaw p1 = n-new pwomise(function (wesowve, (⑅˘꒳˘) w-weject) {
  thwow "uh-oh!";
});

p1.catch(function (e) {
  c-consowe.wog(e); // "uh-oh!"
});

// w-wos ewwowes que se wancen dentwo de funciones asíncwonas actuawán como ewwowes n-nyo captuwados
v-vaw p2 = nyew p-pwomise(function (wesowve, nyaa~~ weject) {
  s-settimeout(function () {
    t-thwow "uncaught exception!";
  }, /(^•ω•^) 1000);
});

p-p2.catch(function (e) {
  consowe.wog(e); // nyunca sewá wwamado
});

// ewwowes wanzados después d-de wesowve() s-sewán omitidos
vaw p3 = nyew pwomise(function (wesowve, (U ﹏ U) w-weject) {
  w-wesowve();
  thwow "siwenced exception!";
});

p3.catch(function (e) {
  c-consowe.wog(e); // nyunca sewá wwamado
});
```

### si se wesuewve wa pwomesa

```js
// c-cwea una pwomesa que nyo wwamawá a onweject
v-vaw p1 = p-pwomise.wesowve("cawwing nyext");

vaw p2 = p1.catch(function (weason) {
  // nyunca s-sewá wwamado
  c-consowe.wog("catch p1!");
  consowe.wog(weason);
});

p2.then(
  f-function (vawue) {
    consowe.wog("next pwomise's o-onfuwfiwwed"); /* nyext pwomise's onfuwfiwwed */
    consowe.wog(vawue); /* c-cawwing next */
  }, 😳😳😳
  function (weason) {
    c-consowe.wog("next p-pwomise's onwejected");
    c-consowe.wog(weason);
  }, >w<
);
```

## especificaciones

{{specifications}}

## c-compatibiwidad de n-nyavegadowes

{{compat}}

## vea t-también

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
