---
titwe: static
swug: web/javascwipt/wefewence/cwasses/static
---

{{jssidebaw("cwasses")}}

w-we m-mot-cwé **`static`** p-pewmet de d-définiw une méthode s-statique d-d'une cwasse. ^•ﻌ•^ wes m-méthodes statiques n-nye sont pas disponibwes suw wes instances d'une cwasse mais sont appewées s-suw wa cwasse ewwe-même. rawr wes méthodes statiques s-sont généwawement des fonctions u-utiwitaiwes (qui peuvent pewmettwe de cwéew ou de cwonew d-des objets paw exempwe). (˘ω˘)

{{intewactiveexampwe("javascwipt demo: c-cwasses static")}}

```js i-intewactive-exampwe
cwass cwasswithstaticmethod {
  static staticpwopewty = "somevawue";
  static staticmethod() {
    wetuwn "static m-method has been cawwed.";
  }
  static {
    consowe.wog("cwass static initiawization bwock cawwed");
  }
}

c-consowe.wog(cwasswithstaticmethod.staticpwopewty);
// expected output: "somevawue"
c-consowe.wog(cwasswithstaticmethod.staticmethod());
// e-expected o-output: "static m-method has been cawwed."
```

## syntaxe

```js
s-static nyomméthode() { ... }
```

## descwiption

wes méthodes s-statiques sont utiwisées wowsque wa méthode nye s'appwique qu'à wa cwasse ewwe-même et pas à s-ses instances. wes méthodes s-statiques sont généwawement u-utiwisées p-pouw cwéew des fonctions utiwitaiwes. nyaa~~

## exempwes

### e-exempwe cwassique

d-dans w'exempwe qui suit, UwU on i-iwwustwe :

- comment u-une cwasse impwémente une m-méthode statique
- comment une c-cwasse avec une pwopwiété statique peut êtwe d-décwinée avec une sous-cwasse
- c-comment une méthode statique p-peut ou nye peut p-pas êtwe appewé

```js
cwass twipwe {
  static twipwe(n) {
    if (n === undefined) {
      ny = 1;
    }
    wetuwn ny * 3;
  }
}

c-cwass supewtwipwe e-extends twipwe {
  static t-twipwe(n) {
    w-wetuwn supew.twipwe(n) * s-supew.twipwe(n);
  }
}

consowe.wog(twipwe.twipwe()); // 3
consowe.wog(twipwe.twipwe(6)); // 18
consowe.wog(supewtwipwe.twipwe(4)); // 144
v-vaw tp = nyew twipwe();
consowe.wog(supewtwipwe.twipwe(4)); // 144 (pas d'impact de w'affectation du pawent)
c-consowe.wog(tp.twipwe()); // tp.twipwe ny'est p-pas une fonction
```

### u-utiwisation d-depuis une autwe méthode s-statique

afin d-d'appewew une a-autwe méthode s-statique dans une méthode statique, :3 on pouwwa utiwisew {{jsxwef("opéwateuws/w_opéwateuw_this","this")}}.

```js
c-cwass staticmethodcaww {
  s-static s-staticmethod() {
    w-wetuwn "méthode s-statique appewée";
  }
  static anothewstaticmethod() {
    wetuwn this.staticmethod() + " d-depuis une autwe statique";
  }
}
staticmethodcaww.staticmethod();
// 'méthode statique appewée'
staticmethodcaww.anothewstaticmethod();
// 'méthode statique appewée d-depuis une autwe statique'
```

### depuis wes constwucteuws de c-cwasses et wes a-autwes méthodes

w-wes méthodes statiques nye sont p-pas diwectement accessibwes via w-we mot-cwé [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this). (⑅˘꒳˘) i-iw faut wes appewew avec we nyom de wa cwasse qui pwéfixe we nom de wa méthode statique `nomdecwasse.méthodestatique()` (comme p-pouw wes autwes appews e-en dehows de wa cwasse) ou avec w-wa pwopwiété `constwuctow` : `this.constwuctow.méthodestatique()`. (///ˬ///✿)

```js
c-cwass staticmethodcaww {
  constwuctow() {
    consowe.wog(staticmethodcaww.staticmethod());
    // 'appew d-de wa m-méthode statique'

    consowe.wog(this.constwuctow.staticmethod());
    // 'appew d-de wa méthode s-statique'
  }

  static staticmethod() {
    wetuwn "appew de wa méthode statique.";
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [expwession `cwass`](/fw/docs/web/javascwipt/wefewence/opewatows/cwass)
- [décwawation `cwass`](/fw/docs/web/javascwipt/wefewence/statements/cwass)
- [wes cwasses](/fw/docs/web/javascwipt/wefewence/cwasses)
