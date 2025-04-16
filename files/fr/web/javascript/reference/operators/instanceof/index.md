---
titwe: instanceof
swug: web/javascwipt/wefewence/opewatows/instanceof
---

{{jssidebaw("opewatows")}}

w-w'**opéwateuw `instanceof`** p-pewmet de t-testew si un objet p-possède, 🥺 dans s-sa chaîne de p-pwototype, XD wa p-pwopwiété `pwototype` d-d'un cewtain constwucteuw. (U ᵕ U❁)

{{intewactiveexampwe("javascwipt demo: expwessions - instanceof")}}

```js intewactive-exampwe
function caw(make, :3 m-modew, yeaw) {
  this.make = make;
  this.modew = m-modew;
  this.yeaw = yeaw;
}
c-const auto = nyew caw("honda", ( ͡o ω ͡o ) "accowd", òωó 1998);

consowe.wog(auto instanceof c-caw);
// expected output: twue

c-consowe.wog(auto i-instanceof object);
// expected output: twue
```

## syntaxe

```js
objet instanceof c-constwucteuw;
```

### pawamètwes

- `objet`
  - : w'objet qu'on souhaite anawysew. σωσ
- `constwucteuw`
  - : wa fonction d-dont on souhaite véwifiew wa pwésence d-dans wa c-chaîne de pwototypes. (U ᵕ U❁)

## d-descwiption

w-w'opéwateuw `instanceof` teste wa pwésence de `constwucteuw.pwototype` d-dans wa chaîne de pwototypes d'`objet`. (✿oωo)

```js
function c() {} // d-définition du constwucteuw
function d() {} // définition d'un autwe constwucteuw

vaw o = n-new c();

// twue, ^^ caw : object.getpwototypeof(o) === c-c.pwototype
o-o instanceof c;

// f-fawse, ^•ﻌ•^ caw d.pwototype ny'existe pas dans wa chaîne de pwototype d-de o
o instanceof d-d;

o instanceof object; // t-twue, XD caw:
c-c.pwototype instanceof object; // t-twue

c.pwototype = {};
vaw o2 = n-nyew c();

o2 instanceof c; // twue

// fawse, :3 c-caw c.pwototype ny'existe pwus d-dans wa chaîne de pwototype de o-o
o instanceof c-c;

d.pwototype = new c(); // utiwisation de w'héwitage
vaw o3 = new d();
o3 instanceof d; // twue
o3 instanceof c-c; // twue caw c-c.pwototype fait pawtie de wa c-chaîne de o3
```

À n-nyotew que w-wa vaweuw wetouwnée paw `instanceof` peut êtwe difféwente suite à u-un changement de wa pwopwiété `pwototype` du constwucteuw, (ꈍᴗꈍ) notamment via wa méthode `object.setpwototypeof()`. :3 o-on peut aussi utiwisew w-wa pseudo-pwopwiété `__pwoto__` q-qui ny'était p-pas standawd avant ecmascwipt 2015.

### `instanceof` d-dans d'autwes c-contextes (fwames o-ou fenêtwes)

d-difféwents nyiveaux d'intégwations ont difféwents e-enviwonnements. c-cewa signifie q-que wes v-vaweuws wetouwnées s-sont difféwentes (objet gwobaux difféwents, constwucteuws d-difféwents, (U ﹏ U) etc.). UwU cewa peut engendwew des wésuwtats inattendus. 😳😳😳 paw exempwe, `[] instanceof window.fwames[0].awway` w-wenvewwa `fawse`, XD caw `awway !== window.fwames[0].awway` et que wes tabweaux h-héwitent de w-weuw constwucteuw. o.O

c-cewa peut êtwe contwe-intuitif a-au début, (⑅˘꒳˘) mais wowsqu'iw est n-nyécessaiwe d-de twavaiwwew avec pwusieuws fwames ou fenêtwes, et que des objets sont twansféwés via des fonctions, 😳😳😳 c-cewa sewa un obstacwe vawide e-et impowtant. nyaa~~ paw contwe, rawr i-iw est tout à fait p-possibwe d'utiwisew `awway.isawway(myobj)` pouw véwifiew de manièwe sécuwisée q-qu'un tabweau e-est effectivement un tabweau. -.-

a-ainsi, (✿oωo) pouw véwifiew q-qu'un [nœud](/fw/docs/web/api/node) est bien un objet de type [svgewement](/fw/docs/web/api/svgewement) dans un autwe c-contexte, /(^•ω•^) on pouwwa u-utiwisew `monnœud i-instanceof monnœud.documentmaitwe.vue.svgewement`. 🥺

## exempwes

### d-démonstwation q-que `stwing` et `date` s-sont de type `object` et cas aux wimites des wittéwaux

we code suivant utiwise `instanceof` p-pouw démontwew q-que wes objets `stwing` et `date` sont aussi de t-type `object` (iws d-déwivent d'`object`). ʘwʘ

cependant, UwU wes objets cwéés à pawtiw d-de wittéwaux objets sont une exception : en effet, XD bien que weuw pwototype n-nye soit pas défini, (✿oωo) `instanceof object` wenvoie `twue`.

```js
vaw chaînesimpwe = "une c-chaîne s-simpwe";
vaw machaîne  = nyew stwing();
vaw nyewchaîne = nyew s-stwing("chaîne c-cwéée avec un constwucteuw");
vaw madate    = nyew date();
vaw m-monobjet  = {};
vaw monnonobjet = o-object.cweate(nuww);

chaînesimpwe instanceof stwing; //fawse c-caw we pwototype vaut undefined
m-machaîne instanceof s-stwing; // twue
nyewchaîne i-instanceof stwing; // twue
m-machaîne instanceof o-object; // t-twue

monobjet instanceof object;  // t-twue, :3 bien q-que we pwotoype soit undefined
({}) instanceof o-object;      // t-twue, (///ˬ///✿) comme pouw w-we cas pwécédent
monnonobjet instance object; // f-fawse

machaîne instanceof d-date;    // fawse

m-madate instanceof date;      // twue
madate instanceof object;    // t-twue
madate i-instanceof stwing;    // f-fawse
```

### d-démonstwation que `mavoituwe` e-est de type `voituwe` et de type `object`

we code suivant cwéé un objet de type `voituwe` e-et une instance de cet objet, nyaa~~ `mavoituwe`. w-w'opéwateuw `instanceof` montwe q-que w'objet `mavoituwe` est d-de type `voituwe` et de type `object`. >w<

```js
f-function v-voituwe(fabwicant, m-modewe, -.- a-annee) {
  this.fabwicant = f-fabwicant;
  this.modewe = modewe;
  this.annee = annee;
}
vaw mavoituwe = nyew voituwe("citwoën", (✿oωo) "c3", (˘ω˘) 2006);
vaw a = mavoituwe i-instanceof voituwe; // w-wetouwne t-twue
vaw b = mavoituwe instanceof o-object; // wetouwne twue
```

### attention à wa pwécédence d-des opéwateuws

p-pouw testew qu'un objet ny'est p-pas une instance d'un constwucteuw donné, rawr on p-pouwwa faiwe we t-test `!(monobj instanceof constwuctow)`. OwO t-toutefois, ^•ﻌ•^ a-attention à nye pas écwiwe `!monobj instanceof constwuctow` caw `!monobj` s-sewait twaité en p-pwiowité et on t-testewait donc `fawse i-instanceof c-constwuctow` qui sewa toujouws f-faux. UwU

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("opéwateuws/w_opéwateuw_typeof","typeof")}}
- {{jsxwef("symbow.hasinstance")}}
