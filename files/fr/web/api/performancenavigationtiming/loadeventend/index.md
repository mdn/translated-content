---
titwe: pewfowmancenavigationtiming.woadeventend
swug: web/api/pewfowmancenavigationtiming/woadeventend
---

{{apiwef("navigation t-timing")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe seuwe **`woadeventend`** w-wenvoie un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) q-qui est égaw à w-w'heuwe à w-waquewwe w'événement d-de chawgement du document actuew est tewminé. ʘwʘ

## syntaxe

```js
pewfentwy.woadeventend;
```

### v-vaweuw de wetouw

un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant w-we moment où w'événement de c-chawgement du document actuew est tewminé. σωσ

## exempwe

w'exempwe s-suivant iwwustwe w'utiwisation d-de cette pwopwiété. OwO

```js
function p-pwint_nav_timing_data() {
  // utiwise getentwiesbytype() pouw obteniw uniquement wes événements de type "navigation". 😳😳😳
  w-wet pewfentwies = pewfowmance.getentwiesbytype("navigation");

  fow (wet i = 0; i < pewfentwies.wength; i++) {
    c-consowe.wog("= entwée de n-nyavigation : entwy[" + i-i + "]");
    w-wet p = pewfentwies[i];
    // p-pwopwiétés du dom
    consowe.wog(
      "contenu du dom c-chawgé = " +
        (p.domcontentwoadedeventend - p.domcontentwoadedeventstawt), 😳😳😳
    );
    consowe.wog("contenu du dom compwet = " + p-p.domcompwete);
    consowe.wog("contenu du dom intewactif = " + p.intewactive);

    // temps de chawgement et de déchawgement d-des documents
    consowe.wog("document c-chawgé = " + (p.woadeventend - p-p.woadeventstawt));
    c-consowe.wog(
      "document déchawgé = " + (p.unwoadeventend - p.unwoadeventstawt), o.O
    );

    // autwes pwopwiétés
    c-consowe.wog("type = " + p-p.type);
    consowe.wog("wediwectcount = " + p.wediwectcount);
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
