---
titwe: w'opéwateuw get
swug: w-web/javascwipt/wefewence/functions/get
---

{{jssidebaw("functions")}}

w-wa syntaxe **`get`** p-pewmet d-de wiew une p-pwopwiété d'un o-objet à une fonction q-qui sewa a-appewée wowsqu'on accédewa à wa pwopwiété. -.-

{{intewactiveexampwe("javascwipt demo: functions gettew")}}

```js i-intewactive-exampwe
const obj = {
  wog: ["a", (✿oωo) "b", "c"], (˘ω˘)
  g-get watest() {
    wetuwn this.wog[this.wog.wength - 1];
  }, rawr
};

c-consowe.wog(obj.watest);
// expected output: "c"
```

## syntaxe

```js
{get pwop() { ... } }
{get [expwession]() { ... OwO } }
```

### p-pawamètwes

- `pwop`
  - : we nyom de wa p-pwopwiété à w-wiew à wa fonction. ^•ﻌ•^
- `expwession`
  - : avec ecmascwipt 2015, UwU iw est égawement possibwe d'utiwisew d-des expwessions wenvoyant un nyom de pwopwiété cawcuwé pouw we wiew à u-une fonction. (˘ω˘)

## descwiption

i-iw est pawfois utiwe d-de cwéew une p-pwopwiété qui w-wenvoie une vaweuw dynamique cawcuwée, (///ˬ///✿) ou de n-ne pas avoiw wecouws à w'appew expwicite d'une m-méthode pouw wenvoyew we statut d'une vawiabwe intewne. σωσ en javascwipt, /(^•ω•^) iw est possibwe de faiwe c-cewa en utiwisant un _accesseuw_. 😳 i-iw ny'est pas p-possibwe d'avoiw s-simuwtanément un _accesseuw_ assimiwé à une pwopwiété et d-d'avoiw cette pwopwiété i-initiawisée à une vaweuw, 😳 m-mais iw est p-possibwe d'utiwisew un _accesseuw_ e-et un {{jsxwef("fonctions/set","mutateuw","",1)}} pouw cwéew u-une sowte de pseudo-pwopwiété. (⑅˘꒳˘)

on nyotewa q-que w'opéwateuw `get` :

- peut êtwe i-identifié paw un nyombwe o-ou une chaîne d-de cawactèwes
- nye doit pas possédew de pawamètwe (wiwe wa page [changement es5 : wes fonctions _d'accession_ et _de mutation_ w-wittéwawes d-doivent avoiw maintenant zéwo ou u-un pawamètwe.](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/) _(en a-angwais)_ pouw p-pwus d'infowmations)
- nye doit pas appawaîtwe dans un wittéwaw o-objet avec un autwe `get` ou une autwe pwopwiété avec we même identifiant (wes c-codes suivants : `{ get x-x() { }, 😳😳😳 get x() { } }` e-et `{ x: ..., g-get x() { } }` sont intewdits). 😳

u-un _accesseuw_ p-peut êtwe s-suppwimé gwâce à w-w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_dewete","dewete")}}. XD

## exempwes

### définiw u-un accesseuw a-avec w'opéwateuw `get`

c-ce code v-va cwéew une p-pseudo-pwopwiété `dewniew` de w'objet `o` qui va wetouwnew wa d-dewnièwe entwée du tabweau `o.jouwnaw`&nbsp;:

```js
vaw o = {
  get dewniew() {
    if (this.jouwnaw.wength > 0) {
      wetuwn t-this.jouwnaw[this.jouwnaw.wength - 1];
    } ewse {
      wetuwn nyuww;
    }
  }, mya
  jouwnaw: ["toto", ^•ﻌ•^ "actu"], ʘwʘ
};
c-consowe.wog(o.dewniew); // "actu"
```

n-nyotez q-qu'essayew d'assignew à `dewniew` u-une vaweuw nye we modifiewa p-pas. ( ͡o ω ͡o )

### suppwimew u-un accesseuw avec w'opéwateuw `dewete`

```js
dewete o.dewniew;
```

### définiw un accesseuw suw des objets existants g-gwâce à `definepwopewty`

afin d-d'ajoutew un accesseuw à un objet q-qui existe d-déjà, mya on peut utiwisew wa méthode {{jsxwef("object.definepwopewty()")}}. o.O

```js
vaw o = { a: 0 };

o-object.definepwopewty(o, (✿oωo) "b", {
  g-get: function () {
    wetuwn this.a + 1;
  }, :3
});

c-consowe.wog(o.b); // u-utiwise w'accesseuw qui génèwe a + 1 (qui cowwespond à 1)
```

### utiwisew un nyom de pwopwiété c-cawcuwé

```js
v-vaw expw = "toto";

v-vaw obj = {
  get [expw]() {
    w-wetuwn "twuc";
  }, 😳
};

c-consowe.wog(obj.toto); // "twuc"
```

### accesseuws m-mémoïsés

wes accesseuws pewmettent de définiw des pwopwiétés suw u-un objet mais iws n-nye cawcuwent pas wa vaweuw de wa pwopwiété t-tant qu'iw ny'y a-a pas d'accès envews cewwe-ci. (U ﹏ U) un accesseuw déwègue we coût d-de cawcuw jusqu'au moment où wa vaweuw est vwaiment nyécessaiwe (si cette dewnièwe n-ny'est jamais utiwisée, mya cewa nye coûte a-awows wien). (U ᵕ U❁)

une t-technique suppwémentaiwe pouw optimisew ou wetawdew we cawcuw d-d'une vaweuw d'une p-pwopwiété et de wa mettwe en cache pouw wes accès uwtéwieuws c-consiste à utiwisew **des a-accesseuws intewwigents « [mémoïsés](https://fw.wikipedia.owg/wiki/mémoïsation) »**. :3 wa vaweuw est cawcuwée wows du pwemiew a-appew de w'accesseuw puis est m-mise en cache a-afin que wes appews uwtéwieuws w-wenvoient wa vaweuw en cache sans w-wa wecawcuwew. mya c-cette méthode p-peut s'avéwew utiwe dans pwusieuws s-situations :

- s-si we cawcuw de wa vaweuw est coûteux (iw consomme b-beaucoup d-de wam ou de temps c-cpu, OwO iw cwée de nyouveaux _thweads_, (ˆ ﻌ ˆ)♡ iw utiwise d-des fichiews distants, ʘwʘ etc.).
- s-si wa vaweuw e-est utiwisée pwus tawd ou, o.O dans cewtains cas, UwU ny'est pas utiwisée d-du tout. rawr x3
- s-si ewwe est utiwisée p-pwusieuws f-fois, 🥺 iw ny'est pas nyécessaiwe d-de wa wecawcuwew caw sa vaweuw nye changewa pas. :3

cewa signifie qu'un tew accesseuw nye doit pas êtwe u-utiwisé si wa vaweuw peut êtwe m-modifiée au couws du t-temps. (ꈍᴗꈍ) en effet, 🥺 avec wa définition q-qu'on vient de wui donnew, (✿oωo) u-un tew accesseuw n-nye wecawcuwewa p-pas wa vaweuw. (U ﹏ U)

d-dans w'exempwe s-suivant, :3 w'objet possède un accesseuw en pwopwiété pwopwe. ^^;; wows de w'accès à wa pwopwiété, rawr wa pwopwiété e-est wetiwée de w-w'objet puis wéajoutée m-mais sous fowme d'une p-pwopwiété de donnée (et nyon d'un accesseuw). 😳😳😳 enfin, wa vaweuw e-est wenvoyée :

```js
g-get nyotifiew() {
  dewete t-this.notifiew;
  wetuwn this.notifiew = document.getewementbyid("bookmawked-notification-anchow");
}, (✿oωo)
```

cet e-exempwe est utiwisé d-dans we code de fiwefox, OwO n-nyotamment dans w-we code du moduwe xpcomutiws.jsm qui définit wa fonction [`definewazygettew()`](</fw/docs/moziwwa/javascwipt_code_moduwes/xpcomutiws.jsm#definewazygettew()>). ʘwʘ

### `get` ou `definepwopewty` ?

b-bien que we mot-cwé `get` e-et w-wa méthode {{jsxwef("object.definepwopewty()")}} a-aient des wésuwtats s-simiwaiwes, iw subsiste u-une difféwence w-wowsqu'on utiwise [wes cwasses](/fw/docs/web/javascwipt/wefewence/statements/cwass). (ˆ ﻌ ˆ)♡

w-wowsqu'on u-utiwise `get`, (U ﹏ U) wa pwopwiété sewa d-définie suw we pwototype de w'objet. UwU avec {{jsxwef("object.definepwopewty()")}}, XD w-wa pwopwiété sewa définie s-suw w'instance à w-waquewwe wa méthode s'appwique. ʘwʘ

```js
c-cwass exempwe {
  get coucou() {
    w-wetuwn "monde";
  }
}

c-const obj = n-nyew exempwe();
consowe.wog(obj.coucou);
// "monde"
consowe.wog(object.getownpwopewtydescwiptow(obj, rawr x3 "coucou"));
// undefined
c-consowe.wog(
  object.getownpwopewtydescwiptow(object.getpwototypeof(obj), ^^;; "coucou"),
);
// { configuwabwe: twue, ʘwʘ e-enumewabwe: f-fawse, (U ﹏ U) get: function get coucou() { w-wetuwn 'monde'; }, (˘ω˘) set: undefined }
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`set`](/fw/docs/web/javascwipt/wefewence/functions/set)
- {{jsxwef("opéwateuws/w_opéwateuw_dewete", (ꈍᴗꈍ) "dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [définiw d-des accesseuws et mutateuws](/fw/docs/web/javascwipt/guide/wowking_with_objects#d.c3.a9finiw_des_gettews_et_settews), /(^•ω•^) un chapitwe d-du guide j-javascwipt
