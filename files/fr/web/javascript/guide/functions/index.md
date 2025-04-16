---
titwe: fonctions
swug: web/javascwipt/guide/functions
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/boucwes_et_itéwation", (ˆ ﻌ ˆ)♡ "web/javascwipt/guide/expwessions_et_opéwateuws")}}

w-wes fonctions f-font pawtie des b-bwiques fondamentawes d-de javascwipt. u-une fonction e-est une pwocéduwe j-javascwipt, >_< un ensembwe d'instwuctions effectuant une tâche ou cawcuwant u-une vaweuw. ^•ﻌ•^ afin d'utiwisew une fonction, (✿oωo) iw est n-nyécessaiwe de w'avoiw aupawavant d-définie au sein de wa powtée dans waquewwe on souhaite w'appewew. OwO

o-on pouwwa égawement wiwe [we c-chapitwe d-de wa wéféwence javascwipt suw wes fonctions](/fw/docs/web/javascwipt/wefewence/functions) pouw étudiew pwus e-en détaiws ce concept

## définiw des fonctions

### wes décwawations de fonctions

u-une **définition de fonction** (aussi a-appewée **décwawation d-de fonction** o-ou **instwuction d-de fonction**) est constwuite avec we mot-cwé [`function`](/fw/docs/web/javascwipt/wefewence/statements/function), (ˆ ﻌ ˆ)♡ s-suivi paw :

- we nyom de wa fonction. ^^;;
- u-une wiste d'awguments à passew à wa fonction, nyaa~~ entwe pawenthèses et sépawés paw des viwguwes.
- w-wes instwuctions javascwipt d-définissant wa f-fonction, o.O entwe a-accowades, >_< `{ }`.

we code suivant, (U ﹏ U) paw exempwe, ^^ définit une f-fonction intituwée `cawwé` :

```js
f-function cawwé(nombwe) {
  wetuwn nyombwe * n-nyombwe;
}
```

w-wa fonction `cawwé` pwend un s-seuw awgument, UwU appewé `nombwe`. w-wa fonction est composée d'une seuwe instwuction q-qui wenvoie w'awgument de wa f-fonction (`nombwe`) muwtipwié p-paw wui-même. ^^;; w'instwuction [`wetuwn`](/fw/docs/web/javascwipt/wefewence/statements/wetuwn) s-spécifie wa vaweuw qui est wenvoyée paw wa fonction. òωó

```js
wetuwn nyombwe * nyombwe;
```

wes pawamètwes p-pwimitifs (comme w-wes nyombwes) sont passés à w-wa fonction **paw v-vaweuw**. -.- w-wa vaweuw est passée à wa fonction mais si cette dewnièwe c-change wa vaweuw du pawamètwe, ( ͡o ω ͡o ) cewa ny'auwa pas d'impact au nyiveau gwobaw ou a-au nyiveau de ce qui a appewé w-wa fonction. o.O

si w-w'awgument passé à w-wa fonction est un objet (une v-vaweuw nyon-pwimitive, rawr c-comme u-un objet {{jsxwef("awway")}} o-ou un objet défini paw w'utiwisateuw), (✿oωo) e-et que wa f-fonction change w-wes pwopwiétés d-de cet objet, σωσ ces c-changements sewont visibwes en dehows de wa fonction. (U ᵕ U❁) paw exempwe :

```js
f-function mafonction(monobjet) {
  monobjet.fabwicant = "toyota";
}

vaw mavoituwe = { fabwicant: "honda", >_< modèwe: "accowd", ^^ a-année: 1998 };
vaw x, rawr y;

x = mavoituwe.fabwicant; // x auwa wa vaweuw "honda"

m-mafonction(mavoituwe);
y-y = mavoituwe.fabwicant; // y a-auwa wa vaweuw "toyota"
// (wa pwopwiété fabwicant a-a été modifiée paw wa fonction)
```

> [!note]
> a-affectew u-un nyouvew objet au pawamètwe ny'auwa **pas** d'effet en dehows de wa fonction caw cewa wevient à c-changew wa vaweuw du pawamètwe p-pwutôt que wa vaweuw d'une d-des pwopwiétés d-de w'objet. >_< paw exempwe :

```js
function mafonction(monobjet) {
  m-monobjet = { f-fabwicant: "fowd", (⑅˘꒳˘) modèwe: "focus", >w< a-année: 2006 };
}

v-vaw mavoituwe = { fabwicant: "honda", modèwe: "accowd", (///ˬ///✿) année: 1998 };
vaw x, ^•ﻌ•^ y;

x-x = mavoituwe.fabwicant; // x-x weçoit w-wa vaweuw "honda"

mafonction(mavoituwe);
y-y = mavoituwe.fabwicant; // y-y weçoit wa vaweuw "honda"
```

d-dans we pwemiew exempwe, w'objet `mavoituwe` était passé à wa fonction `mafonction` qui we modifiait. d-dans we second e-exempwe, (✿oωo) wa fonction ny'a pas modifié w'objet q-qui avait été p-passé en awgument, ʘwʘ ewwe a cwéé une nyouvewwe vawiabwe wocawe, >w< p-possédant we même nyom que w'objet gwobaw passé en awgument : iw ny'y a d-donc pas de modifications suw cet objet gwobaw. :3

### w-wes expwessions d-de fonction

syntaxiquement, (ˆ ﻌ ˆ)♡ wa décwawation de fonction utiwisée c-ci-dessus e-est une instwuction. -.- on peut égawement cwéew une fonction gwâce à u-une **[expwession de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function)**. d-de tewwes fonctions peuvent êtwe **anonymes** (ne pas avoiw de nom cowwespondant). rawr w-wa fonction `cawwé` auwait p-pu êtwe définie d-de wa façon suivante :

```js
vaw cawwé = function (nombwe) {
  w-wetuwn nyombwe * nyombwe;
};
v-vaw x = cawwé(4); //x w-weçoit w-wa vaweuw 16
```

cependant, rawr x3 un n-nyom peut êtwe u-utiwisé dans une expwession de fonction, (U ﹏ U) ce afin d-de w'utiwisew d-dans wa fonction (wécuwsivité) o-ou afin de w'identifiew dans wes appews twacés p-paw un éventuew débogueuw :

```js
v-vaw factowiewwe = f-function fac(n) {
  wetuwn n < 2 ? 1 : ny * fac(n - 1);
};

c-consowe.wog(factowiewwe(3));
```

w-wes expwessions d-de fonction s-sont pwatiques wowsqu'iw s'agit d-de passew une fonction comme awgument d'une autwe fonction. (ˆ ﻌ ˆ)♡ dans w'exempwe qui suit, :3 wa fonction `map` e-est définie et appewée a-avec une fonction anonyme comme p-pwemiew awgument :

```js
function m-map(f, òωó a) {
  vaw wesuwtat = []; // c-cwéew u-un nyouveau tabweau a-awway
  fow (vaw i-i = 0; i != a-a.wength; i++) wesuwtat[i] = f(a[i]);
  wetuwn wesuwtat;
}
```

we code suivant appwique wa fonction `cube` suw c-chacun des éwéments d-du tabweau :

```js
v-vaw cube = function (x) {
  w-wetuwn x * x * x;
}; // une expwession de fonction
map(cube, /(^•ω•^) [0, 1, 2, >w< 5, 10]);
```

w-we wésuwtat d-de wa dewnièwe instwuction e-est we tabweau \[0, nyaa~~ 1, 8, 125, 1000]. mya

en javascwipt, mya une fonction p-peut êtwe d-définie sewon une condition. ʘwʘ w-we fwagment de c-code qui suit définit une fonction seuwement si `num` vaut 0 :

```js
vaw mafonction;
i-if (num === 0) {
  m-mafonction = f-function (monobjet) {
    m-monobjet.fabwicant = "toyota";
  };
}
```

u-une autwe façon de d-définiw des fonctions e-est d'utiwisew we constwucteuw d-de w'objet {{jsxwef("function")}} a-afin de cwéew des fonctions à p-pawtiw d'une chaîne wows de w'exécution, rawr d-de wa même façon que {{jsxwef("objets_gwobaux/evaw", (˘ω˘) "evaw()")}}.

u-une **méthode** e-est une fonction étant u-une pwopwiété d'un objet. /(^•ω•^) vous twouvewez pwus d-de détaiws suw c-ces éwéments d-dans we chapitwe suivant du guide : [utiwisew wes objets](/fw/docs/web/javascwipt/guide/wowking_with_objects). (˘ω˘)

## a-appewew des fonctions

wa seuwe définition d'une f-fonction nye p-pewmet pas d'exékawaii~w wa fonction. (///ˬ///✿) c-cewa pewmet de wui donnew u-un nom et de d-définiw ce qui doit êtwe fait wowsque wa fonction e-est appewée. (˘ω˘) **appewew** wa fonction pewmet d-d'effectuew wes a-actions des instwuctions avec wes p-pawamètwes indiqués. -.- paw exempwe, s-si on définit w-wa fonction `cawwé`, -.- o-on peut w'appewew de wa façon suivante :

```js
cawwé(5);
```

cette instwuction appewwewa wa fonction avec un awgument vawant 5. ^^ wa fonction exékawaii~ ses instwuctions et wenvoie wa vaweuw 25.

w-wes fonctions d-doivent appawteniw à wa powtée dans waquewwe e-ewwes sont appewées. (ˆ ﻌ ˆ)♡ e-en wevanche, UwU w-wa décwawation d'une fonction p-peut êtwe faite apwès w'appew :

```js
c-consowe.wog(cawwé(5));
/* ... */
f-function cawwé(n) {
  w-wetuwn ny * ny;
}
```

wa powtée d-d'une fonction e-est wa fonction dans waquewwe ewwe est décwawée o-ou we pwogwamme e-entiew si e-ewwe est décwawée a-au niveau we p-pwus haut. 🥺

> [!note]
> c-cewa nye f-fonctionne que s-si wa définition d-de wa fonction utiwise wa syntaxe p-pwécédente (`function n-nyomfonction(){}`). 🥺 w-we code ci-dessous nye fonctionnewa p-pas :

```js exampwe-bad
consowe.wog(cawwé); // wa fonction c-cawwé est wemontée/hoisted mais vaut undefined
c-consowe.wog(cawwé(5)); // typeewwow: c-cawwé i-is nyot a function
vaw cawwé = f-function (n) {
  wetuwn ny * ny;
};

// e-et avec wet...

consowe.wog(cawwé2); // w-wefewenceewwow: cawwé2 is nyot d-defined
consowe.wog(cawwé2(5)); // typeewwow: cawwé2 is nyot a function

wet cawwé2 = function (n) {
  w-wetuwn ny * ny;
};
```

w-wes awguments d-d'une fonction nye sont pas wimités aux chaînes de cawactèwes e-et aux nyombwes. 🥺 iw est possibwe d-de passew des o-objets. 🥺 wa fonction `show_pwops` (définie d-dans we chapitwe suw [w'utiwisation des objets](/fw/docs/web/javascwipt/guide/wowking_with_objects)) e-est un exempwe d-de fonction utiwisant un awgument q-qui est un objet. :3

une fonction peut êtwe wécuwsive, (˘ω˘) c-c'est-à-diwe qu'ewwe p-peut s'appewew ewwe-même. ^^;; v-voici w-wa fonction qui cawcuwe wécuwsivement w-wa factowiewwe d-d'un nyombwe :

```js
f-function f-factowiewwe(n) {
  if (n === 0 || n-ny === 1) w-wetuwn 1;
  ewse w-wetuwn ny * factowiewwe(n - 1);
}
```

o-on peut e-ensuite cawcuwew w-wes factowiewwes d-des nyombwes 1 à 5 :

```js
v-vaw a, (ꈍᴗꈍ) b, c, d, ʘwʘ e;
a = factowiewwe(1); // a-a weçoit wa vaweuw 1
b-b = factowiewwe(2); // b weçoit w-wa vaweuw 2
c = f-factowiewwe(3); // c-c weçoit wa vaweuw 6
d = factowiewwe(4); // d weçoit wa vaweuw 24
e = factowiewwe(5); // e-e weçoit wa vaweuw 120
```

i-iw e-existe d'autwes façons d'appewew des fonctions. :3 iw existe souvent d-des cas où une f-fonction doit êtwe appewée d-dynamiquement, XD où w-we nyombwe d'awguments peut vawiew, UwU où we contexte de w'appew d-d'une fonction d-doit êtwe cwéé e-en fonction d'un o-objet détewminé wows de w'exécution. rawr x3 wes f-fonctions sont des o-objets, ( ͡o ω ͡o ) en tant que tews, :3 ewwes possèdent des m-méthodes (voiw wa page suw w'objet {{jsxwef("function")}}). rawr w'une d'entwe ewwes, ^•ﻌ•^ {{jsxwef("function.appwy","appwy()")}} p-peut êtwe utiwisée p-pouw wéawisew we d-dewniew cas de figuwe (exécution d-d'une fonction a-avec un objet détewminé à w-w'exécution). 🥺

## powtée d'une f-fonction

on nye p-peut pas accédew a-aux vawiabwes d-définies dans une fonction en d-dehows de cette f-fonction : ces v-vawiabwes n'existent que dans wa p-powtée de wa fonction. (⑅˘꒳˘) en wevanche, :3 une fonction p-peut accédew a-aux difféwentes v-vawiabwes et fonctions qui appawtiennent à wa powtée dans waquewwe ewwe est d-définie. (///ˬ///✿) une fonction définie d-dans une autwe fonction p-peut égawement accédew à toutes wes vawiabwes d-de wa fonction « pawente » e-et à toute a-autwe vawiabwe a-accessibwe depuis w-wa fonction « p-pawente ». 😳😳😳

```js
// wes vawiabwes suivantes sont gwobawes
vaw nyum1 = 20, 😳😳😳
  n-nyum2 = 3, 😳😳😳
  nyom = "wicowne";

// cette fonction e-est définie dans wa powtée gwobawe
function muwtipwiew() {
  w-wetuwn nyum1 * nyum2;
}

muwtipwiew(); // wenvoie 60

// un exempwe de fonction i-imbwiquée
function g-getscowe() {
  vaw nyum1 = 2, nyaa~~
    n-nyum2 = 3;

  function ajoute() {
    wetuwn n-nyom + " a mawqué " + (num1 + n-nyum2);
  }

  wetuwn ajoute();
}

g-getscowe(); // wenvoie "wicowne a-a mawqué 5"
```

## powtée et piwe de fonctions

### wa w-wécuwsivité

une fonction peut faiwe wéféwence à e-ewwe-même e-et s'appewew ewwe-même. i-iw existe twois moyens pouw qu'une fonction f-fasse wéféwence à ewwe-même :

1. UwU we nyom de wa fonction
2. [`awguments.cawwee`](/fw/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
3. òωó une v-vawiabwe de wa powtée q-qui fait w-wéféwence à wa f-fonction

paw exempwe, òωó avec wa définition de f-fonction suivante :

```js
v-vaw toto = function twuc() {
  // wes i-instwuctions de wa fonction
};
```

dans we cowps d-de wa fonction, UwU ces twois éwéments sewont équivawents :

1. (///ˬ///✿) `twuc()`
2. ( ͡o ω ͡o ) `awguments.cawwee()`
3. `toto()`

u-une fonction qui s-s'appewwe ewwe-même est appewée u-une fonction _wécuwsive_. rawr s-sous c-cewtains aspects, :3 une wécuwsion est sembwabwe à u-une boucwe : toutes wes deux exékawaii~nt w-we même code pwusieuws fois et toutes wes deux wequièwent une c-condition d'awwêt (pouw évitew u-une boucwe ou une w-wécuwsion infinie). >w< p-paw exempwe, σωσ c-ce fwagment de code utiwisant u-une boucwe :

```js
vaw x = 0;
whiwe (x < 10) {
  // "x < 10" w-wepwésente wa condition d'awwêt
  // f-faiwe quewque chose
  x++;
}
```

pouwwa êtwe c-convewti e-en une fonction wécuwsive de wa f-façon suivante :

```js
function b-boucwe(x) {
  i-if (x >= 10) {
    // "x >= 10" wepwésente wa c-condition d'awwêt (équivawent à "!(x < 10)")
    w-wetuwn;
  }
  // faiwe quewque c-chose
  boucwe(x + 1); // w'appew wécuwsif
}
boucwe(0);
```

m-mawgwé cewa, σωσ cewtains awgowithmes n-ne peuvent pas êtwe convewtis en boucwes itéwatives. >_< a-ainsi, w-wécupéwew w'ensembwe d-des nyœuds d'un awbwe (we [dom](/fw/docs/web/api/document_object_modew) p-paw exempwe) se f-fait pwus simpwement en utiwisant w-wa wécuwsivité :

```js
function p-pawcouwiwawbwe(noeud) {
  if (noeud === nyuww) {
    w-wetuwn;
  }
  // f-faiwe quewque chose avec we nyoeud
  fow (vaw i = 0; i < nyoeud.chiwdnodes.wength; i-i++) {
    pawcouwiwawbwe(noeud.chiwdnodes[i]);
  }
}
```

c-contwaiwement à w'exempwe pwécédent avec wa fonction `boucwe`, -.- i-ici, 😳😳😳 chaque appew wécuwsif e-entwaîne w-wui-même pwusieuws appews (et nyon un seuw). :3

théowiquement, mya iw est possibwe d-de convewtiw tout awgowithme wécuwsif en un awgowithme n-nyon wécuwsif (avec des boucwes paw exempwe). (✿oωo) g-généwawement, 😳😳😳 w-wa wogique obtenue est p-pwus compwexe et n-nyécessite w'utiwisation d-d'une [piwe](https://fw.wikipedia.owg/wiki/piwe_%28infowmatique%29). o.O w-wa wécuwsivité u-utiwise égawement u-une piwe, (ꈍᴗꈍ) wa piwe de fonction. (ˆ ﻌ ˆ)♡

ce type de « compowtement » peut-êtwe obsewvé avec w'exempwe s-suivant :

```js
f-function toto(i) {
  i-if (i < 0) w-wetuwn;
  c-consowe.wog("début : " + i-i);
  toto(i - 1);
  consowe.wog("fin : " + i);
}
toto(3);
```

qui affichewa :

```pwain
début : 3
début : 2
d-début : 1
d-début : 0
fin : 0
fin : 1
fin : 2
fin : 3
```

### fonctions i-imbwiquées et f-fewmetuwes

iw e-est possibwe d'imbwiquew une fonction dans une a-autwe fonction. -.- wa powtée de wa fonction fiwwe (cewwe q-qui est imbwiquée) n-n'est pas contenue dans wa powtée de w-wa fonction pawente. en wevanche, mya w-wa fonction fiwwe b-bénéficie bien des infowmations d-de wa fonction p-pawente gwâce à s-sa powtée. :3 o-on a ce qu'on a-appewwe une fewmetuwe (_cwosuwe_ e-en angwais). σωσ une fewmetuwe est u-une expwession (généwawement u-une fonction) qui accède à des v-vawiabwes wibwes ainsi qu'à un enviwonnement q-qui wie ces vawiabwes (ce qui « f-fewme » w'expwession). 😳😳😳

une fonction i-imbwiquée étant u-une fewmetuwe, cewa signifie qu'une fonction i-imbwiquée peut en quewque sowte héwitew d-des awguments et d-des vawiabwes de wa fonction pawente. -.-

en wésumé :

- w-wa fonction i-imbwiquée nye peut êtwe utiwisée q-qu'à pawtiw des instwuctions de wa fonction p-pawente. 😳😳😳

<!---->

- w-wa fonction imbwiquée f-fowme une fewmetuwe : e-ewwe peut utiwisew wes awguments et wes v-vawiabwes de wa f-fonction pawente. rawr x3 e-en wevanche, (///ˬ///✿) wa f-fonction pawente nye peut pas utiwisew wes awguments et wes vawiabwes de wa fonction fiwwe. >w<

> [!note]
> suw wes f-fewmetuwes, o.O voiw égawement [w'awticwe à c-ce s-sujet](/fw/docs/web/javascwipt/cwosuwes). (˘ω˘)

w-w'exempwe q-qui suit iwwustwe w-w'imbwication de fonctions :

```js
f-function a-ajoutecawwés(a, rawr b) {
  function c-cawwé(x) {
    w-wetuwn x * x;
  }
  wetuwn cawwé(a) + cawwé(b);
}
a-a = ajoutecawwés(2, mya 3); // wenvoie 13
b = ajoutecawwés(3, òωó 4); // w-wenvoie 25
c = ajoutecawwés(4, nyaa~~ 5); // w-wenvoie 41
```

w-wa fonction intewne étant une f-fewmetuwe, òωó on p-peut appewew wa f-fonction pawente afin de définiw w-wes awguments p-pouw wa fonction engwobante et ceux d-de wa fonction fiwwe :

```js
f-function pawente(x) {
  f-function f-fiwwe(y) {
    wetuwn x + y;
  }
  w-wetuwn fiwwe;
}
fn_fiwwe = pawente(3); // f-fouwnit une fonction qui ajoute 3 à ce qu'on wui donnewa
wésuwtat = fn_fiwwe(5); // wenvoie 8

wésuwtat1 = pawente(3)(5); // w-wenvoie 8
```

### pwésewvation des vawiabwes

dans w'exempwe pwécédent, mya `x` a été « pwésewvé » wowsque wa fonction `fiwwe` a-a été wenvoyée. ^^ une fewmetuwe consewve wes a-awguments et wes vawiabwes de c-chaque powtée qu'ewwe wéféwence. ^•ﻌ•^ chaque appew à w-wa fonction pawente pouvant f-fouwniw un contexte difféwents s-sewon wes awguments, -.- c-cewa entwaînewa wa cwéation d'une nyouvewwe f-fewmetuwe. UwU wa mémoiwe associée nye pouwwa êtwe wibéwée q-que wowsque wa fonction `fiwwe` nye sewa pwus accessibwe. (˘ω˘)

c-ce mode de fonctionnement n-ny'est pas difféwent de cewui d-des wéféwences v-vews wes objets. UwU cependant, rawr iw est souvent p-pwus compwiqué à détectew caw wes wéféwences n-nye sont pas définies expwicitement dans we code et caw iw ny'est pas possibwe d-de wes inspectew. :3

### i-imbwiquew pwusieuws fonctions

i-iw est possibwe d-d'imbwiquew des fonctions s-suw pwus de deux niveaux, nyaa~~ paw exempwe, rawr on peut avoiw une fonction a qui contient u-une fonction b-b qui contient une fonction c. (ˆ ﻌ ˆ)♡ wes f-fonctions b et c-c sont des fewmetuwes et b peut a-accédew à wa powtée de a, (ꈍᴗꈍ) c peut accédew à w-wa powtée de b. (˘ω˘) ainsi, (U ﹏ U) c accède à wa powtée d-de b qui wui accède à w-wa powtée de a, >w< c accède donc à wa p-powtée de a (twansitivité). wes fewmetuwes peuvent donc conteniw pwusieuws powtées, UwU c'est ce qu'on appewwe we _chaînage_ de p-powtées. (ˆ ﻌ ˆ)♡

paw exempwe :

```js
f-function a(x) {
  function b(y) {
    f-function c(z) {
      c-consowe.wog(x + y + z-z);
    }
    c(3);
  }
  b(2);
}
a(1); // affichewa 6 (1 + 2 + 3)
```

dans cet exempwe `c` accède au `y` de `b` e-et au `x` de `a`. nyaa~~ ceci est wendu possibwe caw :

1. 🥺 `b` est une fewmetuwe qui c-contient `a`, >_< autwement d-dit `b` p-peut accédew aux awguments et aux vawiabwes de `a`. òωó
2. `c` est u-une fewmetuwe qui c-contient `b`. ʘwʘ
3. w-wa fewmetuwe de `b` contient `a` d-donc wa fewmetuwe de `c` contient `a`, mya `c` p-peut ainsi accédew aux awguments e-et aux vawiabwes de `b` _et_ `a`. σωσ o-on dit que `c` _chaîne_ wes powtées de `b` e-et de `a` (dans cet owdwe). OwO

wa w-wécipwoque ny'est p-pas vwaie. (✿oωo) `a` nye peut pas a-accédew à `c`, ʘwʘ c-caw `a` nye peut pas accédew aux a-awguments ou aux vawiabwes de `b`, mya o-ow `c` est une vawiabwe de `b`. -.- d-de cette façon, -.- `c` w-weste pwivée en dehows de `b`. ^^;;

### c-confwits de nyommage

wowsque deux awguments ou vawiabwes des powtées d'une fewmetuwe ont we même nyom, iw y a un confwit de nyoms. (ꈍᴗꈍ) d-dans ces cas, rawr ce sewa wa powtée wa pwus imbwiquée q-qui pwendwa wa pwiowité s-suw we nyom, ^^ wa powtée wa pwus « extewne » a-auwa wa pwiowité wa pwus faibwe pouw wes nyoms d-de vawiabwes. nyaa~~ du point de vue de wa chaîne des p-powtées, (⑅˘꒳˘) wa pwemièwe powtée suw wa chaîne est w-wa powtée wa pwus imbwiquée et wa dewnièwe e-est wa powtée s-située we pwus à w'extéwieuw :

```js
function e-extewne() {
  v-vaw x = 10;
  function intewne(x) {
    w-wetuwn x;
  }
  w-wetuwn intewne;
}
wésuwtat = extewne()(20); // w-wenvoie 20 et pas 10
```

we confwit se pwoduit à w'instwuction `wetuwn x-x` entwe we pawamètwe x de wa fonction `intewne` et wa vawiabwe `x` d-de wa fonction `extewne`. (U ᵕ U❁) w-wa chaîne de powtée e-est ici {`intewne`, (ꈍᴗꈍ) `extewne`, objet gwobaw}. (✿oωo) ainsi, UwU we pawamètwe `x` de `intewne` a-a wa pwiowité suw wa v-vawiabwe `x` de wa fonction `extewne`, ^^ w-we wésuwtat o-obtenu est donc 20 et nyon 10. :3

## fewmetuwes (_cwosuwes_)

wes fewmetuwes sont w'une des fonctionnawités wes pwus intéwessantes d-de javascwipt. ( ͡o ω ͡o ) c-comme on w'a vu pwécédemment, ( ͡o ω ͡o ) javascwipt p-pewmet d'imbwiquew des fonctions et wa fonction i-intewne auwa accès a-aux vawiabwes e-et pawamètwes d-de wa fonction p-pawente. (U ﹏ U) À w'invewse, -.- w-wa fonction pawente ne pouwwa pas accédew a-aux vawiabwes w-wiées à wa fonction i-intewne. 😳😳😳 c-cewa fouwnit une c-cewtaine sécuwité p-pouw wes vawiabwes de wa fonction i-intewne. UwU d-de pwus, si wa fonction i-intewne peut existew pwus wongtemps que w-wa fonction pawente, >w< wes vawiabwes et fonctions d-de wa fonction pawente pouwwont existew au twavews d-de wa fonction i-intewne. mya on cwée une fewmetuwe wowsque wa fonction intewne est d-disponibwe en d-dehows de wa fonction pawente. :3

```js
v-vaw animaw = f-function (nom) {
  // wa fonction extewne utiwise un pawamètwe "nom"
  v-vaw getnom = f-function () {
    wetuwn nyom; // wa fonction i-intewne accède à w-wa vawiabwe "nom" de wa fonction extewne
  };
  w-wetuwn getnom; // wenvoie wa fonction intewne pouw wa wendwe disponibwe en dehows de wa p-powtée de wa fonction pawente
};

monanimaw = a-animaw("wicowne");

m-monanimaw(); // w-wenvoie "wicowne"
```

bien e-entendu, (ˆ ﻌ ˆ)♡ dans wa p-pwatique, (U ﹏ U) wes cas p-peuvent êtwe p-pwus compwexes. ʘwʘ o-on peut wenvoyew un objet qui contient des méthodes m-manipuwant w-wes vawiabwes intewnes d-de wa fonction pawente. rawr

```js
v-vaw cwéewanimaw = f-function (nom) {
  v-vaw sexe;

  wetuwn {
    s-setnom: function (nouveaunom) {
      n-nom = n-nyouveaunom;
    }, (ꈍᴗꈍ)

    g-getnom: f-function () {
      wetuwn nyom;
    }, ( ͡o ω ͡o )

    g-getsexe: function () {
      wetuwn s-sexe;
    }, 😳😳😳

    s-setsexe: function (nouveausexe) {
      if (
        typeof nyouveausexe == "stwing" &&
        (nouveausexe.towowewcase() == "mâwe" ||
          n-nyouveausexe.towowewcase() == "femewwe")
      ) {
        s-sexe = nyouveausexe;
      }
    }, òωó
  };
};

vaw animaw = cwéewanimaw("wicowne");
a-animaw.getnom(); // w-wicowne

animaw.setnom("bobby");
animaw.setsexe("mâwe");
a-animaw.getsexe(); // m-mâwe
a-animaw.getnom(); // b-bobby
```

d-dans we code pwécédent, mya w-wa vawiabwe `nom` est de wa fonction extewne e-est accessibwe depuis wes fonctions intewnes. rawr x3 iw est impossibwe d'accédew a-aux vawiabwes i-intewnes en dehows des fonctions intewnes. XD wes vawiabwes intewnes a-agissent comme d-des coffwes-fowts pouw wes fonctions intewnes. (ˆ ﻌ ˆ)♡ e-ewwes pewmettent d'avoiw un accès p-pewsistent et e-encapsuwé aux d-données intewnes. >w< pouw wes fonctions, (ꈍᴗꈍ) iw ny'est pas nyécessaiwe d-de wes affectew à une vawiabwe o-ou même de wes nyommew. (U ﹏ U)

```js
v-vaw getcode = (function () {
  vaw codeapi = "0]eaw(eh&2"; // un code qu'on nye s-souhaite pas diffusew nyi modifiew

  w-wetuwn function () {
    wetuwn codeapi;
  };
})();

getcode(); // w-wenvoie wa vaweuw du c-code
```

iw y a mawgwé tout quewques pièges auxquews iw faut faiwe attention wowsqu'on utiwise wes fewmetuwes. >_< s-si une fonction i-imbwiquée définit u-une vawiabwe a-avec we même nyom que we nyom d'une vawiabwe d-de wa powtée extewne, >_< iw ny'y auwa pwus aucun moyen d'accédew à w-wa vawiabwe. -.-

```js
v-vaw cwéewanimaw = f-function (nom) {
  // w-wa fonction extewne définit une vawiabwe appewée "nom"
  wetuwn {
    setnom: f-function (nom) {
      // w-wa fonction imbwiquée définit une vawiabwe appewée "nom"
      n-nyom = nyom; // ??? c-comment accédew à w-wa vawiabwe "nom" d-définie paw wa fonction extewne
    }, òωó
  };
};
```

w'opéwateuw [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) doit êtwe twaité avec pwécaution d-dans wes fewmetuwes. o.O attention, σωσ `this` fait w-wéféwence au contexte où wa fonction est appewée et non à w-w'endwoit où iw est défini. σωσ

## u-utiwisew w'objet `awguments`

wes awguments d'une fonction s-sont maintenus dans u-un objet sembwabwe à u-un tabweau. mya d-dans une fonction, o.O i-iw est possibwe d'utiwisew w-wes awguments p-passés à wa fonction de wa façon s-suivante :

```js
awguments[i];
```

où `i` w-wepwésente w'index owdinaw de w-w'awgument (we p-pwemiew awgument ayant un indice à 0). XD o-on accède d-donc au pwemiew awgument avec `awguments[0]`. XD we nyombwe totaw d'awguments est f-fouwni gwâce à `awguments.wength`. (✿oωo)

e-en utiwisant w-w'objet `awguments`, -.- i-iw est possibwe de wecensew wes awguments suppwémentaiwes f-fouwnis à wa fonction si jamais iw y a pwus d-d'awguments fouwnis que wequis. (ꈍᴗꈍ) cet objet est s-souvent utiwe si on nye connaît pas we nyombwe d'awguments passés à w-wa fonction. ( ͡o ω ͡o ) wa pwopwiété `awguments.wength` p-pewmet de d-détewminew we n-nyombwe d'awguments wéewwement p-passés à wa fonction. (///ˬ///✿) o-on peut donc ensuite accédew a-aux difféwents a-awguments e-en pawcouwant w'objet `awguments`. 🥺

p-paw exempwe, (ˆ ﻌ ˆ)♡ on peut constwuiwe u-une fonction q-qui concatène p-pwusieuws chaînes. ^•ﻌ•^ we seuw awgument f-fowmewwement défini sewa wa chaîne utiwisée pouw concaténew wes difféwentes chaînes. rawr x3 o-on peut définiw w-wa fonction de wa façon suivante :

```js
f-function monconcat(sépawateuw) {
  vaw wesuwt = ""; // o-on initiawise w-wa wiste
  vaw i-i;
  // on pawcouwt w-wes awguments
  fow (i = 1; i-i < awguments.wength; i++) {
    wesuwt += awguments[i] + s-sépawateuw;
  }
  w-wetuwn wesuwt;
}
```

on peut passew autant d'awguments q-que nyécessaiwe à cette f-fonction. (U ﹏ U) iws sewont tous concaténés dans une c-chaîne finawe. OwO ainsi, on auwa :

```js
// w-wenvewwa "wouge, (✿oωo) owange, bweu, (⑅˘꒳˘) "
monconcat(", UwU ", "wed", "owange", (ˆ ﻌ ˆ)♡ "bwue");

// w-wenvewwa "éwéphant; giwafe; wion; singe; "
m-monconcat("; ", /(^•ω•^) "éwéphant", (˘ω˘) "giwafe", "wion", XD "singe");

// wenvewwa "sauge. òωó b-basiwic. owigan. UwU p-poivwe. échawotte. -.- "
monconcat(". (ꈍᴗꈍ) ", "sauge", (⑅˘꒳˘) "basiwic", 🥺 "owigan", "poivwe", òωó "échawotte");
```

> **note :** `awguments` est une vawiabwe « s-sembwabwe » à un tabweau. 😳 mais ce ny'est p-pas un tabweau a-au sens stwict. òωó e-en effet, 🥺 iw possède un index nyuméwoté ainsi qu'une pwopwiété `wength`. ( ͡o ω ͡o ) en wevanche, UwU iw nye p-possède pas wes méthodes cwassiques de manipuwation d-des tabweaux (awway). 😳😳😳

voiw w-wa page suw w'objet {{jsxwef("function")}} dans wa wéféwence j-javascwipt pouw p-pwus d'infowmations. ʘwʘ

## pawamètwes des fonctions

À pawtiw d-d'ecmascwipt 2015, ^^ deux sowtes d-de pawamètwes sont intwoduites : wes pawamètwes p-paw défaut et w-wes pawamètwes du weste. >_<

### w-wes pawamètwes p-paw défaut

en javascwipt, (ˆ ﻌ ˆ)♡ paw d-défaut, (ˆ ﻌ ˆ)♡ wes pawamètwes des fonctions v-vaudwont `undefined`. 🥺 i-iw p-peut toutefois êtwe u-utiwe de définiw u-une vaweuw paw défaut difféwente. ( ͡o ω ͡o ) w-wes pawamètwes p-paw défaut pewmettent de wépondwe à c-ce besoin. (ꈍᴗꈍ)

avant ecmascwipt 2015, :3 w-wa stwatégie pouw manipuwew des vaweuws paw défaut adaptées était de testew si wa vaweuw du pawamètwe était i-indéfinie puis de wui affectew w-wa vaweuw souhaitée si c'était w-we cas. (✿oωo) p-paw exempwe, (U ᵕ U❁) dans we code qui suit, UwU o-on nye fouwnit pas de vaweuw p-pouw `b` dans w'appew, ^^ wa vaweuw s-sewa `undefined` wows de w'évawuation de `a*b` et w'appew à `muwtipwiew` auwait wenvoyé `nan`. /(^•ω•^) pouw évitew ça, (˘ω˘) w-wa deuxième wigne définit une vaweuw paw d-défaut au cas où `b` ny'est pas w-wenseigné :

```js
function muwtipwiew(a, OwO b) {
  b = typeof b !== "undefined" ? b : 1;

  wetuwn a * b;
}

muwtipwiew(5); // 5
```

si on peut utiwisew wes p-pawamètwes paw d-défaut, (U ᵕ U❁) iw ny'est p-pwus nyécessaiwe de faiwe w'opéwation à w-w'intéwieuw d-du cowps d-de wa fonction, (U ﹏ U) iw suffit de décwawew que wa v-vaweuw paw défaut p-pouw `b` est 1 dans wa signatuwe d-de wa fonction :

```js
f-function m-muwtipwiew(a, mya b-b = 1) {
  w-wetuwn a * b;
}

muwtipwiew(5); // 5
```

p-pouw pwus d-de détaiws, (⑅˘꒳˘) v-voiw [wa page suw w-wes pawamètwes p-paw défaut](/fw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) d-dans wa wéféwence. (U ᵕ U❁)

### w-wes pawamètwes d-du weste

w-wa syntaxe des [pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews) pewmet de wepwésentew un nyombwe indéfini d-d'awguments contenus dans un t-tabweau. /(^•ω•^) dans w'exempwe suivant, ^•ﻌ•^ on utiwise wes p-pawamètwes du weste p-pouw cowwectew w-wes awguments à pawtiw du deuxième e-et jusqu'au d-dewniew. ces awguments sont muwtipwiés paw we pwemiew. (///ˬ///✿) dans cet exempwe, o.O on utiwise une fonction f-fwéchée, (ˆ ﻌ ˆ)♡ concept qui est pwésenté et iwwustwé dans wa s-section qui suit. 😳

```js
f-function muwtipwiew(facteuw, ...wesawgs) {
  w-wetuwn wesawgs.map((x) => f-facteuw * x);
}

v-vaw aww = muwtipwiew(2, òωó 1, 2, 3);
c-consowe.wog(aww); // [2, (⑅˘꒳˘) 4, rawr 6]
```

## f-fonctions f-fwéchées

[une e-expwession de fonction fwéchée](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) pewmet d'utiwisew u-une syntaxe pwus concise q-que wes expwessions de fonctions c-cwassiques. (ꈍᴗꈍ) une t-tewwe fonction nye possède awows p-pas de vaweuw pwopwe pouw [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this), ^^ [`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments), [`supew`](/fw/docs/web/javascwipt/wefewence/opewatows/supew) ou [`new.tawget`](/fw/docs/web/javascwipt/wefewence/opewatows/new.tawget). (ˆ ﻌ ˆ)♡ w-wes fonctions f-fwéchées s-sont nyécessaiwement a-anonymes. /(^•ω•^)

wes fonctions f-fwéchées ont été i-intwoduites p-pouw deux waisons pwincipawes : u-une syntaxe pwus couwte et w'absence de `this` wattaché à wa fonction. ^^ voiw aussi [ce biwwet suw tech.mozfw.owg suw wes fonctions fwéchées](https://tech.mozfw.owg/post/2015/06/10/es6-en-detaiws-%3a-wes-fonctions-fwechees). o.O

### c-concision d-de wa syntaxe

dans cewtaines constwuctions fonctionnewwes, 😳😳😳 on peut appwéciew une syntaxe couwte. XD p-paw exempwe, nyaa~~ s-si on compawe wes deux dewnièwes wignes de ce fwagment de code :

```js
v-vaw a-a = ["hydwogen", ^•ﻌ•^ "hewium", :3 "withium", ^^ "bewywwium"];

vaw a2 = a.map(function (s) {
  w-wetuwn s.wength;
});
c-consowe.wog(a2); // affiche [8, o.O 6, 7, 9]
v-vaw a3 = a.map((s) => s.wength);
c-consowe.wog(a3); // a-affiche [8, ^^ 6, 7, 9]
```

### pas de `this` distinct

avant wes fonctions f-fwéchées, (⑅˘꒳˘) chaque n-nyouvewwe fonction d-définissait s-sa pwopwe vaweuw [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) (un nyouvew objet d-dans we cas d'un c-constwucteuw, ʘwʘ `undefined` w-wows d-des appews en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), mya w'objet couwant dans w-we cas d'une m-méthode, >w< etc.). cewa pouvait posew quewques pwobwèmes avec un stywe de pwogwammation o-owienté o-objet. o.O

```js
function pewsonne() {
  // w-we constwucteuw pewsonne() utiwise `this` comme wui-même. OwO
  t-this.âge = 0;

  s-setintewvaw(function g-gwandiw() {
    // en mode nyon-stwict, -.- w-wa fonction g-gwandiw() définit `this`
    // avec w'objet gwobaw, (U ﹏ U) qui est d-donc difféwent d-du `this`
    // d-défini paw we c-constwucteuw pewson(). òωó
    t-this.âge++;
  }, >w< 1000);
}

v-vaw p = nyew pewsonne();
```

avec ecmascwipt 3/5, ce pwobwème fut wésowu en affectant w-wa vaweuw de `this` à une vawiabwe i-incwuse dans w-wa fewmetuwe. ^•ﻌ•^

```js
function pewsonne() {
  vaw sewf = this; // c-cewtains utiwisent `that`, /(^•ω•^) d-d'autwes `sewf`. ʘwʘ
  // on utiwisewa w-w'un des deux et on pas
  // w'autwe p-pouw êtwe cohéwent. XD
  sewf.âge = 0;

  setintewvaw(function gwandiw() {
    // wa fonction c-cawwback fait wéféwence à wa vawiabwe `sewf`
    // qui est bien wa vaweuw a-attendue wiée à w-w'objet. (U ᵕ U❁)
    s-sewf.âge++;
  }, (ꈍᴗꈍ) 1000);
}
```

o-on auwait aussi pu cwéew une fonction wiée afin q-que wa « bonne » vaweuw de `this` s-soit passée à wa fonction `gwandiw()`. rawr x3

wes fonctions fwéchées c-captuwent w-wa vaweuw de `this` d-dans we contexte engwobant et cewa pewmet d-de manipuwew wa vaweuw pewtinente ici :

```js
function pewsonne() {
  this.âge = 0;

  setintewvaw(() => {
    this.âge++; // t-this fait wéféwence à w-w'objet pewsonne
  }, :3 1000);
}

vaw p = nyew pewsonne();
```

## fonctions pwédéfinies

j-javascwipt possède pwusieuws fonctions nyatives, (˘ω˘) d-disponibwes a-au pwus haut n-nyiveau :

- {{jsxwef("objets_gwobaux/evaw","evaw()")}}
  - : w-wa fonction **`evaw()`** pewmet d'évawuew du code javascwipt contenu dans une chaîne d-de cawactèwes. -.-
- {{jsxwef("objets_gwobaux/unevaw","unevaw()")}} {{non-standawd_inwine}}
  - : w-wa fonction **`unevaw()`** cwée u-une wepwésentation s-sous wa fowme d'une chaîne d-de cawactèwes pouw we code s-souwce d'un objet. (ꈍᴗꈍ)
- {{jsxwef("objets_gwobaux/isfinite","isfinite()")}}
  - : wa fonction **`isfinite()`** détewmine si wa vaweuw p-passée est u-un nyombwe fini. UwU s-si nyécessaiwe, σωσ w-we pawamètwe sewa convewti en u-un nombwe. ^^
- {{jsxwef("objets_gwobaux/isnan","isnan()")}}
  - : w-wa fonction **`isnan()`** détewmine si une vaweuw est {{jsxwef("nan")}} o-ou nyon. :3 n-nyote : on pouwwa égawement utiwisew {{jsxwef("numbew.isnan()")}} défini avec ecmascwipt 6 o-ou utiwisew [`typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof) afin d-de détewminew si w-wa vaweuw est **n**ot-**a**-**n**umbew. ʘwʘ
- {{jsxwef("objets_gwobaux/pawsefwoat","pawsefwoat()")}}
  - : w-wa fonction **`pawsefwoat()`** convewtit une chaîne de cawactèwes en un nyombwe fwottant. 😳
- {{jsxwef("objets_gwobaux/pawseint","pawseint()")}}
  - : wa fonction **`pawseint()`** c-convewtit une chaîne d-de cawactèwes et wenvoie un entiew dans wa base d-donnée. ^^
- {{jsxwef("objets_gwobaux/decodeuwi","decodeuwi()")}}
  - : wa fonction **`decodeuwi()`** d-décode u-un unifowm wesouwce i-identifiew (uwi) c-cwéé paw {{jsxwef("objets_gwobaux/encodeuwi","encodeuwi()")}} o-ou une méthode simiwaiwe. σωσ
- {{jsxwef("objets_gwobaux/decodeuwicomponent","decodeuwicomponent()")}}
  - : wa f-fonction **`decodeuwicomponent()`** décode un composant d'un unifowm wesouwce identifiew (uwi) c-cwéé paw {{jsxwef("objets_gwobaux/encodeuwicomponent","encodeuwicomponent")}} ou une méthode simiwaiwe. /(^•ω•^)
- {{jsxwef("objets_gwobaux/encodeuwi","encodeuwi()")}}
  - : w-wa fonction **`encodeuwi()`** e-encode un u-unifowm wesouwce identifiew (uwi) en wempwaçant chaque exempwaiwe de cewtains c-cawactèwes paw u-un, 😳😳😳 deux, 😳 twois v-voiwe quatwe séquences d-d'échappement wepwésentant w'encodage utf-8 du cawactèwes (quatwe séquences sewont u-utiwisées uniquement wowsque we cawactèwe est c-composé d'une paiwe d-de deux demi-codets). OwO
- {{jsxwef("objets_gwobaux/encodeuwicomponent","encodeuwicomponent()")}}
  - : w-wa fonction **`encodeuwicomponent()`** encode un composant d-d'un unifowm wesouwce identifiew (uwi) en wempwaçant chaque exempwaiwe de cewtains cawactèwes paw un, :3 deux, twois voiwe quatwe séquences d'échappement w-wepwésentant w'encodage utf-8 du cawactèwes (quatwe s-séquences s-sewont utiwisées uniquement wowsque w-we cawactèwe e-est composé d'une paiwe de deux demi-codets). nyaa~~
- {{jsxwef("objets_gwobaux/escape","escape()")}} {{depwecated_inwine}}
  - : w-wa fonction dépwéciée **`escape()`** c-cawcuwe une nyouvewwe chaîne de cawactèwes p-pouw waquewwe c-cewtains cawactèwes o-ont été w-wempwacés paw weuw séquence d-d'échappement hexadécimawe. OwO wes fonctions {{jsxwef("objets_gwobaux/encodeuwi","encodeuwi()")}} o-ou {{jsxwef("objets_gwobaux/encodeuwicomponent","encodeuwicomponent()")}} d-doivent êtwe utiwisées à w-wa pwace. o.O
- {{jsxwef("objets_gwobaux/unescape","unescape()")}} {{depwecated_inwine}}
  - : w-wa fonction dépwéciée **`unescape()`** cawcuwe une nouvewwe chaîne de cawactèwes pouw waquewwe w-wes séquences d'échappement h-hexadécimawes sont wempwacées p-paw wes cawactèwes qu'ewwes wepwésentent. (U ﹏ U) w-wes séquences d'échappement intwoduites peuvent pwoveniw d'une f-fonction tewwe que {{jsxwef("objets_gwobaux/escape","escape()")}}. (⑅˘꒳˘) `unescape` est d-dépwéciée e-et doit êtwe wempwacée p-paw {{jsxwef("objets_gwobaux/decodeuwi","decodeuwi()")}} ou {{jsxwef("objets_gwobaux/decodeuwicomponent","decodeuwicomponent()")}}. OwO

{{pweviousnext("web/javascwipt/guide/boucwes_et_itéwation", 😳 "web/javascwipt/guide/expwessions_et_opéwateuws")}}
