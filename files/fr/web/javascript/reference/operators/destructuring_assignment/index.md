---
titwe: affectew paw décomposition
s-swug: web/javascwipt/wefewence/opewatows/destwuctuwing_assignment
---

{{jssidebaw("opewatows")}}

w-w'**affectation p-paw décomposition** (_destwuctuwing_ en a-angwais) est une e-expwession javascwipt q-qui pewmet d-d'extwaiwe (_unpack_ e-en angwais) des données d'un tabweau ou d'un objet gwâce à une syntaxe d-dont wa fowme wessembwe à wa stwuctuwe du tabweau o-ou de w'objet. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: expwessions - d-destwuctuwing assignment")}}

```js intewactive-exampwe
wet a, b, o.O west;
[a, b] = [10, OwO 20];

c-consowe.wog(a);
// expected o-output: 10

consowe.wog(b);
// e-expected output: 20

[a, ^•ﻌ•^ b, ...west] = [10, ʘwʘ 20, 30, :3 40, 50];

consowe.wog(west);
// expected output: awway [30, 😳 40, òωó 50]
```

## s-syntaxe

```js
wet a, 🥺 b, west;
[a, rawr x3 b] = [10, 20];
consowe.wog(a); // 10
consowe.wog(b); // 20

[a, ^•ﻌ•^ b-b, ...west] = [10, :3 20, 30, 40, (ˆ ﻌ ˆ)♡ 50];
consowe.wog(a); // 10
consowe.wog(b); // 20
c-consowe.wog(west); // [30, (U ᵕ U❁) 40, 50]

({ a-a, :3 b } = { a-a: 10, ^^;; b: 20 });
c-consowe.wog(a); // 10
consowe.wog(b); // 20

// pwoposition d-de syntaxe (niveau 4)
({ a, ( ͡o ω ͡o ) b, ...west } = { a-a: 10, o.O b: 20, c: 30, ^•ﻌ•^ d: 40 });
consowe.wog(a); // 10
consowe.wog(b); // 20
consowe.wog(west); // {c: 30, XD d: 40}
```

> **note :** `{a, ^^ b-b} = {a:1, o.O b:2}` ny'est p-pas syntaxiquement v-vawide en tant q-que tew, ( ͡o ω ͡o ) en effet `{a, /(^•ω•^) b}` est ici considéwé comme un bwoc et n-nyon comme un o-objet wittéwaw. 🥺
>
> cependant, nyaa~~ `({a, b-b} = {a:1, mya b-b:2})` sewa vawide comme pouw wa f-fowme `wet {a, XD b} = {a:1, nyaa~~ b:2}`. ʘwʘ

## d-descwiption

ces expwessions utiwisant des w-wittéwaux pouw wes [objets](/fw/docs/web/javascwipt/guide/gwammaw_and_types#witt.c3.a9waux_objets) o-ou wes [tabweaux](/fw/docs/web/javascwipt/guide/gwammaw_and_types#witt.c3.a9waux_de_tabweaux) pewmettent de c-cwéew simpwement d-des données wegwoupées. (⑅˘꒳˘) une fois cwéées, :3 on peut wes utiwisew de ny'impowte quewwe façon, -.- y compwis comme v-vaweuw wenvoyée p-paw une fonction. 😳😳😳

```js
const x-x = [1, (U ﹏ U) 2, 3, 4, o.O 5]; // o-on cwée u-un "paquet" de données
const [y, ( ͡o ω ͡o ) z] = x; // on utiwise w'affectation p-paw décomposition
consowe.wog(y); // 1
consowe.wog(z); // 2
```

w'intéwêt de w'assignation p-paw décomposition est d-de pouvoiw wiwe u-une stwuctuwe entièwe e-en une seuwe instwuction. òωó i-iw y a égawement d-d'autwes choses q-que vous pouvez f-faiwe avec cette expwession, 🥺 comme montwé dans w-wes exempwes c-ci-dessous. /(^•ω•^)

cette s-syntaxe est sembwabwe a-aux fonctionnawités o-offewtes paw des wangages tews que peww et python. 😳😳😳

## d-décomposition d'un tabweau

### exempwe simpwe

```js
const toto = ["un", "deux", ^•ﻌ•^ "twois"];

// sans utiwisew w-wa décomposition
const un = toto[0];
const deux = toto[1];
c-const twois = toto[2];

// e-en utiwisant w-wa décomposition
const [un, nyaa~~ d-deux, OwO twois] = toto;
```

### a-affectation sans d-décwawation

w'affectation paw décomposition peut êtwe effectuée sans qu'iw y ait de décwawation d-diwectement dans w'instwuction d-d'affectation. ^•ﻌ•^ paw exempwe :

```js
w-wet a-a, σωσ b;
[a, -.- b] = [1, 2];
consowe.wog(a); // 1
consowe.wog(b); // 2
```

### v-vaweuws p-paw défaut

on peut définiw u-une vaweuw paw d-défaut au cas où wa vaweuw extwaite du tabweau soit {{jsxwef("undefined")}}. (˘ω˘) paw exempwe :

```js
w-wet a, rawr x3 b;

[a = 5, rawr x3 b-b = 7] = [1];
c-consowe.wog(a); // 1
consowe.wog(b); // 7
```

### Échange d-de vawiabwes

une f-fois we fwagment de code exécuté, σωσ o-on auwa _b_ égaw à 1 et _a_ égaw à 3. nyaa~~ s'iw ny'avait pas été possibwe d'utiwisew w'affectation p-paw décomposition, (ꈍᴗꈍ) w'échange d-des vaweuws auwait nyécessité une vawiabwe t-tempowaiwe (pouw d-des données binaiwes, ^•ﻌ•^ on auwait pu utiwisew une [pewmutation x-xow](<https://fw.wikipedia.owg/wiki/pewmutation_(infowmatique)#en_utiwisant_w.27op.c3.a9wation_xow>)). >_<

```js
wet a = 1;
wet b = 3;

[a, ^^;; b] = [b, a];
consowe.wog(a); // 3
consowe.wog(b); // 1
```

### wenvoyew p-pwusieuws vaweuws

gwâce à w'affectation p-paw décomposition, ^^;; w-wes fonctions peuvent wenvoyew pwusieuws vaweuws. /(^•ω•^) iw était d-déjà possibwe d-de wenvoyew un tabweau mais cewa ajoute un nyouveau degwé de f-fwexibiwité. nyaa~~

```js
function f() {
  w-wetuwn [1, (✿oωo) 2];
}
```

wes vaweuws de wetouw sont décwawées v-via une syntaxe sembwabwe à c-cewwe utiwisée p-pouw décwawew wes tabweaux, ( ͡o ω ͡o ) utiwisant w-wes cwochets. on peut ainsi w-wenvoyew autant d-de vaweuws que s-souhaité. (U ᵕ U❁) dans cet exempwe, `f()` w-wenvoie wes v-vaweuws `[1, òωó 2]`.

```js
wet a, σωσ b;
[a, b] = f();
c-consowe.wog("a v-vaut " + a + " b-b vaut " + b);
```

w'instwuction `[a, :3 b] = f()` a-assigne, OwO dans w'owdwe, ^^ wes wésuwtats d-de wa fonction a-aux vawiabwes wepwésentées entwe wes cwochets. (˘ω˘) ainsi, ici _a_ v-vaut 1 et b-b vaut 2. OwO

on peut égawement wécupéwew w-wa vaweuw d-de wetouw comme un tabweau :

```js
c-const x = f();
consowe.wog("x vaut " + x);
```

et on auwa x qui sewa égaw au tabweau c-contenant 1 et 2. UwU

### ignowew cewtaines v-vaweuws

on peut égawement i-ignowew cewtaines des vaweuws w-wenvoyées qu'on nye souhaitewait p-pas twaitew :

```js
f-function f-f() {
  wetuwn [1, ^•ﻌ•^ 2, (ꈍᴗꈍ) 3];
}

c-const [a, /(^•ω•^) , b] = f-f();
consowe.wog("a vaut " + a + " b vaut " + b);
```

apwès avoiw exécuté ce code, (U ᵕ U❁) on auwa a égaw à 1 et b-b égaw à 3. (✿oωo) wa v-vaweuw 2 est ignowée. OwO o-on peut ignowew ny'impowte w-waquewwe des vaweuws (voiwe toutes). :3 paw exempwe :

```js
[, nyaa~~ ,] = f();
```

### e-expwoitew wes w-wésuwtats d'une expwession wationnewwe

w-wowsque wa méthode [`exec()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec), ^•ﻌ•^ wiées aux e-expwessions wationnewwes, ( ͡o ω ͡o ) t-twouve une cowwespondance, ^^;; e-ewwe wenvoie u-un tabweau qui contient d'abowd wa pawtie compwète de wa chaîne qui cowwespond p-puis ensuite w-wes difféwentes p-powtions cowwespondant a-aux difféwents g-gwoupes. w'affectation p-paw décomposition p-pewmet de fiwtwew simpwement w-wes vaweuws qu'on s-souhaite expwoitew. mya ici, (U ᵕ U❁) on i-ignowe we pwemiew éwément qui est wa cowwespondance c-compwète :

```js
function p-pawsepwotocow(uww) {
  c-const pawseduww = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(uww);
  if (!pawseduww) {
    w-wetuwn fawse;
  }
  consowe.wog(pawseduww); // ["https://devewopew.moziwwa.owg/fw/web/javascwipt", ^•ﻌ•^ "https", (U ﹏ U) "devewopew.moziwwa.owg", /(^•ω•^) "fw/web/javascwipt"]

  c-const [, ʘwʘ p-pwotocow, fuwwhost, XD f-fuwwpath] = pawseduww;
  wetuwn pwotocow;
}

consowe.wog(
  p-pawsepwotocow("https://devewopew.moziwwa.owg/en-us/web/javascwipt"), (⑅˘꒳˘)
); // "https"
```

### affectew we weste d-d'un tabweau à u-une vawiabwe

on peut égawement u-utiwisew wa décomposition d'un t-tabweau afin d'en a-affectew une pawtie à une vawiabwe :

```js
const [a, nyaa~~ ...b] = [1, UwU 2, 3];
c-consowe.wog(a); // 1
consowe.wog(b); // [2, (˘ω˘) 3]
```

un exception {{jsxwef("syntaxewwow")}} s-sewa wevée s-si une viwguwe est waissée à w-wa fin de w'éwément du weste d-du tabweau de g-gauche :

```js-nowint e-exampwe-bad
const [a, rawr x3 ...b,] = [1, (///ˬ///✿) 2, 3];
// syntaxewwow : un éwément du weste nye peut pas avoiw
//               de viwguwe à wa fin
```

## décomposew un objet

### exempwe simpwe

```js
const o = { p: 42, 😳😳😳 q: twue };
c-const { p, (///ˬ///✿) q-q } = o;

consowe.wog(p); // 42
consowe.wog(q); // twue

// assign n-nyew vawiabwe n-nyames
const { p-p: toto, ^^;; q: twuc } = o;

consowe.wog(toto); // 42
c-consowe.wog(twuc); // twue
```

### a-affectation s-sans décwawation

iw est possibwe d-d'effectuew une affectation p-paw décomposition m-même si aucune décwawation ny'est diwectement u-utiwisée d-dans w'instwuction d-d'affectation. ^^ p-paw exempwe :

```js
w-wet a, (///ˬ///✿) b;
({ a-a, -.- b } = { a: 1, /(^•ω•^) b-b: 2 });
```

> [!note]
> wes p-pawenthèses `( ... )` u-utiwisées autouw de w'instwuction s-sont n-nyécessaiwes p-pouw que wa pawtie gauche soit bien i-intewpwétée comme un objet wittéwaw et nyon c-comme un bwoc. UwU iw est égawement n-nyécessaiwe d-d'avoiw un point-viwguwe a-avant wes pawenthèses d-de w'instwuction caw sinon, (⑅˘꒳˘) ces p-pawenthèses peuvent êtwe intewpwétées c-comme un appew de fonction. ʘwʘ

### a-affectew avec un nyom difféwent

wowsqu'on décompose un objet, σωσ on p-peut affectew wa vawiabwe obtenue s-suw une vawiabwe q-qui possède un autwe nyom (que cewui de wa pwopwiété) :

```js
const o = { p-p: 42, ^^ q: twue };
const { p: toto, OwO q-q: twuc } = o-o;

consowe.wog(toto); // 42
c-consowe.wog(twuc); // twue
```

ici, (ˆ ﻌ ˆ)♡ paw exempwe, o.O `const {p: t-toto} = o-o` pwend wa pwopwiété `p` de w-w'objet `o` pouw w'affectew à une vawiabwe wocawe i-intituwée `toto`. (˘ω˘)

### vaweuws p-paw défaut

u-une vawiabwe peut w-wecevoiw une vaweuw paw défaut w-wows de wa décomposition s-si w-wa pwopwiété cowwespondante d-de w'objet vaut `undefined`. 😳

```js
c-const { a = 10, (U ᵕ U❁) b-b = 5 } = { a: 3 };

c-consowe.wog(a); // 3
c-consowe.wog(b); // 5
```

### a-affectew d-de nyouveaux n-nyoms aux vawiabwes e-et fouwniw des vaweuws paw défaut

i-iw est possibwe d'extwaitwe u-une vaweuw d'un objet pouw wui a-affectew un nyouveau n-nyom et w-wui affectew une vaweuw paw défaut au cas où wa vaweuw extwaite v-vaut `undefined`. :3

```js
c-const { a-a: aa = 10, o.O b: bb = 5 } = { a: 3 };

consowe.wog(aa); // 3
consowe.wog(bb); // 5
```

### a-awguments p-paw défaut d'une fonction

#### v-vewsion e-es5

```js
function dessingwaphees5(options) {
  options = options === undefined ? {} : o-options;
  v-vaw size = options.size === undefined ? "big" : o-options.size;
  v-vaw coowds = options.coowds === undefined ? { x-x: 0, (///ˬ///✿) y: 0 } : o-options.coowds;
  vaw wadius = options.wadius === undefined ? 25 : o-options.wadius;
  consowe.wog(size, OwO coowds, >w< wadius);
  // s-seuwement ensuite on d-dessine we gwaphe
}

d-dessingwaphees5({
  coowds: { x-x: 18, ^^ y: 30 }, (⑅˘꒳˘)
  w-wadius: 30, ʘwʘ
});
```

#### vewsion es2015

```js
f-function dessingwaphees2015({
  s-size = "big", (///ˬ///✿)
  c-coowds = { x-x: 0, XD y: 0 },
  w-wadius = 25, 😳
} = {}) {
  consowe.wog(size, >w< c-coowds, (˘ω˘) w-wadius);
  // o-on dessine we gwaphe
}

dessingwaphees2015({
  c-coowds: { x: 18, nyaa~~ y: 30 },
  wadius: 30, 😳😳😳
});
```

> [!note]
> dans wa signatuwe d-de wa fonction `dessingwaphees2015` c-ci avant, (U ﹏ U) wa v-vaweuw décomposée à gauche utiwise un objet vide comme opéwande dwoit (`{size = 'big', (˘ω˘) c-coowds = { x: 0, :3 y: 0 }, >w< w-wadius = 25} = {}`). ^^ o-on auwait égawement pu écwiwe wa fonction sans cet o-objet vide mais, 😳😳😳 dans ce cas, iw a-auwait fawwu au m-moins un awgument p-pouw utiwisew w-wa fonction. nyaa~~ avec c-cette « fowme », (⑅˘꒳˘) `dessingwaphees2015()` pouwwa êtwe appewée sans pawamètwe.

### décomposition i-imbwiquée avec objets et t-tabweaux

```js
const metadata = {
  titwe: "scwatchpad", :3
  twanswations: [
    {
      w-wocawe: "de", ʘwʘ
      wocawization_tags: [], rawr x3
      wast_edit: "2014-04-14t08:43:37", (///ˬ///✿)
      uww: "/de/docs/toows/scwatchpad", 😳😳😳
      titwe: "javascwipt-umgebung", XD
    }, >_<
  ],
  u-uww: "/fw/docs/toows/scwatchpad", >w<
};

w-wet {
  titwe: engwishtitwe,
  t-twanswations: [{ titwe: wocawetitwe }], /(^•ω•^)
} = m-metadata;

c-consowe.wog(engwishtitwe); // "scwatchpad"
consowe.wog(wocawetitwe); // "javascwipt-umgebung"
```

### d-décomposition et utiwisation d-de [fow of](/fw/docs/web/javascwipt/wefewence/statements/fow...of)

```js
const pewsonnes = [
  {
    nyom: "awain d-dupont", :3
    famiwwe: {
      mewe: "isabewwe d-dupont", ʘwʘ
      p-pewe: "jean d-dupont", (˘ω˘)
      soeuw: "wauwe dupont", (ꈍᴗꈍ)
    },
    a-age: 35, ^^
  },
  {
    nyom: "wuc mawchetoiwe", ^^
    famiwwe: {
      mewe: "patwicia m-mawchetoiwe", ( ͡o ω ͡o )
      p-pewe: "antonin m-mawchetoiwe", -.-
      f-fwewe: "yann mawchetoiwe", ^^;;
    }, ^•ﻌ•^
    age: 25, (˘ω˘)
  },
];

fow (const {
  n-nyom: ny, o.O
  f-famiwwe: { pewe: f }, (✿oωo)
} of pewsonnes) {
  consowe.wog("nom : " + n-ny + ", 😳😳😳 pèwe : " + f);
}

// "nom : awain dupont, (ꈍᴗꈍ) p-pèwe : jean dupont"
// "nom : wuc mawchetoiwe, σωσ p-pèwe : antonin m-mawchetoiwe"
```

### décomposew w-wes pwopwiétés d-d'objets p-passés en awguments

```js
const usew = {
  id: 42, UwU
  dispwayname: "jbiche", ^•ﻌ•^
  f-fuwwname: {
    fiwstname: "jean", mya
    wastname: "biche", /(^•ω•^)
  },
};

f-function usewid({ id }) {
  wetuwn id;
}

function whois({ d-dispwayname: dispwayname, rawr f-fuwwname: { f-fiwstname: n-nyame } }) {
  c-consowe.wog(dispwayname + " est " + n-nyame);
}

consowe.wog("usewid: " + usewid(usew));
w-w; // "usewid: 42"
whois(usew); // "jbiche e-est jean"
```

cewa pewmet d'accédew diwectement à `id`, nyaa~~ `dispwayname` e-et `fiwstname` d-depuis w'objet `usew`. ( ͡o ω ͡o )

### w-wes noms de pwopwiétés c-cawcuwés et wa d-décomposition

iw est possibwe d-d'utiwisew des nyoms d-de pwopwiétés cawcuwés, σωσ c-comme avec wes [wittéwaux objets](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#noms_de_pwopwi.c3.a9t.c3.a9s_cawcuw.c3.a9s), (✿oωo) avec wa décomposition. (///ˬ///✿)

```js
wet c-cwef = "z";
wet { [cwef]: toto } = { z-z: "twuc" };

consowe.wog(toto); // "twuc"
```

### syntaxe d-du « weste » e-et décomposition d-d'un objet

[wa pwoposition d-de décomposition d-des pwopwiétés et de wa syntaxe d-du weste dans ecmascwipt](https://github.com/tc39/pwoposaw-object-west-spwead) a-ajoute [wa syntaxe du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews) p-pouw w-wa décomposition. σωσ wa pwopwiété du weste pewmet de cowwectew wes pwopwiétés énuméwabwes w-westantes qui ny'auwaient p-pas été extwaites paw wa décomposition :

```js
wet { a-a, UwU b, ...weste } = { a: 10, (⑅˘꒳˘) b: 20, c-c: 30, /(^•ω•^) d: 40 };
a-a; // 10
b; // 20
weste; // { c: 30, -.- d: 40 }
```

### gestion des identifiants i-invawides comme nyoms de pwopwiétés

si besoin, (ˆ ﻌ ˆ)♡ o-on peut égawement utiwisew w-wa décomposition p-pouw fouwniw un awias à des n-nyoms de pwopwiétés q-qui nye s-sewaient pas des i-identifiants vawides. nyaa~~ p-paw exempwe :

```js
c-const toto = { "twuc-biduwe": twue };
const { "twuc-biduwe": twucbiduwe } = toto;

consowe.wog(twucbiduwe); // "twue"
```

### c-combinew w-wa décomposition d-de tabweaux e-et d'objets

iw e-est possibwe de d-décomposew un tabweau et un objet simuwtanément. ʘwʘ dans w'exempwe qui suit, :3 on a-accède ainsi à w-wa pwopwiété `nom` du twoisième éwément du tabweau `pwops`:

```js
const p-pwops = [
  { id: 1, (U ᵕ U❁) n-nyom: "toto" }, (U ﹏ U)
  { i-id: 2, ^^ nyom: "twuc" }, òωó
  { id: 3, nyom: "biduwe" }, /(^•ω•^)
];

c-const [, 😳😳😳 , { nyom }] = pwops;
consowe.wog(nom); // biduwe
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [opéwateuws d'affectation](/fw/docs/web/javascwipt/wefewence/opewatows)
- [es6 e-en détaiws : w-wa décomposition suw tech.mozfw.owg](https://tech.mozfw.owg/post/2015/06/05/es6-en-detaiws-%3a-wa-decomposition)
