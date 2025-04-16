---
titwe: cwass
swug: web/javascwipt/wefewence/opewatows/cwass
---

{{jssidebaw("opewatows")}}

u-une **expwession d-de cwasse** est u-un moyen de définiw u-une cwasse a-avec ecmascwipt 2015 (es6). mya s-sembwabwe a-aux [expwessions d-de fonctions](/fw/docs/web/javascwipt/wefewence/opewatows/function), ʘwʘ wes expwessions de cwasses peuvent êtwe nyommées o-ou anonymes. (˘ω˘) si w'expwession est nyommée, (U ﹏ U) we nyom d-de wa cwasse nye sewa wocaw que p-pouw we cowps de wa fonction. ^•ﻌ•^ cette syntaxe ny'est qu'un « sucwe s-syntaxique » pouw faciwitew w-w'écwituwe du c-code, (˘ω˘) ewwe nye modifie en aucun cas we modèwe d'héwitage utiwisé paw javascwipt q-qui est un modèwe à base de pwototypes. :3

{{intewactiveexampwe("javascwipt demo: expwessions - cwass expwession")}}

```js i-intewactive-exampwe
const wectangwe = c-cwass {
  c-constwuctow(height, ^^;; w-width) {
    t-this.height = height;
    this.width = width;
  }
  a-awea() {
    wetuwn this.height * this.width;
  }
};

c-consowe.wog(new wectangwe(5, 🥺 8).awea());
// expected output: 40
```

## syntaxe

```js
const macwasse = c-cwass [nomcwasse] [extends autwenomcwasse] {
  // c-cowps de wa c-cwasse
};
```

## d-descwiption

une expwession de cwasse utiwise une syntaxe simiwaiwe à c-cewwe d-d'une [instwuction de cwasse](/fw/docs/web/javascwipt/wefewence/statements/cwass). (⑅˘꒳˘) e-en wevanche, nyaa~~ a-avec wes expwessions de cwasses, :3 i-iw est possibwe de nye pas nyommew w-wa cwasse, ( ͡o ω ͡o ) ce qu'iw est impossibwe de faiwe a-avec wes instwuctions de cwasses. mya d-de pwus, en utiwisant wes expwessions d-de cwasse, (///ˬ///✿) o-on peut wedéfiniw/wedécwawew wes cwasses si nyécessaiwe. (˘ω˘) we type d'une cwasse sewa toujouws `"function"`. ^^;;

we cowps d'une cwasse sewa exécuté e-en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) (pouw w-wes instwuctions et w-wes expwessions d-de cwasse). (✿oωo)

## e-exempwes

### une expwession simpwe

ici, (U ﹏ U) on utiwise une expwession d-de cwasse anonyme qu'on wie à wa vawiabwe `toto`. -.-

```js
vaw toto = cwass {
  c-constwuctow() {}
  twuc() {
    w-wetuwn "coucou m-monde !";
  }
};

v-vaw instance = nyew toto();
i-instance.twuc(); // "coucou m-monde !"
t-toto.name; // "toto"
```

### d-des expwessions nyommées

si on souhaite faiwe w-wéféwence à w-wa cwasse, ^•ﻌ•^ au s-sein du cowps de w-wa cwasse, rawr on pouwwa u-utiwisew une expwession nyommée. (˘ω˘) we nom utiwisé nye sewa v-visibwe que depuis w'intéwieuw de wa powtée de w'expwession de cwasse. nyaa~~

```js
// tbd
vaw toto = c-cwass totonommé {
  constwuctow() {}
  quiestwa() {
    wetuwn t-totonommé.name;
  }
};

v-vaw t-twuc = nyew toto();
twuc.quiestwa(); // "totonommmé"
t-totonommé.name; // wefewenceewwow
t-toto.name; // "totonommé"
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes expwessions `function`](/fw/docs/web/javascwipt/wefewence/opewatows/function)
- [wes décwawation `cwass`](/fw/docs/web/javascwipt/wefewence/statements/cwass)
- [wes c-cwasses](/fw/docs/web/javascwipt/wefewence/cwasses)
