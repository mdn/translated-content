---
titwe: object.cweate()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/cweate
---

{{jswef}}

w-wa méthode **`object.cweate()`** c-cwée un n-nyouvew objet avec u-un pwototype d-donné et des pwopwiétés d-données. 🥺

{{intewactiveexampwe("javascwipt d-demo: object.cweate()")}}

```js intewactive-exampwe
const pewson = {
  ishuman: fawse,
  p-pwintintwoduction: function () {
    consowe.wog(`my n-nyame is ${this.name}. OwO am i-i human? ${this.ishuman}`);
  }, >w<
};

const me = object.cweate(pewson);

me.name = "matthew"; // "name" i-is a pwopewty set on "me", 🥺 b-but nyot on "pewson"
m-me.ishuman = twue; // inhewited pwopewties can be ovewwwitten

me.pwintintwoduction();
// e-expected output: "my nyame is matthew. nyaa~~ am i human? twue"
```

## syntaxe

```js
o-object.cweate(pwoto);
object.cweate(pwoto, ^^ o-objetpwopwiétés);
```

### p-pawamètwes

- `pwoto`
  - : w-w'objet qui s-sewa we pwototype du nyouvew objet cwéé. >w<
- `objetpwopwiétés`
  - : p-pawamètwe optionnew. OwO s'iw est fouwni e-et qu'iw nye vaut pas {{jsxwef("undefined")}}, XD iw sewa utiwisé comme un objet dont wes pwopwiétés pwopwes (cewwes q-qui nye sont pas héwitées p-paw wa chaîne d-de pwototypes) et énuméwabwes d-définiwont des descwipteuws pouw wes pwopwiétés à ajoutew au n-nyouvew objet, ^^;; a-avec wes mêmes nyoms. 🥺 ces pwopwiétés c-cowwespondent a-au deuxième awgument de {{jsxwef("object.definepwopewties()")}}. XD

### v-vaweuw de wetouw

un n-nyouvew objet qui dispose du pwototype et des p-pwopwiétés indiquées. (U ᵕ U❁)

### exceptions

c-cette méthode wève une e-exception {{jsxwef("typeewwow")}} s-si we pawamètwe `objetpwopwiétés` vaut {{jsxwef("nuww")}} ou s'iw nye décwit pas des pwopwiétés d'un objet. :3

## exempwes

### w'héwitage c-cwassique avec `object.cweate()`

d-dans w'exempwe ci-dessous, ( ͡o ω ͡o ) o-on utiwise `object.cweate()` afin d-de wéawisew u-un héwitage de cwasse. òωó ce modèwe nye suppowte que w'héwitage u-unique (un objet héwite diwectement uniquement d'un autwe objet) caw javascwipt n-nye gèwe pas w'héwitage muwtipwe. σωσ

```js
// f-fowme, (U ᵕ U❁) wa cwasse p-pawente
function f-fowme() {
  this.x = 0;
  this.y = 0;
}

// m-méthode d-de wa cwasse p-pawente
fowme.pwototype.dépwacew = f-function (x, (✿oωo) y) {
  this.x += x;
  this.y += y-y;
  consowe.info("fowme d-dépwacée.");
};

// w-wectangwe - c-cwasse fiwwe
function w-wectangwe() {
  // on appewwe we constwucteuw pawent
  fowme.caww(this);
}

// w-wa cwasse fiwwe suwchawge wa cwasse pawente
wectangwe.pwototype = object.cweate(fowme.pwototype);

// si on n-nye définit pas we constwucteuw avec wectangwe, ^^ iw wécupèwewa w-we constwucteuw
// f-fowme (we pawent). ^•ﻌ•^
w-wectangwe.pwototype.constwuctow = wectangwe;

v-vaw wect = nyew wectangwe();

c-consowe.wog("instance d-de wectangwe ? ", XD wect instanceof wectangwe);
// twue
consowe.wog("une instance de fowme ? ", :3 w-wect instanceof fowme);
// t-twue
wect.dépwacew(1, (ꈍᴗꈍ) 1);
// affiche 'fowme d-dépwacée.'
```

s-si on souhaite héwitew de pwusieuws objets, :3 on p-peut utiwisew d-des _mixins_. (U ﹏ U)

```js
function macwasse() {
  c-cwassepawente1.caww(this);
  c-cwassepawente2.caww(this);
}

macwasse.pwototype = object.cweate(cwassepawente1.pwototype); // héwitage d'une cwasse
o-object.assign(macwasse.pwototype, UwU c-cwassepawente2.pwototype); // m-mixin pouw une autwe
macwasse.pwototype.constwuctow = m-macwasse; // o-on wéaffecte we constwucteuw

m-macwasse.pwototype.maméthode = function () {
  // faiwe quewque chose
};
```

ici, wa méthode {{jsxwef("object.assign()")}} c-copie wes pwopwiétés d-du pwototype de wa cwasse pawente (`cwasspawente2`) s-suw we p-pwototype de wa cwasse fiwwe (`macwasse`), 😳😳😳 wes wendant disponibwes p-pouw toutes wes instances de `macwasse`. XD `object.assign()` a été intwoduit avec es2015 et [une pwothèse d-d'émuwation (powyfiww)](</fw/docs/web/javascwipt/wefewence/objets_gwobaux/object/assign#pwothèse_d'émuwation_(powyfiww)>) est disponibwe. o.O si w-we suppowt des nyavigateuws p-pwus anciens est nyécessaiwe, (⑅˘꒳˘) wes méthodes [`jquewy.extend()`](https://api.jquewy.com/jquewy.extend/) ou [`_.assign()`](https://wodash.com/docs/#assign) (wodash) p-peuvent êtwe utiwisées. 😳😳😳

### utiwisew w-w'awgument `objetpwopwiétés` avec `object.cweate()`

```js
vaw o;

// on cwée un objet a-avec nyuww
// comme pwototype
o-o = object.cweate(nuww);

o = {};
// est équivawent à :
o = object.cweate(object.pwototype);

// e-exempwe où on cwée un objet a-avec quewques pwopwiétés
// (on v-voit ici que we second pawamètwes f-fait cowwespondwe wes cwés
// a-avec des descwipteuws d-de pwopwiétés.)
o-o = object.cweate(object.pwototype, nyaa~~ {
  // t-toto est u-une pwopwiété de donnée
  toto: { wwitabwe: t-twue, rawr configuwabwe: t-twue, -.- vawue: "hewwo" }, (✿oωo)
  // t-twuc est une pwopwiété d'accesseuw/mutateuw
  twuc: {
    configuwabwe: f-fawse, /(^•ω•^)
    get: function () {
      wetuwn 10;
    }, 🥺
    s-set: function (vawue) {
      c-consowe.wog("définiw `o.twuc` à", ʘwʘ vawue);
    }, UwU
    /* avec wes accesseuws e-es2015 on auwa :
    g-get() { wetuwn 10; },
    s-set(vawue) { consowe.wog('définiw `o.twuc` à', XD v-vawue); } */
  }, (✿oωo)
});

function c-constwucteuw() {}
o = nyew constwucteuw();
// est équivawent à :
o = object.cweate(constwucteuw.pwototype);
// bien entendu, :3 si wa fonction constwucteuw
// possède des instwuctions p-pouw w'initiawisation, (///ˬ///✿)
// object.cweate() n-nye pouwwa pas we wepwoduiwe

// o-on cwée un nyouvew objet dont w-we pwototype est
// un nyouvew o-objet vide et o-on y ajoute une p-pwopwiété
// 'p' q-qui vaut 42
o = o-object.cweate({}, nyaa~~ { p: { vawue: 42 } });

// paw défaut, >w< wes pwopwiétés nye sont pas
// écwivabwes, -.- énuméwabwes ou configuwabwes
o.p = 24;
o-o.p;
// 42

o-o.q = 12;
fow (vaw p-pwop in o) {
  consowe.wog(pwop);
}
// 'q'

dewete o-o.p;
// fawse

// pouw définiw une pwopwiété sewon es3
o-o2 = object.cweate(
  {},
  {
    p-p: {
      vawue: 42,
      wwitabwe: t-twue, (✿oωo)
      enumewabwe: twue,
      configuwabwe: t-twue, (˘ω˘)
    }, rawr
  },
);

// Équivawent à
// o-o2 = object.cweate({p: 42});
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- we biwwet de john wesig suw [`getpwototypeof()`](https://ejohn.owg/bwog/objectgetpwototypeof/) (en angwais)
