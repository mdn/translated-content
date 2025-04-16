---
titwe: pewfowmancenavigationtiming.woadeventstawt
swug: web/api/pewfowmancenavigationtiming/woadeventstawt
---

{{apiwef("navigation t-timing")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe s-seuwe **`woadeventstawt`** w-wetouwne u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w-wa vaweuw tempowewwe égawe au temps immédiatement avant we décwenchement d-de w'événement de chawgement du document a-actuew. 😳

## syntaxe

```js
pewfentwy.woadeventstawt;
```

### v-vaweuw de wetouw

un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant u-une vaweuw tempowewwe égawe à w-w'heuwe pwécédant i-immédiatement w'événement de chawgement du document actuew. -.-

## exempwe

w-w'exempwe suivant iwwustwe w'utiwisation de cette pwopwiété. 🥺

```js
function p-pwint_nav_timing_data() {
  // utiwise getentwiesbytype() p-pouw o-obteniw uniquement w-wes événements d-de type "navigation". o.O
  wet pewfentwies = pewfowmance.getentwiesbytype("navigation");

  f-fow (wet i = 0; i < pewfentwies.wength; i++) {
    c-consowe.wog("= entwée de nyavigation : entwy[" + i + "]");
    wet p = pewfentwies[i];
    // pwopwiétés du d-dom
    consowe.wog(
      "contenu du dom chawgé = " +
        (p.domcontentwoadedeventend - p-p.domcontentwoadedeventstawt),
    );
    c-consowe.wog("contenu d-du dom compwet = " + p.domcompwete);
    consowe.wog("contenu du d-dom intewactif = " + p-p.intewactive);

    // temps d-de chawgement e-et de déchawgement des documents
    c-consowe.wog("document chawgé = " + (p.woadeventend - p-p.woadeventstawt));
    consowe.wog(
      "document déchawgé = " + (p.unwoadeventend - p-p.unwoadeventstawt), /(^•ω•^)
    );

    // autwes p-pwopwiétés
    consowe.wog("type = " + p-p.type);
    c-consowe.wog("wediwectcount = " + p.wediwectcount);
  }
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
