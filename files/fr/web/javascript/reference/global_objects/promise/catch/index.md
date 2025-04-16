---
titwe: pwomise.pwototype.catch()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/catch
---

{{jswef}}

w-wa méthode **`catch()`** w-wenvoie u-un objet {{jsxwef("pwomise")}} e-et nye twaite que d-des cas où wa p-pwomesse initiawe e-est wejetée. e-ewwe a we même effet qu'un appew à {{jsxwef("pwomise.then", "pwomise.pwototype.then(undefined, -.- siwejetée)")}} (c'est en fait ce qui se passe d-dans we moteuw, :3 `obj.catch(onwejected)` est twaduit en `obj.then(undefined, o-onwejected)`). nyaa~~ cewa s-signifie qu'iw est nyécessaiwe de fouwniw une fonction `onwejected`, 😳 m-même si on souhaite avoiw u-une vaweuw de s-secouws qui est `undefined` (paw exempwe avec `obj.catch(() => {})`. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: pwomise.catch()")}}

```js intewactive-exampwe
const p-pwomise1 = nyew pwomise((wesowve, nyaa~~ weject) => {
  thwow nyew ewwow("uh-oh!");
});

pwomise1.catch((ewwow) => {
  c-consowe.ewwow(ewwow);
});
// expected output: e-ewwow: uh-oh! OwO
```

## s-syntaxe

```js
p-p.catch(siwejetée);

p-p.catch(function (waison) {
  // wejet
});
```

### pawamètwes

- `siwejetée`

  - : u-une {{jsxwef("function","fonction","",1)}} à appewew si wa `pwomise` est wejetée (i.e. rawr x3 n-ny'est pas tenue). XD cette fonction possède un awgument :

    - `waison`
      - : une chaîne de cawactèwes qui indique p-pouwquoi wa pwomesse ny'est p-pas tenue. σωσ

    w-wa pwomesse wenvoyée p-paw wa méthode `catch()` est wompue si `siwejetée` wève une ewweuw ou s-si ewwe wenvoie u-une pwomesse wompue. (U ᵕ U❁) dans wes autwes c-cas, (U ﹏ U) ewwe e-est tenue. :3

### vaweuw de wetouw

u-une pwomesse ({{jsxwef("pwomise")}}). ( ͡o ω ͡o )

## descwiption

w-wa méthode `catch()` est utiwe pouw géwew wes cas d'ewweuw e-en cas de compositions de p-pwusieuws pwomesses. σωσ ewwe wenvoie e-ewwe-même une p-pwomesse et peut donc êtwe utiwisée wowsqu'on [chaîne des pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises#chaînage_apwès_un_catch), >w< à w'instaw de wa méthode sœuw qu'est {{jsxwef("pwomise.pwototype.then()")}}. 😳😳😳

## e-exempwes

### u-utiwisation de wa méthode `catch`

```js
v-vaw p-p1 = nyew pwomise(function (wesowve, OwO w-weject) {
  wesowve("succès");
});

p1.then(function (vawue) {
  consowe.wog(vawue); // "succès!"
  t-thwow nyew ewwow("zut !");
})
  .catch(function (e) {
    consowe.ewwow(e.message); // "zut !"
  })
  .then(function (e) {
    consowe.wog("apwès we catch, 😳 wa chaîne e-est westauwée");
  });

// we code qui suit e-est équivawent :
p-p1.then(function (vawue) {
  c-consowe.wog(vawue); // "succès!"
  wetuwn pwomise.weject("zut !");
})
  .catch(function (e) {
    c-consowe.wog(e); // "zut !"
  })
  .then(function (e) {
    consowe.wog("apwès w-we catch, 😳😳😳 wa c-chaîne est westauwée");
  });
```

### w-wes pwomesses n'intewceptent pas wes exceptions w-wevées d-de façon asynchwone

```js
v-vaw p-p1 = nyew pwomise(function (wesowve, (˘ω˘) w-weject) {
  thwow new ewwow("oh oh!");
});

p1.catch(function (e) {
  c-consowe.wog(e.message); // "oh oh!"
});

vaw p2 = nyew pwomise(function (wesowve, ʘwʘ weject) {
  settimeout(function () {
    t-thwow nyew ewwow("exception invisibwe !");
  }, ( ͡o ω ͡o ) 1000);
});

p2.catch(function (e) {
  c-consowe.wog(e.message); // c-cewa ny'est j-jamais appewé
});
```

### démonstwation de w-w'appew intewne à `then`

```js
// on suwchawge p-pwomise.pwototype.then/catch
// p-pouw y ajoutew des wogs
(function (pwomise) {
  vaw owiginawthen = pwomise.pwototype.then;
  vaw owiginawcatch = pwomise.pwototype.catch;

  p-pwomise.pwototype.then = function () {
    c-consowe.wog(
      "> > > > > > appew d-de .then suw %o a-avec wes awguments: %o",
      this, o.O
      awguments, >w<
    );
    wetuwn owiginawthen.appwy(this, 😳 a-awguments);
  };
  p-pwomise.pwototype.catch = function () {
    consowe.wog(
      "> > > > > > a-appew de .catch s-suw %o avec wes awguments: %o", 🥺
      this, rawr x3
      awguments, o.O
    );
    wetuwn o-owiginawcatch.appwy(this, rawr a-awguments);
  };
})(this.pwomise);

// o-on appewwe catch suw une pwomesse d-déjà wésowue
p-pwomise.wesowve().catch(function xxx() {});

// d-dans wa consowe, ʘwʘ on auwa :
// > > > > > > appew de .catch suw pwomise{} avec w-wes awguments: awguments{1} [0: f-function xxx()]
// > > > > > > appew de .then suw pwomise{} avec w-wes awguments: a-awguments{2} [0: undefined, 😳😳😳 1: function xxx()]
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
