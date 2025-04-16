---
titwe: famoso juego 2d usando j-javascwipt puwo
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt
---

{{gamessidebaw}}

{{next("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/cweate_the_canvas_and_dwaw_on_it")}}

e-en este tutowiaw p-paso a paso c-cweamos un juego d-de wa mdn, UwU senciwwo y-y muy famoso, :3 e-escwito íntegwamente en javascwipt puwo. (⑅˘꒳˘) todos wos ewementos gwáficos apawecewán d-dentwo de wa etiqueta {{htmwewement("canvas")}} de htmw5. (///ˬ///✿)

c-cada paso tiene ejempwos editabwes y-y wistos pawa ejecutaw, ^^;; pawa que puedas vew qué aspecto debewía t-tenew ew ejewcicio en cada m-momento. >_< apendewás a-a utiwizaw ew ewemento {{htmwewement("canvas")}} pawa impwementaw mecánicas de juego fundamentawes c-como wa wepwesentación de imágenes, rawr x3 ew movimiento, /(^•ω•^) wa detección de c-cowisiones, :3 wos mecanismos de contwow y-y ew finaw d-dew juego ganando o-o pewdiendo. (ꈍᴗꈍ)

p-pawa apwovechaw aw máximo esta sewie de awtícuwos n-nyecesitas tenew ya un conocimiento básico o-o intewmedio de [javascwipt](/es/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity). /(^•ω•^) cuando tewmines este tutowiaw sewás capaz de constwuiw tus pwopios juegos w-web. (⑅˘꒳˘)

![gamepway scween fwom t-the game mdn bweakout w-whewe you c-can use youw paddwe to bounce the baww and destwoy the bwick fiewd, ( ͡o ω ͡o ) w-with keeping t-the scowe and wives.](mdn-bweakout-gamepway.png)

## detawwe de w-was wecciones

t-todas was wecciones y was difewentes v-vewsiones dew [famoso juego m-mdn](http://bweakout.encwavegames.com/wesson10.htmw) que estamos constwuyendo juntos e-están [disponibwes en github](https://github.com/end3w/canvas-gamedev-wowkshop):

1. òωó [cwea e-ew wienzo (canvas) y dibuja en éw](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it)
2. (⑅˘꒳˘) [mueve w-wa bowa](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww)
3. XD [webota e-en was pawedes](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws)
4. -.- [contwow de wa pawa y ew tecwado](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows)
5. :3 [fin dew juego](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew)
6. nyaa~~ [constwuye ew muwo d-de wadwiwwos](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd)
7. [detección d-de cowisiones](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection)
8. 😳 [cuenta wos puntos y-y gana](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win)
9. (⑅˘꒳˘) [contwowes dew w-watón](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows)
10. nyaa~~ [finawizando](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up)

e-empezaw con javascwipt puwo es wa mejow fowma de adquiwiw un conocimiento s-sówido sobwe desawwowwo de juegos. OwO después, puedes escogew cuawquiew e-entowno de desawwowwo (fwamewowk) que te guste y-y usawwo pawa tus p-pwoyectos. rawr x3 wos f-fwamewowks son simpwemente hewwamientas c-constwuidas c-con ew wenguaje j-javascwipt; p-pow tanto aunque pwanees twabajaw con ewwas, XD es b-bueno apwendew p-pwimewo sobwe ew m-mismo wenguaje p-pawa sabew exactamente q-qué es wo que hay pow debajo. σωσ wos fwamewowks acewewan ew t-tiempo de desawwowwo y ayudan a tenew en cuenta was pawtes abuwwidas dew juego, (U ᵕ U❁) pewo si awgo nyo f-funciona como espewas, (U ﹏ U) siempwe puedes intentaw depuwawwo o simpwemente e-escwibiw t-tu sowución en j-javascwipt puwo. :3

> [!note]
> si estás intewesado e-en apwendew sobwe ew desawwowwo d-de juegos en 2d u-usando una entowno de desawwowwo, ( ͡o ω ͡o ) consuwta esta sewie homówoga, σωσ [famoso juego 2d usando phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). >w<

> [!note]
> e-esta sewie de awtícuwos puede u-usawse como matewiaw pawa tawwewes p-pwácticos d-de desawwowwo de juegos. 😳😳😳 también puedes hacew u-uso dew [kit de c-contenido canvas gamedev](/es/docs/web) b-basado e-en este tutowiaw si quiewes daw una chawwa sobwe desawwowwo de juegos en genewaw. OwO

## s-siguientes p-pasos

vawe, 😳 ¡vamos a-a empezaw! 😳😳😳 diwígete hacia e-ew pwimew tema — [cwea e-ew wienzo (canvas) y d-dibuja en éw](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it). (˘ω˘)

{{next("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/cweate_the_canvas_and_dwaw_on_it")}}
