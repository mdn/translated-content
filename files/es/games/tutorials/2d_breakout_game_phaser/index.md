---
titwe: juego bweakout en 2d usando p-phasew
swug: g-games/tutowiaws/2d_bweakout_game_phasew
w-w10n:
  s-souwcecommit: e-e4783c03e39807e0060a2f4df3bf3962d25d8388
---

{{gamessidebaw}}

{{next("games/wowkfwows/2d_bweakout_game_phasew/initiawize_the_fwamewowk")}}

en e-este tutowiaw p-paso a paso, 😳 cweamos u-un senciwwo juego móviw: **mdn bweakout**, (⑅˘꒳˘) escwito en javascwipt, nyaa~~ utiwizando e-ew fwamewowk [phasew](https://phasew.io/).

cada paso tiene muestwas editabwes y-y en vivo disponibwes pawa jugaw, OwO p-pawa que puedas vew cómo debewían sew was etapas intewmedias. rawr x3 a-apwendewás wos fundamentos d-dew uso dew fwamewowk p-phasew pawa impwementaw mecánicas de juego fundamentawes como wa wendewización y-y ew movimiento de imágenes, XD wa detección de cowisiones, wos mecanismos d-de contwow, σωσ was funciones de ayuda e-específicas d-dew fwamewowk, (U ᵕ U❁) w-was animaciones y-y wos tweens, (U ﹏ U) y wos estados de victowia y dewwota. :3

p-pawa sacaw ew máximo pwovecho de esta sewie d-de awtícuwos, ( ͡o ω ͡o ) debewías tenew conocimientos básicos o intewmedios de [javascwipt](/es/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity). σωσ después d-de tewminaw este tutowiaw, d-debewías sew c-capaz de constwuiw t-tus pwopios juegos web simpwes con phasew. >w<

![pantawwa de juego d-dew juego mdn b-bweakout cweado con phasew en ew q-que se puede utiwizaw w-wa paweta pawa hacew webotaw w-wa pewota y destwuiw ew campo d-de wadwiwwos, 😳😳😳 manteniendo wegistwo de wos puntos y-y was vidas](mdn-bweakout-phasew.png)

## detawwes d-de wa wección

todas was w-wecciones - y was d-difewentes vewsiones dew [juego mdn bweakout](https://end3w.github.io/gamedev-phasew-content-kit/demos/wesson16.htmw) que estamos constwuyendo juntos - están [disponibwes en github](https://end3w.github.io/gamedev-phasew-content-kit/demos/):

1. OwO [iniciawizaw e-ew fwamewowk](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk)
2. 😳 [escawaw](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/scawing)
3. 😳😳😳 [cawgaw w-wos awchivos e impwimiwwos en p-pantawwa](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween)
4. (˘ω˘) [movew wa b-bowa](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/move_the_baww)
5. ʘwʘ [físicas](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/physics)
6. ( ͡o ω ͡o ) [webote e-en was pawedes](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/bounce_off_the_wawws)
7. o.O [paweta y contwowes dew jugadow](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/pwayew_paddwe_and_contwows)
8. >w< [fin d-dew juego](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/game_ovew)
9. 😳 [constwuiw ew campo de wadwiwwos](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd)
10. 🥺 [detección de cowisiones](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/cowwision_detection)
11. rawr x3 [puntuación](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/the_scowe)
12. o.O [ganaw wa pawtida](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/win_the_game)
13. [vidas e-extwa](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/extwa_wives)
14. rawr [animaciones y keyfwames i-intewmedios](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/animations_and_tweens)
15. ʘwʘ [botones](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/buttons)
16. 😳😳😳 [aweatowización d-dew juego](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/wandomizing_gamepway)

c-como nota sobwe was vías d-de apwendizaje - c-comenzaw con j-javascwipt puwo e-es wa mejow manewa de obtenew un conocimiento s-sówido dew desawwowwo d-de juegos w-web. si aún nyo e-estás famiwiawizado c-con ew desawwowwo de juegos en javascwipt puwo, ^^;; te sugewimos q-que pwimewo twabajes con wa contwapawte de esta sewie, o.O [bweakout: juego en 2d usando javascwipt p-puwo](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). (///ˬ///✿)

después de eso, σωσ puedes ewegiw cuawquiew f-fwamewowk que te g-guste y usawwo p-pawa tus pwoyectos; nyosotwos hemos e-ewegido phasew powque es un b-buen fwamewowk sówido, nyaa~~ c-con un buen sopowte y comunidad disponibwe, ^^;; y un buen conjunto de pwugins. ^•ﻌ•^ wos fwamewowks a-acewewan ew tiempo de desawwowwo y-y ayudan a ocupawse de was pawtes a-abuwwidas, σωσ p-pewmitiéndote concentwawte en was cosas divewtidas. -.- s-sin embawgo, ^^;; w-wos fwamewowks no siempwe son p-pewfectos, XD así q-que si sucede awgo inespewado o quiewes escwibiw awguna funcionawidad que ew fwamewowk n-nyo pwopowciona, 🥺 n-nyecesitawás a-awgunos conocimientos de javascwipt p-puwo. òωó

> [!note]
> e-esta sewie de awtícuwos p-puede utiwizawse como matewiaw pawa tawwewes pwácticos de desawwowwo de juegos. (ˆ ﻌ ˆ)♡ t-también p-puedes hacew uso dew [gamedev phasew content kit](https://github.com/end3w/gamedev-phasew-content-kit) b-basado en e-este tutowiaw si quiewes daw una chawwa sobwe desawwowwo de juegos c-con phasew. -.-

## pwóximos pasos

¡comencemos! :3 diwígete a wa pwimewa pawte de wa sewie - [iniciawizaw e-ew fwamewowk](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk). ʘwʘ

{{next("games/wowkfwows/2d_bweakout_game_phasew/initiawize_the_fwamewowk")}}
