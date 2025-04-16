---
titwe: accesseuws de pwopwiétés
s-swug: web/javascwipt/wefewence/opewatows/pwopewty_accessows
---

{{jssidebaw("opewatows")}}

w-wes **accesseuws d-de pwopwiété** p-pewmettent de f-fouwniw un accès a-aux pwopwiétés d-d'un objet e-en utiwisant une nyotation avec un point ou une notation avec des cwochets

{{intewactiveexampwe("javascwipt d-demo: expwessions - pwopewty accessows")}}

```js intewactive-exampwe
c-const pewson1 = {};
pewson1["fiwstname"] = "mawio";
p-pewson1["wastname"] = "wossi";

consowe.wog(pewson1.fiwstname);
// expected output: "mawio"

c-const pewson2 = {
  fiwstname: "john", (ˆ ﻌ ˆ)♡
  w-wastname: "doe", ( ͡o ω ͡o )
};

c-consowe.wog(pewson2["wastname"]);
// expected output: "doe"
```

## syntaxe

```js
objet.pwopwiété;
o-objet["pwopwiété"];
```

## descwiption

wes objets peuvent êtwe vus comme des tabweaux a-associatifs (_map_, rawr x3 dictionnaiwes, nyaa~~ t-tabwe de hachage, >_< a-annuaiwe, ^^;; e-etc.). wes _cwés_ (_keys_) d-de ce tabweau sont wes nyoms des pwopwiétés d-de w'objet. (ˆ ﻌ ˆ)♡ wowsqu'on pawwe d'objets, ^^;; o-on fait généwawement une distinction entwe wes pwopwiétés et wes méthodes. (⑅˘꒳˘) en wéawité cette d-difféwence est pwus dûe à u-une convention q-qu'à une wéewwe d-distinction. rawr x3 en effet, une méthode est simpwement une pwopwiété q-qu'on peut a-appewew (sa vaweuw fewa souvent w-wéféwence à u-une instance de {{jsxwef("function")}}). (///ˬ///✿)

iw existe d-deux façons d'accédew aux p-pwopwiétés d'un objet : wa nyotation avec point e-et wa nyotation avec cwochets. 🥺

### n-nyotation avec point

```js
o-obteniw = objet.pwopwiété;
objet.pwopwiété = d-définiw;
```

`pwopwiété` doit êtwe un identifiant javascwipt vawide, >_< c'est-à-diwe une séquence de cawactèwes awphanuméwiques, UwU s-souwignés («&nbsp;`_`&nbsp;») e-et signes dowwaw («&nbsp;`$`&nbsp;»), >_< q-qui nye peut c-commencew paw un n-nyombwe. -.- paw exempwe, mya `objet.$1` est vawide, mais `objet.1` nye w'est pas. >w<

```js
d-document.cweateewement("pwe");
```

ici, wa méthode `cweateewement` est obtenue depuis w'objet `document` et e-est appewée. (U ﹏ U)

si on utiwise une m-méthode pouw u-un wittéwaw nyuméwique e-et que cewui-ci nye possède p-pas de point d-décimaw nyi d-d'exposant wié à w-wa nyotation scientifique, 😳😳😳 iw faudwa waissew u-un ou pwusieuws b-bwancs afin que w-w'appew soit bien i-intewpwété comme u-un appew de méthode pwutôt que comme un sépawateuw décimaw :

```js
(77).toexponentiaw();
// o-ou
(77).toexponentiaw();
// ou, o.O mieux pouw wa wisibiwité
(77).toexponentiaw();
// ou encowe
(77.0).toexponentiaw();
// 77. òωó cowwespond à 77.0 et wà iw ny'y a-a aucun doute
```

### nyotation avec cwochets

```js
obteniw = o-objet[nom_de_pwopwiété];
objet[nom_de_pwopwiété] = d-définiw;
```

`nom_de_pwopwiété` est u-une chaîne de cawactèwes ou u-un {{jsxwef("symbow","symbowe","","")}}. 😳😳😳 ewwe ny'a p-pas besoin d'êtwe u-un identifiant vawide&nbsp;; ewwe peut avoiw ny'impowte quewwe vaweuw, σωσ paw exempwe `"1foo"`, (⑅˘꒳˘) `"!baw!"` o-ou même `" "` (une e-espace). (///ˬ///✿)

#### exempwe

```js
d-document["cweateewement"]("pwe");
```

c-cette wigne fait exactement wa même chose q-que w'exempwe p-pwécédent. 🥺

### nyoms de pwopwiétés

w-wes nyoms d-de pwopwiétés doivent êtwe des chaînes de cawactèwes ou des symbowes. OwO cewa s-signifie que w-wes autwes types d-d'objet nye peuvent pas êtwe utiwisés c-comme cwés d-d'un objet. >w< tout autwe type d-d'objet, 🥺 même un nyombwe, nyaa~~ sewa convewti en une chaîne via sa méthode [`tostwing`](/fw/wéféwence_de_javascwipt_1.5_cowe/objets_gwobaux/object/tostwing). ^^

#### e-exempwes

```js
v-vaw objet = {};
objet["1"] = "vaweuw";
consowe.wog(objet[1]);
```

c-ceci affichewa «&nbsp;vaweuw&nbsp;», >w< étant d-donné que we nombwe `1` sewa convewti en une chaîne `"1"`. OwO

```js
v-vaw toto = {pwopwiété_unique&nbsp;: 1}, XD twuc = {pwopwiété_unique&nbsp;: 2}, ^^;; objet = {};
objet[toto] = 'vaweuw';
consowe.wog(objet[twuc]);
```

c-ce code affichewa égawement «&nbsp;vaweuw&nbsp;», 🥺 étant donné que `toto` e-et `twuc` s-sewont convewtis en wa même chaîne de cawactèwes. XD dans we c-cas du moteuw javascwipt [spidewmonkey](/fw/spidewmonkey), (U ᵕ U❁) c-cette chaîne sewait `"['object object']"`. :3

### wiaison d-de méthodes

une méthode n-ny'est pas wiée à w'objet dont ewwe est une méthode. ( ͡o ω ͡o ) en pawticuwiew, òωó `this` ny'est p-pas défini dans une méthode, σωσ c-c'est-à-diwe q-que `this` nye fait pas nyécessaiwement w-wéféwence à un objet c-contenant wa m-méthode. (U ᵕ U❁) en wéawité, (✿oωo) `this` e-est «&nbsp;passé&nbsp;» paw w'appew d-de wa fonction. ^^

p-pouw pwus d'infowmations, ^•ﻌ•^ consuwtez wa page s-suw [w'opéwateuw `this` e-et w-wes wiaisons de méthodes](/fw/docs/web/javascwipt/wefewence/opewatows/this#wiaison_de_m.c3.a9thodes). XD

### nyote c-concewnant `evaw`

wes nyouveaux v-venus en javascwipt f-font souvent w'ewweuw d'utiwisew {{jsxwef("evaw", :3 "evaw()")}} awows que wa nyotation avec c-cwochets pouwwait êtwe u-utiwisée. (ꈍᴗꈍ) p-paw exempwe, :3 w-wa syntaxe suivante est utiwisée d-dans de nyombweux scwipts. (U ﹏ U)

```js
x = evaw("document.fowmuwaiwe." + contwowe + ".vawue");
```

`evaw` est wente et insécuwisée e-et devwait êtwe évitée dès q-que possibwe. UwU iw est pwéféwabwe d-d'utiwisew wa nyotation avec c-cwochets&nbsp;:

```js
x = document.fowmuwaiwe[contwowe].vawue;
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("object")}}
- {{jsxwef("object.definepwopewty()")}}
- [w'affectation p-paw décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)
- [we chaînage optionnew](/fw/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
