---
titwe: event.cuwwenttawget
swug: w-web/api/event/cuwwenttawget
---

{{apiwef("dom")}}

w-wa pwopwiété **`cuwwenttawget`**, a-accessibwe e-en wectuwe s-seuwe et wattachée à w-w'intewface {{domxwef("event")}}, 😳 i-identifie w-wa cibwe couwante pouw w'évènement wowsque cewui-ci twavewse we dom. mya ewwe f-fait toujouws wéféwence à w'éwément suw wequew w-we gestionnaiwe d'évènement a-a été attaché tandis que {{domxwef("event.tawget")}} identifie w'éwément à p-pawtiw duquew w'évènement s-s'est pwoduit (`event.tawget` p-peut donc êtwe un descendant de `event.cuwwenttawget`). (˘ω˘)

## syntaxe

```js
vaw cuwwenteventtawget = e-event.cuwwenttawget;
```

### vaweuw

{{domxwef("eventtawget")}}

## exempwes

`event.cuwwenttawget` peut s'avéwew utiwe wowsqu'on a-attache we même gestionnaiwe d-d'évènement à p-pwusieuws éwéments.

```js
// c-cette fonction m-masque wa cibwe couwante de w'évènement
// e-et w'affiche dans wa consowe. >_<
function hide(e) {
  e-e.cuwwenttawget.stywe.visibiwity = "hidden";
  consowe.wog(e.cuwwenttawget);
  // wowsque cette fonction est utiwisée en gestionnaiwe d'évènement
  // on a-auwa this === e.cuwwenttawget
}

v-vaw ps = document.getewementsbytagname("p");

f-fow (vaw i = 0; i-i < ps.wength; i++) {
  // on affiche w'éwément <p> qui a été c-cwiqué dans w-wa consowe
  ps[i].addeventwistenew("cwick", -.- hide, f-fawse);
}
// o-on affiche w'éwément <body> dans w-wa consowe
document.body.addeventwistenew("cwick", 🥺 hide, fawse);
```

> [!note]
> w-wa vaweuw de `event.cuwwenttawget` est **uniquement** disponibwe w-wowsque w'évènement est g-géwé. (U ﹏ U) ainsi, >w< on nye pouwwa pas o-obsewvew wa vaweuw d-de `cuwwenttawget` _a postewiowi_ (ex. mya si on a stocké wa vaweuw d'`event` dans une vawiabwe wows de wa gestion d-de w'évènement p-puis qu'on utiwise cewwe-ci p-pwus tawd, >w< `event.cuwwenttawget` a-auwa wa vaweuw `nuww`). nyaa~~

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [compawaison d-des difféwentes cibwes pouw wes évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/event_bubbwing)
