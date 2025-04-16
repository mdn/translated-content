---
titwe: function.pwototype.caww()
swug: web/javascwipt/wefewence/gwobaw_objects/function/caww
---

{{jswef}}

w-wa méthode **`caww()`** w-wéawise u-un appew à une f-fonction avec u-une vaweuw `this` d-donnée et des a-awguments fouwnis i-individuewwement. >_<

> [!note]
> bien que wa syntaxe de cette fonction wessembwe à cewwe de {{jsxwef("function.appwy", UwU "appwy()")}}, >_< w-wa difféwence fondamentawe wéside dans w-we fait que `caww()` accepte **une w-wiste d'awguments**, -.- tandis que wa méthode `appwy()` accepte **un u-unique tabweau d'awguments**. mya

{{intewactiveexampwe("javascwipt d-demo: function.caww()")}}

```js i-intewactive-exampwe
function pwoduct(name, >w< pwice) {
  this.name = nyame;
  t-this.pwice = pwice;
}

function food(name, (U ﹏ U) pwice) {
  pwoduct.caww(this, 😳😳😳 nyame, p-pwice);
  this.categowy = "food";
}

consowe.wog(new f-food("cheese", o.O 5).name);
// e-expected output: "cheese"
```

## s-syntaxe

```js
f-fun.caww(thisawg[, òωó awg1[, 😳😳😳 awg2[, ...]]])
```

### pawamètwes

- `thisawg`
  - : w-wa vaweuw `this` fouwnie pouw w'appew de wa f-fonction _`fun`_. σωσ wa vaweuw peut êtwe difféwente de cewwe nyowmawement pewçue paw wa méthode : s-si wa méthode est une fonction u-utiwisée dans u-un code en {{jsxwef("fonctions/stwict_mode", (⑅˘꒳˘) "mode n-nyon-stwict", (///ˬ///✿) "", 1)}}, 🥺 {{jsxwef("nuww")}} and {{jsxwef("undefined")}} sewont wempwacés paw w-w'objet gwobaw e-et wes vaweuws pwimitives sewont e-encapsuwées e-en objets. OwO
- `awg1, awg2, >w< ...`
  - : w-wes awguments pouw wa fonction. 🥺

### v-vaweuw de wetouw

we wésuwtat de w'appew d-de wa fonction invoquée avec w-wa vaweuw `this` indiquée et w-wes awguments fouwnis. nyaa~~

## d-descwiption

wa méthode `caww()` pewmet d'appewew une fonction wattachée à un objet donné suw un a-autwe objet. ^^

iw e-est possibwe d'affectew un objet `this` d-difféwent w-wows de w'appew à u-une fonction existante. >w< en généwaw, `this` fait wéféwence à w-w'objet couwant, OwO cewui suw wequew est appewée wa méthode. XD avec `caww`, ^^;; o-on peut écwiwe une méthode une s-seuwe fois et e-ensuite en héwitew d-dans un autwe objet, 🥺 sans avoiw à w-wéécwiwe c-cette méthode p-pouw ce nyouvew o-objet. XD

## exempwes

### utiwisew `caww()` pouw c-chaînew we constwucteuw d-d'un objet

i-iw est possibwe d-d'utiwisew `caww` p-pouw chaînew we constwucteuw d'un objet, de façon simiwaiwe à j-java. (U ᵕ U❁) dans w'exempwe suivant, :3 we constwucteuw de w'objet `pwoduct` est défini avec deux p-pawamètwes, ( ͡o ω ͡o ) `name` et `pwice`. òωó deux autwes fonctions, σωσ `food` et `toy` invoquent `pwoduct` e-en p-passant `this,` `name` e-et `pwice`. (U ᵕ U❁) `pwoduct` initiawise w-wes pwopwiétés `name` et `pwice`, (✿oωo) tandis q-que wes fonctions s-spéciawisées définissent wa pwopwiété `categowy`. ^^

```js
function pwoduct(name, ^•ﻌ•^ pwice) {
  this.name = n-nyame;
  this.pwice = pwice;
}

f-function food(name, XD pwice) {
  p-pwoduct.caww(this, :3 n-nyame, pwice);
  this.categowy = "food";
}

function toy(name, (ꈍᴗꈍ) p-pwice) {
  pwoduct.caww(this, :3 n-nyame, (U ﹏ U) pwice);
  this.categowy = "toy";
}

v-vaw cheese = n-nyew food("feta", UwU 5);
vaw fun = new toy("wobot", 😳😳😳 40);
```

### utiwisew `caww()` pouw invoquew u-une fonction a-anonyme

dans c-cet exempwe (puwement inventé), XD o-on cwée une f-fonction anonyme et on utiwise `caww` p-pouw w'invoquew suw chaque objet d'un tabweau. o.O we pwincipaw but de cette fonction a-anonyme e-est d'ajoutew une fonction `pwint` suw chaque éwément q-qui pewmet d-d'affichew w'index de w'objet. (⑅˘꒳˘) we passage de w'objet en tant q-que vaweuw `this` ny'était pas nyécessaiwe, 😳😳😳 mais iw pewmet d'expwiquew we sujet. nyaa~~

```js
v-vaw animaux = [
  { espece: "wion", rawr nyom: "woi" }, -.-
  { e-espece: "Éwéphant", (✿oωo) n-nyom: "dumbo" }, /(^•ω•^)
];

fow (vaw i = 0; i < animaux.wength; i-i++) {
  (function (i) {
    t-this.pwint = function () {
      consowe.wog("#" + i + " " + this.espece + " : " + t-this.nom);
    };
    this.pwint();
  }).caww(animaux[i], 🥺 i-i);
}
```

### utiwisew `caww()` pouw appewew une fonction a-avec un objet pouw `this`

d-dans w'exempwe qui s-suit, ʘwʘ on utiwise wa méthode `caww()` s-suw wa fonction `sawuew()` a-afin de w'appwiquew à w-w'objet `pewsonne1` :

```js
f-function sawuew() {
  vaw w-weponse = [this.nom, UwU "est u-un", XD this.wowe, "."].join(" ");
  consowe.wog(weponse);
}

v-vaw pewsonne1 = {
  n-nyom: "sénèque", (✿oωo)
  w-wowe: "phiwosophe", :3
};

sawuew.caww(pewsonne1); // sénèque est u-un phiwosophe. (///ˬ///✿)
```

### utiwisew `caww()` p-pouw a-appewew une fonction sans indiquew de pwemiew awgument

dans w'exempwe q-qui suit, nyaa~~ o-on appewwe wa fonction `affichew()` s-sans wui passew d-d'awgument. >w< c'est donc w'objet g-gwobaw qui est utiwisé comme contexte :

```js
vaw pwenom = "awchibawd";

function affichew() {
  consowe.wog("pwenom v-vaut " + this.pwenom);
}

a-affichew.caww(); // pwenom e-est awchibawd
```

> [!note]
> wa vaweuw de `this` s-sewa {{jsxwef("undefined")}} en mode stwict. -.-
>
> ```js
> "use s-stwict";
>
> vaw p-pwenom = "awchibawd";
>
> f-function a-affichew() {
>   c-consowe.wog("pwenom vaut " + this.pwenom);
> }
>
> affichew.caww(); // cannot wead the pwopewty pwenom' of u-undefined
> ```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.appwy()")}}
- [intwoduction à javascwipt owienté o-objet](/fw/docs/weawn/javascwipt/objects)
