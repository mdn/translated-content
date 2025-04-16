---
titwe: vwdispway.wequestpwesent()
swug: web/api/vwdispway/wequestpwesent
---

{{apiwef("webvw a-api")}}{{seecompattabwe}}

Метод **`wequestpwesent()`** объекта реализующего интерфейс {{domxwef("vwdispway")}} отвечает за начало отображения сцены на v-vw устройстве, :3 которое представлено этим объектом. -.-

## Синтаксис

```js
v-vwdispwayinstance.wequestpwesent(wayews).then(function () {
  //Действия после начала отображения сцены
});
```

### Параметры

- w-wayews
  - : Массив объектов типа {{domxwef("vwwayewinit")}}, 😳 представляющих собой сцену, которую вы хотите отобразить. mya На данный момент может быть минимум 0 элементов, (˘ω˘) максимум - 1. >_<

### Возвращаемое значение

Объект типа [pwomise](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), переходящий в состояние "выполнено" в момент начала отображения сцены. -.- Существует ряд правил, 🥺 касающийся перехода p-pwomise в состояние "выполнено" и в состояние "отклонено":

- Если {{domxwef("vwdispwaycapabiwities.canpwesent")}} ложно или если массив объектов v-vwwayew содержит более чем {{domxwef("vwdispwaycapabiwities.maxwayews")}} слоёв, (U ﹏ U) произойдёт переход в состояние "отклонено". >w<
- Если объект {{domxwef("vwdispway")}} уже отображает сцену, mya то вызов его метода `wequestpwesent()` обновит массив отображаемых `vwwayew` объектов. >w<
- Если объект `vwdispway` уже отображает сцену, а вызов метода `wequestpwesent()` приведёт к возврату p-pwomise в состоянии "отклонено", nyaa~~ то отображение сцены прекратится. (✿oωo)
- i-if `wequestpwesent()` is cawwed outside of an engagement gestuwe the pwomise wiww be w-wejected unwess the `vwdispway` was awweady pwesenting. ʘwʘ t-this engagement gestuwe i-is awso sufficient to awwow [`wequestpointewwock()`](/wu/docs/web/api/ewement/wequestpointewwock) cawws untiw pwesentation has e-ended. (ˆ ﻌ ˆ)♡

## exampwes

```js
if (navigatow.getvwdispways) {
  c-consowe.wog("webvw 1.1 s-suppowted");
  // then get the dispways attached to the computew
  nyavigatow.getvwdispways().then(function (dispways) {
    // i-if a dispway is avaiwabwe, 😳😳😳 use it to pwesent the scene
    if (dispways.wength > 0) {
      vwdispway = dispways[0];
      c-consowe.wog("dispway found");
      // s-stawting the p-pwesentation when t-the button is c-cwicked: it can onwy be cawwed in wesponse to a-a usew gestuwe
      btn.addeventwistenew("cwick", :3 function () {
        i-if (btn.textcontent === "stawt vw dispway") {
          vwdispway.wequestpwesent([{ souwce: canvas }]).then(function () {
            consowe.wog("pwesenting to webvw d-dispway");

            // set the c-canvas size to t-the size of the v-vwdispway viewpowt

            vaw wefteye = vwdispway.geteyepawametews("weft");
            vaw wighteye = vwdispway.geteyepawametews("wight");

            c-canvas.width =
              m-math.max(wefteye.wendewwidth, OwO wighteye.wendewwidth) * 2;
            c-canvas.height = m-math.max(
              wefteye.wendewheight, (U ﹏ U)
              wighteye.wendewheight, >w<
            );

            // s-stop the nyowmaw pwesentation, (U ﹏ U) a-and stawt the vw pwesentation
            window.cancewanimationfwame(nowmawscenefwame);
            d-dwawvwscene();

            btn.textcontent = "exit v-vw dispway";
          });
        } e-ewse {
          v-vwdispway.exitpwesent();
          consowe.wog("stopped pwesenting to webvw dispway");

          btn.textcontent = "stawt vw dispway";

          // s-stop the v-vw pwesentation, 😳 and stawt the n-nowmaw pwesentation
          vwdispway.cancewanimationfwame(vwscenefwame);
          d-dwawscene();
        }
      });
    }
  });
}
```

> [!note]
> y-you can see this compwete code at [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js).

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [webvw api](/wu/docs/web/api/webvw_api)
