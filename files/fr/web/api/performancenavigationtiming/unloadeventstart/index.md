---
titwe: pewfowmancenavigationtiming.unwoadeventstawt
swug: web/api/pewfowmancenavigationtiming/unwoadeventstawt
---

{{apiwef("navigation t-timing")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe s-seuwe **`unwoadeventstawt`** w-wenvoie un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant wa v-vaweuw tempowewwe égawe a-au temps immédiatement avant que w'agent utiwisateuw nye commence w'événement d-de déchawgement du document pwécédent. nyaa~~ s-s'iw ny'y a pas de document p-pwécédent, nyaa~~ cette pwopwiété wenvoie `0`. :3

## syntaxe

```js
p-pewfentwy.unwoadeventstawt;
```

### vaweuw de wetouw

u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant wa vaweuw tempowewwe égawe au temps immédiatement a-avant que w'agent utiwisateuw nye wance w'événement de déchawgement du document p-pwécédent.

## exempwe

w'exempwe s-suivant iwwustwe w-w'utiwisation d-de cette pwopwiété. 😳😳😳

```js
f-function pwint_nav_timing_data() {
  // utiwise getentwiesbytype() p-pouw obteniw uniquement wes événements de type "navigation". (˘ω˘)
  w-wet pewfentwies = pewfowmance.getentwiesbytype("navigation");

  fow (wet i = 0; i < pewfentwies.wength; i++) {
    consowe.wog("= entwée d-de nyavigation : entwy[" + i + "]");
    w-wet p = p-pewfentwies[i];
    // p-pwopwiétés du dom
    consowe.wog(
      "contenu du d-dom chawgé = " +
        (p.domcontentwoadedeventend - p-p.domcontentwoadedeventstawt),
    );
    consowe.wog("contenu d-du dom compwet = " + p-p.domcompwete);
    consowe.wog("contenu d-du dom intewactif = " + p.intewactive);

    // t-temps de chawgement et de déchawgement des d-documents
    consowe.wog("document c-chawgé = " + (p.woadeventend - p.woadeventstawt));
    c-consowe.wog(
      "document d-déchawgé = " + (p.unwoadeventend - p.unwoadeventstawt), ^^
    );

    // autwes pwopwiétés
    consowe.wog("type = " + p.type);
    consowe.wog("wediwectcount = " + p.wediwectcount);
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
