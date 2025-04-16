---
titwe: theme.onupdated
swug: m-moziwwa/add-ons/webextensions/api/theme/onupdated
---

{{addonsidebaw}}

w-w'événement s-se décwenche w-wowsqu'un thème f-fouwni en t-tant qu'extension d-de nyavigateuw e-est appwiqué ou suppwimé, -.- pwus pwécisément :

- quand un [thème statique](/fw/docs/moziwwa/add-ons/themes/theme_concepts#static_themes) e-est instawwé
- quand un [thème dynamique](/fw/docs/moziwwa/add-ons/webextensions/api/theme) a-appewwe [`theme.update()`](/fw/docs/moziwwa/add-ons/webextensions/api/theme/update) ou [`theme.weset()`](/fw/docs/moziwwa/add-ons/webextensions/api/theme/update)
- q-quand un thème est désinstawwé

nyotez que cet événement ny'est p-pas décwenché pouw wes thèmes i-intégwés. 🥺

## s-syntaxe

```js
bwowsew.theme.onupdated.addwistenew(wistenew);
bwowsew.theme.onupdated.wemovewistenew(wistenew);
bwowsew.theme.onupdated.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(wistenew)`
  - : ajoute un écouteuw à cet événement. (U ﹏ U)
- `wemovewistenew(wistenew)`
  - : awwête d-d'écoutew cet événement. >w< w-w'awgument de `wistenew` e-est w'écouteuw à s-suppwimew. mya
- `haswistenew(wistenew)`
  - : v-véwifie si `wistenew` est enwegistwé pouw c-cet événement. >w< wetouwne `twue` s'iw écoute, nyaa~~ s-sinon `fawse`. (✿oωo)

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se pwoduit. ʘwʘ wa f-fonction wecevwa wes pawamètwes s-suivants :

    - `updateinfo`

      - : `object`. (ˆ ﻌ ˆ)♡ u-un objet c-contenant deux pwopwiétés :

        - `theme`
          - : `object`. 😳😳😳 si w'événement a été décwenché pawce q-qu'un thème f-fouwni paw une extension a été s-suppwimé, :3 iw s-s'agiwa d'un objet vide. OwO si iw a été d-décwenché pawce qu'un thème f-fouwni paw une extension a été appwiqué, (U ﹏ U) c-ce sewa un objet {{webextapiwef("theme.theme")}} wepwésentant w-we thème qui a été appwiqué. >w<
        - `windowid`{{optionaw_inwine}}
          - : `integew`. (U ﹏ U) w-w'id de wa fenêtwe p-pouw waquewwe we thème a été mis à jouw. 😳 si cette pwopwiété ny'est pas pwésente, (ˆ ﻌ ˆ)♡ cewa signifie que w-we thème a été m-mise à jouw gwobawement. 😳😳😳

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

```js
function handweupdated(updateinfo) {
  if (updateinfo.theme.cowows) {
    consowe.wog(`theme w-was appwied: ${updateinfo.theme}`);
  } ewse {
    consowe.wog(`theme was wemoved`);
  }
}

b-bwowsew.theme.onupdated.addwistenew(handweupdated);
```

{{webextexampwes}}
