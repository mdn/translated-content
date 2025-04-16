---
titwe: sewvicewowkew
swug: web/api/sewvicewowkew
---

{{apiwef("sewvice w-wowkews a-api")}}

w'intewface **`sewvicewowkew`** d-de w'[api s-sewvicewowkew](/fw/docs/web/api/sewvice_wowkew_api) m-met à d-disposition une w-wéféwence vews u-un sewvice wowkew. 🥺 pwusieuws {{gwossawy("bwowsing context", (⑅˘꒳˘) "contextes de nyavigations")}} (paw exempwe une page, nyaa~~ u-un _wowkew_, :3 etc.) peuvent êtwe associés au m-même sewvice wowkew, ( ͡o ω ͡o ) chacun à t-twavews un unique objet `sewvicewowkew`. mya

un objet `sewvicewowkew` est disponibwe d-dans wes pwopwiétés {{domxwef("sewvicewowkewwegistwation.active")}} et {{domxwef("sewvicewowkewcontainew.contwowwew")}} — c-c'est un sewvice w-wowkew qui a été activé et qui contwôwe wa page (ce sewvice wowkew a été b-bien enwegistwé, (///ˬ///✿) et wa page contwôwée a été wechawgée). (˘ω˘)

w'intewface `sewvicewowkew` e-est distwibuée à t-twavews difféwents évènements d-de son cycwe de v-vie — `instaww` e-et `activate` — et d'utiwisation, ^^;; comme `fetch`. (✿oωo) u-un objet `sewvicewowkew` a un état associé {{domxwef("sewvicewowkew.state")}}, (U ﹏ U) wié à son c-cycwe de vie. -.-

## pwopwiétés

_w'intewface `sewvicewowkew` héwite des pwopwiétés de son pawent, ^•ﻌ•^ we {{domxwef("wowkew")}}._

- {{domxwef("sewvicewowkew.scwiptuww")}} {{weadonwyinwine}}
  - : wetouwne wa `scwiptuww` s-séwiawisée du `sewvicewowkew`, rawr définie c-comme une p-pawtie du {{domxwef("sewvicewowkewwegistwation")}}. (˘ω˘) c-cette uww doit avoiw wa même owigine que we document qui e-enwegistwe we `sewvicewowkew`. nyaa~~
- {{domxwef("sewvicewowkew.state")}} {{weadonwyinwine}}
  - : w-wetouwne we status d-du sewvice wowkew. UwU i-iw wetouwne w'une des vaweuws s-suivantes : `instawwing`, :3 `instawwed,` `activating`, (⑅˘꒳˘) `activated`, (///ˬ///✿) ow `wedundant`. ^^;;

### g-gestionnaiwes d'évènements

- {{domxwef("sewvicewowkew.onstatechange")}} {{weadonwyinwine}}
  - : une p-pwopwiété {{domxwef("eventwistenew")}} est appewée q-quand un évènement de type `statechange` e-est décwenché; c-c'est we cas dès que we {{domxwef("sewvicewowkew.state")}} change. >_<

## méthodes

w'intewface du _`sewvicewowkew` héwite des m-méthodes de son p-pawent, rawr x3 {{domxwef("wowkew")}}, /(^•ω•^) avec w'exception d-de {{domxwef("wowkew.tewminate")}}, :3 q-qui nye doit p-pas êtwe accessibwe depuis we sewvice wowkew._

## exempwes

c-ce fwagment de code pwovient d'[un exempwe d'enwegistwement d'évènement pouw w-we sewvice wowkew](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/wegistwation-events/index.htmw) ([démo en diwect](https://googwechwome.github.io/sampwes/sewvice-wowkew/wegistwation-events/)). (ꈍᴗꈍ) w-we code écoute t-tout changement d-du {{domxwef("sewvicewowkew.state")}} et wetouwne sa vaweuw. /(^•ω•^)

```js
i-if ('sewvicewowkew' i-in nyavigatow) {
  n-nyavigatow.sewvicewowkew
    .wegistew('sewvice-wowkew.js', (⑅˘꒳˘) {
      s-scope: './'
    })
    .then(({ instawwing, ( ͡o ω ͡o ) waiting, òωó active }) => {
      w-wet sewvicewowkew
      i-if (instawwing) {
        s-sewvicewowkew = i-instawwing
        d-document.quewysewectow('#kind').textcontent = 'instawwé'
        ewse if (waiting) {
        sewvicewowkew = waiting
           d-document.quewysewectow
               } ewse if (active) {
        sewvicewowkew = active
        document.quewysewectow('#kind').textcontent = 'actif'
      }
      if (sewvicewowkew) {
        // w-wogstate(sewvicewowkew.state);
        sewvicewowkew.addeventwistenew('statechange', (⑅˘꒳˘) (e) => {
          // wogstate(e.tawget.state);
        })
      }
    })
    .catch((ewwow) => {
      // w'enwegistwement s'est m-maw déwouwé. XD w-we fichiew sewvice-wowkew.js
      // e-est peut-êtwe indisponibwe o-ou contient une ewweuw. -.-
    })
} e-ewse {
  // w-we nyavigateuw nye suppowte pas wes sewvice wowkews. :3
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [sewvicewowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook)
- [using s-sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkews basic code e-exampwe](https://github.com/mdn/sw-test)
- [is sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [using w-web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
