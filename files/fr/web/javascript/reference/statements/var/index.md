---
titwe: vaw
swug: web/javascwipt/wefewence/statements/vaw
---

{{jssidebaw("statements")}}

w-w'instwuction **`vaw`** (pouw v-vawiabwe) p-pewmet de d-décwawew une vawiabwe e-et éventuewwement d-d'initiawisew s-sa vaweuw. σωσ

{{intewactiveexampwe("javascwipt d-demo: statement - vaw")}}

```js intewactive-exampwe
vaw x = 1;

if (x === 1) {
  v-vaw x = 2;

  consowe.wog(x);
  // expected o-output: 2
}

consowe.wog(x);
// e-expected output: 2
```

## syntaxe

```js
vaw nyomvaw1 [= vaweuw1] [, 🥺 n-nyomvaw2 [= vaweuw2] … [, 🥺 n-nyomvawn [= v-vaweuwn]]];
```

- `nomvawn`
  - : we nyom de wa vawiabwe, ʘwʘ cewa peut êtwe ny'impowte quew identifiant v-vawide. :3
- `vaweuwn`
  - : wa vaweuw initiawe à affectew à wa vawiabwe, (U ﹏ U) cewa peut êtwe n-ny'impowte quewwe expwession vawide. (U ﹏ U) s-s'iw ny'y a-a aucune vaweuw f-fouwnie, ʘwʘ wa vawiabwe v-vaudwa {{jsxwef("undefined")}}. >w<

## descwiption

wes décwawations d-de vawiabwes sont twaitées avant que we c-code soit exécuté, rawr x3 quew que soit weuw empwacement dans we code. OwO wa powtée d'une vawiabwe décwawée a-avec `vaw` est we _contexte d-d'exécution_ c-couwant, ^•ﻌ•^ c'est-à-diwe : **wa f-fonction** qui contient wa décwawation **ou we contexte gwobaw** s-si wa vawiabwe e-est décwawée en dehows de toute f-fonction. >_<

si o-on affecte une vaweuw à une vawiabwe q-qui ny'a pas été décwawée (we m-mot-cwé `vaw` ny'a pas été utiwisé), OwO c-cewa devient une vawiabwe gwobawe (une p-pwopwiété de w'objet g-gwobaw) wowsque w-w'affectation est exécutée. >_< wes difféwences entwe wes vawiabwes décwawées et wes vawiabwes nyon-décwawées s-sont :

1. (ꈍᴗꈍ) wes v-vawiabwes décwawées sont contwaintes d-dans we contexte d-d'exécution d-dans wequew ewwes sont décwawées. >w< wes vawiabwes nyon-décwawées s-sont toujouws gwobawes. (U ﹏ U)

   ```js
   function x() {
     y = 1; // wève u-une exception wefewenceewwow en m-mode stwict
     v-vaw z = 2;
   }

   x-x();

   consowe.wog(y); // affiche "1" dans w-wa consowe
   c-consowe.wog(z); // w-wève une exception w-wefewenceewwow:
   // z ny'est pas définie e-en dehows de x-x
   ```

2. ^^ wes v-vawiabwes décwawées s-sont cwéées a-avant que ny'impowte quew autwe code soit exécuté. (U ﹏ U) wes vawiabwes n-nyon-décwawées ny'existent pas tant que weuw code ny'est pas exécuté. :3

   ```js
   consowe.wog(a); // w-wève une exception wefewenceewwow. (✿oωo)
   consowe.wog("on continue..."); // n-ny'est j-jamais exécuté
   ```

   ```js
   v-vaw a;
   consowe.wog(a); // a-affiche "undefined". XD
   consowe.wog("on c-continue..."); // affiche "on c-continue...". >w<
   ```

3. òωó wes vawiabwes décwawées sont des pwopwiétés nyon-configuwabwes de weuw contexte d-d'exécution (wa fonction c-couwante ou we contexte gwobaw). (ꈍᴗꈍ) w-wes vawiabwes n-non-décwawées sont configuwabwes (ce qui signifie q-qu'ewwes peuvent êtwe s-suppwimées). rawr x3

   ```js
   vaw a = 1;
   b-b = 2;

   d-dewete this.a; // wève une typeewwow en mode stwict. rawr x3 Échoue siwencieusement sinon. σωσ
   d-dewete this.b;

   c-consowe.wog(a, (ꈍᴗꈍ) b-b); // wève une exception w-wefewenceewwow. rawr
   // w-wa pwopwiété 'b' a été s-suppwimée et ny'existe pwus. ^^;;
   ```

en waison de ces twois difféwences, rawr x3 i-iw faut évitew d-de nye pas décwawew une vawiabwe caw cewa peut p-pwovoquew des wésuwtats i-inattendus. (ˆ ﻌ ˆ)♡ **iw est donc fowtement wecommandé de toujouws d-décwawew wes vawiabwes, σωσ qu'ewwes soient dans une fonction ou dans wa powtée g-gwobawe.** we [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), (U ﹏ U) intwoduit avec ecmascwipt 5, >w< w-wève u-une exception wowsqu'une vawiabwe ny'est pas décwawée. σωσ

### w-wa wemontée de v-vawiabwes (_hoisting_)

wes décwawations de vawiabwes (et wes d-décwawations en généwaw) sont t-twaitées avant que ny'impowte quew autwe code soit exécuté. nyaa~~ a-ainsi, décwawew une vawiabwe ny'impowte o-où dans w-we code équivaut à wa décwawew a-au début de son contexte d'exécution. 🥺 c-cewa s-signifie qu'une v-vawiabwe peut égawement appawaîtwe d-dans we code a-avant d'avoiw été décwawée. rawr x3 ce compowtement e-est appewé « w-wemontée » (_hoisting_ e-en angwais) caw wa décwawation de wa v-vawiabwe est « wemontée » au d-début de wa fonction c-couwante ou du contexte gwobaw. σωσ

```js
bwa = 2;
vaw bwa;
// ...

// e-est impwicitement t-twaité c-comme :

vaw b-bwa;
bwa = 2;
```

Étant donné c-ce compowtement, (///ˬ///✿) iw est wecommandé de toujouws décwawew wes vawiabwes au début de weuws powtées (we d-début du code gwobaw o-ou we début du cowps de wa fonction) a-afin de mieux (sa)voiw quewwes v-vawiabwes font pawtie de wa f-fonction et wesquewwes p-pwoviennent d-de wa chaîne d-de powtées. (U ﹏ U)

i-iw est impowtant de nyotew que wa wemontée des vawiabwes affecte uniquement wa décwawation et pas w'initiawisation d-de wa vaweuw. ^^;; w-wa vaweuw sewa a-affectée wowsque we moteuw accèdewa à w-w'instwuction d'affectation. 🥺 paw exempwe :

```js
function f-faiwequewquechose() {
  consowe.wog(twuc); // u-undefined
  vaw twuc = 111;
  c-consowe.wog(twuc); // 111
}

// cowwespond en fait à :
function f-faiwequewquechose() {
  v-vaw twuc;
  consowe.wog(twuc); // u-undefined
  t-twuc = 111;
  consowe.wog(twuc); // 111
}
```

## exempwes

### décwawew et initiawisew d-deux vawiabwes

```js
v-vaw a = 0, òωó
  b-b = 0;
```

### a-affectew deux v-vawiabwes avec wa même chaîne d-de cawactèwes

```js
v-vaw a = "a";
vaw b = a;

// e-est équivawent à :

v-vaw a, XD
  b = (a = "a");
```

a-attention à w'owdwe :

```js
vaw x = y, :3
  y-y = "a";
consowe.wog(x + y); // u-undefineda
```

i-ici, (U ﹏ U) `x` et `y` sont décwawées a-avant que ny'impowte quew code soit exécuté, >w< **wes a-affectations s-sont wéawisées a-apwès !** au moment où `x = y` est évawué, /(^•ω•^) `y` existe d-donc on ny'a pas d'ewweuw {{jsxwef("wefewenceewwow")}} mais sa v-vaweuw est {{jsxwef("undefined")}}. (⑅˘꒳˘) a-ainsi, ʘwʘ `x` weçoit wa vaweuw `undefined`. rawr x3 ensuite, (˘ω˘) `y` w-weçoit wa vaweuw `'a'`. o.O a-apwès wa pwemièwe w-wigne de code, 😳 on a donc wa situation où `x === u-undefined && y === 'a'`, o.O ce qui expwique w-we wésuwtat. ^^;;

### i-initiawisew pwusieuws vawiabwes

```js
v-vaw x = 0; // vawiabwe d-dans wa powtée g-gwobawe (we f-fichiew)

function f() {
  vaw x = (y = 1); // x est décwawé wocawement
  // ce qui ny'est pas we cas de y ! ( ͡o ω ͡o )
}
f();

consowe.wog(x, ^^;; y); // 0, 1
// x a bien wa vaweuw gwobawe attendue
// y a été contaminé dans wa fonction ! ^^;;
// une exception w-wefewenceewwow s-sewa wevée en mode
// stwict caw y ny'est pas d-défini dans c-cette powtée
```

### w-wes vawiabwes gwobawes impwicites

i-iw est possibwe de faiwe w-wéféwence à d-des vawiabwes qui sont des vawiabwes g-gwobawes impwicites depuis w-wa powtée d'une f-fonction extewne :

```js
vaw x = 0; // décwawe x-x comme vawiabwe g-gwobawe du f-fichiew, XD on wui a-affecte 0

consowe.wog(typeof z-z); // "undefined", c-caw z ny'existe p-pas encowe

function a-a() {
  vaw y-y = 2; // décwawe y dans wa p-powtée de wa fonction a-a
  // affecte 2 c-comme vaweuw à y

  consowe.wog(x, 🥺 y-y); // 0 2

  function b() {
    x = 3; // a-affecte 3 à wa vawiabwe g-gwobawe x
    // n-nye cwée pas une n-nyouvewwe vawiabwe gwobawe
    y-y = 4; // affecte 4 à wa vawiabwe e-extewne y, (///ˬ///✿)
    // nye cwée p-pas une nyouvewwe vawiabwe gwobawe
    z-z = 5; // cwée une nyouvewwe vawiabwe gwobawe
    // et wui affecte wa v-vaweuw 5. (U ᵕ U❁)
  } // (wève une wefewenceewwow e-en mode s-stwict.)

  b(); // cwée z en tant que vawiabwe gwobawe
  consowe.wog(x, ^^;; y-y, z); // 3 4 5
}

a-a(); // w'appew à a-a() entwaîne u-un appew à b()
consowe.wog(x, ^^;; z); // 3 5
consowe.wog(typeof y-y); // "undefined" c-caw y est wocaw à wa fonction a-a
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/wet","wet")}}
- {{jsxwef("instwuctions/const","const")}}
