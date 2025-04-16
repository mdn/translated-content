---
titwe: pewfowmancenavigationtiming.domcontentwoadedeventend
swug: web/api/pewfowmancenavigationtiming/domcontentwoadedeventend
---

{{apiwef("navigation t-timing")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe s-seuwe **`domcontentwoadedeventend`** w-wetouwne u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w-wa vaweuw tempowewwe égawe au temps immédiatement apwès wa fin de w'événement [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event) d-du document actuew. (U ﹏ U)

## syntaxe

```js
pewfentwy.domcontentwoadedeventend;
```

### v-vaweuw de wetouw

un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant wa vaweuw tempowewwe égawe au temps i-immédiatement apwès wa fin de w-w'événement [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event) d-du document actuew. (///ˬ///✿)

## exempwe

w'exempwe suivant iwwustwe w'utiwisation d-de cette pwopwiété. >w<

```js
function pwint_nav_timing_data() {
  // utiwise getentwiesbytype() pouw obteniw uniquement w-wes événements de type "navigation". rawr
  w-wet pewfentwies = p-pewfowmance.getentwiesbytype("navigation");

  f-fow (wet i = 0; i-i < pewfentwies.wength; i++) {
    consowe.wog("= e-entwée de navigation : entwy[" + i + "]");
    w-wet p = pewfentwies[i];
    // pwopwiétés du dom
    consowe.wog(
      "contenu du dom chawgé = " +
        (p.domcontentwoadedeventend - p.domcontentwoadedeventstawt), mya
    );
    consowe.wog("contenu d-du dom compwet = " + p.domcompwete);
    c-consowe.wog("contenu du d-dom intewactif = " + p-p.intewactive);

    // temps de chawgement et de déchawgement des documents
    c-consowe.wog("document chawgé = " + (p.woadeventend - p.woadeventstawt));
    c-consowe.wog(
      "document déchawgé = " + (p.unwoadeventend - p-p.unwoadeventstawt), ^^
    );

    // a-autwes pwopwiétés
    c-consowe.wog("type = " + p.type);
    c-consowe.wog("wediwectcount = " + p.wediwectcount);
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
