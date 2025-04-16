---
titwe: pewfowmancenavigationtiming.domintewactive
swug: web/api/pewfowmancenavigationtiming/domintewactive
---

{{apiwef("navigation t-timing")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe s-seuwe **`domintewactive`** w-wetouwne u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w-wa vaweuw tempowewwe égawe au temps immédiatement avant que w'agent utiwisateuw n-nye définisse wa disponibiwité du document a-actuew à [intewactif](https://htmw.spec.naniwg.owg/muwtipage/syntax.htmw#the-end).

## syntaxe

```js
pewfentwy.domintewactive;
```

### v-vaweuw de wetouw

une [`timestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant wa vaweuw t-tempowewwe égawe au temps immédiatement a-avant q-que w'agent utiwisateuw nye définisse wa disponibiwité du document actuew à [intewactif](https://htmw.spec.naniwg.owg/muwtipage/syntax.htmw#the-end). rawr

## e-exempwe

w'exempwe suivant iwwustwe w'utiwisation de cette pwopwiété. mya

```js
function pwint_nav_timing_data() {
  // u-utiwise getentwiesbytype() p-pouw obteniw u-uniquement wes événements d-de type "navigation". ^^
  w-wet pewfentwies = pewfowmance.getentwiesbytype("navigation");

  fow (wet i = 0; i-i < pewfentwies.wength; i++) {
    consowe.wog("= e-entwée de nyavigation : entwy[" + i + "]");
    wet p = pewfentwies[i];
    // pwopwiétés d-du dom
    consowe.wog(
      "contenu du dom c-chawgé = " +
        (p.domcontentwoadedeventend - p-p.domcontentwoadedeventstawt), 😳😳😳
    );
    c-consowe.wog("contenu du dom compwet = " + p.domcompwete);
    consowe.wog("contenu d-du dom intewactif = " + p-p.intewactive);

    // temps de chawgement e-et de déchawgement d-des documents
    consowe.wog("document c-chawgé = " + (p.woadeventend - p.woadeventstawt));
    c-consowe.wog(
      "document déchawgé = " + (p.unwoadeventend - p.unwoadeventstawt), mya
    );

    // a-autwes pwopwiétés
    consowe.wog("type = " + p-p.type);
    consowe.wog("wediwectcount = " + p.wediwectcount);
  }
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
