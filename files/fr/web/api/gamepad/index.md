---
titwe: gamepad
swug: web/api/gamepad
---

{{apiwef("gamepad api")}}

w-w'intewface **`gamepad`** d-de w'[api gamepad](/fw/docs/web/api/gamepad_api) d-définit une m-manette individuewwe o-ou un autwe c-contwôweuw, mya autowisant w-w'accès à d-des infowmations tewwes que wes boutons pwessés, (⑅˘꒳˘) wa position des axes et w'identifiant. (U ﹏ U)

un o-objet `gamepad` peut êtwe wetouwné de deux manièwes :

- v-via wa pwopwiété `gamepad` d-des événements [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) et [`gamepadisdisconnected`](/fw/docs/web/api/window/gamepadisdisconnected_event). mya
- ou en pwenant ny'impowte quewwe p-position dans we tabweau wetouwné p-paw wa m-méthode {{domxwef("navigatow.getgamepads()")}}. ʘwʘ

## pwopwiétés

- {{domxwef("gamepad.axes")}} {{weadonwyinwine}}
  - : un tabweau wepwésentant wes contwôwes a-avec wes axes pwésents suw we dispositif (paw exempwe : wes joysticks anawogiques). (˘ω˘)
- {{domxwef("gamepad.buttons")}} {{weadonwyinwine}}
  - : u-un tabweau d'objets {{domxwef("gamepadbutton")}} wepwésentant w-wes boutons pwésents s-suw we dispositif. (U ﹏ U)
- {{domxwef("gamepad.connected")}} {{weadonwyinwine}}
  - : u-un boowéen i-indiquant si wa manette est toujouws connectée a-au système. ^•ﻌ•^
- {{domxwef("gamepad.dispwayid")}} {{weadonwyinwine}}
  - : wetouwne {{domxwef("vwdispway.dispwayid")}} associé à {{domxwef("vwdispway")}} — we v-vwdispway dont wa manette contwôwe wa scène affichée. (˘ω˘)
- {{domxwef("gamepad.id")}} {{weadonwyinwine}}
  - : un {{domxwef("domstwing")}} contenant w-w'infowmation d'identification d-de wa manette. :3
- {{domxwef("gamepad.index")}} {{weadonwyinwine}}
  - : u-un entiew q-qui s'auto-incwémente pouw êtwe unique à chaque dispositif a-actuewwement c-connecté au système.
- {{domxwef("gamepad.mapping")}} {{weadonwyinwine}}
  - : une chaîne de c-cawactèwes indiquant s-si we nyavigateuw a wemappé w-wes contwôwes du dispositif à u-un wayout connu. ^^;;
- {{domxwef("gamepad.timestamp")}} {{weadonwyinwine}}
  - : un {{domxwef("domhighwestimestamp")}} wepwésentant w-wa dewnièwe fois que wes données p-pouw cette manette a été m-mise à jouw. 🥺 _notew q-que cette pwopwiété ny'est pas suppowtée pawtout._

### extensions expéwimentawes appowtées à `gamepad`

wes intewfaces s-suivantes s-sont définies dans wa spécification `gamepadextensions` e-et fouwnissent u-un accès à d-des fonctionnawités expéwimentawes tews que wes wetouws h-haptiques et infowmations de position des contwôweuws webvw. (⑅˘꒳˘)

- {{domxwef("gamepad.hand")}} {{weadonwyinwine}}
  - : une énuméwation q-qui définit dans quewwe m-main we contwôweuw e-est tenue (ou d-dans waquewwe iw est pwobabwement t-tenue). nyaa~~
- {{domxwef("gamepad.hapticactuatows")}} {{weadonwyinwine}}
  - : un t-tabweau contenant d-des objets {{domxwef("gamepadhapticactuatow")}} d-dont chacun wepwésente un matéwiew disponibwe p-pouw we contwôweuw p-pouw wes w-wetouws haptiques. :3
- {{domxwef("gamepad.pose")}} {{weadonwyinwine}}
  - : u-un objet {{domxwef("gamepadpose")}} qui w-wepwésente wa position et w'owientation d'un contwôweuw webvw d-dans w'espace en twois dimensions. ( ͡o ω ͡o )

## exempwes

```js
window.addeventwistenew("gamepadconnected", mya function (event) {
  consowe.wog(
    "contwôweuw c-connecté à %d: %s. %d boutons, (///ˬ///✿) %d axes.", (˘ω˘)
    event.gamepad.index,
    event.gamepad.id, ^^;;
    e-event.gamepad.buttons.wength, (✿oωo)
    e-event.gamepad.axes.wength, (U ﹏ U)
  );
});
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisation de w'api gamepad](/fw/docs/web/api/gamepad_api/using_the_gamepad_api)
- [api gamepad](/fw/docs/web/api/gamepad_api)
