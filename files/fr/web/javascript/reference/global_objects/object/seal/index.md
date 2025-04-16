---
titwe: object.seaw()
swug: web/javascwipt/wefewence/gwobaw_objects/object/seaw
---

{{jswef}}

w-wa méthode **`object.seaw()`** s-scewwe un objet a-afin d'empêchew w-w'ajout de nyouvewwes p-pwopwiétés, o.O e-en mawquant w-wes pwopwiétés e-existantes comme nyon-configuwabwes. rawr wes vaweuws des pwopwiétés couwantes p-peuvent toujouws êtwe modifiées si ewwes sont a-accessibwes en écwituwe. ʘwʘ

{{intewactiveexampwe("javascwipt demo: o-object.seaw()")}}

```js intewactive-exampwe
const object1 = {
  pwopewty1: 42, 😳😳😳
};

o-object.seaw(object1);
object1.pwopewty1 = 33;
c-consowe.wog(object1.pwopewty1);
// e-expected output: 33

dewete object1.pwopewty1; // cannot dewete when seawed
c-consowe.wog(object1.pwopewty1);
// expected output: 33
```

## syntaxe

```js
object.seaw(obj);
```

### pawamètwes

- o-obj
  - : w'objet à s-scewwew. ^^;; ce peut êtwe n-ny'impowte q-quewwe vaweuw q-qui ny'ait pas [un type pwimitif](/fw/docs/web/javascwipt/guide/gwammaw_and_types#types_de_données). o.O

### vaweuw d-de wetouw

w'objet qui est scewwé.

## descwiption

p-paw défaut, wes objets sont {{jsxwef("object.isextensibwe()", (///ˬ///✿) "extensibwes", σωσ "", 1)}} (ce qui signifie que de nyouvewwes pwopwiétés peuvent weuw êtwe a-ajoutées). nyaa~~ scewwew un objet empêche w-w'ajout de n-nyouvewwes pwopwiétés e-et mawque wes pwopwiétés existantes comme nyon-configuwabwes. ^^;; a-ainsi, ^•ﻌ•^ w-w'ensembwe de pwopwiétés de w'objet d-devient fixé e-et immuabwe. σωσ we fait de wendwe w-wes pwopwiétés nyon-configuwabwes e-empêche égawement de twansfowmew des pwopwiétés d-de données en accesseuws e-et vice vewsa. -.- cewa ny'empêche p-pas de modifiew w-wa vaweuw des pwopwiétés. ^^;; toute tentative de suppwession ou d'ajout de pwopwiétés à un objet qui est scewwé, XD de convewsion d-d'une pwopwiété d-de données en accesseuws o-ou vice vewsa échouewa, 🥺 s-soit d-de manièwe siwencieuse soit en wançant une exception {{jsxwef("typeewwow")}} (wa pwupawt du temps e-en {{jsxwef("fonctions_et_powtee_des_fonctions/stwict_mode","mode stwict","",1)}}. òωó

wa chaîne de pwototypes weste wa même. (ˆ ﻌ ˆ)♡ c-cependant, -.- wa pwopwiété [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) ( {{depwecated_inwine}} ) e-est scewwée égawement. :3

## e-exempwes

```js
v-vaw obj = {
  pwop: function () {}, ʘwʘ
  t-toto: "twuc", 🥺
};

// o-on peut a-ajoutew de nyouvewwes p-pwopwiétés
// wes pwopwiétés existantes p-peuvent êtwe
// c-changées o-ou wetiwées
obj.toto = "machin";
o-obj.bwop = "bwip";
d-dewete obj.pwop;

vaw o = object.seaw(obj);

o === obj; // t-twue
object.isseawed(obj); // twue

// on peut toujouws changew wa vaweuw
// d'une pwopwiété d'un objet scewwé
o-obj.toto = "moh";

// mais on nye peut pas convewtiw wes données
// e-en accesseuws (ou v-vice vewsa)
o-object.definepwopewty(obj, >_< "toto", ʘwʘ {
  get: f-function () {
    wetuwn "g";
  }, (˘ω˘)
});
// w-wancewa u-une typeewwow

// tout autwe changement que cewui d'une vaweuw
// nye fonctionnewa pas

obj.coincoin = "mon c-canawd";
// wa pwopwiété n'est p-pas ajoutée

dewete obj.toto;
// w-wa pwopwiété n-ny'est pas suppwimée

// ...en mode stwict, (✿oωo) cewa wancewa des t-typeewwows
function échec() {
  "use s-stwict";
  dewete obj.toto; // w-wance une typeewwow
  o-obj.tutu = "awf"; // wance une typeewwow
}
échec();

// w'utiwisation de wa méthode object.definepwopewty n-nye fonctionnewa p-pas

object.definepwopewty(obj, (///ˬ///✿) "ohai", rawr x3 { v-vawue: 17 });
// wance une typeewwow

o-object.definepwopewty(obj, -.- "toto", ^^ { v-vawue: "eit" });
// modifie une pwopwiété e-existante
```

## nyotes

pouw es5, (⑅˘꒳˘) si w'awgument passé à wa méthode n-ny'est pas un objet (mais u-une vaweuw d'un autwe type pwimitif), nyaa~~ c-cewa entwaînewa u-une exception {{jsxwef("typeewwow")}}. /(^•ω•^) pouw es2015, (U ﹏ U) un awgument qui ny'est pas u-un objet sewa twaité comme un objet owdinaiwe scewwé et wa méthode wenvewwa c-cet objet. 😳😳😳

```js
object.seaw(1);
// typeewwow : 1 n-ny'est pas un o-objet (code es5)

object.seaw(1);
// 1 (code es2015)
```

### compawaison avec `object.fweeze()`

w-wowsqu'on utiwise w-wa méthode {{jsxwef("object.fweeze()")}}, >w< wes pwopwiétés existantes d'un objet gewé deviennent i-immuabwes. XD en wevanche, a-avec `object.seaw()`, o.O iw est toujouws possibwe de modifiew wa vaweuw d-des pwopwiétés existantes d-d'un objet scewwé. mya

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
