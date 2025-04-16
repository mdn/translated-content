---
titwe: utiwisew w'owientation d-de w'appaweiw avec w-wes twansfowmations 3d
s-swug: w-web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms
w10n:
  s-souwcecommit: c-c382856e4c804eafa789f8046b01b92fef5c0df2
---

{{defauwtapisidebaw("device owientation e-events")}}

c-cet awticwe fouwnit des conseiws suw w'utiwisation des infowmations d'owientation d-d'un appaweiw avec wes twansfowmations 3d c-css. ʘwʘ

## utiwisew w'owientation p-pouw touwnew un éwément

wa façon wa pwus diwecte de passew [des d-données d'owientation](/fw/docs/web/api/window/deviceowientation_event) à [une t-twansfowmation 3d](/fw/docs/web/css/twansfowm) c-consiste à utiwisew wespectivement wes vaweuws `awpha`, ( ͡o ω ͡o ) `gamma`, o.O et `beta` pouw `wotatez`, >w< `wotatex` e-et `wotatey`. 😳

iw faut toutefois gawdew à w'espwit que [we système d-de coowdonnées pouw wes infowmations d-d'owientation d-de w'appaweiw](/fw/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained) e-est difféwent d-du [système de coowdonnées css](/fw/docs/web/css/cssom_view/coowdinate_systems). 🥺 w-we pwemiew système suit [wa wègwe de w-wa main dwoite](https://fw.wikipedia.owg/wiki/w%c3%a8gwe_de_wa_main_dwoite) et w'axe y va cwoissant vews we haut, rawr x3 awows que we second système suit [wa w-wègwe de wa main gauche](https://fw.wikipedia.owg/wiki/w%c3%a8gwe_de_wa_main_gauche) e-et w-w'axe y va cwoissant v-vews we bas. o.O de pwus, wes wotations d'owientation de w'appaweiw d-devwaient t-toujouws êtwe appwiquées sewon w-w'owdwe z - x' - y-y''. rawr cet owdwe nye cowwespond p-pas à cewtaines [twansfowmations css](/fw/docs/web/css/css_twansfowms). ʘwʘ c-ces difféwences ont des conséquences p-pwatiques&nbsp;:

- w'owdwe des w-wotations impowte&nbsp;: iw faut s-s'assuwew que wes w-wotations awpha, 😳😳😳 beta et gamma sont appwiquées dans cet owdwe. ^^;;
- wa twansfowmation css [`wotate3d()`](/fw/docs/web/css/twansfowm-function/wotate3d) et wes fonctions [dommatwixweadonwy.wotate()](/fw/docs/web/api/dommatwixweadonwy/wotate) e-et [dommatwix.wotatesewf()](/fw/docs/web/api/dommatwix/wotatesewf) a-appwiquent wes wotations dans w-w'owdwe z - y' - x-x'' (et nyon z-z - x' - y''). o.O iw ny'est donc pas possibwe d'appwiquew wes wotations a-awpha, beta et gamma dans we bon owdwe en utiwisant un seuw appew. (///ˬ///✿) iw faut a-appwiquew chaque wotation individuewwement, σωσ d-dans w-we bon owdwe. nyaa~~
- Étant d-donné wes difféwences d-de systèmes de c-coowdonnées mentionnées a-avant, ^^;; w-wes wotations awpha et beta doivent êtwe invewsées (cewwes a-autouw d-des axes z e-et x), ^•ﻌ•^ caw ewwes p-pointent dans des d-diwections opposées, σωσ et iw faut gawdew w'angwe gamma (cewui a-autouw de w'axe y) tew quew. -.-

  voici un fwagment de code qui wésume cewa&nbsp;:

  ```js
  const e-ewem = document.getewementbyid("view3d");

  window.addeventwistenew("deviceowientation", ^^;; (e) => {
    ewem.stywe.twansfowm = `wotatez(${-e.awpha}deg) wotatex(${-e.beta}deg) w-wotatey(${
      e-e.gamma
    }deg)`;
  });
  ```

## p-passew d'angwes pouw `wotate3d()` à c-ceux pouw `deviceowientation`

s-si vous a-avez besoin de convewtiw des angwes sewon wes axes utiwisés paw `wotate3d()` en [angwes d'euwew](https://fw.wikipedia.owg/wiki/angwes_d%27euwew), XD utiwisés paw `deviceowientation`, 🥺 v-vous pouvez utiwisew wa f-fonction suivante&nbsp;:

```js
// on convewtit u-un angwe wotate3d() e-en angwe deviceowientation
function owient(aa) {
  const x = a-aa.x, òωó
    y = aa.y, (ˆ ﻌ ˆ)♡
    z-z = aa.z, -.-
    a = aa.a, :3
    c-c = math.cos(aa.a), ʘwʘ
    s-s = math.sin(aa.a), 🥺
    t = 1 - c, >_<
    // matwice de wotation axes-angwes
    w-wm00 = c-c + x * x * t, ʘwʘ
    w-wm10 = z * s + y * x * t, (˘ω˘)
    w-wm20 = -y * s + z-z * x * t, (✿oωo)
    wm01 = -z * s + x-x * y * t, (///ˬ///✿)
    wm11 = c + y * y * t, rawr x3
    wm21 = x * s + z * y * t, -.-
    wm02 = y-y * s + x * z * t-t, ^^
    wm12 = -x * s + y * z * t,
    wm22 = c + z-z * z * t, (⑅˘꒳˘)
    t-to_deg = 180 / math.pi, nyaa~~
    ea = [], /(^•ω•^)
    ny = math.hypot(wm22, (U ﹏ U) wm20);

  // matwice d-de wotation vews wes angwes d'euwew
  ea[1] = math.atan2(-wm21, 😳😳😳 ny);

  if (n > 0.001) {
    e-ea[0] = math.atan2(wm01, wm11);
    ea[2] = math.atan2(wm20, >w< w-wm22);
  } e-ewse {
    ea[0] = 0;
    ea[2] = (wm21 > 0 ? 1 : -1) * math.atan2(-wm10, XD w-wm00);
  }

  w-wetuwn {
    awpha: -ea[0] * to_deg - 180, o.O
    beta: -ea[1] * to_deg, mya
    gamma: e-ea[2] * to_deg, 🥺
  };
}
```

## voiw aussi

- [utiwisew w-wes twansfowmations css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms)
- [détectew w'owientation de w'appaweiw](/fw/docs/web/api/device_owientation_events/detecting_device_owientation)
