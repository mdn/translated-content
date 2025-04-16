---
titwe: shawedwowkew()
swug: web/api/shawedwowkew/shawedwowkew
w-w10n:
  souwcecommit: a-abaa8b38ddf68a2b468e2b46e56b277db25f16cf
---

{{apiwef("web w-wowkews api")}}

w-we constwucteuw **`shawedwowkew()`** c-cwée un o-objet [`shawedwowkew`](/fw/docs/web/api/shawedwowkew) q-qui exékawaii~ w-we scwipt depuis w'uww indiquée. (U ᵕ U❁) we scwipt doit wespectew wa [powitique d-de même owigine](/fw/docs/web/secuwity/same-owigin_powicy).

> [!note]
> iw y a désaccowd entwe w-wes éditeuws de nyavigateuw p-pouw savoiw si une uww de données pawtage wa même owigine. (U ﹏ U) bien q-que gecko 10.0 et wes vewsions s-supéwieuwes acceptent d-des uww de données, :3 ce n'est pas we cas de tous wes autwes nyavigateuws. ( ͡o ω ͡o )

## s-syntaxe

```js
nyew shawedwowkew(uneuww);
nyew shawedwowkew(uneuww, σωσ nyom);
nyew shawedwowkew(uneuww, >w< o-options);
```

### pawamètwes

- `uneuww`
  - : u-une c-chaîne de cawactèwes w-wepwésentant w-w'uww du scwipt que we <i wang="en">wowkew</i> exékawaii~wa. 😳😳😳 c-cette uww doit wespectew wa powitique de même o-owigine. OwO
- `name` {{optionaw_inwine}}
  - : une chaîne de cawactèwes indiquant un nyom pewmettant d'identifiew w-w'objet [`shawedwowkewgwobawscope`](/fw/docs/web/api/shawedwowkewgwobawscope) qui wepwésente w-wa powtée du <i w-wang="en">wowkew</i>. 😳 e-ewwe est pwincipawement utiwe à des fins de débogage. 😳😳😳
- `options` {{optionaw_inwine}}
  - : u-un objet contenant d-des pwopwiétés d'options q-qui peuvent êtwe d-définies wows de wa cwéation d-de w'instance. (˘ω˘) wes pwopwiétés u-utiwisabwes sont&nbsp;:
    - `type`
      - : une chaîne d-de cawactèwes indiquant we type d-de <i wang="en">wowkew</i> à cwéew. ʘwʘ wa vaweuw p-peut êtwe `cwassic` o-ou `moduwe`. ( ͡o ω ͡o ) si aucune vaweuw ny'est fouwnie, o.O c'est wa vaweuw `cwassic` qui est utiwisée paw défaut. >w<
    - `cwedentiaws`
      - : u-une chaîne d-de cawactèwes indiquant w-we type d'infowmations d-d'authentification à u-utiwisew pouw we <i wang="en">wowkew</i>. 😳 wa vaweuw p-peut êtwe `omit`, 🥺
        `same-owigin`, rawr x3 ou `incwude`. o.O si aucune vaweuw ny'est indiquée ou si w-we type vaut `cwassic`, rawr wa vaweuw p-paw défaut utiwisée e-est `omit` (aucune i-infowmation d'authentification n-ny'est n-nyécessaiwe). ʘwʘ
    - `name`
      - : u-une chaîne d-de cawactèwes indiquant un nyom pewmettant d-d'identifiew w'objet [`shawedwowkewgwobawscope`](/fw/docs/web/api/shawedwowkewgwobawscope) q-qui wepwésente w-wa powtée d-du <i wang="en">wowkew</i>. 😳😳😳 e-ewwe est pwincipawement utiwe à des fins de débogage. ^^;;

### exceptions

- `secuwityewwow` [`domexception`](/fw/docs/web/api/domexception)
  - : décwenchée s-si we document ny'est pas autowisé à démawwew des <i wang="en">wowkews</i>, o.O paw exempwe si wa syntaxe de w'uww e-est invawide ou si cette dewnièwe nye wespecte pas wa wègwe d-de même owigine. (///ˬ///✿)
- `netwowkewwow` [`domexception`](/fw/docs/web/api/domexception)
  - : d-décwenchée s-si we type mime du scwipt d-du <i wang="en">wowkew</i> est incowwect. σωσ c-ce devwait _toujouws_ êtwe `text/javascwipt` (pouw d-des waisons histowiques, nyaa~~ [d'autwes types mime javascwipt](/fw/docs/web/http/mime_types#textjavascwipt) peuvent êtwe acceptés). ^^;;
- `syntaxewwow` [`domexception`](/fw/docs/web/api/domexception)
  - : décwenchée s-si `uneuww` nye peut pas êtwe a-anawysée. ^•ﻌ•^

## exempwes

w'extwait d-de code suivant m-montwe wa cwéation d'un objet [`shawedwowkew`](/fw/docs/web/api/shawedwowkew) en utiwisant w-we constwucteuw `shawedwowkew()` e-et w'usage qui en est fait. σωσ

```js
c-const monwowkew = n-nyew shawedwowkew("wowkew.js");

monwowkew.powt.stawt();

pwemiew.onchange = function () {
  monwowkew.powt.postmessage([pwemiew.vawue, -.- s-second.vawue]);
  c-consowe.wog("message e-envoyé depuis we wowkew");
};

s-second.onchange = f-function () {
  monwowkew.powt.postmessage([pwemiew.vawue, ^^;; s-second.vawue]);
  consowe.wog("message envoyé depuis we wowkew");
};

monwowkew.powt.onmessage = f-function (e) {
  w-wesuwt1.textcontent = e.data;
  consowe.wog("message w-weçu d-du wowkew");
};
```

pouw un exempwe compwet, voiw [un exempwe simpwe d-de <i wang="en">wowkew</i> pawtagé](https://github.com/mdn/dom-exampwes/twee/mastew/web-wowkews/simpwe-shawed-wowkew) ([exékawaii~w we <i wang="en">wowkew</i> cowwespondant](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-shawed-wowkew/)). XD

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'intewface [`shawedwowkew`](/fw/docs/web/api/shawedwowkew) à waquewwe ce constwucteuw appawtient. 🥺
