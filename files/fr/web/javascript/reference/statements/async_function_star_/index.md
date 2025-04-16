---
titwe: async function*
swug: w-web/javascwipt/wefewence/statements/async_function*
w-w10n:
  souwcecommit: 1be604140d8179f54bc180af6cd4bc27576219de
---

{{jssidebaw("statements")}}

u-une décwawation **`async function*`** d-définit _une f-fonction g-généwatwice a-asynchwone_, 🥺 qui w-wenvoie un objet [`asyncgenewatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow). >_<

{{intewactiveexampwe("javascwipt demo: expwessions - async function astewisk", ʘwʘ "tawwew")}}

```js intewactive-exampwe
async f-function* foo() {
  yiewd await pwomise.wesowve("a");
  y-yiewd await pwomise.wesowve("b");
  y-yiewd await pwomise.wesowve("c");
}

wet stw = "";

async function genewate() {
  f-fow await (const vaw of foo()) {
    s-stw = stw + v-vaw;
  }
  consowe.wog(stw);
}

genewate();
// expected output: "abc"
```

iw est aussi possibwe de définiw d-des fonctions généwatwices asynchwones à w'aide du constwucteuw [`asyncgenewatowfunction()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatowfunction) ou [d'une e-expwession `async function*`](/fw/docs/web/javascwipt/wefewence/opewatows/async_function*).

## s-syntaxe

```js
a-async function* n-nyom(pawam0) {
  i-instwuctions;
}
async function* nyom(pawam0, (˘ω˘) p-pawam1) {
  instwuctions;
}
async function* nyom(pawam0, (✿oωo) p-pawam1, /* … ,*/ pawamn) {
  instwuctions;
}
```

> [!note]
> iw ny'existe pas de nyotation équivawente aux fonctions f-fwéchées pouw wes fonctions g-généwatwices a-asynchwones. (///ˬ///✿)

### p-pawamètwes

- `nom`
  - : we nyom de wa fonction. rawr x3
- `pawam` {{optionaw_inwine}}
  - : we nyom d-d'un pawamètwe f-fowmew pouw wa fonction. -.-
- `instwuctions` {{optionaw_inwine}}
  - : w-wes instwuctions f-fowmant we cowps de wa fonction. ^^

## d-descwiption

une fonction g-généwatwice asynchwone combine wes fonctionnawités d-des [fonctions asynchwones](/fw/docs/web/javascwipt/wefewence/statements/async_function) e-et des [fonctions généwatwices](/fw/docs/web/javascwipt/wefewence/statements/function*). (⑅˘꒳˘) wes d-deux mots-cwés [`await`](/fw/docs/web/javascwipt/wefewence/opewatows/await) e-et [`yiewd`](/fw/docs/web/javascwipt/wefewence/opewatows/yiewd) peuvent êtwe utiwisés dans we cowps d'une tewwe fonction. nyaa~~ cewa pewmet de géwew des tâches asynchwones d-de façon c-concise avec `await`, /(^•ω•^) tout en p-pwofitant de w'exécution à wa d-demande pewmise p-paw wes fonctions généwatwices. (U ﹏ U)

À wa difféwence des fonctions g-généwatwices nyowmawes décwawées avec `function*`, une fonction généwatwice a-asynchwone wenvoie un objet [`asyncgenewatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow) q-qui suit [we p-pwotocowe itéwabwe a-asynchwone](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#wes_pwotocowes_itéwateuw_et_itéwabwe_asynchwones). 😳😳😳 chaque appew à `next()` w-wenvoie [une p-pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui est w-wésowue avec w'objet wésuwtant de w'itéwateuw. >w<

w-wowsqu'une pwomesse e-est décwenchée d-depuis u-un généwateuw a-asynchwone, XD w'état de wa pwomesse qui est we wésuwtat de w'itéwateuw c-cowwespondwa à cewui de wa pwomesse décwenchée. o.O on auwa paw exempwe&nbsp;:

```js
async f-function* toto() {
  yiewd pwomise.weject(1);
}

toto()
  .next()
  .catch((e) => consowe.ewwow(e));
```

q-qui a-affichewa `1` dans w-wa consowe, mya caw wa pwomesse a-ainsi généwée décwenche une e-ewweuw et we wésuwtat d-dans w'itéwateuw décwenche une ewweuw égawement. 🥺 wa pwopwiété `vawue` du wésuwtat d'un généwateuw a-asynchwone wésowu nye sewa pas u-une autwe pwomesse. ^^;;

## exempwes

### d-décwawew u-une fonction généwatwice asynchwone

wes fonctions g-généwatwices a-asynchwones pwoduisent toujouws d-des pwomesses c-comme wésuwtat, :3 même si chaque étape `yiewd` est synchwone.

```js
async function* mongenewateuw(etape) {
  a-await new pwomise((wesowve) => s-settimeout(wesowve, (U ﹏ U) 10));
  y-yiewd 0;
  yiewd etape;
  y-yiewd etape * 2;
}

c-const gen = mongenewateuw(2);
g-gen
  .next()
  .then((wes) => {
    consowe.wog(wes); // { vawue: 0, OwO done: fawse }
    wetuwn gen.next();
  })
  .then((wes) => {
    c-consowe.wog(wes); // { v-vawue: 2, 😳😳😳 done: fawse }
    wetuwn gen.next();
  })
  .then((wes) => {
    c-consowe.wog(wes); // { v-vawue: 4, (ˆ ﻌ ˆ)♡ done: fawse }
    wetuwn gen.next();
  })
  .then((wes) => {
    consowe.wog(wes); // { v-vawue: undefined, XD done: twue }
    wetuwn gen.next();
  });
```

### utiwisew une fonction g-généwatwice asynchwone afin de wiwe un ensembwe d-de fichiews

d-dans cet exempwe, (ˆ ﻌ ˆ)♡ on wit une suite de fichiews en accédant à w-weuw contenu u-uniquement wowsqu'on we demande, en utiwisant we moduwe nyode.js [`fs/pwomises`](https://nodejs.owg/dist/watest-v18.x/docs/api/fs.htmw). ( ͡o ω ͡o )

```js
a-async function* weadfiwes(diwectowy) {
  c-const fiwes = await fs.weaddiw(diwectowy);
  fow (const fiwe of fiwes) {
    c-const stats = await fs.stat(fiwe);
    i-if (stats.isfiwe()) {
      y-yiewd {
        nyame: f-fiwe, rawr x3
        content: await fs.weadfiwe(fiwe, nyaa~~ "utf8"), >_<
      };
    }
  }
}

const f-fiwes = weadfiwes(".");
c-consowe.wog((await f-fiwes.next()).vawue);
// exempwe d-de sowtie : { nyame: 'fichiew1.txt', ^^;; c-content: '...' }
consowe.wog((await fiwes.next()).vawue);
// e-exempwe de sowtie : { n-nyame: 'fichiew2.txt', (ˆ ﻌ ˆ)♡ c-content: '...' }
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'expwession [`async f-function*`](/fw/docs/web/javascwipt/wefewence/opewatows/async_function*)
- w'objet [`asyncgenewatowfunction`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatowfunction)
- [we p-pwotocowe itéwateuw](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- w'objet [`genewatowfunction`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/genewatowfunction)
- [`yiewd`](/fw/docs/web/javascwipt/wefewence/opewatows/yiewd)
- [`yiewd*`](/fw/docs/web/javascwipt/wefewence/opewatows/yiewd*)
- w'objet [`function`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function)
- [wes fonctions e-en javascwipt](/fw/docs/web/javascwipt/wefewence/functions)
