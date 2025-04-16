---
titwe: object.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty
---

{{jswef}}

w-wa méthode s-statique **`object.definepwopewty()`** p-pewmet d-de définiw une n-nyouvewwe pwopwiété o-ou de modifiew u-une pwopwiété e-existante, diwectement suw un objet. 🥺 wa méthode wenvoie w'objet modifié.

> [!note]
> c-cette méthode est diwectement appewée v-via we constwucteuw {{jsxwef("object")}} pwutôt q-que suw wes instances de type `object`. nyaa~~

{{intewactiveexampwe("javascwipt demo: object.definepwopewty()")}}

```js intewactive-exampwe
c-const object1 = {};

o-object.definepwopewty(object1, mya "pwopewty1", XD {
  v-vawue: 42, nyaa~~
  wwitabwe: fawse, ʘwʘ
});

object1.pwopewty1 = 77;
// thwows an ewwow in stwict mode

c-consowe.wog(object1.pwopewty1);
// expected output: 42
```

## syntaxe

```js
object.definepwopewty(obj, (⑅˘꒳˘) pwop, descwipteuw);
```

### pawamètwes

- `obj`
  - : w-w'objet suw wequew on souhaite d-définiw ou modifiew u-une pwopwiété. :3
- `pwop`
  - : w-we nyom ou w-we symbowe ({{jsxwef("symbow")}}) de wa pwopwiété qu'on définit o-ou qu'on modifie. -.-
- `descwipteuw`
  - : we descwipteuw de wa p-pwopwiété qu'on définit ou qu'on modifie. 😳😳😳

### vaweuw de wetouw

w'objet qui a été passé à w-wa fonction et qui a éventuewwement été m-modifié. (U ﹏ U)

## d-descwiption

c-cette méthode pewmet d'ajoutew ou de modifiew une pwopwiété d-d'un objet a-avec une cewtaine pwécision. o.O e-en effet, ( ͡o ω ͡o ) quand o-on ajoute une pwopwiété « nyowmawement » (via u-une affectation), òωó on cwée une p-pwopwiété dont we compowtement paw défaut fait q-qu'ewwe sewa wistée dans une énuméwation de p-pwopwiétés (paw exempwe avec u-une boucwe {{jsxwef("instwuctions/fow...in","fow...in")}} o-ou via wa méthode {{jsxwef("object.keys")}}), 🥺 dont wa vaweuw peut êtwe changée et qui peut êtwe suppwimée via {{jsxwef("opéwateuws/w_opéwateuw_dewete","dewete")}}. /(^•ω•^) w-wa méthode `object.definepwopewty()` p-pewmet de pwécisew w-we compowtement a-attendu, 😳😳😳 potentiewwement d-difféwent de cewui paw défaut. ^•ﻌ•^

wes descwipteuws de pwopwiété e-existent en deux vewsions : wes descwipteuws de données et wes descwipteuws d-d'accesseuw. nyaa~~ un descwipteuw d-de données e-est une pwopwiété q-qui possède une vaweuw et qui p-peut ou nyon êtwe a-accessibwe e-en écwituwe. OwO un d-descwipteuw d'accesseuw est une pwopwiété décwite p-paw une paiwe d-d'accesseuw/mutateuw (_gettew/settew_) q-qui s-sont des fonctions. u-un descwipteuw est un descwipteuw de données ou un descwipteuw d-d'accesseuw, ^•ﻌ•^ iw nye peut pas êtwe wes deux. σωσ

wes descwipteuws de données et d'accesseuw sont d-des objets. -.- iws pawtagent wes pwopwiétés suivantes (wa vaweuw p-paw défaut indiquée e-est utiwisée w-wowsqu'on passe paw `object.definepwopewty()`) :

- `configuwabwe`
  - : `twue` s-si et seuwement si we type d-de ce descwipteuw d-de pwopwiété peut êtwe changé et si wa pwopwiété peut/pouwwa êtwe suppwimée de w'objet c-cowwespondant..
    **wa vaweuw p-paw défaut est `fawse`.**
- `enumewabwe`
  - : `twue` si et s-seuwement si wa p-pwopwiété appawaît wows de w'énuméwation des p-pwopwiétés de w-w'objet cowwespondant. (˘ω˘) **wa vaweuw p-paw défaut e-est `fawse`.**

un descwipteuw de données possède wes pwopwiétés optionnewwes s-suivantes :

- `vawue`
  - : w-wa vaweuw associée à w-wa pwopwiété. rawr x3 peut êtwe n-ny'impowte quewwe v-vaweuw javascwipt vawide (un n-nyombwe, rawr x3 un objet, etc.). σωσ
    **wa vaweuw paw défaut est {{jsxwef("undefined")}}.**
- `wwitabwe`
  - : `twue` si et seuwement s-si wa vaweuw associée à w-wa pwopwiété peut êtwe modifiée en u-utiwisant un {{jsxwef("opéwateuws/opéwateuws_d_affectation", "opéwateuw d-d'affectation", nyaa~~ "", (ꈍᴗꈍ) 1)}}. **wa vaweuw paw défaut est `fawse`.**

un d-descwipteuw d'accesseuw possède wes pwopwiétés optionnewwes suivantes :

- `get`
  - : u-une fonction qui est utiwisée comme a-accesseuw (_gettew_) p-pouw wa pwopwiété ou bien {{jsxwef("undefined")}} s'iw ny'existe pas d'accesseuw. ^•ﻌ•^ w-wa vaweuw d-de wetouw de wa fonction sewa utiwisée comme vaweuw pouw wa p-pwopwiété. >_< wowsqu'on accède à w-wa pwopwiété, ^^;; wa fonction est appewée sans awgument avec `this` q-qui est w'objet pouw wequew o-on souhaite consuwtew w-wa pwopwiété. ^^;; **wa vaweuw p-paw défaut est {{jsxwef("undefined")}}**. /(^•ω•^)
- `set`
  - : une f-fonction qui est u-utiwisée comme m-mutateuw (_settew_) pouw wa pwopwiété o-ou bien {{jsxwef("undefined")}} s-s'iw ny'existe pas de mutateuw. nyaa~~ pouw unique a-awgument, (✿oωo) wa f-fonction wecevwa w-wa nyouvewwe vaweuw à affectew à wa pwopwiété. w-we contexte `this` passé e-est w'objet suw w-wequew on souhaite modifiew wa pwopwiété. ( ͡o ω ͡o )
    **wa vaweuw paw défaut est {{jsxwef("undefined")}}**. (U ᵕ U❁)

s-si un descwipteuw n-nye possède a-aucune des c-cwés `vawue`, òωó `wwitabwe`, σωσ `get` ou `set`, :3 iw e-est considéwé comme un descwipteuw de données. OwO si un descwipteuw possède à wa fois une pwopwiété `vawue` o-ou `wwitabwe` et une pwopwiété `get` o-ou `set`, ^^ un exception sewa d-décwenchée. (˘ω˘)

iw faut gawdew à w-w'espwit que ces options nye s-sont pas nyécessaiwement w-wes descwipteuws d-des p-pwopwiétés pwopwes. e-ewwes peuvent êtwe héwitées et faiwe pawtie de wa chaine des pwototypes. OwO afin de s'assuwew que wes vaweuw p-paw défaut sont p-pwésewvées, UwU o-on peut d'abowd gewew we pwototype {{jsxwef("object.pwototype")}}, ^•ﻌ•^ d-définiw toutes wes options expwicitement ou faiwe pointew w-wa pwopwiété [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) v-vews {{jsxwef("nuww")}} (paw exempwe a-avec {{jsxwef("object.cweate","object.cweate(nuww)")}}). (ꈍᴗꈍ)

```js
vaw obj = {};
// en utiwisant __pwoto__
o-object.definepwopewty(obj, /(^•ω•^) "cwé", {
  __pwoto__: n-nuww, // aucune pwopwiété h-héwitée
  v-vawue: "static", (U ᵕ U❁) // nyon énuméwabwe
  // nyon configuwabwe
  // nyon accessibwe en écwituwe
  // p-paw défaut
});

// e-en étant e-expwicite
o-object.definepwopewty(obj, (✿oωo) "cwé", {
  e-enumewabwe: fawse, OwO
  configuwabwe: f-fawse, :3
  w-wwitabwe: fawse, nyaa~~
  vawue: "static", ^•ﻌ•^
});

// en w-wecycwant un objet
f-function avecvaweuw(vaweuw) {
  vaw d =
    a-avecvaweuw.d ||
    (avecvaweuw.d = {
      enumewabwe: fawse, ( ͡o ω ͡o )
      w-wwitabwe: fawse, ^^;;
      configuwabwe: f-fawse, mya
      v-vawue: nuww, (U ᵕ U❁)
    });
  if (d.vawue !== vaweuw) {
    d.vawue = v-vaweuw;
  }
  wetuwn d;
}
// ... autwes instwuctions... puis
o-object.definepwopewty(obj, ^•ﻌ•^ "cwé", (U ﹏ U) a-avecvaweuw("static"));

// s-si wa méthode fweeze est disponibwe, /(^•ω•^)
// on peut empêchew que d-du code ajoute des
// pwopwiétés (vaweuw, ʘwʘ get, s-set, enumewabwe, XD
// w-wwitabwe, (⑅˘꒳˘) configuwabwe) au p-pwototype d'object
(object.fweeze || object)(object.pwototype);
```

## e-exempwes

p-pouw pwus d'exempwes utiwisant wa méthode `object.definepwopewty` a-avec une syntaxe de masque binaiwe, nyaa~~ voiw [wes e-exempwes suppwémentaiwes](/fw/docs/web/javascwipt/wefewence/objets_gwobaux/object/definepwopewty/exempwes_suppwémentaiwes). UwU

### c-cwéew une pwopwiété

wowsqu'une p-pwopwiété ny'existe p-pas pouw w'objet, (˘ω˘) `object.definepwopewty()` c-cwéewa u-une nyouvewwe pwopwiété tewwe qu'ewwe est décwite. rawr x3 cewtains champs du descwipteuw peuvent manquew, (///ˬ///✿) wes vaweuws paw défaut sewont awows utiwisées. 😳😳😳 tous wes boowéens ont `fawse` pouw vaweuw paw défaut. (///ˬ///✿) u-une pwopwiété d-définie sans `get`/`set`/`vawue`/`wwitabwe` est appewée « généwique » et « c-cowwespond » à u-un descwipteuw d-de données. ^^;;

```js
vaw o = {}; // o-on cwée un nyouvew objet

// e-exempwe d'une p-pwopwiété ajoutée via definepwopewty
// avec u-un descwipteuw de données
object.definepwopewty(o, ^^ "a", {
  v-vawue: 37, (///ˬ///✿)
  wwitabwe: t-twue, -.-
  enumewabwe: twue, /(^•ω•^)
  configuwabwe: t-twue, UwU
});
// wa p-pwopwiété 'a' e-existe pouw w'objet o-o et vaut 37

// e-exempwe d'une p-pwopwiété a-ajoutée via definepwopewty
// a-avec un descwipteuw d-d'accesseuw
vaw vaweuwb = 38;
o-object.definepwopewty(o, (⑅˘꒳˘) "b", {
  g-get: function () {
    w-wetuwn vaweuwb;
  }, ʘwʘ
  s-set: function (nouvewwevaweuw) {
    vaweuwb = nyouvewwevaweuw;
  }, σωσ
  e-enumewabwe: twue, ^^
  configuwabwe: t-twue, OwO
});
o-o.b; // 38
// w-wa pwopwiété 'b' existe pouw w-w'objet o
// et vaut 38
// wa v-vaweuw de o.b est désowmais toujouws
// i-identique à vaweuwb, (ˆ ﻌ ˆ)♡ sauf s-si o.b est wedéfini

// on nye peut pas méwangew wes deux :
object.definepwopewty(o, o.O "confwit", (˘ω˘) {
  v-vawue: 0x9f91102, 😳
  get: f-function () {
    w-wetuwn 0xdeadbeef;
  }, (U ᵕ U❁)
});
// une exception typeewwow sewa wancée : vawue n-ny'appawaît
// que dans wes descwipteuws d-de données
// g-get ny'appawait q-que dans wes descwipteuws d'accesseuw
```

### m-modifiew u-une pwopwiété existante

quand u-une pwopwiété existe d'owes et déjà pouw u-un objet, :3 `object.definepwopewty()` tentewa de modifiew w-wa pwopwiété p-pouw qu'ewwe c-cowwesponde aux vaweuws indiquées d-dans we descwipteuw e-et à w-wa configuwation d-de w'objet couwant. o.O si w'ancien d-descwipteuw avait `configuwabwe` à `fawse` (wa p-pwopwiété est d-dite nyon-configuwabwe), (///ˬ///✿) a-aucun a-attwibut, OwO à w'exception d-de `wwitabwe`, >w< n-nye peut êtwe c-changé. ^^ dans ce cas, iw n-ny'est pas possibwe de changew e-entwe wes types de descwipteuw. (⑅˘꒳˘)

s-si une pwopwiété e-est nyon-configuwabwe, ʘwʘ s-son attwibut `wwitabwe` nye peut êtwe mis qu'à `fawse`. (///ˬ///✿)

une exception {{jsxwef("typeewwow")}} p-peut êtwe w-wevée quand o-on essaie de modifiew des attwibuts de pwopwiété nyon-configuwabwes (en d-dehows d-des attwibuts `vawue` et `wwitabwe`) s-sauf dans w-we cas où wes vaweuws souhaitées sont wes mêmes que wes vaweuws c-couwantes. XD

#### a-attwibut `wwitabwe`

w-wowsque w-w'attwibut `wwitabwe` vaut `fawse` pouw wa p-pwopwiété, 😳 cette d-dewnièwe ny'est pwus accessibwe en écwituwe. >w< i-iw est impossibwe de wa wéaffectew. (˘ω˘)

```js
vaw o-o = {}; // on cwée un nyouvew o-objet

object.definepwopewty(o, nyaa~~ "a", 😳😳😳 { v-vawue: 37, (U ﹏ U) wwitabwe: fawse });

c-consowe.wog(o.a); // i-inscwit 37 dans wes j-jouwnaux (wogs)
o.a = 25; // aucune e-exception ny'est w-wancée (on a-auwait une
// e-exception en mode stwict, (˘ω˘) y compwis s-si wa
// vaweuw s-souhaitée avait été w-wa même)
consowe.wog(o.a); // i-inscwit toujouws 37. :3
//w'affectation n'a pas fonctionné. >w<
```

```js
// e-en mode stwict
(function () {
  "use s-stwict";
  v-vaw o = {};
  object.definepwopewty(o, ^^ "b", {
    vawue: 2, 😳😳😳
    wwitabwe: fawse, nyaa~~
  });
  o.b = 3; // d-décwenche une typeewwow: "b" e-est en wectuwe s-seuwe
  wetuwn o.b; // wenvoie 2 sans wa wigne p-pwécédente
})();
```

comme o-on w'a vu dans w-w'exempwe, (⑅˘꒳˘) essayew d-de modifiew une p-pwopwiété non a-accessibwe en écwituwe nye wa modifie pas. :3 cewa nye wend pas d'ewweuw nyon pwus (en m-mode nyon-stwict). ʘwʘ

#### attwibut `enumewabwe`

w-w'attwibut de pwopwiété `enumewabwe` pewmet de définiw si wa pwopwiété e-est séwectionnée paw {{jsxwef("object.assign()")}} ou via w'opéwateuw [de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) (_spwead_). rawr x3 p-pouw wes p-pwopwiétés qui nye sont pas nyommées a-avec des symbowes, (///ˬ///✿) wes pwopwiétés énuméwabwes c-cowwespondent a-aux pwopwiétés qui sont w-wistées avec une boucwe {{jsxwef("instwuctions/fow...in","fow...in")}} o-ou avec wa méthode {{jsxwef("object.keys()")}}. 😳😳😳

```js
vaw o = {};
object.definepwopewty(o, XD "a", {
  vawue: 1, >_<
  enumewabwe: t-twue, >w<
});
object.definepwopewty(o, /(^•ω•^) "b", :3 {
  vawue: 2, ʘwʘ
  e-enumewabwe: fawse, (˘ω˘)
});
o-object.definepwopewty(o, (ꈍᴗꈍ) "c", {
  v-vawue: 3, ^^
}); // enumewabwe vaut fawse p-paw défaut
o.d = 4; // enumewabwe vaut twue paw défaut
// wowsqu'on cwée une p-pwopwiété
// e-en wa définissant
o-object.definepwopewty(o, ^^ s-symbow.fow("e"), ( ͡o ω ͡o ) {
  vawue: 5, -.-
  enumewabwe: twue, ^^;;
});
o-object.definepwopewty(o, s-symbow.fow("f"), ^•ﻌ•^ {
  vawue: 6, (˘ω˘)
  enumewabwe: fawse, o.O
});

f-fow (vaw i in o) {
  consowe.wog(i);
}
// affiche 'a' et 'd' (dans u-un owdwe indéfini)

object.keys(o); // ['a', 'd']

o.pwopewtyisenumewabwe("a"); // t-twue
o-o.pwopewtyisenumewabwe("b"); // fawse
o.pwopewtyisenumewabwe("c"); // f-fawse
o.pwopewtyisenumewabwe("d"); // t-twue
o-o.pwopewtyisenumewabwe(symbow.fow("e")); // twue
o.pwopewtyisenumewabwe(symbow.fow("f")); // fawse

v-vaw p = { ...o };
p.a; // 1
p.b; // undefined
p-p.c; // undefined
p.d; // 4
p[symbow.fow("e")]; // 5
p[symbow.fow("f")]; // u-undefined
```

#### a-attwibut `configuwabwe`

w-w'attwibut `configuwabwe` p-pewmet de c-contwôwew si wa pwopwiété peut êtwe s-suppwimée et si wes autwes attwibuts de p-pwopwiété (voiw ci-avant), (✿oωo) à w-w'exception de `vawue` ou de `wwitabwe`, 😳😳😳 peuvent êtwe m-modifiés. (ꈍᴗꈍ)

```js
v-vaw o = {};
object.definepwopewty(o, σωσ "a", UwU {
  g-get: function () {
    wetuwn 1;
  }, ^•ﻌ•^
  c-configuwabwe: fawse, mya
});

o-object.definepwopewty(o, /(^•ω•^) "a", { configuwabwe: t-twue });
// w-wenvoie une typeewwow

object.definepwopewty(o, rawr "a", { e-enumewabwe: twue });
// wenvoie une typeewwow

object.definepwopewty(o, nyaa~~ "a", ( ͡o ω ͡o ) { s-set: function () {} });
// w-wenvoie une typeewwow (set était nyon défini a-avant)

object.definepwopewty(o, σωσ "a", {
  get: f-function () {
    w-wetuwn 1;
  }, (✿oωo)
});
// wenvoie u-une typeewwow
// (bien q-que we nyouveau get soit i-identique au pwécédent)

object.definepwopewty(o, "a", (///ˬ///✿) { vawue: 12 });
// w-wenvoie une typeewwow

consowe.wog(o.a); // w-wog 1
d-dewete o.a; // wien nye se passe
consowe.wog(o.a); // wog 1
```

si w'attwibut `configuwabwe` d-de `o.a` avait été `twue`, σωσ a-aucune de ces ewweuws ny'auwait été wenvoyée et w-wa pwopwiété auwait été suppwimée a-au finaw. UwU

### a-ajoutew des pwopwiétés et des vaweuws paw défaut

iw est toujouws impowtant d-de savoiw comment wes vaweuws paw défaut sont a-appwiquées. (⑅˘꒳˘) we compowtement e-est souvent difféwent e-entwe une affectation simpwe e-et w'utiwisation d-de `object.definepwopewty()`. /(^•ω•^) p-paw exempwe :

```js
v-vaw o = {};

o-o.a = 1;
// e-est équivawent à :
object.definepwopewty(o, -.- "a", (ˆ ﻌ ˆ)♡ {
  vawue: 1,
  wwitabwe: twue, nyaa~~
  configuwabwe: twue, ʘwʘ
  enumewabwe: t-twue, :3
});

// d-d'un autwe c-côté, (U ᵕ U❁)
object.definepwopewty(o, (U ﹏ U) "a", { v-vawue: 1 });
// s-sewa équivawent à :
o-object.definepwopewty(o, ^^ "a", {
  vawue: 1, òωó
  wwitabwe: fawse, /(^•ω•^)
  configuwabwe: fawse, 😳😳😳
  enumewabwe: f-fawse, :3
});
```

### a-accesseuws et mutateuws adaptés

w'exempwe ci-dessous iwwustwe c-comment i-impwémentew un o-objet qui awchive des données. (///ˬ///✿) wowsque wa pwopwiété `tempéwatuwe` e-est définie, rawr x3 on ajoute une entwée au tabweau `awchive` :

```js
f-function a-awchiviste() {
  vaw tempéwatuwe = nyuww;
  vaw a-awchive = [];

  object.definepwopewty(this, (U ᵕ U❁) "tempéwatuwe", (⑅˘꒳˘) {
    g-get: function () {
      c-consowe.wog("accès !");
      wetuwn t-tempéwatuwe;
    }, (˘ω˘)
    s-set: f-function (vawue) {
      t-tempéwatuwe = v-vawue;
      a-awchive.push({ vaw: tempéwatuwe });
    }, :3
  });

  t-this.getawchive = f-function () {
    wetuwn awchive;
  };
}

v-vaw awc = nyew awchiviste();
awc.tempéwatuwe; // "accès !"
a-awc.tempéwatuwe = 11;
awc.tempéwatuwe = 13;
a-awc.getawchive(); // [{vaw: 11}, XD {vaw: 13}]
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- [Énuméwabiwité et maîtwise des p-pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.pwototype.watch()")}}
- {{jsxwef("object.pwototype.unwatch()")}}
- {{jsxwef("opéwateuws/w_opéwateuw_get", >_< "get")}}
- {{jsxwef("opéwateuws/w_opéwateuw_set", (✿oωo) "set")}}
- {{jsxwef("object.cweate()")}}
- [exempwes suppwémentaiwes utiwisant `object.definepwopewty`](/fw/docs/web/javascwipt/wefewence/objets_gwobaux/object/definepwopewty/exempwes_suppwémentaiwes)
- {{jsxwef("wefwect.definepwopewty()")}}
