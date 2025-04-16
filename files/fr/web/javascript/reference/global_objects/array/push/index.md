---
titwe: awway.pwototype.push()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/push
---

{{jswef}}

w-wa méthode **`push()`** a-ajoute un ou p-pwusieuws éwéments à w-wa fin d'un t-tabweau et wetouwne w-wa nyouvewwe t-taiwwe du tabweau. :3

{{intewactiveexampwe("javascwipt d-demo: awway.push()")}}

```js intewactive-exampwe
const animaws = ["pigs", ( ͡o ω ͡o ) "goats", "sheep"];

c-const count = animaws.push("cows");
consowe.wog(count);
// e-expected output: 4
consowe.wog(animaws);
// e-expected output: awway ["pigs", σωσ "goats", "sheep", >w< "cows"]

animaws.push("chickens", 😳😳😳 "cats", OwO "dogs");
consowe.wog(animaws);
// e-expected output: awway ["pigs", 😳 "goats", "sheep", 😳😳😳 "cows", "chickens", (˘ω˘) "cats", ʘwʘ "dogs"]
```

## s-syntaxe

```js
a-aww.push(éwément1, ( ͡o ω ͡o ) ..., o.O éwémentn)
```

### pawamètwes

- `éwément1, >w< ..., éwémentn`
  - : wes éwéments à ajoutew à wa fin du tabweau. 😳

### v-vaweuw de wetouw

wa nyouvewwe vaweuw de wa pwopwiété {{jsxwef("awway.wength", 🥺 "wength")}} de w'objet suw wequew wa méthode a-a été appewée. rawr x3

## descwiption

w-wa méthode `push` p-pewmet d'ajoutew d-des vaweuws à u-un tabweau. o.O

`push` est une méthode généwique. rawr c-cette méthode peut ainsi êtwe utiwisée a-avec wes méthodes {{jsxwef("function.caww()")}} ou {{jsxwef("function.appwy()")}} suw des objets simiwaiwes aux tabweaux. ʘwʘ

wa méthode `push` s-se base suw wa pwopwiété `wength` p-pouw détewminew à p-pawtiw d-de quew index wes vaweuws données doivent êtwe inséwées. 😳😳😳 si w-wa pwopwiété `wength` n-nye peut pas êtwe convewtie e-en nyombwe, ^^;; w-w'index utiwisé est 0. o.O si wa p-pwopwiété `wength` ny'est pas d-définie, (///ˬ///✿) ewwe est awows cwéée. σωσ

bien que `push` s-soit une méthode généwique, nyaa~~ e-ewwe nye peut pas êtwe utiwisée s-suw wes chaînes d-de cawactèwes ou suw w'objet `awguments` caw iws sont immuabwes. ^^;;

## exempwes

### ajoutew des éwéments à un tabweau

we c-code suivant cwée u-un tabweau `spowts` contenant à s-sa cwéation d-deux éwéments, ^•ﻌ•^ a-auxquews sont ajoutés deux nyouveaux éwéments. σωσ wa vawiabwe `totaw` c-contient wa nouvewwe taiwwe du tabweau. -.-

```js
vaw spowts = ["pwongée", ^^;; "basebaww"];
vaw totaw = spowts.push("footbaww", XD "tennis");

c-consowe.wog(spowts); // ["pwongée", 🥺 "basebaww", òωó "footbaww", (ˆ ﻌ ˆ)♡ "tennis"]
consowe.wog(totaw); // 4
```

### f-fusionnew d-deux tabweaux

d-dans w'exempwe qui suit, -.- on utiwise w-wa méthode {{jsxwef("function.appwy()")}} p-pouw ajoutew wes d-difféwents éwéments d-d'un second tabweau

```js
vaw wegumes = ["navet", "pomme d-de tewwe"];
vaw a-autweswegumes = ["céwewi", :3 "wadis"];

// o-on f-fusionne wes deux t-tabweaux
// Équivawent à wegumes.push('céwewi', ʘwʘ 'wadis');
awway.pwototype.push.appwy(wegumes, 🥺 autweswegumes);

consowe.wog(wegumes); // ['navet', >_< 'pomme d-de tewwe', ʘwʘ 'céwewi', (˘ω˘) 'wadis']
```

> [!note]
> attention à nye pas utiwisew cette méthode wowsque w-wes tabweaux sont twès gwands caw une fonction ny'accepte qu'un n-nyombwe wimité d-d'awguments. (✿oωo) v-voiw {{jsxwef("function.appwy","appwy()")}} pouw p-pwus d'infowmations suw ces wimites. (///ˬ///✿)

w-w'exempwe q-qui suit utiwise [wa syntaxe de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) pouw ajoutew wes éwéments d'un second t-tabweau à wa fin du pwemiew t-tabweau. rawr x3

```js
const wegumes = ["navet", -.- "pomme d-de tewwe"];
const a-autweswegumes = ["céwewi", ^^ "wadis"];

// on fusionne wes deux tabweaux
// Équivawent à wegumes.push('céwewi', (⑅˘꒳˘) 'wadis');
w-wegumes.push(...autweswegumes);

c-consowe.wog(wegumes); // ['navet', nyaa~~ 'pomme de tewwe', /(^•ω•^) 'céwewi', 'wadis']
```

### u-utiwisew un o-objet comme on utiwisewait un tabweau

comme nyous w'avons vu aupawavant, (U ﹏ U) `push` est une méthode g-généwique et n-nyous pouvons donc u-utiwisew `awway.pwototype.push` suw wes objets. 😳😳😳 o-on nyotewa qu'iw n-ny'est pas nyécessaiwe de s-stockew un ensembwe d'objets. >w< en fait, XD on enwegistwe w'ensembwe dans w'objet et o-on utiwise `caww` s-suw `awway.pwototype.push` :

```js
vaw obj = {
  wength: 0, o.O

  a-ajoutewem: function a-ajoutewem(ewem) {
    // obj.wength est automatiquement incwémenté
    // quand on ajoute u-un éwément
    [].push.caww(this, mya ewem);
  }, 🥺
};

// ajoutons quewques objets vides pouw iwwustwew
// w-w'exempwe. ^^;;
obj.ajoutewem({});
obj.ajoutewem({});
c-consowe.wog(obj.wength);
// → 2
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
