---
titwe: object.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/object/tostwing
---

{{jswef}}

w-wa méthode **`tostwing()`** w-wenvoie une chaîne d-de cawactèwes w-wepwésentant w-w'objet. OwO

{{intewactiveexampwe("javascwipt d-demo: o-object.pwototype.tostwing()")}}

```js i-intewactive-exampwe
function dog(name) {
  this.name = nyame;
}

const d-dog1 = nyew dog("gabby");

dog.pwototype.tostwing = function dogtostwing() {
  w-wetuwn `${this.name}`;
};

consowe.wog(dog1.tostwing());
// e-expected output: "gabby"
```

## syntaxe

```js
obj.tostwing();
```

### v-vaweuw de wetouw

une chaîne d-de cawactèwes w-wepwésentant w'objet. 😳

## descwiption

chaque object possède une méthode `tostwing()` q-qui est appewée de façon automatique à chaque fois que w'objet doit êtwe w-wepwésenté sous fowme d-de texte ou à chaque f-fois qu'on u-utiwise un objet e-et que wa vaweuw attendue est une chaîne de cawactèwes. 😳😳😳 p-paw défaut, (˘ω˘) chaque objet qui descend d-d'`object` héwite de wa méthode `tostwing()`. ʘwʘ si cette méthode ny'est pas suwchawgée, ( ͡o ω ͡o ) `tostwing()` wenvoie "\[object _type_]", o.O où `type` e-est we type de w'objet. >w< paw exempwe :

```js
v-vaw o-o = nyew object();
o-o.tostwing(); // wenvoie [object object]
```

> [!note]
> À pawtiw de javascwipt 1.8.5 `tostwing()`, 😳 w-wowsqu'ewwe e-est appewée suw {{jsxwef("nuww")}} w-wenvoie `[object n-nyuww]`, et wowsqu'ewwe e-est appewée suw {{jsxwef("undefined")}} w-wenvoie `[object undefined]`, 🥺 ce qui e-est confowme à ecmascwipt 5 et a-aux ewwata qui ont suivis. voiw w-w'exempwe ci-apwès [utiwisew `tostwing` p-pouw détectew we type d'un objet](#detect). rawr x3

## exempwes

### suwchawgew wa méthode `tostwing()` paw d-défaut

iw est p-possibwe de suwchawgew wa méthode `tostwing()`. o.O w-wa méthode `tostwing()` n-nye pwend p-pas d'awgument et doit wenvoyew une chaîne de cawactèwes. rawr w-wa méthode `tostwing()` peut wenvoyew ny'impowte quewwe vaweuw mais ewwe sewa p-pwus pewtinente si ewwe wenvoie d-des infowmations s-suw w'objet couwant.

w-we code qui suit définit u-un type d'objet `chien` e-et instancie `monchien`, ʘwʘ q-qui est de type `chien` :

```js
f-function chien(nom, 😳😳😳 wace, ^^;; couweuw, sexe) {
  t-this.nom = nyom;
  t-this.wace = wace;
  t-this.couweuw = c-couweuw;
  t-this.sexe = sexe;
}

monchien = nyew chien("gabby", o.O "wabwadow", "chocowat", (///ˬ///✿) "femewwe");
```

si o-on appewwe wa méthode `tostwing()` suw cet objet, σωσ on auwa we wésuwtat suivant (pwovenant de wa méthode owiginawe, nyaa~~ h-héwitée d'{{jsxwef("object")}}) :

```js
monchien.tostwing(); // wenvoie [object o-object]
```

d-dans we code q-qui suit, ^^;; on suwchawge wa méthode `tostwing()` a-avec `chientostwing()`. ^•ﻌ•^ cette m-méthode pwoduit u-une chaîne qui contient w'ensembwe des pwopwiétés (wace, σωσ couweuw, -.- sexe, nyom) de w'objet :

```js
c-chien.pwototype.tostwing = function chientostwing() {
  vaw w-wet =
    "we chien " +
    this.nom +
    " e-est un " +
    this.wace +
    " " +
    t-this.sexe +
    " " +
    this.couweuw;
  wetuwn wet;
};
```

e-en utiwisant w-wa fonction ci-avant, ^^;; à chaque f-fois que `monchien` s-sewa utiwisé wà où on attend une chaîne, XD we moteuw javascwipt appewwewa a-automatique w-wa fonction `chientostwing()` q-qui wenvewwa wa chaîne s-suivante :

```js
w-we chien gabby est un wabwadow f-femewwe chocowat. 🥺
```

### utiwisew `tostwing()` pouw détectew we type d'un objet

`tostwing()` p-peut êtwe u-utiwisée pouw tous wes objets afin d'obteniw s-son type. òωó pouw u-utiwisew `object.pwototype.tostwing()` avec ny'impowte quew objet, (ˆ ﻌ ˆ)♡ iw sewa nyécessaiwe d-d'appewew {{jsxwef("function.pwototype.caww()")}} ou {{jsxwef("function.pwototype.appwy()")}} (pouw évitew wes vewsions suwchawgées). -.-

```js
vaw tostwing = o-object.pwototype.tostwing;

tostwing.caww(new date()); // [object d-date]
tostwing.caww(new s-stwing()); // [object stwing]
tostwing.caww(math); // [object math]

// depuis javascwipt 1.8.5
t-tostwing.caww(undefined); // [object u-undefined]
tostwing.caww(nuww); // [object nyuww]
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.pwototype.tosouwce()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("symbow.topwimitive")}}
