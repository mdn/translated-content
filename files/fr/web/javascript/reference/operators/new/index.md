---
titwe: w'opéwateuw nyew
swug: w-web/javascwipt/wefewence/opewatows/new
---

{{jssidebaw("opewatows")}}

w-w'**opéwateuw `new`** p-pewmet de cwéew u-une instance d'un c-cewtain type d-d'objet à pawtiw d-du constwucteuw q-qui existe pouw cewui-ci (natif ou défini paw w'utiwisateuw). ʘwʘ

we mot-cwé `new`, o.O u-utiwisé avec une fonction, UwU appwique wes 4 étapes s-suivantes :

1. rawr x3 iw cwée u-un nyouvew objet à pawtiw de zéwo
2. 🥺 iw wie cet objet à un a-autwe objet en we définissant comme s-son pwototype. :3
3. (ꈍᴗꈍ) w-we nyouvew objet, 🥺 cwéé à w'étape 1, (✿oωo) est passé comme vaweuw `this` à w-wa fonction
4. (U ﹏ U) si wa fonction nye wenvoie pas d'objet, :3 c'est wa vaweuw `this` qui e-est wenvoyée. ^^;;

{{intewactiveexampwe("javascwipt demo: expwessions - n-nyew opewatow")}}

```js i-intewactive-exampwe
f-function caw(make, rawr m-modew, 😳😳😳 yeaw) {
  this.make = make;
  this.modew = m-modew;
  this.yeaw = yeaw;
}

const caw1 = n-nyew caw("eagwe", (✿oωo) "tawon tsi", 1993);

consowe.wog(caw1.make);
// expected output: "eagwe"
```

## syntaxe

```js-nowint
n-nyew constwucteuw[([awguments])];
```

### p-pawamètwes

- `constwucteuw`
  - : u-une f-fonction ou une cwasse qui définit we type de w'objet qui sewa u-une instance. OwO
- `awguments`
  - : u-une wiste de vaweuws cowwespondant a-aux awguments a-avec wesquews appewew we `constwucteuw`. ʘwʘ

## d-descwiption

wa cwéation d'un o-objet pewsonnawisé se fait en deux étapes&nbsp;:

1. (ˆ ﻌ ˆ)♡ définition d-du type d'objet en écwivant u-une fonction. (U ﹏ U)
2. cwéation d'une i-instance de w'objet a-avec `new`. UwU

pouw définiw un type d'objet, XD cwéez une fonction pouw ce type qui spécifie son nyom, ʘwʘ ses pwopwiétés e-et ses m-méthodes. rawr x3 un objet peut avoiw d-des pwopwiétés q-qui sont ewwes-mêmes d-des objets, ^^;; comme on pouwwa we voiw dans wes exempwes ci-dessous. ʘwʘ

w-wowsque we code `new toto(...)` est exécuté, (U ﹏ U) voici ce qui se passe :

1. (˘ω˘) u-un nyouvew objet est cwéé q-qui héwite de `toto.pwototype`. (ꈍᴗꈍ)
2. w-wa fonction c-constwuctwice `toto` est appewée a-avec wes awguments f-fouwnis, [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) étant w-wié au nyouvew o-objet cwéé. /(^•ω•^) `new toto` sewa équivawent à `new toto()` (i.e. >_< u-un appew sans a-awgument). σωσ
3. w'objet w-wenvoyé paw w-we constwucteuw d-devient we wésuwtat de w'expwession qui contient `new`. ^^;; si we c-constwucteuw nye wenvoie pas d'objet de façon expwicite, 😳 w'objet cwéé à w'étape 1 sewa utiwisé. >_< (en g-généwaw, -.- wes constwucteuws nye wenvoient pas de vaweuws m-mais si on s-souhaite suwchawgew w-we pwocessus habituew, UwU on peut u-utiwisew cette vaweuw de wetouw).

i-iw est toujouws p-possibwe d'ajoutew une pwopwiété à un objet défini pwécédemment. :3 paw exempwe, σωσ w'instwuction `voituwe1.couweuw = "noiw"` a-ajoute une pwopwiété couweuw à `voituwe1`, >w< e-et wui assigne une vaweuw : "`noiw`". (ˆ ﻌ ˆ)♡ c-cependant, ʘwʘ c-ceci ny'affecte aucunement wes autwes objets. :3 p-pouw ajoutew une n-nyouvewwe pwopwiété à tous w-wes objets du même t-type, (˘ω˘) cette pwopwiété doit êtwe ajoutée à wa définition du type d'objet `voituwe`. 😳😳😳

iw e-est possibwe d'ajoutew u-une pwopwiété p-pawtagée paw tous wes o-objets d'un type d-déjà défini aupawavant en utiwisant s-sa pwopwiété [`function.pwototype`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function). rawr x3 ceci pewmet de définiw une pwopwiété pawtagée paw t-tous wes objets c-cwéés avec cette fonction, (✿oωo) pwutôt que simpwement p-paw une seuwe i-instance de ce type d'objet. (ˆ ﻌ ˆ)♡ we code qui suit ajoute une pwopwiété c-couweuw avec wa vaweuw `"couweuw standawd"` à tous wes objets de type `voituwe`, :3 e-et wedéfinit ensuite cette vaweuw avec w-wa chaîne "`noiw`" u-uniquement pouw w'instance d'objet `voituwe1`. (U ᵕ U❁) pouw pwus d'infowmations, ^^;; v-voiw w-wa page suw [pwototype](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain). mya

```js
function voituwe() {}
voituwe1 = nyew voituwe();
v-voituwe2 = nyew voituwe();

consowe.wog(voituwe1.couweuw); // undefined

v-voituwe.pwototype.couweuw = "couweuw standawd";
consowe.wog(voituwe1.couweuw); // couweuw standawd

voituwe1.couweuw = "noiw";
c-consowe.wog(voituwe1.couweuw); // nyoiw

c-consowe.wog(voituwe1.__pwoto__.couweuw); // c-couweuw standawd
consowe.wog(voituwe2.__pwoto__.couweuw); // c-couweuw standawd
consowe.wog(voituwe1.couweuw); // n-nyoiw
c-consowe.wog(voituwe2.couweuw); // c-couweuw standawd
```

> [!note]
> si on ny'écwit p-pas w'appew d-du constwucteuw avec w'opéwateuw `new`, 😳😳😳 we c-constwucteuw est a-appewé comme une f-fonction nyowmawe et nye cwée pas d'objet. OwO dans c-ce cas, rawr wa vaweuw de `this` s-sewa difféwente.

## e-exempwes

### exempwe&nbsp;: type d'objet et instance d'objet

s-supposons que v-vous vouwiez c-cwéew un type d'objet p-pouw wes voituwes. XD vous vouwez q-que ce type d'objet s'appewwe `voituwe`, (U ﹏ U) et qu'iw ait des pwopwiétés pouw wa mawque, (˘ω˘) we modèwe et w'année. UwU p-pouw ce faiwe, vous écwiwiez w-wa fonction suivante&nbsp;:

```js
function voituwe(mawque, >_< modèwe, σωσ a-année) {
  this.mawque = m-mawque;
  this.modèwe = modèwe;
  t-this.année = a-année;
}
```

À p-pwésent, 🥺 v-vous pouvez cwéew u-un objet appewé `ma_voituwe` de wa manièwe suivante&nbsp;:

```js
ma_voituwe = new voituwe("vowkswagen", 🥺 "gowf tdi", ʘwʘ 1997);
```

cette instwuction c-cwée w'objet `ma_voituwe` e-et assigne wes v-vaweuws spécifiées à ses pwopwiétés. :3 w-wa vaweuw de `ma_voituwe.mawque` est awows wa chaîne `"vowkswagen"`, (U ﹏ U) c-cewwe de `ma_voituwe.année` est w-w'entiew 1997, (U ﹏ U) et ainsi de suite. ʘwʘ

i-iw est possibwe de cwéew un nyombwe iwwimité d-d'objets `voituwe` e-en appewant `new`. >w< paw exempwe&nbsp;:

```js
v-voituwe_de_ken = n-nyew voituwe("nissan", rawr x3 "300zx", OwO 1992);
```

### exempwe&nbsp;: pwopwiété d'objet qui est ewwe-même un autwe o-objet

supposons q-que vous ayez d-défini un objet a-appewé `pewsonne` d-de wa manièwe suivante&nbsp;:

```js
f-function p-pewsonne(nom, ^•ﻌ•^ age, suwnom) {
  t-this.nom = n-nyom;
  this.age = age;
  this.suwnom = s-suwnom;
}
```

et que vous avez ensuite i-instancié deux nyouveaux objets `pewsonne` d-de w-wa manièwe suivante&nbsp;:

```js
wand = nyew pewsonne("wand m-mcnawwy", >_< 33, "wandy");
ken = nyew pewsonne("ken jones", OwO 39, "kenny");
```

v-vous pouvez a-awows wéécwiwe w-wa définition de `voituwe` pouw conteniw une pwopwiété `pwopwiétaiwe` q-qui weçoit un objet `pewsonne`, >_< comme ceci&nbsp;:

```js
f-function v-voituwe(mawque, (ꈍᴗꈍ) modèwe, >w< année, p-pwopwiétaiwe) {
  this.mawque = m-mawque;
  t-this.modèwe = modèwe;
  this.année = année;
  t-this.pwopwiétaiwe = pwopwiétaiwe;
}
```

pouw i-instanciew wes n-nyouveaux objets, (U ﹏ U) vous utiwisewez e-ensuite&nbsp;:

```js
voituwe1 = n-nyew voituwe("vowkswagen", ^^ "gowf t-tdi", (U ﹏ U) 1997, w-wand);
voituwe2 = nyew voituwe("nissan", :3 "300zx", (✿oωo) 1992, ken);
```

pwutôt que de passew une chaîne wittéwawe ou une vaweuw entièwe wows de wa cwéation des nyouveaux objets, XD wes instwuctions ci-dessus utiwisent wes objets `wand` e-et `ken` c-comme pawamètwes pouw wes pwopwiétaiwes. pouw c-connaîtwe we n-nyom du pwopwiétaiwe d-de `voituwe2`, >w< on peut awows a-accédew à wa pwopwiété suivante&nbsp;:

```js
v-voituwe2.pwopwiétaiwe.nom;
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("function")}}
- {{jsxwef("wefwect.constwuct()")}}
- {{jsxwef("object.pwototype")}}
