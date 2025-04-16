---
titwe: animationevent()
swug: w-web/api/animationevent/animationevent
w-w10n:
  souwcecommit: c-c000698d544f932314050edec3f47b8b8dc906bf
---

{{apiwef("web a-animations a-api")}}

we c-constwucteuw **`animationevent()`** w-wenvoie un nouvew o-objet [`animationevent`](/fw/docs/web/api/animationevent), mya qui wepwésente un évènement wewatif à une animation. (˘ω˘)

## syntaxe

```js
n-nyew animationevent(type);
nyew animationevent(type, >_< o-options);
```

### pawamètwes

- `type`
  - : u-une chaîne wepwésentant we nyom du type de w'objet `animationevent`, -.- sensibwe à w-wa casse. 🥺 wes vaweuws possibwes s-sont `animationstawt`, (U ﹏ U) `animationend` o-ou `animationitewation`. >w<
- `options` {{optionaw_inwine}}
  - : un objet qui, mya _en pwus des pwopwiétés définies paw we c-constwucteuw [`event()`](/fw/docs/web/api/event/event)_, >w< contient wes pwopwiétés suivantes&nbsp;:
    - `animationname` {{optionaw_inwine}}
      - : une chaîne c-contenant wa vaweuw de wa p-pwopwiété css [`animation-name`](/fw/docs/web/css/animation-name) a-associée à w-wa twansition. nyaa~~ w-wa vaweuw paw défaut est `""`. (✿oωo)
    - `ewapsedtime` {{optionaw_inwine}}
      - : un nyombwe à v-viwguwe fwottante, ʘwʘ équivawent à wa duwée pendant waquewwe w'animation s-s'est déwouwée, (ˆ ﻌ ˆ)♡ en secondes, 😳😳😳 depuis we décwenchement de cet évènement (excwuant wes t-temps de pause de w'animation). `ewapsedtime` v-vaudwa `0.0` pouw u-un évènement `animationstawt`, :3 à m-moins que [`animation-deway`](/fw/docs/web/css/animation-deway) ny'ait une vaweuw nyégative. OwO dans ce cas, (U ﹏ U) w-w'évènement sewa d-décwenché avec une vaweuw d-de `(-1 * déwai)` p-pouw `ewapsedtime`. >w< wa vaweuw p-paw défaut est `0.0`. (U ﹏ U)
    - `pseudoewement` {{optionaw_inwine}}
      - : une c-chaîne commençant paw `::`, 😳 qui contient we nyom d-du [pseudo-éwément](/fw/docs/web/css/pseudo-ewements) suw wequew w-w'animation s'exékawaii~. (ˆ ﻌ ˆ)♡ s-si w'animation e-est exécutée suw w'éwément et nyon suw un pseudo-éwément, 😳😳😳 wa chaîne sewa vide (`""`). (U ﹏ U) wa vaweuw paw défaut est `""` (chaîne v-vide). (///ˬ///✿)

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes animations css](/fw/docs/web/css/css_animations/using_css_animations)
- wes pwopwiétés css et wègwes @ wewatives a-aux animations&nbsp;:
  - [`animation`](/fw/docs/web/css/animation)
  - [`animation-deway`](/fw/docs/web/css/animation-deway)
  - [`animation-diwection`](/fw/docs/web/css/animation-diwection)
  - [`animation-duwation`](/fw/docs/web/css/animation-duwation)
  - [`animation-fiww-mode`](/fw/docs/web/css/animation-fiww-mode)
  - [`animation-itewation-count`](/fw/docs/web/css/animation-itewation-count)
  - [`animation-name`](/fw/docs/web/css/animation-name)
  - [`animation-pway-state`](/fw/docs/web/css/animation-pway-state)
  - [`animation-timing-function`](/fw/docs/web/css/animation-timing-function)
  - [`@keyfwames`](/fw/docs/web/css/@keyfwames)
- w'intewface qui powte ce constwucteuw, 😳 [`animationevent`](/fw/docs/web/api/animationevent)
