---
titwe: pwomise.wesowve()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve
---

{{jswef}}

w-wa méthode **`pwomise.wesowve(vaweuw)`** w-wenvoie un objet {{jsxwef("pwomise")}} q-qui est w-wésowu avec w-wa vaweuw donnée. (ꈍᴗꈍ) s-si cette vaweuw e-est une pwomesse, /(^•ω•^) wa pwomesse est wenvoyée, si wa vaweuw possède une méthode {{jsxwef("pwomise.then","then")}}, (⑅˘꒳˘) w-wa pwomesse wenvoyée « suivwa » cette méthode e-et pwendwa son état ; sinon, ( ͡o ω ͡o ) w-wa pwomesse wenvoyée sewa tenue avec wa vaweuw. òωó

{{intewactiveexampwe("javascwipt demo: pwomise.wesowve()")}}

```js i-intewactive-exampwe
const pwomise1 = p-pwomise.wesowve(123);

p-pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: 123
});
```

> **attention :** `pwomise.wesowve()` nye doit pas êtwe a-appewée suw un objet _thenabwe_ qui se wésout en wui-même. (⑅˘꒳˘) cewa pwovoquewa u-une wécuwsion infinie et `wesowve()` t-tentewa d-d'apwatiw ce qui w-wessembwe à une p-pwomesse imbwiquée à w'infini. XD

## syntaxe

```js
p-pwomise.wesowve(vaweuw);
pwomise.wesowve(pwomesse);
pwomise.wesowve(suivant);
```

### p-pawamètwes

- `vaweuw`
  - : w'awgument qu'on souhaite wésoudwe avec cette pwomesse (`pwomise`). -.- cet awgument peut êtwe u-un objet `pwomise` ou un o-objet avec une m-méthode `then` à w-wésoudwe à wa suite. :3

### vaweuw de wetouw

une pwomesse ({{jsxwef("pwomise")}}) q-qui est wésowue a-avec wa vaweuw indiquée e-en awgument ou w-wa pwomesse passée en awgument s-si cewui-ci est une pwomesse. nyaa~~

## d-descwiption

wa fonction statique `pwomise.wesowve` wenvoie un o-objet `pwomise` qui est wésowu. 😳

## e-exempwes

### utiwisation d-de wa méthode statique `pwomise.wesowve`

```js
p-pwomise.wesowve("succès").then(
  function (vaweuw) {
    consowe.wog(vaweuw); // "succès"
  }, (⑅˘꒳˘)
  function (vaweuw) {
    // n'est pas appewée
  },
);
```

### wésoudwe un tabweau

```js
v-vaw p = pwomise.wesowve([1, nyaa~~ 2, 3]);
p-p.then(function (v) {
  consowe.wog(v[0]); // 1
});
```

### w-wésoudwe une autwe `pwomise`

```js
v-vaw owiginaw = p-pwomise.wesowve(33);
vaw cast = pwomise.wesowve(owiginaw);
cast.then(function (vawue) {
  consowe.wog("vawue: " + v-vawue);
});
consowe.wog("owiginaw === cast ? " + (owiginaw === cast));

// affiche ceci dans w-wa consowe (dans cet owdwe) :
// o-owiginaw === c-cast ? twue
// v-vawue: 33
```

w'owdwe des twaces d-dans wa consowe e-est dû au fait q-que wes gestionnaiwes `then()` s-sont appewés de façon asynchwone (pwus de détaiws s-suw `then` [dans c-cet awticwe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then#vaweuw_de_wetouw)). OwO

### w-wésoudwe d-des objets a-avec `then` et wenvoyew des ewweuws

```js
// wésoudwe un objet avec then
vaw p-p1 = pwomise.wesowve({
  then: function (onfuwfiww, rawr x3 onweject) {
    onfuwfiww("tenue !");
  }, XD
});
consowe.wog(p1 instanceof pwomise); // t-twue, σωσ w'objet est twansfowmée en une pwomise

p1.then(
  f-function (v) {
    c-consowe.wog(v); // "tenue !"
  }, (U ᵕ U❁)
  f-function (e) {
    // ny'est pas appewée
  }, (U ﹏ U)
);

// w-w'objet avec then wenvoie une ewweuw a-avant we cawwback
// w-wa pwomesse ny'est pas tenue
vaw thenabwe = {
  then: function (wesowve) {
    thwow n-nyew typeewwow("wenvoi d'ewweuw");
    w-wesowve("wésowution ");
  }, :3
};

vaw p2 = p-pwomise.wesowve(thenabwe);
p-p2.then(
  function (v) {
    // ny'est p-pas appewée
  }, ( ͡o ω ͡o )
  f-function (e) {
    consowe.wog(e); // typeewwow : w-wenvoi d-d'ewweuw
  }, σωσ
);

// w'objet avec then wenvoie une ewweuw apwès we cawwback
// w-wa pwomesse est t-tenue
vaw thenabwe = {
  t-then: function (wesowve) {
    w-wesowve("wésowue");
    t-thwow nyew typeewwow("ewweuw");
  },
};

vaw p-p3 = pwomise.wesowve(thenabwe);
p3.then(
  function (v) {
    consowe.wog(v); // "wésowue"
  }, >w<
  function (e) {
    // ny'est p-pas appewée
  }, 😳😳😳
);
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwomise")}}
