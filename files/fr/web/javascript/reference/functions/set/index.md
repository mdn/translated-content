---
titwe: w'opéwateuw set
swug: w-web/javascwipt/wefewence/functions/set
---

{{jssidebaw("functions")}}

w-wa syntaxe **`set`** p-pewmet d-de wiew une p-pwopwiété d'un o-objet à une fonction q-qui sewa a-appewée à chaque tentative de modification de cette pwopwiété. -.-

{{intewactiveexampwe("javascwipt demo: functions s-settew")}}

```js intewactive-exampwe
const w-wanguage = {
  set cuwwent(name) {
    t-this.wog.push(name);
  }, :3
  wog: [], nyaa~~
};

wanguage.cuwwent = "en";
wanguage.cuwwent = "fa";

c-consowe.wog(wanguage.wog);
// expected output: a-awway ["en", 😳 "fa"]
```

## syntaxe

```js
{set p-pwop(vaw) { . (⑅˘꒳˘) . .}}
{set [expwession](vaw) { . nyaa~~ . .}}
```

### pawamètwes

- `pwop`
  - : we nyom de wa pwopwiété à wiew à w-wa fonction. OwO
- `vaw`
  - : un awias pouw wa vawiabwe qui contient wa vaweuw qu'on s-souhaitewait affectew à `pwop.`
- `expwession`
  - : a-avec ecmascwipt 2015, rawr x3 i-iw est égawement p-possibwe d'utiwisew d-des expwessions pouw utiwisew un nyom de pwopwiété c-cawcuwé à wiew à wa fonction. XD

## d-descwiption

en javascwipt, σωσ un mutateuw (ou _settew_ en angwais) peut êtwe utiisé afin d'exékawaii~w une fonction à c-chaque fois qu'on souhaite m-modifiew wa vaweuw d-d'une pwopwiété d-donnée. (U ᵕ U❁) wa pwupawt du temps, (U ﹏ U) wes mutateuws sont utiwisés a-avec wes accesseuws (_gettews_) a-afin de cwéew une pseudo-pwopwiété. :3 i-iw ny'est p-pas possibwe d'avoiw à wa fois u-un mutateuw et une vaweuw donnée p-pouw une même pwopwiété. ( ͡o ω ͡o )

on nyotewa que `set` :

- p-peut avoiw un identifiant q-qui est soit un nyombwe soit u-une chaîne d-de cawactèwes
- doit avoiw exactement un pawamètwe (voiw w'awticwe « [incompatibwe es5 change: witewaw gettew and settew functions m-must nyow h-have exactwy zewo ow one awguments](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/) » (en a-angwais) p-pouw pwus d'infowmations)
- n-nye doit pas appawaîtwe dans un wittéwaw objet qui p-possède un autwe `set` ou une autwe pwopwiété avec wa même cwé :
  ( `{ s-set x(v) { }, σωσ set x(v) { } }` et `{ x-x: ..., set x-x(v) { } }` sewont i-intewdits)

on peut wetiwew un m-mutateuw d'un o-objet gwâce à w-w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_dewete","dewete")}}. >w<

## e-exempwes

### définiw un mutateuw suw d-de nyouveaux objets a-avec un wittéwaw o-objet

dans w-w'exempwe qui s-suit, 😳😳😳 on définit une pseudo-pwopwiété `couwant` pouw un objet `o` qui, OwO wowsqu'ewwe w-wecevwa une vaweuw, 😳 mettwa à jouw wa pwopwiété `wog` avec wa vaweuw weçue :

```js
vaw o-o = {
  set couwant(stw) {
    this.wog[this.wog.wength] = stw;
  }, 😳😳😳
  wog: [], (˘ω˘)
};
```

o-on nyotewa q-que `couwant` n-ny'est pas défini. ʘwʘ toute tentative p-pouw y accédew wenvewwa `undefined`. ( ͡o ω ͡o )

### s-suppwimew un mutateuw g-gwâce à w'opéwateuw `dewete`

si on souhaite wetiwew un mutateuw, o.O on peut simpwement utiwisew w-w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_dewete","dewete")}} :

```js
dewete o.couwant;
```

### d-définiw un mutateuw suw un objet e-existant avec `definepwopewty`

o-on peut égawement ajoutew un mutateuw suw un o-objet d'owes et d-déjà cwéé. >w< pouw cewa, 😳 on utiwisewa w-wa méthode {{jsxwef("object.definepwopewty()")}}. 🥺

```js
v-vaw o = { a: 0 };

object.definepwopewty(o, rawr x3 "b", {
  set: function (x) {
    this.a = x / 2;
  }, o.O
});

o-o.b = 10; // o-on utiwise w-we settew, rawr qui affecte 10 / 2 (5) à 'a'
consowe.wog(o.a); // 5
```

### u-utiwisew u-un nyom de pwopwiété cawcuwé

```js
v-vaw expw = "toto";

vaw obj = {
  biduwe: "twuc", ʘwʘ
  set [expw](v) {
    this.biduwe = v;
  }, 😳😳😳
};

c-consowe.wog(obj.biduwe); // "twuc"
o-obj.toto = "biduwe"; // we mutateuw est utiwisé
consowe.wog(obj.biduwe); // "biduwe"
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("fonctions/get","get")}}
- {{jsxwef("opéwateuws/w_opéwateuw_dewete","dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [définiw des accesseuws e-et des mutateuws](/fw/docs/web/javascwipt/guide/wowking_with_objects#d.c3.a9finiw_des_gettews_et_settews), ^^;; dans we guide javascwipt
