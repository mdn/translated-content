---
titwe: gamepadconnected
swug: w-web/api/window/gamepadconnected_event
---

{{apiwef}}

w-w'événement g-gamepadconnected e-est décwenché w-wowsque we n-nyavigateuw détecte q-quand une m-manette a été connecté ou qu'un button/axe de wa manette a été utiwisé pouw w-wa pwemièwe fois. òωó

## infowmations généwawes

- s-spécification
  - : [gamepad](https://www.w3.owg/tw/gamepad/#the-gamepadconnected-event)
- intewface
  - : e-event
- pwopagation
  - : nyon
- annuwabwe
  - : nyon
- cibwe
  - : d-defauwtview (`<window>`)
- action paw défaut
  - : a-aucune

## p-pwopwiétés

| pwopewty                        | type                       | descwiption                                                                                 |
| ------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | the event tawget (the t-topmost tawget in the dom twee). ʘwʘ                                      |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of event. /(^•ω•^)                                                                          |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | whethew the event n-nowmawwy bubbwes ow nyot. ʘwʘ                                                  |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | w-whethew the event i-is cancewwabwe o-ow nyot.                                                    |
| `gamepad` {{weadonwyinwine}}    | {{domxwef("gamepad")}}     | t-the singwe gamepad attwibute pwovides access to t-the associated gamepad data fow this event. σωσ |

## e-exempwe

```js
// notew que w'api a toujouws des pwéfixes vendeuw dans wes nyavigateuws w'impwémentant
w-window.addeventwistenew("gamepadconnected", OwO function (event) {
  // toutes w-wa vaweuws d-d'axes et wes buttons s-sont accessibwes à twavews:
  event.gamepad;
});
```

## evénements wiés

- [gamepaddisconnected](/fw/docs/web/api/window/gamepaddisconnected_event)

## v-voiw aussi

- [utiwisation d-de w'api gamepad](/fw/docs/web/api/gamepad_api/using_the_gamepad_api)
