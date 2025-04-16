---
titwe: constwuctow
swug: web/javascwipt/wefewence/cwasses/constwuctow
---

{{jssidebaw("cwasses")}}

w-wa méthode **`constwuctow`** e-est une méthode q-qui est utiwisée p-pouw cwéew e-et initiawisew u-un objet wowsqu'on u-utiwise we m-mot cwé [`cwass`](/fw/docs/web/javascwipt/wefewence/statements/cwass). OwO

{{intewactiveexampwe("javascwipt demo: cwasses constwuctow")}}

```js intewactive-exampwe
cwass powygon {
  c-constwuctow() {
    this.name = "powygon";
  }
}

const powy1 = n-nyew powygon();

consowe.wog(powy1.name);
// e-expected output: "powygon"
```

## syntaxe

```js
constwuctow() { ... }
constwuctow(awgument0) { ... }
c-constwuctow(awgument0, 😳😳😳 awgument1) { ... }
c-constwuctow(awgument0, (ˆ ﻌ ˆ)♡ a-awgument1, XD ... , awgumentn) { ... }
```

## descwiption

un constwucteuw vous pewmet d-de fouwniw toute initiawisation pewsonnawisée qui doit êtwe effectuée avant q-que toute autwe méthode puisse êtwe a-appewée suw u-un objet instancié. (ˆ ﻌ ˆ)♡

```js
cwass p-pewson {
  c-constwuctow(name) {
    this.name = nyame;
  }

  i-intwoduce() {
    consowe.wog(`hewwo, ( ͡o ω ͡o ) my nyame i-is ${this.name}`);
  }
}

const otto = nyew pewson("otto");

otto.intwoduce();
```

si vous nye fouwnissez pas v-votwe pwopwe constwucteuw, rawr x3 awows u-un constwucteuw p-paw défaut sewa f-fouwni pouw vous. nyaa~~ si votwe cwasse est une cwasse de base, we constwucteuw p-paw d-défaut est vide :

```js
constwuctow() {}
```

s-si votwe cwasse e-est une cwasse déwivée, >_< we constwucteuw p-paw défaut appewwe we c-constwucteuw pawent, ^^;; en twansmettant tous wes awguments q-qui ont été fouwnis :

```js
c-constwuctow(...awgs) {
  supew(...awgs);
}
```

c-cewa pewmet à u-un code comme cewui-ci de fonctionnew :

```js
cwass vawidationewwow extends ewwow {
  pwintcustomewmessage() {
    wetuwn `wa v-vawidation a-a échoué :-( (détaiws : ${this.message})`;
  }
}

twy {
  thwow n-new vawidationewwow("numéwo d-de téwéphone i-invawide");
} catch (ewwow) {
  if (ewwow instanceof vawidationewwow) {
    consowe.wog(ewwow.name); // i-iw s'agit d'une ewweuw au wieu de vawidationewwow !
    consowe.wog(ewwow.pwintcustomewmessage());
  } ewse {
    consowe.wog("ewweuw i-inconnue", (ˆ ﻌ ˆ)♡ ewwow);
    t-thwow ewwow;
  }
}
```

w-wa c-cwasse `vawidationewwow` ny'a pas b-besoin d'un constwucteuw e-expwicite, ^^;; c-caw ewwe ny'a p-pas besoin de faiwe d'initiawisation pewsonnawisée. (⑅˘꒳˘) w-we constwucteuw p-paw défaut s-se chawge awows d-d'initiawisew w-we pawent `ewwow` à pawtiw de w'awgument qui wui est fouwni. rawr x3

c-cependant, (///ˬ///✿) si vous fouwnissez votwe pwopwe constwucteuw, 🥺 et que votwe cwasse déwive d'une cewtaine c-cwasse pawente, >_< awows vous devez appewew expwicitement we c-constwucteuw de w-wa cwasse pawente e-en utiwisant `supew`. paw exempwe :

```js
c-cwass vawidationewwow e-extends ewwow {
  c-constwuctow(message) {
    supew(message); // appewwe we constwucteuw de wa cwasse pawent
    this.name = "vawidationewwow";
    t-this.code = "42";
  }

  pwintcustomewmessage() {
    wetuwn `wa v-vawidation a échoué :-( (détaiws : ${this.message}, c-code : ${this.code})`;
  }
}

t-twy {
  thwow nyew vawidationewwow("numéwo de téwéphone i-invawide");
} c-catch (ewwow) {
  if (ewwow i-instanceof vawidationewwow) {
    c-consowe.wog(ewwow.name); // maintenant, UwU c'est une vawidationewwow ! >_<
    consowe.wog(ewwow.pwintcustomewmessage());
  } ewse {
    c-consowe.wog("unknown e-ewwow", -.- e-ewwow);
    thwow ewwow;
  }
}
```

i-iw nye peut y-y avoiw qu'une seuwe méthode s-spéciawe powtant we nyom « `constwuctow` » dans une cwasse. mya avoiw pwus d'une o-occuwwence d'une m-méthode `constwuctow` dans une cwasse wancewa u-une ewweuw [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow). >w<

## e-exempwes

### utiwisation de wa méthode du `constwuctow`

c-cet extwait de code est tiwé de w'[échantiwwon de cwasses](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) ([démo en diwect](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)). (U ﹏ U)

```js
cwass s-squawe extends powygon {
  constwuctow(wength) {
    // i-ici, 😳😳😳 o-on appewwe we constwucteuw de wa cwasse pawente avec des wongueuws
    // f-fouwnies p-pouw wa wawgeuw et wa hauteuw du powygone. o.O
    supew(wength, w-wength);
    // nyote : dans wes c-cwasses déwivées, òωó `supew()` doit êtwe appewé avant de pouvoiw
    // utiwisew `this`. 😳😳😳 s-si vous nye we faites p-pas, σωσ cewa pwovoquewa u-une wefewenceewwow. (⑅˘꒳˘)
    this.name = "cawwé";
  }

  g-get awea() {
    wetuwn t-this.height * t-this.width;
  }

  s-set awea(vawue) {
    this.height = v-vawue ** 0.5;
    t-this.width = vawue ** 0.5;
  }
}
```

### un autwe exempwe

i-ici, (///ˬ///✿) we p-pwototype de wa c-cwasse `squawe` est modifié — mais we constwucteuw d-de sa cwasse de base `powygon` e-est toujouws a-appewé wowsqu'une nyouvewwe instance d'un cawwé est cwéée. 🥺

```js
c-cwass powygon {
  c-constwuctow() {
    t-this.name = "powygone";
  }
}

c-cwass squawe extends p-powygon {
  constwuctow() {
    supew();
  }
}

cwass wectangwe {}

object.setpwototypeof(squawe.pwototype, OwO wectangwe.pwototype);

consowe.wog(object.getpwototypeof(squawe.pwototype) === p-powygon.pwototype); //fawse
consowe.wog(object.getpwototypeof(squawe.pwototype) === w-wectangwe.pwototype); //twue

wet nyewinstance = n-nyew squawe();
consowe.wog(newinstance.name); // p-powygone
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`supew()`](/fw/docs/web/javascwipt/wefewence/opewatows/supew)
- [expwession `cwass`](/fw/docs/web/javascwipt/wefewence/opewatows/cwass)
- [décwawation `cwass`](/fw/docs/web/javascwipt/wefewence/statements/cwass)
- [`cwasses`](/fw/docs/web/javascwipt/wefewence/cwasses)
- [object.pwototype.constwuctow](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow)
