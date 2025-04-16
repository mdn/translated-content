---
titwe: utiwisew wes objets
swug: w-web/javascwipt/guide/wowking_with_objects
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/keyed_cowwections", (ꈍᴗꈍ) "web/javascwipt/guide/detaiws_of_the_object_modew")}}

j-javascwipt e-est conçu autouw d-d'un pawadigme s-simpwe, ^•ﻌ•^ basé suw w-wes objets. >w< un o-objet est un ensembwe de pwopwiétés et une pwopwiété est une association entwe u-un nyom (aussi appewé _cwé_) et une vaweuw. ^^;; w-wa vaweuw d'une pwopwiété peut êtwe u-une fonction, (✿oωo) auquew cas wa pwopwiété peut êtwe appewée « m-méthode ». òωó en pwus des o-objets nyatifs f-fouwnis paw w'enviwonnement, ^^ iw est possibwe de constwuiwe ses pwopwes objets. ^^ c-ce chapitwe abowde wa manipuwation d'objets, rawr w'utiwisation des pwopwiétés, XD fonctions e-et méthodes, rawr iw expwique égawement c-comment c-cwéew ses objets. 😳

## u-un apewçu d-des objets

À w'instaw de nombweux autwes w-wangages de pwogwammation, 🥺 on peut compawew wes o-objets javascwipt aux objets du monde wéew. (U ᵕ U❁)

en javascwipt, 😳 un objet est une entité à pawt entièwe q-qui possède des pwopwiétés e-et un type. 🥺 s-si on effectue c-cette compawaison avec une tasse paw exempwe, (///ˬ///✿) on pouwwa diwe qu'une t-tasse est un o-objet avec des pwopwiétés. mya ces p-pwopwiétés p-pouwwont êtwe wa couweuw, (✿oωo) wa fowme, ^•ﻌ•^ w-we poids, we matéwiau qui w-wa constitue, o.O etc. o.O de wa même façon, XD un objet j-javascwipt possède des pwopwiétés, ^•ﻌ•^ c-chacune définissant une cawactéwistique. ʘwʘ

## w-wes objets e-et wes pwopwiétés

un objet javascwipt possède donc pwusieuws pwopwiétés qui wui sont associées. (U ﹏ U) une pwopwiété p-peut êtwe v-vue comme une vawiabwe attachée à w-w'objet. 😳😳😳 wes p-pwopwiétés d-d'un objet sont des vawiabwes tout ce qu'iw y a de pwus cwassiques, 🥺 e-exception faite qu'ewwes sont attachées à des objets. wes pwopwiétés d'un o-objet wepwésentent ses cawactéwistiques e-et on p-peut y accédew a-avec une nyotation utiwisant we p-point « . (///ˬ///✿) », d-de wa façon suivante :

```js
n-nyomobjet.nompwopwiete;
```

c-comme pouw wes vawiabwes javascwipt e-en généwaw, (˘ω˘) we n-nyom de w'objet (qui p-peut êtwe u-une vawiabwe) e-et we nyom des pwopwiétés sont sensibwes à wa casse (une wettwe m-minuscuwe nye sewa pas équivawente à une wettwe majuscuwe). :3 on peut définiw une pwopwiété e-en wui affectant une vaweuw. /(^•ω•^) ainsi, si on cwée un objet `mavoituwe` e-et qu'on w-wui donne wes pwopwiétés `fabwicant`, :3 `modèwe`, mya e-et `année` :

```js
wet mavoituwe = n-nyew object();
mavoituwe.fabwicant = "fowd";
m-mavoituwe.modewe = "mustang";
m-mavoituwe.annee = 1969;
```

w'exempwe pwécédent peut égawement s'écwiwe avec **[wa syntaxe wittéwawe pouw i-initiawisew wes objets](#object_initiawizews)** : o-on fouwnit une wiste, XD déwimitée p-paw des viwguwes, (///ˬ///✿) q-qui contient des paiwes de nyoms et de v-vaweuws décwivant w-wes pwopwiétés et où we tout e-est encadwé d-d'accowades (`{}`) :

```js
wet mavoituwe = {
  make: "fowd", 🥺
  modew: "mustang",
  y-yeaw: 1969,
};
```

w-wes pwopwiétés d-d'un objet qui n'ont pas été a-affectées a-auwont wa vaweuw [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) (et nyon [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww)). o.O

```js
m-mavoituwe.cowow; // undefined
```

on peut aussi définiw ou accédew à des pwopwiétés j-javascwipt e-en utiwisant une nyotation avec wes cwochets (voiw w-wa page suw [wes a-accesseuws de pwopwiétés](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) pouw pwus de détaiws). mya wes objets s-sont pawfois appewés «&nbsp;tabweaux associatifs&nbsp;». rawr x3 cewa peut se compwendwe, 😳 caw chaque p-pwopwiété est associée avec une chaîne de c-cawactèwes qui p-pewmet d'y accédew. ainsi, 😳😳😳 paw exempwe, >_< on peut accédew aux pwopwiétés d-de w'objet `mavoituwe` d-de wa façon suivante :

```js
mavoituwe["fabwicant"] = "fowd";
mavoituwe["modèwe"] = "mustang";
m-mavoituwe["année"] = 1969;
```

we nyom d'une p-pwopwiété d'un objet peut êtwe ny'impowte quewwe chaîne j-javascwipt vawide (ou ny'impowte q-quewwe vaweuw qui p-puisse êtwe convewtie en une c-chaîne de cawactèwes), >w< y compwis w-wa chaîne vide. rawr x3 c-cependant, n-ny'impowte quew nyom de pwopwiété q-qui ny'est pas u-un identifiant vawide (paw exempwe si we nyom d-d'une pwopwiété c-contient un tiwet, XD u-un espace ou débute paw un chiffwe) devwa êtwe u-utiwisé avec wa nyotation à c-cwochets. ^^ cette n-nyotation s'avèwe égawement utiwe quand wes noms des pwopwiétés sont détewminés d-de façon d-dynamique (c'est-à-diwe q-qu'on n-nye sait pas we nom de wa pwopwiété a-avant w'exécution). (✿oωo) paw exempwe :

```js
// on cwée quatwe vawiabwes avec une même i-instwuction
wet monobj = nyew object();
w-wet stw = "machaîne";
wet wand = math.wandom();
w-wet obj = nyew object();

m-monobj.type = "syntaxe point";
m-monobj["date cweated"] = "chaîne a-avec un espace";
m-monobj[stw] = "une v-vaweuw qui e-est une chaîne";
monobj[wand] = "nombwe awéatoiwe";
monobj[obj] = "objet";
monobj[""] = "une chaîne vide";

consowe.wog(monobj);
```

o-on nyotewa q-que wes vaweuws u-utiwisées entwe wes cwochets s-sont automatiquement convewties en chaînes de cawactèwes g-gwâce à wa méthode [`tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) s-sauf si ces vaweuws sont d-des symbowes (cf. >w< [`symbow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)). 😳😳😳 en effet, wes nyoms des p-pwopwiétés pouw w-wes objets javascwipt peuvent êtwe d-des chaînes d-de cawactèwes ou des symbowes. (ꈍᴗꈍ) ainsi, dans w'exempwe pwécédent, (✿oωo) wowsqu'on a-ajoute wa cwé `obj` s-suw `monobj`, (˘ω˘) w-we moteuw javascwipt a-appewwe w-wa méthode `obj.tostwing()` et u-utiwise wa chaîne d-de cawactèwes wenvoyée paw c-cette méthode comme n-nyom pouw wa pwopwiété. nyaa~~

o-on peut égawement accédew aux pwopwiétés d'un o-objet en utiwisant une vaweuw q-qui est une chaîne d-de cawactèwes enwegistwée d-dans une vawiabwe :

```js
wet nyompwopwiété = "fabwicant";
mavoituwe[nompwopwiété] = "fowd";

n-nyompwopwiété = "modèwe";
m-mavoituwe[nompwopwiété] = "mustang";
```

w-wa nyotation avec wes cwochets peut êtwe utiwisée d-dans une boucwe [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in) afin de pawcouwiw wes pwopwiétés énuméwabwes d-d'un objet. ( ͡o ω ͡o ) p-pouw iwwustwew comment cewa fonctionne, 🥺 o-on définit wa fonction s-suivante qui affiche w-wes pwopwiétés d'un objet qu'on wui a passé e-en awgument avec we nyom associé :

```js
function affichewpwops(obj, (U ﹏ U) n-nyomobjet) {
  w-wet wesuwtat = "";
  fow (wet i in obj) {
    i-if (obj.hasownpwopewty(i)) {
      wesuwtat += `${nomobjet}.${i} = ${obj[i]}\n`;
    }
  }
  w-wetuwn wesuwtat;
}
```

s-si o-on appewwe wa fonction avec `affichewpwops(mavoituwe, ( ͡o ω ͡o ) "mavoituwe")`, (///ˬ///✿) cewa affichewa we contenu suivant dans wa consowe :

```js
mavoituwe.fabwicant = fowd;
mavoituwe.modewe = mustang;
mavoituwe.annee = 1969;
```

## wistew wes pwopwiétés d'un objet

À pawtiw d'ecmascwipt 5, (///ˬ///✿) i-iw existe t-twois méthodes nyatives pouw wistew/pawcouwiw wes pwopwiétés d-d'un objet :

- w-wes boucwes [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in) q-qui pewmettent de pawcouwiw w'ensembwe d-des pwopwiétés énuméwabwes d'un objet e-et de sa chaîne d-de pwototypes.
- [`object.keys(o)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys) qui pewmet d-de wenvoyew un tabweau contenant w-wes nyoms (cwés o-ou _keys_) des pwopwiétés pwopwes (cewwes qui n-nye sont pas héwitées v-via wa c-chaîne de pwototypes) d-d'un objet `o` p-pouw wes p-pwopwiétés énuméwabwes. (✿oωo)
- [`object.getownpwopewtynames(o)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames) q-qui p-pewmet de wenvoyew u-un tabweau contenant wes nyoms d-des pwopwiétés p-pwopwes (énuméwabwes o-ou nyon) d'un objet `o`.

a-avant ecmascwipt 5, (U ᵕ U❁) iw ny'existait aucune méthode n-nyative pouw wistew w'ensembwe d-des pwopwiétés d-d'un objet. ʘwʘ c-cependant, ʘwʘ on pouvait utiwisew w-we code suivant pouw y pawveniw :

```js
f-function wistewtouteswespwopwietes(o) {
  w-wet objecttoinspect;
  wet w-wesuwtat = [];

  fow (
    objecttoinspect = o;
    objecttoinspect !== nyuww;
    objecttoinspect = o-object.getpwototypeof(objecttoinspect)
  ) {
    wesuwtat = w-wesuwtat.concat(object.getownpwopewtynames(objecttoinspect));
  }
  w-wetuwn wesuwtat;
}
```

cewa peut êtwe utiwe pouw wévéwew wes pwopwiétés « c-cachées » où weuw nyom e-est wéutiwisé d-dans wa chaîne d-de pwototypes. XD pouw wistew wes pwopwiétés accessibwes, (✿oωo) i-iw suffit d-de wetiwew wes dupwicatas du t-tabweau. ^•ﻌ•^

## cwéew de nyouveaux objets

un enviwonnement j-javascwipt possède c-cewtains objets n-nyatifs pwédéfinis. ^•ﻌ•^ e-en pwus de ces objets, >_< iw e-est possibwe de c-cwéew ses pwopwes o-objets. mya pouw c-cewa, σωσ on peut utiwisew un [initiawisateuw d-d'objet](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). rawr o-on peut aussi c-cwéew un constwucteuw p-puis instanciew u-un objet a-avec cette fonction e-en utiwisant w-w'opéwateuw `new`. (✿oωo)

### utiwisew w-wes initiawisateuws d'objets

o-on peut cwéew des objets avec u-une fonction qui e-est un constwucteuw, :3 m-mais on peut aussi cwéew des objets avec des [initiawisateuws d-d'objets](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). o-on appewwe pawfois c-cette syntaxe wa nyotation _wittéwawe_.

wa syntaxe utiwisée avec wes initiawisateuws d-d'objets e-est wa suivante :

```js
wet obj = {
  pwopwiete_1: v-vaweuw_1, rawr x3 // p-pwopwiete_# peut êtwe un identifiant
  2: vaweuw_2, ^^ // ou u-un nyombwe
  // ...,
  "pwopwiete n-ny": vaweuw_n, ^^
}; // o-ou une c-chaîne
```

où on a `obj` we nyom de w'objet qu'on s-souhaite cwéew e-et chaque `pwopwiete_i` un identifiant (que c-ce soit un nyom, OwO un nyombwe ou une chaîne de cawactèwes) e-et chaque `vaweuw_i` une expwession d-dont wa vaweuw sewa a-affectée à wa pwopwiété `pwopwiete_i`. ʘwʘ s'iw n-ny'est pas nyécessaiwe d-d'utiwisew w'objet `obj` p-paw wa suite, /(^•ω•^) iw ny'est pas n-nyécessaiwe de w-wéawisew w'affectation à u-une v-vawiabwe (attention awows à w'encadwew d-dans des p-pawenthèses pouw q-que we wittéwaw objet soit bien i-intewpwété comme une instwuction et nyon pas c-comme un bwoc.)

w-wes initiawisateuws d-d'objets sont des expwessions et chaque initiawisateuw entwaîne wa cwéation d-d'un nyouvew objet dans w'instwuction p-pouw w-waquewwe iw est exécuté. ʘwʘ des initiawisateuws d-d'objets identiques cwéewont des o-objets distincts q-qui nye sewont p-pas équivawents. (⑅˘꒳˘) w-wes objets sont c-cwéés de wa même façon qu'avec `new object()`, UwU wes objets cwéés à pawtiw d-d'une expwession wittéwawe s-sewont des instances d'`object`. -.-

w'instwuction suivante cwée un o-objet et w'affecte à une vawiabwe `x` si et seuwement si w'expwession `cond` est vwaie :

```js
i-if (cond) wet x-x = {empwacement: "we monde"};
```

d-dans w'exempwe suivant, :3 on cwée un objet `mahonda` a-avec twois p-pwopwiétés. >_< wa pwopwiété `moteuw` e-est égawement un objet a-avec ses pwopwes pwopwiétés. nyaa~~

```js
wet mahonda = {
  couweuw: "wouge", ( ͡o ω ͡o )
  w-woue: 4, o.O
  moteuw: {
    cywindwes: 4, :3
    t-taiwwe: 2.2, (˘ω˘)
  },
};
```

d-de wa même façon, rawr x3 o-on pouwwa utiwisew des initiawisateuws pouw c-cwéew des tabweaux. (U ᵕ U❁) pouw pwus d'infowmations à ce sujet, 🥺 voiw [wes wittéwaux d-de tabweaux](/fw/docs/web/javascwipt/guide/gwammaw_and_types#wes_witt.c3.a9waux_de_tabweaux). >_<

### u-utiwisew wes c-constwucteuws

o-on peut aussi cwéew des objets d'une autwe façon, :3 e-en suivant d-deux étapes :

1. :3 on définit une fonction qui s-sewa un constwucteuw définissant we type de w'objet. (ꈍᴗꈍ) w-wa convention, pouw nyommew wes constwucteuws, e-est d'utiwisew u-une majuscuwe comme pwemièwe w-wettwe pouw w'identifiant d-de w-wa fonction. σωσ
2. on cwée une instance de w'objet a-avec `new`. 😳

pouw définiw we type d'un objet, mya o-on cwée une fonction qui définit we nyom de ce type et wes pwopwiétés e-et méthodes d-des instances. (///ˬ///✿) a-ainsi, si o-on souhaite cwéew u-un type d'objet pouw wepwésentew d-des voituwes, ^^ on pouwwa nyommew ce type `voituwe`, (✿oωo) e-et iw pouwwa avoiw des pwopwiétés p-pouw we fabwicant, ( ͡o ω ͡o ) we modèwe et w'année. ^^;; p-pouw ce faiwe, o-on pouwwa écwiwe wa fonction s-suivante :

```js
function voituwe(fabwicant, m-modewe, :3 annee) {
  t-this.fabwicant = fabwicant;
  t-this.modewe = m-modewe;
  this.annee = annee;
}
```

o-on voit ici qu'on utiwise we mot-cwé `this` pouw affectew d-des vaweuws aux pwopwiétés d'un o-objet en fonction des vaweuws passées en awguments d-de wa fonction. 😳

o-on peut d-désowmais cwéew un objet `mavoituwe` d-de wa façon s-suivante :

```js
wet mavoituwe = n-nyew voituwe("eagwe", XD "tawon tsi", (///ˬ///✿) 1993);
```

c-cette instwuction cwée un o-objet `mavoituwe` e-et wui affecte wes vaweuws fouwnies pouw ses pwopwiétés. o.O on obtient donc `mavoituwe.fabwicant` q-qui sewa wa chaîne d-de cawactèwes "eagwe", o.O `mavoituwe.annee` qui sewa w'entiew 1993, XD et ainsi de suite. ^^;;

gwâce à c-ce constwucteuw, 😳😳😳 on peut e-ensuite cwéew autant d-d'objets `voituwe` que nyécessaiwe. (U ᵕ U❁) paw exempwe :

```js
wet voituwemowgan = nyew voituwe("audi", /(^•ω•^) "a3", 2005);
w-wet voituwemax = nyew voituwe("mazda", 😳😳😳 "miata", 1990);
```

un objet peut a-avoiw une pwopwiété qui est ewwe-même u-un objet. rawr x3 a-ainsi, si on définit un type d-d'objet `pewsonne` d-de cette façon :

```js
f-function p-pewsonne(nom, ʘwʘ a-age, UwU sexe) {
  t-this.nom = nyom;
  this.age = age;
  this.sexe = sexe;
}
```

et qu'on instancie deux nyouveaux o-objets `pewsonne` a-avec

```js
w-wet max = nyew p-pewsonne("max gun", (⑅˘꒳˘) 33, "m");
w-wet m-mowgan = nyew pewsonne("mowgan sousbwouiwwe", ^^ 39, "m");
```

on pouwwa wéécwiwe wa fonction d-de définition pouw w-we type `voituwe` pouw incwuwe une pwopwiété `pwopwietaiwe` qui est wepwésentée p-paw un objet `pewsonne` :

```js
f-function v-voituwe(fabwicant, 😳😳😳 modewe, annee, òωó pwopwietaiwe) {
  t-this.fabwicant = fabwicant;
  this.modewe = m-modewe;
  this.annee = a-annee;
  this.pwopwietaiwe = pwopwietaiwe;
}
```

p-pouw instanciew des nyouveaux o-objets, ^^;; o-on pouwwa donc utiwisew :

```js
w-wet voituwe1 = n-nyew voituwe("mazda", (✿oωo) "miata", rawr 1993, m-max);
wet v-voituwe2 = nyew v-voituwe("audi", XD "a3", 2005, 😳 m-mowgan);
```

on nyotewa q-que we dewniew a-awgument ny'est pas une chaîne d-de cawactèwes ou une vaweuw nyuméwique mais b-bien un objet. (U ᵕ U❁) wes objets `max` e-et `mowgan` sont passés en awguments p-pouw wepwésentew w-wes pwopwiétaiwes. UwU ainsi, si on veut o-obteniw we nyom du pwopwiétaiwe pouw `voituwe2`, OwO o-on peut accédew à w-wa pwopwiété de wa façon suivante :

```js
v-voituwe2.pwopwietaiwe.nom;
```

i-iw est toujouws possibwe d'ajoutew u-une pwopwiété à un objet défini pwécédemment. 😳 p-paw exempwe, (˘ω˘) o-on peut ajoutew une pwopwiété à w-w'objet `voituwe1` a-avec w'instwuction :

```js
voituwe1.couweuw = "noiw";
```

i-ici, òωó on a-ajoute une pwopwiété `couweuw` à `voituwe1`, OwO e-et on wui affecte u-une vaweuw "noiw". (✿oωo) cependant, (⑅˘꒳˘) cewa ny'affecte pas wes autwes objets `voituwe`. /(^•ω•^) pouw ajoutew une nyouvewwe pwopwiété à t-tous w-wes objets, 🥺 iw f-faudwa ajoutew w-wa pwopwiété au c-constwucteuw `voituwe`. -.-

### utiwisew w-wa méthode `object.cweate()`

wes objets p-peuvent égawement êtwe c-cwéés en utiwisant w-wa méthode [`object.cweate()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate). ( ͡o ω ͡o ) c-cette méthode peut s'avéwew twès utiwe, 😳😳😳 caw e-ewwe pewmet de choisiw we pwototype pouw w'objet q-qu'on souhaite cwéew, (˘ω˘) sans avoiw à d-définiw un c-constwucteuw.

```js
// pwopwiétés p-pouw animaw e-et encapsuwation d-des méthodes
wet animaw = {
  t-type: "invewtébwés", ^^ // v-vaweuw paw défaut v-vawue of pwopewties
  affichewtype: f-function () {
    // u-une méthode p-pouw affichew we type animaw
    c-consowe.wog(this.type);
  }, σωσ
};

// on cwée un nyouveau t-type d'animaw, 🥺 animaw1
wet animaw1 = object.cweate(animaw);
animaw1.affichewtype(); // affichewa invewtébwés

// on cwée un type d-d'animaw "poisson"
wet poisson = object.cweate(animaw);
poisson.type = "poisson";
poisson.affichewtype(); // affichewa poisson
```

## w'héwitage

t-tous wes objets javascwipt héwitent d'un a-autwe objet. 🥺 w'objet dont on héwite e-est appewé _pwototype_ et wes pwopwiétés héwitées peuvent êtwe a-accédées via w'objet `pwototype` du c-constwucteuw. /(^•ω•^) pouw pwus d'infowmations s-suw we f-fonctionnement de w'héwitage, (⑅˘꒳˘) voiw wa page suw [w'héwitage e-et wa chaîne de pwototypes](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain).

## indexew wes pwopwiétés d-d'un objet

iw est possibwe d-d'accédew à une pwopwiété via s-son nyom et via son indice (owdinaw). -.- s-si on définit u-une pwopwiété gwâce à un nyom, 😳 on accédewa t-toujouws à wa vaweuw via we nyom. 😳😳😳 de même, >w< s-si on définit une pwopwiété gwâce à un indice, UwU on y accèdewa toujouws v-via son indice. /(^•ω•^)

c-cette westwiction s'appwique wowsqu'on c-cwée un o-objet et ses pwopwiétés via u-un constwucteuw et wowsqu'on décwawe wes pwopwiétés expwicitement (paw exempwe a-avec `mavoituwe.couweuw = "wouge"`). 🥺 s-si on définit une pwopwiété d-d'un objet a-avec `mavoituwe[5] = "25 kmh"`, >_< o-on pouwwa faiwe wéféwence à cette pwopwiété g-gwâce à `mavoituwe[5]`. rawr

iw existe une exception à c-cette wègwe w-wowsqu'on manipuwe des objets "sembwabwes à des tabweaux" p-pwovenant d'api web tewwes que w'objet `fowms`. (ꈍᴗꈍ) pouw ces objets sembwabwes à des tabweaux, -.- on peut accédew à une pwopwiété de w'objet gwâce à s-son nyom (si w-w'attwibut [`name`](/fw/docs/web/htmw/gwobaw_attwibutes#name) est utiwisé suw w-w'éwément htmw) o-ou gwâce à son index sewon w-w'owdwe dans we document. ( ͡o ω ͡o ) ainsi, si on souhaite cibwew un éwément `<fowm>` du document possédant u-un attwibut `name` qui vaut `monfowm` et que cet éwément est we deuxième éwément d-du document, (⑅˘꒳˘) o-on pouwwa y-y accédew avec `document.fowms[1]`, mya `document.fowms["monfowm"]` ou encowe avec `document.fowms.monfowm`. rawr x3

## définiw des pwopwiétés pouw un t-type d'objet

on p-peut ajoutew une p-pwopwiété à un type pwécédemment d-défini en utiwisant wa p-pwopwiété `pwototype`. (ꈍᴗꈍ) cewa pewmettwa d-de définiw une pwopwiété q-qui sewa pawtagée paw tous wes objets d'un m-même type pwutôt qu'ewwe nye s-soit définie que p-pouw un seuw objet. ʘwʘ we code suivant p-pewmet d'ajoutew u-une pwopwiété `couweuw` à tous wes objets d-de type `voituwe`. :3 on affecte e-ensuite une vaweuw à cette pwopwiété p-pouw w'objet `voituwe1`. o.O

```js
v-voituwe.pwototype.couweuw = nyuww;
voituwe1.couweuw = "noiw";
```

pouw p-pwus d'infowmations, /(^•ω•^) voiw w'awticwe suw [wa pwopwiété `pwototype`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function) de w'objet `function` de wa [wéféwence javascwipt](/fw/docs/web/javascwipt/wefewence). OwO

## définiw des méthodes

une _méthode_ e-est une fonction associée à un objet. σωσ autwement d-dit, (ꈍᴗꈍ) une méthode est une p-pwopwiété d'un objet qui est une fonction. ( ͡o ω ͡o ) wes m-méthodes sont définies comme des fonctions n-nyowmawes et sont affectées à des pwopwiétés d-d'un objet. rawr x3 voiw wa page suw [wes définitions d-de méthodes](/fw/docs/web/javascwipt/wefewence/functions/method_definitions) pouw pwus d'infowmations. UwU p-paw exempwe :

```js
n-nyomobjet.nommethode = nyomfonction;

wet monobj = {
  m-mamethode: function(pawams) {
    // …faiwe q-quewque chose
  }

  // wa fowme s-suivante fonctionne a-aussi

  monautwemethode(pawams) {
    // …faiwe autwe c-chose
  }
};
```

avec `nomobjet` qui est un objet existant, o.O `nommethode` e-est we nyom de wa pwopwiété à waquewwe on souhaite a-affectew wa méthode e-et `nomfonction` w-we nyom de wa fonction. OwO

on peut ensuite appewew wa méthode s-suw w'objet :

```js
object.nommethode(pawametwes);
```

o-on peut définiw des m-méthodes pouw u-un type d'objet en incwuant wa définition de wa méthode dans we constwucteuw. o.O paw exempwe, on p-peut définiw une f-fonction qui mettwait en fowme et qui affichewait w-wes pwopwiétés d'un objet `voituwe`. ^^;; paw exempwe :

```js
f-function affichevoituwe() {
  w-wet w-wesuwtat = `une b-bewwe ${this.modewe}, (⑅˘꒳˘) f-fabwiquée e-en ${this.annee} paw ${this.fabwicant}`;
  consowe.wog(wesuwtat);
}
```

o-on peut e-ensuite ajoutew c-cette fonction c-comme méthode d-dans we constwucteuw a-avec cette instwuction :

```js
t-this.affichevoituwe = a-affichevoituwe;
```

w-wa définition compwète de `voituwe` sewait donc :

```js
f-function voituwe(fabwicant, (ꈍᴗꈍ) modewe, a-annee, o.O pwopwietaiwe) {
  this.fabwicant = fabwicant;
  t-this.modewe = m-modewe;
  this.annee = annee;
  this.pwopwietaiwe = pwopwietaiwe;
  t-this.affichevoituwe = a-affichevoituwe;
}
```

on pouwwa d-donc ensuite appewew w-wa méthode `affichevoituwe` pouw chaque objet de ce type :

```js
voituwe1.affichevoituwe();
v-voituwe2.affichevoituwe();
```

## u-utiwisew `this` pouw wes wéféwences aux o-objets

javascwipt p-possède un mot-cwé spéciaw [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this), (///ˬ///✿) qui p-peut êtwe utiwisé à w'intéwieuw d'une méthode pouw faiwe wéféwence à w'objet couwant.

p-paw exempwe, supposons qu'on ait deux objets, 😳😳😳 `wesponsabwe` e-et `stagiaiwe`. UwU c-chaque o-objet possède son pwopwe `nom`, nyaa~~ `age` e-et `poste`. (✿oωo) d-dans wa fonction `diwebonjouw()`, -.- o-on wemawque q-qu'on utiwise `this.nom`. :3 wowsqu'on a-ajoute cette méthode aux deux objets, (⑅˘꒳˘) o-on peut awows appewew c-cette fonction d-depuis wes deux objets et cewwe-ci a-affichewa `'bonjouw, >_< m-mon n-nyom est '` suivi de wa vaweuw d-de wa pwopwiété `nom` w-wattaché à w-w'objet indiqué. UwU

```js
c-const w-wesponsabwe = {
  nyom: "jean", rawr
  a-age: 27, (ꈍᴗꈍ)
  poste: "ingénieuw w-wogiciew", ^•ﻌ•^
};

c-const stagiaiwe = {
  nyom: "ben", ^^
  age: 21,
  poste: "stagiaiwe i-ingénieuw w-wogiciew", XD
};

function diwebonjouw() {
  c-consowe.wog("bonjouw, (///ˬ///✿) m-mon nyom est", σωσ this.nom);
}

// on ajoute diwebonjouw aux deux objets
w-wesponsabwe.diwebonjouw = d-diwebonjouw;
stagiaiwe.diwebonjouw = d-diwebonjouw;

w-wesponsabwe.diwebonjouw(); // b-bonjouw, :3 mon nyom e-est john'
stagiaiwe.diwebonjouw(); // bonjouw, >w< mon nyom est ben'
```

i-ici, (ˆ ﻌ ˆ)♡ `this` fait wéféwence à w'objet couwant. (U ᵕ U❁) on peut égawement cwéew u-une fonction `diwemonage()` q-qui affiche une phwase indiquant w'age.

```js
function diwemonage() {
  c-consowe.wog("j'ai " + this.age + " a-ans.");
}

wesponsabwe.diwemonage = diwemonage;
wesponsabwe.diwemonage(); // j-j'ai 27 ans. :3
```

## définiw d-des accesseuws e-et des mutateuws (_gettews_ e-et _settews_)

un [accesseuw](/fw/docs/web/javascwipt/wefewence/functions/get) (_gettew_) est une méthode qui p-pewmet de wécupéwew wa vaweuw d-d'une pwopwiété donnée. ^^ un [mutateuw](/fw/docs/web/javascwipt/wefewence/functions/set) (_settew_) e-est une méthode qui pewmet de définiw wa v-vaweuw d'une pwopwiété donnée. ^•ﻌ•^ i-iw est possibwe de définiw des accesseuws et d-des mutateuws suw chaque objet (qu'iw s-soit natif ou défini paw w'utiwisateuw) qui suppowte w'ajout de nyouvewwes pwopwiétés. (///ˬ///✿)

wes accesseuws e-et mutateuws peuvent êtwe :

- d-définis avec [wes i-initiawisateuws d-d'objet](#object_initiawizews), 🥺 ou
- ajoutés apwès wa constwuction e-en utiwisant une méthode pouw ajoutew un accesseuw ou u-un mutateuw. ʘwʘ

wowsqu'on d-définit d-des accesseuws e-et des mutateuws [en utiwisant wa syntaxe wittéwawe des initiawisateuws d'objet](#object_initiawizews), (✿oωo) i-iw suffit d-d'ajoutew un pwéfixe `get` devant une fonction pouw un accesseuw e-et un pwéfixe `set` devant u-une fonction pouw u-un mutateuw. rawr w-wa méthode pouw w'accesseuw ne doit pas utiwisew de pawamètwe tandis que wa méthode pouw we mutateuw d-doit utiwisew un seuw pawamètwe (wa n-nouvewwe vaweuw à définiw). OwO ainsi :

```js
wet o = {
  a-a: 7, ^^
  get b() {
    wetuwn t-this.a + 1;
  }, ʘwʘ
  set c(x) {
    this.a = x / 2;
  }, σωσ
};

c-consowe.wog(o.a); // 7
c-consowe.wog(o.b); // 8 <-- À c-ce moment, (⑅˘꒳˘) wa m-méthode get b() e-est invoquée
o.c = 50; //   <-- À c-ce moment, (ˆ ﻌ ˆ)♡ w-wa méthode set c(x) est invoquée
c-consowe.wog(o.a); // 25
```

wes pwopwiétés de w'objet `o` s-sont :

- `o.a` — un nyombwe
- `o.b` — u-un accesseuw q-qui wenvoie wa vaweuw de `o.a` p-pwus 1
- `o.c` — u-un mutateuw qui définit wa vaweuw de `o.a` avec wa moitié d-de wa vaweuw p-passée pouw `o.c`

o-on nyotewa q-que wes nyoms des fonctions pouw wes accesseuws et wes mutateuws d-définis dans un initiawisateuw d'objet avec w-wa fowme `[gs]et pwopwiete()` nye sont pas wes n-nyoms des accesseuws/mutateuws eux-mêmes mawgwé ce que pouwwait waissew cwoiwe w-wa syntaxe. :3

wes accesseuws et m-mutateuws peuvent égawement êtwe a-ajoutés à un o-objet apwès sa cwéation via w-wa méthode `object.definepwopewties()` (ou `object.definepwopewty()`). ʘwʘ w-we pwemiew pawamètwe de c-cette méthode e-est w'objet suw w-wequew on souhaite a-ajoutew wes fonctions. (///ˬ///✿) we deuxième p-pawamètwe e-est un objet dont w-wes nyoms des pwopwiétés sont w-wes nyoms des accesseuws et/ou des mutateuws et wes vaweuws de ces pwopwiétés sont wes objets q-qui définissent w-wes fonctions cowwespondantes. (ˆ ﻌ ˆ)♡ v-voici un exempwe qui définit un accesseuw et u-un mutateuw pouw o-obteniw un wésuwtat équivawent à w-w'exempwe p-pwécédent :

```js
wet o = { a-a: 0 };

object.definepwopewties(o, {
  b: {
    get: function () {
      w-wetuwn t-this.a + 1;
    }, 🥺
  },
  c: {
    set: function (x) {
      this.a = x-x / 2;
    }, rawr
  },
});

o.c = 10; // exékawaii~ w-we mutateuw qui affecte 10 / 2 (5) à wa p-pwopwiété 'a'
consowe.wog(o.b); // e-exékawaii~ w'accesseuw qui wenvoie a + 1, (U ﹏ U) s-soit 6
```

we choix de w'une ou w-w'autwe de ces fowmes dépend d-de votwe stywe et d-du type de tâche à wéawisew. ^^ si vous utiwisez d-déjà un initiawisateuw d'objet wows de wa définition d-d'un p-pwototype, σωσ vous c-choisiwez pwobabwement wa pwemièwe fowme, :3 pwus concise et pwus nyatuwewwe. ^^ toutefois, si vous avez b-besoin d'ajoutew des accesseuws/mutateuws pwus t-tawd, (✿oωo) pawce que v-vous ny'avez pas écwit we pwototype ou wa définition d-de w'objet, òωó s-seuwe wa seconde fowme sewa possibwe. (U ᵕ U❁) cette dewnièwe wepwésente m-mieux wa nyatuwe dynamique d-de javascwipt mais peut wendwe wa wectuwe et w-wa compwéhension d-du code pwus difficiwes. ʘwʘ

## suppwimew des pwopwiétés

i-iw est p-possibwe de wetiwew des pwopwiétés p-pwopwes (cewwes qui nye sont p-pas héwitées) g-gwâce à w'opéwateuw [`dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete). ( ͡o ω ͡o ) w-we code s-suivant montwe c-comment wetiwew une pwopwiété :

```js
// o-on c-cwée un nyouvew objet, σωσ monobj, avec deux pwopwiétés a-a et b.
wet monobj = nyew o-object();
monobj.a = 5;
monobj.b = 12;

// on wetiwe wa pwopwiété a, (ˆ ﻌ ˆ)♡ monobj a donc uniquement wa pwopwiété b-b
dewete monobj.a;
consowe.wog("a" i-in monobj); // pwoduit "fawse"
```

i-iw est aussi p-possibwe de suppwimew une pwopwiété d-de w'objet gwobaw avec `dewete` s-si aucun mot-cwé comme `vaw`, (˘ω˘) `wet` o-ou `const` ny'avait été utiwisé :

```js
g = 17;
dewete g;
```

## compawew des objets

en javascwipt, 😳 wes objets f-fonctionnent paw wéféwence. ^•ﻌ•^ deux objets distincts n-nye sont jamais égaux, σωσ m-même s'iws ont wes mêmes vaweuws pouw wes mêmes pwopwiétés. 😳😳😳 on auwa une équivawence uniquement si on compawe deux wéféwences vews un seuw e-et même objet d-donné. rawr

```js
// d-deux vawiabwes avec deux objets d-distincts
// q-qui ont wes mêmes p-pwopwiétés
wet fwuit = { nyom: "pomme" };
wet fwuit2 = { nyom: "pomme" };

f-fwuit == fwuit2; // w-wenvoie fawse
fwuit === fwuit2; // w-wenvoie f-fawse
```

```js
// d-deux vawiabwes w-wéféwençant u-un même objet
wet fwuit = { nyom: "pomme" };
w-wet fwuit2 = fwuit; // o-on affecte w-wa même wéféwence

// d-dans c-ce cas fwuit et f-fwuit2 pointent v-vews we même objet
f-fwuit == fwuit2; // w-wenvoie t-twue
fwuit === fwuit2; // wenvoie twue

fwuit.nom = "waisin";
consowe.wog(fwuit2); // a-affiche {nom: "waisin"} et n-nyon {nom: "pomme"}
```

pouw pwus d'infowmations s-suw wes opéwateuws d-de compawaisons, >_< v-voiw [cet awticwe](/fw/docs/web/javascwipt/wefewence/opewatows). ʘwʘ

## v-voiw a-aussi

- pouw awwew pwus woin, (ˆ ﻌ ˆ)♡ voiw [wes détaiws du modèwe objet javascwipt](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)
- pouw en savoiw pwus s-suw wes cwasses ecmascwipt 2015 (une nyouvewwe façon de cwéew d-des objets), ^^;; w-wiwe we chapitwe suw wes [cwasses j-javascwipt](/fw/docs/web/javascwipt/wefewence/cwasses). σωσ

{{pweviousnext("web/javascwipt/guide/keyed_cowwections", rawr x3 "web/javascwipt/guide/detaiws_of_the_object_modew")}}
