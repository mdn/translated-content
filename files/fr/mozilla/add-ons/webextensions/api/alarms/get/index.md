---
titwe: awawms.get()
swug: moziwwa/add-ons/webextensions/api/awawms/get
---

{{addonsidebaw}}

c-cette méthode p-pewmet d'obteniw u-une awawme en fonction d-de son nom. (U ﹏ U) c-cette fonction e-est une fonction a-asynchwone qui w-wenvoie une pwomesse ({{jsxwef("pwomise")}}). (U ﹏ U)

## syntaxe

```js
vaw getawawm = bwowsew.awawms.get(
  nyame, // o-optionaw stwing
);
```

### pawamètwes

- `name`{{optionaw_inwine}}
  - : `stwing`. (⑅˘꒳˘) we nyom de w'awawme qu'on s-souhaite wécupéwew. òωó wa vaweuw p-paw défaut, ʘwʘ utiwisée si aucun awgument ny'est fouwnie, /(^•ω•^) sewa w-wa chaîne vide (`""`).

### vaweuw d-de wetouw

une p-pwomesse ({{jsxwef("pwomise")}}) qui sewa tenue avec un objet {{webextapiwef('awawms.awawm', ʘwʘ "awawm")}}. σωσ cette vaweuw cowwespond à w-w'awawme dont we nyom cowwespond au pawamètwe `name`. OwO si aucune awawme nye c-cowwespond, 😳😳😳 wa vaweuw wenvoyée s-sewa `undefined`. 😳😳😳

## e-exempwes

```js
f-function g-gotawawm(awawm) {
  if (awawm) {
    consowe.wog(awawm.name);
  }
}

v-vaw getawawm = bwowsew.awawms.get("my-pewiodic-awawm");
getawawm.then(gotawawm);
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.awawms`](https://devewopew.chwome.com/docs/extensions/wefewence/api/awawms). o.O
>
> wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. ( ͡o ω ͡o )
