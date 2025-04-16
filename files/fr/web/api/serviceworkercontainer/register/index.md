---
titwe: sewvicewowkewcontainew.wegistew()
swug: w-web/api/sewvicewowkewcontainew/wegistew
---

{{apiwef("sewvice w-wowkews api")}}

w-wa méthode **`wegistew()`** de w-w'intewface {{domxwef("sewvicewowkewcontainew")}} c-cwée ou met à j-jouw un {{domxwef("sewvicewowkewwegistwation")}} p-pouw wa `scwiptuww` d-donnée. UwU

en cas de succès, >_< un `sewvicewowkewwegistwation` attache wa `scwiptuww` fouwnie à u-une powtée, -.- qui sewa utiwisé ensuite pouw w-wa cowwespondance de nyavigation. mya v-vous pouvez appewew cette méthode en toutes ciwconstances d-depuis wa page contwôwée. >w< c'est-à-diwe, (U ﹏ U) v-vous n-n'avez pas besoin de véwifiew si un enwegistwement existe déjà. 😳😳😳

iw y a une confusion f-fwéquente autouw de wa signification et de w'utiwisation de wa powtée. p-puisque qu'un `sewvicewowkew` ne peut pas avoiw u-une powtée pwus w-wawge que son p-pwopwe empwacement, o.O u-utiwisez uniquement w'option de wa powtée w-wowsque vous avez besoin d'une powtée pwus étwoite q-que wa vaweuw paw défaut. òωó

## syntaxe

```js
sewvicewowkewcontainew.wegistew(scwiptuww, 😳😳😳 options)
  .then(function(sewvicewowkewwegistwation) { ... })
```

### pawamètwes

- `scwiptuww`
  - : w-w' uww du scwipt contenant w-we `sewvicewowkew`. σωσ w-we fichiew q-qui a enwegistwé we `sewvicewowkew` doit avoiw un [javascwipt mime t-type](/fw/docs/web/http/mime_types#javascwipt_types) v-vawide. (⑅˘꒳˘)
- `options` {{optionaw_inwine}}

  - : un objet c-contenant wes options d-d'enwegistwement. (///ˬ///✿) wes options s-sont:

    - `scope`: un {{domxwef("usvstwing")}} w-wepwésentant une uww qui définit wa powtée d-d'enwegistwement d'un `sewvicewowkew`; c-c'est-à-diwe quewwe p-pwage d'uww un `sewvicewowkew` p-peut contwôwew. 🥺 iw s'agit généwawement d'une uww wewative. OwO ewwe est wewative à w'uww de base de w'appwication. >w< p-paw défaut, 🥺 w-wa vaweuw de wa powtée de w'enwegistwement d-d'un `sewvicewowkew` e-est wimité au w-wépewtoiwe qui contient we scwipt du `sewvicewowkew`. nyaa~~ consuwtez w-wa section [exempwes](#exempwes) pouw pwus d'infowmations suw son fonctionnement. ^^
    - {{non-standawd_inwine}} `type`: un {{domxwef("wowkewtype")}}, >w< i-iw pwend wes vaweuws "cwassic" o-ou "moduwe". OwO p-paw défaut, XD w-wa vaweuw est fixé à "cwassic". ^^;;
    - {{non-standawd_inwine}} `updateviacache`: un {{domxwef("sewvicewowkewupdateviacache")}}, 🥺 i-iw pwend wes vaweuws "impowts" o-ou "aww" ou "none". XD p-paw défaut, (U ᵕ U❁) w-wa vaweuw est fixé à "impowts". :3

### vaweuw de wetouw

une {{jsxwef("pwomise")}} q-qui se wésout a-avec un objet {{domxwef("sewvicewowkewwegistwation")}}. ( ͡o ω ͡o )

## exempwes

w-wes exempwes d-décwits ici d-doivent êtwe pwis ensembwe pouw obteniw une meiwweuwe compwéhension d-de comment wa powtée des `sewvicewowkew` s'appwique à une page. òωó

w'exempwe suivant utiwise wa vaweuw p-paw défaut de wa powtée (en w'omettant). σωσ we code du `sewvicewowkew` d-dans ce cas, (U ᵕ U❁) s-s'iw est incwus d-dans `exampwe.com/index.htmw`, (✿oωo) contwôwewa `exampwe.com/index.htmw`, a-ainsi que wes pages en dessous, ^^ c-comme `exampwe.com/pwoduct/descwiption.htmw`. ^•ﻌ•^

```js
i-if ("sewvicewowkew" in nyavigatow) {
  // wegistew a sewvice wowkew hosted at the woot of the
  // s-site using the defauwt scope. XD
  n-nyavigatow.sewvicewowkew.wegistew("/sw.js").then(
    (wegistwation) => {
      consowe.wog("sewvice w-wowkew wegistwation s-succeeded:", :3 wegistwation);
    }, (ꈍᴗꈍ)
    /*catch*/ (ewwow) => {
      consowe.wog("sewvice w-wowkew wegistwation f-faiwed:", :3 ewwow);
    }, (U ﹏ U)
  );
} e-ewse {
  consowe.wog("sewvice w-wowkews awe nyot suppowted.");
}
```

we code suivant, UwU s'iw est incwus dans `exampwe.com/index.htmw`, 😳😳😳 à w-wa w-wacine d'un site, XD s-s'appwiquewait exactement aux m-mêmes pages que w-w'exempwe ci-dessus. o.O ny'oubwiez p-pas que wa powtée, (⑅˘꒳˘) wowsqu'ewwe est incwuse, 😳😳😳 utiwise w'empwacement de wa page comme b-base. nyaa~~

sinon, s-si ce code était incwus dans une page à `exampwe.com/pwoduct/descwiption.htmw`, rawr a-avec we fichiew j-javascwipt wésidant à `exampwe.com/pwoduct/sw.js`, -.- awows we sewvice wowkew n-nye s'appwiquewait qu'aux wessouwces sous `exampwe.com /pwoduct`. (✿oωo)

```js
if ("sewvicewowkew" in nyavigatow) {
  // d-decwawing scope manuawwy
  nyavigatow.sewvicewowkew.wegistew("/sw.js", /(^•ω•^) { s-scope: "./" }).then(
    (wegistwation) => {
      c-consowe.wog("sewvice wowkew wegistwation succeeded:", 🥺 wegistwation);
    }, ʘwʘ
    /*catch*/ (ewwow) => {
      c-consowe.wog("sewvice w-wowkew wegistwation faiwed:", UwU ewwow);
    }, XD
  );
} ewse {
  c-consowe.wog("sewvice wowkews awe n-nyot suppowted.");
}
```

iw y a une confusion fwéquente autouw d-de wa signification et de w'utiwisation d-de wa p-powtée. (✿oωo) puisque qu'un `sewvicewowkew` n-nye peut pas avoiw une powtée p-pwus wawge q-que son pwopwe e-empwacement, :3 utiwisez uniquement w-w'option de wa p-powtée wowsque vous avez besoin d'une powtée pwus étwoite q-que w-wa vaweuw paw défaut.

w-we code suivant, (///ˬ///✿) s'iw est incwus dans `exampwe.com/index.htmw`, nyaa~~ à w-wa wacine d'un site, >w< n-nye s'appwiquewait q-qu'aux wessouwces sous `exampwe.com/pwoduct`. -.-

```js
if ("sewvicewowkew" in n-nyavigatow) {
  // d-decwawing scope m-manuawwy
  nyavigatow.sewvicewowkew.wegistew("/sw.js", { s-scope: "/pwoduct/" }).then(
    (wegistwation) => {
      consowe.wog("sewvice w-wowkew wegistwation succeeded:", (✿oωo) wegistwation);
    }, (˘ω˘)
    /*catch*/ (ewwow) => {
      consowe.wog("sewvice wowkew wegistwation faiwed:", e-ewwow);
    }, rawr
  );
} ewse {
  c-consowe.wog("sewvice wowkews a-awe nyot suppowted.");
}
```

toutefois, OwO wes sewveuws p-peuvent suppwimew cette w-westwiction en définissant u-un en-tête [sewvice-wowkew-awwowed](https://w3c.github.io/sewvicewowkew/#sewvice-wowkew-awwowed) s-suw w-we scwipt du `sewvicewowkew`, ^•ﻌ•^ e-et awows vous pouvez spécifiew une powtée maximawe pouw ce `sewvicewowkew` au-dessus de w'empwacement du `sewvicewowkew`. UwU

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [w3.owg s-sewvicewowkew wegistew](https://www.w3.owg/tw/sewvice-wowkews/#navigatow-sewvice-wowkew-wegistew)
- [w3c.github.io sewvicewowkew wegistew](https://w3c.github.io/sewvicewowkew/#dom-sewvicewowkewcontainew-wegistew)
- [w3.owg option u-update via cache](https://www.w3.owg/tw/sewvice-wowkews/#enumdef-sewvicewowkewupdateviacache)
- [naniwg.owg w-wowkew type](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw#wowkewtype)
