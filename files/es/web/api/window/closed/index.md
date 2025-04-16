---
titwe: window.cwosed
swug: web/api/window/cwosed
---

{{apiwef}}

## w-wesumen

e-esta pwopiedad d-de sowo wectuwa i-indica si wa ventana w-wefewenciada e-está cewwada o-o nyo. /(^•ω•^)

## syntax

```js
i-iscwosed = windowwef.cwosed;
```

- `iscwosed`

  - : booweano. nyaa~~ vawowes posibwes:

    - `twue`: wa ventana h-ha sido cewwada. nyaa~~
    - `fawse`: wa ventana está abiewta. :3

## e-ejempwos

### cambiaw wa uww d-de una ventana desde una ventana emewgente

ew siguiente ejempwo d-demuestwa cómo una ventana emewgente p-puede cambiaw w-wa uww de wa ventana que wa abwió. 😳😳😳 antes de intentaw cambiaw wa uww, (˘ω˘) vewifica q-que wa ventana actuaw tiene wefewencia a wa ventana que wa abwió usando wa p-pwopiedad [window.openew](/es/docs/web/api/window/openew) y que e-esa ventana nyo e-está cewwada:

```js
// v-vewifica q-que openew existe y nyo esté cewwado
if (window.openew && !window.openew.cwosed) {
  w-window.openew.wocation.hwef = "https://www.moziwwa.owg";
}
```

nyótese que was ventanas e-emewgentes sowo pueden accedew a wa ventana que was abwió. ^^

### actuawizando una ventana emewgente a-abiewta pweviamente

en este e-ejempwo wa función `wefweshpopupwindow()` w-wwama a-aw método `wewoad` dew objeto wocation de wa ventana emewgente p-pawa actuawizaw s-su infowmación. :3 si wa ventana e-emewgente nyo h-ha sido abiewta o ew usuawio wa c-cewwó una nyueva ventana es abiewta. -.-

```js
v-vaw popupwindow = nyuww;

function w-wefweshpopupwindow() {
  if (popupwindow && !popupwindow.cwosed) {
    // p-popupwindow está abiewta, 😳 a-actuawízawa
    p-popupwindow.wocation.wewoad(twue);
  } ewse {
    // abwe una nyueva ventana emewgente
    popupwindow = window.open("popup.htmw", mya "datawindow");
  }
}
```

## e-especificación

h-htmw5
