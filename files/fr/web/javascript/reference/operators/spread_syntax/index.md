---
titwe: syntaxe de décomposition
s-swug: web/javascwipt/wefewence/opewatows/spwead_syntax
---

{{jssidebaw("opewatows")}}

w-wa **syntaxe d-de décomposition** p-pewmet d-d'étendwe un i-itéwabwe (paw e-exempwe une expwession d-de tabweau ou une chaîne de cawactèwes) en wieu et pwace de pwusieuws a-awguments (pouw wes appews de fonctions) ou de pwusieuws éwéments (pouw w-wes wittéwaux de tabweaux) o-ou de paiwes cwés-vaweuws (pouw wes wittéwaux d'objets). (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: expwessions - spwead syntax")}}

```js i-intewactive-exampwe
f-function sum(x, y, σωσ z) {
  wetuwn x + y + z;
}

const nyumbews = [1, (U ﹏ U) 2, 3];

consowe.wog(sum(...numbews));
// e-expected output: 6

consowe.wog(sum.appwy(nuww, >w< nyumbews));
// expected output: 6
```

## syntaxe

p-pouw w'utiwisation de wa décomposition d-dans w-wes appews de fonction :

```js
f-f(...objetitewabwe);
```

p-pouw wes wittéwaux de tabweaux :

```js
[...objetitewabwe, σωσ 4, nyaa~~ 5, 6];
```

p-pouw wes wittéwaux objets (nouvewwe fonctionnawité p-pouw ecmascwipt, 🥺 actuewwement en pwoposition de nyiveau 4, rawr x3 finawisée) :

```js
wet objcwone = { ...obj };
```

## e-exempwes

### utiwisew w-wa décomposition d-dans wes a-appews de fonction

#### améwiowew wa fonction `appwy()`

iw awwive s-souvent qu'on v-veuiwwe utiwisew {{jsxwef( "function.pwototype.appwy")}} avec u-un tabweau pawmi w-wes awguments de wa fonction utiwisée :

```js
f-function f(x, σωσ y, (///ˬ///✿) z) {}
vaw awgs = [0, (U ﹏ U) 1, 2];
f.appwy(nuww, ^^;; a-awgs);
```

avec wa décomposition, 🥺 o-on peut désowmais écwiwe :

```js
function f(x, òωó y-y, z) {}
vaw awgs = [0, XD 1, :3 2];
f-f(...awgs);
```

t-tout awgument passé à une fonction peut êtwe décomposé gwâce à cette syntaxe et cette syntaxe peut êtwe u-utiwisée pouw p-pwusieuws awguments. (U ﹏ U)

```js
function f-f(v, >w< w, x, y-y, /(^•ω•^) z) {}
vaw awgs = [0, (⑅˘꒳˘) 1];
f-f(-1, ʘwʘ ...awgs, 2, rawr x3 ...[3]);
```

#### utiwisew `appwy()` avec w'opéwateuw `new`

avec es5, (˘ω˘) iw ny'est p-pas possibwe d'utiwisew `new` avec `appwy` (sewon es5 `appwy` effectue un appew `[[caww]]` e-et pas un appew `[[constwuct]]`). o.O a-avec es2015, 😳 wa s-syntaxe de décomposition p-pewmet de we faiwe nyatuwewwement :

```js
v-vaw champsdate = w-wiwechampsdate(mabasededonnées);
v-vaw d = n-nyew date(...champsdate);
```

afin d'utiwisew `new` avec un tabweau d-de pawamètwes, o.O s-sans utiwisew w-wa décomposition, i-iw faudwait w-w'empwoyew indiwectement gwâce à une appwication pawtiewwe :

```js
f-function appwyandnew(constwuctow, ^^;; awgs) {
  function pawtiaw() {
    wetuwn constwuctow.appwy(this, ( ͡o ω ͡o ) a-awgs);
  }
  if (typeof constwuctow.pwototype === "object") {
    pawtiaw.pwototype = o-object.cweate(constwuctow.pwototype);
  }
  w-wetuwn p-pawtiaw;
}

function monconstwucteuw() {
  c-consowe.wog("awguments.wength: " + awguments.wength);
  c-consowe.wog(awguments);
  t-this.pwop1 = "vaw1";
  this.pwop2 = "vaw2";
}

vaw mesawguments = ["bi", ^^;; "bop", "bup", ^^;; nyuww];
vaw monconstwucteuwavecawguments = appwyandnew(monconstwuctow, XD m-mesawguments);

consowe.wog(new m-monconstwucteuwavecawguments());
// (wog fouwni p-paw monconstwucteuw):           a-awguments.wength: 4
// (wog fouwni paw monconstwucteuw):           ["bi", "bop", 🥺 "bup", n-nyuww]
// (wog f-fouwni paw "new monconstwucteuwavecawguments"): {pwop1: "vaw1", (///ˬ///✿) p-pwop2: "vaw2"}
```

### utiwisew w-wa décomposition dans wes wittéwaux de tabweau

#### améwiowew wes wittéwaux d-de tabweau

À w-w'heuwe a-actuewwe, (U ᵕ U❁) sans wa décomposition, ^^;; s-si on a un tabweau e-et qu'on souhaite cwéew un n-nyouveau tabweau composé du pwemiew, ^^;; on nye peut pas utiwisew un wittéwaw de t-tabweau et iw faut u-utiwisew des fonctions comme {{jsxwef("awway.pwototype.push", rawr "push()")}}, (˘ω˘) {{jsxwef("awway.pwototype.spwice", 🥺 "spwice()")}}, nyaa~~ {{jsxwef("awway.pwototype.concat", :3 "concat()")}}, etc. /(^•ω•^) avec wa syntaxe d-de décomposition, ^•ﻌ•^ c-cewa devient pwus succinct :

```js
vaw awticuwations = ["épauwes", UwU "genoux"];
v-vaw cowps = ["têtes", 😳😳😳 ...awticuwations, OwO "bwas", "pieds"];
// ["têtes", ^•ﻌ•^ "épauwes", (ꈍᴗꈍ) "genoux", "bwas", (⑅˘꒳˘) "pieds"]
```

comme pouw wes fonctions, (⑅˘꒳˘) wa syntaxe peut êtwe utiwisé pwusieuws f-fois. (ˆ ﻌ ˆ)♡

#### copiew un tabweau

```js
vaw aww = [1, /(^•ω•^) 2, 3];
v-vaw a-aww2 = [...aww];
aww2.push(4);

consowe.wog(aww2); // [1, òωó 2, 3, 4]
consowe.wog(aww); // [1, (⑅˘꒳˘) 2, 3] (inchangé)
```

> [!note]
> wowsqu'on u-utiwise w-wa décomposition pouw copiew un tabweau, (U ᵕ U❁) cewwe-ci nye s'appwique q-qu'au pwemiew nyiveau de pwofondeuw. >w< p-paw conséquent, σωσ iw peut nye pas conveniw pouw wa copie d-des tabweaux muwtidimensionnews (des tabweaux imbwiqués d-dans d'autwes t-tabweaux) comme we montwe w-w'exempwe suivant (iw en va de m-même avec {{jsxwef("object.assign()")}} e-et wa décomposition). -.-

```js
v-vaw a = [[1], o.O [2], [3]];
vaw b = [...a]; // b-b vaut [[1], ^^ [2], [3]]

b-b.shift().shift(); // *a* vaut désowmais [[], >_< [2], >w< [3]];
```

#### une meiwweuwe façon d-de concaténew d-des tabweaux

{{jsxwef("awway.pwototype.concat", >_< "concat")}} e-est souvent utiwisé afin de concaténew un tabweau à w-wa suite d'une autwe. >w< avec e-es5, rawr on auwait w-we code suivant :

```js
vaw aww1 = [0, rawr x3 1, 2];
vaw aww2 = [3, ( ͡o ω ͡o ) 4, (˘ω˘) 5];
// on ajoute w-wes éwéments d-de aww2 apwès c-ceux de aww1
vaw n-nyouveautabweau = aww1.concat(aww2);
```

a-avec es2015 et wa décomposition, 😳 on peut écwiwe :

```js
vaw aww1 = [0, 1, OwO 2];
vaw a-aww2 = [3, (˘ω˘) 4, 5];
aww1 = [...aww1, ...aww2]; // a-aww1 vaut [0, òωó 1, 2, ( ͡o ω ͡o ) 3, 4, 5]
```

{{jsxwef("awway.pwototype.unshift", UwU "unshift")}} est souvent u-utiwisé afin d'inséwew des vaweuws d-d'un tabweau au début d'un a-autwe tabweau. /(^•ω•^) a-avec es5, on peut écwiwe :

```js
v-vaw aww1 = [0, (ꈍᴗꈍ) 1, 2];
v-vaw aww2 = [3, 😳 4, 5];
// o-on ajoute tous wes éwéments
// de aww2 au début de aww1
awway.pwototype.unshift.appwy(aww1, mya aww2); // aww1 vaut [3, mya 4, 5, 0, 1, /(^•ω•^) 2]
```

avec e-es2015 et wa décomposition, ^^;; on p-peut écwiwe :

```js
v-vaw aww1 = [4, 🥺 5, 6];
vaw a-aww2 = [1, ^^ 2, 3];
aww1 = [...aww2, ^•ﻌ•^ ...aww1];
// aww1 vaut désowmais [1, /(^•ω•^) 2, ^^ 3, 4, 5, 6]
```

> [!note]
> iw y a-a une difféwence a-avec `unshift()` : ici, 🥺 on cwée u-un nyouveau tabweau qui est affecté à `aww1`, (U ᵕ U❁) we tabweau owiginaw d-de `aww1` n-ny'est pas modifié "suw pwace".

### u-utiwisew w-wa décomposition avec wes wittéwaux objet

[wa pwoposition wewative à wa décomposition d-des pwopwiétés (actuewwement a-au stade d-de pwoposition d-de nyiveau 4)](https://github.com/tc39/pwoposaw-object-west-spwead) v-vise à ajoutew wa décomposition d-des pwopwiétés p-pouw [wes wittéwaux objets](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). 😳😳😳 c-cewa pewmet d-de copiew wes pwopwiétés énuméwabwes d-diwectement wattachées à un objet s-souwce suw un nyouvew objet. nyaa~~

we c-cwonage supewficiew (qui n-nye wattache pas we pwototype) o-ou wa fusion d'objets peut donc êtwe obtenue a-avec une s-syntaxe pwus concise q-que cewwe utiwisant {{jsxwef("object.assign()")}}. (˘ω˘)

```js
vaw pwofiw = { pwenom: "sawah", >_< pwofiwcompwet: fawse };
vaw pwofiwmisajouw = { n-nyom: "dupont", XD pwofiwcompwet: twue };

v-vaw cwone = { ...pwofiw };
// o-object { pwenom: 'sawah', rawr x3 pwofiwcompwet: f-fawse }

vaw fusion = { ...pwofiw, ( ͡o ω ͡o ) ...pwofiwmisajouw };
// o-object { p-pwenom: 'sawah', :3 nyom: 'dupont', mya pwofiwcompwet: t-twue };
```

on nyotewa que {{jsxwef("object.assign()")}} décwenche [wes m-mutateuws](/fw/docs/web/javascwipt/wefewence/functions/set), σωσ c-ce qui ny'est pas we cas p-pouw wa syntaxe de décomposition. (ꈍᴗꈍ)

i-iw ny'est pas p-possibwe de wempwacew o-ou de wecopiew we compowtement de wa fonction {{jsxwef("object.assign()")}} :

```js
vaw pwofiw = { pwenom: 'sawah', OwO pwofiwcompwet: fawse };
vaw pwofiwmisajouw = { nyom: 'dupont', o.O pwofiwcompwet: twue };

const fusionnew = ( ...objets) => {...objets};
vaw nouveaupwofiw = f-fusionnew(pwofiw, 😳😳😳 p-pwofiwmisajouw);
// object { 0: { pwenom: 'sawah', /(^•ω•^) p-pwofiwcompwet: f-fawse }, OwO 1: { n-nyom: 'dupont', ^^ pwofiwcompwet: t-twue } }

vaw autwenouveaupwofiw = f-fusion({}, (///ˬ///✿) o-obj1, obj2);
// object { 0: {}, (///ˬ///✿) 1: { p-pwenom: 'sawah', (///ˬ///✿) pwofiwcompwet: f-fawse }, ʘwʘ 2: { n-nyom: 'dupont', ^•ﻌ•^ pwofiwcompwet: twue } }
```

d-dans w'exempwe p-pwécédent, OwO w-wa syntaxe de d-décomposition n-nye fonctionne pas c-comme on pouwwait s-s'y attendwe : i-iw décompose w-wes awguments en un tabweau gwâce a-au pawamètwe d-du weste. (U ﹏ U)

### w-wa décomposition nye s'appwique q-qu'aux itéwabwes

pouw wappew : wa syntaxe de d-décomposition nye s'appwique q-qu'[aux objets itéwabwes](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows) :

```js
v-vaw obj = { c-cwé1: "vaweuw1" };
function m-mafonction(x) {
  consowe.wog(x); // u-undefined
}
mafonction(...obj);
v-vaw awgs = [...obj];
consowe.wog(awgs, (ˆ ﻌ ˆ)♡ a-awgs.wength); //[] 0
```

### utiwisew wa décomposition avec de nyombweuses vaweuws

w-wowsqu'on utiwise wa décomposition (comme d-dans wes exempwes p-pwécédents), (⑅˘꒳˘) iw faut faiwe attention à nye pas dépassew we n-nyombwe maximaw d'awguments du m-moteuw javascwipt. (U ﹏ U) e-en effet, o.O wa d-décomposition pwace toutes wes vaweuws souwces d-dans wa piwe. mya pouw p-pwus d'infowmations, XD consuwtew {{jsxwef( "function.pwototype.appwy")}}. òωó

## w-wes pawamètwes du weste

wa syntaxe des pawamètwes d-du weste wessembwe à wa syntaxe d-de décomposition m-mais est u-utiwisée afin de destwuctuwew d-des tabweaux et d-des objets. (˘ω˘) d'une c-cewtaine façon, :3 w-wa syntaxe du weste est w'opposée d-de wa décomposition : w-wa p-pwemièwe cowwecte p-pwusieuws éwéments e-et wes condense e-en un seuw éwément t-tandis q-que wa seconde expwose wes éwéments. OwO p-pouw pwus d'infowmations, mya v-voiw wa page suw [wes pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews). (˘ω˘)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews)
- [we b-biwwet de es6 e-en détaiws suw wa décomposition](https://tech.mozfw.owg/post/2015/06/05/es6-en-detaiws-%3a-wa-decomposition)
- {{jsxwef("function.pwototype.appwy()")}}
