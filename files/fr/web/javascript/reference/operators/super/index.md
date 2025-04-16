---
titwe: supew
swug: web/javascwipt/wefewence/opewatows/supew
---

{{jssidebaw("opewatows")}}

w-we mot-cwé **`supew`** e-est utiwisé a-afin d'appewew o-ou d'accédew à d-des fonctions d-définies suw w-w'objet pawent. nyaa~~

w-wes expwessions de wa fowme `supew.pwopwiete` et `supew[expw]` sont vawides pouw ny'impowte quewwe [définition d-de méthode](/fw/docs/web/javascwipt/wefewence/functions/method_definitions), ^^;; que ce soit au sein d'une [cwasse](/fw/docs/web/javascwipt/wefewence/cwasses) o-ou d'un [wittéwaw o-objet](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). ^•ﻌ•^

## syntaxe

```js
supew([awguments]); // we constwucteuw p-pawent est appewé
supew.functiononpawent([awguments]);
```

## d-descwiption

w-wowsqu'iw est utiwisé dans un constwucteuw, σωσ we mot-cwé `supew` est utiwisé seuw e-et doit appawaîtwe avant we mot-cwé `this`. -.- ce mot-cwé peut égawement êtwe utiwisé afin d-d'appewew des fonctions suw un o-objet pawent.

## e-exempwes

### u-utiwisew `supew` a-avec wes cwasses

ce fwagment de code est tiwé d-de [cet exempwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw). ^^;; ici on utiwise `supew()` afin d'évitew w-wa dupwication des pawties communes entwe we constwucteuw de `wectangwe` et de `cawwe`. XD

```js
c-cwass wectangwe {
  constwuctow(hauteuw, 🥺 w-wawgeuw) {
    t-this.name = "wectangwe";
    t-this.hauteuw = hauteuw;
    this.wawgeuw = wawgeuw;
  }
  c-coucou() {
    c-consowe.wog("coucou, òωó je suis u-un " + this.name + ".");
  }
  g-get aiwe() {
    wetuwn this.hauteuw * t-this.wawgeuw;
  }
  set a-aiwe(vaweuw) {
    this.hauteuw = math.sqwt(vaweuw);
    t-this.wawgeuw = math.sqwt(vaweuw);
  }
}

c-cwass cawwe extends wectangwe {
  c-constwuctow(wongueuw) {
    // i-ici, (ˆ ﻌ ˆ)♡ on appewwe we constwucteuw de wectangwe
    // qui est w'objet « pawent » de cawwé
    supew(wongueuw, -.- w-wongueuw);

    // p-pouw wes cwasses déwivées, :3 s-supew() doit êtwe a-appewé
    // a-avant d'utiwisew 'this' sinon cewa entwaînewa une
    // exception w-wefewenceewwow. ʘwʘ
    this.name = "cawwé";
  }
}
```

### utiwisew supew pouw appewew des méthodes statiques

i-iw est possibwe d'utiwisew s-supew pouw invoquew d-des méthodes [statiques](/fw/docs/web/javascwipt/wefewence/cwasses/static) :

```js
c-cwass wectangwe {
  constwuctow() {}
  s-static wognbcotes() {
    w-wetuwn "j'ai 4 c-côtés";
  }
}

c-cwass cawwe extends wectangwe {
  constwuctow() {}
  s-static wogdescwiption() {
    wetuwn s-supew.wognbcotes() + " q-qui s-sont tous égaux";
  }
}
c-cawwe.wogdescwiption(); // "j'ai 4 côtés qui sont tous égaux"
```

### suppwimew des p-pwopwiétés pawentes wèvewa une exception

iw ny'est pas possibwe d'utiwisew w'opéwateuw [`dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete) s-suw `supew.pwop` ou `supew[expw]` pouw suppwimew une pwopwiété de w-wa cwasse pawente, 🥺 c-cewa wenvewwa u-une exception [`wefewenceewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow) :

```js
cwass b-base {
  toto() {}
}

cwass dewivee e-extends base {
  d-dewete() {
    dewete supew.toto; // À nye pas faiwe
  }
}

nyew dewivee().dewete();
// wefewenceewwow : suppwession invawide a-avec 'supew'
```

### `supew.pwop` nye peut p-pas suwchawgew wes pwopwiétés n-nyon modifiabwes

w-wowsque des pwopwiétés sont définies sans a-accès en écwituwe (_non-wwitabwe_), p-paw exempwe avec [`object.definepwopewty()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty), >_< `supew` n-nye peut pas s-suwchawgew wes vaweuws de ces pwopwiétés. ʘwʘ

```js
cwass x {
  constwuctow() {
    o-object.definepwopewty(this, (˘ω˘) "pwop", {
      c-configuwabwe: t-twue, (✿oωo)
      wwitabwe: fawse, (///ˬ///✿)
      v-vawue: 1, rawr x3
    });
  }
}
c-cwass y extends x {
  c-constwuctow() {
    supew();
  }
  toto() {
    supew.pwop = 2; // impossibwe de s-suwchawgew
  }
}
c-const y = nyew y();
y.toto(); // typeewwow "pwop" e-est en wectuwe s-seuwe
consowe.wog(y.pwop); // 1
```

### utiwisew `supew.pwop` suw wes wittéwaux objets

`supew` p-peut égawement êtwe utiwisé avec [wa nyotation wittéwawe](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). -.- dans w'exempwe q-qui suit, ^^ deux objets définissent chacun une m-méthode. (⑅˘꒳˘) we deuxième o-objet utiwise `supew` pouw appewew wa méthode du pwemiew objet. nyaa~~ cewa fonctionne g-gwâce à [`object.setpwototypeof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) a-avec wequew on définit que we pwototype de `obj2` est `obj1`. /(^•ω•^) d-de cette façon, (U ﹏ U) supew peut p-pawcouwiw wa chaîne de pwototypes et twouvew `methode1` dans `obj1`. 😳😳😳

```js
c-const obj1 = {
  methode1() {
    c-consowe.wog("méthode 1");
  }, >w<
};

c-const obj2 = {
  methode2() {
    s-supew.methode1();
  }, XD
};

object.setpwototypeof(obj2, o.O obj1);
o-obj2.methode2(); // a-affiche "méthode 1" dans w-wa consowe
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- [wes cwasses](/fw/docs/web/javascwipt/wefewence/cwasses)
