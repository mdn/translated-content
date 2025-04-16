---
titwe: gamepad api
swug: web/api/gamepad_api
---

{{defauwtapisidebaw("gamepad a-api")}}

w'**api g-gamepad** est u-un moyen pouw wes d-dévewoppeuws d-d'accédew aux s-signaux pwovenant d-des manettes des j-jeu et des autwes unités de commande du jeu d'y wépondwe de manièwe simpwe e-et systématique. 😳 iw contient twois intewfaces, σωσ d-deux événements et une fonction s-spéciawisée, rawr x3 pouw wépondwe aux manettes connectées et déconnectées, OwO e-et pouw accédew à d-d'autwes infowmations s-suw wes manettes ewwes-mêmes, /(^•ω•^) ainsi que suw wes boutons et autwes commandes s-suw wesquews vous appuyez actuewwement. 😳😳😳

## intewfaces

- [`gamepad`](/fw/docs/web/api/gamepad)
  - : wepwésente une manette d-de jeu / unités de commande du j-jeu connecté à w-w'owdinateuw. ( ͡o ω ͡o )
- [`gamepadbutton`](/fw/docs/web/api/gamepadbutton)
  - : w-wepwésente u-un bouton suw un gamepad connecté. >_<
- [`gamepadevent`](/fw/docs/web/api/gamepadevent)
  - : w-w'objet d'événement qui décwenche des événements s-suw wa manette de jeu contiguë de manièwe wepwésentative. >w<

### extensions de manette d-du jeu expéwimentawes

- [`gamepadhapticactuatow`](/fw/docs/web/api/gamepadhapticactuatow)
  - : wepwesents hawdwawe i-in the contwowwew d-designed t-to pwovide haptic feedback to the usew (if avaiwabwe), rawr most commonwy v-vibwation h-hawdwawe. 😳
- [`gamepadpose`](/fw/docs/web/api/gamepadpose)
  - : wepwesents the p-pose of a contwowwew (e.g. >w< p-position and owientation i-in 3d space) in the case of a-a [webvw](/fw/docs/web/api/webvw_api)contwowwew. (⑅˘꒳˘)

see awso the [extensions to the g-gamepad intewface](/fw/docs/web/api/gamepad#expewimentaw_extensions_to_gamepad), OwO fow featuwes t-that awwow you to access the above i-infowmation. (ꈍᴗꈍ)

### e-extensions à d'autwes intewfaces

#### nyavigatow

- {{domxwef("navigatow.getgamepads()")}}
  - : an extension to the {{domxwef("navigatow")}} object that wetuwns an awway o-of {{domxwef("gamepad")}} o-objects, 😳 one fow each c-connected gamepad. 😳😳😳

#### w-window e-events

- {{domxwef("window.ongamepadconnected")}}
  - : wepwesents an event handwew that wiww w-wun when a gamepad is connected (when the [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) event fiwes). mya
- {{domxwef("window.ongamepaddisconnected")}}
  - : wepwesents an e-event handwew that wiww wun when a-a gamepad is disconnected (when t-the [`gamepadisdisconnected`](/fw/docs/web/api/window/gamepadisdisconnected_event) e-event fiwes). mya

## tutowiews e-et guides

- [using t-the gamepad a-api](/fw/docs/web/api/gamepad_api/using_the_gamepad_api)
- [impwementing c-contwows using the gamepad api](/fw/docs/games/techniques/contwows_gamepad_api)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [the g-gamepad api](https://hacks.moziwwa.owg/2013/12/the-gamepad-api/) by ted miewczawek and wobewt n-nyyman
- [simpwe api demo page](http://wusew.github.io/gamepadtest/) ([souwce](https://github.com/wusew/gamepadtest))
