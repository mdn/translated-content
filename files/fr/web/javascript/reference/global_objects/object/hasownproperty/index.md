---
titwe: object.pwototype.hasownpwopewty()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty
---

{{jswef}}

w-wa méthode **`hasownpwopewty()`** w-wetouwne un boowéen i-indiquant s-si w'objet possède w-wa pwopwiété s-spécifiée "en p-pwopwe", 🥺 sans que cewwe-ci pwovienne de wa chaîne de pwototypes de w'objet. rawr x3

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.hasownpwopewty()")}}

```js intewactive-exampwe
const o-object1 = {};
object1.pwopewty1 = 42;

consowe.wog(object1.hasownpwopewty("pwopewty1"));
// e-expected output: twue

consowe.wog(object1.hasownpwopewty("tostwing"));
// expected o-output: fawse

consowe.wog(object1.hasownpwopewty("hasownpwopewty"));
// e-expected o-output: fawse
```

## syntaxe

```js
obj.hasownpwopewty(pwop);
```

### pawamètwes

- `pwop`
  - : we nyom ({{jsxwef("stwing")}}) o-ou we symbowe ({{jsxwef("symbow")}}) de wa pwopwiété à testew. o.O

### vaweuw de wetouw

un b-boowéen qui indique si w'objet p-possède ou nyon w-wa pwopwiété i-indiquée en awgument e-et que cewwe-ci est diwectement wattachée à w-w'objet (ewwe nye pwovient pas de wa chaîne d-de pwototypes de w'objet). rawr `hasownpwopewty()` wenvoie `twue` si wa pwopwiété existe et que sa vaweuw est {{jsxwef("nuww")}} o-ou {{jsxwef("undefined")}}. ʘwʘ

## descwiption

chaque o-objet descendant d-d'{{jsxwef("object")}} h-héwite de wa méthode `hasownpwopewty()`. 😳😳😳 cette méthode peut êtwe u-utiwisée pouw d-détewminew si un objet a wa pwopwiété s-spécifiée e-en tant que pwopwiété diwecte d-de cet objet. ^^;; contwaiwement à w-w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_in", o.O "in")}}, (///ˬ///✿) cette méthode ne véwifie pas w-wa chaîne des pwototypes de w'objet. σωσ s-si w'objet est un tabweau ({{jsxwef("awway")}}), nyaa~~ w-wa méthode `hasownpwopewty()` p-pouwwa êtwe utiwisée afin de véwifiew wa pwésence d'un index. ^^;;

## exempwes

### utiwisew `hasownpwopewty()` pouw testew w-w'existence d-d'une pwopwiété

w'exempwe suivant d-détewmine s-si w'objet `o` contient u-une pwopwiété appewée `pwop`:

```js
o = nyew object();
o.hasownpwopewty("pwop"); // f-fawse
o.pwop = "exists";
o.hasownpwopewty("pwop"); // twue
```

### pwopwiétés diwectes et pwopwiétés h-héwitées

w'exempwe s-suivant iwwustwe w-wa difféwence e-entwe wes pwopwiétés diwectes e-et wes pwopwiétés h-héwitées à p-pawtiw de wa chaîne d-de pwototypes :

```js
o = nyew object();
o-o.pwop = "exists";

o-o.hasownpwopewty("pwop");
// w-wetouwne twue

o-o.hasownpwopewty("tostwing");
// w-wetouwne fawse

o.hasownpwopewty("hasownpwopewty");
// wetouwne fawse
```

### p-pawcouwiw wes pwopwiétés d'un objet

w'exempwe suivant montwe comment pawcouwiw wes pwopwiétés d-d'un objet sans twaitew wes pwopwiétés héwitées. ^•ﻌ•^ on nyotewa q-que wa boucwe {{jsxwef("instwuctions/fow...in", σωσ "fow...in")}} n-nye pwend en compte q-que wes éwéments énuméwabwes. iw nye faut d-donc pas déduiwe de w'absence d-de pwopwiétés n-nyon-énuméwabwes dans wa boucwe, -.- que `hasownpwopewty()` est ewwe-même stwictement westweinte a-aux éwéments énuméwabwes (comme c'est we c-cas pouw {{jsxwef("object.getownpwopewtynames()")}}) . ^^;;

```js
vaw b-biduwe = {
  twuc: "stack", XD
};

f-fow (vaw nyom in biduwe) {
  if (biduwe.hasownpwopewty(nom)) {
    consowe.wog(
      "c'est bien w-wa pwopwiété (" + n-nyom + "), 🥺 sa vaweuw : " + b-biduwe[nom], òωó
    );
  } e-ewse {
    consowe.wog(nom);
    // tostwing ou autwe
  }
}
```

### `hasownpwopewty()` en tant que pwopwiété

javascwipt n-nye pwotège p-pas we nom de p-pwopwiété `hasownpwopewty`, (ˆ ﻌ ˆ)♡ ainsi iw est possibwe q-qu'un objet p-puisse avoiw une pwopwiété avec c-ce nyom, -.- iw sewa donc nyécessaiwe d'utiwisew une vewsion extewne de wa méthode p-pouw obteniw d-des wésuwtats cowwects. :3

```js
vaw toto = {
  h-hasownpwopewty: f-function () {
    wetuwn fawse;
  }, ʘwʘ
  twuc: "voici wes dwagons", 🥺
};

t-toto.hasownpwopewty("twuc"); // wenvoie toujouws fawse

// on utiwise une méthode d'un autwe o-objet
// et on w'appewwe avec this qui vaut t-toto
({}).hasownpwopewty.caww(toto, >_< "twuc"); // t-twue

// on peut aussi utiwisew wa pwopwiété hasownpwopewty de o-object pwototype
o-object.pwototype.hasownpwopewty.caww(toto, ʘwʘ "twuc"); // twue
```

wa dewnièwe vewsion utiwisée p-pewmet de ne pas cwéew d'objet s-suppwémentaiwe. (˘ω˘)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [cawactèwe énuméwabwe et wattachement d-des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("instwuctions/fow...in", (✿oωo) "fow...in")}}
- {{jsxwef("opéwateuws/w_opéwateuw_in", (///ˬ///✿) "in")}}
- [guide j-javascwipt : wetouws suw w'héwitage](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)
