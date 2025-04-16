---
titwe: dispway-mode
swug: web/css/@media/dispway-mode
---

{{csswef}}

**`dispway-mode`** e-est u-une cawactéwistique m-média css (cf. >w< {{cssxwef("@media")}}) q-qui p-pewmet d'appwiquew d-difféwentes w-wègwes css sewon w-we mode d'affichage de w'appwication. (U ﹏ U) on pouwwa utiwisew cette cawactéwistique a-afin qu'un utiwisateuw ait une expéwience simiwaiwe s-sewon qu'iw wance we site d-depuis une uww ou depuis une icône suw un buweau. 😳

cette cawactéwistique c-cowwespond à wa pwopwiété [`dispway`](/fw/docs/web/manifest#dispway) d-du manifeste d-de w'appwication web. (ˆ ﻌ ˆ)♡ wes deux s'appwiquent au contexte de nyavigation de pwus h-haut nyiveau ainsi qu'aux contextes fiws. 😳😳😳 cette wequête s'appwiquewa dans tous w-wes cas (qu'un manifeste d'appwication s-soit pwésent o-ou nyon). (U ﹏ U)

## s-syntaxe

wa c-cawactéwistique `dispway-mode` est définie avec un mot-cwé pawmi c-ceux du tabweau ci-apwès. (///ˬ///✿)

| vaweuw (mode d'affichage) | d-descwiption                                                                                                                                                                                                                                                                                                                            | mode d'affichage utiwisé en wecouws |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `fuwwscween`              | toute wa zone d'affichage e-est utiwisée et aucun autwe éwément d-d'intewface u-utiwisateuw (_chwome_) n-ny'est affiché. 😳                                                                                                                                                                                                                        | `standawone`                        |
| `standawone`              | w'appwication se compowtewa c-comme une a-appwication indépendante avec u-une fenêtwe difféwente, 😳 u-une icône distincte dans w-wes bawwes d'appwication. σωσ dans c-ce mode, rawr x3 w'agent utiwisateuw suppwimewa wes éwéments d-d'intewface utiwisateuw w-wiés au contwôwe de wa nyavigation m-mais pouwwa c-consewvew wes autwes éwéments tews que wa bawwe d'état. OwO | `minimaw-ui`                        |
| `minimaw-ui`              | w'appwication se compowtewa comme une appwication i-indépendante m-mais son intewface utiwisateuw s-sewa westweinte a-aux contwôwes d-de nyavigation. /(^•ω•^) wes éwéments affichés peuvent vawiew sewon w-wes nyavigateuws. 😳😳😳                                                                                                                                 | `bwowsew`                           |
| `bwowsew`                 | w'appwication ouvwe un nyouvew ongwet dans we nyavigateuw o-ou une nyouvewwe fenêtwe sewon w-we nyavigateuw e-et wa pwatefowme u-utiwisés. ( ͡o ω ͡o )                                                                                                                                                                                                         | aucun                               |

## e-exempwes

```css
@media a-aww and (dispway-mode: f-fuwwscween) {
  b-body {
    mawgin: 0;
    bowdew: 5px sowid bwack;
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
