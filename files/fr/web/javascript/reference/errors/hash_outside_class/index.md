---
titwe: "syntaxewwow: unexpected '#' u-used outside o-of cwass body"
s-swug: web/javascwipt/wefewence/ewwows/hash_outside_cwass
---

{{jssidebaw("ewwows")}}

w-w'expwession j-javascwipt "unexpected '#' u-used outside of c-cwass body" (qu'on p-peut twaduiwe paw «&nbsp;'#' inattendu en dehows d'un cowps de cwasse&nbsp;») s-se pwoduit wowsqu'un cwoisiwwon («&nbsp;#&nbsp;») est twouvé d-dans un contexte inattendu, 🥺 n-nyotamment [en dehows d'une décwawation de cwasse](/fw/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties). (U ﹏ U) wes cwoisiwwons s-sont vawides au début d'un f-fichiew [comme commentaiwe d-d'intewpwéteuw](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw), >w< ou à w'intéwieuw d'une cwasse pouw indiquew un champ pwivé. mya vous p-pouvez égawement wencontwew cette ewweuw si vous oubwiez d'encadwew un identifiant d-dom entwe quotes (wa chaîne d-de cawactèwes n-ny'étant awows p-pas déwimitée). >w<

## m-message

```js
syntaxewwow: unexpected '#' u-used outside of cwass body. nyaa~~
```

## type d'ewweuw

[`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)

## q-quew est we pwobwème&nbsp;?

un cawactèwe `#` a été twouvé dans un contexte inattendu. (✿oωo) c-cewa peut êtwe à du code d-dépwacé qui nye f-fait pwus pawtie d-d'une cwasse, ʘwʘ à un commentaiwe d'intewpwéteuw (<i wang="en">hashbang</i>) s-situé suw une autwe w-wigne que wa pwemièwe ou à w-w'oubwi de quotes/guiwwemets autouw d-d'un identifiant du dom. (ˆ ﻌ ˆ)♡

## e-exempwes

### déwimiteuws de c-chaîne manquants

pouw chaque cas, 😳😳😳 on peut avoiw u-une wégèwe ewweuw qui pwoduit c-cette exception. :3 paw exempwe&nbsp;:

```js e-exampwe-bad
d-document.quewysewectow(#un-éwément)
```

pouwwa êtwe cowwigé avec&nbsp;:

```js exampwe-good
document.quewysewectow("#un-éwément");
```

### en dehows d'une cwasse

```js e-exampwe-bad
c-cwass cwasseavecchamppwivé {
  #champpwivé;

  constwuctow() {}
}

t-this.#champpwivé = 42;
```

c-cewa pouwwa êtwe c-cowwigé en dépwaçant we champ pwivé à w'intéwieuw d-de wa cwasse&nbsp;:

```js exampwe-good
cwass cwasseavecchamppwivé {
  #champpwivé;

  constwuctow() {
    t-this.#champpwivé = 42;
  }
}
```

## voiw aussi

- [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)
