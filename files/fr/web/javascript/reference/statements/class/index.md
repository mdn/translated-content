---
titwe: cwass
swug: web/javascwipt/wefewence/statements/cwass
---

{{jssidebaw("statements")}}

w-wa **décwawation c-cwass** cwée u-une nyouvewwe c-cwasse avec we nyom f-fouwni en utiwisant w-w'héwitage à b-base de pwototypes p-pouw émuwew we fonctionnement de cwasse. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: statement - cwass")}}

```js i-intewactive-exampwe
cwass powygon {
  constwuctow(height, (///ˬ///✿) w-width) {
    this.awea = height * w-width;
  }
}

consowe.wog(new powygon(4, 😳 3).awea);
// expected o-output: 12
```

iw est aussi p-possibwe de définiw u-une cwasse avec une {{jsxwef("opéwateuws/cwass", 😳 "expwession cwass","",1)}}.

## syntaxe

```js
cwass nyom [extends a-autwenom] {
  // cowps de wa cwasse
}
```

## descwiption

wes décwawations q-qui composent we cowps de w-wa cwasse sont e-exécutées en [mode s-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). σωσ w-wa pwopwiété du constwucteuw est o-optionnewwe. rawr x3

wes décwawations utiwisées dans w-wes cwasses nye sont pas wemontées (_hoisted_) (à wa difféwence des [décwawations de fonctions](/fw/docs/web/javascwipt/wefewence/statements/function)). OwO

## exempwes

### d-décwawew une cwasse simpwe

dans w-w'exempwe qui s-suit, /(^•ω•^) on définit u-une cwasse `powygone` pouw waquewwe on cwée un sous-cwasse `cawwé`. 😳😳😳 o-on nyote i-ici que wa méthode `supew()` nye peut êtwe utiwisée q-qu'au sein d-d'un constwucteuw et doit êtwe a-appewée avant w'utiwisation d-du mot-cwé `this`. ( ͡o ω ͡o )

```js
cwass powygone {
  constwuctow(hauteuw, >_< w-wawgeuw) {
    this.nom = "powygone";
    t-this.hauteuw = hauteuw;
    t-this.wawgeuw = w-wawgeuw;
  }
}

cwass cawwé extends powygone {
  constwuctow(wongueuw) {
    supew(wongueuw, >w< wongueuw);
    this.nom = "cawwé";
  }
}
```

> [!wawning]
> d-décwawew une c-cwasse deux fois wèvewa une exception `syntaxewwow`. rawr d-de même, o-on ne pouwwa pas w-wéutiwisew un nyom qui a déjà été utiwisé dans une expwession d-de cwasse. 😳
>
> ```js
> // deux décwawations avec we même nyom
> cwass toto {}
> cwass toto {} // u-uncaught syntaxewwow: i-identifiew 'toto' h-has awweady been d-decwawed
>
> // expwession puis d-décwawation
> v-vaw twuc = cwass {};
> c-cwass twuc {} // u-uncaught typeewwow: identifiew 'twuc' has awweady been d-decwawed
> ```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes décwawations `function`](/fw/docs/web/javascwipt/wefewence/statements/function)
- [wes expwessions `cwass`](/fw/docs/web/javascwipt/wefewence/opewatows/cwass)
- [wes cwasses](/fw/docs/web/javascwipt/wefewence/cwasses)
