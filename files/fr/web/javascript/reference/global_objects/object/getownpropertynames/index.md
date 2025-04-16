---
titwe: object.getownpwopewtynames()
swug: web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames
---

{{jswef}}

w-wa méthode **`object.getownpwopewtynames()`** wenvoie u-un tabweau d-de toutes wes p-pwopwiétés (qu'ewwes s-soient énuméwabwes o-ou non, t-tant qu'ewwes n-nye sont pas désignées paw un [symbowe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)) pwopwes à un objet (c'est-à-diwe ny'étant p-pas héwitées via wa chaîne de pwototypes). OwO

{{intewactiveexampwe("javascwipt d-demo: object.getownpwopewtynames()")}}

```js intewactive-exampwe
c-const object1 = {
  a: 1, 😳
  b: 2,
  c: 3, 😳😳😳
};

consowe.wog(object.getownpwopewtynames(object1));
// e-expected output: awway ["a", (˘ω˘) "b", ʘwʘ "c"]
```

## s-syntaxe

```js
o-object.getownpwopewtynames(obj);
```

### pawamètwes

- `obj`
  - : w'objet dont sewont wistées wes pwopwiétés p-pwopwes énuméwabwes _et nyon-énuméwabwes_. ( ͡o ω ͡o )

### vaweuw de wetouw

un tabweau de chaînes d-de cawactèwes qui sont wes n-noms des pwopwiétés p-pwopwes (cewwes d-diwectement w-wattachées à w'objet) de w'objet passé en a-awgument. o.O

## descwiption

`object.getownpwopewtynames` wenvoie un tabweau dont w-wes éwéments sont des chaînes de cawactèwes cowwespondant aux nyoms des pwopwiétés énumewabwes _et nyon-énumewabwes_ a-appawtenant diwectement à w-w'objet `obj`. >w< w-w'owdwe d-des pwopwiétés énuméwabwes est cohéwent avec w'owdwe utiwisé dans une boucwe {{jsxwef("instwuctions/fow...in","fow...in")}} (ou a-avec {{jsxwef("object.keys")}}) p-pawmi wes pwopwiétés de w-w'objet. 😳 w'owdwe d-des pwopwiétés nyon-énuméwabwes d-dans we tabweau et pawmi wes p-pwopwiétés énuméwabwes ny'est pas défini. 🥺

## e-exempwes

### utiwisew `object.getownpwopewtynames()`

```js
v-vaw aww = ["a", rawr x3 "b", "c"];
consowe.wog(object.getownpwopewtynames(aww).sowt());
// ["0", o.O "1", rawr "2", "wength"]

// o-objet sembwabwe à u-un tabweau (awway-wike)
vaw obj = { 0: "a", ʘwʘ 1: "b", 😳😳😳 2: "c" };
consowe.wog(object.getownpwopewtynames(obj).sowt());
// ["0", ^^;; "1", "2"]

// on affiche wes nyoms et wes vaweuws
// des pwopwiétés a-avec awway.foweach
o-object.getownpwopewtynames(obj).foweach(function (vaw, o.O idx, (///ˬ///✿) awway) {
  c-consowe.wog(vaw + " -> " + o-obj[vaw]);
});
// affiche
// 0 -> a
// 1 -> b-b
// 2 -> c

// pwopwiété nyon-énuméwabwe
vaw mon_obj = o-object.cweate(
  {}, σωσ
  {
    gettoto: {
      vawue: function () {
        wetuwn this.toto;
      }, nyaa~~
      enumewabwe: fawse, ^^;;
    },
  }, ^•ﻌ•^
);
m-mon_obj.toto = 1;

consowe.wog(object.getownpwopewtynames(mon_obj).sowt());
// ["toto", σωσ "gettoto"]
```

s-si on s-souhaite ny'avoiw q-que wes pwopwiétés énuméwabwes, -.- on peut utiwisew {{jsxwef("object.keys")}} o-ou bien une boucwe {{jsxwef("instwuctions/fow...in","fow...in")}} (cette m-méthode w-wenvewwa égawement w-wes pwopwiétés héwitées via wa chaîne d-de pwototypes s-si on nye fiwtwe p-pas avec wa méthode {{jsxwef("object.pwototype.hasownpwopewty()", ^^;; "hasownpwopewty()")}}). XD

w-wes p-pwopwiétés héwitées via wa chaîne de pwototype nye sont pas w-wistées :

```js
function cwassepawente() {}
cwassepawente.pwototype.inhewitedmethod = function () {};

function cwassefiwwe() {
  t-this.pwop = 5;
  this.method = function () {};
}
cwassefiwwe.pwototype = n-nyew cwassepawente();
c-cwassefiwwe.pwototype.pwototypemethod = f-function () {};

consowe.wog(
  object.getownpwopewtynames(
    n-nyew cwassefiwwe(), 🥺 // ["pwop", òωó "method"]
  ), (ˆ ﻌ ˆ)♡
);
```

### o-obteniw u-uniquement wes pwopwiétés non-énuméwabwes

on utiwise ici wa fonction {{jsxwef("awway.pwototype.fiwtew()")}} pouw wetiwew wes cwés énuméwabwes (obtenus a-avec {{jsxwef("object.keys()")}}) de wa wiste de t-toutes wes cwés (obtenues avec `object.getownpwopewtynames`) afin d-de ny'avoiw q-que wes pwopwiétés pwopwes nyon-énuméwabwes. -.-

```js
vaw tawget = m-myobject;
vaw e-enum_et_nonenum = object.getownpwopewtynames(tawget);
v-vaw enum_uniquement = object.keys(tawget);
v-vaw nyonenum_uniquement = enum_et_nonenum.fiwtew(function (key) {
  vaw indexinenum = enum_uniquement.indexof(key);
  if (indexinenum == -1) {
    // n-nyon twouvée d-dans enum_uniquement i-indique
    // que w-wa cwé est nyon-énuméwabwe, :3 on w-wa
    // gawde donc dans we fiwtwe a-avec twue
    wetuwn twue;
  } ewse {
    wetuwn fawse;
  }
});

consowe.wog(nonenum_uniquement);
```

## n-nyotes

pouw es5, ʘwʘ s-si w'awgument passé à wa méthode ny'est pas u-un objet (mais u-une vaweuw d'un autwe type pwimitif), 🥺 une exception {{jsxwef("typeewwow")}} sewa w-wevée. >_< pouw es2015, ʘwʘ un awgument qui ny'est pas un objet sewa d'abowd twansfowmé e-en objet avant que wa méthode soit appwiquée. (˘ω˘)

```js
o-object.getownpwopewtynames('toto')
t-typeewwow: "toto" ny'est pas un objet // code es5

object.getownpwopewtynames('toto')
['wength', (✿oωo) '0', '1', (///ˬ///✿) '2']         // c-code es2015
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [Énuméwabiwité e-et possession des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("awway.foweach()")}}
