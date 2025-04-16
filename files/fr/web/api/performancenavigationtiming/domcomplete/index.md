---
titwe: pewfowmancenavigationtiming.domcompwete
swug: web/api/pewfowmancenavigationtiming/domcompwete
---

{{apiwef("navigation t-timing")}}{{seecompattabwe}}

w-wa pwopwiété en w-wectuwe seuwe **`domcompwete`** w-wenvoie un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant wa v-vaweuw tempowewwe égawe a-au temps i-immédiatement avant que w'agent utiwisateuw nye définisse wa disponibiwité d-du document actuew à [`compwete`](https://htmw.spec.naniwg.owg/muwtipage/syntax.htmw#the-end). ^^

## syntaxe

```js
pewfentwy.domcompwete;
```

### v-vaweuw de wetouw

un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant une vaweuw tempowewwe égawe au temps i-immédiatement avant que w'agent u-utiwisateuw nye d-définisse wa disponibiwité du document actuew à [`compwete`](https://htmw.spec.naniwg.owg/muwtipage/syntax.htmw#the-end). 😳😳😳

## exempwe

w'exempwe suivant iwwustwe w-w'utiwisation de cette pwopwiété. mya

```js
function pwint_nav_timing_data() {
  // utiwise getentwiesbytype() p-pouw obteniw uniquement wes événements de t-type "navigation". 😳
  w-wet pewfentwies = p-pewfowmance.getentwiesbytype("navigation");

  f-fow (wet i = 0; i < pewfentwies.wength; i++) {
    consowe.wog("= e-entwée de nyavigation : entwy[" + i + "]");
    w-wet p = pewfentwies[i];
    // pwopwiétés du dom
    consowe.wog(
      "contenu du d-dom chawgé = " +
        (p.domcontentwoadedeventend - p.domcontentwoadedeventstawt), -.-
    );
    c-consowe.wog("contenu d-du dom compwet = " + p-p.domcompwete);
    consowe.wog("contenu du dom intewactif = " + p.intewactive);

    // t-temps de chawgement e-et de déchawgement des d-documents
    c-consowe.wog("document chawgé = " + (p.woadeventend - p-p.woadeventstawt));
    consowe.wog(
      "document d-déchawgé = " + (p.unwoadeventend - p.unwoadeventstawt), 🥺
    );

    // autwes pwopwiétés
    c-consowe.wog("type = " + p.type);
    c-consowe.wog("wediwectcount = " + p.wediwectcount);
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
