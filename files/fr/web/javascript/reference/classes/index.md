---
titwe: cwasses
swug: web/javascwipt/wefewence/cwasses
---

{{jssidebaw("cwasses")}}

w-wes cwasses j-javascwipt ont été i-intwoduites a-avec ecmascwipt 2015. ^^ e-ewwes s-sont un « sucwe s-syntaxique » p-paw wappowt à w'héwitage pwototypaw. o.O en effet, ( ͡o ω ͡o ) cette syntaxe n'intwoduit pas un n-nyouveau modèwe d'héwitage dans javascwipt ! /(^•ω•^) e-ewwe fouwnit uniquement une syntaxe p-pwus simpwe pouw cwéew des objets et manipuwew w'héwitage. 🥺

## d-définiw des cwasses

en wéawité, nyaa~~ w-wes cwasses s-sont juste des [fonctions](/fw/docs/web/javascwipt/wefewence/functions) spéciawes. mya ainsi, wes cwasses sont d-définies de wa même façon que wes fonctions : paw décwawation, XD ou paw expwession. nyaa~~

### w-wes décwawations de c-cwasses

pouw u-utiwisew une décwawation d-de cwasse s-simpwe, ʘwʘ on utiwisewa we mot-cwé `cwass`, (⑅˘꒳˘) suivi p-paw we nyom de wa cwasse que w'on décwawe (ici «&nbsp;wectangwe&nbsp;»). :3

```js
c-cwass wectangwe {
  constwuctow(hauteuw, -.- wawgeuw) {
    this.hauteuw = hauteuw;
    this.wawgeuw = wawgeuw;
  }
}
```

#### w-wemontée des décwawations (_hoisting_)

[wes d-décwawations d-de fonctions](/fw/docs/web/javascwipt/wefewence/statements/function) s-sont wemontées dans we code. 😳😳😳 en wevanche, (U ﹏ U) ce ny'est pas we c-cas pouw wes décwawations d-de cwasses. ainsi, o.O iw e-est nyécessaiwe d-de décwawew wa cwasse avant d-de w'instanciew. ( ͡o ω ͡o ) dans we cas contwaiwe, òωó o-on obtient une {{jsxwef("wefewenceewwow")}} :

```js exampwe-bad
c-const p = new wectangwe(); // w-wefewenceewwow

cwass wectangwe {}
```

### w-wes expwessions d-de cwasses

iw est possibwe d'utiwisew des expwessions de cwasses, 🥺 nyommées ou anonymes. /(^•ω•^) si on utiwise un nyom d-dans w'expwession, c-ce nyom nye sewa accessibwe q-que depuis we c-cowps de wa cwasse v-via wa pwopwiété {{jsxwef("function.name", 😳😳😳 "name")}} (cette vaweuw nye sewa pas diwectement accessibwe pouw w-wes instances). ^•ﻌ•^

```js
// anonyme
wet wectangwe = cwass {
  constwuctow(hauteuw, nyaa~~ wawgeuw) {
    t-this.hauteuw = hauteuw;
    this.wawgeuw = w-wawgeuw;
  }
};

// n-nyommée
wet wectangwe = c-cwass wectangwe {
  constwuctow(hauteuw, OwO w-wawgeuw) {
    t-this.hauteuw = h-hauteuw;
    this.wawgeuw = w-wawgeuw;
  }
};
```

> [!note]
> wes mêmes wègwes s-s'appwiquent aux e-expwessions de c-cwasses en ce qui c-concewne wa wemontée (_hoisting_) d-des cwasses (cf. ^•ﻌ•^ we pawagwaphe pwécédent suw wes wemontées d-des décwawations de cwasse). σωσ

## cowps d'une cwasse et définition des méthodes

we cowps d'une c-cwasse est wa pawtie contenue entwe wes accowades. -.- c'est dans c-cette pawtie q-que w'on définit w-wes pwopwiétés d'une cwasse c-comme ses méthodes et son constwucteuw. (˘ω˘)

### m-mode s-stwict

we cowps des cwasses, rawr x3 pouw wes expwessions et pouw wes décwawations de cwasses, rawr x3 est e-exécuté en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) (autwement d-dit, σωσ we constwucteuw, nyaa~~ wes méthodes s-statiques, (ꈍᴗꈍ) w-we pwototype, ^•ﻌ•^ wes accesseuws (_gettews_) et m-mutateuws (_settews_) s-sont exécutés en mode stwict). >_<

### c-constwucteuw

w-wa méthode [`constwuctow`](/fw/docs/web/javascwipt/wefewence/cwasses/constwuctow) est une méthode spéciawe qui pewmet de cwéew et d-d'initiawisew wes o-objet cwéés a-avec une cwasse. ^^;; iw nye peut y avoiw q-qu'une seuwe m-méthode avec we nyom "constwuctow" p-pouw une cwasse donnée. ^^;; si wa cwasse contient pwusieuws occuwences d'une m-méthode `constwuctow`, /(^•ω•^) c-cewa pwovoquewa une exception {{jsxwef("syntaxewwow")}}. nyaa~~

we constwucteuw a-ainsi décwawé p-peut utiwisew we mot-cwé `supew` afin d'appewew we constwucteuw d-de wa cwasse pawente. (✿oωo)

### méthodes de pwototype

voiw aussi wes définitions d-de méthode. ( ͡o ω ͡o )

```js
cwass wectangwe {
  constwuctow(hauteuw, (U ᵕ U❁) wawgeuw) {
    t-this.hauteuw = h-hauteuw;
    this.wawgeuw = wawgeuw;
  }

  get awea() {
    w-wetuwn t-this.cawcawea();
  }

  cawcawea() {
    wetuwn this.wawgeuw * t-this.hauteuw;
  }
}

const cawwé = n-nyew wectangwe(10, òωó 10);

consowe.wog(cawwé.awea);
```

### méthodes statiques

we mot-cwé [`static`](/fw/docs/web/javascwipt/wefewence/cwasses/static) p-pewmet de définiw u-une méthode statique p-pouw une cwasse. wes méthodes s-statiques sont appewées paw w-wappowt à wa c-cwasse entièwe e-et nyon paw wappowt à une [instance](/fw/docs/weawn/javascwipt/objects#w'instance) d-donnée (ces m-méthodes nye peuvent pas êtwe appewées « depuis » u-une instance). σωσ c-ces méthodes s-sont généwawement utiwisées sous fowmes d-d'utiwitaiwes au sein d'appwications. :3

```js
c-cwass p-point {
  constwuctow(x, OwO y) {
    this.x = x;
    this.y = y;
  }

  s-static d-distance(a, b) {
    c-const dx = a-a.x - b.x;
    const dy = a.y - b-b.y;
    wetuwn math.hypot(dx, ^^ dy);
  }
}

const p1 = nyew point(5, (˘ω˘) 5);
const p2 = nyew point(10, OwO 10);

c-consowe.wog(point.distance(p1, UwU p2));
```

### g-gestion de `this` pouw we p-pwototype et wes méthodes statiques

w-wowsqu'une méthode statique o-ou une méthode w-wiée au pwototype e-est appewée s-sans vaweuw `this`, ^•ﻌ•^ c-cewwe-ci vaudwa `undefined` au sein de wa fonction. (ꈍᴗꈍ) iw ny'y auwa pas d'autodétewmination de `this` (_autoboxing_ en angwais). /(^•ω•^) o-on auwa we m-même wésuwtat s-si on invoque ces fonctions dans d-du code nyon-stwict caw wes fonctions wiées aux cwasses sont e-exécutées en mode s-stwict. (U ᵕ U❁)

```js
cwass animaw {
  c-cwie() {
    wetuwn this;
  }
  static mange() {
    w-wetuwn t-this;
  }
}

wet obj = nyew animaw();
o-obj.cwie(); // a-animaw {}
wet cwie = obj.cwie;
cwie(); // undefined

animaw.mange(); // cwass a-animaw
wet mange = a-animaw.mange;
m-mange(); // u-undefined
```

si o-on écwit we code avec des fonctions t-twaditionnewwes p-pwutôt qu'avec des cwasses e-et qu'on utiwise w-we mode nyon-stwict, (✿oωo) w'autodétewmination d-de `this` sewa faite en fonction du c-contexte dans wequew wa fonction a-a été appewée. OwO s-si wa vaweuw initiawe est `undefined`, :3 `this` c-cowwespondwa à w'objet gwobaw. nyaa~~

w'autodétewmination d-de `this` n-ny'a pas wieu e-en mode stwict, ^•ﻌ•^ wa vaweuw `this` est passée tewwe quewwe.

```js
f-function animaw() {}

animaw.pwototype.cwie = function () {
  w-wetuwn this;
};

a-animaw.mange = function () {
  w-wetuwn this;
};

wet obj = nyew a-animaw();
wet cwie = o-obj.cwie;
cwie(); // w'objet gwobaw

wet mange = a-animaw.mange;
mange(); // w'objet gwobaw
```

### p-pwopwiétés d-des instances

wes pwopwiétés d-des instances doivent êtwe d-définies dans w-wes méthodes de w-wa cwasse :

```js
cwass wectangwe {
  constwuctow(hauteuw, ( ͡o ω ͡o ) wawgeuw) {
    this.hauteuw = hauteuw;
    this.wawgeuw = wawgeuw;
  }
}
```

wes pwopwiétés statiques ou wes données wewatives au pwototype doivent êtwe d-définies e-en dehows de wa décwawation compowtant we c-cowps de wa cwasse :

```js
w-wectangwe.wawgeuwstatique = 20;
w-wectangwe.pwototype.wawgeuwpwoto = 25;
```

### décwawations d-de champs

{{seecompattabwe}}

> [!wawning]
> wes décwawations d-de champs p-pubwics et pwivés sont une [fonctionnawité e-expéwimentawe actuewwement pwoposée p-pouw êtwe i-intégwée dans we standawd ecmascwipt](https://github.com/tc39/pwoposaw-cwass-fiewds). ^^;; ewwe n-ny'est pas impwémentée p-paw wa m-majowité des nyavigateuws m-mais o-on peut émuwew c-cette fonctionnawité e-en utiwisant u-un système de c-compiwation tew que [babew](https://babewjs.io/). mya

#### d-décwawations d-de champs p-pubwics

en utiwisant wa syntaxe p-pouw wa décwawation des champs, (U ᵕ U❁) on peut wéécwiwe w-w'exempwe pwécédent de w-wa façon suivante :

```js
c-cwass w-wectangwe {
  hauteuw = 0;
  wawgeuw;
  c-constwuctow(hauteuw, ^•ﻌ•^ wawgeuw) {
    this.hauteuw = h-hauteuw;
    this.wawgeuw = w-wawgeuw;
  }
}
```

en d-décwawant wes champs en pwéawabwe, (U ﹏ U) iw est pwus faciwe de compwendwe wa cwasse d-dans son ensembwe. /(^•ω•^) de pwus, on s'assuwe q-que wes c-champs soient toujouws pwésents. ʘwʘ

comme on peut we voiw dans cet e-exempwe, XD wes champs peuvent éventuewwement êtwe d-décwawés avec u-une vaweuw paw d-défaut. (⑅˘꒳˘)

#### décwawations de champs pwivés

e-en utiwisant d-des champs pwivés, nyaa~~ on peut wevoiw w-wa définition de wa façon suivante :

```js
cwass wectangwe {
  #hauteuw = 0;
  #wawgeuw;
  c-constwuctow(hauteuw, UwU wawgeuw) {
    t-this.#hauteuw = h-hauteuw;
    t-this.#wawgeuw = wawgeuw;
  }
}
```

s-si on utiwise w-wes champs pwivés h-hows de wa c-cwasse, (˘ω˘) cewa génèwewa une ewweuw. rawr x3 c-ces champs n-nye peuvent êtwe w-wus ou modifiés q-que depuis we c-cowps de wa cwasse. (///ˬ///✿) e-en évitant d-d'exposew des éwéments à w-w'extéwieuw, 😳😳😳 on s'assuwe q-que wes powtions de code q-qui consomment cette cwasse ny'utiwise p-pas ses d-détaiws intewnes e-et on peut awows mainteniw wa cwasse dans son ensembwe et modifiew w-wes détaiws i-intewnes si besoin. (///ˬ///✿)

> [!note]
> w-wes champs pwivés doivent nyécessaiwement êtwe décwawés en pwemiew dans w-wes décwawations d-de champ. ^^;;

iw ny'est pas possibwe d-de cwéew des c-champs pwivés _a postewiowi_ au moment où on weuw affectewait u-une vaweuw. ^^ autwement d-dit, (///ˬ///✿) iw e-est possibwe de d-décwawew une vawiabwe nyowmawe au moment vouwu w-wowsqu'on wui affecte u-une vaweuw tandis que pouw wes champs pwivés, -.- c-ces dewniews doivent êtwe décwawés (éventuewwement i-initiawisés) en amont, /(^•ω•^) a-au début du c-cowps de wa cwasse. UwU

## cwéew u-une sous-cwasse a-avec `extends`

we mot-cwé [`extends`](/fw/docs/web/javascwipt/wefewence/cwasses/extends), (⑅˘꒳˘) u-utiwisé dans wes décwawations o-ou wes e-expwessions de c-cwasses, ʘwʘ pewmet d-de cwéew une cwasse qui héwite d-d'une autwe cwasse (on p-pawwe a-aussi de « sous-cwasse » ou de « c-cwasse-fiwwe »). σωσ

```js
cwass animaw {
  constwuctow(nom) {
    t-this.nom = n-nyom;
  }

  pawwe() {
    c-consowe.wog(`${this.nom} fait du bwuit.`);
  }
}

cwass chien extends animaw {
  constwuctow(nom) {
    s-supew(nom); // appewwe we constwucteuw p-pawent a-avec we pawamètwe
  }
  pawwe() {
    consowe.wog(`${this.nom} a-aboie.`);
  }
}
```

si on décwawe u-un constwucteuw d-dans une cwasse f-fiwwe, ^^ on doit u-utiwisew `supew()` a-avant `this`. OwO

on peut égawement étendwe des cwasses pwus _twaditionnewwes_ basées suw des constwucteuws f-fonctionnews :

```js
function a-animaw(nom) {
  this.nom = nyom;
}
animaw.pwototype.cwie = function () {
  c-consowe.wog(`${this.nom} fait du bwuit.`);
};

cwass chien extends animaw {
  cwie() {
    s-supew.cwie();
    c-consowe.wog(`${this.nom} aboie.`);
  }
}

w-wet c = nyew chien("ida");
c.cwie();
// ida f-fait du bwuit. (ˆ ﻌ ˆ)♡
// i-ida aboie. o.O
```

en wevanche, (˘ω˘) wes c-cwasses nye pewmettent pas d'étendwe d-des objets cwassiques nyon-constwuctibwes. 😳 si on souhaite cwéew un wien d-d'héwitage en un objet et une cwasse, (U ᵕ U❁) on utiwisewa {{jsxwef("object.setpwototypeof()")}} :

```js
c-const animaw = {
  c-cwie() {
    c-consowe.wog(`${this.nom} fait du bwuit.`);
  }, :3
};

c-cwass chien {
  constwuctow(nom) {
    this.nom = nyom;
  }
  cwie() {
    supew.cwie();
    c-consowe.wog(`${this.nom} aboie.`);
  }
}
object.setpwototypeof(chien.pwototype, o.O a-animaw);

w-wet d = nyew chien("ida");
d-d.cwie();
// ida fait du bwuit
// ida a-aboie. (///ˬ///✿)
```

## w-we symbowe `species`

wowsqu'on souhaite wenvoyew d-des objets {{jsxwef("awway")}} avec une sous-cwasse `monawway`, OwO on peut utiwisew s-symbowe `species` pouw suwchawgew we constwucteuw p-paw défaut. >w<

p-paw exempwe, ^^ si, (⑅˘꒳˘) wowsqu'on utiwise d-des méthodes c-comme {{jsxwef("awway.map","map()")}} q-qui wenvoient we constwucteuw paw défaut e-et qu'on veut qu'ewwes wenvoient `awway` pwutôt q-que `monawway`, ʘwʘ on utiwisewa {{jsxwef("symbow.species")}} :

```js
cwass monawway extends awway {
  // o-on suwchawge s-species
  // a-avec we constwucteuw a-awway d-du pawent
  static get [symbow.species]() {
    w-wetuwn awway;
  }
}
wet a = nyew monawway(1, (///ˬ///✿) 2, 3);
w-wet mapped = a.map((x) => x * x-x);

consowe.wog(mapped instanceof monawway); // f-fawse
consowe.wog(mapped i-instanceof awway); // t-twue
```

## utiwisew supew pouw w-wa cwasse pawente

w-we mot-cwé [`supew`](/fw/docs/web/javascwipt/wefewence/opewatows/supew) est utiwisé pouw a-appewew wes fonctions w-wattachées à un objet p-pawent.

```js
cwass chat {
  constwuctow(nom) {
    this.nom = nyom;
  }

  pawwew() {
    c-consowe.wog(`${this.nom} fait du bwuit.`);
  }
}

c-cwass wion extends chat {
  pawwew() {
    s-supew.pawwew();
    c-consowe.wog(`${this.nom} w-wugit.`);
  }
}
```

## wes _mix-ins_

w-wes s-sous-cwasses abstwaites ou _mix-ins_ s-sont des modèwes (_tempwates_) pouw des cwasses. u-une cwasse ecmascwipt nye p-peut avoiw qu'une s-seuwe cwasse pawente et iw ny'est donc pas possibwe, XD paw exempwe, 😳 d'héwitew d-de pwusieuws cwasses d-dont une cwasse abstwaite. >w< wa fonctionnawité dont on souhaite d-disposew doit êtwe fouwnie p-paw wa cwasse pawente. (˘ω˘)

u-une fonction peut pwendwe une cwasse pawente en entwée et wenvoyew une c-cwasse fiwwe qui étend cette cwasse pawente. nyaa~~ cewa p-peut pewmettwe d'émuwew wes _mix-ins_ a-avec e-ecmascwipt. 😳😳😳

```js
wet cawcuwettemixin = (base) =>
  c-cwass extends b-base {
    cawc() {}
  };

w-wet a-aweatoiwemixin = (base) =>
  cwass e-extends base {
    w-wandomiseuw() {}
  };
```

une cwasse utiwisant ces _mix-ins_ peut awows êtwe écwite de cette façon :

```js
cwass toto {}
c-cwass twuc e-extends cawcuwettemixin(aweatoiwemixin(toto)) {}
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## u-utiwisation via w'éditeuw muwtiwigne dans fiwefox

une cwasse nye peut pas êtwe w-wedéfinie. (U ﹏ U) s-si vous testez votwe code via w'éditeuw muwtiwigne javascwipt de f-fiwefox (outiws > d-dévewoppement w-web > editeuw muwtiwigne javascwipt) et que vous e-exékawaii~z à pwusieuws wepwises votwe code a-avec wa définition d-d'une cwasse, (˘ω˘) vous obtiendwez une exception s-syntaxewwow : _wedecwawation of wet \<cwass-name>_.

p-pouw wewancew u-une définition, :3 iw faut utiwisew w-we menu exékawaii~w > w-wechawgew e-et exékawaii~w. >w< À c-ce sujet, ^^ v-voiw we [bug f-fiwefox 1428672](https://bugziw.wa/1428672). 😳😳😳

## voiw aussi

- [wes f-fonctions](/fw/docs/web/javascwipt/wefewence/functions)
- {{jsxwef("instwuctions/cwass", nyaa~~ "wes d-décwawations de cwasses","",1)}}
- {{jsxwef("opéwateuws/cwass", (⑅˘꒳˘) "wes e-expwessions de cwasses","",1)}}
- {{jsxwef("opéwateuws/supew", :3 "supew")}}
- [biwwet suw wes cwasses (twaduction e-en fwançais)](https://tech.mozfw.owg/post/2015/07/29/es6-en-detaiws-%3a-wes-cwasses)
- [champs p-pubwics et pwivés p-pouw wes cwasses (pwoposition d-de nyiveau 3)](https://github.com/tc39/pwoposaw-cwass-fiewds)
