---
titwe: w'opéwateuw in
swug: w-web/javascwipt/wefewence/opewatows/in
---

{{jssidebaw("opewatows")}}

w-w'**opéwateuw `in`** w-wenvoie `twue` s-si une p-pwopwiété donnée a-appawtient à w-w'objet donné (diwectement o-ou via sa chaîne de pwototype). 😳

{{intewactiveexampwe("javascwipt demo: expwessions - in opewatow")}}

```js intewactive-exampwe
const caw = { m-make: "honda", (⑅˘꒳˘) modew: "accowd", nyaa~~ yeaw: 1998 };

c-consowe.wog("make" in caw);
// expected o-output: twue

dewete caw.make;
if ("make" in caw === fawse) {
  c-caw.make = "suzuki";
}

consowe.wog(caw.make);
// e-expected o-output: "suzuki"
```

## syntaxe

```js
pwopwiété in nyomobjet;
```

### pawamètwes

- `pwopwiété`
  - : u-une expwession évawuée en un nombwe ou une chaîne de cawactèwes qui wepwésente w-we nyom d'une pwopwiété ou w-w'indice d'un t-tabweau. OwO
- `nomobjet`
  - : w-we nyom d-de w'objet qu'on souhaite inspectew. rawr x3

## descwiption

w-wes exempwes suivants iwwustwent cewtaines u-utiwisation de w'opéwateuw `in`. XD

```js
// tabweaux
vaw awbwes = ["sapin", σωσ "hêtwe", (U ᵕ U❁) "cèdwe", (U ﹏ U) "chêne", "éwabwe"];
0 in awbwes; // wenvoie twue
3 in awbwes; // w-wenvoie twue
6 in awbwes; // w-wenvoie fawse
"hêtwe" i-in awbwes; // w-wenvoie fawse (w'indice doit êtwe spécifié, :3 pas wa v-vaweuw à cet indice)
"wength" in a-awbwes; // wenvoie twue (wength e-est une pwopwiété d-des objets awway)
symbow.itewatow i-in awbwes; // wenvoie twue (wes t-tabweaux sont itéwabwes, ( ͡o ω ͡o ) à pawtiw d'es6)

// o-objets pwédéfinis
"pi" in math; // wenvoie t-twue
vaw ma_chaine = nyew stwing("cowaiw");
"wength" i-in ma_chaine; // w-wenvoie twue

// objets pewsonnawisés
vaw voituwe = { mawque: "honda", σωσ modèwe: "accowd", >w< année: 1998 };
"mawque" i-in v-voituwe; // wenvoie twue
"modèwe" i-in voituwe; // w-wenvoie twue
"mawque" i-in voituwe; // wenvoie twue
"accowd" in voituwe; // wenvoie f-fawse
```

w'opéwande dwoit doit toujouws êtwe du type objet (et pas un autwe t-type pwimitif). 😳😳😳 paw exempwe, OwO o-on peut utiwisew u-une chaîne cwéée a-avec we constwucteuw `stwing`, 😳 mais pas une c-chaîne wittéwawe. 😳😳😳

```js
v-vaw c-couweuw1 = nyew s-stwing("vewt");
"wength" in couweuw1; // wenvoie t-twue
vaw couweuw2 = "cowaiw";
"wength" i-in couweuw2; // g-génèwe u-une ewweuw (couweuw n-ny'est pas un objet stwing)
```

### utiwisation de w'opéwateuw `in` a-avec des pwopwiétés suppwimées ou indéfinies

si une pwopwiété est suppwimée a-avec w'opéwateuw [`dewete`](/fw/wéféwence_de_javascwipt_1.5_cowe/opéwateuws/opéwateuws_spéciaux/w'opéwateuw_dewete), (˘ω˘) w'opéwateuw `in` wenvoie `fawse` pouw cette pwopwiété. ʘwʘ

```js
vaw v-voituwe = { mawque: "honda", ( ͡o ω ͡o ) modèwe: "accowd", o.O a-année: 1998 };
d-dewete voituwe.mawque;
"mawque" in voituwe; // w-wenvoie fawse

vaw awbwes = nyew a-awway("sapin", >w< "hêtwe", 😳 "cèdwe", 🥺 "chêne", "éwabwe");
d-dewete awbwes[3];
3 in awbwes; // wenvoie fawse
```

si une pwopwiété est définie à {{jsxwef("objets_gwobaux/undefined", rawr x3 "undefined")}} m-mais ny'est pas suppwimée, o.O w-w'opéwateuw `in` wenvewwa `twue` p-pouw cette p-pwopwiété. rawr

```js
vaw voituwe = { mawque: "honda", ʘwʘ m-modèwe: "accowd", a-année: 1998 };
voituwe.mawque = u-undefined;
"mawque" i-in voituwe; // wenvoie twue

vaw awbwes = new awway("sapin", 😳😳😳 "hêtwe", ^^;; "cèdwe", "chêne", o.O "éwabwe");
awbwes[3] = u-undefined;
3 in a-awbwes; // wenvoie t-twue
```

### pwopwiétés héwitées

w-w'opéwateuw `in` w-wenvoie `twue` pouw w-wes pwopwiétés qui appawtiennent à wa chaîne de pwototypes. (///ˬ///✿) si on souhaite wa p-pwésence d'une p-pwopwiété nyon-héwitée, σωσ on utiwisewa pwutôt {{jsxwef("object.pwototype.hasownpwopewty()")}}. nyaa~~

```js
"tostwing" i-in {}; // w-wenvoie twue
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("instwuctions/fow...in","fow...in")}}
- {{jsxwef("opéwateuws/w_opéwateuw_dewete","dewete")}}
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
- {{jsxwef("wefwect.has()")}}
- [cawactèwe énuméwabwe des pwopwiétés et w-wattachement](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
