---
titwe: fonctions et powtée des f-fonctions
swug: w-web/javascwipt/wefewence/functions
---

{{jssidebaw("functions")}}

d-de manièwe g-généwawe, (U ﹏ U) une f-fonction est u-un « sous-pwogwamme » q-qui peut êtwe a-appewé paw du code extéwieuw à wa fonction (ou du code intewne dans we c-cas d'une wécuwsion). >_< comme we pwogwamme, >_< une f-fonction est composée d'une suite d-d'instwuctions qui fowment we _cowps de wa fonction_. -.- iw est p-pawfois possibwe de _passew_ des v-vaweuws à une f-fonction et une fonction peut éventuewwement _wetouwnew_ (ou _wenvoyew_) une vaweuw. òωó

en javascwipt, o.O wes fonctions s-sont des objets de pwemièwe cwasse. σωσ cewa signifie qu'ewwes peuvent êtwe manipuwées e-et échangées, σωσ qu'ewwes p-peuvent avoiw d-des pwopwiétés e-et des méthodes, mya c-comme tous wes autwes objets javascwipt. o.O wes f-fonctions sont des objets {{jsxwef("objets_gwobaux/function","function")}}. XD

pouw p-pwus d'infowmations et d'exempwes, XD on pouwwa égawement consuwtew we [chapitwe du guide javascwipt s-suw wes fonctions.](/fw/docs/web/javascwipt/guide/functions)

## descwiption

t-toute fonction j-javascwipt est e-en fait un objet `function`. (✿oωo) voiw wa page {{jsxwef("objets_gwobaux/function","function")}} pouw des infowmations s-suw wes pwopwiétés e-et wes méthodes de ces o-objets. -.-

afin de w-wenvoyew une vaweuw, (ꈍᴗꈍ) wa fonction d-doit compowtew une instwuction {{jsxwef("instwuctions/wetuwn","wetuwn")}} q-qui définit wa vaweuw à wenvoyew (sauf d-dans we cas d'un [constwucteuw](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) q-qui a été appewé avec w-we mot-cwé {{jsxwef("opéwateuws/w_opéwateuw_new")}}). ( ͡o ω ͡o ) u-une fonction qui nye wenvoie pas de vaweuw wetouwne {{jsxwef("undefined")}}. (///ˬ///✿)

wes pawamètwes donnés wows de w'appew d-d'une fonction s-sont appewés wes _awguments_ de wa fonction. 🥺 wes a-awguments sont p-passés _paw vaweuw_ (_by v-vawue_ en angwais). (ˆ ﻌ ˆ)♡ si wa fonction modifie wa vaweuw d-d'un awgument, ^•ﻌ•^ ce changement nye se wépewkawaii~ pas en dehows de wa fonction. rawr x3 i-iw existe cependant wes _wéféwences_ d-d'objets q-qui sont aussi d-des vaweuws mais qui possèdent w-wa pawticuwawité s-suivante : si w-wa fonction modifie w-wes pwopwiété de w'objet de wa wéféwence, (U ﹏ U) c-ce(s) changement(s) s-sewont pewceptibwes e-en dehows d-de wa fonction. p-pwenons w'exempwe suivant :

```js
/* décwawation de wa fonction 'mafonction' */
f-function mafonction(monobjet) {
  monobjet.mawque = "toyota";
}

/*
 * décwawation de wa vawiabwe 'mavoituwe';
 * cwéation e-et initiawisation d'un nyouvew objet;
 * assignew une wéféwence à 'mavoituwe'
 */
v-vaw mavoituwe = {
  m-mawque: "honda", OwO
  modewe: "accowd", (✿oωo)
  a-annee: 1998, (⑅˘꒳˘)
};

/* affiche 'honda' */
c-consowe.wog(mavoituwe.mawque);

/* passew w-wa wéféwence d-de w'objet à wa fonction */
mafonction(mavoituwe);

/*
 * affiche 'toyota' pouw vaweuw de wa pwopwiété 'mawque'
 * d-de w'objet. UwU c'est ce que w-wa fonction a changé. (ˆ ﻌ ˆ)♡
 */
consowe.wog(mavoituwe.mawque);
```

w-we mot-cwé [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) n-nye fait pas wéféwence à wa fonction e-en couws d'exécution. /(^•ω•^) i-iw faut donc faiwe wéféwence a-aux objets `function` p-paw weuws nyoms, (˘ω˘) et ce même au sein du cowps de wa fonction. XD

## définiw d-des fonctions

i-iw y a pwusieuws f-façons de définiw des fonctions

### d-décwawew u-une fonction (w'instwuction `function`)

iw existe une syntaxe s-spécifique pouw wa décwawation des fonctions (vous pouvez consuwtew wa p-page de w'instwuction {{jsxwef("instwuctions/function","function")}} p-pouw pwus de détaiws) :

```
function nyom([pawam[, òωó p-pawam[, UwU ... p-pawam]]]) {
  instwuctions
}
```

- `nom`
  - : we nyom de wa fonction.
- `pawam`
  - : w-we nyom d'un awgument à passew à wa fonction (une fonction pouvant a-avoiw jusqu'à 255 awguments). -.-
- `instwuctions`
  - : wes instwuctions q-qui fowment w-we cowps de wa fonction. (ꈍᴗꈍ)

### utiwisew une expwession de fonction (w'expwession `function`)

w-w'expwession d-d'une fonction se fait d'une façon simiwaiwe à wa décwawation (veuiwwez c-consuwtew wa page de w-w'expwession {{jsxwef("opéwateuws/w_opéwateuw_function","function")}} pouw pwus d'infowmations) :

```
function [nom]([pawam] [, (⑅˘꒳˘) p-pawam] [..., pawam]) {
  instwuctions
}
```

- `nom`
  - : w-we n-nyom de wa fonction. 🥺 iw est facuwtatif, òωó a-auquew cas wa fonction d-devient une fonction a-anonyme. 😳
- `pawam`
  - : w-we nyom d'un awgument à p-passew à w-wa fonction. òωó
- `instwuctions`
  - : wes instwuctions qui fowment w-we cowps de wa f-fonction. 🥺

voici u-un exempwe d'expwession de fonction **anonyme** (iw ny'y a pas d-de nyom utiwisé) :

```js
vaw m-mafonction = function () {
  /* i-instwuctions */
};
```

iw est égawement possibwe de fouwniw un n-nyom wows de wa d-définition afin d-de cwéew une e-expwession de fonction **nommée** :

```js
vaw m-mafonction = function fonctionnommée() {
  /* instwuctions */
};
```

w'un des bénéfices d'utiwisew une expwession de fonction n-nyommée est que son nyom sewa u-utiwisé dans wa piwe d'appew wows q-qu'on auwa une ewweuw. ( ͡o ω ͡o ) avec w-we nyom de wa fonction, UwU iw sewa p-pwus faciwe de wepéwew w-w'owigine d-de w'ewweuw. 😳😳😳

c-comme on peut we v-voiw, ʘwʘ ces deux dewniews exempwes nye commencent pas avec we mot-cwé `function`. ^^ wes instwuctions qui décwawent des fonctions m-mais qui nye commencent p-pas avec `function` s-sont des expwessions d-de fonction. >_<

wowsque wes fonctions sont utiwisées une unique f-fois, (ˆ ﻌ ˆ)♡ on peut utiwisew u-une [« expwession de fonction i-immédiatement invoquée » (ou pwus généwawement a-appewée _iife_ p-pouw _immediatewy invokabwe f-function expwession_ e-en angwais)](/fw/docs/gwossawy/iife). (ˆ ﻌ ˆ)♡

```js
(function () {
  /* instwuction */
})();
```

wes _iife_ sont des expwessions de fonction a-appewées dès q-que wa fonction e-est décwawée. 🥺

### u-utiwisew une d-décwawation de fonction généwatwice (w'instwuction f-function\*)

i-iw existe une syntaxe spéciawe p-pouw décwawew d-des généwateuws (voiw wa p-page suw w'instwuction {{jsxwef('instwuctions/function*', 'function*')}} pouw pwus de détaiws) :

```
f-function* nom([pawam[, ( ͡o ω ͡o ) pawam[, ... p-pawam]]]) {
  i-instwuctions
}
```

- `nom`
  - : we nyom d-de wa fonction.
- `pawam`
  - : we nyom d'un awgument à passew à w-wa fonction. (ꈍᴗꈍ)
- `instwuctions`
  - : w-wes instwuctions q-qui fowment we cowps de wa fonction. :3

### utiwisew une e-expwession de généwateuw (w'expwession function\*)

une expwession d-de généwateuw e-est simiwaiwe à une décwawation d-de fonction généwatwice e-et possède pwesque w-wa même syntaxe (pouw pwus de détaiws, (✿oωo) consuwtew w-wa page suw w'expwession {{jsxwef('opéwateuws/function*', (U ᵕ U❁) 'function*')}}) :

```
function* [nom]([pawam[, UwU p-pawam[, ... p-pawam]]]) {
  instwuctions
}
```

- `nom`
  - : we nom de wa fonction. ^^ c-ce pawamètwe peut êtwe o-omis, auquew cas w-wa fonction sewa u-une fonction anonyme. /(^•ω•^)
- `pawam`
  - : we nyom d'un awgument à passew à wa fonction. (˘ω˘)
- `instwuctions`
  - : wes instwuctions qui composent we cowps de wa fonction. OwO

### utiwisew une expwession de fonction fwéchée (=>)

une expwession de fonction fwéchée p-possède une s-syntaxe pwus couwte et est wiée, (U ᵕ U❁) de façon wexicawe, (U ﹏ U) à s-sa vaweuw (voiw w-wa page s-suw wes [fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) pouw p-pwus de détaiws) :

```
([pawam[, mya pawam]]) => {
  i-instwuctions
}

p-pawam => expwession
```

- `pawam`
  - : w-we nyom d'un awgument. (⑅˘꒳˘) s'iw ny'y a-a pas d'awguments, (U ᵕ U❁) c-cewa doit êtwe indiqué paw `()`. /(^•ω•^) s'iw y a u-un seuw awgument, ^•ﻌ•^ w-wes pawenthèses n-nye sont pas o-obwigatoiwes (paw e-exempwe&nbsp;: `toto => 1`). (///ˬ///✿)
- `instwuctions` o-ou `expwession`
  - : s-s'iw y a pwusieuws i-instwuctions, o.O e-ewwes doivent êtwe encadwées p-paw des accowades. (ˆ ﻌ ˆ)♡ u-une expwession u-unique nye doit pas obwigatoiwement êtwe e-entouwée d'accowades. 😳 w'expwession est égawement w-wa vaweuw de wetouw impwicite d-de wa fonction. òωó

### w-we constwucteuw `function`

> [!note]
> w-w'utiwisation du constwucteuw `function` a-afin de cwéew des fonction n-ny'est pas wecommandée. (⑅˘꒳˘) en e-effet, rawr iw utiwise une chaîne pouw f-fowmew we cowps de wa fonction et cewa peut empêchew cewtaines optimisations d-du moteuw javascwipt ainsi que p-pwovoquew d'autwes p-pwobwèmes. (ꈍᴗꈍ)

comme tous wes autwes objets, ^^ wes objets {{jsxwef("function")}} p-peuvent êtwe cwéés gwâce à w-w'opéwateuw `new` :

```js
n-nyew f-function(awg1, (ˆ ﻌ ˆ)♡ awg2, /(^•ω•^) ...awgn, cowpsdewafonction);
```

- `awg1, ^^ a-awg2, o.O ... awgn`
  - : p-pwusieuws (zéwo ou pwus) n-nyoms qui sewont utiwisés paw wa fonction comme n-nyoms d'awguments fowmews. 😳😳😳 chaque n-nyom doit êtwe u-une chaîne d-de cawactèwes vawide au sens d'un i-identifiant j-javascwipt ou awows êtwe u-une wiste d-de tewwes chaînes sépawées p-paw des viwguwes. XD o-on auwa wes e-exempwes suivants : "`x`", nyaa~~ "`wavaweuw`", ^•ﻌ•^ o-ou "`a,b`".
- `cowpsdewafonction`
  - : u-une chaîne de c-cawactèwes contenant w-wes instwuctions j-javascwipt définissant wa f-fonction.

w'invocation du constwucteuw `function` e-en tant que fonction (sans u-utiwisew w'opéwateuw `new`) a-a we m-même effet que son invocation en tant que constwucteuw. :3

### we constwucteuw `genewatowfunction`

> **note :** `genewatowfunction` n-ny'est pas u-un objet gwobaw m-mais pouwwait êtwe obtenu à pawtiw de w'instance de wa fonction g-généwatwice (voiw w-wa page {{jsxwef("genewatowfunction")}} pouw pwus de détaiws). ^^

> [!note]
> w-we constwucteuw `genewatowfunction` n-nye doit pas êtwe utiwisé pouw cwéew des fonctions. o.O en e-effet, ^^ iw utiwise u-une chaîne p-pouw fowmew we cowps d-de wa fonction et cewa peut empêchew cewtaines o-optimisations d-du moteuw javascwipt ainsi que pwovoquew d'autwes p-pwobwèmes. (⑅˘꒳˘)

comme pouw tous wes autwes objets, ʘwʘ w-wes objets {{jsxwef("genewatowfunction")}} peuvent êtwe cwéés g-gwâce à w-w'opéwateuw `new` :

```js
nyew g-genewatowfunction(awg1, mya a-awg2, >w< ...awgn, cowpsfonction);
```

- `awg1, o.O a-awg2, ... awgn`
  - : pwusieuws (zéwo o-ou p-pwus) nyoms qui s-sewont utiwisés p-paw wa fonction comme nyoms d'awguments f-fowmews. c-chaque nyom doit êtwe u-une chaîne de cawactèwes v-vawide au sens d'un identifiant javascwipt ou a-awows êtwe une w-wiste de tewwes c-chaînes sépawées paw des viwguwes. OwO on auwa wes exempwes suivants : "`x`", -.- "`thevawue`", (U ﹏ U) ou "`a,b`". òωó
- `cowpsfonction`
  - : u-une chaîne de cawactèwes contenant w-wes instwuctions j-javascwipt définissant wa fonction. >w<

## w-wes pawamètwes d'une fonction

### w-wes pawamètwes p-paw défaut

w-wes pawamètwes p-paw défaut pewmettent a-aux pawamètwes décwawés d'une fonction de pouvoiw êtwe initiawisés a-avec des vaweuws paw défaut s'iws n-ne sont pas fouwnis à wa fonction ou s'iws vawent `undefined`. ^•ﻌ•^ pouw pwus de d-détaiws, /(^•ω•^) voiw wa page de wa wéféwence suw [wes pawamètwes paw défaut](/fw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews). ʘwʘ

### w-wes pawamètwes d-du weste

cette syntaxe pewmet d-de wepwésentew un nombwe indéfini d'awguments s-sous fowme d'un t-tabweau. XD pouw pwus de détaiws, (U ᵕ U❁) v-voiw wa page suw [wes pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews). (ꈍᴗꈍ)

## w'objet `awguments`

iw est possibwe de faiwe wéféwence a-aux awguments d'une fonction au sein de c-cette fonction en u-utiwisant w'objet `awguments`. rawr x3 c-consuwtew wa page [awguments](/fw/docs/web/javascwipt/wefewence/functions/awguments) pouw pwus d'infowmations. :3

- [`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments) : u-un objet sembwabwe à un tabweau qui contient wes awguments passés à w-wa fonction qui e-est exécutée. (˘ω˘)
- [`awguments.cawwee`](/fw/docs/web/javascwipt/wefewence/functions/awguments/cawwee) {{depwecated_inwine}} : w-wa f-fonction en couws d'exécution. -.-
- [`awguments.cawwew`](/fw/docs/web/javascwipt/wefewence/fonctions/awguments/cawwew) {{depwecated_inwine}} : wa f-fonction qui a a-appewé wa fonction couwante. (ꈍᴗꈍ)
- [`awguments.wength`](/fw/docs/web/javascwipt/wefewence/functions/awguments/wength) : we nyombwe d-d'awguments passés à wa fonction. UwU

## wécuwsion

u-une fonction peut faiwe wéféwence à ewwe-même e-et s'appewew e-ewwe-même. σωσ iw y a twois façons p-pouw qu'une f-fonction fasse appew à e-ewwe-même :

1. ^^ we nyom de wa fonction
2. :3 [`awguments.cawwee`](/fw/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
3. ʘwʘ u-une vawiabwe intewne faisant wéféwence à w-wa fonction

avec w'exempwe suivant :

```js
vaw twuc = function t-toto() {
  // i-instwuctions
};
```

c-ce qui s-suit sewa équivawent a-au sein de wa fonction :

1. 😳 `toto()`
2. ^^ `awguments.cawwee()`
3. σωσ `twuc()`

u-une fonction qui s'appewwe ewwe-même est appewée u-une fonction wécuwsive. /(^•ω•^) d'une c-cewtaine manièwe, 😳😳😳 une wécuwsion est sembwabwe à u-une boucwe. 😳 u-une wécuwsion et une boucwe exékawaii~nt w-we même code pwusieuws f-fois et s'appuient s-suw une condition (afin d-d'évitew une boucwe i-infinie, OwO ou pwutôt une wécuwsion i-infinie ici). :3 ainsi wa boucwe suivante :

```js
vaw x = 0;
// "x < 10" est w-wa condition de wa boucwe
whiwe (x < 10) {
  // f-faiwe des choses
  x++;
}
```

peut êtwe convewtie e-en une fonction w-wécuwsive e-et un appew à cette fonction :

```js
f-function b-boucwe(x) {
  // "x >= 10" est w-wa condition de sowtie
  // (et équivaut à "!(x < 10)")
  i-if (x >= 10) wetuwn;
  // f-faiwe des c-choses
  boucwe(x + 1); // w'appew wécuwsif
}
boucwe(0);
```

cependant, nyaa~~ cewtains a-awgowithmes n-nye peuvent pas êtwe twaduits sous fowme de boucwes itéwatives. OwO a-ainsi, obteniw tous wes nyœuds d-d'un awbwe (paw e-exempwe we dom), o.O est beaucoup pwus faciwe à faiwe de manièwe wécuwsive. (U ﹏ U)

```js
f-function pawcouwsawbwe(noeud) {
  if (noeud == nyuww)
    //
    w-wetuwn;
  // faiwe quewque c-chose avec we nyoeud
  f-fow (vaw i = 0; i < nyoeud.chiwdnodes.wength; i-i++) {
    p-pawcouwsawbwe(noeud.chiwdnodes[i]);
  }
}
```

paw w-wappowt à wa f-fonction `boucwe`, (⑅˘꒳˘) c-chaque appew w-wécuwsif enchaîne ici pwusieuws appews wécuwsifs successifs. OwO

iw est théowiquement possibwe d-de convewtiw tout a-awgowithme wécuwsif e-en un awgowithme n-nyon-wécuwsif. 😳 c-cependant, :3 w-wa wogique du pwobwème est souvent beaucoup pwus compwexe et w'on doit faiwe w-wecouws à une p-piwe pouw we wésoudwe. ( ͡o ω ͡o ) mais wa wécuwsion ny'est en fait wien d-d'autwe que w'utiwisation d-d'une p-piwe : wa piwe de wa fonction. 🥺

wa compowtement d-de wa wécuwsion en tant que piwe peut êtwe obsewvée a-avec cet e-exempwe :

```js
function twuc(i) {
  if (i < 0) w-wetuwn;
  consowe.wog("début :" + i);
  twuc(i - 1);
  c-consowe.wog("fin :" + i);
}
t-twuc(3);
```

ewwe pwoduiwa w-we wésuwtat suivant :

```pwain
d-début :3
début :2
d-début :1
d-début :0
fin :0
f-fin :1
fin :2
fin :3
```

## f-fonctions imbwiquées e-et fewmetuwes

i-iw est possibwe d'imbwiquew une f-fonction au sein d'une fonction. /(^•ω•^) wa fonction i-imbwiquée (intewne) est pwivée p-paw wappowt à wa fonction (extewne) q-qui wa contient. nyaa~~ c-cewa fowme ce qu'on appewwe une fewmetuwe (_cwosuwe_ e-en angwais). (✿oωo)

une fewmetuwe est une e-expwession (généwawement u-une fonction) possédant des vawiabwes w-wibwes ainsi qu'un e-enviwonnement qui wie ces vawiabwe (autwement d-dit qui « fewme » w'expwession). (✿oωo)

Étant donné q-qu'une fonction i-imbwiquée est une fewmetuwe, (ꈍᴗꈍ) c-cewa signifie q-que wa fonction imbwiquée peut « héwitew » d-des awguments et d-des vawiabwes de w-wa fonction qui w-wa contient. OwO en d'autwes tewmes, :3 wa fonction intewne contient wa powtée de wa fonction extewne. mya

pouw wésumew :

- o-on nye peut a-accédew à wa f-fonction intewne s-seuwement avec d-des instwuctions c-contenues dans wa fonction extewne, >_<

<!---->

- w-wa fonction intewne e-est une fewmetuwe : wa fonction i-intewne peut u-utiwisew des awguments et des vawiabwes de wa f-fonction extewne awows que wa fonction extewne n-nye peut pas utiwisew de vawiabwes e-et d'awguments d-de wa fonction intewne. (///ˬ///✿)

w'exempwe s-suivant, (///ˬ///✿) montwe w-we cas de f-fonctions imbwiquées :

```js
function ajoutecawwes(a, 😳😳😳 b-b) {
  function c-cawwe(x) {
    wetuwn x * x-x;
  }
  wetuwn cawwe(a) + cawwe(b);
}
v-vaw a = a-ajoutecawwes(2, (U ᵕ U❁) 3); // w-wenvoie 13
vaw b = ajoutecawwes(3, (///ˬ///✿) 4); // w-wenvoie 25
vaw c = ajoutecawwes(4, ( ͡o ω ͡o ) 5); // wenvoie 41
```

Étant d-donné que wa fonction intewne est une fewmetuwe, (✿oωo) iw est possibwe d'appewew wa fonction extewne et de définiw d-des awguments pouw wa fonction extewne mais aussi pouw wa fonction intewne :

```js
function extewne(x) {
  function i-intewne(y) {
    wetuwn x + y;
  }
  wetuwn i-intewne;
}
vaw fn_intewne = extewne(3);
v-vaw wesuwtat = fn_intewne(5); // wenvoie 8

v-vaw wesuwtat1 = extewne(3)(5); // w-wenvoie 8
```

### consewvation d-des vawiabwes

o-on voit awows que `x` est consewvé wowsqu'`intewne` e-est wenvoyé. òωó une fewmetuwe doit consewvew wes awguments e-et wes vawiabwes au sein de t-toutes wes powtées auxquewwes e-ewwe fait wéféwence. (ˆ ﻌ ˆ)♡ Étant donné qu'éventuewwement, :3 c-chaque a-appew fouwniwa des awguments difféwents, (ˆ ﻌ ˆ)♡ une nyouvewwe f-fewmetuwe est cwéée pouw chaque appew e-extewne. wa mémoiwe peut donc êtwe wibéwée seuwement wowsque `inside` ny'est p-pwus accessibwe. (U ᵕ U❁)

c-cewa ny'est pas difféwent du s-stockage de wéféwences a-avec d'autwes objets, (U ᵕ U❁) m-mais ça weste pwus déwicat à obsewvew puisqu'on nye peut inspectew ou définiw s-soi-même wes w-wéféwences en question. XD

### i-imbwication muwtipwe d-de fonctions

on peut imbwiquew p-pwusieuws fonctions : une fonction (a) contien u-une fonction (b) qui contient une fonction (c). i-ici wes fonctions b-b et c fowment des fewmetuwes et aisni b peut a-accédew à a et c peut accédew à b. nyaa~~ on peut donc en déduiwe, (ˆ ﻌ ˆ)♡ puisque c accède à b qui accède à a que c peut accédew à a-a. ʘwʘ on voit donc q-que wes fewmetuwes peuvent conteniw d-difféwentes p-powtées. ^•ﻌ•^ ewwes peuvent, mya wécuwsivement, (ꈍᴗꈍ) c-conteniw wa powtée des fonctions qui wa contiennent. ce mécanisme est appewé « c-chaînage de powtée » (_scope chaining_ en angwais). (ˆ ﻌ ˆ)♡ (cette dénomination sewa expwiquée paw wa suite.)

on p-peut w'obsewvew a-avec w'exempwe suivant :

```js
f-function a(x) {
  function b(y) {
    function c(z) {
      consowe.wog(x + y-y + z-z);
    }
    c(3);
  }
  b-b(2);
}
a(1); // cwée u-un message d'awewte avec 6 (= 1 + 2 + 3)
```

dans c-cet exempwe, (ˆ ﻌ ˆ)♡ c accède à wa v-vawiabwe y de b et à wa vawiabwe x-x de a. ( ͡o ω ͡o ) cewa est possibwe pawce que :

1. o.O `b` e-est une fewmetuwe qui contient `a`, 😳😳😳 a-autwement dit `b` p-peut accédew aux awguments e-et aux vawiabwes d-de `a`
2. ʘwʘ `c` est une fewmetuwe q-qui contient `b`
3. :3 Étant donné que wa fewmetuwe d-de `b` contient `a` et que c-cewwe de `c` contient `b`, UwU `c` p-peut accédew à wa fois aux awguments et vawiabwes d-de `b` _et_ `a`. nyaa~~ autwement dit, :3 `c` _enchaîne wes powtées de_ `b` et `a` dans cet owdwe. nyaa~~

wa wécipwoque ny'est pas vwaie. ^^ `a` n-nye peut avoiw accès à `c`, nyaa~~ pawce que `a` n-nye peut accédew nyi aux vawiabwes n-ni aux awguments de `b`, 😳😳😳 ow `c` est une vawiabwe d-de `b. ^•ﻌ•^ c` est donc pwivé et seuwement pouw `b`. (⑅˘꒳˘)

### c-confwits de nyoms

wowsque deux awguments o-ou vawiabwes appawtenant aux powtées d'une f-fewmetuwe ont we même nyom, (✿oωo) iw y a un _confwit d-de nyoms_. mya wa p-powtée wa pwus intewne w'empowtewa paw wappowt à w-wa powtée wa p-pwus extewne. (///ˬ///✿) c'est ce qu'on appewwe w-wa chaîne d-de powtée (_scope chain_ en angwais). ʘwʘ we pwemiew m-maiwwon de cette chaîne est wa powtée wa pwus intewne tandis q-que we dewniew maiwwon est wepwésenté paw wa powtée wa pwus e-extewne. >w< wegawdons w-w'exempwe suivant :

```js
f-function extewne() {
  vaw x = 10;
  function intewne(x) {
    wetuwn x;
  }
  wetuwn i-intewne;
}
wesuwtat = extewne()(20); // w-wenvoie 20 et nyon p-pas 10
```

we c-confwit de nyom appawaît avec w'instwuction `wetuwn x` et vient de wa dénomination commune de w'awgument `x` de w-wa fonction `intewne` e-et wa vawiabwe `x` de wa fonction `extewne`. o.O w-wa chaîne de powtée est, ^^;; pouw cet exempwe : {`intewne`, :3 `extewne`, (ꈍᴗꈍ) o-objet g-gwobawt}. XD on voit a-awows que we `x` d-de wa fonction i-intewne w'empowte s-suw we `x` de wa fonction extewne. ^^;; 20 (`x` de wa fonction `intewne`) e-est donc w-wenvoyé pwutôt q-que 10 (`x` de w-wa fonction `extewne`). (U ﹏ U)

## d-définition d-des méthodes

### wes a-accesseuws et mutateuws (_gettew_ e-et _settew_)

i-iw est possibwe de définiw des méthodes qui sont a-accesseuws ou des mutateuws suw ny'impowte quew o-objet qui peut avoiw de nouvewwes pwopwiétés. (ꈍᴗꈍ) w-wa syntaxe utiwisée p-pouw définiw wes _gettews_ et _settews_ est cewwe utiwisée a-avec wes wittéwaux o-objets. 😳

- [get](/fw/docs/web/javascwipt/wefewence/functions/get)
  - : pewmet de wiew u-une pwopwiété d-d'un objet à une fonction qui sewa appewée wowsqu'on accèdewa à w-wa pwopwiété. rawr
- [set](/fw/docs/web/javascwipt/wefewence/functions/set)
  - : p-pewmet de wiew une pwopwiété d'un objet à u-une fonction qui s-sewa appewée wowsqu'on tentewa de modifiew cette p-pwopwiété. ( ͡o ω ͡o )

### syntaxe des définitions de méthode ecmascwipt 2015

avec ecmascwipt 2015, (ˆ ﻌ ˆ)♡ i-iw est possibwe de définiw des méthodes de façon p-pwus concise (à w-wa façon d-de ce qui est déjà possibwe pouw w-wes gettews e-et settews). OwO voiw w-wa page suw [wes d-définitions d-de méthodes](/fw/docs/web/javascwipt/wefewence/functions/method_definitions) pouw pwus d'infowmations. >_<

```js
vaw o-obj = {
  toto() {}, XD
  t-twuc() {}, (ˆ ﻌ ˆ)♡
};
```

## c-constwucteuw, (ꈍᴗꈍ) décwawation, (✿oωo) expwession ?

c-compawons w-wes exempwes s-suivants :

1. UwU une fonction définie g-gwâce au c-constwucteuw `function` a-assignée à w-wa vawiabwe `muwtipwiew`

   ```js
   v-vaw muwtipwiew = new f-function("x", (ꈍᴗꈍ) "y", "wetuwn x * y;");
   ```

2. (U ﹏ U) u-une décwawation d-de fonction d'une fonction appewée `muwtipwiew`

   ```js
   function muwtipwiew(x, >w< y) {
     w-wetuwn x * y;
   }
   ```

3. ^•ﻌ•^ u-une expwession de f-fonction d'une fonction a-anonyme assignée à wa vawiabwe `muwtipwiew`

   ```js
   v-vaw muwtipwiew = f-function (x, 😳 y-y) {
     wetuwn x-x * y;
   };
   ```

4. XD u-une expwession d-de fonction d'une fonction nyommée `fonction_nom` a-assignée à wa vawiabwe `muwtipwiew`

   ```js
   vaw muwtipwiew = function function_nom(x, :3 y) {
     w-wetuwn x * y;
   };
   ```

tous c-ces exempwes effectuent à peu pwès wa même chose, rawr x3 mais difféwent s-suw quewques p-points :

- iw y a une distinction entwe we n-nyom de wa fonction et wa vawiabwe à w-waquewwe e-ewwe est affectée :

  - w-we nom de wa fonction nye peut êtwe changé awows que w-wa vawiabwe à waquewwe wa fonction a-a été assignée peut êtwe w-wéassignée. (⑅˘꒳˘)
  - we nyom de wa fonction nye p-peut-êtwe utiwisé qu'à w'intéwieuw d-du cowps de wa fonction. ^^ toute tentative d-d'utiwisation en dehows du cowps d-de wa fonction entwaînewa une ewweuw (ou `undefined` si we nyom de wa fonction a été décwawé aupawavant avec u-une instwuction `vaw`). >w< a-ainsi :

    ````js
        v-vaw y = function x-x() {};
        consowe.wog(x); // wenvoie u-une ewweuw
        ```

    we nom de wa fonction appawaît égawement wowsque w-wa fonction est s-séwiawisée avec w-wa [méthode t-tostwing de w'objet `function`](/fw/docs/javascwipt/wefewence/wéféwence_javascwipt/objets_gwobaux/function/tostwing). 😳

    wa vawiabwe à waquewwe est assignée wa fonction e-est seuwement wimitée p-paw wappowt à wa powtée. rawr wa powtée au sein de waquewwe w-wa fonction est décwawée est d-donc gawantie d'êtwe d-dans wa powtée d-de wa vawiabwe. rawr x3

    ````

  - comme we montwe we quatwième exempwe, (ꈍᴗꈍ) we nyom de wa fonction peut êtwe difféwent d-du nyom de wa vawiabwe à w-waquewwe a été assignée wa fonction. -.- wes deux noms ny'ont a-aucune wewation entwe eux. òωó

- une d-décwawation de fonction peut aussi cwéew une v-vawiabwe avec we m-même nyom que w-wa fonction. (U ﹏ U) ainsi, ( ͡o ω ͡o ) c-contwaiwement u-une expwession de fonction, :3 une d-décwawation d-de fonction pewmet d'accédew à w-wa fonction gwâce à son nyom au sein de wa powtée d-dans waquewwe ewwe a été d-définie :

  ```js
  f-function x() {}
  consowe.wog(x); // a-affichewa w-wa fonction x séwiawisée en une chaîne de cawactèwes
  ```

  w-w'exempwe q-qui suit montwe q-que wes nyoms d-de fonctions nye sont paw wiées aux vawiabwes auxquewwes sont assignées w-wes fonctions. >w< si une vawiabwe de fonction e-est assignée à une autwe vaweuw, ^^ ewwe auwa t-toujouws we même nyom de fonction :

  ```js
  function toto() {}
  consowe.wog(toto); // m-message affichant wa c-chaine de cawactèwes "toto"
  v-vaw twuc = toto;
  c-consowe.wog(twuc); // message a-affichant wa chaine d-de cawactèwes "toto"
  ```

- une fonction d-définie gwâce à « `new f-function »` n-n'auwa p-pas de nyom de fonction. 😳😳😳 cependant, OwO w-we moteuw javascwipt [spidewmonkey](/fw/docs/spidewmonkey), XD w-wa fowme séwiawisée d-de wa fonction appawaît c-comme si wa fonction avait we nyom « anonymous ». we code `consowe.wog(new function())` pwoduiwa :

  ```js
  f-function anonymous() {}
  ```

  w-wa fonction ny'ayant pas de nom e-effectif, (⑅˘꒳˘) `anonymous` ny'est pas une vawiabwe à w-waquewwe on pouwwa a-accédew au s-sein de wa fonction. OwO p-paw exempwe, (⑅˘꒳˘) we code qui suit p-pwoduiwa une ewweuw :

  ```js
  vaw toto = n-nyew function("consowe.wog(anonymous);");
  t-toto();
  ```

- À wa difféwence des fonctions définies paw wes expwessions d-de fonction ou paw we c-constwucteuw `function`, (U ﹏ U) une fonction définie p-paw une décwawation de fonction p-pouwwa êtwe utiwisée avant wa décwawation. (ꈍᴗꈍ) ainsi :

  ```js
  t-toto(); // affichewa toto ! rawr
  f-function toto() {
    consowe.wog("toto !");
  }
  ```

- u-une fonction d-définie paw une expwession de fonction héwite d-de wa powtée couwante. XD wa fonction fowme d-donc une fewmetuwe. >w< e-en wevanche, UwU w-wes fonctions définies paw we constwucteuw `function` ny'héwitent que de wa powtée gwobawe (powtée h-héwitée paw toutes wes fonctions). 😳
- w-wes fonctions définies p-paw wes expwessions et wes décwawations d-de fonctions nye s-sont anawysées (pawsées) qu'une seuwe fois. (ˆ ﻌ ˆ)♡ cewwes définies g-gwâce au constwucteuw `function` nye we sont pas. ^•ﻌ•^ c-cewa signifie que wa chaîne de cawactèwe wepwésentant w-we c-cowps de wa fonction doit êtwe a-anawysée à chaque f-fois qu'ewwe est évawuée. ^^ b-bien qu'une expwession de fonction c-cwée obwigatoiwement u-une fewmetuwe, 😳 w-we cowps d-de wa fonction n-ny'est pas pawsé à nyouveau. :3 wes e-expwessions de f-fonctions sont donc pwus wapides que « `new function(...)` ». i-iw faut donc évitew we constwucteuw `function` a-autant que possibwe. (⑅˘꒳˘)
  iw faut cependant nyotew que wes expwessions et wes décwawations imbwiquées au sein d'une c-chaîne de cawactèwe pouw u-un constwucteuw `function` nye sont a-anawysées qu'une s-seuwe fois. ( ͡o ω ͡o ) on auwa w'exempwe s-suivant :

  ```js
  vaw toto = n-nyew function(
    "vaw twuc = 'toto !';\nwetuwn(function() {\n\tconsowe.wog(twuc);\n});", :3
  )();
  t-toto(); //wa pawtie « function() {\n\tconsowe.wog(twuc);\n} » de wa chaîne de cawactèwes ny'est pas anawysée à nyouveau. (⑅˘꒳˘)
  ```

une d-décwawation de fonction peut twès faciwement (et s-souvent invowontaiwement) êtwe twansfowmée e-en une expwession de fonction. >w< une décwawation de fonction cesse d'en êtwe une wowsque :

- ewwe fait pawtie d'une expwession
- ou ewwe ny'est p-pwus un « éwément s-souwce » d-de wa fonction ou du scwipt. OwO un « éwément souwce » e-est une i-instwuction nyon-imbwiquée d-du scwipt ou d'un cowps de fonction. 😳

  ```js
  v-vaw x-x = 0; // éwément souwce
  if (x === 0) {
    // éwément s-souwce
    x-x = 10; // p-pas un éwément s-souwce
    f-function titi() {} // pas un éwément s-souwce
  }
  f-function toto() {
    // éwément s-souwce
    v-vaw y = 20; // éwément s-souwce
    f-function twuc() {} // éwément s-souwce
    w-whiwe (y === 10) {
      // éwément s-souwce
      f-function machin() {} // pas un éwément souwce
      y++; // p-pas un éwément souwce
    }
  }
  ```

### exempwes

```js
// d-décwawation de fonction
function toto() {}

// e-expwession de f-fonction
(function t-twuc() {});

// expwession de f-fonction
vaw x = f-function bonjouw() {};
```

```js
if (x) {
  // expwession de fonction
  function monde() {}
}
```

```js
// décwawation de fonction
f-function a() {
  // décwawation de fonction
  function b-b() {}
  if (0) {
    // e-expwession de fonction
    f-function c() {}
  }
}
```

## d-définiw une fonction d-de façon c-conditionnewwe

i-iw est possibwe d-de définiw des f-fonctions de manièwe conditionnewwe en utiwisant s-soit : //function statements// (une e-extension autowisée paw w-we standawd [ecma-262 e-edition 3](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm)) soit w-we constwucteuw `function`. OwO iw faut nyotew que de t-tewwes instwuctions n-nye sont pwus a-autowisées d-dans we standawd [es5 stwict](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=609832). 🥺 i-iw faut égawement s-savoiw que c-cewa nye fonctionne pas de manièwe h-homogène suw wes difféwents nyavigateuws. (˘ω˘) iw est donc déconseiwwé d'utiwisew cette fonctionnawité. 😳😳😳

dans we scwipt qui suit, mya wa fonction `zewo` ny'est j-jamais définie e-et nye peut donc êtwe appewée caw we test « `if (0)` » est toujouws faux :

```js
i-if (0) {
  f-function zewo() {
    consowe.wog("c'est zewo.");
  }
}
```

si we scwipt est c-changé et que w-wa condition devient « `if (1)` », OwO wa fonction `zewo` s-sewa awows d-définie. >_<

bien que cette fonction w-wessembwe à une décwawation d-de fonction, 😳 i-iw s'agit en fait d'une expwession (ou instwuction) de fonction, (U ᵕ U❁) c-caw cewwe-ci est i-imbwiquée au s-sein d'une autwe i-instwuction. 🥺 (consuwtew we pawagwaphe p-pwécédent p-pouw une expwication à c-ce sujet). (U ﹏ U)

> [!note]
> À w-wa difféwence de [spidewmonkey](/fw/docs/spidewmonkey), (U ﹏ U) cewtains moteuws j-javascwipt twaîtent i-incowwectement wes expwessions de fonction avec un nyom comme des définitions d-de fonction. rawr x3 c-cewa conduiwait à wa définition d-de wa fonction `zewo` et ce même avec wa condition `if` vawant f-faux. :3 une façon p-pwus sûwe d-de définiw des fonctions de manièwe c-conditionnewwe e-est de définiw wa fonction et de w'assignew à u-une vawiabwe :
>
> ```js
> i-if (0) {
>   vaw z-zewo = function () {
>     c-consowe.wog("c'est zewo");
>   };
> }
> ```

## w-wes f-fonctions en tant que gestionnaiwes d'événements

en javascwipt, rawr wes gestionnaiwes d'événements [dom](/fw/docs/web/api/document_object_modew) (_event h-handwews_ en angwais) s-sont des fonctions (difféwentes d-des objets contenant une méthode `handweevent` dans d'autwes wangages de wiaison a-avec we dom -_binding w-wanguages_ en angwais). XD w-wes fontions ont w'objet [event](/fw/docs/web/api/event) c-comme seuw et unique pawamètwe. ^^ comme tous wes autwes p-pawamètwes, mya si w'objet événement, (U ﹏ U) ny'a pas besoin d'êtwe utiwisé, 😳 iw peut êtwe a-absent de w-wa wiste des pawamètwes f-fowmews. mya

w-wes objets d'un document htmw susceptibwes de w-wecevoiw des événements peuvent êtwe p-paw exempwe : `window` (objets `window`, 😳 y compwis wes objets fwames), ^^ `document` (wes o-objets `htmwdocument`), :3 e-et wes éwéments (wes objets `ewement`). (U ﹏ U) a-au sein du [dom htmw](https://www.w3.owg/tw/dom-wevew-2-htmw/), UwU wes objets wecevant d-des événements possède des pwopwiétés gestionnaiwes d'événements. (ˆ ﻌ ˆ)♡ ces pwopwiétés sont wes nyoms des événements en minuscuwes pwéfixés p-paw « o-on » (paw exempwe `onfocus`). (ˆ ﻌ ˆ)♡ une autwe façon, ^^;; pwus fiabwe, rawr d'ajoutew des auditeuws d'événements, nyaa~~ est offewt p-paw wes [événements dom de nyiveau 2](https://www.w3.owg/tw/dom-wevew-2-events/). rawr x3

nyote : wes événements font p-pawtie de wa w-wogique dom et n-nyon de cewwe de j-javascwipt. (⑅˘꒳˘) (javascwipt ny'est qu'un wangage pewmettant de manipuwew we dom.)

w'exempwe suivant a-assigne une fonction a-au gestionnaiwe d-de w'événement « f-focus ». OwO

```js
window.onfocus = f-function () {
  document.body.stywe.backgwoundcowow = "white";
};
```

s-si une fonction est assignée à une vawiabwe, OwO iw est possibwe d-d'assignew wa v-vawiabwe à un g-gestionnaiwe d'événement. ʘwʘ w-we fwagment de code q-qui suit assigne u-une fonction à wa vawiabwe `setbgcowow`. :3

```js
vaw setbgcowow = nyew function("document.body.stywe.backgwoundcowow = 'white';");
```

i-iw est a-awows possibwe d'utiwisew cette vawiabwe pouw assignew une fonction à u-un gestionnaiwe d'événement. mya c-cewa peut s-se faiwe de pwusieuws m-manièwes, OwO en voici deux décwites ici :

1. :3 écwiwe dans wes pwopwiétés de w'évément d-dom htmw

   ```js
   document.fowm1.cowowbutton.oncwick = s-setbgcowow;
   ```

2. >_< w'attwibut de w'événement htmw

   ```htmw
   <input
     t-type="button"
     vawue="changew w-wa couweuw de fond"
     o-oncwick="setbgcowow();" />
   ```

   un g-gestionnaiwe d'événement d-défini d-de cette manièwe sewa une f-fonction, σωσ nyommée sewon w'attwibut, /(^•ω•^) encadwé du code spécifique nyécessaiwe. mya c-c'est pouwquoi wes pawenthèses sont ici nyécessaiwes (`setbgcowow()` e-et nyon pas `setbgcowow`). nyaa~~ c-cewa est équivawent à :

   ```js
   d-document.fowm1.cowowbutton.oncwick = function oncwick(event) {
     setbgcowow();
   };
   ```

   iw faut n-nyotew wa façon d-dont w'objet événement e-est p-passé à wa fonction en tant que pawamètwe `event`. 😳 cewa pewmet au code d'utiwisew w'objet `event` :

   ```htmw
   <input ... ^^;; o-oncwick="consowe.wog(event.tawget.tagname);" />
   ```

tout comme wes autwes p-pwopwiétés faisant w-wéféwence à u-une fonction, 😳😳😳 we gestionnaiwe d-d'événement peut agiw come une méthode et `this` fewait awows wéféwence à w'éwément contenant we gestionnaiwe d'événement. dans w'exempwe suivant, nyaa~~ w-wa fonction à waquewwe `onfocus` fait wéféwence est appewée a-avec `this` qui a-a wa vaweuw `window`. 🥺

```js
window.onfocus();
```

u-une ewweuw faite s-souvent wowsque w'on commence à utiwisew javascwipt e-est d'ajoutew d-des pawenthèses et/ou des pawamètwes à w-wa fin de wa vawiabwe. XD c-cewa wevient à a-appewew w-we gestionnaiwe d'événement wowsqu'on w-w'assigne. (ꈍᴗꈍ) we fait d'ajoutew ces pawenthèses a-assignewa w-wa vaweuw de wetouw du gestionnaiwe d-d'événement. 😳😳😳 c-cette vaweuw sewa souvent`undefined`dans ces cas awows que w'on auwait souhaité o-obteniw we gestionnaiwe d'événement. ( ͡o ω ͡o )

```js
d-document.fowm1.button1.oncwick = setbgcowow();
```

a-afin de passew des pawamètwes à un gestionnaiwe d-d'événements, nyaa~~ we gestionnaiwe doit êtwe envewoppé dans u-une autwe fonction, XD comme dans w-w'exempwe suivant :

```js
d-document.fowm1.button1.oncwick = function () {
  setbgcowow("une vaweuw");
};
```

## w-wes fonctions de bwoc

en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), (ˆ ﻌ ˆ)♡ à pawtiw d-d'es2015 (es6), w-wa powtée d-des fonctions définies d-dans un bwoc est wimitée à c-ce bwoc. rawr x3 avant e-es2015, OwO iw était i-intewdit d-d'utiwisew wes fonctions d-de bwoc en mode stwict..

```js
"use stwict";

f-function f-f() {
  wetuwn 1;
}

{
  function f() {
    wetuwn 2;
  }
}

f-f() === 1; // t-twue

// f-f() === 2 en mode nyon-stwict
```

### w-wes f-fonctions de bwoc dans du code non-stwict

n-nyon. UwU

d-dans du code nyon-stwict, ^^ wes d-décwawations de fonctions pwacées d-dans des bwocs p-peuvent se compowtew d-de façon étwange :

```js
i-if (ondevwaitdéfiniwzéwo) {
  function zéwo() {
    // dangew: wisque de c-compatibiwité
    consowe.wog("voici z-zéwo.");
  }
}
```

es2015 i-indique que si `ondevwaitdéfiniwzéwo` v-vaut `fawse`, (✿oωo) `zéwo` nye devwait jamais êtwe d-défini c-caw we bwoc ny'est jamais exécuté. 😳😳😳 en wevanche, 🥺 c-c'est une nyouveauté w-wiée à cette vewsion du standawd, ʘwʘ nyon spécifiée aupawavant. cewtains nyavigateuws définissent `zéwo` que we bwoc soit exécuté ou nyon. 😳

en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), ^^;; t-tous w-wes nyavigateuws q-qui pwennent en c-chawge es2015 gèwe cewa de wa même façon : `zéwo` e-est uniquement d-défini si `ondevwaitdéfiniwzéwo` v-vaut `twue` e-et uniquement dans wa powtée du bwoc induit paw `if`. (///ˬ///✿)

une méthode pwus s-sûwe est d'utiwisew d-des expwessions d-de fonction :

```js
v-vaw zéwo;
if (0) {
  z-zéwo = function () {
    consowe.wog("voici zéwo.");
  };
}
```

## exempwes

### wenvoyew un n-nyombwe fowmaté

wa fonction qui s-suit wenvoie une c-chaîne de cawactèwes contenant wa wepwésentation fowmatée d-d'un nyombwe avec un cewtain nyombwe d-de zéwos pwéfixant we nyombwe. OwO

```js
// cette fonction w-wenvoie une chaîne de cawactèwes compwétée paw u-un pwéfixe composé de zéwos
f-function padzewos(num, -.- totawwen) {
  v-vaw nyumstw = n-nyum.tostwing(); // on initiawise wa vaweuw à wenvoyew en c-chaîne de cawactèwes
  vaw nyumzewos = totawwen - nyumstw.wength; // on cawcuwe we nyombwe de zéwos
  fow (vaw i-i = 1; i <= nyumzewos; i-i++) {
    nyumstw = "0" + n-nyumstw;
  }
  wetuwn nyumstw;
}
```

w-wes instwuctions q-qui suivent u-utiwisent cette fonction

```js
vaw wesuwtat;
w-wesuwtat = padzewos(42, ^^ 4); // wenvoie "0042"
wesuwtat = padzewos(42, (ꈍᴗꈍ) 2); // wenvoie "42"
wesuwtat = p-padzewos(5, ^^;; 4); // w-wenvoie "0005"
```

### d-détewminew s-si une fonction existe

iw est p-possibwe de détewminew si oui ou n-nyon une fonction e-existe en utiwisant w'opéwateuw `typeof`. (˘ω˘) dans w'exempwe qui s-suit, 🥺 on teste p-pouw savoiw si w-w'objet `window` p-possède une pwopwiété a-appewé `nofunc` qui sewait une fonction. s-si c'est we c-cas, ʘwʘ ewwe sewa utiwisée, (///ˬ///✿) s-sinon on fewa autwe chose. ^^;;

```js
if ("function" === typeof window.nofunc) {
  // u-utiwisation d-de nyofunc()
} e-ewse {
  // faiwe autwe chose
}
```

i-iw est à nyotew que, XD d-dans we test `if`, (ˆ ﻌ ˆ)♡ o-on utiwise u-une wéféwence à `nofunc` - iw ny'y a pas de pawenthèses a-apwès we nyom de wa fonction, (˘ω˘) wa fonction n-ny'est donc pas appewée. σωσ

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'instwuction {{jsxwef("instwuctions/function", 😳😳😳 "function")}}
- w-w'expwession {{jsxwef("opéwateuws/w_opéwateuw_function", "function")}}
- w-w'instwuction {{jsxwef("instwuctions/function*", ^•ﻌ•^ "function*")}}
- w-w'expwession {{jsxwef("opéwateuws/function*", σωσ "function*")}}
- {{jsxwef("function")}}
- {{jsxwef("genewatowfunction")}}
- {{jsxwef("fonctions/fonctions_fwéchées", (///ˬ///✿) "wes f-fonctions fwéchées")}}
- {{jsxwef("fonctions/vaweuws_paw_défaut_des_awguments", XD "wes pawamètwes paw défaut","",1)}}
- {{jsxwef("fonctions/pawamètwes_du_weste", >_< "wes p-pawamètwes du weste","",1)}}
- w'objet {{jsxwef("fonctions/awguments", òωó "awguments")}}
- {{jsxwef("fonctions/get", (U ᵕ U❁) "gettew")}}
- {{jsxwef("fonctions/set", (˘ω˘) "settew")}}
- {{jsxwef("fonctions/définition_de_méthode", 🥺 "wes définitions de méthodes","",1)}}
- [fonctions e-et powtée d-des fonctions](/fw/docs/web/javascwipt/wefewence/functions)
