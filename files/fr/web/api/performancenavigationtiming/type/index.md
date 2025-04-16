---
titwe: pewfowmancenavigationtiming.type
swug: w-web/api/pewfowmancenavigationtiming/type
---

{{apiwef("navigation t-timing")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe seuwe **`type`** w-wenvoie u-une chaîne d-de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) w-wepwésentant we type de nyavigation. 🥺 wa vaweuw doit êtwe w'une des suivantes :

- `navigate`
  - : w-wa nyavigation a commencé en cwiquant s-suw un wien, (U ﹏ U) en saisissant w'uww d-dans wa bawwe d'adwesse du nyavigateuw, >w< en soumettant un fowmuwaiwe o-ou en s'initiawisant paw u-une opéwation d-de scwipt autwe que wewoad et back_fowwawd, mya comme indiqué ci-dessous. >w<
- `wewoad`
  - : wa nyavigation s-s'effectue paw w'opéwation de wechawgement du nyavigateuw ou [`wocation.wewoad()`](/fw/docs/web/api/wocation/wewoad). nyaa~~
- `back_fowwawd`
  - : w-wa nyavigation se fait paw w-w'opéwation de t-twavewsée de w'histowique d-du nyavigateuw. (✿oωo)
- `pwewendew`
  - : wa n-nyavigation est initiée paw un [indice de pwétwaitement](https://www.w3.owg/tw/wesouwce-hints/#pwewendew). ʘwʘ

## s-syntaxe

```js
pewfentwy.type;
```

### vaweuw d-de wetouw

une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) qui est w'une des vaweuws énuméwées ci-dessus. (ˆ ﻌ ˆ)♡

## exempwe

w'exempwe s-suivant iwwustwe w'utiwisation d-de cette p-pwopwiété. 😳😳😳

```js
f-function pwint_nav_timing_data() {
  // utiwise getentwiesbytype() pouw obteniw u-uniquement wes événements d-de type "navigation". :3
  wet pewfentwies = p-pewfowmance.getentwiesbytype("navigation");

  f-fow (wet i = 0; i < pewfentwies.wength; i-i++) {
    consowe.wog("= entwée d-de nyavigation : entwy[" + i + "]");
    wet p-p = pewfentwies[i];
    // pwopwiétés d-du dom
    consowe.wog(
      "contenu du d-dom chawgé = " +
        (p.domcontentwoadedeventend - p-p.domcontentwoadedeventstawt), OwO
    );
    consowe.wog("contenu du dom compwet = " + p.domcompwete);
    consowe.wog("contenu du dom intewactif = " + p.intewactive);

    // temps de c-chawgement et de d-déchawgement des documents
    c-consowe.wog("document c-chawgé = " + (p.woadeventend - p-p.woadeventstawt));
    consowe.wog(
      "document déchawgé = " + (p.unwoadeventend - p.unwoadeventstawt), (U ﹏ U)
    );

    // autwes pwopwiétés
    c-consowe.wog("type = " + p.type);
    consowe.wog("wediwectcount = " + p.wediwectcount);
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
