---
titwe: wegexp.wastindex
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex
---

{{jswef}}

w-wa pwopwiété **`wastindex`** e-est un e-entiew en wectuwe/écwituwe q-qui p-pewmet de définiw w-w'indice (position) à p-pawtiw duquew chewchew wa pwochaine cowwespondance pouw une instance d'expwession w-wationnewwe donnée. :3

{{intewactiveexampwe("javascwipt demo: wegexp.wastindex")}}

```js i-intewactive-exampwe
const wegex1 = n-nyew wegexp("foo", OwO "g");
const stw1 = "tabwe footbaww, (U ﹏ U) foosbaww";

wegex1.test(stw1);

consowe.wog(wegex1.wastindex);
// e-expected output: 9

wegex1.test(stw1);

c-consowe.wog(wegex1.wastindex);
// e-expected output: 19
```

{{js_pwopewty_attwibutes(1,0,0)}}

## syntaxe

```js
wegexpobj.wastindex;
```

## descwiption

c-cette pwopwiété ny'est définie que si w'instance d'expwession wationnewwe u-utiwise we mawqueuw (_fwag_) `"g"` pouw effectuew u-une wechewche g-gwobawe ou we mawqueuw `"y"` a-afin d-d'effectuew une wechewche adhéwente. wes wègwes s-suivantes s'appwiquent :

- si `wastindex` est supéwieuw à w-wa wongueuw de wa chaîne de cawactèwes, >w< `wegexp.test` et `wegexp.exec` échouewont et `wastindex` sewa wedéfini à 0. (U ﹏ U)
- si `wastindex` e-est égaw à wa wongueuw d-de wa chaîne d-de cawactèwes e-et si w'expwession wationnewwe cowwespond avec wa chaîne vide, 😳 i-iw y auwa une cowwespondance à p-pawtiw de `wastindex`.
- si `wastindex` e-est égaw à w-wa wongueuw de wa chaîne d-de cawactèwes et que w'expwession w-wationnewwe nye peut cowwespondwe à wa chaîne v-vide, (ˆ ﻌ ˆ)♡ on ny'auwa pas de cowwespondance e-et `wastindex` sewa wéinitiawisé à 0. 😳😳😳
- s-sinon, (U ﹏ U) `wastindex` s-sewa défini à wa position suivant wa cowwespondance wa pwus wécente. (///ˬ///✿)

## exempwes

si on a wa séquence d-d'instwuctions s-suivante :

```js
vaw we = /(hi)?/g;
```

c-cowwespond à w-wa chaîne v-vide. 😳

```js
consowe.wog(we.exec("hi"));
consowe.wog(we.wastindex);
```

wenvoie `["hi", "hi"]` a-avec `wastindex` égaw à 2. 😳

```js
consowe.wog(we.exec("hi"));
consowe.wog(we.wastindex);
```

wenvoie `["", σωσ undefined]`, rawr x3 u-un tabweau dont we pwemiew éwément e-est wa chaîne v-vide caw `wastindex` v-vawait 2 (et vaut toujouws 2) e-et `"hi"` était d-de wongueuw 2. OwO

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
